// Module: out-build/proto/agent/v1/grep_exec_pb.js
// Offset: 3094197 (bundle byte offset)
// Size: 8415 bytes

Ka(), P9e(), G5t=class zqi extends ie{
  constructor(e){
    super(), this.pattern="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pattern",kind:"scalar",T:9
    }, {
      no:2,name:"path",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"glob",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"output_mode",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"context_before",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"context_after",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"context",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"case_insensitive",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"type",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"head_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"multiline",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"sort",kind:"scalar",T:9,opt:!0
    }, {
      no:13,name:"sort_ascending",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:15,name:"sandbox_policy",kind:"message",T:Hte,opt:!0
    }, {
      no:16,name:"offset",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zqi, e, t)
  }
}, t6o=class Vqi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:hDh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:dDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new Vqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vqi, e, t)
  }
}, dDh=class Kqi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Kqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kqi, e, t)
  }
}, hDh=class Yqi extends ie{
  constructor(e){
    super(), this.pattern="", this.path="", this.outputMode="", this.workspaceResults={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pattern",kind:"scalar",T:9
    }, {
      no:2,name:"path",kind:"scalar",T:9
    }, {
      no:3,name:"output_mode",kind:"scalar",T:9
    }, {
      no:4,name:"workspace_results",kind:"map",K:9,V:{
        kind:"message",T:SMc
      }
    }, {
      no:5,name:"active_editor_result",kind:"message",T:SMc,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yqi, e, t)
  }
}, SMc=class Zqi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepUnionResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"count",kind:"message",T:mDh,oneof:"result"
    }, {
      no:2,name:"files",kind:"message",T:gDh,oneof:"result"
    }, {
      no:3,name:"content",kind:"message",T:fDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new Zqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zqi, e, t)
  }
}, mDh=class Xqi extends ie{
  constructor(e){
    super(), this.counts=[], this.totalFiles=0, this.totalMatches=0, this.clientTruncated=!1, this.ripgrepTruncated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepCountResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"counts",kind:"message",T:pDh,repeated:!0
    }, {
      no:2,name:"total_files",kind:"scalar",T:5
    }, {
      no:3,name:"total_matches",kind:"scalar",T:5
    }, {
      no:4,name:"client_truncated",kind:"scalar",T:8
    }, {
      no:5,name:"ripgrep_truncated",kind:"scalar",T:8
    }, {
      no:6,name:"head_limit_applied",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"offset_applied",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xqi, e, t)
  }
}, pDh=class e7i extends ie{
  constructor(e){
    super(), this.file="", this.count=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepFileCount"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file",kind:"scalar",T:9
    }, {
      no:2,name:"count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new e7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new e7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new e7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(e7i, e, t)
  }
}, gDh=class t7i extends ie{
  constructor(e){
    super(), this.files=[], this.totalFiles=0, this.clientTruncated=!1, this.ripgrepTruncated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepFilesResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"files",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"total_files",kind:"scalar",T:5
    }, {
      no:3,name:"client_truncated",kind:"scalar",T:8
    }, {
      no:4,name:"ripgrep_truncated",kind:"scalar",T:8
    }, {
      no:5,name:"head_limit_applied",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"offset_applied",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new t7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new t7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new t7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(t7i, e, t)
  }
}, fDh=class n7i extends ie{
  constructor(e){
    super(), this.matches=[], this.totalLines=0, this.totalMatchedLines=0, this.clientTruncated=!1, this.ripgrepTruncated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepContentResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"matches",kind:"message",T:bDh,repeated:!0
    }, {
      no:2,name:"total_lines",kind:"scalar",T:5
    }, {
      no:3,name:"total_matched_lines",kind:"scalar",T:5
    }, {
      no:4,name:"client_truncated",kind:"scalar",T:8
    }, {
      no:5,name:"ripgrep_truncated",kind:"scalar",T:8
    }, {
      no:6,name:"head_limit_applied",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"offset_applied",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new n7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new n7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new n7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(n7i, e, t)
  }
}, bDh=class i7i extends ie{
  constructor(e){
    super(), this.file="", this.matches=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepFileMatch"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file",kind:"scalar",T:9
    }, {
      no:2,name:"matches",kind:"message",T:vDh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new i7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new i7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new i7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(i7i, e, t)
  }
}, vDh=class r7i extends ie{
  constructor(e){
    super(), this.lineNumber=0, this.content="", this.contentTruncated=!1, this.isContextLine=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepContentMatch"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line_number",kind:"scalar",T:5
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"content_truncated",kind:"scalar",T:8
    }, {
      no:4,name:"is_context_line",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new r7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new r7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new r7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(r7i, e, t)
  }
}, egA=class s7i extends ie{
  constructor(e){
    super(), this.pattern="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GrepStream"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pattern",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new s7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new s7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new s7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(s7i, e, t)
  }
}
}
}), i6o, kMc=