"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/descriptor_pb.js
// Offset: 2531584 (bundle byte offset)
// Size: 32043 bytes
y9o();
$te();
(function (n) {
  n[n.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN";
  n[n.EDITION_LEGACY = 900] = "EDITION_LEGACY";
  n[n.EDITION_PROTO2 = 998] = "EDITION_PROTO2";
  n[n.EDITION_PROTO3 = 999] = "EDITION_PROTO3";
  n[n.EDITION_2023 = 1000] = "EDITION_2023";
  n[n.EDITION_2024 = 1001] = "EDITION_2024";
  n[n.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY";
  n[n.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY";
  n[n.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY";
  n[n.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY";
  n[n.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY";
  n[n.EDITION_MAX = 2147483647] = "EDITION_MAX";
})(nke ||= {});
Rc.util.setEnumType(nke, "google.protobuf.Edition", [{
  no: 0,
  name: "EDITION_UNKNOWN"
}, {
  no: 900,
  name: "EDITION_LEGACY"
}, {
  no: 998,
  name: "EDITION_PROTO2"
}, {
  no: 999,
  name: "EDITION_PROTO3"
}, {
  no: 1000,
  name: "EDITION_2023"
}, {
  no: 1001,
  name: "EDITION_2024"
}, {
  no: 1,
  name: "EDITION_1_TEST_ONLY"
}, {
  no: 2,
  name: "EDITION_2_TEST_ONLY"
}, {
  no: 99997,
  name: "EDITION_99997_TEST_ONLY"
}, {
  no: 99998,
  name: "EDITION_99998_TEST_ONLY"
}, {
  no: 99999,
  name: "EDITION_99999_TEST_ONLY"
}, {
  no: 2147483647,
  name: "EDITION_MAX"
}]);
$mA = class vNi extends ie {
  constructor(e) {
    super();
    this.file = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FileDescriptorSet";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: w9o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new vNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(vNi, e, t);
  }
};
w9o = class ANi extends ie {
  constructor(e) {
    super();
    this.dependency = [];
    this.publicDependency = [];
    this.weakDependency = [];
    this.messageType = [];
    this.enumType = [];
    this.service = [];
    this.extension = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FileDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "package",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "dependency",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 10,
      name: "public_dependency",
      kind: "scalar",
      T: 5,
      repeated: true
    }, {
      no: 11,
      name: "weak_dependency",
      kind: "scalar",
      T: 5,
      repeated: true
    }, {
      no: 4,
      name: "message_type",
      kind: "message",
      T: m1h,
      repeated: true
    }, {
      no: 5,
      name: "enum_type",
      kind: "message",
      T: dRc,
      repeated: true
    }, {
      no: 6,
      name: "service",
      kind: "message",
      T: w1h,
      repeated: true
    }, {
      no: 7,
      name: "extension",
      kind: "message",
      T: _9o,
      repeated: true
    }, {
      no: 8,
      name: "options",
      kind: "message",
      T: C1h,
      opt: true
    }, {
      no: 9,
      name: "source_code_info",
      kind: "message",
      T: L1h,
      opt: true
    }, {
      no: 12,
      name: "syntax",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 14,
      name: "edition",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ANi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ANi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ANi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(ANi, e, t);
  }
};
m1h = class WCn extends ie {
  constructor(e) {
    super();
    this.field = [];
    this.extension = [];
    this.nestedType = [];
    this.enumType = [];
    this.extensionRange = [];
    this.oneofDecl = [];
    this.reservedRange = [];
    this.reservedName = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.DescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "field",
      kind: "message",
      T: _9o,
      repeated: true
    }, {
      no: 6,
      name: "extension",
      kind: "message",
      T: _9o,
      repeated: true
    }, {
      no: 3,
      name: "nested_type",
      kind: "message",
      T: WCn,
      repeated: true
    }, {
      no: 4,
      name: "enum_type",
      kind: "message",
      T: dRc,
      repeated: true
    }, {
      no: 5,
      name: "extension_range",
      kind: "message",
      T: p1h,
      repeated: true
    }, {
      no: 8,
      name: "oneof_decl",
      kind: "message",
      T: v1h,
      repeated: true
    }, {
      no: 7,
      name: "options",
      kind: "message",
      T: S1h,
      opt: true
    }, {
      no: 9,
      name: "reserved_range",
      kind: "message",
      T: g1h,
      repeated: true
    }, {
      no: 10,
      name: "reserved_name",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new WCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(WCn, e, t);
  }
};
p1h = class yNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "start",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "end",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: f1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new yNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(yNi, e, t);
  }
};
g1h = class wNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.DescriptorProto.ReservedRange";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "start",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "end",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new wNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(wNi, e, t);
  }
};
f1h = class _Ni extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    this.declaration = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.ExtensionRangeOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }, {
      no: 2,
      name: "declaration",
      kind: "message",
      T: b1h,
      repeated: true
    }, {
      no: 50,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 3,
      name: "verification",
      kind: "enum",
      T: Rc.getEnumType(d5n),
      opt: true,
      default: d5n.UNVERIFIED
    }]);
  }
  static fromBinary(e, t) {
    return new _Ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(_Ni, e, t);
  }
};
(function (n) {
  n[n.DECLARATION = 0] = "DECLARATION";
  n[n.UNVERIFIED = 1] = "UNVERIFIED";
})(d5n ||= {});
Rc.util.setEnumType(d5n, "google.protobuf.ExtensionRangeOptions.VerificationState", [{
  no: 0,
  name: "DECLARATION"
}, {
  no: 1,
  name: "UNVERIFIED"
}]);
b1h = class CNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "full_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "reserved",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "repeated",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new CNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(CNi, e, t);
  }
};
_9o = class SNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FieldDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "label",
      kind: "enum",
      T: Rc.getEnumType(C9o),
      opt: true
    }, {
      no: 5,
      name: "type",
      kind: "enum",
      T: Rc.getEnumType(T9),
      opt: true
    }, {
      no: 6,
      name: "type_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "extendee",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "default_value",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "oneof_index",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "json_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "options",
      kind: "message",
      T: k1h,
      opt: true
    }, {
      no: 17,
      name: "proto3_optional",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new SNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(SNi, e, t);
  }
};
(function (n) {
  n[n.DOUBLE = 1] = "DOUBLE";
  n[n.FLOAT = 2] = "FLOAT";
  n[n.INT64 = 3] = "INT64";
  n[n.UINT64 = 4] = "UINT64";
  n[n.INT32 = 5] = "INT32";
  n[n.FIXED64 = 6] = "FIXED64";
  n[n.FIXED32 = 7] = "FIXED32";
  n[n.BOOL = 8] = "BOOL";
  n[n.STRING = 9] = "STRING";
  n[n.GROUP = 10] = "GROUP";
  n[n.MESSAGE = 11] = "MESSAGE";
  n[n.BYTES = 12] = "BYTES";
  n[n.UINT32 = 13] = "UINT32";
  n[n.ENUM = 14] = "ENUM";
  n[n.SFIXED32 = 15] = "SFIXED32";
  n[n.SFIXED64 = 16] = "SFIXED64";
  n[n.SINT32 = 17] = "SINT32";
  n[n.SINT64 = 18] = "SINT64";
})(T9 ||= {});
Rc.util.setEnumType(T9, "google.protobuf.FieldDescriptorProto.Type", [{
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
  n[n.OPTIONAL = 1] = "OPTIONAL";
  n[n.REPEATED = 3] = "REPEATED";
  n[n.REQUIRED = 2] = "REQUIRED";
})(C9o ||= {});
Rc.util.setEnumType(C9o, "google.protobuf.FieldDescriptorProto.Label", [{
  no: 1,
  name: "LABEL_OPTIONAL"
}, {
  no: 3,
  name: "LABEL_REPEATED"
}, {
  no: 2,
  name: "LABEL_REQUIRED"
}]);
v1h = class kNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.OneofDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "options",
      kind: "message",
      T: x1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new kNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(kNi, e, t);
  }
};
dRc = class ENi extends ie {
  constructor(e) {
    super();
    this.value = [];
    this.reservedRange = [];
    this.reservedName = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.EnumDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "value",
      kind: "message",
      T: y1h,
      repeated: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: T1h,
      opt: true
    }, {
      no: 4,
      name: "reserved_range",
      kind: "message",
      T: A1h,
      repeated: true
    }, {
      no: 5,
      name: "reserved_name",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ENi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ENi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ENi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(ENi, e, t);
  }
};
A1h = class xNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "start",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "end",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(xNi, e, t);
  }
};
y1h = class TNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.EnumValueDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: I1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new TNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(TNi, e, t);
  }
};
w1h = class INi extends ie {
  constructor(e) {
    super();
    this.method = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.ServiceDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "method",
      kind: "message",
      T: _1h,
      repeated: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: D1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new INi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new INi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new INi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(INi, e, t);
  }
};
_1h = class DNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.MethodDescriptorProto";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "input_type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "output_type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "options",
      kind: "message",
      T: B1h,
      opt: true
    }, {
      no: 5,
      name: "client_streaming",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 6,
      name: "server_streaming",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }]);
  }
  static fromBinary(e, t) {
    return new DNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(DNi, e, t);
  }
};
C1h = class BNi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FileOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "java_package",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "java_outer_classname",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "java_multiple_files",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 20,
      name: "java_generate_equals_and_hash",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 27,
      name: "java_string_check_utf8",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 9,
      name: "optimize_for",
      kind: "enum",
      T: Rc.getEnumType(h5n),
      opt: true,
      default: h5n.SPEED
    }, {
      no: 11,
      name: "go_package",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 16,
      name: "cc_generic_services",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 17,
      name: "java_generic_services",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 18,
      name: "py_generic_services",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 23,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 31,
      name: "cc_enable_arenas",
      kind: "scalar",
      T: 8,
      opt: true,
      default: true
    }, {
      no: 36,
      name: "objc_class_prefix",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 37,
      name: "csharp_namespace",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 39,
      name: "swift_prefix",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 40,
      name: "php_class_prefix",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 41,
      name: "php_namespace",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 44,
      name: "php_metadata_namespace",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 45,
      name: "ruby_package",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 50,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new BNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(BNi, e, t);
  }
};
(function (n) {
  n[n.SPEED = 1] = "SPEED";
  n[n.CODE_SIZE = 2] = "CODE_SIZE";
  n[n.LITE_RUNTIME = 3] = "LITE_RUNTIME";
})(h5n ||= {});
Rc.util.setEnumType(h5n, "google.protobuf.FileOptions.OptimizeMode", [{
  no: 1,
  name: "SPEED"
}, {
  no: 2,
  name: "CODE_SIZE"
}, {
  no: 3,
  name: "LITE_RUNTIME"
}]);
S1h = class RNi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.MessageOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "message_set_wire_format",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 2,
      name: "no_standard_descriptor_accessor",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 3,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 7,
      name: "map_entry",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "deprecated_legacy_json_field_conflicts",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new RNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(RNi, e, t);
  }
};
k1h = class PNi extends ie {
  constructor(e) {
    super();
    this.targets = [];
    this.editionDefaults = [];
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FieldOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "ctype",
      kind: "enum",
      T: Rc.getEnumType(m5n),
      opt: true,
      default: m5n.STRING
    }, {
      no: 2,
      name: "packed",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "jstype",
      kind: "enum",
      T: Rc.getEnumType(p5n),
      opt: true,
      default: p5n.JS_NORMAL
    }, {
      no: 5,
      name: "lazy",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 15,
      name: "unverified_lazy",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 3,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 10,
      name: "weak",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 16,
      name: "debug_redact",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 17,
      name: "retention",
      kind: "enum",
      T: Rc.getEnumType(S9o),
      opt: true
    }, {
      no: 19,
      name: "targets",
      kind: "enum",
      T: Rc.getEnumType(k9o),
      repeated: true
    }, {
      no: 20,
      name: "edition_defaults",
      kind: "message",
      T: E1h,
      repeated: true
    }, {
      no: 21,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 22,
      name: "feature_support",
      kind: "message",
      T: hRc,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new PNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(PNi, e, t);
  }
};
(function (n) {
  n[n.STRING = 0] = "STRING";
  n[n.CORD = 1] = "CORD";
  n[n.STRING_PIECE = 2] = "STRING_PIECE";
})(m5n ||= {});
Rc.util.setEnumType(m5n, "google.protobuf.FieldOptions.CType", [{
  no: 0,
  name: "STRING"
}, {
  no: 1,
  name: "CORD"
}, {
  no: 2,
  name: "STRING_PIECE"
}]);
(function (n) {
  n[n.JS_NORMAL = 0] = "JS_NORMAL";
  n[n.JS_STRING = 1] = "JS_STRING";
  n[n.JS_NUMBER = 2] = "JS_NUMBER";
})(p5n ||= {});
Rc.util.setEnumType(p5n, "google.protobuf.FieldOptions.JSType", [{
  no: 0,
  name: "JS_NORMAL"
}, {
  no: 1,
  name: "JS_STRING"
}, {
  no: 2,
  name: "JS_NUMBER"
}]);
(function (n) {
  n[n.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN";
  n[n.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME";
  n[n.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
})(S9o ||= {});
Rc.util.setEnumType(S9o, "google.protobuf.FieldOptions.OptionRetention", [{
  no: 0,
  name: "RETENTION_UNKNOWN"
}, {
  no: 1,
  name: "RETENTION_RUNTIME"
}, {
  no: 2,
  name: "RETENTION_SOURCE"
}]);
(function (n) {
  n[n.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN";
  n[n.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE";
  n[n.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE";
  n[n.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE";
  n[n.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD";
  n[n.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF";
  n[n.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM";
  n[n.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY";
  n[n.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE";
  n[n.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
})(k9o ||= {});
Rc.util.setEnumType(k9o, "google.protobuf.FieldOptions.OptionTargetType", [{
  no: 0,
  name: "TARGET_TYPE_UNKNOWN"
}, {
  no: 1,
  name: "TARGET_TYPE_FILE"
}, {
  no: 2,
  name: "TARGET_TYPE_EXTENSION_RANGE"
}, {
  no: 3,
  name: "TARGET_TYPE_MESSAGE"
}, {
  no: 4,
  name: "TARGET_TYPE_FIELD"
}, {
  no: 5,
  name: "TARGET_TYPE_ONEOF"
}, {
  no: 6,
  name: "TARGET_TYPE_ENUM"
}, {
  no: 7,
  name: "TARGET_TYPE_ENUM_ENTRY"
}, {
  no: 8,
  name: "TARGET_TYPE_SERVICE"
}, {
  no: 9,
  name: "TARGET_TYPE_METHOD"
}]);
E1h = class LNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FieldOptions.EditionDefault";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 3,
      name: "edition",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new LNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(LNi, e, t);
  }
};
hRc = class NNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FieldOptions.FeatureSupport";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "edition_introduced",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }, {
      no: 2,
      name: "edition_deprecated",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }, {
      no: 3,
      name: "deprecation_warning",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "edition_removed",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new NNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(NNi, e, t);
  }
};
x1h = class MNi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.OneofOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new MNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(MNi, e, t);
  }
};
T1h = class FNi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.EnumOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 2,
      name: "allow_alias",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 6,
      name: "deprecated_legacy_json_field_conflicts",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new FNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(FNi, e, t);
  }
};
I1h = class ONi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.EnumValueOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 2,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 3,
      name: "debug_redact",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 4,
      name: "feature_support",
      kind: "message",
      T: hRc,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ONi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ONi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ONi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(ONi, e, t);
  }
};
D1h = class UNi extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.ServiceOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 34,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 33,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new UNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(UNi, e, t);
  }
};
B1h = class $Ni extends ie {
  constructor(e) {
    super();
    this.uninterpretedOption = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.MethodOptions";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 33,
      name: "deprecated",
      kind: "scalar",
      T: 8,
      opt: true,
      default: false
    }, {
      no: 34,
      name: "idempotency_level",
      kind: "enum",
      T: Rc.getEnumType(g5n),
      opt: true,
      default: g5n.IDEMPOTENCY_UNKNOWN
    }, {
      no: 35,
      name: "features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 999,
      name: "uninterpreted_option",
      kind: "message",
      T: LRe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $Ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals($Ni, e, t);
  }
};
(function (n) {
  n[n.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN";
  n[n.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS";
  n[n.IDEMPOTENT = 2] = "IDEMPOTENT";
})(g5n ||= {});
Rc.util.setEnumType(g5n, "google.protobuf.MethodOptions.IdempotencyLevel", [{
  no: 0,
  name: "IDEMPOTENCY_UNKNOWN"
}, {
  no: 1,
  name: "NO_SIDE_EFFECTS"
}, {
  no: 2,
  name: "IDEMPOTENT"
}]);
LRe = class qNi extends ie {
  constructor(e) {
    super();
    this.name = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.UninterpretedOption";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 2,
      name: "name",
      kind: "message",
      T: R1h,
      repeated: true
    }, {
      no: 3,
      name: "identifier_value",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "positive_int_value",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 5,
      name: "negative_int_value",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 6,
      name: "double_value",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 7,
      name: "string_value",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 8,
      name: "aggregate_value",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new qNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(qNi, e, t);
  }
};
R1h = class HNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.UninterpretedOption.NamePart";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "name_part",
      kind: "scalar",
      T: 9,
      req: true
    }, {
      no: 2,
      name: "is_extension",
      kind: "scalar",
      T: 8,
      req: true
    }]);
  }
  static fromBinary(e, t) {
    return new HNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(HNi, e, t);
  }
};
gve = class JNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FeatureSet";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "field_presence",
      kind: "enum",
      T: Rc.getEnumType(E9o),
      opt: true
    }, {
      no: 2,
      name: "enum_type",
      kind: "enum",
      T: Rc.getEnumType(x9o),
      opt: true
    }, {
      no: 3,
      name: "repeated_field_encoding",
      kind: "enum",
      T: Rc.getEnumType(T9o),
      opt: true
    }, {
      no: 4,
      name: "utf8_validation",
      kind: "enum",
      T: Rc.getEnumType(I9o),
      opt: true
    }, {
      no: 5,
      name: "message_encoding",
      kind: "enum",
      T: Rc.getEnumType(D9o),
      opt: true
    }, {
      no: 6,
      name: "json_format",
      kind: "enum",
      T: Rc.getEnumType(B9o),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new JNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(JNi, e, t);
  }
};
(function (n) {
  n[n.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN";
  n[n.EXPLICIT = 1] = "EXPLICIT";
  n[n.IMPLICIT = 2] = "IMPLICIT";
  n[n.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
})(E9o ||= {});
Rc.util.setEnumType(E9o, "google.protobuf.FeatureSet.FieldPresence", [{
  no: 0,
  name: "FIELD_PRESENCE_UNKNOWN"
}, {
  no: 1,
  name: "EXPLICIT"
}, {
  no: 2,
  name: "IMPLICIT"
}, {
  no: 3,
  name: "LEGACY_REQUIRED"
}]);
(function (n) {
  n[n.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN";
  n[n.OPEN = 1] = "OPEN";
  n[n.CLOSED = 2] = "CLOSED";
})(x9o ||= {});
Rc.util.setEnumType(x9o, "google.protobuf.FeatureSet.EnumType", [{
  no: 0,
  name: "ENUM_TYPE_UNKNOWN"
}, {
  no: 1,
  name: "OPEN"
}, {
  no: 2,
  name: "CLOSED"
}]);
(function (n) {
  n[n.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
  n[n.PACKED = 1] = "PACKED";
  n[n.EXPANDED = 2] = "EXPANDED";
})(T9o ||= {});
Rc.util.setEnumType(T9o, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{
  no: 0,
  name: "REPEATED_FIELD_ENCODING_UNKNOWN"
}, {
  no: 1,
  name: "PACKED"
}, {
  no: 2,
  name: "EXPANDED"
}]);
(function (n) {
  n[n.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN";
  n[n.VERIFY = 2] = "VERIFY";
  n[n.NONE = 3] = "NONE";
})(I9o ||= {});
Rc.util.setEnumType(I9o, "google.protobuf.FeatureSet.Utf8Validation", [{
  no: 0,
  name: "UTF8_VALIDATION_UNKNOWN"
}, {
  no: 2,
  name: "VERIFY"
}, {
  no: 3,
  name: "NONE"
}]);
(function (n) {
  n[n.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN";
  n[n.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED";
  n[n.DELIMITED = 2] = "DELIMITED";
})(D9o ||= {});
Rc.util.setEnumType(D9o, "google.protobuf.FeatureSet.MessageEncoding", [{
  no: 0,
  name: "MESSAGE_ENCODING_UNKNOWN"
}, {
  no: 1,
  name: "LENGTH_PREFIXED"
}, {
  no: 2,
  name: "DELIMITED"
}]);
(function (n) {
  n[n.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN";
  n[n.ALLOW = 1] = "ALLOW";
  n[n.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
})(B9o ||= {});
Rc.util.setEnumType(B9o, "google.protobuf.FeatureSet.JsonFormat", [{
  no: 0,
  name: "JSON_FORMAT_UNKNOWN"
}, {
  no: 1,
  name: "ALLOW"
}, {
  no: 2,
  name: "LEGACY_BEST_EFFORT"
}]);
qmA = class GNi extends ie {
  constructor(e) {
    super();
    this.defaults = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FeatureSetDefaults";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "defaults",
      kind: "message",
      T: P1h,
      repeated: true
    }, {
      no: 4,
      name: "minimum_edition",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }, {
      no: 5,
      name: "maximum_edition",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new GNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(GNi, e, t);
  }
};
P1h = class WNi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 3,
      name: "edition",
      kind: "enum",
      T: Rc.getEnumType(nke),
      opt: true
    }, {
      no: 4,
      name: "overridable_features",
      kind: "message",
      T: gve,
      opt: true
    }, {
      no: 5,
      name: "fixed_features",
      kind: "message",
      T: gve,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new WNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(WNi, e, t);
  }
};
L1h = class QNi extends ie {
  constructor(e) {
    super();
    this.location = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.SourceCodeInfo";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "location",
      kind: "message",
      T: N1h,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new QNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(QNi, e, t);
  }
};
N1h = class jNi extends ie {
  constructor(e) {
    super();
    this.path = [];
    this.span = [];
    this.leadingDetachedComments = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.SourceCodeInfo.Location";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 5,
      repeated: true,
      packed: true
    }, {
      no: 2,
      name: "span",
      kind: "scalar",
      T: 5,
      repeated: true,
      packed: true
    }, {
      no: 3,
      name: "leading_comments",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "trailing_comments",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "leading_detached_comments",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new jNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(jNi, e, t);
  }
};
M1h = class zNi extends ie {
  constructor(e) {
    super();
    this.annotation = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.GeneratedCodeInfo";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "annotation",
      kind: "message",
      T: F1h,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new zNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(zNi, e, t);
  }
};
F1h = class VNi extends ie {
  constructor(e) {
    super();
    this.path = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 5,
      repeated: true,
      packed: true
    }, {
      no: 2,
      name: "source_file",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "begin",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "end",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "semantic",
      kind: "enum",
      T: Rc.getEnumType(R9o),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new VNi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VNi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VNi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(VNi, e, t);
  }
};
(function (n) {
  n[n.NONE = 0] = "NONE";
  n[n.SET = 1] = "SET";
  n[n.ALIAS = 2] = "ALIAS";
})(R9o ||= {});
Rc.util.setEnumType(R9o, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{
  no: 0,
  name: "NONE"
}, {
  no: 1,
  name: "SET"
}, {
  no: 2,
  name: "ALIAS"
}]);
