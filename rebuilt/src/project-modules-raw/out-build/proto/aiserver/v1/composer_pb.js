// Module: out-build/proto/aiserver/v1/composer_pb.js
// Offset: 3058884 (bundle byte offset)
// Size: 17641 bytes

Ka(), qp(), BIh=class K$i extends ie{
  constructor(e){
    super(), this.type=ko.UNSPECIFIED, this.data={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"enum",T:v.getEnumType(ko)
    }, {
      no:2,name:"loop_on_lints",kind:"message",T:LIh,oneof:"data"
    }, {
      no:3,name:"loop_on_tests",kind:"message",T:NIh,oneof:"data"
    }, {
      no:4,name:"mega_planner",kind:"message",T:MIh,oneof:"data"
    }, {
      no:5,name:"loop_on_command",kind:"message",T:FIh,oneof:"data"
    }, {
      no:6,name:"tool_call",kind:"message",T:OIh,oneof:"data"
    }, {
      no:7,name:"diff_review",kind:"message",T:UIh,oneof:"data"
    }, {
      no:8,name:"context_picking",kind:"message",T:JIh,oneof:"data"
    }, {
      no:9,name:"edit_trail",kind:"message",T:GIh,oneof:"data"
    }, {
      no:10,name:"auto_context",kind:"message",T:WIh,oneof:"data"
    }, {
      no:11,name:"context_planner",kind:"message",T:QIh,oneof:"data"
    }, {
      no:12,name:"remember_this",kind:"message",T:jIh,oneof:"data"
    }, {
      no:13,name:"decomposer",kind:"message",T:HIh,oneof:"data"
    }, {
      no:14,name:"cursor_rules",kind:"message",T:zIh,oneof:"data"
    }
    ])
  }
  static fromBinary(e, t){
    return new K$i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new K$i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new K$i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(K$i, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LOOP_ON_LINTS=1]="LOOP_ON_LINTS", n[n.LOOP_ON_TESTS=2]="LOOP_ON_TESTS", n[n.MEGA_PLANNER=3]="MEGA_PLANNER", n[n.LOOP_ON_COMMAND=4]="LOOP_ON_COMMAND", n[n.TOOL_CALL=5]="TOOL_CALL", n[n.DIFF_REVIEW=6]="DIFF_REVIEW", n[n.CONTEXT_PICKING=7]="CONTEXT_PICKING", n[n.EDIT_TRAIL=8]="EDIT_TRAIL", n[n.AUTO_CONTEXT=9]="AUTO_CONTEXT", n[n.CONTEXT_PLANNER=10]="CONTEXT_PLANNER", n[n.DIFF_HISTORY=11]="DIFF_HISTORY", n[n.REMEMBER_THIS=12]="REMEMBER_THIS", n[n.DECOMPOSER=13]="DECOMPOSER", n[n.USES_CODEBASE=14]="USES_CODEBASE", n[n.TOOL_FORMER=15]="TOOL_FORMER", n[n.CURSOR_RULES=16]="CURSOR_RULES", n[n.TOKEN_COUNTER=17]="TOKEN_COUNTER", n[n.USAGE_DATA=18]="USAGE_DATA", n[n.CHIMES=19]="CHIMES", n[n.CODE_DECAY_TRACKER=20]="CODE_DECAY_TRACKER", n[n.BACKGROUND_COMPOSER=21]="BACKGROUND_COMPOSER", n[n.SUMMARIZATION=22]="SUMMARIZATION", n[n.AI_CODE_TRACKING=23]="AI_CODE_TRACKING", n[n.QUEUING=24]="QUEUING", n[n.MEMORIES=25]="MEMORIES", n[n.RCP_LOGS=26]="RCP_LOGS", n[n.KNOWLEDGE_FETCH=27]="KNOWLEDGE_FETCH", n[n.SLACK_INTEGRATION=28]="SLACK_INTEGRATION", n[n.SUB_COMPOSER=29]="SUB_COMPOSER", n[n.THINKING=30]="THINKING", n[n.CONTEXT_WINDOW=31]="CONTEXT_WINDOW", n[n.ONLINE_METRICS=32]="ONLINE_METRICS", n[n.NOTIFICATIONS=33]="NOTIFICATIONS", n[n.SPEC=34]="SPEC", n[n.BROWSER_AGENT=35]="BROWSER_AGENT"
})(ko||(ko={
  
})), v.util.setEnumType(ko, "aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType", [{
  no:0, name:"COMPOSER_CAPABILITY_TYPE_UNSPECIFIED"
}, {
  no:1, name:"COMPOSER_CAPABILITY_TYPE_LOOP_ON_LINTS"
}, {
  no:2, name:"COMPOSER_CAPABILITY_TYPE_LOOP_ON_TESTS"
}, {
  no:3, name:"COMPOSER_CAPABILITY_TYPE_MEGA_PLANNER"
}, {
  no:4, name:"COMPOSER_CAPABILITY_TYPE_LOOP_ON_COMMAND"
}, {
  no:5, name:"COMPOSER_CAPABILITY_TYPE_TOOL_CALL"
}, {
  no:6, name:"COMPOSER_CAPABILITY_TYPE_DIFF_REVIEW"
}, {
  no:7, name:"COMPOSER_CAPABILITY_TYPE_CONTEXT_PICKING"
}, {
  no:8, name:"COMPOSER_CAPABILITY_TYPE_EDIT_TRAIL"
}, {
  no:9, name:"COMPOSER_CAPABILITY_TYPE_AUTO_CONTEXT"
}, {
  no:10, name:"COMPOSER_CAPABILITY_TYPE_CONTEXT_PLANNER"
}, {
  no:11, name:"COMPOSER_CAPABILITY_TYPE_DIFF_HISTORY"
}, {
  no:12, name:"COMPOSER_CAPABILITY_TYPE_REMEMBER_THIS"
}, {
  no:13, name:"COMPOSER_CAPABILITY_TYPE_DECOMPOSER"
}, {
  no:14, name:"COMPOSER_CAPABILITY_TYPE_USES_CODEBASE"
}, {
  no:15, name:"COMPOSER_CAPABILITY_TYPE_TOOL_FORMER"
}, {
  no:16, name:"COMPOSER_CAPABILITY_TYPE_CURSOR_RULES"
}, {
  no:17, name:"COMPOSER_CAPABILITY_TYPE_TOKEN_COUNTER"
}, {
  no:18, name:"COMPOSER_CAPABILITY_TYPE_USAGE_DATA"
}, {
  no:19, name:"COMPOSER_CAPABILITY_TYPE_CHIMES"
}, {
  no:20, name:"COMPOSER_CAPABILITY_TYPE_CODE_DECAY_TRACKER"
}, {
  no:21, name:"COMPOSER_CAPABILITY_TYPE_BACKGROUND_COMPOSER"
}, {
  no:22, name:"COMPOSER_CAPABILITY_TYPE_SUMMARIZATION"
}, {
  no:23, name:"COMPOSER_CAPABILITY_TYPE_AI_CODE_TRACKING"
}, {
  no:24, name:"COMPOSER_CAPABILITY_TYPE_QUEUING"
}, {
  no:25, name:"COMPOSER_CAPABILITY_TYPE_MEMORIES"
}, {
  no:26, name:"COMPOSER_CAPABILITY_TYPE_RCP_LOGS"
}, {
  no:27, name:"COMPOSER_CAPABILITY_TYPE_KNOWLEDGE_FETCH"
}, {
  no:28, name:"COMPOSER_CAPABILITY_TYPE_SLACK_INTEGRATION"
}, {
  no:29, name:"COMPOSER_CAPABILITY_TYPE_SUB_COMPOSER"
}, {
  no:30, name:"COMPOSER_CAPABILITY_TYPE_THINKING"
}, {
  no:31, name:"COMPOSER_CAPABILITY_TYPE_CONTEXT_WINDOW"
}, {
  no:32, name:"COMPOSER_CAPABILITY_TYPE_ONLINE_METRICS"
}, {
  no:33, name:"COMPOSER_CAPABILITY_TYPE_NOTIFICATIONS"
}, {
  no:34, name:"COMPOSER_CAPABILITY_TYPE_SPEC"
}, {
  no:35, name:"COMPOSER_CAPABILITY_TYPE_BROWSER_AGENT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ADD_FILE_TO_CONTEXT=1]="ADD_FILE_TO_CONTEXT", n[n.ITERATE=3]="ITERATE", n[n.REMOVE_FILE_FROM_CONTEXT=4]="REMOVE_FILE_FROM_CONTEXT", n[n.SEMANTIC_SEARCH_CODEBASE=5]="SEMANTIC_SEARCH_CODEBASE"
})(VY||(VY={
  
})), v.util.setEnumType(VY, "aiserver.v1.ComposerCapabilityRequest.ToolType", [{
  no:0, name:"TOOL_TYPE_UNSPECIFIED"
}, {
  no:1, name:"TOOL_TYPE_ADD_FILE_TO_CONTEXT"
}, {
  no:3, name:"TOOL_TYPE_ITERATE"
}, {
  no:4, name:"TOOL_TYPE_REMOVE_FILE_FROM_CONTEXT"
}, {
  no:5, name:"TOOL_TYPE_SEMANTIC_SEARCH_CODEBASE"
}
]), RIh=class Y$i extends ie{
  constructor(e){
    super(), this.type=VY.UNSPECIFIED, this.name="", this.properties={
      
    }, this.required=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.ToolSchema"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"enum",T:v.getEnumType(VY)
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"properties",kind:"map",K:9,V:{
        kind:"message",T:PIh
      }
    }, {
      no:4,name:"required",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Y$i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Y$i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Y$i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Y$i, e, t)
  }
}, PIh=class Z$i extends ie{
  constructor(e){
    super(), this.type="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.SchemaProperty"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Z$i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Z$i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Z$i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Z$i, e, t)
  }
}, LIh=class X$i extends ie{
  constructor(e){
    super(), this.linterErrors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"linter_errors",kind:"message",T:aN,repeated:!0
    }, {
      no:2,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new X$i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new X$i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new X$i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(X$i, e, t)
  }
}, NIh=class eqi extends ie{
  constructor(e){
    super(), this.testNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"test_names",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new eqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eqi, e, t)
  }
}, MIh=class tqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tqi, e, t)
  }
}, FIh=class nqi extends ie{
  constructor(e){
    super(), this.command="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9
    }, {
      no:2,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"output",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"exit_code",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nqi, e, t)
  }
}, OIh=class iqi extends ie{
  constructor(e){
    super(), this.toolSchemas=[], this.relevantFiles=[], this.filesInContext=[], this.semanticSearchFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.ToolCallCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"tool_schemas",kind:"message",T:RIh,repeated:!0
    }, {
      no:3,name:"relevant_files",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"files_in_context",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"semantic_search_files",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iqi, e, t)
  }
}, UIh=class rqi extends ie{
  constructor(e){
    super(), this.diffs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"diffs",kind:"message",T:$Ih,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rqi, e, t)
  }
}, $Ih=class sqi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.chunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"chunks",kind:"message",T:qIh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sqi, e, t)
  }
}, qIh=class oqi extends ie{
  constructor(e){
    super(), this.oldLines=[], this.newLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"old_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"new_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"old_range",kind:"message",T:S3
    }, {
      no:4,name:"new_range",kind:"message",T:S3
    }
    ])
  }
  static fromBinary(e, t){
    return new oqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oqi, e, t)
  }
}, HIh=class aqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.DecomposerCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new aqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aqi, e, t)
  }
}, JIh=class cqi extends ie{
  constructor(e){
    super(), this.potentialContextFiles=[], this.potentialContextCodeChunks=[], this.filesInContext=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"potential_context_files",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"potential_context_code_chunks",kind:"message",T:TRc,repeated:!0
    }, {
      no:4,name:"files_in_context",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cqi, e, t)
  }
}, GIh=class lqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.EditTrailCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lqi, e, t)
  }
}, WIh=class uqi extends ie{
  constructor(e){
    super(), this.additionalFiles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.AutoContextCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"additional_files",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uqi, e, t)
  }
}, QIh=class dqi extends ie{
  constructor(e){
    super(), this.attachedCodeChunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"attached_code_chunks",kind:"message",T:TRc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dqi, e, t)
  }
}, jIh=class hqi extends ie{
  constructor(e){
    super(), this.memory="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.RememberThisCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"memory",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hqi, e, t)
  }
}, zIh=class mqi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityRequest.CursorRulesCapability"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"custom_instructions",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mqi, e, t)
  }
}, VIh=class pqi extends ie{
  constructor(e){
    super(), this.data={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:27,name:"slack_integration",kind:"message",T:KIh,oneof:"data"
    }, {
      no:28,name:"github_pr",kind:"message",T:YIh,oneof:"data"
    }
    ])
  }
  static fromBinary(e, t){
    return new pqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pqi, e, t)
  }
}, KIh=class gqi extends ie{
  constructor(e){
    super(), this.thread="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityContext.SlackIntegrationContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"thread",kind:"scalar",T:9
    }, {
      no:2,name:"channel_name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"channel_purpose",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"channel_topic",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gqi, e, t)
  }
}, YIh=class fqi extends ie{
  constructor(e){
    super(), this.title="", this.description="", this.comments="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerCapabilityContext.GithubPRContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"comments",kind:"scalar",T:9
    }, {
      no:4,name:"ci_failures",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fqi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fqi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fqi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fqi, e, t)
  }
}
}
}), Y9n, she, cMc, lMc, uMc, dMc, hMc, mMc, pMc, gMc, fMc, bMc, vMc, K8o=