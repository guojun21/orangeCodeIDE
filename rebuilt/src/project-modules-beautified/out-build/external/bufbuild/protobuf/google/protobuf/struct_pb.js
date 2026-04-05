"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/struct_pb.js
// Offset: 2573956 (bundle byte offset)
// Size: 3538 bytes
pve();
$te();
(function (n) {
  n[n.NULL_VALUE = 0] = "NULL_VALUE";
})(i5t ||= {});
v.util.setEnumType(i5t, "google.protobuf.NullValue", [{
  no: 0,
  name: "NULL_VALUE"
}]);
jR = class XNi extends ie {
  constructor(e) {
    super();
    this.fields = {};
    v.util.initPartial(e, this);
  }
  toJson(e) {
    const t = {};
    for (const [i, r] of Object.entries(this.fields)) {
      t[i] = r.toJson(e);
    }
    return t;
  }
  fromJson(e, t) {
    if (typeof e != "object" || e == null || Array.isArray(e)) {
      throw new Error("cannot decode google.protobuf.Struct from JSON " + v.json.debug(e));
    }
    for (const [i, r] of Object.entries(e)) {
      this.fields[i] = Zde.fromJson(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Struct";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "fields",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: Zde
      }
    }]);
  }
  static fromBinary(e, t) {
    return new XNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XNi, e, t);
  }
};
Zde = class eMi extends ie {
  constructor(e) {
    super();
    this.kind = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  toJson(e) {
    switch (this.kind.case) {
      case "nullValue":
        return null;
      case "numberValue":
        if (!Number.isFinite(this.kind.value)) {
          throw new Error("google.protobuf.Value cannot be NaN or Infinity");
        }
        return this.kind.value;
      case "boolValue":
        return this.kind.value;
      case "stringValue":
        return this.kind.value;
      case "structValue":
      case "listValue":
        return this.kind.value.toJson({
          ...e,
          emitDefaultValues: true
        });
    }
    throw new Error("google.protobuf.Value must have a value");
  }
  fromJson(e, t) {
    switch (typeof e) {
      case "number":
        this.kind = {
          case: "numberValue",
          value: e
        };
        break;
      case "string":
        this.kind = {
          case: "stringValue",
          value: e
        };
        break;
      case "boolean":
        this.kind = {
          case: "boolValue",
          value: e
        };
        break;
      case "object":
        if (e === null) {
          this.kind = {
            case: "nullValue",
            value: i5t.NULL_VALUE
          };
        } else if (Array.isArray(e)) {
          this.kind = {
            case: "listValue",
            value: fRc.fromJson(e)
          };
        } else {
          this.kind = {
            case: "structValue",
            value: jR.fromJson(e)
          };
        }
        break;
      default:
        throw new Error("cannot decode google.protobuf.Value from JSON " + v.json.debug(e));
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Value";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "null_value",
      kind: "enum",
      T: v.getEnumType(i5t),
      oneof: "kind"
    }, {
      no: 2,
      name: "number_value",
      kind: "scalar",
      T: 1,
      oneof: "kind"
    }, {
      no: 3,
      name: "string_value",
      kind: "scalar",
      T: 9,
      oneof: "kind"
    }, {
      no: 4,
      name: "bool_value",
      kind: "scalar",
      T: 8,
      oneof: "kind"
    }, {
      no: 5,
      name: "struct_value",
      kind: "message",
      T: jR,
      oneof: "kind"
    }, {
      no: 6,
      name: "list_value",
      kind: "message",
      T: fRc,
      oneof: "kind"
    }]);
  }
  static fromBinary(e, t) {
    return new eMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eMi, e, t);
  }
};
fRc = class tMi extends ie {
  constructor(e) {
    super();
    this.values = [];
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return this.values.map(t => t.toJson());
  }
  fromJson(e, t) {
    if (!Array.isArray(e)) {
      throw new Error("cannot decode google.protobuf.ListValue from JSON " + v.json.debug(e));
    }
    for (let i of e) {
      this.values.push(Zde.fromJson(i));
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.ListValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "values",
      kind: "message",
      T: Zde,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new tMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tMi, e, t);
  }
};
