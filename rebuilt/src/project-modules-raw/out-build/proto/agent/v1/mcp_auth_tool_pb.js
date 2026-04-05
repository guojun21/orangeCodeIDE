// Module: out-build/proto/agent/v1/mcp_auth_tool_pb.js
// Offset: 3200013 (bundle byte offset)
// Size: 5119 bytes

Ka(), y2c=class mGi extends ie{
  constructor(e){
    super(), this.serverIdentifier="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_identifier",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mGi, e, t)
  }
}, pRh=class pGi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:gRh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:fRh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:bRh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new pGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pGi, e, t)
  }
}, gRh=class gGi extends ie{
  constructor(e){
    super(), this.serverIdentifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_identifier",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new gGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gGi, e, t)
  }
}, fRh=class fGi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new fGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fGi, e, t)
  }
}, bRh=class bGi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bGi, e, t)
  }
}, vRh=class vGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:y2c
    }, {
      no:2,name:"result",kind:"message",T:pRh
    }
    ])
  }
  static fromBinary(e, t){
    return new vGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vGi, e, t)
  }
}, ARh=class AGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:y2c
    }
    ])
  }
  static fromBinary(e, t){
    return new AGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AGi, e, t)
  }
}, yRh=class yGi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"approved",kind:"message",T:wRh,oneof:"result"
    }, {
      no:2,name:"rejected",kind:"message",T:_Rh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new yGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yGi, e, t)
  }
}, wRh=class wGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthRequestResponse.Approved"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new wGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wGi, e, t)
  }
}, _Rh=class _Gi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpAuthRequestResponse.Rejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _Gi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Gi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Gi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Gi, e, t)
  }
}
}
}), CRh, w2c, _2c, SRh, kRh, ERh, xRh, cgA=