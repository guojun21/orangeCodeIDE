"use strict";

// Module: out-build/vs/base/browser/ui/selectBox/selectBox.js
// Offset: 2113945 (bundle byte offset)
// Size: 942 bytes
SW();
gdA();
fdA();
$4();
_r();
bdA();
vdA = {
  ...KIc,
  selectBackground: "#3C3C3C",
  selectForeground: "#F0F0F0",
  selectBorder: "#3C3C3C",
  decoratorRightForeground: undefined,
  selectListBackground: undefined,
  selectListBorder: undefined,
  focusBorder: undefined
};
k9e = class extends HR {
  constructor(n, e, t, i, r) {
    super();
    if (Fs && !r?.useCustomDrawn) {
      this.selectBoxDelegate = new C0h(n, e, i, r);
    } else {
      this.selectBoxDelegate = new _0h(n, e, t, i, r);
    }
    this._register(this.selectBoxDelegate);
  }
  get onDidSelect() {
    return this.selectBoxDelegate.onDidSelect;
  }
  setOptions(n, e) {
    this.selectBoxDelegate.setOptions(n, e);
  }
  select(n) {
    this.selectBoxDelegate.select(n);
  }
  setAriaLabel(n) {
    this.selectBoxDelegate.setAriaLabel(n);
  }
  focus() {
    this.selectBoxDelegate.focus();
  }
  blur() {
    this.selectBoxDelegate.blur();
  }
  setFocusable(n) {
    this.selectBoxDelegate.setFocusable(n);
  }
  setEnabled(n) {
    this.selectBoxDelegate.setEnabled(n);
  }
  render(n) {
    this.selectBoxDelegate.render(n);
  }
};
