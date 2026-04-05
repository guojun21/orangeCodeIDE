"use strict";

// Module: out-build/proto/agent/v1/read_tool_pb.js
// Offset: 3107121 (bundle byte offset)
// Size: 4074 bytes
Ka();
r6o();
e8n = class m7i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: s6o
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: t8n
    }]);
  }
  static fromBinary(e, t) {
    return new m7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m7i, e, t);
  }
};
s6o = class p7i extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadToolArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "offset",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "include_line_numbers",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new p7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p7i, e, t);
  }
};
t8n = class g7i extends ie {
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
    this.typeName = "agent.v1.ReadToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: TMc,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: CDh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new g7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g7i, e, t);
  }
};
_Dh = class f7i extends ie {
  constructor(e) {
    super();
    this.startLine = 0;
    this.endLine = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadRange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "end_line",
      kind: "scalar",
      T: 13
    }]);
  }
  static fromBinary(e, t) {
    return new f7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f7i, e, t);
  }
};
TMc = class b7i extends ie {
  constructor(e) {
    super();
    this.output = {
      case: undefined
    };
    this.isEmpty = false;
    this.exceededLimit = false;
    this.totalLines = 0;
    this.fileSize = 0;
    this.path = "";
    this.relatedCursorRulePaths = [];
    this.relatedCursorRules = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadToolSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9,
      oneof: "output"
    }, {
      no: 6,
      name: "data",
      kind: "scalar",
      T: 12,
      oneof: "output"
    }, {
      no: 9,
      name: "data_blob_id",
      kind: "scalar",
      T: 12,
      oneof: "output"
    }, {
      no: 10,
      name: "content_blob_id",
      kind: "scalar",
      T: 12,
      oneof: "output"
    }, {
      no: 2,
      name: "is_empty",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "exceeded_limit",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "total_lines",
      kind: "scalar",
      T: 13
    }, {
      no: 5,
      name: "file_size",
      kind: "scalar",
      T: 13
    }, {
      no: 7,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "read_range",
      kind: "message",
      T: _Dh,
      opt: true
    }, {
      no: 11,
      name: "include_line_numbers",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "related_cursor_rule_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 13,
      name: "related_cursor_rules",
      kind: "message",
      T: X9n,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new b7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b7i, e, t);
  }
};
CDh = class v7i extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReadToolError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new v7i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v7i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v7i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v7i, e, t);
  }
};
