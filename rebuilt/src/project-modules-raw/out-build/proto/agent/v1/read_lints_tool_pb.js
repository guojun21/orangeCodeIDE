// Module: out-build/proto/agent/v1/read_lints_tool_pb.js
// Offset: 3129422 (bundle byte offset)
// Size: 4709 bytes

Ka(), s8n(), L9e(), NMc=class V7i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadLintsToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:MMc
    }, {
      no:2,name:"result",kind:"message",T:FMc
    }
    ])
  }
  static fromBinary(e, t){
    return new V7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new V7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new V7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(V7i, e, t)
  }
}, MMc=class K7i extends ie{
  constructor(e){
    super(), this.paths=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadLintsToolArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"paths",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new K7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new K7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new K7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(K7i, e, t)
  }
}, FMc=class Y7i extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadLintsToolResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:$Dh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:GDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new Y7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Y7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Y7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Y7i, e, t)
  }
}, $Dh=class Z7i extends ie{
  constructor(e){
    super(), this.fileDiagnostics=[], this.totalFiles=0, this.totalDiagnostics=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadLintsToolSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_diagnostics",kind:"message",T:qDh,repeated:!0
    }, {
      no:2,name:"total_files",kind:"scalar",T:5
    }, {
      no:3,name:"total_diagnostics",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Z7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Z7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Z7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Z7i, e, t)
  }
}, qDh=class X7i extends ie{
  constructor(e){
    super(), this.path="", this.diagnostics=[], this.diagnosticsCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FileDiagnostics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"diagnostics",kind:"message",T:HDh,repeated:!0
    }, {
      no:3,name:"diagnostics_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new X7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new X7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new X7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(X7i, e, t)
  }
}, HDh=class eHi extends ie{
  constructor(e){
    super(), this.severity=Ybt.UNSPECIFIED, this.message="", this.source="", this.code="", this.isStale=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"severity",kind:"enum",T:v.getEnumType(Ybt)
    }, {
      no:2,name:"range",kind:"message",T:JDh
    }, {
      no:3,name:"message",kind:"scalar",T:9
    }, {
      no:4,name:"source",kind:"scalar",T:9
    }, {
      no:5,name:"code",kind:"scalar",T:9
    }, {
      no:6,name:"is_stale",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new eHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eHi, e, t)
  }
}, JDh=class tHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start",kind:"message",T:bz
    }, {
      no:2,name:"end",kind:"message",T:bz
    }
    ])
  }
  static fromBinary(e, t){
    return new tHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tHi, e, t)
  }
}, GDh=class nHi extends ie{
  constructor(e){
    super(), this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadLintsToolError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new nHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nHi, e, t)
  }
}
}
}), W5t, QDh, jDh, zDh, VDh, KDh, OMc, YDh, UMc, $Mc, d6o, h6o, qMc, HMc, ZDh, XDh, m6o, JMc, eBh, tBh, nBh, iBh, o8n=