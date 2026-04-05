"use strict";

// Module: out-build/vs/editor/browser/viewParts/marginDecorations/marginDecorations.js
// Offset: 1672087 (bundle byte offset)
// Size: 1187 bytes
KcA();
qTc();
UAh = class extends $Tc {
  constructor(n) {
    super();
    this._context = n;
    this._renderResult = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    this._renderResult = null;
    super.dispose();
  }
  onConfigurationChanged(n) {
    return true;
  }
  onDecorationsChanged(n) {
    return true;
  }
  onFlushed(n) {
    return true;
  }
  onLinesChanged(n) {
    return true;
  }
  onLinesDeleted(n) {
    return true;
  }
  onLinesInserted(n) {
    return true;
  }
  onScrollChanged(n) {
    return n.scrollTopChanged;
  }
  onZonesChanged(n) {
    return true;
  }
  _getDecorations(n) {
    const e = n.getDecorationsInViewport();
    const t = [];
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.options.marginClassName;
      const l = o.options.zIndex;
      if (a) {
        t[i++] = new h3o(o.range.startLineNumber, o.range.endLineNumber, a, null, l);
      }
    }
    return t;
  }
  prepareRender(n) {
    const e = n.visibleRange.startLineNumber;
    const t = n.visibleRange.endLineNumber;
    const i = this._render(e, t, this._getDecorations(n));
    const r = [];
    for (let s = e; s <= t; s++) {
      const o = s - e;
      const a = i[o].getDecorations();
      let l = "";
      for (const u of a) {
        l += "<div class=\"cmdr " + u.className + "\" style=\"\"></div>";
      }
      r[o] = l;
    }
    this._renderResult = r;
  }
  render(n, e) {
    if (this._renderResult) {
      return this._renderResult[e - n];
    } else {
      return "";
    }
  }
};
