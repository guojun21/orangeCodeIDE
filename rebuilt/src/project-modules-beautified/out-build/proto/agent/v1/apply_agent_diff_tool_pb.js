"use strict";

// Module: out-build/proto/agent/v1/apply_agent_diff_tool_pb.js
// Offset: 2696378 (bundle byte offset)
// Size: 3819 bytes
Ka();
FRc = class RFi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ApplyAgentDiffToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: ORc
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: B5n
    }]);
  }
  static fromBinary(e, t) {
    return new RFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RFi, e, t);
  }
};
ORc = class PFi extends ie {
  constructor(e) {
    super();
    this.agentId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ApplyAgentDiffArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "agent_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new PFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PFi, e, t);
  }
};
B5n = class LFi extends ie {
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
    this.typeName = "agent.v1.ApplyAgentDiffResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: KEh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: YEh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new LFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LFi, e, t);
  }
};
KEh = class NFi extends ie {
  constructor(e) {
    super();
    this.appliedChanges = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ApplyAgentDiffSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "applied_changes",
      kind: "message",
      T: URc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new NFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NFi, e, t);
  }
};
URc = class MFi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.changeType = R5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AppliedAgentChange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "change_type",
      kind: "enum",
      T: v.getEnumType(R5n)
    }, {
      no: 3,
      name: "before_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "after_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "message_for_model",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new MFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MFi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CREATED = 1] = "CREATED";
  n[n.MODIFIED = 2] = "MODIFIED";
  n[n.DELETED = 3] = "DELETED";
})(R5n ||= {});
v.util.setEnumType(R5n, "agent.v1.AppliedAgentChange.ChangeType", [{
  no: 0,
  name: "CHANGE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "CHANGE_TYPE_CREATED"
}, {
  no: 2,
  name: "CHANGE_TYPE_MODIFIED"
}, {
  no: 3,
  name: "CHANGE_TYPE_DELETED"
}]);
YEh = class FFi extends ie {
  constructor(e) {
    super();
    this.error = "";
    this.appliedChanges = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ApplyAgentDiffError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "applied_changes",
      kind: "message",
      T: URc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new FFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FFi, e, t);
  }
};
