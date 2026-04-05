"use strict";

// Module: out-build/vs/base/common/stopwatch.js
// Offset: 266846 (bundle byte offset)
// Size: 879 bytes
Znh = globalThis.performance && typeof globalThis.performance.now == "function";
J_ = class XHb {
  static create(e) {
    return new XHb(e);
  }
  constructor(e) {
    this._now = Znh && e === false ? Date.now : globalThis.performance.now.bind(globalThis.performance);
    this._startTime = this._now();
    this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now();
    this._stopTime = -1;
  }
  elapsed() {
    if (this._stopTime !== -1) {
      return this._stopTime - this._startTime;
    } else {
      return this._now() - this._startTime;
    }
  }
};
