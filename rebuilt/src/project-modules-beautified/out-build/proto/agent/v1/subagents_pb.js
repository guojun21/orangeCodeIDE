"use strict";

// Module: out-build/proto/agent/v1/subagents_pb.js
// Offset: 3076525 (bundle byte offset)
// Size: 6724 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.DEFAULT = 1] = "DEFAULT";
  n[n.READONLY = 2] = "READONLY";
})(Y9n ||= {});
v.util.setEnumType(Y9n, "agent.v1.CustomSubagentPermissionMode", [{
  no: 0,
  name: "CUSTOM_SUBAGENT_PERMISSION_MODE_UNSPECIFIED"
}, {
  no: 1,
  name: "CUSTOM_SUBAGENT_PERMISSION_MODE_DEFAULT"
}, {
  no: 2,
  name: "CUSTOM_SUBAGENT_PERMISSION_MODE_READONLY"
}]);
she = class bqi extends ie {
  constructor(e) {
    super();
    this.type = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentType";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "unspecified",
      kind: "message",
      T: cMc,
      oneof: "type"
    }, {
      no: 2,
      name: "computer_use",
      kind: "message",
      T: lMc,
      oneof: "type"
    }, {
      no: 3,
      name: "custom",
      kind: "message",
      T: bMc,
      oneof: "type"
    }, {
      no: 4,
      name: "explore",
      kind: "message",
      T: uMc,
      oneof: "type"
    }, {
      no: 5,
      name: "media_review",
      kind: "message",
      T: dMc,
      oneof: "type"
    }, {
      no: 6,
      name: "bash",
      kind: "message",
      T: hMc,
      oneof: "type"
    }, {
      no: 7,
      name: "browser_use",
      kind: "message",
      T: pMc,
      oneof: "type"
    }, {
      no: 8,
      name: "shell",
      kind: "message",
      T: mMc,
      oneof: "type"
    }, {
      no: 9,
      name: "vm_setup_helper",
      kind: "message",
      T: gMc,
      oneof: "type"
    }, {
      no: 10,
      name: "debug",
      kind: "message",
      T: fMc,
      oneof: "type"
    }]);
  }
  static fromBinary(e, t) {
    return new bqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bqi, e, t);
  }
};
cMc = class vqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeUnspecified";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new vqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vqi, e, t);
  }
};
lMc = class Aqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeComputerUse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Aqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Aqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Aqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Aqi, e, t);
  }
};
uMc = class yqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeExplore";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new yqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yqi, e, t);
  }
};
dMc = class wqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeMediaReview";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new wqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wqi, e, t);
  }
};
hMc = class _qi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeBash";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new _qi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _qi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _qi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_qi, e, t);
  }
};
mMc = class Cqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeShell";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Cqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cqi, e, t);
  }
};
pMc = class Sqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeBrowserUse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Sqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sqi, e, t);
  }
};
gMc = class kqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeVmSetupHelper";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new kqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kqi, e, t);
  }
};
fMc = class Eqi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeDebug";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Eqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Eqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Eqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Eqi, e, t);
  }
};
bMc = class xqi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SubagentTypeCustom";
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
    return new xqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xqi, e, t);
  }
};
vMc = class Tqi extends ie {
  constructor(e) {
    super();
    this.fullPath = "";
    this.name = "";
    this.description = "";
    this.tools = [];
    this.model = "";
    this.prompt = "";
    this.permissionMode = Y9n.UNSPECIFIED;
    this.isBackground = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.CustomSubagent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "full_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "tools",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "model",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "prompt",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "permission_mode",
      kind: "enum",
      T: v.getEnumType(Y9n)
    }, {
      no: 8,
      name: "is_background",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "plugin",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 10,
      name: "marketplace",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Tqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Tqi, e, t);
  }
};
