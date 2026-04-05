// Module: out-build/proto/agent/v1/glob_tool_pb.js
// Offset: 3091239 (bundle byte offset)
// Size: 2958 bytes

Ka(), wMc=class Jqi extends ie{
  constructor(e){
    super(), this.globPattern="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GlobToolArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"target_directory",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"glob_pattern",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jqi, e, t)
  }
}, _Mc=class Gqi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GlobToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:lDh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:cDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new Gqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gqi, e, t)
  }
}, cDh=class Wqi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GlobToolError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Wqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wqi, e, t)
  }
}, lDh=class Qqi extends ie{
  constructor(e){
    super(), this.pattern="", this.path="", this.files=[], this.totalFiles=0, this.clientTruncated=!1, this.ripgrepTruncated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GlobToolSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pattern",kind:"scalar",T:9
    }, {
      no:2,name:"path",kind:"scalar",T:9
    }, {
      no:3,name:"files",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"total_files",kind:"scalar",T:5
    }, {
      no:5,name:"client_truncated",kind:"scalar",T:8
    }, {
      no:6,name:"ripgrep_truncated",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Qqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qqi, e, t)
  }
}, CMc=class jqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GlobToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:wMc
    }, {
      no:2,name:"result",kind:"message",T:_Mc
    }
    ])
  }
  static fromBinary(e, t){
    return new jqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jqi, e, t)
  }
}
}
}), G5t, t6o, dDh, hDh, SMc, mDh, pDh, gDh, fDh, bDh, vDh, egA, n6o=