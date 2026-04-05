"use strict";

// Module: out-build/vs/editor/browser/gpu/atlas/textureAtlasPage.js
// Offset: 1772201 (bundle byte offset)
// Size: 1639 bytes
rt();
cu();
jr();
Io();
ElA();
xlA();
rve = class extends at {
  static {
    cIc = this;
  }
  get version() {
    return this._version;
  }
  static {
    this.maximumGlyphCount = 5000;
  }
  get usedArea() {
    return this._usedArea;
  }
  get source() {
    return this._canvas;
  }
  get glyphs() {
    return this._glyphInOrderSet.values();
  }
  constructor(e, t, i, r, s) {
    super();
    this._logService = r;
    this._version = 0;
    this._usedArea = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    this._glyphMap = new H2n();
    this._glyphInOrderSet = new Set();
    this._canvas = new OffscreenCanvas(t, t);
    this._colorMap = s.getColorTheme().tokenColorMap;
    switch (i) {
      case "shelf":
        this._allocator = new kyh(this._canvas, e);
        break;
      case "slab":
        this._allocator = new xyh(this._canvas, e);
        break;
      default:
        this._allocator = i(this._canvas, e);
        break;
    }
    this._register($i(() => {
      this._canvas.width = 1;
      this._canvas.height = 1;
    }));
  }
  getGlyph(e, t, i, r) {
    return this._glyphMap.get(t, i, r, e.cacheKey) ?? this._createGlyph(e, t, i, r);
  }
  _createGlyph(e, t, i, r) {
    if (this._glyphInOrderSet.size >= cIc.maximumGlyphCount) {
      return;
    }
    const s = e.rasterizeGlyph(t, i, r, this._colorMap);
    const o = this._allocator.allocate(s);
    if (o !== undefined) {
      this._glyphMap.set(o, t, i, r, e.cacheKey);
      this._glyphInOrderSet.add(o);
      this._version++;
      this._usedArea.right = Math.max(this._usedArea.right, o.x + o.w - 1);
      this._usedArea.bottom = Math.max(this._usedArea.bottom, o.y + o.h - 1);
      if (this._logService.getLevel() === Ju.Trace) {
        this._logService.trace("New glyph", {
          chars: t,
          tokenMetadata: i,
          decorationStyleSetId: r,
          rasterizedGlyph: s,
          glyph: o
        });
      }
      return o;
    }
  }
  getUsagePreview() {
    return this._allocator.getUsagePreview();
  }
  getStats() {
    return this._allocator.getStats();
  }
};
rve = cIc = __decorate([__param(3, Rr), __param(4, bo)], rve);
