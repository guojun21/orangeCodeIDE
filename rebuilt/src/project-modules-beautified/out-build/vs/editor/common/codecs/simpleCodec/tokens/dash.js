"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/dash.js
// Offset: 31076671 (bundle byte offset)
// Size: 380 bytes
MV();
ts();
tl();
Oqe = class Pcd extends NU {
  static {
    this.symbol = "-";
  }
  get text() {
    return Pcd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new Pcd(Zt.fromPositions(r, s));
  }
  toString() {
    return `dash${this.range}`;
  }
};
