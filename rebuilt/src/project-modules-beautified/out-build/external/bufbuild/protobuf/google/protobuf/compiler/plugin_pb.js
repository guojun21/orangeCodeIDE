"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/compiler/plugin_pb.js
// Offset: 2585658 (bundle byte offset)
// Size: 3240 bytes
$te();
y9o();
f5n();
J1h = class nMi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.compiler.Version";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "major",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "minor",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "patch",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "suffix",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new nMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(nMi, e, t);
  }
};
spA = class iMi extends ie {
  constructor(e) {
    super();
    this.fileToGenerate = [];
    this.protoFile = [];
    this.sourceFileDescriptors = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "file_to_generate",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "parameter",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 15,
      name: "proto_file",
      kind: "message",
      T: w9o,
      repeated: true
    }, {
      no: 17,
      name: "source_file_descriptors",
      kind: "message",
      T: w9o,
      repeated: true
    }, {
      no: 3,
      name: "compiler_version",
      kind: "message",
      T: J1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new iMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(iMi, e, t);
  }
};
opA = class rMi extends ie {
  constructor(e) {
    super();
    this.file = [];
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
  }
  static {
    this.fields = Rc.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "supported_features",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 3,
      name: "minimum_edition",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "maximum_edition",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 15,
      name: "file",
      kind: "message",
      T: G1h,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new rMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(rMi, e, t);
  }
};
(function (n) {
  n[n.NONE = 0] = "NONE";
  n[n.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL";
  n[n.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
})(bRc ||= {});
Rc.util.setEnumType(bRc, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{
  no: 0,
  name: "FEATURE_NONE"
}, {
  no: 1,
  name: "FEATURE_PROTO3_OPTIONAL"
}, {
  no: 2,
  name: "FEATURE_SUPPORTS_EDITIONS"
}]);
G1h = class sMi extends ie {
  constructor(e) {
    super();
    Rc.util.initPartial(e, this);
  }
  static {
    this.runtime = Rc;
  }
  static {
    this.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
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
      name: "insertion_point",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 15,
      name: "content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 16,
      name: "generated_code_info",
      kind: "message",
      T: M1h,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new sMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return Rc.util.equals(sMi, e, t);
  }
};
