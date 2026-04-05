"use strict";

// Module: out-build/vs/editor/common/model/textModelText.js
// Offset: 2322391 (bundle byte offset)
// Size: 384 bytes
EW();
Kbe();
bKe = class extends o5o {
  constructor(n) {
    super();
    this._textModel = n;
  }
  getValueOfRange(n) {
    return this._textModel.getValueInRange(n);
  }
  getLineLength(n) {
    return this._textModel.getLineLength(n);
  }
  get length() {
    const n = this._textModel.getLineCount();
    const e = this._textModel.getLineLength(n);
    return new YN(n - 1, e);
  }
};
