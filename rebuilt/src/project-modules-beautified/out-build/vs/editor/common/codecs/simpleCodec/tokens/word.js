"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/word.js
// Offset: 31077051 (bundle byte offset)
// Size: 452 bytes
MV();
ts();
tl();
CIf = class Lcd extends NU {
  constructor(e, t) {
    super(e);
    this.text = t;
  }
  static newOnLine(e, t, i) {
    const {
      range: r
    } = t;
    const s = new ar(r.startLineNumber, i);
    const o = new ar(r.startLineNumber, i + e.length);
    return new Lcd(Zt.fromPositions(s, o), e);
  }
  equals(e) {
    if (!super.equals(e) || !(e instanceof Lcd)) {
      return false;
    } else {
      return this.text === e.text;
    }
  }
  toString() {
    return `word("${this.text}")${this.range}`;
  }
};
