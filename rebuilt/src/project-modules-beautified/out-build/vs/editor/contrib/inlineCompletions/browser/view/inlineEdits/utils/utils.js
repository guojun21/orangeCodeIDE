"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/utils/utils.js
// Offset: 25497325 (bundle byte offset)
// Size: 1873 bytes
ri();
Kde();
Vs();
GD();
rt();
Uc();
_r();
oa();
Yn();
dg();
$I();
tl();
ts();
EW();
WY();
bv();
akA = class aQb {
  static {
    this._modelId = 0;
  }
  constructor(e) {
    this.scheme = e;
  }
  getUniqueUri() {
    return je.from({
      scheme: this.scheme,
      path: new Date().toString() + String(aQb._modelId++)
    });
  }
};
rua = class {
  constructor() {
    this._data = "";
  }
  moveTo(n) {
    this._data += `M ${n.x} ${n.y} `;
    return this;
  }
  lineTo(n) {
    this._data += `L ${n.x} ${n.y} `;
    return this;
  }
  curveTo(n, e) {
    this._data += `Q ${n.x} ${n.y} ${e.x} ${e.y} `;
    return this;
  }
  curveTo2(n, e, t) {
    this._data += `C ${n.x} ${n.y} ${e.x} ${e.y} ${t.x} ${t.y} `;
    return this;
  }
  build() {
    return this._data;
  }
};
