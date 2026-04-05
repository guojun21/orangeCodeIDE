"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/formFeed.js
// Offset: 31066183 (bundle byte offset)
// Size: 389 bytes
MV();
ts();
tl();
Z_i = class Scd extends NU {
  static {
    this.symbol = "\f";
  }
  get text() {
    return Scd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new Scd(Zt.fromPositions(r, s));
  }
  toString() {
    return `formfeed${this.range}`;
  }
};
