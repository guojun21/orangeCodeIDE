"use strict";

// Module: out-build/vs/editor/browser/viewParts/minimap/minimapCharRendererFactory.js
// Offset: 1677568 (bundle byte offset)
// Size: 1541 bytes
XcA();
JAh();
elA();
jFo();
GAh = class ZGa {
  static create(e, t) {
    if (this.lastCreated && e === this.lastCreated.scale && t === this.lastFontFamily) {
      return this.lastCreated;
    }
    let i;
    if (zTc[e]) {
      i = new WTc(zTc[e](), e);
    } else {
      i = ZGa.createFromSampleData(ZGa.createSampleData(t).data, e);
    }
    this.lastFontFamily = t;
    this.lastCreated = i;
    return i;
  }
  static createSampleData(e) {
    const t = document.createElement("canvas");
    const i = t.getContext("2d");
    t.style.height = "16px";
    t.height = 16;
    t.width = 960;
    t.style.width = "960px";
    i.fillStyle = "#ffffff";
    i.font = `bold 16px ${e}`;
    i.textBaseline = "middle";
    let r = 0;
    for (const s of qAh) {
      i.fillText(String.fromCharCode(s), r, 8);
      r += 10;
    }
    return i.getImageData(0, 0, 960, 16);
  }
  static createFromSampleData(e, t) {
    if (e.length !== 61440) {
      throw new Error("Unexpected source in MinimapCharRenderer");
    }
    const r = ZGa._downsample(e, t);
    return new WTc(r, t);
  }
  static _downsampleChar(e, t, i, r, s) {
    const o = s * 1;
    const a = s * 2;
    let l = r;
    let u = 0;
    for (let d = 0; d < a; d++) {
      const m = d / a * 16;
      const p = (d + 1) / a * 16;
      for (let g = 0; g < o; g++) {
        const f = g / o * 10;
        const A = (g + 1) / o * 10;
        let w = 0;
        let C = 0;
        for (let I = m; I < p; I++) {
          const B = t + Math.floor(I) * 3840;
          const R = 1 - (I - Math.floor(I));
          for (let N = f; N < A; N++) {
            const M = 1 - (N - Math.floor(N));
            const O = B + Math.floor(N) * 4;
            const $ = M * R;
            C += $;
            w += e[O] * e[O + 3] / 255 * $;
          }
        }
        const x = w / C;
        u = Math.max(u, x);
        i[l++] = QFo(x);
      }
    }
    return u;
  }
  static _downsample(e, t) {
    const i = t * 2 * 1 * t;
    const r = i * 96;
    const s = new Uint8ClampedArray(r);
    let o = 0;
    let a = 0;
    let l = 0;
    for (let u = 0; u < 96; u++) {
      l = Math.max(l, this._downsampleChar(e, a, s, o, t));
      o += i;
      a += 40;
    }
    if (l > 0) {
      const u = 255 / l;
      for (let d = 0; d < r; d++) {
        s[d] *= u;
      }
    }
    return s;
  }
};
