"use strict";

// Module: out-build/vs/editor/browser/viewParts/linesDecorations/linesDecorations.js
// Offset: 1668387 (bundle byte offset)
// Size: 1820 bytes
jcA();
qTc();
FAh = class extends $Tc {
  constructor(n) {
    super();
    this._context = n;
    const t = this._context.configuration.options.get(151);
    this._decorationsLeft = t.decorationsLeft;
    this._decorationsWidth = t.decorationsWidth;
    this._renderResult = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    this._renderResult = null;
    super.dispose();
  }
  onConfigurationChanged(n) {
    const t = this._context.configuration.options.get(151);
    this._decorationsLeft = t.decorationsLeft;
    this._decorationsWidth = t.decorationsWidth;
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
      const a = o.options.linesDecorationsClassName;
      const l = o.options.zIndex;
      if (a) {
        t[i++] = new h3o(o.range.startLineNumber, o.range.endLineNumber, a, o.options.linesDecorationsTooltip ?? null, l);
      }
      const u = o.options.firstLineDecorationClassName;
      if (u) {
        t[i++] = new h3o(o.range.startLineNumber, o.range.startLineNumber, u, o.options.linesDecorationsTooltip ?? null, l);
      }
    }
    return t;
  }
  prepareRender(n) {
    const e = n.visibleRange.startLineNumber;
    const t = n.visibleRange.endLineNumber;
    const i = this._render(e, t, this._getDecorations(n));
    const r = this._decorationsLeft.toString();
    const s = this._decorationsWidth.toString();
    const o = "\" style=\"left:" + r + "px;width:" + s + "px;\"></div>";
    const a = [];
    for (let l = e; l <= t; l++) {
      const u = l - e;
      const d = i[u].getDecorations();
      let m = "";
      for (const p of d) {
        let g = "<div class=\"cldr " + p.className;
        if (p.tooltip !== null) {
          g += "\" title=\"" + p.tooltip;
        }
        g += o;
        m += g;
      }
      a[u] = m;
    }
    this._renderResult = a;
  }
  render(n, e) {
    if (this._renderResult) {
      return this._renderResult[e - n];
    } else {
      return "";
    }
  }
};
