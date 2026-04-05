// Module: out-build/proto/agent/v1/switch_mode_tool_pb.js
// Offset: 3171361 (bundle byte offset)
// Size: 5221 bytes

Ka(), h8n=class gJi extends ie{
  constructor(e){
    super(), this.targetModeId="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"target_mode_id",kind:"scalar",T:9
    }, {
      no:2,name:"explanation",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new gJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gJi, e, t)
  }
}, c2c=class fJi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:EBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:xBh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:TBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new fJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fJi, e, t)
  }
}, EBh=class bJi extends ie{
  constructor(e){
    super(), this.fromModeId="", this.toModeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"from_mode_id",kind:"scalar",T:9
    }, {
      no:2,name:"to_mode_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bJi, e, t)
  }
}, xBh=class vJi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vJi, e, t)
  }
}, TBh=class AJi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new AJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AJi, e, t)
  }
}, l2c=class yJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:h8n
    }, {
      no:2,name:"result",kind:"message",T:c2c
    }
    ])
  }
  static fromBinary(e, t){
    return new yJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yJi, e, t)
  }
}, u2c=class wJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:h8n
    }
    ])
  }
  static fromBinary(e, t){
    return new wJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wJi, e, t)
  }
}, IBh=class _Ji extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"approved",kind:"message",T:DBh,oneof:"result"
    }, {
      no:2,name:"rejected",kind:"message",T:BBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new _Ji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Ji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Ji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Ji, e, t)
  }
}, DBh=class CJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeRequestResponse.Approved"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new CJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CJi, e, t)
  }
}, BBh=class SJi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SwitchModeRequestResponse.Rejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new SJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SJi, e, t)
  }
}
}
}), h2c, RBh=