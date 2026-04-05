"use strict";

// Module: out-build/vs/base/common/result.js
// Offset: 33815193 (bundle byte offset)
// Size: 355 bytes
N0u = class {
  constructor() {
    this.ok_ = false;
  }
  ok() {
    return this.ok_;
  }
  context(n) {
    if (this.ok_) {
      return this;
    } else {
      return Cxe(`${n}: ${this.err}`);
    }
  }
};
ZUf = class extends N0u {
  constructor(n) {
    super();
    this.ok_ = true;
    this.v = n;
    this.err = undefined;
  }
};
XUf = class extends N0u {
  constructor(n) {
    super();
    this.ok_ = false;
    this.err = n;
    this.v = undefined;
  }
};
