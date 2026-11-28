/* Hero: noisy gradient descent (Langevin dynamics with momentum) on a drifting loss surface.
   Contours are drawn by a WebGL fragment shader, particles on a 2D canvas with fading trails.
   The same loss function lives in JS (for the particles) and GLSL (for the contours). */
(function () {
  "use strict";

  var K = 7;            // number of wells
  var BOWL = 0.55;      // quadratic bowl strength
  var RIP = 0.035;      // ripple amplitude
  var FX = 7.0, FY = 5.0;
  var DENS = 13.0;      // contour lines per unit of loss
  var LR = 0.00011, BETA = 0.84, NOISE = 0.0016, VMAX = 0.012;
  var ANNEAL = 90;      // noise decays with each particle's age (simulated annealing)

  var field, dots, ctx, gl, prog, uni = {};
  var W = 0, H = 0, DPR = 1, ASPECT = 1;
  var reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  var running = false, visible = true, raf = 0, t0 = 0, simT = 0, steps = 0;
  var wells = [], WX = new Float32Array(8), WY = new Float32Array(8), WI = new Float32Array(8), WD = new Float32Array(8);
  var mouse = { x: 0, y: 0, tx: 0, ty: 0, d: 0, td: 0, inv: 1 / (2 * 0.11 * 0.11), last: 0 };
  var N = 0, PX, PY, VX, VY, QX, QY, LIFE, MAXL, LOSS;
  var Lmin = -1, Lmax = 1, frameMs = [], colors = {};
  var SAMPLE = new Float32Array(256);  // random subsample of losses; its quantiles set the color buckets

  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.283185 * v); }

  function seedWells() {
    wells = [];
    for (var i = 0; i < K; i++) {
      wells.push({
        bx: rand(0.08, ASPECT - 0.08), by: rand(0.1, 0.9),
        ax: rand(0.03, 0.14), ay: rand(0.03, 0.1),
        w1: rand(0.05, 0.17), w2: rand(0.05, 0.17), ph: rand(0, 6.283),
        s: rand(0.07, 0.17), d: rand(0.45, 1.0)
      });
    }
  }
  function updateWells(t) {
    for (var i = 0; i < 8; i++) {
      if (i >= wells.length) { WD[i] = 0; WX[i] = 0; WY[i] = 0; WI[i] = 1; continue; }
      var w = wells[i];
      WX[i] = w.bx + w.ax * Math.sin(w.w1 * t + w.ph);
      WY[i] = w.by + w.ay * Math.cos(w.w2 * t + w.ph * 1.3);
      WI[i] = 1 / (2 * w.s * w.s);
      WD[i] = w.d * (0.85 + 0.15 * Math.sin(0.3 * t + w.ph));
    }
  }
  function loss(x, y) {
    var dx = x - ASPECT / 2, dy = y - 0.5;
    var L = BOWL * (dx * dx + dy * dy);
    for (var i = 0; i < K; i++) {
      var qx = x - WX[i], qy = y - WY[i];
      L -= WD[i] * Math.exp(-(qx * qx + qy * qy) * WI[i]);
    }
    var mx = x - mouse.x, my = y - mouse.y;
    L -= mouse.d * Math.exp(-(mx * mx + my * my) * mouse.inv);
    return L + RIP * Math.sin(FX * x + simT * 0.2) * Math.sin(FY * y);
  }

  function sampleRange() {
    var lo = Infinity, hi = -Infinity;
    for (var i = 0; i <= 28; i++) for (var j = 0; j <= 16; j++) {
      var L = loss(ASPECT * i / 28, j / 16);
      if (L < lo) lo = L; if (L > hi) hi = L;
    }
    for (var k = 0; k < K; k++) { var Lw = loss(WX[k], WY[k]); if (Lw < lo) lo = Lw; }
    Lmin = lo; Lmax = hi;
  }

  function spawn(i) {
    PX[i] = rand(0, ASPECT); PY[i] = rand(0, 1);
    QX[i] = PX[i]; QY[i] = PY[i];
    VX[i] = 0; VY[i] = 0; LIFE[i] = 0; MAXL[i] = rand(240, 720);
  }
  function allocate() {
    var n = Math.round(Math.min(4200, Math.max(900, (W * H) / 360)));
    N = n;
    PX = new Float32Array(n); PY = new Float32Array(n); VX = new Float32Array(n); VY = new Float32Array(n);
    QX = new Float32Array(n); QY = new Float32Array(n); LIFE = new Float32Array(n); MAXL = new Float32Array(n); LOSS = new Float32Array(n);
    for (var i = 0; i < n; i++) { spawn(i); LIFE[i] = rand(0, MAXL[i]); }
  }

  function step(dt) {
    simT += dt / 60;
    steps++;
    mouse.x += (mouse.tx - mouse.x) * 0.18; mouse.y += (mouse.ty - mouse.y) * 0.18;
    mouse.d += (mouse.td - mouse.d) * 0.05;
    if (mouse.td > 0 && performance.now() - mouse.last > 2600) mouse.td = 0;
    updateWells(simT);
    var cx = ASPECT / 2, sum = 0, sN = Math.sqrt(dt) * NOISE;
    for (var i = 0; i < N; i++) {
      var x = PX[i], y = PY[i];
      var gx = 2 * BOWL * (x - cx), gy = 2 * BOWL * (y - 0.5), L = BOWL * ((x - cx) * (x - cx) + (y - 0.5) * (y - 0.5));
      for (var k = 0; k < K; k++) {
        var qx = x - WX[k], qy = y - WY[k];
        var e = WD[k] * Math.exp(-(qx * qx + qy * qy) * WI[k]);
        L -= e; e *= 2 * WI[k]; gx += e * qx; gy += e * qy;
      }
      if (mouse.d > 0.01) {
        var mx = x - mouse.x, my = y - mouse.y;
        var em = mouse.d * Math.exp(-(mx * mx + my * my) * mouse.inv);
        L -= em; em *= 2 * mouse.inv; gx += em * mx; gy += em * my;
      }
      var sx = Math.sin(FX * x + simT * 0.2), sy = Math.sin(FY * y);
      L += RIP * sx * sy;
      gx += RIP * FX * Math.cos(FX * x + simT * 0.2) * sy;
      gy += RIP * FY * sx * Math.cos(FY * y);

      var temp = sN * (0.12 + Math.exp(-LIFE[i] / ANNEAL));
      var vx = BETA * VX[i] - LR * dt * gx + temp * gauss();
      var vy = BETA * VY[i] - LR * dt * gy + temp * gauss();
      var sp = Math.sqrt(vx * vx + vy * vy);
      if (sp > VMAX) { vx *= VMAX / sp; vy *= VMAX / sp; }
      VX[i] = vx; VY[i] = vy;
      QX[i] = x; QY[i] = y;
      PX[i] = x + vx; PY[i] = y + vy;
      LOSS[i] = L;
      sum += L;
      LIFE[i] += dt;
      if (LIFE[i] > MAXL[i] || PX[i] < -0.05 || PX[i] > ASPECT + 0.05 || PY[i] < -0.05 || PY[i] > 1.05) spawn(i);
    }
    return sum / N;
  }

  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    function v(n) { return cs.getPropertyValue(n).trim(); }
    function rgb(hex) { hex = hex.replace("#", ""); if (hex.length === 3) hex = hex.replace(/(.)/g, "$1$1"); var n = parseInt(hex, 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; }
    colors = {
      bg: rgb(v("--bg") || "#0b0c0a"), line: rgb(v("--field-line") || "#3b4036"), acc: rgb(v("--accent") || "#ff5b1f"),
      lineA: parseFloat(v("--field-alpha")) || 0.5, glow: parseFloat(v("--field-glow")) || 0.08,
      dotA: parseFloat(v("--dot-alpha")) || 1,
      hot: v("--accent") || "#ff5b1f", ink: v("--ink") || "#ecede8"
    };
  }

  function draw(fade) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0," + fade + ")";
    ctx.fillRect(0, 0, dots.width, dots.height);
    ctx.globalCompositeOperation = "source-over";
    var s = H * DPR;
    for (var q = 0; q < SAMPLE.length; q++) SAMPLE[q] = LOSS[(Math.random() * N) | 0];
    SAMPLE.sort();
    var q1 = SAMPLE[38], q2 = SAMPLE[90], q3 = SAMPLE[154];
    var buckets = [[], [], [], []];
    for (var i = 0; i < N; i++) {
      if (LIFE[i] < 1) continue;
      var L = LOSS[i];
      buckets[L <= q1 ? 0 : L <= q2 ? 1 : L <= q3 ? 2 : 3].push(i);
    }
    var da = colors.dotA;
    var style = [[colors.hot, 1, 1.7], [colors.hot, 0.5, 1.3], [colors.ink, 0.42 * da, 1.1], [colors.ink, 0.22 * da, 1]];
    for (var b = 0; b < 4; b++) {
      var list = buckets[b];
      if (!list.length) continue;
      ctx.strokeStyle = style[b][0]; ctx.globalAlpha = style[b][1]; ctx.lineWidth = style[b][2] * DPR;
      ctx.beginPath();
      for (var j = 0; j < list.length; j++) {
        var k = list[j];
        var x0 = QX[k] * s, y0 = QY[k] * s, x1 = PX[k] * s, y1 = PY[k] * s;
        if (Math.abs(x1 - x0) < 0.35 && Math.abs(y1 - y0) < 0.35) x1 += 0.35;
        ctx.moveTo(x0, y0); ctx.lineTo(x1, y1);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (gl) drawField();
  }

  var VS = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS = [
    "#extension GL_OES_standard_derivatives : enable",
    "precision highp float;",
    "uniform vec2 uRes;uniform vec4 uW[8];uniform vec3 uM;uniform float uMInv;uniform vec2 uC;uniform float uT;",
    "uniform vec3 uBg;uniform vec3 uLine;uniform vec3 uAcc;uniform vec2 uRange;uniform float uLineA;uniform float uGlow;",
    "float loss(vec2 p){vec2 d=p-uC;float L=" + BOWL.toFixed(4) + "*dot(d,d);",
    "for(int i=0;i<8;i++){vec2 q=p-uW[i].xy;L-=uW[i].w*exp(-dot(q,q)*uW[i].z);}",
    "vec2 m=p-uM.xy;L-=uM.z*exp(-dot(m,m)*uMInv);",
    "return L+" + RIP.toFixed(4) + "*sin(" + FX.toFixed(2) + "*p.x+uT*0.2)*sin(" + FY.toFixed(2) + "*p.y);}",
    "void main(){vec2 p=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uRes.y;float L=loss(p);",
    "float n=clamp((L-uRange.x)/max(uRange.y-uRange.x,1e-3),0.,1.);",
    "float f=L*" + DENS.toFixed(2) + ";float w=fwidth(f);float d=abs(fract(f+0.5)-0.5)/max(w,1e-4);",
    "float line=1.-clamp(d-0.35,0.,1.);",
    "float major=1.-step(0.5,abs(mod(floor(f+0.5),5.)));",
    "float hot=smoothstep(0.3,0.,n);",
    "float a=line*uLineA*(0.5+0.5*major)*(1.+0.8*hot);",
    "vec3 lc=mix(uLine,uAcc,hot*0.85);",
    "vec3 c=mix(uBg,uAcc,smoothstep(0.2,0.,n)*uGlow);",
    "c=mix(c,lc,clamp(a,0.,1.));gl_FragColor=vec4(c,1.);}"
  ].join("\n");

  function initGL() {
    try { gl = field.getContext("webgl", { antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: false }); } catch (e) { gl = null; }
    if (!gl || !gl.getExtension("OES_standard_derivatives")) { gl = null; return; }
    function sh(type, src) {
      var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { throw new Error(gl.getShaderInfoLog(s)); }
      return s;
    }
    try {
      prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    } catch (e) { gl = null; return; }
    gl.useProgram(prog);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    ["uRes", "uW", "uM", "uMInv", "uC", "uT", "uBg", "uLine", "uAcc", "uRange", "uLineA", "uGlow"].forEach(function (n) { uni[n] = gl.getUniformLocation(prog, n); });
  }
  var WBUF = new Float32Array(32);
  function drawField() {
    for (var i = 0; i < 8; i++) { WBUF[i * 4] = WX[i]; WBUF[i * 4 + 1] = WY[i]; WBUF[i * 4 + 2] = WI[i]; WBUF[i * 4 + 3] = i < K ? WD[i] : 0; }
    gl.viewport(0, 0, field.width, field.height);
    gl.uniform2f(uni.uRes, field.width, field.height);
    gl.uniform4fv(uni.uW, WBUF);
    gl.uniform3f(uni.uM, mouse.x, mouse.y, mouse.d);
    gl.uniform1f(uni.uMInv, mouse.inv);
    gl.uniform2f(uni.uC, ASPECT / 2, 0.5);
    gl.uniform1f(uni.uT, simT);
    gl.uniform3fv(uni.uBg, colors.bg); gl.uniform3fv(uni.uLine, colors.line); gl.uniform3fv(uni.uAcc, colors.acc);
    gl.uniform2f(uni.uRange, Lmin, Lmax);
    gl.uniform1f(uni.uLineA, colors.lineA); gl.uniform1f(uni.uGlow, colors.glow);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function resize() {
    var r = field.parentNode.getBoundingClientRect();
    var oldA = ASPECT;
    W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    ASPECT = W / H;
    [field, dots].forEach(function (c) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); });
    if (!wells.length) seedWells();
    else if (Math.abs(oldA - ASPECT) > 1e-3) wells.forEach(function (w) { w.bx *= ASPECT / oldA; });
    if (!N || Math.abs(N - (W * H) / 360) > 600) allocate();
    else for (var i = 0; i < N; i++) { PX[i] *= ASPECT / oldA; QX[i] = PX[i]; }
    updateWells(simT); sampleRange();
  }

  function renderStatic() {
    ctx.clearRect(0, 0, dots.width, dots.height);
    allocate();
    for (var i = 0; i < N; i++) LIFE[i] = rand(1, 60);
    for (var s = 0; s < 150; s++) { step(1); if (s % 2 === 0) draw(0.03); }
    sampleRange(); draw(0.0);
  }

  var lastRange = 0;
  function frame(now) {
    raf = 0;
    if (!running || !visible || document.hidden) return;
    var dt = t0 ? Math.min(2.5, (now - t0) / 16.667) : 1;
    var ms = t0 ? now - t0 : 16;
    t0 = now;
    step(dt);
    if (now - lastRange > 500) { sampleRange(); lastRange = now; }
    draw(0.075);
    frameMs.push(ms); if (frameMs.length > 90) frameMs.shift();
    if (frameMs.length === 90 && N > 1000) {
      var avg = frameMs.reduce(function (a, b) { return a + b; }, 0) / 90;
      if (avg > 26) { N = Math.round(N * 0.6); frameMs = []; }
    }
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (reduce.matches) { running = false; renderStatic(); return; }
    running = true; t0 = 0;
    if (!raf) raf = requestAnimationFrame(frame);
  }
  function wake() { if (running && !raf && visible && !document.hidden) { t0 = 0; raf = requestAnimationFrame(frame); } }

  function toSim(e) {
    var r = dots.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.height, y: (e.clientY - r.top) / r.height };
  }
  function reseed() {
    seedWells();
    for (var i = 0; i < N; i++) spawn(i);
    updateWells(simT); sampleRange();
  }

  function init() {
    field = document.getElementById("heroField");
    dots = document.getElementById("heroDots");
    if (!field || !dots) return;
    ctx = dots.getContext("2d");
    readColors();
    initGL();
    document.documentElement.classList.toggle("no-webgl", !gl);
    resize();

    var hero = field.parentNode;
    hero.addEventListener("pointermove", function (e) {
      if (reduce.matches) return;
      var p = toSim(e);
      if (mouse.td === 0) { mouse.x = p.x; mouse.y = p.y; }
      mouse.tx = p.x; mouse.ty = p.y; mouse.td = 1.15; mouse.last = performance.now();
    });
    hero.addEventListener("pointerdown", function (e) {
      if (reduce.matches || e.pointerType === "mouse") return;
      var p = toSim(e);
      mouse.x = mouse.tx = p.x; mouse.y = mouse.ty = p.y; mouse.td = 1.15; mouse.last = performance.now();
    });
    hero.addEventListener("pointerleave", function () { mouse.td = 0; });
    hero.addEventListener("click", function (e) {
      if (e.target.closest("a,button") || reduce.matches) return;
      if (e.pointerType && e.pointerType !== "mouse") return;
      reseed();
    });

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { resize(); ctx.clearRect(0, 0, dots.width, dots.height); if (!running) renderStatic(); }, 120);
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; wake(); }, { threshold: 0 }).observe(hero);
    }
    document.addEventListener("visibilitychange", wake);
    new MutationObserver(function () {
      readColors(); ctx.clearRect(0, 0, dots.width, dots.height);
      if (!running) renderStatic(); else if (gl) drawField();
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    var onReduce = function () { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; start(); };
    if (reduce.addEventListener) reduce.addEventListener("change", onReduce); else if (reduce.addListener) reduce.addListener(onReduce);
    start();
  }

  window.Hero = { stats: function () { return { particles: N, steps: steps, webgl: !!gl, running: running }; } };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
