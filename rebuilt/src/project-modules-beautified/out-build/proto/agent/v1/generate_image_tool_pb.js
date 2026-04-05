"use strict";

// Module: out-build/proto/agent/v1/generate_image_tool_pb.js
// Offset: 2700197 (bundle byte offset)
// Size: 2795 bytes
Ka();
L5n = class OFi extends ie {
  constructor(e) {
    super();
    this.description = "";
    this.referenceImagePaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GenerateImageArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "reference_image_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new OFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OFi, e, t);
  }
};
l5t = class UFi extends ie {
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
    this.typeName = "agent.v1.GenerateImageResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: ZEh,
      oneof: "result"
    }, {
      no: 2,
      name: "error",
      kind: "message",
      T: XEh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new UFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UFi, e, t);
  }
};
ZEh = class $Fi extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    this.imageData = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GenerateImageSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "image_data",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new $Fi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Fi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Fi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Fi, e, t);
  }
};
XEh = class qFi extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GenerateImageError";
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
    return new qFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qFi, e, t);
  }
};
$Rc = class HFi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.GenerateImageToolCall";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "args",
      kind: "message",
      T: L5n
    }, {
      no: 2,
      name: "result",
      kind: "message",
      T: l5t
    }]);
  }
  static fromBinary(e, t) {
    return new HFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HFi, e, t);
  }
};
