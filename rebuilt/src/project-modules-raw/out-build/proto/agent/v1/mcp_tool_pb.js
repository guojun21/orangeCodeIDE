// Module: out-build/proto/agent/v1/mcp_tool_pb.js
// Offset: 3146932 (bundle byte offset)
// Size: 1816 bytes

Ka(), o8n(), rBh=class kHi extends ie{
  constructor(e){
    super(), this.error="", this.readToolDefReminder="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }, {
      no:2,name:"read_tool_def_reminder",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kHi, e, t)
  }
}, sBh=class EHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:OMc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:rBh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:UMc,oneof:"result"
    }, {
      no:4,name:"permission_denied",kind:"message",T:$Mc,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new EHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new EHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new EHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(EHi, e, t)
  }
}, a8n=class xHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:W5t
    }, {
      no:2,name:"result",kind:"message",T:sBh
    }
    ])
  }
  static fromBinary(e, t){
    return new xHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xHi, e, t)
  }
}
}
}), WMc, QMc, jMc, oBh, aBh, cBh=