"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js
// Offset: 1089007 (bundle byte offset)
// Size: 2893 bytes
Vs();
iOo();
X5e();
uOo = class lNi {
  constructor(e, t, i) {
    this.modified = e;
    this.lengthBefore = t;
    this.lengthAfter = i;
  }
  splitAt(e) {
    const t = aOn(e, this.lengthAfter);
    if (hph(t, vW)) {
      return [this, undefined];
    } else if (this.modified) {
      return [new lNi(this.modified, this.lengthBefore, e), new lNi(this.modified, vW, t)];
    } else {
      return [new lNi(this.modified, e, e), new lNi(this.modified, t, t)];
    }
  }
  toString() {
    return `${this.modified ? "M" : "U"}:${Lde(this.lengthBefore)} -> ${Lde(this.lengthAfter)}`;
  }
};
