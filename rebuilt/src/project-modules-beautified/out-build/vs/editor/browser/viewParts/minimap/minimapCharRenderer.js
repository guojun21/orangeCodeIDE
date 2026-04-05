"use strict";

// Module: out-build/vs/editor/browser/viewParts/minimap/minimapCharRenderer.js
// Offset: 1674048 (bundle byte offset)
// Size: 1256 bytes
JAh();
jFo();
WTc = class Bad {
  constructor(e, t) {
    this.scale = t;
    this._minimapCharRendererBrand = undefined;
    this.charDataNormal = Bad.soften(e, 12 / 15);
    this.charDataLight = Bad.soften(e, 50 / 60);
  }
  static soften(e, t) {
    const i = new Uint8ClampedArray(e.length);
    for (let r = 0, s = e.length; r < s; r++) {
      i[r] = QFo(e[r] * t);
    }
    return i;
  }
  renderChar(e, t, i, r, s, o, a, l, u, d, m) {
    const p = this.scale * 1;
    const g = this.scale * 2;
    const f = m ? 1 : g;
    if (t + p > e.width || i + f > e.height) {
      console.warn("bad render request outside image data");
      return;
    }
    const A = d ? this.charDataLight : this.charDataNormal;
    const w = HAh(r, u);
    const C = e.width * 4;
    const x = a.r;
    const I = a.g;
    const B = a.b;
    const R = s.r - x;
    const N = s.g - I;
    const M = s.b - B;
    const O = Math.max(o, l);
    const $ = e.data;
    let H = w * p * g;
    let W = i * C + t * 4;
    for (let z = 0; z < f; z++) {
      let Y = W;
      for (let j = 0; j < p; j++) {
        const X = A[H++] / 255 * (o / 255);
        $[Y++] = x + R * X;
        $[Y++] = I + N * X;
        $[Y++] = B + M * X;
        $[Y++] = O;
      }
      W += C;
    }
  }
  blockRenderChar(e, t, i, r, s, o, a, l) {
    const u = this.scale * 1;
    const d = this.scale * 2;
    const m = l ? 1 : d;
    if (t + u > e.width || i + m > e.height) {
      console.warn("bad render request outside image data");
      return;
    }
    const p = e.width * 4;
    const g = s / 255 * 0.5;
    const f = o.r;
    const A = o.g;
    const w = o.b;
    const C = r.r - f;
    const x = r.g - A;
    const I = r.b - w;
    const B = f + C * g;
    const R = A + x * g;
    const N = w + I * g;
    const M = Math.max(s, a);
    const O = e.data;
    let $ = i * p + t * 4;
    for (let H = 0; H < m; H++) {
      let W = $;
      for (let z = 0; z < u; z++) {
        O[W++] = B;
        O[W++] = R;
        O[W++] = N;
        O[W++] = M;
      }
      $ += p;
    }
  }
};
