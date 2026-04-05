"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/tokens/fileReference.js
// Offset: 31084876 (bundle byte offset)
// Size: 427 bytes
Hgu();
Lv();
ISa = "file";
o0i = class Ncd extends Y_i {
  constructor(e, t) {
    super(e, ISa, t);
    this.path = t;
  }
  static from(e) {
    Qb(e.name === ISa, `Variable name must be '${ISa}', got '${e.name}'.`);
    return new Ncd(e.range, e.data);
  }
  equals(e) {
    if (e instanceof Ncd) {
      return super.equals(e);
    } else {
      return false;
    }
  }
  get linkRange() {
    return super.dataRange;
  }
};
