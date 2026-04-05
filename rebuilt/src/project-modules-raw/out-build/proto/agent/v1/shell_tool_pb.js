// Module: out-build/proto/agent/v1/shell_tool_pb.js
// Offset: 3083249 (bundle byte offset)
// Size: 2174 bytes

Ka(), Lbt(), Y8o=class Iqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:o5t
    }, {
      no:2,name:"result",kind:"message",T:z9o
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Iqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Iqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Iqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Iqi, e, t)
  }
}, ZIh=class Dqi extends ie{
  constructor(e){
    super(), this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellToolCallStdoutDelta"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Dqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dqi, e, t)
  }
}, XIh=class Bqi extends ie{
  constructor(e){
    super(), this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellToolCallStderrDelta"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bqi, e, t)
  }
}, eDh=class Rqi extends ie{
  constructor(e){
    super(), this.delta={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellToolCallDelta"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"stdout",kind:"message",T:ZIh,oneof:"delta"
    }, {
      no:2,name:"stderr",kind:"message",T:XIh,oneof:"delta"
    }
    ])
  }
  static fromBinary(e, t){
    return new Rqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rqi, e, t)
  }
}
}
}), J5t, Z8o, tDh, nDh, iDh, rDh, sDh, oDh, aDh, X8o=