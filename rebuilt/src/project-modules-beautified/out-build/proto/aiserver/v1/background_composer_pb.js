"use strict";

// Module: out-build/proto/aiserver/v1/background_composer_pb.js
// Offset: 27728395 (bundle byte offset)
// Size: 194939 bytes
Ka();
qp();
t4A();
n4A();
s4A();
Jk();
cv();
iM();
Vg();
jY();
o4A();
jKe();
uR();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.RUNNING = 1] = "RUNNING";
  n[n.FINISHED = 2] = "FINISHED";
  n[n.ERROR = 3] = "ERROR";
  n[n.CREATING = 4] = "CREATING";
  n[n.EXPIRED = 5] = "EXPIRED";
})(sl ||= {});
v.util.setEnumType(sl, "aiserver.v1.BackgroundComposerStatus", [{
  no: 0,
  name: "BACKGROUND_COMPOSER_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "BACKGROUND_COMPOSER_STATUS_RUNNING"
}, {
  no: 2,
  name: "BACKGROUND_COMPOSER_STATUS_FINISHED"
}, {
  no: 3,
  name: "BACKGROUND_COMPOSER_STATUS_ERROR"
}, {
  no: 4,
  name: "BACKGROUND_COMPOSER_STATUS_CREATING"
}, {
  no: 5,
  name: "BACKGROUND_COMPOSER_STATUS_EXPIRED"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.RUNNING = 1] = "RUNNING";
  n[n.IDLE = 2] = "IDLE";
  n[n.ERROR = 3] = "ERROR";
  n[n.ARCHIVED = 4] = "ARCHIVED";
  n[n.EXPIRED = 5] = "EXPIRED";
  n[n.NOT_YET_STARTED = 6] = "NOT_YET_STARTED";
})(uv ||= {});
v.util.setEnumType(uv, "aiserver.v1.CloudAgentWorkflowStatus", [{
  no: 0,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_RUNNING"
}, {
  no: 2,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_IDLE"
}, {
  no: 3,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_ERROR"
}, {
  no: 4,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_ARCHIVED"
}, {
  no: 5,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_EXPIRED"
}, {
  no: 6,
  name: "CLOUD_AGENT_WORKFLOW_STATUS_NOT_YET_STARTED"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.EDITOR = 1] = "EDITOR";
  n[n.SLACK = 2] = "SLACK";
  n[n.WEBSITE = 3] = "WEBSITE";
  n[n.LINEAR = 4] = "LINEAR";
  n[n.IOS_APP = 5] = "IOS_APP";
  n[n.API = 6] = "API";
  n[n.GITHUB = 7] = "GITHUB";
  n[n.CLI = 8] = "CLI";
  n[n.GITHUB_CI_AUTOFIX = 9] = "GITHUB_CI_AUTOFIX";
  n[n.GITLAB = 10] = "GITLAB";
  n[n.ENVIRONMENT_SETUP_WEB = 11] = "ENVIRONMENT_SETUP_WEB";
  n[n.GRIND_WEB = 12] = "GRIND_WEB";
  n[n.BUGBOT_AUTOFIX = 13] = "BUGBOT_AUTOFIX";
  n[n.AUTOMATIONS = 14] = "AUTOMATIONS";
})(dR ||= {});
v.util.setEnumType(dR, "aiserver.v1.BackgroundComposerSource", [{
  no: 0,
  name: "BACKGROUND_COMPOSER_SOURCE_UNSPECIFIED"
}, {
  no: 1,
  name: "BACKGROUND_COMPOSER_SOURCE_EDITOR"
}, {
  no: 2,
  name: "BACKGROUND_COMPOSER_SOURCE_SLACK"
}, {
  no: 3,
  name: "BACKGROUND_COMPOSER_SOURCE_WEBSITE"
}, {
  no: 4,
  name: "BACKGROUND_COMPOSER_SOURCE_LINEAR"
}, {
  no: 5,
  name: "BACKGROUND_COMPOSER_SOURCE_IOS_APP"
}, {
  no: 6,
  name: "BACKGROUND_COMPOSER_SOURCE_API"
}, {
  no: 7,
  name: "BACKGROUND_COMPOSER_SOURCE_GITHUB"
}, {
  no: 8,
  name: "BACKGROUND_COMPOSER_SOURCE_CLI"
}, {
  no: 9,
  name: "BACKGROUND_COMPOSER_SOURCE_GITHUB_CI_AUTOFIX"
}, {
  no: 10,
  name: "BACKGROUND_COMPOSER_SOURCE_GITLAB"
}, {
  no: 11,
  name: "BACKGROUND_COMPOSER_SOURCE_ENVIRONMENT_SETUP_WEB"
}, {
  no: 12,
  name: "BACKGROUND_COMPOSER_SOURCE_GRIND_WEB"
}, {
  no: 13,
  name: "BACKGROUND_COMPOSER_SOURCE_BUGBOT_AUTOFIX"
}, {
  no: 14,
  name: "BACKGROUND_COMPOSER_SOURCE_AUTOMATIONS"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USER = 1] = "USER";
  n[n.SERVICE_ACCOUNT = 2] = "SERVICE_ACCOUNT";
})(tAi ||= {});
v.util.setEnumType(tAi, "aiserver.v1.OwnerType", [{
  no: 0,
  name: "OWNER_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "OWNER_TYPE_USER"
}, {
  no: 2,
  name: "OWNER_TYPE_SERVICE_ACCOUNT"
}]);
(function (n) {
  n[n.PR_STATUS_UNSPECIFIED = 0] = "PR_STATUS_UNSPECIFIED";
  n[n.PR_STATUS_OPEN = 1] = "PR_STATUS_OPEN";
  n[n.PR_STATUS_DRAFT = 2] = "PR_STATUS_DRAFT";
  n[n.PR_STATUS_MERGED = 3] = "PR_STATUS_MERGED";
  n[n.PR_STATUS_CLOSED = 4] = "PR_STATUS_CLOSED";
})(vba ||= {});
v.util.setEnumType(vba, "aiserver.v1.PRStatus", [{
  no: 0,
  name: "PR_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "PR_STATUS_OPEN"
}, {
  no: 2,
  name: "PR_STATUS_DRAFT"
}, {
  no: 3,
  name: "PR_STATUS_MERGED"
}, {
  no: 4,
  name: "PR_STATUS_CLOSED"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PARENT = 1] = "PARENT";
  n[n.CHILD = 2] = "CHILD";
})(nAi ||= {});
v.util.setEnumType(nAi, "aiserver.v1.EnsembleStatus", [{
  no: 0,
  name: "ENSEMBLE_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "ENSEMBLE_STATUS_PARENT"
}, {
  no: 2,
  name: "ENSEMBLE_STATUS_CHILD"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SINGLE_AGENT = 1] = "SINGLE_AGENT";
  n[n.FANOUT_VOTING = 2] = "FANOUT_VOTING";
  n[n.PAIRWISE_TOURNAMENT = 3] = "PAIRWISE_TOURNAMENT";
})(Aba ||= {});
v.util.setEnumType(Aba, "aiserver.v1.ParallelAgentWorkflowSynthesisStrategy", [{
  no: 0,
  name: "PARALLEL_AGENT_WORKFLOW_SYNTHESIS_STRATEGY_UNSPECIFIED"
}, {
  no: 1,
  name: "PARALLEL_AGENT_WORKFLOW_SYNTHESIS_STRATEGY_SINGLE_AGENT"
}, {
  no: 2,
  name: "PARALLEL_AGENT_WORKFLOW_SYNTHESIS_STRATEGY_FANOUT_VOTING"
}, {
  no: 3,
  name: "PARALLEL_AGENT_WORKFLOW_SYNTHESIS_STRATEGY_PAIRWISE_TOURNAMENT"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PLAN = 1] = "PLAN";
  n[n.EXECUTE = 2] = "EXECUTE";
})(iAi ||= {});
v.util.setEnumType(iAi, "aiserver.v1.PlanFollowupType", [{
  no: 0,
  name: "PLAN_FOLLOWUP_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "PLAN_FOLLOWUP_TYPE_PLAN"
}, {
  no: 2,
  name: "PLAN_FOLLOWUP_TYPE_EXECUTE"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NONE = 1] = "NONE";
  n[n.NO_AUTH_TOKEN = 2] = "NO_AUTH_TOKEN";
  n[n.APP_NOT_INSTALLED = 3] = "APP_NOT_INSTALLED";
  n[n.USER_NO_ACCESS = 4] = "USER_NO_ACCESS";
  n[n.APP_INSUFFICIENT_PERMS = 5] = "APP_INSUFFICIENT_PERMS";
  n[n.PUBLIC_REPO = 6] = "PUBLIC_REPO";
})(dV ||= {});
v.util.setEnumType(dV, "aiserver.v1.GithubAccessErrorType", [{
  no: 0,
  name: "GITHUB_ACCESS_ERROR_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "GITHUB_ACCESS_ERROR_TYPE_NONE"
}, {
  no: 2,
  name: "GITHUB_ACCESS_ERROR_TYPE_NO_AUTH_TOKEN"
}, {
  no: 3,
  name: "GITHUB_ACCESS_ERROR_TYPE_APP_NOT_INSTALLED"
}, {
  no: 4,
  name: "GITHUB_ACCESS_ERROR_TYPE_USER_NO_ACCESS"
}, {
  no: 5,
  name: "GITHUB_ACCESS_ERROR_TYPE_APP_INSUFFICIENT_PERMS"
}, {
  no: 6,
  name: "GITHUB_ACCESS_ERROR_TYPE_PUBLIC_REPO"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PERSONAL = 1] = "PERSONAL";
  n[n.TEAM = 2] = "TEAM";
})(rAi ||= {});
v.util.setEnumType(rAi, "aiserver.v1.EnvironmentType", [{
  no: 0,
  name: "ENVIRONMENT_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "ENVIRONMENT_TYPE_PERSONAL"
}, {
  no: 2,
  name: "ENVIRONMENT_TYPE_TEAM"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ALWAYS = 1] = "ALWAYS";
  n[n.SINGLE = 2] = "SINGLE";
  n[n.NEVER = 3] = "NEVER";
})(sAi ||= {});
v.util.setEnumType(sAi, "aiserver.v1.AutoCreatePrSetting", [{
  no: 0,
  name: "AUTO_CREATE_PR_SETTING_UNSPECIFIED"
}, {
  no: 1,
  name: "AUTO_CREATE_PR_SETTING_ALWAYS"
}, {
  no: 2,
  name: "AUTO_CREATE_PR_SETTING_SINGLE"
}, {
  no: 3,
  name: "AUTO_CREATE_PR_SETTING_NEVER"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.IOS = 1] = "IOS";
  n[n.ANDROID = 2] = "ANDROID";
  n[n.WEB = 3] = "WEB";
})(VSt ||= {});
v.util.setEnumType(VSt, "aiserver.v1.PushPlatform", [{
  no: 0,
  name: "PUSH_PLATFORM_UNSPECIFIED"
}, {
  no: 1,
  name: "PUSH_PLATFORM_IOS"
}, {
  no: 2,
  name: "PUSH_PLATFORM_ANDROID"
}, {
  no: 3,
  name: "PUSH_PLATFORM_WEB"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USER_MESSAGE = 1] = "USER_MESSAGE";
  n[n.PLAN_START = 2] = "PLAN_START";
  n[n.PLAN_EXECUTE = 3] = "PLAN_EXECUTE";
})(yba ||= {});
v.util.setEnumType(yba, "aiserver.v1.StartingMessageType", [{
  no: 0,
  name: "STARTING_MESSAGE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "STARTING_MESSAGE_TYPE_USER_MESSAGE"
}, {
  no: 2,
  name: "STARTING_MESSAGE_TYPE_PLAN_START"
}, {
  no: 3,
  name: "STARTING_MESSAGE_TYPE_PLAN_EXECUTE"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ALL = 1] = "ALL";
  n[n.IN_USE = 2] = "IN_USE";
  n[n.IDLE = 3] = "IDLE";
})(oAi ||= {});
v.util.setEnumType(oAi, "aiserver.v1.PrivateWorkerStatusFilter", [{
  no: 0,
  name: "PRIVATE_WORKER_STATUS_FILTER_UNSPECIFIED"
}, {
  no: 1,
  name: "PRIVATE_WORKER_STATUS_FILTER_ALL"
}, {
  no: 2,
  name: "PRIVATE_WORKER_STATUS_FILTER_IN_USE"
}, {
  no: 3,
  name: "PRIVATE_WORKER_STATUS_FILTER_IDLE"
}]);
hWg = class hgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.replace = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateBackgroundComposerEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "replace",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new hgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hgs, e, t);
  }
};
mWg = class mgs extends ie {
  constructor(e) {
    super();
    this.applied = 0;
    this.removed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateBackgroundComposerEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "applied",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "removed",
      kind: "scalar",
      T: 13
    }]);
  }
  static fromBinary(e, t) {
    return new mgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mgs, e, t);
  }
};
aAi = class pgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.excludeBeforeAfterDiffs = false;
    this.committedOnly = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetOptimizedDiffDetailsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "exclude_before_after_diffs",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "committed_only",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new pgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pgs, e, t);
  }
};
cAi = class ggs extends ie {
  constructor(e) {
    super();
    this.submoduleDiffs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetOptimizedDiffDetailsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff",
      kind: "message",
      T: XH
    }, {
      no: 2,
      name: "submodule_diffs",
      kind: "message",
      T: pWg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ggs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ggs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ggs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ggs, e, t);
  }
};
pWg = class fgs extends ie {
  constructor(e) {
    super();
    this.relativePath = "";
    this.errored = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetOptimizedDiffDetailsResponse.SubmoduleDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff",
      kind: "message",
      T: XH
    }, {
      no: 3,
      name: "errored",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new fgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fgs, e, t);
  }
};
gWg = class bgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NotifyBackgroundComposerShownRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new bgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bgs, e, t);
  }
};
fWg = class vgs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NotifyBackgroundComposerShownResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new vgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vgs, e, t);
  }
};
bWg = class Ags extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.newName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RenameBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "new_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Ags().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ags().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ags().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ags, e, t);
  }
};
vWg = class ygs extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RenameBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ygs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ygs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ygs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ygs, e, t);
  }
};
AWg = class wgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new wgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wgs, e, t);
  }
};
yWg = class _gs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RefreshGithubAccessTokenInBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new _gs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _gs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _gs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_gs, e, t);
  }
};
a4A = class Cgs extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.richText = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerFollowupContent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "rich_text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Cgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cgs, e, t);
  }
};
wWg = class Sgs extends ie {
  constructor(e) {
    super();
    this.includeSecrets = false;
    this.optimisticPrewarming = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateBackgroundComposerPodRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "devcontainer_starting_point",
      kind: "message",
      T: dAi
    }, {
      no: 2,
      name: "include_secrets",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "force_cluster",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "force_machine_template",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 32,
      name: "client_ip",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "optimistic_prewarming",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Sgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sgs, e, t);
  }
};
_Wg = class kgs extends ie {
  constructor(e) {
    super();
    this.podId = "";
    this.workspaceRootPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateBackgroundComposerPodResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workspace_root_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kgs, e, t);
  }
};
CWg = class Egs extends ie {
  constructor(e) {
    super();
    this.podId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerPodRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "last_event_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Egs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Egs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Egs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Egs, e, t);
  }
};
SWg = class xgs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerPodResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "event",
      kind: "message",
      T: kWg
    }, {
      no: 2,
      name: "updated_status",
      kind: "message",
      T: Kvi
    }]);
  }
  static fromBinary(e, t) {
    return new xgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xgs, e, t);
  }
};
kWg = class Tgs extends ie {
  constructor(e) {
    super();
    this.eventId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerPodResponse.Event";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "event_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "event",
      kind: "message",
      T: ssu
    }]);
  }
  static fromBinary(e, t) {
    return new Tgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tgs, e, t);
  }
};
EWg = class Igs extends ie {
  constructor(e) {
    super();
    this.podId = "";
    this.visibility = rX.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateBackgroundComposerPodSnapshotRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "visibility",
      kind: "enum",
      T: v.getEnumType(rX)
    }, {
      no: 3,
      name: "bc_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Igs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Igs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Igs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Igs, e, t);
  }
};
xWg = class Dgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateBackgroundComposerPodSnapshotResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Dgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dgs, e, t);
  }
};
TWg = class Bgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.visibility = rX.UNSPECIFIED;
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "visibility",
      kind: "enum",
      T: v.getEnumType(rX)
    }, {
      no: 3,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bgs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USER = 1] = "USER";
  n[n.REPO_READ_WRITE = 2] = "REPO_READ_WRITE";
  n[n.PUBLIC = 4] = "PUBLIC";
  n[n.TEAM = 5] = "TEAM";
})(rX ||= {});
v.util.setEnumType(rX, "aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityRequest.Visibility", [{
  no: 0,
  name: "VISIBILITY_UNSPECIFIED"
}, {
  no: 1,
  name: "VISIBILITY_USER"
}, {
  no: 2,
  name: "VISIBILITY_REPO_READ_WRITE"
}, {
  no: 4,
  name: "VISIBILITY_PUBLIC"
}, {
  no: 5,
  name: "VISIBILITY_TEAM"
}]);
IWg = class Rgs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChangeBackgroundComposerSnapshotVisibilityResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Rgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rgs, e, t);
  }
};
DWg = class Pgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerSnapshotInfoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Pgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pgs, e, t);
  }
};
BWg = class Lgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.visibility = rX.UNSPECIFIED;
    this.repoUrl = "";
    this.createdAtMs = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerSnapshotInfoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "visibility",
      kind: "enum",
      T: v.getEnumType(rX)
    }, {
      no: 3,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "created_at_ms",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new Lgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lgs, e, t);
  }
};
RWg = class Ngs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerSnapshotsByBcIdRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "use_primary",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "limit",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ngs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ngs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ngs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ngs, e, t);
  }
};
PWg = class Mgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.visibility = rX.UNSPECIFIED;
    this.createdAtMs = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerSnapshotSummary";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "visibility",
      kind: "enum",
      T: v.getEnumType(rX)
    }, {
      no: 3,
      name: "created_at_ms",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new Mgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mgs, e, t);
  }
};
LWg = class Fgs extends ie {
  constructor(e) {
    super();
    this.snapshots = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerSnapshotsByBcIdResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshots",
      kind: "message",
      T: PWg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Fgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fgs, e, t);
  }
};
NWg = class Ogs extends ie {
  constructor(e) {
    super();
    this.bcIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "use_primary",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ogs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ogs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ogs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ogs, e, t);
  }
};
MWg = class Ugs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerSnapshotStatusByBcId";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "snapshot_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "visibility",
      kind: "enum",
      T: v.getEnumType(rX),
      opt: true
    }, {
      no: 4,
      name: "created_at_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ugs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ugs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ugs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ugs, e, t);
  }
};
FWg = class $gs extends ie {
  constructor(e) {
    super();
    this.snapshotStatuses = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerSnapshotStatusesByBcIdsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_statuses",
      kind: "message",
      T: MWg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $gs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $gs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $gs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($gs, e, t);
  }
};
OWg = class qgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerSnapshotStateRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qgs, e, t);
  }
};
UWg = class Hgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.state = G$e.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerSnapshotStateResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "state",
      kind: "enum",
      T: v.getEnumType(G$e)
    }, {
      no: 3,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Hgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hgs, e, t);
  }
};
$Wg = class Jgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WatchBackgroundComposerSnapshotStateRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Jgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jgs, e, t);
  }
};
qWg = class Ggs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.state = G$e.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WatchBackgroundComposerSnapshotStateResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "state",
      kind: "enum",
      T: v.getEnumType(G$e)
    }, {
      no: 3,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ggs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ggs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ggs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ggs, e, t);
  }
};
HWg = class Wgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerChangesHashRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Wgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wgs, e, t);
  }
};
JWg = class Qgs extends ie {
  constructor(e) {
    super();
    this.hash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerChangesHashResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Qgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qgs, e, t);
  }
};
GWg = class jgs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerDiffDetailsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new jgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jgs, e, t);
  }
};
WWg = class zgs extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.originalContent = "";
    this.modifiedContent = "";
    this.fullPath = "";
    this.baseRef = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerFullDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "original_content",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "modified_content",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "submodule_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "git_diff",
      kind: "message",
      T: XH
    }, {
      no: 6,
      name: "full_path",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "base_ref",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zgs, e, t);
  }
};
QWg = class Vgs extends ie {
  constructor(e) {
    super();
    this.branchName = "";
    this.baseBranch = "";
    this.diffs = [];
    this.gitDiffs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerDiffDetailsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "diffs",
      kind: "message",
      T: WWg,
      repeated: true
    }, {
      no: 4,
      name: "git_diffs",
      kind: "message",
      T: XH,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Vgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vgs, e, t);
  }
};
jWg = class Kgs extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.ownerType = tAi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OwnerIdentifier";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "owner_type",
      kind: "enum",
      T: v.getEnumType(tAi)
    }]);
  }
  static fromBinary(e, t) {
    return new Kgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kgs, e, t);
  }
};
csu = class Ygs extends ie {
  constructor(e) {
    super();
    this.owners = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OwnerFilter";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "owners",
      kind: "message",
      T: jWg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ygs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ygs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ygs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ygs, e, t);
  }
};
lsu = class Zgs extends ie {
  constructor(e) {
    super();
    this.includeTeamWide = false;
    this.includeDiff = false;
    this.bcIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDetailedBackgroundComposersRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "include_team_wide",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "bc_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "n",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "include_diff",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "cursor",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "bc_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 7,
      name: "owner_filter",
      kind: "message",
      T: csu,
      opt: true
    }, {
      no: 8,
      name: "repo_url_prefix",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "pr_url",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Zgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zgs, e, t);
  }
};
zWg = class Xgs extends ie {
  constructor(e) {
    super();
    this.composers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListDetailedBackgroundComposersResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composers",
      kind: "message",
      T: Bmn,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Xgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xgs, e, t);
  }
};
VWg = class efs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.source = dR.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PauseBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR)
    }]);
  }
  static fromBinary(e, t) {
    return new efs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new efs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new efs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(efs, e, t);
  }
};
KWg = class tfs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PauseBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new tfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tfs, e, t);
  }
};
YWg = class nfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.unarchive = false;
    this.onlyNotifyRunner = false;
    this.source = dR.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ArchiveBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "unarchive",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "only_notify_runner",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR)
    }]);
  }
  static fromBinary(e, t) {
    return new nfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nfs, e, t);
  }
};
ZWg = class ifs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ArchiveBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new ifs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ifs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ifs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ifs, e, t);
  }
};
XWg = class rfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ResumeBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new rfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rfs, e, t);
  }
};
eQg = class sfs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ResumeBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new sfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sfs, e, t);
  }
};
wba = class ofs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.commit = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCursorServerUrlRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "commit",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "connection_token",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ofs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ofs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ofs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ofs, e, t);
  }
};
tQg = class afs extends ie {
  constructor(e) {
    super();
    this.host = "";
    this.port = 0;
    this.connectionToken = "";
    this.headers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCursorServerUrlResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "host",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "port",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "connection_token",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "headers",
      kind: "message",
      T: nQg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new afs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new afs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new afs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(afs, e, t);
  }
};
nQg = class cfs extends ie {
  constructor(e) {
    super();
    this.key = "";
    this.value = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCursorServerUrlResponse.Header";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "key",
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
    return new cfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cfs, e, t);
  }
};
iQg = class lfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.commit = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WarmCursorServerDownloadRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "commit",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new lfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lfs, e, t);
  }
};
rQg = class ufs extends ie {
  constructor(e) {
    super();
    this.alreadyDownloaded = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WarmCursorServerDownloadResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "already_downloaded",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new ufs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ufs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ufs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ufs, e, t);
  }
};
sQg = class dfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MakePRBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workflow_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new dfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dfs, e, t);
  }
};
usu = class hfs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.branchName = "";
    this.hasCommits = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MakePRBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "has_commits",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "owner",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "repo",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new hfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hfs, e, t);
  }
};
oQg = class mfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.agentStateBlobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OpenPRBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "base_branch",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "draft",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 6,
      name: "open_as_cursor_github_app",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "skip_reviewer_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "agent_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 9,
      name: "workflow_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new mfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mfs, e, t);
  }
};
dsu = class pfs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.prNumber = 0;
    this.branchName = "";
    this.baseBranch = "";
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OpenPRBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pr_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new pfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pfs, e, t);
  }
};
lAi = class gfs extends ie {
  constructor(e) {
    super();
    this.n = 0;
    this.includeTeamWide = false;
    this.additionalRepoUrls = [];
    this.includeStatus = false;
    this.includeSources = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposersRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "n",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "include_team_wide",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "bc_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "preferred_repo_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "additional_repo_urls",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "include_status",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "include_sources",
      kind: "enum",
      T: v.getEnumType(dR),
      repeated: true
    }, {
      no: 8,
      name: "owner_filter",
      kind: "message",
      T: csu,
      opt: true
    }, {
      no: 9,
      name: "last_message_activity_at_ms_offset",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 10,
      name: "include_archived",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gfs, e, t);
  }
};
uAi = class ffs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.createdAtMs = 0;
    this.updatedAtMs = 0;
    this.workspaceRootPath = "";
    this.isOwnedByDifferentTeamMember = false;
    this.name = "";
    this.branchName = "";
    this.hasStartedVm = false;
    this.repoUrl = "";
    this.isArchived = false;
    this.nId = "";
    this.isKilled = false;
    this.status = sl.UNSPECIFIED;
    this.isUnread = false;
    this.source = dR.UNSPECIFIED;
    this.githubIssueId = "";
    this.slackChannelId = "";
    this.slackMessageTimestamp = "";
    this.slackTeamId = "";
    this.linearIssueId = "";
    this.linearOrgId = "";
    this.promptGroupId = "";
    this.prUrl = "";
    this.isPrMerged = false;
    this.triggeredPrincipalType = "";
    this.triggeredPrincipalId = "";
    this.visibility = "";
    this.ensembleStatus = nAi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "created_at_ms",
      kind: "scalar",
      T: 1
    }, {
      no: 20,
      name: "updated_at_ms",
      kind: "scalar",
      T: 1
    }, {
      no: 3,
      name: "workspace_root_path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "is_owned_by_different_team_member",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "has_started_vm",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "is_archived",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "n_id",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "is_killed",
      kind: "scalar",
      T: 8
    }, {
      no: 12,
      name: "status",
      kind: "enum",
      T: v.getEnumType(sl)
    }, {
      no: 13,
      name: "is_unread",
      kind: "scalar",
      T: 8
    }, {
      no: 14,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR)
    }, {
      no: 24,
      name: "github_issue_id",
      kind: "scalar",
      T: 9
    }, {
      no: 15,
      name: "slack_channel_id",
      kind: "scalar",
      T: 9
    }, {
      no: 16,
      name: "slack_message_timestamp",
      kind: "scalar",
      T: 9
    }, {
      no: 17,
      name: "slack_team_id",
      kind: "scalar",
      T: 9
    }, {
      no: 18,
      name: "linear_issue_id",
      kind: "scalar",
      T: 9
    }, {
      no: 19,
      name: "linear_org_id",
      kind: "scalar",
      T: 9
    }, {
      no: 21,
      name: "prompt_group_id",
      kind: "scalar",
      T: 9
    }, {
      no: 22,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 23,
      name: "is_pr_merged",
      kind: "scalar",
      T: 8
    }, {
      no: 25,
      name: "lines_added",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 26,
      name: "lines_removed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 27,
      name: "files_changed",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 28,
      name: "model_details",
      kind: "message",
      T: Yf,
      opt: true
    }, {
      no: 29,
      name: "triggered_principal_type",
      kind: "scalar",
      T: 9
    }, {
      no: 30,
      name: "triggered_principal_id",
      kind: "scalar",
      T: 9
    }, {
      no: 31,
      name: "visibility",
      kind: "scalar",
      T: 9
    }, {
      no: 32,
      name: "ensemble_status",
      kind: "enum",
      T: v.getEnumType(nAi)
    }, {
      no: 33,
      name: "workflow_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 34,
      name: "agent_session_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 35,
      name: "kickoff_message_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 36,
      name: "grind_phase",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 37,
      name: "commit_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 38,
      name: "latest_commit_sha",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 39,
      name: "latest_commit_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 40,
      name: "last_message_activity_at_ms",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 41,
      name: "owning_service_account",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 42,
      name: "owning_service_account_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 43,
      name: "pr_status",
      kind: "enum",
      T: v.getEnumType(vba),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ffs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ffs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ffs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ffs, e, t);
  }
};
hsu = class bfs extends ie {
  constructor(e) {
    super();
    this.composers = [];
    this.didLoadStatus = false;
    this.hasMore = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposersResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composers",
      kind: "message",
      T: uAi,
      repeated: true
    }, {
      no: 2,
      name: "did_load_status",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "has_more",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "next_page_offset",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new bfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bfs, e, t);
  }
};
dAi = class vfs extends ie {
  constructor(e) {
    super();
    this.url = "";
    this.ref = "";
    this.userExtensions = [];
    this.cursorServerCommit = "";
    this.environmentJsonOverride = "";
    this.dontAllowReadingEnvironmentJsonFromDatabase = false;
    this.skipBuildCaches = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DevcontainerStartingPoint";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "ref",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "user_extensions",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "cursor_server_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "environment_json_override",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "git_diff_to_apply",
      kind: "message",
      T: XH
    }, {
      no: 9,
      name: "dont_allow_reading_environment_json_from_database",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "skip_build_caches",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new vfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vfs, e, t);
  }
};
msu = class Afs extends ie {
  constructor(e) {
    super();
    this.timeBudgetMs = Eo.zero;
    this.phase = hAi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GrindModeConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "time_budget_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "start_time_unix_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 3,
      name: "phase",
      kind: "enum",
      T: v.getEnumType(hAi)
    }, {
      no: 4,
      name: "auto_proceed_after_planning",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "time_budget_seconds",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 6,
      name: "grind_prompt_calibrate_effort",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Afs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Afs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Afs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Afs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PLANNING = 1] = "PLANNING";
  n[n.EXECUTING = 2] = "EXECUTING";
  n[n.CONTROLLER = 3] = "CONTROLLER";
})(hAi ||= {});
v.util.setEnumType(hAi, "aiserver.v1.GrindModeConfig.Phase", [{
  no: 0,
  name: "PHASE_UNSPECIFIED"
}, {
  no: 1,
  name: "PHASE_PLANNING"
}, {
  no: 2,
  name: "PHASE_EXECUTING"
}, {
  no: 3,
  name: "PHASE_CONTROLLER"
}]);
c4A = class yfs extends ie {
  constructor(e) {
    super();
    this.noToolTurnStreak = 0;
    this.finalSummaryRequested = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GrindModeTrackingState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "no_tool_turn_streak",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "pending_done_token",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "final_summary_requested",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "start_time_unix_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new yfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yfs, e, t);
  }
};
_ba = class wfs extends ie {
  constructor(e) {
    super();
    this.snapshotNameOrId = "";
    this.prompt = "";
    this.richPrompt = "";
    this.files = [];
    this.additionalModelDetails = [];
    this.requestedModels = [];
    this.snapshotWorkspaceRootPath = "";
    this.startForAuthIdOnTeam = "";
    this.autoBranch = false;
    this.returnImmediately = false;
    this.images = [];
    this.conversationHistory = [];
    this.documentationIdentifiers = [];
    this.externalLinks = [];
    this.bcId = "";
    this.preFetchedBlobs = [];
    this.labels = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartBackgroundComposerFromSnapshotRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_name_or_id",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "devcontainer_starting_point",
      kind: "message",
      T: dAi
    }, {
      no: 2,
      name: "prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 17,
      name: "rich_prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "files",
      kind: "message",
      T: aQg,
      repeated: true
    }, {
      no: 4,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 16,
      name: "additional_model_details",
      kind: "message",
      T: Yf,
      repeated: true
    }, {
      no: 58,
      name: "requested_models",
      kind: "message",
      T: lke,
      repeated: true
    }, {
      no: 5,
      name: "repository_info",
      kind: "message",
      T: UQg
    }, {
      no: 6,
      name: "snapshot_workspace_root_path",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "start_for_auth_id_on_team",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "auto_branch",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "return_immediately",
      kind: "scalar",
      T: 8
    }, {
      no: 12,
      name: "force_vm_backend",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 15,
      name: "force_cluster",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 29,
      name: "force_machine_template",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 14,
      name: "repo_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 18,
      name: "conversation_history",
      kind: "message",
      T: Qw,
      repeated: true
    }, {
      no: 23,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }, {
      no: 19,
      name: "documentation_identifiers",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 20,
      name: "use_web",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 21,
      name: "external_links",
      kind: "message",
      T: s5t,
      repeated: true
    }, {
      no: 22,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 24,
      name: "slack_channel_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 25,
      name: "slack_message_timestamp",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 27,
      name: "slack_team_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 28,
      name: "linear_issue_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 40,
      name: "github_issue_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 26,
      name: "add_initial_message_to_responses",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 30,
      name: "linear_org_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 33,
      name: "linear_issue_identifier",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 31,
      name: "base_branch",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 38,
      name: "custom_branch_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 32,
      name: "client_ip",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 34,
      name: "prompt_group_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 53,
      name: "should_synthesize",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 35,
      name: "pod_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 36,
      name: "wait_on_branch_name",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 37,
      name: "auto_create_pr",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 39,
      name: "webhook_config",
      kind: "message",
      T: cQg,
      opt: true
    }, {
      no: 41,
      name: "starting_message_type",
      kind: "enum",
      T: v.getEnumType(yba),
      opt: true
    }, {
      no: 42,
      name: "open_as_cursor_github_app",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 43,
      name: "skip_reviewer_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 44,
      name: "conversation_action",
      kind: "message",
      T: SF,
      opt: true
    }, {
      no: 45,
      name: "test_mode_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 60,
      name: "skip_user_install_commands_and_cloud_testing",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 46,
      name: "agent_session_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 47,
      name: "conversation_state",
      kind: "message",
      T: vk,
      opt: true
    }, {
      no: 48,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }, {
      no: 49,
      name: "kickoff_message_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 50,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 51,
      name: "enable_setup_vm_environment_tool",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 52,
      name: "grind_mode_config",
      kind: "message",
      T: msu,
      opt: true
    }, {
      no: 73,
      name: "automation_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 55,
      name: "use_private_worker",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 59,
      name: "labels",
      kind: "message",
      T: Lsu,
      repeated: true
    }, {
      no: 56,
      name: "force_non_chargeable",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 57,
      name: "pr_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 74,
      name: "egress_policy",
      kind: "message",
      T: lQg,
      opt: true
    }, {
      no: 75,
      name: "effort_mode",
      kind: "enum",
      T: v.getEnumType(e6n),
      opt: true
    }, {
      no: 76,
      name: "auto_proceed_after_planning",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 77,
      name: "time_budget_seconds",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 78,
      name: "time_budget_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new wfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wfs, e, t);
  }
};
aQg = class _fs extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartBackgroundComposerFromSnapshotRequest.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "contents",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new _fs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _fs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _fs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_fs, e, t);
  }
};
cQg = class Cfs extends ie {
  constructor(e) {
    super();
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartBackgroundComposerFromSnapshotRequest.WebhookConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "secret",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Cfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cfs, e, t);
  }
};
lQg = class Sfs extends ie {
  constructor(e) {
    super();
    this.policy = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BcsEgressPolicy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "allow_all",
      kind: "message",
      T: ZI,
      oneof: "policy"
    }, {
      no: 2,
      name: "restricted",
      kind: "message",
      T: uQg,
      oneof: "policy"
    }]);
  }
  static fromBinary(e, t) {
    return new Sfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sfs, e, t);
  }
};
uQg = class kfs extends ie {
  constructor(e) {
    super();
    this.allowedDomains = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BcsEgressRestricted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "allowed_domains",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new kfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kfs, e, t);
  }
};
dQg = class Efs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartBackgroundComposerFromSnapshotResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composer",
      kind: "message",
      T: uAi
    }, {
      no: 2,
      name: "was_swapped_to_default",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Efs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Efs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Efs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Efs, e, t);
  }
};
hQg = class xfs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ParallelAgentWorkflowGatherConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timeout_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 2,
      name: "min_success_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "min_success_percentage",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xfs, e, t);
  }
};
mQg = class Tfs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ParallelAgentWorkflowSynthesisConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "strategy",
      kind: "enum",
      T: v.getEnumType(Aba),
      opt: true
    }, {
      no: 2,
      name: "synthesis_model",
      kind: "message",
      T: Yf,
      opt: true
    }, {
      no: 3,
      name: "fanout_size",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tfs, e, t);
  }
};
pQg = class Ifs extends ie {
  constructor(e) {
    super();
    this.childModelDetails = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartParallelAgentWorkflowRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "base_request",
      kind: "message",
      T: _ba
    }, {
      no: 2,
      name: "child_model_details",
      kind: "message",
      T: Yf,
      repeated: true
    }, {
      no: 3,
      name: "gather_config",
      kind: "message",
      T: hQg,
      opt: true
    }, {
      no: 4,
      name: "synthesis_config",
      kind: "message",
      T: mQg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ifs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ifs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ifs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ifs, e, t);
  }
};
gQg = class Dfs extends ie {
  constructor(e) {
    super();
    this.parentBcId = "";
    this.workflowId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartParallelAgentWorkflowResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "parent_bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workflow_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Dfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dfs, e, t);
  }
};
fQg = class Bfs extends ie {
  constructor(e) {
    super();
    this.workflowId = "";
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamParallelAgentWorkflowStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "workflow_id",
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
    return new Bfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bfs, e, t);
  }
};
bQg = class Rfs extends ie {
  constructor(e) {
    super();
    this.phase = mAi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ParallelAgentWorkflowStatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "phase",
      kind: "enum",
      T: v.getEnumType(mAi)
    }, {
      no: 2,
      name: "synthesis_bc_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "tournament_progress",
      kind: "message",
      T: vQg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Rfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rfs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.STARTING = 1] = "STARTING";
  n[n.CHILDREN_RUNNING = 2] = "CHILDREN_RUNNING";
  n[n.GATHERING = 3] = "GATHERING";
  n[n.SYNTHESIZING = 4] = "SYNTHESIZING";
  n[n.COMPLETED = 5] = "COMPLETED";
  n[n.ERROR = 6] = "ERROR";
})(mAi ||= {});
v.util.setEnumType(mAi, "aiserver.v1.ParallelAgentWorkflowStatusUpdate.Phase", [{
  no: 0,
  name: "PHASE_UNSPECIFIED"
}, {
  no: 1,
  name: "PHASE_STARTING"
}, {
  no: 2,
  name: "PHASE_CHILDREN_RUNNING"
}, {
  no: 3,
  name: "PHASE_GATHERING"
}, {
  no: 4,
  name: "PHASE_SYNTHESIZING"
}, {
  no: 5,
  name: "PHASE_COMPLETED"
}, {
  no: 6,
  name: "PHASE_ERROR"
}]);
vQg = class Pfs extends ie {
  constructor(e) {
    super();
    this.currentRound = 0;
    this.totalRounds = 0;
    this.candidatesRemaining = 0;
    this.initialCandidates = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SynthesisTournamentProgress";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_round",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "total_rounds",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "candidates_remaining",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "initial_candidates",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Pfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pfs, e, t);
  }
};
AQg = class Lfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerLogsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "last_event_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "worker_index",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Lfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lfs, e, t);
  }
};
yQg = class Nfs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerLogsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "event",
      kind: "message",
      T: wQg
    }, {
      no: 2,
      name: "updated_status",
      kind: "message",
      T: Kvi
    }, {
      no: 3,
      name: "start_error",
      kind: "message",
      T: cN
    }]);
  }
  static fromBinary(e, t) {
    return new Nfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nfs, e, t);
  }
};
wQg = class Mfs extends ie {
  constructor(e) {
    super();
    this.eventId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerLogsResponse.Event";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "event_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "event",
      kind: "message",
      T: ssu
    }]);
  }
  static fromBinary(e, t) {
    return new Mfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mfs, e, t);
  }
};
_Qg = class Ffs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "starting_index",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ffs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ffs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ffs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ffs, e, t);
  }
};
CQg = class Ofs extends ie {
  constructor(e) {
    super();
    this.startingCommit = "";
    this.baseBranch = "";
    this.statusUpdate = sl.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AttachBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "headless_agentic_composer_response",
      kind: "message",
      T: psu
    }, {
      no: 2,
      name: "prompt",
      kind: "message",
      T: gsu
    }, {
      no: 4,
      name: "starting_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "status_update",
      kind: "enum",
      T: v.getEnumType(sl)
    }, {
      no: 3,
      name: "diff_since_start",
      kind: "message",
      T: XH
    }]);
  }
  static fromBinary(e, t) {
    return new Ofs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ofs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ofs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ofs, e, t);
  }
};
SQg = class Ufs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamInteractionUpdatesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_from_offset",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ufs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ufs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ufs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ufs, e, t);
  }
};
pAi = class $fs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.shouldSendPrefetchedBlobsFirst = false;
    this.preFetchedBlobIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "offset_key",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "filter_heavy_step_data",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "should_send_prefetched_blobs_first",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "pre_fetched_blob_ids",
      kind: "scalar",
      T: 12,
      repeated: true
    }, {
      no: 6,
      name: "prefetch_only_last_step_per_turn",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "send_stream_signal_after_prefetch",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "max_blobs_after_prefetch",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new $fs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $fs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $fs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($fs, e, t);
  }
};
l4A = class qfs extends ie {
  constructor(e) {
    super();
    this.message = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationStreamMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "interaction_update",
      kind: "message",
      T: K$,
      oneof: "message"
    }, {
      no: 2,
      name: "cloud_agent_state_blob_id",
      kind: "scalar",
      T: 12,
      oneof: "message"
    }, {
      no: 3,
      name: "workflow_status",
      kind: "enum",
      T: v.getEnumType(uv),
      oneof: "message"
    }, {
      no: 4,
      name: "interaction_update_blob_id",
      kind: "scalar",
      T: 12,
      oneof: "message"
    }, {
      no: 5,
      name: "transient_error",
      kind: "message",
      T: Rsu,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new qfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qfs, e, t);
  }
};
mQ = class Hfs extends ie {
  constructor(e) {
    super();
    this.id = new Uint8Array(0);
    this.value = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PreFetchedBlob";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new Hfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hfs, e, t);
  }
};
KSt = class Jfs extends ie {
  constructor(e) {
    super();
    this.message = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 3,
      name: "initial_state",
      kind: "message",
      T: gAi,
      oneof: "message"
    }, {
      no: 4,
      name: "interaction_update_with_offset",
      kind: "message",
      T: xQg,
      oneof: "message"
    }, {
      no: 5,
      name: "cloud_agent_state_with_id_and_offset",
      kind: "message",
      T: EQg,
      oneof: "message"
    }, {
      no: 6,
      name: "workflow_status_with_offset",
      kind: "message",
      T: TQg,
      oneof: "message"
    }, {
      no: 7,
      name: "prefetched_blobs",
      kind: "message",
      T: kQg,
      oneof: "message"
    }, {
      no: 8,
      name: "stream_signal",
      kind: "enum",
      T: v.getEnumType(Cba),
      oneof: "message"
    }, {
      no: 9,
      name: "transient_error_with_offset",
      kind: "message",
      T: IQg,
      oneof: "message"
    }, {
      no: 10,
      name: "dev_banner_message",
      kind: "message",
      T: DQg,
      oneof: "message"
    }]);
  }
  static fromBinary(e, t) {
    return new Jfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jfs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.END_OF_INITIAL_STATE_PREFETCH = 1] = "END_OF_INITIAL_STATE_PREFETCH";
})(Cba ||= {});
v.util.setEnumType(Cba, "aiserver.v1.StreamConversationResponse.StreamSignal", [{
  no: 0,
  name: "STREAM_SIGNAL_UNSPECIFIED"
}, {
  no: 1,
  name: "STREAM_SIGNAL_END_OF_INITIAL_STATE_PREFETCH"
}]);
kQg = class Gfs extends ie {
  constructor(e) {
    super();
    this.preFetchedBlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.PrefetchedBlobs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Gfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gfs, e, t);
  }
};
gAi = class Wfs extends ie {
  constructor(e) {
    super();
    this.blobId = new Uint8Array(0);
    this.preFetchedBlobs = [];
    this.workflowStatus = uv.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.InitialState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "cloud_agent_state",
      kind: "message",
      T: YSt
    }, {
      no: 4,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }, {
      no: 5,
      name: "workflow_status",
      kind: "enum",
      T: v.getEnumType(uv)
    }]);
  }
  static fromBinary(e, t) {
    return new Wfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wfs, e, t);
  }
};
EQg = class Qfs extends ie {
  constructor(e) {
    super();
    this.offsetKey = "";
    this.blobId = new Uint8Array(0);
    this.preFetchedBlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.CloudAgentStateWithIdAndOffset";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 3,
      name: "cloud_agent_state",
      kind: "message",
      T: YSt
    }, {
      no: 4,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Qfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qfs, e, t);
  }
};
xQg = class jfs extends ie {
  constructor(e) {
    super();
    this.offsetKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.InteractionUpdateWithOffset";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "interaction_update",
      kind: "message",
      T: K$
    }]);
  }
  static fromBinary(e, t) {
    return new jfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jfs, e, t);
  }
};
TQg = class zfs extends ie {
  constructor(e) {
    super();
    this.offsetKey = "";
    this.workflowStatus = uv.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.WorkflowStatusWithOffset";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workflow_status",
      kind: "enum",
      T: v.getEnumType(uv)
    }]);
  }
  static fromBinary(e, t) {
    return new zfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zfs, e, t);
  }
};
IQg = class Vfs extends ie {
  constructor(e) {
    super();
    this.offsetKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.TransientErrorWithOffset";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "transient_error",
      kind: "message",
      T: Rsu
    }]);
  }
  static fromBinary(e, t) {
    return new Vfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vfs, e, t);
  }
};
DQg = class Kfs extends ie {
  constructor(e) {
    super();
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamConversationResponse.DevBannerMessage";
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
    return new Kfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kfs, e, t);
  }
};
BQg = class Yfs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLatestAgentConversationStateRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Yfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yfs, e, t);
  }
};
RQg = class Zfs extends ie {
  constructor(e) {
    super();
    this.numPriorInteractionUpdates = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LatestAgentConversationState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_state",
      kind: "message",
      T: vk
    }, {
      no: 2,
      name: "num_prior_interaction_updates",
      kind: "scalar",
      T: 13
    }]);
  }
  static fromBinary(e, t) {
    return new Zfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zfs, e, t);
  }
};
PQg = class Xfs extends ie {
  constructor(e) {
    super();
    this.preFetchedBlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLatestAgentConversationStateResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "latest_conversation_state",
      kind: "message",
      T: RQg
    }, {
      no: 2,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Xfs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xfs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xfs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xfs, e, t);
  }
};
Imn = class ebs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.blobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBlobForAgentKVRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new ebs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ebs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ebs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ebs, e, t);
  }
};
LQg = class tbs extends ie {
  constructor(e) {
    super();
    this.blobData = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBlobForAgentKVResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_data",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new tbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tbs, e, t);
  }
};
psu = class nbs extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.isMessageDone = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_call",
      kind: "message",
      T: nhe,
      opt: true
    }, {
      no: 3,
      name: "final_tool_result",
      kind: "message",
      T: MQg,
      opt: true
    }, {
      no: 6,
      name: "streamed_back_tool_call",
      kind: "message",
      T: m8o,
      opt: true
    }, {
      no: 4,
      name: "user_message",
      kind: "message",
      T: NQg
    }, {
      no: 5,
      name: "is_message_done",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "error",
      kind: "message",
      T: FQg,
      opt: true
    }, {
      no: 8,
      name: "human_message",
      kind: "message",
      T: Qw
    }, {
      no: 9,
      name: "thinking",
      kind: "message",
      T: n9t,
      opt: true
    }, {
      no: 10,
      name: "thinking_duration_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 12,
      name: "thinking_style",
      kind: "enum",
      T: v.getEnumType(uke),
      opt: true
    }, {
      no: 11,
      name: "status",
      kind: "message",
      T: OQg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new nbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nbs, e, t);
  }
};
NQg = class ibs extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.richText = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerResponse.UserMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "rich_text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ibs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ibs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ibs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ibs, e, t);
  }
};
MQg = class rbs extends ie {
  constructor(e) {
    super();
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerResponse.FinalToolResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: VR
    }]);
  }
  static fromBinary(e, t) {
    return new rbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rbs, e, t);
  }
};
FQg = class sbs extends ie {
  constructor(e) {
    super();
    this.message = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerResponse.Error";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "error_details",
      kind: "message",
      T: cN
    }]);
  }
  static fromBinary(e, t) {
    return new sbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sbs, e, t);
  }
};
OQg = class obs extends ie {
  constructor(e) {
    super();
    this.type = fAi.UNSPECIFIED;
    this.message = "";
    this.isComplete = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerResponse.Status";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type",
      kind: "enum",
      T: v.getEnumType(fAi)
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_complete",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new obs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new obs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new obs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(obs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INDEX_SYNC = 1] = "INDEX_SYNC";
  n[n.GENERIC = 2] = "GENERIC";
})(fAi ||= {});
v.util.setEnumType(fAi, "aiserver.v1.HeadlessAgenticComposerResponse.Status.StatusType", [{
  no: 0,
  name: "STATUS_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_TYPE_INDEX_SYNC"
}, {
  no: 2,
  name: "STATUS_TYPE_GENERIC"
}]);
UQg = class abs extends ie {
  constructor(e) {
    super();
    this.pathEncryptionKey = "";
    this.repositoryInfoShouldQueryStaging = false;
    this.repositoryInfoShouldQueryProd = false;
    this.repoQueryAuthToken = "";
    this.shouldSyncIndex = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerRepositoryInfo";
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
      name: "repository_info_should_query_staging",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "repository_info_should_query_prod",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "repo_query_auth_token",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "should_sync_index",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "query_only_repo_access",
      kind: "message",
      T: $bt
    }]);
  }
  static fromBinary(e, t) {
    return new abs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new abs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new abs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(abs, e, t);
  }
};
gsu = class cbs extends ie {
  constructor(e) {
    super();
    this.text = "";
    this.richText = "";
    this.fileSelections = [];
    this.fileAttachments = [];
    this.images = [];
    this.conversationHistory = [];
    this.documentationIdentifiers = [];
    this.externalLinks = [];
    this.blobDataPerMessage = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 5,
      name: "base_conversation_message",
      kind: "message",
      T: Qw
    }, {
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "rich_text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_selections",
      kind: "message",
      T: $Qg,
      repeated: true
    }, {
      no: 3,
      name: "file_attachments",
      kind: "message",
      T: qQg,
      repeated: true
    }, {
      no: 4,
      name: "images",
      kind: "message",
      T: ehe,
      repeated: true
    }, {
      no: 7,
      name: "conversation_history",
      kind: "message",
      T: Qw,
      repeated: true
    }, {
      no: 8,
      name: "documentation_identifiers",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 9,
      name: "use_web",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "external_links",
      kind: "message",
      T: s5t,
      repeated: true
    }, {
      no: 11,
      name: "blob_data_per_message",
      kind: "message",
      T: dWg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new cbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cbs, e, t);
  }
};
$Qg = class lbs extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt.FileSelection";
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
    return new lbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lbs, e, t);
  }
};
qQg = class ubs extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.contents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt.FileAttachment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "contents",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ubs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ubs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ubs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ubs, e, t);
  }
};
u4A = class dbs extends ie {
  constructor(e) {
    super();
    this.chatModelName = "";
    this.autoCommit = false;
    this.isBackground = false;
    this.additionalModelDetails = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.HeadlessAgenticComposerConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "chat_model_name",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "chat_model_details",
      kind: "message",
      T: Yf
    }, {
      no: 4,
      name: "auto_commit",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "is_background",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "auto_create_pr",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "background_agent_source",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }, {
      no: 9,
      name: "open_as_cursor_github_app",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "skip_reviewer_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 11,
      name: "enable_cloud_testing",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "enable_setup_vm_environment_tool",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "additional_model_details",
      kind: "message",
      T: Yf,
      repeated: true
    }, {
      no: 14,
      name: "should_synthesize",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "show_onboarding_setup_note_for_manual_testing",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new dbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dbs, e, t);
  }
};
HQg = class hbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new hbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hbs, e, t);
  }
};
JQg = class mbs extends ie {
  constructor(e) {
    super();
    this.status = sl.UNSPECIFIED;
    this.isUnread = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(sl)
    }, {
      no: 2,
      name: "is_unread",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new mbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mbs, e, t);
  }
};
Dmn = class pbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.followup = "";
    this.richFollowup = "";
    this.synchronous = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddAsyncFollowupBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "followup",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "rich_followup",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "synchronous",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "followup_message",
      kind: "message",
      T: Qw
    }, {
      no: 6,
      name: "model_details",
      kind: "message",
      T: Yf,
      opt: true
    }, {
      no: 7,
      name: "followup_source",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }, {
      no: 8,
      name: "continue_rebase",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "plan_followup_type",
      kind: "enum",
      T: v.getEnumType(iAi),
      opt: true
    }, {
      no: 10,
      name: "followup_conversation_action",
      kind: "message",
      T: SF,
      opt: true
    }, {
      no: 11,
      name: "followup_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "time_budget_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 13,
      name: "time_budget_seconds",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 14,
      name: "followup_system_reminder",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new pbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pbs, e, t);
  }
};
GQg = class gbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddAsyncFollowupBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new gbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gbs, e, t);
  }
};
fsu = class fbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPendingFollowupsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new fbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fbs, e, t);
  }
};
WQg = class bbs extends ie {
  constructor(e) {
    super();
    this.followupId = "";
    this.text = "";
    this.richText = "";
    this.createdAtMs = Eo.zero;
    this.source = dR.UNSPECIFIED;
    this.cursorCommands = [];
    this.cursorCommandsExplicitlySet = false;
    this.pastChats = [];
    this.pastChatsExplicitlySet = false;
    this.blobData = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PendingFollowup";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "rich_text",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 5,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR)
    }, {
      no: 6,
      name: "cursor_commands",
      kind: "message",
      T: tvt,
      repeated: true
    }, {
      no: 7,
      name: "cursor_commands_explicitly_set",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "past_chats",
      kind: "message",
      T: p8n,
      repeated: true
    }, {
      no: 9,
      name: "past_chats_explicitly_set",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "conversation_action",
      kind: "message",
      T: SF,
      opt: true
    }, {
      no: 11,
      name: "blob_data",
      kind: "message",
      T: bba,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new bbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bbs, e, t);
  }
};
QQg = class vbs extends ie {
  constructor(e) {
    super();
    this.pendingFollowups = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPendingFollowupsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pending_followups",
      kind: "message",
      T: WQg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new vbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vbs, e, t);
  }
};
bsu = class Abs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.followupId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdatePendingFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "updated_message",
      kind: "message",
      T: Qw
    }]);
  }
  static fromBinary(e, t) {
    return new Abs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Abs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Abs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Abs, e, t);
  }
};
jQg = class ybs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdatePendingFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ybs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ybs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ybs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ybs, e, t);
  }
};
vsu = class wbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.followupId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePendingFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new wbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wbs, e, t);
  }
};
zQg = class _bs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePendingFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new _bs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _bs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _bs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_bs, e, t);
  }
};
VQg = class Cbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.followupId = "";
    this.targetFollowupId = "";
    this.insertAfter = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReorderPendingFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "target_followup_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "insert_after",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Cbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cbs, e, t);
  }
};
KQg = class Sbs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReorderPendingFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Sbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sbs, e, t);
  }
};
Asu = class kbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.followupId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitPendingFollowupNowRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kbs, e, t);
  }
};
YQg = class Ebs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubmitPendingFollowupNowResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Ebs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ebs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ebs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ebs, e, t);
  }
};
ZQg = class xbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartSlackStreamingForFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new xbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xbs, e, t);
  }
};
XQg = class Tbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartSlackStreamingForFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Tbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tbs, e, t);
  }
};
ejg = class Ibs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartGithubStreamingForFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Ibs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ibs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ibs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ibs, e, t);
  }
};
tjg = class Dbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartGithubStreamingForFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Dbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dbs, e, t);
  }
};
njg = class Bbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartLinearStreamingForFollowupRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bbs, e, t);
  }
};
ijg = class Rbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartLinearStreamingForFollowupResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Rbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rbs, e, t);
  }
};
ysu = class Pbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.includeDiff = false;
    this.doNotThrowIfSetupNotFinished = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerInfoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "include_diff",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "do_not_throw_if_setup_not_finished",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Pbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pbs, e, t);
  }
};
Bmn = class Lbs extends ie {
  constructor(e) {
    super();
    this.startingCommit = "";
    this.baseBranch = "";
    this.status = sl.UNSPECIFIED;
    this.unread = false;
    this.environmentPorts = [];
    this.videoAnnotations = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DetailedBackgroundComposer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composer",
      kind: "message",
      T: uAi
    }, {
      no: 2,
      name: "starting_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "prompt",
      kind: "message",
      T: gsu
    }, {
      no: 5,
      name: "status",
      kind: "enum",
      T: v.getEnumType(sl)
    }, {
      no: 6,
      name: "diff_since_start",
      kind: "message",
      T: XH
    }, {
      no: 7,
      name: "start_error",
      kind: "message",
      T: cN
    }, {
      no: 8,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 9,
      name: "unread",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "summary",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "environment_ports",
      kind: "message",
      T: qzg,
      repeated: true
    }, {
      no: 12,
      name: "auto_create_pr",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "open_as_cursor_github_app",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 14,
      name: "skip_reviewer_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "local_state_branch",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 16,
      name: "permanent_error",
      kind: "message",
      T: cN,
      opt: true
    }, {
      no: 18,
      name: "video_annotations",
      kind: "message",
      T: _su,
      repeated: true
    }, {
      no: 19,
      name: "auto_branch",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Lbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lbs, e, t);
  }
};
wsu = class Nbs extends ie {
  constructor(e) {
    super();
    this.minutes = 0;
    this.seconds = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VideoTimestamp";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "minutes",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "seconds",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new Nbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nbs, e, t);
  }
};
rjg = class Mbs extends ie {
  constructor(e) {
    super();
    this.label = "";
    this.shouldHide = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VideoChapter";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_time",
      kind: "message",
      T: wsu
    }, {
      no: 3,
      name: "label",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "should_hide",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Mbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mbs, e, t);
  }
};
sjg = class Fbs extends ie {
  constructor(e) {
    super();
    this.labeledChapters = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VideoAnnotation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "labeled_chapters",
      kind: "message",
      T: rjg,
      repeated: true
    }, {
      no: 2,
      name: "thumbnail_timestamp",
      kind: "message",
      T: wsu
    }, {
      no: 3,
      name: "trim_start_seconds",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 4,
      name: "trim_end_seconds",
      kind: "scalar",
      T: 1,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Fbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fbs, e, t);
  }
};
_su = class Obs extends ie {
  constructor(e) {
    super();
    this.artifactPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VideoAnnotationEntry";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "artifact_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "annotation",
      kind: "message",
      T: sjg
    }]);
  }
  static fromBinary(e, t) {
    return new Obs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Obs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Obs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Obs, e, t);
  }
};
Csu = class Ubs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerInfoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composer",
      kind: "message",
      T: Bmn
    }]);
  }
  static fromBinary(e, t) {
    return new Ubs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ubs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ubs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ubs, e, t);
  }
};
ojg = class $bs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerRepositoryInfoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $bs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $bs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $bs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($bs, e, t);
  }
};
ajg = class qbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerRepositoryInfoResponse";
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
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "query_only_repo_access",
      kind: "message",
      T: $bt
    }]);
  }
  static fromBinary(e, t) {
    return new qbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qbs, e, t);
  }
};
cjg = class Hbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetMachineRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Hbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hbs, e, t);
  }
};
ljg = class Jbs extends ie {
  constructor(e) {
    super();
    this.podId = "";
    this.tenantId = "";
    this.networkToken = "";
    this.cluster = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PodReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tenant_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "network_token",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "cluster",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "exec_daemon_auth_token",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Jbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jbs, e, t);
  }
};
ujg = class Gbs extends ie {
  constructor(e) {
    super();
    this.workerId = "";
    this.workspaceRootPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WorkerReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "worker_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workspace_root_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Gbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gbs, e, t);
  }
};
djg = class Wbs extends ie {
  constructor(e) {
    super();
    this.reference = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MachineReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pod",
      kind: "message",
      T: ljg,
      oneof: "reference"
    }, {
      no: 2,
      name: "worker",
      kind: "message",
      T: ujg,
      oneof: "reference"
    }]);
  }
  static fromBinary(e, t) {
    return new Wbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wbs, e, t);
  }
};
hjg = class Qbs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetMachineResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "machine",
      kind: "message",
      T: djg
    }]);
  }
  static fromBinary(e, t) {
    return new Qbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qbs, e, t);
  }
};
mjg = class jbs extends ie {
  constructor(e) {
    super();
    this.mandatoryRepoUrls = [];
    this.optionalRepoUrls = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetGithubAccessTokenForReposRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "mandatory_repo_urls",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "optional_repo_urls",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "skip_cache",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new jbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jbs, e, t);
  }
};
pjg = class zbs extends ie {
  constructor(e) {
    super();
    this.repoUrlStatuses = [];
    this.errorType = dV.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetGithubAccessTokenForReposResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "has_access",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "repo_url_statuses",
      kind: "message",
      T: gjg,
      repeated: true
    }, {
      no: 4,
      name: "error_type",
      kind: "enum",
      T: v.getEnumType(dV)
    }, {
      no: 5,
      name: "github_redirect_url",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new zbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zbs, e, t);
  }
};
gjg = class Vbs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    this.hasAccess = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetGithubAccessTokenForReposResponse.Status";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "has_access",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Vbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vbs, e, t);
  }
};
fjg = class Kbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerConversationRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Kbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kbs, e, t);
  }
};
Ssu = class Ybs extends ie {
  constructor(e) {
    super();
    this.conversation = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerConversationResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation",
      kind: "message",
      T: Qw,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ybs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ybs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ybs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ybs, e, t);
  }
};
Sba = class Zbs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerPullRequestRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Zbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zbs, e, t);
  }
};
bjg = class Xbs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerPullRequestResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Xbs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xbs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xbs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xbs, e, t);
  }
};
vjg = class evs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.commitMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CommitBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "commit_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new evs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new evs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new evs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(evs, e, t);
  }
};
Ajg = class tvs extends ie {
  constructor(e) {
    super();
    this.commitHash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CommitBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit_hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new tvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tvs, e, t);
  }
};
yjg = class nvs extends ie {
  constructor(e) {
    super();
    this.environmentJson = "";
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetPersonalEnvironmentJsonRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environment_json",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new nvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nvs, e, t);
  }
};
wjg = class ivs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetPersonalEnvironmentJsonResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new ivs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ivs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ivs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ivs, e, t);
  }
};
_jg = class rvs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPersonalEnvironmentJsonRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new rvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rvs, e, t);
  }
};
Cjg = class svs extends ie {
  constructor(e) {
    super();
    this.environmentJson = "";
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPersonalEnvironmentJsonResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environment_json",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new svs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new svs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new svs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(svs, e, t);
  }
};
Sjg = class ovs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    this.ref = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEnvironmentJsonCandidatesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "ref",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ovs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ovs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ovs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ovs, e, t);
  }
};
kjg = class avs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEnvironmentJsonCandidatesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_environment_json",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "personal_environment_json",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "team_environment_json",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new avs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new avs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new avs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(avs, e, t);
  }
};
ksu = class cvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPersonalEnvironmentsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new cvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cvs, e, t);
  }
};
Ejg = class lvs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    this.environmentJson = "";
    this.createdAtMs = Eo.zero;
    this.updatedAtMs = Eo.zero;
    this.id = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PersonalEnvironment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "environment_json",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 4,
      name: "updated_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 5,
      name: "id",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new lvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lvs, e, t);
  }
};
xjg = class uvs extends ie {
  constructor(e) {
    super();
    this.environments = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPersonalEnvironmentsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environments",
      kind: "message",
      T: Ejg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new uvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uvs, e, t);
  }
};
Tjg = class dvs extends ie {
  constructor(e) {
    super();
    this.id = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePersonalEnvironmentJsonRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new dvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dvs, e, t);
  }
};
Ijg = class hvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePersonalEnvironmentJsonResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new hvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hvs, e, t);
  }
};
Djg = class mvs extends ie {
  constructor(e) {
    super();
    this.id = Eo.zero;
    this.environmentType = rAi.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PublishEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "environment_type",
      kind: "enum",
      T: v.getEnumType(rAi)
    }]);
  }
  static fromBinary(e, t) {
    return new mvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mvs, e, t);
  }
};
Bjg = class pvs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.prUrl = "";
    this.branchName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PublishEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new pvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pvs, e, t);
  }
};
Rjg = class gvs extends ie {
  constructor(e) {
    super();
    this.id = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PublishPersonalEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new gvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gvs, e, t);
  }
};
Pjg = class fvs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.prUrl = "";
    this.branchName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PublishPersonalEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "branch_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "error",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new fvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fvs, e, t);
  }
};
Esu = class bvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListTeamEnvironmentsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new bvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bvs, e, t);
  }
};
Ljg = class vvs extends ie {
  constructor(e) {
    super();
    this.id = Eo.zero;
    this.teamId = 0;
    this.repoUrl = "";
    this.environmentJson = "";
    this.createdByUserId = 0;
    this.createdAtMs = Eo.zero;
    this.updatedAtMs = Eo.zero;
    this.scmRepoNodeId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TeamEnvironment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "team_id",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "environment_json",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "created_by_user_id",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 7,
      name: "updated_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 8,
      name: "scm_repo_node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "git_enterprise_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new vvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vvs, e, t);
  }
};
Njg = class Avs extends ie {
  constructor(e) {
    super();
    this.environments = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListTeamEnvironmentsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environments",
      kind: "message",
      T: Ljg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Avs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Avs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Avs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Avs, e, t);
  }
};
Mjg = class yvs extends ie {
  constructor(e) {
    super();
    this.id = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteTeamEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new yvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yvs, e, t);
  }
};
Fjg = class wvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeleteTeamEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new wvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wvs, e, t);
  }
};
Ojg = class _vs extends ie {
  constructor(e) {
    super();
    this.environmentJson = "";
    this.repoUrl = "";
    this.scmRepoNodeId = "";
    this.deletePersonalEnvironment = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetTeamEnvironmentJsonRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "environment_json",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "scm_repo_node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "git_enterprise_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "delete_personal_environment",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new _vs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _vs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _vs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_vs, e, t);
  }
};
Ujg = class Cvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetTeamEnvironmentJsonResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Cvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cvs, e, t);
  }
};
$jg = class Svs extends ie {
  constructor(e) {
    super();
    this.target = bAi.UNSPECIFIED;
    this.bcId = "";
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SnapshotAndSaveEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "target",
      kind: "enum",
      T: v.getEnumType(bAi)
    }, {
      no: 2,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "install_command",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "existing_snapshot_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "scm_repo_node_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "git_enterprise_uuid",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Svs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Svs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Svs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Svs, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.PERSONAL = 1] = "PERSONAL";
  n[n.TEAM = 2] = "TEAM";
})(bAi ||= {});
v.util.setEnumType(bAi, "aiserver.v1.SnapshotAndSaveEnvironmentRequest.Target", [{
  no: 0,
  name: "TARGET_UNSPECIFIED"
}, {
  no: 1,
  name: "TARGET_PERSONAL"
}, {
  no: 2,
  name: "TARGET_TEAM"
}]);
qjg = class kvs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SnapshotAndSaveEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kvs, e, t);
  }
};
Hjg = class Evs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListReposWithLocalEnvironmentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Evs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Evs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Evs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Evs, e, t);
  }
};
Jjg = class xvs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    this.fileExists = false;
    this.lastSeenAtMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoWithLocalEnvironment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_exists",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "last_seen_at_ms",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new xvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xvs, e, t);
  }
};
Gjg = class Tvs extends ie {
  constructor(e) {
    super();
    this.repos = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListReposWithLocalEnvironmentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repos",
      kind: "message",
      T: Jjg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tvs, e, t);
  }
};
Wjg = class Ivs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MarkBackgroundComposerReadRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Ivs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ivs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ivs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ivs, e, t);
  }
};
Qjg = class Dvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MarkBackgroundComposerReadResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Dvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Dvs, e, t);
  }
};
jjg = class Bvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MarkBackgroundComposerUnreadRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bvs, e, t);
  }
};
zjg = class Rvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MarkBackgroundComposerUnreadResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Rvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rvs, e, t);
  }
};
Vjg = class Pvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.startIndex = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_index",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Pvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pvs, e, t);
  }
};
Kjg = class Lvs extends ie {
  constructor(e) {
    super();
    this.responses = [];
    this.totalResponses = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FetchBackgroundComposerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "responses",
      kind: "message",
      T: psu,
      repeated: true
    }, {
      no: 2,
      name: "total_responses",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Lvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lvs, e, t);
  }
};
Yjg = class Nvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetTurnSummaryBackgroundComposerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "source_type",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Nvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nvs, e, t);
  }
};
Zjg = class Mvs extends ie {
  constructor(e) {
    super();
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetTurnSummaryBackgroundComposerResponse";
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
    return new Mvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mvs, e, t);
  }
};
Xjg = class Fvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerNameRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Fvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fvs, e, t);
  }
};
ezg = class Ovs extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerNameResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Ovs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ovs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ovs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ovs, e, t);
  }
};
tzg = class Uvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerPromptRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Uvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uvs, e, t);
  }
};
nzg = class $vs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerPromptResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "prompt",
      kind: "message",
      T: Qw
    }]);
  }
  static fromBinary(e, t) {
    return new $vs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $vs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $vs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($vs, e, t);
  }
};
izg = class qvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerArtifactsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qvs, e, t);
  }
};
rzg = class Hvs extends ie {
  constructor(e) {
    super();
    this.absolutePath = "";
    this.sizeBytes = Eo.zero;
    this.updatedAtUnixMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerArtifact";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "size_bytes",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "updated_at_unix_ms",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new Hvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hvs, e, t);
  }
};
szg = class Jvs extends ie {
  constructor(e) {
    super();
    this.artifacts = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListBackgroundComposerArtifactsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "artifacts",
      kind: "message",
      T: rzg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Jvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jvs, e, t);
  }
};
ozg = class Gvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.absolutePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerArtifactRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Gvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gvs, e, t);
  }
};
azg = class Wvs extends ie {
  constructor(e) {
    super();
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerArtifactResponse";
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
    return new Wvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wvs, e, t);
  }
};
czg = class Qvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.absolutePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerArtifactBytesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Qvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qvs, e, t);
  }
};
lzg = class jvs extends ie {
  constructor(e) {
    super();
    this.content = new Uint8Array(0);
    this.contentType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerArtifactBytesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "content_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new jvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jvs, e, t);
  }
};
uzg = class zvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadBinaryFileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zvs, e, t);
  }
};
dzg = class Vvs extends ie {
  constructor(e) {
    super();
    this.content = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReadBinaryFileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new Vvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vvs, e, t);
  }
};
hzg = class Kvs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.absolutePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamBackgroundComposerArtifactRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "absolute_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Kvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kvs, e, t);
  }
};
mzg = class Yvs extends ie {
  constructor(e) {
    super();
    this.contentChunk = new Uint8Array(0);
    this.contentType = "";
    this.totalSize = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamBackgroundComposerArtifactResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content_chunk",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "content_type",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "total_size",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new Yvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yvs, e, t);
  }
};
xsu = class Zvs extends ie {
  constructor(e) {
    super();
    this.allowlist = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerUserEgressPolicy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "allowlist",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Zvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zvs, e, t);
  }
};
pzg = class Xvs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateBackgroundComposerUserSettingsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "slack_notifications_for_web_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "ci_failure_followup_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "browser_use_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "auto_create_pr_setting",
      kind: "enum",
      T: v.getEnumType(sAi),
      opt: true
    }, {
      no: 6,
      name: "pr_review_open_destination",
      kind: "enum",
      T: v.getEnumType(ISt),
      opt: true
    }, {
      no: 7,
      name: "github_artifact_posting",
      kind: "enum",
      T: v.getEnumType(DSt),
      opt: true
    }, {
      no: 8,
      name: "egress_protection_mode",
      kind: "enum",
      T: v.getEnumType(BSt),
      opt: true
    }, {
      no: 9,
      name: "egress_policy",
      kind: "message",
      T: xsu,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Xvs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xvs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xvs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xvs, e, t);
  }
};
gzg = class eAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateBackgroundComposerUserSettingsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new eAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eAs, e, t);
  }
};
fzg = class tAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerUserSettingsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new tAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tAs, e, t);
  }
};
bzg = class nAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerUserSettingsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "slack_notifications_for_web_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "ci_failure_followup_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "browser_use_enabled",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "auto_create_pr_setting",
      kind: "enum",
      T: v.getEnumType(sAi),
      opt: true
    }, {
      no: 6,
      name: "pr_review_open_destination",
      kind: "enum",
      T: v.getEnumType(ISt),
      opt: true
    }, {
      no: 7,
      name: "github_artifact_posting",
      kind: "enum",
      T: v.getEnumType(DSt),
      opt: true
    }, {
      no: 8,
      name: "egress_protection_mode",
      kind: "enum",
      T: v.getEnumType(BSt),
      opt: true
    }, {
      no: 9,
      name: "egress_policy",
      kind: "message",
      T: xsu,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new nAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nAs, e, t);
  }
};
vzg = class iAs extends ie {
  constructor(e) {
    super();
    this.repoUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRepositoryBranchesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repo_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "page",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "query",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "only_user_branches",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new iAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iAs, e, t);
  }
};
Azg = class rAs extends ie {
  constructor(e) {
    super();
    this.branches = [];
    this.hasMore = false;
    this.page = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRepositoryBranchesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "branches",
      kind: "message",
      T: yzg,
      repeated: true
    }, {
      no: 2,
      name: "has_more",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "page",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new rAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rAs, e, t);
  }
};
yzg = class sAs extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.isDefault = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetRepositoryBranchesResponse.Branch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "is_default",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new sAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sAs, e, t);
  }
};
vAi = class oAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestMergeStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "include_behind_count",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new oAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oAs, e, t);
  }
};
wzg = class aAs extends ie {
  constructor(e) {
    super();
    this.isMerged = false;
    this.isClosed = false;
    this.mergeableState = "";
    this.state = "";
    this.isDraft = false;
    this.title = "";
    this.baseBranch = "";
    this.behindBy = 0;
    this.canUpdateBranch = false;
    this.isAutoMergeEnabled = false;
    this.viewerCanEnableAutoMerge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestMergeStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_merged",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "is_closed",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "mergeable_state",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "state",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "is_draft",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "behind_by",
      kind: "scalar",
      T: 5
    }, {
      no: 9,
      name: "can_update_branch",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "is_auto_merge_enabled",
      kind: "scalar",
      T: 8
    }, {
      no: 11,
      name: "viewer_can_enable_auto_merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new aAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aAs, e, t);
  }
};
kba = class cAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetDetailedPullRequestStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "cache_expiration_seconds",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new cAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cAs, e, t);
  }
};
Tsu = class lAs extends ie {
  constructor(e) {
    super();
    this.isMerged = false;
    this.isClosed = false;
    this.mergeableState = "";
    this.state = "";
    this.isDraft = false;
    this.title = "";
    this.baseBranch = "";
    this.behindBy = 0;
    this.canUpdateBranch = false;
    this.isAutoMergeEnabled = false;
    this.viewerCanEnableAutoMerge = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetDetailedPullRequestStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_merged",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "is_closed",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "mergeable_state",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "state",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "is_draft",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "base_branch",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "behind_by",
      kind: "scalar",
      T: 5
    }, {
      no: 9,
      name: "can_update_branch",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "check_status",
      kind: "message",
      T: Dsu,
      opt: true
    }, {
      no: 11,
      name: "review_decision",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "is_auto_merge_enabled",
      kind: "scalar",
      T: 8
    }, {
      no: 13,
      name: "head_sha",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 14,
      name: "base_sha",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 15,
      name: "viewer_can_enable_auto_merge",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new lAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lAs, e, t);
  }
};
Rmn = class uAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CheckPullRequestMergeabilityRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new uAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uAs, e, t);
  }
};
_zg = class dAs extends ie {
  constructor(e) {
    super();
    this.canMerge = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CheckPullRequestMergeabilityResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "can_merge",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "mergeable_state",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new dAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dAs, e, t);
  }
};
Czg = class hAs extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.authorLogin = "";
    this.avatarUrl = "";
    this.body = "";
    this.createdAt = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRReviewComment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "author_login",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "avatar_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "created_at",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "diff_hunk",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new hAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hAs, e, t);
  }
};
Eba = class mAs extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.path = "";
    this.diffSide = "";
    this.isResolved = false;
    this.isOutdated = false;
    this.comments = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRReviewThread";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "start_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 5,
      name: "original_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "original_start_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "diff_side",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "is_resolved",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "is_outdated",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "comments",
      kind: "message",
      T: Czg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new mAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mAs, e, t);
  }
};
Szg = class pAs extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.authorLogin = "";
    this.avatarUrl = "";
    this.body = "";
    this.createdAt = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRTopLevelComment";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "author_login",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "avatar_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "created_at",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pAs, e, t);
  }
};
Isu = class gAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRCommitUser";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "email",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "avatar_url",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gAs, e, t);
  }
};
kzg = class fAs extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.message = "";
    this.committedDate = "";
    this.additions = 0;
    this.deletions = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRCommit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "committed_date",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "additions",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "deletions",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "changed_files",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 7,
      name: "author",
      kind: "message",
      T: Isu
    }, {
      no: 8,
      name: "committer",
      kind: "message",
      T: Isu
    }]);
  }
  static fromBinary(e, t) {
    return new fAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fAs, e, t);
  }
};
Ezg = class bAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestDiscussionsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new bAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bAs, e, t);
  }
};
xzg = class vAs extends ie {
  constructor(e) {
    super();
    this.threads = [];
    this.topLevelComments = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestDiscussionsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "threads",
      kind: "message",
      T: Eba,
      repeated: true
    }, {
      no: 2,
      name: "top_level_comments",
      kind: "message",
      T: Szg,
      repeated: true
    }, {
      no: 3,
      name: "check_status",
      kind: "message",
      T: Dsu,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new vAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vAs, e, t);
  }
};
Tzg = class AAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestCommitsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "after_cursor",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new AAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AAs, e, t);
  }
};
Izg = class yAs extends ie {
  constructor(e) {
    super();
    this.commits = [];
    this.hasNextPage = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPullRequestCommitsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commits",
      kind: "message",
      T: kzg,
      repeated: true
    }, {
      no: 2,
      name: "has_next_page",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "end_cursor",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new yAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yAs, e, t);
  }
};
Dsu = class wAs extends ie {
  constructor(e) {
    super();
    this.overallState = "";
    this.successCount = 0;
    this.failureCount = 0;
    this.pendingCount = 0;
    this.neutralCount = 0;
    this.skippedCount = 0;
    this.totalCount = 0;
    this.checks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRCheckStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "overall_state",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "success_count",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "failure_count",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "pending_count",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "neutral_count",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "skipped_count",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "total_count",
      kind: "scalar",
      T: 5
    }, {
      no: 8,
      name: "checks",
      kind: "message",
      T: Dzg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new wAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wAs, e, t);
  }
};
Dzg = class _As extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.status = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRCheck";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "details_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "summary",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _As().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _As().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _As().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_As, e, t);
  }
};
Bzg = class CAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.threadId = "";
    this.body = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReplyToReviewThreadRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "thread_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new CAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CAs, e, t);
  }
};
Rzg = class SAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReplyToReviewThreadResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "thread",
      kind: "message",
      T: Eba,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new SAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SAs, e, t);
  }
};
Pzg = class kAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.threadId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ResolveReviewThreadRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "thread_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kAs, e, t);
  }
};
Lzg = class EAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ResolveReviewThreadResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new EAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EAs, e, t);
  }
};
Nzg = class xAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.path = "";
    this.body = "";
    this.line = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddPullRequestReviewCommentRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "line",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "start_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "diff_side",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "commit_oid",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xAs, e, t);
  }
};
Mzg = class TAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AddPullRequestReviewCommentResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "thread",
      kind: "message",
      T: Eba,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new TAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TAs, e, t);
  }
};
xba = class IAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MergePullRequestRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "merge_method",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new IAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IAs, e, t);
  }
};
Fzg = class DAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MergePullRequestResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new DAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DAs, e, t);
  }
};
Bsu = class BAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EnablePullRequestAutoMergeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "merge_method",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new BAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BAs, e, t);
  }
};
Ozg = class RAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EnablePullRequestAutoMergeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new RAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RAs, e, t);
  }
};
Uzg = class PAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DisablePullRequestAutoMergeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new PAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PAs, e, t);
  }
};
$zg = class LAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DisablePullRequestAutoMergeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new LAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LAs, e, t);
  }
};
qzg = class NAs extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.port = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EnvironmentPort";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "port",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new NAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NAs, e, t);
  }
};
Hzg = class MAs extends ie {
  constructor(e) {
    super();
    this.token = "";
    this.platform = VSt.UNSPECIFIED;
    this.deviceId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterPushNotificationTokenRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "token",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "platform",
      kind: "enum",
      T: v.getEnumType(VSt)
    }, {
      no: 3,
      name: "device_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new MAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MAs, e, t);
  }
};
Jzg = class FAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterPushNotificationTokenResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new FAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FAs, e, t);
  }
};
Gzg = class OAs extends ie {
  constructor(e) {
    super();
    this.deviceId = "";
    this.platform = VSt.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePushNotificationTokenRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "device_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "platform",
      kind: "enum",
      T: v.getEnumType(VSt)
    }]);
  }
  static fromBinary(e, t) {
    return new OAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OAs, e, t);
  }
};
Wzg = class UAs extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DeletePushNotificationTokenResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new UAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UAs, e, t);
  }
};
Qzg = class $As extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    this.accessType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VerifyBackgroundComposerAccessRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "access_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $As().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $As().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $As().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($As, e, t);
  }
};
jzg = class qAs extends ie {
  constructor(e) {
    super();
    this.hasAccess = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VerifyBackgroundComposerAccessResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "has_access",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new qAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qAs, e, t);
  }
};
Tba = class HAs extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConvertPullRequestFromDraftRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new HAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HAs, e, t);
  }
};
zzg = class JAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConvertPullRequestFromDraftResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new JAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JAs, e, t);
  }
};
Vzg = class GAs extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdatePullRequestBranchRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new GAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GAs, e, t);
  }
};
Kzg = class WAs extends ie {
  constructor(e) {
    super();
    this.success = false;
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdatePullRequestBranchResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "new_head_sha",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new WAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WAs, e, t);
  }
};
d4A = class QAs extends ie {
  constructor(e) {
    super();
    this.cloudAgentStateBlobId = new Uint8Array(0);
    this.offsetKey = "";
    this.timestampMs = 0;
    this.workflowStatus = uv.UNSPECIFIED;
    this.version = AAi.PERSISTED_METADATA_VERSION_UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CloudAgentStatePersistedMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cloud_agent_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "timestamp_ms",
      kind: "scalar",
      T: 1
    }, {
      no: 4,
      name: "workflow_status",
      kind: "enum",
      T: v.getEnumType(uv)
    }, {
      no: 5,
      name: "version",
      kind: "enum",
      T: v.getEnumType(AAi)
    }]);
  }
  static fromBinary(e, t) {
    return new QAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QAs, e, t);
  }
};
(function (n) {
  n[n.PERSISTED_METADATA_VERSION_UNSPECIFIED = 0] = "PERSISTED_METADATA_VERSION_UNSPECIFIED";
  n[n.PERSISTED_METADATA_VERSION_1 = 1] = "PERSISTED_METADATA_VERSION_1";
})(AAi ||= {});
v.util.setEnumType(AAi, "aiserver.v1.CloudAgentStatePersistedMetadata.PersistedMetadataVersion", [{
  no: 0,
  name: "PERSISTED_METADATA_VERSION_UNSPECIFIED"
}, {
  no: 1,
  name: "PERSISTED_METADATA_VERSION_1"
}]);
YSt = class jAs extends ie {
  constructor(e) {
    super();
    this.numPriorInteractionUpdates = 0;
    this.prBody = new Uint8Array(0);
    this.summary = new Uint8Array(0);
    this.branchName = new Uint8Array(0);
    this.prUrl = new Uint8Array(0);
    this.agentName = new Uint8Array(0);
    this.lastInteractionUpdateOffsetKey = "";
    this.config = new Uint8Array(0);
    this.originalPromptBlobId = new Uint8Array(0);
    this.repositoryInfoBlobId = new Uint8Array(0);
    this.originalConversationActionBlobId = new Uint8Array(0);
    this.videoAnnotationsBlobId = new Uint8Array(0);
    this.turnStartTodoIds = [];
    this.commits = [];
    this.numCompletedTurns = 0;
    this.startRequestBlobId = new Uint8Array(0);
    this.commitReminderStateBlobId = new Uint8Array(0);
    this.grindModeTrackingStateBlobId = new Uint8Array(0);
    this.workflowControlStateBlobId = new Uint8Array(0);
    this.workerCreations = [];
    this.resolvedEgressPolicyBlobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CloudAgentState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "conversation_state",
      kind: "message",
      T: vk
    }, {
      no: 2,
      name: "num_prior_interaction_updates",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "pr_body",
      kind: "scalar",
      T: 12
    }, {
      no: 4,
      name: "summary",
      kind: "scalar",
      T: 12
    }, {
      no: 5,
      name: "branch_name",
      kind: "scalar",
      T: 12
    }, {
      no: 6,
      name: "pr_url",
      kind: "scalar",
      T: 12
    }, {
      no: 8,
      name: "agent_name",
      kind: "scalar",
      T: 12
    }, {
      no: 7,
      name: "last_interaction_update_offset_key",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "starting_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "base_branch",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "config",
      kind: "scalar",
      T: 12
    }, {
      no: 12,
      name: "local_state_branch",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "original_prompt_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 14,
      name: "repository_info_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 15,
      name: "original_conversation_action_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 16,
      name: "video_annotations_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 17,
      name: "last_user_turn_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 18,
      name: "last_followup_source",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }, {
      no: 19,
      name: "continue_rebase",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 20,
      name: "turn_start_todo_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 21,
      name: "original_request_start_unix_ms",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 22,
      name: "initial_turn_latency_reported",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 23,
      name: "agent_session_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 24,
      name: "kickoff_message_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 25,
      name: "grind_mode_config",
      kind: "message",
      T: msu,
      opt: true
    }, {
      no: 26,
      name: "commits",
      kind: "message",
      T: cVg,
      repeated: true
    }, {
      no: 27,
      name: "commit_count",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 28,
      name: "user_facing_error_details",
      kind: "message",
      T: sVg,
      opt: true
    }, {
      no: 29,
      name: "initial_source",
      kind: "enum",
      T: v.getEnumType(dR),
      opt: true
    }, {
      no: 30,
      name: "num_completed_turns",
      kind: "scalar",
      T: 13
    }, {
      no: 31,
      name: "synthesis_subagent_config",
      kind: "message",
      T: Xzg,
      opt: true
    }, {
      no: 32,
      name: "start_request_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 33,
      name: "commit_reminder_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 34,
      name: "grind_mode_tracking_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 35,
      name: "workflow_control_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 36,
      name: "worker_creations",
      kind: "message",
      T: Zzg,
      repeated: true
    }, {
      no: 37,
      name: "is_time_limit_expired",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 38,
      name: "resolved_egress_policy_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 39,
      name: "optimized_diff",
      kind: "message",
      T: Yzg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new jAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jAs, e, t);
  }
};
Yzg = class zAs extends ie {
  constructor(e) {
    super();
    this.state = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.OptimizedDiffState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pending",
      kind: "message",
      T: ZI,
      oneof: "state"
    }, {
      no: 2,
      name: "diff_blob_id",
      kind: "scalar",
      T: 12,
      oneof: "state"
    }]);
  }
  static fromBinary(e, t) {
    return new zAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zAs, e, t);
  }
};
Zzg = class VAs extends ie {
  constructor(e) {
    super();
    this.workerIndex = 0;
    this.createdAtUnixMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WorkerCreation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "worker_index",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "created_at_unix_ms",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new VAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VAs, e, t);
  }
};
Xzg = class KAs extends ie {
  constructor(e) {
    super();
    this.additionalModelNames = [];
    this.originalUserPromptBlobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SynthesisSubagentConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "additional_model_names",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "original_user_prompt_blob_id",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new KAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KAs, e, t);
  }
};
Rsu = class YAs extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TransientError";
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
    return new YAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YAs, e, t);
  }
};
h4A = class ZAs extends ie {
  constructor(e) {
    super();
    this.pendingFollowups = [];
    this.followupCompletionCount = 0;
    this.runningDesired = false;
    this.canRunLoop = false;
    this.pendingMakePrRequests = [];
    this.pendingOpenPrRequests = [];
    this.immediateFollowupIds = [];
    this.lastUpdatedMs = Eo.zero;
    this.completedFollowupIds = [];
    this.skippedInputActions = [];
    this.completedMakePrRequests = [];
    this.completedOpenPrRequests = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CloudAgentWorkflowControlState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pending_followups",
      kind: "message",
      T: nVg,
      repeated: true
    }, {
      no: 2,
      name: "followup_completion_count",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "running_desired",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "can_run_loop",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "pending_make_pr_requests",
      kind: "message",
      T: iVg,
      repeated: true
    }, {
      no: 6,
      name: "pending_open_pr_requests",
      kind: "message",
      T: rVg,
      repeated: true
    }, {
      no: 7,
      name: "immediate_followup_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 8,
      name: "last_updated_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 9,
      name: "completed_followup_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 10,
      name: "skipped_input_actions",
      kind: "message",
      T: SF,
      repeated: true
    }, {
      no: 11,
      name: "completed_make_pr_requests",
      kind: "message",
      T: eVg,
      repeated: true
    }, {
      no: 12,
      name: "completed_open_pr_requests",
      kind: "message",
      T: tVg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ZAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZAs, e, t);
  }
};
eVg = class XAs extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    this.completedAtMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CompletedMakePRRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "completed_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "response",
      kind: "message",
      T: usu,
      opt: true
    }, {
      no: 4,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "error_code",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new XAs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XAs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XAs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XAs, e, t);
  }
};
tVg = class eys extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    this.completedAtMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CompletedOpenPRRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "completed_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "response",
      kind: "message",
      T: dsu,
      opt: true
    }, {
      no: 4,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "error_code",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new eys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eys, e, t);
  }
};
nVg = class tys extends ie {
  constructor(e) {
    super();
    this.followupId = "";
    this.createdAtMs = Eo.zero;
    this.source = dR.UNSPECIFIED;
    this.isSimulated = false;
    this.synchronous = false;
    this.cursorCommands = [];
    this.cursorCommandsExplicitlySet = false;
    this.blobData = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.QueuedFollowup";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "followup_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "source",
      kind: "enum",
      T: v.getEnumType(dR)
    }, {
      no: 4,
      name: "is_simulated",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "synchronous",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "cursor_commands",
      kind: "message",
      T: tvt,
      repeated: true
    }, {
      no: 7,
      name: "cursor_commands_explicitly_set",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "conversation_action",
      kind: "message",
      T: SF,
      opt: true
    }, {
      no: 9,
      name: "blob_data",
      kind: "message",
      T: bba,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new tys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tys, e, t);
  }
};
iVg = class nys extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    this.createdAtMs = Eo.zero;
    this.requestBlobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.QueuedMakePRRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "request_blob_id",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new nys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nys, e, t);
  }
};
rVg = class iys extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    this.createdAtMs = Eo.zero;
    this.requestBlobId = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.QueuedOpenPRRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "created_at_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "request_blob_id",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new iys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iys, e, t);
  }
};
sVg = class rys extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    this.errorCode = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CloudAgentErrorDetails";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "error_code",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new rys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rys, e, t);
  }
};
m4A = class sys extends ie {
  constructor(e) {
    super();
    this.entries = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.VideoAnnotationsWrapper";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "entries",
      kind: "message",
      T: _su,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new sys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sys, e, t);
  }
};
oVg = class oys extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerVmUsageRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new oys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oys, e, t);
  }
};
aVg = class ays extends ie {
  constructor(e) {
    super();
    this.totalDurationMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetBackgroundComposerVmUsageResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "total_duration_ms",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new ays().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ays().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ays().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ays, e, t);
  }
};
cVg = class cys extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.message = "";
    this.authorName = "";
    this.authorEmail = "";
    this.timestamp = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerCommit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "author_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "author_email",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "timestamp",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new cys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cys, e, t);
  }
};
lVg = class lys extends ie {
  constructor(e) {
    super();
    this.limit = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListGrindModeComposersRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "limit",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new lys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lys, e, t);
  }
};
uVg = class uys extends ie {
  constructor(e) {
    super();
    this.composers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListGrindModeComposersResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "composers",
      kind: "message",
      T: uAi,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new uys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uys, e, t);
  }
};
dVg = class dys extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCloudAgentDebugDetailsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "agent_blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 3,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new dys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dys, e, t);
  }
};
hVg = class hys extends ie {
  constructor(e) {
    super();
    this.cloudAgentStateBlobId = new Uint8Array(0);
    this.streamMessages = [];
    this.preFetchedBlobs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCloudAgentDebugDetailsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cloud_agent_state_blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "cloud_agent_state",
      kind: "message",
      T: YSt
    }, {
      no: 3,
      name: "stream_messages",
      kind: "message",
      T: KSt,
      repeated: true
    }, {
      no: 4,
      name: "pre_fetched_blobs",
      kind: "message",
      T: mQ,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new hys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hys, e, t);
  }
};
mVg = class mys extends ie {
  constructor(e) {
    super();
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateAgentShareRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new mys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mys, e, t);
  }
};
pVg = class pys extends ie {
  constructor(e) {
    super();
    this.shareId = "";
    this.shareUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateAgentShareResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "share_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "share_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pys, e, t);
  }
};
gVg = class gys extends ie {
  constructor(e) {
    super();
    this.shareId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetAgentSharePreviewRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "share_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "include_preview_image",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gys, e, t);
  }
};
fVg = class fys extends ie {
  constructor(e) {
    super();
    this.shareId = "";
    this.bcId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetAgentSharePreviewResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "share_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "bc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "name",
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
      name: "status",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "repo_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "branch_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "artifact_image_url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "preview_image_png",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new fys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fys, e, t);
  }
};
bVg = class bys extends ie {
  constructor(e) {
    super();
    this.statusFilter = oAi.UNSPECIFIED;
    this.pageSize = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPrivateWorkersRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status_filter",
      kind: "enum",
      T: v.getEnumType(oAi)
    }, {
      no: 2,
      name: "page_size",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "page_token",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new bys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bys, e, t);
  }
};
vVg = class vys extends ie {
  constructor(e) {
    super();
    this.workers = [];
    this.nextPageToken = "";
    this.totalCount = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListPrivateWorkersResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "workers",
      kind: "message",
      T: Psu,
      repeated: true
    }, {
      no: 2,
      name: "next_page_token",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "total_count",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new vys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vys, e, t);
  }
};
Psu = class Ays extends ie {
  constructor(e) {
    super();
    this.workerId = "";
    this.repoOwner = "";
    this.repoName = "";
    this.workspaceRootPath = "";
    this.connectedAtMs = 0;
    this.userId = 0;
    this.isInUse = false;
    this.labels = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PrivateWorker";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "worker_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repo_owner",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "repo_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "workspace_root_path",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "connected_at_ms",
      kind: "scalar",
      T: 1
    }, {
      no: 6,
      name: "user_id",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "team_id",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 8,
      name: "service_account_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "is_in_use",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "active_bc_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "labels",
      kind: "message",
      T: Lsu,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ays().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ays().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ays().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ays, e, t);
  }
};
Lsu = class yys extends ie {
  constructor(e) {
    super();
    this.key = "";
    this.value = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PrivateWorkerLabel";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "key",
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
    return new yys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yys, e, t);
  }
};
AVg = class wys extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPrivateWorkersSummaryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new wys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wys, e, t);
  }
};
yVg = class _ys extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPrivateWorkersSummaryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_summary",
      kind: "message",
      T: wVg,
      opt: true
    }, {
      no: 2,
      name: "team_summary",
      kind: "message",
      T: _Vg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _ys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _ys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _ys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_ys, e, t);
  }
};
wVg = class Cys extends ie {
  constructor(e) {
    super();
    this.totalConnected = 0;
    this.inUse = 0;
    this.teamWorkersInUseByUser = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UserWorkerSummary";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "total_connected",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "in_use",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "team_workers_in_use_by_user",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Cys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cys, e, t);
  }
};
_Vg = class Sys extends ie {
  constructor(e) {
    super();
    this.totalConnected = 0;
    this.inUse = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TeamWorkerSummary";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "total_connected",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "in_use",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Sys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sys, e, t);
  }
};
CVg = class kys extends ie {
  constructor(e) {
    super();
    this.workerId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPrivateWorkerRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "worker_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new kys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kys, e, t);
  }
};
SVg = class Eys extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPrivateWorkerResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "worker",
      kind: "message",
      T: Psu
    }]);
  }
  static fromBinary(e, t) {
    return new Eys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Eys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Eys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Eys, e, t);
  }
};
kVg = class xys extends ie {
  constructor(e) {
    super();
    this.bcIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BatchRefreshPullRequestStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bc_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new xys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xys, e, t);
  }
};
EVg = class Tys extends ie {
  constructor(e) {
    super();
    this.results = {};
    this.failedBcIds = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BatchRefreshPullRequestStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: Tsu
      }
    }, {
      no: 2,
      name: "failed_bc_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tys, e, t);
  }
};
Nsu = class Iys extends ie {
  constructor(e) {
    super();
    this.diffChangesHash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BackgroundComposerCachedDetailsProto";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "diff_changes_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "detailed_diff",
      kind: "message",
      T: Bbt
    }, {
      no: 3,
      name: "bc",
      kind: "message",
      T: Bmn
    }]);
  }
  static fromBinary(e, t) {
    return new Iys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Iys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Iys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Iys, e, t);
  }
};
