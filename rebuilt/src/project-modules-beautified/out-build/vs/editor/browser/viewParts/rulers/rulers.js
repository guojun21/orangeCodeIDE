"use strict";

// Module: out-build/vs/editor/browser/viewParts/rulers/rulers.js
// Offset: 1726671 (bundle byte offset)
// Size: 1490 bytes
alA();
sI();
j$();
cyh = class extends yW {
  constructor(n) {
    super(n);
    this.domNode = mw(document.createElement("div"));
    this.domNode.setAttribute("role", "presentation");
    this.domNode.setAttribute("aria-hidden", "true");
    this.domNode.setClassName("view-rulers");
    this._renderedRulers = [];
    const e = this._context.configuration.options;
    this._rulers = e.get(107);
    this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth;
  }
  dispose() {
    super.dispose();
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    this._rulers = e.get(107);
    this._typicalHalfwidthCharacterWidth = e.get(52).typicalHalfwidthCharacterWidth;
    return true;
  }
  onScrollChanged(n) {
    return n.scrollHeightChanged;
  }
  prepareRender(n) {}
  _ensureRulersCount() {
    const n = this._renderedRulers.length;
    const e = this._rulers.length;
    if (n === e) {
      return;
    }
    if (n < e) {
      const {
        tabSize: i
      } = this._context.viewModel.model.getOptions();
      const r = i;
      let s = e - n;
      while (s > 0) {
        const o = mw(document.createElement("div"));
        o.setClassName("view-ruler");
        o.setWidth(r);
        this.domNode.appendChild(o);
        this._renderedRulers.push(o);
        s--;
      }
      return;
    }
    let t = n - e;
    while (t > 0) {
      const i = this._renderedRulers.pop();
      this.domNode.removeChild(i);
      t--;
    }
  }
  render(n) {
    this._ensureRulersCount();
    for (let e = 0, t = this._rulers.length; e < t; e++) {
      const i = this._renderedRulers[e];
      const r = this._rulers[e];
      i.setBoxShadow(r.color ? `1px 0 0 0 ${r.color} inset` : "");
      i.setHeight(Math.min(n.scrollHeight, 1000000));
      i.setLeft(r.column * this._typicalHalfwidthCharacterWidth);
    }
  }
};
