// Module: out-build/proto/agent/v1/background_shell_exec_pb.js
// Offset: 2687009 (bundle byte offset)
// Size: 5063 bytes

Ka(), Lbt(), P9e(), $Eh=class vFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.toolCallId="", this.enableWriteShellStdinTool=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundShellSpawnArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:4,name:"parsing_result",kind:"message",T:I5n
    }, {
      no:5,name:"sandbox_policy",kind:"message",T:Hte,opt:!0
    }, {
      no:6,name:"enable_write_shell_stdin_tool",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new vFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vFi, e, t)
  }
}, qEh=class AFi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundShellSpawnResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:HEh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:JEh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:V9o,oneof:"result"
    }, {
      no:4,name:"permission_denied",kind:"message",T:K9o,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new AFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AFi, e, t)
  }
}, HEh=class yFi extends ie{
  constructor(e){
    super(), this.shellId=0, this.command="", this.workingDirectory="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundShellSpawnSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_id",kind:"scalar",T:13
    }, {
      no:2,name:"command",kind:"scalar",T:9
    }, {
      no:3,name:"working_directory",kind:"scalar",T:9
    }, {
      no:4,name:"pid",kind:"scalar",T:13,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yFi, e, t)
  }
}, JEh=class wFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.BackgroundShellSpawnError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new wFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wFi, e, t)
  }
}, N9e=class _Fi extends ie{
  constructor(e){
    super(), this.shellId=0, this.chars="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WriteShellStdinArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_id",kind:"scalar",T:13
    }, {
      no:2,name:"chars",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _Fi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Fi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Fi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Fi, e, t)
  }
}, Nbt=class CFi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WriteShellStdinResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:GEh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:WEh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new CFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CFi, e, t)
  }
}, GEh=class SFi extends ie{
  constructor(e){
    super(), this.shellId=0, this.terminalFileLengthBeforeInputWritten=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WriteShellStdinSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shell_id",kind:"scalar",T:13
    }, {
      no:2,name:"terminal_file_length_before_input_written",kind:"scalar",T:13
    }
    ])
  }
  static fromBinary(e, t){
    return new SFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SFi, e, t)
  }
}, WEh=class kFi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WriteShellStdinError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kFi, e, t)
  }
}
}
}), PKe, Y9o, LKe, c5t, QEh, jEh, zEh, VEh, Mbt=