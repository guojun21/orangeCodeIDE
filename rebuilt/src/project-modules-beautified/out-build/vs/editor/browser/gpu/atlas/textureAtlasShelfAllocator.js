"use strict";

// Module: out-build/vs/editor/browser/gpu/atlas/textureAtlasShelfAllocator.js
// Offset: 1764778 (bundle byte offset)
// Size: 2532 bytes
_s();
f9e();
kyh = class {
  constructor(n, e) {
    this._canvas = n;
    this._textureIndex = e;
    this._currentRow = {
      x: 0,
      y: 0,
      h: 0
    };
    this._allocatedGlyphs = new Set();
    this._nextIndex = 0;
    this._ctx = Xft(this._canvas.getContext("2d", {
      willReadFrequently: true
    }));
  }
  allocate(n) {
    const e = n.boundingBox.right - n.boundingBox.left + 1;
    const t = n.boundingBox.bottom - n.boundingBox.top + 1;
    if (e > this._canvas.width || t > this._canvas.height) {
      throw new _m("Glyph is too large for the atlas page");
    }
    if (n.boundingBox.right - n.boundingBox.left + 1 > this._canvas.width - this._currentRow.x) {
      this._currentRow.x = 0;
      this._currentRow.y += this._currentRow.h;
      this._currentRow.h = 1;
    }
    if (this._currentRow.y + n.boundingBox.bottom - n.boundingBox.top + 1 > this._canvas.height) {
      return;
    }
    this._ctx.drawImage(n.source, n.boundingBox.left, n.boundingBox.top, e, t, this._currentRow.x, this._currentRow.y, e, t);
    const i = {
      pageIndex: this._textureIndex,
      glyphIndex: this._nextIndex++,
      x: this._currentRow.x,
      y: this._currentRow.y,
      w: e,
      h: t,
      originOffsetX: n.originOffset.x,
      originOffsetY: n.originOffset.y,
      fontBoundingBoxAscent: n.fontBoundingBoxAscent,
      fontBoundingBoxDescent: n.fontBoundingBoxDescent
    };
    this._currentRow.x += e;
    this._currentRow.h = Math.max(this._currentRow.h, t);
    this._allocatedGlyphs.add(i);
    return i;
  }
  getUsagePreview() {
    const n = this._canvas.width;
    const e = this._canvas.height;
    const t = new OffscreenCanvas(n, e);
    const i = Xft(t.getContext("2d"));
    i.fillStyle = "#808080";
    i.fillRect(0, 0, n, e);
    const r = new Map();
    const s = new Map();
    for (const o of this._allocatedGlyphs) {
      r.set(o.y, Math.max(r.get(o.y) ?? 0, o.h));
      s.set(o.y, Math.max(s.get(o.y) ?? 0, o.x + o.w));
    }
    for (const o of this._allocatedGlyphs) {
      i.fillStyle = "#4040FF";
      i.fillRect(o.x, o.y, o.w, o.h);
      i.fillStyle = "#FF0000";
      i.fillRect(o.x, o.y + o.h, o.w, r.get(o.y) - o.h);
    }
    for (const [o, a] of s.entries()) {
      if (o !== this._currentRow.y) {
        i.fillStyle = "#FF0000";
        i.fillRect(a, o, n - a, r.get(o));
      }
    }
    return t.convertToBlob();
  }
  getStats() {
    const n = this._canvas.width;
    const e = this._canvas.height;
    let t = 0;
    let i = 0;
    const r = n * e;
    const s = new Map();
    const o = new Map();
    for (const a of this._allocatedGlyphs) {
      s.set(a.y, Math.max(s.get(a.y) ?? 0, a.h));
      o.set(a.y, Math.max(o.get(a.y) ?? 0, a.x + a.w));
    }
    for (const a of this._allocatedGlyphs) {
      t += a.w * a.h;
      i += a.w * (s.get(a.y) - a.h);
    }
    for (const [a, l] of o.entries()) {
      if (a !== this._currentRow.y) {
        i += (n - l) * s.get(a);
      }
    }
    return [`page${this._textureIndex}:`, `     Total: ${r} (${n}x${e})`, `      Used: ${t} (${(t / r * 100).toPrecision(2)}%)`, `    Wasted: ${i} (${(i / r * 100).toPrecision(2)}%)`, `Efficiency: ${(t / (t + i) * 100).toPrecision(2)}%`].join(`
`);
  }
};
