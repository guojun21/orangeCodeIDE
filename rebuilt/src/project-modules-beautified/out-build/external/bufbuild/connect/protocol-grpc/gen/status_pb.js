"use strict";

// Module: out-build/external/bufbuild/connect/protocol-grpc/gen/status_pb.js
// Offset: 26665917 (bundle byte offset)
// Size: 683 bytes
Ka();
$NA = class VXr extends ie {
  constructor(e) {
    super();
    this.code = 0;
    this.message = "";
    this.details = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.rpc.Status";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "details",
      kind: "message",
      T: pRc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new VXr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VXr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VXr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VXr, e, t);
  }
};
