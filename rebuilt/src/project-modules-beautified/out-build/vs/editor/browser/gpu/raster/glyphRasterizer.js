"use strict";

// Module: out-build/vs/editor/browser/gpu/raster/glyphRasterizer.js
// Offset: 1759626 (bundle byte offset)
// Size: 3837 bytes
U0();
rt();
_r();
kSe();
tVe();
f9e();
wyh = 0;
l3t = class extends at {
  get cacheKey() {
    return `${this.fontFamily}_${this.fontSize}px`;
  }
  constructor(n, e, t, i) {
    super();
    this.fontSize = n;
    this.fontFamily = e;
    this.devicePixelRatio = t;
    this._decorationStyleCache = i;
    this.id = wyh++;
    this._workGlyph = {
      source: null,
      boundingBox: {
        left: 0,
        bottom: 0,
        right: 0,
        top: 0
      },
      originOffset: {
        x: 0,
        y: 0
      },
      fontBoundingBoxAscent: 0,
      fontBoundingBoxDescent: 0
    };
    this._workGlyphConfig = {
      chars: undefined,
      tokenMetadata: 0,
      decorationStyleSetId: 0
    };
    this._antiAliasing = Fs ? "greyscale" : "subpixel";
    const r = Math.ceil(this.fontSize * t);
    this._canvas = new OffscreenCanvas(r * 3, r * 3);
    this._ctx = Xft(this._canvas.getContext("2d", {
      willReadFrequently: true,
      alpha: this._antiAliasing === "greyscale"
    }));
    this._ctx.textBaseline = "top";
    this._ctx.fillStyle = "#FFFFFF";
    this._ctx.font = `${r}px ${this.fontFamily}`;
    this._textMetrics = this._ctx.measureText("A");
  }
  rasterizeGlyph(n, e, t, i) {
    if (n === "") {
      return {
        source: this._canvas,
        boundingBox: {
          top: 0,
          left: 0,
          bottom: -1,
          right: -1
        },
        originOffset: {
          x: 0,
          y: 0
        },
        fontBoundingBoxAscent: 0,
        fontBoundingBoxDescent: 0
      };
    } else if (this._workGlyphConfig.chars === n && this._workGlyphConfig.tokenMetadata === e && this._workGlyphConfig.decorationStyleSetId === t) {
      return this._workGlyph;
    } else {
      this._workGlyphConfig.chars = n;
      this._workGlyphConfig.tokenMetadata = e;
      this._workGlyphConfig.decorationStyleSetId = t;
      return this._rasterizeGlyph(n, e, t, i);
    }
  }
  _rasterizeGlyph(n, e, t, i) {
    const r = Math.ceil(this.fontSize * this.devicePixelRatio);
    const s = r * 3;
    if (this._canvas.width !== s) {
      this._canvas.width = s;
      this._canvas.height = s;
    }
    this._ctx.save();
    const o = (e & 15) / 10;
    const a = pF.getBackground(e);
    const l = i[a];
    const u = this._decorationStyleCache.getStyleSet(t);
    if (this._antiAliasing === "subpixel") {
      this._ctx.fillStyle = l;
      this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    } else {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    const d = new Gbe(200);
    const m = pF.getFontStyle(e);
    if (m & 1) {
      d.appendString("italic ");
    }
    if (u?.bold !== undefined) {
      if (u.bold) {
        d.appendString("bold ");
      }
    } else if (m & 2) {
      d.appendString("bold ");
    }
    d.appendString(`${r}px ${this.fontFamily}`);
    this._ctx.font = d.build();
    const p = r;
    const g = r;
    if (u?.color !== undefined) {
      this._ctx.fillStyle = `#${u.color.toString(16).padStart(8, "0")}`;
    } else {
      this._ctx.fillStyle = i[pF.getForeground(e)];
    }
    this._ctx.textBaseline = "top";
    if (u?.opacity !== undefined) {
      this._ctx.globalAlpha = u.opacity;
    }
    this._ctx.fillText(n, p + o, g);
    this._ctx.restore();
    const f = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
    if (this._antiAliasing === "subpixel") {
      const A = parseInt(l.substring(1, 3), 16);
      const w = parseInt(l.substring(3, 5), 16);
      const C = parseInt(l.substring(5, 7), 16);
      this._clearColor(f, A, w, C);
      this._ctx.putImageData(f, 0, 0);
    }
    this._findGlyphBoundingBox(f, this._workGlyph.boundingBox);
    this._workGlyph.source = this._canvas;
    this._workGlyph.originOffset.x = this._workGlyph.boundingBox.left - p;
    this._workGlyph.originOffset.y = this._workGlyph.boundingBox.top - g;
    this._workGlyph.fontBoundingBoxAscent = this._textMetrics.fontBoundingBoxAscent;
    this._workGlyph.fontBoundingBoxDescent = this._textMetrics.fontBoundingBoxDescent;
    return this._workGlyph;
  }
  _clearColor(n, e, t, i) {
    for (let r = 0; r < n.data.length; r += 4) {
      if (n.data[r] === e && n.data[r + 1] === t && n.data[r + 2] === i) {
        n.data[r + 3] = 0;
      }
    }
  }
  _findGlyphBoundingBox(n, e) {
    const t = this._canvas.height;
    const i = this._canvas.width;
    let r = false;
    for (let s = 0; s < t; s++) {
      for (let o = 0; o < i; o++) {
        const a = s * i * 4 + o * 4 + 3;
        if (n.data[a] !== 0) {
          e.top = s;
          r = true;
          break;
        }
      }
      if (r) {
        break;
      }
    }
    e.left = 0;
    r = false;
    for (let s = 0; s < i; s++) {
      for (let o = 0; o < t; o++) {
        const a = o * i * 4 + s * 4 + 3;
        if (n.data[a] !== 0) {
          e.left = s;
          r = true;
          break;
        }
      }
      if (r) {
        break;
      }
    }
    e.right = i;
    r = false;
    for (let s = i - 1; s >= e.left; s--) {
      for (let o = 0; o < t; o++) {
        const a = o * i * 4 + s * 4 + 3;
        if (n.data[a] !== 0) {
          e.right = s;
          r = true;
          break;
        }
      }
      if (r) {
        break;
      }
    }
    e.bottom = e.top;
    r = false;
    for (let s = t - 1; s >= 0; s--) {
      for (let o = 0; o < i; o++) {
        const a = s * i * 4 + o * 4 + 3;
        if (n.data[a] !== 0) {
          e.bottom = s;
          r = true;
          break;
        }
      }
      if (r) {
        break;
      }
    }
  }
  getTextMetrics(n) {
    return this._ctx.measureText(n);
  }
};
__decorate([cl], l3t.prototype, "cacheKey", null);
