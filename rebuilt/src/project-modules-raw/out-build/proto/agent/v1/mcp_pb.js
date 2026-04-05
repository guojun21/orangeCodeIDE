// Module: out-build/proto/agent/v1/mcp_pb.js
// Offset: 3212864 (bundle byte offset)
// Size: 4557 bytes

Ka(), C2c=class PGi extends ie{
  constructor(e){
    super(), this.name="", this.providerIdentifier="", this.toolName="", this.description="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolDefinition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"provider_identifier",kind:"scalar",T:9
    }, {
      no:5,name:"tool_name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"input_schema",kind:"message",T:Zde
    }
    ])
  }
  static fromBinary(e, t){
    return new PGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PGi, e, t)
  }
}, S2c=class LGi extends ie{
  constructor(e){
    super(), this.mcpTools=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpTools"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"mcp_tools",kind:"message",T:C2c,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new LGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LGi, e, t)
  }
}, DRh=class NGi extends ie{
  constructor(e){
    super(), this.serverName="", this.instructions="", this.serverIdentifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpInstructions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_name",kind:"scalar",T:9
    }, {
      no:2,name:"instructions",kind:"scalar",T:9
    }, {
      no:3,name:"server_identifier",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new NGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NGi, e, t)
  }
}, k2c=class MGi extends ie{
  constructor(e){
    super(), this.serverName="", this.serverIdentifier="", this.tools=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_name",kind:"scalar",T:9
    }, {
      no:2,name:"server_identifier",kind:"scalar",T:9
    }, {
      no:3,name:"folder_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"server_use_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"tools",kind:"message",T:BRh,repeated:!0
    }, {
      no:7,name:"plugin",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"marketplace",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new MGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MGi, e, t)
  }
}, BRh=class FGi extends ie{
  constructor(e){
    super(), this.toolName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_name",kind:"scalar",T:9
    }, {
      no:2,name:"definition_path",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"input_schema",kind:"message",T:Zde,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new FGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FGi, e, t)
  }
}, A6o=class OGi extends ie{
  constructor(e){
    super(), this.enabled=!1, this.workspaceProjectDir="", this.mcpDescriptors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpFileSystemOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"workspace_project_dir",kind:"scalar",T:9
    }, {
      no:3,name:"mcp_descriptors",kind:"message",T:k2c,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new OGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OGi, e, t)
  }
}, RRh=class UGi extends ie{
  constructor(e){
    super(), this.enabled=!1, this.mcpDescriptors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpMetaToolOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"mcp_descriptors",kind:"message",T:k2c,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new UGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UGi, e, t)
  }
}
}
}), x2c, hgA, PRh=