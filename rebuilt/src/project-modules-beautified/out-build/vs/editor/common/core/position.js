"use strict";

// Module: out-build/vs/editor/common/core/position.js
// Offset: 573000 (bundle byte offset)
// Size: 1205 bytes
ar = class PDt {
  constructor(e, t) {
    this.lineNumber = e;
    this.column = t;
  }
  with(e = this.lineNumber, t = this.column) {
    if (e === this.lineNumber && t === this.column) {
      return this;
    } else {
      return new PDt(e, t);
    }
  }
  delta(e = 0, t = 0) {
    return this.with(Math.max(1, this.lineNumber + e), Math.max(1, this.column + t));
  }
  equals(e) {
    return PDt.equals(this, e);
  }
  static equals(e, t) {
    if (!e && !t) {
      return true;
    } else {
      return !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column;
    }
  }
  isBefore(e) {
    return PDt.isBefore(this, e);
  }
  static isBefore(e, t) {
    if (e.lineNumber < t.lineNumber) {
      return true;
    } else if (t.lineNumber < e.lineNumber) {
      return false;
    } else {
      return e.column < t.column;
    }
  }
  isBeforeOrEqual(e) {
    return PDt.isBeforeOrEqual(this, e);
  }
  static isBeforeOrEqual(e, t) {
    if (e.lineNumber < t.lineNumber) {
      return true;
    } else if (t.lineNumber < e.lineNumber) {
      return false;
    } else {
      return e.column <= t.column;
    }
  }
  static compare(e, t) {
    const i = e.lineNumber | 0;
    const r = t.lineNumber | 0;
    if (i === r) {
      const s = e.column | 0;
      const o = t.column | 0;
      return s - o;
    }
    return i - r;
  }
  clone() {
    return new PDt(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(e) {
    return new PDt(e.lineNumber, e.column);
  }
  static isIPosition(e) {
    return e && typeof e.lineNumber == "number" && typeof e.column == "number";
  }
  toJSON() {
    return {
      lineNumber: this.lineNumber,
      column: this.column
    };
  }
};
