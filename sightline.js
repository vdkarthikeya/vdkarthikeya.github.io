/* SightLine card demo: a looping schematic of how a day of footage becomes a recap.
   Stage 1: 5-second windows on a day timeline. Stage 2: windows lift into an embedding scatter (clusters of similar windows).
   Stage 3: each window becomes a stacked bar of three weighted percentile ranks. Stage 4: the top windows, kept varied, fill a 12-slot recap.
   The data is a seeded illustration of the mechanism, not real footage. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var N = 48, VW = 640, VH = 392, X0 = 20, X1 = 620, BASE = 310, HM = 190, SLOTS = 12;
  var WEIGHTS = [0.5, 0.2, 0.3];
  var LABELS = [
    "One day of footage, cut into 5-second windows",
    "CLIP ViT-B/32 embeddings, similar windows cluster",
    "Score = 0.5 prompt match + 0.2 novelty + 0.3 sharpness",
    "Top 12 windows, kept varied, in time order"
  ];

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function gauss(r) { return Math.sqrt(-2 * Math.log(r() + 1e-12)) * Math.cos(2 * Math.PI * r()); }
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(v) { return v * v * (3 - 2 * v); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* A seeded day: activity blocks share a cluster, some activities come back later in the day. */
  var W = (function () {
    var r = rng(79), blocks = [[7, 0], [5, 1], [8, 2], [4, 1], [6, 3], [5, 0], [7, 2], [6, 4]];
    var centers = [[135, 100], [265, 196], [395, 86], [530, 140], [420, 222]];
    var base = [0.35, 0.8, 0.5, 0.9, 0.45];
    var w = [], i = 0;
    blocks.forEach(function (b) {
      for (var k = 0; k < b[0]; k++, i++) {
        var c = b[1];
        w.push({
          i: i, c: c,
          sx: centers[c][0] + gauss(r) * 24, sy: centers[c][1] + gauss(r) * 17,
          prompt: base[c] + gauss(r) * 0.16, sharp: r()
        });
      }
    });
    var mx = 0, my = 0;
    w.forEach(function (o) { mx += o.sx / N; my += o.sy / N; });
    /* novelty: distance from the day's average embedding */
    w.forEach(function (o) { o.nov = Math.sqrt((o.sx - mx) * (o.sx - mx) + (o.sy - my) * (o.sy - my)); });
    /* within-day percentile ranks, then the weighted blend */
    ["prompt", "nov", "sharp"].forEach(function (k, j) {
      var order = w.slice().sort(function (a, b) { return a[k] - b[k]; });
      order.forEach(function (o, rank) { o["r" + j] = rank / (N - 1); });
    });
    w.forEach(function (o) { o.score = WEIGHTS[0] * o.r0 + WEIGHTS[1] * o.r1 + WEIGHTS[2] * o.r2; });
    /* greedy pick: best score first, at most 3 per cluster, never next to an already picked window */
    var picked = [], per = [0, 0, 0, 0, 0];
    w.slice().sort(function (a, b) { return b.score - a.score; }).forEach(function (o) {
      if (picked.length >= SLOTS || per[o.c] >= 3) return;
      for (var q = 0; q < picked.length; q++) if (Math.abs(picked[q].i - o.i) <= 1) return;
      picked.push(o); per[o.c]++;
    });
    picked.forEach(function (o, k) { o.order = k; });
    picked.slice().sort(function (a, b) { return a.i - b.i; }).forEach(function (o, k) { o.slot = k; o.pk = true; });
    return { list: w, centers: centers };
  })();

  function X(i) { return X0 + (i + 0.5) * ((X1 - X0) / N) - 4; }
  function slotRect(k) { var sw = (X1 - X0) / SLOTS; return { x: X0 + k * sw + 3, y: 352, w: sw - 6, h: 30, rx: 4 }; }

  function svgMarkup() {
    var s = '<svg class="sl-svg" viewBox="0 0 ' + VW + ' ' + VH + '" aria-hidden="true" focusable="false">';
    /* cluster outlines for the embedding stage */
    s += '<g class="sl-ells">';
    W.centers.forEach(function (c, ci) {
      var m = W.list.filter(function (o) { return o.c === ci; }), ax = 0, ay = 0, vx = 0, vy = 0;
      m.forEach(function (o) { ax += o.sx / m.length; ay += o.sy / m.length; });
      m.forEach(function (o) { vx += (o.sx - ax) * (o.sx - ax) / m.length; vy += (o.sy - ay) * (o.sy - ay) / m.length; });
      s += '<ellipse class="sl-ell" cx="' + ax.toFixed(1) + '" cy="' + ay.toFixed(1) + '" rx="' + (Math.sqrt(vx) * 2 + 14).toFixed(1) + '" ry="' + (Math.sqrt(vy) * 2 + 12).toFixed(1) + '" opacity="0"/>';
    });
    s += '</g><line class="sl-base" x1="' + X0 + '" y1="' + (BASE + 1.5) + '" x2="' + X1 + '" y2="' + (BASE + 1.5) + '"/>';
    s += '<g class="sl-slots">';
    for (var k = 0; k < SLOTS; k++) { var sr = slotRect(k); s += '<rect class="sl-slot" x="' + sr.x + '" y="' + sr.y + '" width="' + sr.w + '" height="' + sr.h + '" rx="' + sr.rx + '" opacity="0"/>'; }
    s += '</g><g class="sl-segs">';
    W.list.forEach(function () { for (var j = 0; j < 3; j++) s += '<rect class="sl-seg sl-seg' + j + '" opacity="0"/>'; });
    s += '</g><g class="sl-wins">';
    W.list.forEach(function (o) { s += '<rect class="sl-w" data-i="' + o.i + '"/>'; });
    s += '</g><text class="sl-t" x="' + X0 + '" y="26"></text>';
    return s + '</svg>';
  }

  /* Media for a project card: the SVG plus the 0s / 60s ends of the recap strip. */
  function media() {
    return '<div class="sl-media">' + svgMarkup() +
      '<div class="sl-ends" aria-hidden="true"><span>0s</span><span>60s recap</span></div></div>';
  }

  var root, wins, segs, ells, slots, label, reduce, raf = 0, on = false, t0 = 0, cur = { p: 1, stage: 3, running: false };
  var LOOP = 12000, HOLD = 2200;

  function draw(p) {
    var g1 = clamp(p / 0.1), e2g = clamp((p - 0.2) / 0.2), e3g = clamp((p - 0.46) / 0.2), e4g = clamp((p - 0.72) / 0.22);
    var sp = 0.35;
    W.list.forEach(function (o, n) {
      var lag = o.i / N;
      var a = clamp(g1 * 1.5 - lag * 0.5);
      var e2 = ease(clamp(e2g * (1 + sp) - sp * lag)), e3 = ease(clamp(e3g * (1 + sp) - sp * lag));
      var e4 = o.pk ? ease(clamp(e4g * 1.6 - 0.6 * (o.order / SLOTS))) : 0;
      var top = BASE - o.score * HM;
      var x = X(o.i), y = 292, w = 8, h = 18, rx = 2;
      x = lerp(x, o.sx - 4.5, e2); y = lerp(y, o.sy - 4.5, e2); w = lerp(w, 9, e2); h = lerp(h, 9, e2); rx = lerp(rx, 4.5, e2);
      x = lerp(x, X(o.i), e3); y = lerp(y, top - 5, e3); w = lerp(w, 8, e3); h = lerp(h, 3, e3); rx = lerp(rx, 1.5, e3);
      if (o.pk) { var d = slotRect(o.slot); x = lerp(x, d.x, e4); y = lerp(y, d.y, e4); w = lerp(w, d.w, e4); h = lerp(h, d.h, e4); rx = lerp(rx, d.rx, e4); }
      var op = a * lerp(lerp(0.72, 0.85, e2), 1, e3) * (o.pk ? 1 : 1 - 0.7 * ease(e4g));
      var r = wins[n];
      r.setAttribute("x", x.toFixed(2)); r.setAttribute("y", y.toFixed(2));
      r.setAttribute("width", w.toFixed(2)); r.setAttribute("height", Math.max(0.1, h).toFixed(2)); r.setAttribute("rx", rx.toFixed(2));
      r.setAttribute("opacity", op.toFixed(3));
      r.classList.toggle("pk", !!o.pk && e4g > 0.02);
      var yb = BASE, segOp = e3 * (o.pk ? 1 : 1 - 0.6 * ease(e4g)), segPk = !!o.pk && e4g > 0.02;
      for (var j = 0; j < 3; j++) {
        var s = segs[n * 3 + j], hh = WEIGHTS[j] * o["r" + j] * HM * e3;
        yb -= hh;
        s.setAttribute("x", X(o.i).toFixed(2)); s.setAttribute("y", yb.toFixed(2));
        s.setAttribute("width", 8); s.setAttribute("height", Math.max(0, hh - (j < 2 ? 0.8 : 0)).toFixed(2));
        s.setAttribute("opacity", segOp.toFixed(3));
        s.classList.toggle("pk", segPk);
      }
    });
    var eo = (ease(e2g) * (1 - ease(e3g)) * 0.9).toFixed(3);
    for (var k = 0; k < ells.length; k++) ells[k].setAttribute("opacity", eo);
    var so = ease(clamp(e4g * 2)).toFixed(3);
    for (k = 0; k < slots.length; k++) slots[k].setAttribute("opacity", so);
    root.style.setProperty("--ends", so);
    var stage = p < 0.2 ? 0 : p < 0.46 ? 1 : p < 0.72 ? 2 : 3;
    if (stage !== cur.stage || !label.textContent) { label.textContent = LABELS[stage]; cur.stage = stage; }
    cur.p = p;
  }

  function frame(ts) {
    raf = 0;
    if (!on) return;
    var t = (ts - t0) % (LOOP + HOLD);
    draw(t > LOOP ? 1 : t / LOOP);
    raf = requestAnimationFrame(frame);
  }
  function play(v) {
    on = v && !reduce.matches && !document.hidden;
    cur.running = on;
    if (on && !raf) { t0 = performance.now() - cur.p * LOOP; if (cur.p >= 1) t0 = performance.now(); raf = requestAnimationFrame(frame); }
    if (!on && raf) { cancelAnimationFrame(raf); raf = 0; }
    if (!on && reduce.matches) draw(1);
  }

  function attach(el) {
    root = el; if (!root) return;
    wins = root.querySelectorAll(".sl-w"); segs = root.querySelectorAll(".sl-seg");
    ells = root.querySelectorAll(".sl-ell"); slots = root.querySelectorAll(".sl-slot"); label = root.querySelector(".sl-t");
    reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
    draw(1);
  }

  window.SightLine = { media: media, attach: attach, play: play, state: function () { return { p: cur.p, stage: cur.stage, running: cur.running }; }, _data: W };
})();
