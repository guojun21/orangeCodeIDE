"use strict";

// Module: out-build/proto/aiserver/v1/mcp_pb.js
// Offset: 30195185 (bundle byte offset)
// Size: 3565 bytes
Ka();
qey = class Ato extends ie {
  constructor(e) {
    super();
    this.clientId = "";
    this.redirectUris = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.McpOAuthStoredData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "refresh_token",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "client_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "client_secret",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "redirect_uris",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "access_token",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Ato().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ato().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ato().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ato, e, t);
  }
};
Hey = class yto extends ie {
  constructor(e) {
    super();
    this.clientId = "";
    this.redirectUris = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.McpOAuthStoredClientInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "client_secret",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "redirect_uris",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new yto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yto, e, t);
  }
};
zhu = class wto extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.description = "";
    this.icon = "";
    this.endpoint = "";
    this.isFeatured = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPKnownServerInfo";
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
      name: "icon",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "endpoint",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "is_featured",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new wto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wto, e, t);
  }
};
VCf = class _to extends ie {
  constructor(e) {
    super();
    this.domains = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MCPServerRegistration";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "domains",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "info",
      kind: "message",
      T: zhu
    }]);
  }
  static fromBinary(e, t) {
    return new _to().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _to().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _to().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_to, e, t);
  }
};
KCf = class Cto extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetKnownServersRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Cto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cto, e, t);
  }
};
YCf = class Sto extends ie {
  constructor(e) {
    super();
    this.servers = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetKnownServersResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "servers",
      kind: "message",
      T: VCf,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Sto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Sto, e, t);
  }
};
