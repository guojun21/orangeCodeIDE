// Module: out-build/proto/agent/v1/agent_skills_pb.js
// Offset: 3217421 (bundle byte offset)
// Size: 2214 bytes

Ka(), x2c=class $Gi extends ie{
  constructor(e){
    super(), this.fullPath="", this.content="", this.description="", this.environments=[], this.disabledEnvironments=[], this.disableModelInvocation=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AgentSkill"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"full_path",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9
    }, {
      no:4,name:"parse_error",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"disabled_environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"git_remote_origin",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"disable_model_invocation",kind:"scalar",T:8
    }, {
      no:9,name:"plugin",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"marketplace",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $Gi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Gi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Gi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Gi, e, t)
  }
}, hgA=class qGi extends ie{
  constructor(e){
    super(), this.fullPath="", this.description="", this.environments=[], this.disabledEnvironments=[], this.disableModelInvocation=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AgentSkillMetadata"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"full_path",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"parse_error",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"disabled_environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"git_remote_origin",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"disable_model_invocation",kind:"scalar",T:8
    }, {
      no:8,name:"plugin",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"marketplace",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qGi, e, t)
  }
}
}
}), T2c, I2c, D2c, LRh, NRh, mgA, MRh, FRh, ORh, pgA, m8n, URh, B2c, R2c, $Rh, P2c, QKe, L2c, j5t, Xbt=