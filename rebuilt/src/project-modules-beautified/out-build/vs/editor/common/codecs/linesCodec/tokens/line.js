"use strict";

// Module: out-build/vs/editor/common/codecs/linesCodec/tokens/line.js
// Offset: 31077503 (bundle byte offset)
// Size: 427 bytes
MV();
Lv();
ts();
SIf = class djb extends NU {
  constructor(e, t) {
    Qb(!isNaN(e), "The line number must not be a NaN.");
    Qb(e > 0, `The line number must be >= 1, got "${e}".`);
    super(new Zt(e, 1, e, t.length + 1));
    this.text = t;
  }
  equals(e) {
    if (!super.equals(e) || !(e instanceof djb)) {
      return false;
    } else {
      return this.text === e.text;
    }
  }
  toString() {
    return `line("${this.text}")${this.range}`;
  }
};
