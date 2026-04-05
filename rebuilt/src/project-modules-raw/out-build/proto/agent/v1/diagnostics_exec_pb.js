// Module: out-build/proto/agent/v1/diagnostics_exec_pb.js
// Offset: 3124237 (bundle byte offset)
// Size: 5185 bytes

Ka(), L9e(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ERROR=1]="ERROR", n[n.WARNING=2]="WARNING", n[n.INFORMATION=3]="INFORMATION", n[n.HINT=4]="HINT"
})(Ybt||(Ybt={
  
})), v.util.setEnumType(Ybt, "agent.v1.DiagnosticSeverity", [{
  no:0, name:"DIAGNOSTIC_SEVERITY_UNSPECIFIED"
}, {
  no:1, name:"DIAGNOSTIC_SEVERITY_ERROR"
}, {
  no:2, name:"DIAGNOSTIC_SEVERITY_WARNING"
}, {
  no:3, name:"DIAGNOSTIC_SEVERITY_INFORMATION"
}, {
  no:4, name:"DIAGNOSTIC_SEVERITY_HINT"
}
]), r8n=class q7i extends ie{
  constructor(e){
    super(), this.path="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new q7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new q7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new q7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(q7i, e, t)
  }
}, u6o=class H7i extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:LDh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:MDh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:FDh,oneof:"result"
    }, {
      no:4,name:"file_not_found",kind:"message",T:ODh,oneof:"result"
    }, {
      no:5,name:"permission_denied",kind:"message",T:UDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new H7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new H7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new H7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(H7i, e, t)
  }
}, LDh=class J7i extends ie{
  constructor(e){
    super(), this.path="", this.diagnostics=[], this.totalDiagnostics=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"diagnostics",kind:"message",T:NDh,repeated:!0
    }, {
      no:3,name:"total_diagnostics",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new J7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new J7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new J7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(J7i, e, t)
  }
}, NDh=class G7i extends ie{
  constructor(e){
    super(), this.severity=Ybt.UNSPECIFIED, this.message="", this.source="", this.code="", this.isStale=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.Diagnostic"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"severity",kind:"enum",T:v.getEnumType(Ybt)
    }, {
      no:2,name:"range",kind:"message",T:NRe
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
    return new G7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new G7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new G7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(G7i, e, t)
  }
}, MDh=class W7i extends ie{
  constructor(e){
    super(), this.path="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new W7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new W7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new W7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(W7i, e, t)
  }
}, FDh=class Q7i extends ie{
  constructor(e){
    super(), this.path="", this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Q7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Q7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Q7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Q7i, e, t)
  }
}, ODh=class j7i extends ie{
  constructor(e){
    super(), this.path="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsFileNotFound"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new j7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new j7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new j7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(j7i, e, t)
  }
}, UDh=class z7i extends ie{
  constructor(e){
    super(), this.path="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DiagnosticsPermissionDenied"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new z7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new z7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new z7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(z7i, e, t)
  }
}
}
}), NMc, MMc, FMc, $Dh, qDh, HDh, JDh, GDh, WDh=