"use strict";

// Module: out-build/external/bufbuild/protobuf/private/field-list.js
// Offset: 2527043 (bundle byte offset)
// Size: 1164 bytes
lRc = class {
  constructor(n, e) {
    this._fields = n;
    this._normalizer = e;
  }
  findJsonName(n) {
    if (!this.jsonNames) {
      const e = {};
      for (const t of this.list()) {
        e[t.jsonName] = e[t.name] = t;
      }
      this.jsonNames = e;
    }
    return this.jsonNames[n];
  }
  find(n) {
    if (!this.numbers) {
      const e = {};
      for (const t of this.list()) {
        e[t.no] = t;
      }
      this.numbers = e;
    }
    return this.numbers[n];
  }
  list() {
    this.all ||= this._normalizer(this._fields);
    return this.all;
  }
  byNumber() {
    this.numbersAsc ||= this.list().concat().sort((n, e) => n.no - e.no);
    return this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const n = this.members;
      let e;
      for (const t of this.list()) {
        if (t.oneof) {
          if (t.oneof !== e) {
            e = t.oneof;
            n.push(e);
          }
        } else {
          n.push(t);
        }
      }
    }
    return this.members;
  }
};
