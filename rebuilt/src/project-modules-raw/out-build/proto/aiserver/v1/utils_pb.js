// Module: out-build/proto/aiserver/v1/utils_pb.js
// Offset: 2598309 (bundle byte offset)
// Size: 67282 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ERROR=1]="ERROR", n[n.WARNING=2]="WARNING", n[n.INFO=3]="INFO", n[n.HINT=4]="HINT", n[n.AI=5]="AI"
})(Xde||(Xde={
  
})), v.util.setEnumType(Xde, "aiserver.v1.LintSeverity", [{
  no:0, name:"LINT_SEVERITY_UNSPECIFIED"
}, {
  no:1, name:"LINT_SEVERITY_ERROR"
}, {
  no:2, name:"LINT_SEVERITY_WARNING"
}, {
  no:3, name:"LINT_SEVERITY_INFO"
}, {
  no:4, name:"LINT_SEVERITY_HINT"
}, {
  no:5, name:"LINT_SEVERITY_AI"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.EDIT=1]="EDIT", n[n.GENERATE=2]="GENERATE", n[n.INLINE_LONG_COMPLETION=3]="INLINE_LONG_COMPLETION"
})(y5n||(y5n={
  
})), v.util.setEnumType(y5n, "aiserver.v1.FeatureType", [{
  no:0, name:"FEATURE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"FEATURE_TYPE_EDIT"
}, {
  no:2, name:"FEATURE_TYPE_GENERATE"
}, {
  no:3, name:"FEATURE_TYPE_INLINE_LONG_COMPLETION"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.VOYAGE_CODE_2=1]="VOYAGE_CODE_2", n[n.TEXT_EMBEDDINGS_LARGE_3=2]="TEXT_EMBEDDINGS_LARGE_3", n[n.QWEN_1_5B_CUSTOM=3]="QWEN_1_5B_CUSTOM", n[n.MOCK_CHUNKER_ERROR=4]="MOCK_CHUNKER_ERROR", n[n.QWEN_1_5B_0618_CUSTOM=5]="QWEN_1_5B_0618_CUSTOM", n[n.QWEN_1_5B_0618_FP8_MM_CUSTOM=6]="QWEN_1_5B_0618_FP8_MM_CUSTOM"
})(AT||(AT={
  
})), v.util.setEnumType(AT, "aiserver.v1.EmbeddingModel", [{
  no:0, name:"EMBEDDING_MODEL_UNSPECIFIED"
}, {
  no:1, name:"EMBEDDING_MODEL_VOYAGE_CODE_2"
}, {
  no:2, name:"EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3"
}, {
  no:3, name:"EMBEDDING_MODEL_QWEN_1_5B_CUSTOM"
}, {
  no:4, name:"EMBEDDING_MODEL_MOCK_CHUNKER_ERROR"
}, {
  no:5, name:"EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM"
}, {
  no:6, name:"EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM"
}
]), I9=class gMi extends ie{
  constructor(e){
    super(), this.line=0, this.column=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorPosition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line",kind:"scalar",T:5
    }, {
      no:2,name:"column",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new gMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gMi, e, t)
  }
}, K1h=class fMi extends ie{
  constructor(e){
    super(), this.totalmem=0, this.freemem=0, this.loadavg=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.VscodeOSStatistics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"totalmem",kind:"scalar",T:1
    }, {
      no:2,name:"freemem",kind:"scalar",T:1
    }, {
      no:3,name:"loadavg",kind:"scalar",T:1,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fMi, e, t)
  }
}, Y1h=class bMi extends ie{
  constructor(e){
    super(), this.type="", this.release="", this.arch="", this.platform="", this.cpus=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.VscodeOSProperties"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"scalar",T:9
    }, {
      no:2,name:"release",kind:"scalar",T:9
    }, {
      no:3,name:"arch",kind:"scalar",T:9
    }, {
      no:4,name:"platform",kind:"scalar",T:9
    }, {
      no:5,name:"cpus",kind:"message",T:Z1h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bMi, e, t)
  }
}, Z1h=class vMi extends ie{
  constructor(e){
    super(), this.model="", this.speed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.VscodeCPUProperties"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model",kind:"scalar",T:9
    }, {
      no:2,name:"speed",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new vMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vMi, e, t)
  }
}, N9o=class AMi extends ie{
  constructor(e){
    super(), this.workspaceUris=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EnvironmentInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"exthost_platform",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"exthost_arch",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"exthost_release",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"exthost_shell",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"local_timestamp",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"workspace_uris",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"cursor_version",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"is_remote",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"local_os_type",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"home_directory",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"local_timezone",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new AMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AMi, e, t)
  }
}, X1h=class yMi extends ie{
  constructor(e){
    super(), this.selectionStartLineNumber=0, this.selectionStartColumn=0, this.positionLineNumber=0, this.positionColumn=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SelectionWithOrientation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"selection_start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"selection_start_column",kind:"scalar",T:5
    }, {
      no:3,name:"position_line_number",kind:"scalar",T:5
    }, {
      no:4,name:"position_column",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new yMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yMi, e, t)
  }
}, BKe=class wMi extends ie{
  constructor(e){
    super(), this.cwd="", this.ref="", this.baseRef="", this.mergeBase=!1, this.targetPaths=[], this.maxUntrackedFiles=0, this.submoduleRecurseDepth=0, this.includeSpaceChanges=!1, this.committedOnly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cwd",kind:"scalar",T:9
    }, {
      no:2,name:"ref",kind:"scalar",T:9
    }, {
      no:3,name:"base_ref",kind:"scalar",T:9
    }, {
      no:4,name:"merge_base",kind:"scalar",T:8
    }, {
      no:5,name:"target_paths",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"unified_context_lines",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"max_untracked_files",kind:"scalar",T:5
    }, {
      no:9,name:"submodule_recurse_depth",kind:"scalar",T:5
    }, {
      no:10,name:"include_space_changes",kind:"scalar",T:8
    }, {
      no:11,name:"committed_only",kind:"scalar",T:8
    }, {
      no:8,name:"output_format",kind:"enum",T:v.getEnumType(Dbt),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wMi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.NAME_STATUS=1]="NAME_STATUS", n[n.NAME_STATUS_AND_NUMSTAT=2]="NAME_STATUS_AND_NUMSTAT", n[n.FILE_DIFFS=3]="FILE_DIFFS", n[n.DIFFS_WITH_BEFORE_AND_AFTER=4]="DIFFS_WITH_BEFORE_AND_AFTER"
})(Dbt||(Dbt={
  
})), v.util.setEnumType(Dbt, "aiserver.v1.GetDiffRequest.OutputFormat", [{
  no:0, name:"OUTPUT_FORMAT_UNSPECIFIED"
}, {
  no:1, name:"OUTPUT_FORMAT_NAME_STATUS"
}, {
  no:2, name:"OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT"
}, {
  no:3, name:"OUTPUT_FORMAT_FILE_DIFFS"
}, {
  no:4, name:"OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER"
}
]), Bbt=class _Mi extends ie{
  constructor(e){
    super(), this.submoduleDiffs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diff",kind:"message",T:XH
    }, {
      no:2,name:"submodule_diffs",kind:"message",T:eEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _Mi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Mi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Mi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Mi, e, t)
  }
}, eEh=class CMi extends ie{
  constructor(e){
    super(), this.relativePath="", this.errored=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDiffResponse.SubmoduleDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"diff",kind:"message",T:XH
    }, {
      no:3,name:"errored",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new CMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CMi, e, t)
  }
}, tae=class SMi extends ie{
  constructor(e){
    super(), this.startLine=0, this.endLineInclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SimplestRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_inclusive",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new SMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SMi, e, t)
  }
}, ARc=class kMi extends ie{
  constructor(e){
    super(), this.original=[], this.modified=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComputeLinesDiffOriginalAndModified"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"original",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"modified",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kMi, e, t)
  }
}, XH=class EMi extends ie{
  constructor(e){
    super(), this.diffs=[], this.diffType=nae.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GitDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diffs",kind:"message",T:RKe,repeated:!0
    }, {
      no:2,name:"diff_type",kind:"enum",T:v.getEnumType(nae)
    }
    ])
  }
  static fromBinary(e, t){
    return new EMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new EMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new EMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(EMi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DIFF_TO_HEAD=1]="DIFF_TO_HEAD", n[n.DIFF_FROM_BRANCH_TO_MAIN=2]="DIFF_FROM_BRANCH_TO_MAIN"
})(nae||(nae={
  
})), v.util.setEnumType(nae, "aiserver.v1.GitDiff.DiffType", [{
  no:0, name:"DIFF_TYPE_UNSPECIFIED"
}, {
  no:1, name:"DIFF_TYPE_DIFF_TO_HEAD"
}, {
  no:2, name:"DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN"
}
]), RKe=class xMi extends ie{
  constructor(e){
    super(), this.added=0, this.removed=0, this.from="", this.to="", this.chunks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:4,name:"added",kind:"scalar",T:5
    }, {
      no:5,name:"removed",kind:"scalar",T:5
    }, {
      no:1,name:"from",kind:"scalar",T:9
    }, {
      no:2,name:"to",kind:"scalar",T:9
    }, {
      no:3,name:"chunks",kind:"message",T:w5n,repeated:!0
    }, {
      no:6,name:"before_file_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"after_file_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"is_generated",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xMi, e, t)
  }
}, w5n=class TMi extends ie{
  constructor(e){
    super(), this.content="", this.lines=[], this.oldStart=0, this.oldLines=0, this.newStart=0, this.newLines=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileDiff.Chunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:9
    }, {
      no:2,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"old_start",kind:"scalar",T:5
    }, {
      no:4,name:"old_lines",kind:"scalar",T:5
    }, {
      no:5,name:"new_start",kind:"scalar",T:5
    }, {
      no:6,name:"new_lines",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new TMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new TMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new TMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(TMi, e, t)
  }
}, wF=class IMi extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.startColumn=0, this.endLineNumberInclusive=0, this.endColumn=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SimpleRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"start_column",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_number_inclusive",kind:"scalar",T:5
    }, {
      no:4,name:"end_column",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new IMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new IMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new IMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(IMi, e, t)
  }
}, tEh=class DMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.chunkHash="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SimpleFileChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:tae
    }, {
      no:3,name:"chunk_hash",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new DMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DMi, e, t)
  }
}, fve=class BMi extends ie{
  constructor(e){
    super(), this.remoteUrl="", this.commitId="", this.gitPatch="", this.unsavedFiles=[], this.unixTimestampMs=0, this.openEditors=[], this.fileDiffHistories=[], this.branchName="", this.branchNotes="", this.branchNotesRich="", this.globalNotes="", this.pastThoughts=[], this.baseBranchName="", this.baseBranchCommitId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKDebugInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"remote_url",kind:"scalar",T:9
    }, {
      no:2,name:"commit_id",kind:"scalar",T:9
    }, {
      no:3,name:"git_patch",kind:"scalar",T:9
    }, {
      no:4,name:"unsaved_files",kind:"message",T:nEh,repeated:!0
    }, {
      no:5,name:"unix_timestamp_ms",kind:"scalar",T:1
    }, {
      no:6,name:"open_editors",kind:"message",T:iEh,repeated:!0
    }, {
      no:7,name:"file_diff_histories",kind:"message",T:rEh,repeated:!0
    }, {
      no:8,name:"branch_name",kind:"scalar",T:9
    }, {
      no:9,name:"branch_notes",kind:"scalar",T:9
    }, {
      no:12,name:"branch_notes_rich",kind:"scalar",T:9
    }, {
      no:10,name:"global_notes",kind:"scalar",T:9
    }, {
      no:11,name:"past_thoughts",kind:"message",T:sEh,repeated:!0
    }, {
      no:13,name:"base_branch_name",kind:"scalar",T:9
    }, {
      no:14,name:"base_branch_commit_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new BMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BMi, e, t)
  }
}, nEh=class RMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKDebugInfo.UnsavedFiles"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new RMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RMi, e, t)
  }
}, iEh=class PMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.editorGroupIndex=0, this.editorGroupId=0, this.isActive=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKDebugInfo.OpenEditor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"editor_group_index",kind:"scalar",T:5
    }, {
      no:3,name:"editor_group_id",kind:"scalar",T:5
    }, {
      no:4,name:"is_active",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new PMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PMi, e, t)
  }
}, rEh=class LMi extends ie{
  constructor(e){
    super(), this.fileName="", this.diffHistory=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKDebugInfo.CppFileDiffHistory"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_name",kind:"scalar",T:9
    }, {
      no:2,name:"diff_history",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new LMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LMi, e, t)
  }
}, sEh=class NMi extends ie{
  constructor(e){
    super(), this.text="", this.timeInUnixSeconds=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKDebugInfo.PastThought"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"time_in_unix_seconds",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new NMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NMi, e, t)
  }
}, S3=class MMi extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.endLineNumberInclusive=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LineRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_number_inclusive",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new MMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MMi, e, t)
  }
}, fz=class FMi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_position",kind:"message",T:I9
    }, {
      no:2,name:"end_position",kind:"message",T:I9
    }
    ])
  }
  static fromBinary(e, t){
    return new FMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FMi, e, t)
  }
}, M9o=class OMi extends ie{
  constructor(e){
    super(), this.text="", this.lineNumber=0, this.isSignature=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DetailedLine"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"line_number",kind:"scalar",T:2
    }, {
      no:3,name:"is_signature",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new OMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OMi, e, t)
  }
}, WB=class UMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.detailedLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CodeBlock"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"file_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"file_contents_length",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"range",kind:"message",T:fz
    }, {
      no:4,name:"contents",kind:"scalar",T:9
    }, {
      no:5,name:"signatures",kind:"message",T:oEh
    }, {
      no:6,name:"override_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"original_contents",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"detailed_lines",kind:"message",T:M9o,repeated:!0
    }, {
      no:10,name:"file_git_context",kind:"message",T:F9o
    }
    ])
  }
  static fromBinary(e, t){
    return new UMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UMi, e, t)
  }
}, oEh=class $Mi extends ie{
  constructor(e){
    super(), this.ranges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CodeBlock.Signatures"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ranges",kind:"message",T:fz,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $Mi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Mi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Mi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Mi, e, t)
  }
}, aEh=class qMi extends ie{
  constructor(e){
    super(), this.commit="", this.author="", this.date="", this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GitCommit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commit",kind:"scalar",T:9
    }, {
      no:2,name:"author",kind:"scalar",T:9
    }, {
      no:3,name:"date",kind:"scalar",T:9
    }, {
      no:4,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qMi, e, t)
  }
}, F9o=class HMi extends ie{
  constructor(e){
    super(), this.commits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FileGit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commits",kind:"message",T:aEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new HMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HMi, e, t)
  }
}, iae=class JMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.File"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"file_git_context",kind:"message",T:F9o
    }
    ])
  }
  static fromBinary(e, t){
    return new JMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JMi, e, t)
  }
}, yRc=class GMi extends ie{
  constructor(e){
    super(), this.message="", this.severity=bve.UNSPECIFIED, this.relatedInformation=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Diagnostic"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:fz
    }, {
      no:3,name:"severity",kind:"enum",T:v.getEnumType(bve)
    }, {
      no:4,name:"related_information",kind:"message",T:O9o,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new GMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GMi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ERROR=1]="ERROR", n[n.WARNING=2]="WARNING", n[n.INFORMATION=3]="INFORMATION", n[n.HINT=4]="HINT"
})(bve||(bve={
  
})), v.util.setEnumType(bve, "aiserver.v1.Diagnostic.DiagnosticSeverity", [{
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
]), O9o=class WMi extends ie{
  constructor(e){
    super(), this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Diagnostic.RelatedInformation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:fz
    }
    ])
  }
  static fromBinary(e, t){
    return new WMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WMi, e, t)
  }
}, cEh=class QMi extends ie{
  constructor(e){
    super(), this.message="", this.severity=Xde.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Lint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:wF
    }, {
      no:3,name:"severity",kind:"enum",T:v.getEnumType(Xde)
    }
    ])
  }
  static fromBinary(e, t){
    return new QMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QMi, e, t)
  }
}, lEh=class jMi extends ie{
  constructor(e){
    super(), this.content="", this.score=0, this.relativePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BM25Chunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:tae
    }, {
      no:3,name:"score",kind:"scalar",T:5
    }, {
      no:4,name:"relative_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jMi, e, t)
  }
}, AS=class zMi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.relyOnFilesync=!1, this.cells=[], this.topChunks=[], this.contentsStartAtLine=0, this.dataframes=[], this.totalNumberOfLines=0, this.languageId="", this.diagnostics=[], this.cellStartLines=[], this.workspaceRootPath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CurrentFileInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:18,name:"rely_on_filesync",kind:"scalar",T:8
    }, {
      no:17,name:"sha_256_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:16,name:"cells",kind:"message",T:uEh,repeated:!0
    }, {
      no:10,name:"top_chunks",kind:"message",T:lEh,repeated:!0
    }, {
      no:9,name:"contents_start_at_line",kind:"scalar",T:5
    }, {
      no:3,name:"cursor_position",kind:"message",T:I9
    }, {
      no:4,name:"dataframes",kind:"message",T:U9o,repeated:!0
    }, {
      no:8,name:"total_number_of_lines",kind:"scalar",T:5
    }, {
      no:5,name:"language_id",kind:"scalar",T:9
    }, {
      no:6,name:"selection",kind:"message",T:fz
    }, {
      no:11,name:"alternative_version_id",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"diagnostics",kind:"message",T:yRc,repeated:!0
    }, {
      no:14,name:"file_version",kind:"scalar",T:5,opt:!0
    }, {
      no:15,name:"cell_start_lines",kind:"scalar",T:5,repeated:!0
    }, {
      no:19,name:"workspace_root_path",kind:"scalar",T:9
    }, {
      no:20,name:"line_ending",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zMi, e, t)
  }
}, uEh=class VMi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CurrentFileInfo.NotebookCell"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new VMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VMi, e, t)
  }
}, wRc=class KMi extends ie{
  constructor(e){
    super(), this.apiKey="", this.baseUrl="", this.deployment="", this.useAzure=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AzureState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }, {
      no:2,name:"base_url",kind:"scalar",T:9
    }, {
      no:3,name:"deployment",kind:"scalar",T:9
    }, {
      no:4,name:"use_azure",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new KMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KMi, e, t)
  }
}, _Rc=class YMi extends ie{
  constructor(e){
    super(), this.accessKey="", this.secretKey="", this.region="", this.useBedrock=!1, this.sessionToken="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BedrockState"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"access_key",kind:"scalar",T:9
    }, {
      no:2,name:"secret_key",kind:"scalar",T:9
    }, {
      no:3,name:"region",kind:"scalar",T:9
    }, {
      no:4,name:"use_bedrock",kind:"scalar",T:8
    }, {
      no:5,name:"session_token",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new YMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YMi, e, t)
  }
}, Yf=class ZMi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"api_key",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"enable_ghost_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"azure_state",kind:"message",T:wRc,opt:!0
    }, {
      no:5,name:"enable_slow_pool",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"openai_api_base_url",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"bedrock_state",kind:"message",T:_Rc,opt:!0
    }, {
      no:8,name:"max_mode",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ZMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZMi, e, t)
  }
}, dEh=class XMi extends ie{
  constructor(e){
    super(), this.modelName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new XMi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XMi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XMi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XMi, e, t)
  }
}, U9o=class e2i extends ie{
  constructor(e){
    super(), this.name="", this.shape="", this.dataDimensionality=0, this.columns=[], this.rowCount=0, this.indexColumn="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DataframeInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"shape",kind:"scalar",T:9
    }, {
      no:3,name:"data_dimensionality",kind:"scalar",T:5
    }, {
      no:6,name:"columns",kind:"message",T:CRc,repeated:!0
    }, {
      no:7,name:"row_count",kind:"scalar",T:5
    }, {
      no:8,name:"index_column",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new e2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new e2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new e2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(e2i, e, t)
  }
}, CRc=class t2i extends ie{
  constructor(e){
    super(), this.key="", this.type="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DataframeInfo.Column"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"key",kind:"scalar",T:9
    }, {
      no:2,name:"type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new t2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new t2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new t2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(t2i, e, t)
  }
}, qte=class n2i extends ie{
  constructor(e){
    super(), this.message="", this.relatedInformation=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinterError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:fz
    }, {
      no:3,name:"source",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"related_information",kind:"message",T:O9o,repeated:!0
    }, {
      no:5,name:"severity",kind:"enum",T:v.getEnumType(bve),opt:!0
    }, {
      no:6,name:"is_stale",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new n2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new n2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new n2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(n2i, e, t)
  }
}, aN=class i2i extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.errors=[], this.fileContents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinterErrors"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"errors",kind:"message",T:qte,repeated:!0
    }, {
      no:3,name:"file_contents",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new i2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new i2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new i2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(i2i, e, t)
  }
}, hEh=class r2i extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.errors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinterErrorsWithoutFileContents"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"errors",kind:"message",T:qte,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new r2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new r2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new r2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(r2i, e, t)
  }
}, rke=class s2i extends ie{
  constructor(e){
    super(), this.name="", this.description="", this.environments=[], this.disabledEnvironments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"body",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_from_glob",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"always_apply",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"attach_to_background_agents",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"full_path",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:9,name:"disabled_environments",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new s2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new s2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new s2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(s2i, e, t)
  }
}, _F=class o2i extends ie{
  constructor(e){
    super(), this.context="", this.rules=[], this.mcpInstructions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ExplicitContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"context",kind:"scalar",T:9
    }, {
      no:2,name:"repo_context",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"rules",kind:"message",T:rke,repeated:!0
    }, {
      no:4,name:"mode_specific_context",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"mcp_instructions",kind:"message",T:mEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new o2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new o2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new o2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(o2i, e, t)
  }
}, mEh=class a2i extends ie{
  constructor(e){
    super(), this.serverName="", this.serverIdentifier="", this.instructions="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MCPInstructions"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_name",kind:"scalar",T:9
    }, {
      no:2,name:"server_identifier",kind:"scalar",T:9
    }, {
      no:3,name:"instructions",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new a2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new a2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new a2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(a2i, e, t)
  }
}, r5t=class c2i extends ie{
  constructor(e){
    super(), this.messageType=_5n.UNSPECIFIED, this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PureMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message_type",kind:"enum",T:v.getEnumType(_5n)
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new c2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new c2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new c2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(c2i, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SYSTEM=1]="SYSTEM", n[n.USER=2]="USER", n[n.ASSISTANT=3]="ASSISTANT"
})(_5n||(_5n={
  
})), v.util.setEnumType(_5n, "aiserver.v1.PureMessage.MessageType", [{
  no:0, name:"MESSAGE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"MESSAGE_TYPE_SYSTEM"
}, {
  no:2, name:"MESSAGE_TYPE_USER"
}, {
  no:3, name:"MESSAGE_TYPE_ASSISTANT"
}
]), C5n=class nSn extends ie{
  constructor(e){
    super(), this.name="", this.detail="", this.kind=S5n.UNSPECIFIED, this.containerName="", this.children=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DocumentSymbol"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"detail",kind:"scalar",T:9
    }, {
      no:3,name:"kind",kind:"enum",T:v.getEnumType(S5n)
    }, {
      no:5,name:"container_name",kind:"scalar",T:9
    }, {
      no:6,name:"range",kind:"message",T:SRc
    }, {
      no:7,name:"selection_range",kind:"message",T:SRc
    }, {
      no:8,name:"children",kind:"message",T:nSn,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nSn().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nSn().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nSn().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nSn, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.FILE=1]="FILE", n[n.MODULE=2]="MODULE", n[n.NAMESPACE=3]="NAMESPACE", n[n.PACKAGE=4]="PACKAGE", n[n.CLASS=5]="CLASS", n[n.METHOD=6]="METHOD", n[n.PROPERTY=7]="PROPERTY", n[n.FIELD=8]="FIELD", n[n.CONSTRUCTOR=9]="CONSTRUCTOR", n[n.ENUM=10]="ENUM", n[n.INTERFACE=11]="INTERFACE", n[n.FUNCTION=12]="FUNCTION", n[n.VARIABLE=13]="VARIABLE", n[n.CONSTANT=14]="CONSTANT", n[n.STRING=15]="STRING", n[n.NUMBER=16]="NUMBER", n[n.BOOLEAN=17]="BOOLEAN", n[n.ARRAY=18]="ARRAY", n[n.OBJECT=19]="OBJECT", n[n.KEY=20]="KEY", n[n.NULL=21]="NULL", n[n.ENUM_MEMBER=22]="ENUM_MEMBER", n[n.STRUCT=23]="STRUCT", n[n.EVENT=24]="EVENT", n[n.OPERATOR=25]="OPERATOR", n[n.TYPE_PARAMETER=26]="TYPE_PARAMETER"
})(S5n||(S5n={
  
})), v.util.setEnumType(S5n, "aiserver.v1.DocumentSymbol.SymbolKind", [{
  no:0, name:"SYMBOL_KIND_UNSPECIFIED"
}, {
  no:1, name:"SYMBOL_KIND_FILE"
}, {
  no:2, name:"SYMBOL_KIND_MODULE"
}, {
  no:3, name:"SYMBOL_KIND_NAMESPACE"
}, {
  no:4, name:"SYMBOL_KIND_PACKAGE"
}, {
  no:5, name:"SYMBOL_KIND_CLASS"
}, {
  no:6, name:"SYMBOL_KIND_METHOD"
}, {
  no:7, name:"SYMBOL_KIND_PROPERTY"
}, {
  no:8, name:"SYMBOL_KIND_FIELD"
}, {
  no:9, name:"SYMBOL_KIND_CONSTRUCTOR"
}, {
  no:10, name:"SYMBOL_KIND_ENUM"
}, {
  no:11, name:"SYMBOL_KIND_INTERFACE"
}, {
  no:12, name:"SYMBOL_KIND_FUNCTION"
}, {
  no:13, name:"SYMBOL_KIND_VARIABLE"
}, {
  no:14, name:"SYMBOL_KIND_CONSTANT"
}, {
  no:15, name:"SYMBOL_KIND_STRING"
}, {
  no:16, name:"SYMBOL_KIND_NUMBER"
}, {
  no:17, name:"SYMBOL_KIND_BOOLEAN"
}, {
  no:18, name:"SYMBOL_KIND_ARRAY"
}, {
  no:19, name:"SYMBOL_KIND_OBJECT"
}, {
  no:20, name:"SYMBOL_KIND_KEY"
}, {
  no:21, name:"SYMBOL_KIND_NULL"
}, {
  no:22, name:"SYMBOL_KIND_ENUM_MEMBER"
}, {
  no:23, name:"SYMBOL_KIND_STRUCT"
}, {
  no:24, name:"SYMBOL_KIND_EVENT"
}, {
  no:25, name:"SYMBOL_KIND_OPERATOR"
}, {
  no:26, name:"SYMBOL_KIND_TYPE_PARAMETER"
}
]), SRc=class l2i extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.startColumn=0, this.endLineNumber=0, this.endColumn=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DocumentSymbol.Range"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"start_column",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_number",kind:"scalar",T:5
    }, {
      no:4,name:"end_column",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new l2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new l2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new l2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(l2i, e, t)
  }
}, kRc=class u2i extends ie{
  constructor(e){
    super(), this.codeDetails="", this.markdownBlocks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.HoverDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_details",kind:"scalar",T:9
    }, {
      no:2,name:"markdown_blocks",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new u2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new u2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new u2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(u2i, e, t)
  }
}, pEh=class d2i extends ie{
  constructor(e){
    super(), this.scheme="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UriComponents"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scheme",kind:"scalar",T:9
    }, {
      no:2,name:"authority",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"query",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"fragment",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new d2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new d2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new d2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(d2i, e, t)
  }
}, k5n=class h2i extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.textInSymbolRange="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DocumentSymbolWithText"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"symbol",kind:"message",T:C5n
    }, {
      no:2,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:3,name:"text_in_symbol_range",kind:"scalar",T:9
    }, {
      no:4,name:"uri_components",kind:"message",T:pEh
    }
    ])
  }
  static fromBinary(e, t){
    return new h2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new h2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new h2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(h2i, e, t)
  }
}, cN=class m2i extends ie{
  constructor(e){
    super(), this.error=yc.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ErrorDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"enum",T:v.getEnumType(yc)
    }, {
      no:2,name:"details",kind:"message",T:Rbt
    }, {
      no:3,name:"is_expected",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new m2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new m2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new m2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(m2i, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.BAD_API_KEY=1]="BAD_API_KEY", n[n.BAD_USER_API_KEY=42]="BAD_USER_API_KEY", n[n.NOT_LOGGED_IN=2]="NOT_LOGGED_IN", n[n.INVALID_AUTH_ID=3]="INVALID_AUTH_ID", n[n.NOT_HIGH_ENOUGH_PERMISSIONS=4]="NOT_HIGH_ENOUGH_PERMISSIONS", n[n.AGENT_REQUIRES_LOGIN=18]="AGENT_REQUIRES_LOGIN", n[n.BAD_MODEL_NAME=5]="BAD_MODEL_NAME", n[n.NOT_FOUND=39]="NOT_FOUND", n[n.DEPRECATED=40]="DEPRECATED", n[n.USER_NOT_FOUND=6]="USER_NOT_FOUND", n[n.FREE_USER_RATE_LIMIT_EXCEEDED=7]="FREE_USER_RATE_LIMIT_EXCEEDED", n[n.PRO_USER_RATE_LIMIT_EXCEEDED=8]="PRO_USER_RATE_LIMIT_EXCEEDED", n[n.FREE_USER_USAGE_LIMIT=9]="FREE_USER_USAGE_LIMIT", n[n.PRO_USER_USAGE_LIMIT=10]="PRO_USER_USAGE_LIMIT", n[n.RESOURCE_EXHAUSTED=41]="RESOURCE_EXHAUSTED", n[n.AUTH_TOKEN_NOT_FOUND=11]="AUTH_TOKEN_NOT_FOUND", n[n.AUTH_TOKEN_EXPIRED=12]="AUTH_TOKEN_EXPIRED", n[n.OPENAI=13]="OPENAI", n[n.OPENAI_RATE_LIMIT_EXCEEDED=14]="OPENAI_RATE_LIMIT_EXCEEDED", n[n.OPENAI_ACCOUNT_LIMIT_EXCEEDED=15]="OPENAI_ACCOUNT_LIMIT_EXCEEDED", n[n.TASK_UUID_NOT_FOUND=16]="TASK_UUID_NOT_FOUND", n[n.TASK_NO_PERMISSIONS=17]="TASK_NO_PERMISSIONS", n[n.AGENT_ENGINE_NOT_FOUND=19]="AGENT_ENGINE_NOT_FOUND", n[n.MAX_TOKENS=20]="MAX_TOKENS", n[n.PRO_USER_ONLY=23]="PRO_USER_ONLY", n[n.API_KEY_NOT_SUPPORTED=24]="API_KEY_NOT_SUPPORTED", n[n.USER_ABORTED_REQUEST=21]="USER_ABORTED_REQUEST", n[n.TIMEOUT=25]="TIMEOUT", n[n.GENERIC_RATE_LIMIT_EXCEEDED=22]="GENERIC_RATE_LIMIT_EXCEEDED", n[n.SLASH_EDIT_FILE_TOO_LONG=26]="SLASH_EDIT_FILE_TOO_LONG", n[n.FILE_UNSUPPORTED=27]="FILE_UNSUPPORTED", n[n.GPT_4_VISION_PREVIEW_RATE_LIMIT=28]="GPT_4_VISION_PREVIEW_RATE_LIMIT", n[n.CUSTOM_MESSAGE=29]="CUSTOM_MESSAGE", n[n.OUTDATED_CLIENT=30]="OUTDATED_CLIENT", n[n.CLAUDE_IMAGE_TOO_LARGE=31]="CLAUDE_IMAGE_TOO_LARGE", n[n.GITGRAPH_NOT_FOUND=32]="GITGRAPH_NOT_FOUND", n[n.FILE_NOT_FOUND=33]="FILE_NOT_FOUND", n[n.API_KEY_RATE_LIMIT=34]="API_KEY_RATE_LIMIT", n[n.DEBOUNCED=35]="DEBOUNCED", n[n.BAD_REQUEST=36]="BAD_REQUEST", n[n.REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED=37]="REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", n[n.UNAUTHORIZED=38]="UNAUTHORIZED", n[n.CONVERSATION_TOO_LONG=43]="CONVERSATION_TOO_LONG", n[n.USAGE_PRICING_REQUIRED=44]="USAGE_PRICING_REQUIRED", n[n.USAGE_PRICING_REQUIRED_CHANGEABLE=45]="USAGE_PRICING_REQUIRED_CHANGEABLE", n[n.GITHUB_NO_USER_CREDENTIALS=46]="GITHUB_NO_USER_CREDENTIALS", n[n.GITHUB_USER_NO_ACCESS=47]="GITHUB_USER_NO_ACCESS", n[n.GITHUB_APP_NO_ACCESS=48]="GITHUB_APP_NO_ACCESS", n[n.GITHUB_MULTIPLE_OWNERS=49]="GITHUB_MULTIPLE_OWNERS", n[n.RATE_LIMITED=50]="RATE_LIMITED", n[n.RATE_LIMITED_CHANGEABLE=51]="RATE_LIMITED_CHANGEABLE", n[n.CUSTOM=52]="CUSTOM", n[n.HOOKS_BLOCKED=53]="HOOKS_BLOCKED", n[n.SUSPICIOUS_USAGE_BLOCKED=54]="SUSPICIOUS_USAGE_BLOCKED", n[n.EXTENSION_HOST_TIMEOUT=55]="EXTENSION_HOST_TIMEOUT", n[n.NETWORK_ERROR=56]="NETWORK_ERROR", n[n.PROVIDER_ERROR=57]="PROVIDER_ERROR", n[n.MODEL_BLOCKED=58]="MODEL_BLOCKED"
})(yc||(yc={
  
})), v.util.setEnumType(yc, "aiserver.v1.ErrorDetails.Error", [{
  no:0, name:"ERROR_UNSPECIFIED"
}, {
  no:1, name:"ERROR_BAD_API_KEY"
}, {
  no:42, name:"ERROR_BAD_USER_API_KEY"
}, {
  no:2, name:"ERROR_NOT_LOGGED_IN"
}, {
  no:3, name:"ERROR_INVALID_AUTH_ID"
}, {
  no:4, name:"ERROR_NOT_HIGH_ENOUGH_PERMISSIONS"
}, {
  no:18, name:"ERROR_AGENT_REQUIRES_LOGIN"
}, {
  no:5, name:"ERROR_BAD_MODEL_NAME"
}, {
  no:39, name:"ERROR_NOT_FOUND"
}, {
  no:40, name:"ERROR_DEPRECATED"
}, {
  no:6, name:"ERROR_USER_NOT_FOUND"
}, {
  no:7, name:"ERROR_FREE_USER_RATE_LIMIT_EXCEEDED"
}, {
  no:8, name:"ERROR_PRO_USER_RATE_LIMIT_EXCEEDED"
}, {
  no:9, name:"ERROR_FREE_USER_USAGE_LIMIT"
}, {
  no:10, name:"ERROR_PRO_USER_USAGE_LIMIT"
}, {
  no:41, name:"ERROR_RESOURCE_EXHAUSTED"
}, {
  no:11, name:"ERROR_AUTH_TOKEN_NOT_FOUND"
}, {
  no:12, name:"ERROR_AUTH_TOKEN_EXPIRED"
}, {
  no:13, name:"ERROR_OPENAI"
}, {
  no:14, name:"ERROR_OPENAI_RATE_LIMIT_EXCEEDED"
}, {
  no:15, name:"ERROR_OPENAI_ACCOUNT_LIMIT_EXCEEDED"
}, {
  no:16, name:"ERROR_TASK_UUID_NOT_FOUND"
}, {
  no:17, name:"ERROR_TASK_NO_PERMISSIONS"
}, {
  no:19, name:"ERROR_AGENT_ENGINE_NOT_FOUND"
}, {
  no:20, name:"ERROR_MAX_TOKENS"
}, {
  no:23, name:"ERROR_PRO_USER_ONLY"
}, {
  no:24, name:"ERROR_API_KEY_NOT_SUPPORTED"
}, {
  no:21, name:"ERROR_USER_ABORTED_REQUEST"
}, {
  no:25, name:"ERROR_TIMEOUT"
}, {
  no:22, name:"ERROR_GENERIC_RATE_LIMIT_EXCEEDED"
}, {
  no:26, name:"ERROR_SLASH_EDIT_FILE_TOO_LONG"
}, {
  no:27, name:"ERROR_FILE_UNSUPPORTED"
}, {
  no:28, name:"ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT"
}, {
  no:29, name:"ERROR_CUSTOM_MESSAGE"
}, {
  no:30, name:"ERROR_OUTDATED_CLIENT"
}, {
  no:31, name:"ERROR_CLAUDE_IMAGE_TOO_LARGE"
}, {
  no:32, name:"ERROR_GITGRAPH_NOT_FOUND"
}, {
  no:33, name:"ERROR_FILE_NOT_FOUND"
}, {
  no:34, name:"ERROR_API_KEY_RATE_LIMIT"
}, {
  no:35, name:"ERROR_DEBOUNCED"
}, {
  no:36, name:"ERROR_BAD_REQUEST"
}, {
  no:37, name:"ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
}, {
  no:38, name:"ERROR_UNAUTHORIZED"
}, {
  no:43, name:"ERROR_CONVERSATION_TOO_LONG"
}, {
  no:44, name:"ERROR_USAGE_PRICING_REQUIRED"
}, {
  no:45, name:"ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE"
}, {
  no:46, name:"ERROR_GITHUB_NO_USER_CREDENTIALS"
}, {
  no:47, name:"ERROR_GITHUB_USER_NO_ACCESS"
}, {
  no:48, name:"ERROR_GITHUB_APP_NO_ACCESS"
}, {
  no:49, name:"ERROR_GITHUB_MULTIPLE_OWNERS"
}, {
  no:50, name:"ERROR_RATE_LIMITED"
}, {
  no:51, name:"ERROR_RATE_LIMITED_CHANGEABLE"
}, {
  no:52, name:"ERROR_CUSTOM"
}, {
  no:53, name:"ERROR_HOOKS_BLOCKED"
}, {
  no:54, name:"ERROR_SUSPICIOUS_USAGE_BLOCKED"
}, {
  no:55, name:"ERROR_EXTENSION_HOST_TIMEOUT"
}, {
  no:56, name:"ERROR_NETWORK_ERROR"
}, {
  no:57, name:"ERROR_PROVIDER_ERROR"
}, {
  no:58, name:"ERROR_MODEL_BLOCKED"
}
]), Rbt=class p2i extends ie{
  constructor(e){
    super(), this.title="", this.detail="", this.buttons=[], this.additionalInfo={
      
    }, this.planChoices=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CustomErrorDetails"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"detail",kind:"scalar",T:9
    }, {
      no:3,name:"allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"is_retryable",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"show_request_id",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"should_show_immediate_error",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"buttons",kind:"message",T:fEh,repeated:!0
    }, {
      no:7,name:"additional_info",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:9,name:"plan_choices",kind:"message",T:gEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new p2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new p2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new p2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(p2i, e, t)
  }
}, gEh=class g2i extends ie{
  constructor(e){
    super(), this.label="", this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PlanChoice"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }, {
      no:2,name:"sublabel",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"value",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new g2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new g2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new g2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(g2i, e, t)
  }
}, fEh=class f2i extends ie{
  constructor(e){
    super(), this.label="", this.action={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ErrorButton"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }, {
      no:2,name:"upgrade",kind:"message",T:AEh,oneof:"action"
    }, {
      no:3,name:"switch_model",kind:"message",T:yEh,oneof:"action"
    }, {
      no:4,name:"configure_spend_limit",kind:"message",T:wEh,oneof:"action"
    }, {
      no:5,name:"url",kind:"message",T:_Eh,oneof:"action"
    }, {
      no:6,name:"upgrade_choice",kind:"message",T:vEh,oneof:"action"
    }, {
      no:7,name:"dashboard_action",kind:"message",T:bEh,oneof:"action"
    }, {
      no:8,name:"reload_window",kind:"message",T:$9o,oneof:"action"
    }, {
      no:9,name:"client_action",kind:"message",T:ERc,oneof:"action"
    }
    ])
  }
  static fromBinary(e, t){
    return new f2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new f2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new f2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(f2i, e, t)
  }
}, ERc=class b2i extends ie{
  constructor(e){
    super(), this.commandId="", this.args={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ClientAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command_id",kind:"scalar",T:9
    }, {
      no:2,name:"args",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new b2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new b2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new b2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(b2i, e, t)
  }
}, $9o=class v2i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReloadWindowAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new v2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new v2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new v2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(v2i, e, t)
  }
}, bEh=class A2i extends ie{
  constructor(e){
    super(), this.action="", this.args={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DashboardAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"action",kind:"scalar",T:9
    }, {
      no:2,name:"args",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:3,name:"success_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new A2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new A2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new A2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(A2i, e, t)
  }
}, vEh=class y2i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpgradeChoice"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new y2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new y2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new y2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(y2i, e, t)
  }
}, AEh=class w2i extends ie{
  constructor(e){
    super(), this.membershipToUpgradeTo="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpgradeAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"membership_to_upgrade_to",kind:"scalar",T:9
    }, {
      no:2,name:"try_immediate_upgrade",kind:"scalar",T:8,opt:!0
    }, {
      no:3,name:"allow_trial",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new w2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new w2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new w2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(w2i, e, t)
  }
}, yEh=class _2i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SwitchModelAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggested_model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_2i, e, t)
  }
}, wEh=class C2i extends ie{
  constructor(e){
    super(), this.confirmLabel="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConfigureSpendLimitAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"confirm_label",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new C2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new C2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new C2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(C2i, e, t)
  }
}, _Eh=class S2i extends ie{
  constructor(e){
    super(), this.url="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UrlAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new S2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new S2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new S2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(S2i, e, t)
  }
}, ehe=class k2i extends ie{
  constructor(e){
    super(), this.data=new Uint8Array(0), this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ImageProto"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:12
    }, {
      no:2,name:"dimension",kind:"message",T:CEh
    }, {
      no:3,name:"uuid",kind:"scalar",T:9
    }, {
      no:4,name:"task_specific_description",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new k2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new k2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new k2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(k2i, e, t)
  }
}, CEh=class E2i extends ie{
  constructor(e){
    super(), this.width=0, this.height=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ImageProto.Dimension"
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
    return new E2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new E2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new E2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(E2i, e, t)
  }
}, q9o=class x2i extends ie{
  constructor(e){
    super(), this.markdown="", this.bubbleId="", this.sectionIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatQuote"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"markdown",kind:"scalar",T:9
    }, {
      no:2,name:"bubble_id",kind:"scalar",T:9
    }, {
      no:3,name:"section_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new x2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new x2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new x2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(x2i, e, t)
  }
}, SEh=class T2i extends ie{
  constructor(e){
    super(), this.url="", this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatExternalLink"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"uuid",kind:"scalar",T:9
    }, {
      no:3,name:"pdf_content",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_pdf",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"filename",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new T2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new T2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new T2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(T2i, e, t)
  }
}, s5t=class I2i extends ie{
  constructor(e){
    super(), this.url="", this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ComposerExternalLink"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"uuid",kind:"scalar",T:9
    }, {
      no:3,name:"pdf_content",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_pdf",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"filename",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new I2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new I2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new I2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(I2i, e, t)
  }
}, H9o=class D2i extends ie{
  constructor(e){
    super(), this.url="", this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKExternalLink"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new D2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new D2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new D2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(D2i, e, t)
  }
}, J9o=class B2i extends ie{
  constructor(e){
    super(), this.note="", this.commitHash="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommitNote"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"note",kind:"scalar",T:9
    }, {
      no:2,name:"commit_hash",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new B2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new B2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new B2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(B2i, e, t)
  }
}, kEh=class R2i extends ie{
  constructor(e){
    super(), this.note="", this.commitHash="", this.embeddings=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommitNoteWithEmbeddings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"note",kind:"scalar",T:9
    }, {
      no:2,name:"commit_hash",kind:"scalar",T:9
    }, {
      no:3,name:"embeddings",kind:"scalar",T:1,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new R2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new R2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new R2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(R2i, e, t)
  }
}, EEh=class P2i extends ie{
  constructor(e){
    super(), this.diff="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommitDiffString"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"diff",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new P2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new P2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new P2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(P2i, e, t)
  }
}, mpA=class L2i extends ie{
  constructor(e){
    super(), this.notes=[], this.commitHash="", this.repoUrl="", this.filesChangedRelativePath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FullCommitNotes"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"notes",kind:"message",T:J9o,repeated:!0
    }, {
      no:2,name:"commit_hash",kind:"scalar",T:9
    }, {
      no:3,name:"repo_url",kind:"scalar",T:9
    }, {
      no:4,name:"files_changed_relative_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new L2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new L2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new L2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(L2i, e, t)
  }
}, xEh=class N2i extends ie{
  constructor(e){
    super(), this.key="", this.value="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CrossExtHostHeader"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"key",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new N2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new N2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new N2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(N2i, e, t)
  }
}, xRc=class M2i extends ie{
  constructor(e){
    super(), this.headers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CrossExtHostHeaders"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"headers",kind:"message",T:xEh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new M2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new M2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new M2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(M2i, e, t)
  }
}, E5n=class F2i extends ie{
  constructor(e){
    super(), this.message=new Uint8Array(0), this.isError=!1, this.connectError="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SimpleUnaryCrossExtensionHostMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:12
    }, {
      no:2,name:"header",kind:"message",T:xRc
    }, {
      no:3,name:"trailer",kind:"message",T:xRc
    }, {
      no:4,name:"is_error",kind:"scalar",T:8
    }, {
      no:5,name:"connect_error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new F2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new F2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new F2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(F2i, e, t)
  }
}, TRc=class O2i extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.startLineNumber=0, this.lines=[], this.languageIdentifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CodeChunk"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"summarization_strategy",kind:"enum",T:v.getEnumType(W9o),opt:!0
    }, {
      no:5,name:"language_identifier",kind:"scalar",T:9
    }, {
      no:6,name:"intent",kind:"enum",T:v.getEnumType(G9o),opt:!0
    }, {
      no:7,name:"is_final_version",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"is_first_version",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new O2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new O2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new O2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(O2i, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.COMPOSER_FILE=1]="COMPOSER_FILE", n[n.COMPRESSED_COMPOSER_FILE=2]="COMPRESSED_COMPOSER_FILE"
})(G9o||(G9o={
  
})), v.util.setEnumType(G9o, "aiserver.v1.CodeChunk.Intent", [{
  no:0, name:"INTENT_UNSPECIFIED"
}, {
  no:1, name:"INTENT_COMPOSER_FILE"
}, {
  no:2, name:"INTENT_COMPRESSED_COMPOSER_FILE"
}
]), (function(n){
  n[n.NONE_UNSPECIFIED=0]="NONE_UNSPECIFIED", n[n.SUMMARIZED=1]="SUMMARIZED", n[n.EMBEDDED=2]="EMBEDDED"
})(W9o||(W9o={
  
})), v.util.setEnumType(W9o, "aiserver.v1.CodeChunk.SummarizationStrategy", [{
  no:0, name:"SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED"
}, {
  no:1, name:"SUMMARIZATION_STRATEGY_SUMMARIZED"
}, {
  no:2, name:"SUMMARIZATION_STRATEGY_EMBEDDED"
}
]), TEh=class U2i extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPCallFrame"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"function_name",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"url",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"line_number",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"column_number",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new U2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new U2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new U2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(U2i, e, t)
  }
}, IEh=class $2i extends ie{
  constructor(e){
    super(), this.callFrames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPStackTrace"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"call_frames",kind:"message",T:TEh,repeated:!0
    }, {
      no:2,name:"raw_stack_trace",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($2i, e, t)
  }
}, IRc=class q2i extends ie{
  constructor(e){
    super(), this.message="", this.timestamp=0, this.level="", this.clientName="", this.sessionId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPLogEntry"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"timestamp",kind:"scalar",T:1
    }, {
      no:3,name:"level",kind:"scalar",T:9
    }, {
      no:4,name:"client_name",kind:"scalar",T:9
    }, {
      no:5,name:"session_id",kind:"scalar",T:9
    }, {
      no:6,name:"stack_trace",kind:"message",T:IEh,opt:!0
    }, {
      no:7,name:"object_data_json",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new q2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new q2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new q2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(q2i, e, t)
  }
}, DRc=class H2i extends ie{
  constructor(e){
    super(), this.element="", this.xpath="", this.textContent="", this.extra="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPUIElementPicked"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"element",kind:"scalar",T:9
    }, {
      no:2,name:"xpath",kind:"scalar",T:9
    }, {
      no:3,name:"text_content",kind:"scalar",T:9
    }, {
      no:4,name:"extra",kind:"scalar",T:9
    }, {
      no:5,name:"component",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"component_props_json",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new H2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new H2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new H2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(H2i, e, t)
  }
}, DEh=class J2i extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPChatMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new J2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new J2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new J2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(J2i, e, t)
  }
}, ppA=class G2i extends ie{
  constructor(e){
    super(), this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RCPMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"console",kind:"message",T:IRc,oneof:"message"
    }, {
      no:2,name:"ui_element_picked",kind:"message",T:DRc,oneof:"message"
    }, {
      no:3,name:"chat_message",kind:"message",T:DEh,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new G2i().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new G2i().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new G2i().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(G2i, e, t)
  }
}
}
}), BEh, REh, Q9o, Hte, CF, gpA, P9e=