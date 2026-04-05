// Module: out-build/proto/agent/v1/request_context_exec_pb.js
// Offset: 3219635 (bundle byte offset)
// Size: 14780 bytes

Ka(), ugA(), r6o(), dgA(), E2c(), qbt(), K8o(), PRh(), T2c=class HGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"notes_session_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"workspace_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new HGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HGi, e, t)
  }
}, I2c=class JGi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:D2c,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:LRh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:NRh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new JGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JGi, e, t)
  }
}, D2c=class GGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_context",kind:"message",T:QKe
    }
    ])
  }
  static fromBinary(e, t){
    return new GGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GGi, e, t)
  }
}, LRh=class WGi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new WGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WGi, e, t)
  }
}, NRh=class QGi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new QGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QGi, e, t)
  }
}, mgA=class jGi extends ie{
  constructor(e){
    super(), this.data=new Uint8Array(0), this.uuid="", this.path="", this.mimeType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ImageProto"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:12
    }, {
      no:2,name:"uuid",kind:"scalar",T:9
    }, {
      no:3,name:"path",kind:"scalar",T:9
    }, {
      no:4,name:"dimension",kind:"message",T:MRh
    }, {
      no:6,name:"task_specific_description",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"mime_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jGi, e, t)
  }
}, MRh=class zGi extends ie{
  constructor(e){
    super(), this.width=0, this.height=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ImageProto.Dimension"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"width",kind:"scalar",T:5
    }, {
      no:2,name:"height",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new zGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zGi, e, t)
  }
}, FRh=class VGi extends ie{
  constructor(e){
    super(), this.path="", this.status="", this.branchName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GitRepoInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"status",kind:"scalar",T:9
    }, {
      no:3,name:"branch_name",kind:"scalar",T:9
    }, {
      no:4,name:"remote_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new VGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VGi, e, t)
  }
}, ORh=class KGi extends ie{
  constructor(e){
    super(), this.osVersion="", this.workspacePaths=[], this.shell="", this.sandboxEnabled=!1, this.terminalsFolder="", this.agentSharedNotesFolder="", this.agentConversationNotesFolder="", this.timeZone="", this.projectFolder="", this.agentTranscriptsFolder="", this.sandboxNetworkExplicitAllowlist=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContextEnv"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"os_version",kind:"scalar",T:9
    }, {
      no:2,name:"workspace_paths",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"shell",kind:"scalar",T:9
    }, {
      no:5,name:"sandbox_enabled",kind:"scalar",T:8
    }, {
      no:7,name:"terminals_folder",kind:"scalar",T:9
    }, {
      no:8,name:"agent_shared_notes_folder",kind:"scalar",T:9
    }, {
      no:9,name:"agent_conversation_notes_folder",kind:"scalar",T:9
    }, {
      no:10,name:"time_zone",kind:"scalar",T:9
    }, {
      no:11,name:"project_folder",kind:"scalar",T:9
    }, {
      no:12,name:"agent_transcripts_folder",kind:"scalar",T:9
    }, {
      no:13,name:"artifacts_folder",kind:"scalar",T:9,opt:!0
    }, {
      no:14,name:"sandbox_supported",kind:"scalar",T:8,opt:!0
    }, {
      no:16,name:"sandbox_network_has_defaults",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"sandbox_network_explicit_allowlist",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new KGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KGi, e, t)
  }
}, pgA=class YGi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.UserGitContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"username",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"email",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new YGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YGi, e, t)
  }
}, m8n=class ZGi extends ie{
  constructor(e){
    super(), this.logPath="", this.serverEndpoint="", this.sessionId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.DebugModeConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"log_path",kind:"scalar",T:9
    }, {
      no:2,name:"server_endpoint",kind:"scalar",T:9
    }, {
      no:3,name:"session_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ZGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZGi, e, t)
  }
}, URh=class XGi extends ie{
  constructor(e){
    super(), this.name="", this.description="", this.folderPath="", this.enabled=!1, this.readmeFilePath="", this.packageType=Zbt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SkillDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"folder_path",kind:"scalar",T:9
    }, {
      no:4,name:"enabled",kind:"scalar",T:8
    }, {
      no:5,name:"parse_error",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"readme_file_path",kind:"scalar",T:9
    }, {
      no:7,name:"package_type",kind:"enum",T:v.getEnumType(Zbt)
    }
    ])
  }
  static fromBinary(e, t){
    return new XGi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XGi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XGi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XGi, e, t)
  }
}, B2c=class eWi extends ie{
  constructor(e){
    super(), this.skillDescriptors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SkillOptions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"skill_descriptors",kind:"message",T:URh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new eWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eWi, e, t)
  }
}, R2c=class tWi extends ie{
  constructor(e){
    super(), this.configuredSteps=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.HooksConfigInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"configured_steps",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tWi, e, t)
  }
}, $Rh=class nWi extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.endLineNumberExclusive=0, this.beforeContextLines=[], this.removedLines=[], this.addedLines=[], this.afterContextLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrecomputedHumanChangeRenderedDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_number_exclusive",kind:"scalar",T:5
    }, {
      no:3,name:"before_context_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"removed_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"added_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"after_context_lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nWi, e, t)
  }
}, P2c=class iWi extends ie{
  constructor(e){
    super(), this.path="", this.renderedDiffs=[], this.isNewFile=!1, this.isDeletedFile=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.PrecomputedHumanChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"rendered_diffs",kind:"message",T:$Rh,repeated:!0
    }, {
      no:3,name:"is_new_file",kind:"scalar",T:8
    }, {
      no:4,name:"is_deleted_file",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new iWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iWi, e, t)
  }
}, QKe=class rWi extends ie{
  constructor(e){
    super(), this.rules=[], this.repositoryInfo=[], this.tools=[], this.gitRepos=[], this.projectLayouts=[], this.mcpInstructions=[], this.fileContents={
      
    }, this.customSubagents=[], this.agentSkills=[], this.precomputedHumanChanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RequestContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"rules",kind:"message",T:X9n,repeated:!0
    }, {
      no:4,name:"env",kind:"message",T:ORh
    }, {
      no:6,name:"repository_info",kind:"message",T:IRh,repeated:!0
    }, {
      no:7,name:"tools",kind:"message",T:C2c,repeated:!0
    }, {
      no:8,name:"conversation_notes_listing",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"shared_notes_listing",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"git_repos",kind:"message",T:FRh,repeated:!0
    }, {
      no:13,name:"project_layouts",kind:"message",T:u9n,repeated:!0
    }, {
      no:14,name:"mcp_instructions",kind:"message",T:DRh,repeated:!0
    }, {
      no:15,name:"debug_mode_config",kind:"message",T:m8n,opt:!0
    }, {
      no:16,name:"cloud_rule",kind:"scalar",T:9,opt:!0
    }, {
      no:17,name:"web_search_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:18,name:"skill_options",kind:"message",T:B2c,opt:!0
    }, {
      no:19,name:"repository_info_should_query_prod",kind:"scalar",T:8,opt:!0
    }, {
      no:20,name:"file_contents",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:21,name:"user_intent_summary",kind:"scalar",T:9,opt:!0
    }, {
      no:22,name:"custom_subagents",kind:"message",T:vMc,repeated:!0
    }, {
      no:23,name:"mcp_file_system_options",kind:"message",T:A6o,opt:!0
    }, {
      no:24,name:"web_fetch_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:25,name:"hooks_additional_context",kind:"scalar",T:9,opt:!0
    }, {
      no:26,name:"commit_attribution_message",kind:"scalar",T:9,opt:!0
    }, {
      no:27,name:"pr_attribution_message",kind:"scalar",T:9,opt:!0
    }, {
      no:28,name:"hooks_config",kind:"message",T:R2c,opt:!0
    }, {
      no:29,name:"agent_skills",kind:"message",T:x2c,repeated:!0
    }, {
      no:30,name:"precomputed_human_changes",kind:"message",T:P2c,repeated:!0
    }, {
      no:31,name:"recently_added_plugin",kind:"message",T:L2c,opt:!0
    }, {
      no:32,name:"supports_mcp_auth",kind:"scalar",T:8,opt:!0
    }, {
      no:33,name:"git_repo_info_complete",kind:"scalar",T:8,opt:!0
    }, {
      no:34,name:"mcp_meta_tool_options",kind:"message",T:RRh,opt:!0
    }, {
      no:35,name:"read_lints_enabled",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rWi, e, t)
  }
}, L2c=class sWi extends ie{
  constructor(e){
    super(), this.displayName="", this.description="", this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.commands=[], this.mcpServers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RecentlyAddedPlugin"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"display_name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"skills",kind:"message",T:j5t,repeated:!0
    }, {
      no:4,name:"subagents",kind:"message",T:j5t,repeated:!0
    }, {
      no:5,name:"hooks",kind:"message",T:j5t,repeated:!0
    }, {
      no:6,name:"rules",kind:"message",T:j5t,repeated:!0
    }, {
      no:7,name:"commands",kind:"message",T:j5t,repeated:!0
    }, {
      no:8,name:"mcp_servers",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sWi, e, t)
  }
}, j5t=class oWi extends ie{
  constructor(e){
    super(), this.name="", this.description="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.RecentlyAddedPlugin.CapabilityDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oWi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oWi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oWi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oWi, e, t)
  }
}
}
}), y6o, N2c, qRh, HRh, JRh, GRh, WRh, QRh, jRh, evt, zRh, M2c, VRh, F2c, O2c, U2c, w6o, $2c, q2c, H2c, tvt, J2c, p8n, G2c, W2c, KRh, YRh, ZRh, XRh, Q2c, j2c, rae, z2c, ePh, tPh, V2c, z5t, K2c, Y2c, jKe=