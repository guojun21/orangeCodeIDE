"use strict";

// Module: out-build/vs/base/common/linkedList.js
// Offset: 265246 (bundle byte offset)
// Size: 1600 bytes
D4 = class UGa {
  static {
    this.Undefined = new UGa(undefined);
  }
  constructor(e) {
    this.element = e;
    this.next = UGa.Undefined;
    this.prev = UGa.Undefined;
  }
};
WD = class {
  constructor() {
    this._first = D4.Undefined;
    this._last = D4.Undefined;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._first;
  }
  isEmpty() {
    return this._first === D4.Undefined;
  }
  clear() {
    let n = this._first;
    while (n !== D4.Undefined) {
      const e = n.next;
      n.prev = D4.Undefined;
      n.next = D4.Undefined;
      n = e;
    }
    this._first = D4.Undefined;
    this._last = D4.Undefined;
    this._size = 0;
  }
  unshift(n) {
    return this._insert(n, false);
  }
  push(n) {
    return this._insert(n, true);
  }
  _insert(n, e) {
    const t = new D4(n);
    if (this._first === D4.Undefined) {
      this._first = t;
      this._last = t;
    } else if (e) {
      const r = this._last;
      this._last = t;
      t.prev = r;
      r.next = t;
    } else {
      const r = this._first;
      this._first = t;
      t.next = r;
      r.prev = t;
    }
    this._size += 1;
    let i = false;
    return () => {
      if (!i) {
        i = true;
        this._remove(t);
      }
    };
  }
  shift() {
    if (this._first !== D4.Undefined) {
      const n = this._first.element;
      this._remove(this._first);
      return n;
    }
  }
  pop() {
    if (this._last !== D4.Undefined) {
      const n = this._last.element;
      this._remove(this._last);
      return n;
    }
  }
  remove(n) {
    this._remove(n);
  }
  _remove(n) {
    if (n.prev !== D4.Undefined && n.next !== D4.Undefined) {
      const e = n.prev;
      e.next = n.next;
      n.next.prev = e;
    } else if (n.prev === D4.Undefined && n.next === D4.Undefined) {
      this._first = D4.Undefined;
      this._last = D4.Undefined;
    } else if (n.next === D4.Undefined) {
      this._last = this._last.prev;
      this._last.next = D4.Undefined;
    } else if (n.prev === D4.Undefined) {
      this._first = this._first.next;
      this._first.prev = D4.Undefined;
    }
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let n = this._first;
    while (n !== D4.Undefined) {
      yield n.element;
      n = n.next;
    }
  }
};
