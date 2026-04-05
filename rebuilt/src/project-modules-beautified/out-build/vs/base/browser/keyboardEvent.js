"use strict";

// Module: out-build/vs/base/browser/keyboardEvent.js
// Offset: 313475 (bundle byte offset)
// Size: 2195 bytes
Ay();
G_();
hde();
_r();
Tih = Fs ? 256 : 2048;
Iih = 512;
Dih = 1024;
Bih = Fs ? 2048 : 256;
vh = class {
  constructor(n) {
    this._standardKeyboardEventBrand = true;
    const e = n;
    this.browserEvent = e;
    this.target = e.target;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    this.altGraphKey = e.getModifierState?.("AltGraph");
    this.keyCode = btA(e);
    this.code = e.code;
    this.ctrlKey = this.ctrlKey || this.keyCode === 5;
    this.altKey = this.altKey || this.keyCode === 6;
    this.shiftKey = this.shiftKey || this.keyCode === 4;
    this.metaKey = this.metaKey || this.keyCode === 57;
    this._asKeybinding = this._computeKeybinding();
    this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    if (this.browserEvent && this.browserEvent.preventDefault) {
      this.browserEvent.preventDefault();
    }
  }
  stopPropagation() {
    if (this.browserEvent && this.browserEvent.stopPropagation) {
      this.browserEvent.stopPropagation();
    }
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(n) {
    return this._asKeybinding === n;
  }
  _computeKeybinding() {
    let n = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      n = this.keyCode;
    }
    let e = 0;
    if (this.ctrlKey) {
      e |= Tih;
    }
    if (this.altKey) {
      e |= Iih;
    }
    if (this.shiftKey) {
      e |= Dih;
    }
    if (this.metaKey) {
      e |= Bih;
    }
    e |= n;
    return e;
  }
  _computeKeyCodeChord() {
    let n = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      n = this.keyCode;
    }
    return new _Y(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, n);
  }
};
