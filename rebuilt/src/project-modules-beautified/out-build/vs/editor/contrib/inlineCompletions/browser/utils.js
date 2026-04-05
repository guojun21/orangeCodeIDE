"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/utils.js
// Offset: 25292083 (bundle byte offset)
// Size: 734 bytes
Vs();
_s();
Uc();
AF();
tl();
vIc();
ts();
EW();
JAg = [];
GAg = class {
  constructor(n, e) {
    this.startColumn = n;
    this.endColumnExclusive = e;
    if (n > e) {
      throw new _m(`startColumn ${n} cannot be after endColumnExclusive ${e}`);
    }
  }
  toRange(n) {
    return new Zt(n, this.startColumn, n, this.endColumnExclusive);
  }
  equals(n) {
    return this.startColumn === n.startColumn && this.endColumnExclusive === n.endColumnExclusive;
  }
};
WAg = class {
  constructor(n) {
    this._contextKeyService = n;
  }
  bind(n, e) {
    return eM(n, this._contextKeyService, e instanceof Function ? e : t => e.read(t));
  }
};
