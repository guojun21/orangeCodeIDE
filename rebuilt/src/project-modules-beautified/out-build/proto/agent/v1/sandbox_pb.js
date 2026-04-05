"use strict";

// Module: out-build/proto/agent/v1/sandbox_pb.js
// Offset: 2665591 (bundle byte offset)
// Size: 3789 bytes
Ka();
BEh = class W2i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NetworkPolicyLoggingConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "decision_log_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "log_format",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new W2i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W2i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W2i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W2i, e, t);
  }
};
REh = class Q2i extends ie {
  constructor(e) {
    super();
    this.deny = [];
    this.allow = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.NetworkPolicy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "version",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 2,
      name: "default_action",
      kind: "enum",
      T: v.getEnumType(Q9o),
      opt: true
    }, {
      no: 3,
      name: "deny",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "allow",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "logging",
      kind: "message",
      T: BEh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Q2i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q2i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q2i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q2i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ALLOW = 1] = "ALLOW";
  n[n.DENY = 2] = "DENY";
})(Q9o ||= {});
v.util.setEnumType(Q9o, "agent.v1.NetworkPolicy.DefaultAction", [{
  no: 0,
  name: "DEFAULT_ACTION_UNSPECIFIED"
}, {
  no: 1,
  name: "DEFAULT_ACTION_ALLOW"
}, {
  no: 2,
  name: "DEFAULT_ACTION_DENY"
}]);
Hte = class j2i extends ie {
  constructor(e) {
    super();
    this.type = CF.UNSPECIFIED;
    this.additionalReadwritePaths = [];
    this.additionalReadonlyPaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SandboxPolicy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "type",
      kind: "enum",
      T: v.getEnumType(CF)
    }, {
      no: 2,
      name: "network_access",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 3,
      name: "additional_readwrite_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "additional_readonly_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "debug_output_dir",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "disable_tmp_write",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 8,
      name: "allowlist_escalated",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 9,
      name: "enable_shared_build_cache",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 10,
      name: "network_policy",
      kind: "message",
      T: REh,
      opt: true
    }, {
      no: 11,
      name: "network_policy_strict",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "capture_denies",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 13,
      name: "skip_statsig_defaults",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new j2i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j2i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j2i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j2i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INSECURE_NONE = 1] = "INSECURE_NONE";
  n[n.WORKSPACE_READWRITE = 2] = "WORKSPACE_READWRITE";
  n[n.WORKSPACE_READONLY = 3] = "WORKSPACE_READONLY";
})(CF ||= {});
v.util.setEnumType(CF, "agent.v1.SandboxPolicy.Type", [{
  no: 0,
  name: "TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "TYPE_INSECURE_NONE"
}, {
  no: 2,
  name: "TYPE_WORKSPACE_READWRITE"
}, {
  no: 3,
  name: "TYPE_WORKSPACE_READONLY"
}]);
gpA = class z2i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SandboxPolicyMergeSources";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "per_user",
      kind: "message",
      T: Hte,
      opt: true
    }, {
      no: 2,
      name: "per_repo",
      kind: "message",
      T: Hte,
      opt: true
    }, {
      no: 3,
      name: "team_admin",
      kind: "message",
      T: Hte,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new z2i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z2i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z2i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z2i, e, t);
  }
};
