"use strict";

// Module: out-build/vs/editor/common/core/characterClassifier.js
// Offset: 709066 (bundle byte offset)
// Size: 853 bytes
jFo();
m4n = class DJb {
  constructor(e) {
    const t = QFo(e);
    this._defaultValue = t;
    this._asciiMap = DJb._createAsciiMap(t);
    this._map = new Map();
  }
  static _createAsciiMap(e) {
    const t = new Uint8Array(256);
    t.fill(e);
    return t;
  }
  set(e, t) {
    const i = QFo(t);
    if (e >= 0 && e < 256) {
      this._asciiMap[e] = i;
    } else {
      this._map.set(e, i);
    }
  }
  get(e) {
    if (e >= 0 && e < 256) {
      return this._asciiMap[e];
    } else {
      return this._map.get(e) || this._defaultValue;
    }
  }
  clear() {
    this._asciiMap.fill(this._defaultValue);
    this._map.clear();
  }
};
(function (n) {
  n[n.False = 0] = "False";
  n[n.True = 1] = "True";
})(Sch ||= {});
p4n = class {
  constructor() {
    this._actual = new m4n(0);
  }
  add(n) {
    this._actual.set(n, 1);
  }
  has(n) {
    return this._actual.get(n) === 1;
  }
  clear() {
    return this._actual.clear();
  }
};
