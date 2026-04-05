"use strict";

// Module: out-build/vs/editor/browser/gpu/bufferDirtyTracker.js
// Offset: 1777577 (bundle byte offset)
// Size: 601 bytes
Tyh = class {
  get dataOffset() {
    return this._startIndex;
  }
  get dirtySize() {
    if (this._startIndex !== undefined && this._endIndex !== undefined) {
      return this._endIndex - this._startIndex + 1;
    }
  }
  get isDirty() {
    return this._startIndex !== undefined;
  }
  flag(n, e = 1) {
    this._flag(n);
    if (e > 1) {
      this._flag(n + e - 1);
    }
    return n;
  }
  _flag(n) {
    if (this._startIndex === undefined || n < this._startIndex) {
      this._startIndex = n;
    }
    if (this._endIndex === undefined || n > this._endIndex) {
      this._endIndex = n;
    }
  }
  clear() {
    this._startIndex = undefined;
    this._endIndex = undefined;
  }
};
