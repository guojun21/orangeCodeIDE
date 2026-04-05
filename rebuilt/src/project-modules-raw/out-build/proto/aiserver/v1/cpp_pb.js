// Module: out-build/proto/aiserver/v1/cpp_pb.js
// Offset: 3514672 (bundle byte offset)
// Size: 112043 bytes

Ka(), qp(), A4c(), S4c(), jY(), B8n(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ACCEPT=1]="ACCEPT", n[n.REJECT=2]="REJECT", n[n.PARTIAL_ACCEPT=3]="PARTIAL_ACCEPT"
})(YKe||(YKe={
  
})), v.util.setEnumType(YKe, "aiserver.v1.CppFate", [{
  no:0, name:"CPP_FATE_UNSPECIFIED"
}, {
  no:1, name:"CPP_FATE_ACCEPT"
}, {
  no:2, name:"CPP_FATE_REJECT"
}, {
  no:3, name:"CPP_FATE_PARTIAL_ACCEPT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LINE_CHANGE=1]="LINE_CHANGE", n[n.TYPING=2]="TYPING", n[n.OPTION_HOLD=3]="OPTION_HOLD", n[n.LINTER_ERRORS=4]="LINTER_ERRORS", n[n.PARAMETER_HINTS=5]="PARAMETER_HINTS", n[n.CURSOR_PREDICTION=6]="CURSOR_PREDICTION", n[n.MANUAL_TRIGGER=7]="MANUAL_TRIGGER", n[n.EDITOR_CHANGE=8]="EDITOR_CHANGE", n[n.LSP_SUGGESTIONS=9]="LSP_SUGGESTIONS"
})(Gte||(Gte={
  
})), v.util.setEnumType(Gte, "aiserver.v1.CppSource", [{
  no:0, name:"CPP_SOURCE_UNSPECIFIED"
}, {
  no:1, name:"CPP_SOURCE_LINE_CHANGE"
}, {
  no:2, name:"CPP_SOURCE_TYPING"
}, {
  no:3, name:"CPP_SOURCE_OPTION_HOLD"
}, {
  no:4, name:"CPP_SOURCE_LINTER_ERRORS"
}, {
  no:5, name:"CPP_SOURCE_PARAMETER_HINTS"
}, {
  no:6, name:"CPP_SOURCE_CURSOR_PREDICTION"
}, {
  no:7, name:"CPP_SOURCE_MANUAL_TRIGGER"
}, {
  no:8, name:"CPP_SOURCE_EDITOR_CHANGE"
}, {
  no:9, name:"CPP_SOURCE_LSP_SUGGESTIONS"
}
]), k4c=class _Zi extends ie{
  constructor(e){
    super(), this.source="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppIntentInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"source",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _Zi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Zi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Zi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Zi, e, t)
  }
}, zMh=class CZi extends ie{
  constructor(e){
    super(), this.label="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSuggestion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new CZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CZi, e, t)
  }
}, VMh=class SZi extends ie{
  constructor(e){
    super(), this.suggestions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSuggestedItems"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestions",kind:"message",T:zMh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new SZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SZi, e, t)
  }
}, KMh=class kZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShouldTurnOnCppOnboardingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new kZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kZi, e, t)
  }
}, YMh=class EZi extends ie{
  constructor(e){
    super(), this.shouldTurnOnCppOnboarding=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShouldTurnOnCppOnboardingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"should_turn_on_cpp_onboarding",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new EZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new EZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new EZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(EZi, e, t)
  }
}, q6o=class xZi extends ie{
  constructor(e){
    super(), this.diffHistory=[], this.contextItems=[], this.diffHistoryKeys=[], this.fileDiffHistories=[], this.mergedDiffHistories=[], this.blockDiffPatches=[], this.parameterHints=[], this.lspContexts=[], this.additionalFiles=[], this.filesyncUpdates=[], this.timeSinceRequestStart=0, this.timeAtRequestSend=0, this.codeResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"diff_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"linter_errors",kind:"message",T:aN,opt:!0
    }, {
      no:13,name:"context_items",kind:"message",T:W6o,repeated:!0
    }, {
      no:5,name:"diff_history_keys",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"give_debug_output",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:8,name:"merged_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:9,name:"block_diff_patches",kind:"message",T:V6o,repeated:!0
    }, {
      no:10,name:"is_nightly",kind:"scalar",T:8,opt:!0
    }, {
      no:11,name:"is_debug",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"immediately_ack",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"enable_more_context",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"parameter_hints",kind:"message",T:D4c,repeated:!0
    }, {
      no:15,name:"lsp_contexts",kind:"message",T:$6o,repeated:!0
    }, {
      no:16,name:"cpp_intent_info",kind:"message",T:k4c,opt:!0
    }, {
      no:18,name:"workspace_id",kind:"scalar",T:9,opt:!0
    }, {
      no:19,name:"additional_files",kind:"message",T:x4c,repeated:!0
    }, {
      no:20,name:"control_token",kind:"enum",T:v.getEnumType(yz),opt:!0
    }, {
      no:21,name:"client_time",kind:"scalar",T:1,opt:!0
    }, {
      no:22,name:"filesync_updates",kind:"message",T:a9t,repeated:!0
    }, {
      no:23,name:"time_since_request_start",kind:"scalar",T:1
    }, {
      no:24,name:"time_at_request_send",kind:"scalar",T:1
    }, {
      no:25,name:"client_timezone_offset",kind:"scalar",T:1,opt:!0
    }, {
      no:26,name:"lsp_suggested_items",kind:"message",T:VMh,opt:!0
    }, {
      no:27,name:"supports_cpt",kind:"scalar",T:8,opt:!0
    }, {
      no:28,name:"supports_crlf_cpt",kind:"scalar",T:8,opt:!0
    }, {
      no:29,name:"code_results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xZi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.QUIET=1]="QUIET", n[n.LOUD=2]="LOUD", n[n.OP=3]="OP"
})(yz||(yz={
  
})), v.util.setEnumType(yz, "aiserver.v1.StreamCppRequest.ControlToken", [{
  no:0, name:"CONTROL_TOKEN_UNSPECIFIED"
}, {
  no:1, name:"CONTROL_TOKEN_QUIET"
}, {
  no:2, name:"CONTROL_TOKEN_LOUD"
}, {
  no:3, name:"CONTROL_TOKEN_OP"
}
]), ZMh=class TZi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"suggestion_start_line",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"suggestion_confidence",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"done_stream",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"debug_model_output",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"debug_model_input",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"debug_stream_time",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"debug_total_time",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"debug_ttft_time",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"debug_server_timing",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"range_to_replace",kind:"message",T:S3,opt:!0
    }, {
      no:12,name:"cursor_prediction_target",kind:"message",T:XMh,opt:!0
    }, {
      no:13,name:"done_edit",kind:"scalar",T:8,opt:!0
    }, {
      no:14,name:"model_info",kind:"message",T:e2h,opt:!0
    }, {
      no:15,name:"begin_edit",kind:"scalar",T:8,opt:!0
    }, {
      no:16,name:"should_remove_leading_eol",kind:"scalar",T:8,opt:!0
    }, {
      no:17,name:"binding_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new TZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new TZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new TZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(TZi, e, t)
  }
}, XMh=class IZi extends ie{
  constructor(e){
    super(), this.relativePath="", this.lineNumberOneIndexed=0, this.expectedContent="", this.shouldRetriggerCpp=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCppResponse.CursorPredictionTarget"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:3,name:"expected_content",kind:"scalar",T:9
    }, {
      no:4,name:"should_retrigger_cpp",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new IZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new IZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new IZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(IZi, e, t)
  }
}, e2h=class DZi extends ie{
  constructor(e){
    super(), this.isFusedCursorPredictionModel=!1, this.isMultidiffModel=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamCppResponse.ModelInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_fused_cursor_prediction_model",kind:"scalar",T:8
    }, {
      no:2,name:"is_multidiff_model",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new DZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DZi, e, t)
  }
}, H6o=class BZi extends ie{
  constructor(e){
    super(), this.model="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_nightly",kind:"scalar",T:8,opt:!0
    }, {
      no:2,name:"model",kind:"scalar",T:9
    }, {
      no:3,name:"supports_cpt",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new BZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BZi, e, t)
  }
}, t2h=class RZi extends ie{
  constructor(e){
    super(), this.heuristics=[], this.excludeRecentlyViewedFilesPatterns=[], this.enableRvfTracking=!1, this.globalDebounceDurationMillis=0, this.clientDebounceDurationMillis=0, this.cppUrl="", this.useWhitespaceDiffHistory=!1, this.enableFilesyncDebounceSkipping=!1, this.checkFilesyncHashPercent=0, this.geoCppBackendUrl="", this.isFusedCursorPredictionModel=!1, this.includeUnchangedLines=!1, this.shouldFetchRvfText=!1, this.allowsTabChunks=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"above_radius",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"below_radius",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"merge_behavior",kind:"message",T:i2h,opt:!0
    }, {
      no:5,name:"is_on",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"is_ghost_text",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"should_let_user_enable_cpp_even_if_not_pro",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"heuristics",kind:"enum",T:v.getEnumType(j9e),repeated:!0
    }, {
      no:9,name:"exclude_recently_viewed_files_patterns",kind:"scalar",T:9,repeated:!0
    }, {
      no:10,name:"enable_rvf_tracking",kind:"scalar",T:8
    }, {
      no:11,name:"global_debounce_duration_millis",kind:"scalar",T:5
    }, {
      no:12,name:"client_debounce_duration_millis",kind:"scalar",T:5
    }, {
      no:13,name:"cpp_url",kind:"scalar",T:9
    }, {
      no:14,name:"use_whitespace_diff_history",kind:"scalar",T:8
    }, {
      no:15,name:"import_prediction_config",kind:"message",T:n2h
    }, {
      no:16,name:"enable_filesync_debounce_skipping",kind:"scalar",T:8
    }, {
      no:17,name:"check_filesync_hash_percent",kind:"scalar",T:2
    }, {
      no:18,name:"geo_cpp_backend_url",kind:"scalar",T:9
    }, {
      no:19,name:"recently_rejected_edit_thresholds",kind:"message",T:r2h,opt:!0
    }, {
      no:20,name:"is_fused_cursor_prediction_model",kind:"scalar",T:8
    }, {
      no:21,name:"include_unchanged_lines",kind:"scalar",T:8
    }, {
      no:22,name:"should_fetch_rvf_text",kind:"scalar",T:8
    }, {
      no:23,name:"max_number_of_cleared_suggestions_since_last_accept",kind:"scalar",T:5,opt:!0
    }, {
      no:24,name:"suggestion_hint_config",kind:"message",T:s2h,opt:!0
    }, {
      no:25,name:"allows_tab_chunks",kind:"scalar",T:8
    }, {
      no:26,name:"tab_context_refresh_debounce_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:27,name:"tab_context_refresh_editor_change_debounce_ms",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new RZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RZi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LOTS_OF_ADDED_TEXT=1]="LOTS_OF_ADDED_TEXT", n[n.DUPLICATING_LINE_AFTER_SUGGESTION=2]="DUPLICATING_LINE_AFTER_SUGGESTION", n[n.DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION=3]="DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION", n[n.REVERTING_USER_CHANGE=4]="REVERTING_USER_CHANGE", n[n.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED=5]="OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED", n[n.SUGGESTING_RECENTLY_REJECTED_EDIT=6]="SUGGESTING_RECENTLY_REJECTED_EDIT"
})(j9e||(j9e={
  
})), v.util.setEnumType(j9e, "aiserver.v1.CppConfigResponse.Heuristic", [{
  no:0, name:"HEURISTIC_UNSPECIFIED"
}, {
  no:1, name:"HEURISTIC_LOTS_OF_ADDED_TEXT"
}, {
  no:2, name:"HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION"
}, {
  no:3, name:"HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"
}, {
  no:4, name:"HEURISTIC_REVERTING_USER_CHANGE"
}, {
  no:5, name:"HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"
}, {
  no:6, name:"HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT"
}
]), n2h=class PZi extends ie{
  constructor(e){
    super(), this.isDisabledByBackend=!1, this.shouldTurnOnAutomatically=!1, this.pythonEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigResponse.ImportPredictionConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_disabled_by_backend",kind:"scalar",T:8
    }, {
      no:2,name:"should_turn_on_automatically",kind:"scalar",T:8
    }, {
      no:3,name:"python_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new PZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PZi, e, t)
  }
}, i2h=class LZi extends ie{
  constructor(e){
    super(), this.type="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigResponse.MergeBehavior"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"scalar",T:9
    }, {
      no:2,name:"limit",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"radius",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new LZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LZi, e, t)
  }
}, r2h=class NZi extends ie{
  constructor(e){
    super(), this.hardRejectThreshold=0, this.softRejectThreshold=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hard_reject_threshold",kind:"scalar",T:5
    }, {
      no:2,name:"soft_reject_threshold",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new NZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NZi, e, t)
  }
}, s2h=class MZi extends ie{
  constructor(e){
    super(), this.importantLspExtensions=[], this.enabledForPathExtensions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppConfigResponse.SuggestionHintConfig"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"important_lsp_extensions",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"enabled_for_path_extensions",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new MZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MZi, e, t)
  }
}, J6o=class FZi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SuggestedEdit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"edit_range",kind:"message",T:wF
    }, {
      no:2,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new FZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FZi, e, t)
  }
}, E4c=class OZi extends ie{
  constructor(e){
    super(), this.suggestedEdits=[], this.markerTouchesGreen=!1, this.currentFileContentsForLinterErrors="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCppEditClassificationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_request",kind:"message",T:q6o
    }, {
      no:25,name:"suggested_edits",kind:"message",T:J6o,repeated:!0
    }, {
      no:26,name:"marker_touches_green",kind:"scalar",T:8
    }, {
      no:27,name:"current_file_contents_for_linter_errors",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new OZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OZi, e, t)
  }
}, o2h=class UZi extends ie{
  constructor(e){
    super(), this.scoredEdits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCppEditClassificationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scored_edits",kind:"message",T:G6o,repeated:!0
    }, {
      no:2,name:"noop_edit",kind:"message",T:G6o
    }, {
      no:3,name:"should_noop",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"generation_edit",kind:"message",T:G6o
    }
    ])
  }
  static fromBinary(e, t){
    return new UZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UZi, e, t)
  }
}, a2h=class $Zi extends ie{
  constructor(e){
    super(), this.tokens=[], this.tokenLogprobs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCppEditClassificationResponse.LogProbs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tokens",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"token_logprobs",kind:"scalar",T:1,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $Zi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Zi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Zi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Zi, e, t)
  }
}, G6o=class qZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCppEditClassificationResponse.ScoredEdit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"edit",kind:"message",T:J6o
    }, {
      no:2,name:"log_probs",kind:"message",T:a2h
    }
    ])
  }
  static fromBinary(e, t){
    return new qZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qZi, e, t)
  }
}, x4c=class HZi extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.isOpen=!1, this.visibleRangeContent=[], this.startLineNumberOneIndexed=[], this.visibleRanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AdditionalFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"is_open",kind:"scalar",T:8
    }, {
      no:3,name:"visible_range_content",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"last_viewed_at",kind:"scalar",T:1,opt:!0
    }, {
      no:5,name:"start_line_number_one_indexed",kind:"scalar",T:5,repeated:!0
    }, {
      no:6,name:"visible_ranges",kind:"message",T:S3,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new HZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HZi, e, t)
  }
}, T4c=class JZi extends ie{
  constructor(e){
    super(), this.requestId="", this.performanceNowTime=0, this.fate=YKe.UNSPECIFIED, this.extension="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordCppFateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"performance_now_time",kind:"scalar",T:2
    }, {
      no:3,name:"fate",kind:"enum",T:v.getEnumType(YKe)
    }, {
      no:4,name:"extension",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new JZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JZi, e, t)
  }
}, c2h=class GZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordCppFateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new GZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GZi, e, t)
  }
}, l2h=class WZi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableCppModelsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new WZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WZi, e, t)
  }
}, u2h=class QZi extends ie{
  constructor(e){
    super(), this.models=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AvailableCppModelsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"models",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"default_model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new QZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QZi, e, t)
  }
}, d2h=class jZi extends ie{
  constructor(e){
    super(), this.contextItems=[], this.fileDiffHistories=[], this.mergedDiffHistories=[], this.blockDiffPatches=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamHoldCppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:4,name:"linter_errors",kind:"message",T:aN,opt:!0
    }, {
      no:13,name:"context_items",kind:"message",T:W6o,repeated:!0
    }, {
      no:7,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:8,name:"merged_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:9,name:"block_diff_patches",kind:"message",T:V6o,repeated:!0
    }, {
      no:10,name:"model_details",kind:"message",T:Yf
    }
    ])
  }
  static fromBinary(e, t){
    return new jZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jZi, e, t)
  }
}, h2h=class zZi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamHoldCppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zZi, e, t)
  }
}, wz=class VZi extends ie{
  constructor(e){
    super(), this.fileName="", this.diffHistory=[], this.diffHistoryTimestamps=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppFileDiffHistory"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_name",kind:"scalar",T:9
    }, {
      no:2,name:"diff_history",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"diff_history_timestamps",kind:"scalar",T:1,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new VZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VZi, e, t)
  }
}, m2h=class KZi extends ie{
  constructor(e){
    super(), this.fileDiffHistories=[], this.additionalFiles=[], this.timeSinceRequestStart=0, this.timeAtRequestSend=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RefreshTabContextRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"linter_errors",kind:"message",T:aN,opt:!0
    }, {
      no:4,name:"file_diff_histories",kind:"message",T:wz,repeated:!0
    }, {
      no:5,name:"additional_files",kind:"message",T:x4c,repeated:!0
    }, {
      no:6,name:"client_time",kind:"scalar",T:1,opt:!0
    }, {
      no:7,name:"time_since_request_start",kind:"scalar",T:1
    }, {
      no:8,name:"time_at_request_send",kind:"scalar",T:1
    }, {
      no:9,name:"is_debug",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"workspace_id",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"supports_cpt",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"supports_crlf_cpt",kind:"scalar",T:8,opt:!0
    }, {
      no:13,name:"repository_info",kind:"message",T:z_
    }
    ])
  }
  static fromBinary(e, t){
    return new KZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KZi, e, t)
  }
}, I4c=class YZi extends ie{
  constructor(e){
    super(), this.codeResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RefreshTabContextResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code_results",kind:"message",T:zR,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new YZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YZi, e, t)
  }
}, p2h=class ZZi extends ie{
  constructor(e){
    super(), this.relativePath="", this.lineNumber=0, this.deletedLines=[], this.insertedLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EditPatch"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"line_number",kind:"scalar",T:13
    }, {
      no:3,name:"deleted_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"inserted_lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ZZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZZi, e, t)
  }
}, EgA=class XZi extends ie{
  constructor(e){
    super(), this.fileName="", this.editPatches=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CptFileDiffHistory"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_name",kind:"scalar",T:9
    }, {
      no:2,name:"edit_patches",kind:"message",T:p2h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new XZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XZi, e, t)
  }
}, W6o=class eXi extends ie{
  constructor(e){
    super(), this.contents="", this.relativeWorkspacePath="", this.score=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppContextItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"contents",kind:"scalar",T:9
    }, {
      no:2,name:"symbol",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:4,name:"score",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new eXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eXi, e, t)
  }
}, g2h=class tXi extends ie{
  constructor(e){
    super(), this.requestId="", this.expectedBehavior="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddTabRequestToEvalRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"expected_behavior",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tXi, e, t)
  }
}, f2h=class nXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddTabRequestToEvalResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nXi, e, t)
  }
}, b2h=class iXi extends ie{
  constructor(e){
    super(), this.requestId="", this.sessionId="", this.responseType=M8n.UNSPECIFIED, this.modelCodeName="", this.modelOpenaiName="", this.currentPerformanceNowTime=0, this.sessionPerformanceOriginTime=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MarkCppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"session_id",kind:"scalar",T:9
    }, {
      no:3,name:"response_type",kind:"enum",T:v.getEnumType(M8n)
    }, {
      no:4,name:"desired_completion",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"range_transformation",kind:"message",T:v2h
    }, {
      no:10,name:"model_code_name",kind:"scalar",T:9
    }, {
      no:11,name:"model_openai_name",kind:"scalar",T:9
    }, {
      no:12,name:"current_performance_now_time",kind:"scalar",T:1
    }, {
      no:13,name:"session_performance_origin_time",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new iXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iXi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.GOOD=1]="GOOD", n[n.BAD=2]="BAD", n[n.BAD_CONTEXT=3]="BAD_CONTEXT", n[n.BAD_REASONING=4]="BAD_REASONING", n[n.BAD_STUPID_MISTAKE=5]="BAD_STUPID_MISTAKE", n[n.BAD_FORMATTING=6]="BAD_FORMATTING", n[n.BAD_RANGE=7]="BAD_RANGE", n[n.GOOD_PREDICTION=8]="GOOD_PREDICTION", n[n.BAD_FALSE_POSITIVE_TRIGGER=9]="BAD_FALSE_POSITIVE_TRIGGER", n[n.BAD_FALSE_NEGATIVE_TRIGGER=10]="BAD_FALSE_NEGATIVE_TRIGGER"
})(M8n||(M8n={
  
})), v.util.setEnumType(M8n, "aiserver.v1.MarkCppRequest.CppResponseTypes", [{
  no:0, name:"CPP_RESPONSE_TYPES_UNSPECIFIED"
}, {
  no:1, name:"CPP_RESPONSE_TYPES_GOOD"
}, {
  no:2, name:"CPP_RESPONSE_TYPES_BAD"
}, {
  no:3, name:"CPP_RESPONSE_TYPES_BAD_CONTEXT"
}, {
  no:4, name:"CPP_RESPONSE_TYPES_BAD_REASONING"
}, {
  no:5, name:"CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE"
}, {
  no:6, name:"CPP_RESPONSE_TYPES_BAD_FORMATTING"
}, {
  no:7, name:"CPP_RESPONSE_TYPES_BAD_RANGE"
}, {
  no:8, name:"CPP_RESPONSE_TYPES_GOOD_PREDICTION"
}, {
  no:9, name:"CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER"
}, {
  no:10, name:"CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER"
}
]), v2h=class rXi extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.endLineNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MarkCppRequest.RangeTransformation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:2,name:"end_line_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new rXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rXi, e, t)
  }
}, D4c=class sXi extends ie{
  constructor(e){
    super(), this.label="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppParameterHint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"label",kind:"scalar",T:9
    }, {
      no:2,name:"documentation",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sXi, e, t)
  }
}, A2h=class oXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MarkCppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new oXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oXi, e, t)
  }
}, sae=class aXi extends ie{
  constructor(e){
    super(), this.startLineNumber=0, this.startColumn=0, this.endLineNumber=0, this.endColumn=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IRange"
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
    return new aXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aXi, e, t)
  }
}, c9t=class cXi extends ie{
  constructor(e){
    super(), this.lineNumberOneIndexed=0, this.columnOneIndexed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.OneIndexedPosition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:2,name:"column_one_indexed",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new cXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cXi, e, t)
  }
}, y2h=class lXi extends ie{
  constructor(e){
    super(), this.selectionStartLineNumber=0, this.selectionStartColumn=0, this.positionLineNumber=0, this.positionColumn=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorSelection"
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
    return new lXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lXi, e, t)
  }
}, ZKe=class uXi extends ie{
  constructor(e){
    super(), this.text="", this.modelIsAttachedToEditor=!1, this.modelIsAttachedToTheActiveEditor=!1, this.cursorSelections=[], this.modelVersionAtMetadataRetrievalTime=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:sae
    }, {
      no:3,name:"final_model_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"model_version_immediately_after_this_change",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"performance_now_timestamp",kind:"scalar",T:1,opt:!0
    }, {
      no:7,name:"is_undoing",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"is_redoing",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"model_is_attached_to_editor",kind:"scalar",T:8
    }, {
      no:10,name:"model_is_attached_to_the_active_editor",kind:"scalar",T:8
    }, {
      no:11,name:"cursor_selections",kind:"message",T:y2h,repeated:!0
    }, {
      no:12,name:"model_version_at_metadata_retrieval_time",kind:"scalar",T:5
    }, {
      no:13,name:"global_index",kind:"scalar",T:3,opt:!0
    }, {
      no:14,name:"performance_now_flush_time",kind:"scalar",T:1,opt:!0
    }, {
      no:15,name:"change_index",kind:"scalar",T:5,opt:!0
    }, {
      no:16,name:"flush_index",kind:"scalar",T:5,opt:!0
    }, {
      no:17,name:"global_index_v2",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uXi, e, t)
  }
}, F8n=class dXi extends ie{
  constructor(e){
    super(), this.suggestionId=0, this.suggestionText="", this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel=0, this.originalText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CurrentlyShownCppSuggestion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestion_id",kind:"scalar",T:5
    }, {
      no:2,name:"suggestion_text",kind:"scalar",T:9
    }, {
      no:3,name:"model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",kind:"scalar",T:5
    }, {
      no:4,name:"range_of_suggestion_in_current_model",kind:"message",T:sae,opt:!0
    }, {
      no:5,name:"original_text",kind:"scalar",T:9
    }, {
      no:6,name:"binding_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dXi, e, t)
  }
}, w2h=class hXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppAcceptEventNew"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:F8n
    }, {
      no:7,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new hXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hXi, e, t)
  }
}, B4c=class mXi extends ie{
  constructor(e){
    super(), this.requestId="", this.suggestionText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecoverableCppData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"suggestion_text",kind:"scalar",T:9
    }, {
      no:3,name:"suggestion_range",kind:"message",T:sae
    }, {
      no:4,name:"position",kind:"message",T:c9t
    }
    ])
  }
  static fromBinary(e, t){
    return new mXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mXi, e, t)
  }
}, _2h=class pXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppSuggestEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:F8n
    }, {
      no:2,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:3,name:"recoverable_cpp_data",kind:"message",T:B4c
    }
    ])
  }
  static fromBinary(e, t){
    return new pXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pXi, e, t)
  }
}, C2h=class gXi extends ie{
  constructor(e){
    super(), this.generationUuid="", this.modelVersion=0, this.source=Gte.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppTriggerEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"generation_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"model_version",kind:"scalar",T:5
    }, {
      no:3,name:"cursor_position",kind:"message",T:c9t
    }, {
      no:4,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:5,name:"source",kind:"enum",T:v.getEnumType(Gte)
    }
    ])
  }
  static fromBinary(e, t){
    return new gXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gXi, e, t)
  }
}, S2h=class fXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FinishedCppGenerationEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"recoverable_cpp_data",kind:"message",T:B4c
    }
    ])
  }
  static fromBinary(e, t){
    return new fXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fXi, e, t)
  }
}, k2h=class bXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppRejectEventNew"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:F8n
    }, {
      no:7,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new bXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bXi, e, t)
  }
}, E2h=class vXi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Edit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:sae
    }
    ])
  }
  static fromBinary(e, t){
    return new vXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vXi, e, t)
  }
}, x2h=class AXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppPartialAcceptEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:F8n
    }, {
      no:2,name:"edit",kind:"message",T:E2h
    }, {
      no:3,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new AXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AXi, e, t)
  }
}, Q6o=class yXi extends ie{
  constructor(e){
    super(), this.requestId="", this.predictionId=0, this.lineNumber=0, this.source=avt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorPrediction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"prediction_id",kind:"scalar",T:5
    }, {
      no:3,name:"line_number",kind:"scalar",T:5
    }, {
      no:4,name:"source",kind:"enum",T:v.getEnumType(avt)
    }, {
      no:5,name:"binding_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yXi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ALWAYS_ON=1]="ALWAYS_ON", n[n.ACCEPT=2]="ACCEPT", n[n.UNDO=3]="UNDO", n[n.EDITOR_CHANGE=4]="EDITOR_CHANGE"
})(avt||(avt={
  
})), v.util.setEnumType(avt, "aiserver.v1.CursorPrediction.CursorPredictionSource", [{
  no:0, name:"CURSOR_PREDICTION_SOURCE_UNSPECIFIED"
}, {
  no:1, name:"CURSOR_PREDICTION_SOURCE_ALWAYS_ON"
}, {
  no:2, name:"CURSOR_PREDICTION_SOURCE_ACCEPT"
}, {
  no:3, name:"CURSOR_PREDICTION_SOURCE_UNDO"
}, {
  no:4, name:"CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE"
}
]), T2h=class wXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SuggestCursorPredictionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cursor_prediction",kind:"message",T:Q6o
    }, {
      no:2,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new wXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wXi, e, t)
  }
}, I2h=class _Xi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AcceptCursorPredictionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cursor_prediction",kind:"message",T:Q6o
    }, {
      no:2,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new _Xi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Xi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Xi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Xi, e, t)
  }
}, D2h=class CXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RejectCursorPredictionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cursor_prediction",kind:"message",T:Q6o
    }, {
      no:2,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new CXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CXi, e, t)
  }
}, j6o=class SXi extends ie{
  constructor(e){
    super(), this.modelVersion=0, this.relativePath="", this.modelId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MaybeDefinedPointInTimeModel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_uuid",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"model_version",kind:"scalar",T:5
    }, {
      no:3,name:"relative_path",kind:"scalar",T:9
    }, {
      no:4,name:"model_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new SXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SXi, e, t)
  }
}, kF=class kXi extends ie{
  constructor(e){
    super(), this.modelUuid="", this.modelVersion=0, this.relativePath="", this.modelId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PointInTimeModel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"model_version",kind:"scalar",T:5
    }, {
      no:3,name:"relative_path",kind:"scalar",T:9
    }, {
      no:4,name:"model_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kXi, e, t)
  }
}, B2h=class EXi extends ie{
  constructor(e){
    super(), this.lineNumberOneIndexed=0, this.columnNumberOneIndexed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppManualTriggerEventNew"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line_number_one_indexed",kind:"scalar",T:5
    }, {
      no:2,name:"column_number_one_indexed",kind:"scalar",T:5
    }, {
      no:7,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new EXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new EXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new EXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(EXi, e, t)
  }
}, R2h=class xXi extends ie{
  constructor(e){
    super(), this.modelUuid="", this.relativePath="", this.reason=cvt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppStoppedTrackingModelEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"relative_path",kind:"scalar",T:9
    }, {
      no:3,name:"reason",kind:"enum",T:v.getEnumType(cvt)
    }
    ])
  }
  static fromBinary(e, t){
    return new xXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xXi, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.FILE_TOO_BIG=1]="FILE_TOO_BIG", n[n.FILE_DISPOSED=2]="FILE_DISPOSED", n[n.CHANGE_TOO_BIG=3]="CHANGE_TOO_BIG"
})(cvt||(cvt={
  
})), v.util.setEnumType(cvt, "aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [{
  no:0, name:"STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED"
}, {
  no:1, name:"STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG"
}, {
  no:2, name:"STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED"
}, {
  no:3, name:"STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG"
}
]), P2h=class TXi extends ie{
  constructor(e){
    super(), this.addedErrors=[], this.removedErrors=[], this.errors=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppLinterErrorEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"added_errors",kind:"message",T:qte,repeated:!0
    }, {
      no:3,name:"removed_errors",kind:"message",T:qte,repeated:!0
    }, {
      no:4,name:"errors",kind:"message",T:qte,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new TXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new TXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new TXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(TXi, e, t)
  }
}, L2h=class IXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppDebouncedCursorMovementEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"cursor_position",kind:"message",T:c9t
    }
    ])
  }
  static fromBinary(e, t){
    return new IXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new IXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new IXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(IXi, e, t)
  }
}, N2h=class DXi extends ie{
  constructor(e){
    super(), this.visibleRanges=[], this.editorId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppEditorChangedEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"cursor_position",kind:"message",T:c9t
    }, {
      no:3,name:"visible_ranges",kind:"message",T:sae,repeated:!0
    }, {
      no:4,name:"editor_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new DXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new DXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new DXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(DXi, e, t)
  }
}, M2h=class BXi extends ie{
  constructor(e){
    super(), this.clipboardContents="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppCopyEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"clipboard_contents",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new BXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new BXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new BXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(BXi, e, t)
  }
}, R4c=class RXi extends ie{
  constructor(e){
    super(), this.title="", this.id="", this.arguments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppQuickActionCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:9
    }, {
      no:3,name:"arguments",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new RXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new RXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new RXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(RXi, e, t)
  }
}, O8n=class PXi extends ie{
  constructor(e){
    super(), this.title="", this.edits=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppQuickAction"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"edits",kind:"message",T:F2h,repeated:!0
    }, {
      no:3,name:"is_preferred",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"command",kind:"message",T:R4c
    }
    ])
  }
  static fromBinary(e, t){
    return new PXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new PXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new PXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(PXi, e, t)
  }
}, F2h=class LXi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppQuickAction.Edit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:sae
    }
    ])
  }
  static fromBinary(e, t){
    return new LXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new LXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new LXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(LXi, e, t)
  }
}, O2h=class NXi extends ie{
  constructor(e){
    super(), this.added=[], this.removed=[], this.actions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppChangeQuickActionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"added",kind:"message",T:O8n,repeated:!0
    }, {
      no:3,name:"removed",kind:"message",T:O8n,repeated:!0
    }, {
      no:4,name:"actions",kind:"message",T:O8n,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new NXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new NXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new NXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(NXi, e, t)
  }
}, U2h=class MXi extends ie{
  constructor(e){
    super(), this.actionIdentifier={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppQuickActionFireEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"quick_action_command",kind:"message",T:R4c,oneof:"action_identifier"
    }, {
      no:3,name:"quick_action_event",kind:"message",T:O8n,oneof:"action_identifier"
    }
    ])
  }
  static fromBinary(e, t){
    return new MXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MXi, e, t)
  }
}, $2h=class FXi extends ie{
  constructor(e){
    super(), this.requestId="", this.eventType={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"request_id",kind:"scalar",T:9
    }, {
      no:20,name:"prompt_bar_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"submit_prompt",kind:"message",T:q2h,oneof:"event_type"
    }, {
      no:4,name:"end_of_generation",kind:"message",T:H2h,oneof:"event_type"
    }, {
      no:5,name:"interrupt_generation",kind:"message",T:J2h,oneof:"event_type"
    }, {
      no:6,name:"accept_all",kind:"message",T:G2h,oneof:"event_type"
    }, {
      no:7,name:"reject_all",kind:"message",T:W2h,oneof:"event_type"
    }, {
      no:8,name:"reject_partial_diff",kind:"message",T:j2h,oneof:"event_type"
    }, {
      no:9,name:"accept_partial_diff",kind:"message",T:Q2h,oneof:"event_type"
    }, {
      no:10,name:"after_reject",kind:"message",T:z2h,oneof:"event_type"
    }
    ])
  }
  static fromBinary(e, t){
    return new FXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new FXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new FXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(FXi, e, t)
  }
}, q2h=class OXi extends ie{
  constructor(e){
    super(), this.originalText="", this.prompt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.SubmitPrompt"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"original_range",kind:"message",T:sae
    }, {
      no:2,name:"original_text",kind:"scalar",T:9
    }, {
      no:3,name:"prompt",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new OXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new OXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new OXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(OXi, e, t)
  }
}, H2h=class UXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.EndOfGeneration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new UXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new UXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new UXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(UXi, e, t)
  }
}, J2h=class $Xi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.InterruptGeneration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new $Xi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $Xi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $Xi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($Xi, e, t)
  }
}, G2h=class qXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.AcceptDiffs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new qXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qXi, e, t)
  }
}, W2h=class HXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.RejectDiffs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"actor_request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"silent",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new HXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HXi, e, t)
  }
}, Q2h=class JXi extends ie{
  constructor(e){
    super(), this.greenLines=[], this.redLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.AcceptPartialDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"green_range",kind:"message",T:sae
    }, {
      no:2,name:"green_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"red_lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new JXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JXi, e, t)
  }
}, j2h=class GXi extends ie{
  constructor(e){
    super(), this.greenLines=[], this.redLines=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.RejectPartialDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"green_range",kind:"message",T:sae
    }, {
      no:2,name:"green_lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"red_lines",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new GXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GXi, e, t)
  }
}, z2h=class WXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CmdKEvent.AfterReject"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new WXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WXi, e, t)
  }
}, V2h=class QXi extends ie{
  constructor(e){
    super(), this.requestId="", this.eventType={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"submit_prompt",kind:"message",T:K2h,oneof:"event_type"
    }, {
      no:3,name:"end_of_any_generation",kind:"message",T:Y2h,oneof:"event_type"
    }, {
      no:4,name:"end_of_uninterrupted_generation",kind:"message",T:Z2h,oneof:"event_type"
    }
    ])
  }
  static fromBinary(e, t){
    return new QXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QXi, e, t)
  }
}, K2h=class jXi extends ie{
  constructor(e){
    super(), this.prompt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatEvent.SubmitPrompt"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"prompt",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jXi, e, t)
  }
}, Y2h=class zXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatEvent.EndOfAnyGeneration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new zXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zXi, e, t)
  }
}, Z2h=class VXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChatEvent.EndOfUninterruptedGeneration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new VXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VXi, e, t)
  }
}, X2h=class KXi extends ie{
  constructor(e){
    super(), this.requestId="", this.eventType={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:3,name:"lint_generated",kind:"message",T:tFh,oneof:"event_type"
    }, {
      no:4,name:"lint_dismissed",kind:"message",T:nFh,oneof:"event_type"
    }, {
      no:5,name:"user_feedback",kind:"message",T:iFh,oneof:"event_type"
    }, {
      no:6,name:"viewed_report",kind:"message",T:rFh,oneof:"event_type"
    }, {
      no:7,name:"unviewed_report",kind:"message",T:sFh,oneof:"event_type"
    }, {
      no:8,name:"started",kind:"message",T:eFh,oneof:"event_type"
    }, {
      no:9,name:"not_shown_because_heuristic",kind:"message",T:oFh,oneof:"event_type"
    }
    ])
  }
  static fromBinary(e, t){
    return new KXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KXi, e, t)
  }
}, eFh=class YXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.Started"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new YXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YXi, e, t)
  }
}, tFh=class ZXi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.LintGenerated"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report",kind:"message",T:ovt
    }
    ])
  }
  static fromBinary(e, t){
    return new ZXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZXi, e, t)
  }
}, nFh=class XXi extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.LintDismissed"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new XXi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XXi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XXi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XXi, e, t)
  }
}, iFh=class eer extends ie{
  constructor(e){
    super(), this.bugReportId="", this.feedback="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.UserFeedback"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }, {
      no:2,name:"feedback",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new eer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eer, e, t)
  }
}, rFh=class ter extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.ViewedReport"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ter().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ter().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ter().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ter, e, t)
  }
}, sFh=class ner extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.UnviewedReport"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ner().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ner().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ner().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ner, e, t)
  }
}, oFh=class ier extends ie{
  constructor(e){
    super(), this.heuristic=U8n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"heuristic",kind:"enum",T:v.getEnumType(U8n)
    }
    ])
  }
  static fromBinary(e, t){
    return new ier().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ier().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ier().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ier, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.LINT_OVERLAP=1]="LINT_OVERLAP", n[n.LINES_MISMATCH=2]="LINES_MISMATCH"
})(U8n||(U8n={
  
})), v.util.setEnumType(U8n, "aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [{
  no:0, name:"HEURISTIC_UNSPECIFIED"
}, {
  no:1, name:"HEURISTIC_LINT_OVERLAP"
}, {
  no:2, name:"HEURISTIC_LINES_MISMATCH"
}
]), aFh=class rer extends ie{
  constructor(e){
    super(), this.requestId="", this.eventType={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }, {
      no:2,name:"started",kind:"message",T:cFh,oneof:"event_type"
    }, {
      no:3,name:"reports_generated",kind:"message",T:lFh,oneof:"event_type"
    }, {
      no:4,name:"pressed_fix_in_composer",kind:"message",T:uFh,oneof:"event_type"
    }, {
      no:5,name:"pressed_open_in_editor",kind:"message",T:hFh,oneof:"event_type"
    }, {
      no:6,name:"viewed_report",kind:"message",T:mFh,oneof:"event_type"
    }, {
      no:7,name:"user_feedback",kind:"message",T:gFh,oneof:"event_type"
    }, {
      no:8,name:"pressed_add_to_chat",kind:"message",T:dFh,oneof:"event_type"
    }, {
      no:9,name:"background_interval_started",kind:"message",T:fFh,oneof:"event_type"
    }, {
      no:10,name:"background_interval_ended",kind:"message",T:bFh,oneof:"event_type"
    }, {
      no:11,name:"background_interval_interrupted",kind:"message",T:vFh,oneof:"event_type"
    }, {
      no:12,name:"background_interval_errored",kind:"message",T:AFh,oneof:"event_type"
    }
    ])
  }
  static fromBinary(e, t){
    return new rer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rer, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DISABLED=1]="DISABLED", n[n.TOO_RECENT=2]="TOO_RECENT", n[n.UNVIEWED_BUG_REPORTS=3]="UNVIEWED_BUG_REPORTS", n[n.NOT_IN_GIT_REPO=4]="NOT_IN_GIT_REPO", n[n.DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH=5]="DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH", n[n.NO_GIT_USER=6]="NO_GIT_USER", n[n.NO_LAST_COMMIT=7]="NO_LAST_COMMIT", n[n.LAST_COMMIT_NOT_MADE_BY_USER=8]="LAST_COMMIT_NOT_MADE_BY_USER", n[n.LAST_COMMIT_TOO_OLD=9]="LAST_COMMIT_TOO_OLD", n[n.DIFF_TOO_LONG=10]="DIFF_TOO_LONG", n[n.DIFF_TOO_SHORT=11]="DIFF_TOO_SHORT", n[n.TELEMETRY_UNHEALTHY=12]="TELEMETRY_UNHEALTHY"
})($8n||($8n={
  
})), v.util.setEnumType($8n, "aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [{
  no:0, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED"
}, {
  no:1, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED"
}, {
  no:2, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT"
}, {
  no:3, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS"
}, {
  no:4, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO"
}, {
  no:5, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"
}, {
  no:6, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER"
}, {
  no:7, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT"
}, {
  no:8, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER"
}, {
  no:9, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD"
}, {
  no:10, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG"
}, {
  no:11, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT"
}, {
  no:12, name:"BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY"
}
]), cFh=class ser extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.Started"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ser().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ser().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ser().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ser, e, t)
  }
}, lFh=class oer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.ReportsGenerated"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_reports",kind:"message",T:ZFc
    }
    ])
  }
  static fromBinary(e, t){
    return new oer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oer, e, t)
  }
}, uFh=class aer extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.PressedFixInComposer"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new aer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aer, e, t)
  }
}, dFh=class cer extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.PressedAddToChat"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new cer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cer, e, t)
  }
}, hFh=class ler extends ie{
  constructor(e){
    super(), this.bugReportId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.PressedOpenInEditor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_location",kind:"message",T:YFc
    }, {
      no:2,name:"bug_report_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ler().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ler().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ler().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ler, e, t)
  }
}, mFh=class uer extends ie{
  constructor(e){
    super(), this.secondsViewed=0, this.reportViews=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.ViewedReport"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"seconds_viewed",kind:"scalar",T:5
    }, {
      no:2,name:"report_views",kind:"message",T:pFh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uer, e, t)
  }
}, pFh=class der extends ie{
  constructor(e){
    super(), this.bugReportId="", this.viewPercentage=0, this.textPercentage=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.ViewedReport.ReportView"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }, {
      no:2,name:"view_percentage",kind:"scalar",T:1
    }, {
      no:3,name:"text_percentage",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new der().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new der().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new der().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(der, e, t)
  }
}, gFh=class her extends ie{
  constructor(e){
    super(), this.bugReportId="", this.feedback="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.UserFeedback"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_report_id",kind:"scalar",T:9
    }, {
      no:2,name:"feedback",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new her().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new her().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new her().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(her, e, t)
  }
}, fFh=class mer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.BackgroundIntervalStarted"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new mer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mer, e, t)
  }
}, bFh=class per extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.BackgroundIntervalEnded"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new per().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new per().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new per().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(per, e, t)
  }
}, vFh=class ger extends ie{
  constructor(e){
    super(), this.reason=$8n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"enum",T:v.getEnumType($8n)
    }
    ])
  }
  static fromBinary(e, t){
    return new ger().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ger().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ger().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ger, e, t)
  }
}, AFh=class fer extends ie{
  constructor(e){
    super(), this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotEvent.BackgroundIntervalErrored"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new fer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fer, e, t)
  }
}, yFh=class ber extends ie{
  constructor(e){
    super(), this.requestType=z9e.UNSPECIFIED, this.requestId="", this.source=_z.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AiRequestEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_type",kind:"enum",T:v.getEnumType(z9e)
    }, {
      no:2,name:"request_id",kind:"scalar",T:9
    }, {
      no:3,name:"source",kind:"enum",T:v.getEnumType(_z)
    }
    ])
  }
  static fromBinary(e, t){
    return new ber().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ber().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ber().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ber, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.START=1]="START", n[n.END=2]="END"
})(z9e||(z9e={
  
})), v.util.setEnumType(z9e, "aiserver.v1.AiRequestEvent.RequestType", [{
  no:0, name:"REQUEST_TYPE_UNSPECIFIED"
}, {
  no:1, name:"REQUEST_TYPE_START"
}, {
  no:2, name:"REQUEST_TYPE_END"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CHAT=1]="CHAT", n[n.CMDK=2]="CMDK", n[n.APPLY=3]="APPLY", n[n.COMPOSER=4]="COMPOSER", n[n.TASK=5]="TASK", n[n.CODE_INTERPRETER=6]="CODE_INTERPRETER", n[n.INTERPRETER_EXECUTION=7]="INTERPRETER_EXECUTION", n[n.BUGBOT=8]="BUGBOT"
})(_z||(_z={
  
})), v.util.setEnumType(_z, "aiserver.v1.AiRequestEvent.Source", [{
  no:0, name:"SOURCE_UNSPECIFIED"
}, {
  no:1, name:"SOURCE_CHAT"
}, {
  no:2, name:"SOURCE_CMDK"
}, {
  no:3, name:"SOURCE_APPLY"
}, {
  no:4, name:"SOURCE_COMPOSER"
}, {
  no:5, name:"SOURCE_TASK"
}, {
  no:6, name:"SOURCE_CODE_INTERPRETER"
}, {
  no:7, name:"SOURCE_INTERPRETER_EXECUTION"
}, {
  no:8, name:"SOURCE_BUGBOT"
}
]), wFh=class ver extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelOpenedEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"maybe_defined_point_in_time_model",kind:"message",T:j6o
    }
    ])
  }
  static fromBinary(e, t){
    return new ver().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ver().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ver().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ver, e, t)
  }
}, _Fh=class Aer extends ie{
  constructor(e){
    super(), this.files=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundFilesEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"files",kind:"message",T:CFh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aer, e, t)
  }
}, CFh=class yer extends ie{
  constructor(e){
    super(), this.relativeWorkspacePath="", this.contents="", this.hash="", this.fullPath="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundFilesEvent.BackgroundFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_workspace_path",kind:"scalar",T:9
    }, {
      no:2,name:"contents",kind:"scalar",T:9
    }, {
      no:3,name:"hash",kind:"scalar",T:9
    }, {
      no:4,name:"full_path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new yer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yer, e, t)
  }
}, SFh=class wer extends ie{
  constructor(e){
    super(), this.visibleRanges=[], this.editorId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ScrollEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"visible_ranges",kind:"message",T:sae,repeated:!0
    }, {
      no:3,name:"editor_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new wer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wer, e, t)
  }
}, kFh=class _er extends ie{
  constructor(e){
    super(), this.editorId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EditorCloseEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"editor_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _er().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _er().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _er().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_er, e, t)
  }
}, EFh=class Cer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TabCloseEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:j6o
    }
    ])
  }
  static fromBinary(e, t){
    return new Cer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cer, e, t)
  }
}, xFh=class Ser extends ie{
  constructor(e){
    super(), this.fullUri="", this.modelId="", this.uriScheme="", this.isTooLargeForSyncing=!1, this.isTooLargeForTokenization=!1, this.isTooLargeForHeapOperation=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelAddedEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:j6o
    }, {
      no:2,name:"full_uri",kind:"scalar",T:9
    }, {
      no:3,name:"model_id",kind:"scalar",T:9
    }, {
      no:4,name:"uri_scheme",kind:"scalar",T:9
    }, {
      no:5,name:"is_too_large_for_syncing",kind:"scalar",T:8
    }, {
      no:6,name:"is_too_large_for_tokenization",kind:"scalar",T:8
    }, {
      no:7,name:"is_too_large_for_heap_operation",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ser().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ser().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ser().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ser, e, t)
  }
}, TFh=class ker extends ie{
  constructor(e){
    super(), this.item={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AnythingQuickAccessItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"resource",kind:"message",T:IFh,oneof:"item"
    }, {
      no:2,name:"separator",kind:"scalar",T:9,oneof:"item"
    }, {
      no:3,name:"section",kind:"scalar",T:9,oneof:"item"
    }
    ])
  }
  static fromBinary(e, t){
    return new ker().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ker().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ker().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ker, e, t)
  }
}, IFh=class Eer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AnythingQuickAccessItem.Resource"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model",kind:"message",T:kF,opt:!0
    }, {
      no:2,name:"range",kind:"message",T:sae,opt:!0
    }, {
      no:3,name:"uri",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Eer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eer, e, t)
  }
}, DFh=class xer extends ie{
  constructor(e){
    super(), this.query="", this.items=[], this.selectedIndices=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AnythingQuickAccessSelectionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"items",kind:"message",T:TFh,repeated:!0
    }, {
      no:3,name:"selected_indices",kind:"scalar",T:5,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xer, e, t)
  }
}, BFh=class Ter extends ie{
  constructor(e){
    super(), this.suggestions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSuggestionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestions",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"editor_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"point_in_time_model",kind:"message",T:kF
    }
    ])
  }
  static fromBinary(e, t){
    return new Ter().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ter().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ter().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ter, e, t)
  }
}, z6o=class Ier extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, this.performanceNowTimestamp=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppSessionEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"accept_event",kind:"message",T:w2h,oneof:"event"
    }, {
      no:3,name:"reject_event",kind:"message",T:k2h,oneof:"event"
    }, {
      no:4,name:"manual_trigger_event",kind:"message",T:B2h,oneof:"event"
    }, {
      no:6,name:"stopped_tracking_model_event",kind:"message",T:R2h,oneof:"event"
    }, {
      no:7,name:"suggest_event",kind:"message",T:_2h,oneof:"event"
    }, {
      no:8,name:"linter_error_event",kind:"message",T:P2h,oneof:"event"
    }, {
      no:9,name:"debounced_cursor_movement_event",kind:"message",T:L2h,oneof:"event"
    }, {
      no:10,name:"editor_changed_event",kind:"message",T:N2h,oneof:"event"
    }, {
      no:11,name:"copy_event",kind:"message",T:M2h,oneof:"event"
    }, {
      no:13,name:"quick_action_event",kind:"message",T:O2h,oneof:"event"
    }, {
      no:14,name:"quick_action_fire_event",kind:"message",T:U2h,oneof:"event"
    }, {
      no:15,name:"model_opened_event",kind:"message",T:wFh,oneof:"event"
    }, {
      no:17,name:"cmd_k_event",kind:"message",T:$2h,oneof:"event"
    }, {
      no:18,name:"chat_event",kind:"message",T:V2h,oneof:"event"
    }, {
      no:19,name:"ai_event",kind:"message",T:yFh,oneof:"event"
    }, {
      no:21,name:"scroll_event",kind:"message",T:SFh,oneof:"event"
    }, {
      no:22,name:"editor_close_event",kind:"message",T:kFh,oneof:"event"
    }, {
      no:23,name:"tab_close_event",kind:"message",T:EFh,oneof:"event"
    }, {
      no:33,name:"model_added_event",kind:"message",T:xFh,oneof:"event"
    }, {
      no:26,name:"partial_accept_event",kind:"message",T:x2h,oneof:"event"
    }, {
      no:27,name:"accept_cursor_prediction_event",kind:"message",T:I2h,oneof:"event"
    }, {
      no:28,name:"reject_cursor_prediction_event",kind:"message",T:D2h,oneof:"event"
    }, {
      no:29,name:"suggest_cursor_prediction_event",kind:"message",T:T2h,oneof:"event"
    }, {
      no:30,name:"cpp_trigger_event",kind:"message",T:C2h,oneof:"event"
    }, {
      no:31,name:"finished_cpp_generation_event",kind:"message",T:S2h,oneof:"event"
    }, {
      no:32,name:"bug_bot_event",kind:"message",T:aFh,oneof:"event"
    }, {
      no:34,name:"bug_bot_linter_event",kind:"message",T:X2h,oneof:"event"
    }, {
      no:35,name:"anything_quick_access_selection_event",kind:"message",T:DFh,oneof:"event"
    }, {
      no:36,name:"lsp_suggestion_event",kind:"message",T:BFh,oneof:"event"
    }, {
      no:37,name:"ntp_event",kind:"message",T:VFh,oneof:"event"
    }, {
      no:38,name:"repo_event",kind:"message",T:KFh,oneof:"event"
    }, {
      no:39,name:"git_event",kind:"message",T:YFh,oneof:"event"
    }, {
      no:40,name:"tool_call_event",kind:"message",T:t4h,oneof:"event"
    }, {
      no:46,name:"before_ai_edit_event",kind:"message",T:RFh,oneof:"event"
    }, {
      no:47,name:"search_event",kind:"message",T:r4h,oneof:"event"
    }, {
      no:48,name:"terminal_event",kind:"message",T:GFh,oneof:"event"
    }, {
      no:49,name:"worktree_event",kind:"message",T:ZFh,oneof:"event"
    }, {
      no:50,name:"review_changes_opened_event",kind:"message",T:M4c,oneof:"event"
    }, {
      no:16,name:"background_files_event",kind:"message",T:_Fh,oneof:"event"
    }, {
      no:5,name:"performance_now_timestamp",kind:"scalar",T:1
    }, {
      no:25,name:"performance_time_origin",kind:"scalar",T:1,opt:!0
    }, {
      no:41,name:"global_index",kind:"scalar",T:3,opt:!0
    }, {
      no:42,name:"performance_now_flush_time",kind:"scalar",T:1,opt:!0
    }, {
      no:43,name:"event_index",kind:"scalar",T:5,opt:!0
    }, {
      no:44,name:"flush_index",kind:"scalar",T:5,opt:!0
    }, {
      no:45,name:"global_index_v2",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ier().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ier().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ier().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ier, e, t)
  }
}, RFh=class Der extends ie{
  constructor(e){
    super(), this.model={
      case:void 0
    }, this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BeforeAiEditEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF,oneof:"model"
    }, {
      no:5,name:"relative_workspace_path",kind:"scalar",T:9,oneof:"model"
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:3,name:"request_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"tool_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Der().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Der().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Der().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Der, e, t)
  }
}, PFh=class Ber extends ie{
  constructor(e){
    super(), this.changes=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppAppendRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"changes",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new Ber().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ber().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ber().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ber, e, t)
  }
}, LFh=class Rer extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppAppendResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Rer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rer, e, t)
  }
}, q8n=class Per extends ie{
  constructor(e){
    super(), this.sessionId="", this.modelUuid="", this.relativePath="", this.uri="", this.clientVersion="", this.changes=[], this.sessionEvents=[], this.modelChangesMayBeOutOfOrder=!1, this.privacyModeStatus=XKe.UNSPECIFIED, this.events=[], this.timeOrigin=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EditHistoryAppendChangesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"session_id",kind:"scalar",T:9
    }, {
      no:2,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:3,name:"starting_model_value",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"starting_model_version",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"relative_path",kind:"scalar",T:9
    }, {
      no:14,name:"uri",kind:"scalar",T:9
    }, {
      no:6,name:"client_version",kind:"scalar",T:9
    }, {
      no:8,name:"client_commit",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"changes",kind:"message",T:ZKe,repeated:!0
    }, {
      no:9,name:"session_events",kind:"message",T:z6o,repeated:!0
    }, {
      no:11,name:"model_changes_may_be_out_of_order",kind:"scalar",T:8
    }, {
      no:12,name:"privacy_mode_status",kind:"enum",T:v.getEnumType(XKe)
    }, {
      no:7,name:"events",kind:"message",T:UFh,repeated:!0
    }, {
      no:13,name:"time_origin",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new Per().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Per().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Per().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Per, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.PRIVACY_ENABLED=1]="PRIVACY_ENABLED", n[n.IMPLICIT_NO_PRIVACY=2]="IMPLICIT_NO_PRIVACY", n[n.EXPLICIT_NO_PRIVACY=3]="EXPLICIT_NO_PRIVACY"
})(XKe||(XKe={
  
})), v.util.setEnumType(XKe, "aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [{
  no:0, name:"PRIVACY_MODE_STATUS_UNSPECIFIED"
}, {
  no:1, name:"PRIVACY_MODE_STATUS_PRIVACY_ENABLED"
}, {
  no:2, name:"PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY"
}, {
  no:3, name:"PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY"
}
]), NFh=class Ler extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EditHistoryAppendChangesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ler().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ler().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ler().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ler, e, t)
  }
}, P4c=class Ner extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppEditHistoryStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ner().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ner().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ner().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ner, e, t)
  }
}, L4c=class Mer extends ie{
  constructor(e){
    super(), this.on=!1, this.onlyIfExplicit=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppEditHistoryStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"on",kind:"scalar",T:8
    }, {
      no:2,name:"only_if_explicit",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Mer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mer, e, t)
  }
}, MFh=class Fer extends ie{
  constructor(e){
    super(), this.relativePath="", this.startingContents="", this.beforeStartModelChanges=[], this.clientVersion="", this.modelUuid="", this.sessionId="", this.uri="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StartingModel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"relative_path",kind:"scalar",T:9
    }, {
      no:2,name:"starting_contents",kind:"scalar",T:9
    }, {
      no:3,name:"starting_model_version",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"before_start_model_changes",kind:"message",T:ZKe,repeated:!0
    }, {
      no:5,name:"client_version",kind:"scalar",T:9
    }, {
      no:6,name:"client_commit",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:8,name:"session_id",kind:"scalar",T:9
    }, {
      no:9,name:"uri",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Fer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fer, e, t)
  }
}, V6o=class Oer extends ie{
  constructor(e){
    super(), this.changes=[], this.relativePath="", this.modelUuid="", this.startFromChangeIndex=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BlockDiffPatch"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_model_window",kind:"message",T:OFh
    }, {
      no:3,name:"changes",kind:"message",T:FFh,repeated:!0
    }, {
      no:4,name:"relative_path",kind:"scalar",T:9
    }, {
      no:7,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:5,name:"start_from_change_index",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Oer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oer, e, t)
  }
}, FFh=class Uer extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BlockDiffPatch.Change"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:sae
    }
    ])
  }
  static fromBinary(e, t){
    return new Uer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uer, e, t)
  }
}, OFh=class $er extends ie{
  constructor(e){
    super(), this.lines=[], this.startLineNumber=0, this.endLineNumber=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BlockDiffPatch.ModelWindow"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"lines",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"start_line_number",kind:"scalar",T:5
    }, {
      no:3,name:"end_line_number",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new $er().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $er().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $er().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($er, e, t)
  }
}, UFh=class qer extends ie{
  constructor(e){
    super(), this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppHistoryAppendEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_change",kind:"message",T:ZKe,oneof:"event"
    }, {
      no:2,name:"accept_event",kind:"message",T:qFh,oneof:"event"
    }, {
      no:3,name:"reject_event",kind:"message",T:HFh,oneof:"event"
    }, {
      no:4,name:"manual_trigger_event",kind:"message",T:$Fh,oneof:"event"
    }, {
      no:10,name:"final_model_hash",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qer, e, t)
  }
}, $Fh=class Her extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppManualTriggerEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"position",kind:"message",T:I9
    }
    ])
  }
  static fromBinary(e, t){
    return new Her().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Her().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Her().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Her, e, t)
  }
}, qFh=class Jer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppAcceptEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:N4c
    }
    ])
  }
  static fromBinary(e, t){
    return new Jer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jer, e, t)
  }
}, HFh=class Ger extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppRejectEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cpp_suggestion",kind:"message",T:N4c
    }
    ])
  }
  static fromBinary(e, t){
    return new Ger().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ger().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ger().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ger, e, t)
  }
}, N4c=class Wer extends ie{
  constructor(e){
    super(), this.suggestionText="", this.seen=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppSuggestion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"suggestion_text",kind:"scalar",T:9
    }, {
      no:2,name:"range",kind:"message",T:sae
    }, {
      no:5,name:"seen",kind:"scalar",T:8
    }, {
      no:6,name:"editor_selection_before_peek",kind:"message",T:X1h
    }, {
      no:7,name:"binding_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wer, e, t)
  }
}, xgA=class Qer extends ie{
  constructor(e){
    super(), this.changes=[], this.modelUuid="", this.numCorrectChanges=0, this.numUnvalidatedChanges=0, this.numIncorrectChanges=0, this.beforeStartModelChanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ModelWithHistory"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"changes",kind:"message",T:ZKe,repeated:!0
    }, {
      no:2,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:3,name:"starting_model",kind:"message",T:MFh
    }, {
      no:4,name:"num_correct_changes",kind:"scalar",T:5
    }, {
      no:5,name:"num_unvalidated_changes",kind:"scalar",T:5
    }, {
      no:6,name:"num_incorrect_changes",kind:"scalar",T:5
    }, {
      no:7,name:"before_start_model_changes",kind:"message",T:ZKe,repeated:!0
    }, {
      no:8,name:"starting_performance_now_timestamp",kind:"scalar",T:1,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qer, e, t)
  }
}, TgA=class jer extends ie{
  constructor(e){
    super(), this.timestamp=0, this.v={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppTimelineEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"timestamp",kind:"scalar",T:1
    }, {
      no:2,name:"event",kind:"message",T:z6o,oneof:"v"
    }, {
      no:3,name:"change",kind:"message",T:JFh,oneof:"v"
    }
    ])
  }
  static fromBinary(e, t){
    return new jer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jer, e, t)
  }
}, JFh=class zer extends ie{
  constructor(e){
    super(), this.modelUuid="", this.changeIndex=0, this.status=H8n.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CppTimelineEvent.Change"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"change_index",kind:"scalar",T:5
    }, {
      no:3,name:"change",kind:"message",T:ZKe
    }, {
      no:4,name:"status",kind:"enum",T:v.getEnumType(H8n)
    }
    ])
  }
  static fromBinary(e, t){
    return new zer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zer, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CORRECT=1]="CORRECT", n[n.UNVALIDATED=2]="UNVALIDATED", n[n.INCORRECT=3]="INCORRECT"
})(H8n||(H8n={
  
})), v.util.setEnumType(H8n, "aiserver.v1.CppTimelineEvent.Change.Status", [{
  no:0, name:"STATUS_UNSPECIFIED"
}, {
  no:1, name:"STATUS_CORRECT"
}, {
  no:2, name:"STATUS_UNVALIDATED"
}, {
  no:3, name:"STATUS_INCORRECT"
}
]), GFh=class Ver extends ie{
  constructor(e){
    super(), this.uri="", this.event={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TerminalEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"create",kind:"message",T:WFh,oneof:"event"
    }, {
      no:3,name:"exit",kind:"message",T:QFh,oneof:"event"
    }, {
      no:4,name:"command_start",kind:"message",T:jFh,oneof:"event"
    }, {
      no:5,name:"command_finish",kind:"message",T:zFh,oneof:"event"
    }
    ])
  }
  static fromBinary(e, t){
    return new Ver().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ver().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ver().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ver, e, t)
  }
}, WFh=class Ker extends ie{
  constructor(e){
    super(), this.isRemote=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TerminalEvent.Create"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_remote",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ker().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ker().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ker().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ker, e, t)
  }
}, QFh=class Yer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TerminalEvent.Exit"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"exit_code",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yer, e, t)
  }
}, jFh=class Zer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TerminalEvent.CommandStart"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"cwd",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zer, e, t)
  }
}, zFh=class Xer extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TerminalEvent.CommandFinish"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"point_in_time_model",kind:"message",T:kF
    }, {
      no:2,name:"exit_code",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xer().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xer().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xer().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xer, e, t)
  }
}, VFh=class etr extends ie{
  constructor(e){
    super(), this.originateTimestamp=0, this.receiveTimestamp=0, this.transmitTimestamp=0, this.destinationTimestamp=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NtpEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"originate_timestamp",kind:"scalar",T:1
    }, {
      no:2,name:"receive_timestamp",kind:"scalar",T:1
    }, {
      no:3,name:"transmit_timestamp",kind:"scalar",T:1
    }, {
      no:4,name:"destination_timestamp",kind:"scalar",T:1
    }
    ])
  }
  static fromBinary(e, t){
    return new etr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new etr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new etr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(etr, e, t)
  }
}, KFh=class ttr extends ie{
  constructor(e){
    super(), this.repoOwner="", this.repoName="", this.eventType=Wte.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RepoEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repo_owner",kind:"scalar",T:9
    }, {
      no:2,name:"repo_name",kind:"scalar",T:9
    }, {
      no:3,name:"event_type",kind:"enum",T:v.getEnumType(Wte)
    }
    ])
  }
  static fromBinary(e, t){
    return new ttr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ttr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ttr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ttr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SYNCED=1]="SYNCED", n[n.LOADING=2]="LOADING", n[n.INDEXING_SETUP=3]="INDEXING_SETUP", n[n.INDEXING_INIT_FROM_SIMILAR_CODEBASE=4]="INDEXING_INIT_FROM_SIMILAR_CODEBASE", n[n.PAUSED=5]="PAUSED", n[n.INDEXING=6]="INDEXING", n[n.ERROR=7]="ERROR", n[n.NOT_AUTO_INDEXING=8]="NOT_AUTO_INDEXING", n[n.NOT_INDEXED=9]="NOT_INDEXED"
})(Wte||(Wte={
  
})), v.util.setEnumType(Wte, "aiserver.v1.RepoEvent.Type", [{
  no:0, name:"TYPE_UNSPECIFIED"
}, {
  no:1, name:"TYPE_SYNCED"
}, {
  no:2, name:"TYPE_LOADING"
}, {
  no:3, name:"TYPE_INDEXING_SETUP"
}, {
  no:4, name:"TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE"
}, {
  no:5, name:"TYPE_PAUSED"
}, {
  no:6, name:"TYPE_INDEXING"
}, {
  no:7, name:"TYPE_ERROR"
}, {
  no:8, name:"TYPE_NOT_AUTO_INDEXING"
}, {
  no:9, name:"TYPE_NOT_INDEXED"
}
]), YFh=class ntr extends ie{
  constructor(e){
    super(), this.operationType=J8n.UNSPECIFIED, this.repositoryPath="", this.operationSuccess=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GitEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"operation_type",kind:"enum",T:v.getEnumType(J8n)
    }, {
      no:2,name:"repository_path",kind:"scalar",T:9
    }, {
      no:3,name:"operation_success",kind:"scalar",T:8
    }, {
      no:4,name:"branch_name",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"error_message",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"is_default_branch",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"default_branch_name",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"commit_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"previous_commit_hash",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"remote_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ntr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ntr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ntr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ntr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.COMMIT=1]="COMMIT", n[n.CHECKOUT=2]="CHECKOUT", n[n.PULL=3]="PULL", n[n.FETCH=4]="FETCH", n[n.MERGE=5]="MERGE", n[n.REBASE=6]="REBASE", n[n.STASH=7]="STASH", n[n.BRANCH=8]="BRANCH", n[n.TAG=9]="TAG"
})(J8n||(J8n={
  
})), v.util.setEnumType(J8n, "aiserver.v1.GitEvent.OperationType", [{
  no:0, name:"OPERATION_TYPE_UNSPECIFIED"
}, {
  no:1, name:"OPERATION_TYPE_COMMIT"
}, {
  no:2, name:"OPERATION_TYPE_CHECKOUT"
}, {
  no:3, name:"OPERATION_TYPE_PULL"
}, {
  no:4, name:"OPERATION_TYPE_FETCH"
}, {
  no:5, name:"OPERATION_TYPE_MERGE"
}, {
  no:6, name:"OPERATION_TYPE_REBASE"
}, {
  no:7, name:"OPERATION_TYPE_STASH"
}, {
  no:8, name:"OPERATION_TYPE_BRANCH"
}, {
  no:9, name:"OPERATION_TYPE_TAG"
}
]), ZFh=class itr extends ie{
  constructor(e){
    super(), this.eventType=dke.UNSPECIFIED, this.allWorktreePaths=[], this.worktreeComposerMappings=[], this.backgroundAgentComposerMappings=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WorktreeEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"event_type",kind:"enum",T:v.getEnumType(dke)
    }, {
      no:2,name:"model_name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"best_of_n_group_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"all_worktree_paths",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"applied_worktree_path",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"worktree_composer_mappings",kind:"message",T:XFh,repeated:!0
    }, {
      no:7,name:"background_agent_composer_mappings",kind:"message",T:e4h,repeated:!0
    }, {
      no:8,name:"applied_composer_id",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"viewed_composer_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new itr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new itr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new itr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(itr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.APPLY_TO_MAIN=1]="APPLY_TO_MAIN", n[n.UNDO_APPLY=2]="UNDO_APPLY", n[n.VIEW_SUBCOMPOSER=3]="VIEW_SUBCOMPOSER"
})(dke||(dke={
  
})), v.util.setEnumType(dke, "aiserver.v1.WorktreeEvent.EventType", [{
  no:0, name:"EVENT_TYPE_UNSPECIFIED"
}, {
  no:1, name:"EVENT_TYPE_APPLY_TO_MAIN"
}, {
  no:2, name:"EVENT_TYPE_UNDO_APPLY"
}, {
  no:3, name:"EVENT_TYPE_VIEW_SUBCOMPOSER"
}
]), XFh=class rtr extends ie{
  constructor(e){
    super(), this.worktreePath="", this.composerId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WorktreeEvent.WorktreeComposerMapping"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"worktree_path",kind:"scalar",T:9
    }, {
      no:2,name:"composer_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rtr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rtr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rtr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rtr, e, t)
  }
}, e4h=class str extends ie{
  constructor(e){
    super(), this.bcId="", this.composerId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bc_id",kind:"scalar",T:9
    }, {
      no:2,name:"composer_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new str().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new str().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new str().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(str, e, t)
  }
}, M4c=class otr extends ie{
  constructor(e){
    super(), this.composerId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReviewChangesOpenedEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"composer_id",kind:"scalar",T:9
    }, {
      no:2,name:"best_of_n_group_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new otr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new otr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new otr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(otr, e, t)
  }
}, t4h=class atr extends ie{
  constructor(e){
    super(), this.toolCallId="", this.requestId="", this.toolName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ToolCallEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:2,name:"request_id",kind:"scalar",T:9
    }, {
      no:3,name:"tool_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new atr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new atr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new atr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(atr, e, t)
  }
}, n4h=class ctr extends ie{
  constructor(e){
    super(), this.lineNumber=0, this.column=0, this.matchText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SearchMatch"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line_number",kind:"scalar",T:5
    }, {
      no:2,name:"column",kind:"scalar",T:5
    }, {
      no:3,name:"match_text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ctr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ctr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ctr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ctr, e, t)
  }
}, i4h=class ltr extends ie{
  constructor(e){
    super(), this.filePath="", this.matchCount=0, this.matches=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SearchResultFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"file_path",kind:"scalar",T:9
    }, {
      no:2,name:"match_count",kind:"scalar",T:5
    }, {
      no:3,name:"matches",kind:"message",T:n4h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ltr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ltr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ltr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ltr, e, t)
  }
}, r4h=class utr extends ie{
  constructor(e){
    super(), this.query="", this.resultCount=0, this.fileCount=0, this.isRegex=!1, this.isCaseSensitive=!1, this.isWholeWord=!1, this.durationMs=0, this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SearchEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"query",kind:"scalar",T:9
    }, {
      no:2,name:"result_count",kind:"scalar",T:5
    }, {
      no:3,name:"file_count",kind:"scalar",T:5
    }, {
      no:4,name:"is_regex",kind:"scalar",T:8
    }, {
      no:5,name:"is_case_sensitive",kind:"scalar",T:8
    }, {
      no:6,name:"is_whole_word",kind:"scalar",T:8
    }, {
      no:7,name:"files_to_include",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"files_to_exclude",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"duration_ms",kind:"scalar",T:5
    }, {
      no:10,name:"results",kind:"message",T:i4h,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new utr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new utr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new utr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(utr, e, t)
  }
}
}
}), eYe, G8n, W8n, s4h, Q8n, j8n, K6o, o4h, a4h, c4h, F4c, l4h, O4c, u4h, Y6o, U4c, d4h, h4h, m4h, p4h, g4h, f4h, b4h, $4c, v4h, A4h, y4h, w4h, _4h, C4h, l9t, XI, S4h, k4h, E3, E4h, IgA, x4h, T4h, I4h, D4h, B4h, R4h, P4h, DgA, L4h, N4h, M4h, F4h, O4h, U4h, $4h, q4h, H4h, J6=