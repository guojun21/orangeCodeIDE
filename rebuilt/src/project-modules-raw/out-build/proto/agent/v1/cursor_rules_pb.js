// Module: out-build/proto/agent/v1/cursor_rules_pb.js
// Offset: 3103213 (bundle byte offset)
// Size: 3908 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.TEAM=1]="TEAM", n[n.USER=2]="USER"
})(Z9n||(Z9n={
  
})), v.util.setEnumType(Z9n, "agent.v1.CursorRuleSource", [{
  no:0, name:"CURSOR_RULE_SOURCE_UNSPECIFIED"
}, {
  no:1, name:"CURSOR_RULE_SOURCE_TEAM"
}, {
  no:2, name:"CURSOR_RULE_SOURCE_USER"
}
]), ADh=class a7i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRuleTypeGlobal"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new a7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new a7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new a7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(a7i, e, t)
  }
}, yDh=class c7i extends ie{
  constructor(e){
    super(), this.globs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRuleTypeFileGlobs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"globs",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new c7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new c7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new c7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(c7i, e, t)
  }
}, wDh=class l7i extends ie{
  constructor(e){
    super(), this.description="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRuleTypeAgentFetched"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new l7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new l7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new l7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(l7i, e, t)
  }
}, EMc=class u7i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRuleTypeManuallyAttached"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new u7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new u7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new u7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(u7i, e, t)
  }
}, xMc=class d7i extends ie{
  constructor(e){
    super(), this.type={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRuleType"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"global",kind:"message",T:ADh,oneof:"type"
    }, {
      no:2,name:"file_globbed",kind:"message",T:yDh,oneof:"type"
    }, {
      no:3,name:"agent_fetched",kind:"message",T:wDh,oneof:"type"
    }, {
      no:4,name:"manually_attached",kind:"message",T:EMc,oneof:"type"
    }
    ])
  }
  static fromBinary(e, t){
    return new d7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new d7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new d7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(d7i, e, t)
  }
}, X9n=class h7i extends ie{
  constructor(e){
    super(), this.fullPath="", this.content="", this.source=Z9n.UNSPECIFIED, this.environments=[], this.disabledEnvironments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.CursorRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"full_path",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"type",kind:"message",T:xMc
    }, {
      no:4,name:"source",kind:"enum",T:v.getEnumType(Z9n)
    }, {
      no:5,name:"git_remote_origin",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"parse_error",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"disabled_environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:9,name:"plugin",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"marketplace",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new h7i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new h7i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new h7i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(h7i, e, t)
  }
}
}
}), e8n, s6o, t8n, _Dh, TMc, CDh, o6o=