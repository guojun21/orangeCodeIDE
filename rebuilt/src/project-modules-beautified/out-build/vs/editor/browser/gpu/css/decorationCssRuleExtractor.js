"use strict";

// Module: out-build/vs/editor/browser/gpu/css/decorationCssRuleExtractor.js
// Offset: 1787500 (bundle byte offset)
// Size: 986 bytes
ri();
rt();
PlA();
Lyh = class extends at {
  constructor() {
    super();
    this._ruleCache = new Map();
    this._container = Ct("div.monaco-decoration-css-rule-extractor");
    this._dummyElement = Ct("span");
    this._container.appendChild(this._dummyElement);
    this._register($i(() => this._container.remove()));
  }
  getStyleRules(n, e) {
    const t = this._ruleCache.get(e);
    if (t) {
      return t;
    }
    this._dummyElement.className = e;
    n.appendChild(this._container);
    const i = this._getStyleRules(e);
    this._ruleCache.set(e, i);
    n.removeChild(this._container);
    return i;
  }
  _getStyleRules(n) {
    const e = [];
    const i = [...Jy().styleSheets];
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      for (const o of s.cssRules) {
        if (o instanceof CSSImportRule) {
          if (o.styleSheet) {
            i.push(o.styleSheet);
          }
        } else if (o instanceof CSSStyleRule) {
          const a = `.${n}`;
          const l = o.selectorText.indexOf(a);
          if (l !== -1) {
            const u = l + a.length;
            if (o.selectorText.length === u || o.selectorText.substring(u, u + 1).match(/[ :]/)) {
              e.push(o);
            }
          }
        }
      }
    }
    return e;
  }
};
