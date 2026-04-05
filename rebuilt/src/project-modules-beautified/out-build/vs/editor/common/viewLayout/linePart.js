"use strict";

// Module: out-build/vs/editor/common/viewLayout/linePart.js
// Offset: 1482187 (bundle byte offset)
// Size: 8069 bytes
(function (n) {
  n[n.IS_WHITESPACE = 1] = "IS_WHITESPACE";
  n[n.PSEUDO_BEFORE = 2] = "PSEUDO_BEFORE";
  n[n.PSEUDO_AFTER = 4] = "PSEUDO_AFTER";
  n[n.IS_WHITESPACE_MASK = 1] = "IS_WHITESPACE_MASK";
  n[n.PSEUDO_BEFORE_MASK = 2] = "PSEUDO_BEFORE_MASK";
  n[n.PSEUDO_AFTER_MASK = 4] = "PSEUDO_AFTER_MASK";
})(Svh ||= {});
A3 = class {
  constructor(n, e, t, i) {
    this.endIndex = n;
    this.type = e;
    this.metadata = t;
    this.containsRTL = i;
    this._linePartBrand = undefined;
  }
  isWhitespace() {
    return !!(this.metadata & 1);
  }
  isPseudoAfter() {
    return !!(this.metadata & 4);
  }
};
