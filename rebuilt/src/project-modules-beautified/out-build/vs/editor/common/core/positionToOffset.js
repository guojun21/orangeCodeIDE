"use strict";

// Module: out-build/vs/editor/common/core/positionToOffset.js
// Offset: 1847181 (bundle byte offset)
// Size: 1496 bytes
GD();
$I();
tl();
ts();
Kbe();
h3t = class {
  constructor(n) {
    this.text = n;
    this.lineStartOffsetByLineIdx = [];
    this.lineEndOffsetByLineIdx = [];
    this.lineStartOffsetByLineIdx.push(0);
    for (let e = 0; e < n.length; e++) {
      if (n.charAt(e) === `
`) {
        this.lineStartOffsetByLineIdx.push(e + 1);
        if (e > 0 && n.charAt(e - 1) === "\r") {
          this.lineEndOffsetByLineIdx.push(e - 1);
        } else {
          this.lineEndOffsetByLineIdx.push(e);
        }
      }
    }
    this.lineEndOffsetByLineIdx.push(n.length);
  }
  getOffset(n) {
    const e = this._validatePosition(n);
    return this.lineStartOffsetByLineIdx[e.lineNumber - 1] + e.column - 1;
  }
  _validatePosition(n) {
    if (n.lineNumber < 1) {
      return new ar(1, 1);
    }
    const e = this.textLength.lineCount + 1;
    if (n.lineNumber > e) {
      const i = this.getLineLength(e);
      return new ar(e, i + 1);
    }
    if (n.column < 1) {
      return new ar(n.lineNumber, 1);
    }
    const t = this.getLineLength(n.lineNumber);
    if (n.column - 1 > t) {
      return new ar(n.lineNumber, t + 1);
    } else {
      return n;
    }
  }
  getOffsetRange(n) {
    return new dm(this.getOffset(n.getStartPosition()), this.getOffset(n.getEndPosition()));
  }
  getPosition(n) {
    const e = xFt(this.lineStartOffsetByLineIdx, r => r <= n);
    const t = e + 1;
    const i = n - this.lineStartOffsetByLineIdx[e] + 1;
    return new ar(t, i);
  }
  getRange(n) {
    return Zt.fromPositions(this.getPosition(n.start), this.getPosition(n.endExclusive));
  }
  getTextLength(n) {
    return YN.ofRange(this.getRange(n));
  }
  get textLength() {
    const n = this.lineStartOffsetByLineIdx.length - 1;
    return new YN(n, this.text.length - this.lineStartOffsetByLineIdx[n]);
  }
  getLineLength(n) {
    return this.lineEndOffsetByLineIdx[n - 1] - this.lineStartOffsetByLineIdx[n - 1];
  }
};
