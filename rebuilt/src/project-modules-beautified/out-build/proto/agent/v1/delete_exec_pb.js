"use strict";

// Module: out-build/proto/agent/v1/delete_exec_pb.js
// Offset: 3085423 (bundle byte offset)
// Size: 5219 bytes
Ka();
J5t = class Pqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
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
    return new Pqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pqi, e, t);
  }
};
Z8o = class Lqi extends ie {
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
    this.typeName = "agent.v1.DeleteResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: tDh,
      oneof: "result"
    }, {
      no: 2,
      name: "file_not_found",
      kind: "message",
      T: nDh,
      oneof: "result"
    }, {
      no: 3,
      name: "not_file",
      kind: "message",
      T: iDh,
      oneof: "result"
    }, {
      no: 4,
      name: "permission_denied",
      kind: "message",
      T: rDh,
      oneof: "result"
    }, {
      no: 5,
      name: "file_busy",
      kind: "message",
      T: sDh,
      oneof: "result"
    }, {
      no: 6,
      name: "rejected",
      kind: "message",
      T: oDh,
      oneof: "result"
    }, {
      no: 7,
      name: "error",
      kind: "message",
      T: aDh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new Lqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lqi, e, t);
  }
};
tDh = class Nqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.deletedFile = "";
    this.fileSize = Eo.zero;
    this.prevContent = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "deleted_file",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "file_size",
      kind: "scalar",
      T: 3
    }, {
      no: 4,
      name: "prev_content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Nqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nqi, e, t);
  }
};
nDh = class Mqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteFileNotFound";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Mqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mqi, e, t);
  }
};
iDh = class Fqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.actualType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteNotFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "actual_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Fqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fqi, e, t);
  }
};
rDh = class Oqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.clientVisibleError = "";
    this.isReadonly = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeletePermissionDenied";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "client_visible_error",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_readonly",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Oqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Oqi, e, t);
  }
};
sDh = class Uqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteFileBusy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Uqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uqi, e, t);
  }
};
oDh = class $qi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.reason = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteRejected";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "reason",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $qi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $qi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $qi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($qi, e, t);
  }
};
aDh = class qqi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.DeleteError";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
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
    return new qqi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qqi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qqi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qqi, e, t);
  }
};
