// Module: out-build/proto/aiserver/v1/aiserver_pb.js
// Offset: 3722021 (bundle byte offset)
// Size: 302695 bytes

Ka(), cv(), Vg(), qp(), B8n(), o9t(), KKe(), H6(), A4c(), S4c(), Y8n(), jY(), V8o(), Jk(), pOh(), xOh(), ROh(), zOh(), PgA(), J6(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.STANDARD=1]="STANDARD", n[n.GRIND=2]="GRIND"
})(e6n||(e6n={
  
})), v.util.setEnumType(e6n, "aiserver.v1.CloudAgentEffortMode", [{
  no:0, name:"CLOUD_AGENT_EFFORT_MODE_UNSPECIFIED"
}, {
  no:1, name:"CLOUD_AGENT_EFFORT_MODE_STANDARD"
}, {
  no:2, name:"CLOUD_AGENT_EFFORT_MODE_GRIND"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.RUNNING=1]="RUNNING", n[n.PAUSED=2]="PAUSED", n[n.DONE=3]="DONE", n[n.NOT_STARTED=4]="NOT_STARTED"
})(h9t||(h9t={
  
})), v.util.setEnumType(h9t, "aiserver.v1.TaskStatus", [{
  no:0, name:"TASK_STATUS_UNSPECIFIED"
}, {
  no:1, name:"TASK_STATUS_RUNNING"
}, {
  no:2, name:"TASK_STATUS_PAUSED"
}, {
  no:3, name:"TASK_STATUS_DONE"
}, {
  no:4, name:"TASK_STATUS_NOT_STARTED"
}
]), eOc=class Rir extends ie{
  constructor(e){
    super(), this.inputText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerAutocompleteRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"input_text",kind:"scalar",T:9
    }, {
      no:2,name:"composer_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"context",kind:"message",T:KOh,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rir, e, t)
  }
}, VOh=class Pir extends ie{
  constructor(e){
    super(), this.suggestion="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerAutocompleteResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestion",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Pir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pir, e, t)
  }
}, KOh=class Lir extends ie{
  constructor(e){
    super(), this.cachedFiles=[], this.conversationMessages=[], this.firstUserMessages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerAutocompleteContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:YOh,opt:!0
    }, {
      no:2,name:"cached_files",kind:"message",T:ZOh,repeated:!0
    }, {
      no:3,name:"conversation_messages",kind:"message",T:Qw,repeated:!0
    }, {
      no:4,name:"visible_viewport_text",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"first_user_messages",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lir, e, t)
  }
}, YOh=class Nir extends ie{
  constructor(e){
    super(), this.relativePath="", this.language="", this.cursorLine=0, this.fullContent="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CurrentFileContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"language",kind:"scalar",T:9
    }, {
      no:3,name:"cursor_line",kind:"scalar",T:5
    }, {
      no:4,name:"full_content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Nir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nir, e, t)
  }
}, ZOh=class Mir extends ie{
  constructor(e){
    super(), this.relativePath="", this.language="", this.fullContent="", this.lastViewedTimestamp=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CachedFileContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"language",kind:"scalar",T:9
    }, {
      no:3,name:"full_content",kind:"scalar",T:9
    }, {
      no:4,name:"last_viewed_timestamp",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Mir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mir, e, t)
  }
}, XOh=class Fir extends ie{
  constructor(e){
    super(), this.text="", this.reason="", this.type="", this.category="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatSuggestionItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }, {
      no:3,name:"type",kind:"scalar",T:9
    }, {
      no:4,name:"category",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Fir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fir, e, t)
  }
}, e3h=class Oir extends ie{
  constructor(e){
    super(), this.title="", this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecentChat"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"timestamp",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"summary",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"messages",kind:"message",T:tOc,repeated:!0
    }, {
      no:5,name:"todos",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Oir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oir, e, t)
  }
}, tOc=class Uir extends ie{
  constructor(e){
    super(), this.role="", this.text="", this.context="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecentChatMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"role",kind:"scalar",T:9
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }, {
      no:3,name:"context",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Uir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uir, e, t)
  }
}, nOc=class $ir extends ie{
  constructor(e){
    super(), this.recentChats=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatSuggestionsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"recent_chats",kind:"message",T:e3h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ir, e, t)
  }
}, t3h=class qir extends ie{
  constructor(e){
    super(), this.suggestions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatSuggestionsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestions",kind:"message",T:XOh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qir, e, t)
  }
}, n3h=class Hir extends ie{
  constructor(e){
    super(), this.chats=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserInstructionsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chats",kind:"message",T:tOc,repeated:!0
    }, {
      no:2,name:"existing_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hir, e, t)
  }
}, i3h=class Jir extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserInstructionsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jir, e, t)
  }
}, r3h=class Gir extends ie{
  constructor(e){
    super(), this.terminalContent="", this.checkForHangs=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsTerminalFinishedRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"terminal_content",kind:"scalar",T:9
    }, {
      no:2,name:"check_for_hangs",kind:"scalar",T:8
    }, {
      no:3,name:"chat_request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"command",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gir, e, t)
  }
}, s3h=class Wir extends ie{
  constructor(e){
    super(), this.isFinished=!1, this.isHanging=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsTerminalFinishedResponseV2"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_finished",kind:"scalar",T:8
    }, {
      no:2,name:"ended_reason",kind:"enum",T:v.getEnumType(k3),opt:!0
    }, {
      no:3,name:"exit_code",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"is_hanging",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Wir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wir, e, t)
  }
}, o3h=class Qir extends ie{
  constructor(e){
    super(), this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestBidiRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Qir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qir, e, t)
  }
}, a3h=class jir extends ie{
  constructor(e){
    super(), this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestBidiResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jir, e, t)
  }
}, c3h=class zir extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.fileContent="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoContextFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"file_content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zir, e, t)
  }
}, l3h=class Vir extends ie{
  constructor(e){
    super(), this.text="", this.candidateFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"candidate_files",kind:"message",T:c3h,repeated:!0
    }, {
      no:3,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Vir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vir, e, t)
  }
}, u3h=class Kir extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.rerankingScore=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoContextRankedFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"reranking_score",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new Kir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kir, e, t)
  }
}, d3h=class Yir extends ie{
  constructor(e){
    super(), this.rankedFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoContextResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ranked_files",kind:"message",T:u3h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yir, e, t)
  }
}, h3h=class Zir extends ie{
  constructor(e){
    super(), this.diffCharLen=0, this.iterations=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckBugBotPriceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diff_char_len",kind:"scalar",T:5
    }, {
      no:2,name:"iterations",kind:"scalar",T:5
    }, {
      no:3,name:"model_details",kind:"message",T:Yf
    }, {
      no:4,name:"session_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zir, e, t)
  }
}, m3h=class Xir extends ie{
  constructor(e){
    super(), this.cost=0, this.priceId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckBugBotPriceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cost",kind:"scalar",T:1
    }, {
      no:2,name:"price_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Xir().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xir().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xir().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xir, e, t)
  }
}, p3h=class err extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AcknowledgeGracePeriodDisclaimerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new err().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new err().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new err().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(err, e, t)
  }
}, g3h=class trr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AcknowledgeGracePeriodDisclaimerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new trr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new trr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new trr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(trr, e, t)
  }
}, f3h=class nrr extends ie{
  constructor(e){
    super(), this.sessionId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckBugBotTelemetryHealthyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"session_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new nrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nrr, e, t)
  }
}, b3h=class irr extends ie{
  constructor(e){
    super(), this.isHealthy=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckBugBotTelemetryHealthyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_healthy",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new irr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new irr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new irr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(irr, e, t)
  }
}, v3h=class rrr extends ie{
  constructor(e){
    super(), this.bugId="", this.reaction="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordIdeBugReactionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_id",kind:"scalar",T:9
    }, {
      no:2,name:"reaction",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rrr, e, t)
  }
}, A3h=class srr extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordIdeBugReactionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new srr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new srr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new srr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(srr, e, t)
  }
}, y3h=class orr extends ie{
  constructor(e){
    super(), this.diffCharLen=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSuggestedBugBotIterationsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diff_char_len",kind:"scalar",T:5
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new orr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new orr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new orr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(orr, e, t)
  }
}, w3h=class arr extends ie{
  constructor(e){
    super(), this.iterations=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSuggestedBugBotIterationsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"iterations",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new arr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new arr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new arr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(arr, e, t)
  }
}, _3h=class crr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEditorBugbotAutoRunStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new crr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new crr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new crr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(crr, e, t)
  }
}, C3h=class lrr extends ie{
  constructor(e){
    super(), this.shouldAutoRun=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEditorBugbotAutoRunStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"should_auto_run",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new lrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lrr, e, t)
  }
}, S3h=class urr extends ie{
  constructor(e){
    super(), this.status=t6n.UNSPECIFIED, this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"enum",T:v.getEnumType(t6n)
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }, {
      no:3,name:"iterations_completed",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"total_iterations",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"total_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"processed_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"processed_cost",kind:"scalar",T:2,opt:!0
    }, {
      no:8,name:"thinking_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"thinking_cost",kind:"scalar",T:2,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new urr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new urr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new urr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(urr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.IN_PROGRESS=1]="IN_PROGRESS", n[n.IN_PROGRESS_ITERATIONS=2]="IN_PROGRESS_ITERATIONS", n[n.DONE=3]="DONE", n[n.ERROR=4]="ERROR"
})(t6n||(t6n={
  
})), v.util.setEnumType(t6n, "aiserver.v1.BugBotStatus.Status", [{
  no:0, name:"STATUS_UNSPECIFIED"
}, {
  no:1, name:"STATUS_IN_PROGRESS"
}, {
  no:2, name:"STATUS_IN_PROGRESS_ITERATIONS"
}, {
  no:3, name:"STATUS_DONE"
}, {
  no:4, name:"STATUS_ERROR"
}
]), k3h=class drr extends ie{
  constructor(e){
    super(), this.show=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotTrialNotification"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"show",kind:"scalar",T:8
    }, {
      no:2,name:"message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"learn_more_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new drr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new drr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new drr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(drr, e, t)
  }
}, iOc=class hrr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamBugBotResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_reports",kind:"message",T:ZFc,opt:!0
    }, {
      no:2,name:"status",kind:"message",T:S3h
    }, {
      no:3,name:"summary",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"trial_notification",kind:"message",T:k3h,opt:!0
    }, {
      no:5,name:"num_turns",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hrr, e, t)
  }
}, E3h=class mrr extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamBugBotAgenticClientMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start",kind:"message",T:D8n,oneof:"message"
    }, {
      no:2,name:"exec_client_message",kind:"message",T:P8n,oneof:"message"
    }, {
      no:3,name:"exec_client_control_message",kind:"message",T:R8n,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new mrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mrr, e, t)
  }
}, rOc=class prr extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamBugBotAgenticServerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bugbot_response",kind:"message",T:iOc,oneof:"message"
    }, {
      no:2,name:"exec_server_message",kind:"message",T:$Re,oneof:"message"
    }, {
      no:3,name:"exec_server_control_message",kind:"message",T:O6o,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new prr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new prr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new prr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(prr, e, t)
  }
}, sOc=class grr extends ie{
  constructor(e){
    super(), this.composerId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UiBestOfNJudgeCandidate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"composer_id",kind:"scalar",T:9
    }, {
      no:2,name:"diff",kind:"message",T:XH
    }
    ])
  }
  static fromBinary(e, t){
    return new grr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new grr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new grr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(grr, e, t)
  }
}, oOc=class frr extends ie{
  constructor(e){
    super(), this.task="", this.candidates=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamUiBestOfNJudgeStartRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task",kind:"scalar",T:9
    }, {
      no:2,name:"candidates",kind:"message",T:sOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new frr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new frr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new frr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(frr, e, t)
  }
}, x3h=class brr extends ie{
  constructor(e){
    super(), this.winnerComposerId="", this.reasoning="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UiBestOfNJudgeFinalResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"winner_composer_id",kind:"scalar",T:9
    }, {
      no:2,name:"reasoning",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new brr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new brr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new brr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(brr, e, t)
  }
}, n6n=class vrr extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamUiBestOfNJudgeClientMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start",kind:"message",T:oOc,oneof:"message"
    }, {
      no:2,name:"exec_client_message",kind:"message",T:P8n,oneof:"message"
    }, {
      no:3,name:"exec_client_control_message",kind:"message",T:R8n,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new vrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vrr, e, t)
  }
}, aOc=class Arr extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamUiBestOfNJudgeServerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"final_result",kind:"message",T:x3h,oneof:"message"
    }, {
      no:2,name:"exec_server_message",kind:"message",T:$Re,oneof:"message"
    }, {
      no:3,name:"exec_server_control_message",kind:"message",T:O6o,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new Arr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Arr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Arr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Arr, e, t)
  }
}, T3h=class yrr extends ie{
  constructor(e){
    super(), this.chatConversationHistory=[], this.cppDiffTrajectories=[], this.candidateFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextRerankingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS,opt:!0
    }, {
      no:2,name:"chat_conversation_history",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"cpp_diff_trajectories",kind:"message",T:wz,repeated:!0
    }, {
      no:4,name:"candidate_files",kind:"message",T:hNh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yrr, e, t)
  }
}, I3h=class wrr extends ie{
  constructor(e){
    super(), this.rerankingScores=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextRerankingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reranking_scores",kind:"scalar",T:2,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wrr, e, t)
  }
}, D3h=class _rr extends ie{
  constructor(e){
    super(), this.messages=[], this.isProject=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NameTabRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"messages",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"is_project",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new _rr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _rr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _rr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_rr, e, t)
  }
}, B3h=class Crr extends ie{
  constructor(e){
    super(), this.name="", this.reason="", this.icon="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NameTabResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }, {
      no:3,name:"icon",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Crr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Crr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Crr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Crr, e, t)
  }
}, R3h=class Srr extends ie{
  constructor(e){
    super(), this.modelName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestModelStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Srr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Srr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Srr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Srr, e, t)
  }
}, P3h=class krr extends ie{
  constructor(e){
    super(), this.text="", this.latency=0, this.ttft=0, this.maxTimeBetweenChunks=0, this.serverTiming="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestModelStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"latency",kind:"scalar",T:2
    }, {
      no:3,name:"ttft",kind:"scalar",T:2
    }, {
      no:4,name:"max_time_between_chunks",kind:"scalar",T:2
    }, {
      no:5,name:"server_timing",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new krr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new krr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new krr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(krr, e, t)
  }
}, cOc=class Err extends ie{
  constructor(e){
    super(), this.prompt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EvaluatePromptHookRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"prompt",kind:"scalar",T:9
    }, {
      no:2,name:"hook_input_json",kind:"message",T:Zde
    }, {
      no:3,name:"model_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Err().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Err().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Err().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Err, e, t)
  }
}, L3h=class xrr extends ie{
  constructor(e){
    super(), this.ok=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EvaluatePromptHookResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ok",kind:"scalar",T:8
    }, {
      no:2,name:"reason",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xrr, e, t)
  }
}, N3h=class Trr extends ie{
  constructor(e){
    super(), this.workspaceRelativePath="", this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TryParseTypeScriptTreeSitterRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"workspace_relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Trr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Trr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Trr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Trr, e, t)
  }
}, M3h=class Irr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TryParseTypeScriptTreeSitterResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Irr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Irr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Irr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Irr, e, t)
  }
}, F3h=class Drr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DevOnlyGetPastRequestIdsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"count",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"page",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Drr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Drr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Drr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Drr, e, t)
  }
}, O3h=class Brr extends ie{
  constructor(e){
    super(), this.requestId="", this.dateTime="", this.modelName="", this.featureName="", this.s3Uri="", this.status="", this.numPromptTokens=0, this.numCompletionTokens=0, this.apiCallMethod="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DevOnlyPastRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"date_time",kind:"scalar",T:9
    }, {
      no:3,name:"model_name",kind:"scalar",T:9
    }, {
      no:4,name:"feature_name",kind:"scalar",T:9
    }, {
      no:5,name:"s3_uri",kind:"scalar",T:9
    }, {
      no:6,name:"status",kind:"scalar",T:9
    }, {
      no:7,name:"num_prompt_tokens",kind:"scalar",T:5
    }, {
      no:8,name:"num_completion_tokens",kind:"scalar",T:5
    }, {
      no:9,name:"api_call_method",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Brr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Brr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Brr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Brr, e, t)
  }
}, U3h=class Rrr extends ie{
  constructor(e){
    super(), this.pastRequests=[], this.totalCount=0, this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DevOnlyGetPastRequestIdsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"past_requests",kind:"message",T:O3h,repeated:!0
    }, {
      no:10,name:"total_count",kind:"scalar",T:5
    }, {
      no:11,name:"has_more",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Rrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rrr, e, t)
  }
}, $3h=class Prr extends ie{
  constructor(e){
    super(), this.questions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCodebaseQuestionsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"questions",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Prr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Prr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Prr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Prr, e, t)
  }
}, q3h=class Lrr extends ie{
  constructor(e){
    super(), this.index=0, this.text="", this.type="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AtSymbolOption"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"index",kind:"scalar",T:5
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }, {
      no:3,name:"type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Lrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lrr, e, t)
  }
}, H3h=class Nrr extends ie{
  constructor(e){
    super(), this.name="", this.fromFile="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AtSymbolDependencyInformation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"from_file",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Nrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nrr, e, t)
  }
}, J3h=class Mrr extends ie{
  constructor(e){
    super(), this.atSymbolDependencies=[], this.atSymbolOptions=[], this.userQuery="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAtSymbolSuggestionsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file_info",kind:"message",T:AS
    }, {
      no:2,name:"at_symbol_dependencies",kind:"message",T:H3h,repeated:!0
    }, {
      no:3,name:"at_symbol_options",kind:"message",T:q3h,repeated:!0
    }, {
      no:4,name:"user_query",kind:"scalar",T:9
    }, {
      no:5,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Mrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mrr, e, t)
  }
}, G3h=class Frr extends ie{
  constructor(e){
    super(), this.indices=[], this.explanation="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAtSymbolSuggestionsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"indices",kind:"scalar",T:5,repeated:!0
    }, {
      no:2,name:"explanation",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Frr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Frr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Frr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Frr, e, t)
  }
}, W3h=class Orr extends ie{
  constructor(e){
    super(), this.name="", this.isFolder=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CurrentFolderFileOrFolder"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"is_folder",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Orr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Orr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Orr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Orr, e, t)
  }
}, Q3h=class Urr extends ie{
  constructor(e){
    super(), this.currentCommand="", this.commandHistory=[], this.fileDiffHistories=[], this.commitHistory=[], this.pastResults=[], this.userPlatform="", this.currentFolder="", this.currentFolderStructure=[], this.relevantFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTerminalCompletionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_command",kind:"scalar",T:9
    }, {
      no:2,name:"command_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:5,name:"git_diff",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"commit_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"past_results",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"model_details",kind:"message",T:Yf
    }, {
      no:9,name:"user_platform",kind:"scalar",T:9
    }, {
      no:10,name:"current_folder",kind:"scalar",T:9
    }, {
      no:11,name:"current_folder_structure",kind:"message",T:W3h,repeated:!0
    }, {
      no:12,name:"relevant_files",kind:"message",T:iae,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Urr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Urr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Urr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Urr, e, t)
  }
}, j3h=class $rr extends ie{
  constructor(e){
    super(), this.command="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTerminalCompletionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new $rr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $rr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $rr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($rr, e, t)
  }
}, lOc=class qrr extends ie{
  constructor(e){
    super(), this.type=tYe.UNSPECIFIED, this.startLine=0, this.endLine=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.HeuristicsSelection"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"enum",T:v.getEnumType(tYe)
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new qrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qrr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.GROUP=1]="GROUP", n[n.LINE=2]="LINE", n[n.FOLDING=3]="FOLDING"
})(tYe||(tYe={
  
})), v.util.setEnumType(tYe, "aiserver.v1.HeuristicsSelection.HeuristicsSelectionType", [{
  no:0, name:"HEURISTICS_SELECTION_TYPE_UNSPECIFIED"
}, {
  no:1, name:"HEURISTICS_SELECTION_TYPE_GROUP"
}, {
  no:2, name:"HEURISTICS_SELECTION_TYPE_LINE"
}, {
  no:3, name:"HEURISTICS_SELECTION_TYPE_FOLDING"
}
]), uOc=class Hrr extends ie{
  constructor(e){
    super(), this.heuristicsSelections=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CalculateAutoSelectionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file_info",kind:"message",T:AS
    }, {
      no:2,name:"cursor_position",kind:"message",T:I9
    }, {
      no:3,name:"selection_range",kind:"message",T:wF
    }, {
      no:4,name:"model_details",kind:"message",T:Yf
    }, {
      no:5,name:"heuristics_selections",kind:"message",T:lOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hrr, e, t)
  }
}, z3h=class Jrr extends ie{
  constructor(e){
    super(), this.text="", this.startLine=0, this.endLine=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoSelectionInstructions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Jrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jrr, e, t)
  }
}, V3h=class Grr extends ie{
  constructor(e){
    super(), this.startLine=0, this.endLine=0, this.instructions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoSelectionResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"end_line",kind:"scalar",T:5
    }, {
      no:3,name:"instructions",kind:"message",T:z3h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Grr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Grr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Grr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Grr, e, t)
  }
}, K3h=class Wrr extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CalculateAutoSelectionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:V3h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wrr, e, t)
  }
}, Y3h=class Qrr extends ie{
  constructor(e){
    super(), this.instruction="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCursorMotionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file_info",kind:"message",T:AS
    }, {
      no:2,name:"selection_range",kind:"message",T:wF
    }, {
      no:3,name:"instruction",kind:"scalar",T:9
    }, {
      no:4,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Qrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qrr, e, t)
  }
}, Z3h=class jrr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCursorMotionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jrr, e, t)
  }
}, X3h=class zrr extends ie{
  constructor(e){
    super(), this.instruction="", this.type=i6n.UNSPECIFIED, this.proposedChangeHistory=[], this.relatedCodeBlocks=[], this.diffHistory=[], this.linterErrors=[], this.usefulTypes=[], this.recentlyViewedFiles=[], this.recentDiffs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"instruction",kind:"scalar",T:9
    }, {
      no:2,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"selection_range",kind:"message",T:wF
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(i6n)
    }, {
      no:5,name:"proposed_change_history",kind:"message",T:n5h,repeated:!0
    }, {
      no:6,name:"related_code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"diff_history",kind:"message",T:wz,repeated:!0
    }, {
      no:8,name:"linter_errors",kind:"message",T:dOc,repeated:!0
    }, {
      no:9,name:"useful_types",kind:"message",T:i5h,repeated:!0
    }, {
      no:10,name:"recently_viewed_files",kind:"message",T:r5h,repeated:!0
    }, {
      no:11,name:"recent_diffs",kind:"message",T:o5h,repeated:!0
    }, {
      no:12,name:"multiple_completions",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zrr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.REFLECT=1]="REFLECT", n[n.LOOP_ON_LINTS=2]="LOOP_ON_LINTS", n[n.CHAT_AND_APPLY=3]="CHAT_AND_APPLY", n[n.COALESCE_GENERATIONS=4]="COALESCE_GENERATIONS", n[n.CODEBASE_CHUNKS=5]="CODEBASE_CHUNKS", n[n.SPEC_AND_APPLY=6]="SPEC_AND_APPLY", n[n.ASK_CODEBASE=7]="ASK_CODEBASE", n[n.FINETUNED_INSTRUCTIONS=8]="FINETUNED_INSTRUCTIONS", n[n.USEFUL_TYPES=9]="USEFUL_TYPES", n[n.CHAT_AND_APPLY_UNDERSPECIFIED=10]="CHAT_AND_APPLY_UNDERSPECIFIED"
})(i6n||(i6n={
  
})), v.util.setEnumType(i6n, "aiserver.v1.BackgroundCmdKRequest.Type", [{
  no:0, name:"TYPE_UNSPECIFIED"
}, {
  no:1, name:"TYPE_REFLECT"
}, {
  no:2, name:"TYPE_LOOP_ON_LINTS"
}, {
  no:3, name:"TYPE_CHAT_AND_APPLY"
}, {
  no:4, name:"TYPE_COALESCE_GENERATIONS"
}, {
  no:5, name:"TYPE_CODEBASE_CHUNKS"
}, {
  no:6, name:"TYPE_SPEC_AND_APPLY"
}, {
  no:7, name:"TYPE_ASK_CODEBASE"
}, {
  no:8, name:"TYPE_FINETUNED_INSTRUCTIONS"
}, {
  no:9, name:"TYPE_USEFUL_TYPES"
}, {
  no:10, name:"TYPE_CHAT_AND_APPLY_UNDERSPECIFIED"
}
]), dOc=class Vrr extends ie{
  constructor(e){
    super(), this.message="", this.severity="", this.relativeWorkspacePath="", this.startLineNumberOneIndexed=0, this.startColumnOneIndexed=0, this.endLineNumberInclusiveOneIndexed=0, this.endColumnOneIndexed=0, this.quickFixes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.Lint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"severity",kind:"scalar",T:9
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"start_line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:5,name:"start_column_one_indexed",kind:"scalar",T:5
    }, {
      no:6,name:"end_line_number_inclusive_one_indexed",kind:"scalar",T:5
    }, {
      no:7,name:"end_column_one_indexed",kind:"scalar",T:5
    }, {
      no:9,name:"quick_fixes",kind:"message",T:e5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Vrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vrr, e, t)
  }
}, e5h=class Krr extends ie{
  constructor(e){
    super(), this.message="", this.kind="", this.isPreferred=!1, this.edits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"kind",kind:"scalar",T:9
    }, {
      no:3,name:"is_preferred",kind:"scalar",T:8
    }, {
      no:4,name:"edits",kind:"message",T:t5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Krr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Krr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Krr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Krr, e, t)
  }
}, t5h=class Yrr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.text="", this.startLineNumberOneIndexed=0, this.startColumnOneIndexed=0, this.endLineNumberInclusiveOneIndexed=0, this.endColumnOneIndexed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix.Edit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }, {
      no:3,name:"start_line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:4,name:"start_column_one_indexed",kind:"scalar",T:5
    }, {
      no:5,name:"end_line_number_inclusive_one_indexed",kind:"scalar",T:5
    }, {
      no:6,name:"end_column_one_indexed",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Yrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yrr, e, t)
  }
}, n5h=class Zrr extends ie{
  constructor(e){
    super(), this.change="", this.linterErrors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.ProposedChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"change",kind:"scalar",T:9
    }, {
      no:2,name:"linter_errors",kind:"message",T:dOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zrr, e, t)
  }
}, i5h=class Xrr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLine=0, this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.UsefulType"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"text",kind:"scalar",T:9
    }, {
      no:4,name:"score",kind:"scalar",T:1,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xrr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xrr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xrr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xrr, e, t)
  }
}, r5h=class esr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.visibleRanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"visible_ranges",kind:"message",T:s5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new esr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new esr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new esr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(esr, e, t)
  }
}, s5h=class tsr extends ie{
  constructor(e){
    super(), this.startLineNumberInclusive=0, this.endLineNumberExclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile.VisibleRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number_inclusive",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_number_exclusive",kind:"scalar",T:5
    }, {
      no:3,name:"viewed_at",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"global_order_descending",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tsr, e, t)
  }
}, o5h=class nsr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.diff="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKRequest.Diff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"diff",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new nsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nsr, e, t)
  }
}, a5h=class isr extends ie{
  constructor(e){
    super(), this.proposedChange="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"proposed_change",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new isr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new isr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new isr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(isr, e, t)
  }
}, c5h=class rsr extends ie{
  constructor(e){
    super(), this.instruction="", this.groundTruth="", this.experiment=r6n.UNSPECIFIED, this.runAutomatedEval=!1, this.proposedChangeHistory=[], this.commitNotes=[], this.relatedCodeBlocks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"instruction",kind:"scalar",T:9
    }, {
      no:2,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"selection_range",kind:"message",T:wF
    }, {
      no:4,name:"ground_truth",kind:"scalar",T:9
    }, {
      no:5,name:"experiment",kind:"enum",T:v.getEnumType(r6n)
    }, {
      no:6,name:"run_automated_eval",kind:"scalar",T:8
    }, {
      no:7,name:"proposed_change_history",kind:"message",T:h5h,repeated:!0
    }, {
      no:8,name:"commit_notes",kind:"message",T:J9o,repeated:!0
    }, {
      no:9,name:"related_code_blocks",kind:"message",T:WB,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rsr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.REFLECT=1]="REFLECT", n[n.CMD_K_ORIGINAL_RADIUS=2]="CMD_K_ORIGINAL_RADIUS", n[n.LOOP_ON_LINTS=3]="LOOP_ON_LINTS", n[n.CHAT_AND_APPLY=4]="CHAT_AND_APPLY", n[n.COMMIT_NOTES=5]="COMMIT_NOTES", n[n.COALESCE_GENERATIONS=6]="COALESCE_GENERATIONS", n[n.REWORD_INSTRUCTIONS=7]="REWORD_INSTRUCTIONS", n[n.CODEBASE_CHUNKS=8]="CODEBASE_CHUNKS", n[n.SPEC_AND_APPLY=9]="SPEC_AND_APPLY", n[n.ASK_CODEBASE=10]="ASK_CODEBASE"
})(r6n||(r6n={
  
})), v.util.setEnumType(r6n, "aiserver.v1.BackgroundCmdKEvalRequest.Experiment", [{
  no:0, name:"EXPERIMENT_UNSPECIFIED"
}, {
  no:1, name:"EXPERIMENT_REFLECT"
}, {
  no:2, name:"EXPERIMENT_CMD_K_ORIGINAL_RADIUS"
}, {
  no:3, name:"EXPERIMENT_LOOP_ON_LINTS"
}, {
  no:4, name:"EXPERIMENT_CHAT_AND_APPLY"
}, {
  no:5, name:"EXPERIMENT_COMMIT_NOTES"
}, {
  no:6, name:"EXPERIMENT_COALESCE_GENERATIONS"
}, {
  no:7, name:"EXPERIMENT_REWORD_INSTRUCTIONS"
}, {
  no:8, name:"EXPERIMENT_CODEBASE_CHUNKS"
}, {
  no:9, name:"EXPERIMENT_SPEC_AND_APPLY"
}, {
  no:10, name:"EXPERIMENT_ASK_CODEBASE"
}
]), l5h=class ssr extends ie{
  constructor(e){
    super(), this.message="", this.severity="", this.relativeWorkspacePath="", this.startLineNumberOneIndexed=0, this.startColumnOneIndexed=0, this.endLineNumberInclusiveOneIndexed=0, this.endColumnOneIndexed=0, this.quickFixes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalRequest.Lint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"severity",kind:"scalar",T:9
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"start_line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:5,name:"start_column_one_indexed",kind:"scalar",T:5
    }, {
      no:6,name:"end_line_number_inclusive_one_indexed",kind:"scalar",T:5
    }, {
      no:7,name:"end_column_one_indexed",kind:"scalar",T:5
    }, {
      no:9,name:"quick_fixes",kind:"message",T:u5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ssr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ssr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ssr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ssr, e, t)
  }
}, u5h=class osr extends ie{
  constructor(e){
    super(), this.message="", this.kind="", this.isPreferred=!1, this.edits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"kind",kind:"scalar",T:9
    }, {
      no:3,name:"is_preferred",kind:"scalar",T:8
    }, {
      no:4,name:"edits",kind:"message",T:d5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new osr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new osr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new osr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(osr, e, t)
  }
}, d5h=class asr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.text="", this.startLineNumberOneIndexed=0, this.startColumnOneIndexed=0, this.endLineNumberInclusiveOneIndexed=0, this.endColumnOneIndexed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix.Edit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }, {
      no:3,name:"start_line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:4,name:"start_column_one_indexed",kind:"scalar",T:5
    }, {
      no:5,name:"end_line_number_inclusive_one_indexed",kind:"scalar",T:5
    }, {
      no:6,name:"end_column_one_indexed",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new asr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new asr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new asr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(asr, e, t)
  }
}, h5h=class csr extends ie{
  constructor(e){
    super(), this.change="", this.linterErrors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalRequest.ProposedChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"change",kind:"scalar",T:9
    }, {
      no:2,name:"linter_errors",kind:"message",T:l5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new csr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new csr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new csr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(csr, e, t)
  }
}, m5h=class lsr extends ie{
  constructor(e){
    super(), this.proposedChange="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundCmdKEvalResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"proposed_change",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lsr, e, t)
  }
}, p5h=class usr extends ie{
  constructor(e){
    super(), this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetThoughtAnnotationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new usr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new usr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new usr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(usr, e, t)
  }
}, hOc=class dsr extends ie{
  constructor(e){
    super(), this.machineId="", this.workspaceExtensions=[], this.extensions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateVscodeProfileRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"machine_id",kind:"scalar",T:9
    }, {
      no:2,name:"workspace_extensions",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"extensions",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dsr, e, t)
  }
}, g5h=class hsr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateVscodeProfileResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new hsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hsr, e, t)
  }
}, f5h=class msr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetThoughtAnnotationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"thought_annotation",kind:"message",T:b5h
    }
    ])
  }
  static fromBinary(e, t){
    return new msr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new msr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new msr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(msr, e, t)
  }
}, b5h=class psr extends ie{
  constructor(e){
    super(), this.requestId="", this.authId="", this.thought="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiThoughtAnnotation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"auth_id",kind:"scalar",T:9
    }, {
      no:3,name:"debug_info",kind:"message",T:fve
    }, {
      no:4,name:"thought",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new psr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new psr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new psr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(psr, e, t)
  }
}, v5h=class gsr extends ie{
  constructor(e){
    super(), this.texts=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BulkEmbedRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"texts",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gsr, e, t)
  }
}, A5h=class fsr extends ie{
  constructor(e){
    super(), this.embeddings=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BulkEmbedResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"embeddings",kind:"message",T:y5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fsr, e, t)
  }
}, y5h=class bsr extends ie{
  constructor(e){
    super(), this.embedding=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EmbeddingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"embedding",kind:"scalar",T:1,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bsr, e, t)
  }
}, w5h=class vsr extends ie{
  constructor(e){
    super(), this.commitHash="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TakeNotesOnCommitDiffRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diff",kind:"message",T:EEh
    }, {
      no:2,name:"commit_hash",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vsr, e, t)
  }
}, _5h=class Asr extends ie{
  constructor(e){
    super(), this.notes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TakeNotesOnCommitDiffResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"notes",kind:"message",T:kEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Asr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Asr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Asr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Asr, e, t)
  }
}, LgA=class ysr extends ie{
  constructor(e){
    super(), this.commitHash="", this.diff="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SimpleCommitWithDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commit_hash",kind:"scalar",T:9
    }, {
      no:2,name:"diff",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ysr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ysr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ysr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ysr, e, t)
  }
}, C5h=class wsr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsCursorPredictionEnabledRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new wsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wsr, e, t)
  }
}, S5h=class _sr extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsCursorPredictionEnabledResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new _sr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _sr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _sr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_sr, e, t)
  }
}, k5h=class Csr extends ie{
  constructor(e){
    super(), this.diffHistory=[], this.contextItems=[], this.diffHistoryKeys=[], this.fileDiffHistories=[], this.mergedDiffHistories=[], this.blockDiffPatches=[], this.parameterHints=[], this.lspContexts=[], this.fileSyncUpdates=[], this.fileVisibleRanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamNextCursorPredictionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"diff_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"linter_errors",kind:"message",T:aN,opt:!0
    }, {
      no:13,name:"context_items",kind:"message",T:W6o,repeated:!0
    }, {
      no:5,name:"diff_history_keys",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"give_debug_output",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:8,name:"merged_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:9,name:"block_diff_patches",kind:"message",T:V6o,repeated:!0
    }, {
      no:10,name:"is_nightly",kind:"scalar",T:8,opt:!0
    }, {
      no:11,name:"is_debug",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"immediately_ack",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"enable_more_context",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"parameter_hints",kind:"message",T:D4c,repeated:!0
    }, {
      no:15,name:"lsp_contexts",kind:"message",T:$6o,repeated:!0
    }, {
      no:16,name:"cpp_intent_info",kind:"message",T:k4c,opt:!0
    }, {
      no:18,name:"workspace_id",kind:"scalar",T:9,opt:!0
    }, {
      no:19,name:"file_sync_updates",kind:"message",T:a9t,repeated:!0
    }, {
      no:20,name:"file_visible_ranges",kind:"message",T:pOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Csr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Csr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Csr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Csr, e, t)
  }
}, mOc=class Ssr extends ie{
  constructor(e){
    super(), this.startLineNumberInclusive=0, this.endLineNumberExclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamNextCursorPredictionRequest.VisibleRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number_inclusive",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_number_exclusive",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ssr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ssr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ssr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ssr, e, t)
  }
}, pOc=class ksr extends ie{
  constructor(e){
    super(), this.filename="", this.visibleRanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamNextCursorPredictionRequest.FileVisibleRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"filename",kind:"scalar",T:9
    }, {
      no:2,name:"visible_ranges",kind:"message",T:mOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ksr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ksr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ksr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ksr, e, t)
  }
}, E5h=class Esr extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamNextCursorPredictionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9,oneof:"response"
    }, {
      no:2,name:"line_number",kind:"scalar",T:5,oneof:"response"
    }, {
      no:3,name:"is_not_in_range",kind:"scalar",T:8,oneof:"response"
    }, {
      no:4,name:"file_name",kind:"scalar",T:9,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Esr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Esr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Esr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Esr, e, t)
  }
}, x5h=class xsr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.fileContents="", this.prompt="", this.images=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamWebCmdKV1Request"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"file_contents",kind:"scalar",T:9
    }, {
      no:3,name:"prompt",kind:"scalar",T:9
    }, {
      no:4,name:"selection_range",kind:"message",T:S3
    }, {
      no:5,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"images",kind:"message",T:ehe,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xsr, e, t)
  }
}, T5h=class Tsr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamWebCmdKV1Response"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cmd_k_response",kind:"message",T:K8n
    }
    ])
  }
  static fromBinary(e, t){
    return new Tsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tsr, e, t)
  }
}, I5h=class Isr extends ie{
  constructor(e){
    super(), this.sourceRange="", this.methodSignatures=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextScoresRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"source_range",kind:"scalar",T:9
    }, {
      no:2,name:"method_signatures",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Isr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Isr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Isr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Isr, e, t)
  }
}, D5h=class Dsr extends ie{
  constructor(e){
    super(), this.scores=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextScoresResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scores",kind:"scalar",T:2,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Dsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dsr, e, t)
  }
}, B5h=class Bsr extends ie{
  constructor(e){
    super(), this.feedbackType=Qte.UNSPECIFIED, this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportGenerationFeedbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feedback_type",kind:"enum",T:v.getEnumType(Qte)
    }, {
      no:2,name:"request_id",kind:"scalar",T:9
    }, {
      no:3,name:"comment",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"stars_overall",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"stars_speed",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"stars_accuracy",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"stars_style_taste",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"never_ask_again",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"did_popup",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bsr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.THUMBS_UP=1]="THUMBS_UP", n[n.THUMBS_DOWN=2]="THUMBS_DOWN", n[n.NEUTRAL=3]="NEUTRAL", n[n.STARS=4]="STARS"
})(Qte||(Qte={
  
})), v.util.setEnumType(Qte, "aiserver.v1.ReportGenerationFeedbackRequest.FeedbackType", [{
  no:0, name:"FEEDBACK_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FEEDBACK_TYPE_THUMBS_UP"
}, {
  no:2, name:"FEEDBACK_TYPE_THUMBS_DOWN"
}, {
  no:3, name:"FEEDBACK_TYPE_NEUTRAL"
}, {
  no:4, name:"FEEDBACK_TYPE_STARS"
}
]), R5h=class Rsr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportGenerationFeedbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Rsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rsr, e, t)
  }
}, P5h=class Psr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShowWelcomeScreenRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Psr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Psr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Psr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Psr, e, t)
  }
}, L5h=class Lsr extends ie{
  constructor(e){
    super(), this.enableCards=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShowWelcomeScreenResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enable_cards",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lsr, e, t)
  }
}, N5h=class Nsr extends ie{
  constructor(e){
    super(), this.description="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiProjectRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Nsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nsr, e, t)
  }
}, M5h=class Msr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiProjectResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Msr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Msr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Msr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Msr, e, t)
  }
}, F5h=class Fsr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ToCamelCaseRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Fsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fsr, e, t)
  }
}, O5h=class Osr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ToCamelCaseResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Osr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Osr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Osr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Osr, e, t)
  }
}, U5h=class Usr extends ie{
  constructor(e){
    super(), this.promptProps="", this.promptPropsTypeName="", this.skipLoginCheck=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPriomptPromptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"prompt_props",kind:"scalar",T:9
    }, {
      no:3,name:"prompt_props_type_name",kind:"scalar",T:9
    }, {
      no:5,name:"skip_login_check",kind:"scalar",T:8
    }, {
      no:4,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Usr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Usr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Usr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Usr, e, t)
  }
}, $5h=class $sr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPriomptPromptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new $sr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $sr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $sr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($sr, e, t)
  }
}, gOc=class qsr extends ie{
  constructor(e){
    super(), this.featureName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckFeatureStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feature_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qsr, e, t)
  }
}, q5h=class Hsr extends ie{
  constructor(e){
    super(), this.featureNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckFeaturesStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feature_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hsr, e, t)
  }
}, H5h=class Jsr extends ie{
  constructor(e){
    super(), this.featureStatuses=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckFeaturesStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feature_statuses",kind:"message",T:J5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jsr, e, t)
  }
}, J5h=class Gsr extends ie{
  constructor(e){
    super(), this.featureName="", this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckFeaturesStatusResponse.FeatureStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feature_name",kind:"scalar",T:9
    }, {
      no:2,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Gsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gsr, e, t)
  }
}, G5h=class Wsr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEffectiveTokenLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Wsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wsr, e, t)
  }
}, W5h=class Qsr extends ie{
  constructor(e){
    super(), this.tokenLimit=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEffectiveTokenLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"token_limit",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Qsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qsr, e, t)
  }
}, fOc=class jsr extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckFeatureStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new jsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jsr, e, t)
  }
}, bOc=class zsr extends ie{
  constructor(e){
    super(), this.key="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckNumberConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"key",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zsr, e, t)
  }
}, vOc=class Vsr extends ie{
  constructor(e){
    super(), this.value=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckNumberConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"value",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Vsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vsr, e, t)
  }
}, Q5h=class Ksr extends ie{
  constructor(e){
    super(), this.configNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckNumberConfigsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ksr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ksr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ksr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ksr, e, t)
  }
}, j5h=class Ysr extends ie{
  constructor(e){
    super(), this.configs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckNumberConfigsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"configs",kind:"message",T:z5h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ysr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ysr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ysr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ysr, e, t)
  }
}, z5h=class Zsr extends ie{
  constructor(e){
    super(), this.configName="", this.value=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckNumberConfigsResponse.Config"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config_name",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Zsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zsr, e, t)
  }
}, V5h=class Xsr extends ie{
  constructor(e){
    super(), this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IntentPredictionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"messages",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"context_options",kind:"message",T:e9h
    }, {
      no:3,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Xsr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xsr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xsr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xsr, e, t)
  }
}, K5h=class eor extends ie{
  constructor(e){
    super(), this.useGlobalContext=!1, this.useWithFolderContext=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IntentPredictionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chosen_documentation",kind:"message",T:Y5h
    }, {
      no:2,name:"chosen_file_contents",kind:"message",T:Z5h
    }, {
      no:3,name:"chosen_linter_diagnostics",kind:"message",T:X5h
    }, {
      no:4,name:"use_global_context",kind:"scalar",T:8
    }, {
      no:5,name:"use_with_folder_context",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new eor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eor, e, t)
  }
}, Y5h=class tor extends ie{
  constructor(e){
    super(), this.docIndices=[], this.docIdentifiers=[], this.docNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IntentPredictionResponse.ChosenDocumentation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"doc_indices",kind:"scalar",T:5,repeated:!0
    }, {
      no:2,name:"doc_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"doc_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tor, e, t)
  }
}, Z5h=class nor extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IntentPredictionResponse.ChosenFileContents"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nor, e, t)
  }
}, X5h=class ior extends ie{
  constructor(e){
    super(), this.diagnosticIndices=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IntentPredictionResponse.ChosenLinterDiagnostics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diagnostic_indices",kind:"scalar",T:5,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ior().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ior().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ior().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ior, e, t)
  }
}, e9h=class ror extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"all_documentation",kind:"message",T:t9h
    }, {
      no:2,name:"current_file_contents",kind:"message",T:i9h
    }, {
      no:3,name:"linter_diagnostics",kind:"message",T:r9h
    }, {
      no:4,name:"global_context",kind:"message",T:s9h
    }
    ])
  }
  static fromBinary(e, t){
    return new ror().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ror().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ror().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ror, e, t)
  }
}, t9h=class sor extends ie{
  constructor(e){
    super(), this.availableDocs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.AllDocumentation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"available_docs",kind:"message",T:n9h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sor, e, t)
  }
}, n9h=class oor extends ie{
  constructor(e){
    super(), this.name="", this.url="", this.identifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.AllDocumentation.Documentation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"url",kind:"scalar",T:9
    }, {
      no:3,name:"identifier",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oor, e, t)
  }
}, i9h=class aor extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.dataframes=[], this.languageId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.CurrentFileContents"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"cursor_position",kind:"message",T:I9
    }, {
      no:4,name:"dataframes",kind:"message",T:U9o,repeated:!0
    }, {
      no:5,name:"language_id",kind:"scalar",T:9
    }, {
      no:6,name:"selection",kind:"message",T:fz
    }
    ])
  }
  static fromBinary(e, t){
    return new aor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aor, e, t)
  }
}, r9h=class cor extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.diagnostics=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.LinterDiagnostics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"diagnostics",kind:"message",T:AOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cor, e, t)
  }
}, AOc=class lor extends ie{
  constructor(e){
    super(), this.message="", this.source="", this.relativeWorkspacePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.LinterDiagnostics.Diagnostic"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"source",kind:"scalar",T:9
    }, {
      no:3,name:"range",kind:"message",T:fz
    }, {
      no:4,name:"relative_workspace_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lor, e, t)
  }
}, s9h=class uor extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextOptions.GlobalContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new uor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uor, e, t)
  }
}, o9h=class dor extends ie{
  constructor(e){
    super(), this.conversation=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCursorTutorRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new dor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dor, e, t)
  }
}, a9h=class hor extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCursorTutorResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hor, e, t)
  }
}, yOc=class mor extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.codeBlocks=[], this.queryType=s6n.UNSPECIFIED, this.fasterAndStupider=!1, this.useGlobs=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelQueryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"query_type",kind:"enum",T:v.getEnumType(s6n)
    }, {
      no:9,name:"repository_info",kind:"message",T:z_
    }, {
      no:10,name:"faster_and_stupider",kind:"scalar",T:8
    }, {
      no:11,name:"use_globs",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new mor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mor, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.KEYWORDS=1]="KEYWORDS", n[n.EMBEDDINGS=2]="EMBEDDINGS"
})(s6n||(s6n={
  
})), v.util.setEnumType(s6n, "aiserver.v1.ModelQueryRequest.QueryType", [{
  no:0, name:"QUERY_TYPE_UNSPECIFIED"
}, {
  no:1, name:"QUERY_TYPE_KEYWORDS"
}, {
  no:2, name:"QUERY_TYPE_EMBEDDINGS"
}
]), c9h=class por extends ie{
  constructor(e){
    super(), this.queries=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelQueryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"queries",kind:"message",T:l9h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new por().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new por().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new por().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(por, e, t)
  }
}, l9h=class gor extends ie{
  constructor(e){
    super(), this.query="", this.successfulParse=!1, this.goodFileExtensions=[], this.badFileExtensions=[], this.goodPaths=[], this.badPaths=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelQueryResponse.Query"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"successful_parse",kind:"scalar",T:8
    }, {
      no:3,name:"good_file_extensions",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"bad_file_extensions",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"good_paths",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"bad_paths",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gor, e, t)
  }
}, u9h=class bor extends ie{
  constructor(e){
    super(), this.queryOrReasoning={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelQueryResponseV2"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"message",T:d9h,oneof:"query_or_reasoning"
    }, {
      no:2,name:"reasoning",kind:"scalar",T:9,oneof:"query_or_reasoning"
    }
    ])
  }
  static fromBinary(e, t){
    return new bor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bor, e, t)
  }
}, d9h=class vor extends ie{
  constructor(e){
    super(), this.partialQuery={
      case:void 0
    }, this.index=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelQueryResponseV2.QueryItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9,oneof:"partial_query"
    }, {
      no:2,name:"glob",kind:"scalar",T:9,oneof:"partial_query"
    }, {
      no:3,name:"index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new vor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vor, e, t)
  }
}, h9h=class Aor extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApiDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }, {
      no:2,name:"enable_ghost_mode",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aor, e, t)
  }
}, o6n=class yor extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FullFileSearchResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:ATh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yor, e, t)
  }
}, m9t=class wor extends ie{
  constructor(e){
    super(), this.results=[], this.allFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CodeSearchResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:zR,repeated:!0
    }, {
      no:2,name:"all_files",kind:"message",T:iae,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wor, e, t)
  }
}, m9h=class _or extends ie{
  constructor(e){
    super(), this.codeResults=[], this.query="", this.numBlocks=0, this.conversation=[], this.contextResults={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RerankerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_results",kind:"message",T:zR,repeated:!0
    }, {
      no:2,name:"query",kind:"scalar",T:9
    }, {
      no:3,name:"num_blocks",kind:"scalar",T:5
    }, {
      no:4,name:"current_file",kind:"message",T:AS
    }, {
      no:5,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:6,name:"api_details",kind:"message",T:h9h
    }, {
      no:7,name:"file_search_results",kind:"message",T:o6n,oneof:"context_results"
    }, {
      no:8,name:"code_search_results",kind:"message",T:m9t,oneof:"context_results"
    }
    ])
  }
  static fromBinary(e, t){
    return new _or().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _or().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _or().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_or, e, t)
  }
}, p9h=class Cor extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RerankerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cor, e, t)
  }
}, g9h=class Sor extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GenerateTldrRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Sor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sor, e, t)
  }
}, f9h=class kor extends ie{
  constructor(e){
    super(), this.summary="", this.all="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GenerateTldrResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"summary",kind:"scalar",T:9
    }, {
      no:2,name:"all",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kor, e, t)
  }
}, b9h=class Eor extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.codeBlocks=[], this.documentationIdentifiers=[], this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:14,name:"linter_errors",kind:"message",T:aN
    }, {
      no:15,name:"advanced_codebase_context",kind:"message",T:v9h
    }, {
      no:16,name:"is_eval",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"request_id",kind:"scalar",T:9
    }, {
      no:18,name:"desired_token_limit",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Eor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eor, e, t)
  }
}, v9h=class xor extends ie{
  constructor(e){
    super(), this.numResultsPerSearch=0, this.reranker=F5n.UNSPECIFIED, this.reasoningStep=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AdvancedCodebaseContextOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"num_results_per_search",kind:"scalar",T:5
    }, {
      no:2,name:"include_pattern",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"exclude_pattern",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"reranker",kind:"enum",T:v.getEnumType(F5n)
    }, {
      no:5,name:"index_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"reasoning_step",kind:"scalar",T:8
    }, {
      no:7,name:"rechunker",kind:"enum",T:v.getEnumType(o8o),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xor, e, t)
  }
}, A9h=class Tor extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"output",kind:"message",T:y9h,oneof:"response"
    }, {
      no:2,name:"gathering_step",kind:"message",T:_9h,oneof:"response"
    }, {
      no:3,name:"gathering_file",kind:"message",T:w9h,oneof:"response"
    }, {
      no:4,name:"reranking_step",kind:"message",T:C9h,oneof:"response"
    }, {
      no:5,name:"reranking_file",kind:"message",T:S9h,oneof:"response"
    }, {
      no:6,name:"reasoning_step",kind:"message",T:k9h,oneof:"response"
    }, {
      no:7,name:"reasoning_substep",kind:"message",T:E9h,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Tor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tor, e, t)
  }
}, y9h=class Ior extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.Output"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ior().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ior().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ior().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ior, e, t)
  }
}, w9h=class Dor extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.stepIndex=0, this.score=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.GatheringFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:wF
    }, {
      no:3,name:"step_index",kind:"scalar",T:5
    }, {
      no:4,name:"score",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new Dor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dor, e, t)
  }
}, _9h=class Bor extends ie{
  constructor(e){
    super(), this.title="", this.index=0, this.query="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.GatheringStep"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"index",kind:"scalar",T:5
    }, {
      no:3,name:"query",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bor, e, t)
  }
}, C9h=class Ror extends ie{
  constructor(e){
    super(), this.title="", this.index=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.RerankingStep"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ror().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ror().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ror().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ror, e, t)
  }
}, S9h=class Por extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.reason="", this.failed=!1, this.score=0, this.stepIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.RerankingFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:wF
    }, {
      no:3,name:"reason",kind:"scalar",T:9
    }, {
      no:4,name:"failed",kind:"scalar",T:8
    }, {
      no:5,name:"score",kind:"scalar",T:2
    }, {
      no:6,name:"step_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Por().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Por().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Por().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Por, e, t)
  }
}, k9h=class Lor extends ie{
  constructor(e){
    super(), this.title="", this.index=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.ReasoningStep"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Lor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lor, e, t)
  }
}, E9h=class Nor extends ie{
  constructor(e){
    super(), this.markdownExplanation="", this.stepIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponse.ReasoningSubstep"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"markdown_explanation",kind:"scalar",T:9
    }, {
      no:2,name:"step_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Nor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nor, e, t)
  }
}, x9h=class Mor extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamChatContextResponseWrapped"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"real_response",kind:"message",T:A9h,oneof:"response"
    }, {
      no:2,name:"background_task_uuid",kind:"scalar",T:9,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Mor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mor, e, t)
  }
}, wOc=class For extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.codeBlocks=[], this.documentationIdentifiers=[], this.query="", this.rerankResults=!1, this.contextResults={
      case:void 0
    }, this.rerankResultsV2=!1, this.conversationId="", this.canHandleFilenamesAfterLanguageIds=!1, this.longContextMode=!1, this.isEval=!1, this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:9,name:"query",kind:"scalar",T:9
    }, {
      no:10,name:"code_context",kind:"message",T:T9h
    }, {
      no:11,name:"rerank_results",kind:"scalar",T:8
    }, {
      no:12,name:"file_search_results",kind:"message",T:o6n,oneof:"context_results"
    }, {
      no:13,name:"code_search_results",kind:"message",T:m9t,oneof:"context_results"
    }, {
      no:14,name:"linter_errors",kind:"message",T:aN
    }, {
      no:15,name:"is_bash",kind:"scalar",T:8,opt:!0
    }, {
      no:16,name:"rerank_results_v2",kind:"scalar",T:8
    }, {
      no:17,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:18,name:"can_handle_filenames_after_language_ids",kind:"scalar",T:8
    }, {
      no:19,name:"long_context_mode",kind:"scalar",T:8
    }, {
      no:20,name:"is_eval",kind:"scalar",T:8
    }, {
      no:21,name:"request_id",kind:"scalar",T:9
    }, {
      no:22,name:"desired_max_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:23,name:"runnable_code_blocks",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new For().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new For().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new For().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(For, e, t)
  }
}, T9h=class Oor extends ie{
  constructor(e){
    super(), this.chunks=[], this.scoredChunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextRequest.CodeContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunks",kind:"message",T:WB,repeated:!0
    }, {
      no:2,name:"scored_chunks",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Oor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oor, e, t)
  }
}, _Oc=class Uor extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"debugging_only_chat_prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"debugging_only_token_count",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"document_citation",kind:"message",T:I6o
    }, {
      no:5,name:"filled_prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"used_code",kind:"message",T:I9h
    }, {
      no:7,name:"code_link",kind:"message",T:D9h
    }, {
      no:8,name:"chunk_identity",kind:"message",T:B9h,opt:!0
    }, {
      no:9,name:"docs_reference",kind:"message",T:X5t,opt:!0
    }, {
      no:10,name:"symbol_link",kind:"message",T:y8n,opt:!0
    }, {
      no:11,name:"file_link",kind:"message",T:P6o,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Uor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uor, e, t)
  }
}, I9h=class $or extends ie{
  constructor(e){
    super(), this.codeResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextResponse.UsedCode"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $or().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $or().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $or().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($or, e, t)
  }
}, D9h=class qor extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLineNumber=0, this.endLineNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextResponse.CodeLink"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new qor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qor, e, t)
  }
}, B9h=class Hor extends ie{
  constructor(e){
    super(), this.fileName="", this.startLine=0, this.endLine=0, this.text="", this.chunkType=H9e.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatContextResponse.ChunkIdentity"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_name",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line",kind:"scalar",T:5
    }, {
      no:4,name:"text",kind:"scalar",T:9
    }, {
      no:5,name:"chunk_type",kind:"enum",T:v.getEnumType(H9e)
    }
    ])
  }
  static fromBinary(e, t){
    return new Hor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hor, e, t)
  }
}, R9h=class Jor extends ie{
  constructor(e){
    super(), this.conversation=[], this.rerankResults=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatDeepContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"explicit_context",kind:"message",T:_F
    }, {
      no:3,name:"model_details",kind:"message",T:Yf
    }, {
      no:4,name:"context_results",kind:"message",T:LTh
    }, {
      no:5,name:"rerank_results",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Jor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jor, e, t)
  }
}, P9h=class Gor extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatDeepContextResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Gor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gor, e, t)
  }
}, L9h=class Wor extends ie{
  constructor(e){
    super(), this.docIdentifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DocumentationInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"doc_identifier",kind:"scalar",T:9
    }, {
      no:2,name:"metadata",kind:"message",T:oMc
    }
    ])
  }
  static fromBinary(e, t){
    return new Wor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wor, e, t)
  }
}, N9h=class Qor extends ie{
  constructor(e){
    super(), this.partialDoc={
      case:void 0
    }, this.additionalDocIdentifiers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableDocsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"partial_url",kind:"scalar",T:9,oneof:"partial_doc"
    }, {
      no:2,name:"partial_doc_name",kind:"scalar",T:9,oneof:"partial_doc"
    }, {
      no:3,name:"get_all",kind:"scalar",T:8,oneof:"partial_doc"
    }, {
      no:4,name:"additional_doc_identifiers",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qor, e, t)
  }
}, M9h=class jor extends ie{
  constructor(e){
    super(), this.docs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableDocsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"docs",kind:"message",T:L9h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new jor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jor, e, t)
  }
}, F9h=class zor extends ie{
  constructor(e){
    super(), this.error=yc.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ThrowErrorCheckRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"enum",T:v.getEnumType(yc)
    }
    ])
  }
  static fromBinary(e, t){
    return new zor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zor, e, t)
  }
}, O9h=class Vor extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ThrowErrorCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Vor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vor, e, t)
  }
}, COc=class Kor extends ie{
  constructor(e){
    super(), this.isNightly=!1, this.includeLongContextModels=!1, this.excludeMaxNamedModels=!1, this.additionalModelNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_nightly",kind:"scalar",T:8
    }, {
      no:2,name:"include_long_context_models",kind:"scalar",T:8
    }, {
      no:3,name:"exclude_max_named_models",kind:"scalar",T:8
    }, {
      no:4,name:"additional_model_names",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"use_model_parameters",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"include_hidden_models",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kor, e, t)
  }
}, U9h=class Yor extends ie{
  constructor(e){
    super(), this.models=[], this.modelNames=[], this.useModelParameters=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"models",kind:"message",T:$9h,repeated:!0
    }, {
      no:1,name:"model_names",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"composer_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:5,name:"cmd_k_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:6,name:"background_composer_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:7,name:"plan_execution_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:8,name:"spec_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:9,name:"deep_search_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:10,name:"quick_agent_model_config",kind:"message",T:nYe,opt:!0
    }, {
      no:11,name:"use_model_parameters",kind:"scalar",T:8
    }, {
      no:12,name:"disable_unused_models_after_n_hours",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"upgrade_unchanged_models_after_n_hours",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yor, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DEGRADED=1]="DEGRADED", n[n.DISABLED=2]="DISABLED"
})(HRe||(HRe={
  
})), v.util.setEnumType(HRe, "aiserver.v1.AvailableModelsResponse.DegradationStatus", [{
  no:0, name:"DEGRADATION_STATUS_UNSPECIFIED"
}, {
  no:1, name:"DEGRADATION_STATUS_DEGRADED"
}, {
  no:2, name:"DEGRADATION_STATUS_DISABLED"
}
]), nUo=class Zor extends ie{
  constructor(e){
    super(), this.primaryText="", this.secondaryText="", this.secondaryWarningText=!1, this.icon="", this.tertiaryText="", this.tertiaryTextUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsResponse.TooltipData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"primary_text",kind:"scalar",T:9
    }, {
      no:2,name:"secondary_text",kind:"scalar",T:9
    }, {
      no:3,name:"secondary_warning_text",kind:"scalar",T:8
    }, {
      no:4,name:"icon",kind:"scalar",T:9
    }, {
      no:5,name:"tertiary_text",kind:"scalar",T:9
    }, {
      no:6,name:"tertiary_text_url",kind:"scalar",T:9
    }, {
      no:7,name:"markdown_content",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zor, e, t)
  }
}, $9h=class Xor extends ie{
  constructor(e){
    super(), this.name="", this.defaultOn=!1, this.parameterDefinitions=[], this.variants=[], this.legacySlugs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsResponse.AvailableModel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"default_on",kind:"scalar",T:8
    }, {
      no:3,name:"is_long_context_only",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"is_chat_only",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"supports_agent",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"degradation_status",kind:"enum",T:v.getEnumType(HRe),opt:!0
    }, {
      no:7,name:"price",kind:"scalar",T:1,opt:!0
    }, {
      no:8,name:"tooltip_data",kind:"message",T:nUo,opt:!0
    }, {
      no:20,name:"tooltip_data_for_max_mode",kind:"message",T:nUo,opt:!0
    }, {
      no:9,name:"supports_thinking",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"supports_images",kind:"scalar",T:8,opt:!0
    }, {
      no:11,name:"supports_auto_context",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"auto_context_max_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"auto_context_extended_max_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:14,name:"supports_max_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:19,name:"supports_non_max_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:15,name:"context_token_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:16,name:"context_token_limit_for_max_mode",kind:"scalar",T:5,opt:!0
    }, {
      no:17,name:"client_display_name",kind:"scalar",T:9,opt:!0
    }, {
      no:18,name:"server_model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:21,name:"is_recommended_for_background_composer",kind:"scalar",T:8,opt:!0
    }, {
      no:22,name:"supports_plan_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:25,name:"supports_sandboxing",kind:"scalar",T:8,opt:!0
    }, {
      no:23,name:"is_user_added",kind:"scalar",T:8,opt:!0
    }, {
      no:24,name:"inputbox_short_model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:26,name:"supports_cmd_k",kind:"scalar",T:8,opt:!0
    }, {
      no:27,name:"only_supports_cmd_k",kind:"scalar",T:8,opt:!0
    }, {
      no:28,name:"background_composer_sort_order",kind:"scalar",T:5,opt:!0
    }, {
      no:29,name:"parameter_definitions",kind:"message",T:H9h,repeated:!0
    }, {
      no:30,name:"variants",kind:"message",T:q9h,repeated:!0
    }, {
      no:32,name:"cloud_agent_effort_mode",kind:"enum",T:v.getEnumType(e6n),opt:!0
    }, {
      no:33,name:"cloud_migrate_to_model",kind:"scalar",T:9,opt:!0
    }, {
      no:34,name:"upgrade_model_id",kind:"scalar",T:9,opt:!0
    }, {
      no:35,name:"is_hidden",kind:"scalar",T:8,opt:!0
    }, {
      no:36,name:"legacy_slugs",kind:"scalar",T:9,repeated:!0
    }, {
      no:38,name:"named_model_section_index",kind:"scalar",T:5,opt:!0
    }, {
      no:39,name:"tagline",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xor().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xor().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xor().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xor, e, t)
  }
}, q9h=class ear extends ie{
  constructor(e){
    super(), this.parameterValues=[], this.displayName="", this.isMaxMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsResponse.ModelVariantConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"parameter_values",kind:"message",T:rvt,repeated:!0
    }, {
      no:2,name:"display_name",kind:"scalar",T:9
    }, {
      no:8,name:"display_name_outside_picker",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"is_max_mode",kind:"scalar",T:8
    }, {
      no:4,name:"is_default_max_config",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"is_default_non_max_config",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"tooltip_data",kind:"message",T:nUo,opt:!0
    }, {
      no:7,name:"tagline",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"variant_string_representation",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ear().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ear().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ear().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ear, e, t)
  }
}, nYe=class tar extends ie{
  constructor(e){
    super(), this.defaultModel="", this.fallbackModels=[], this.bestOfNDefaultModels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableModelsResponse.FeatureModelConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"default_model",kind:"scalar",T:9
    }, {
      no:2,name:"fallback_models",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"best_of_n_default_models",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tar, e, t)
  }
}, H9h=class nar extends ie{
  constructor(e){
    super(), this.id="", this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelParameterDefinition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"markdown_tooltip",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"parameter_type",kind:"message",T:J9h
    }, {
      no:5,name:"is_cycleable_by_hotkey",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nar, e, t)
  }
}, J9h=class iar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelParameterDefinition.ModelParameterType"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"boolean_parameter",kind:"message",T:G9h,opt:!0
    }, {
      no:2,name:"enum_parameter",kind:"message",T:W9h,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iar, e, t)
  }
}, G9h=class rar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rar, e, t)
  }
}, W9h=class sar extends ie{
  constructor(e){
    super(), this.values=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelParameterDefinition.EnumParameterDefinition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"values",kind:"message",T:Q9h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sar, e, t)
  }
}, Q9h=class oar extends ie{
  constructor(e){
    super(), this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelParameterDefinition.EnumParameterDefinition.EnumParameterValue"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"value",kind:"scalar",T:9
    }, {
      no:2,name:"display_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new oar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oar, e, t)
  }
}, j9h=class aar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServerTimeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new aar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aar, e, t)
  }
}, z9h=class car extends ie{
  constructor(e){
    super(), this.receiveTimestamp=0, this.transmitTimestamp=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServerTimeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"receive_timestamp",kind:"scalar",T:1
    }, {
      no:2,name:"transmit_timestamp",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new car().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new car().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new car().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(car, e, t)
  }
}, SOc=class lar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.HealthCheckRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new lar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lar, e, t)
  }
}, V9h=class uar extends ie{
  constructor(e){
    super(), this.status=a6n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.HealthCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"enum",T:v.getEnumType(a6n)
    }
    ])
  }
  static fromBinary(e, t){
    return new uar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uar, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.HEALTHY=1]="HEALTHY"
})(a6n||(a6n={
  
})), v.util.setEnumType(a6n, "aiserver.v1.HealthCheckResponse.Status", [{
  no:0, name:"STATUS_UNSPECIFIED"
}, {
  no:1, name:"STATUS_HEALTHY"
}
]), K9h=class dar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PrivacyCheckRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new dar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dar, e, t)
  }
}, Y9h=class har extends ie{
  constructor(e){
    super(), this.isOnPrivacyPod=!1, this.isGhostModeOn=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PrivacyCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_on_privacy_pod",kind:"scalar",T:8
    }, {
      no:2,name:"is_ghost_mode_on",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new har().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new har().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new har().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(har, e, t)
  }
}, Z9h=class mar extends ie{
  constructor(e){
    super(), this.timeLeft="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TimeLeftHealthCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"time_left",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mar, e, t)
  }
}, X9h=class uSn extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.query="", this.codeBlocks=[], this.documentationIdentifiers=[], this.promptCodeBlocks=[], this.sessionId="", this.fastMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamGenerateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"query",kind:"scalar",T:9
    }, {
      no:7,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:9,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:11,name:"linter_errors",kind:"message",T:aN
    }, {
      no:12,name:"prompt_code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:14,name:"session_id",kind:"scalar",T:9
    }, {
      no:13,name:"cmd_k_debug_info",kind:"message",T:fve
    }, {
      no:15,name:"fast_mode",kind:"scalar",T:8
    }, {
      no:16,name:"original_request",kind:"message",T:uSn
    }
    ])
  }
  static fromBinary(e, t){
    return new uSn().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uSn().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uSn().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uSn, e, t)
  }
}, e8h=class par extends ie{
  constructor(e){
    super(), this.chunk="", this.fileContext="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunk",kind:"scalar",T:9
    }, {
      no:2,name:"file_context",kind:"scalar",T:9
    }, {
      no:3,name:"chunk_range",kind:"message",T:S3
    }, {
      no:4,name:"diff_string",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new par().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new par().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new par().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(par, e, t)
  }
}, kOc=class gar extends ie{
  constructor(e){
    super(), this.text="", this.type=c6n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewChatMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"type",kind:"enum",T:v.getEnumType(c6n)
    }
    ])
  }
  static fromBinary(e, t){
    return new gar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gar, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.HUMAN=1]="HUMAN", n[n.AI=2]="AI"
})(c6n||(c6n={
  
})), v.util.setEnumType(c6n, "aiserver.v1.ReviewChatMessage.ReviewChatMessageType", [{
  no:0, name:"REVIEW_CHAT_MESSAGE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"REVIEW_CHAT_MESSAGE_TYPE_HUMAN"
}, {
  no:2, name:"REVIEW_CHAT_MESSAGE_TYPE_AI"
}
]), t8h=class far extends ie{
  constructor(e){
    super(), this.chunk="", this.fileContext="", this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewChatRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunk",kind:"scalar",T:9
    }, {
      no:2,name:"file_context",kind:"scalar",T:9
    }, {
      no:3,name:"chunk_range",kind:"message",T:S3
    }, {
      no:4,name:"messages",kind:"message",T:kOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new far().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new far().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new far().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(far, e, t)
  }
}, n8h=class bar extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewChatResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"should_resolve",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bar, e, t)
  }
}, i8h=class Aar extends ie{
  constructor(e){
    super(), this.id="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewBug"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"end_line",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"severity",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"tldr",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aar, e, t)
  }
}, r8h=class yar extends ie{
  constructor(e){
    super(), this.text="", this.bugs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"tldr",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_bug",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"bugs",kind:"message",T:i8h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yar, e, t)
  }
}, s8h=class war extends ie{
  constructor(e){
    super(), this.conversation=[], this.isCmdI=!1, this.files=[], this.useFastApply=!1, this.fastApplyModelType=p9t.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlashEditRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"is_cmd_i",kind:"scalar",T:8
    }, {
      no:11,name:"summary",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"summary_up_until_index",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"should_use_turbo_debug_prompt",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"edit_selection",kind:"message",T:S3,opt:!0
    }, {
      no:15,name:"files",kind:"message",T:AS,repeated:!0
    }, {
      no:16,name:"clicked_code_block_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:17,name:"is_an_optimistic_request_for_caching_and_linting",kind:"scalar",T:8,opt:!0
    }, {
      no:18,name:"specific_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:19,name:"use_fast_apply",kind:"scalar",T:8
    }, {
      no:20,name:"fast_apply_model_type",kind:"enum",T:v.getEnumType(p9t)
    }, {
      no:25,name:"use_chunk_speculation_for_long_files",kind:"scalar",T:8,opt:!0
    }, {
      no:26,name:"parent_request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:27,name:"source",kind:"enum",T:v.getEnumType(u9t),opt:!0
    }, {
      no:28,name:"is_reapply",kind:"scalar",T:8,opt:!0
    }, {
      no:29,name:"willing_to_pay_extra_for_speed",kind:"scalar",T:8,opt:!0
    }, {
      no:30,name:"attempt_number",kind:"scalar",T:5,opt:!0
    }, {
      no:31,name:"should_throw_timeout_error",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new war().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new war().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new war().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(war, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DEFAULT=1]="DEFAULT", n[n.DEEPSEEK=2]="DEEPSEEK", n[n.SONNET=3]="SONNET", n[n.OPUS_DIFF=4]="OPUS_DIFF", n[n.SMART_REWRITE=5]="SMART_REWRITE", n[n.GPT4=6]="GPT4", n[n.GPT4_NOSPEC=7]="GPT4_NOSPEC", n[n.SMART_REWRITE_NOSPEC=8]="SMART_REWRITE_NOSPEC", n[n.OPUS=9]="OPUS", n[n.HAIKU=10]="HAIKU", n[n.GPT4O_NOSPEC=11]="GPT4O_NOSPEC", n[n.GPT4O_DIFF=12]="GPT4O_DIFF", n[n.CODESTRAL_REWRITE=13]="CODESTRAL_REWRITE", n[n.DEEPSEEK_33B=14]="DEEPSEEK_33B", n[n.SONNET_35_DIFF=15]="SONNET_35_DIFF", n[n.SONNET_35_REWRITE=16]="SONNET_35_REWRITE", n[n.PROMPTED_DEEPSEEK_V2=17]="PROMPTED_DEEPSEEK_V2", n[n.CODESTRAL_REWRITE_OLD=18]="CODESTRAL_REWRITE_OLD", n[n.CODESTRAL_REWRITE_FP16=19]="CODESTRAL_REWRITE_FP16", n[n.DEEPSEEK_33B_V2=20]="DEEPSEEK_33B_V2", n[n.CODESTRAL_V4=21]="CODESTRAL_V4", n[n.CODESTRAL_V5=22]="CODESTRAL_V5", n[n.CODESTRAL_V6=23]="CODESTRAL_V6", n[n.CODESTRAL_V7=24]="CODESTRAL_V7"
})(p9t||(p9t={
  
})), v.util.setEnumType(p9t, "aiserver.v1.SlashEditRequest.FastApplyModelType", [{
  no:0, name:"FAST_APPLY_MODEL_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FAST_APPLY_MODEL_TYPE_DEFAULT"
}, {
  no:2, name:"FAST_APPLY_MODEL_TYPE_DEEPSEEK"
}, {
  no:3, name:"FAST_APPLY_MODEL_TYPE_SONNET"
}, {
  no:4, name:"FAST_APPLY_MODEL_TYPE_OPUS_DIFF"
}, {
  no:5, name:"FAST_APPLY_MODEL_TYPE_SMART_REWRITE"
}, {
  no:6, name:"FAST_APPLY_MODEL_TYPE_GPT4"
}, {
  no:7, name:"FAST_APPLY_MODEL_TYPE_GPT4_NOSPEC"
}, {
  no:8, name:"FAST_APPLY_MODEL_TYPE_SMART_REWRITE_NOSPEC"
}, {
  no:9, name:"FAST_APPLY_MODEL_TYPE_OPUS"
}, {
  no:10, name:"FAST_APPLY_MODEL_TYPE_HAIKU"
}, {
  no:11, name:"FAST_APPLY_MODEL_TYPE_GPT4O_NOSPEC"
}, {
  no:12, name:"FAST_APPLY_MODEL_TYPE_GPT4O_DIFF"
}, {
  no:13, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE"
}, {
  no:14, name:"FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B"
}, {
  no:15, name:"FAST_APPLY_MODEL_TYPE_SONNET_35_DIFF"
}, {
  no:16, name:"FAST_APPLY_MODEL_TYPE_SONNET_35_REWRITE"
}, {
  no:17, name:"FAST_APPLY_MODEL_TYPE_PROMPTED_DEEPSEEK_V2"
}, {
  no:18, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_OLD"
}, {
  no:19, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_FP16"
}, {
  no:20, name:"FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B_V2"
}, {
  no:21, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_V4"
}, {
  no:22, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_V5"
}, {
  no:23, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_V6"
}, {
  no:24, name:"FAST_APPLY_MODEL_TYPE_CODESTRAL_V7"
}
]), o8h=class _ar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlashEditResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cmd_k_response",kind:"message",T:K8n
    }
    ])
  }
  static fromBinary(e, t){
    return new _ar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ar, e, t)
  }
}, EOc=class Car extends ie{
  constructor(e){
    super(), this.originalLines=[], this.newLines=[], this.relativeWorkspacePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlashEditPreviousEdit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"original_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"new_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"range",kind:"message",T:S3
    }
    ])
  }
  static fromBinary(e, t){
    return new Car().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Car().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Car().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Car, e, t)
  }
}, a8h=class Sar extends ie{
  constructor(e){
    super(), this.conversation=[], this.previousEdits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlashEditFollowUpWithPreviousEditsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }, {
      no:3,name:"previous_edits",kind:"message",T:EOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sar, e, t)
  }
}, c8h=class kar extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chat",kind:"message",T:l8h,oneof:"response"
    }, {
      no:2,name:"edits_to_update",kind:"message",T:u8h,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new kar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kar, e, t)
  }
}, l8h=class Ear extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.Chat"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ear().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ear().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ear().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ear, e, t)
  }
}, u8h=class xar extends ie{
  constructor(e){
    super(), this.previousEdits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.EditsToUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"previous_edits",kind:"message",T:EOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xar, e, t)
  }
}, d8h=class Tar extends ie{
  constructor(e){
    super(), this.repositories=[], this.query="", this.codeBlocks=[], this.documentationIdentifiers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamFastEditRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"query",kind:"scalar",T:9
    }, {
      no:7,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:9,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:11,name:"linter_errors",kind:"message",T:aN
    }
    ])
  }
  static fromBinary(e, t){
    return new Tar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tar, e, t)
  }
}, h8h=class Iar extends ie{
  constructor(e){
    super(), this.lineNumber=0, this.replaceNumLines=0, this.editUuid="", this.resetNewLines=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamFastEditResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"line_number",kind:"scalar",T:5
    }, {
      no:3,name:"replace_num_lines",kind:"scalar",T:5
    }, {
      no:5,name:"edit_uuid",kind:"scalar",T:9
    }, {
      no:4,name:"done",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"new_line",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"reset_new_lines",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Iar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Iar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Iar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Iar, e, t)
  }
}, xOc=class dSn extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.query="", this.codeBlocks=[], this.documentationIdentifiers=[], this.promptCodeBlocks=[], this.sessionId="", this.fastMode=!1, this.images=[], this.links=[], this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamEditRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"query",kind:"scalar",T:9
    }, {
      no:7,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:9,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:11,name:"linter_errors",kind:"message",T:aN
    }, {
      no:12,name:"prompt_code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:14,name:"session_id",kind:"scalar",T:9
    }, {
      no:13,name:"cmd_k_debug_info",kind:"message",T:fve
    }, {
      no:15,name:"fast_mode",kind:"scalar",T:8
    }, {
      no:16,name:"original_request",kind:"message",T:dSn
    }, {
      no:17,name:"images",kind:"message",T:ehe,repeated:!0
    }, {
      no:18,name:"links",kind:"message",T:H9o,repeated:!0
    }, {
      no:19,name:"rules",kind:"message",T:rke,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dSn().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dSn().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dSn().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dSn, e, t)
  }
}, m8h=class Dar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreloadEditRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"req",kind:"message",T:xOc
    }
    ])
  }
  static fromBinary(e, t){
    return new Dar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dar, e, t)
  }
}, p8h=class Bar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreloadEditResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Bar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bar, e, t)
  }
}, g8h=class Rar extends ie{
  constructor(e){
    super(), this.chunksToAnalyze=[], this.dismissedBugs=[], this.activeBugs=[], this.lintRules=[], this.clients=[], this.forceEnableDiscriminators=[], this.forceDisableDiscriminators=[], this.forceEnableGenerators=[], this.forceDisableGenerators=[], this.version=0, this.debugMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiLintBugRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunks_to_analyze",kind:"message",T:TOc,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"dismissed_bugs",kind:"message",T:Z8n,repeated:!0
    }, {
      no:11,name:"active_bugs",kind:"message",T:Z8n,repeated:!0
    }, {
      no:12,name:"lint_rules",kind:"message",T:EOh,repeated:!0
    }, {
      no:14,name:"clients",kind:"message",T:f8h,repeated:!0
    }, {
      no:17,name:"force_enable_discriminators",kind:"enum",T:v.getEnumType(lvt),repeated:!0
    }, {
      no:18,name:"force_disable_discriminators",kind:"enum",T:v.getEnumType(lvt),repeated:!0
    }, {
      no:19,name:"force_enable_generators",kind:"enum",T:v.getEnumType(uvt),repeated:!0
    }, {
      no:20,name:"force_disable_generators",kind:"enum",T:v.getEnumType(uvt),repeated:!0
    }, {
      no:21,name:"version",kind:"scalar",T:5
    }, {
      no:15,name:"discriminator_options",kind:"message",T:b8h,opt:!0
    }, {
      no:16,name:"debug_mode",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Rar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rar, e, t)
  }
}, TOc=class Par extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLineNumber=0, this.lines=[], this.contextLinesBefore=[], this.contextLinesAfter=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiLintBugRequest.CodeChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"context_lines_before",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"context_lines_after",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Par().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Par().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Par().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Par, e, t)
  }
}, f8h=class Lar extends ie{
  constructor(e){
    super(), this.chunks=[], this.referredStartLines=[], this.referredEndLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiLintBugRequest.CodeChunkList"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:13,name:"chunks",kind:"message",T:TOc,repeated:!0
    }, {
      no:14,name:"referred_start_lines",kind:"scalar",T:5,repeated:!0
    }, {
      no:15,name:"referred_end_lines",kind:"scalar",T:5,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lar, e, t)
  }
}, b8h=class Nar extends ie{
  constructor(e){
    super(), this.specificRules=!1, this.compileErrors=!1, this.changeBehavior=!1, this.matchCode=!1, this.relevance=!1, this.userAwareness=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiLintBugRequest.DiscriminatorOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"specific_rules",kind:"scalar",T:8
    }, {
      no:2,name:"compile_errors",kind:"scalar",T:8
    }, {
      no:3,name:"change_behavior",kind:"scalar",T:8
    }, {
      no:4,name:"match_code",kind:"scalar",T:8
    }, {
      no:5,name:"relevance",kind:"scalar",T:8
    }, {
      no:6,name:"user_awareness",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Nar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nar, e, t)
  }
}, v8h=class Mar extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiLintBugResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug",kind:"message",T:Z8n,oneof:"response"
    }, {
      no:2,name:"background_task_uuid",kind:"scalar",T:9,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Mar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mar, e, t)
  }
}, A8h=class Far extends ie{
  constructor(e){
    super(), this.uuid="", this.userAction="", this.debugMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogUserLintReplyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"user_action",kind:"scalar",T:9
    }, {
      no:3,name:"debug_mode",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Far().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Far().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Far().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Far, e, t)
  }
}, y8h=class Oar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogUserLintReplyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Oar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oar, e, t)
  }
}, w8h=class Uar extends ie{
  constructor(e){
    super(), this.userFeedback=l6n.UNSPECIFIED, this.userFeedbackDetails="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogLinterExplicitUserFeedbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug",kind:"message",T:Z8n
    }, {
      no:3,name:"user_feedback",kind:"enum",T:v.getEnumType(l6n)
    }, {
      no:4,name:"user_feedback_details",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Uar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uar, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CORRECT=1]="CORRECT", n[n.INCORRECT=2]="INCORRECT", n[n.OTHER=3]="OTHER"
})(l6n||(l6n={
  
})), v.util.setEnumType(l6n, "aiserver.v1.LogLinterExplicitUserFeedbackRequest.LinterUserFeedback", [{
  no:0, name:"LINTER_USER_FEEDBACK_UNSPECIFIED"
}, {
  no:1, name:"LINTER_USER_FEEDBACK_CORRECT"
}, {
  no:2, name:"LINTER_USER_FEEDBACK_INCORRECT"
}, {
  no:3, name:"LINTER_USER_FEEDBACK_OTHER"
}
]), _8h=class $ar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogLinterExplicitUserFeedbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new $ar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ar, e, t)
  }
}, C8h=class qar extends ie{
  constructor(e){
    super(), this.currentRules="", this.dismissedBug="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamNewRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_rules",kind:"scalar",T:9
    }, {
      no:2,name:"dismissed_bug",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qar, e, t)
  }
}, S8h=class Har extends ie{
  constructor(e){
    super(), this.id="", this.role="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorHelpConversationMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"role",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Har().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Har().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Har().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Har, e, t)
  }
}, k8h=class Jar extends ie{
  constructor(e){
    super(), this.messages=[], this.userOs="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiCursorHelpRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"messages",kind:"message",T:S8h,repeated:!0
    }, {
      no:2,name:"user_os",kind:"scalar",T:9
    }, {
      no:3,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Jar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jar, e, t)
  }
}, E8h=class Gar extends ie{
  constructor(e){
    super(), this.text="", this.actions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiCursorHelpResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"actions",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gar, e, t)
  }
}, x8h=class War extends ie{
  constructor(e){
    super(), this.currentCommand="", this.commandHistory=[], this.fileDiffHistories=[], this.commitHistory=[], this.pastResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamTerminalAutocompleteRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_command",kind:"scalar",T:9
    }, {
      no:2,name:"command_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:5,name:"git_diff",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"commit_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"past_results",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new War().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new War().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new War().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(War, e, t)
  }
}, IOc=class Qar extends ie{
  constructor(e){
    super(), this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PseudocodeTarget"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"range",kind:"message",T:wF
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Qar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qar, e, t)
  }
}, T8h=class jar extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPseudocodeGeneratorRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"target",kind:"message",T:IOc
    }
    ])
  }
  static fromBinary(e, t){
    return new jar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jar, e, t)
  }
}, I8h=class zar extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPseudocodeGeneratorResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zar, e, t)
  }
}, D8h=class Var extends ie{
  constructor(e){
    super(), this.pseudocode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPseudocodeMapperRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"target",kind:"message",T:IOc
    }, {
      no:1,name:"pseudocode",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Var().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Var().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Var().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Var, e, t)
  }
}, B8h=class Kar extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamPseudocodeMapperResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Kar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kar, e, t)
  }
}, R8h=class Yar extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamTerminalAutocompleteResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"done_stream",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yar, e, t)
  }
}, P8h=class Zar extends ie{
  constructor(e){
    super(), this.callStack=[], this.history=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DebugInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"breakpoint",kind:"message",T:F8h
    }, {
      no:2,name:"call_stack",kind:"message",T:M8h,repeated:!0
    }, {
      no:3,name:"history",kind:"message",T:WB,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zar, e, t)
  }
}, L8h=class Xar extends ie{
  constructor(e){
    super(), this.name="", this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DebugInfo.Variable"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }, {
      no:3,name:"type",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xar().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xar().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xar().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xar, e, t)
  }
}, N8h=class ecr extends ie{
  constructor(e){
    super(), this.name="", this.variables=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DebugInfo.Scope"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"variables",kind:"message",T:L8h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ecr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ecr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ecr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ecr, e, t)
  }
}, M8h=class tcr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.lineNumber=0, this.functionName="", this.scopes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DebugInfo.CallStackFrame"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"line_number",kind:"scalar",T:5
    }, {
      no:3,name:"function_name",kind:"scalar",T:9
    }, {
      no:4,name:"scopes",kind:"message",T:N8h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tcr, e, t)
  }
}, F8h=class ncr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.lineNumber=0, this.linesBeforeBreakpoint=[], this.linesAfterBreakpoint=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DebugInfo.Breakpoint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"line_number",kind:"scalar",T:5
    }, {
      no:3,name:"lines_before_breakpoint",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"lines_after_breakpoint",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"exception_info",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ncr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ncr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ncr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ncr, e, t)
  }
}, iYe=class icr extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.codeBlocks=[], this.documentationIdentifiers=[], this.requestId="", this.conversationId="", this.quotes=[], this.externalLinks=[], this.commitNotes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:9,name:"request_id",kind:"scalar",T:9
    }, {
      no:10,name:"linter_errors",kind:"message",T:aN
    }, {
      no:11,name:"summary",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"summary_up_until_index",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"allow_long_file_scan",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"is_bash",kind:"scalar",T:8,opt:!0
    }, {
      no:15,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:16,name:"can_handle_filenames_after_language_ids",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"use_web",kind:"scalar",T:9,opt:!0
    }, {
      no:18,name:"quotes",kind:"message",T:q9o,repeated:!0
    }, {
      no:19,name:"debug_info",kind:"message",T:P8h,opt:!0
    }, {
      no:20,name:"workspace_id",kind:"scalar",T:9,opt:!0
    }, {
      no:21,name:"external_links",kind:"message",T:SEh,repeated:!0
    }, {
      no:23,name:"commit_notes",kind:"message",T:J9o,repeated:!0
    }, {
      no:22,name:"long_context_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:24,name:"is_eval",kind:"scalar",T:8,opt:!0
    }, {
      no:26,name:"desired_max_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:25,name:"context_ast",kind:"message",T:z4c
    }, {
      no:27,name:"is_composer",kind:"scalar",T:8,opt:!0
    }, {
      no:28,name:"runnable_code_blocks",kind:"scalar",T:8,opt:!0
    }, {
      no:29,name:"should_cache",kind:"scalar",T:8,opt:!0
    }, {
      no:30,name:"allow_model_fallbacks",kind:"scalar",T:8,opt:!0
    }, {
      no:31,name:"number_of_times_shown_fallback_model_warning",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new icr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new icr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new icr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(icr, e, t)
  }
}, O8h=class rcr extends ie{
  constructor(e){
    super(), this.query="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsInitialQueriesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rcr, e, t)
  }
}, U8h=class scr extends ie{
  constructor(e){
    super(), this.hydeQuery="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsInitialQueriesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hyde_query",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new scr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new scr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new scr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(scr, e, t)
  }
}, $8h=class ocr extends ie{
  constructor(e){
    super(), this.file="", this.ranges=[], this.query="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsUnderneathRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file",kind:"scalar",T:9
    }, {
      no:2,name:"ranges",kind:"message",T:tae,repeated:!0
    }, {
      no:3,name:"query",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ocr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ocr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ocr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ocr, e, t)
  }
}, q8h=class acr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsUnderneathResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new acr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new acr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new acr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(acr, e, t)
  }
}, H8h=class ccr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ccr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ccr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ccr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ccr, e, t)
  }
}, J8h=class lcr extends ie{
  constructor(e){
    super(), this.potentialLoc="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentialLocsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"potential_loc",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lcr, e, t)
  }
}, iUo=class ucr extends ie{
  constructor(e){
    super(), this.conversation=[], this.documentationIdentifiers=[], this.externalLinks=[], this.diffsForCompressingFiles=[], this.multiFileLinterErrors=[], this.fileDiffHistories=[], this.additionalRankedContext=[], this.quotes=[], this.conversationId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerChatRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"allow_long_file_scan",kind:"scalar",T:8,opt:!0
    }, {
      no:3,name:"explicit_context",kind:"message",T:_F
    }, {
      no:4,name:"can_handle_filenames_after_language_ids",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"model_details",kind:"message",T:Yf
    }, {
      no:6,name:"linter_errors",kind:"message",T:aN
    }, {
      no:7,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"use_web",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"external_links",kind:"message",T:s5t,repeated:!0
    }, {
      no:10,name:"project_context",kind:"message",T:Qw,opt:!0
    }, {
      no:11,name:"diffs_for_compressing_files",kind:"message",T:G8h,repeated:!0
    }, {
      no:12,name:"compress_edits",kind:"scalar",T:8,opt:!0
    }, {
      no:13,name:"should_cache",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"multi_file_linter_errors",kind:"message",T:aN,repeated:!0
    }, {
      no:15,name:"current_file",kind:"message",T:AS
    }, {
      no:16,name:"recent_edits",kind:"message",T:W8h,opt:!0
    }, {
      no:17,name:"use_reference_composer_diff_prompt",kind:"scalar",T:8,opt:!0
    }, {
      no:18,name:"file_diff_histories",kind:"message",T:B6o,repeated:!0
    }, {
      no:19,name:"use_new_compression_scheme",kind:"scalar",T:8,opt:!0
    }, {
      no:20,name:"additional_ranked_context",kind:"message",T:LFc,repeated:!0
    }, {
      no:21,name:"quotes",kind:"message",T:q9o,repeated:!0
    }, {
      no:22,name:"willing_to_pay_extra_for_speed",kind:"scalar",T:8,opt:!0
    }, {
      no:23,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:24,name:"use_unified_chat_prompt",kind:"scalar",T:8,opt:!0
    }, {
      no:25,name:"use_full_inputs_context",kind:"scalar",T:8,opt:!0
    }, {
      no:26,name:"is_resume",kind:"scalar",T:8,opt:!0
    }, {
      no:27,name:"context_bank_session_id",kind:"scalar",T:9,opt:!0
    }, {
      no:28,name:"context_bank_version",kind:"scalar",T:5,opt:!0
    }, {
      no:31,name:"context_bank_encryption_key",kind:"scalar",T:12,opt:!0
    }, {
      no:29,name:"uses_codebase_results",kind:"message",T:m9t
    }
    ])
  }
  static fromBinary(e, t){
    return new ucr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ucr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ucr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ucr, e, t)
  }
}, G8h=class dcr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.redRanges=[], this.redRangesReversed=[], this.startHash="", this.endHash="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerChatRequest.RedDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"red_ranges",kind:"message",T:tae,repeated:!0
    }, {
      no:3,name:"red_ranges_reversed",kind:"message",T:tae,repeated:!0
    }, {
      no:4,name:"start_hash",kind:"scalar",T:9
    }, {
      no:5,name:"end_hash",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new dcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dcr, e, t)
  }
}, W8h=class hcr extends ie{
  constructor(e){
    super(), this.codeBlockInfo=[], this.finalFileValues=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerChatRequest.RecentEdits"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_block_info",kind:"message",T:Q8h,repeated:!0
    }, {
      no:2,name:"final_file_values",kind:"message",T:j8h,repeated:!0
    }, {
      no:3,name:"edits_belong_to_composer_generation_uuid",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hcr, e, t)
  }
}, Q8h=class mcr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerChatRequest.RecentEdits.CodeBlockInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"content_before",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"content_after",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"generation_uuid",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"version",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mcr, e, t)
  }
}, j8h=class pcr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetComposerChatRequest.RecentEdits.FileInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new pcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pcr, e, t)
  }
}, NgA=class gcr extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.codeBlocks=[], this.documentationIdentifiers=[], this.query="", this.rerankResults=!1, this.contextResults={
      case:void 0
    }, this.rerankResultsV2=!1, this.conversationId="", this.canHandleFilenamesAfterLanguageIds=!1, this.longContextMode=!1, this.isEval=!1, this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamComposerContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:7,name:"model_details",kind:"message",T:Yf
    }, {
      no:8,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:9,name:"query",kind:"scalar",T:9
    }, {
      no:10,name:"code_context",kind:"message",T:z8h
    }, {
      no:11,name:"rerank_results",kind:"scalar",T:8
    }, {
      no:12,name:"file_search_results",kind:"message",T:o6n,oneof:"context_results"
    }, {
      no:13,name:"code_search_results",kind:"message",T:m9t,oneof:"context_results"
    }, {
      no:14,name:"linter_errors",kind:"message",T:aN
    }, {
      no:15,name:"is_bash",kind:"scalar",T:8,opt:!0
    }, {
      no:16,name:"rerank_results_v2",kind:"scalar",T:8
    }, {
      no:17,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:18,name:"can_handle_filenames_after_language_ids",kind:"scalar",T:8
    }, {
      no:19,name:"long_context_mode",kind:"scalar",T:8
    }, {
      no:20,name:"is_eval",kind:"scalar",T:8
    }, {
      no:21,name:"request_id",kind:"scalar",T:9
    }, {
      no:22,name:"desired_max_tokens",kind:"scalar",T:5,opt:!0
    }, {
      no:23,name:"runnable_code_blocks",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gcr, e, t)
  }
}, z8h=class fcr extends ie{
  constructor(e){
    super(), this.chunks=[], this.scoredChunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamComposerContextRequest.CodeContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"chunks",kind:"message",T:WB,repeated:!0
    }, {
      no:2,name:"scored_chunks",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fcr, e, t)
  }
}, V8h=class bcr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckUsageBasedPriceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"usage_event_details",kind:"message",T:tUo
    }
    ])
  }
  static fromBinary(e, t){
    return new bcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bcr, e, t)
  }
}, K8h=class vcr extends ie{
  constructor(e){
    super(), this.markdownResponse="", this.cents=0, this.priceId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckUsageBasedPriceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"markdown_response",kind:"scalar",T:9
    }, {
      no:2,name:"cents",kind:"scalar",T:5
    }, {
      no:3,name:"price_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vcr, e, t)
  }
}, DOc=class Acr extends ie{
  constructor(e){
    super(), this.origRequestId="", this.usageUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckQueuePositionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"orig_request_id",kind:"scalar",T:9
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }, {
      no:3,name:"usage_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Acr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Acr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Acr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Acr, e, t)
  }
}, Y8h=class ycr extends ie{
  constructor(e){
    super(), this.position=0, this.hitHardLimit=!1, this.couldEnableUsageBasedPricingToSkip=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckQueuePositionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"position",kind:"scalar",T:5
    }, {
      no:2,name:"seconds_left_to_wait",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"new_queue_position",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"hit_hard_limit",kind:"scalar",T:8
    }, {
      no:4,name:"could_enable_usage_based_pricing_to_skip",kind:"scalar",T:8
    }, {
      no:5,name:"usage_event_details",kind:"message",T:tUo
    }, {
      no:6,name:"custom_link",kind:"message",T:Z8h
    }, {
      no:8,name:"model_for_slow_pool_nudge_data",kind:"message",T:X8h,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ycr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ycr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ycr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ycr, e, t)
  }
}, Z8h=class wcr extends ie{
  constructor(e){
    super(), this.address="", this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckQueuePositionResponse.CustomLink"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"address",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new wcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wcr, e, t)
  }
}, X8h=class _cr extends ie{
  constructor(e){
    super(), this.model="", this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckQueuePositionResponse.ModelForSlowPoolNudgeData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _cr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _cr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _cr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_cr, e, t)
  }
}, e6h=class Ccr extends ie{
  constructor(e){
    super(), this.fileContent="", this.languageId="", this.commandId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsolatedTreesitterRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_content",kind:"scalar",T:9
    }, {
      no:2,name:"language_id",kind:"scalar",T:9
    }, {
      no:3,name:"command_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ccr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ccr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ccr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ccr, e, t)
  }
}, t6h=class Scr extends ie{
  constructor(e){
    super(), this.items=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsolatedTreesitterResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"items",kind:"message",T:n6h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Scr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Scr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Scr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Scr, e, t)
  }
}, BOc=class kcr extends ie{
  constructor(e){
    super(), this.row=0, this.column=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsolatedTreesitterResponse.TreeSitterPosition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"row",kind:"scalar",T:5
    }, {
      no:2,name:"column",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new kcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kcr, e, t)
  }
}, n6h=class Ecr extends ie{
  constructor(e){
    super(), this.symbolName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsolatedTreesitterResponse.TreesitterSymbolNameItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"symbol_name",kind:"scalar",T:9
    }, {
      no:2,name:"start_position",kind:"message",T:BOc,opt:!0
    }, {
      no:3,name:"end_position",kind:"message",T:BOc,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ecr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ecr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ecr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ecr, e, t)
  }
}, ROc=class xcr extends ie{
  constructor(e){
    super(), this.query="", this.answerPlaceholder="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSimplePromptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"answer_placeholder",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new xcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xcr, e, t)
  }
}, i6h=class Tcr extends ie{
  constructor(e){
    super(), this.result="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSimplePromptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"result",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Tcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tcr, e, t)
  }
}, r6h=class Icr extends ie{
  constructor(e){
    super(), this.query="", this.modelName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPassthroughPromptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"model_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Icr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Icr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Icr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Icr, e, t)
  }
}, s6h=class Dcr extends ie{
  constructor(e){
    super(), this.result="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPassthroughPromptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"result",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Dcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dcr, e, t)
  }
}, o6h=class Bcr extends ie{
  constructor(e){
    super(), this.didFit=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckLongFilesFitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"did_fit",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Bcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bcr, e, t)
  }
}, a6h=class Rcr extends ie{
  constructor(e){
    super(), this.promptType=u6n.UNSPECIFIED, this.query="", this.bucketId="", this.queryStrategy="", this.tokenLimit=0, this.rerankingStrategy=d6n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEvaluationPromptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"prompt_type",kind:"enum",T:v.getEnumType(u6n)
    }, {
      no:2,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"query",kind:"scalar",T:9
    }, {
      no:4,name:"bucket_id",kind:"scalar",T:9
    }, {
      no:5,name:"query_strategy",kind:"scalar",T:9
    }, {
      no:6,name:"token_limit",kind:"scalar",T:5
    }, {
      no:7,name:"reranking_strategy",kind:"enum",T:v.getEnumType(d6n)
    }
    ])
  }
  static fromBinary(e, t){
    return new Rcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rcr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.GENERATE=1]="GENERATE", n[n.CHAT=2]="CHAT"
})(u6n||(u6n={
  
})), v.util.setEnumType(u6n, "aiserver.v1.GetEvaluationPromptRequest.EvaluationPromptType", [{
  no:0, name:"EVALUATION_PROMPT_TYPE_UNSPECIFIED"
}, {
  no:1, name:"EVALUATION_PROMPT_TYPE_GENERATE"
}, {
  no:2, name:"EVALUATION_PROMPT_TYPE_CHAT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DISTANCE_ONLY=1]="DISTANCE_ONLY", n[n.GPT4_RELEVANCE=2]="GPT4_RELEVANCE"
})(d6n||(d6n={
  
})), v.util.setEnumType(d6n, "aiserver.v1.GetEvaluationPromptRequest.RerankingStrategy", [{
  no:0, name:"RERANKING_STRATEGY_UNSPECIFIED"
}, {
  no:1, name:"RERANKING_STRATEGY_DISTANCE_ONLY"
}, {
  no:2, name:"RERANKING_STRATEGY_GPT4_RELEVANCE"
}
]), c6h=class Pcr extends ie{
  constructor(e){
    super(), this.prompt="", this.tokenCount=0, this.estimatedTokenCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEvaluationPromptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"prompt",kind:"scalar",T:9
    }, {
      no:2,name:"token_count",kind:"scalar",T:5
    }, {
      no:3,name:"estimated_token_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Pcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pcr, e, t)
  }
}, l6h=class Lcr extends ie{
  constructor(e){
    super(), this.conversation=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatTitleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lcr, e, t)
  }
}, u6h=class Ncr extends ie{
  constructor(e){
    super(), this.title="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatTitleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ncr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ncr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ncr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ncr, e, t)
  }
}, MgA=class Mcr extends ie{
  constructor(e){
    super(), this.prompt="", this.tokenCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetChatPromptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"prompt",kind:"scalar",T:9
    }, {
      no:2,name:"token_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Mcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mcr, e, t)
  }
}, d6h=class Fcr extends ie{
  constructor(e){
    super(), this.serverStartTime=0, this.serverFirstTokenTime=0, this.serverRequestSentTime=0, this.serverEndTime=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServerTimingInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_start_time",kind:"scalar",T:1
    }, {
      no:2,name:"server_first_token_time",kind:"scalar",T:1
    }, {
      no:3,name:"server_request_sent_time",kind:"scalar",T:1
    }, {
      no:4,name:"server_end_time",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new Fcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fcr, e, t)
  }
}, JRe=class Ocr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:22,name:"server_bubble_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"debugging_only_chat_prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"debugging_only_token_count",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"document_citation",kind:"message",T:I6o
    }, {
      no:5,name:"filled_prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"is_big_file",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"intermediate_text",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"is_using_slow_request",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"chunk_identity",kind:"message",T:m6h,opt:!0
    }, {
      no:9,name:"docs_reference",kind:"message",T:X5t,opt:!0
    }, {
      no:11,name:"web_citation",kind:"message",T:NFc,opt:!0
    }, {
      no:12,name:"status_updates",kind:"message",T:FFc,opt:!0
    }, {
      no:13,name:"timing_info",kind:"message",T:d6h,opt:!0
    }, {
      no:14,name:"symbol_link",kind:"message",T:y8n,opt:!0
    }, {
      no:15,name:"file_link",kind:"message",T:P6o,opt:!0
    }, {
      no:16,name:"conversation_summary",kind:"message",T:ohe,opt:!0
    }, {
      no:17,name:"service_status_update",kind:"message",T:e9t,opt:!0
    }, {
      no:18,name:"used_code",kind:"message",T:h6h,opt:!0
    }, {
      no:26,name:"stop_using_dsv3_agentic_model",kind:"scalar",T:8,opt:!0
    }, {
      no:27,name:"usage_uuid",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ocr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ocr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ocr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ocr, e, t)
  }
}, h6h=class Ucr extends ie{
  constructor(e){
    super(), this.codeResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatResponse.UsedCode"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ucr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ucr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ucr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ucr, e, t)
  }
}, m6h=class $cr extends ie{
  constructor(e){
    super(), this.fileName="", this.startLine=0, this.endLine=0, this.text="", this.chunkType=H9e.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatResponse.ChunkIdentity"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_name",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line",kind:"scalar",T:5
    }, {
      no:4,name:"text",kind:"scalar",T:9
    }, {
      no:5,name:"chunk_type",kind:"enum",T:v.getEnumType(H9e)
    }
    ])
  }
  static fromBinary(e, t){
    return new $cr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $cr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $cr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($cr, e, t)
  }
}, p6h=class qcr extends ie{
  constructor(e){
    super(), this.didWarmCache=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WarmComposerCacheResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"did_warm_cache",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new qcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qcr, e, t)
  }
}, g6h=class Hcr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WarmChatCacheRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request",kind:"message",T:iYe
    }
    ])
  }
  static fromBinary(e, t){
    return new Hcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hcr, e, t)
  }
}, f6h=class Jcr extends ie{
  constructor(e){
    super(), this.didWarmCache=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WarmChatCacheResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"did_warm_cache",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Jcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jcr, e, t)
  }
}, b6h=class Gcr extends ie{
  constructor(e){
    super(), this.startLine=0, this.lines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SurroundingLines"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gcr, e, t)
  }
}, v6h=class Wcr extends ie{
  constructor(e){
    super(), this.suggestionsFromEditor=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCompletionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_identifier",kind:"message",T:y6h
    }, {
      no:2,name:"cursor_position",kind:"message",T:I9
    }, {
      no:3,name:"surrounding_lines",kind:"message",T:b6h
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"suggestions_from_editor",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wcr, e, t)
  }
}, A6h=class Qcr extends ie{
  constructor(e){
    super(), this.completion="", this.score=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCompletionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"completion",kind:"scalar",T:9
    }, {
      no:2,name:"score",kind:"scalar",T:2
    }, {
      no:3,name:"debugging_only_completion_prompt",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qcr, e, t)
  }
}, y6h=class jcr extends ie{
  constructor(e){
    super(), this.projectUuid="", this.relativePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UniqueFileIdentifier"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"project_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"relative_path",kind:"scalar",T:9
    }, {
      no:3,name:"language_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new jcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jcr, e, t)
  }
}, w6h=class zcr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserInfoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new zcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zcr, e, t)
  }
}, _6h=class Vcr extends ie{
  constructor(e){
    super(), this.gpt4Requests=0, this.gpt4MaxRequests=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UsageData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"gpt4_requests",kind:"scalar",T:5
    }, {
      no:3,name:"gpt4_max_requests",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Vcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vcr, e, t)
  }
}, C6h=class Kcr extends ie{
  constructor(e){
    super(), this.userId="", this.jupyterToken="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserInfoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:9
    }, {
      no:2,name:"jupyter_token",kind:"scalar",T:9
    }, {
      no:3,name:"usage",kind:"message",T:_6h
    }
    ])
  }
  static fromBinary(e, t){
    return new Kcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kcr, e, t)
  }
}, S6h=class Ycr extends ie{
  constructor(e){
    super(), this.generationUuid="", this.completion="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"generation_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"completion",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ycr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ycr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ycr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ycr, e, t)
  }
}, POc=class Zcr extends ie{
  constructor(e){
    super(), this.action={
      case:void 0
    }, this.reasoning="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"skip_action",kind:"message",T:k6h,oneof:"action"
    }, {
      no:2,name:"edit_action",kind:"message",T:E6h,oneof:"action"
    }, {
      no:3,name:"create_action",kind:"message",T:x6h,oneof:"action"
    }, {
      no:4,name:"run_action",kind:"message",T:T6h,oneof:"action"
    }, {
      no:5,name:"reasoning",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Zcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zcr, e, t)
  }
}, k6h=class Xcr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckResponse.SkipAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Xcr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xcr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xcr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xcr, e, t)
  }
}, E6h=class elr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckResponse.EditAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new elr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new elr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new elr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(elr, e, t)
  }
}, x6h=class tlr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckResponse.CreateAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tlr, e, t)
  }
}, T6h=class nlr extends ie{
  constructor(e){
    super(), this.command="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeCheckResponse.RunAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new nlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nlr, e, t)
  }
}, I6h=class ilr extends ie{
  constructor(e){
    super(), this.generationUuid="", this.completion="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"generation_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"completion",kind:"scalar",T:9
    }, {
      no:3,name:"action",kind:"message",T:POc
    }
    ])
  }
  static fromBinary(e, t){
    return new ilr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ilr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ilr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ilr, e, t)
  }
}, D6h=class rlr extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"update_status",kind:"message",T:B6h,oneof:"event"
    }
    ])
  }
  static fromBinary(e, t){
    return new rlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rlr, e, t)
  }
}, B6h=class slr extends ie{
  constructor(e){
    super(), this.status="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeResponse.UpdateStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new slr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new slr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new slr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(slr, e, t)
  }
}, R6h=class olr extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DoThisForMeResponseWrapped"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"real_response",kind:"message",T:D6h,oneof:"response"
    }, {
      no:2,name:"background_task_uuid",kind:"scalar",T:9,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new olr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new olr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new olr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(olr, e, t)
  }
}, P6h=class alr extends ie{
  constructor(e){
    super(), this.toolformerSessionId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatToolformerContinueRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"toolformer_session_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_result",kind:"message",T:S9n
    }
    ])
  }
  static fromBinary(e, t){
    return new alr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new alr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new alr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(alr, e, t)
  }
}, LOc=class clr extends ie{
  constructor(e){
    super(), this.responseType={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatToolformerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"toolformer_session_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"output",kind:"message",T:L6h,oneof:"response_type"
    }, {
      no:3,name:"tool_action",kind:"message",T:M6h,oneof:"response_type"
    }, {
      no:4,name:"thought",kind:"message",T:N6h,oneof:"response_type"
    }
    ])
  }
  static fromBinary(e, t){
    return new clr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new clr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new clr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(clr, e, t)
  }
}, L6h=class llr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatToolformerResponse.Output"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new llr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new llr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new llr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(llr, e, t)
  }
}, N6h=class ulr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatToolformerResponse.Thought"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ulr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ulr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ulr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ulr, e, t)
  }
}, M6h=class dlr extends ie{
  constructor(e){
    super(), this.userFacingText="", this.rawModelOutput="", this.moreToCome=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamChatToolformerResponse.ToolAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_facing_text",kind:"scalar",T:9
    }, {
      no:3,name:"raw_model_output",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call",kind:"message",T:w8o
    }, {
      no:4,name:"more_to_come",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new dlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dlr, e, t)
  }
}, NOc=class hlr extends ie{
  constructor(e){
    super(), this.text="", this.attachedCodeChunks=[], this.repositories=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInstruction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"attached_code_chunks",kind:"message",T:F6h,repeated:!0
    }, {
      no:3,name:"current_file",kind:"message",T:AS
    }, {
      no:4,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:5,name:"explicit_context",kind:"message",T:_F
    }
    ])
  }
  static fromBinary(e, t){
    return new hlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hlr, e, t)
  }
}, F6h=class mlr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLineNumber=0, this.lines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInstruction.CodeChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mlr, e, t)
  }
}, MOc=class plr extends ie{
  constructor(e){
    super(), this.text="", this.attachedCodeChunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskUserMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"attached_code_chunks",kind:"message",T:O6h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new plr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new plr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new plr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(plr, e, t)
  }
}, O6h=class glr extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLineNumber=0, this.lines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskUserMessage.CodeChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new glr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new glr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new glr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(glr, e, t)
  }
}, U6h=class flr extends ie{
  constructor(e){
    super(), this.thought="", this.automated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PushAiThoughtRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"thought",kind:"scalar",T:9
    }, {
      no:2,name:"cmd_k_debug_info",kind:"message",T:fve
    }, {
      no:3,name:"automated",kind:"scalar",T:8
    }, {
      no:4,name:"metadata",kind:"message",T:$6h,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new flr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new flr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new flr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(flr, e, t)
  }
}, $6h=class blr extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PushAiThoughtRequest.Metadata"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"accepted_hallucinated_function_event",kind:"message",T:q6h,oneof:"event"
    }
    ])
  }
  static fromBinary(e, t){
    return new blr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new blr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new blr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(blr, e, t)
  }
}, q6h=class vlr extends ie{
  constructor(e){
    super(), this.implementationUuid="", this.hallucinatedFunctionUuid="", this.implementation="", this.source="", this.implementationReqid="", this.planReqid="", this.reflectionReqid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PushAiThoughtRequest.Metadata.AcceptedHallucinatedFunctionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"implementation_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"hallucinated_function_uuid",kind:"scalar",T:9
    }, {
      no:3,name:"implementation",kind:"scalar",T:9
    }, {
      no:4,name:"source",kind:"scalar",T:9
    }, {
      no:5,name:"implementation_reqid",kind:"scalar",T:9
    }, {
      no:6,name:"plan_reqid",kind:"scalar",T:9
    }, {
      no:7,name:"reflection_reqid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vlr, e, t)
  }
}, H6h=class Alr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PushAiThoughtResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Alr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Alr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Alr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Alr, e, t)
  }
}, J6h=class ylr extends ie{
  constructor(e){
    super(), this.modelOutput="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckDoableAsTaskRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_output",kind:"scalar",T:9
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new ylr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ylr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ylr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ylr, e, t)
  }
}, G6h=class wlr extends ie{
  constructor(e){
    super(), this.doableAsTask=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckDoableAsTaskResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"doable_as_task",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new wlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wlr, e, t)
  }
}, W6h=class _lr extends ie{
  constructor(e){
    super(), this.debuggingOnlyLiveMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InterfaceAgentInitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_details",kind:"message",T:Yf
    }, {
      no:2,name:"debugging_only_live_mode",kind:"scalar",T:8
    }, {
      no:3,name:"interface_agent_client_state",kind:"message",T:Z4c
    }
    ])
  }
  static fromBinary(e, t){
    return new _lr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _lr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _lr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_lr, e, t)
  }
}, Q6h=class Clr extends ie{
  constructor(e){
    super(), this.taskUuid="", this.humanReadableTitle="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InterfaceAgentInitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"human_readable_title",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Clr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Clr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Clr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Clr, e, t)
  }
}, j6h=class Slr extends ie{
  constructor(e){
    super(), this.taskUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamInterfaceAgentStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Slr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Slr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Slr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Slr, e, t)
  }
}, z6h=class klr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamInterfaceAgentStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"message",T:X4c
    }
    ])
  }
  static fromBinary(e, t){
    return new klr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new klr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new klr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(klr, e, t)
  }
}, V6h=class Elr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskGetInterfaceAgentStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"interface_agent_client_state",kind:"message",T:Z4c
    }
    ])
  }
  static fromBinary(e, t){
    return new Elr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Elr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Elr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Elr, e, t)
  }
}, K6h=class xlr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskGetInterfaceAgentStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"message",T:X4c
    }
    ])
  }
  static fromBinary(e, t){
    return new xlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xlr, e, t)
  }
}, Y6h=class Tlr extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskGetInterfaceAgentStatusResponseWrapped"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"real_response",kind:"message",T:K6h,oneof:"response"
    }, {
      no:2,name:"background_task_uuid",kind:"scalar",T:9,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Tlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tlr, e, t)
  }
}, Z6h=class Ilr extends ie{
  constructor(e){
    super(), this.debuggingOnlyLiveMode=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"instruction",kind:"message",T:NOc
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }, {
      no:3,name:"debugging_only_live_mode",kind:"scalar",T:8
    }, {
      no:4,name:"engine_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ilr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ilr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ilr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ilr, e, t)
  }
}, X6h=class Dlr extends ie{
  constructor(e){
    super(), this.taskUuid="", this.humanReadableTitle="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"human_readable_title",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Dlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dlr, e, t)
  }
}, eUh=class Blr extends ie{
  constructor(e){
    super(), this.taskUuid="", this.startSequenceNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamLogRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"start_sequence_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Blr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Blr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Blr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Blr, e, t)
  }
}, tUh=class Rlr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskLogOutput"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Rlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rlr, e, t)
  }
}, nUh=class Plr extends ie{
  constructor(e){
    super(), this.userFacingText="", this.rawModelOutput="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskLogToolAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_facing_text",kind:"scalar",T:9
    }, {
      no:3,name:"raw_model_output",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call",kind:"message",T:w8o
    }
    ])
  }
  static fromBinary(e, t){
    return new Plr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Plr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Plr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Plr, e, t)
  }
}, iUh=class Llr extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskLogThought"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Llr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Llr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Llr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Llr, e, t)
  }
}, rUh=class Nlr extends ie{
  constructor(e){
    super(), this.actionSequenceNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskLogToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_result",kind:"message",T:S9n
    }, {
      no:2,name:"action_sequence_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Nlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nlr, e, t)
  }
}, sUh=class Mlr extends ie{
  constructor(e){
    super(), this.sequenceNumber=0, this.isNotDone=!1, this.logItem={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskLogItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sequence_number",kind:"scalar",T:5
    }, {
      no:2,name:"is_not_done",kind:"scalar",T:8
    }, {
      no:3,name:"output",kind:"message",T:tUh,oneof:"log_item"
    }, {
      no:4,name:"tool_action",kind:"message",T:nUh,oneof:"log_item"
    }, {
      no:5,name:"thought",kind:"message",T:iUh,oneof:"log_item"
    }, {
      no:6,name:"user_message",kind:"message",T:MOc,oneof:"log_item"
    }, {
      no:7,name:"instruction",kind:"message",T:NOc,oneof:"log_item"
    }, {
      no:8,name:"tool_result",kind:"message",T:rUh,oneof:"log_item"
    }
    ])
  }
  static fromBinary(e, t){
    return new Mlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mlr, e, t)
  }
}, oUh=class Flr extends ie{
  constructor(e){
    super(), this.taskUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInfoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Flr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Flr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Flr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Flr, e, t)
  }
}, aUh=class Olr extends ie{
  constructor(e){
    super(), this.taskUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskPauseRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Olr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Olr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Olr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Olr, e, t)
  }
}, cUh=class Ulr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskPauseResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ulr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ulr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ulr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ulr, e, t)
  }
}, FOc=class $lr extends ie{
  constructor(e){
    super(), this.humanReadableTitle="", this.taskStatus=h9t.UNSPECIFIED, this.lastLogSequenceNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskInfoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"human_readable_title",kind:"scalar",T:9
    }, {
      no:2,name:"task_status",kind:"enum",T:v.getEnumType(h9t)
    }, {
      no:3,name:"last_log_sequence_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new $lr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $lr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $lr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($lr, e, t)
  }
}, lUh=class qlr extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamLogResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"streamed_log_item",kind:"message",T:sUh,oneof:"response"
    }, {
      no:2,name:"info_update",kind:"message",T:uUh,oneof:"response"
    }, {
      no:3,name:"initial_task_info",kind:"message",T:FOc,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new qlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qlr, e, t)
  }
}, uUh=class Hlr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskStreamLogResponse.InfoUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"human_readable_title",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"task_status",kind:"enum",T:v.getEnumType(h9t),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hlr, e, t)
  }
}, dUh=class Jlr extends ie{
  constructor(e){
    super(), this.taskUuid="", this.actionSequenceNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskProvideResultRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"action_sequence_number",kind:"scalar",T:5
    }, {
      no:3,name:"tool_result",kind:"message",T:S9n
    }
    ])
  }
  static fromBinary(e, t){
    return new Jlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jlr, e, t)
  }
}, hUh=class Glr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskProvideResultResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Glr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Glr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Glr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Glr, e, t)
  }
}, mUh=class Wlr extends ie{
  constructor(e){
    super(), this.taskUuid="", this.wantsAttentionRightNow=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskSendMessageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"user_message",kind:"message",T:MOc
    }, {
      no:3,name:"wants_attention_right_now",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Wlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wlr, e, t)
  }
}, pUh=class Qlr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TaskSendMessageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Qlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qlr, e, t)
  }
}, gUh=class jlr extends ie{
  constructor(e){
    super(), this.feedback="", this.feedbackType=h6n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportFeedbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"feedback",kind:"scalar",T:9
    }, {
      no:2,name:"feedback_type",kind:"enum",T:v.getEnumType(h6n)
    }
    ])
  }
  static fromBinary(e, t){
    return new jlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jlr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LOW_PRIORITY=1]="LOW_PRIORITY", n[n.HIGH_PRIORITY=2]="HIGH_PRIORITY"
})(h6n||(h6n={
  
})), v.util.setEnumType(h6n, "aiserver.v1.ReportFeedbackRequest.FeedbackType", [{
  no:0, name:"FEEDBACK_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FEEDBACK_TYPE_LOW_PRIORITY"
}, {
  no:2, name:"FEEDBACK_TYPE_HIGH_PRIORITY"
}
]), fUh=class zlr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportFeedbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new zlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zlr, e, t)
  }
}, bUh=class Vlr extends ie{
  constructor(e){
    super(), this.relativePathToCursorFolder="", this.contents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path_to_cursor_folder",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Vlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vlr, e, t)
  }
}, vUh=class Klr extends ie{
  constructor(e){
    super(), this.screenshots=[], this.conversation=[], this.logs=[], this.consoleLogs="", this.cursorVersion="", this.os="", this.protoUrl="", this.failingRequstId="", this.connectionErrorRaw="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"screenshots",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"current_file",kind:"message",T:AS
    }, {
      no:3,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:4,name:"logs",kind:"message",T:bUh,repeated:!0
    }, {
      no:5,name:"console_logs",kind:"scalar",T:9
    }, {
      no:6,name:"cursor_version",kind:"scalar",T:9
    }, {
      no:7,name:"os",kind:"scalar",T:9
    }, {
      no:8,name:"proto_url",kind:"scalar",T:9
    }, {
      no:9,name:"failing_requst_id",kind:"scalar",T:9
    }, {
      no:10,name:"connection_error_raw",kind:"scalar",T:9
    }, {
      no:12,name:"debug_info",kind:"message",T:fve
    }, {
      no:13,name:"connect_error_code",kind:"scalar",T:5,opt:!0
    }, {
      no:14,name:"error_detail_code",kind:"enum",T:v.getEnumType(yc),opt:!0
    }, {
      no:15,name:"error_detail_title",kind:"scalar",T:9,opt:!0
    }, {
      no:16,name:"error_detail_detail",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Klr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Klr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Klr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Klr, e, t)
  }
}, AUh=class Ylr extends ie{
  constructor(e){
    super(), this.bug="", this.bugType=RW.UNSPECIFIED, this.contactEmail="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportBugRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug",kind:"scalar",T:9
    }, {
      no:2,name:"bug_type",kind:"enum",T:v.getEnumType(RW)
    }, {
      no:3,name:"context",kind:"message",T:vUh
    }, {
      no:4,name:"contact_email",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ylr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ylr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ylr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ylr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LOW=1]="LOW", n[n.MEDIUM=2]="MEDIUM", n[n.URGENT=3]="URGENT", n[n.CRASH=4]="CRASH", n[n.CONNECTION_ERROR=5]="CONNECTION_ERROR", n[n.IDEA=6]="IDEA", n[n.MISC_AUTOMATIC_ERROR=7]="MISC_AUTOMATIC_ERROR"
})(RW||(RW={
  
})), v.util.setEnumType(RW, "aiserver.v1.ReportBugRequest.BugType", [{
  no:0, name:"BUG_TYPE_UNSPECIFIED"
}, {
  no:1, name:"BUG_TYPE_LOW"
}, {
  no:2, name:"BUG_TYPE_MEDIUM"
}, {
  no:3, name:"BUG_TYPE_URGENT"
}, {
  no:4, name:"BUG_TYPE_CRASH"
}, {
  no:5, name:"BUG_TYPE_CONNECTION_ERROR"
}, {
  no:6, name:"BUG_TYPE_IDEA"
}, {
  no:7, name:"BUG_TYPE_MISC_AUTOMATIC_ERROR"
}
]), yUh=class Zlr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportBugResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zlr, e, t)
  }
}, wUh=class Xlr extends ie{
  constructor(e){
    super(), this.markers=[], this.iterationNumber=0, this.sequenceId="", this.userInstruction="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"markers",kind:"message",T:_Uh,repeated:!0
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }, {
      no:3,name:"iteration_number",kind:"scalar",T:5
    }, {
      no:4,name:"sequence_id",kind:"scalar",T:9
    }, {
      no:5,name:"user_instruction",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Xlr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xlr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xlr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xlr, e, t)
  }
}, _Uh=class eur extends ie{
  constructor(e){
    super(), this.lines=[], this.startLine=0, this.endLineInclusive=0, this.message="", this.relativeWorkspacePath="", this.relatedInformation=[], this.contextRanges=[], this.ancestorTypeDefinitions=[], this.insertedSymbolTypes=[], this.quickFixes=[], this.startColumn=0, this.endColumnInclusive=0, this.classInformation=[], this.functionSignatures=[], this.snapshot=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_inclusive",kind:"scalar",T:5
    }, {
      no:4,name:"message",kind:"scalar",T:9
    }, {
      no:5,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:6,name:"related_information",kind:"message",T:CUh,repeated:!0
    }, {
      no:7,name:"context_ranges",kind:"message",T:SUh,repeated:!0
    }, {
      no:8,name:"ancestor_type_definitions",kind:"message",T:kUh,repeated:!0
    }, {
      no:9,name:"inserted_symbol_types",kind:"message",T:EUh,repeated:!0
    }, {
      no:10,name:"quick_fixes",kind:"message",T:xUh,repeated:!0
    }, {
      no:11,name:"start_column",kind:"scalar",T:5
    }, {
      no:12,name:"end_column_inclusive",kind:"scalar",T:5
    }, {
      no:13,name:"class_information",kind:"message",T:IUh,repeated:!0
    }, {
      no:14,name:"function_signatures",kind:"message",T:BUh,repeated:!0
    }, {
      no:15,name:"snapshot",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new eur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eur, e, t)
  }
}, CUh=class tur extends ie{
  constructor(e){
    super(), this.message="", this.relativeWorkspacePath="", this.relevantLines=[], this.startLine=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.RelatedInformation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"relevant_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"start_line",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new tur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tur, e, t)
  }
}, SUh=class nur extends ie{
  constructor(e){
    super(), this.startLine=0, this.endLineInclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.ContextRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_inclusive",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new nur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nur, e, t)
  }
}, kUh=class iur extends ie{
  constructor(e){
    super(), this.name="", this.relativeWorkspacePath="", this.startLine=0, this.lines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.AncestorTypeDefinition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"start_line",kind:"scalar",T:5
    }, {
      no:4,name:"lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iur, e, t)
  }
}, EUh=class rur extends ie{
  constructor(e){
    super(), this.symbolName="", this.symbolType="", this.relativeWorkspacePath="", this.symbolLine=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.InsertedSymbolType"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"symbol_name",kind:"scalar",T:9
    }, {
      no:2,name:"symbol_type",kind:"scalar",T:9
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"symbol_line",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new rur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rur, e, t)
  }
}, xUh=class sur extends ie{
  constructor(e){
    super(), this.message="", this.kind="", this.isPreferred=!1, this.edits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.QuickFix"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"kind",kind:"scalar",T:9
    }, {
      no:3,name:"is_preferred",kind:"scalar",T:8
    }, {
      no:4,name:"edits",kind:"message",T:TUh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sur, e, t)
  }
}, TUh=class our extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLine=0, this.endLineInclusive=0, this.deletedLines=[], this.addLines=[], this.snapshot=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.QuickFix.Edit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_inclusive",kind:"scalar",T:5
    }, {
      no:4,name:"deleted_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"add_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"snapshot",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new our().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new our().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new our().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(our, e, t)
  }
}, IUh=class aur extends ie{
  constructor(e){
    super(), this.className="", this.startLine=0, this.topLevelLines=[], this.lines=[], this.constructors=[], this.detail="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.ClassInformation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"class_name",kind:"scalar",T:9
    }, {
      no:2,name:"start_line",kind:"scalar",T:5
    }, {
      no:3,name:"top_level_lines",kind:"scalar",T:5,repeated:!0
    }, {
      no:4,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"constructors",kind:"message",T:DUh,repeated:!0
    }, {
      no:6,name:"detail",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new aur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aur, e, t)
  }
}, DUh=class cur extends ie{
  constructor(e){
    super(), this.startLine=0, this.endLineInclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.ClassInformation.Constructor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_inclusive",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new cur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cur, e, t)
  }
}, BUh=class lur extends ie{
  constructor(e){
    super(), this.label="", this.documentation="", this.parameters=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.FunctionSignature"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }, {
      no:2,name:"documentation",kind:"scalar",T:9
    }, {
      no:3,name:"parameters",kind:"message",T:RUh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lur, e, t)
  }
}, RUh=class uur extends ie{
  constructor(e){
    super(), this.label="", this.documentation="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersRequest.Marker.FunctionSignature.FunctionParameter"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }, {
      no:2,name:"documentation",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uur, e, t)
  }
}, PUh=class dur extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.changes=[], this.success=!1, this.iterationNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"changes",kind:"message",T:LUh,repeated:!0
    }, {
      no:3,name:"success",kind:"scalar",T:8
    }, {
      no:4,name:"iteration_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new dur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dur, e, t)
  }
}, LUh=class hur extends ie{
  constructor(e){
    super(), this.startLine=0, this.endLineExclusive=0, this.deletedLines=[], this.addLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FixMarkersResponse.Change"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_exclusive",kind:"scalar",T:5
    }, {
      no:3,name:"deleted_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"add_lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hur, e, t)
  }
}, NUh=class mur extends ie{
  constructor(e){
    super(), this.conversation=[], this.repositories=[], this.query="", this.codeBlocks=[], this.documentationIdentifiers=[], this.badNotifications=[], this.lintRules="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamLintRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"repositories",kind:"message",T:z_,repeated:!0
    }, {
      no:4,name:"explicit_context",kind:"message",T:_F
    }, {
      no:5,name:"workspace_root_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"query",kind:"scalar",T:9
    }, {
      no:7,name:"code_blocks",kind:"message",T:WB,repeated:!0
    }, {
      no:9,name:"model_details",kind:"message",T:Yf
    }, {
      no:10,name:"documentation_identifiers",kind:"scalar",T:9,repeated:!0
    }, {
      no:11,name:"bad_notifications",kind:"scalar",T:9,repeated:!0
    }, {
      no:12,name:"lint_rules",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mur, e, t)
  }
}, MUh=class pur extends ie{
  constructor(e){
    super(), this.requestId="", this.timeSinceCompletedActionMs=0, this.featureType=y5n.UNSPECIFIED, this.relativeWorkspacePath="", this.contents="", this.linesAboveAndBelow=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportGroundTruthCandidateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"time_since_completed_action_ms",kind:"scalar",T:5
    }, {
      no:3,name:"feature_type",kind:"enum",T:v.getEnumType(y5n)
    }, {
      no:4,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:5,name:"contents",kind:"scalar",T:9
    }, {
      no:6,name:"selection_in_question",kind:"message",T:S3
    }, {
      no:7,name:"lines_above_and_below",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new pur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pur, e, t)
  }
}, FUh=class gur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportGroundTruthCandidateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new gur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gur, e, t)
  }
}, OUh=class fur extends ie{
  constructor(e){
    super(), this.requestId="", this.fate=m6n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportCmdKFateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"fate",kind:"enum",T:v.getEnumType(m6n)
    }
    ])
  }
  static fromBinary(e, t){
    return new fur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fur, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CANCELLED=1]="CANCELLED", n[n.ACCEPTED=2]="ACCEPTED", n[n.REJECTED=3]="REJECTED", n[n.FOLLOWED_UP=4]="FOLLOWED_UP", n[n.REPROMPTED=5]="REPROMPTED"
})(m6n||(m6n={
  
})), v.util.setEnumType(m6n, "aiserver.v1.ReportCmdKFateRequest.Fate", [{
  no:0, name:"FATE_UNSPECIFIED"
}, {
  no:1, name:"FATE_CANCELLED"
}, {
  no:2, name:"FATE_ACCEPTED"
}, {
  no:3, name:"FATE_REJECTED"
}, {
  no:4, name:"FATE_FOLLOWED_UP"
}, {
  no:5, name:"FATE_REPROMPTED"
}
]), UUh=class bur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportCmdKFateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new bur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bur, e, t)
  }
}, FgA=class vur extends ie{
  constructor(e){
    super(), this.sshString="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SshConfigPromptProps"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ssh_string",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vur, e, t)
  }
}, $Uh=class Aur extends ie{
  constructor(e){
    super(), this.conversation=[], this.files=[], this.contextResults={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFilesForComposerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:2,name:"files",kind:"message",T:AS,repeated:!0
    }, {
      no:3,name:"rerank_results",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"file_search_results",kind:"message",T:o6n,oneof:"context_results"
    }, {
      no:5,name:"code_search_results",kind:"message",T:m9t,oneof:"context_results"
    }, {
      no:6,name:"rerank_results_v2",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"long_context_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"is_eval",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new Aur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aur, e, t)
  }
}, qUh=class yur extends ie{
  constructor(e){
    super(), this.relativeWorkspacePaths=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFilesForComposerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_paths",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yur, e, t)
  }
}, HUh=class wur extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerClientMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request",kind:"message",T:JUh,oneof:"message"
    }, {
      no:2,name:"tool_result",kind:"message",T:QUh,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new wur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wur, e, t)
  }
}, OOc=class _ur extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerServerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"response",kind:"message",T:GUh,oneof:"message"
    }, {
      no:2,name:"tool_call",kind:"message",T:WUh,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new _ur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ur, e, t)
  }
}, JUh=class Cur extends ie{
  constructor(e){
    super(), this.inputText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"input_text",kind:"scalar",T:9
    }, {
      no:2,name:"composer_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cur, e, t)
  }
}, GUh=class Sur extends ie{
  constructor(e){
    super(), this.improvedText="", this.isFinal=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"improved_text",kind:"scalar",T:9
    }, {
      no:2,name:"is_final",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Sur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sur, e, t)
  }
}, WUh=class kur extends ie{
  constructor(e){
    super(), this.toolCallId="", this.toolName="", this.toolArgs="", this.toolIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_name",kind:"scalar",T:9
    }, {
      no:3,name:"tool_args",kind:"scalar",T:9
    }, {
      no:4,name:"tool_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new kur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kur, e, t)
  }
}, QUh=class Eur extends ie{
  constructor(e){
    super(), this.toolCallId="", this.result="", this.isError=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerEnhancerToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"result",kind:"scalar",T:9
    }, {
      no:3,name:"is_error",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Eur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eur, e, t)
  }
}, jUh=class xur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FindBugsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new xur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xur, e, t)
  }
}, zUh=class Tur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FindBugsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug",kind:"message",T:VUh,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tur, e, t)
  }
}, VUh=class Iur extends ie{
  constructor(e){
    super(), this.description="", this.lineNumber=0, this.confidence=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FindBugsResponse.Bug"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"line_number",kind:"scalar",T:5
    }, {
      no:3,name:"confidence",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new Iur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Iur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Iur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Iur, e, t)
  }
}, KUh=class Dur extends ie{
  constructor(e){
    super(), this.diffs=[], this.previousCommitMessages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WriteGitCommitMessageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diffs",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"previous_commit_messages",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"explicit_context",kind:"message",T:_F
    }
    ])
  }
  static fromBinary(e, t){
    return new Dur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dur, e, t)
  }
}, YUh=class Bur extends ie{
  constructor(e){
    super(), this.commitMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WriteGitCommitMessageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commit_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bur, e, t)
  }
}, ZUh=class Rur extends ie{
  constructor(e){
    super(), this.diffs="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WriteGitBranchNameRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diffs",kind:"scalar",T:9
    }, {
      no:2,name:"context",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rur, e, t)
  }
}, XUh=class Pur extends ie{
  constructor(e){
    super(), this.branchName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WriteGitBranchNameResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"branch_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Pur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pur, e, t)
  }
}, e$h=class Lur extends ie{
  constructor(e){
    super(), this.requestId="", this.isComposerVisible=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KeepComposerCacheWarmRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request",kind:"message",T:iUo
    }, {
      no:2,name:"request_id",kind:"scalar",T:9
    }, {
      no:3,name:"is_composer_visible",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Lur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lur, e, t)
  }
}, t$h=class Nur extends ie{
  constructor(e){
    super(), this.didKeepWarm=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KeepComposerCacheWarmResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"did_keep_warm",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Nur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nur, e, t)
  }
}, rUo=class Mur extends ie{
  constructor(e){
    super(), this.diffs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffReviewRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diffs",kind:"message",T:UOc,repeated:!0
    }, {
      no:2,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Mur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mur, e, t)
  }
}, UOc=class Fur extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.chunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffReviewRequest.SimpleFileDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"chunks",kind:"message",T:$Oc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fur, e, t)
  }
}, $Oc=class Our extends ie{
  constructor(e){
    super(), this.oldLines=[], this.newLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffReviewRequest.SimpleFileDiff.Chunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"old_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"new_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"old_range",kind:"message",T:S3
    }, {
      no:4,name:"new_range",kind:"message",T:S3
    }
    ])
  }
  static fromBinary(e, t){
    return new Our().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Our().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Our().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Our, e, t)
  }
}, n$h=class Uur extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamDiffReviewResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9,oneof:"response"
    }, {
      no:2,name:"groups",kind:"message",T:i$h,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Uur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uur, e, t)
  }
}, i$h=class $ur extends ie{
  constructor(e){
    super(), this.groups=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SemanticDiffGroups"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"groups",kind:"message",T:r$h,repeated:!0
    }, {
      no:2,name:"summary",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ur, e, t)
  }
}, r$h=class qur extends ie{
  constructor(e){
    super(), this.description="", this.diffs=[], this.title="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SemanticDiffGroup"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"diffs",kind:"message",T:s$h,repeated:!0
    }, {
      no:3,name:"title",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qur, e, t)
  }
}, s$h=class Hur extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.chunkIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SemanticDiffReference"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"chunk_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Hur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hur, e, t)
  }
}, o$h=class Jur extends ie{
  constructor(e){
    super(), this.response={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamDiffReviewByFileResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9,oneof:"response"
    }, {
      no:2,name:"groups",kind:"message",T:a$h,oneof:"response"
    }
    ])
  }
  static fromBinary(e, t){
    return new Jur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jur, e, t)
  }
}, a$h=class Gur extends ie{
  constructor(e){
    super(), this.groups=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SemanticFileGroups"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"groups",kind:"message",T:c$h,repeated:!0
    }, {
      no:2,name:"summary",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gur, e, t)
  }
}, c$h=class Wur extends ie{
  constructor(e){
    super(), this.title="", this.description="", this.files=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SemanticFileGroup"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"files",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wur, e, t)
  }
}, l$h=class Qur extends ie{
  constructor(e){
    super(), this.contextItems=[], this.modelName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CountTokensRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"context_items",kind:"message",T:j8n,repeated:!0
    }, {
      no:2,name:"model_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Qur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qur, e, t)
  }
}, u$h=class jur extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.count=0, this.lineCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ContextItemTokenDetail"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"count",kind:"scalar",T:5
    }, {
      no:3,name:"line_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new jur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jur, e, t)
  }
}, d$h=class zur extends ie{
  constructor(e){
    super(), this.count=0, this.tokenDetails=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CountTokensResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"count",kind:"scalar",T:5
    }, {
      no:2,name:"token_details",kind:"message",T:u$h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zur, e, t)
  }
}, h$h=class Vur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetModelLabelsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Vur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vur, e, t)
  }
}, m$h=class Kur extends ie{
  constructor(e){
    super(), this.modelLabels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetModelLabelsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_labels",kind:"message",T:p$h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kur, e, t)
  }
}, p$h=class Yur extends ie{
  constructor(e){
    super(), this.name="", this.label="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetModelLabelsResponse.ModelLabel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"label",kind:"scalar",T:9
    }, {
      no:3,name:"short_label",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"supports_agent",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yur, e, t)
  }
}, g$h=class Zur extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLastDefaultModelNudgeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zur, e, t)
  }
}, f$h=class Xur extends ie{
  constructor(e){
    super(), this.nudgeDate="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLastDefaultModelNudgeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"nudge_date",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Xur().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xur().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xur().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xur, e, t)
  }
}, qOc=class edr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDefaultModelNudgeDataRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new edr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new edr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new edr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(edr, e, t)
  }
}, b$h=class tdr extends ie{
  constructor(e){
    super(), this.nudgeDate="", this.shouldDefaultSwitchOnNewChat=!1, this.modelsWithNoDefaultSwitch=[], this.conversionModelOverride="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDefaultModelNudgeDataResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"nudge_date",kind:"scalar",T:9
    }, {
      no:2,name:"should_default_switch_on_new_chat",kind:"scalar",T:8
    }, {
      no:3,name:"models_with_no_default_switch",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"conversion_model_override",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tdr, e, t)
  }
}, HOc=class ndr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDefaultModelRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ndr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ndr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ndr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ndr, e, t)
  }
}, v$h=class idr extends ie{
  constructor(e){
    super(), this.model="", this.thinkingModel="", this.maxMode=!1, this.nextDefaultSetDate="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDefaultModelResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model",kind:"scalar",T:9
    }, {
      no:2,name:"thinking_model",kind:"scalar",T:9
    }, {
      no:3,name:"max_mode",kind:"scalar",T:8
    }, {
      no:4,name:"next_default_set_date",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new idr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new idr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new idr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(idr, e, t)
  }
}, A$h=class rdr extends ie{
  constructor(e){
    super(), this.accessKey="", this.secretKey="", this.region="", this.modelName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestBedrockCredentialsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"access_key",kind:"scalar",T:9
    }, {
      no:2,name:"secret_key",kind:"scalar",T:9
    }, {
      no:3,name:"region",kind:"scalar",T:9
    }, {
      no:4,name:"model_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rdr, e, t)
  }
}, y$h=class sdr extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TestBedrockCredentialsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sdr, e, t)
  }
}, OgA=class odr extends ie{
  constructor(e){
    super(), this.accessKey="", this.secretKey="", this.region="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBedrockModelsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"access_key",kind:"scalar",T:9
    }, {
      no:2,name:"secret_key",kind:"scalar",T:9
    }, {
      no:3,name:"region",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new odr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new odr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new odr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(odr, e, t)
  }
}, UgA=class adr extends ie{
  constructor(e){
    super(), this.models=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBedrockModelsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"models",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new adr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new adr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new adr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(adr, e, t)
  }
}, JOc=class cdr extends ie{
  constructor(e){
    super(), this.start=0, this.end=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommitLineRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start",kind:"scalar",T:5
    }, {
      no:2,name:"end",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new cdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cdr, e, t)
  }
}, GOc=class ldr extends ie{
  constructor(e){
    super(), this.operationType="", this.ranges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RangeGroup"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"model",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"operation_type",kind:"scalar",T:9
    }, {
      no:4,name:"ranges",kind:"message",T:JOc,repeated:!0
    }, {
      no:5,name:"request_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ldr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ldr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ldr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ldr, e, t)
  }
}, sUo=class udr extends ie{
  constructor(e){
    super(), this.filePath="", this.groups=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileRangeAnnotations"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_path",kind:"scalar",T:9
    }, {
      no:2,name:"groups",kind:"message",T:GOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new udr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new udr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new udr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(udr, e, t)
  }
}, w$h=class ddr extends ie{
  constructor(e){
    super(), this.commitHash="", this.totalLinesAdded=0, this.totalLinesDeleted=0, this.tabLinesAdded=0, this.tabLinesDeleted=0, this.composerLinesAdded=0, this.composerLinesDeleted=0, this.nonAiLinesAdded=0, this.nonAiLinesDeleted=0, this.changeIds=[], this.rangeAnnotations=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportCommitAiAnalyticsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commit_hash",kind:"scalar",T:9
    }, {
      no:2,name:"total_lines_added",kind:"scalar",T:5
    }, {
      no:3,name:"total_lines_deleted",kind:"scalar",T:5
    }, {
      no:4,name:"tab_lines_added",kind:"scalar",T:5
    }, {
      no:5,name:"tab_lines_deleted",kind:"scalar",T:5
    }, {
      no:6,name:"composer_lines_added",kind:"scalar",T:5
    }, {
      no:7,name:"composer_lines_deleted",kind:"scalar",T:5
    }, {
      no:8,name:"branch_name",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"is_primary_branch",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"repo_name",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"non_ai_lines_added",kind:"scalar",T:5
    }, {
      no:12,name:"non_ai_lines_deleted",kind:"scalar",T:5
    }, {
      no:13,name:"change_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:14,name:"message",kind:"scalar",T:9,opt:!0
    }, {
      no:15,name:"commit_ts",kind:"scalar",T:3,opt:!0
    }, {
      no:16,name:"range_annotations",kind:"message",T:sUo,repeated:!0
    }, {
      no:17,name:"commit_source",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ddr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ddr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ddr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ddr, e, t)
  }
}, _$h=class hdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportCommitAiAnalyticsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new hdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hdr, e, t)
  }
}, C$h=class mdr extends ie{
  constructor(e){
    super(), this.changes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportAiCodeChangeMetricsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"changes",kind:"message",T:WOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mdr, e, t)
  }
}, WOc=class pdr extends ie{
  constructor(e){
    super(), this.changeId="", this.source="", this.metadata=[], this.totalLinesAdded=0, this.totalLinesDeleted=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiCodeChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"change_id",kind:"scalar",T:9
    }, {
      no:2,name:"source",kind:"scalar",T:9
    }, {
      no:3,name:"metadata",kind:"message",T:VOc,repeated:!0
    }, {
      no:4,name:"model",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"total_lines_added",kind:"scalar",T:5
    }, {
      no:6,name:"total_lines_deleted",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new pdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pdr, e, t)
  }
}, S$h=class gdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportAiCodeChangeMetricsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new gdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gdr, e, t)
  }
}, k$h=class fdr extends ie{
  constructor(e){
    super(), this.sampleStart=Eo.zero, this.sampleEnd=Eo.zero, this.numSubsamples=0, this.windowSeq=Eo.zero, this.sessionId="", this.rows=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportProcessMetricsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sample_start",kind:"scalar",T:3
    }, {
      no:2,name:"sample_end",kind:"scalar",T:3
    }, {
      no:3,name:"num_subsamples",kind:"scalar",T:5
    }, {
      no:4,name:"window_seq",kind:"scalar",T:3
    }, {
      no:5,name:"session_id",kind:"scalar",T:9
    }, {
      no:6,name:"rows",kind:"message",T:E$h,repeated:!0
    }, {
      no:7,name:"os",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"os_version",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"arch",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"client_version",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"client_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fdr, e, t)
  }
}, E$h=class bdr extends ie{
  constructor(e){
    super(), this.pid=0, this.ppid=0, this.name="", this.extensionId="", this.cpuTimeMsSample=Eo.zero, this.sampleAvgMemMb=0, this.samplePeakMemMb=0, this.sessionPeakMemMb=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ProcessMetricsRowRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pid",kind:"scalar",T:5
    }, {
      no:2,name:"ppid",kind:"scalar",T:5
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"extension_id",kind:"scalar",T:9
    }, {
      no:5,name:"cpu_time_ms_sample",kind:"scalar",T:3
    }, {
      no:6,name:"sample_avg_mem_mb",kind:"scalar",T:1
    }, {
      no:7,name:"sample_peak_mem_mb",kind:"scalar",T:1
    }, {
      no:8,name:"session_peak_mem_mb",kind:"scalar",T:1
    }, {
      no:9,name:"process_name_hash",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bdr, e, t)
  }
}, x$h=class vdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportProcessMetricsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new vdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vdr, e, t)
  }
}, QOc=class Adr extends ie{
  constructor(e){
    super(), this.sampleStart=Eo.zero, this.sampleEnd=Eo.zero, this.numSubsamples=0, this.sessionId="", this.rows=[], this.os="", this.arch="", this.clientVersion="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportProcessMetricsV2Request"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sample_start",kind:"scalar",T:3
    }, {
      no:2,name:"sample_end",kind:"scalar",T:3
    }, {
      no:3,name:"num_subsamples",kind:"scalar",T:5
    }, {
      no:4,name:"session_id",kind:"scalar",T:9
    }, {
      no:5,name:"rows",kind:"message",T:jOc,repeated:!0
    }, {
      no:6,name:"os",kind:"scalar",T:9
    }, {
      no:7,name:"arch",kind:"scalar",T:9
    }, {
      no:8,name:"client_version",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Adr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Adr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Adr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Adr, e, t)
  }
}, jOc=class ydr extends ie{
  constructor(e){
    super(), this.pid=0, this.ppid=0, this.processName="", this.extensionId="", this.processNameHash="", this.sampleCpuTimeMs=Eo.zero, this.sampleAvgMemMb=0, this.samplePeakMemMb=0, this.sessionPeakMemMb=0, this.memoryDuringSamplePeakMb=0, this.cpuDuringSamplePeakPct=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ProcessMetricsV2RowRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pid",kind:"scalar",T:5
    }, {
      no:2,name:"ppid",kind:"scalar",T:5
    }, {
      no:3,name:"process_name",kind:"scalar",T:9
    }, {
      no:4,name:"extension_id",kind:"scalar",T:9
    }, {
      no:5,name:"process_name_hash",kind:"scalar",T:9
    }, {
      no:6,name:"sample_cpu_time_ms",kind:"scalar",T:3
    }, {
      no:7,name:"sample_avg_mem_mb",kind:"scalar",T:1
    }, {
      no:8,name:"sample_peak_mem_mb",kind:"scalar",T:1
    }, {
      no:9,name:"session_peak_mem_mb",kind:"scalar",T:1
    }, {
      no:10,name:"memory_during_sample_peak_mb",kind:"scalar",T:1
    }, {
      no:11,name:"cpu_during_sample_peak_pct",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new ydr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ydr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ydr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ydr, e, t)
  }
}, T$h=class wdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportProcessMetricsV2Response"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new wdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wdr, e, t)
  }
}, I$h=class _dr extends ie{
  constructor(e){
    super(), this.metrics=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportClientNumericMetricsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"metrics",kind:"message",T:zOc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _dr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _dr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _dr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_dr, e, t)
  }
}, zOc=class Cdr extends ie{
  constructor(e){
    super(), this.metric="", this.value=0, this.timestampMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ClientNumericMetric"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"metric",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:1
    }, {
      no:3,name:"session_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"ff_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"timestamp_ms",kind:"scalar",T:3
    }, {
      no:6,name:"client_version",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"os",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"enabled_extensions_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"ff_resolved",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"extensions_resolved",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cdr, e, t)
  }
}, D$h=class Sdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReportClientNumericMetricsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Sdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sdr, e, t)
  }
}, B$h=class kdr extends ie{
  constructor(e){
    super(), this.requestId="", this.conversation=[], this.composerId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentiallyGenerateMemoryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"git_upstream_url",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"composer_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kdr, e, t)
  }
}, R$h=class Edr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PotentiallyGenerateMemoryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"saved_memory",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"knowledge_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"title",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Edr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Edr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Edr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Edr, e, t)
  }
}, P$h=class xdr extends ie{
  constructor(e){
    super(), this.knowledge="", this.title="", this.gitOrigin="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseAddRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"knowledge",kind:"scalar",T:9
    }, {
      no:2,name:"title",kind:"scalar",T:9
    }, {
      no:3,name:"git_origin",kind:"scalar",T:9
    }, {
      no:4,name:"composer_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xdr, e, t)
  }
}, L$h=class Tdr extends ie{
  constructor(e){
    super(), this.success=!1, this.id="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseAddResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Tdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tdr, e, t)
  }
}, N$h=class Idr extends ie{
  constructor(e){
    super(), this.id="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseRemoveRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Idr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Idr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Idr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Idr, e, t)
  }
}, M$h=class Ddr extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseRemoveResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ddr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ddr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ddr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ddr, e, t)
  }
}, F$h=class Bdr extends ie{
  constructor(e){
    super(), this.id="", this.knowledge="", this.title="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseUpdateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"knowledge",kind:"scalar",T:9
    }, {
      no:3,name:"title",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bdr, e, t)
  }
}, O$h=class Rdr extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseUpdateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Rdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rdr, e, t)
  }
}, U$h=class Pdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseListRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"limit",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"git_origin",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pdr, e, t)
  }
}, $$h=class Ldr extends ie{
  constructor(e){
    super(), this.success=!1, this.allResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseListResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"all_results",kind:"message",T:q$h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ldr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ldr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ldr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ldr, e, t)
  }
}, q$h=class Ndr extends ie{
  constructor(e){
    super(), this.id="", this.knowledge="", this.title="", this.createdAt="", this.isGenerated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseListResponse.Item"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"knowledge",kind:"scalar",T:9
    }, {
      no:3,name:"title",kind:"scalar",T:9
    }, {
      no:4,name:"created_at",kind:"scalar",T:9
    }, {
      no:5,name:"is_generated",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ndr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ndr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ndr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ndr, e, t)
  }
}, $gA=class Mdr extends ie{
  constructor(e){
    super(), this.id="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseGetRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Mdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mdr, e, t)
  }
}, qgA=class Fdr extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseGetResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"result",kind:"message",T:H$h
    }
    ])
  }
  static fromBinary(e, t){
    return new Fdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fdr, e, t)
  }
}, H$h=class Odr extends ie{
  constructor(e){
    super(), this.id="", this.knowledge="", this.title="", this.createdAt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.KnowledgeBaseGetResponse.Item"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"knowledge",kind:"scalar",T:9
    }, {
      no:3,name:"title",kind:"scalar",T:9
    }, {
      no:4,name:"created_at",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Odr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Odr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Odr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Odr, e, t)
  }
}, J$h=class Udr extends ie{
  constructor(e){
    super(), this.requestId="", this.conversation=[], this.taggedFilenames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FetchRelevantKnowledgeForConversationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"conversation",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"git_origin",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"limit",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"tagged_filenames",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Udr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Udr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Udr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Udr, e, t)
  }
}, G$h=class $dr extends ie{
  constructor(e){
    super(), this.knowledgeItems=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FetchRelevantKnowledgeForConversationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"knowledge_items",kind:"message",T:w8n,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $dr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $dr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $dr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($dr, e, t)
  }
}, W$h=class qdr extends ie{
  constructor(e){
    super(), this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InferBackgroundComposerScriptsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commands",kind:"message",T:Q$h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qdr, e, t)
  }
}, Q$h=class Hdr extends ie{
  constructor(e){
    super(), this.command="", this.timestamp=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InferBackgroundComposerScriptsRequest.Command"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"timestamp",kind:"scalar",T:2
    }, {
      no:3,name:"cwd",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hdr, e, t)
  }
}, j$h=class Jdr extends ie{
  constructor(e){
    super(), this.installScript="", this.startScript="", this.terminals=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InferBackgroundComposerScriptsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install_script",kind:"scalar",T:9
    }, {
      no:2,name:"start_script",kind:"scalar",T:9
    }, {
      no:3,name:"terminals",kind:"message",T:z$h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jdr, e, t)
  }
}, z$h=class Gdr extends ie{
  constructor(e){
    super(), this.name="", this.command="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InferBackgroundComposerScriptsResponse.Terminal"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"command",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Gdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gdr, e, t)
  }
}, V$h=class Wdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBackgroundComposerFeedbackLinkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Wdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wdr, e, t)
  }
}, K$h=class Qdr extends ie{
  constructor(e){
    super(), this.url="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBackgroundComposerFeedbackLinkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Qdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qdr, e, t)
  }
}, HgA=class jdr extends ie{
  constructor(e){
    super(), this.sha="", this.fullPrContents="", this.score=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PullRequestResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sha",kind:"scalar",T:9
    }, {
      no:2,name:"full_pr_contents",kind:"scalar",T:9
    }, {
      no:3,name:"score",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new jdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jdr, e, t)
  }
}, VOc=class zdr extends ie{
  constructor(e){
    super(), this.fileExtension="", this.linesAdded=0, this.linesDeleted=0, this.changeHashes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ScoredAiCodeMetadata"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_extension",kind:"scalar",T:9
    }, {
      no:2,name:"lines_added",kind:"scalar",T:5
    }, {
      no:3,name:"lines_deleted",kind:"scalar",T:5
    }, {
      no:5,name:"change_hashes",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"file_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zdr, e, t)
  }
}, JgA=class Vdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IterativeSftInferenceConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"temperature",kind:"scalar",T:1,opt:!0
    }, {
      no:2,name:"top_p",kind:"scalar",T:1,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Vdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vdr, e, t)
  }
}, Y$h=class Kdr extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SttConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"language",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"punctuate",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kdr, e, t)
  }
}, Z$h=class Ydr extends ie{
  constructor(e){
    super(), this.pcm16=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SttAudioChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pcm16",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new Ydr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ydr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ydr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ydr, e, t)
  }
}, X$h=class Zdr extends ie{
  constructor(e){
    super(), this.type=dvt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SttControl"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"enum",T:v.getEnumType(dvt)
    }
    ])
  }
  static fromBinary(e, t){
    return new Zdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zdr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.STOP=1]="STOP", n[n.CANCEL=2]="CANCEL"
})(dvt||(dvt={
  
})), v.util.setEnumType(dvt, "aiserver.v1.SttControl.Type", [{
  no:0, name:"TYPE_UNSPECIFIED"
}, {
  no:1, name:"TYPE_STOP"
}, {
  no:2, name:"TYPE_CANCEL"
}
]), p6n=class Xdr extends ie{
  constructor(e){
    super(), this.payload={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SttClientMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config",kind:"message",T:Y$h,oneof:"payload"
    }, {
      no:2,name:"audio",kind:"message",T:Z$h,oneof:"payload"
    }, {
      no:3,name:"control",kind:"message",T:X$h,oneof:"payload"
    }
    ])
  }
  static fromBinary(e, t){
    return new Xdr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xdr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xdr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xdr, e, t)
  }
}, KOc=class ehr extends ie{
  constructor(e){
    super(), this.text="", this.isFinal=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SttServerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"is_final",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ehr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ehr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ehr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ehr, e, t)
  }
}
}
}), GgA=