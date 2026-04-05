"use strict";

// Module: out-build/proto/aiserver/v1/context_pb.js
// Offset: 3626715 (bundle byte offset)
// Size: 32703 bytes
Ka();
qp();
H6();
A4c();
eYe = class dtr extends ie {
  constructor(e) {
    super();
    this.item = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PotentiallyCachedContextItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_item",
      kind: "message",
      T: j8n,
      oneof: "item"
    }, {
      no: 2,
      name: "context_item_hash",
      kind: "scalar",
      T: 9,
      oneof: "item"
    }]);
  }
  static fromBinary(e, t) {
    return new dtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dtr, e, t);
  }
};
G8n = class htr extends ie {
  constructor(e) {
    super();
    this.contextItemStatuses = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextStatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_item_statuses",
      kind: "message",
      T: s4h,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new htr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new htr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new htr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(htr, e, t);
  }
};
W8n = class mtr extends ie {
  constructor(e) {
    super();
    this.missingContextItemHashes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MissingContextItems";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "missing_context_item_hashes",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new mtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mtr, e, t);
  }
};
s4h = class ptr extends ie {
  constructor(e) {
    super();
    this.contextItemHash = "";
    this.shownToTheModel = false;
    this.score = 0;
    this.percentageOfAvailableSpace = 0;
    this.postGenerationEvaluation = Q8n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItemStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_item_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "shown_to_the_model",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 4,
      name: "percentage_of_available_space",
      kind: "scalar",
      T: 2
    }, {
      no: 5,
      name: "post_generation_evaluation",
      kind: "enum",
      T: v.getEnumType(Q8n)
    }]);
  }
  static fromBinary(e, t) {
    return new ptr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ptr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ptr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ptr, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USEFUL = 1] = "USEFUL";
  n[n.USELESS = 2] = "USELESS";
})(Q8n ||= {});
v.util.setEnumType(Q8n, "aiserver.v1.ContextItemStatus.PostGenerationEvaluation", [{
  no: 0,
  name: "POST_GENERATION_EVALUATION_UNSPECIFIED"
}, {
  no: 1,
  name: "POST_GENERATION_EVALUATION_USEFUL"
}, {
  no: 2,
  name: "POST_GENERATION_EVALUATION_USELESS"
}]);
j8n = class gtr extends ie {
  constructor(e) {
    super();
    this.item = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "intent",
      kind: "message",
      T: l9t
    }, {
      no: 2,
      name: "file_chunk",
      kind: "message",
      T: K6o,
      oneof: "item"
    }, {
      no: 3,
      name: "outline_chunk",
      kind: "message",
      T: c4h,
      oneof: "item"
    }, {
      no: 4,
      name: "cmd_k_selection",
      kind: "message",
      T: F4c,
      oneof: "item"
    }, {
      no: 5,
      name: "cmd_k_immediate_context",
      kind: "message",
      T: O4c,
      oneof: "item"
    }, {
      no: 6,
      name: "cmd_k_query",
      kind: "message",
      T: Y6o,
      oneof: "item"
    }, {
      no: 7,
      name: "cmd_k_query_history",
      kind: "message",
      T: h4h,
      oneof: "item"
    }, {
      no: 8,
      name: "custom_instructions",
      kind: "message",
      T: b4h,
      oneof: "item"
    }, {
      no: 9,
      name: "go_to_definition_result",
      kind: "message",
      T: $4c,
      oneof: "item"
    }, {
      no: 10,
      name: "documentation_chunk",
      kind: "message",
      T: v4h,
      oneof: "item"
    }, {
      no: 11,
      name: "lints",
      kind: "message",
      T: A4h,
      oneof: "item"
    }, {
      no: 12,
      name: "chat_history",
      kind: "message",
      T: g4h,
      oneof: "item"
    }, {
      no: 13,
      name: "notebook_cell_output",
      kind: "message",
      T: w4h,
      oneof: "item"
    }, {
      no: 14,
      name: "terminal_history",
      kind: "message",
      T: f4h,
      oneof: "item"
    }, {
      no: 15,
      name: "terminal_cmd_k_query",
      kind: "message",
      T: U4c,
      oneof: "item"
    }, {
      no: 16,
      name: "terminal_cmd_k_query_history",
      kind: "message",
      T: d4h,
      oneof: "item"
    }, {
      no: 17,
      name: "sparse_file_chunk",
      kind: "message",
      T: o4h,
      oneof: "item"
    }, {
      no: 18,
      name: "lsp_subgraph_chunk",
      kind: "message",
      T: _4h,
      oneof: "item"
    }, {
      no: 19,
      name: "commit_note_chunk",
      kind: "message",
      T: C4h,
      oneof: "item"
    }, {
      no: 20,
      name: "file_diff_history",
      kind: "message",
      T: l4h,
      oneof: "item"
    }, {
      no: 21,
      name: "cmd_k_query_history_in_diff_session",
      kind: "message",
      T: m4h,
      oneof: "item"
    }, {
      no: 22,
      name: "project_rule",
      kind: "message",
      T: rke,
      oneof: "item"
    }]);
  }
  static fromBinary(e, t) {
    return new gtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gtr, e, t);
  }
};
K6o = class ftr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.chunkContents = "";
    this.startLineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.FileChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "chunk_contents",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new ftr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ftr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ftr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ftr, e, t);
  }
};
o4h = class btr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.lines = [];
    this.totalNumberOfLinesInFile = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.SparseFileChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "lines",
      kind: "message",
      T: a4h,
      repeated: true
    }, {
      no: 3,
      name: "total_number_of_lines_in_file",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "cell_number",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new btr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new btr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new btr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(btr, e, t);
  }
};
a4h = class vtr extends ie {
  constructor(e) {
    super();
    this.line = "";
    this.lineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.SparseFileChunk.Line";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new vtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vtr, e, t);
  }
};
c4h = class Atr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.OutlineChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "contents",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "full_range",
      kind: "message",
      T: S3
    }]);
  }
  static fromBinary(e, t) {
    return new Atr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Atr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Atr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Atr, e, t);
  }
};
F4c = class ytr extends ie {
  constructor(e) {
    super();
    this.lines = [];
    this.startLineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new ytr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ytr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ytr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ytr, e, t);
  }
};
l4h = class wtr extends ie {
  constructor(e) {
    super();
    this.howManyDiffsAgo = 0;
    this.isVeryRecent = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.FileDiffHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cpp_file_diff_history",
      kind: "message",
      T: wz
    }, {
      no: 2,
      name: "how_many_diffs_ago",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "is_very_recent",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new wtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wtr, e, t);
  }
};
O4c = class _tr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.lines = [];
    this.totalNumberOfLinesInFile = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "lines",
      kind: "message",
      T: u4h,
      repeated: true
    }, {
      no: 3,
      name: "total_number_of_lines_in_file",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "cell_number",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_tr, e, t);
  }
};
u4h = class Ctr extends ie {
  constructor(e) {
    super();
    this.line = "";
    this.lineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext.Line";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Ctr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ctr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ctr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ctr, e, t);
  }
};
Y6o = class Str extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKQuery";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Str().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Str().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Str().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Str, e, t);
  }
};
U4c = class ktr extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQuery";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ktr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ktr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ktr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ktr, e, t);
  }
};
d4h = class aSn extends ie {
  constructor(e) {
    super();
    this.contextItemHashes = [];
    this.suggestedCommand = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQueryHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "message",
      T: U4c
    }, {
      no: 2,
      name: "query_history",
      kind: "message",
      T: aSn
    }, {
      no: 5,
      name: "context_item_hashes",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "suggested_command",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aSn, e, t);
  }
};
h4h = class cSn extends ie {
  constructor(e) {
    super();
    this.contextItemHashes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKQueryHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "message",
      T: Y6o
    }, {
      no: 2,
      name: "immediate_context",
      kind: "message",
      T: O4c
    }, {
      no: 3,
      name: "selection",
      kind: "message",
      T: F4c
    }, {
      no: 4,
      name: "query_history",
      kind: "message",
      T: cSn
    }, {
      no: 5,
      name: "context_item_hashes",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "timestamp",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 7,
      name: "timestamp_double",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new cSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cSn, e, t);
  }
};
m4h = class Etr extends ie {
  constructor(e) {
    super();
    this.pastCmdkQueries = [];
    this.currTimestampDouble = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "past_cmdk_queries",
      kind: "message",
      T: p4h,
      repeated: true
    }, {
      no: 3,
      name: "curr_timestamp_double",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new Etr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Etr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Etr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Etr, e, t);
  }
};
p4h = class xtr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.timestampDouble = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "message",
      T: Y6o
    }, {
      no: 2,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "cmdk_was_accepted",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "timestamp_double",
      kind: "scalar",
      T: 1
    }, {
      no: 7,
      name: "timestamp_for_diff_interleaving",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 8,
      name: "request_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xtr, e, t);
  }
};
g4h = class lSn extends ie {
  constructor(e) {
    super();
    this.userMessage = "";
    this.assistantResponse = "";
    this.activeForCmdK = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.ChatHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "assistant_response",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chat_history",
      kind: "message",
      T: lSn
    }, {
      no: 4,
      name: "active_for_cmd_k",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "timestamp",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 6,
      name: "timestamp_double",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new lSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lSn, e, t);
  }
};
f4h = class Ttr extends ie {
  constructor(e) {
    super();
    this.history = "";
    this.cwdFull = "";
    this.cwdRelativeWorkspacePath = "";
    this.activeForCmdK = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.TerminalHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "history",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "cwd_full",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "cwd_relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "active_for_cmd_k",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "timestamp",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 8,
      name: "timestamp_double",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ttr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ttr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ttr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ttr, e, t);
  }
};
b4h = class Itr extends ie {
  constructor(e) {
    super();
    this.instructions = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CustomInstructions";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "instructions",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Itr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Itr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Itr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Itr, e, t);
  }
};
$4c = class Dtr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.line = "";
    this.lineNumber = 0;
    this.columnNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.GoToDefinitionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "column_number",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "definition_chunk",
      kind: "message",
      T: K6o
    }]);
  }
  static fromBinary(e, t) {
    return new Dtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dtr, e, t);
  }
};
v4h = class Btr extends ie {
  constructor(e) {
    super();
    this.docName = "";
    this.pageUrl = "";
    this.documentationChunk = "";
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.DocumentationChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "page_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "documentation_chunk",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new Btr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Btr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Btr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Btr, e, t);
  }
};
A4h = class Rtr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.lints = [];
    this.contextLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.Lints";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "lints",
      kind: "message",
      T: cEh,
      repeated: true
    }, {
      no: 3,
      name: "context_lines",
      kind: "message",
      T: y4h,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Rtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rtr, e, t);
  }
};
y4h = class Ptr extends ie {
  constructor(e) {
    super();
    this.line = "";
    this.lineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.Lints.Line";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Ptr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ptr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ptr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ptr, e, t);
  }
};
w4h = class Ltr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.cellOutput = "";
    this.cellNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.NotebookCellOutput";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "cell_output",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "cell_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Ltr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ltr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ltr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ltr, e, t);
  }
};
_4h = class Ntr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.LspSubgraphChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "lsp_subgraph_full_context",
      kind: "message",
      T: $6o
    }]);
  }
  static fromBinary(e, t) {
    return new Ntr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ntr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ntr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ntr, e, t);
  }
};
C4h = class Mtr extends ie {
  constructor(e) {
    super();
    this.note = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextItem.CommitNoteChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "note",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Mtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mtr, e, t);
  }
};
l9t = class Ftr extends ie {
  constructor(e) {
    super();
    this.type = XI.UNSPECIFIED;
    this.uuid = "";
    this.intent = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type",
      kind: "enum",
      T: v.getEnumType(XI)
    }, {
      no: 15,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file",
      kind: "message",
      T: k4h,
      oneof: "intent"
    }, {
      no: 3,
      name: "code_selection",
      kind: "message",
      T: E4h,
      oneof: "intent"
    }, {
      no: 5,
      name: "lints",
      kind: "message",
      T: T4h,
      oneof: "intent"
    }, {
      no: 6,
      name: "recent_locations",
      kind: "message",
      T: B4h,
      oneof: "intent"
    }, {
      no: 8,
      name: "cmd_k_current_file",
      kind: "message",
      T: L4h,
      oneof: "intent"
    }, {
      no: 9,
      name: "cmd_k_query_etc",
      kind: "message",
      T: N4h,
      oneof: "intent"
    }, {
      no: 14,
      name: "terminal_cmd_k_defaults",
      kind: "message",
      T: $4h,
      oneof: "intent"
    }, {
      no: 10,
      name: "cmd_k_definitions",
      kind: "message",
      T: F4h,
      oneof: "intent"
    }, {
      no: 11,
      name: "documentation",
      kind: "message",
      T: S4h,
      oneof: "intent"
    }, {
      no: 12,
      name: "custom_instructions",
      kind: "message",
      T: M4h,
      oneof: "intent"
    }, {
      no: 13,
      name: "chat_history",
      kind: "message",
      T: O4h,
      oneof: "intent"
    }, {
      no: 16,
      name: "terminal_history",
      kind: "message",
      T: q4h,
      oneof: "intent"
    }, {
      no: 17,
      name: "visible_tabs",
      kind: "message",
      T: P4h,
      oneof: "intent"
    }, {
      no: 18,
      name: "lsp_subgraph",
      kind: "message",
      T: H4h,
      oneof: "intent"
    }, {
      no: 19,
      name: "commit_notes",
      kind: "message",
      T: x4h,
      oneof: "intent"
    }, {
      no: 20,
      name: "diff_history",
      kind: "message",
      T: U4h,
      oneof: "intent"
    }, {
      no: 21,
      name: "past_cmdk_messages_in_diff_sessions",
      kind: "message",
      T: R4h,
      oneof: "intent"
    }]);
  }
  static fromBinary(e, t) {
    return new Ftr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ftr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ftr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ftr, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USER_ADDED = 1] = "USER_ADDED";
  n[n.AUTOMATIC = 2] = "AUTOMATIC";
})(XI ||= {});
v.util.setEnumType(XI, "aiserver.v1.ContextIntent.Type", [{
  no: 0,
  name: "TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "TYPE_USER_ADDED"
}, {
  no: 2,
  name: "TYPE_AUTOMATIC"
}]);
S4h = class Otr extends ie {
  constructor(e) {
    super();
    this.documentationIdentifier = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.Documentation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "documentation_identifier",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Otr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Otr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Otr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Otr, e, t);
  }
};
k4h = class Utr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.mode = E3.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "mode",
      kind: "enum",
      T: v.getEnumType(E3)
    }]);
  }
  static fromBinary(e, t) {
    return new Utr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Utr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Utr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Utr, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FULL = 1] = "FULL";
  n[n.OUTLINE = 2] = "OUTLINE";
  n[n.CHUNKS = 3] = "CHUNKS";
})(E3 ||= {});
v.util.setEnumType(E3, "aiserver.v1.ContextIntent.File.Mode", [{
  no: 0,
  name: "MODE_UNSPECIFIED"
}, {
  no: 1,
  name: "MODE_FULL"
}, {
  no: 2,
  name: "MODE_OUTLINE"
}, {
  no: 3,
  name: "MODE_CHUNKS"
}]);
E4h = class $tr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CodeSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "potentially_out_of_date_range",
      kind: "message",
      T: wF
    }, {
      no: 3,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($tr, e, t);
  }
};
IgA = class qtr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.Symbol";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "symbol",
      kind: "message",
      T: C5n
    }, {
      no: 2,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qtr, e, t);
  }
};
x4h = class Htr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CommitNotes";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Htr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Htr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Htr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Htr, e, t);
  }
};
T4h = class Jtr extends ie {
  constructor(e) {
    super();
    this.scope = {
      case: undefined
    };
    this.filterToSeverities = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.Lints";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cmdk_scope",
      kind: "message",
      T: I4h,
      oneof: "scope"
    }, {
      no: 2,
      name: "file_scope",
      kind: "message",
      T: D4h,
      oneof: "scope"
    }, {
      no: 3,
      name: "filter_to_severities",
      kind: "enum",
      T: v.getEnumType(Xde),
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Jtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jtr, e, t);
  }
};
I4h = class Gtr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.Lints.CmdKScope";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Gtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gtr, e, t);
  }
};
D4h = class Wtr extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.Lints.FileScope";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "filter_range",
      kind: "message",
      T: S3,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Wtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wtr, e, t);
  }
};
B4h = class Qtr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.RecentLocations";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Qtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qtr, e, t);
  }
};
R4h = class jtr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new jtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jtr, e, t);
  }
};
P4h = class ztr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.VisibleTabs";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new ztr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ztr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ztr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ztr, e, t);
  }
};
DgA = class Vtr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CodebaseChunks";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Vtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vtr, e, t);
  }
};
L4h = class Ktr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CmdKCurrentFile";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Ktr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ktr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ktr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ktr, e, t);
  }
};
N4h = class Ytr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CmdKQueryEtc";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Ytr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ytr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ytr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ytr, e, t);
  }
};
M4h = class Ztr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CustomInstructions";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Ztr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ztr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ztr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ztr, e, t);
  }
};
F4h = class Xtr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.CmdKDefinitions";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Xtr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xtr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xtr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xtr, e, t);
  }
};
O4h = class enr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.ChatHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new enr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new enr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new enr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(enr, e, t);
  }
};
U4h = class tnr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.DiffHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new tnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tnr, e, t);
  }
};
$4h = class nnr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.TerminalCmdKDefaults";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new nnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nnr, e, t);
  }
};
q4h = class inr extends ie {
  constructor(e) {
    super();
    this.instanceId = 0;
    this.activeForCmdK = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.TerminalHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "instance_id",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "active_for_cmd_k",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "use_active_instance_as_fallback",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new inr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new inr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new inr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(inr, e, t);
  }
};
H4h = class rnr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextIntent.LspSubgraph";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new rnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rnr, e, t);
  }
};
