"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/hash.js
// Offset: 31061956 (bundle byte offset)
// Size: 380 bytes
MV();
ts();
tl();
Ggn = class ycd extends NU {
  static {
    this.symbol = "#";
  }
  get text() {
    return ycd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new ycd(Zt.fromPositions(r, s));
  }
  toString() {
    return `hash${this.range}`;
  }
};
