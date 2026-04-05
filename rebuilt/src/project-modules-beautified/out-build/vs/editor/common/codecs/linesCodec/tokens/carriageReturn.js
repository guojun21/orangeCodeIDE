"use strict";

// Module: out-build/vs/editor/common/codecs/linesCodec/tokens/carriageReturn.js
// Offset: 31066960 (bundle byte offset)
// Size: 476 bytes
MV();
ts();
tl();
Ql();
I1t = class xto extends NU {
  static {
    this.symbol = "\r";
  }
  static {
    this.byte = Ms.fromString(xto.symbol);
  }
  get byte() {
    return xto.byte;
  }
  get text() {
    return xto.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new xto(Zt.fromPositions(r, s));
  }
  toString() {
    return `carriage-return${this.range}`;
  }
};
