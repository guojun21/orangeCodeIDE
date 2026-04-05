"use strict";

// Module: out-build/vs/editor/common/core/stringBuilder.js
// Offset: 740576 (bundle byte offset)
// Size: 2848 bytes
oa();
_r();
Ql();
Gbe = class {
  constructor(n) {
    this._capacity = n | 0;
    this._buffer = new Uint16Array(this._capacity);
    this._completedStrings = null;
    this._bufferLength = 0;
  }
  reset() {
    this._completedStrings = null;
    this._bufferLength = 0;
  }
  build() {
    if (this._completedStrings !== null) {
      this._flushBuffer();
      return this._completedStrings.join("");
    } else {
      return this._buildBuffer();
    }
  }
  _buildBuffer() {
    if (this._bufferLength === 0) {
      return "";
    }
    const n = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
    return Rch().decode(n);
  }
  _flushBuffer() {
    const n = this._buildBuffer();
    this._bufferLength = 0;
    if (this._completedStrings === null) {
      this._completedStrings = [n];
    } else {
      this._completedStrings[this._completedStrings.length] = n;
    }
  }
  appendCharCode(n) {
    const e = this._capacity - this._bufferLength;
    if (e <= 1 && (e === 0 || d3(n))) {
      this._flushBuffer();
    }
    this._buffer[this._bufferLength++] = n;
  }
  appendASCIICharCode(n) {
    if (this._bufferLength === this._capacity) {
      this._flushBuffer();
    }
    this._buffer[this._bufferLength++] = n;
  }
  appendString(n) {
    const e = n.length;
    if (this._bufferLength + e >= this._capacity) {
      this._flushBuffer();
      this._completedStrings[this._completedStrings.length] = n;
      return;
    }
    for (let t = 0; t < e; t++) {
      this._buffer[this._bufferLength++] = n.charCodeAt(t);
    }
  }
};
