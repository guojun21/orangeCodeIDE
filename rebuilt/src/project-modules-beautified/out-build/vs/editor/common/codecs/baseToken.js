"use strict";

// Module: out-build/vs/editor/common/codecs/baseToken.js
// Offset: 31056998 (bundle byte offset)
// Size: 480 bytes
ts();
NU = class {
  constructor(n) {
    this._range = n;
  }
  get range() {
    return this._range;
  }
  sameRange(n) {
    return this.range.equalsRange(n);
  }
  equals(n) {
    if (n instanceof this.constructor) {
      return this.sameRange(n.range);
    } else {
      return false;
    }
  }
  withRange(n) {
    this._range = new Zt(n.startLineNumber ?? this.range.startLineNumber, n.startColumn ?? this.range.startColumn, n.endLineNumber ?? this.range.endLineNumber, n.endColumn ?? this.range.endColumn);
    return this;
  }
};
