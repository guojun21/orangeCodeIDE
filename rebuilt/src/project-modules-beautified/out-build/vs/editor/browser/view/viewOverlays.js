"use strict";

// Module: out-build/vs/editor/browser/view/viewOverlays.js
// Offset: 1606570 (bundle byte offset)
// Size: 3652 bytes
sI();
HY();
LTc();
j$();
NTc = class extends yW {
  constructor(n) {
    super(n);
    this._dynamicOverlays = [];
    this._isFocused = false;
    this._visibleLines = new PTc({
      createLine: () => new mAh(this._dynamicOverlays)
    });
    this.domNode = this._visibleLines.domNode;
    const t = this._context.configuration.options.get(52);
    bF(this.domNode, t);
    this.domNode.setClassName("view-overlays");
  }
  shouldRender() {
    if (super.shouldRender()) {
      return true;
    }
    for (let n = 0, e = this._dynamicOverlays.length; n < e; n++) {
      if (this._dynamicOverlays[n].shouldRender()) {
        return true;
      }
    }
    return false;
  }
  dispose() {
    super.dispose();
    for (let n = 0, e = this._dynamicOverlays.length; n < e; n++) {
      this._dynamicOverlays[n].dispose();
    }
    this._dynamicOverlays = [];
  }
  getDomNode() {
    return this.domNode;
  }
  addDynamicOverlay(n) {
    this._dynamicOverlays.push(n);
  }
  onConfigurationChanged(n) {
    this._visibleLines.onConfigurationChanged(n);
    const t = this._context.configuration.options.get(52);
    bF(this.domNode, t);
    return true;
  }
  onFlushed(n) {
    return this._visibleLines.onFlushed(n);
  }
  onFocusChanged(n) {
    this._isFocused = n.isFocused;
    return true;
  }
  onLinesChanged(n) {
    return this._visibleLines.onLinesChanged(n);
  }
  onLinesDeleted(n) {
    return this._visibleLines.onLinesDeleted(n);
  }
  onLinesInserted(n) {
    return this._visibleLines.onLinesInserted(n);
  }
  onScrollChanged(n) {
    return this._visibleLines.onScrollChanged(n) || true;
  }
  onTokensChanged(n) {
    return this._visibleLines.onTokensChanged(n);
  }
  onZonesChanged(n) {
    return this._visibleLines.onZonesChanged(n);
  }
  prepareRender(n) {
    const e = this._dynamicOverlays.filter(t => t.shouldRender());
    for (let t = 0, i = e.length; t < i; t++) {
      const r = e[t];
      r.prepareRender(n);
      r.onDidRender();
    }
  }
  render(n) {
    this._viewOverlaysRender(n);
    this.domNode.toggleClassName("focused", this._isFocused);
  }
  _viewOverlaysRender(n) {
    this._visibleLines.renderLines(n.viewportData);
  }
};
mAh = class {
  constructor(n) {
    this._dynamicOverlays = n;
    this._domNode = null;
    this._renderedContent = null;
  }
  getDomNode() {
    if (this._domNode) {
      return this._domNode.domNode;
    } else {
      return null;
    }
  }
  setDomNode(n) {
    this._domNode = mw(n);
  }
  onContentChanged() {}
  onTokensChanged() {}
  renderLine(n, e, t, i, r) {
    let s = "";
    for (let o = 0, a = this._dynamicOverlays.length; o < a; o++) {
      const u = this._dynamicOverlays[o].render(i.startLineNumber, n);
      s += u ?? "";
    }
    if (this._renderedContent === s) {
      return false;
    } else {
      this._renderedContent = s;
      r.appendString("<div style=\"top:");
      r.appendString(String(e));
      r.appendString("px;height:");
      r.appendString(String(t));
      r.appendString("px;\">");
      r.appendString(s);
      r.appendString("</div>");
      return true;
    }
  }
  layoutLine(n, e, t) {
    if (this._domNode) {
      this._domNode.setTop(e);
      this._domNode.setHeight(t);
    }
  }
};
pAh = class extends NTc {
  constructor(n) {
    super(n);
    const t = this._context.configuration.options.get(151);
    this._contentWidth = t.contentWidth;
    this.domNode.setHeight(0);
  }
  onConfigurationChanged(n) {
    const t = this._context.configuration.options.get(151);
    this._contentWidth = t.contentWidth;
    return super.onConfigurationChanged(n) || true;
  }
  onScrollChanged(n) {
    return super.onScrollChanged(n) || n.scrollWidthChanged;
  }
  _viewOverlaysRender(n) {
    super._viewOverlaysRender(n);
    this.domNode.setWidth(Math.max(n.scrollWidth, this._contentWidth));
  }
};
gAh = class extends NTc {
  constructor(n) {
    super(n);
    const e = this._context.configuration.options;
    const t = e.get(151);
    this._contentLeft = t.contentLeft;
    this.domNode.setClassName("margin-view-overlays");
    this.domNode.setWidth(1);
    bF(this.domNode, e.get(52));
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    bF(this.domNode, e.get(52));
    const t = e.get(151);
    this._contentLeft = t.contentLeft;
    return super.onConfigurationChanged(n) || true;
  }
  onScrollChanged(n) {
    return super.onScrollChanged(n) || n.scrollHeightChanged;
  }
  _viewOverlaysRender(n) {
    super._viewOverlaysRender(n);
    const e = Math.min(n.scrollHeight, 1000000);
    this.domNode.setHeight(e);
    this.domNode.setWidth(this._contentLeft);
  }
};
