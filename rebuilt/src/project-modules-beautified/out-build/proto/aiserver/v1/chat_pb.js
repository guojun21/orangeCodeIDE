"use strict";

// Module: out-build/proto/aiserver/v1/chat_pb.js
// Offset: 3343803 (bundle byte offset)
// Size: 98651 bytes
Ka();
Vg();
qp();
V8o();
jY();
Uv();
Jk();
Xbt();
jKe();
svt();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CODEBASE = 1] = "CODEBASE";
  n[n.LONG_FILE = 2] = "LONG_FILE";
  n[n.DOCS = 3] = "DOCS";
})(H9e ||= {});
v.util.setEnumType(H9e, "aiserver.v1.ChunkType", [{
  no: 0,
  name: "CHUNK_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "CHUNK_TYPE_CODEBASE"
}, {
  no: 2,
  name: "CHUNK_TYPE_LONG_FILE"
}, {
  no: 3,
  name: "CHUNK_TYPE_DOCS"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.DEEP_SEARCH = 1] = "DEEP_SEARCH";
  n[n.FIX_LINTS = 2] = "FIX_LINTS";
  n[n.TASK = 3] = "TASK";
  n[n.SPEC = 4] = "SPEC";
})(wve ||= {});
v.util.setEnumType(wve, "aiserver.v1.SubagentType", [{
  no: 0,
  name: "SUBAGENT_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "SUBAGENT_TYPE_DEEP_SEARCH"
}, {
  no: 2,
  name: "SUBAGENT_TYPE_FIX_LINTS"
}, {
  no: 3,
  name: "SUBAGENT_TYPE_TASK"
}, {
  no: 4,
  name: "SUBAGENT_TYPE_SPEC"
}]);
uLh = class azi extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamReplayChatRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "tokens_per_second",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new azi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new azi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new azi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(azi, e, t);
  }
};
RFc = class czi extends ie {
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
    this.typeName = "aiserver.v1.StreamUnifiedChatRequestWithTools";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_unified_chat_request",
      kind: "message",
      T: URe,
      oneof: "request"
    }, {
      no: 2,
      name: "client_side_tool_v2_result",
      kind: "message",
      T: VR,
      oneof: "request"
    }]);
  }
  static fromBinary(e, t) {
    return new czi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new czi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new czi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(czi, e, t);
  }
};
dLh = class lzi extends ie {
  constructor(e) {
    super();
    this.rules = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UserRules";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rules",
      kind: "message",
      T: w8n,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new lzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lzi, e, t);
  }
};
hLh = class uzi extends ie {
  constructor(e) {
    super();
    this.padding = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamStart";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "padding",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new uzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uzi, e, t);
  }
};
mLh = class dzi extends ie {
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
    this.typeName = "aiserver.v1.SpanContext";
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
    return new dzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dzi, e, t);
  }
};
J9e = class hzi extends ie {
  constructor(e) {
    super();
    this.response = {
      case: undefined
    };
    this.eventId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponseWithTools";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_side_tool_v2_call",
      kind: "message",
      T: nhe,
      oneof: "response"
    }, {
      no: 2,
      name: "stream_unified_chat_response",
      kind: "message",
      T: A8n,
      oneof: "response"
    }, {
      no: 3,
      name: "conversation_summary",
      kind: "message",
      T: ohe,
      oneof: "response"
    }, {
      no: 4,
      name: "user_rules",
      kind: "message",
      T: dLh,
      oneof: "response"
    }, {
      no: 5,
      name: "stream_start",
      kind: "message",
      T: hLh,
      oneof: "response"
    }, {
      no: 6,
      name: "tracing_context",
      kind: "message",
      T: mLh,
      opt: true
    }, {
      no: 7,
      name: "event_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new hzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hzi, e, t);
  }
};
pLh = class mzi extends ie {
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
    this.typeName = "aiserver.v1.StreamUnifiedChatRequestWithToolsIdempotent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_chunk",
      kind: "message",
      T: RFc,
      oneof: "request"
    }, {
      no: 2,
      name: "abort",
      kind: "message",
      T: ZI,
      oneof: "request"
    }, {
      no: 3,
      name: "close",
      kind: "message",
      T: ZI,
      oneof: "request"
    }, {
      no: 4,
      name: "idempotency_key",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "seqno",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new mzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mzi, e, t);
  }
};
gLh = class pzi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.isDegradedMode = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WelcomeMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_degraded_mode",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new pzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pzi, e, t);
  }
};
PFc = class gzi extends ie {
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
    this.typeName = "aiserver.v1.StreamUnifiedChatResponseWithToolsIdempotent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server_chunk",
      kind: "message",
      T: J9e,
      oneof: "response"
    }, {
      no: 3,
      name: "welcome_message",
      kind: "message",
      T: gLh,
      oneof: "response"
    }, {
      no: 4,
      name: "seqno_ack",
      kind: "scalar",
      T: 13,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new gzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gzi, e, t);
  }
};
fgA = class fzi extends ie {
  constructor(e) {
    super();
    this.strategy = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationSummaryStrategy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "plain_text_summary",
      kind: "scalar",
      T: 9,
      oneof: "strategy"
    }, {
      no: 2,
      name: "arbitrary_summary_plus_tool_result_truncation",
      kind: "message",
      T: fLh,
      oneof: "strategy"
    }]);
  }
  static fromBinary(e, t) {
    return new fzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fzi, e, t);
  }
};
fLh = class bzi extends ie {
  constructor(e) {
    super();
    this.toolResultTruncationLength = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "arbitrary_summary",
      kind: "message",
      T: ohe
    }, {
      no: 2,
      name: "tool_result_truncation_length",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new bzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bzi, e, t);
  }
};
ohe = class vzi extends ie {
  constructor(e) {
    super();
    this.summary = "";
    this.truncationLastBubbleIdInclusive = "";
    this.clientShouldStartSendingFromInclusiveBubbleId = "";
    this.previousConversationSummaryBubbleId = "";
    this.includesToolResults = false;
    this.strategy = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationSummary";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "truncation_last_bubble_id_inclusive",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "client_should_start_sending_from_inclusive_bubble_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "previous_conversation_summary_bubble_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "includes_tool_results",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "strategy",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new vzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vzi, e, t);
  }
};
bLh = class Azi extends ie {
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
    this.typeName = "aiserver.v1.ContextToRank";
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
      name: "line_range",
      kind: "message",
      T: S3,
      opt: true
    }, {
      no: 4,
      name: "code_block",
      kind: "message",
      T: WB,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Azi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Azi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Azi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Azi, e, t);
  }
};
LFc = class yzi extends ie {
  constructor(e) {
    super();
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RankedContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context",
      kind: "message",
      T: bLh
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new yzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yzi, e, t);
  }
};
I6o = class wzi extends ie {
  constructor(e) {
    super();
    this.chunks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentationCitation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chunks",
      kind: "message",
      T: aMc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new wzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wzi, e, t);
  }
};
NFc = class _zi extends ie {
  constructor(e) {
    super();
    this.references = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebCitation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "references",
      kind: "message",
      T: D6o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new _zi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _zi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _zi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_zi, e, t);
  }
};
D6o = class Czi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chunk",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Czi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Czi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Czi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Czi, e, t);
  }
};
X5t = class Szi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocsReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chunk",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Szi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Szi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Szi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Szi, e, t);
  }
};
MFc = class kzi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.title = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AiWebSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kzi, e, t);
  }
};
vLh = class Ezi extends ie {
  constructor(e) {
    super();
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AiWebSearchResults";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: MFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ezi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ezi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ezi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ezi, e, t);
  }
};
ALh = class xzi extends ie {
  constructor(e) {
    super();
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "metadata",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xzi, e, t);
  }
};
FFc = class Tzi extends ie {
  constructor(e) {
    super();
    this.updates = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StatusUpdates";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "updates",
      kind: "message",
      T: ALh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tzi, e, t);
  }
};
yLh = class Izi extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.documents = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RerankDocumentsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "documents",
      kind: "message",
      T: _Lh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Izi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Izi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Izi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Izi, e, t);
  }
};
wLh = class Dzi extends ie {
  constructor(e) {
    super();
    this.documents = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RerankDocumentsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "documents",
      kind: "message",
      T: CLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Dzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dzi, e, t);
  }
};
_Lh = class Bzi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.id = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Document";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bzi, e, t);
  }
};
CLh = class Rzi extends ie {
  constructor(e) {
    super();
    this.documentId = "";
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentIdsWithScores";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "document_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new Rzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rzi, e, t);
  }
};
B6o = class Pzi extends ie {
  constructor(e) {
    super();
    this.fileName = "";
    this.diffHistory = [];
    this.diffHistoryTimestamps = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComposerFileDiffHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff_history",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "diff_history_timestamps",
      kind: "scalar",
      T: 1,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Pzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pzi, e, t);
  }
};
SLh = class Lzi extends ie {
  constructor(e) {
    super();
    this.uri = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WorkspaceFolder";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Lzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lzi, e, t);
  }
};
URe = class Nzi extends ie {
  constructor(e) {
    super();
    this.conversation = [];
    this.fullConversationHeadersOnly = [];
    this.documentationIdentifiers = [];
    this.externalLinks = [];
    this.diffsForCompressingFiles = [];
    this.multiFileLinterErrors = [];
    this.fileDiffHistories = [];
    this.quotes = [];
    this.additionalRankedContext = [];
    this.isChat = false;
    this.conversationId = "";
    this.replyingToRequestId = "";
    this.repositoryInfoShouldQueryStaging = false;
    this.repositoryInfoShouldQueryProd = false;
    this.repoQueryAuthToken = "";
    this.isAgentic = false;
    this.supportedTools = [];
    this.enableYoloMode = false;
    this.yoloPrompt = "";
    this.useUnifiedChatPrompt = false;
    this.mcpTools = [];
    this.isHeadless = false;
    this.isBackgroundComposer = false;
    this.toolsRequiringAcceptedReturn = [];
    this.projectLayouts = [];
    this.supportsGitIndex = false;
    this.forceIsNotDev = false;
    this.allowServerSideSemanticSearch = false;
    this.workspaceFolders = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation",
      kind: "message",
      T: Qw,
      repeated: true
    }, {
      no: 30,
      name: "full_conversation_headers_only",
      kind: "message",
      T: $Lh,
      repeated: true
    }, {
      no: 2,
      name: "allow_long_file_scan",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "explicit_context",
      kind: "message",
      T: _F
    }, {
      no: 4,
      name: "can_handle_filenames_after_language_ids",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 6,
      name: "linter_errors",
      kind: "message",
      T: aN
    }, {
      no: 7,
      name: "documentation_identifiers",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 8,
      name: "use_web",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "external_links",
      kind: "message",
      T: s5t,
      repeated: true
    }, {
      no: 10,
      name: "project_context",
      kind: "message",
      T: Qw,
      opt: true
    }, {
      no: 11,
      name: "diffs_for_compressing_files",
      kind: "message",
      T: kLh,
      repeated: true
    }, {
      no: 12,
      name: "compress_edits",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "should_cache",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 14,
      name: "multi_file_linter_errors",
      kind: "message",
      T: aN,
      repeated: true
    }, {
      no: 15,
      name: "current_file",
      kind: "message",
      T: AS
    }, {
      no: 16,
      name: "recent_edits",
      kind: "message",
      T: ELh,
      opt: true
    }, {
      no: 17,
      name: "use_reference_composer_diff_prompt",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 18,
      name: "file_diff_histories",
      kind: "message",
      T: B6o,
      repeated: true
    }, {
      no: 19,
      name: "use_new_compression_scheme",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 21,
      name: "quotes",
      kind: "message",
      T: q9o,
      repeated: true
    }, {
      no: 20,
      name: "additional_ranked_context",
      kind: "message",
      T: LFc,
      repeated: true
    }, {
      no: 22,
      name: "is_chat",
      kind: "scalar",
      T: 8
    }, {
      no: 23,
      name: "conversation_id",
      kind: "scalar",
      T: 9
    }, {
      no: 72,
      name: "replying_to_request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 24,
      name: "repository_info",
      kind: "message",
      T: z_
    }, {
      no: 25,
      name: "repository_info_should_query_staging",
      kind: "scalar",
      T: 8
    }, {
      no: 39,
      name: "repository_info_should_query_prod",
      kind: "scalar",
      T: 8
    }, {
      no: 52,
      name: "query_only_repo_access",
      kind: "message",
      T: $bt
    }, {
      no: 44,
      name: "repo_query_auth_token",
      kind: "scalar",
      T: 9
    }, {
      no: 26,
      name: "environment_info",
      kind: "message",
      T: N9o
    }, {
      no: 27,
      name: "is_agentic",
      kind: "scalar",
      T: 8
    }, {
      no: 28,
      name: "conversation_summary",
      kind: "message",
      T: ohe,
      opt: true
    }, {
      no: 29,
      name: "supported_tools",
      kind: "enum",
      T: v.getEnumType(an),
      repeated: true
    }, {
      no: 31,
      name: "enable_yolo_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 32,
      name: "yolo_prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 33,
      name: "use_unified_chat_prompt",
      kind: "scalar",
      T: 8
    }, {
      no: 34,
      name: "mcp_tools",
      kind: "message",
      T: F9e,
      repeated: true
    }, {
      no: 35,
      name: "use_full_inputs_context",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 36,
      name: "is_resume",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 37,
      name: "allow_model_fallbacks",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 38,
      name: "number_of_times_shown_fallback_model_warning",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 40,
      name: "context_bank_session_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 41,
      name: "context_bank_version",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 43,
      name: "context_bank_encryption_key",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 45,
      name: "is_headless",
      kind: "scalar",
      T: 8
    }, {
      no: 68,
      name: "is_background_composer",
      kind: "scalar",
      T: 8
    }, {
      no: 42,
      name: "uses_codebase_results",
      kind: "message",
      T: ILh,
      opt: true
    }, {
      no: 46,
      name: "unified_mode",
      kind: "enum",
      T: v.getEnumType(G9e),
      opt: true
    }, {
      no: 47,
      name: "tools_requiring_accepted_return",
      kind: "enum",
      T: v.getEnumType(an),
      repeated: true
    }, {
      no: 48,
      name: "should_disable_tools",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 49,
      name: "thinking_level",
      kind: "enum",
      T: v.getEnumType(R6o),
      opt: true
    }, {
      no: 50,
      name: "should_use_chat_prompt",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 55,
      name: "background_composer_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 51,
      name: "uses_rules",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 53,
      name: "mode_uses_auto_apply",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 54,
      name: "unified_mode_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 56,
      name: "use_generate_rules_prompt",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 57,
      name: "edit_tool_supports_search_and_replace",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 58,
      name: "project_layouts",
      kind: "message",
      T: zFc,
      repeated: true
    }, {
      no: 59,
      name: "repository_name_if_unindexed",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 60,
      name: "indexing_progress",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 61,
      name: "full_file_cmd_k_options",
      kind: "message",
      T: DLh,
      opt: true
    }, {
      no: 62,
      name: "indexing_phase_if_unindexed",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 63,
      name: "use_knowledge_base_prompt",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 64,
      name: "indexing_num_files_if_unindexed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 66,
      name: "subagent_info",
      kind: "message",
      T: vNh,
      opt: true
    }, {
      no: 67,
      name: "supports_git_index",
      kind: "scalar",
      T: 8
    }, {
      no: 69,
      name: "force_is_not_dev",
      kind: "scalar",
      T: 8
    }, {
      no: 70,
      name: "disable_edit_file_timeout",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 71,
      name: "should_attach_linter_errors",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 73,
      name: "should_speculatively_route_gpt5",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 74,
      name: "force_terminal_hanging_detection",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 75,
      name: "force_summarization",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 76,
      name: "is_quick_search_query",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 77,
      name: "is_spec_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 78,
      name: "allow_server_side_semantic_search",
      kind: "scalar",
      T: 8
    }, {
      no: 79,
      name: "speculative_summarization_encryption_key",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 81,
      name: "workspace_folders",
      kind: "message",
      T: SLh,
      repeated: true
    }, {
      no: 82,
      name: "does_readfile_support_images",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 83,
      name: "sandboxing_support_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 84,
      name: "custom_planning_instructions",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 85,
      name: "enable_terminal_file_persistence",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 86,
      name: "terminals_folder",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 93,
      name: "agent_transcripts_folder",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 87,
      name: "agent_notes_folder",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 88,
      name: "agent_tools_folder",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 89,
      name: "current_plan",
      kind: "message",
      T: BLh,
      opt: true
    }, {
      no: 90,
      name: "has_mcp_descriptors",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 91,
      name: "best_of_n_group_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 92,
      name: "try_use_best_of_n_promotion",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Nzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nzi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CHAT = 1] = "CHAT";
  n[n.AGENT = 2] = "AGENT";
  n[n.EDIT = 3] = "EDIT";
  n[n.CUSTOM = 4] = "CUSTOM";
  n[n.PLAN = 5] = "PLAN";
  n[n.DEBUG = 6] = "DEBUG";
})(G9e ||= {});
v.util.setEnumType(G9e, "aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [{
  no: 0,
  name: "UNIFIED_MODE_UNSPECIFIED"
}, {
  no: 1,
  name: "UNIFIED_MODE_CHAT"
}, {
  no: 2,
  name: "UNIFIED_MODE_AGENT"
}, {
  no: 3,
  name: "UNIFIED_MODE_EDIT"
}, {
  no: 4,
  name: "UNIFIED_MODE_CUSTOM"
}, {
  no: 5,
  name: "UNIFIED_MODE_PLAN"
}, {
  no: 6,
  name: "UNIFIED_MODE_DEBUG"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.MEDIUM = 1] = "MEDIUM";
  n[n.HIGH = 2] = "HIGH";
})(R6o ||= {});
v.util.setEnumType(R6o, "aiserver.v1.StreamUnifiedChatRequest.ThinkingLevel", [{
  no: 0,
  name: "THINKING_LEVEL_UNSPECIFIED"
}, {
  no: 1,
  name: "THINKING_LEVEL_MEDIUM"
}, {
  no: 2,
  name: "THINKING_LEVEL_HIGH"
}]);
kLh = class Mzi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.redRanges = [];
    this.redRangesReversed = [];
    this.startHash = "";
    this.endHash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RedDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "red_ranges",
      kind: "message",
      T: tae,
      repeated: true
    }, {
      no: 3,
      name: "red_ranges_reversed",
      kind: "message",
      T: tae,
      repeated: true
    }, {
      no: 4,
      name: "start_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "end_hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Mzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mzi, e, t);
  }
};
ELh = class Fzi extends ie {
  constructor(e) {
    super();
    this.codeBlockInfo = [];
    this.finalFileValues = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_block_info",
      kind: "message",
      T: xLh,
      repeated: true
    }, {
      no: 2,
      name: "final_file_values",
      kind: "message",
      T: TLh,
      repeated: true
    }, {
      no: 3,
      name: "edits_belong_to_composer_generation_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Fzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fzi, e, t);
  }
};
xLh = class Ozi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content_before",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "content_after",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "generation_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "version",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ozi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ozi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ozi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ozi, e, t);
  }
};
TLh = class Uzi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Uzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uzi, e, t);
  }
};
ILh = class $zi extends ie {
  constructor(e) {
    super();
    this.results = [];
    this.allFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.CodeSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: zR,
      repeated: true
    }, {
      no: 2,
      name: "all_files",
      kind: "message",
      T: iae,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $zi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $zi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $zi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($zi, e, t);
  }
};
DLh = class qzi extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.FullFileCmdKOptions";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qzi, e, t);
  }
};
BLh = class Hzi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatRequest.CurrentPlan";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Hzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hzi, e, t);
  }
};
OFc = class Jzi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.content = "";
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextPiece";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new Jzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jzi, e, t);
  }
};
RLh = class Gzi extends ie {
  constructor(e) {
    super();
    this.pieces = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextPieceUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pieces",
      kind: "message",
      T: OFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Gzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gzi, e, t);
  }
};
A8n = class Wzi extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 22,
      name: "server_bubble_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "debugging_only_chat_prompt",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "debugging_only_token_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "document_citation",
      kind: "message",
      T: I6o
    }, {
      no: 5,
      name: "filled_prompt",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "is_big_file",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "intermediate_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "is_using_slow_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "chunk_identity",
      kind: "message",
      T: LLh,
      opt: true
    }, {
      no: 9,
      name: "docs_reference",
      kind: "message",
      T: X5t,
      opt: true
    }, {
      no: 11,
      name: "web_citation",
      kind: "message",
      T: NFc,
      opt: true
    }, {
      no: 33,
      name: "ai_web_search_results",
      kind: "message",
      T: vLh,
      opt: true
    }, {
      no: 12,
      name: "status_updates",
      kind: "message",
      T: FFc,
      opt: true
    }, {
      no: 13,
      name: "tool_call",
      kind: "message",
      T: m8o,
      opt: true
    }, {
      no: 36,
      name: "tool_call_v2",
      kind: "message",
      T: yPc,
      opt: true
    }, {
      no: 14,
      name: "should_break_ai_message",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "partial_tool_call",
      kind: "message",
      T: APc,
      opt: true
    }, {
      no: 16,
      name: "final_tool_result",
      kind: "message",
      T: NLh,
      opt: true
    }, {
      no: 17,
      name: "symbol_link",
      kind: "message",
      T: y8n,
      opt: true
    }, {
      no: 19,
      name: "file_link",
      kind: "message",
      T: P6o,
      opt: true
    }, {
      no: 18,
      name: "conversation_summary",
      kind: "message",
      T: ohe,
      opt: true
    }, {
      no: 20,
      name: "service_status_update",
      kind: "message",
      T: e9t,
      opt: true
    }, {
      no: 21,
      name: "viewable_git_context",
      kind: "message",
      T: N6o,
      opt: true
    }, {
      no: 23,
      name: "context_piece_update",
      kind: "message",
      T: RLh,
      opt: true
    }, {
      no: 24,
      name: "used_code",
      kind: "message",
      T: PLh,
      opt: true
    }, {
      no: 25,
      name: "thinking",
      kind: "message",
      T: n9t,
      opt: true
    }, {
      no: 37,
      name: "thinking_style",
      kind: "enum",
      T: v.getEnumType(uke),
      opt: true
    }, {
      no: 26,
      name: "stop_using_dsv3_agentic_model",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 27,
      name: "usage_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 28,
      name: "conversation_summary_starter",
      kind: "message",
      T: OLh,
      opt: true
    }, {
      no: 29,
      name: "subagent_return",
      kind: "message",
      T: jFc,
      opt: true
    }, {
      no: 30,
      name: "context_window_status",
      kind: "message",
      T: UFc,
      opt: true
    }, {
      no: 31,
      name: "image_description",
      kind: "message",
      T: MLh,
      opt: true
    }, {
      no: 32,
      name: "parallel_tool_calls_complete",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 34,
      name: "stars_feedback_request",
      kind: "message",
      T: FLh,
      opt: true
    }, {
      no: 35,
      name: "model_provider_request_json",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Wzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wzi, e, t);
  }
};
PLh = class Qzi extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponse.UsedCode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Qzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qzi, e, t);
  }
};
LLh = class jzi extends ie {
  constructor(e) {
    super();
    this.fileName = "";
    this.startLine = 0;
    this.endLine = 0;
    this.text = "";
    this.chunkType = H9e.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "chunk_type",
      kind: "enum",
      T: v.getEnumType(H9e)
    }]);
  }
  static fromBinary(e, t) {
    return new jzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jzi, e, t);
  }
};
NLh = class zzi extends ie {
  constructor(e) {
    super();
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponse.FinalToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: VR
    }]);
  }
  static fromBinary(e, t) {
    return new zzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zzi, e, t);
  }
};
MLh = class Vzi extends ie {
  constructor(e) {
    super();
    this.description = "";
    this.imageUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamUnifiedChatResponse.ImageDescription";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "image_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Vzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vzi, e, t);
  }
};
UFc = class Kzi extends ie {
  constructor(e) {
    super();
    this.percentageRemaining = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextWindowStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "percentage_remaining",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "tokens_used",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "token_limit",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "percentage_remaining_float",
      kind: "scalar",
      T: 2,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Kzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kzi, e, t);
  }
};
FLh = class Yzi extends ie {
  constructor(e) {
    super();
    this.bubbleId = "";
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StarsFeedbackRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bubble_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Yzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yzi, e, t);
  }
};
OLh = class Zzi extends ie {
  constructor(e) {
    super();
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationSummaryStarter";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Zzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zzi, e, t);
  }
};
e9t = class Xzi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.codicon = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ServiceStatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "codicon",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "action_to_run_on_status_update",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Xzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xzi, e, t);
  }
};
y8n = class eVi extends ie {
  constructor(e) {
    super();
    this.symbolName = "";
    this.symbolSearchString = "";
    this.relativeWorkspacePath = "";
    this.roughLineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SymbolLink";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "symbol_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "symbol_search_string",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "rough_line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new eVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eVi, e, t);
  }
};
P6o = class tVi extends ie {
  constructor(e) {
    super();
    this.displayName = "";
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FileLink";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "display_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new tVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tVi, e, t);
  }
};
ULh = class nVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.redRanges = [];
    this.redRangesReversed = [];
    this.startHash = "";
    this.endHash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RedDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "red_ranges",
      kind: "message",
      T: tae,
      repeated: true
    }, {
      no: 3,
      name: "red_ranges_reversed",
      kind: "message",
      T: tae,
      repeated: true
    }, {
      no: 4,
      name: "start_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "end_hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new nVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nVi, e, t);
  }
};
$Lh = class iVi extends ie {
  constructor(e) {
    super();
    this.bubbleId = "";
    this.type = ul.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessageHeader";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bubble_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "server_bubble_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "type",
      kind: "enum",
      T: v.getEnumType(ul)
    }]);
  }
  static fromBinary(e, t) {
    return new iVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iVi, e, t);
  }
};
L6o = class rVi extends ie {
  constructor(e) {
    super();
    this.fileDetails = "";
    this.fileName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DiffFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_details",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new rVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rVi, e, t);
  }
};
qLh = class sVi extends ie {
  constructor(e) {
    super();
    this.description = "";
    this.message = "";
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ViewableCommitProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "files",
      kind: "message",
      T: L6o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new sVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sVi, e, t);
  }
};
HLh = class oVi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.body = "";
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ViewablePRProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "files",
      kind: "message",
      T: L6o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new oVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oVi, e, t);
  }
};
JLh = class aVi extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.diffPreface = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ViewableDiffProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: L6o,
      repeated: true
    }, {
      no: 2,
      name: "diff_preface",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aVi, e, t);
  }
};
N6o = class cVi extends ie {
  constructor(e) {
    super();
    this.diffData = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ViewableGitContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit_data",
      kind: "message",
      T: qLh,
      opt: true
    }, {
      no: 2,
      name: "pull_request_data",
      kind: "message",
      T: HLh,
      opt: true
    }, {
      no: 3,
      name: "diff_data",
      kind: "message",
      T: JLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new cVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cVi, e, t);
  }
};
Qw = class lVi extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.type = ul.UNSPECIFIED;
    this.attachedCodeChunks = [];
    this.codebaseContextChunks = [];
    this.commits = [];
    this.pullRequests = [];
    this.gitDiffs = [];
    this.assistantSuggestedDiffs = [];
    this.interpreterResults = [];
    this.images = [];
    this.attachedFolders = [];
    this.approximateLintErrors = [];
    this.bubbleId = "";
    this.attachedFoldersNew = [];
    this.lints = [];
    this.userResponsesToSuggestedCodeBlocks = [];
    this.relevantFiles = [];
    this.toolResults = [];
    this.notepads = [];
    this.capabilities = [];
    this.editTrailContexts = [];
    this.suggestedCodeBlocks = [];
    this.diffsForCompressingFiles = [];
    this.multiFileLinterErrors = [];
    this.diffHistories = [];
    this.recentlyViewedFiles = [];
    this.recentLocationsHistory = [];
    this.isAgentic = false;
    this.fileDiffTrajectories = [];
    this.existedSubsequentTerminalCommand = false;
    this.existedPreviousTerminalCommand = false;
    this.docsReferences = [];
    this.webReferences = [];
    this.aiWebSearchResults = [];
    this.attachedFoldersListDirResults = [];
    this.humanChanges = [];
    this.attachedHumanChanges = false;
    this.summarizedComposers = [];
    this.cursorRules = [];
    this.contextPieces = [];
    this.allThinkingBlocks = [];
    this.diffsSinceLastApply = [];
    this.deletedFiles = [];
    this.supportedTools = [];
    this.consoleLogs = [];
    this.knowledgeItems = [];
    this.uiElementPicked = [];
    this.documentationSelections = [];
    this.externalLinks = [];
    this.projectLayouts = [];
    this.capabilityContexts = [];
    this.todos = [];
    this.requestId = "";
    this.createdAt = "";
    this.mcpDescriptors = [];
    this.workspaceUris = [];
    this.cursorCommands = [];
    this.cursorCommandsExplicitlySet = false;
    this.pastChats = [];
    this.pastChatsExplicitlySet = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "enum",
      T: v.getEnumType(ul)
    }, {
      no: 3,
      name: "attached_code_chunks",
      kind: "message",
      T: W9e,
      repeated: true
    }, {
      no: 4,
      name: "codebase_context_chunks",
      kind: "message",
      T: WB,
      repeated: true
    }, {
      no: 5,
      name: "commits",
      kind: "message",
      T: Q9e,
      repeated: true
    }, {
      no: 6,
      name: "pull_requests",
      kind: "message",
      T: GFc,
      repeated: true
    }, {
      no: 7,
      name: "git_diffs",
      kind: "message",
      T: XH,
      repeated: true
    }, {
      no: 8,
      name: "assistant_suggested_diffs",
      kind: "message",
      T: cNh,
      repeated: true
    }, {
      no: 9,
      name: "interpreter_results",
      kind: "message",
      T: aNh,
      repeated: true
    }, {
      no: 10,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 11,
      name: "attached_folders",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 12,
      name: "approximate_lint_errors",
      kind: "message",
      T: KLh,
      repeated: true
    }, {
      no: 13,
      name: "bubble_id",
      kind: "scalar",
      T: 9
    }, {
      no: 32,
      name: "server_bubble_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 14,
      name: "attached_folders_new",
      kind: "message",
      T: sNh,
      repeated: true
    }, {
      no: 15,
      name: "lints",
      kind: "message",
      T: YLh,
      repeated: true
    }, {
      no: 16,
      name: "user_responses_to_suggested_code_blocks",
      kind: "message",
      T: dNh,
      repeated: true
    }, {
      no: 17,
      name: "relevant_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 18,
      name: "tool_results",
      kind: "message",
      T: $Fc,
      repeated: true
    }, {
      no: 19,
      name: "notepads",
      kind: "message",
      T: jLh,
      repeated: true
    }, {
      no: 20,
      name: "is_capability_iteration",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 21,
      name: "capabilities",
      kind: "message",
      T: BIh,
      repeated: true
    }, {
      no: 22,
      name: "edit_trail_contexts",
      kind: "message",
      T: VLh,
      repeated: true
    }, {
      no: 23,
      name: "suggested_code_blocks",
      kind: "message",
      T: uNh,
      repeated: true
    }, {
      no: 24,
      name: "diffs_for_compressing_files",
      kind: "message",
      T: ULh,
      repeated: true
    }, {
      no: 25,
      name: "multi_file_linter_errors",
      kind: "message",
      T: hEh,
      repeated: true
    }, {
      no: 26,
      name: "diff_histories",
      kind: "message",
      T: mNh,
      repeated: true
    }, {
      no: 27,
      name: "recently_viewed_files",
      kind: "message",
      T: W9e,
      repeated: true
    }, {
      no: 28,
      name: "recent_locations_history",
      kind: "message",
      T: ZLh,
      repeated: true
    }, {
      no: 29,
      name: "is_agentic",
      kind: "scalar",
      T: 8
    }, {
      no: 30,
      name: "file_diff_trajectories",
      kind: "message",
      T: B6o,
      repeated: true
    }, {
      no: 31,
      name: "conversation_summary",
      kind: "message",
      T: ohe,
      opt: true
    }, {
      no: 33,
      name: "existed_subsequent_terminal_command",
      kind: "scalar",
      T: 8
    }, {
      no: 34,
      name: "existed_previous_terminal_command",
      kind: "scalar",
      T: 8
    }, {
      no: 35,
      name: "docs_references",
      kind: "message",
      T: X5t,
      repeated: true
    }, {
      no: 36,
      name: "web_references",
      kind: "message",
      T: D6o,
      repeated: true
    }, {
      no: 75,
      name: "ai_web_search_results",
      kind: "message",
      T: MFc,
      repeated: true
    }, {
      no: 37,
      name: "git_context",
      kind: "message",
      T: N6o,
      opt: true
    }, {
      no: 38,
      name: "attached_folders_list_dir_results",
      kind: "message",
      T: v5t,
      repeated: true
    }, {
      no: 39,
      name: "cached_conversation_summary",
      kind: "message",
      T: ohe,
      opt: true
    }, {
      no: 40,
      name: "human_changes",
      kind: "message",
      T: eNh,
      repeated: true
    }, {
      no: 41,
      name: "attached_human_changes",
      kind: "scalar",
      T: 8
    }, {
      no: 42,
      name: "summarized_composers",
      kind: "message",
      T: M6o,
      repeated: true
    }, {
      no: 43,
      name: "cursor_rules",
      kind: "message",
      T: rke,
      repeated: true
    }, {
      no: 44,
      name: "context_pieces",
      kind: "message",
      T: OFc,
      repeated: true
    }, {
      no: 45,
      name: "thinking",
      kind: "message",
      T: n9t,
      opt: true
    }, {
      no: 46,
      name: "all_thinking_blocks",
      kind: "message",
      T: n9t,
      repeated: true
    }, {
      no: 85,
      name: "thinking_style",
      kind: "enum",
      T: v.getEnumType(uke),
      opt: true
    }, {
      no: 47,
      name: "unified_mode",
      kind: "enum",
      T: v.getEnumType(G9e),
      opt: true
    }, {
      no: 48,
      name: "diffs_since_last_apply",
      kind: "message",
      T: qFc,
      repeated: true
    }, {
      no: 49,
      name: "deleted_files",
      kind: "message",
      T: HFc,
      repeated: true
    }, {
      no: 50,
      name: "usage_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 51,
      name: "supported_tools",
      kind: "enum",
      T: v.getEnumType(an),
      repeated: true
    }, {
      no: 52,
      name: "current_file_location_data",
      kind: "message",
      T: F6o,
      opt: true
    }, {
      no: 53,
      name: "edit_tool_supports_search_and_replace",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 54,
      name: "last_terminal_cwd",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 55,
      name: "user_explicitly_asked_to_generate_cursor_rules",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 56,
      name: "console_logs",
      kind: "message",
      T: IRc,
      repeated: true
    }, {
      no: 57,
      name: "rich_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 58,
      name: "knowledge_items",
      kind: "message",
      T: w8n,
      repeated: true
    }, {
      no: 59,
      name: "ui_element_picked",
      kind: "message",
      T: DRc,
      repeated: true
    }, {
      no: 60,
      name: "user_explicitly_asked_to_add_to_knowledge_base",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 61,
      name: "documentation_selections",
      kind: "message",
      T: tNh,
      repeated: true
    }, {
      no: 62,
      name: "external_links",
      kind: "message",
      T: s5t,
      repeated: true
    }, {
      no: 63,
      name: "use_web",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 64,
      name: "project_layouts",
      kind: "message",
      T: zFc,
      repeated: true
    }, {
      no: 65,
      name: "thinking_duration_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 88,
      name: "step_duration_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 66,
      name: "subagent_return",
      kind: "message",
      T: jFc,
      opt: true
    }, {
      no: 67,
      name: "is_simple_looping_message",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 68,
      name: "capability_contexts",
      kind: "message",
      T: VIh,
      repeated: true
    }, {
      no: 69,
      name: "checkpoint_commit_hash",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 70,
      name: "git_status_raw",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 71,
      name: "todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 72,
      name: "is_review_edits_followup",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 74,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 73,
      name: "ide_editors_state",
      kind: "message",
      T: i9t,
      opt: true
    }, {
      no: 76,
      name: "context_window_status",
      kind: "message",
      T: UFc,
      opt: true
    }, {
      no: 77,
      name: "is_plan_execution",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 78,
      name: "created_at",
      kind: "scalar",
      T: 9
    }, {
      no: 79,
      name: "model_info",
      kind: "message",
      T: dEh
    }, {
      no: 80,
      name: "is_quick_search_query",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 81,
      name: "plan_update",
      kind: "message",
      T: JFc,
      opt: true
    }, {
      no: 82,
      name: "is_simulated_msg",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 95,
      name: "simulated_msg_reason",
      kind: "enum",
      T: v.getEnumType($9e),
      opt: true
    }, {
      no: 83,
      name: "mcp_descriptors",
      kind: "message",
      T: nNh,
      repeated: true
    }, {
      no: 84,
      name: "workspace_project_dir",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 87,
      name: "workspace_uris",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 86,
      name: "debug_mode_config",
      kind: "message",
      T: m8n,
      opt: true
    }, {
      no: 89,
      name: "text_blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 90,
      name: "rich_text_blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 91,
      name: "cursor_commands",
      kind: "message",
      T: tvt,
      repeated: true
    }, {
      no: 92,
      name: "cursor_commands_explicitly_set",
      kind: "scalar",
      T: 8
    }, {
      no: 93,
      name: "past_chats",
      kind: "message",
      T: p8n,
      repeated: true
    }, {
      no: 94,
      name: "past_chats_explicitly_set",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new lVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lVi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.HUMAN = 1] = "HUMAN";
  n[n.AI = 2] = "AI";
})(ul ||= {});
v.util.setEnumType(ul, "aiserver.v1.ConversationMessage.MessageType", [{
  no: 0,
  name: "MESSAGE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "MESSAGE_TYPE_HUMAN"
}, {
  no: 2,
  name: "MESSAGE_TYPE_AI"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.DEFAULT = 1] = "DEFAULT";
  n[n.CODEX = 2] = "CODEX";
  n[n.GPT5 = 3] = "GPT5";
})(uke ||= {});
v.util.setEnumType(uke, "aiserver.v1.ConversationMessage.ThinkingStyle", [{
  no: 0,
  name: "THINKING_STYLE_UNSPECIFIED"
}, {
  no: 1,
  name: "THINKING_STYLE_DEFAULT"
}, {
  no: 2,
  name: "THINKING_STYLE_CODEX"
}, {
  no: 3,
  name: "THINKING_STYLE_GPT5"
}]);
W9e = class uVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.lines = [];
    this.languageIdentifier = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.CodeChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "summarization_strategy",
      kind: "enum",
      T: v.getEnumType(t9t),
      opt: true
    }, {
      no: 5,
      name: "language_identifier",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "intent",
      kind: "enum",
      T: v.getEnumType(Az),
      opt: true
    }, {
      no: 7,
      name: "is_final_version",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "is_first_version",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "contents_are_missing",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "is_only_included_from_folder",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "code_chunk_git_context",
      kind: "message",
      T: GLh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new uVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uVi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.COMPOSER_FILE = 1] = "COMPOSER_FILE";
  n[n.COMPRESSED_COMPOSER_FILE = 2] = "COMPRESSED_COMPOSER_FILE";
  n[n.RECENTLY_VIEWED_FILE = 3] = "RECENTLY_VIEWED_FILE";
  n[n.OUTLINE = 4] = "OUTLINE";
  n[n.MENTIONED_FILE = 5] = "MENTIONED_FILE";
  n[n.CODE_SELECTION = 6] = "CODE_SELECTION";
  n[n.AI_EDITED_FILE = 7] = "AI_EDITED_FILE";
  n[n.VISIBLE_FILE = 8] = "VISIBLE_FILE";
  n[n.TERMINAL_SELECTION = 9] = "TERMINAL_SELECTION";
})(Az ||= {});
v.util.setEnumType(Az, "aiserver.v1.ConversationMessage.CodeChunk.Intent", [{
  no: 0,
  name: "INTENT_UNSPECIFIED"
}, {
  no: 1,
  name: "INTENT_COMPOSER_FILE"
}, {
  no: 2,
  name: "INTENT_COMPRESSED_COMPOSER_FILE"
}, {
  no: 3,
  name: "INTENT_RECENTLY_VIEWED_FILE"
}, {
  no: 4,
  name: "INTENT_OUTLINE"
}, {
  no: 5,
  name: "INTENT_MENTIONED_FILE"
}, {
  no: 6,
  name: "INTENT_CODE_SELECTION"
}, {
  no: 7,
  name: "INTENT_AI_EDITED_FILE"
}, {
  no: 8,
  name: "INTENT_VISIBLE_FILE"
}, {
  no: 9,
  name: "INTENT_TERMINAL_SELECTION"
}]);
(function (n) {
  n[n.NONE_UNSPECIFIED = 0] = "NONE_UNSPECIFIED";
  n[n.SUMMARIZED = 1] = "SUMMARIZED";
  n[n.EMBEDDED = 2] = "EMBEDDED";
})(t9t ||= {});
v.util.setEnumType(t9t, "aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [{
  no: 0,
  name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED"
}, {
  no: 1,
  name: "SUMMARIZATION_STRATEGY_SUMMARIZED"
}, {
  no: 2,
  name: "SUMMARIZATION_STRATEGY_EMBEDDED"
}]);
GLh = class dVi extends ie {
  constructor(e) {
    super();
    this.gitInfo = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "git_info",
      kind: "message",
      T: WLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new dVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dVi, e, t);
  }
};
WLh = class hVi extends ie {
  constructor(e) {
    super();
    this.commit = "";
    this.author = "";
    this.date = "";
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "author",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "date",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new hVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hVi, e, t);
  }
};
$Fc = class mVi extends ie {
  constructor(e) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.toolIndex = 0;
    this.args = "";
    this.rawArgs = "";
    this.attachedCodeChunks = [];
    this.images = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.ToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "tool_index",
      kind: "scalar",
      T: 13
    }, {
      no: 12,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "args",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "raw_args",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "attached_code_chunks",
      kind: "message",
      T: W9e,
      repeated: true
    }, {
      no: 7,
      name: "content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "result",
      kind: "message",
      T: VR
    }, {
      no: 9,
      name: "error",
      kind: "message",
      T: ske,
      opt: true
    }, {
      no: 10,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 11,
      name: "tool_call",
      kind: "message",
      T: nhe,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new mVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mVi, e, t);
  }
};
bgA = class pVi extends ie {
  constructor(e) {
    super();
    this.ranges = [];
    this.content = "";
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.MultiRangeCodeChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ranges",
      kind: "message",
      T: QLh,
      repeated: true
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pVi, e, t);
  }
};
QLh = class gVi extends ie {
  constructor(e) {
    super();
    this.priority = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "range",
      kind: "message",
      T: tae
    }, {
      no: 2,
      name: "priority",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new gVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gVi, e, t);
  }
};
jLh = class fVi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.text = "";
    this.attachedCodeChunks = [];
    this.attachedFolders = [];
    this.commits = [];
    this.pullRequests = [];
    this.gitDiffs = [];
    this.images = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.NotepadContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "attached_code_chunks",
      kind: "message",
      T: W9e,
      repeated: true
    }, {
      no: 4,
      name: "attached_folders",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "commits",
      kind: "message",
      T: Q9e,
      repeated: true
    }, {
      no: 6,
      name: "pull_requests",
      kind: "message",
      T: GFc,
      repeated: true
    }, {
      no: 7,
      name: "git_diffs",
      kind: "message",
      T: XH,
      repeated: true
    }, {
      no: 8,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new fVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fVi, e, t);
  }
};
M6o = class bVi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.ComposerContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "conversation_summary",
      kind: "message",
      T: ohe
    }]);
  }
  static fromBinary(e, t) {
    return new bVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bVi, e, t);
  }
};
zLh = class vVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.contextLines = "";
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.EditLocation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "range",
      kind: "message",
      T: tae
    }, {
      no: 4,
      name: "initial_range",
      kind: "message",
      T: tae
    }, {
      no: 5,
      name: "context_lines",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "text_range",
      kind: "message",
      T: tae
    }]);
  }
  static fromBinary(e, t) {
    return new vVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vVi, e, t);
  }
};
VLh = class AVi extends ie {
  constructor(e) {
    super();
    this.uniqueId = "";
    this.editTrailSorted = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.EditTrailContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "unique_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "edit_trail_sorted",
      kind: "message",
      T: zLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new AVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AVi, e, t);
  }
};
KLh = class yVi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.value = "";
    this.startLine = 0;
    this.endLine = 0;
    this.startColumn = 0;
    this.endColumn = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.ApproximateLintError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "start_column",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "end_column",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new yVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yVi, e, t);
  }
};
YLh = class wVi extends ie {
  constructor(e) {
    super();
    this.chatCodeblockModelValue = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.Lints";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "lints",
      kind: "message",
      T: Z5t
    }, {
      no: 2,
      name: "chat_codeblock_model_value",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new wVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wVi, e, t);
  }
};
ZLh = class _Vi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.lineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.RecentLocation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
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
    return new _Vi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Vi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Vi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Vi, e, t);
  }
};
XLh = class CVi extends ie {
  constructor(e) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberExclusive = 0;
    this.beforeContextLines = [];
    this.removedLines = [];
    this.addedLines = [];
    this.afterContextLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.RenderedDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "end_line_number_exclusive",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "before_context_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "removed_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "added_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "after_context_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new CVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CVi, e, t);
  }
};
eNh = class SVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.renderedDiffs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.HumanChange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "rendered_diffs",
      kind: "message",
      T: XLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new SVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SVi, e, t);
  }
};
n9t = class kVi extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.signature = "";
    this.redactedThinking = "";
    this.isLastThinkingChunk = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.Thinking";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "signature",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "redacted_thinking",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "is_last_thinking_chunk",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new kVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kVi, e, t);
  }
};
qFc = class EVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.DiffSinceLastApply";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff",
      kind: "message",
      T: FRe,
      opt: true
    }, {
      no: 4,
      name: "is_accepted",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "is_rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "last_apply_chained_from_n_human_messages_ago",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new EVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EVi, e, t);
  }
};
HFc = class xVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.DeletedFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new xVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xVi, e, t);
  }
};
w8n = class TVi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.knowledge = "";
    this.knowledgeId = "";
    this.isGenerated = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.KnowledgeItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "knowledge",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "knowledge_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "is_generated",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new TVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TVi, e, t);
  }
};
tNh = class IVi extends ie {
  constructor(e) {
    super();
    this.docId = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.DocumentationSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new IVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IVi, e, t);
  }
};
i9t = class DVi extends ie {
  constructor(e) {
    super();
    this.isPillDisplayed = false;
    this.visibleFilePaths = [];
    this.recentlyViewedFilePaths = [];
    this.visibleFiles = [];
    this.recentlyViewedFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.IdeEditorsState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_pill_displayed",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "visible_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "recently_viewed_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "visible_files",
      kind: "message",
      T: r9t,
      repeated: true
    }, {
      no: 5,
      name: "recently_viewed_files",
      kind: "message",
      T: r9t,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new DVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DVi, e, t);
  }
};
r9t = class BVi extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.IdeEditorsState.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_currently_focused",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "current_line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "current_line_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "line_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "absolute_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new BVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BVi, e, t);
  }
};
JFc = class RVi extends ie {
  constructor(e) {
    super();
    this.currentPlan = "";
    this.isFirstTimeSeen = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.PlanUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_plan",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_first_time_seen",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new RVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RVi, e, t);
  }
};
nNh = class PVi extends ie {
  constructor(e) {
    super();
    this.folderPath = "";
    this.tools = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.McpDescriptor";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "folder_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "server_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "tools",
      kind: "message",
      T: iNh,
      repeated: true
    }, {
      no: 4,
      name: "server_use_instructions",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new PVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PVi, e, t);
  }
};
iNh = class LVi extends ie {
  constructor(e) {
    super();
    this.toolName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationMessage.McpDescriptor.Tool";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new LVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LVi, e, t);
  }
};
F6o = class NVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.lineNumber = 0;
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CurrentFileLocationData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new NVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NVi, e, t);
  }
};
vgA = class MVi extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: rNh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new MVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MVi, e, t);
  }
};
rNh = class FVi extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchFileInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new FVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FVi, e, t);
  }
};
sNh = class OVi extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FolderInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: oNh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new OVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OVi, e, t);
  }
};
oNh = class UVi extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    this.content = "";
    this.truncated = false;
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FolderFileInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new UVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UVi, e, t);
  }
};
aNh = class $Vi extends ie {
  constructor(e) {
    super();
    this.output = "";
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.InterpreterResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "output",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "success",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new $Vi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Vi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Vi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Vi, e, t);
  }
};
cNh = class qVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.chunks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SimpleFileDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chunks",
      kind: "message",
      T: lNh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new qVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qVi, e, t);
  }
};
lNh = class HVi extends ie {
  constructor(e) {
    super();
    this.oldLines = [];
    this.newLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SimpleFileDiff.Chunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "old_lines",
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
      name: "old_range",
      kind: "message",
      T: S3
    }, {
      no: 4,
      name: "new_range",
      kind: "message",
      T: S3
    }]);
  }
  static fromBinary(e, t) {
    return new HVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HVi, e, t);
  }
};
Q9e = class JVi extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.message = "";
    this.description = "";
    this.diff = [];
    this.author = "";
    this.date = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Commit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "diff",
      kind: "message",
      T: RKe,
      repeated: true
    }, {
      no: 5,
      name: "author",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "date",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new JVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JVi, e, t);
  }
};
GFc = class GVi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.body = "";
    this.diff = [];
    this.id = Eo.zero;
    this.number = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PullRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "diff",
      kind: "message",
      T: RKe,
      repeated: true
    }, {
      no: 4,
      name: "id",
      kind: "scalar",
      T: 3
    }, {
      no: 5,
      name: "number",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new GVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GVi, e, t);
  }
};
uNh = class WVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SuggestedCodeBlock";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new WVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WVi, e, t);
  }
};
dNh = class QVi extends ie {
  constructor(e) {
    super();
    this.userResponseType = _8n.UNSPECIFIED;
    this.filePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UserResponseToSuggestedCodeBlock";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_response_type",
      kind: "enum",
      T: v.getEnumType(_8n)
    }, {
      no: 2,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "user_modifications_to_suggested_code_blocks",
      kind: "message",
      T: RKe,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new QVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QVi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ACCEPT = 1] = "ACCEPT";
  n[n.REJECT = 2] = "REJECT";
  n[n.MODIFY = 3] = "MODIFY";
})(_8n ||= {});
v.util.setEnumType(_8n, "aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [{
  no: 0,
  name: "USER_RESPONSE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "USER_RESPONSE_TYPE_ACCEPT"
}, {
  no: 2,
  name: "USER_RESPONSE_TYPE_REJECT"
}, {
  no: 3,
  name: "USER_RESPONSE_TYPE_MODIFY"
}]);
hNh = class jVi extends ie {
  constructor(e) {
    super();
    this.fileName = "";
    this.fileContent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextRerankingCandidateFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new jVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jVi, e, t);
  }
};
s9t = class zVi extends ie {
  constructor(e) {
    super();
    this.chunks = [];
    this.editor = C8n.UNSPECIFIED;
    this.hitTimeout = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComposerFileDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chunks",
      kind: "message",
      T: S8n,
      repeated: true
    }, {
      no: 2,
      name: "editor",
      kind: "enum",
      T: v.getEnumType(C8n)
    }, {
      no: 3,
      name: "hit_timeout",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new zVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zVi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.AI = 1] = "AI";
  n[n.HUMAN = 2] = "HUMAN";
})(C8n ||= {});
v.util.setEnumType(C8n, "aiserver.v1.ComposerFileDiff.Editor", [{
  no: 0,
  name: "EDITOR_UNSPECIFIED"
}, {
  no: 1,
  name: "EDITOR_AI"
}, {
  no: 2,
  name: "EDITOR_HUMAN"
}]);
S8n = class VVi extends ie {
  constructor(e) {
    super();
    this.diffString = "";
    this.oldStart = 0;
    this.newStart = 0;
    this.oldLines = 0;
    this.newLines = 0;
    this.linesRemoved = 0;
    this.linesAdded = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComposerFileDiff.ChunkDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "old_start",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "new_start",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "old_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "new_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "lines_removed",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "lines_added",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new VVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VVi, e, t);
  }
};
mNh = class KVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.diffs = [];
    this.timestamp = 0;
    this.uniqueId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DiffHistoryData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diffs",
      kind: "message",
      T: s9t,
      repeated: true
    }, {
      no: 3,
      name: "timestamp",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "unique_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "start_to_end_diff",
      kind: "message",
      T: s9t
    }]);
  }
  static fromBinary(e, t) {
    return new KVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KVi, e, t);
  }
};
WFc = class YVi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WarmStreamUnifiedChatWithToolsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new YVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YVi, e, t);
  }
};
pNh = class ZVi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    this.intent = k8n.UNSPECIFIED;
    this.inclusionType = E8n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeChunkContextInclusionInfoV2";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number_inclusive",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "intent",
      kind: "enum",
      T: v.getEnumType(k8n)
    }, {
      no: 10,
      name: "inclusion_type",
      kind: "enum",
      T: v.getEnumType(E8n)
    }, {
      no: 6,
      name: "tooltip_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "pill_is_dashed",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "pill_sub_codicon_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "detail_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "codicon_name",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ZVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZVi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FILE = 1] = "FILE";
  n[n.SELECTION = 2] = "SELECTION";
})(k8n ||= {});
v.util.setEnumType(k8n, "aiserver.v1.CodeChunkContextInclusionInfoV2.Intent", [{
  no: 0,
  name: "INTENT_UNSPECIFIED"
}, {
  no: 1,
  name: "INTENT_FILE"
}, {
  no: 2,
  name: "INTENT_SELECTION"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FULL = 1] = "FULL";
  n[n.OUTLINE = 2] = "OUTLINE";
  n[n.FILENAME = 3] = "FILENAME";
})(E8n ||= {});
v.util.setEnumType(E8n, "aiserver.v1.CodeChunkContextInclusionInfoV2.InclusionType", [{
  no: 0,
  name: "INCLUSION_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "INCLUSION_TYPE_FULL"
}, {
  no: 2,
  name: "INCLUSION_TYPE_OUTLINE"
}, {
  no: 3,
  name: "INCLUSION_TYPE_FILENAME"
}]);
gNh = class XVi extends ie {
  constructor(e) {
    super();
    this.codeChunks = [];
    this.userMessageTokenLimit = 0;
    this.codeChunksV2 = [];
    this.folderExclusionTooltip = "";
    this.barFraction = 0;
    this.didBarOverflow = false;
    this.shouldShowNewChatHint = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPromptDryRunResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_chunks",
      kind: "message",
      T: fNh,
      repeated: true
    }, {
      no: 3,
      name: "user_message_token_limit",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "user_message_token_count",
      kind: "message",
      T: QFc
    }, {
      no: 5,
      name: "full_conversation_token_count",
      kind: "message",
      T: QFc
    }, {
      no: 6,
      name: "code_chunks_v2",
      kind: "message",
      T: pNh,
      repeated: true
    }, {
      no: 2,
      name: "folder_exclusion_tooltip",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "bar_fraction",
      kind: "scalar",
      T: 2
    }, {
      no: 8,
      name: "did_bar_overflow",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "should_show_new_chat_hint",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new XVi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XVi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XVi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XVi, e, t);
  }
};
QFc = class eKi extends ie {
  constructor(e) {
    super();
    this.isOverTokenLimit = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPromptDryRunResponse.TokenCount";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_over_token_limit",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "num_tokens",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new eKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eKi, e, t);
  }
};
fNh = class tKi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    this.inclusionType = x8n.UNSPECIFIED;
    this.fullFileTokenCount = 0;
    this.promptTokenCount = 0;
    this.intent = T8n.UNSPECIFIED;
    this.chunkIsFromLastUserMessage = false;
    this.isCompressed = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeChunkContextInclusionInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number_inclusive",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "inclusion_type",
      kind: "enum",
      T: v.getEnumType(x8n)
    }, {
      no: 5,
      name: "full_file_token_count",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "prompt_token_count",
      kind: "scalar",
      T: 5
    }, {
      no: 11,
      name: "full_file_tokens_count",
      kind: "message",
      T: bNh
    }, {
      no: 7,
      name: "exclusion_tooltip",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "intent",
      kind: "enum",
      T: v.getEnumType(T8n)
    }, {
      no: 9,
      name: "chunk_is_from_last_user_message",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "is_compressed",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new tKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tKi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FULL = 1] = "FULL";
  n[n.OUTLINE = 2] = "OUTLINE";
  n[n.FILENAME = 3] = "FILENAME";
})(x8n ||= {});
v.util.setEnumType(x8n, "aiserver.v1.CodeChunkContextInclusionInfo.InclusionType", [{
  no: 0,
  name: "INCLUSION_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "INCLUSION_TYPE_FULL"
}, {
  no: 2,
  name: "INCLUSION_TYPE_OUTLINE"
}, {
  no: 3,
  name: "INCLUSION_TYPE_FILENAME"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FILE = 1] = "FILE";
  n[n.SELECTION = 2] = "SELECTION";
})(T8n ||= {});
v.util.setEnumType(T8n, "aiserver.v1.CodeChunkContextInclusionInfo.Intent", [{
  no: 0,
  name: "INTENT_UNSPECIFIED"
}, {
  no: 1,
  name: "INTENT_FILE"
}, {
  no: 2,
  name: "INTENT_SELECTION"
}]);
bNh = class nKi extends ie {
  constructor(e) {
    super();
    this.isTooLargeToCount = false;
    this.numTokens = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeChunkContextInclusionInfo.TokenCount";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_too_large_to_count",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "num_tokens",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new nKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nKi, e, t);
  }
};
jFc = class iKi extends ie {
  constructor(e) {
    super();
    this.subagentType = wve.UNSPECIFIED;
    this.returnValue = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubagentReturnCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "subagent_type",
      kind: "enum",
      T: v.getEnumType(wve)
    }, {
      no: 2,
      name: "deep_search_return_value",
      kind: "message",
      T: yNh,
      oneof: "return_value"
    }, {
      no: 3,
      name: "fix_lints_return_value",
      kind: "message",
      T: CNh,
      oneof: "return_value"
    }, {
      no: 4,
      name: "task_return_value",
      kind: "message",
      T: kNh,
      oneof: "return_value"
    }, {
      no: 5,
      name: "spec_return_value",
      kind: "message",
      T: xNh,
      oneof: "return_value"
    }]);
  }
  static fromBinary(e, t) {
    return new iKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iKi, e, t);
  }
};
vNh = class rKi extends ie {
  constructor(e) {
    super();
    this.subagentType = wve.UNSPECIFIED;
    this.subagentId = "";
    this.params = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubagentInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "subagent_type",
      kind: "enum",
      T: v.getEnumType(wve)
    }, {
      no: 2,
      name: "subagent_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "deep_search_params",
      kind: "message",
      T: ANh,
      oneof: "params"
    }, {
      no: 4,
      name: "fix_lints_params",
      kind: "message",
      T: _Nh,
      oneof: "params"
    }, {
      no: 6,
      name: "task_params",
      kind: "message",
      T: SNh,
      oneof: "params"
    }, {
      no: 7,
      name: "spec_params",
      kind: "message",
      T: ENh,
      oneof: "params"
    }, {
      no: 5,
      name: "parent_request_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new rKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rKi, e, t);
  }
};
ANh = class sKi extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchSubagentParams";
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
    return new sKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sKi, e, t);
  }
};
yNh = class oKi extends ie {
  constructor(e) {
    super();
    this.contextItems = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchSubagentReturnValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_items",
      kind: "message",
      T: wNh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new oKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oKi, e, t);
  }
};
wNh = class aKi extends ie {
  constructor(e) {
    super();
    this.file = "";
    this.explanation = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchSubagentReturnValue.ContextItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_range",
      kind: "message",
      T: S3,
      opt: true
    }, {
      no: 3,
      name: "explanation",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aKi, e, t);
  }
};
_Nh = class cKi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsSubagentParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new cKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cKi, e, t);
  }
};
CNh = class lKi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsSubagentReturnValue";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new lKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lKi, e, t);
  }
};
SNh = class uKi extends ie {
  constructor(e) {
    super();
    this.taskDescription = "";
    this.allowedWriteDirectories = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskSubagentParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_description",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "allowed_write_directories",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new uKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uKi, e, t);
  }
};
kNh = class dKi extends ie {
  constructor(e) {
    super();
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskSubagentReturnValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new dKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dKi, e, t);
  }
};
ENh = class hKi extends ie {
  constructor(e) {
    super();
    this.plan = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SpecSubagentParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "plan",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new hKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hKi, e, t);
  }
};
xNh = class mKi extends ie {
  constructor(e) {
    super();
    this.summary = "";
    this.stringReplacements = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SpecSubagentReturnValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "string_replacements",
      kind: "message",
      T: TNh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new mKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mKi, e, t);
  }
};
TNh = class pKi extends ie {
  constructor(e) {
    super();
    this.oldString = "";
    this.newString = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StringReplacement";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "old_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "new_string",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pKi, e, t);
  }
};
zFc = class gKi extends ie {
  constructor(e) {
    super();
    this.rootPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ProjectLayout";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "root_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "message",
      T: VFc
    }, {
      no: 3,
      name: "list_dir_v2_result",
      kind: "message",
      T: F5t,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gKi, e, t);
  }
};
VFc = class fKi extends ie {
  constructor(e) {
    super();
    this.directories = [];
    this.files = [];
    this.hiddenFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ProjectLayoutDirectoryContent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directories",
      kind: "message",
      T: INh,
      repeated: true
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: KFc,
      repeated: true
    }, {
      no: 3,
      name: "total_files",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "total_subfolders",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "hidden_files",
      kind: "message",
      T: KFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new fKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fKi, e, t);
  }
};
INh = class bKi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ProjectLayoutDirectory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "message",
      T: VFc
    }]);
  }
  static fromBinary(e, t) {
    return new bKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bKi, e, t);
  }
};
KFc = class vKi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ProjectLayoutFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new vKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vKi, e, t);
  }
};
DNh = class AKi extends ie {
  constructor(e) {
    super();
    this.fileStates = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConvertOALToNALRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request",
      kind: "message",
      T: URe
    }, {
      no: 2,
      name: "file_states",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: uFc
      }
    }]);
  }
  static fromBinary(e, t) {
    return new AKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AKi, e, t);
  }
};
BNh = class yKi extends ie {
  constructor(e) {
    super();
    this.blobs = {};
    this.bubbleCheckpoints = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConvertOALToNALResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_state",
      kind: "message",
      T: vk
    }, {
      no: 2,
      name: "blobs",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 12
      }
    }, {
      no: 3,
      name: "bubble_checkpoints",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: vk
      }
    }]);
  }
  static fromBinary(e, t) {
    return new yKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yKi, e, t);
  }
};
