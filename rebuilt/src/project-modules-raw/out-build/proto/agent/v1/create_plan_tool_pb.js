// Module: out-build/proto/agent/v1/create_plan_tool_pb.js
// Offset: 3151579 (bundle byte offset)
// Size: 4405 bytes

Ka(), a6o(), c8n=class PHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:l8n
    }, {
      no:2,name:"result",kind:"message",T:u8n
    }
    ])
  }
  static fromBinary(e, t){
    return new PHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PHi, e, t)
  }
}, zMc=class LHi extends ie{
  constructor(e){
    super(), this.name="", this.todos=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.Phase"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"todos",kind:"message",T:U9e,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new LHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LHi, e, t)
  }
}, l8n=class NHi extends ie{
  constructor(e){
    super(), this.plan="", this.todos=[], this.overview="", this.name="", this.isProject=!1, this.phases=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plan",kind:"scalar",T:9
    }, {
      no:2,name:"todos",kind:"message",T:U9e,repeated:!0
    }, {
      no:3,name:"overview",kind:"scalar",T:9
    }, {
      no:4,name:"name",kind:"scalar",T:9
    }, {
      no:5,name:"is_project",kind:"scalar",T:8
    }, {
      no:6,name:"phases",kind:"message",T:zMc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new NHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NHi, e, t)
  }
}, u8n=class MHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, this.planUri="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:VMc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:lBh,oneof:"result"
    }, {
      no:3,name:"plan_uri",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new MHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MHi, e, t)
  }
}, VMc=class FHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new FHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FHi, e, t)
  }
}, lBh=class OHi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new OHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OHi, e, t)
  }
}, uBh=class UHi extends ie{
  constructor(e){
    super(), this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:l8n
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new UHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UHi, e, t)
  }
}, dBh=class $Hi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePlanRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"result",kind:"message",T:u8n
    }
    ])
  }
  static fromBinary(e, t){
    return new $Hi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Hi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Hi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Hi, e, t)
  }
}
}
}), p6o, YMc, hBh, mBh, pBh, ZMc, XMc, gBh, fBh, bBh, vBh, ABh=