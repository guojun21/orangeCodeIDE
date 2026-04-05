// Module: out-build/proto/agent/v1/shell_exec_pb.js
// Offset: 2671138 (bundle byte offset)
// Size: 15871 bytes

Ka(), P9e(), L9e(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CANCEL=1]="CANCEL", n[n.BACKGROUND=2]="BACKGROUND"
})(x5n||(x5n={
  
})), v.util.setEnumType(x5n, "agent.v1.TimeoutBehavior", [{
  no:0, name:"TIMEOUT_BEHAVIOR_UNSPECIFIED"
}, {
  no:1, name:"TIMEOUT_BEHAVIOR_CANCEL"
}, {
  no:2, name:"TIMEOUT_BEHAVIOR_BACKGROUND"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.USER_ABORT=1]="USER_ABORT", n[n.TIMEOUT=2]="TIMEOUT"
})(T5n||(T5n={
  
})), v.util.setEnumType(T5n, "agent.v1.ShellAbortReason", [{
  no:0, name:"SHELL_ABORT_REASON_UNSPECIFIED"
}, {
  no:1, name:"SHELL_ABORT_REASON_USER_ABORT"
}, {
  no:2, name:"SHELL_ABORT_REASON_TIMEOUT"
}
]), I5n=class Z2i extends ie{
  constructor(e){
    super(), this.parsingFailed=!1, this.executableCommands=[], this.hasRedirects=!1, this.hasCommandSubstitution=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellCommandParsingResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"parsing_failed",kind:"scalar",T:8
    }, {
      no:2,name:"executable_commands",kind:"message",T:j9o,repeated:!0
    }, {
      no:3,name:"has_redirects",kind:"scalar",T:8
    }, {
      no:4,name:"has_command_substitution",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Z2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Z2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Z2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Z2i, e, t)
  }
}, BRc=class X2i extends ie{
  constructor(e){
    super(), this.type="", this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellCommandParsingResult.ExecutableCommandArg"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new X2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new X2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new X2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(X2i, e, t)
  }
}, j9o=class eFi extends ie{
  constructor(e){
    super(), this.name="", this.args=[], this.fullText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellCommandParsingResult.ExecutableCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"args",kind:"message",T:BRc,repeated:!0
    }, {
      no:3,name:"full_text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new eFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eFi, e, t)
  }
}, RRc=class tFi extends ie{
  constructor(e){
    super(), this.commands=[], this.suggestedSandboxMode=D5n.UNSPECIFIED, this.classificationFailed=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CommandClassifierResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commands",kind:"message",T:PEh,repeated:!0
    }, {
      no:2,name:"suggested_sandbox_mode",kind:"enum",T:v.getEnumType(D5n)
    }, {
      no:3,name:"classification_failed",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new tFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tFi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SANDBOX=1]="SANDBOX", n[n.NO_SANDBOX=2]="NO_SANDBOX", n[n.UNDETERMINED=3]="UNDETERMINED"
})(D5n||(D5n={
  
})), v.util.setEnumType(D5n, "agent.v1.CommandClassifierResult.SuggestedSandboxMode", [{
  no:0, name:"SUGGESTED_SANDBOX_MODE_UNSPECIFIED"
}, {
  no:1, name:"SUGGESTED_SANDBOX_MODE_SANDBOX"
}, {
  no:2, name:"SUGGESTED_SANDBOX_MODE_NO_SANDBOX"
}, {
  no:3, name:"SUGGESTED_SANDBOX_MODE_UNDETERMINED"
}
]), PEh=class nFi extends ie{
  constructor(e){
    super(), this.name="", this.arguments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CommandClassifierResult.ClassifiedCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"arguments",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nFi, e, t)
  }
}, o5t=class iFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.timeout=0, this.toolCallId="", this.simpleCommands=[], this.hasInputRedirect=!1, this.hasOutputRedirect=!1, this.isBackground=!1, this.skipApproval=!1, this.timeoutBehavior=x5n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"timeout",kind:"scalar",T:5
    }, {
      no:4,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:5,name:"simple_commands",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"has_input_redirect",kind:"scalar",T:8
    }, {
      no:7,name:"has_output_redirect",kind:"scalar",T:8
    }, {
      no:8,name:"parsing_result",kind:"message",T:I5n
    }, {
      no:9,name:"requested_sandbox_policy",kind:"message",T:Hte,opt:!0
    }, {
      no:10,name:"file_output_threshold_bytes",kind:"scalar",T:4,opt:!0
    }, {
      no:11,name:"is_background",kind:"scalar",T:8
    }, {
      no:12,name:"skip_approval",kind:"scalar",T:8
    }, {
      no:13,name:"timeout_behavior",kind:"enum",T:v.getEnumType(x5n)
    }, {
      no:14,name:"hard_timeout",kind:"scalar",T:5,opt:!0
    }, {
      no:15,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:16,name:"classifier_result",kind:"message",T:RRc,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iFi, e, t)
  }
}, z9o=class rFi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:MEh,oneof:"result"
    }, {
      no:2,name:"failure",kind:"message",T:FEh,oneof:"result"
    }, {
      no:3,name:"timeout",kind:"message",T:OEh,oneof:"result"
    }, {
      no:4,name:"rejected",kind:"message",T:V9o,oneof:"result"
    }, {
      no:5,name:"spawn_error",kind:"message",T:UEh,oneof:"result"
    }, {
      no:7,name:"permission_denied",kind:"message",T:K9o,oneof:"result"
    }, {
      no:101,name:"sandbox_policy",kind:"message",T:Hte,opt:!0
    }, {
      no:102,name:"is_background",kind:"scalar",T:8,opt:!0
    }, {
      no:103,name:"terminals_folder",kind:"scalar",T:9,opt:!0
    }, {
      no:104,name:"pid",kind:"scalar",T:13,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rFi, e, t)
  }
}, PRc=class sFi extends ie{
  constructor(e){
    super(), this.data="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStreamStdout"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new sFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sFi, e, t)
  }
}, LRc=class oFi extends ie{
  constructor(e){
    super(), this.data="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStreamStderr"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oFi, e, t)
  }
}, NRc=class aFi extends ie{
  constructor(e){
    super(), this.code=0, this.cwd="", this.aborted=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStreamExit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:13
    }, {
      no:2,name:"cwd",kind:"scalar",T:9
    }, {
      no:3,name:"output_location",kind:"message",T:Pbt,opt:!0
    }, {
      no:4,name:"aborted",kind:"scalar",T:8
    }, {
      no:5,name:"abort_reason",kind:"enum",T:v.getEnumType(T5n),opt:!0
    }, {
      no:6,name:"local_execution_time_ms",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new aFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aFi, e, t)
  }
}, MRc=class cFi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStreamStart"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sandbox_policy",kind:"message",T:Hte,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cFi, e, t)
  }
}, LEh=class lFi extends ie{
  constructor(e){
    super(), this.shellId=0, this.command="", this.workingDirectory="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStreamBackgrounded"
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
    }, {
      no:5,name:"ms_to_wait",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lFi, e, t)
  }
}, NEh=class uFi extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellStream"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"stdout",kind:"message",T:PRc,oneof:"event"
    }, {
      no:2,name:"stderr",kind:"message",T:LRc,oneof:"event"
    }, {
      no:3,name:"exit",kind:"message",T:NRc,oneof:"event"
    }, {
      no:4,name:"start",kind:"message",T:MRc,oneof:"event"
    }, {
      no:5,name:"rejected",kind:"message",T:V9o,oneof:"event"
    }, {
      no:6,name:"permission_denied",kind:"message",T:K9o,oneof:"event"
    }, {
      no:7,name:"backgrounded",kind:"message",T:LEh,oneof:"event"
    }
    ])
  }
  static fromBinary(e, t){
    return new uFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uFi, e, t)
  }
}, MEh=class dFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.exitCode=0, this.signal="", this.stdout="", this.stderr="", this.executionTime=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"exit_code",kind:"scalar",T:5
    }, {
      no:4,name:"signal",kind:"scalar",T:9
    }, {
      no:5,name:"stdout",kind:"scalar",T:9
    }, {
      no:6,name:"stderr",kind:"scalar",T:9
    }, {
      no:7,name:"execution_time",kind:"scalar",T:5
    }, {
      no:8,name:"output_location",kind:"message",T:Pbt,opt:!0
    }, {
      no:9,name:"shell_id",kind:"scalar",T:13,opt:!0
    }, {
      no:10,name:"interleaved_output",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"pid",kind:"scalar",T:13,opt:!0
    }, {
      no:12,name:"ms_to_wait",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"local_execution_time_ms",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dFi, e, t)
  }
}, FEh=class hFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.exitCode=0, this.signal="", this.stdout="", this.stderr="", this.executionTime=0, this.aborted=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellFailure"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"exit_code",kind:"scalar",T:5
    }, {
      no:4,name:"signal",kind:"scalar",T:9
    }, {
      no:5,name:"stdout",kind:"scalar",T:9
    }, {
      no:6,name:"stderr",kind:"scalar",T:9
    }, {
      no:7,name:"execution_time",kind:"scalar",T:5
    }, {
      no:8,name:"output_location",kind:"message",T:Pbt,opt:!0
    }, {
      no:9,name:"interleaved_output",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"abort_reason",kind:"enum",T:v.getEnumType(T5n),opt:!0
    }, {
      no:11,name:"aborted",kind:"scalar",T:8
    }, {
      no:12,name:"local_execution_time_ms",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hFi, e, t)
  }
}, OEh=class mFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.timeoutMs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellTimeout"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"timeout_ms",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new mFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mFi, e, t)
  }
}, V9o=class pFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.reason="", this.isReadonly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"reason",kind:"scalar",T:9
    }, {
      no:4,name:"is_readonly",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new pFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pFi, e, t)
  }
}, K9o=class gFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.error="", this.isReadonly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellPermissionDenied"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"working_directory",kind:"scalar",T:9
    }, {
      no:3,name:"error",kind:"scalar",T:9
    }, {
      no:4,name:"is_readonly",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new gFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gFi, e, t)
  }
}, UEh=class fFi extends ie{
  constructor(e){
    super(), this.command="", this.workingDirectory="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellSpawnError"
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
    return new fFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fFi, e, t)
  }
}, fpA=class bFi extends ie{
  constructor(e){
    super(), this.stdoutDelta="", this.stderrDelta="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ShellPartialResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"stdout_delta",kind:"scalar",T:9
    }, {
      no:2,name:"stderr_delta",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bFi, e, t)
  }
}
}
}), $Eh, qEh, HEh, JEh, N9e, Nbt, GEh, WEh, a5t=