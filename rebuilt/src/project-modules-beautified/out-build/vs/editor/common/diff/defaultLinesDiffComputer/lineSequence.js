"use strict";

// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/lineSequence.js
// Offset: 2192850 (bundle byte offset)
// Size: 643 bytes
S3n = class {
  constructor(n, e) {
    this.trimmedHash = n;
    this.lines = e;
  }
  getElement(n) {
    return this.trimmedHash[n];
  }
  get length() {
    return this.trimmedHash.length;
  }
  getBoundaryScore(n) {
    const e = n === 0 ? 0 : pCh(this.lines[n - 1]);
    const t = n === this.lines.length ? 0 : pCh(this.lines[n]);
    return 1000 - (e + t);
  }
  getText(n) {
    return this.lines.slice(n.start, n.endExclusive).join(`
`);
  }
  isStronglyEqual(n, e) {
    return this.lines[n] === this.lines[e];
  }
};
