"use strict";

// Module: out-build/vs/editor/browser/viewParts/gpuMark/gpuMark.js
// Offset: 1860969 (bundle byte offset)
// Size: 1231 bytes
WVe();
JTc();
ZlA();
rwh = class CGb extends p9e {
  static {
    this.CLASS_NAME = "gpu-mark";
  }
  constructor(e, t) {
    super();
    this._viewGpuContext = t;
    this._context = e;
    this._renderResult = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    this._renderResult = null;
    super.dispose();
  }
  onConfigurationChanged(e) {
    return true;
  }
  onCursorStateChanged(e) {
    return true;
  }
  onFlushed(e) {
    return true;
  }
  onLinesChanged(e) {
    return true;
  }
  onLinesDeleted(e) {
    return true;
  }
  onLinesInserted(e) {
    return true;
  }
  onScrollChanged(e) {
    return e.scrollTopChanged;
  }
  onZonesChanged(e) {
    return true;
  }
  onDecorationsChanged(e) {
    return true;
  }
  prepareRender(e) {
    const t = e.visibleRange.startLineNumber;
    const i = e.visibleRange.endLineNumber;
    const r = e.viewportData;
    const s = new KOn(this._context.configuration, this._context.theme.type);
    const o = [];
    for (let a = t; a <= i; a++) {
      const l = a - t;
      const u = this._viewGpuContext.canRenderDetailed(s, r, a);
      o[l] = u.length ? `<div class="${CGb.CLASS_NAME}" title="Cannot render on GPU: ${u.join(", ")}"></div>` : "";
    }
    this._renderResult = o;
  }
  render(e, t) {
    if (!this._renderResult) {
      return "";
    }
    const i = t - e;
    if (i < 0 || i >= this._renderResult.length) {
      return "";
    } else {
      return this._renderResult[i];
    }
  }
};
