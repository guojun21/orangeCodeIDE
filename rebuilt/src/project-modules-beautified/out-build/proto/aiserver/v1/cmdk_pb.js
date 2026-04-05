"use strict";

// Module: out-build/proto/aiserver/v1/cmdk_pb.js
// Offset: 3659418 (bundle byte offset)
// Size: 21361 bytes
Ka();
J6();
qp();
H6();
cv();
Z6o = class snr extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RerankCmdKContextRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 3,
      name: "legacy_context",
      kind: "message",
      T: qRe
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: z8n
    }]);
  }
  static fromBinary(e, t) {
    return new snr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new snr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new snr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(snr, e, t);
  }
};
J4h = class onr extends ie {
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
    this.typeName = "aiserver.v1.RerankCmdKContextResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_status_update",
      kind: "message",
      T: G8n,
      oneof: "response"
    }, {
      no: 2,
      name: "missing_context_items",
      kind: "message",
      T: W8n,
      oneof: "response"
    }, {
      no: 3,
      name: "did_call",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new onr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new onr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new onr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(onr, e, t);
  }
};
G4h = class anr extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RerankTerminalCmdKContextRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: q4c
    }]);
  }
  static fromBinary(e, t) {
    return new anr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new anr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new anr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(anr, e, t);
  }
};
W4h = class cnr extends ie {
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
    this.typeName = "aiserver.v1.RerankTerminalCmdKContextResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_status_update",
      kind: "message",
      T: G8n,
      oneof: "response"
    }, {
      no: 2,
      name: "missing_context_items",
      kind: "message",
      T: W8n,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new cnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cnr, e, t);
  }
};
q4c = class lnr extends ie {
  constructor(e) {
    super();
    this.chatMode = false;
    this.adaCmdKContext = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TerminalCmdKOptions";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 3,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 1,
      name: "chat_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "ada_cmd_k_context",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "use_web",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new lnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lnr, e, t);
  }
};
z8n = class unr extends ie {
  constructor(e) {
    super();
    this.chatMode = false;
    this.adaCmdKContext = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CmdKOptions";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 3,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 1,
      name: "chat_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "ada_cmd_k_context",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "use_reranker",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "use_web",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "request_is_for_caching",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new unr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new unr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new unr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(unr, e, t);
  }
};
H4c = class dnr extends ie {
  constructor(e) {
    super();
    this.originalLines = [];
    this.relativePath = "";
    this.extraContextAbove = [];
    this.extraContextBelow = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CmdKUpcomingEdit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "original_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "extra_context_above",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "extra_context_below",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new dnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dnr, e, t);
  }
};
V8n = class hnr extends ie {
  constructor(e) {
    super();
    this.originalLines = [];
    this.newLines = [];
    this.relativePath = "";
    this.extraContextAbove = [];
    this.extraContextBelow = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CmdKPreviousEdit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "original_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "new_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "extra_context_above",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "extra_context_below",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new hnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hnr, e, t);
  }
};
Q4h = class mnr extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    this.previousEdits = [];
    this.upcomingEdits = [];
    this.images = [];
    this.links = [];
    this.diffHistory = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamHypermodeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: z8n
    }, {
      no: 4,
      name: "cmd_k_debug_info",
      kind: "message",
      T: fve
    }, {
      no: 6,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "legacy_context",
      kind: "message",
      T: qRe
    }, {
      no: 7,
      name: "previous_edit",
      kind: "message",
      T: V8n,
      opt: true
    }, {
      no: 8,
      name: "previous_edits",
      kind: "message",
      T: V8n,
      repeated: true
    }, {
      no: 12,
      name: "upcoming_edits",
      kind: "message",
      T: H4c,
      repeated: true
    }, {
      no: 9,
      name: "use_big_cmdk_for_multi_file_edit",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 11,
      name: "links",
      kind: "message",
      T: H9o,
      repeated: true
    }, {
      no: 13,
      name: "diff_history",
      kind: "message",
      T: wz,
      repeated: true
    }, {
      no: 14,
      name: "hyper_model",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 15,
      name: "timing_info",
      kind: "message",
      T: G4c,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new mnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mnr, e, t);
  }
};
J4c = class pnr extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    this.previousEdits = [];
    this.upcomingEdits = [];
    this.images = [];
    this.links = [];
    this.diffHistory = [];
    this.rules = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: z8n
    }, {
      no: 4,
      name: "cmd_k_debug_info",
      kind: "message",
      T: fve
    }, {
      no: 6,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "legacy_context",
      kind: "message",
      T: qRe
    }, {
      no: 7,
      name: "previous_edit",
      kind: "message",
      T: V8n,
      opt: true
    }, {
      no: 8,
      name: "previous_edits",
      kind: "message",
      T: V8n,
      repeated: true
    }, {
      no: 12,
      name: "upcoming_edits",
      kind: "message",
      T: H4c,
      repeated: true
    }, {
      no: 9,
      name: "use_big_cmdk_for_multi_file_edit",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 11,
      name: "links",
      kind: "message",
      T: H9o,
      repeated: true
    }, {
      no: 13,
      name: "diff_history",
      kind: "message",
      T: wz,
      repeated: true
    }, {
      no: 14,
      name: "diff_to_base_branch",
      kind: "message",
      T: j4h,
      opt: true
    }, {
      no: 15,
      name: "timing_info",
      kind: "message",
      T: G4c,
      opt: true
    }, {
      no: 16,
      name: "rules",
      kind: "message",
      T: rke,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new pnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pnr, e, t);
  }
};
j4h = class gnr extends ie {
  constructor(e) {
    super();
    this.fileDiffs = [];
    this.commits = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_diffs",
      kind: "message",
      T: z4h,
      repeated: true
    }, {
      no: 2,
      name: "commits",
      kind: "message",
      T: Q9e,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new gnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gnr, e, t);
  }
};
z4h = class fnr extends ie {
  constructor(e) {
    super();
    this.fileName = "";
    this.diff = "";
    this.tooBig = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "too_big",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new fnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fnr, e, t);
  }
};
G4c = class bnr extends ie {
  constructor(e) {
    super();
    this.userInputTime = 0;
    this.streamCmdkTime = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TimingInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_input_time",
      kind: "scalar",
      T: 1
    }, {
      no: 2,
      name: "stream_cmdk_time",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new bnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bnr, e, t);
  }
};
W4c = class vnr extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamTerminalCmdKRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: q4c
    }, {
      no: 6,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "legacy_context",
      kind: "message",
      T: qRe
    }]);
  }
  static fromBinary(e, t) {
    return new vnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vnr, e, t);
  }
};
qRe = class Anr extends ie {
  constructor(e) {
    super();
    this.promptCodeBlocks = [];
    this.documentationIdentifiers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CmdKLegacyContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 4,
      name: "explicit_context",
      kind: "message",
      T: _F
    }, {
      no: 12,
      name: "prompt_code_blocks",
      kind: "message",
      T: WB,
      repeated: true
    }, {
      no: 10,
      name: "documentation_identifiers",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Anr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Anr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Anr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Anr, e, t);
  }
};
Q4c = class ynr extends ie {
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
    this.typeName = "aiserver.v1.StreamCmdKResponseContextWrapped";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "real_response",
      kind: "message",
      T: K8n,
      oneof: "response"
    }, {
      no: 2,
      name: "context_status_update",
      kind: "message",
      T: G8n,
      oneof: "response"
    }, {
      no: 3,
      name: "missing_context_items",
      kind: "message",
      T: W8n,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new ynr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ynr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ynr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ynr, e, t);
  }
};
V4h = class wnr extends ie {
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
    this.typeName = "aiserver.v1.StreamTerminalCmdKResponseContextWrapped";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "real_response",
      kind: "message",
      T: K4h,
      oneof: "response"
    }, {
      no: 2,
      name: "context_status_update",
      kind: "message",
      T: G8n,
      oneof: "response"
    }, {
      no: 3,
      name: "missing_context_items",
      kind: "message",
      T: W8n,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new wnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wnr, e, t);
  }
};
K4h = class _nr extends ie {
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
    this.typeName = "aiserver.v1.StreamTerminalCmdKResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "terminal_command",
      kind: "message",
      T: Y4h,
      oneof: "response"
    }, {
      no: 4,
      name: "chat",
      kind: "message",
      T: Z4h,
      oneof: "response"
    }, {
      no: 5,
      name: "status_update",
      kind: "message",
      T: X4h,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new _nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_nr, e, t);
  }
};
Y4h = class Cnr extends ie {
  constructor(e) {
    super();
    this.partialCommand = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "partial_command",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Cnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cnr, e, t);
  }
};
Z4h = class Snr extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamTerminalCmdKResponse.Chat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Snr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Snr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Snr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Snr, e, t);
  }
};
X4h = class knr extends ie {
  constructor(e) {
    super();
    this.messages = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "messages",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new knr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new knr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new knr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(knr, e, t);
  }
};
K8n = class Enr extends ie {
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
    this.typeName = "aiserver.v1.StreamCmdKResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "edit_start",
      kind: "message",
      T: eOh,
      oneof: "response"
    }, {
      no: 2,
      name: "edit_stream",
      kind: "message",
      T: tOh,
      oneof: "response"
    }, {
      no: 3,
      name: "edit_end",
      kind: "message",
      T: nOh,
      oneof: "response"
    }, {
      no: 4,
      name: "chat",
      kind: "message",
      T: iOh,
      oneof: "response"
    }, {
      no: 5,
      name: "status_update",
      kind: "message",
      T: rOh,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new Enr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Enr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Enr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Enr, e, t);
  }
};
eOh = class xnr extends ie {
  constructor(e) {
    super();
    this.startLineNumber = 0;
    this.editId = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKResponse.EditStart";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "edit_id",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "max_end_line_number_exclusive",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "file_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xnr, e, t);
  }
};
tOh = class Tnr extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.editId = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKResponse.EditStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "edit_id",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "file_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tnr, e, t);
  }
};
nOh = class Inr extends ie {
  constructor(e) {
    super();
    this.endLineNumberExclusive = 0;
    this.editId = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKResponse.EditEnd";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "end_line_number_exclusive",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "edit_id",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "file_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Inr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Inr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Inr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Inr, e, t);
  }
};
iOh = class Dnr extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKResponse.Chat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Dnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dnr, e, t);
  }
};
rOh = class Bnr extends ie {
  constructor(e) {
    super();
    this.messages = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamCmdKResponse.StatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "messages",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Bnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bnr, e, t);
  }
};
sOh = class Rnr extends ie {
  constructor(e) {
    super();
    this.codeBlocks = [];
    this.contextItems = [];
    this.sessionId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRelevantChunksRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_blocks",
      kind: "message",
      T: WB,
      repeated: true
    }, {
      no: 2,
      name: "cmd_k_options",
      kind: "message",
      T: z8n
    }, {
      no: 3,
      name: "context_items",
      kind: "message",
      T: eYe,
      repeated: true
    }, {
      no: 4,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "legacy_context",
      kind: "message",
      T: qRe
    }]);
  }
  static fromBinary(e, t) {
    return new Rnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rnr, e, t);
  }
};
oOh = class Pnr extends ie {
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
    this.typeName = "aiserver.v1.StreamGetRelevantChunksResponseContextWrapped";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "real_response",
      kind: "message",
      T: aOh,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new Pnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pnr, e, t);
  }
};
aOh = class Lnr extends ie {
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
    this.typeName = "aiserver.v1.GetRelevantChunksResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_blocks",
      kind: "message",
      T: lOh,
      oneof: "response"
    }, {
      no: 2,
      name: "chain_of_thought_stream",
      kind: "message",
      T: cOh,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new Lnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lnr, e, t);
  }
};
cOh = class Nnr extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Nnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nnr, e, t);
  }
};
lOh = class Mnr extends ie {
  constructor(e) {
    super();
    this.codeBlocks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRelevantChunksResponse.CodeBlocks";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_blocks",
      kind: "message",
      T: WB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Mnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mnr, e, t);
  }
};
