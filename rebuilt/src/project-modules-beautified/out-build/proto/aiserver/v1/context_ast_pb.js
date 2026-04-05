"use strict";

// Module: out-build/proto/aiserver/v1/context_ast_pb.js
// Offset: 3697121 (bundle byte offset)
// Size: 4315 bytes
Ka();
z4c = class sir extends ie {
  constructor(e) {
    super();
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContextAST";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "message",
      T: TOh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new sir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sir, e, t);
  }
};
TOh = class oir extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.nodes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTree";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "nodes",
      kind: "message",
      T: V4c,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new oir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oir, e, t);
  }
};
V4c = class air extends ie {
  constructor(e) {
    super();
    this.node = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTreeNode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "container",
      kind: "message",
      T: DOh,
      oneof: "node"
    }, {
      no: 2,
      name: "blob",
      kind: "message",
      T: BOh,
      oneof: "node"
    }, {
      no: 3,
      name: "symbol",
      kind: "message",
      T: IOh,
      oneof: "node"
    }]);
  }
  static fromBinary(e, t) {
    return new air().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new air().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new air().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(air, e, t);
  }
};
IOh = class cir extends ie {
  constructor(e) {
    super();
    this.docString = "";
    this.value = "";
    this.references = [];
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTreeNode.Symbol";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "references",
      kind: "message",
      T: K4c,
      repeated: true
    }, {
      no: 7,
      name: "score",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new cir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cir, e, t);
  }
};
DOh = class lir extends ie {
  constructor(e) {
    super();
    this.docString = "";
    this.header = "";
    this.trailer = "";
    this.children = [];
    this.references = [];
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTreeNode.Container";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_string",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "trailer",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "children",
      kind: "message",
      T: V4c,
      repeated: true
    }, {
      no: 6,
      name: "references",
      kind: "message",
      T: K4c,
      repeated: true
    }, {
      no: 7,
      name: "score",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new lir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lir, e, t);
  }
};
BOh = class uir extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTreeNode.Blob";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new uir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uir, e, t);
  }
};
K4c = class dir extends ie {
  constructor(e) {
    super();
    this.value = "";
    this.relativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ContainerTreeNode.Reference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new dir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dir, e, t);
  }
};
