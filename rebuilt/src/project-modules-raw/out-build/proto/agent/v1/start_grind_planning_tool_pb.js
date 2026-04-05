// Module: out-build/proto/agent/v1/start_grind_planning_tool_pb.js
// Offset: 3185402 (bundle byte offset)
// Size: 2635 bytes

Ka(), QBh=class qJi extends ie{
  constructor(e){
    super(), this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindPlanningArgs"
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
    return new qJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qJi, e, t)
  }
}, jBh=class HJi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindPlanningResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:zBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:VBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new HJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HJi, e, t)
  }
}, zBh=class JJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindPlanningSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new JJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JJi, e, t)
  }
}, VBh=class GJi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindPlanningError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new GJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GJi, e, t)
  }
}, KBh=class WJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.StartGrindPlanningToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:QBh
    }, {
      no:2,name:"result",kind:"message",T:jBh
    }
    ])
  }
  static fromBinary(e, t){
    return new WJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WJi, e, t)
  }
}
}
}), v6o, f2c, YBh, ZBh, XBh, b2c, eRh, tRh, nRh, iRh, rRh=