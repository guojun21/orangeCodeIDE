"use strict";

// Module: out-build/vs/editor/common/model/prefixSumComputer.js
// Offset: 1388161 (bundle byte offset)
// Size: 3666 bytes
Vs();
jFo();
Uft = class {
  constructor(n) {
    this.values = n;
    this.prefixSum = new Uint32Array(n.length);
    this.prefixSumValidIndex = new Int32Array(1);
    this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(n, e) {
    n = O4t(n);
    const t = this.values;
    const i = this.prefixSum;
    const r = e.length;
    if (r === 0) {
      return false;
    } else {
      this.values = new Uint32Array(t.length + r);
      this.values.set(t.subarray(0, n), 0);
      this.values.set(t.subarray(n), n + r);
      this.values.set(e, n);
      if (n - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = n - 1;
      }
      this.prefixSum = new Uint32Array(this.values.length);
      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1));
      }
      return true;
    }
  }
  setValue(n, e) {
    n = O4t(n);
    e = O4t(e);
    if (this.values[n] === e) {
      return false;
    } else {
      this.values[n] = e;
      if (n - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = n - 1;
      }
      return true;
    }
  }
  removeValues(n, e) {
    n = O4t(n);
    e = O4t(e);
    const t = this.values;
    const i = this.prefixSum;
    if (n >= t.length) {
      return false;
    }
    const r = t.length - n;
    if (e >= r) {
      e = r;
    }
    if (e === 0) {
      return false;
    } else {
      this.values = new Uint32Array(t.length - e);
      this.values.set(t.subarray(0, n), 0);
      this.values.set(t.subarray(n + e), n);
      this.prefixSum = new Uint32Array(this.values.length);
      if (n - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = n - 1;
      }
      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1));
      }
      return true;
    }
  }
  getTotalSum() {
    if (this.values.length === 0) {
      return 0;
    } else {
      return this._getPrefixSum(this.values.length - 1);
    }
  }
  getPrefixSum(n) {
    if (n < 0) {
      return 0;
    } else {
      n = O4t(n);
      return this._getPrefixSum(n);
    }
  }
  _getPrefixSum(n) {
    if (n <= this.prefixSumValidIndex[0]) {
      return this.prefixSum[n];
    }
    let e = this.prefixSumValidIndex[0] + 1;
    if (e === 0) {
      this.prefixSum[0] = this.values[0];
      e++;
    }
    if (n >= this.values.length) {
      n = this.values.length - 1;
    }
    for (let t = e; t <= n; t++) {
      this.prefixSum[t] = this.prefixSum[t - 1] + this.values[t];
    }
    this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], n);
    return this.prefixSum[n];
  }
  getIndexOf(n) {
    n = Math.floor(n);
    this.getTotalSum();
    let e = 0;
    let t = this.values.length - 1;
    let i = 0;
    let r = 0;
    let s = 0;
    while (e <= t) {
      i = e + (t - e) / 2 | 0;
      r = this.prefixSum[i];
      s = r - this.values[i];
      if (n < s) {
        t = i - 1;
      } else if (n >= r) {
        e = i + 1;
      } else {
        break;
      }
    }
    return new rTc(i, n - s);
  }
};
iTc = class {
  constructor(n) {
    this._values = n;
    this._isValid = false;
    this._validEndIndex = -1;
    this._prefixSum = [];
    this._indexBySum = [];
  }
  getTotalSum() {
    this._ensureValid();
    return this._indexBySum.length;
  }
  getPrefixSum(n) {
    this._ensureValid();
    if (n === 0) {
      return 0;
    } else {
      return this._prefixSum[n - 1];
    }
  }
  getIndexOf(n) {
    this._ensureValid();
    const e = this._indexBySum[n];
    const t = e > 0 ? this._prefixSum[e - 1] : 0;
    return new rTc(e, n - t);
  }
  removeValues(n, e) {
    this._values.splice(n, e);
    this._invalidate(n);
  }
  insertValues(n, e) {
    this._values = $2n(this._values, n, e);
    this._invalidate(n);
  }
  _invalidate(n) {
    this._isValid = false;
    this._validEndIndex = Math.min(this._validEndIndex, n - 1);
  }
  _ensureValid() {
    if (!this._isValid) {
      for (let n = this._validEndIndex + 1, e = this._values.length; n < e; n++) {
        const t = this._values[n];
        const i = n > 0 ? this._prefixSum[n - 1] : 0;
        this._prefixSum[n] = i + t;
        for (let r = 0; r < t; r++) {
          this._indexBySum[i + r] = n;
        }
      }
      this._prefixSum.length = this._values.length;
      this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1];
      this._isValid = true;
      this._validEndIndex = this._values.length - 1;
    }
  }
  setValue(n, e) {
    if (this._values[n] !== e) {
      this._values[n] = e;
      this._invalidate(n);
    }
  }
};
rTc = class {
  constructor(n, e) {
    this.index = n;
    this.remainder = e;
    this._prefixSumIndexOfResultBrand = undefined;
    this.index = n;
    this.remainder = e;
  }
};
