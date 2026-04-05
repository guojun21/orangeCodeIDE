"use strict";

// Module: out-build/proto/agent/v1/write_exec_pb.js
// Offset: 3452680 (bundle byte offset)
// Size: 4443 bytes
Ka();
qNh = class MKi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.fileText = "";
    this.toolCallId = "";
    this.returnFileContentAfterWrite = false;
    this.fileBytes = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "return_file_content_after_write",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "file_bytes",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new MKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MKi, e, t);
  }
};
HNh = class FKi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: JNh,
      oneof: "result"
    }, {
      no: 3,
      name: "permission_denied",
      kind: "message",
      T: GNh,
      oneof: "result"
    }, {
      no: 4,
      name: "no_space",
      kind: "message",
      T: WNh,
      oneof: "result"
    }, {
      no: 5,
      name: "error",
      kind: "message",
      T: QNh,
      oneof: "result"
    }, {
      no: 6,
      name: "rejected",
      kind: "message",
      T: jNh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new FKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FKi, e, t);
  }
};
JNh = class OKi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.linesCreated = 0;
    this.fileSize = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "lines_created",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "file_size",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "file_content_after_write",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new OKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OKi, e, t);
  }
};
GNh = class UKi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.directory = "";
    this.operation = "";
    this.error = "";
    this.isReadonly = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WritePermissionDenied";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "directory",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "operation",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "error",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "is_readonly",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new UKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UKi, e, t);
  }
};
WNh = class $Ki extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteNoSpace";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $Ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Ki, e, t);
  }
};
QNh = class qKi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qKi, e, t);
  }
};
jNh = class HKi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.reason = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WriteRejected";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "reason",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new HKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HKi, e, t);
  }
};
