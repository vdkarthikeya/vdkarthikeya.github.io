/* Live Training hero. A small MLP (net.js: 2 inputs, two tanh layers of 16, sigmoid output,
   binary cross-entropy, Adam) trains in the browser on two interleaved spirals.
   The field canvas shows the model's probability as a soft region fill, contours of equal
   confidence, and the p = 0.5 decision boundary. The dots canvas shows the training points:
   class A filled, class B hollow, a ring that fills with the model's confidence on that point,
   and a soft pulse on points the model still gets wrong.
   The data slowly rotates (a real distribution shift), so the model keeps re-learning. */
(function () {
  "use strict";
  var TN = window.TinyNet;
  var reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  var narrowMq = window.matchMedia ? window.matchMedia("(max-width: 760px)") : { matches: false };
  var touch = window.matchMedia ? window.matchMedia("(hover: none)").matches : false;

  var SIZES = [2, 16, 16, 1], LR = 0.022, LR_MIN = 0.008, TURNS = 1.75, NOISE = 0.03;
  var ZMAX = 12, STREAM = 0.85, SPIN = 0.028, DONE = 0.05, MAXFIT = 1600;
  var HIST = 96;

  var stage, spot, field, fctx, dots, dctx, off, octx, img, sparkPath, sparkDot, lossEl, btnA, btnB;
  var net, pts = [], seed = 0, epoch = 0, last = { loss: NaN, acc: 0 };
  var hist = [], histStride = 1, histAcc = 0, histN = 0;
  var W = 0, H = 0, dpr = 1, GX = 0, GY = 0, cell = 8, zs, fall, cx = 0, cy = 0, unit = 1;
  var col = {}, visible = true, raf = 0, t0 = 0, now = 0, prev = 0, frame = 0, ema = 16, work = 6, coarsened = 0;
  var rot = 0, converged = false, cls = 0, mouse = null, stuckAt = 0;

  function el(id) { return document.getElementById(id); }
  function hex(c) {
    c = (c || "").trim();
    if (c[0] === "#") {
      var n = parseInt(c.length === 4 ? c.replace(/#(.)(.)(.)/, "$1$1$2$2$3$3").slice(1) : c.slice(1), 16);
      return [n >> 16 & 255, n >> 8 & 255, n & 255];
    }
    var m = c.match(/[\d.]+/g) || [0, 0, 0]; return [+m[0], +m[1], +m[2]];
  }
  function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (a < 0 ? 0 : a > 1 ? 1 : a).toFixed(3) + ")"; }
  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    ["--viz-a", "--viz-b", "--hot", "--ink", "--bg"].forEach(function (k) { col[k] = hex(cs.getPropertyValue(k)); });
    col.fill = parseFloat(cs.getPropertyValue("--viz-fill")) || 0.2;
    col.line = parseFloat(cs.getPropertyValue("--viz-line")) || 0.16;
    col.glow = parseFloat(cs.getPropertyValue("--viz-glow")) || 0.1;
  }

  /* ---------- data and model ---------- */
  function perClass() { return narrowMq.matches ? 80 : 110; }
  function fresh() {
    seed = (Math.random() * 1e9) | 0;
    var per = perClass();
    pts = TN.spirals(seed, per, TURNS, NOISE).map(function (p, k) {
      var tt = ((k % per) + 0.5) / per;
      return { bx: p.x, by: p.y, x: p.x, y: p.y, c: p.c, d: tt * STREAM, ph: Math.random() * 6.283, conf: 0, u: 0 };
    });
    rot = 0; reinit();
    t0 = now || performance.now();
  }
  function reinit() {
    net = new TN.Net(SIZES, seed ^ 0x5bd1e995 ^ ((Math.random() * 1e6) | 0));
    epoch = 0; last = { loss: NaN, acc: 0 }; converged = false; stuckAt = 0;
    hist = []; histStride = 1; histAcc = 0; histN = 0;
  }
  function placePoints() {
    var c = Math.cos(rot), s = Math.sin(rot);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      p.x = p.bx * c - p.by * s; p.y = p.bx * s + p.by * c;
    }
  }
  /* Learning rate decays once the model has fit, so the boundary settles instead of jittering. */
  function lr() { return converged ? LR_MIN : Math.max(LR_MIN, LR / (1 + epoch / 1800)); }
  function record(loss) {
    histAcc += loss; histN++;
    if (histN < histStride) return;
    hist.push(histAcc / histN); histAcc = 0; histN = 0;
    if (hist.length >= HIST * 2) {
      var h = [];
      for (var i = 0; i + 1 < hist.length; i += 2) h.push((hist[i] + hist[i + 1]) / 2);
      hist = h; histStride *= 2;
    }
  }
  function train(n) {
    for (var i = 0; i < n; i++) {
      last = net.step(pts, lr()); epoch++; record(last.loss);
    }
    if (!converged && last.loss < DONE) converged = true;
    else if (converged && last.loss > DONE * 3) converged = false;
    /* A rare bad initialization can stall; start the weights over rather than wait. */
    if (!converged && epoch - stuckAt > 1600 && last.loss > 0.3) { stuckAt = epoch; reinit(); }
  }
  function stepsThisFrame() {
    if (converged) return 1;
    return epoch < 260 ? 1 : 2;
  }

  /* ---------- geometry ---------- */
  function toData(px, py) { return [(px - cx) / unit, (cy - py) / unit]; }
  function toPx(x, y) { return [cx + x * unit, cy - y * unit]; }
  function fadeAt(r) { return r <= 1.05 ? 1 : Math.max(0.12, 1 - (r - 1.05) / 1.6); }

  function resize() {
    if (!stage) return;
    var r = stage.getBoundingClientRect(), s = spot.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, Math.round(r.width * dpr)); H = Math.max(1, Math.round(r.height * dpr));
    field.width = dots.width = W; field.height = dots.height = H;
    cx = (s.left - r.left + s.width / 2) * dpr; cy = (s.top - r.top + s.height / 2) * dpr;
    unit = Math.max(110, Math.min(s.width * (narrowMq.matches ? 0.45 : 0.5), s.height * 0.53) / 0.97) * dpr;
    var c = (narrowMq.matches ? 9 : 8) + coarsened * 2;
    cell = c;
    GX = Math.max(8, Math.ceil(r.width / c) + 1); GY = Math.max(8, Math.ceil(r.height / c) + 1);
    zs = new Float32Array(GX * GY); fall = new Float32Array(GX * GY);
    off.width = GX; off.height = GY; img = octx.createImageData(GX, GY);
    for (var j = 0; j < GY; j++) for (var i = 0; i < GX; i++) {
      var q = toData(i * c * dpr, j * c * dpr);
      fall[j * GX + i] = fadeAt(Math.sqrt(q[0] * q[0] + q[1] * q[1]));
    }
    if (net) { evalGrid(); paint(true); }
  }

  /* ---------- drawing ---------- */
  /* The same forward pass as net.js, specialized for a grid: the first layer is separable in x and y,
     so its pre-activations are a column term plus a row term. About 4x faster than calling logit per cell. */
  var colT, rowT, h1 = new Float64Array(16);
  /* tanh from a 4096-entry table with linear interpolation (max error about 1e-6), only for drawing */
  var TL = 4096, TR = 8, TABLE = new Float64Array(TL + 1);
  for (var ti = 0; ti <= TL; ti++) TABLE[ti] = Math.tanh(-TR + 2 * TR * ti / TL);
  function ftanh(x) {
    var u = (x + TR) * (TL / (2 * TR));
    if (u <= 0) return -1; if (u >= TL) return 1;
    var i = u | 0, f = u - i; return TABLE[i] + (TABLE[i + 1] - TABLE[i]) * f;
  }
  /* parity 0 or 1 evaluates only even or odd rows (the animation interlaces them across frames); none means every row */
  function evalGrid(parity) {
    var S = net.sizes, n1 = S[1], n2 = S[2], W0 = net.W[0], b0 = net.b[0], W1 = net.W[1], b1 = net.b[1], W2 = net.W[2], b2 = net.b[2][0];
    var sc = cell * dpr, i, j, a, b, k;
    if (!colT || colT.length !== GX * n1) { colT = new Float64Array(GX * n1); rowT = new Float64Array(GY * n1); }
    for (i = 0; i < GX; i++) { var x = (i * sc - cx) / unit * 1.6; for (a = 0; a < n1; a++) colT[i * n1 + a] = W0[a * 2] * x + b0[a]; }
    for (j = 0; j < GY; j++) { var y = (cy - j * sc) / unit * 1.6; for (a = 0; a < n1; a++) rowT[j * n1 + a] = W0[a * 2 + 1] * y; }
    var step = parity == null ? 1 : 2;
    for (j = parity == null ? 0 : parity; j < GY; j += step) {
      var ro = j * n1;
      for (i = 0, k = j * GX; i < GX; i++, k++) {
        var co = i * n1;
        for (a = 0; a < n1; a++) h1[a] = ftanh(colT[co + a] + rowT[ro + a]);
        var z = b2;
        for (b = 0; b < n2; b++) {
          var s = b1[b], o = b * n1;
          for (a = 0; a < n1; a++) s += W1[o + a] * h1[a];
          z += W2[b] * ftanh(s);
        }
        zs[k] = z > ZMAX ? ZMAX : z < -ZMAX ? -ZMAX : z;
      }
    }
  }

  function drawField() {
    var A = col["--viz-a"], B = col["--viz-b"], d = img.data, i, j, k;
    var sc = cell * dpr, lensR = 110 * dpr, lx = -1e9, ly = -1e9;
    if (mouse && !reduce.matches) { lx = mouse[0]; ly = mouse[1]; }
    var fillA = col.fill * 255;
    for (k = 0, j = 0; j < GY; j++) {
      for (i = 0; i < GX; i++, k++) {
        var z = zs[k], p = 1 / (1 + Math.exp(-z)), m = Math.abs(p - 0.5) * 2;
        var C = z > 0 ? B : A, o = k * 4;
        var dx = i * sc - lx, dy = j * sc - ly, lens = 1 + 1.1 * Math.exp(-(dx * dx + dy * dy) / (lensR * lensR));
        /* fine dither so the low-alpha fill never bands */
        var a = (m * 0.85 + 0.15) * fillA * fall[k] * lens + (Math.random() - 0.5) * 2;
        d[o] = C[0]; d[o + 1] = C[1]; d[o + 2] = C[2]; d[o + 3] = a < 0 ? 0 : a > 255 ? 255 : a;
      }
    }
    octx.putImageData(img, 0, 0);
    fctx.clearRect(0, 0, W, H);
    fctx.imageSmoothingEnabled = true; fctx.imageSmoothingQuality = "high";
    fctx.drawImage(off, 0, 0, GX, GY, 0, 0, GX * sc, GY * sc);

    /* marching squares on the logit grid. Level 0 is the p = 0.5 decision boundary,
       +-1.386 are p = 0.2 and 0.8, the rest are faint equal-confidence lines. */
    var levels = [0, 1.386, -1.386, 3, -3, 4.5, -4.5, 6, -6, 7.5, -7.5, 9, -9];
    var segs = levels.map(function () { return []; });
    for (j = 0; j < GY - 1; j++) {
      for (i = 0; i < GX - 1; i++) {
        k = j * GX + i;
        var a0 = zs[k], a1 = zs[k + 1], a2 = zs[k + GX + 1], a3 = zs[k + GX];
        var lo = Math.min(a0, a1, a2, a3), hi = Math.max(a0, a1, a2, a3);
        for (var l = 0; l < levels.length; l++) {
          var c = levels[l];
          if (c < lo || c > hi) continue;
          var v0 = a0 - c, v1 = a1 - c, v2 = a2 - c, v3 = a3 - c, e = [];
          if ((v0 > 0) !== (v1 > 0)) e.push(i + v0 / (v0 - v1), j);
          if ((v1 > 0) !== (v2 > 0)) e.push(i + 1, j + v1 / (v1 - v2));
          if ((v3 > 0) !== (v2 > 0)) e.push(i + v3 / (v3 - v2), j + 1);
          if ((v0 > 0) !== (v3 > 0)) e.push(i, j + v0 / (v0 - v3));
          var S = segs[l];
          for (var m2 = 0; m2 + 3 < e.length; m2 += 4) S.push(e[m2], e[m2 + 1], e[m2 + 2], e[m2 + 3], fall[k]);
        }
      }
    }
    fctx.lineJoin = "round"; fctx.lineCap = "round";
    function stroke(S, color, alpha, width, far) {
      if (!S.length) return;
      fctx.lineWidth = width * dpr;
      /* two alpha bands so lines thin out with distance from the data instead of ending abruptly */
      for (var b = 0; b < 3; b++) {
        var lo2 = b === 0 ? 0.7 : b === 1 ? 0.35 : 0, hi2 = b === 0 ? 1.01 : b === 1 ? 0.7 : 0.35;
        fctx.strokeStyle = rgba(color, alpha * (b === 0 ? 1 : b === 1 ? 0.55 * (far || 1) : 0.25 * (far || 1)));
        fctx.beginPath();
        for (var z = 0; z < S.length; z += 5) {
          if (S[z + 4] < lo2 || S[z + 4] >= hi2) continue;
          fctx.moveTo(S[z] * sc, S[z + 1] * sc); fctx.lineTo(S[z + 2] * sc, S[z + 3] * sc);
        }
        fctx.stroke();
      }
    }
    for (var l2 = 3; l2 < levels.length; l2++) stroke(segs[l2], col["--ink"], col.line * (1 - Math.abs(levels[l2]) / 14), 1);
    stroke(segs[1], col["--hot"], col.line * 1.6, 1);
    stroke(segs[2], col["--hot"], col.line * 1.6, 1);
    stroke(segs[0], col["--hot"], col.glow * 0.45, 14, 0.4);
    stroke(segs[0], col["--hot"], col.glow, 5, 0.4);
    stroke(segs[0], col["--hot"], 0.95, 1.6, 0.6);
  }

  function confidences() {
    for (var n = 0; n < pts.length; n++) {
      var p = pts[n], pr = net.forward(p.x, p.y);
      p.conf = (p.c ? pr - 0.5 : 0.5 - pr) * 2;
    }
  }

  function drawDots(age) {
    dctx.clearRect(0, 0, W, H);
    var A = col["--viz-a"], B = col["--viz-b"], HOT = col["--hot"], INK = col["--ink"];
    var r0 = 2.2 * dpr, ring = 4.6 * dpr, tsec = (now - t0) / 1000, n, p, xy, s;
    var still = age == null;
    /* confidence rings: a thin arc whose sweep is the model's confidence on that point */
    dctx.lineWidth = 0.8 * dpr; dctx.strokeStyle = rgba(INK, 0.2); dctx.beginPath();
    for (n = 0; n < pts.length; n++) {
      p = pts[n]; s = still ? 1 : grow(p, age);
      if (s <= 0 || p.conf <= 0.02) continue;
      xy = toPx(p.x, p.y);
      dctx.moveTo(xy[0], xy[1] - ring);
      dctx.arc(xy[0], xy[1], ring, -Math.PI / 2, -Math.PI / 2 + p.conf * 6.2832);
    }
    dctx.stroke();
    /* misclassified points pulse until the model learns them */
    if (epoch > 0) {
      for (n = 0; n < pts.length; n++) {
        p = pts[n];
        if (p.conf >= 0) continue;
        xy = toPx(p.x, p.y);
        var ph = still ? 0.5 : (Math.sin(tsec * 3.2 + p.ph) + 1) / 2;
        dctx.lineWidth = 1.1 * dpr; dctx.strokeStyle = rgba(HOT, 0.25 + 0.55 * (1 - ph));
        dctx.beginPath(); dctx.arc(xy[0], xy[1], ring + (1 + 3.5 * ph) * dpr, 0, 6.2832); dctx.stroke();
      }
    }
    /* class A: filled */
    dctx.fillStyle = rgba(A, 1); dctx.beginPath();
    for (n = 0; n < pts.length; n++) {
      p = pts[n]; if (p.c !== 0) continue;
      s = still ? 1 : grow(p, age); if (s <= 0) continue;
      xy = toPx(p.x, p.y); var ra = r0 * s * (p.u ? 1.6 : 1);
      dctx.moveTo(xy[0] + ra, xy[1]); dctx.arc(xy[0], xy[1], ra, 0, 6.2832);
    }
    dctx.fill();
    /* class B: hollow, so the two classes differ by shape as well as color */
    dctx.lineWidth = 1.25 * dpr; dctx.strokeStyle = rgba(B, 1); dctx.beginPath();
    for (n = 0; n < pts.length; n++) {
      p = pts[n]; if (p.c !== 1) continue;
      s = still ? 1 : grow(p, age); if (s <= 0) continue;
      xy = toPx(p.x, p.y); var rb = (r0 + 0.2 * dpr) * s * (p.u ? 1.6 : 1);
      dctx.moveTo(xy[0] + rb, xy[1]); dctx.arc(xy[0], xy[1], rb, 0, 6.2832);
    }
    dctx.stroke();
  }
  function grow(p, age) {
    if (p.u) return 1;
    var g = (age - p.d) / 0.22;
    return g <= 0 ? 0 : g >= 1 ? 1 : 1 - (1 - g) * (1 - g);
  }

  /* The sparkline and loss readout are optional markup; the hero now ships without them, so skip unless all three exist */
  function drawSpark() {
    if (!sparkPath || !sparkDot || !lossEl) return;
    if (!hist.length) { sparkPath.setAttribute("d", ""); sparkDot.setAttribute("r", 0); lossEl.textContent = "0.000"; return; }
    var w = 96, h = 18, lo = Math.log(0.01), hi = Math.log(1), dpath = "";
    var n = Math.max(hist.length, HIST);
    for (var i = 0; i < hist.length; i++) {
      var x = (i / (n - 1)) * w, v = Math.log(Math.max(0.01, Math.min(1, hist[i])));
      var y = 1 + (1 - (v - lo) / (hi - lo)) * (h - 2);
      dpath += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
    }
    sparkPath.setAttribute("d", dpath);
    var m = dpath.match(/([\d.]+) ([\d.]+)$/);
    if (m) { sparkDot.setAttribute("cx", m[1]); sparkDot.setAttribute("cy", m[2]); sparkDot.setAttribute("r", 1.8); }
    lossEl.textContent = isNaN(last.loss) ? "0.000" : last.loss.toFixed(3);
  }

  function paint(still) {
    drawField();
    confidences();
    drawDots(still ? null : (now - t0) / 1000);
    drawSpark();
  }

  /* ---------- loop ---------- */
  function tick(ts) {
    raf = 0;
    if (!visible || reduce.matches) return;
    now = ts; frame++;
    var w0 = performance.now();
    var dt = prev ? Math.min(0.05, (ts - prev) / 1000) : 0.016;
    if (prev) ema = ema * 0.94 + (ts - prev) * 0.06;
    prev = ts;
    var age = (ts - t0) / 1000;
    if (age > STREAM + 0.15) {
      rot += SPIN * dt; placePoints();
      train(stepsThisFrame());
    }
    evalGrid(frame & 1);
    drawField(); confidences(); drawDots(age);
    if (frame % 4 === 0) drawSpark();
    work = work * 0.9 + (performance.now() - w0) * 0.1;
    /* if the work per frame runs long, coarsen the grid (at most twice) */
    if (frame > 60 && work > 14 && coarsened < 2) { coarsened++; work = 6; resize(); }
    loop();
  }
  function loop() { if (!raf && visible && !reduce.matches && net) raf = requestAnimationFrame(tick); }
  function settle() {
    placePoints();
    var guard = 0;
    /* train to a crisp fit offscreen (a few hundred ms at most), then paint one still frame */
    while (guard++ < MAXFIT && !(last.loss < 0.015 && last.acc === 1)) train(1);
    now = t0 = performance.now();
    evalGrid(); paint(true);
  }

  /* ---------- interaction ---------- */
  function stagePoint(ev) {
    var r = stage.getBoundingClientRect();
    return [(ev.clientX - r.left) * dpr, (ev.clientY - r.top) * dpr];
  }
  function onClick(ev) {
    if (ev.target.closest("a, button, .hero-copy, .lab")) return;
    var q = stagePoint(ev), d = toData(q[0], q[1]);
    if (Math.sqrt(d[0] * d[0] + d[1] * d[1]) > 1.5) return;
    var c = Math.cos(-rot), s = Math.sin(-rot);
    var np = { bx: d[0] * c - d[1] * s, by: d[0] * s + d[1] * c, x: d[0], y: d[1], c: cls, d: 0, ph: Math.random() * 6.283, conf: 0, u: 1 };
    pts.push(np);
    var users = pts.filter(function (p) { return p.u; });
    if (users.length > 40) pts.splice(pts.indexOf(users[0]), 1);
    converged = false;
    if (reduce.matches) settle(); else loop();
  }
  function onMove(ev) { mouse = ev.target.closest(".hero-copy, .lab, a, button") ? null : stagePoint(ev); }
  function setClass(c) {
    cls = c;
    btnA.setAttribute("aria-pressed", String(c === 0)); btnB.setAttribute("aria-pressed", String(c === 1));
  }
  function reshuffle() {
    fresh();
    if (reduce.matches) settle(); else { dctx.clearRect(0, 0, W, H); loop(); }
  }

  function init() {
    stage = el("stage"); spot = el("spot"); field = el("heroField"); dots = el("heroDots");
    if (!stage || !field || !dots || !TN || !field.getContext) return;
    fctx = field.getContext("2d"); dctx = dots.getContext("2d");
    off = document.createElement("canvas"); octx = off.getContext("2d");
    sparkPath = el("sparkPath"); sparkDot = el("sparkDot"); lossEl = el("lossVal");
    btnA = el("clsA"); btnB = el("clsB");
    if (btnA && btnB) {
      btnA.addEventListener("click", function () { setClass(0); });
      btnB.addEventListener("click", function () { setClass(1); });
    }
    var rs = el("reshuffle"); if (rs) rs.addEventListener("click", reshuffle);
    stage.addEventListener("click", onClick);
    if (!touch) {
      stage.addEventListener("mousemove", onMove);
      stage.addEventListener("mouseleave", function () { mouse = null; });
    }
    document.addEventListener("keydown", function (e) {
      if ((e.key === "r" || e.key === "R") && !e.metaKey && !e.ctrlKey && !e.altKey &&
          !/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && window.scrollY < stage.offsetHeight) reshuffle();
    });

    readColors(); fresh();
    new MutationObserver(function () { readColors(); if (reduce.matches || !raf) paint(true); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    var ro = "ResizeObserver" in window ? new ResizeObserver(function () { resize(); }) : null;
    if (ro) ro.observe(stage); else window.addEventListener("resize", resize);
    resize();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting && !document.hidden; prev = 0; loop(); }, { threshold: 0.01 }).observe(stage);
    }
    document.addEventListener("visibilitychange", function () { visible = !document.hidden; prev = 0; loop(); });
    function mode() { if (reduce.matches) settle(); else { t0 = performance.now() - (STREAM + 0.2) * 1000; loop(); } }
    if (reduce.addEventListener) reduce.addEventListener("change", mode);
    if (narrowMq.addEventListener) narrowMq.addEventListener("change", function () { reshuffle(); });
    if (reduce.matches) settle(); else { t0 = performance.now(); loop(); }
  }

  function stats() {
    return { epoch: epoch, loss: last.loss, acc: last.acc, converged: converged, points: pts.length, cell: cell,
      grid: GX + "x" + GY, frameMs: +ema.toFixed(1), workMs: +work.toFixed(1), running: !!raf, rot: +rot.toFixed(3), seed: seed };
  }
  function bench() {
    function t(f) { var a = performance.now(); for (var i = 0; i < 10; i++) f(); return +((performance.now() - a) / 10).toFixed(2); }
    return { evalGrid: t(evalGrid), drawField: t(drawField), confidences: t(confidences), drawDots: t(function () { drawDots(9); }), train4: t(function () { train(4); }) };
  }
  /* debugging: train n epochs at once and repaint */
  function advance(n) { placePoints(); train(n || 1); evalGrid(); paint(true); return stats(); }
  window.Hero = { init: init, stats: stats, reshuffle: reshuffle, bench: bench, advance: advance };
})();
