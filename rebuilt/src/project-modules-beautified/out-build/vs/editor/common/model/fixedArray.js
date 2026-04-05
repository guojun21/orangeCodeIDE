"use strict";

// Module: out-build/vs/editor/common/model/fixedArray.js
// Offset: 1196994 (bundle byte offset)
// Size: 807 bytes
Vs();
Rgh = class {
  constructor(n) {
    this._default = n;
    this._store = [];
  }
  get(n) {
    if (n < this._store.length) {
      return this._store[n];
    } else {
      return this._default;
    }
  }
  set(n, e) {
    while (n >= this._store.length) {
      this._store[this._store.length] = this._default;
    }
    this._store[n] = e;
  }
  replace(n, e, t) {
    if (n >= this._store.length) {
      return;
    }
    if (e === 0) {
      this.insert(n, t);
      return;
    } else if (t === 0) {
      this.delete(n, e);
      return;
    }
    const i = this._store.slice(0, n);
    const r = this._store.slice(n + e);
    const s = oaA(t, this._default);
    this._store = i.concat(s, r);
  }
  delete(n, e) {
    if (e !== 0 && !(n >= this._store.length)) {
      this._store.splice(n, e);
    }
  }
  insert(n, e) {
    if (e === 0 || n >= this._store.length) {
      return;
    }
    const t = [];
    for (let i = 0; i < e; i++) {
      t[i] = this._default;
    }
    this._store = $2n(this._store, n, t);
  }
};
