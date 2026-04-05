"use strict";

// Module: out-build/proto/agent/v1/agent_service_pb.js
// Offset: 3479951 (bundle byte offset)
// Size: 18284 bytes
Ka();
Jk();
E2c();
o9t();
kgA();
wMh = class _Yi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ClientHeartbeat";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new _Yi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Yi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Yi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Yi, e, t);
  }
};
t4c = class CYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.PrewarmRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_details",
      kind: "message",
      T: q9e
    }, {
      no: 9,
      name: "requested_model",
      kind: "message",
      T: lke,
      opt: true
    }, {
      no: 2,
      name: "conversation_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "conversation_state",
      kind: "message",
      T: vk
    }, {
      no: 4,
      name: "mcp_tools",
      kind: "message",
      T: S2c
    }, {
      no: 5,
      name: "mcp_file_system_options",
      kind: "message",
      T: A6o,
      opt: true
    }, {
      no: 6,
      name: "best_of_n_group_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "try_use_best_of_n_promotion",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "custom_system_prompt",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "suggest_next_prompt",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "subagent_type_name",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new CYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CYi, e, t);
  }
};
_Mh = class SYi extends ie {
  constructor(e) {
    super();
    this.id = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExecServerAbort";
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
    return new SYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SYi, e, t);
  }
};
O6o = class kYi extends ie {
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
    this.typeName = "agent.v1.ExecServerControlMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "abort",
      kind: "message",
      T: _Mh,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new kYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kYi, e, t);
  }
};
U6o = class EYi extends ie {
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
    this.typeName = "agent.v1.AgentClientMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "run_request",
      kind: "message",
      T: _Ph,
      oneof: "message"
    }, {
      no: 2,
      name: "exec_client_message",
      kind: "message",
      T: P8n,
      oneof: "message"
    }, {
      no: 5,
      name: "exec_client_control_message",
      kind: "message",
      T: R8n,
      oneof: "message"
    }, {
      no: 3,
      name: "kv_client_message",
      kind: "message",
      T: yMh,
      oneof: "message"
    }, {
      no: 4,
      name: "conversation_action",
      kind: "message",
      T: SF,
      oneof: "message"
    }, {
      no: 6,
      name: "interaction_response",
      kind: "message",
      T: NPh,
      oneof: "message"
    }, {
      no: 7,
      name: "client_heartbeat",
      kind: "message",
      T: wMh,
      oneof: "message"
    }, {
      no: 8,
      name: "prewarm_request",
      kind: "message",
      T: t4c,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new EYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EYi, e, t);
  }
};
Jte = class xYi extends ie {
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
    this.typeName = "agent.v1.AgentServerMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "interaction_update",
      kind: "message",
      T: K$,
      oneof: "message"
    }, {
      no: 2,
      name: "exec_server_message",
      kind: "message",
      T: $Re,
      oneof: "message"
    }, {
      no: 5,
      name: "exec_server_control_message",
      kind: "message",
      T: O6o,
      oneof: "message"
    }, {
      no: 3,
      name: "conversation_checkpoint_update",
      kind: "message",
      T: vk,
      oneof: "message"
    }, {
      no: 4,
      name: "kv_server_message",
      kind: "message",
      T: AMh,
      oneof: "message"
    }, {
      no: 7,
      name: "interaction_query",
      kind: "message",
      T: fFc,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new xYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xYi, e, t);
  }
};
n4c = class TYi extends ie {
  constructor(e) {
    super();
    this.userMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NameAgentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new TYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TYi, e, t);
  }
};
i4c = class IYi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NameAgentResponse";
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
    return new IYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IYi, e, t);
  }
};
r4c = class DYi extends ie {
  constructor(e) {
    super();
    this.formattedConversation = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.CreateTranscriptOverviewRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "formatted_conversation",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new DYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DYi, e, t);
  }
};
CMh = class BYi extends ie {
  constructor(e) {
    super();
    this.overview = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.CreateTranscriptOverviewResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "overview",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new BYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BYi, e, t);
  }
};
s4c = class RYi extends ie {
  constructor(e) {
    super();
    this.customModelIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetUsableModelsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "custom_model_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new RYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RYi, e, t);
  }
};
o4c = class PYi extends ie {
  constructor(e) {
    super();
    this.models = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetUsableModelsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "models",
      kind: "message",
      T: q9e,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new PYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PYi, e, t);
  }
};
a4c = class LYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetDefaultModelForCliRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new LYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LYi, e, t);
  }
};
c4c = class NYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetDefaultModelForCliResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model",
      kind: "message",
      T: q9e
    }]);
  }
  static fromBinary(e, t) {
    return new NYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NYi, e, t);
  }
};
SMh = class MYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetAllowedModelIntentsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new MYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MYi, e, t);
  }
};
kMh = class FYi extends ie {
  constructor(e) {
    super();
    this.modelIntents = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetAllowedModelIntentsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intents",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new FYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FYi, e, t);
  }
};
l4c = class OYi extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    this.absolutePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.IdeEditorsStateFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_currently_focused",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "current_line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "current_line_text",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "line_count",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new OYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OYi, e, t);
  }
};
u4c = class UYi extends ie {
  constructor(e) {
    super();
    this.recentlyViewedFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.IdeEditorsStateLite";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "recently_viewed_files",
      kind: "message",
      T: l4c,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new UYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UYi, e, t);
  }
};
d4c = class $Yi extends ie {
  constructor(e) {
    super();
    this.id = new Uint8Array(0);
    this.value = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.BlobEntry";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new $Yi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Yi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Yi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Yi, e, t);
  }
};
h4c = class qYi extends ie {
  constructor(e) {
    super();
    this.conversationId = "";
    this.blobs = [];
    this.chunkIndex = 0;
    this.totalChunks = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UploadConversationBlobsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "blobs",
      kind: "message",
      T: d4c,
      repeated: true
    }, {
      no: 3,
      name: "chunk_index",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "total_chunks",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new qYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qYi, e, t);
  }
};
EMh = class HYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.UploadConversationBlobsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new HYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HYi, e, t);
  }
};
m4c = class JYi extends ie {
  constructor(e) {
    super();
    this.conversationId = "";
    this.sourceConversationId = "";
    this.sourceRequestId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NotifyConversationCloneRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "source_conversation_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "source_request_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new JYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JYi, e, t);
  }
};
xMh = class GYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NotifyConversationCloneResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new GYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GYi, e, t);
  }
};
p4c = class WYi extends ie {
  constructor(e) {
    super();
    this.currentModel = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_model",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new WYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WYi, e, t);
  }
};
TMh = class QYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "nudge",
      kind: "message",
      T: IMh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new QYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QYi, e, t);
  }
};
g4c = class jYi extends ie {
  constructor(e) {
    super();
    this.bannerMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NudgeBumpVariant";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "banner_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new jYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jYi, e, t);
  }
};
f4c = class zYi extends ie {
  constructor(e) {
    super();
    this.popupMessage = "";
    this.acceptLabel = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NudgeAskVariant";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "popup_message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "accept_label",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zYi, e, t);
  }
};
b4c = class VYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NudgeSilentSwitchVariant";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new VYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VYi, e, t);
  }
};
IMh = class KYi extends ie {
  constructor(e) {
    super();
    this.nudgeId = "";
    this.targetModel = "";
    this.experimentName = "";
    this.variant = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NewChatNudge";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "nudge_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "target_model",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "experiment_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "bump",
      kind: "message",
      T: g4c,
      oneof: "variant"
    }, {
      no: 5,
      name: "ask",
      kind: "message",
      T: f4c,
      oneof: "variant"
    }, {
      no: 6,
      name: "silent_switch",
      kind: "message",
      T: b4c,
      oneof: "variant"
    }]);
  }
  static fromBinary(e, t) {
    return new KYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KYi, e, t);
  }
};
v4c = class YYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_model",
      kind: "message",
      T: lke
    }]);
  }
  static fromBinary(e, t) {
    return new YYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YYi, e, t);
  }
};
DMh = class ZYi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "nudge",
      kind: "message",
      T: BMh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ZYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZYi, e, t);
  }
};
BMh = class XYi extends ie {
  constructor(e) {
    super();
    this.nudgeId = "";
    this.experimentName = "";
    this.variant = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NewChatNudgeV2";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "nudge_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "target_model",
      kind: "message",
      T: lke
    }, {
      no: 3,
      name: "experiment_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "bump",
      kind: "message",
      T: g4c,
      oneof: "variant"
    }, {
      no: 5,
      name: "ask",
      kind: "message",
      T: f4c,
      oneof: "variant"
    }, {
      no: 6,
      name: "silent_switch",
      kind: "message",
      T: b4c,
      oneof: "variant"
    }]);
  }
  static fromBinary(e, t) {
    return new XYi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XYi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XYi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XYi, e, t);
  }
};
