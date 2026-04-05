"use strict";

// Module: out-build/external/bufbuild/protobuf/private/field.js
// Offset: 2528558 (bundle byte offset)
// Size: 1087 bytes
u5n();
BRe();
c1h = class {
  constructor(n) {
    this.kind = "oneof";
    this.repeated = false;
    this.packed = false;
    this.opt = false;
    this.req = false;
    this.default = undefined;
    this.fields = [];
    this.name = n;
    this.localName = PmA(n);
  }
  addField(n) {
    x9(n.oneof === this, `field ${n.name} not one of ${this.name}`);
    this.fields.push(n);
  }
  findField(n) {
    if (!this._lookup) {
      this._lookup = Object.create(null);
      for (let e = 0; e < this.fields.length; e++) {
        this._lookup[this.fields[e].localName] = this.fields[e];
      }
    }
    return this._lookup[n];
  }
};
