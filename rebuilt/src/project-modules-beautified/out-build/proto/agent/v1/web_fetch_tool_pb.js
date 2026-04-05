"use strict";

// Module: out-build/proto/agent/v1/web_fetch_tool_pb.js
// Offset: 3188037 (bundle byte offset)
// Size: 5329 bytes
Ka();
L9e();
v6o = class QJi extends ie {
  constructor(e) {
    super();
    this.url = "";
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new QJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QJi, e, t);
  }
};
f2c = class jJi extends ie {
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
    this.typeName = "agent.v1.WebFetchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: YBh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: ZBh,
      oneof: "result"
    }, {
      no: 3,
      name: "rejected",
      kind: "message",
      T: XBh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new jJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jJi, e, t);
  }
};
YBh = class zJi extends ie {
  constructor(e) {
    super();
    this.url = "";
    this.markdown = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchSuccess";
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
      T: 9
    }, {
      no: 3,
      name: "output_location",
      kind: "message",
      T: Pbt,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new zJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zJi, e, t);
  }
};
ZBh = class VJi extends ie {
  constructor(e) {
    super();
    this.url = "";
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new VJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VJi, e, t);
  }
};
XBh = class KJi extends ie {
  constructor(e) {
    super();
    this.reason = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchRejected";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "reason",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new KJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KJi, e, t);
  }
};
b2c = class YJi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: v6o
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: f2c
    }]);
  }
  static fromBinary(e, t) {
    return new YJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YJi, e, t);
  }
};
eRh = class ZJi extends ie {
  constructor(e) {
    super();
    this.skipApproval = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchRequestQuery";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: v6o
    }, {
      no: 2,
      name: "skip_approval",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new ZJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZJi, e, t);
  }
};
tRh = class XJi extends ie {
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
    this.typeName = "agent.v1.WebFetchRequestResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "approved",
      kind: "message",
      T: nRh,
      oneof: "result"
    }, {
      no: 2,
      name: "rejected",
      kind: "message",
      T: iRh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new XJi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XJi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XJi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XJi, e, t);
  }
};
nRh = class eGi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchRequestResponse.Approved";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new eGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eGi, e, t);
  }
};
iRh = class tGi extends ie {
  constructor(e) {
    super();
    this.reason = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.WebFetchRequestResponse.Rejected";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "reason",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new tGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tGi, e, t);
  }
};
