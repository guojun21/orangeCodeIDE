"use strict";

// Module: out-build/external/sentry/core/utils/lru.js
// Offset: 199020 (bundle byte offset)
// Size: 713 bytes
bth = class {
  constructor(n) {
    this._maxSize = n;
    this._cache = new Map();
  }
  get size() {
    return this._cache.size;
  }
  get(n) {
    const e = this._cache.get(n);
    if (e !== undefined) {
      this._cache.delete(n);
      this._cache.set(n, e);
      return e;
    }
  }
  set(n, e) {
    if (this._cache.size >= this._maxSize) {
      const t = this._cache.keys().next().value;
      this._cache.delete(t);
    }
    this._cache.set(n, e);
  }
  remove(n) {
    const e = this._cache.get(n);
    if (e) {
      this._cache.delete(n);
    }
    return e;
  }
  clear() {
    this._cache.clear();
  }
  keys() {
    return Array.from(this._cache.keys());
  }
  values() {
    const n = [];
    this._cache.forEach(e => n.push(e));
    return n;
  }
};
