"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/space.js
// Offset: 31064959 (bundle byte offset)
// Size: 382 bytes
MV();
ts();
tl();
ASa = class _cd extends NU {
  static {
    this.symbol = " ";
  }
  get text() {
    return _cd.symbol;
  }
  static newOnLine(e, t) {
    const {
      range: i
    } = e;
    const r = new ar(i.startLineNumber, t);
    const s = new ar(i.startLineNumber, t + this.symbol.length);
    return new _cd(Zt.fromPositions(r, s));
  }
  toString() {
    return `space${this.range}`;
  }
};
