/* A small multilayer perceptron with hand-written forward and backward passes.
   Architecture: 2 inputs, tanh hidden layers, one sigmoid output, binary cross-entropy loss, Adam. */
(function (root) {
  "use strict";

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

  /* Two interleaved spirals in [-1, 1]^2, rotated by a random angle. Label 0 or 1. */
  function spirals(seed, perClass, turns, noise) {
    var r = rng(seed), rot = r() * Math.PI * 2, pts = [];
    for (var c = 0; c < 2; c++) {
      for (var i = 0; i < perClass; i++) {
        var t = (i + 0.5) / perClass;
        var rad = 0.1 + 0.82 * t;
        var th = t * turns * Math.PI * 2 + c * Math.PI + rot;
        pts.push({ x: rad * Math.cos(th) + gauss(r) * noise, y: rad * Math.sin(th) + gauss(r) * noise, c: c });
      }
    }
    return pts;
  }

  function Net(sizes, seed) {
    var r = rng(seed);
    this.sizes = sizes;
    this.W = []; this.b = []; this.gW = []; this.gb = [];
    this.mW = []; this.vW = []; this.mb = []; this.vb = [];
    for (var l = 0; l < sizes.length - 1; l++) {
      var nin = sizes[l], nout = sizes[l + 1], lim = Math.sqrt(6 / (nin + nout));
      var W = new Float64Array(nin * nout);
      for (var k = 0; k < W.length; k++) W[k] = (r() * 2 - 1) * lim;
      this.W.push(W); this.b.push(new Float64Array(nout));
      this.gW.push(new Float64Array(nin * nout)); this.gb.push(new Float64Array(nout));
      this.mW.push(new Float64Array(nin * nout)); this.vW.push(new Float64Array(nin * nout));
      this.mb.push(new Float64Array(nout)); this.vb.push(new Float64Array(nout));
    }
    var maxw = Math.max.apply(null, sizes);
    this.a = sizes.map(function (n) { return new Float64Array(n); });
    this.d = sizes.map(function (n) { return new Float64Array(n); });
    this.tmp = new Float64Array(maxw);
    this.t = 0;
  }

  Net.prototype.forward = function (x, y) {
    var a = this.a, S = this.sizes, L = S.length - 1;
    a[0][0] = x * 1.6; a[0][1] = y * 1.6;
    for (var l = 0; l < L; l++) {
      var W = this.W[l], b = this.b[l], nin = S[l], nout = S[l + 1], src = a[l], dst = a[l + 1];
      for (var j = 0; j < nout; j++) {
        var s = b[j], o = j * nin;
        for (var i = 0; i < nin; i++) s += W[o + i] * src[i];
        if (l === L - 1) { this.z = s; dst[j] = 1 / (1 + Math.exp(-s)); } else dst[j] = Math.tanh(s);
      }
    }
    return a[L][0];
  };
  /* Pre-sigmoid output: log(p / (1 - p)). */
  Net.prototype.logit = function (x, y) { this.forward(x, y); return this.z; };

  /* One full-batch gradient step with Adam. Returns mean loss and accuracy before the step. */
  Net.prototype.step = function (pts, lr) {
    var S = this.sizes, L = S.length - 1, a = this.a, d = this.d, l, i, j, k;
    for (l = 0; l < L; l++) { this.gW[l].fill(0); this.gb[l].fill(0); }
    var loss = 0, correct = 0, n = pts.length;
    for (k = 0; k < n; k++) {
      var p = pts[k], out = this.forward(p.x, p.y), yv = p.c;
      var q = Math.min(1 - 1e-7, Math.max(1e-7, out));
      loss -= yv ? Math.log(q) : Math.log(1 - q);
      if ((out > 0.5 ? 1 : 0) === yv) correct++;
      d[L][0] = out - yv;
      for (l = L - 1; l >= 0; l--) {
        var nin = S[l], nout = S[l + 1], W = this.W[l], gW = this.gW[l], gb = this.gb[l], src = a[l], dl = d[l + 1];
        for (j = 0; j < nout; j++) {
          var g = dl[j], o = j * nin;
          gb[j] += g;
          for (i = 0; i < nin; i++) gW[o + i] += g * src[i];
        }
        if (l > 0) {
          var dn = d[l];
          for (i = 0; i < nin; i++) {
            var s = 0;
            for (j = 0; j < nout; j++) s += W[j * nin + i] * dl[j];
            dn[i] = s * (1 - src[i] * src[i]);
          }
        }
      }
    }
    this.t++;
    var b1 = 0.9, b2 = 0.999, eps = 1e-8, c1 = 1 - Math.pow(b1, this.t), c2 = 1 - Math.pow(b2, this.t);
    for (l = 0; l < L; l++) {
      adam(this.W[l], this.gW[l], this.mW[l], this.vW[l]);
      adam(this.b[l], this.gb[l], this.mb[l], this.vb[l]);
    }
    function adam(P, G, M, V) {
      for (var z = 0; z < P.length; z++) {
        var gz = G[z] / n;
        M[z] = b1 * M[z] + (1 - b1) * gz;
        V[z] = b2 * V[z] + (1 - b2) * gz * gz;
        P[z] -= lr * (M[z] / c1) / (Math.sqrt(V[z] / c2) + eps);
      }
    }
    return { loss: loss / n, acc: correct / n };
  };

  root.TinyNet = { Net: Net, spirals: spirals, rng: rng };
})(typeof window !== "undefined" ? window : globalThis);
