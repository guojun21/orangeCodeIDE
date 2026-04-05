"use strict";

// Module: out-build/vs/base/common/numbers.js
// Offset: 468198 (bundle byte offset)
// Size: 1277 bytes
Lv();
_Fn = class {
  constructor() {
    this._n = 1;
    this._val = 0;
  }
  update(n) {
    this._val = this._val + (n - this._val) / this._n;
    this._n += 1;
    return this._val;
  }
  get value() {
    return this._val;
  }
};
csh = class {
  constructor(n) {
    this._n = 0;
    this._val = 0;
    this._values = [];
    this._index = 0;
    this._sum = 0;
    this._values = new Array(n);
    this._values.fill(0, 0, n);
  }
  update(n) {
    const e = this._values[this._index];
    this._values[this._index] = n;
    this._index = (this._index + 1) % this._values.length;
    this._sum -= e;
    this._sum += n;
    if (this._n < this._values.length) {
      this._n += 1;
    }
    this._val = this._sum / this._n;
    return this._val;
  }
  get value() {
    return this._val;
  }
};
