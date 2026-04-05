"use strict";

// Module: out-build/vs/base/common/verifier.js
// Offset: 31107644 (bundle byte offset)
// Size: 4483 bytes
Js();
efn = class {
  constructor(n) {
    this.defaultValue = n;
  }
  verify(n) {
    if (this.isType(n)) {
      return n;
    } else {
      return this.defaultValue;
    }
  }
};
DM = class extends efn {
  isType(n) {
    return typeof n == "boolean";
  }
};
qSa = class extends efn {
  isType(n) {
    return typeof n == "number";
  }
};
ZIf = class extends efn {
  isType(n) {
    return n instanceof Set;
  }
};
Oie = class extends efn {
  constructor(n, e) {
    super(n);
    this.allowedValues = e;
  }
  isType(n) {
    return this.allowedValues.includes(n);
  }
};
ufu = class extends efn {
  constructor(n, e) {
    super(n);
    this.verifier = e;
  }
  verify(n) {
    if (this.isType(n)) {
      return YIf(this.verifier, n);
    } else {
      return this.defaultValue;
    }
  }
  isType(n) {
    return $g(n);
  }
};
