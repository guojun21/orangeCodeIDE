// Module: out-build/proto/agent/v1/pr_management_tool_pb.js
// Offset: 3193366 (bundle byte offset)
// Size: 6647 bytes

Ka(), v2c=class nGi extends ie{
  constructor(e){
    super(), this.toolCallId="", this.action={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"create_pr",kind:"message",T:sRh,oneof:"action"
    }, {
      no:3,name:"update_pr",kind:"message",T:oRh,oneof:"action"
    }
    ])
  }
  static fromBinary(e, t){
    return new nGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nGi, e, t)
  }
}, sRh=class iGi extends ie{
  constructor(e){
    super(), this.title="", this.body="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CreatePrAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"body",kind:"scalar",T:9
    }, {
      no:3,name:"base_branch",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"draft",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iGi, e, t)
  }
}, oRh=class rGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.UpdatePrAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pr_url",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"title",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"body",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"base_branch",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rGi, e, t)
  }
}, A2c=class sGi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:aRh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:cRh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:lRh,oneof:"result"
    }, {
      no:4,name:"registered",kind:"message",T:uRh,oneof:"result"
    }, {
      no:5,name:"needs_confirmation",kind:"message",T:dRh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new sGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sGi, e, t)
  }
}, aRh=class oGi extends ie{
  constructor(e){
    super(), this.prUrl="", this.prNumber=0, this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pr_url",kind:"scalar",T:9
    }, {
      no:2,name:"pr_number",kind:"scalar",T:5
    }, {
      no:3,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oGi, e, t)
  }
}, cRh=class aGi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new aGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aGi, e, t)
  }
}, lRh=class cGi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new cGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cGi, e, t)
  }
}, uRh=class lGi extends ie{
  constructor(e){
    super(), this.message="", this.title="", this.body="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementRegistered"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"title",kind:"scalar",T:9
    }, {
      no:3,name:"body",kind:"scalar",T:9
    }, {
      no:4,name:"base_branch",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"draft",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lGi, e, t)
  }
}, dRh=class uGi extends ie{
  constructor(e){
    super(), this.message="", this.discoveredPrUrl="", this.discoveredPrNumber=0, this.discoveredPrTitle="", this.branchName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementNeedsConfirmation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"discovered_pr_url",kind:"scalar",T:9
    }, {
      no:3,name:"discovered_pr_number",kind:"scalar",T:5
    }, {
      no:4,name:"discovered_pr_title",kind:"scalar",T:9
    }, {
      no:5,name:"branch_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uGi, e, t)
  }
}, hRh=class dGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:v2c
    }, {
      no:2,name:"result",kind:"message",T:A2c
    }
    ])
  }
  static fromBinary(e, t){
    return new dGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dGi, e, t)
  }
}, mRh=class hGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrManagementRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:v2c
    }
    ])
  }
  static fromBinary(e, t){
    return new hGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hGi, e, t)
  }
}
}
}), y2c, pRh, gRh, fRh, bRh, vRh, ARh, yRh, wRh, _Rh, agA=