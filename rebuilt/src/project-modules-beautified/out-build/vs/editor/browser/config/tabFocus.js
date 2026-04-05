"use strict";

// Module: out-build/vs/editor/browser/config/tabFocus.js
// Offset: 1458442 (bundle byte offset)
// Size: 621 bytes
yn();
cvh = class {
  constructor() {
    this._tabFocus = false;
    this._onDidChangeTabFocus = new Qe();
    this.onDidChangeTabFocus = this._onDidChangeTabFocus.event;
  }
  getTabFocusMode() {
    return this._tabFocus;
  }
  setTabFocusMode(n) {
    this._tabFocus = n;
    this._onDidChangeTabFocus.fire(this._tabFocus);
  }
};
OSe = new cvh();
