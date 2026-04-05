"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/field_mask_pb.js
// Offset: 2572437 (bundle byte offset)
// Size: 1519 bytes
$te();
pve();
QmA = class ZNi extends ie {
  constructor(e) {
    super();
    this.paths = [];
    v.util.initPartial(e, this);
  }
  toJson(e) {
    function t(i) {
      let r = false;
      const s = [];
      for (let o = 0; o < i.length; o++) {
        let a = i.charAt(o);
        switch (a) {
          case "_":
            r = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            s.push(a);
            r = false;
            break;
          default:
            if (r) {
              r = false;
              a = a.toUpperCase();
            }
            s.push(a);
            break;
        }
      }
      return s.join("");
    }
    return this.paths.map(i => {
      if (i.match(/_[0-9]?_/g) || i.match(/[A-Z]/g)) {
        throw new Error("cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name \"" + i + "\" is irreversible");
      }
      return t(i);
    }).join(",");
  }
  fromJson(e, t) {
    if (typeof e != "string") {
      throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + v.json.debug(e));
    }
    if (e === "") {
      return this;
    }
    function i(r) {
      if (r.includes("_")) {
        throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      }
      const s = r.replace(/[A-Z]/g, o => "_" + o.toLowerCase());
      if (s[0] === "_") {
        return s.substring(1);
      } else {
        return s;
      }
    }
    this.paths = e.split(",").map(i);
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.FieldMask";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ZNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZNi, e, t);
  }
};
