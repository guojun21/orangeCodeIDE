"use strict";

// Module: out-build/proto/aiserver/v1/docs_pb.js
// Offset: 3055477 (bundle byte offset)
// Size: 3407 bytes
Ka();
oMc = class Q$i extends ie {
  constructor(e) {
    super();
    this.prefixUrl = "";
    this.docName = "";
    this.isDifferentPrefixOrigin = false;
    this.truePrefixUrl = "";
    this.public = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentationMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "prefix_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "doc_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "is_different_prefix_origin",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "true_prefix_url",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "public",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "team_id",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Q$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q$i, e, t);
  }
};
aMc = class j$i extends ie {
  constructor(e) {
    super();
    this.docName = "";
    this.pageUrl = "";
    this.documentationChunk = "";
    this.score = 0;
    this.pageTitle = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentationChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "page_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "documentation_chunk",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 5,
      name: "page_title",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new j$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j$i, e, t);
  }
};
IIh = class z$i extends ie {
  constructor(e) {
    super();
    this.docIdentifier = "";
    this.query = "";
    this.topK = 0;
    this.rerankResults = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentationQueryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_identifier",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "top_k",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "rerank_results",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new z$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z$i, e, t);
  }
};
DIh = class V$i extends ie {
  constructor(e) {
    super();
    this.docIdentifier = "";
    this.docName = "";
    this.docChunks = [];
    this.status = K9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.DocumentationQueryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_identifier",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "doc_name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "doc_chunks",
      kind: "message",
      T: aMc,
      repeated: true
    }, {
      no: 4,
      name: "status",
      kind: "enum",
      T: v.getEnumType(K9n)
    }]);
  }
  static fromBinary(e, t) {
    return new V$i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V$i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V$i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V$i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NOT_FOUND = 1] = "NOT_FOUND";
  n[n.SUCCESS = 2] = "SUCCESS";
  n[n.FAILURE = 3] = "FAILURE";
})(K9n ||= {});
v.util.setEnumType(K9n, "aiserver.v1.DocumentationQueryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_NOT_FOUND"
}, {
  no: 2,
  name: "STATUS_SUCCESS"
}, {
  no: 3,
  name: "STATUS_FAILURE"
}]);
