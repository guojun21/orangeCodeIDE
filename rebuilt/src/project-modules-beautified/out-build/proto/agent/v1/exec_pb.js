"use strict";

// Module: out-build/proto/agent/v1/exec_pb.js
// Offset: 3465908 (bundle byte offset)
// Size: 10130 bytes
Ka();
Lbt();
wgA();
X8o();
n6o();
tMh();
qbt();
s8n();
Xbt();
o8n();
a5t();
SBh();
Mbt();
h9n();
_gA();
Jk();
aMh = class nYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecClientStreamClose";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }]);
  }
  static fromBinary(e, t) {
    return new nYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nYi, e, t);
  }
};
cMh = class iYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecClientThrow";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "stack_trace",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new iYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iYi, e, t);
  }
};
lMh = class rYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecClientHeartbeat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }]);
  }
  static fromBinary(e, t) {
    return new rYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rYi, e, t);
  }
};
R8n = class sYi extends ie {
  constructor(e) {
    super();
    this.message = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecClientControlMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_close",
      kind: "message",
      T: aMh,
      oneof: "message"
    }, {
      no: 2,
      name: "throw",
      kind: "message",
      T: cMh,
      oneof: "message"
    }, {
      no: 3,
      name: "heartbeat",
      kind: "message",
      T: lMh,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new sYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sYi, e, t);
  }
};
e4c = class oYi extends ie {
  constructor(e) {
    super();
    this.traceId = "";
    this.spanId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SpanContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "trace_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "span_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "trace_flags",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 4,
      name: "trace_state",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new oYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oYi, e, t);
  }
};
CgA = class aYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AbortArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new aYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aYi, e, t);
  }
};
SgA = class cYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.AbortResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new cYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cYi, e, t);
  }
};
$Re = class lYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    this.execId = "";
    this.message = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecServerMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }, {
      no: 15,
      name: "exec_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "shell_args",
      kind: "message",
      T: o5t,
      oneof: "message"
    }, {
      no: 3,
      name: "write_args",
      kind: "message",
      T: qNh,
      oneof: "message"
    }, {
      no: 4,
      name: "delete_args",
      kind: "message",
      T: J5t,
      oneof: "message"
    }, {
      no: 5,
      name: "grep_args",
      kind: "message",
      T: G5t,
      oneof: "message"
    }, {
      no: 7,
      name: "read_args",
      kind: "message",
      T: XFc,
      oneof: "message"
    }, {
      no: 8,
      name: "ls_args",
      kind: "message",
      T: d5t,
      oneof: "message"
    }, {
      no: 9,
      name: "diagnostics_args",
      kind: "message",
      T: r8n,
      oneof: "message"
    }, {
      no: 10,
      name: "request_context_args",
      kind: "message",
      T: T2c,
      oneof: "message"
    }, {
      no: 11,
      name: "mcp_args",
      kind: "message",
      T: W5t,
      oneof: "message"
    }, {
      no: 14,
      name: "shell_stream_args",
      kind: "message",
      T: o5t,
      oneof: "message"
    }, {
      no: 16,
      name: "background_shell_spawn_args",
      kind: "message",
      T: $Eh,
      oneof: "message"
    }, {
      no: 17,
      name: "list_mcp_resources_exec_args",
      kind: "message",
      T: d6o,
      oneof: "message"
    }, {
      no: 18,
      name: "read_mcp_resource_exec_args",
      kind: "message",
      T: m6o,
      oneof: "message"
    }, {
      no: 20,
      name: "fetch_args",
      kind: "message",
      T: o2c,
      oneof: "message"
    }, {
      no: 21,
      name: "record_screen_args",
      kind: "message",
      T: LKe,
      oneof: "message"
    }, {
      no: 22,
      name: "computer_use_args",
      kind: "message",
      T: l8o,
      oneof: "message"
    }, {
      no: 23,
      name: "write_shell_stdin_args",
      kind: "message",
      T: N9e,
      oneof: "message"
    }, {
      no: 27,
      name: "execute_hook_args",
      kind: "message",
      T: uMh,
      oneof: "message"
    }, {
      no: 28,
      name: "subagent_args",
      kind: "message",
      T: nMh,
      oneof: "message"
    }, {
      no: 19,
      name: "span_context",
      kind: "message",
      T: e4c,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new lYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lYi, e, t);
  }
};
P8n = class uYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    this.execId = "";
    this.message = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecClientMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }, {
      no: 15,
      name: "exec_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "shell_result",
      kind: "message",
      T: z9o,
      oneof: "message"
    }, {
      no: 3,
      name: "write_result",
      kind: "message",
      T: HNh,
      oneof: "message"
    }, {
      no: 4,
      name: "delete_result",
      kind: "message",
      T: Z8o,
      oneof: "message"
    }, {
      no: 5,
      name: "grep_result",
      kind: "message",
      T: t6o,
      oneof: "message"
    }, {
      no: 7,
      name: "read_result",
      kind: "message",
      T: zNh,
      oneof: "message"
    }, {
      no: 8,
      name: "ls_result",
      kind: "message",
      T: c8o,
      oneof: "message"
    }, {
      no: 9,
      name: "diagnostics_result",
      kind: "message",
      T: u6o,
      oneof: "message"
    }, {
      no: 10,
      name: "request_context_result",
      kind: "message",
      T: I2c,
      oneof: "message"
    }, {
      no: 11,
      name: "mcp_result",
      kind: "message",
      T: QDh,
      oneof: "message"
    }, {
      no: 14,
      name: "shell_stream",
      kind: "message",
      T: NEh,
      oneof: "message"
    }, {
      no: 16,
      name: "background_shell_spawn_result",
      kind: "message",
      T: qEh,
      oneof: "message"
    }, {
      no: 17,
      name: "list_mcp_resources_exec_result",
      kind: "message",
      T: h6o,
      oneof: "message"
    }, {
      no: 18,
      name: "read_mcp_resource_exec_result",
      kind: "message",
      T: JMc,
      oneof: "message"
    }, {
      no: 20,
      name: "fetch_result",
      kind: "message",
      T: a2c,
      oneof: "message"
    }, {
      no: 21,
      name: "record_screen_result",
      kind: "message",
      T: c5t,
      oneof: "message"
    }, {
      no: 22,
      name: "computer_use_result",
      kind: "message",
      T: d9n,
      oneof: "message"
    }, {
      no: 23,
      name: "write_shell_stdin_result",
      kind: "message",
      T: Nbt,
      oneof: "message"
    }, {
      no: 27,
      name: "execute_hook_result",
      kind: "message",
      T: dMh,
      oneof: "message"
    }, {
      no: 28,
      name: "subagent_result",
      kind: "message",
      T: rMh,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new uYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uYi, e, t);
  }
};
uMh = class dYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecuteHookArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request",
      kind: "message",
      T: hMh
    }]);
  }
  static fromBinary(e, t) {
    return new dYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dYi, e, t);
  }
};
dMh = class hYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecuteHookResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "response",
      kind: "message",
      T: mMh
    }]);
  }
  static fromBinary(e, t) {
    return new hYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hYi, e, t);
  }
};
hMh = class mYi extends ie {
  constructor(e) {
    super();
    this.request = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecuteHookRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pre_compact",
      kind: "message",
      T: OPh,
      oneof: "request"
    }, {
      no: 2,
      name: "subagent_start",
      kind: "message",
      T: $Ph,
      oneof: "request"
    }, {
      no: 3,
      name: "subagent_stop",
      kind: "message",
      T: HPh,
      oneof: "request"
    }, {
      no: 4,
      name: "pre_tool_use",
      kind: "message",
      T: GPh,
      oneof: "request"
    }, {
      no: 5,
      name: "post_tool_use",
      kind: "message",
      T: QPh,
      oneof: "request"
    }, {
      no: 6,
      name: "post_tool_use_failure",
      kind: "message",
      T: zPh,
      oneof: "request"
    }]);
  }
  static fromBinary(e, t) {
    return new mYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mYi, e, t);
  }
};
mMh = class pYi extends ie {
  constructor(e) {
    super();
    this.response = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecuteHookResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pre_compact",
      kind: "message",
      T: UPh,
      oneof: "response"
    }, {
      no: 2,
      name: "subagent_start",
      kind: "message",
      T: qPh,
      oneof: "response"
    }, {
      no: 3,
      name: "subagent_stop",
      kind: "message",
      T: JPh,
      oneof: "response"
    }, {
      no: 4,
      name: "pre_tool_use",
      kind: "message",
      T: WPh,
      oneof: "response"
    }, {
      no: 5,
      name: "post_tool_use",
      kind: "message",
      T: jPh,
      oneof: "response"
    }, {
      no: 6,
      name: "post_tool_use_failure",
      kind: "message",
      T: VPh,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new pYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pYi, e, t);
  }
};
