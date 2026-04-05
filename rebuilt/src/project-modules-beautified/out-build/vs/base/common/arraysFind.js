"use strict";

// Module: out-build/vs/base/common/arraysFind.js
// Offset: 237799 (bundle byte offset)
// Size: 5029 bytes
Z_c = class KHb {
  static {
    this.assertInvariants = false;
  }
  constructor(e) {
    this._array = e;
    this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(e) {
    if (KHb.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array) {
          if (this._prevFindLastPredicate(i) && !e(i)) {
            throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
        }
      }
      this._prevFindLastPredicate = e;
    }
    const t = xFt(this._array, e, this._findLastMonotonousLastIdx);
    this._findLastMonotonousLastIdx = t + 1;
    if (t === -1) {
      return undefined;
    } else {
      return this._array[t];
    }
  }
};
