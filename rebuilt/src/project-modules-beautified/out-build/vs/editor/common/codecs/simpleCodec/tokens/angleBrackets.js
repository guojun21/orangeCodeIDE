"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/angleBrackets.js
// Offset: 31068520 (bundle byte offset)
// Size: 883 bytes
MV();
ts();
tl();
D1t = class Icd extends NU {
  static {
    this.symbol = "<";
  }
  get text() {
    return Icd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new Icd(Zt.fromPositions(r, s));
  }
  toString() {
    return `left-angle-bracket${this.range}`;
  }
};
n0i = class Dcd extends NU {
  static {
    this.symbol = ">";
  }
  get text() {
    return Dcd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new Dcd(Zt.fromPositions(r, s));
  }
  toString() {
    return `right-angle-bracket${this.range}`;
  }
};
