"use strict";

// Module: out-build/vs/platform/registry/common/platform.js
// Offset: 637122 (bundle byte offset)
// Size: 614 bytes
Lv();
Js();
Fah = class {
  constructor() {
    this.data = new Map();
  }
  add(n, e) {
    PFt(Qo(n));
    PFt($g(e));
    PFt(!this.data.has(n), "There is already an extension with this id");
    this.data.set(n, e);
  }
  knows(n) {
    return this.data.has(n);
  }
  as(n) {
    return this.data.get(n) || null;
  }
  dispose() {
    this.data.forEach(n => {
      if (Aze(n.dispose)) {
        n.dispose();
      }
    });
    this.data.clear();
  }
};
Di = new Fah();
