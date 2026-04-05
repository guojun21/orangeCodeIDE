"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/any_pb.js
// Offset: 2569369 (bundle byte offset)
// Size: 2548 bytes
$te();
pve();
pRc = class QCn extends ie {
  constructor(e) {
    super();
    this.typeUrl = "";
    this.value = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  toJson(e) {
    if (this.typeUrl === "") {
      return {};
    }
    const t = this.typeUrlToName(this.typeUrl);
    const i = e?.typeRegistry?.findMessage(t);
    if (!i) {
      throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
    }
    let s = i.fromBinary(this.value).toJson(e);
    if (t.startsWith("google.protobuf.") || s === null || Array.isArray(s) || typeof s != "object") {
      s = {
        value: s
      };
    }
    s["@type"] = this.typeUrl;
    return s;
  }
  fromJson(e, t) {
    if (e === null || Array.isArray(e) || typeof e != "object") {
      throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${e === null ? "null" : Array.isArray(e) ? "array" : typeof e}`);
    }
    if (Object.keys(e).length == 0) {
      return this;
    }
    const i = e["@type"];
    if (typeof i != "string" || i == "") {
      throw new Error("cannot decode message google.protobuf.Any from JSON: \"@type\" is empty");
    }
    const r = this.typeUrlToName(i);
    const s = t?.typeRegistry?.findMessage(r);
    if (!s) {
      throw new Error(`cannot decode message google.protobuf.Any from JSON: ${i} is not in the type registry`);
    }
    let o;
    if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) {
      o = s.fromJson(e.value, t);
    } else {
      const a = Object.assign({}, e);
      delete a["@type"];
      o = s.fromJson(a, t);
    }
    this.packFrom(o);
    return this;
  }
  packFrom(e) {
    this.value = e.toBinary();
    this.typeUrl = this.typeNameToUrl(e.getType().typeName);
  }
  unpackTo(e) {
    if (this.is(e.getType())) {
      e.fromBinary(this.value);
      return true;
    } else {
      return false;
    }
  }
  unpack(e) {
    if (this.typeUrl === "") {
      return;
    }
    const t = e.findMessage(this.typeUrlToName(this.typeUrl));
    if (t) {
      return t.fromBinary(this.value);
    }
  }
  is(e) {
    if (this.typeUrl === "") {
      return false;
    }
    const t = this.typeUrlToName(this.typeUrl);
    let i = "";
    if (typeof e == "string") {
      i = e;
    } else {
      i = e.typeName;
    }
    return t === i;
  }
  typeNameToUrl(e) {
    return `type.googleapis.com/${e}`;
  }
  typeUrlToName(e) {
    if (!e.length) {
      throw new Error(`invalid type url: ${e}`);
    }
    const t = e.lastIndexOf("/");
    const i = t >= 0 ? e.substring(t + 1) : e;
    if (!i.length) {
      throw new Error(`invalid type url: ${e}`);
    }
    return i;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Any";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 12
    }]);
  }
  static pack(e) {
    const t = new QCn();
    t.packFrom(e);
    return t;
  }
  static fromBinary(e, t) {
    return new QCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QCn, e, t);
  }
};
