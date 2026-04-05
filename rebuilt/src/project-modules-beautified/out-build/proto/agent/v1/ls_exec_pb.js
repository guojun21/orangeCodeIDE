"use strict";

// Module: out-build/proto/agent/v1/ls_exec_pb.js
// Offset: 2819413 (bundle byte offset)
// Size: 6181 bytes
Ka();
P9e();
d5t = class X3i extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.ignore = [];
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.LsArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "ignore",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "sandbox_policy",
      kind: "message",
      T: Hte,
      opt: true
    }, {
      no: 5,
      name: "timeout_ms",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new X3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X3i, e, t);
  }
};
c8o = class e5i extends ie {
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
    this.typeName = "agent.v1.LsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: iIh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: sIh,
      oneof: "result"
    }, {
      no: 3,
      name: "rejected",
      kind: "message",
      T: oIh,
      oneof: "result"
    }, {
      no: 4,
      name: "timeout",
      kind: "message",
      T: aIh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new e5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e5i, e, t);
  }
};
iIh = class t5i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.LsSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directory_tree_root",
      kind: "message",
      T: u9n
    }]);
  }
  static fromBinary(e, t) {
    return new t5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t5i, e, t);
  }
};
u9n = class sSn extends ie {
  constructor(e) {
    super();
    this.absPath = "";
    this.childrenDirs = [];
    this.childrenFiles = [];
    this.childrenWereProcessed = false;
    this.fullSubtreeExtensionCounts = {};
    this.numFiles = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.LsDirectoryTreeNode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "abs_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "children_dirs",
      kind: "message",
      T: sSn,
      repeated: true
    }, {
      no: 3,
      name: "children_files",
      kind: "message",
      T: rIh,
      repeated: true
    }, {
      no: 4,
      name: "children_were_processed",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "full_subtree_extension_counts",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 5
      }
    }, {
      no: 6,
      name: "num_files",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new sSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sSn, e, t);
  }
};
rIh = class n5i extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.LsDirectoryTreeNode.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "terminal_metadata",
      kind: "message",
      T: rPc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new n5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n5i, e, t);
  }
};
sIh = class i5i extends ie {
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
    this.typeName = "agent.v1.LsError";
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
    return new i5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i5i, e, t);
  }
};
oIh = class r5i extends ie {
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
    this.typeName = "agent.v1.LsRejected";
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
    return new r5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r5i, e, t);
  }
};
aIh = class s5i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.LsTimeout";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directory_tree_root",
      kind: "message",
      T: u9n
    }]);
  }
  static fromBinary(e, t) {
    return new s5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s5i, e, t);
  }
};
rPc = class o5i extends ie {
  constructor(e) {
    super();
    this.lastCommands = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.TerminalMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cwd",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "last_commands",
      kind: "message",
      T: sPc,
      repeated: true
    }, {
      no: 3,
      name: "last_modified_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 4,
      name: "current_command",
      kind: "message",
      T: sPc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new o5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o5i, e, t);
  }
};
sPc = class a5i extends ie {
  constructor(e) {
    super();
    this.command = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.TerminalMetadata.Command";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "command",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "exit_code",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "timestamp_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 4,
      name: "duration_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new a5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a5i, e, t);
  }
};
