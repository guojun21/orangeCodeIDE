"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/api_pb.js
// Offset: 2595231 (bundle byte offset)
// Size: 2387 bytes
$te();
j1h();
vRc();
pve();
upA = class hMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.methods = [];
    this.options = [];
    this.version = "";
    this.mixins = [];
    this.syntax = ike.PROTO2;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Api";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "methods",
      kind: "message",
      T: z1h,
      repeated: true
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }, {
      no: 4,
      name: "version",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "source_context",
      kind: "message",
      T: L9o
    }, {
      no: 6,
      name: "mixins",
      kind: "message",
      T: V1h,
      repeated: true
    }, {
      no: 7,
      name: "syntax",
      kind: "enum",
      T: v.getEnumType(ike)
    }]);
  }
  static fromBinary(e, t) {
    return new hMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hMi, e, t);
  }
};
z1h = class mMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.requestTypeUrl = "";
    this.requestStreaming = false;
    this.responseTypeUrl = "";
    this.responseStreaming = false;
    this.options = [];
    this.syntax = ike.PROTO2;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Method";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "request_type_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "request_streaming",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "response_type_url",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "response_streaming",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "options",
      kind: "message",
      T: Ibt,
      repeated: true
    }, {
      no: 7,
      name: "syntax",
      kind: "enum",
      T: v.getEnumType(ike)
    }]);
  }
  static fromBinary(e, t) {
    return new mMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mMi, e, t);
  }
};
V1h = class pMi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.root = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Mixin";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "root",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pMi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pMi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pMi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pMi, e, t);
  }
};
