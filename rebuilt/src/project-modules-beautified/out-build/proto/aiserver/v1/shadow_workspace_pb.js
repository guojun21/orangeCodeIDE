"use strict";

// Module: out-build/proto/aiserver/v1/shadow_workspace_pb.js
// Offset: 3325328 (bundle byte offset)
// Size: 18475 bytes
Ka();
s8n();
qp();
Vg();
jY();
KPh = class Iji extends ie {
  constructor(e) {
    super();
    this.absolutePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwTrackModelRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Iji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Iji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Iji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Iji, e, t);
  }
};
bFc = class Dji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwTrackModelResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Dji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dji, e, t);
  }
};
YPh = class Bji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCallDiagnosticsExecutorRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diagnostics_args",
      kind: "message",
      T: r8n
    }]);
  }
  static fromBinary(e, t) {
    return new Bji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bji, e, t);
  }
};
vFc = class Rji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCallDiagnosticsExecutorResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diagnostics_result",
      kind: "message",
      T: u6o
    }]);
  }
  static fromBinary(e, t) {
    return new Rji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rji, e, t);
  }
};
ZPh = class Pji extends ie {
  constructor(e) {
    super();
    this.absolutePath = "";
    this.newContents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwWriteTextFileWithLintsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "new_contents",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Pji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pji, e, t);
  }
};
AFc = class Lji extends ie {
  constructor(e) {
    super();
    this.newLinterErrors = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwWriteTextFileWithLintsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "new_linter_errors",
      kind: "message",
      T: qte,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Lji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lji, e, t);
  }
};
XPh = class Nji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetExplicitContextRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Nji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nji, e, t);
  }
};
yFc = class Mji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetExplicitContextResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "explicit_context",
      kind: "message",
      T: _F
    }]);
  }
  static fromBinary(e, t) {
    return new Mji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mji, e, t);
  }
};
eLh = class Fji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetEnvironmentInfoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Fji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fji, e, t);
  }
};
wFc = class Oji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetEnvironmentInfoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environment_info",
      kind: "message",
      T: N9o
    }]);
  }
  static fromBinary(e, t) {
    return new Oji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Oji, e, t);
  }
};
tLh = class Uji extends ie {
  constructor(e) {
    super();
    this.absolutePaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetLinterErrorsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "absolute_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Uji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uji, e, t);
  }
};
_Fc = class $ji extends ie {
  constructor(e) {
    super();
    this.linterErrors = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetLinterErrorsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "linter_errors",
      kind: "message",
      T: aN,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $ji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $ji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $ji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($ji, e, t);
  }
};
nLh = class qji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetMcpToolsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "browser_integration_preference",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new qji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qji, e, t);
  }
};
CFc = class Hji extends ie {
  constructor(e) {
    super();
    this.tools = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwGetMcpToolsResponse";
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
    return new Hji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hji, e, t);
  }
};
iLh = class Jji extends ie {
  constructor(e) {
    super();
    this.composerId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCallClientSideV2ToolRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_call",
      kind: "message",
      T: nhe
    }, {
      no: 2,
      name: "composer_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Jji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jji, e, t);
  }
};
x6o = class Gji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCallClientSideV2ToolResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_result",
      kind: "message",
      T: VR
    }]);
  }
  static fromBinary(e, t) {
    return new Gji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gji, e, t);
  }
};
SFc = class Wji extends ie {
  constructor(e) {
    super();
    this.pathEncryptionKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "include_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "exclude_pattern",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "path_encryption_key",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "repository_info",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new Wji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wji, e, t);
  }
};
T6o = class Qji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "glob_filter",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "not_glob_filter",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Qji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qji, e, t);
  }
};
rLh = class jji extends ie {
  constructor(e) {
    super();
    this.accessToken = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwProvideTemporaryAccessTokenRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "access_token",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new jji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jji, e, t);
  }
};
kFc = class zji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwProvideTemporaryAccessTokenResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new zji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zji, e, t);
  }
};
EFc = class Vji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ShadowHealthCheckRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Vji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vji, e, t);
  }
};
xFc = class Kji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ShadowHealthCheckResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Kji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kji, e, t);
  }
};
sLh = class Yji extends ie {
  constructor(e) {
    super();
    this.pathEncryptionKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwSyncIndexRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository_info",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "path_encryption_key",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "indexing_progress_threshold",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Yji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yji, e, t);
  }
};
TFc = class Zji extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SwSyncIndexResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Zji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zji, e, t);
  }
};
oLh = class Xji extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.includeQuickFixes = false;
    this.doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: aLh,
      repeated: true
    }, {
      no: 2,
      name: "include_quick_fixes",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Xji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xji, e, t);
  }
};
aLh = class ezi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.initialContent = "";
    this.finalContent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeRequest.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "initial_content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "final_content",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model",
      kind: "message",
      T: cLh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ezi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ezi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ezi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ezi, e, t);
  }
};
cLh = class tzi extends ie {
  constructor(e) {
    super();
    this.ranges = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeRequest.File.RangeCollection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ranges",
      kind: "message",
      T: lLh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new tzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tzi, e, t);
  }
};
lLh = class nzi extends ie {
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
    this.typeName = "aiserver.v1.GetLintsForChangeRequest.File.IRange";
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
    return new nzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nzi, e, t);
  }
};
Z5t = class izi extends ie {
  constructor(e) {
    super();
    this.lints = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "lints",
      kind: "message",
      T: IFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new izi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new izi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new izi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(izi, e, t);
  }
};
IFc = class rzi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.severity = "";
    this.relativeWorkspacePath = "";
    this.startLineNumberOneIndexed = 0;
    this.startColumnOneIndexed = 0;
    this.endLineNumberInclusiveOneIndexed = 0;
    this.endColumnOneIndexed = 0;
    this.quickFixes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeResponse.Lint";
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
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "start_line_number_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "start_column_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "end_line_number_inclusive_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "end_column_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 9,
      name: "quick_fixes",
      kind: "message",
      T: DFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new rzi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rzi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rzi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rzi, e, t);
  }
};
DFc = class szi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.kind = "";
    this.isPreferred = false;
    this.edits = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "kind",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_preferred",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "edits",
      kind: "message",
      T: BFc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new szi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new szi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new szi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(szi, e, t);
  }
};
BFc = class ozi extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    this.startLineNumberOneIndexed = 0;
    this.startColumnOneIndexed = 0;
    this.endLineNumberInclusiveOneIndexed = 0;
    this.endColumnOneIndexed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line_number_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "start_column_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "end_line_number_inclusive_one_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "end_column_one_indexed",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new ozi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ozi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ozi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ozi, e, t);
  }
};
