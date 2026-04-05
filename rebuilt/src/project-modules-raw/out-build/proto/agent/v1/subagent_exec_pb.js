// Module: out-build/proto/agent/v1/subagent_exec_pb.js
// Offset: 3462013 (bundle byte offset)
// Size: 3895 bytes

Ka(), Jk(), nMh=class YKi extends ie{
  constructor(e){
    super(), this.toolCallId="", this.subagentType="", this.modelId="", this.prompt="", this.readonly=!1, this.credentials={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"subagent_type",kind:"scalar",T:9
    }, {
      no:3,name:"model_id",kind:"scalar",T:9
    }, {
      no:4,name:"prompt",kind:"scalar",T:9
    }, {
      no:5,name:"readonly",kind:"scalar",T:8
    }, {
      no:6,name:"resume_agent_id",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"run_in_background",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"continuation_config",kind:"message",T:iMh
    }, {
      no:9,name:"parent_conversation_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"api_key_credentials",kind:"message",T:V5t,oneof:"credentials"
    }, {
      no:11,name:"azure_credentials",kind:"message",T:K5t,oneof:"credentials"
    }, {
      no:12,name:"bedrock_credentials",kind:"message",T:Y5t,oneof:"credentials"
    }
    ])
  }
  static fromBinary(e, t){
    return new YKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YKi, e, t)
  }
}, iMh=class ZKi extends ie{
  constructor(e){
    super(), this.idleThreshold=0, this.maxLoops=0, this.nudgeMessage="", this.escapeMessageTemplate="", this.collectBackgroundChildren=!1, this.childrenCompletedMessageTemplate="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ClientContinuationConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"idle_threshold",kind:"scalar",T:5
    }, {
      no:2,name:"max_loops",kind:"scalar",T:5
    }, {
      no:3,name:"nudge_message",kind:"scalar",T:9
    }, {
      no:4,name:"escape_message_template",kind:"scalar",T:9
    }, {
      no:5,name:"collect_background_children",kind:"scalar",T:8
    }, {
      no:6,name:"children_completed_message_template",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ZKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZKi, e, t)
  }
}, rMh=class XKi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:sMh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:oMh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new XKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XKi, e, t)
  }
}, sMh=class eYi extends ie{
  constructor(e){
    super(), this.agentId="", this.toolCallCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"agent_id",kind:"scalar",T:9
    }, {
      no:2,name:"final_message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"tool_call_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new eYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eYi, e, t)
  }
}, oMh=class tYi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SubagentError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"agent_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tYi, e, t)
  }
}
}
}), aMh, cMh, lMh, R8n, e4c, CgA, SgA, $Re, P8n, uMh, dMh, hMh, mMh, o9t=