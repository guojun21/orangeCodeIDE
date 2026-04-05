"use strict";

// Module: out-build/vs/base/common/history.js
// Offset: 24802763 (bundle byte offset)
// Size: 3067 bytes
Ate();
y0A();
bca = class {
  constructor(n = new Set(), e = 10) {
    this._history = n;
    this._limit = e;
    this._onChange();
    if (this._history.onDidChange) {
      this._disposable = this._history.onDidChange(() => this._onChange());
    }
  }
  getHistory() {
    return this._elements;
  }
  add(n) {
    this._history.delete(n);
    this._history.add(n);
    this._onChange();
  }
  next() {
    return this._navigator.next();
  }
  previous() {
    if (this._currentPosition() !== 0) {
      return this._navigator.previous();
    } else {
      return null;
    }
  }
  current() {
    return this._navigator.current();
  }
  first() {
    return this._navigator.first();
  }
  last() {
    return this._navigator.last();
  }
  isFirst() {
    return this._currentPosition() === 0;
  }
  isLast() {
    return this._currentPosition() >= this._elements.length - 1;
  }
  isNowhere() {
    return this._navigator.current() === null;
  }
  has(n) {
    return this._history.has(n);
  }
  clear() {
    this._history.clear();
    this._onChange();
  }
  _onChange() {
    this._reduceToLimit();
    const n = this._elements;
    this._navigator = new Bpg(n, 0, n.length, n.length);
  }
  _reduceToLimit() {
    const n = this._elements;
    if (n.length > this._limit) {
      const e = n.slice(n.length - this._limit);
      if (this._history.replace) {
        this._history.replace(e);
      } else {
        this._history = new Set(e);
      }
    }
  }
  _currentPosition() {
    const n = this._navigator.current();
    if (n) {
      return this._elements.indexOf(n);
    } else {
      return -1;
    }
  }
  get _elements() {
    const n = [];
    this._history.forEach(e => n.push(e));
    return n;
  }
  dispose() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = undefined;
    }
  }
};
Tet = class {
  get size() {
    return this._size;
  }
  constructor(n, e = 10, t = i => i) {
    this.capacity = e;
    this.identityFn = t;
    if (n.length < 1) {
      throw new Error("not supported");
    }
    this._size = 1;
    this.head = this.tail = this.cursor = {
      value: n[0],
      previous: undefined,
      next: undefined
    };
    this.valueSet = new Anh([n[0]], t);
    for (let i = 1; i < n.length; i++) {
      this.add(n[i]);
    }
  }
  add(n) {
    const e = {
      value: n,
      previous: this.tail,
      next: undefined
    };
    this.tail.next = e;
    this.tail = e;
    this.cursor = this.tail;
    this._size++;
    if (this.valueSet.has(n)) {
      this._deleteFromList(n);
    } else {
      this.valueSet.add(n);
    }
    while (this._size > this.capacity) {
      this.valueSet.delete(this.head.value);
      this.head = this.head.next;
      this.head.previous = undefined;
      this._size--;
    }
  }
  replaceLast(n) {
    if (this.identityFn(this.tail.value) === this.identityFn(n)) {
      return n;
    }
    const e = this.tail.value;
    this.valueSet.delete(e);
    this.tail.value = n;
    if (this.valueSet.has(n)) {
      this._deleteFromList(n);
    } else {
      this.valueSet.add(n);
    }
    return e;
  }
  prepend(n) {
    if (this._size === this.capacity || this.valueSet.has(n)) {
      return;
    }
    const e = {
      value: n,
      previous: undefined,
      next: this.head
    };
    this.head.previous = e;
    this.head = e;
    this._size++;
    this.valueSet.add(n);
  }
  isAtEnd() {
    return this.cursor === this.tail;
  }
  current() {
    return this.cursor.value;
  }
  previous() {
    if (this.cursor.previous) {
      this.cursor = this.cursor.previous;
    }
    return this.cursor.value;
  }
  next() {
    if (this.cursor.next) {
      this.cursor = this.cursor.next;
    }
    return this.cursor.value;
  }
  has(n) {
    return this.valueSet.has(n);
  }
  resetCursor() {
    this.cursor = this.tail;
    return this.cursor.value;
  }
  *[Symbol.iterator]() {
    let n = this.head;
    while (n) {
      yield n.value;
      n = n.next;
    }
  }
  _deleteFromList(n) {
    let e = this.head;
    const t = this.identityFn(n);
    while (e !== this.tail) {
      if (this.identityFn(e.value) === t) {
        if (e === this.head) {
          this.head = this.head.next;
          this.head.previous = undefined;
        } else {
          e.previous.next = e.next;
          e.next.previous = e.previous;
        }
        this._size--;
      }
      e = e.next;
    }
  }
};
