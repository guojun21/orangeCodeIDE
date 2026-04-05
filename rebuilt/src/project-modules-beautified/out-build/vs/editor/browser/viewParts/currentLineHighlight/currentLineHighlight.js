"use strict";

// Module: out-build/vs/editor/browser/viewParts/currentLineHighlight/currentLineHighlight.js
// Offset: 1623946 (bundle byte offset)
// Size: 4392 bytes
LcA();
WVe();
az();
Vs();
Io();
db();
qI();
tl();
UTc = class extends p9e {
  constructor(n) {
    super();
    this._context = n;
    const e = this._context.configuration.options;
    const t = e.get(151);
    this._renderLineHighlight = e.get(101);
    this._renderLineHighlightOnlyWhenFocus = e.get(102);
    this._wordWrap = t.isViewportWrapping;
    this._contentLeft = t.contentLeft;
    this._contentWidth = t.contentWidth;
    this._selectionIsEmpty = true;
    this._focused = false;
    this._cursorLineNumbers = [1];
    this._selections = [new Vl(1, 1, 1, 1)];
    this._renderData = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    super.dispose();
  }
  _readFromSelections() {
    let n = false;
    const e = new Set();
    for (const r of this._selections) {
      e.add(r.positionLineNumber);
    }
    const t = Array.from(e);
    t.sort((r, s) => r - s);
    if (!cg(this._cursorLineNumbers, t)) {
      this._cursorLineNumbers = t;
      n = true;
    }
    const i = this._selections.every(r => r.isEmpty());
    if (this._selectionIsEmpty !== i) {
      this._selectionIsEmpty = i;
      n = true;
    }
    return n;
  }
  onThemeChanged(n) {
    return this._readFromSelections();
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    const t = e.get(151);
    this._renderLineHighlight = e.get(101);
    this._renderLineHighlightOnlyWhenFocus = e.get(102);
    this._wordWrap = t.isViewportWrapping;
    this._contentLeft = t.contentLeft;
    this._contentWidth = t.contentWidth;
    return true;
  }
  onCursorStateChanged(n) {
    this._selections = n.selections;
    return this._readFromSelections();
  }
  onFlushed(n) {
    return true;
  }
  onLinesDeleted(n) {
    return true;
  }
  onLinesInserted(n) {
    return true;
  }
  onScrollChanged(n) {
    return n.scrollWidthChanged || n.scrollTopChanged;
  }
  onZonesChanged(n) {
    return true;
  }
  onFocusChanged(n) {
    if (this._renderLineHighlightOnlyWhenFocus) {
      this._focused = n.isFocused;
      return true;
    } else {
      return false;
    }
  }
  prepareRender(n) {
    if (!this._shouldRenderThis()) {
      this._renderData = null;
      return;
    }
    const e = n.visibleRange.startLineNumber;
    const t = n.visibleRange.endLineNumber;
    const i = [];
    for (let s = e; s <= t; s++) {
      const o = s - e;
      i[o] = "";
    }
    if (this._wordWrap) {
      const s = this._renderOne(n, false);
      for (const o of this._cursorLineNumbers) {
        const a = this._context.viewModel.coordinatesConverter;
        const l = a.convertViewPositionToModelPosition(new ar(o, 1)).lineNumber;
        const u = a.convertModelPositionToViewPosition(new ar(l, 1)).lineNumber;
        const d = a.convertModelPositionToViewPosition(new ar(l, this._context.viewModel.model.getLineMaxColumn(l))).lineNumber;
        const m = Math.max(u, e);
        const p = Math.min(d, t);
        for (let g = m; g <= p; g++) {
          const f = g - e;
          i[f] = s;
        }
      }
    }
    const r = this._renderOne(n, true);
    for (const s of this._cursorLineNumbers) {
      if (s < e || s > t) {
        continue;
      }
      const o = s - e;
      i[o] = r;
    }
    this._renderData = i;
  }
  render(n, e) {
    if (!this._renderData) {
      return "";
    }
    const t = e - n;
    if (t >= this._renderData.length) {
      return "";
    } else {
      return this._renderData[t];
    }
  }
  _shouldRenderInMargin() {
    return (this._renderLineHighlight === "gutter" || this._renderLineHighlight === "all") && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
  }
  _shouldRenderInContent() {
    return (this._renderLineHighlight === "line" || this._renderLineHighlight === "all") && this._selectionIsEmpty && (!this._renderLineHighlightOnlyWhenFocus || this._focused);
  }
};
yAh = class extends UTc {
  _renderOne(n, e) {
    return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-both" : "") + (e ? " current-line-exact" : "")}" style="width:${Math.max(n.scrollWidth, this._contentWidth)}px;"></div>`;
  }
  _shouldRenderThis() {
    return this._shouldRenderInContent();
  }
  _shouldRenderOther() {
    return this._shouldRenderInMargin();
  }
};
wAh = class extends UTc {
  _renderOne(n, e) {
    return `<div class="${"current-line" + (this._shouldRenderInMargin() ? " current-line-margin" : "") + (this._shouldRenderOther() ? " current-line-margin-both" : "") + (this._shouldRenderInMargin() && e ? " current-line-exact-margin" : "")}" style="width:${this._contentLeft}px"></div>`;
  }
  _shouldRenderThis() {
    return true;
  }
  _shouldRenderOther() {
    return this._shouldRenderInContent();
  }
};
HI((n, e) => {
  const t = n.getColor(Z4o);
  if (t) {
    e.addRule(`.monaco-editor .view-overlays .current-line { background-color: ${t}; }`);
    e.addRule(`.monaco-editor .margin-view-overlays .current-line-margin { background-color: ${t}; border: none; }`);
  }
  if (!t || t.isTransparent() || n.defines(uEc)) {
    const i = n.getColor(uEc);
    if (i) {
      e.addRule(`.monaco-editor .view-overlays .current-line-exact { border: 2px solid ${i}; }`);
      e.addRule(`.monaco-editor .margin-view-overlays .current-line-exact-margin { border: 2px solid ${i}; }`);
      if (Poe(n.type)) {
        e.addRule(".monaco-editor .view-overlays .current-line-exact { border-width: 1px; }");
        e.addRule(".monaco-editor .margin-view-overlays .current-line-exact-margin { border-width: 1px; }");
      }
    }
  }
});
