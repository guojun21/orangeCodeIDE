"use strict";

// Module: out-build/proto/aiserver/v1/usage_pb.js
// Offset: 3701436 (bundle byte offset)
// Size: 15255 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.USAGE_BASED = 1] = "USAGE_BASED";
  n[n.USER_API_KEY = 2] = "USER_API_KEY";
  n[n.INCLUDED_IN_PRO = 3] = "INCLUDED_IN_PRO";
  n[n.INCLUDED_IN_BUSINESS = 4] = "INCLUDED_IN_BUSINESS";
  n[n.ERRORED_NOT_CHARGED = 5] = "ERRORED_NOT_CHARGED";
  n[n.ABORTED_NOT_CHARGED = 6] = "ABORTED_NOT_CHARGED";
  n[n.CUSTOM_SUBSCRIPTION = 7] = "CUSTOM_SUBSCRIPTION";
  n[n.INCLUDED_IN_PRO_PLUS = 8] = "INCLUDED_IN_PRO_PLUS";
  n[n.INCLUDED_IN_ULTRA = 9] = "INCLUDED_IN_ULTRA";
  n[n.FREE_CREDIT = 10] = "FREE_CREDIT";
})(X8n ||= {});
v.util.setEnumType(X8n, "aiserver.v1.UsageEventKind", [{
  no: 0,
  name: "USAGE_EVENT_KIND_UNSPECIFIED"
}, {
  no: 1,
  name: "USAGE_EVENT_KIND_USAGE_BASED"
}, {
  no: 2,
  name: "USAGE_EVENT_KIND_USER_API_KEY"
}, {
  no: 3,
  name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO"
}, {
  no: 4,
  name: "USAGE_EVENT_KIND_INCLUDED_IN_BUSINESS"
}, {
  no: 5,
  name: "USAGE_EVENT_KIND_ERRORED_NOT_CHARGED"
}, {
  no: 6,
  name: "USAGE_EVENT_KIND_ABORTED_NOT_CHARGED"
}, {
  no: 7,
  name: "USAGE_EVENT_KIND_CUSTOM_SUBSCRIPTION"
}, {
  no: 8,
  name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO_PLUS"
}, {
  no: 9,
  name: "USAGE_EVENT_KIND_INCLUDED_IN_ULTRA"
}, {
  no: 10,
  name: "USAGE_EVENT_KIND_FREE_CREDIT"
}]);
tUo = class hir extends ie {
  constructor(e) {
    super();
    this.feature = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chat",
      kind: "message",
      T: MOh,
      oneof: "feature"
    }, {
      no: 2,
      name: "context_chat",
      kind: "message",
      T: qOh,
      oneof: "feature"
    }, {
      no: 3,
      name: "cmd_k",
      kind: "message",
      T: HOh,
      oneof: "feature"
    }, {
      no: 4,
      name: "terminal_cmd_k",
      kind: "message",
      T: JOh,
      oneof: "feature"
    }, {
      no: 5,
      name: "ai_review_accepted_comment",
      kind: "message",
      T: GOh,
      oneof: "feature"
    }, {
      no: 6,
      name: "interpreter_chat",
      kind: "message",
      T: WOh,
      oneof: "feature"
    }, {
      no: 7,
      name: "slash_edit",
      kind: "message",
      T: QOh,
      oneof: "feature"
    }, {
      no: 8,
      name: "composer",
      kind: "message",
      T: OOh,
      oneof: "feature"
    }, {
      no: 9,
      name: "fast_apply",
      kind: "message",
      T: FOh,
      oneof: "feature"
    }, {
      no: 10,
      name: "warm_composer",
      kind: "message",
      T: $Oh,
      oneof: "feature"
    }, {
      no: 11,
      name: "bug_finder_trigger_v1",
      kind: "message",
      T: LOh,
      oneof: "feature"
    }, {
      no: 12,
      name: "tool_call_composer",
      kind: "message",
      T: UOh,
      oneof: "feature"
    }, {
      no: 14,
      name: "bug_bot",
      kind: "message",
      T: NOh,
      oneof: "feature"
    }, {
      no: 15,
      name: "prompt_hook",
      kind: "message",
      T: POh,
      oneof: "feature"
    }, {
      no: 13,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new hir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hir, e, t);
  }
};
POh = class mir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.PromptHook";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 3,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new mir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mir, e, t);
  }
};
LOh = class pir extends ie {
  constructor(e) {
    super();
    this.inBackgroundSubsidized = false;
    this.costCents = 0;
    this.isFast = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.BugFinderTriggerV1";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "in_background_subsidized",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "cost_cents",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "is_fast",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new pir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pir, e, t);
  }
};
NOh = class gir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    this.isTokenBasedCall = false;
    this.maxMode = false;
    this.discount = {
      case: undefined
    };
    this.billingMode = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.BugBot";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "token_usage",
      kind: "message",
      T: hke
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "max_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "no_discount",
      kind: "message",
      T: ZI,
      oneof: "discount"
    }, {
      no: 6,
      name: "free",
      kind: "message",
      T: ZI,
      oneof: "discount"
    }, {
      no: 7,
      name: "billing_mode",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new gir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gir, e, t);
  }
};
MOh = class fir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.Chat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new fir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fir, e, t);
  }
};
FOh = class bir extends ie {
  constructor(e) {
    super();
    this.isOptimistic = false;
    this.willingToPayExtraForSpeed = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.FastApply";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "is_optimistic",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "willing_to_pay_extra_for_speed",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new bir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bir, e, t);
  }
};
OOh = class vir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.Composer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_headless",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 6,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new vir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vir, e, t);
  }
};
UOh = class Air extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.ToolCallComposer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_headless",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 6,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Air().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Air().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Air().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Air, e, t);
  }
};
$Oh = class yir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.WarmComposer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new yir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yir, e, t);
  }
};
qOh = class wir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.ContextChat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new wir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wir, e, t);
  }
};
HOh = class _ir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.CmdK";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _ir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _ir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _ir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_ir, e, t);
  }
};
JOh = class Cir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.TerminalCmdK";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Cir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cir, e, t);
  }
};
GOh = class Sir extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.AiReviewAcceptedComment";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Sir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sir, e, t);
  }
};
WOh = class kir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.InterpreterChat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "override_num_requests_counted",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 4,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new kir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kir, e, t);
  }
};
QOh = class Eir extends ie {
  constructor(e) {
    super();
    this.modelIntent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDetails.SlashEdit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "model_intent",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "max_mode",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Eir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Eir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Eir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Eir, e, t);
  }
};
Y4c = class xir extends ie {
  constructor(e) {
    super();
    this.timestamp = Eo.zero;
    this.isSlow = false;
    this.status = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "details",
      kind: "message",
      T: tUo
    }, {
      no: 3,
      name: "subscription_product_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "usage_price_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "is_slow",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "status",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "owning_user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "owning_team",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "price_cents",
      kind: "scalar",
      T: 2,
      opt: true
    }, {
      no: 10,
      name: "team_membership_type",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xir, e, t);
  }
};
jOh = class Tir extends ie {
  constructor(e) {
    super();
    this.timestamp = Eo.zero;
    this.model = "";
    this.kind = X8n.UNSPECIFIED;
    this.maxMode = false;
    this.requestsCosts = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UsageEventDisplay";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "timestamp",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "model",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "kind",
      kind: "enum",
      T: v.getEnumType(X8n)
    }, {
      no: 4,
      name: "custom_subscription_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "max_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "requests_costs",
      kind: "scalar",
      T: 2
    }, {
      no: 7,
      name: "usage_based_costs",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "is_token_based_call",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "token_usage",
      kind: "message",
      T: hke,
      opt: true
    }, {
      no: 10,
      name: "owning_user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "owning_team",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 12,
      name: "user_email",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "cursor_token_fee",
      kind: "scalar",
      T: 2,
      opt: true
    }, {
      no: 14,
      name: "is_chargeable",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 15,
      name: "service_account_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 16,
      name: "service_account_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 17,
      name: "is_headless",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tir, e, t);
  }
};
hke = class Iir extends ie {
  constructor(e) {
    super();
    this.inputTokens = 0;
    this.outputTokens = 0;
    this.cacheWriteTokens = 0;
    this.cacheReadTokens = 0;
    this.totalCents = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.TokenUsage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "input_tokens",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "output_tokens",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "cache_write_tokens",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "cache_read_tokens",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "total_cents",
      kind: "scalar",
      T: 2
    }, {
      no: 6,
      name: "discount_percent_off",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Iir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Iir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Iir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Iir, e, t);
  }
};
