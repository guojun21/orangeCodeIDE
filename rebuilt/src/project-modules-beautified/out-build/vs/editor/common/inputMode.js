"use strict";

// Module: out-build/vs/editor/common/inputMode.js
// Offset: 686399 (bundle byte offset)
// Size: 444 bytes
yn();
lch = class {
  constructor() {
    this._inputMode = "insert";
    this._onDidChangeInputMode = new Qe();
    this.onDidChangeInputMode = this._onDidChangeInputMode.event;
  }
  getInputMode() {
    return this._inputMode;
  }
  setInputMode(n) {
    this._inputMode = n;
    this._onDidChangeInputMode.fire(this._inputMode);
  }
};
Vze = new lch();
