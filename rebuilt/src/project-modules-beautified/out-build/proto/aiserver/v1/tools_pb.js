"use strict";

// Module: out-build/proto/aiserver/v1/tools_pb.js
// Offset: 2851282 (bundle byte offset)
// Size: 204195 bytes
Ka();
qp();
a5t();
Mbt();
P5n();
u5t();
HRc();
jY();
P9e();
Lbt();
qbt();
h9n();
_Ih();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.READ_SEMSEARCH_FILES = 1] = "READ_SEMSEARCH_FILES";
  n[n.RIPGREP_SEARCH = 3] = "RIPGREP_SEARCH";
  n[n.READ_FILE = 5] = "READ_FILE";
  n[n.LIST_DIR = 6] = "LIST_DIR";
  n[n.EDIT_FILE = 7] = "EDIT_FILE";
  n[n.FILE_SEARCH = 8] = "FILE_SEARCH";
  n[n.SEMANTIC_SEARCH_FULL = 9] = "SEMANTIC_SEARCH_FULL";
  n[n.DELETE_FILE = 11] = "DELETE_FILE";
  n[n.REAPPLY = 12] = "REAPPLY";
  n[n.RUN_TERMINAL_COMMAND_V2 = 15] = "RUN_TERMINAL_COMMAND_V2";
  n[n.FETCH_RULES = 16] = "FETCH_RULES";
  n[n.WEB_SEARCH = 18] = "WEB_SEARCH";
  n[n.MCP = 19] = "MCP";
  n[n.SEARCH_SYMBOLS = 23] = "SEARCH_SYMBOLS";
  n[n.BACKGROUND_COMPOSER_FOLLOWUP = 24] = "BACKGROUND_COMPOSER_FOLLOWUP";
  n[n.KNOWLEDGE_BASE = 25] = "KNOWLEDGE_BASE";
  n[n.FETCH_PULL_REQUEST = 26] = "FETCH_PULL_REQUEST";
  n[n.DEEP_SEARCH = 27] = "DEEP_SEARCH";
  n[n.CREATE_DIAGRAM = 28] = "CREATE_DIAGRAM";
  n[n.FIX_LINTS = 29] = "FIX_LINTS";
  n[n.READ_LINTS = 30] = "READ_LINTS";
  n[n.GO_TO_DEFINITION = 31] = "GO_TO_DEFINITION";
  n[n.TASK = 32] = "TASK";
  n[n.AWAIT_TASK = 33] = "AWAIT_TASK";
  n[n.TODO_READ = 34] = "TODO_READ";
  n[n.TODO_WRITE = 35] = "TODO_WRITE";
  n[n.EDIT_FILE_V2 = 38] = "EDIT_FILE_V2";
  n[n.LIST_DIR_V2 = 39] = "LIST_DIR_V2";
  n[n.READ_FILE_V2 = 40] = "READ_FILE_V2";
  n[n.RIPGREP_RAW_SEARCH = 41] = "RIPGREP_RAW_SEARCH";
  n[n.GLOB_FILE_SEARCH = 42] = "GLOB_FILE_SEARCH";
  n[n.CREATE_PLAN = 43] = "CREATE_PLAN";
  n[n.LIST_MCP_RESOURCES = 44] = "LIST_MCP_RESOURCES";
  n[n.READ_MCP_RESOURCE = 45] = "READ_MCP_RESOURCE";
  n[n.READ_PROJECT = 46] = "READ_PROJECT";
  n[n.UPDATE_PROJECT = 47] = "UPDATE_PROJECT";
  n[n.TASK_V2 = 48] = "TASK_V2";
  n[n.CALL_MCP_TOOL = 49] = "CALL_MCP_TOOL";
  n[n.APPLY_AGENT_DIFF = 50] = "APPLY_AGENT_DIFF";
  n[n.ASK_QUESTION = 51] = "ASK_QUESTION";
  n[n.SWITCH_MODE = 52] = "SWITCH_MODE";
  n[n.GENERATE_IMAGE = 53] = "GENERATE_IMAGE";
  n[n.COMPUTER_USE = 54] = "COMPUTER_USE";
  n[n.WRITE_SHELL_STDIN = 55] = "WRITE_SHELL_STDIN";
  n[n.RECORD_SCREEN = 56] = "RECORD_SCREEN";
  n[n.WEB_FETCH = 57] = "WEB_FETCH";
  n[n.REPORT_BUGFIX_RESULTS = 58] = "REPORT_BUGFIX_RESULTS";
  n[n.AI_ATTRIBUTION = 59] = "AI_ATTRIBUTION";
  n[n.MCP_AUTH = 60] = "MCP_AUTH";
  n[n.REFLECT = 61] = "REFLECT";
  n[n.AWAIT = 62] = "AWAIT";
})(an ||= {});
v.util.setEnumType(an, "aiserver.v1.ClientSideToolV2", [{
  no: 0,
  name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED"
}, {
  no: 1,
  name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES"
}, {
  no: 3,
  name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH"
}, {
  no: 5,
  name: "CLIENT_SIDE_TOOL_V2_READ_FILE"
}, {
  no: 6,
  name: "CLIENT_SIDE_TOOL_V2_LIST_DIR"
}, {
  no: 7,
  name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE"
}, {
  no: 8,
  name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH"
}, {
  no: 9,
  name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL"
}, {
  no: 11,
  name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE"
}, {
  no: 12,
  name: "CLIENT_SIDE_TOOL_V2_REAPPLY"
}, {
  no: 15,
  name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2"
}, {
  no: 16,
  name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES"
}, {
  no: 18,
  name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH"
}, {
  no: 19,
  name: "CLIENT_SIDE_TOOL_V2_MCP"
}, {
  no: 23,
  name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS"
}, {
  no: 24,
  name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP"
}, {
  no: 25,
  name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE"
}, {
  no: 26,
  name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST"
}, {
  no: 27,
  name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH"
}, {
  no: 28,
  name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM"
}, {
  no: 29,
  name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS"
}, {
  no: 30,
  name: "CLIENT_SIDE_TOOL_V2_READ_LINTS"
}, {
  no: 31,
  name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION"
}, {
  no: 32,
  name: "CLIENT_SIDE_TOOL_V2_TASK"
}, {
  no: 33,
  name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK"
}, {
  no: 34,
  name: "CLIENT_SIDE_TOOL_V2_TODO_READ"
}, {
  no: 35,
  name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE"
}, {
  no: 38,
  name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2"
}, {
  no: 39,
  name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2"
}, {
  no: 40,
  name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2"
}, {
  no: 41,
  name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH"
}, {
  no: 42,
  name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH"
}, {
  no: 43,
  name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN"
}, {
  no: 44,
  name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES"
}, {
  no: 45,
  name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE"
}, {
  no: 46,
  name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT"
}, {
  no: 47,
  name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT"
}, {
  no: 48,
  name: "CLIENT_SIDE_TOOL_V2_TASK_V2"
}, {
  no: 49,
  name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL"
}, {
  no: 50,
  name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF"
}, {
  no: 51,
  name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION"
}, {
  no: 52,
  name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE"
}, {
  no: 53,
  name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE"
}, {
  no: 54,
  name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE"
}, {
  no: 55,
  name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN"
}, {
  no: 56,
  name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN"
}, {
  no: 57,
  name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH"
}, {
  no: 58,
  name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS"
}, {
  no: 59,
  name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION"
}, {
  no: 60,
  name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH"
}, {
  no: 61,
  name: "CLIENT_SIDE_TOOL_V2_REFLECT"
}, {
  no: 62,
  name: "CLIENT_SIDE_TOOL_V2_AWAIT"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.BASH = 1] = "BASH";
  n[n.POWERSHELL = 2] = "POWERSHELL";
})(NKe ||= {});
v.util.setEnumType(NKe, "aiserver.v1.ShellType", [{
  no: 0,
  name: "SHELL_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "SHELL_TYPE_BASH"
}, {
  no: 2,
  name: "SHELL_TYPE_POWERSHELL"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SEARCH = 1] = "SEARCH";
  n[n.READ_CHUNK = 2] = "READ_CHUNK";
  n[n.GOTODEF = 3] = "GOTODEF";
  n[n.EDIT = 4] = "EDIT";
  n[n.UNDO_EDIT = 5] = "UNDO_EDIT";
  n[n.END = 6] = "END";
  n[n.NEW_FILE = 7] = "NEW_FILE";
  n[n.ADD_TEST = 8] = "ADD_TEST";
  n[n.RUN_TEST = 9] = "RUN_TEST";
  n[n.DELETE_TEST = 10] = "DELETE_TEST";
  n[n.SAVE_FILE = 11] = "SAVE_FILE";
  n[n.GET_TESTS = 12] = "GET_TESTS";
  n[n.GET_SYMBOLS = 13] = "GET_SYMBOLS";
  n[n.SEMANTIC_SEARCH = 14] = "SEMANTIC_SEARCH";
  n[n.GET_PROJECT_STRUCTURE = 15] = "GET_PROJECT_STRUCTURE";
  n[n.CREATE_RM_FILES = 16] = "CREATE_RM_FILES";
  n[n.RUN_TERMINAL_COMMANDS = 17] = "RUN_TERMINAL_COMMANDS";
  n[n.NEW_EDIT = 18] = "NEW_EDIT";
  n[n.READ_WITH_LINTER = 19] = "READ_WITH_LINTER";
})(MKe ||= {});
v.util.setEnumType(MKe, "aiserver.v1.BuiltinTool", [{
  no: 0,
  name: "BUILTIN_TOOL_UNSPECIFIED"
}, {
  no: 1,
  name: "BUILTIN_TOOL_SEARCH"
}, {
  no: 2,
  name: "BUILTIN_TOOL_READ_CHUNK"
}, {
  no: 3,
  name: "BUILTIN_TOOL_GOTODEF"
}, {
  no: 4,
  name: "BUILTIN_TOOL_EDIT"
}, {
  no: 5,
  name: "BUILTIN_TOOL_UNDO_EDIT"
}, {
  no: 6,
  name: "BUILTIN_TOOL_END"
}, {
  no: 7,
  name: "BUILTIN_TOOL_NEW_FILE"
}, {
  no: 8,
  name: "BUILTIN_TOOL_ADD_TEST"
}, {
  no: 9,
  name: "BUILTIN_TOOL_RUN_TEST"
}, {
  no: 10,
  name: "BUILTIN_TOOL_DELETE_TEST"
}, {
  no: 11,
  name: "BUILTIN_TOOL_SAVE_FILE"
}, {
  no: 12,
  name: "BUILTIN_TOOL_GET_TESTS"
}, {
  no: 13,
  name: "BUILTIN_TOOL_GET_SYMBOLS"
}, {
  no: 14,
  name: "BUILTIN_TOOL_SEMANTIC_SEARCH"
}, {
  no: 15,
  name: "BUILTIN_TOOL_GET_PROJECT_STRUCTURE"
}, {
  no: 16,
  name: "BUILTIN_TOOL_CREATE_RM_FILES"
}, {
  no: 17,
  name: "BUILTIN_TOOL_RUN_TERMINAL_COMMANDS"
}, {
  no: 18,
  name: "BUILTIN_TOOL_NEW_EDIT"
}, {
  no: 19,
  name: "BUILTIN_TOOL_READ_WITH_LINTER"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.EXECUTION_COMPLETED = 1] = "EXECUTION_COMPLETED";
  n[n.EXECUTION_ABORTED = 2] = "EXECUTION_ABORTED";
  n[n.EXECUTION_FAILED = 3] = "EXECUTION_FAILED";
  n[n.ERROR_OCCURRED_CHECKING_REASON = 4] = "ERROR_OCCURRED_CHECKING_REASON";
  n[n.IDLE_TIMEOUT = 5] = "IDLE_TIMEOUT";
})(k3 ||= {});
v.util.setEnumType(k3, "aiserver.v1.RunTerminalCommandEndedReason", [{
  no: 0,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED"
}, {
  no: 1,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED"
}, {
  no: 2,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED"
}, {
  no: 3,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED"
}, {
  no: 4,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON"
}, {
  no: 5,
  name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT"
}]);
p9n = class R5i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReapplyParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new R5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R5i, e, t);
  }
};
m5t = class P5i extends ie {
  constructor(e) {
    super();
    this.agentId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ApplyAgentDiffParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "agent_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new P5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P5i, e, t);
  }
};
d8o = class L5i extends ie {
  constructor(e) {
    super();
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReapplyResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff",
      kind: "message",
      T: FRe
    }, {
      no: 2,
      name: "is_applied",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "apply_failed",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }, {
      no: 5,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new L5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L5i, e, t);
  }
};
g9n = class N5i extends ie {
  constructor(e) {
    super();
    this.ruleNames = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchRulesParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rule_names",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new N5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N5i, e, t);
  }
};
h8o = class M5i extends ie {
  constructor(e) {
    super();
    this.rules = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchRulesResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rules",
      kind: "message",
      T: rke,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new M5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M5i, e, t);
  }
};
mPc = class F5i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReapplyStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new F5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F5i, e, t);
  }
};
CIh = class O5i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.targetDirectories = [];
    this.explanation = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchArguments";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "target_directories",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "explanation",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new O5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O5i, e, t);
  }
};
ske = class U5i extends ie {
  constructor(e) {
    super();
    this.clientVisibleErrorMessage = "";
    this.modelVisibleErrorMessage = "";
    this.errorDetails = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResultError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_visible_error_message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "model_visible_error_message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "edit_file_error_details",
      kind: "message",
      T: pPc,
      oneof: "error_details"
    }, {
      no: 6,
      name: "search_replace_error_details",
      kind: "message",
      T: gPc,
      oneof: "error_details"
    }]);
  }
  static fromBinary(e, t) {
    return new U5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U5i, e, t);
  }
};
pPc = class $5i extends ie {
  constructor(e) {
    super();
    this.numLinesInFileBeforeEdit = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResultError.EditFileError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "num_lines_in_file_before_edit",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new $5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($5i, e, t);
  }
};
gPc = class q5i extends ie {
  constructor(e) {
    super();
    this.numLinesInFileBeforeEdit = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResultError.SearchReplaceError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "num_lines_in_file_before_edit",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new q5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q5i, e, t);
  }
};
nhe = class H5i extends ie {
  constructor(e) {
    super();
    this.tool = an.UNSPECIFIED;
    this.params = {
      case: undefined
    };
    this.toolCallId = "";
    this.name = "";
    this.isStreaming = false;
    this.isLastMessage = false;
    this.internal = false;
    this.rawArgs = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ClientSideToolV2Call";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(an)
    }, {
      no: 2,
      name: "read_semsearch_files_params",
      kind: "message",
      T: _5t,
      oneof: "params"
    }, {
      no: 5,
      name: "ripgrep_search_params",
      kind: "message",
      T: _9n,
      oneof: "params"
    }, {
      no: 8,
      name: "read_file_params",
      kind: "message",
      T: y9n,
      oneof: "params"
    }, {
      no: 12,
      name: "list_dir_params",
      kind: "message",
      T: A9n,
      oneof: "params"
    }, {
      no: 13,
      name: "edit_file_params",
      kind: "message",
      T: g5t,
      oneof: "params"
    }, {
      no: 16,
      name: "file_search_params",
      kind: "message",
      T: v9n,
      oneof: "params"
    }, {
      no: 17,
      name: "semantic_search_full_params",
      kind: "message",
      T: k5t,
      oneof: "params"
    }, {
      no: 19,
      name: "delete_file_params",
      kind: "message",
      T: FKe,
      oneof: "params"
    }, {
      no: 20,
      name: "reapply_params",
      kind: "message",
      T: p9n,
      oneof: "params"
    }, {
      no: 23,
      name: "run_terminal_command_v2_params",
      kind: "message",
      T: UKe,
      oneof: "params"
    }, {
      no: 24,
      name: "fetch_rules_params",
      kind: "message",
      T: g9n,
      oneof: "params"
    }, {
      no: 26,
      name: "web_search_params",
      kind: "message",
      T: Hbt,
      oneof: "params"
    }, {
      no: 27,
      name: "mcp_params",
      kind: "message",
      T: Gbt,
      oneof: "params"
    }, {
      no: 31,
      name: "search_symbols_params",
      kind: "message",
      T: I9n,
      oneof: "params"
    }, {
      no: 41,
      name: "gotodef_params",
      kind: "message",
      T: x5t,
      oneof: "params"
    }, {
      no: 32,
      name: "background_composer_followup_params",
      kind: "message",
      T: D9n,
      oneof: "params"
    }, {
      no: 33,
      name: "knowledge_base_params",
      kind: "message",
      T: B9n,
      oneof: "params"
    }, {
      no: 34,
      name: "fetch_pull_request_params",
      kind: "message",
      T: R9n,
      oneof: "params"
    }, {
      no: 35,
      name: "deep_search_params",
      kind: "message",
      T: P9n,
      oneof: "params"
    }, {
      no: 36,
      name: "create_diagram_params",
      kind: "message",
      T: L9n,
      oneof: "params"
    }, {
      no: 37,
      name: "fix_lints_params",
      kind: "message",
      T: N9n,
      oneof: "params"
    }, {
      no: 38,
      name: "read_lints_params",
      kind: "message",
      T: P5t,
      oneof: "params"
    }, {
      no: 42,
      name: "task_params",
      kind: "message",
      T: M8o,
      oneof: "params"
    }, {
      no: 43,
      name: "await_task_params",
      kind: "message",
      T: U8o,
      oneof: "params"
    }, {
      no: 44,
      name: "todo_read_params",
      kind: "message",
      T: W9n,
      oneof: "params"
    }, {
      no: 45,
      name: "todo_write_params",
      kind: "message",
      T: Wbt,
      oneof: "params"
    }, {
      no: 50,
      name: "edit_file_v2_params",
      kind: "message",
      T: ihe,
      oneof: "params"
    }, {
      no: 52,
      name: "list_dir_v2_params",
      kind: "message",
      T: M5t,
      oneof: "params"
    }, {
      no: 53,
      name: "read_file_v2_params",
      kind: "message",
      T: Qbt,
      oneof: "params"
    }, {
      no: 54,
      name: "ripgrep_raw_search_params",
      kind: "message",
      T: L5t,
      oneof: "params"
    }, {
      no: 55,
      name: "glob_file_search_params",
      kind: "message",
      T: O5t,
      oneof: "params"
    }, {
      no: 56,
      name: "create_plan_params",
      kind: "message",
      T: JKe,
      oneof: "params"
    }, {
      no: 57,
      name: "list_mcp_resources_params",
      kind: "message",
      T: D5t,
      oneof: "params"
    }, {
      no: 58,
      name: "read_mcp_resource_params",
      kind: "message",
      T: B5t,
      oneof: "params"
    }, {
      no: 59,
      name: "read_project_params",
      kind: "message",
      T: j9n,
      oneof: "params"
    }, {
      no: 60,
      name: "update_project_params",
      kind: "message",
      T: z9n,
      oneof: "params"
    }, {
      no: 61,
      name: "task_v2_params",
      kind: "message",
      T: $Ke,
      oneof: "params"
    }, {
      no: 62,
      name: "call_mcp_tool_params",
      kind: "message",
      T: T9n,
      oneof: "params"
    }, {
      no: 63,
      name: "apply_agent_diff_params",
      kind: "message",
      T: m5t,
      oneof: "params"
    }, {
      no: 64,
      name: "ask_question_params",
      kind: "message",
      T: oke,
      oneof: "params"
    }, {
      no: 65,
      name: "switch_mode_params",
      kind: "message",
      T: GKe,
      oneof: "params"
    }, {
      no: 66,
      name: "computer_use_params",
      kind: "message",
      T: zbt,
      oneof: "params"
    }, {
      no: 67,
      name: "write_shell_stdin_params",
      kind: "message",
      T: N9e,
      oneof: "params"
    }, {
      no: 68,
      name: "record_screen_params",
      kind: "message",
      T: LKe,
      oneof: "params"
    }, {
      no: 69,
      name: "web_fetch_params",
      kind: "message",
      T: WKe,
      oneof: "params"
    }, {
      no: 70,
      name: "report_bugfix_results_params",
      kind: "message",
      T: H5t,
      oneof: "params"
    }, {
      no: 71,
      name: "mcp_auth_params",
      kind: "message",
      T: Vbt,
      oneof: "params"
    }, {
      no: 3,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "timeout_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 9,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 14,
      name: "is_streaming",
      kind: "scalar",
      T: 8
    }, {
      no: 15,
      name: "is_last_message",
      kind: "scalar",
      T: 8
    }, {
      no: 51,
      name: "internal",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "raw_args",
      kind: "scalar",
      T: 9
    }, {
      no: 48,
      name: "tool_index",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 49,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new H5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H5i, e, t);
  }
};
VR = class J5i extends ie {
  constructor(e) {
    super();
    this.tool = an.UNSPECIFIED;
    this.result = {
      case: undefined
    };
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ClientSideToolV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(an)
    }, {
      no: 2,
      name: "read_semsearch_files_result",
      kind: "message",
      T: S5t,
      oneof: "result"
    }, {
      no: 4,
      name: "ripgrep_search_result",
      kind: "message",
      T: f8o,
      oneof: "result"
    }, {
      no: 6,
      name: "read_file_result",
      kind: "message",
      T: w9n,
      oneof: "result"
    }, {
      no: 9,
      name: "list_dir_result",
      kind: "message",
      T: v5t,
      oneof: "result"
    }, {
      no: 10,
      name: "edit_file_result",
      kind: "message",
      T: f9n,
      oneof: "result"
    }, {
      no: 11,
      name: "file_search_result",
      kind: "message",
      T: p8o,
      oneof: "result"
    }, {
      no: 18,
      name: "semantic_search_full_result",
      kind: "message",
      T: E5t,
      oneof: "result"
    }, {
      no: 20,
      name: "delete_file_result",
      kind: "message",
      T: OKe,
      oneof: "result"
    }, {
      no: 21,
      name: "reapply_result",
      kind: "message",
      T: d8o,
      oneof: "result"
    }, {
      no: 24,
      name: "run_terminal_command_v2_result",
      kind: "message",
      T: rhe,
      oneof: "result"
    }, {
      no: 25,
      name: "fetch_rules_result",
      kind: "message",
      T: h8o,
      oneof: "result"
    }, {
      no: 27,
      name: "web_search_result",
      kind: "message",
      T: Jbt,
      oneof: "result"
    }, {
      no: 28,
      name: "mcp_result",
      kind: "message",
      T: I5t,
      oneof: "result"
    }, {
      no: 32,
      name: "search_symbols_result",
      kind: "message",
      T: x8o,
      oneof: "result"
    }, {
      no: 33,
      name: "background_composer_followup_result",
      kind: "message",
      T: T8o,
      oneof: "result"
    }, {
      no: 34,
      name: "knowledge_base_result",
      kind: "message",
      T: I8o,
      oneof: "result"
    }, {
      no: 36,
      name: "fetch_pull_request_result",
      kind: "message",
      T: D8o,
      oneof: "result"
    }, {
      no: 37,
      name: "deep_search_result",
      kind: "message",
      T: R8o,
      oneof: "result"
    }, {
      no: 38,
      name: "create_diagram_result",
      kind: "message",
      T: P8o,
      oneof: "result"
    }, {
      no: 39,
      name: "fix_lints_result",
      kind: "message",
      T: L8o,
      oneof: "result"
    }, {
      no: 40,
      name: "read_lints_result",
      kind: "message",
      T: M9n,
      oneof: "result"
    }, {
      no: 41,
      name: "gotodef_result",
      kind: "message",
      T: k9n,
      oneof: "result"
    }, {
      no: 42,
      name: "task_result",
      kind: "message",
      T: kNc,
      oneof: "result"
    }, {
      no: 43,
      name: "await_task_result",
      kind: "message",
      T: BNc,
      oneof: "result"
    }, {
      no: 44,
      name: "todo_read_result",
      kind: "message",
      T: $8o,
      oneof: "result"
    }, {
      no: 45,
      name: "todo_write_result",
      kind: "message",
      T: HKe,
      oneof: "result"
    }, {
      no: 51,
      name: "edit_file_v2_result",
      kind: "message",
      T: MRe,
      oneof: "result"
    }, {
      no: 52,
      name: "list_dir_v2_result",
      kind: "message",
      T: F5t,
      oneof: "result"
    }, {
      no: 53,
      name: "read_file_v2_result",
      kind: "message",
      T: O9e,
      oneof: "result"
    }, {
      no: 54,
      name: "ripgrep_raw_search_result",
      kind: "message",
      T: F9n,
      oneof: "result"
    }, {
      no: 55,
      name: "glob_file_search_result",
      kind: "message",
      T: Q9n,
      oneof: "result"
    }, {
      no: 56,
      name: "create_plan_result",
      kind: "message",
      T: jbt,
      oneof: "result"
    }, {
      no: 57,
      name: "list_mcp_resources_result",
      kind: "message",
      T: x9n,
      oneof: "result"
    }, {
      no: 58,
      name: "read_mcp_resource_result",
      kind: "message",
      T: R5t,
      oneof: "result"
    }, {
      no: 59,
      name: "read_project_result",
      kind: "message",
      T: J8o,
      oneof: "result"
    }, {
      no: 60,
      name: "update_project_result",
      kind: "message",
      T: G8o,
      oneof: "result"
    }, {
      no: 61,
      name: "task_v2_result",
      kind: "message",
      T: qKe,
      oneof: "result"
    }, {
      no: 62,
      name: "call_mcp_tool_result",
      kind: "message",
      T: E8o,
      oneof: "result"
    }, {
      no: 63,
      name: "apply_agent_diff_result",
      kind: "message",
      T: B5n,
      oneof: "result"
    }, {
      no: 64,
      name: "ask_question_result",
      kind: "message",
      T: zY,
      oneof: "result"
    }, {
      no: 65,
      name: "switch_mode_result",
      kind: "message",
      T: U5t,
      oneof: "result"
    }, {
      no: 66,
      name: "computer_use_result",
      kind: "message",
      T: $5t,
      oneof: "result"
    }, {
      no: 67,
      name: "generate_image_result",
      kind: "message",
      T: l5t,
      oneof: "result"
    }, {
      no: 68,
      name: "write_shell_stdin_result",
      kind: "message",
      T: Nbt,
      oneof: "result"
    }, {
      no: 69,
      name: "record_screen_result",
      kind: "message",
      T: c5t,
      oneof: "result"
    }, {
      no: 70,
      name: "web_fetch_result",
      kind: "message",
      T: q5t,
      oneof: "result"
    }, {
      no: 71,
      name: "report_bugfix_results_result",
      kind: "message",
      T: z8o,
      oneof: "result"
    }, {
      no: 72,
      name: "ai_attribution_result",
      kind: "message",
      T: Z9o,
      oneof: "result"
    }, {
      no: 73,
      name: "mcp_auth_result",
      kind: "message",
      T: V9n,
      oneof: "result"
    }, {
      no: 35,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "error",
      kind: "message",
      T: ske,
      opt: true
    }, {
      no: 48,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 49,
      name: "tool_index",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 50,
      name: "attachments",
      kind: "message",
      T: bPc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new J5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J5i, e, t);
  }
};
fPc = class G5i extends ie {
  constructor(e) {
    super();
    this.rawMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NudgeMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "raw_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new G5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G5i, e, t);
  }
};
bPc = class W5i extends ie {
  constructor(e) {
    super();
    this.originalTodos = [];
    this.updatedTodos = [];
    this.nudgeMessages = [];
    this.shouldShowTodoWriteReminder = false;
    this.todoReminderType = p5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResultAttachments";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "original_todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 2,
      name: "updated_todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 3,
      name: "nudge_messages",
      kind: "message",
      T: fPc,
      repeated: true
    }, {
      no: 4,
      name: "should_show_todo_write_reminder",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "todo_reminder_type",
      kind: "enum",
      T: v.getEnumType(p5t)
    }, {
      no: 6,
      name: "discovery_budget_reminder",
      kind: "message",
      T: vPc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new W5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W5i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.EVERY_10_TURNS = 1] = "EVERY_10_TURNS";
  n[n.AFTER_EDIT = 2] = "AFTER_EDIT";
})(p5t ||= {});
v.util.setEnumType(p5t, "aiserver.v1.ToolResultAttachments.TodoReminderType", [{
  no: 0,
  name: "TODO_REMINDER_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "TODO_REMINDER_TYPE_EVERY_10_TURNS"
}, {
  no: 2,
  name: "TODO_REMINDER_TYPE_AFTER_EDIT"
}]);
vPc = class Q5i extends ie {
  constructor(e) {
    super();
    this.discoveryRoundsRemaining = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "discovery_rounds_remaining",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "discovery_effort",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Q5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q5i, e, t);
  }
};
APc = class j5i extends ie {
  constructor(e) {
    super();
    this.tool = an.UNSPECIFIED;
    this.toolCallId = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamedBackPartialToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(an)
    }, {
      no: 2,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "tool_index",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 5,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new j5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j5i, e, t);
  }
};
m8o = class z5i extends ie {
  constructor(e) {
    super();
    this.tool = an.UNSPECIFIED;
    this.toolCallId = "";
    this.params = {
      case: undefined
    };
    this.name = "";
    this.rawArgs = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamedBackToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(an)
    }, {
      no: 2,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "read_semsearch_files_stream",
      kind: "message",
      T: tLc,
      oneof: "params"
    }, {
      no: 5,
      name: "ripgrep_search_stream",
      kind: "message",
      T: eLc,
      oneof: "params"
    }, {
      no: 7,
      name: "read_file_stream",
      kind: "message",
      T: PPc,
      oneof: "params"
    }, {
      no: 12,
      name: "list_dir_stream",
      kind: "message",
      T: RPc,
      oneof: "params"
    }, {
      no: 13,
      name: "edit_file_stream",
      kind: "message",
      T: TPc,
      oneof: "params"
    }, {
      no: 14,
      name: "file_search_stream",
      kind: "message",
      T: IPc,
      oneof: "params"
    }, {
      no: 19,
      name: "semantic_search_full_stream",
      kind: "message",
      T: nLc,
      oneof: "params"
    }, {
      no: 21,
      name: "delete_file_stream",
      kind: "message",
      T: iLc,
      oneof: "params"
    }, {
      no: 22,
      name: "reapply_stream",
      kind: "message",
      T: mPc,
      oneof: "params"
    }, {
      no: 25,
      name: "run_terminal_command_v2_stream",
      kind: "message",
      T: uNc,
      oneof: "params"
    }, {
      no: 26,
      name: "fetch_rules_stream",
      kind: "message",
      T: dNc,
      oneof: "params"
    }, {
      no: 28,
      name: "web_search_stream",
      kind: "message",
      T: hNc,
      oneof: "params"
    }, {
      no: 29,
      name: "mcp_stream",
      kind: "message",
      T: mNc,
      oneof: "params"
    }, {
      no: 33,
      name: "search_symbols_stream",
      kind: "message",
      T: gNc,
      oneof: "params"
    }, {
      no: 41,
      name: "gotodef_stream",
      kind: "message",
      T: SNc,
      oneof: "params"
    }, {
      no: 34,
      name: "background_composer_followup_stream",
      kind: "message",
      T: fNc,
      oneof: "params"
    }, {
      no: 35,
      name: "knowledge_base_stream",
      kind: "message",
      T: bNc,
      oneof: "params"
    }, {
      no: 36,
      name: "fetch_pull_request_stream",
      kind: "message",
      T: ANc,
      oneof: "params"
    }, {
      no: 37,
      name: "deep_search_stream",
      kind: "message",
      T: yNc,
      oneof: "params"
    }, {
      no: 38,
      name: "create_diagram_stream",
      kind: "message",
      T: wNc,
      oneof: "params"
    }, {
      no: 39,
      name: "fix_lints_stream",
      kind: "message",
      T: _Nc,
      oneof: "params"
    }, {
      no: 40,
      name: "read_lints_stream",
      kind: "message",
      T: CNc,
      oneof: "params"
    }, {
      no: 42,
      name: "task_stream",
      kind: "message",
      T: xNc,
      oneof: "params"
    }, {
      no: 43,
      name: "await_task_stream",
      kind: "message",
      T: PNc,
      oneof: "params"
    }, {
      no: 44,
      name: "todo_read_stream",
      kind: "message",
      T: LNc,
      oneof: "params"
    }, {
      no: 45,
      name: "todo_write_stream",
      kind: "message",
      T: NNc,
      oneof: "params"
    }, {
      no: 52,
      name: "edit_file_v2_stream",
      kind: "message",
      T: CPc,
      oneof: "params"
    }, {
      no: 53,
      name: "list_dir_v2_stream",
      kind: "message",
      T: ONc,
      oneof: "params"
    }, {
      no: 54,
      name: "read_file_v2_stream",
      kind: "message",
      T: UNc,
      oneof: "params"
    }, {
      no: 55,
      name: "ripgrep_raw_search_stream",
      kind: "message",
      T: DNc,
      oneof: "params"
    }, {
      no: 56,
      name: "glob_file_search_stream",
      kind: "message",
      T: $Nc,
      oneof: "params"
    }, {
      no: 57,
      name: "create_plan_stream",
      kind: "message",
      T: VNc,
      oneof: "params"
    }, {
      no: 58,
      name: "list_mcp_resources_stream",
      kind: "message",
      T: qNc,
      oneof: "params"
    }, {
      no: 59,
      name: "read_mcp_resource_stream",
      kind: "message",
      T: JNc,
      oneof: "params"
    }, {
      no: 60,
      name: "read_project_stream",
      kind: "message",
      T: KNc,
      oneof: "params"
    }, {
      no: 61,
      name: "update_project_stream",
      kind: "message",
      T: ZNc,
      oneof: "params"
    }, {
      no: 62,
      name: "task_v2_stream",
      kind: "message",
      T: TNc,
      oneof: "params"
    }, {
      no: 63,
      name: "call_mcp_tool_stream",
      kind: "message",
      T: HNc,
      oneof: "params"
    }, {
      no: 64,
      name: "ask_question_stream",
      kind: "message",
      T: XNc,
      oneof: "params"
    }, {
      no: 65,
      name: "switch_mode_stream",
      kind: "message",
      T: eMc,
      oneof: "params"
    }, {
      no: 66,
      name: "computer_use_stream",
      kind: "message",
      T: tMc,
      oneof: "params"
    }, {
      no: 67,
      name: "write_shell_stdin_stream",
      kind: "message",
      T: nMc,
      oneof: "params"
    }, {
      no: 68,
      name: "web_fetch_stream",
      kind: "message",
      T: iMc,
      oneof: "params"
    }, {
      no: 69,
      name: "report_bugfix_results_stream",
      kind: "message",
      T: rMc,
      oneof: "params"
    }, {
      no: 70,
      name: "mcp_auth_stream",
      kind: "message",
      T: sMc,
      oneof: "params"
    }, {
      no: 8,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "raw_args",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "error",
      kind: "message",
      T: ske,
      opt: true
    }, {
      no: 50,
      name: "tool_index",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 51,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new z5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z5i, e, t);
  }
};
yPc = class V5i extends ie {
  constructor(e) {
    super();
    this.tool = an.UNSPECIFIED;
    this.toolCallId = "";
    this.params = {
      case: undefined
    };
    this.name = "";
    this.rawArgs = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamedBackToolCallV2";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(an)
    }, {
      no: 2,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "read_semsearch_files_params",
      kind: "message",
      T: _5t,
      oneof: "params"
    }, {
      no: 5,
      name: "ripgrep_search_params",
      kind: "message",
      T: _9n,
      oneof: "params"
    }, {
      no: 9,
      name: "read_file_params",
      kind: "message",
      T: y9n,
      oneof: "params"
    }, {
      no: 12,
      name: "list_dir_params",
      kind: "message",
      T: A9n,
      oneof: "params"
    }, {
      no: 13,
      name: "edit_file_params",
      kind: "message",
      T: g5t,
      oneof: "params"
    }, {
      no: 16,
      name: "file_search_params",
      kind: "message",
      T: v9n,
      oneof: "params"
    }, {
      no: 17,
      name: "semantic_search_full_params",
      kind: "message",
      T: k5t,
      oneof: "params"
    }, {
      no: 19,
      name: "delete_file_params",
      kind: "message",
      T: FKe,
      oneof: "params"
    }, {
      no: 20,
      name: "reapply_params",
      kind: "message",
      T: p9n,
      oneof: "params"
    }, {
      no: 23,
      name: "run_terminal_command_v2_params",
      kind: "message",
      T: UKe,
      oneof: "params"
    }, {
      no: 24,
      name: "fetch_rules_params",
      kind: "message",
      T: g9n,
      oneof: "params"
    }, {
      no: 26,
      name: "web_search_params",
      kind: "message",
      T: Hbt,
      oneof: "params"
    }, {
      no: 27,
      name: "mcp_params",
      kind: "message",
      T: Gbt,
      oneof: "params"
    }, {
      no: 31,
      name: "search_symbols_params",
      kind: "message",
      T: I9n,
      oneof: "params"
    }, {
      no: 41,
      name: "gotodef_params",
      kind: "message",
      T: x5t,
      oneof: "params"
    }, {
      no: 32,
      name: "background_composer_followup_params",
      kind: "message",
      T: D9n,
      oneof: "params"
    }, {
      no: 33,
      name: "knowledge_base_params",
      kind: "message",
      T: B9n,
      oneof: "params"
    }, {
      no: 34,
      name: "fetch_pull_request_params",
      kind: "message",
      T: R9n,
      oneof: "params"
    }, {
      no: 35,
      name: "deep_search_params",
      kind: "message",
      T: P9n,
      oneof: "params"
    }, {
      no: 36,
      name: "create_diagram_params",
      kind: "message",
      T: L9n,
      oneof: "params"
    }, {
      no: 37,
      name: "fix_lints_params",
      kind: "message",
      T: N9n,
      oneof: "params"
    }, {
      no: 38,
      name: "read_lints_params",
      kind: "message",
      T: P5t,
      oneof: "params"
    }, {
      no: 42,
      name: "task_params",
      kind: "message",
      T: M8o,
      oneof: "params"
    }, {
      no: 43,
      name: "await_task_params",
      kind: "message",
      T: U8o,
      oneof: "params"
    }, {
      no: 44,
      name: "todo_read_params",
      kind: "message",
      T: W9n,
      oneof: "params"
    }, {
      no: 45,
      name: "todo_write_params",
      kind: "message",
      T: Wbt,
      oneof: "params"
    }, {
      no: 48,
      name: "edit_file_v2_params",
      kind: "message",
      T: ihe,
      oneof: "params"
    }, {
      no: 49,
      name: "list_dir_v2_params",
      kind: "message",
      T: M5t,
      oneof: "params"
    }, {
      no: 61,
      name: "read_file_v2_params",
      kind: "message",
      T: Qbt,
      oneof: "params"
    }, {
      no: 62,
      name: "ripgrep_raw_search_params",
      kind: "message",
      T: L5t,
      oneof: "params"
    }, {
      no: 63,
      name: "glob_file_search_params",
      kind: "message",
      T: O5t,
      oneof: "params"
    }, {
      no: 64,
      name: "create_plan_params",
      kind: "message",
      T: JKe,
      oneof: "params"
    }, {
      no: 65,
      name: "list_mcp_resources_params",
      kind: "message",
      T: D5t,
      oneof: "params"
    }, {
      no: 66,
      name: "read_mcp_resource_params",
      kind: "message",
      T: B5t,
      oneof: "params"
    }, {
      no: 67,
      name: "read_project_params",
      kind: "message",
      T: j9n,
      oneof: "params"
    }, {
      no: 68,
      name: "update_project_params",
      kind: "message",
      T: z9n,
      oneof: "params"
    }, {
      no: 69,
      name: "task_v2_params",
      kind: "message",
      T: $Ke,
      oneof: "params"
    }, {
      no: 70,
      name: "call_mcp_tool_params",
      kind: "message",
      T: T9n,
      oneof: "params"
    }, {
      no: 71,
      name: "apply_agent_diff_params",
      kind: "message",
      T: m5t,
      oneof: "params"
    }, {
      no: 72,
      name: "ask_question_params",
      kind: "message",
      T: oke,
      oneof: "params"
    }, {
      no: 73,
      name: "switch_mode_params",
      kind: "message",
      T: GKe,
      oneof: "params"
    }, {
      no: 74,
      name: "computer_use_params",
      kind: "message",
      T: zbt,
      oneof: "params"
    }, {
      no: 75,
      name: "write_shell_stdin_params",
      kind: "message",
      T: N9e,
      oneof: "params"
    }, {
      no: 76,
      name: "record_screen_params",
      kind: "message",
      T: LKe,
      oneof: "params"
    }, {
      no: 77,
      name: "web_fetch_params",
      kind: "message",
      T: WKe,
      oneof: "params"
    }, {
      no: 78,
      name: "report_bugfix_results_params",
      kind: "message",
      T: H5t,
      oneof: "params"
    }, {
      no: 79,
      name: "mcp_auth_params",
      kind: "message",
      T: Vbt,
      oneof: "params"
    }, {
      no: 8,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "raw_args",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "error",
      kind: "message",
      T: ske,
      opt: true
    }, {
      no: 50,
      name: "tool_index",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 51,
      name: "model_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new V5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V5i, e, t);
  }
};
ihe = class K5i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.streamingEdit = {
      case: undefined
    };
    this.shouldSendBackLinterErrors = false;
    this.resultForModel = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileV2Params";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "contents_after_edit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "waiting_for_file_contents",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "text",
      kind: "message",
      T: wPc,
      oneof: "streaming_edit"
    }, {
      no: 5,
      name: "code",
      kind: "message",
      T: _Pc,
      oneof: "streaming_edit"
    }, {
      no: 6,
      name: "should_send_back_linter_errors",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "diff",
      kind: "message",
      T: FRe,
      opt: true
    }, {
      no: 8,
      name: "result_for_model",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "streaming_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "no_codeblock",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "cloud_agent_edit",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new K5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K5i, e, t);
  }
};
wPc = class Y5i extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileV2Params.StreamingEditText";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Y5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y5i, e, t);
  }
};
_Pc = class Z5i extends ie {
  constructor(e) {
    super();
    this.code = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileV2Params.StreamingEditCode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Z5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z5i, e, t);
  }
};
MRe = class X5i extends ie {
  constructor(e) {
    super();
    this.fileWasCreated = false;
    this.linterErrors = [];
    this.sentBackLinterErrors = false;
    this.shouldAutoFixLints = false;
    this.resultForModel = "";
    this.afterContentId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "contents_before_edit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "eol_sequence",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "detected_language",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "file_was_created",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "diff",
      kind: "message",
      T: FRe,
      opt: true
    }, {
      no: 4,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }, {
      no: 6,
      name: "sent_back_linter_errors",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "should_auto_fix_lints",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "human_review_v2",
      kind: "message",
      T: b9n,
      opt: true
    }, {
      no: 10,
      name: "result_for_model",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "contents_after_edit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "before_content_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 14,
      name: "after_content_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new X5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X5i, e, t);
  }
};
CPc = class e9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileV2Stream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new e9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e9i, e, t);
  }
};
g5t = class t9i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.language = "";
    this.blocking = false;
    this.contents = "";
    this.lineRanges = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "language",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "blocking",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "contents",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "instructions",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "should_edit_file_fail_for_large_files",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "old_string",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "new_string",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "allow_multiple_matches",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "use_whitespace_insensitive_fallback",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "use_did_you_mean_fuzzy_match",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 16,
      name: "gracefully_handle_recoverable_errors",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "line_ranges",
      kind: "message",
      T: S3,
      repeated: true
    }, {
      no: 13,
      name: "notebook_cell_idx",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 14,
      name: "is_new_cell",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "cell_language",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 17,
      name: "edit_category",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 18,
      name: "should_eagerly_process_lints",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new t9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t9i, e, t);
  }
};
f9n = class n9i extends ie {
  constructor(e) {
    super();
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff",
      kind: "message",
      T: FRe
    }, {
      no: 2,
      name: "is_applied",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "apply_failed",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }, {
      no: 5,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "num_matches",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "whitespace_insensitive_fallback_found_match",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "no_match_found_in_line_ranges",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "recoverable_error",
      kind: "message",
      T: kPc,
      opt: true
    }, {
      no: 9,
      name: "num_lines_in_file",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "is_subagent_edit",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "diff_became_no_op_due_to_on_save_fixes",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "human_review",
      kind: "message",
      T: EPc,
      opt: true
    }, {
      no: 14,
      name: "human_feedback",
      kind: "message",
      T: xPc,
      opt: true
    }, {
      no: 15,
      name: "should_eagerly_process_lints",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 16,
      name: "human_review_v2",
      kind: "message",
      T: b9n,
      opt: true
    }, {
      no: 17,
      name: "were_all_new_linter_errors_resolved_by_this_edit",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new n9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n9i, e, t);
  }
};
FRe = class i9i extends ie {
  constructor(e) {
    super();
    this.chunks = [];
    this.editor = f5t.UNSPECIFIED;
    this.hitTimeout = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult.FileDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chunks",
      kind: "message",
      T: SPc,
      repeated: true
    }, {
      no: 2,
      name: "editor",
      kind: "enum",
      T: v.getEnumType(f5t)
    }, {
      no: 3,
      name: "hit_timeout",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new i9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.AI = 1] = "AI";
  n[n.HUMAN = 2] = "HUMAN";
})(f5t ||= {});
v.util.setEnumType(f5t, "aiserver.v1.EditFileResult.FileDiff.Editor", [{
  no: 0,
  name: "EDITOR_UNSPECIFIED"
}, {
  no: 1,
  name: "EDITOR_AI"
}, {
  no: 2,
  name: "EDITOR_HUMAN"
}]);
SPc = class r9i extends ie {
  constructor(e) {
    super();
    this.diffString = "";
    this.oldStart = 0;
    this.newStart = 0;
    this.oldLines = 0;
    this.newLines = 0;
    this.linesRemoved = 0;
    this.linesAdded = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult.FileDiff.ChunkDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "old_start",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "new_start",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "old_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "new_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "lines_removed",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "lines_added",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new r9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r9i, e, t);
  }
};
kPc = class s9i extends ie {
  constructor(e) {
    super();
    this.errorType = b5t.UNSPECIFIED;
    this.modelMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult.RecoverableError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_type",
      kind: "enum",
      T: v.getEnumType(b5t)
    }, {
      no: 2,
      name: "model_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new s9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SEARCH_STRING_NOT_FOUND = 1] = "SEARCH_STRING_NOT_FOUND";
  n[n.AMBIGUOUS_SEARCH_STRING = 2] = "AMBIGUOUS_SEARCH_STRING";
})(b5t ||= {});
v.util.setEnumType(b5t, "aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [{
  no: 0,
  name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND"
}, {
  no: 2,
  name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING"
}]);
EPc = class o9i extends ie {
  constructor(e) {
    super();
    this.isEditAccepted = false;
    this.textResult = "";
    this.stopAndGetNewUserInput = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult.EditFileHumanReview";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_edit_accepted",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "text_result",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "stop_and_get_new_user_input",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new o9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o9i, e, t);
  }
};
xPc = class a9i extends ie {
  constructor(e) {
    super();
    this.selectedOption = "";
    this.feedbackText = "";
    this.submitFeedbackAsNewMessage = false;
    this.bubbleId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileResult.HumanFeedback";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "selected_option",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "feedback_text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "submit_feedback_as_new_message",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "bubble_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new a9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a9i, e, t);
  }
};
b9n = class c9i extends ie {
  constructor(e) {
    super();
    this.selectedOption = "";
    this.feedbackText = "";
    this.submitFeedbackAsNewMessage = false;
    this.bubbleId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HumanReview";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "selected_option",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "feedback_text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "submit_feedback_as_new_message",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "bubble_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new c9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c9i, e, t);
  }
};
TPc = class l9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditFileStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new l9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l9i, e, t);
  }
};
v9n = class u9i extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCallFileSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new u9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u9i, e, t);
  }
};
IPc = class d9i extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCallFileSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new d9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d9i, e, t);
  }
};
p8o = class h9i extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.numResults = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCallFileSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: DPc,
      repeated: true
    }, {
      no: 2,
      name: "limit_hit",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "num_results",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new h9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h9i, e, t);
  }
};
DPc = class m9i extends ie {
  constructor(e) {
    super();
    this.uri = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCallFileSearchResult.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new m9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m9i, e, t);
  }
};
A9n = class p9i extends ie {
  constructor(e) {
    super();
    this.directoryPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directory_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new p9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p9i, e, t);
  }
};
v5t = class g9i extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.directoryRelativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: BPc,
      repeated: true
    }, {
      no: 2,
      name: "directory_relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new g9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g9i, e, t);
  }
};
BPc = class f9i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.isDirectory = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirResult.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_directory",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "size",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 4,
      name: "last_modified",
      kind: "message",
      T: $0,
      opt: true
    }, {
      no: 5,
      name: "num_children",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "num_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new f9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f9i, e, t);
  }
};
RPc = class b9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new b9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b9i, e, t);
  }
};
y9n = class v9i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.readEntireFile = false;
    this.fileIsAllowedToBeReadEntirely = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "read_entire_file",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "start_line_one_indexed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "end_line_one_indexed_inclusive",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "file_is_allowed_to_be_read_entirely",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "max_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "max_chars",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 8,
      name: "min_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new v9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v9i, e, t);
  }
};
w9n = class A9i extends ie {
  constructor(e) {
    super();
    this.contents = "";
    this.didDowngradeToLineRange = false;
    this.didShortenLineRange = false;
    this.didSetDefaultLineRange = false;
    this.relativeWorkspacePath = "";
    this.didShortenCharRange = false;
    this.matchingCursorRules = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "contents",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "did_downgrade_to_line_range",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "did_shorten_line_range",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "did_set_default_line_range",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "full_file_contents",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "outline",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "start_line_one_indexed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 8,
      name: "end_line_one_indexed_inclusive",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 9,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "did_shorten_char_range",
      kind: "scalar",
      T: 8
    }, {
      no: 11,
      name: "read_full_file",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "total_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 13,
      name: "matching_cursor_rules",
      kind: "message",
      T: rke,
      repeated: true
    }, {
      no: 14,
      name: "file_git_context",
      kind: "message",
      T: F9o
    }]);
  }
  static fromBinary(e, t) {
    return new A9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A9i, e, t);
  }
};
PPc = class y9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new y9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y9i, e, t);
  }
};
_9n = class w9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "options",
      kind: "message",
      T: MPc
    }, {
      no: 2,
      name: "pattern_info",
      kind: "message",
      T: LPc
    }]);
  }
  static fromBinary(e, t) {
    return new w9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w9i, e, t);
  }
};
LPc = class _9i extends ie {
  constructor(e) {
    super();
    this.pattern = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.IPatternInfoProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pattern",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_reg_exp",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "is_word_match",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "word_separators",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "is_multiline",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "is_unicode",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "is_case_sensitive",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "notebook_info",
      kind: "message",
      T: NPc
    }, {
      no: 9,
      name: "pattern_was_escaped",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_9i, e, t);
  }
};
NPc = class C9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_in_notebook_markdown_input",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 2,
      name: "is_in_notebook_markdown_preview",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "is_in_notebook_cell_input",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_in_notebook_cell_output",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new C9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C9i, e, t);
  }
};
MPc = class S9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "preview_options",
      kind: "message",
      T: $Pc
    }, {
      no: 2,
      name: "file_encoding",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "surrounding_context",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "is_smart_case",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "notebook_search_config",
      kind: "message",
      T: qPc
    }, {
      no: 6,
      name: "exclude_pattern",
      kind: "message",
      T: OPc
    }, {
      no: 7,
      name: "include_pattern",
      kind: "message",
      T: g8o
    }, {
      no: 8,
      name: "expand_patterns",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "max_results",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "max_file_size",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 11,
      name: "disregard_ignore_files",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "disregard_global_ignore_files",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "disregard_parent_ignore_files",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 14,
      name: "disregard_exclude_settings",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "disregard_search_exclude_settings",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 16,
      name: "ignore_symlinks",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 17,
      name: "only_open_editors",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 18,
      name: "only_file_scheme",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 19,
      name: "reason",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 20,
      name: "extra_file_resources",
      kind: "message",
      T: FPc
    }]);
  }
  static fromBinary(e, t) {
    return new S9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S9i, e, t);
  }
};
FPc = class k9i extends ie {
  constructor(e) {
    super();
    this.extraFileResources = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "extra_file_resources",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new k9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k9i, e, t);
  }
};
OPc = class E9i extends ie {
  constructor(e) {
    super();
    this.excludePattern = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "exclude_pattern",
      kind: "message",
      T: UPc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new E9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E9i, e, t);
  }
};
UPc = class x9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "pattern",
      kind: "message",
      T: g8o
    }]);
  }
  static fromBinary(e, t) {
    return new x9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x9i, e, t);
  }
};
g8o = class T9i extends ie {
  constructor(e) {
    super();
    this.patterns = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "patterns",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new T9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T9i, e, t);
  }
};
$Pc = class I9i extends ie {
  constructor(e) {
    super();
    this.matchLines = 0;
    this.charsPerLine = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "match_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "chars_per_line",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new I9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I9i, e, t);
  }
};
qPc = class D9i extends ie {
  constructor(e) {
    super();
    this.includeMarkupInput = false;
    this.includeMarkupPreview = false;
    this.includeCodeInput = false;
    this.includeOutput = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "include_markup_input",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "include_markup_preview",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "include_code_input",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "include_output",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new D9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D9i, e, t);
  }
};
f8o = class B9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "internal",
      kind: "message",
      T: HPc
    }]);
  }
  static fromBinary(e, t) {
    return new B9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B9i, e, t);
  }
};
HPc = class R9i extends ie {
  constructor(e) {
    super();
    this.results = [];
    this.messages = [];
    this.stats = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: JPc,
      repeated: true
    }, {
      no: 2,
      name: "exit",
      kind: "enum",
      T: v.getEnumType(C9n),
      opt: true
    }, {
      no: 3,
      name: "limit_hit",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "messages",
      kind: "message",
      T: zPc,
      repeated: true
    }, {
      no: 5,
      name: "file_search_stats",
      kind: "message",
      T: VPc,
      oneof: "stats"
    }, {
      no: 6,
      name: "text_search_stats",
      kind: "message",
      T: KPc,
      oneof: "stats"
    }]);
  }
  static fromBinary(e, t) {
    return new R9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INFORMATION = 1] = "INFORMATION";
  n[n.WARNING = 2] = "WARNING";
})(A5t ||= {});
v.util.setEnumType(A5t, "aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [{
  no: 0,
  name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION"
}, {
  no: 2,
  name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NORMAL = 1] = "NORMAL";
  n[n.NEW_SEARCH_STARTED = 2] = "NEW_SEARCH_STARTED";
})(C9n ||= {});
v.util.setEnumType(C9n, "aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [{
  no: 0,
  name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED"
}, {
  no: 1,
  name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL"
}, {
  no: 2,
  name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED"
}]);
JPc = class P9i extends ie {
  constructor(e) {
    super();
    this.resource = "";
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileMatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "resource",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "results",
      kind: "message",
      T: GPc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new P9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P9i, e, t);
  }
};
GPc = class L9i extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "match",
      kind: "message",
      T: WPc,
      oneof: "result"
    }, {
      no: 2,
      name: "context",
      kind: "message",
      T: QPc,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new L9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L9i, e, t);
  }
};
WPc = class N9i extends ie {
  constructor(e) {
    super();
    this.rangeLocations = [];
    this.previewText = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "range_locations",
      kind: "message",
      T: jPc,
      repeated: true
    }, {
      no: 3,
      name: "preview_text",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "webview_index",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "cell_fragment",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new N9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N9i, e, t);
  }
};
QPc = class M9i extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.lineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "line_number",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new M9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M9i, e, t);
  }
};
jPc = class F9i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "source",
      kind: "message",
      T: b8o
    }, {
      no: 2,
      name: "preview",
      kind: "message",
      T: b8o
    }]);
  }
  static fromBinary(e, t) {
    return new F9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F9i, e, t);
  }
};
b8o = class O9i extends ie {
  constructor(e) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumber = 0;
    this.endColumn = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchRange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "start_column",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_column",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new O9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O9i, e, t);
  }
};
zPc = class U9i extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.type = A5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "enum",
      T: v.getEnumType(A5t)
    }, {
      no: 3,
      name: "trusted",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new U9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U9i, e, t);
  }
};
VPc = class $9i extends ie {
  constructor(e) {
    super();
    this.fromCache = false;
    this.detailStats = {
      case: undefined
    };
    this.resultCount = 0;
    this.type = y5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "from_cache",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "search_engine_stats",
      kind: "message",
      T: YPc,
      oneof: "detail_stats"
    }, {
      no: 3,
      name: "cached_search_stats",
      kind: "message",
      T: ZPc,
      oneof: "detail_stats"
    }, {
      no: 4,
      name: "file_search_provider_stats",
      kind: "message",
      T: XPc,
      oneof: "detail_stats"
    }, {
      no: 5,
      name: "result_count",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "type",
      kind: "enum",
      T: v.getEnumType(y5t)
    }, {
      no: 7,
      name: "sorting_time",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new $9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FILE_SEARCH_PROVIDER = 1] = "FILE_SEARCH_PROVIDER";
  n[n.SEARCH_PROCESS = 2] = "SEARCH_PROCESS";
})(y5t ||= {});
v.util.setEnumType(y5t, "aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [{
  no: 0,
  name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER"
}, {
  no: 2,
  name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS"
}]);
KPc = class q9i extends ie {
  constructor(e) {
    super();
    this.type = w5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type",
      kind: "enum",
      T: v.getEnumType(w5t)
    }]);
  }
  static fromBinary(e, t) {
    return new q9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.TEXT_SEARCH_PROVIDER = 1] = "TEXT_SEARCH_PROVIDER";
  n[n.SEARCH_PROCESS = 2] = "SEARCH_PROCESS";
  n[n.AI_TEXT_SEARCH_PROVIDER = 3] = "AI_TEXT_SEARCH_PROVIDER";
})(w5t ||= {});
v.util.setEnumType(w5t, "aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [{
  no: 0,
  name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER"
}, {
  no: 2,
  name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS"
}, {
  no: 3,
  name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER"
}]);
YPc = class H9i extends ie {
  constructor(e) {
    super();
    this.fileWalkTime = 0;
    this.directoriesWalked = 0;
    this.filesWalked = 0;
    this.cmdTime = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_walk_time",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "directories_walked",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "files_walked",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "cmd_time",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "cmd_result_count",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new H9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H9i, e, t);
  }
};
ZPc = class J9i extends ie {
  constructor(e) {
    super();
    this.cacheWasResolved = false;
    this.cacheLookupTime = 0;
    this.cacheFilterTime = 0;
    this.cacheEntryCount = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cache_was_resolved",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "cache_lookup_time",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "cache_filter_time",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "cache_entry_count",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new J9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J9i, e, t);
  }
};
XPc = class G9i extends ie {
  constructor(e) {
    super();
    this.providerTime = 0;
    this.postProcessTime = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "provider_time",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "post_process_time",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new G9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G9i, e, t);
  }
};
eLc = class W9i extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new W9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W9i, e, t);
  }
};
_5t = class Q9i extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    this.query = "";
    this.prReferences = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadSemsearchFilesParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository_info",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }, {
      no: 3,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "pr_references",
      kind: "message",
      T: B8o,
      repeated: true
    }, {
      no: 5,
      name: "pr_search_on",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Q9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q9i, e, t);
  }
};
v8o = class j9i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.missingReason = C5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MissingFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "missing_reason",
      kind: "enum",
      T: v.getEnumType(C5t)
    }, {
      no: 3,
      name: "num_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new j9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j9i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.TOO_LARGE = 1] = "TOO_LARGE";
  n[n.NOT_FOUND = 2] = "NOT_FOUND";
})(C5t ||= {});
v.util.setEnumType(C5t, "aiserver.v1.MissingFile.MissingReason", [{
  no: 0,
  name: "MISSING_REASON_UNSPECIFIED"
}, {
  no: 1,
  name: "MISSING_REASON_TOO_LARGE"
}, {
  no: 2,
  name: "MISSING_REASON_NOT_FOUND"
}]);
A8o = class z9i extends ie {
  constructor(e) {
    super();
    this.knowledge = "";
    this.title = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Knowledge";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "knowledge",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new z9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z9i, e, t);
  }
};
y8o = class V9i extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.fullPrContents = "";
    this.score = 0;
    this.changedFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolPullRequestResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "full_pr_contents",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 4,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "summary",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "pr_number",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 7,
      name: "changed_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 8,
      name: "author",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "date",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new V9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V9i, e, t);
  }
};
S5t = class K9i extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    this.allFiles = [];
    this.missingFiles = [];
    this.knowledgeResults = [];
    this.prResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadSemsearchFilesResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }, {
      no: 2,
      name: "all_files",
      kind: "message",
      T: iae,
      repeated: true
    }, {
      no: 3,
      name: "missing_files",
      kind: "message",
      T: v8o,
      repeated: true
    }, {
      no: 4,
      name: "knowledge_results",
      kind: "message",
      T: A8o,
      repeated: true
    }, {
      no: 5,
      name: "pr_results",
      kind: "message",
      T: y8o,
      repeated: true
    }, {
      no: 6,
      name: "git_remote_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "pr_hydration_timed_out",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new K9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K9i, e, t);
  }
};
tLc = class Y9i extends ie {
  constructor(e) {
    super();
    this.numFiles = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadSemsearchFilesStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "num_files",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Y9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y9i, e, t);
  }
};
k5t = class Z9i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.topK = 0;
    this.prReferences = [];
    this.codeResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchFullParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository_info",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "include_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "exclude_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "top_k",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "pr_references",
      kind: "message",
      T: B8o,
      repeated: true
    }, {
      no: 7,
      name: "pr_search_on",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "explanation",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Z9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z9i, e, t);
  }
};
E5t = class X9i extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    this.allFiles = [];
    this.missingFiles = [];
    this.knowledgeResults = [];
    this.prResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchFullResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }, {
      no: 2,
      name: "all_files",
      kind: "message",
      T: iae,
      repeated: true
    }, {
      no: 3,
      name: "missing_files",
      kind: "message",
      T: v8o,
      repeated: true
    }, {
      no: 4,
      name: "knowledge_results",
      kind: "message",
      T: A8o,
      repeated: true
    }, {
      no: 5,
      name: "pr_results",
      kind: "message",
      T: y8o,
      repeated: true
    }, {
      no: 6,
      name: "git_remote_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "pr_hydration_timed_out",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new X9i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X9i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X9i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X9i, e, t);
  }
};
nLc = class e8i extends ie {
  constructor(e) {
    super();
    this.numFiles = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchFullStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "num_files",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new e8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e8i, e, t);
  }
};
FKe = class t8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteFileParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new t8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t8i, e, t);
  }
};
OKe = class n8i extends ie {
  constructor(e) {
    super();
    this.rejected = false;
    this.fileNonExistent = false;
    this.fileDeletedSuccessfully = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteFileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rejected",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "file_non_existent",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "file_deleted_successfully",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new n8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n8i, e, t);
  }
};
iLc = class i8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteFileStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new i8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i8i, e, t);
  }
};
rLc = class r8i extends ie {
  constructor(e) {
    super();
    this.tool = MKe.UNSPECIFIED;
    this.params = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BuiltinToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(MKe)
    }, {
      no: 2,
      name: "search_params",
      kind: "message",
      T: SLc,
      oneof: "params"
    }, {
      no: 3,
      name: "read_chunk_params",
      kind: "message",
      T: TLc,
      oneof: "params"
    }, {
      no: 4,
      name: "gotodef_params",
      kind: "message",
      T: x5t,
      oneof: "params"
    }, {
      no: 5,
      name: "edit_params",
      kind: "message",
      T: qLc,
      oneof: "params"
    }, {
      no: 6,
      name: "undo_edit_params",
      kind: "message",
      T: DLc,
      oneof: "params"
    }, {
      no: 7,
      name: "end_params",
      kind: "message",
      T: BLc,
      oneof: "params"
    }, {
      no: 8,
      name: "new_file_params",
      kind: "message",
      T: ALc,
      oneof: "params"
    }, {
      no: 9,
      name: "add_test_params",
      kind: "message",
      T: WLc,
      oneof: "params"
    }, {
      no: 10,
      name: "run_test_params",
      kind: "message",
      T: VLc,
      oneof: "params"
    }, {
      no: 11,
      name: "delete_test_params",
      kind: "message",
      T: eNc,
      oneof: "params"
    }, {
      no: 12,
      name: "save_file_params",
      kind: "message",
      T: nNc,
      oneof: "params"
    }, {
      no: 13,
      name: "get_tests_params",
      kind: "message",
      T: YLc,
      oneof: "params"
    }, {
      no: 14,
      name: "get_symbols_params",
      kind: "message",
      T: rNc,
      oneof: "params"
    }, {
      no: 15,
      name: "semantic_search_params",
      kind: "message",
      T: yLc,
      oneof: "params"
    }, {
      no: 16,
      name: "get_project_structure_params",
      kind: "message",
      T: fLc,
      oneof: "params"
    }, {
      no: 17,
      name: "create_rm_files_params",
      kind: "message",
      T: pLc,
      oneof: "params"
    }, {
      no: 18,
      name: "run_terminal_commands_params",
      kind: "message",
      T: hLc,
      oneof: "params"
    }, {
      no: 19,
      name: "new_edit_params",
      kind: "message",
      T: ULc,
      oneof: "params"
    }, {
      no: 20,
      name: "read_with_linter_params",
      kind: "message",
      T: uLc,
      oneof: "params"
    }, {
      no: 21,
      name: "add_ui_step_params",
      kind: "message",
      T: oLc,
      oneof: "params"
    }, {
      no: 23,
      name: "read_semsearch_files_params",
      kind: "message",
      T: _5t,
      oneof: "params"
    }, {
      no: 26,
      name: "delete_file_params",
      kind: "message",
      T: FKe,
      oneof: "params"
    }, {
      no: 22,
      name: "tool_call_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new r8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r8i, e, t);
  }
};
sLc = class s8i extends ie {
  constructor(e) {
    super();
    this.tool = MKe.UNSPECIFIED;
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BuiltinToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool",
      kind: "enum",
      T: v.getEnumType(MKe)
    }, {
      no: 2,
      name: "search_result",
      kind: "message",
      T: xLc,
      oneof: "result"
    }, {
      no: 3,
      name: "read_chunk_result",
      kind: "message",
      T: ILc,
      oneof: "result"
    }, {
      no: 4,
      name: "gotodef_result",
      kind: "message",
      T: k9n,
      oneof: "result"
    }, {
      no: 5,
      name: "edit_result",
      kind: "message",
      T: HLc,
      oneof: "result"
    }, {
      no: 6,
      name: "undo_edit_result",
      kind: "message",
      T: PLc,
      oneof: "result"
    }, {
      no: 7,
      name: "end_result",
      kind: "message",
      T: LLc,
      oneof: "result"
    }, {
      no: 8,
      name: "new_file_result",
      kind: "message",
      T: RLc,
      oneof: "result"
    }, {
      no: 9,
      name: "add_test_result",
      kind: "message",
      T: QLc,
      oneof: "result"
    }, {
      no: 10,
      name: "run_test_result",
      kind: "message",
      T: KLc,
      oneof: "result"
    }, {
      no: 11,
      name: "delete_test_result",
      kind: "message",
      T: tNc,
      oneof: "result"
    }, {
      no: 12,
      name: "save_file_result",
      kind: "message",
      T: iNc,
      oneof: "result"
    }, {
      no: 13,
      name: "get_tests_result",
      kind: "message",
      T: ZLc,
      oneof: "result"
    }, {
      no: 14,
      name: "get_symbols_result",
      kind: "message",
      T: oNc,
      oneof: "result"
    }, {
      no: 15,
      name: "semantic_search_result",
      kind: "message",
      T: _Lc,
      oneof: "result"
    }, {
      no: 16,
      name: "get_project_structure_result",
      kind: "message",
      T: bLc,
      oneof: "result"
    }, {
      no: 17,
      name: "create_rm_files_result",
      kind: "message",
      T: gLc,
      oneof: "result"
    }, {
      no: 18,
      name: "run_terminal_commands_result",
      kind: "message",
      T: mLc,
      oneof: "result"
    }, {
      no: 19,
      name: "new_edit_result",
      kind: "message",
      T: $Lc,
      oneof: "result"
    }, {
      no: 20,
      name: "read_with_linter_result",
      kind: "message",
      T: dLc,
      oneof: "result"
    }, {
      no: 21,
      name: "add_ui_step_result",
      kind: "message",
      T: lLc,
      oneof: "result"
    }, {
      no: 22,
      name: "read_semsearch_files_result",
      kind: "message",
      T: S5t,
      oneof: "result"
    }, {
      no: 24,
      name: "delete_file_result",
      kind: "message",
      T: OKe,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new s8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s8i, e, t);
  }
};
oLc = class o8i extends ie {
  constructor(e) {
    super();
    this.conversationId = "";
    this.step = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddUiStepParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "search_results",
      kind: "message",
      T: cLc,
      oneof: "step"
    }]);
  }
  static fromBinary(e, t) {
    return new o8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o8i, e, t);
  }
};
aLc = class a8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddUiStepParams.SearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new a8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a8i, e, t);
  }
};
cLc = class c8i extends ie {
  constructor(e) {
    super();
    this.searchResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddUiStepParams.SearchResults";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "search_results",
      kind: "message",
      T: aLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new c8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c8i, e, t);
  }
};
lLc = class l8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddUiStepResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new l8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l8i, e, t);
  }
};
SIh = class u8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ServerSideToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new u8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u8i, e, t);
  }
};
w8o = class d8i extends ie {
  constructor(e) {
    super();
    this.toolCall = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "builtin_tool_call",
      kind: "message",
      T: rLc,
      oneof: "tool_call"
    }, {
      no: 2,
      name: "custom_tool_call",
      kind: "message",
      T: NLc,
      oneof: "tool_call"
    }]);
  }
  static fromBinary(e, t) {
    return new d8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d8i, e, t);
  }
};
S9n = class h8i extends ie {
  constructor(e) {
    super();
    this.toolResult = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "builtin_tool_result",
      kind: "message",
      T: sLc,
      oneof: "tool_result"
    }, {
      no: 2,
      name: "custom_tool_result",
      kind: "message",
      T: MLc,
      oneof: "tool_result"
    }, {
      no: 3,
      name: "error_tool_result",
      kind: "message",
      T: OLc,
      oneof: "tool_result"
    }]);
  }
  static fromBinary(e, t) {
    return new h8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h8i, e, t);
  }
};
uLc = class m8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadWithLinterParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new m8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m8i, e, t);
  }
};
dLc = class p8i extends ie {
  constructor(e) {
    super();
    this.contents = "";
    this.diagnostics = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadWithLinterResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "contents",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diagnostics",
      kind: "message",
      T: yRc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new p8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p8i, e, t);
  }
};
hLc = class g8i extends ie {
  constructor(e) {
    super();
    this.commands = [];
    this.commandsUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commands",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "commands_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new g8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g8i, e, t);
  }
};
mLc = class f8i extends ie {
  constructor(e) {
    super();
    this.outputs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "outputs",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new f8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f8i, e, t);
  }
};
pLc = class b8i extends ie {
  constructor(e) {
    super();
    this.removedFilePaths = [];
    this.createdFilePaths = [];
    this.createdDirectoryPaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateRmFilesParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "removed_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "created_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "created_directory_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new b8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b8i, e, t);
  }
};
gLc = class v8i extends ie {
  constructor(e) {
    super();
    this.createdFilePaths = [];
    this.removedFilePaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateRmFilesResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "created_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "removed_file_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new v8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v8i, e, t);
  }
};
fLc = class A8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetProjectStructureParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new A8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A8i, e, t);
  }
};
bLc = class y8i extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.rootWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetProjectStructureResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: vLc,
      repeated: true
    }, {
      no: 2,
      name: "root_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new y8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y8i, e, t);
  }
};
vLc = class w8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.outline = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetProjectStructureResult.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "outline",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new w8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w8i, e, t);
  }
};
ALc = class _8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NewFileParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new _8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_8i, e, t);
  }
};
yLc = class C8i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.topK = 0;
    this.grabWholeFile = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "include_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "exclude_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "top_k",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "index_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "grab_whole_file",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new C8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C8i, e, t);
  }
};
wLc = class S8i extends ie {
  constructor(e) {
    super();
    this.startLine = 0;
    this.startCharacter = 0;
    this.endLine = 0;
    this.endCharacter = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Range";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "start_character",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_character",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new S8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S8i, e, t);
  }
};
_8o = class k8i extends ie {
  constructor(e) {
    super();
    this.start = 0;
    this.end = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MatchRange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "end",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new k8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k8i, e, t);
  }
};
_Lc = class E8i extends ie {
  constructor(e) {
    super();
    this.results = [];
    this.files = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: CLc,
      repeated: true
    }, {
      no: 2,
      name: "files",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new E8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E8i, e, t);
  }
};
CLc = class x8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.score = 0;
    this.content = "";
    this.detailedLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemanticSearchResult.Item";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "range",
      kind: "message",
      T: wF
    }, {
      no: 5,
      name: "original_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "detailed_lines",
      kind: "message",
      T: M9o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new x8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x8i, e, t);
  }
};
SLc = class T8i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.regex = false;
    this.includePattern = "";
    this.excludePattern = "";
    this.filenameSearch = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "regex",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "include_pattern",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "exclude_pattern",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "filename_search",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new T8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T8i, e, t);
  }
};
kLc = class I8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.numMatches = 0;
    this.potentiallyRelevantLines = [];
    this.cropped = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchToolFileSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "num_matches",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "potentially_relevant_lines",
      kind: "message",
      T: ELc,
      repeated: true
    }, {
      no: 4,
      name: "cropped",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new I8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I8i, e, t);
  }
};
ELc = class D8i extends ie {
  constructor(e) {
    super();
    this.lineNumber = 0;
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchToolFileSearchResult.Line";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new D8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D8i, e, t);
  }
};
xLc = class B8i extends ie {
  constructor(e) {
    super();
    this.fileResults = [];
    this.numTotalMatches = 0;
    this.numTotalMatchedFiles = 0;
    this.numTotalMayBeIncomplete = false;
    this.filesOnly = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_results",
      kind: "message",
      T: kLc,
      repeated: true
    }, {
      no: 2,
      name: "num_total_matches",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "num_total_matched_files",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "num_total_may_be_incomplete",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "files_only",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new B8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B8i, e, t);
  }
};
TLc = class R8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadChunkParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "num_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new R8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R8i, e, t);
  }
};
ILc = class P8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.lines = [];
    this.totalNumLines = 0;
    this.cropped = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadChunkResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "total_num_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "cropped",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new P8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P8i, e, t);
  }
};
DLc = class L8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UndoEditParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new L8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L8i, e, t);
  }
};
BLc = class N8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EndParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new N8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N8i, e, t);
  }
};
RLc = class M8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.fileTotalLines = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NewFileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_total_lines",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new M8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M8i, e, t);
  }
};
PLc = class F8i extends ie {
  constructor(e) {
    super();
    this.feedback = [];
    this.relativeWorkspacePath = "";
    this.contextStartLineNumber = 0;
    this.contextLines = [];
    this.contextTotalNumLines = 0;
    this.fileTotalLines = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UndoEditResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "feedback",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "context_start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "context_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "context_total_num_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "file_total_lines",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new F8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F8i, e, t);
  }
};
LLc = class O8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EndResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new O8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O8i, e, t);
  }
};
NLc = class U8i extends ie {
  constructor(e) {
    super();
    this.toolId = "";
    this.params = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CustomToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "params",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new U8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U8i, e, t);
  }
};
kIh = class $8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ScratchpadResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new $8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($8i, e, t);
  }
};
MLc = class q8i extends ie {
  constructor(e) {
    super();
    this.toolId = "";
    this.result = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CustomToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "result",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new q8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q8i, e, t);
  }
};
x5t = class H8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.symbol = "";
    this.startLine = 0;
    this.endLine = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GotodefParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "symbol",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_line",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new H8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H8i, e, t);
  }
};
FLc = class J8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.startLine = 0;
    this.endLine = 0;
    this.codeContextLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GotodefDefinition";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "fully_qualified_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "symbol_kind",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "code_context_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new J8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J8i, e, t);
  }
};
k9n = class G8i extends ie {
  constructor(e) {
    super();
    this.definitions = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GotodefResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "definitions",
      kind: "message",
      T: FLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new G8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G8i, e, t);
  }
};
OLc = class W8i extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ErrorToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new W8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W8i, e, t);
  }
};
ULc = class Q8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    this.editId = "";
    this.firstEdit = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NewEditParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "end_line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "edit_id",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "first_edit",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Q8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q8i, e, t);
  }
};
$Lc = class j8i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NewEditResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new j8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j8i, e, t);
  }
};
qLc = class z8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.replaceNumLines = 0;
    this.newLines = [];
    this.editId = "";
    this.frontendEditType = T5t.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "replace_num_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "new_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 7,
      name: "replace_whole_file",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "edit_id",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "frontend_edit_type",
      kind: "enum",
      T: v.getEnumType(T5t)
    }, {
      no: 8,
      name: "auto_fix_all_linter_errors_in_file",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new z8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z8i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INLINE_DIFFS = 1] = "INLINE_DIFFS";
  n[n.SIMPLE = 2] = "SIMPLE";
})(T5t ||= {});
v.util.setEnumType(T5t, "aiserver.v1.EditParams.FrontendEditType", [{
  no: 0,
  name: "FRONTEND_EDIT_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "FRONTEND_EDIT_TYPE_INLINE_DIFFS"
}, {
  no: 2,
  name: "FRONTEND_EDIT_TYPE_SIMPLE"
}]);
HLc = class V8i extends ie {
  constructor(e) {
    super();
    this.feedback = [];
    this.contextStartLineNumber = 0;
    this.contextLines = [];
    this.file = "";
    this.fileTotalLines = 0;
    this.structuredFeedback = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "feedback",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "context_start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "context_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "file_total_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "structured_feedback",
      kind: "message",
      T: GLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new V8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V8i, e, t);
  }
};
JLc = class K8i extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditResult.RelatedInformation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new K8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K8i, e, t);
  }
};
GLc = class Y8i extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.severity = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relatedInformation = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EditResult.Feedback";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "severity",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "related_information",
      kind: "message",
      T: JLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Y8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y8i, e, t);
  }
};
WLc = class Z8i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.testName = "";
    this.testCode = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddTestParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "test_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "test_code",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Z8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z8i, e, t);
  }
};
QLc = class X8i extends ie {
  constructor(e) {
    super();
    this.feedback = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddTestResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "feedback",
      kind: "message",
      T: zLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new X8i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X8i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X8i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X8i, e, t);
  }
};
jLc = class e6i extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddTestResult.RelatedInformation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new e6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e6i, e, t);
  }
};
zLc = class t6i extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.severity = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relatedInformation = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddTestResult.Feedback";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "severity",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "related_information",
      kind: "message",
      T: jLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new t6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t6i, e, t);
  }
};
VLc = class n6i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTestParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "test_name",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new n6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n6i, e, t);
  }
};
KLc = class i6i extends ie {
  constructor(e) {
    super();
    this.result = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTestResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "result",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new i6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i6i, e, t);
  }
};
YLc = class r6i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetTestsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new r6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r6i, e, t);
  }
};
ZLc = class s6i extends ie {
  constructor(e) {
    super();
    this.tests = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetTestsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tests",
      kind: "message",
      T: XLc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new s6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s6i, e, t);
  }
};
XLc = class o6i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.lines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetTestsResult.Test";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new o6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o6i, e, t);
  }
};
eNc = class a6i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteTestParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "test_name",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new a6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a6i, e, t);
  }
};
tNc = class c6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteTestResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new c6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c6i, e, t);
  }
};
nNc = class l6i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SaveFileParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new l6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l6i, e, t);
  }
};
iNc = class u6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SaveFileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new u6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u6i, e, t);
  }
};
rNc = class d6i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.includeChildren = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetSymbolsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_range",
      kind: "message",
      T: sNc,
      opt: true
    }, {
      no: 3,
      name: "include_children",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new d6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d6i, e, t);
  }
};
sNc = class h6i extends ie {
  constructor(e) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetSymbolsParams.LineRange";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "end_line_number_inclusive",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new h6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h6i, e, t);
  }
};
oNc = class m6i extends ie {
  constructor(e) {
    super();
    this.symbols = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetSymbolsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "symbols",
      kind: "message",
      T: C5n,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new m6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m6i, e, t);
  }
};
C8o = class p6i extends ie {
  constructor(e) {
    super();
    this.parsingFailed = false;
    this.executableCommands = [];
    this.hasRedirects = false;
    this.hasCommandSubstitution = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ShellCommandParsingResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "parsing_failed",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "executable_commands",
      kind: "message",
      T: cNc,
      repeated: true
    }, {
      no: 3,
      name: "has_redirects",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "has_command_substitution",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new p6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p6i, e, t);
  }
};
aNc = class g6i extends ie {
  constructor(e) {
    super();
    this.type = "";
    this.value = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new g6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g6i, e, t);
  }
};
cNc = class f6i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.args = [];
    this.fullText = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ShellCommandParsingResult.ExecutableCommand";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "args",
      kind: "message",
      T: aNc,
      repeated: true
    }, {
      no: 3,
      name: "full_text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new f6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f6i, e, t);
  }
};
UKe = class b6i extends ie {
  constructor(e) {
    super();
    this.command = "";
    this.isBackground = false;
    this.requireUserApproval = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandV2Params";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "command",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "cwd",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "new_session",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "options",
      kind: "message",
      T: E9n,
      opt: true
    }, {
      no: 5,
      name: "is_background",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "require_user_approval",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "parsing_result",
      kind: "message",
      T: C8o,
      opt: true
    }, {
      no: 8,
      name: "idle_timeout_seconds",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 9,
      name: "requested_sandbox_policy",
      kind: "message",
      T: Hte,
      opt: true
    }, {
      no: 10,
      name: "file_output_threshold_bytes",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 11,
      name: "command_description",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "classifier_result",
      kind: "message",
      T: RRc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new b6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b6i, e, t);
  }
};
E9n = class v6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timeout",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 2,
      name: "skip_ai_check",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "command_run_timeout_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "command_change_check_interval_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "ai_finish_check_max_attempts",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "ai_finish_check_interval_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "delayer_interval_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 8,
      name: "ai_check_for_hangs",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new v6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v6i, e, t);
  }
};
lNc = class A6i extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    this.sizeBytes = Eo.zero;
    this.lineCount = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OutputLocation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "size_bytes",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "line_count",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new A6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A6i, e, t);
  }
};
rhe = class y6i extends ie {
  constructor(e) {
    super();
    this.output = "";
    this.exitCode = 0;
    this.poppedOutIntoBackground = false;
    this.isRunningInBackground = false;
    this.notInterrupted = false;
    this.resultingWorkingDirectory = "";
    this.didUserChange = false;
    this.endedReason = k3.UNSPECIFIED;
    this.outputRaw = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "output",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "exit_code",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "popped_out_into_background",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "is_running_in_background",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "not_interrupted",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "resulting_working_directory",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "did_user_change",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "ended_reason",
      kind: "enum",
      T: v.getEnumType(k3)
    }, {
      no: 10,
      name: "exit_code_v2",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 11,
      name: "updated_command",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "output_raw",
      kind: "scalar",
      T: 9
    }, {
      no: 13,
      name: "human_review_v2",
      kind: "message",
      T: b9n,
      opt: true
    }, {
      no: 14,
      name: "effective_sandbox_policy",
      kind: "message",
      T: Hte,
      opt: true
    }, {
      no: 15,
      name: "terminal_instance_id",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 16,
      name: "output_location",
      kind: "message",
      T: lNc,
      opt: true
    }, {
      no: 17,
      name: "terminal_instance_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 18,
      name: "background_shell_id",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new y6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y6i, e, t);
  }
};
uNc = class w6i extends ie {
  constructor(e) {
    super();
    this.command = "";
    this.isBackground = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunTerminalCommandV2Stream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "command",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_background",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "parsing_result",
      kind: "message",
      T: C8o,
      opt: true
    }, {
      no: 8,
      name: "idle_timeout_seconds",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 9,
      name: "requested_sandbox_policy",
      kind: "message",
      T: Hte,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new w6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w6i, e, t);
  }
};
dNc = class _6i extends ie {
  constructor(e) {
    super();
    this.ruleNames = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchRulesStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rule_names",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new _6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_6i, e, t);
  }
};
Hbt = class C6i extends ie {
  constructor(e) {
    super();
    this.searchTerm = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "search_term",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new C6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C6i, e, t);
  }
};
Jbt = class S6i extends ie {
  constructor(e) {
    super();
    this.references = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "references",
      kind: "message",
      T: S8o,
      repeated: true
    }, {
      no: 2,
      name: "is_final",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new S6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S6i, e, t);
  }
};
S8o = class k6i extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebSearchResult.WebReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "chunk",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new k6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k6i, e, t);
  }
};
hNc = class E6i extends ie {
  constructor(e) {
    super();
    this.searchTerm = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "search_term",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new E6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E6i, e, t);
  }
};
Gbt = class x6i extends ie {
  constructor(e) {
    super();
    this.tools = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tools",
      kind: "message",
      T: F9e,
      repeated: true
    }, {
      no: 2,
      name: "file_output_threshold_bytes",
      kind: "scalar",
      T: 3,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new x6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x6i, e, t);
  }
};
F9e = class T6i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.description = "";
    this.parameters = "";
    this.serverName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPParams.Tool";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "parameters",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "server_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new T6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T6i, e, t);
  }
};
I5t = class I6i extends ie {
  constructor(e) {
    super();
    this.selectedTool = "";
    this.result = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "selected_tool",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "result",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new I6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I6i, e, t);
  }
};
mNc = class D6i extends ie {
  constructor(e) {
    super();
    this.tools = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tools",
      kind: "message",
      T: F9e,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new D6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D6i, e, t);
  }
};
D5t = class B6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListMcpResourcesParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new B6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B6i, e, t);
  }
};
x9n = class R6i extends ie {
  constructor(e) {
    super();
    this.resources = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListMcpResourcesResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "resources",
      kind: "message",
      T: k8o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new R6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R6i, e, t);
  }
};
k8o = class P6i extends ie {
  constructor(e) {
    super();
    this.uri = "";
    this.server = "";
    this.annotations = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListMcpResourcesResult.MCPResource";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "mime_type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "server",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "annotations",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new P6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P6i, e, t);
  }
};
B5t = class L6i extends ie {
  constructor(e) {
    super();
    this.server = "";
    this.uri = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadMcpResourceParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "uri",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "download_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new L6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L6i, e, t);
  }
};
R5t = class N6i extends ie {
  constructor(e) {
    super();
    this.uri = "";
    this.content = {
      case: undefined
    };
    this.annotations = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadMcpResourceResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uri",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "mime_type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "text",
      kind: "scalar",
      T: 9,
      oneof: "content"
    }, {
      no: 6,
      name: "blob",
      kind: "scalar",
      T: 12,
      oneof: "content"
    }, {
      no: 7,
      name: "annotations",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }]);
  }
  static fromBinary(e, t) {
    return new N6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N6i, e, t);
  }
};
T9n = class M6i extends ie {
  constructor(e) {
    super();
    this.server = "";
    this.toolName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CallMcpToolParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "tool_args",
      kind: "message",
      T: jR
    }]);
  }
  static fromBinary(e, t) {
    return new M6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M6i, e, t);
  }
};
E8o = class F6i extends ie {
  constructor(e) {
    super();
    this.server = "";
    this.toolName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CallMcpToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "result",
      kind: "message",
      T: jR
    }]);
  }
  static fromBinary(e, t) {
    return new F6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F6i, e, t);
  }
};
I9n = class O6i extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchSymbolsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new O6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O6i, e, t);
  }
};
x8o = class U6i extends ie {
  constructor(e) {
    super();
    this.matches = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchSymbolsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "matches",
      kind: "message",
      T: pNc,
      repeated: true
    }, {
      no: 2,
      name: "rejected",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new U6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U6i, e, t);
  }
};
pNc = class $6i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.uri = "";
    this.secondaryText = "";
    this.labelMatches = [];
    this.descriptionMatches = [];
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchSymbolsResult.SymbolMatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "uri",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "range",
      kind: "message",
      T: wLc
    }, {
      no: 4,
      name: "secondary_text",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "label_matches",
      kind: "message",
      T: _8o,
      repeated: true
    }, {
      no: 6,
      name: "description_matches",
      kind: "message",
      T: _8o,
      repeated: true
    }, {
      no: 7,
      name: "score",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new $6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($6i, e, t);
  }
};
gNc = class q6i extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchSymbolsStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new q6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q6i, e, t);
  }
};
D9n = class H6i extends ie {
  constructor(e) {
    super();
    this.proposedFollowup = "";
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerFollowupParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "proposed_followup",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new H6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H6i, e, t);
  }
};
T8o = class J6i extends ie {
  constructor(e) {
    super();
    this.proposedFollowup = "";
    this.isSent = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerFollowupResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "proposed_followup",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_sent",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new J6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J6i, e, t);
  }
};
fNc = class G6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerFollowupStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new G6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G6i, e, t);
  }
};
EIh = class W6i extends ie {
  constructor(e) {
    super();
    this.targetFiles = [];
    this.focusQuery = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeCodeParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "target_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "focus_query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new W6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W6i, e, t);
  }
};
xIh = class Q6i extends ie {
  constructor(e) {
    super();
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeCodeResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Q6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q6i, e, t);
  }
};
TIh = class j6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeCodeStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new j6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j6i, e, t);
  }
};
B9n = class z6i extends ie {
  constructor(e) {
    super();
    this.knowledgeToStore = "";
    this.title = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.KnowledgeBaseParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "knowledge_to_store",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "existing_knowledge_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "action",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new z6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z6i, e, t);
  }
};
I8o = class V6i extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.confirmationMessage = "";
    this.id = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.KnowledgeBaseResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "confirmation_message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new V6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V6i, e, t);
  }
};
bNc = class K6i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.KnowledgeBaseStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new K6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K6i, e, t);
  }
};
R9n = class Y6i extends ie {
  constructor(e) {
    super();
    this.pullNumberOrCommitHash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchPullRequestParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pull_number_or_commit_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repo",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "is_github",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Y6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y6i, e, t);
  }
};
D8o = class Z6i extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.prNumber = 0;
    this.title = "";
    this.body = "";
    this.author = "";
    this.date = "";
    this.diff = "";
    this.comments = [];
    this.labels = [];
    this.assignees = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchPullRequestResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pr_number",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "author",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "date",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "diff",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "sha",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "external_link",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "comments",
      kind: "message",
      T: vNc,
      repeated: true
    }, {
      no: 12,
      name: "labels",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 13,
      name: "assignees",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 14,
      name: "is_issue",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "state",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 16,
      name: "prompt_connect_github",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Z6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z6i, e, t);
  }
};
vNc = class X6i extends ie {
  constructor(e) {
    super();
    this.id = 0;
    this.body = "";
    this.createdAt = "";
    this.updatedAt = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IssueComment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "author",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "created_at",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "updated_at",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "author_association",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new X6i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X6i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X6i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X6i, e, t);
  }
};
ANc = class eUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchPullRequestStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new eUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eUi, e, t);
  }
};
B8o = class tUi extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.score = 0;
    this.changedFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PullRequestReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "summary",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "pr_number",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 6,
      name: "author",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "date",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "changed_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new tUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tUi, e, t);
  }
};
P9n = class nUi extends ie {
  constructor(e) {
    super();
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new nUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nUi, e, t);
  }
};
R8o = class iUi extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.result = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "result",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new iUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iUi, e, t);
  }
};
yNc = class rUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeepSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new rUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rUi, e, t);
  }
};
L9n = class sUi extends ie {
  constructor(e) {
    super();
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateDiagramParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new sUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sUi, e, t);
  }
};
P8o = class oUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateDiagramResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new oUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oUi, e, t);
  }
};
wNc = class aUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateDiagramStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new aUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aUi, e, t);
  }
};
N9n = class cUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new cUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cUi, e, t);
  }
};
L8o = class lUi extends ie {
  constructor(e) {
    super();
    this.fileResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_results",
      kind: "message",
      T: N8o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new lUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lUi, e, t);
  }
};
N8o = class uUi extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsResult.FileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff",
      kind: "message",
      T: FRe
    }, {
      no: 3,
      name: "is_applied",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "apply_failed",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new uUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uUi, e, t);
  }
};
_Nc = class dUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FixLintsStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new dUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dUi, e, t);
  }
};
P5t = class hUi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.paths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadLintsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new hUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hUi, e, t);
  }
};
M9n = class mUi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.linterErrors = [];
    this.linterErrorsByFile = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadLintsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }, {
      no: 3,
      name: "linter_errors_by_file",
      kind: "message",
      T: aN,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new mUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mUi, e, t);
  }
};
CNc = class pUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadLintsStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new pUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pUi, e, t);
  }
};
SNc = class gUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GotodefStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new gUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gUi, e, t);
  }
};
M8o = class fUi extends ie {
  constructor(e) {
    super();
    this.taskDescription = "";
    this.taskTitle = "";
    this.allowedWriteDirectories = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_description",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "task_title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "async",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "allowed_write_directories",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "model_override",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "max_mode_override",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "default_expanded_while_running",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new fUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fUi, e, t);
  }
};
kNc = class bUi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "completed_task_result",
      kind: "message",
      T: F8o,
      oneof: "result"
    }, {
      no: 2,
      name: "async_task_result",
      kind: "message",
      T: ENc,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new bUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bUi, e, t);
  }
};
F8o = class vUi extends ie {
  constructor(e) {
    super();
    this.summary = "";
    this.fileResults = [];
    this.userAborted = false;
    this.subagentErrored = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskResult.CompletedTaskResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_results",
      kind: "message",
      T: N8o,
      repeated: true
    }, {
      no: 3,
      name: "user_aborted",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "subagent_errored",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new vUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vUi, e, t);
  }
};
ENc = class AUi extends ie {
  constructor(e) {
    super();
    this.taskId = "";
    this.userAborted = false;
    this.subagentErrored = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskResult.AsyncTaskResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "user_aborted",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "subagent_errored",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new AUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AUi, e, t);
  }
};
xNc = class yUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new yUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yUi, e, t);
  }
};
$Ke = class wUi extends ie {
  constructor(e) {
    super();
    this.description = "";
    this.prompt = "";
    this.subagentType = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskV2Params";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "subagent_type",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "model",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new wUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wUi, e, t);
  }
};
qKe = class _Ui extends ie {
  constructor(e) {
    super();
    this.isBackground = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "agent_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "is_background",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new _Ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Ui, e, t);
  }
};
TNc = class CUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TaskV2Stream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new CUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CUi, e, t);
  }
};
L5t = class SUi extends ie {
  constructor(e) {
    super();
    this.pattern = "";
    this.ignoreGlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pattern",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "glob",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "output_mode",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "context_before",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "context_after",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "context",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 8,
      name: "case_insensitive",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "type",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "head_limit",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 11,
      name: "multiline",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "sort",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "sort_ascending",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 14,
      name: "ignore_globs",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 15,
      name: "offset",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new SUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SUi, e, t);
  }
};
F9n = class kUi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: O8o,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: O9n,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new kUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kUi, e, t);
  }
};
O9n = class EUi extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new EUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EUi, e, t);
  }
};
O8o = class xUi extends ie {
  constructor(e) {
    super();
    this.pattern = "";
    this.path = "";
    this.outputMode = "";
    this.workspaceResults = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pattern",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "output_mode",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "workspace_results",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: N5t
      }
    }, {
      no: 5,
      name: "active_editor_result",
      kind: "message",
      T: N5t,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xUi, e, t);
  }
};
N5t = class TUi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchUnionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "count",
      kind: "message",
      T: U9n,
      oneof: "result"
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: q9n,
      oneof: "result"
    }, {
      no: 3,
      name: "content",
      kind: "message",
      T: H9n,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new TUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TUi, e, t);
  }
};
U9n = class IUi extends ie {
  constructor(e) {
    super();
    this.counts = [];
    this.totalFiles = 0;
    this.totalMatches = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchCountResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "counts",
      kind: "message",
      T: $9n,
      repeated: true
    }, {
      no: 2,
      name: "total_files",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "total_matches",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "client_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "head_limit_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "offset_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "ripgrep_truncated",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new IUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IUi, e, t);
  }
};
$9n = class DUi extends ie {
  constructor(e) {
    super();
    this.file = "";
    this.count = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchFileCount";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "count",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "is_dirty",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_out_of_workspace",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "absolute_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new DUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DUi, e, t);
  }
};
q9n = class BUi extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.totalFiles = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    this.filesWithMeta = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchFilesResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "total_files",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "client_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "ripgrep_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "files_with_meta",
      kind: "message",
      T: INc,
      repeated: true
    }, {
      no: 6,
      name: "head_limit_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "offset_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new BUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BUi, e, t);
  }
};
INc = class RUi extends ie {
  constructor(e) {
    super();
    this.file = "";
    this.isDirty = false;
    this.isOutOfWorkspace = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchFilesResult.FileEntry";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_dirty",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "is_out_of_workspace",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "absolute_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new RUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RUi, e, t);
  }
};
H9n = class PUi extends ie {
  constructor(e) {
    super();
    this.matches = [];
    this.totalLines = 0;
    this.totalMatchedLines = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchContentResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "matches",
      kind: "message",
      T: J9n,
      repeated: true
    }, {
      no: 2,
      name: "total_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "total_matched_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "client_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "ripgrep_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "head_limit_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "offset_applied",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new PUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PUi, e, t);
  }
};
J9n = class LUi extends ie {
  constructor(e) {
    super();
    this.file = "";
    this.matches = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchFileMatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "matches",
      kind: "message",
      T: G9n,
      repeated: true
    }, {
      no: 3,
      name: "is_dirty",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_out_of_workspace",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "absolute_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new LUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LUi, e, t);
  }
};
G9n = class NUi extends ie {
  constructor(e) {
    super();
    this.lineNumber = 0;
    this.content = "";
    this.contentTruncated = false;
    this.isContextLine = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchContentMatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "content_truncated",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "is_context_line",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new NUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NUi, e, t);
  }
};
DNc = class MUi extends ie {
  constructor(e) {
    super();
    this.pattern = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RipgrepRawSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pattern",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new MUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MUi, e, t);
  }
};
U8o = class FUi extends ie {
  constructor(e) {
    super();
    this.ids = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AwaitTaskParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new FUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FUi, e, t);
  }
};
BNc = class OUi extends ie {
  constructor(e) {
    super();
    this.taskResults = [];
    this.missingTaskIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AwaitTaskResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_results",
      kind: "message",
      T: RNc,
      repeated: true
    }, {
      no: 2,
      name: "missing_task_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new OUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OUi, e, t);
  }
};
RNc = class UUi extends ie {
  constructor(e) {
    super();
    this.taskId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AwaitTaskResult.TaskResultItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "task_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: F8o
    }]);
  }
  static fromBinary(e, t) {
    return new UUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UUi, e, t);
  }
};
PNc = class $Ui extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AwaitTaskStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new $Ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Ui, e, t);
  }
};
W9n = class qUi extends ie {
  constructor(e) {
    super();
    this.read = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoReadParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "read",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new qUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qUi, e, t);
  }
};
QB = class HUi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.status = "";
    this.id = "";
    this.dependencies = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "dependencies",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new HUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HUi, e, t);
  }
};
$8o = class JUi extends ie {
  constructor(e) {
    super();
    this.todos = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoReadResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "todos",
      kind: "message",
      T: QB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new JUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JUi, e, t);
  }
};
LNc = class GUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoReadStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new GUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GUi, e, t);
  }
};
Wbt = class WUi extends ie {
  constructor(e) {
    super();
    this.todos = [];
    this.merge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoWriteParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 2,
      name: "merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new WUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WUi, e, t);
  }
};
HKe = class QUi extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.readyTaskIds = [];
    this.needsInProgressTodos = false;
    this.finalTodos = [];
    this.initialTodos = [];
    this.wasMerge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoWriteResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "ready_task_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "needs_in_progress_todos",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "final_todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 5,
      name: "initial_todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 6,
      name: "was_merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new QUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QUi, e, t);
  }
};
NNc = class jUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TodoWriteStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new jUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jUi, e, t);
  }
};
M5t = class zUi extends ie {
  constructor(e) {
    super();
    this.targetDirectory = "";
    this.ignoreGlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirV2Params";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "target_directory",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "ignore_globs",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "should_enrich_terminal_metadata",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new zUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zUi, e, t);
  }
};
F5t = class VUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directory_tree_root",
      kind: "message",
      T: MNc
    }]);
  }
  static fromBinary(e, t) {
    return new VUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VUi, e, t);
  }
};
MNc = class oSn extends ie {
  constructor(e) {
    super();
    this.absPath = "";
    this.childrenDirs = [];
    this.childrenFiles = [];
    this.childrenWereProcessed = false;
    this.fullSubtreeExtensionCounts = {};
    this.numFiles = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirV2Result.DirectoryTreeNode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "abs_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "children_dirs",
      kind: "message",
      T: oSn,
      repeated: true
    }, {
      no: 3,
      name: "children_files",
      kind: "message",
      T: FNc,
      repeated: true
    }, {
      no: 4,
      name: "children_were_processed",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "full_subtree_extension_counts",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 5
      }
    }, {
      no: 6,
      name: "num_files",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new oSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oSn, e, t);
  }
};
FNc = class KUi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirV2Result.DirectoryTreeNode.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "terminal_metadata",
      kind: "message",
      T: rPc,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new KUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KUi, e, t);
  }
};
ONc = class YUi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDirV2Stream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new YUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YUi, e, t);
  }
};
Qbt = class ZUi extends ie {
  constructor(e) {
    super();
    this.targetFile = "";
    this.charsLimit = 0;
    this.effectiveUri = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileV2Params";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "target_file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "offset",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "chars_limit",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "effective_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "enable_line_numbers",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ZUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZUi, e, t);
  }
};
O9e = class XUi extends ie {
  constructor(e) {
    super();
    this.numCharactersInRequestedRange = 0;
    this.matchingCursorRules = [];
    this.images = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileV2Result";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "contents",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "num_characters_in_requested_range",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "offset_is_bigger_than_number_of_lines_in_file",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "total_lines_in_file",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "matching_cursor_rules",
      kind: "message",
      T: rke,
      repeated: true
    }, {
      no: 6,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new XUi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XUi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XUi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XUi, e, t);
  }
};
UNc = class e$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadFileV2Stream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: Qbt,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new e$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e$i, e, t);
  }
};
O5t = class t$i extends ie {
  constructor(e) {
    super();
    this.targetDirectory = "";
    this.globPattern = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GlobFileSearchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "target_directory",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "glob_pattern",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new t$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t$i, e, t);
  }
};
Q9n = class n$i extends ie {
  constructor(e) {
    super();
    this.directories = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GlobFileSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directories",
      kind: "message",
      T: H8o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new n$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n$i, e, t);
  }
};
q8o = class i$i extends ie {
  constructor(e) {
    super();
    this.relPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GlobFileSearchResult.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rel_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new i$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i$i, e, t);
  }
};
H8o = class r$i extends ie {
  constructor(e) {
    super();
    this.absPath = "";
    this.files = [];
    this.totalFiles = 0;
    this.ripgrepTruncated = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GlobFileSearchResult.Directory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "abs_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: q8o,
      repeated: true
    }, {
      no: 3,
      name: "total_files",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "ripgrep_truncated",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new r$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r$i, e, t);
  }
};
$Nc = class s$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GlobFileSearchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new s$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s$i, e, t);
  }
};
qNc = class o$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListMcpResourcesStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new o$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o$i, e, t);
  }
};
HNc = class a$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CallMcpToolStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new a$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a$i, e, t);
  }
};
JNc = class c$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadMcpResourceStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new c$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c$i, e, t);
  }
};
GNc = class l$i extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.title = "";
    this.description = "";
    this.instructions = "";
    this.prerequisites = [];
    this.subComposerId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.Step";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "instructions",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "prerequisites",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "sub_composer_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new l$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l$i, e, t);
  }
};
WNc = class u$i extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.todos = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PlanPhase";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "todos",
      kind: "message",
      T: QB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new u$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u$i, e, t);
  }
};
JKe = class d$i extends ie {
  constructor(e) {
    super();
    this.plan = "";
    this.title = "";
    this.summary = "";
    this.steps = [];
    this.oldStr = "";
    this.newStr = "";
    this.name = "";
    this.todos = [];
    this.overview = "";
    this.isSpec = false;
    this.isProject = false;
    this.phases = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "plan",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "summary",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "steps",
      kind: "message",
      T: GNc,
      repeated: true
    }, {
      no: 5,
      name: "old_str",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "new_str",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "todos",
      kind: "message",
      T: QB,
      repeated: true
    }, {
      no: 9,
      name: "overview",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "is_spec",
      kind: "scalar",
      T: 8
    }, {
      no: 11,
      name: "is_project",
      kind: "scalar",
      T: 8
    }, {
      no: 12,
      name: "phases",
      kind: "message",
      T: WNc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new d$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d$i, e, t);
  }
};
jbt = class h$i extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    this.planUri = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "accepted",
      kind: "message",
      T: QNc,
      oneof: "result"
    }, {
      no: 2,
      name: "rejected",
      kind: "message",
      T: jNc,
      oneof: "result"
    }, {
      no: 3,
      name: "modified",
      kind: "message",
      T: zNc,
      oneof: "result"
    }, {
      no: 4,
      name: "plan_uri",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new h$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h$i, e, t);
  }
};
QNc = class m$i extends ie {
  constructor(e) {
    super();
    this.finalTodos = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanResult.Accepted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "final_todos",
      kind: "message",
      T: QB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new m$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m$i, e, t);
  }
};
jNc = class p$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanResult.Rejected";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new p$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p$i, e, t);
  }
};
zNc = class g$i extends ie {
  constructor(e) {
    super();
    this.newPlan = "";
    this.finalTodos = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanResult.Modified";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "new_plan",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "final_todos",
      kind: "message",
      T: QB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new g$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g$i, e, t);
  }
};
VNc = class f$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreatePlanStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new f$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f$i, e, t);
  }
};
j9n = class b$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadProjectParams";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new b$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b$i, e, t);
  }
};
J8o = class v$i extends ie {
  constructor(e) {
    super();
    this.plan = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadProjectResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "plan",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new v$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v$i, e, t);
  }
};
KNc = class A$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadProjectStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new A$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A$i, e, t);
  }
};
YNc = class y$i extends ie {
  constructor(e) {
    super();
    this.oldString = "";
    this.newString = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateProjectStringReplacement";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "old_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "new_string",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new y$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y$i, e, t);
  }
};
z9n = class w$i extends ie {
  constructor(e) {
    super();
    this.stringReplacements = [];
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateProjectParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "string_replacements",
      kind: "message",
      T: YNc,
      repeated: true
    }, {
      no: 2,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new w$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w$i, e, t);
  }
};
G8o = class _$i extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.updatedPlan = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateProjectResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "updated_plan",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new _$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_$i, e, t);
  }
};
ZNc = class C$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateProjectStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new C$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C$i, e, t);
  }
};
oke = class S$i extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.questions = [];
    this.runAsync = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "questions",
      kind: "message",
      T: W8o,
      repeated: true
    }, {
      no: 3,
      name: "run_async",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new S$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S$i, e, t);
  }
};
W8o = class k$i extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.prompt = "";
    this.options = [];
    this.allowMultiple = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionParams.Question";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "options",
      kind: "message",
      T: Q8o,
      repeated: true
    }, {
      no: 4,
      name: "allow_multiple",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new k$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k$i, e, t);
  }
};
Q8o = class E$i extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.label = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionParams.Option";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "label",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new E$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E$i, e, t);
  }
};
zY = class x$i extends ie {
  constructor(e) {
    super();
    this.answers = [];
    this.isAsync = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "answers",
      kind: "message",
      T: j8o,
      repeated: true
    }, {
      no: 2,
      name: "is_async",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new x$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x$i, e, t);
  }
};
j8o = class T$i extends ie {
  constructor(e) {
    super();
    this.questionId = "";
    this.selectedOptionIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionResult.Answer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "question_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "selected_option_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "freeform_text",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new T$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T$i, e, t);
  }
};
XNc = class I$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AskQuestionStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: oke
    }]);
  }
  static fromBinary(e, t) {
    return new I$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I$i, e, t);
  }
};
GKe = class D$i extends ie {
  constructor(e) {
    super();
    this.fromModeId = "";
    this.toModeId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwitchModeParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "from_mode_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "to_mode_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "explanation",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new D$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D$i, e, t);
  }
};
U5t = class B$i extends ie {
  constructor(e) {
    super();
    this.fromModeId = "";
    this.toModeId = "";
    this.autoApproved = false;
    this.userApproved = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwitchModeResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "from_mode_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "to_mode_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "auto_approved",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "user_approved",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new B$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B$i, e, t);
  }
};
eMc = class R$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwitchModeStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: GKe
    }]);
  }
  static fromBinary(e, t) {
    return new R$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R$i, e, t);
  }
};
zbt = class P$i extends ie {
  constructor(e) {
    super();
    this.actions = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComputerUseParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "actions",
      kind: "message",
      T: oPc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new P$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P$i, e, t);
  }
};
$5t = class L$i extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComputerUseResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: aPc,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: cPc,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new L$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L$i, e, t);
  }
};
tMc = class N$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComputerUseStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: zbt
    }]);
  }
  static fromBinary(e, t) {
    return new N$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N$i, e, t);
  }
};
nMc = class M$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WriteShellStdinStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: N9e
    }]);
  }
  static fromBinary(e, t) {
    return new M$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M$i, e, t);
  }
};
WKe = class F$i extends ie {
  constructor(e) {
    super();
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebFetchParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new F$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F$i, e, t);
  }
};
q5t = class O$i extends ie {
  constructor(e) {
    super();
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebFetchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "markdown",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new O$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O$i, e, t);
  }
};
iMc = class U$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WebFetchStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: WKe
    }]);
  }
  static fromBinary(e, t) {
    return new U$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U$i, e, t);
  }
};
H5t = class $$i extends ie {
  constructor(e) {
    super();
    this.summary = "";
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportBugfixResultsParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "results",
      kind: "message",
      T: u8o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($$i, e, t);
  }
};
z8o = class q$i extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportBugfixResultsResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: uPc,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: dPc,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new q$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q$i, e, t);
  }
};
rMc = class H$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportBugfixResultsStream";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "params",
      kind: "message",
      T: H5t
    }]);
  }
  static fromBinary(e, t) {
    return new H$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H$i, e, t);
  }
};
Vbt = class J$i extends ie {
  constructor(e) {
    super();
    this.serverIdentifier = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.McpAuthParams";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "server_identifier",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new J$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J$i, e, t);
  }
};
V9n = class G$i extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.McpAuthResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new G$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G$i, e, t);
  }
};
sMc = class W$i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.McpAuthStream";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new W$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W$i, e, t);
  }
};
