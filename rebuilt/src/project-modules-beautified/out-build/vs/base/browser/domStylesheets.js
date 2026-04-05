"use strict";

// Module: out-build/vs/base/browser/domStylesheets.js
// Offset: 521964 (bundle byte offset)
// Size: 526 bytes
rt();
ri();
iu();
y4t = new Map();
woh = class {
  constructor() {
    this._currentCssStyle = "";
    this._styleSheet = undefined;
  }
  setStyle(n) {
    if (n !== this._currentCssStyle) {
      this._currentCssStyle = n;
      if (this._styleSheet) {
        this._styleSheet.innerText = n;
      } else {
        this._styleSheet = wC(bi.document.head, e => e.innerText = n);
      }
    }
  }
  dispose() {
    if (this._styleSheet) {
      this._styleSheet.remove();
      this._styleSheet = undefined;
    }
  }
};
tFo = null;
