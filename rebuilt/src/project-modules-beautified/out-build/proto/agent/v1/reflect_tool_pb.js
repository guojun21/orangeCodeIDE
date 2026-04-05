"use strict";

// Module: out-build/proto/agent/v1/reflect_tool_pb.js
// Offset: 3177793 (bundle byte offset)
// Size: 2880 bytes
Ka();
LBh = class xJi extends ie {
  constructor(e) {
    super();
    this.unexpectedActionOutcomes = "";
    this.relevantInstructions = "";
    this.scenarioAnalysis = "";
    this.criticalSynthesis = "";
    this.nextSteps = "";
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReflectArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "unexpected_action_outcomes",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "relevant_instructions",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "scenario_analysis",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "critical_synthesis",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "next_steps",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new xJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xJi, e, t);
  }
};
NBh = class TJi extends ie {
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
    this.typeName = "agent.v1.ReflectResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: MBh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: FBh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new TJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TJi, e, t);
  }
};
MBh = class IJi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReflectSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new IJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IJi, e, t);
  }
};
FBh = class DJi extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReflectError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new DJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DJi, e, t);
  }
};
OBh = class BJi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReflectToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: LBh
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: NBh
    }]);
  }
  static fromBinary(e, t) {
    return new BJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BJi, e, t);
  }
};
