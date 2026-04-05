"use strict";

// Module: out-build/proto/agent/v1/report_bugfix_results_tool_pb.js
// Offset: 2836769 (bundle byte offset)
// Size: 14513 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FIXED = 1] = "FIXED";
  n[n.FALSE_POSITIVE = 2] = "FALSE_POSITIVE";
  n[n.COULD_NOT_FIX = 3] = "COULD_NOT_FIX";
  n[n.RESOLVED_BY_OTHER_FIX = 4] = "RESOLVED_BY_OTHER_FIX";
})(m9n ||= {});
v.util.setEnumType(m9n, "agent.v1.BugfixVerdict", [{
  no: 0,
  name: "BUGFIX_VERDICT_UNSPECIFIED"
}, {
  no: 1,
  name: "BUGFIX_VERDICT_FIXED"
}, {
  no: 2,
  name: "BUGFIX_VERDICT_FALSE_POSITIVE"
}, {
  no: 3,
  name: "BUGFIX_VERDICT_COULD_NOT_FIX"
}, {
  no: 4,
  name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX"
}]);
u8o = class E5i extends ie {
  constructor(e) {
    super();
    this.bugId = "";
    this.bugTitle = "";
    this.verdict = m9n.UNSPECIFIED;
    this.explanation = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.BugfixResultItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bug_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "bug_title",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "verdict",
      kind: "enum",
      T: v.getEnumType(m9n)
    }, {
      no: 4,
      name: "explanation",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "severity",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new E5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E5i, e, t);
  }
};
AIh = class x5i extends ie {
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
    this.typeName = "agent.v1.ReportBugfixResultsArgs";
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
    return new x5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x5i, e, t);
  }
};
uPc = class T5i extends ie {
  constructor(e) {
    super();
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReportBugfixResultsSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: u8o,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new T5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T5i, e, t);
  }
};
dPc = class I5i extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReportBugfixResultsError";
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
    return new I5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I5i, e, t);
  }
};
yIh = class D5i extends ie {
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
    this.typeName = "agent.v1.ReportBugfixResultsResult";
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
    return new D5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D5i, e, t);
  }
};
wIh = class B5i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ReportBugfixResultsToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: AIh
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: yIh
    }]);
  }
  static fromBinary(e, t) {
    return new B5i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B5i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B5i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B5i, e, t);
  }
};
