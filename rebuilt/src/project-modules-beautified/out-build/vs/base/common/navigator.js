"use strict";

// Module: out-build/vs/base/common/navigator.js
// Offset: 24802242 (bundle byte offset)
// Size: 521 bytes
Bpg = class {
  constructor(n, e = 0, t = n.length, i = e - 1) {
    this.items = n;
    this.start = e;
    this.end = t;
    this.index = i;
  }
  current() {
    if (this.index === this.start - 1 || this.index === this.end) {
      return null;
    } else {
      return this.items[this.index];
    }
  }
  next() {
    this.index = Math.min(this.index + 1, this.end);
    return this.current();
  }
  previous() {
    this.index = Math.max(this.index - 1, this.start - 1);
    return this.current();
  }
  first() {
    this.index = this.start;
    return this.current();
  }
  last() {
    this.index = this.end - 1;
    return this.current();
  }
};
