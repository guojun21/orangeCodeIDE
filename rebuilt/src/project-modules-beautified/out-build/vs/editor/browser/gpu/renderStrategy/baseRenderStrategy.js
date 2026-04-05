"use strict";

// Module: out-build/vs/editor/browser/gpu/renderStrategy/baseRenderStrategy.js
// Offset: 1793599 (bundle byte offset)
// Size: 331 bytes
Gft();
mIc = class extends qVe {
  get glyphRasterizer() {
    return this._glyphRasterizer.value;
  }
  constructor(n, e, t, i) {
    super();
    this._context = n;
    this._viewGpuContext = e;
    this._device = t;
    this._glyphRasterizer = i;
    this._context.addEventHandler(this);
  }
};
