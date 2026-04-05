"use strict";

// Module: out-build/proto/agent/v1/edit_tool_pb.js
// Offset: 3117812 (bundle byte offset)
// Size: 5820 bytes
Ka();
n8n = class D7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "stream_content",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new D7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D7i, e, t);
  }
};
ake = class B7i extends ie {
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
    this.typeName = "agent.v1.EditResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: i8n,
      oneof: "result"
    }, {
      no: 2,
      name: "file_not_found",
      kind: "message",
      T: DDh,
      oneof: "result"
    }, {
      no: 3,
      name: "read_permission_denied",
      kind: "message",
      T: BDh,
      oneof: "result"
    }, {
      no: 4,
      name: "write_permission_denied",
      kind: "message",
      T: RDh,
      oneof: "result"
    }, {
      no: 6,
      name: "rejected",
      kind: "message",
      T: PDh,
      oneof: "result"
    }, {
      no: 7,
      name: "error",
      kind: "message",
      T: Kbt,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new B7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B7i, e, t);
  }
};
i8n = class R7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.afterFullFileContent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "lines_added",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "lines_removed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "diff_string",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "before_full_file_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "after_full_file_content",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new R7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R7i, e, t);
  }
};
DDh = class P7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditFileNotFound";
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
    return new P7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P7i, e, t);
  }
};
BDh = class L7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditReadPermissionDenied";
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
    return new L7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L7i, e, t);
  }
};
RDh = class N7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.error = "";
    this.isReadonly = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditWritePermissionDenied";
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
    }, {
      no: 3,
      name: "is_readonly",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new N7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N7i, e, t);
  }
};
PDh = class M7i extends ie {
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
    this.typeName = "agent.v1.EditRejected";
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
    return new M7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M7i, e, t);
  }
};
Kbt = class F7i extends ie {
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
    this.typeName = "agent.v1.EditError";
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
    }, {
      no: 5,
      name: "model_visible_error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new F7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F7i, e, t);
  }
};
Ave = class O7i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: n8n
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: ake
    }]);
  }
  static fromBinary(e, t) {
    return new O7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O7i, e, t);
  }
};
PMc = class U7i extends ie {
  constructor(e) {
    super();
    this.streamContentDelta = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.EditToolCallDelta";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_content_delta",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new U7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U7i, e, t);
  }
};
