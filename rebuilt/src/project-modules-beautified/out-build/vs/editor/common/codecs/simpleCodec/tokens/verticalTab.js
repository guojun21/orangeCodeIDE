"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/verticalTab.js
// Offset: 31066572 (bundle byte offset)
// Size: 388 bytes
MV();
ts();
tl();
X_i = class kcd extends NU {
  static {
    this.symbol = "";
  }
  get text() {
    return kcd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new kcd(Zt.fromPositions(r, s));
  }
  toString() {
    return `vtab${this.range}`;
  }
};
