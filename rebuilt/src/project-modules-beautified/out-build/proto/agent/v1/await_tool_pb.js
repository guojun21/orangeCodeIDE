"use strict";

// Module: out-build/proto/agent/v1/await_tool_pb.js
// Offset: 3205132 (bundle byte offset)
// Size: 4515 bytes
Ka();
CRh = class CGi extends ie {
  constructor(e) {
    super();
    this.taskId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "block_until_ms",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 3,
      name: "regex",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new CGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CGi, e, t);
  }
};
w2c = class SGi extends ie {
  constructor(e) {
    super();
    this.taskId = "";
    this.runtimeMs = Eo.zero;
    this.outputFilePath = "";
    this.outputLength = Eo.zero;
    this.regexRequested = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitTaskComplete";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "runtime_ms",
      kind: "scalar",
      T: 4
    }, {
      no: 3,
      name: "output_file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "output_length",
      kind: "scalar",
      T: 4
    }, {
      no: 5,
      name: "regex_requested",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "regex_match",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "exit_code",
      kind: "scalar",
      T: 17,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new SGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SGi, e, t);
  }
};
_2c = class kGi extends ie {
  constructor(e) {
    super();
    this.taskId = "";
    this.runtimeMs = Eo.zero;
    this.outputFilePath = "";
    this.outputLength = Eo.zero;
    this.regexRequested = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitTaskStillRunning";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "runtime_ms",
      kind: "scalar",
      T: 4
    }, {
      no: 3,
      name: "output_file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "output_length",
      kind: "scalar",
      T: 4
    }, {
      no: 5,
      name: "regex_requested",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "regex_match",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new kGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kGi, e, t);
  }
};
SRh = class EGi extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitError";
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
    return new EGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EGi, e, t);
  }
};
kRh = class xGi extends ie {
  constructor(e) {
    super();
    this.awaitResult = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "complete",
      kind: "message",
      T: w2c,
      oneof: "await_result"
    }, {
      no: 2,
      name: "still_running",
      kind: "message",
      T: _2c,
      oneof: "await_result"
    }]);
  }
  static fromBinary(e, t) {
    return new xGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xGi, e, t);
  }
};
ERh = class TGi extends ie {
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
    this.typeName = "agent.v1.AwaitResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "complete",
      kind: "message",
      T: w2c,
      oneof: "result"
    }, {
      no: 2,
      name: "still_running",
      kind: "message",
      T: _2c,
      oneof: "result"
    }, {
      no: 3,
      name: "error",
      kind: "message",
      T: SRh,
      oneof: "result"
    }, {
      no: 4,
      name: "success",
      kind: "message",
      T: kRh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new TGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TGi, e, t);
  }
};
xRh = class IGi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AwaitToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: CRh
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: ERh
    }]);
  }
  static fromBinary(e, t) {
    return new IGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IGi, e, t);
  }
};
