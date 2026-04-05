"use strict";

// Module: out-build/vs/base/common/collections.js
// Offset: 232499 (bundle byte offset)
// Size: 2128 bytes
Anh = class {
  static {
    vnh = Symbol.toStringTag;
  }
  constructor(n, e) {
    this.toKey = e;
    this._map = new Map();
    this[vnh] = "SetWithKey";
    for (const t of n) {
      this.add(t);
    }
  }
  get size() {
    return this._map.size;
  }
  add(n) {
    const e = this.toKey(n);
    this._map.set(e, n);
    return this;
  }
  delete(n) {
    return this._map.delete(this.toKey(n));
  }
  has(n) {
    return this._map.has(this.toKey(n));
  }
  *entries() {
    for (const n of this._map.values()) {
      yield [n, n];
    }
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const n of this._map.values()) {
      yield n;
    }
  }
  clear() {
    this._map.clear();
  }
  forEach(n, e) {
    this._map.forEach(t => n.call(e, t, t, this));
  }
  [Symbol.iterator]() {
    return this.values();
  }
};
