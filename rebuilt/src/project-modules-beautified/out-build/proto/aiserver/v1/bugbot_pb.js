"use strict";

// Module: out-build/proto/aiserver/v1/bugbot_pb.js
// Offset: 3442454 (bundle byte offset)
// Size: 10226 bytes
Ka();
qp();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CLICKED = 1] = "CLICKED";
  n[n.HANDLED_DIALOG_SHOWN = 2] = "HANDLED_DIALOG_SHOWN";
  n[n.HANDLED_CHAT_CREATED = 3] = "HANDLED_CHAT_CREATED";
  n[n.ERROR = 4] = "ERROR";
  n[n.HANDLED_FIX_IN_WEB = 5] = "HANDLED_FIX_IN_WEB";
})(I8n ||= {});
v.util.setEnumType(I8n, "aiserver.v1.BugbotDeeplinkEventKind", [{
  no: 0,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED"
}, {
  no: 1,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED"
}, {
  no: 2,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN"
}, {
  no: 3,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED"
}, {
  no: 4,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR"
}, {
  no: 5,
  name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB"
}]);
YFc = class wKi extends ie {
  constructor(e) {
    super();
    this.file = "";
    this.startLine = 0;
    this.endLine = 0;
    this.codeLines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BugLocation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "code_lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new wKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wKi, e, t);
  }
};
ovt = class _Ki extends ie {
  constructor(e) {
    super();
    this.locations = [];
    this.id = "";
    this.description = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BugReport";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "locations",
      kind: "message",
      T: YFc,
      repeated: true
    }, {
      no: 2,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "confidence",
      kind: "scalar",
      T: 2,
      opt: true
    }, {
      no: 5,
      name: "category",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "severity",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "rationale",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "triggered_by_rule_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new _Ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Ki, e, t);
  }
};
ZFc = class CKi extends ie {
  constructor(e) {
    super();
    this.bugReports = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BugReports";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bug_reports",
      kind: "message",
      T: ovt,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new CKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CKi, e, t);
  }
};
D8n = class SKi extends ie {
  constructor(e) {
    super();
    this.contextFiles = [];
    this.inBackgroundSubsidized = false;
    this.hasTelemetry = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamBugBotRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "git_diff",
      kind: "message",
      T: XH
    }, {
      no: 13,
      name: "context_files",
      kind: "message",
      T: WB,
      repeated: true
    }, {
      no: 2,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 3,
      name: "user_instructions",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "bug_detection_guidelines",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "iterations",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 12,
      name: "unified_context_lines",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 6,
      name: "in_background_subsidized",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "session_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "price_id",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "has_telemetry",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "constrain_to_file",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "constrain_to_range",
      kind: "message",
      T: RNh,
      opt: true
    }, {
      no: 14,
      name: "deep_review",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new SKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SKi, e, t);
  }
};
RNh = class kKi extends ie {
  constructor(e) {
    super();
    this.startLine = 0;
    this.endLineInclusive = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamBugBotRequest.Range";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "end_line_inclusive",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new kKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kKi, e, t);
  }
};
PNh = class EKi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FileAndOutline";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: WB
    }, {
      no: 2,
      name: "outline",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new EKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EKi, e, t);
  }
};
AgA = class xKi extends ie {
  constructor(e) {
    super();
    this.seed = "";
    this.date = "";
    this.contextFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RunBugBotPromptProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "req",
      kind: "message",
      T: D8n
    }, {
      no: 2,
      name: "seed",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "date",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "context_files",
      kind: "message",
      T: PNh,
      repeated: true
    }, {
      no: 5,
      name: "file_content_source",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new xKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xKi, e, t);
  }
};
LNh = class TKi extends ie {
  constructor(e) {
    super();
    this.date = "";
    this.seed = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BugBotDiscriminatorPromptProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "req",
      kind: "message",
      T: D8n
    }, {
      no: 2,
      name: "bug",
      kind: "message",
      T: ovt
    }, {
      no: 3,
      name: "date",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "seed",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new TKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TKi, e, t);
  }
};
ygA = class IKi extends ie {
  constructor(e) {
    super();
    this.isRealBug = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BugBotDiscriminatorTrainingPromptProps";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "props",
      kind: "message",
      T: LNh
    }, {
      no: 2,
      name: "is_real_bug",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new IKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IKi, e, t);
  }
};
NNh = class DKi extends ie {
  constructor(e) {
    super();
    this.userId = 0;
    this.bugId = "";
    this.event = I8n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LogDeeplinkEventRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user_id",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "bug_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "comment_id",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 4,
      name: "event",
      kind: "enum",
      T: v.getEnumType(I8n)
    }]);
  }
  static fromBinary(e, t) {
    return new DKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DKi, e, t);
  }
};
MNh = class BKi extends ie {
  constructor(e) {
    super();
    this.success = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LogDeeplinkEventResponse";
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
    return new BKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BKi, e, t);
  }
};
FNh = class RKi extends ie {
  constructor(e) {
    super();
    this.redisKey = "";
    this.encryptionKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEncryptedBugDataRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "redis_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "encryption_key",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new RKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RKi, e, t);
  }
};
ONh = class PKi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEncryptedBugDataResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bug_report",
      kind: "message",
      T: ovt
    }]);
  }
  static fromBinary(e, t) {
    return new PKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PKi, e, t);
  }
};
UNh = class LKi extends ie {
  constructor(e) {
    super();
    this.redisKey = "";
    this.encryptionKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEncryptedBugDataMultipleRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "redis_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "encryption_key",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new LKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LKi, e, t);
  }
};
$Nh = class NKi extends ie {
  constructor(e) {
    super();
    this.bugReports = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEncryptedBugDataMultipleResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bug_reports",
      kind: "message",
      T: ovt,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new NKi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NKi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NKi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NKi, e, t);
  }
};
