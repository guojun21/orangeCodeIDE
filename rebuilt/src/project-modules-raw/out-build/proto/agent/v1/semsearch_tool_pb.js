// Module: out-build/proto/agent/v1/semsearch_tool_pb.js
// Offset: 3148748 (bundle byte offset)
// Size: 2831 bytes

Ka(), jY(), WMc=class THi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SemSearchToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:QMc
    }, {
      no:2,name:"result",kind:"message",T:jMc
    }
    ])
  }
  static fromBinary(e, t){
    return new THi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new THi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new THi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(THi, e, t)
  }
}, QMc=class IHi extends ie{
  constructor(e){
    super(), this.query="", this.targetDirectories=[], this.explanation="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SemSearchToolArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"target_directories",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"explanation",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new IHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new IHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new IHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(IHi, e, t)
  }
}, jMc=class DHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SemSearchToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:oBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:aBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new DHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DHi, e, t)
  }
}, oBh=class BHi extends ie{
  constructor(e){
    super(), this.results="", this.codeResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SemSearchToolSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"scalar",T:9
    }, {
      no:2,name:"code_results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new BHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BHi, e, t)
  }
}, aBh=class RHi extends ie{
  constructor(e){
    super(), this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SemSearchToolError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new RHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RHi, e, t)
  }
}
}
}), c8n, zMc, l8n, u8n, VMc, lBh, uBh, dBh, KMc=