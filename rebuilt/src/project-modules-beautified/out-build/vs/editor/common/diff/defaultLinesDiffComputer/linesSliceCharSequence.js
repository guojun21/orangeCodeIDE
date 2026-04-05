"use strict";

// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/linesSliceCharSequence.js
// Offset: 2178966 (bundle byte offset)
// Size: 7953 bytes
GD();
$I();
tl();
ts();
y5o();
C3n = class {
  constructor(n, e, t) {
    this.lines = n;
    this.range = e;
    this.considerWhitespaceChanges = t;
    this.elements = [];
    this.firstElementOffsetByLineIdx = [];
    this.lineStartOffsets = [];
    this.trimmedWsLengthsByLineIdx = [];
    this.firstElementOffsetByLineIdx.push(0);
    for (let i = this.range.startLineNumber; i <= this.range.endLineNumber; i++) {
      let r = n[i - 1];
      let s = 0;
      if (i === this.range.startLineNumber && this.range.startColumn > 1) {
        s = this.range.startColumn - 1;
        r = r.substring(s);
      }
      this.lineStartOffsets.push(s);
      let o = 0;
      if (!t) {
        const l = r.trimStart();
        o = r.length - l.length;
        r = l.trimEnd();
      }
      this.trimmedWsLengthsByLineIdx.push(o);
      const a = i === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - o, r.length) : r.length;
      for (let l = 0; l < a; l++) {
        this.elements.push(r.charCodeAt(l));
      }
      if (i < this.range.endLineNumber) {
        this.elements.push(10);
        this.firstElementOffsetByLineIdx.push(this.elements.length);
      }
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new dm(0, this.length));
  }
  getText(n) {
    return this.elements.slice(n.start, n.endExclusive).map(e => String.fromCharCode(e)).join("");
  }
  getElement(n) {
    return this.elements[n];
  }
  get length() {
    return this.elements.length;
  }
  getBoundaryScore(n) {
    const e = sCh(n > 0 ? this.elements[n - 1] : -1);
    const t = sCh(n < this.elements.length ? this.elements[n] : -1);
    if (e === 7 && t === 8) {
      return 0;
    }
    if (e === 8) {
      return 150;
    }
    let i = 0;
    if (e !== t) {
      i += 10;
      if (e === 0 && t === 1) {
        i += 1;
      }
    }
    i += rCh(e);
    i += rCh(t);
    return i;
  }
  translateOffset(n, e = "right") {
    const t = xFt(this.firstElementOffsetByLineIdx, r => r <= n);
    const i = n - this.firstElementOffsetByLineIdx[t];
    return new ar(this.range.startLineNumber + t, 1 + this.lineStartOffsets[t] + i + (i === 0 && e === "left" ? 0 : this.trimmedWsLengthsByLineIdx[t]));
  }
  translateRange(n) {
    const e = this.translateOffset(n.start, "right");
    const t = this.translateOffset(n.endExclusive, "left");
    if (t.isBefore(e)) {
      return Zt.fromPositions(t, t);
    } else {
      return Zt.fromPositions(e, t);
    }
  }
  findWordContaining(n) {
    if (n < 0 || n >= this.elements.length || !N3t(this.elements[n])) {
      return;
    }
    let e = n;
    while (e > 0 && N3t(this.elements[e - 1])) {
      e--;
    }
    let t = n;
    while (t < this.elements.length && N3t(this.elements[t])) {
      t++;
    }
    return new dm(e, t);
  }
  findSubWordContaining(n) {
    if (n < 0 || n >= this.elements.length || !N3t(this.elements[n])) {
      return;
    }
    let e = n;
    while (e > 0 && N3t(this.elements[e - 1]) && !iCh(this.elements[e])) {
      e--;
    }
    let t = n;
    while (t < this.elements.length && N3t(this.elements[t]) && !iCh(this.elements[t])) {
      t++;
    }
    return new dm(e, t);
  }
  countLinesIn(n) {
    return this.translateOffset(n.endExclusive).lineNumber - this.translateOffset(n.start).lineNumber;
  }
  isStronglyEqual(n, e) {
    return this.elements[n] === this.elements[e];
  }
  extendToFullLines(n) {
    const e = EFt(this.firstElementOffsetByLineIdx, i => i <= n.start) ?? 0;
    const t = jeA(this.firstElementOffsetByLineIdx, i => n.endExclusive <= i) ?? this.elements.length;
    return new dm(e, t);
  }
};
(function (n) {
  n[n.WordLower = 0] = "WordLower";
  n[n.WordUpper = 1] = "WordUpper";
  n[n.WordNumber = 2] = "WordNumber";
  n[n.End = 3] = "End";
  n[n.Other = 4] = "Other";
  n[n.Separator = 5] = "Separator";
  n[n.Space = 6] = "Space";
  n[n.LineBreakCR = 7] = "LineBreakCR";
  n[n.LineBreakLF = 8] = "LineBreakLF";
})(oCh ||= {});
aCh = {
  0: 0,
  1: 0,
  2: 0,
  3: 10,
  4: 2,
  5: 30,
  6: 3,
  7: 10,
  8: 10
};
