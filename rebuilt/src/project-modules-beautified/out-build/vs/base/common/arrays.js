"use strict";

// Module: out-build/vs/base/common/arrays.js
// Offset: 242828 (bundle byte offset)
// Size: 2471 bytes
GD();
_s();
Zpt = n => e => e[n];
(function (n) {
  function e(s) {
    return s < 0;
  }
  n.isLessThan = e;
  function t(s) {
    return s <= 0;
  }
  n.isLessThanOrEqual = t;
  function i(s) {
    return s > 0;
  }
  n.isGreaterThan = i;
  function r(s) {
    return s === 0;
  }
  n.isNeitherLessOrGreaterThan = r;
  n.greaterThan = 1;
  n.lessThan = -1;
  n.neitherLessOrGreaterThan = 0;
})(wte ||= {});
p9 = (n, e) => n - e;
Inh = (n, e) => p9(n ? 1 : 0, e ? 1 : 0);
Ebe = class {
  constructor(n) {
    this.items = n;
    this.firstIdx = 0;
    this.lastIdx = this.items.length - 1;
  }
  get length() {
    return this.lastIdx - this.firstIdx + 1;
  }
  takeWhile(n) {
    let e = this.firstIdx;
    while (e < this.items.length && n(this.items[e])) {
      e++;
    }
    const t = e === this.firstIdx ? null : this.items.slice(this.firstIdx, e);
    this.firstIdx = e;
    return t;
  }
  takeFromEndWhile(n) {
    let e = this.lastIdx;
    while (e >= 0 && n(this.items[e])) {
      e--;
    }
    const t = e === this.lastIdx ? null : this.items.slice(e + 1, this.lastIdx + 1);
    this.lastIdx = e;
    return t;
  }
  peek() {
    if (this.length !== 0) {
      return this.items[this.firstIdx];
    }
  }
  peekLast() {
    if (this.length !== 0) {
      return this.items[this.lastIdx];
    }
  }
  dequeue() {
    const n = this.items[this.firstIdx];
    this.firstIdx++;
    return n;
  }
  removeLast() {
    const n = this.items[this.lastIdx];
    this.lastIdx--;
    return n;
  }
  takeCount(n) {
    const e = this.items.slice(this.firstIdx, this.firstIdx + n);
    this.firstIdx += n;
    return e;
  }
};
DFt = class OGa {
  static {
    this.empty = new OGa(e => {});
  }
  constructor(e) {
    this.iterate = e;
  }
  forEach(e) {
    this.iterate(t => {
      e(t);
      return true;
    });
  }
  toArray() {
    const e = [];
    this.iterate(t => {
      e.push(t);
      return true;
    });
    return e;
  }
  filter(e) {
    return new OGa(t => this.iterate(i => e(i) ? t(i) : true));
  }
  map(e) {
    return new OGa(t => this.iterate(i => t(e(i))));
  }
  some(e) {
    let t = false;
    this.iterate(i => {
      t = e(i);
      return !t;
    });
    return t;
  }
  findFirst(e) {
    let t;
    this.iterate(i => e(i) ? (t = i, false) : true);
    return t;
  }
  findLast(e) {
    let t;
    this.iterate(i => {
      if (e(i)) {
        t = i;
      }
      return true;
    });
    return t;
  }
  findLastMaxBy(e) {
    let t;
    let i = true;
    this.iterate(r => {
      if (i || wte.isGreaterThan(e(r, t))) {
        i = false;
        t = r;
      }
      return true;
    });
    return t;
  }
};
Dnh = class ead {
  constructor(e) {
    this._indexMap = e;
  }
  static createSortPermutation(e, t) {
    const i = Array.from(e.keys()).sort((r, s) => t(e[r], e[s]));
    return new ead(i);
  }
  apply(e) {
    return e.map((t, i) => e[this._indexMap[i]]);
  }
  inverse() {
    const e = this._indexMap.slice();
    for (let t = 0; t < this._indexMap.length; t++) {
      e[this._indexMap[t]] = t;
    }
    return new ead(e);
  }
};
