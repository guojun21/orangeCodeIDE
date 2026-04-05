"use strict";

// Module: out-build/vs/editor/common/viewLayout/viewLinesViewportData.js
// Offset: 1757635 (bundle byte offset)
// Size: 743 bytes
ts();
byh = class {
  constructor(n, e, t, i) {
    this.selections = n;
    this.startLineNumber = e.startLineNumber | 0;
    this.endLineNumber = e.endLineNumber | 0;
    this.relativeVerticalOffset = e.relativeVerticalOffset;
    this.bigNumbersDelta = e.bigNumbersDelta | 0;
    this.lineHeight = e.lineHeight | 0;
    this.whitespaceViewportData = t;
    this._model = i;
    this.visibleRange = new Zt(e.startLineNumber, this._model.getLineMinColumn(e.startLineNumber), e.endLineNumber, this._model.getLineMaxColumn(e.endLineNumber));
  }
  getViewLineRenderingData(n) {
    return this._model.getViewportViewLineRenderingData(this.visibleRange, n);
  }
  getDecorationsInViewport() {
    return this._model.getDecorationsInViewport(this.visibleRange);
  }
};
