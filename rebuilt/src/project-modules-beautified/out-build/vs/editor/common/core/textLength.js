"use strict";

// Module: out-build/vs/editor/common/core/textLength.js
// Offset: 1061204 (bundle byte offset)
// Size: 3009 bytes
Ix();
tl();
ts();
YN = class S_e {
  static {
    this.zero = new S_e(0, 0);
  }
  static lengthDiffNonNegative(e, t) {
    if (t.isLessThan(e)) {
      return S_e.zero;
    } else if (e.lineCount === t.lineCount) {
      return new S_e(0, t.columnCount - e.columnCount);
    } else {
      return new S_e(t.lineCount - e.lineCount, t.columnCount);
    }
  }
  static betweenPositions(e, t) {
    if (e.lineNumber === t.lineNumber) {
      return new S_e(0, t.column - e.column);
    } else {
      return new S_e(t.lineNumber - e.lineNumber, t.column - 1);
    }
  }
  static fromPosition(e) {
    return new S_e(e.lineNumber - 1, e.column - 1);
  }
  static ofRange(e) {
    return S_e.betweenPositions(e.getStartPosition(), e.getEndPosition());
  }
  static ofText(e) {
    let t = 0;
    let i = 0;
    for (const r of e) {
      if (r === `
`) {
        t++;
        i = 0;
      } else {
        i++;
      }
    }
    return new S_e(t, i);
  }
  constructor(e, t) {
    this.lineCount = e;
    this.columnCount = t;
  }
  isZero() {
    return this.lineCount === 0 && this.columnCount === 0;
  }
  isLessThan(e) {
    if (this.lineCount !== e.lineCount) {
      return this.lineCount < e.lineCount;
    } else {
      return this.columnCount < e.columnCount;
    }
  }
  isGreaterThan(e) {
    if (this.lineCount !== e.lineCount) {
      return this.lineCount > e.lineCount;
    } else {
      return this.columnCount > e.columnCount;
    }
  }
  isGreaterThanOrEqualTo(e) {
    if (this.lineCount !== e.lineCount) {
      return this.lineCount > e.lineCount;
    } else {
      return this.columnCount >= e.columnCount;
    }
  }
  equals(e) {
    return this.lineCount === e.lineCount && this.columnCount === e.columnCount;
  }
  compare(e) {
    if (this.lineCount !== e.lineCount) {
      return this.lineCount - e.lineCount;
    } else {
      return this.columnCount - e.columnCount;
    }
  }
  add(e) {
    if (e.lineCount === 0) {
      return new S_e(this.lineCount, this.columnCount + e.columnCount);
    } else {
      return new S_e(this.lineCount + e.lineCount, e.columnCount);
    }
  }
  createRange(e) {
    if (this.lineCount === 0) {
      return new Zt(e.lineNumber, e.column, e.lineNumber, e.column + this.columnCount);
    } else {
      return new Zt(e.lineNumber, e.column, e.lineNumber + this.lineCount, this.columnCount + 1);
    }
  }
  toRange() {
    return new Zt(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return rh.ofLength(1, this.lineCount + 1);
  }
  addToPosition(e) {
    if (this.lineCount === 0) {
      return new ar(e.lineNumber, e.column + this.columnCount);
    } else {
      return new ar(e.lineNumber + this.lineCount, this.columnCount + 1);
    }
  }
  addToRange(e) {
    return Zt.fromPositions(this.addToPosition(e.getStartPosition()), this.addToPosition(e.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
