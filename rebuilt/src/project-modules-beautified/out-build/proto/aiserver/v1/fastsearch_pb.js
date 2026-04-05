"use strict";

// Module: out-build/proto/aiserver/v1/fastsearch_pb.js
// Offset: 33699237 (bundle byte offset)
// Size: 4497 bytes
Ka();
qp();
JIa = class Bto extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.hash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.MinimalFileHash";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Bto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Bto, e, t);
  }
};
K6f = class Rto extends ie {
  constructor(e) {
    super();
    this.uuid = "";
    this.openTabs = [];
    this.contextGraphFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartFastSearchRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "cursor_position",
      kind: "message",
      T: I9
    }, {
      no: 3,
      name: "open_tabs",
      kind: "message",
      T: JIa,
      repeated: true
    }, {
      no: 4,
      name: "context_graph_files",
      kind: "message",
      T: JIa,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Rto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Rto, e, t);
  }
};
i0u = class Pto extends ie {
  constructor(e) {
    super();
    this.response = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartFastSearchResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ready",
      kind: "message",
      T: r0u,
      oneof: "response"
    }, {
      no: 2,
      name: "missing_files",
      kind: "message",
      T: Y6f,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new Pto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Pto, e, t);
  }
};
r0u = class Lto extends ie {
  constructor(e) {
    super();
    this.ready = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartFastSearchResponse.Ready";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ready",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Lto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Lto, e, t);
  }
};
Y6f = class Nto extends ie {
  constructor(e) {
    super();
    this.file = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartFastSearchResponse.MissingFiles";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Nto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Nto, e, t);
  }
};
Z6f = class Mto extends ie {
  constructor(e) {
    super();
    this.uuid = "";
    this.query = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastSearchRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "query",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Mto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Mto, e, t);
  }
};
s0u = class Fto extends ie {
  constructor(e) {
    super();
    this.fileChunks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastSearchResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_chunks",
      kind: "message",
      T: X6f,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Fto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Fto, e, t);
  }
};
X6f = class Oto extends ie {
  constructor(e) {
    super();
    this.chunkScore = 0;
    this.contents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastSearchResponse.Chunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chunk",
      kind: "message",
      T: tEh
    }, {
      no: 2,
      name: "chunk_score",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "contents",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Oto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Oto, e, t);
  }
};
