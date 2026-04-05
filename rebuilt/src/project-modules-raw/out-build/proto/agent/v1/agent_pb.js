// Module: out-build/proto/agent/v1/agent_pb.js
// Offset: 3261273 (bundle byte offset)
// Size: 64055 bytes

Ka(), K8o(), AMc(), yMc(), uDh(), kMc(), o6o(), a6o(), c6o(), LMc(), WDh(), GMc(), cBh(), KMc(), ABh(), yBh(), P5n(), b6o(), tgA(), d2c(), u5t(), RBh(), h9n(), PBh(), ngA(), igA(), rgA(), sgA(), rRh(), _Ih(), HRc(), ogA(), agA(), cgA(), Xbt(), jKe(), E2c(), Lbt(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.AGENT=1]="AGENT", n[n.ASK=2]="ASK", n[n.PLAN=3]="PLAN", n[n.DEBUG=4]="DEBUG", n[n.TRIAGE=5]="TRIAGE", n[n.PROJECT=6]="PROJECT"
})(vz||(vz={
  
})), v.util.setEnumType(vz, "agent.v1.AgentMode", [{
  no:0, name:"AGENT_MODE_UNSPECIFIED"
}, {
  no:1, name:"AGENT_MODE_AGENT"
}, {
  no:2, name:"AGENT_MODE_ASK"
}, {
  no:3, name:"AGENT_MODE_PLAN"
}, {
  no:4, name:"AGENT_MODE_DEBUG"
}, {
  no:5, name:"AGENT_MODE_TRIAGE"
}, {
  no:6, name:"AGENT_MODE_PROJECT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SHELL=1]="SHELL", n[n.SUBAGENT=2]="SUBAGENT"
})(nvt||(nvt={
  
})), v.util.setEnumType(nvt, "agent.v1.BackgroundTaskKind", [{
  no:0, name:"BACKGROUND_TASK_KIND_UNSPECIFIED"
}, {
  no:1, name:"BACKGROUND_TASK_KIND_SHELL"
}, {
  no:2, name:"BACKGROUND_TASK_KIND_SUBAGENT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SUCCESS=1]="SUCCESS", n[n.ERROR=2]="ERROR", n[n.ABORTED=3]="ABORTED"
})(zKe||(zKe={
  
})), v.util.setEnumType(zKe, "agent.v1.BackgroundTaskStatus", [{
  no:0, name:"BACKGROUND_TASK_STATUS_UNSPECIFIED"
}, {
  no:1, name:"BACKGROUND_TASK_STATUS_SUCCESS"
}, {
  no:2, name:"BACKGROUND_TASK_STATUS_ERROR"
}, {
  no:3, name:"BACKGROUND_TASK_STATUS_ABORTED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.PLAN_EXECUTION=1]="PLAN_EXECUTION", n[n.COMMIT_REMINDER=2]="COMMIT_REMINDER", n[n.BACKGROUND_TASK_COMPLETION=3]="BACKGROUND_TASK_COMPLETION"
})($9e||($9e={
  
})), v.util.setEnumType($9e, "agent.v1.SimulatedMsgReason", [{
  no:0, name:"SIMULATED_MSG_REASON_UNSPECIFIED"
}, {
  no:1, name:"SIMULATED_MSG_REASON_PLAN_EXECUTION"
}, {
  no:2, name:"SIMULATED_MSG_REASON_COMMIT_REMINDER"
}, {
  no:3, name:"SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DEFAULT=1]="DEFAULT", n[n.CODEX=2]="CODEX", n[n.GPT5=3]="GPT5"
})(_6o||(_6o={
  
})), v.util.setEnumType(_6o, "agent.v1.ThinkingStyle", [{
  no:0, name:"THINKING_STYLE_UNSPECIFIED"
}, {
  no:1, name:"THINKING_STYLE_DEFAULT"
}, {
  no:2, name:"THINKING_STYLE_CODEX"
}, {
  no:3, name:"THINKING_STYLE_GPT5"
}
]), Z2c=class QWi extends ie{
  constructor(e){
    super(), this.description="", this.prompt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"prompt",kind:"scalar",T:9
    }, {
      no:3,name:"subagent_type",kind:"message",T:she
    }, {
      no:4,name:"model",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"resume",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"agent_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new QWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QWi, e, t)
  }
}, nPh=class jWi extends ie{
  constructor(e){
    super(), this.conversationSteps=[], this.isBackground=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_steps",kind:"message",T:yve,repeated:!0
    }, {
      no:2,name:"agent_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"is_background",kind:"scalar",T:8
    }, {
      no:4,name:"duration_ms",kind:"scalar",T:4,opt:!0
    }, {
      no:5,name:"result_suffix",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new jWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jWi, e, t)
  }
}, iPh=class zWi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zWi, e, t)
  }
}, rPh=class VWi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:nPh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:iPh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new VWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VWi, e, t)
  }
}, C6o=class KWi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:Z2c
    }, {
      no:2,name:"result",kind:"message",T:rPh
    }
    ])
  }
  static fromBinary(e, t){
    return new KWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KWi, e, t)
  }
}, sPh=class YWi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TaskToolCallDelta"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"interaction_update",kind:"message",T:K$
    }
    ])
  }
  static fromBinary(e, t){
    return new YWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YWi, e, t)
  }
}, lN=class ZWi extends ie{
  constructor(e){
    super(), this.tool={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_tool_call",kind:"message",T:Y8o,oneof:"tool"
    }, {
      no:3,name:"delete_tool_call",kind:"message",T:e6o,oneof:"tool"
    }, {
      no:4,name:"glob_tool_call",kind:"message",T:CMc,oneof:"tool"
    }, {
      no:5,name:"grep_tool_call",kind:"message",T:i6o,oneof:"tool"
    }, {
      no:8,name:"read_tool_call",kind:"message",T:e8n,oneof:"tool"
    }, {
      no:9,name:"update_todos_tool_call",kind:"message",T:IMc,oneof:"tool"
    }, {
      no:10,name:"read_todos_tool_call",kind:"message",T:kDh,oneof:"tool"
    }, {
      no:12,name:"edit_tool_call",kind:"message",T:Ave,oneof:"tool"
    }, {
      no:13,name:"ls_tool_call",kind:"message",T:l6o,oneof:"tool"
    }, {
      no:14,name:"read_lints_tool_call",kind:"message",T:NMc,oneof:"tool"
    }, {
      no:15,name:"mcp_tool_call",kind:"message",T:a8n,oneof:"tool"
    }, {
      no:16,name:"sem_search_tool_call",kind:"message",T:WMc,oneof:"tool"
    }, {
      no:17,name:"create_plan_tool_call",kind:"message",T:c8n,oneof:"tool"
    }, {
      no:18,name:"web_search_tool_call",kind:"message",T:XMc,oneof:"tool"
    }, {
      no:19,name:"task_tool_call",kind:"message",T:C6o,oneof:"tool"
    }, {
      no:20,name:"list_mcp_resources_tool_call",kind:"message",T:e2c,oneof:"tool"
    }, {
      no:21,name:"read_mcp_resource_tool_call",kind:"message",T:t2c,oneof:"tool"
    }, {
      no:22,name:"apply_agent_diff_tool_call",kind:"message",T:FRc,oneof:"tool"
    }, {
      no:23,name:"ask_question_tool_call",kind:"message",T:n2c,oneof:"tool"
    }, {
      no:24,name:"fetch_tool_call",kind:"message",T:kBh,oneof:"tool"
    }, {
      no:25,name:"switch_mode_tool_call",kind:"message",T:l2c,oneof:"tool"
    }, {
      no:28,name:"generate_image_tool_call",kind:"message",T:$Rc,oneof:"tool"
    }, {
      no:29,name:"record_screen_tool_call",kind:"message",T:h2c,oneof:"tool"
    }, {
      no:30,name:"computer_use_tool_call",kind:"message",T:lPc,oneof:"tool"
    }, {
      no:31,name:"write_shell_stdin_tool_call",kind:"message",T:m2c,oneof:"tool"
    }, {
      no:32,name:"reflect_tool_call",kind:"message",T:OBh,oneof:"tool"
    }, {
      no:33,name:"setup_vm_environment_tool_call",kind:"message",T:$Bh,oneof:"tool"
    }, {
      no:34,name:"truncated_tool_call",kind:"message",T:uPh,oneof:"tool"
    }, {
      no:35,name:"start_grind_execution_tool_call",kind:"message",T:WBh,oneof:"tool"
    }, {
      no:36,name:"start_grind_planning_tool_call",kind:"message",T:KBh,oneof:"tool"
    }, {
      no:37,name:"web_fetch_tool_call",kind:"message",T:b2c,oneof:"tool"
    }, {
      no:38,name:"report_bugfix_results_tool_call",kind:"message",T:wIh,oneof:"tool"
    }, {
      no:39,name:"ai_attribution_tool_call",kind:"message",T:nxh,oneof:"tool"
    }, {
      no:40,name:"pr_management_tool_call",kind:"message",T:hRh,oneof:"tool"
    }, {
      no:41,name:"mcp_auth_tool_call",kind:"message",T:vRh,oneof:"tool"
    }, {
      no:42,name:"await_tool_call",kind:"message",T:xRh,oneof:"tool"
    }
    ])
  }
  static fromBinary(e, t){
    return new ZWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZWi, e, t)
  }
}, oPh=class XWi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TruncatedToolCallArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new XWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XWi, e, t)
  }
}, aPh=class eQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TruncatedToolCallSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new eQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eQi, e, t)
  }
}, cPh=class tQi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TruncatedToolCallError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tQi, e, t)
  }
}, lPh=class nQi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TruncatedToolCallResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:aPh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:cPh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new nQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nQi, e, t)
  }
}, uPh=class iQi extends ie{
  constructor(e){
    super(), this.originalStepBlobId=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TruncatedToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"original_step_blob_id",kind:"scalar",T:12
    }, {
      no:2,name:"args",kind:"message",T:oPh
    }, {
      no:3,name:"result",kind:"message",T:lPh
    }
    ])
  }
  static fromBinary(e, t){
    return new iQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iQi, e, t)
  }
}, S6o=class rQi extends ie{
  constructor(e){
    super(), this.delta={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ToolCallDelta"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_tool_call_delta",kind:"message",T:eDh,oneof:"delta"
    }, {
      no:2,name:"task_tool_call_delta",kind:"message",T:sPh,oneof:"delta"
    }, {
      no:3,name:"edit_tool_call_delta",kind:"message",T:PMc,oneof:"delta"
    }
    ])
  }
  static fromBinary(e, t){
    return new rQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rQi, e, t)
  }
}, yve=class sQi extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationStep"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"assistant_message",kind:"message",T:ivt,oneof:"message"
    }, {
      no:2,name:"tool_call",kind:"message",T:lN,oneof:"message"
    }, {
      no:3,name:"thinking_message",kind:"message",T:oFc,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new sQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sQi, e, t)
  }
}, SF=class oQi extends ie{
  constructor(e){
    super(), this.action={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message_action",kind:"message",T:ORe,oneof:"action"
    }, {
      no:2,name:"resume_action",kind:"message",T:iFc,oneof:"action"
    }, {
      no:3,name:"cancel_action",kind:"message",T:nFc,oneof:"action"
    }, {
      no:4,name:"summarize_action",kind:"message",T:sFc,oneof:"action"
    }, {
      no:5,name:"shell_command_action",kind:"message",T:dPh,oneof:"action"
    }, {
      no:6,name:"start_plan_action",kind:"message",T:hPh,oneof:"action"
    }, {
      no:7,name:"execute_plan_action",kind:"message",T:g8n,oneof:"action"
    }, {
      no:8,name:"async_ask_question_completion_action",kind:"message",T:rFc,oneof:"action"
    }, {
      no:10,name:"cancel_subagent_action",kind:"message",T:tFc,oneof:"action"
    }, {
      no:12,name:"background_task_completion_action",kind:"message",T:X2c,oneof:"action"
    }, {
      no:11,name:"triggering_auth_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new oQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oQi, e, t)
  }
}, X2c=class aQi extends ie{
  constructor(e){
    super(), this.completions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundTaskCompletionAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"completions",kind:"message",T:eFc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new aQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aQi, e, t)
  }
}, eFc=class cQi extends ie{
  constructor(e){
    super(), this.taskId="", this.kind=nvt.UNSPECIFIED, this.status=zKe.UNSPECIFIED, this.title="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundTaskCompletion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"task_id",kind:"scalar",T:9
    }, {
      no:2,name:"kind",kind:"enum",T:v.getEnumType(nvt)
    }, {
      no:3,name:"status",kind:"enum",T:v.getEnumType(zKe)
    }, {
      no:4,name:"title",kind:"scalar",T:9
    }, {
      no:5,name:"detail",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"output_path",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cQi, e, t)
  }
}, tFc=class lQi extends ie{
  constructor(e){
    super(), this.subagentId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CancelSubagentAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"subagent_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lQi, e, t)
  }
}, ORe=class uQi extends ie{
  constructor(e){
    super(), this.prependUserMessages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.UserMessageAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"message",T:KR
    }, {
      no:2,name:"request_context",kind:"message",T:QKe
    }, {
      no:3,name:"send_to_interaction_listener",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"prepend_user_messages",kind:"message",T:KR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uQi, e, t)
  }
}, nFc=class dQi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CancelAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new dQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dQi, e, t)
  }
}, iFc=class hQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ResumeAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"request_context",kind:"message",T:QKe
    }
    ])
  }
  static fromBinary(e, t){
    return new hQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hQi, e, t)
  }
}, rFc=class mQi extends ie{
  constructor(e){
    super(), this.originalToolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AsyncAskQuestionCompletionAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"original_tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"original_args",kind:"message",T:Q5t
    }, {
      no:3,name:"result",kind:"message",T:cke
    }
    ])
  }
  static fromBinary(e, t){
    return new mQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mQi, e, t)
  }
}, sFc=class pQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SummarizeAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new pQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pQi, e, t)
  }
}, dPh=class gQi extends ie{
  constructor(e){
    super(), this.execId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellCommandAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_command",kind:"message",T:aFc
    }, {
      no:2,name:"exec_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new gQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gQi, e, t)
  }
}, hPh=class fQi extends ie{
  constructor(e){
    super(), this.isSpec=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartPlanAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"message",T:KR
    }, {
      no:2,name:"request_context",kind:"message",T:QKe
    }, {
      no:3,name:"is_spec",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new fQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fQi, e, t)
  }
}, g8n=class bQi extends ie{
  constructor(e){
    super(), this.executionMode=vz.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ExecutePlanAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_context",kind:"message",T:QKe
    }, {
      no:2,name:"plan",kind:"message",T:cFc,opt:!0
    }, {
      no:3,name:"plan_file_uri",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"plan_file_content",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"execution_mode",kind:"enum",T:v.getEnumType(vz)
    }, {
      no:6,name:"kickoff_message_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bQi, e, t)
  }
}, KR=class vQi extends ie{
  constructor(e){
    super(), this.text="", this.messageId="", this.mode=vz.UNSPECIFIED, this.conversationStateBlobId=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.UserMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"message_id",kind:"scalar",T:9
    }, {
      no:3,name:"selected_context",kind:"message",T:rae,opt:!0
    }, {
      no:4,name:"mode",kind:"enum",T:v.getEnumType(vz)
    }, {
      no:5,name:"is_simulated_msg",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"best_of_n_group_id",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"try_use_best_of_n_promotion",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"rich_text",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"simulated_msg_reason",kind:"enum",T:v.getEnumType($9e),opt:!0
    }, {
      no:10,name:"conversation_state_blob_id",kind:"scalar",T:12
    }, {
      no:11,name:"subagent_system_reminder",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vQi, e, t)
  }
}, ivt=class AQi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AssistantMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new AQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AQi, e, t)
  }
}, oFc=class yQi extends ie{
  constructor(e){
    super(), this.text="", this.durationMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ThinkingMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"duration_ms",kind:"scalar",T:13
    }
    ])
  }
  static fromBinary(e, t){
    return new yQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yQi, e, t)
  }
}, aFc=class wQi extends ie{
  constructor(e){
    super(), this.command="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new wQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wQi, e, t)
  }
}, mPh=class _Qi extends ie{
  constructor(e){
    super(), this.stdout="", this.stderr="", this.exitCode=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellOutput"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"stdout",kind:"scalar",T:9
    }, {
      no:2,name:"stderr",kind:"scalar",T:9
    }, {
      no:3,name:"exit_code",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new _Qi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Qi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Qi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Qi, e, t)
  }
}, pPh=class CQi extends ie{
  constructor(e){
    super(), this.turn={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationTurn"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"agent_conversation_turn",kind:"message",T:gPh,oneof:"turn"
    }, {
      no:2,name:"shell_conversation_turn",kind:"message",T:fPh,oneof:"turn"
    }
    ])
  }
  static fromBinary(e, t){
    return new CQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CQi, e, t)
  }
}, cFc=class SQi extends ie{
  constructor(e){
    super(), this.plan="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationPlan"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plan",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new SQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SQi, e, t)
  }
}, VKe=class kQi extends ie{
  constructor(e){
    super(), this.turn={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationTurnStructure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"agent_conversation_turn",kind:"message",T:f8n,oneof:"turn"
    }, {
      no:2,name:"shell_conversation_turn",kind:"message",T:bPh,oneof:"turn"
    }
    ])
  }
  static fromBinary(e, t){
    return new kQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kQi, e, t)
  }
}, gPh=class EQi extends ie{
  constructor(e){
    super(), this.steps=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AgentConversationTurn"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"message",T:KR
    }, {
      no:2,name:"steps",kind:"message",T:yve,repeated:!0
    }, {
      no:3,name:"request_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new EQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new EQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new EQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(EQi, e, t)
  }
}, f8n=class xQi extends ie{
  constructor(e){
    super(), this.userMessage=new Uint8Array(0), this.steps=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AgentConversationTurnStructure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"scalar",T:12
    }, {
      no:2,name:"steps",kind:"scalar",T:12,repeated:!0
    }, {
      no:3,name:"request_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xQi, e, t)
  }
}, fPh=class TQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellConversationTurn"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_command",kind:"message",T:aFc
    }, {
      no:2,name:"shell_output",kind:"message",T:mPh
    }
    ])
  }
  static fromBinary(e, t){
    return new TQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new TQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new TQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(TQi, e, t)
  }
}, bPh=class IQi extends ie{
  constructor(e){
    super(), this.shellCommand=new Uint8Array(0), this.shellOutput=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellConversationTurnStructure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_command",kind:"scalar",T:12
    }, {
      no:2,name:"shell_output",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new IQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new IQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new IQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(IQi, e, t)
  }
}, vPh=class DQi extends ie{
  constructor(e){
    super(), this.summary="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationSummary"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"summary",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new DQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DQi, e, t)
  }
}, k6o=class BQi extends ie{
  constructor(e){
    super(), this.summarizedMessages=[], this.summary="", this.windowTail=0, this.summaryMessage=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationSummaryArchive"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"summarized_messages",kind:"scalar",T:12,repeated:!0
    }, {
      no:2,name:"summary",kind:"scalar",T:9
    }, {
      no:3,name:"window_tail",kind:"scalar",T:13
    }, {
      no:4,name:"summary_message",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new BQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BQi, e, t)
  }
}, lFc=class RQi extends ie{
  constructor(e){
    super(), this.usedTokens=0, this.maxTokens=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationTokenDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"used_tokens",kind:"scalar",T:13
    }, {
      no:2,name:"max_tokens",kind:"scalar",T:13
    }
    ])
  }
  static fromBinary(e, t){
    return new RQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RQi, e, t)
  }
}, uFc=class PQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FileState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"initial_content",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new PQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PQi, e, t)
  }
}, dFc=class LQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FileStateStructure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:12,opt:!0
    }, {
      no:2,name:"initial_content",kind:"scalar",T:12,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new LQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LQi, e, t)
  }
}, APh=class NQi extends ie{
  constructor(e){
    super(), this.durationMs=Eo.zero, this.timestampMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StepTiming"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"duration_ms",kind:"scalar",T:4
    }, {
      no:2,name:"timestamp_ms",kind:"scalar",T:4
    }
    ])
  }
  static fromBinary(e, t){
    return new NQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NQi, e, t)
  }
}, ggA=class MQi extends ie{
  constructor(e){
    super(), this.rootPromptMessagesJson=[], this.turns=[], this.todos=[], this.pendingToolCalls=[], this.fileStates={
      
    }, this.summaryArchives=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"root_prompt_messages_json",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"turns",kind:"message",T:pPh,repeated:!0
    }, {
      no:3,name:"todos",kind:"message",T:U9e,repeated:!0
    }, {
      no:4,name:"pending_tool_calls",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"token_details",kind:"message",T:lFc
    }, {
      no:6,name:"summary",kind:"message",T:vPh,opt:!0
    }, {
      no:7,name:"plan",kind:"message",T:cFc,opt:!0
    }, {
      no:9,name:"summary_archive",kind:"message",T:k6o,opt:!0
    }, {
      no:10,name:"file_states",kind:"map",K:9,V:{
        kind:"message",T:uFc
      }
    }, {
      no:11,name:"summary_archives",kind:"message",T:k6o,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new MQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MQi, e, t)
  }
}, yPh=class FQi extends ie{
  constructor(e){
    super(), this.createdTimestampMs=Eo.zero, this.lastUsedTimestampMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentPersistedState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_state",kind:"message",T:vk
    }, {
      no:2,name:"created_timestamp_ms",kind:"scalar",T:4
    }, {
      no:3,name:"last_used_timestamp_ms",kind:"scalar",T:4
    }, {
      no:4,name:"subagent_type",kind:"message",T:she
    }
    ])
  }
  static fromBinary(e, t){
    return new FQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FQi, e, t)
  }
}, vk=class OQi extends ie{
  constructor(e){
    super(), this.turnsOld=[], this.rootPromptMessagesJson=[], this.turns=[], this.todos=[], this.pendingToolCalls=[], this.previousWorkspaceUris=[], this.fileStates={
      
    }, this.fileStatesV2={
      
    }, this.summaryArchives=[], this.turnTimings=[], this.subagentStates={
      
    }, this.selfSummaryCount=0, this.readPaths=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ConversationStateStructure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"turns_old",kind:"scalar",T:12,repeated:!0
    }, {
      no:1,name:"root_prompt_messages_json",kind:"scalar",T:12,repeated:!0
    }, {
      no:8,name:"turns",kind:"scalar",T:12,repeated:!0
    }, {
      no:3,name:"todos",kind:"scalar",T:12,repeated:!0
    }, {
      no:4,name:"pending_tool_calls",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"token_details",kind:"message",T:lFc
    }, {
      no:6,name:"summary",kind:"scalar",T:12,opt:!0
    }, {
      no:7,name:"plan",kind:"scalar",T:12,opt:!0
    }, {
      no:9,name:"previous_workspace_uris",kind:"scalar",T:9,repeated:!0
    }, {
      no:10,name:"mode",kind:"enum",T:v.getEnumType(vz),opt:!0
    }, {
      no:11,name:"summary_archive",kind:"scalar",T:12,opt:!0
    }, {
      no:12,name:"file_states",kind:"map",K:9,V:{
        kind:"scalar",T:12
      }
    }, {
      no:15,name:"file_states_v2",kind:"map",K:9,V:{
        kind:"message",T:dFc
      }
    }, {
      no:13,name:"summary_archives",kind:"scalar",T:12,repeated:!0
    }, {
      no:14,name:"turn_timings",kind:"message",T:APh,repeated:!0
    }, {
      no:16,name:"subagent_states",kind:"map",K:9,V:{
        kind:"message",T:yPh
      }
    }, {
      no:17,name:"self_summary_count",kind:"scalar",T:13
    }, {
      no:18,name:"read_paths",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new OQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OQi, e, t)
  }
}, wPh=class UQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ThinkingDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new UQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UQi, e, t)
  }
}, V5t=class $Qi extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ApiKeyCredentials"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }, {
      no:2,name:"base_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $Qi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Qi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Qi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Qi, e, t)
  }
}, K5t=class qQi extends ie{
  constructor(e){
    super(), this.apiKey="", this.baseUrl="", this.deployment="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AzureCredentials"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }, {
      no:2,name:"base_url",kind:"scalar",T:9
    }, {
      no:3,name:"deployment",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qQi, e, t)
  }
}, Y5t=class HQi extends ie{
  constructor(e){
    super(), this.accessKey="", this.secretKey="", this.region="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BedrockCredentials"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"access_key",kind:"scalar",T:9
    }, {
      no:2,name:"secret_key",kind:"scalar",T:9
    }, {
      no:3,name:"region",kind:"scalar",T:9
    }, {
      no:4,name:"session_token",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new HQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HQi, e, t)
  }
}, q9e=class JQi extends ie{
  constructor(e){
    super(), this.modelId="", this.displayModelId="", this.displayName="", this.displayNameShort="", this.aliases=[], this.credentials={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ModelDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_id",kind:"scalar",T:9
    }, {
      no:3,name:"display_model_id",kind:"scalar",T:9
    }, {
      no:4,name:"display_name",kind:"scalar",T:9
    }, {
      no:5,name:"display_name_short",kind:"scalar",T:9
    }, {
      no:6,name:"aliases",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"thinking_details",kind:"message",T:wPh,opt:!0
    }, {
      no:7,name:"max_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"api_key_credentials",kind:"message",T:V5t,oneof:"credentials"
    }, {
      no:9,name:"azure_credentials",kind:"message",T:K5t,oneof:"credentials"
    }, {
      no:10,name:"bedrock_credentials",kind:"message",T:Y5t,oneof:"credentials"
    }
    ])
  }
  static fromBinary(e, t){
    return new JQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JQi, e, t)
  }
}, lke=class GQi extends ie{
  constructor(e){
    super(), this.modelId="", this.maxMode=!1, this.parameters=[], this.credentials={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestedModel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_id",kind:"scalar",T:9
    }, {
      no:2,name:"max_mode",kind:"scalar",T:8
    }, {
      no:3,name:"parameters",kind:"message",T:rvt,repeated:!0
    }, {
      no:4,name:"api_key_credentials",kind:"message",T:V5t,oneof:"credentials"
    }, {
      no:5,name:"azure_credentials",kind:"message",T:K5t,oneof:"credentials"
    }, {
      no:6,name:"bedrock_credentials",kind:"message",T:Y5t,oneof:"credentials"
    }
    ])
  }
  static fromBinary(e, t){
    return new GQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GQi, e, t)
  }
}, rvt=class WQi extends ie{
  constructor(e){
    super(), this.id="", this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestedModel.ModelParameterValue"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new WQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WQi, e, t)
  }
}, _Ph=class QQi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AgentRunRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_state",kind:"message",T:vk
    }, {
      no:2,name:"action",kind:"message",T:SF
    }, {
      no:3,name:"model_details",kind:"message",T:q9e
    }, {
      no:9,name:"requested_model",kind:"message",T:lke,opt:!0
    }, {
      no:4,name:"mcp_tools",kind:"message",T:S2c
    }, {
      no:5,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"mcp_file_system_options",kind:"message",T:A6o,opt:!0
    }, {
      no:7,name:"skill_options",kind:"message",T:B2c,opt:!0
    }, {
      no:8,name:"custom_system_prompt",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"suggest_next_prompt",kind:"scalar",T:8,opt:!0
    }, {
      no:11,name:"subagent_type_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new QQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QQi, e, t)
  }
}, b8n=class jQi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TextDeltaUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jQi, e, t)
  }
}, v8n=class zQi extends ie{
  constructor(e){
    super(), this.callId="", this.modelCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ToolCallStartedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"call_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call",kind:"message",T:lN
    }, {
      no:3,name:"model_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zQi, e, t)
  }
}, E6o=class VQi extends ie{
  constructor(e){
    super(), this.callId="", this.modelCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ToolCallCompletedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"call_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call",kind:"message",T:lN
    }, {
      no:3,name:"model_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new VQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VQi, e, t)
  }
}, CPh=class KQi extends ie{
  constructor(e){
    super(), this.callId="", this.modelCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ToolCallDeltaUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"call_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_delta",kind:"message",T:S6o
    }, {
      no:3,name:"model_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new KQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KQi, e, t)
  }
}, hFc=class YQi extends ie{
  constructor(e){
    super(), this.callId="", this.argsTextDelta="", this.modelCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PartialToolCallUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"call_id",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call",kind:"message",T:lN
    }, {
      no:3,name:"args_text_delta",kind:"scalar",T:9
    }, {
      no:4,name:"model_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new YQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YQi, e, t)
  }
}, mFc=class ZQi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ThinkingDeltaUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"thinking_style",kind:"enum",T:v.getEnumType(_6o),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ZQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZQi, e, t)
  }
}, pFc=class XQi extends ie{
  constructor(e){
    super(), this.thinkingDurationMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ThinkingCompletedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"thinking_duration_ms",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new XQi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XQi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XQi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XQi, e, t)
  }
}, SPh=class eji extends ie{
  constructor(e){
    super(), this.tokens=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TokenDeltaUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tokens",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new eji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eji, e, t)
  }
}, kPh=class tji extends ie{
  constructor(e){
    super(), this.summary="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SummaryUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"summary",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tji, e, t)
  }
}, EPh=class nji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SummaryStartedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nji, e, t)
  }
}, xPh=class iji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.HeartbeatUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new iji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iji, e, t)
  }
}, TPh=class rji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SummaryCompletedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rji, e, t)
  }
}, IPh=class sji extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellOutputDeltaUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"stdout",kind:"message",T:PRc,oneof:"event"
    }, {
      no:2,name:"stderr",kind:"message",T:LRc,oneof:"event"
    }, {
      no:3,name:"exit",kind:"message",T:NRc,oneof:"event"
    }, {
      no:4,name:"start",kind:"message",T:MRc,oneof:"event"
    }
    ])
  }
  static fromBinary(e, t){
    return new sji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sji, e, t)
  }
}, gFc=class oji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.TurnEndedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"input_tokens",kind:"scalar",T:3,opt:!0
    }, {
      no:2,name:"output_tokens",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"cache_read_tokens",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"cache_write_tokens",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new oji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oji, e, t)
  }
}, DPh=class aji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.UserMessageAppendedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"message",T:KR
    }
    ])
  }
  static fromBinary(e, t){
    return new aji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aji, e, t)
  }
}, BPh=class cji extends ie{
  constructor(e){
    super(), this.stepId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StepStartedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"step_id",kind:"scalar",T:4
    }
    ])
  }
  static fromBinary(e, t){
    return new cji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cji, e, t)
  }
}, RPh=class lji extends ie{
  constructor(e){
    super(), this.stepId=Eo.zero, this.stepDurationMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StepCompletedUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"step_id",kind:"scalar",T:4
    }, {
      no:2,name:"step_duration_ms",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new lji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lji, e, t)
  }
}, PPh=class uji extends ie{
  constructor(e){
    super(), this.suggestion="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PromptSuggestionUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestion",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uji, e, t)
  }
}, K$=class dji extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.InteractionUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text_delta",kind:"message",T:b8n,oneof:"message"
    }, {
      no:7,name:"partial_tool_call",kind:"message",T:hFc,oneof:"message"
    }, {
      no:15,name:"tool_call_delta",kind:"message",T:CPh,oneof:"message"
    }, {
      no:2,name:"tool_call_started",kind:"message",T:v8n,oneof:"message"
    }, {
      no:3,name:"tool_call_completed",kind:"message",T:E6o,oneof:"message"
    }, {
      no:4,name:"thinking_delta",kind:"message",T:mFc,oneof:"message"
    }, {
      no:5,name:"thinking_completed",kind:"message",T:pFc,oneof:"message"
    }, {
      no:6,name:"user_message_appended",kind:"message",T:DPh,oneof:"message"
    }, {
      no:8,name:"token_delta",kind:"message",T:SPh,oneof:"message"
    }, {
      no:9,name:"summary",kind:"message",T:kPh,oneof:"message"
    }, {
      no:10,name:"summary_started",kind:"message",T:EPh,oneof:"message"
    }, {
      no:11,name:"summary_completed",kind:"message",T:TPh,oneof:"message"
    }, {
      no:12,name:"shell_output_delta",kind:"message",T:IPh,oneof:"message"
    }, {
      no:13,name:"heartbeat",kind:"message",T:xPh,oneof:"message"
    }, {
      no:14,name:"turn_ended",kind:"message",T:gFc,oneof:"message"
    }, {
      no:16,name:"step_started",kind:"message",T:BPh,oneof:"message"
    }, {
      no:17,name:"step_completed",kind:"message",T:RPh,oneof:"message"
    }, {
      no:18,name:"prompt_suggestion",kind:"message",T:PPh,oneof:"message"
    }, {
      no:19,name:"post_request_prompt",kind:"message",T:LPh,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new dji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dji, e, t)
  }
}, LPh=class hji extends ie{
  constructor(e){
    super(), this.title="", this.message="", this.buttonLabel="", this.buttonUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PostRequestPromptUpdate"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }, {
      no:3,name:"button_label",kind:"scalar",T:9
    }, {
      no:4,name:"button_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hji, e, t)
  }
}, fFc=class mji extends ie{
  constructor(e){
    super(), this.id=0, this.query={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.InteractionQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:13
    }, {
      no:2,name:"web_search_request_query",kind:"message",T:gBh,oneof:"query"
    }, {
      no:3,name:"ask_question_interaction_query",kind:"message",T:MPh,oneof:"query"
    }, {
      no:4,name:"switch_mode_request_query",kind:"message",T:u2c,oneof:"query"
    }, {
      no:7,name:"create_plan_request_query",kind:"message",T:uBh,oneof:"query"
    }, {
      no:8,name:"setup_vm_environment_args",kind:"message",T:p2c,oneof:"query"
    }, {
      no:9,name:"web_fetch_request_query",kind:"message",T:eRh,oneof:"query"
    }, {
      no:10,name:"pr_management_request_query",kind:"message",T:mRh,oneof:"query"
    }, {
      no:11,name:"mcp_auth_request_query",kind:"message",T:ARh,oneof:"query"
    }
    ])
  }
  static fromBinary(e, t){
    return new mji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mji, e, t)
  }
}, NPh=class pji extends ie{
  constructor(e){
    super(), this.id=0, this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.InteractionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:13
    }, {
      no:2,name:"web_search_request_response",kind:"message",T:fBh,oneof:"result"
    }, {
      no:3,name:"ask_question_interaction_response",kind:"message",T:FPh,oneof:"result"
    }, {
      no:4,name:"switch_mode_request_response",kind:"message",T:IBh,oneof:"result"
    }, {
      no:7,name:"create_plan_request_response",kind:"message",T:dBh,oneof:"result"
    }, {
      no:8,name:"setup_vm_environment_result",kind:"message",T:g2c,oneof:"result"
    }, {
      no:9,name:"web_fetch_request_response",kind:"message",T:tRh,oneof:"result"
    }, {
      no:10,name:"pr_management_result",kind:"message",T:A2c,oneof:"result"
    }, {
      no:11,name:"mcp_auth_request_response",kind:"message",T:yRh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new pji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pji, e, t)
  }
}, MPh=class gji extends ie{
  constructor(e){
    super(), this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AskQuestionInteractionQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:Q5t
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new gji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gji, e, t)
  }
}, FPh=class fji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AskQuestionInteractionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"result",kind:"message",T:cke
    }
    ])
  }
  static fromBinary(e, t){
    return new fji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fji, e, t)
  }
}, OPh=class bji extends ie{
  constructor(e){
    super(), this.trigger="", this.contextUsagePercent=0, this.contextTokens=Eo.zero, this.contextWindowSize=Eo.zero, this.messageCount=0, this.messagesToCompact=0, this.isFirstCompaction=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PreCompactRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"trigger",kind:"scalar",T:9
    }, {
      no:2,name:"context_usage_percent",kind:"scalar",T:1
    }, {
      no:3,name:"context_tokens",kind:"scalar",T:3
    }, {
      no:4,name:"context_window_size",kind:"scalar",T:3
    }, {
      no:5,name:"message_count",kind:"scalar",T:5
    }, {
      no:6,name:"messages_to_compact",kind:"scalar",T:5
    }, {
      no:7,name:"is_first_compaction",kind:"scalar",T:8
    }, {
      no:8,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bji, e, t)
  }
}, UPh=class vji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PreCompactRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vji, e, t)
  }
}, $Ph=class Aji extends ie{
  constructor(e){
    super(), this.subagentId="", this.subagentType="", this.task="", this.parentConversationId="", this.isParallelWorker=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentStartRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"subagent_id",kind:"scalar",T:9
    }, {
      no:2,name:"subagent_type",kind:"scalar",T:9
    }, {
      no:3,name:"task",kind:"scalar",T:9
    }, {
      no:4,name:"parent_conversation_id",kind:"scalar",T:9
    }, {
      no:5,name:"tool_call_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"subagent_model",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"is_parallel_worker",kind:"scalar",T:8
    }, {
      no:8,name:"git_branch",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aji, e, t)
  }
}, qPh=class yji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentStartRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"permission",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"user_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yji, e, t)
  }
}, HPh=class wji extends ie{
  constructor(e){
    super(), this.subagentId="", this.subagentType="", this.status="", this.durationMs=Eo.zero, this.parentConversationId="", this.messageCount=0, this.toolCallCount=0, this.modifiedFiles=[], this.loopCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentStopRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"subagent_id",kind:"scalar",T:9
    }, {
      no:2,name:"subagent_type",kind:"scalar",T:9
    }, {
      no:3,name:"status",kind:"scalar",T:9
    }, {
      no:4,name:"duration_ms",kind:"scalar",T:3
    }, {
      no:5,name:"summary",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"parent_conversation_id",kind:"scalar",T:9
    }, {
      no:7,name:"message_count",kind:"scalar",T:5
    }, {
      no:8,name:"tool_call_count",kind:"scalar",T:5
    }, {
      no:9,name:"error_message",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"modified_files",kind:"scalar",T:9,repeated:!0
    }, {
      no:11,name:"git_branch",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:13,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:14,name:"model",kind:"scalar",T:9,opt:!0
    }, {
      no:15,name:"loop_count",kind:"scalar",T:5
    }, {
      no:16,name:"task",kind:"scalar",T:9,opt:!0
    }, {
      no:17,name:"description",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wji, e, t)
  }
}, JPh=class _ji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentStopRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"followup_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _ji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ji, e, t)
  }
}, GPh=class Cji extends ie{
  constructor(e){
    super(), this.toolName="", this.toolUseId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PreToolUseRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_name",kind:"scalar",T:9
    }, {
      no:2,name:"tool_input",kind:"message",T:jR
    }, {
      no:3,name:"tool_use_id",kind:"scalar",T:9
    }, {
      no:4,name:"cwd",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cji, e, t)
  }
}, WPh=class Sji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PreToolUseRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"permission",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"user_message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"agent_message",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"updated_input",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sji, e, t)
  }
}, QPh=class kji extends ie{
  constructor(e){
    super(), this.toolName="", this.toolOutput="", this.durationMs=Eo.zero, this.toolUseId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PostToolUseRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_name",kind:"scalar",T:9
    }, {
      no:2,name:"tool_input",kind:"message",T:jR
    }, {
      no:3,name:"tool_output",kind:"scalar",T:9
    }, {
      no:4,name:"duration_ms",kind:"scalar",T:3
    }, {
      no:5,name:"tool_use_id",kind:"scalar",T:9
    }, {
      no:6,name:"cwd",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kji, e, t)
  }
}, jPh=class Eji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PostToolUseRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"additional_context",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Eji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eji, e, t)
  }
}, zPh=class xji extends ie{
  constructor(e){
    super(), this.toolName="", this.errorMessage="", this.failureType="", this.durationMs=Eo.zero, this.toolUseId="", this.isInterrupt=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PostToolUseFailureRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_name",kind:"scalar",T:9
    }, {
      no:2,name:"tool_input",kind:"message",T:jR
    }, {
      no:3,name:"error_message",kind:"scalar",T:9
    }, {
      no:4,name:"failure_type",kind:"scalar",T:9
    }, {
      no:5,name:"duration_ms",kind:"scalar",T:3
    }, {
      no:6,name:"tool_use_id",kind:"scalar",T:9
    }, {
      no:7,name:"is_interrupt",kind:"scalar",T:8
    }, {
      no:8,name:"conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"generation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xji, e, t)
  }
}, VPh=class Tji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PostToolUseFailureRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Tji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tji, e, t)
  }
}
}
}), KPh, bFc, YPh, vFc, ZPh, AFc, XPh, yFc, eLh, wFc, tLh, _Fc, nLh, CFc, iLh, x6o, SFc, T6o, rLh, kFc, EFc, xFc, sLh, TFc, oLh, aLh, cLh, lLh, Z5t, IFc, DFc, BFc, svt=