"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/type_pb.js
// Offset: 2589522 (bundle byte offset)
// Size: 5709 bytes
pve();
$te();
vRc();
gRc();
(function (n) {
  n[n.PROTO2 = 0] = "PROTO2";
  n[n.PROTO3 = 1] = "PROTO3";
  n[n.EDITIONS = 2] = "EDITIONS";
})(ike ||= {});
v.util.setEnumType(ike, "google.protobuf.Syntax", [{
  no: 0,
  name: "SYNTAX_PROTO2"
}, {
  no: 1,
  name: "SYNTAX_PROTO3"
}, {
  no: 2,
  name: "SYNTAX_EDITIONS"
}]);
cpA = class aMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.fields = [];
    this.oneofs = [];
    this.options = [];
    this.syntax = ike.PROTO2;
    this.edition = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Type";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "fields",
      kind: "message",
      T: W1h,
      repeated: true
    }, {
      no: 3,
      name: "oneofs",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }, {
      no: 5,
      name: "source_context",
      kind: "message",
      T: L9o
    }, {
      no: 6,
      name: "syntax",
      kind: "enum",
      T: v.getEnumType(ike)
    }, {
      no: 7,
      name: "edition",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aMi, e, t);
  }
};
W1h = class cMi extends ie {
  constructor(e) {
    super();
    this.kind = v5n.TYPE_UNKNOWN;
    this.cardinality = A5n.UNKNOWN;
    this.number = 0;
    this.name = "";
    this.typeUrl = "";
    this.oneofIndex = 0;
    this.packed = false;
    this.options = [];
    this.jsonName = "";
    this.defaultValue = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Field";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "kind",
      kind: "enum",
      T: v.getEnumType(v5n)
    }, {
      no: 2,
      name: "cardinality",
      kind: "enum",
      T: v.getEnumType(A5n)
    }, {
      no: 3,
      name: "number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "type_url",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "oneof_index",
      kind: "scalar",
      T: 5
    }, {
      no: 8,
      name: "packed",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }, {
      no: 10,
      name: "json_name",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "default_value",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new cMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cMi, e, t);
  }
};
(function (n) {
  n[n.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN";
  n[n.TYPE_DOUBLE = 1] = "TYPE_DOUBLE";
  n[n.TYPE_FLOAT = 2] = "TYPE_FLOAT";
  n[n.TYPE_INT64 = 3] = "TYPE_INT64";
  n[n.TYPE_UINT64 = 4] = "TYPE_UINT64";
  n[n.TYPE_INT32 = 5] = "TYPE_INT32";
  n[n.TYPE_FIXED64 = 6] = "TYPE_FIXED64";
  n[n.TYPE_FIXED32 = 7] = "TYPE_FIXED32";
  n[n.TYPE_BOOL = 8] = "TYPE_BOOL";
  n[n.TYPE_STRING = 9] = "TYPE_STRING";
  n[n.TYPE_GROUP = 10] = "TYPE_GROUP";
  n[n.TYPE_MESSAGE = 11] = "TYPE_MESSAGE";
  n[n.TYPE_BYTES = 12] = "TYPE_BYTES";
  n[n.TYPE_UINT32 = 13] = "TYPE_UINT32";
  n[n.TYPE_ENUM = 14] = "TYPE_ENUM";
  n[n.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32";
  n[n.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64";
  n[n.TYPE_SINT32 = 17] = "TYPE_SINT32";
  n[n.TYPE_SINT64 = 18] = "TYPE_SINT64";
})(v5n ||= {});
v.util.setEnumType(v5n, "google.protobuf.Field.Kind", [{
  no: 0,
  name: "TYPE_UNKNOWN"
}, {
  no: 1,
  name: "TYPE_DOUBLE"
}, {
  no: 2,
  name: "TYPE_FLOAT"
}, {
  no: 3,
  name: "TYPE_INT64"
}, {
  no: 4,
  name: "TYPE_UINT64"
}, {
  no: 5,
  name: "TYPE_INT32"
}, {
  no: 6,
  name: "TYPE_FIXED64"
}, {
  no: 7,
  name: "TYPE_FIXED32"
}, {
  no: 8,
  name: "TYPE_BOOL"
}, {
  no: 9,
  name: "TYPE_STRING"
}, {
  no: 10,
  name: "TYPE_GROUP"
}, {
  no: 11,
  name: "TYPE_MESSAGE"
}, {
  no: 12,
  name: "TYPE_BYTES"
}, {
  no: 13,
  name: "TYPE_UINT32"
}, {
  no: 14,
  name: "TYPE_ENUM"
}, {
  no: 15,
  name: "TYPE_SFIXED32"
}, {
  no: 16,
  name: "TYPE_SFIXED64"
}, {
  no: 17,
  name: "TYPE_SINT32"
}, {
  no: 18,
  name: "TYPE_SINT64"
}]);
(function (n) {
  n[n.UNKNOWN = 0] = "UNKNOWN";
  n[n.OPTIONAL = 1] = "OPTIONAL";
  n[n.REQUIRED = 2] = "REQUIRED";
  n[n.REPEATED = 3] = "REPEATED";
})(A5n ||= {});
v.util.setEnumType(A5n, "google.protobuf.Field.Cardinality", [{
  no: 0,
  name: "CARDINALITY_UNKNOWN"
}, {
  no: 1,
  name: "CARDINALITY_OPTIONAL"
}, {
  no: 2,
  name: "CARDINALITY_REQUIRED"
}, {
  no: 3,
  name: "CARDINALITY_REPEATED"
}]);
lpA = class lMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.enumvalue = [];
    this.options = [];
    this.syntax = ike.PROTO2;
    this.edition = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Enum";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "enumvalue",
      kind: "message",
      T: Q1h,
      repeated: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }, {
      no: 4,
      name: "source_context",
      kind: "message",
      T: L9o
    }, {
      no: 5,
      name: "syntax",
      kind: "enum",
      T: v.getEnumType(ike)
    }, {
      no: 6,
      name: "edition",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new lMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lMi, e, t);
  }
};
Q1h = class uMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.number = 0;
    this.options = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.EnumValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new uMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uMi, e, t);
  }
};
Ibt = class dMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Option";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "message",
      T: pRc
    }]);
  }
  static fromBinary(e, t) {
    return new dMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dMi, e, t);
  }
};
