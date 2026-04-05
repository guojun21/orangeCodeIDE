"use strict";

// Module: out-build/proto/aiserver/v1/fastapply_pb.js
// Offset: 3680779 (bundle byte offset)
// Size: 3300 bytes
Ka();
qp();
cv();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ACCEPTED = 1] = "ACCEPTED";
  n[n.REJECTED = 2] = "REJECTED";
  n[n.PARTIALLY_ACCEPTED = 3] = "PARTIALLY_ACCEPTED";
})(X6o ||= {});
v.util.setEnumType(X6o, "aiserver.v1.EditFate", [{
  no: 0,
  name: "EDIT_FATE_UNSPECIFIED"
}, {
  no: 1,
  name: "EDIT_FATE_ACCEPTED"
}, {
  no: 2,
  name: "EDIT_FATE_REJECTED"
}, {
  no: 3,
  name: "EDIT_FATE_PARTIALLY_ACCEPTED"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.COMPOSER = 1] = "COMPOSER";
  n[n.CLICKED_APPLY = 2] = "CLICKED_APPLY";
  n[n.CACHED_APPLY = 3] = "CACHED_APPLY";
  n[n.COMPOSER_AGENT = 4] = "COMPOSER_AGENT";
})(u9t ||= {});
v.util.setEnumType(u9t, "aiserver.v1.FastApplySource", [{
  no: 0,
  name: "FAST_APPLY_SOURCE_UNSPECIFIED"
}, {
  no: 1,
  name: "FAST_APPLY_SOURCE_COMPOSER"
}, {
  no: 2,
  name: "FAST_APPLY_SOURCE_CLICKED_APPLY"
}, {
  no: 3,
  name: "FAST_APPLY_SOURCE_CACHED_APPLY"
}, {
  no: 4,
  name: "FAST_APPLY_SOURCE_COMPOSER_AGENT"
}]);
uOh = class Fnr extends ie {
  constructor(e) {
    super();
    this.requestId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportEditFateRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "fate",
      kind: "enum",
      T: v.getEnumType(X6o),
      opt: true
    }, {
      no: 3,
      name: "num_accepted_partial_diffs",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "num_rejected_partial_diffs",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Fnr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fnr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fnr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fnr, e, t);
  }
};
dOh = class Onr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReportEditFateResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Onr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Onr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Onr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Onr, e, t);
  }
};
hOh = class Unr extends ie {
  constructor(e) {
    super();
    this.conversation = [];
    this.source = u9t.UNSPECIFIED;
    this.willingToPayExtraForSpeed = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WarmApplyRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "current_file",
      kind: "message",
      T: AS
    }, {
      no: 3,
      name: "conversation",
      kind: "message",
      T: Qw,
      repeated: true
    }, {
      no: 4,
      name: "explicit_context",
      kind: "message",
      T: _F
    }, {
      no: 5,
      name: "source",
      kind: "enum",
      T: v.getEnumType(u9t)
    }, {
      no: 6,
      name: "willing_to_pay_extra_for_speed",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Unr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Unr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Unr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Unr, e, t);
  }
};
mOh = class $nr extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.WarmApplyResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new $nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($nr, e, t);
  }
};
