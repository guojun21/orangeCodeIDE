// Module: out-build/proto/agent/v1/start_grind_execution_tool_pb.js
// Offset: 3182781 (bundle byte offset)
// Size: 2621 bytes

Ka(), qBh=class MJi extends ie{
  constructor(e){
    super(), this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindExecutionArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"explanation",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new MJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MJi, e, t)
  }
}, HBh=class FJi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindExecutionResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:JBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:GBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new FJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FJi, e, t)
  }
}, JBh=class OJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindExecutionSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new OJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OJi, e, t)
  }
}, GBh=class UJi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindExecutionError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new UJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UJi, e, t)
  }
}, WBh=class $Ji extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindExecutionToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:qBh
    }, {
      no:2,name:"result",kind:"message",T:HBh
    }
    ])
  }
  static fromBinary(e, t){
    return new $Ji().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Ji().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Ji().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Ji, e, t)
  }
}
}
}), QBh, jBh, zBh, VBh, KBh, sgA=