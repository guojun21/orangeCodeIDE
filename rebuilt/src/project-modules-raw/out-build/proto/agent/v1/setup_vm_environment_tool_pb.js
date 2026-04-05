// Module: out-build/proto/agent/v1/setup_vm_environment_tool_pb.js
// Offset: 3180673 (bundle byte offset)
// Size: 2108 bytes

Ka(), p2c=class RJi extends ie{
  constructor(e){
    super(), this.installCommand="", this.startCommand="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetupVmEnvironmentArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"install_command",kind:"scalar",T:9
    }, {
      no:3,name:"start_command",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new RJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RJi, e, t)
  }
}, g2c=class PJi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetupVmEnvironmentResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:UBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new PJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PJi, e, t)
  }
}, UBh=class LJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetupVmEnvironmentSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new LJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LJi, e, t)
  }
}, $Bh=class NJi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetupVmEnvironmentToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:p2c
    }, {
      no:2,name:"result",kind:"message",T:g2c
    }
    ])
  }
  static fromBinary(e, t){
    return new NJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NJi, e, t)
  }
}
}
}), qBh, HBh, JBh, GBh, WBh, rgA=