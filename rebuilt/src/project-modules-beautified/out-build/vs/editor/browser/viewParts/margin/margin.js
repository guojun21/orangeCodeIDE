"use strict";

// Module: out-build/vs/editor/browser/viewParts/margin/margin.js
// Offset: 1670283 (bundle byte offset)
// Size: 1706 bytes
VcA();
sI();
j$();
GTc = class Dad extends yW {
  static {
    this.CLASS_NAME = "glyph-margin";
  }
  static {
    this.OUTER_CLASS_NAME = "margin";
  }
  constructor(e) {
    super(e);
    const t = this._context.configuration.options;
    const i = t.get(151);
    this._canUseLayerHinting = !t.get(32);
    this._contentLeft = i.contentLeft;
    this._glyphMarginLeft = i.glyphMarginLeft;
    this._glyphMarginWidth = i.glyphMarginWidth;
    this._domNode = mw(document.createElement("div"));
    this._domNode.setClassName(Dad.OUTER_CLASS_NAME);
    this._domNode.setPosition("absolute");
    this._domNode.setAttribute("role", "presentation");
    this._domNode.setAttribute("aria-hidden", "true");
    this._glyphMarginBackgroundDomNode = mw(document.createElement("div"));
    this._glyphMarginBackgroundDomNode.setClassName(Dad.CLASS_NAME);
    this._domNode.appendChild(this._glyphMarginBackgroundDomNode);
  }
  dispose() {
    super.dispose();
  }
  getDomNode() {
    return this._domNode;
  }
  onConfigurationChanged(e) {
    const t = this._context.configuration.options;
    const i = t.get(151);
    this._canUseLayerHinting = !t.get(32);
    this._contentLeft = i.contentLeft;
    this._glyphMarginLeft = i.glyphMarginLeft;
    this._glyphMarginWidth = i.glyphMarginWidth;
    return true;
  }
  onScrollChanged(e) {
    return super.onScrollChanged(e) || e.scrollTopChanged;
  }
  prepareRender(e) {}
  render(e) {
    this._domNode.setLayerHinting(this._canUseLayerHinting);
    this._domNode.setContain("strict");
    const t = e.scrollTop - e.bigNumbersDelta;
    this._domNode.setTop(-t);
    const i = Math.min(e.scrollHeight, 1000000);
    this._domNode.setHeight(i);
    this._domNode.setWidth(this._contentLeft);
    this._glyphMarginBackgroundDomNode.setLeft(this._glyphMarginLeft);
    this._glyphMarginBackgroundDomNode.setWidth(this._glyphMarginWidth);
    this._glyphMarginBackgroundDomNode.setHeight(i);
  }
};
