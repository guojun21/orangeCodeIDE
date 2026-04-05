"use strict";

// Module: out-build/proto/aiserver/v1/repository_pb.js
// Offset: 2732675 (bundle byte offset)
// Size: 86738 bytes
Ka();
qp();
Nxh();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.DEFAULT = 1] = "DEFAULT";
})(r8o ||= {});
v.util.setEnumType(r8o, "aiserver.v1.ChunkingStrategy", [{
  no: 0,
  name: "CHUNKING_STRATEGY_UNSPECIFIED"
}, {
  no: 1,
  name: "CHUNKING_STRATEGY_DEFAULT"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SIMHASH = 1] = "SIMHASH";
})(Fbt ||= {});
v.util.setEnumType(Fbt, "aiserver.v1.SimilarityMetricType", [{
  no: 0,
  name: "SIMILARITY_METRIC_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "SIMILARITY_METRIC_TYPE_SIMHASH"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SHA256 = 1] = "SHA256";
})(Obt ||= {});
v.util.setEnumType(Obt, "aiserver.v1.PathKeyHashType", [{
  no: 0,
  name: "PATH_KEY_HASH_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "PATH_KEY_HASH_TYPE_SHA256"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.LULEA = 1] = "LULEA";
  n[n.UMEA = 2] = "UMEA";
  n[n.NONE = 3] = "NONE";
  n[n.LLAMA = 4] = "LLAMA";
  n[n.STARCODER_V1 = 5] = "STARCODER_V1";
  n[n.GPT_3_5_LOGPROBS = 6] = "GPT_3_5_LOGPROBS";
  n[n.LULEA_HAIKU = 7] = "LULEA_HAIKU";
  n[n.COHERE = 8] = "COHERE";
  n[n.VOYAGE = 9] = "VOYAGE";
  n[n.VOYAGE_EMBEDS = 10] = "VOYAGE_EMBEDS";
  n[n.IDENTITY = 11] = "IDENTITY";
  n[n.ADA_EMBEDS = 12] = "ADA_EMBEDS";
})(F5n ||= {});
v.util.setEnumType(F5n, "aiserver.v1.RerankerAlgorithm", [{
  no: 0,
  name: "RERANKER_ALGORITHM_UNSPECIFIED"
}, {
  no: 1,
  name: "RERANKER_ALGORITHM_LULEA"
}, {
  no: 2,
  name: "RERANKER_ALGORITHM_UMEA"
}, {
  no: 3,
  name: "RERANKER_ALGORITHM_NONE"
}, {
  no: 4,
  name: "RERANKER_ALGORITHM_LLAMA"
}, {
  no: 5,
  name: "RERANKER_ALGORITHM_STARCODER_V1"
}, {
  no: 6,
  name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS"
}, {
  no: 7,
  name: "RERANKER_ALGORITHM_LULEA_HAIKU"
}, {
  no: 8,
  name: "RERANKER_ALGORITHM_COHERE"
}, {
  no: 9,
  name: "RERANKER_ALGORITHM_VOYAGE"
}, {
  no: 10,
  name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS"
}, {
  no: 11,
  name: "RERANKER_ALGORITHM_IDENTITY"
}, {
  no: 12,
  name: "RERANKER_ALGORITHM_ADA_EMBEDS"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.AURORA = 1] = "AURORA";
  n[n.PLANETSCALE = 2] = "PLANETSCALE";
})(s8o ||= {});
v.util.setEnumType(s8o, "aiserver.v1.DatabaseProvider", [{
  no: 0,
  name: "DATABASE_PROVIDER_UNSPECIFIED"
}, {
  no: 1,
  name: "DATABASE_PROVIDER_AURORA"
}, {
  no: 2,
  name: "DATABASE_PROVIDER_PLANETSCALE"
}]);
(function (n) {
  n[n.RECHUNKER_CHOICE_UNSPECIFIED = 0] = "RECHUNKER_CHOICE_UNSPECIFIED";
  n[n.RECHUNKER_CHOICE_IDENTITY = 1] = "RECHUNKER_CHOICE_IDENTITY";
  n[n.RECHUNKER_CHOICE_600_TOKS = 2] = "RECHUNKER_CHOICE_600_TOKS";
  n[n.RECHUNKER_CHOICE_2400_TOKS = 3] = "RECHUNKER_CHOICE_2400_TOKS";
  n[n.RECHUNKER_CHOICE_4000_TOKS = 4] = "RECHUNKER_CHOICE_4000_TOKS";
})(o8o ||= {});
v.util.setEnumType(o8o, "aiserver.v1.RechunkerChoice", [{
  no: 0,
  name: "RECHUNKER_CHOICE_UNSPECIFIED"
}, {
  no: 1,
  name: "RECHUNKER_CHOICE_IDENTITY"
}, {
  no: 2,
  name: "RECHUNKER_CHOICE_600_TOKS"
}, {
  no: 3,
  name: "RECHUNKER_CHOICE_2400_TOKS"
}, {
  no: 4,
  name: "RECHUNKER_CHOICE_4000_TOKS"
}]);
Mxh = class M4i extends ie {
  constructor(e) {
    super();
    this.readmes = [];
    this.topLevelRelativeWorkspacePaths = [];
    this.workspaceRootPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "readmes",
      kind: "message",
      T: Fxh,
      repeated: true
    }, {
      no: 2,
      name: "top_level_relative_workspace_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "workspace_root_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new M4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M4i, e, t);
  }
};
Fxh = class F4i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "contents",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new F4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F4i, e, t);
  }
};
Oxh = class O4i extends ie {
  constructor(e) {
    super();
    this.description = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetHighLevelFolderDescriptionResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "description",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new O4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O4i, e, t);
  }
};
Uxh = class U4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EnsureIndexCreatedRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new U4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U4i, e, t);
  }
};
$xh = class $4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.EnsureIndexCreatedResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new $4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($4i, e, t);
  }
};
vve = class q4i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.hashOfNode = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PartialPathItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "hash_of_node",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new q4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q4i, e, t);
  }
};
qxh = class H4i extends ie {
  constructor(e) {
    super();
    this.rootHash = "";
    this.potentialLegacyRepoName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoInitHandshakeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "root_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "potential_legacy_repo_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new H4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H4i, e, t);
  }
};
Hxh = class J4i extends ie {
  constructor(e) {
    super();
    this.status = O5n.UNSPECIFIED;
    this.repoName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoInitHandshakeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(O5n)
    }, {
      no: 2,
      name: "repo_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new J4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J4i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.UP_TO_DATE = 1] = "UP_TO_DATE";
  n[n.OUT_OF_SYNC = 2] = "OUT_OF_SYNC";
  n[n.FAILURE = 3] = "FAILURE";
  n[n.EMPTY = 4] = "EMPTY";
})(O5n ||= {});
v.util.setEnumType(O5n, "aiserver.v1.FastRepoInitHandshakeResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_UP_TO_DATE"
}, {
  no: 2,
  name: "STATUS_OUT_OF_SYNC"
}, {
  no: 3,
  name: "STATUS_FAILURE"
}, {
  no: 4,
  name: "STATUS_EMPTY"
}]);
Jxh = class rSn extends ie {
  constructor(e) {
    super();
    this.encryptedRelativePath = "";
    this.hash = "";
    this.children = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LocalCodebaseFileInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "encrypted_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "hash",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "children",
      kind: "message",
      T: rSn,
      repeated: true
    }, {
      no: 4,
      name: "separator",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new rSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rSn, e, t);
  }
};
Gxh = class G4i extends ie {
  constructor(e) {
    super();
    this.rootHash = "";
    this.similarityMetricType = Fbt.UNSPECIFIED;
    this.similarityMetric = [];
    this.pathKeyHash = "";
    this.pathKeyHashType = Obt.UNSPECIFIED;
    this.doCopy = false;
    this.pathKey = "";
    this.returnAfterBackgroundCopyStarted = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoInitHandshakeV2Request";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "root_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "similarity_metric_type",
      kind: "enum",
      T: v.getEnumType(Fbt)
    }, {
      no: 4,
      name: "similarity_metric",
      kind: "scalar",
      T: 2,
      repeated: true
    }, {
      no: 5,
      name: "path_key_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "path_key_hash_type",
      kind: "enum",
      T: v.getEnumType(Obt)
    }, {
      no: 7,
      name: "do_copy",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "path_key",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "local_codebase_root_info",
      kind: "message",
      T: Jxh
    }, {
      no: 10,
      name: "return_after_background_copy_started",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new G4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G4i, e, t);
  }
};
Wxh = class W4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.QueryOnlyRepositoryInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "query_only_repo_access",
      kind: "message",
      T: $bt
    }]);
  }
  static fromBinary(e, t) {
    return new W4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W4i, e, t);
  }
};
Qxh = class Q4i extends ie {
  constructor(e) {
    super();
    this.codebaseId = "";
    this.status = U5n.UNSPECIFIED;
    this.copyTaskHandle = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryCodebaseInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebase_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status",
      kind: "enum",
      T: v.getEnumType(U5n)
    }, {
      no: 3,
      name: "query_only_similar_repo",
      kind: "message",
      T: Wxh
    }, {
      no: 4,
      name: "copy_task_handle",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Q4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q4i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.UP_TO_DATE = 1] = "UP_TO_DATE";
  n[n.OUT_OF_SYNC = 2] = "OUT_OF_SYNC";
  n[n.EMPTY = 3] = "EMPTY";
  n[n.EMPTY_WITH_COPY_AVAILABLE = 4] = "EMPTY_WITH_COPY_AVAILABLE";
  n[n.COPY_IN_PROGRESS = 5] = "COPY_IN_PROGRESS";
})(U5n ||= {});
v.util.setEnumType(U5n, "aiserver.v1.RepositoryCodebaseInfo.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_UP_TO_DATE"
}, {
  no: 2,
  name: "STATUS_OUT_OF_SYNC"
}, {
  no: 3,
  name: "STATUS_EMPTY"
}, {
  no: 4,
  name: "STATUS_EMPTY_WITH_COPY_AVAILABLE"
}, {
  no: 5,
  name: "STATUS_COPY_IN_PROGRESS"
}]);
jxh = class j4i extends ie {
  constructor(e) {
    super();
    this.status = $5n.UNSPECIFIED;
    this.codebases = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoInitHandshakeV2Response";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType($5n)
    }, {
      no: 2,
      name: "codebases",
      kind: "message",
      T: Qxh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new j4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j4i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FAILURE = 1] = "FAILURE";
  n[n.SUCCESS = 2] = "SUCCESS";
})($5n ||= {});
v.util.setEnumType($5n, "aiserver.v1.FastRepoInitHandshakeV2Response.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_FAILURE"
}, {
  no: 2,
  name: "STATUS_SUCCESS"
}]);
zxh = class z4i extends ie {
  constructor(e) {
    super();
    this.codebaseId = "";
    this.status = q5n.UNSPECIFIED;
    this.similarityMetricType = Fbt.UNSPECIFIED;
    this.similarityMetric = [];
    this.pathKeyHash = "";
    this.pathKeyHashType = Obt.UNSPECIFIED;
    this.failedUploadCount = 0;
    this.failedDeleteCount = 0;
    this.totalUploadCount = 0;
    this.totalDeleteCount = 0;
    this.failedSubtreeCount = 0;
    this.totalSubtreeCount = 0;
    this.hitIterationLimit = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryCodebaseSyncStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebase_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status",
      kind: "enum",
      T: v.getEnumType(q5n)
    }, {
      no: 3,
      name: "similarity_metric_type",
      kind: "enum",
      T: v.getEnumType(Fbt)
    }, {
      no: 4,
      name: "similarity_metric",
      kind: "scalar",
      T: 2,
      repeated: true
    }, {
      no: 5,
      name: "path_key_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "path_key_hash_type",
      kind: "enum",
      T: v.getEnumType(Obt)
    }, {
      no: 7,
      name: "failed_upload_count",
      kind: "scalar",
      T: 5
    }, {
      no: 8,
      name: "failed_delete_count",
      kind: "scalar",
      T: 5
    }, {
      no: 9,
      name: "total_upload_count",
      kind: "scalar",
      T: 5
    }, {
      no: 10,
      name: "total_delete_count",
      kind: "scalar",
      T: 5
    }, {
      no: 11,
      name: "failed_subtree_count",
      kind: "scalar",
      T: 5
    }, {
      no: 12,
      name: "total_subtree_count",
      kind: "scalar",
      T: 5
    }, {
      no: 13,
      name: "hit_iteration_limit",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new z4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z4i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
})(q5n ||= {});
v.util.setEnumType(q5n, "aiserver.v1.RepositoryCodebaseSyncStatus.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}]);
Vxh = class V4i extends ie {
  constructor(e) {
    super();
    this.codebases = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoSyncCompleteRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebases",
      kind: "message",
      T: zxh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new V4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V4i, e, t);
  }
};
Kxh = class K4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastRepoSyncCompleteResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new K4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K4i, e, t);
  }
};
Yxh = class Y4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncMerkleSubtreeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "local_partial_path",
      kind: "message",
      T: vve
    }]);
  }
  static fromBinary(e, t) {
    return new Y4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y4i, e, t);
  }
};
Zxh = class Z4i extends ie {
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
    this.typeName = "aiserver.v1.SyncMerkleSubtreeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "match",
      kind: "scalar",
      T: 8,
      oneof: "result"
    }, {
      no: 2,
      name: "mismatch",
      kind: "message",
      T: Xxh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new Z4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z4i, e, t);
  }
};
Xxh = class X4i extends ie {
  constructor(e) {
    super();
    this.children = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncMerkleSubtreeResponse.Mismatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "children",
      kind: "message",
      T: vve,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new X4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(X4i, e, t);
  }
};
zRc = class eOi extends ie {
  constructor(e) {
    super();
    this.orthogonalTransformSeed = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ClientRepositoryInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "orthogonal_transform_seed",
      kind: "scalar",
      T: 1
    }]);
  }
  static fromBinary(e, t) {
    return new eOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eOi, e, t);
  }
};
eTh = class tOi extends ie {
  constructor(e) {
    super();
    this.codebaseId = "";
    this.localPartialPaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncMerkleSubtreeV2Request";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_repository_info",
      kind: "message",
      T: zRc
    }, {
      no: 2,
      name: "codebase_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "local_partial_path",
      kind: "message",
      T: vve
    }, {
      no: 4,
      name: "local_partial_paths",
      kind: "message",
      T: vve,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new tOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tOi, e, t);
  }
};
tTh = class nOi extends ie {
  constructor(e) {
    super();
    this.result = {
      case: undefined
    };
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "match",
      kind: "scalar",
      T: 8,
      oneof: "result"
    }, {
      no: 2,
      name: "mismatch",
      kind: "message",
      T: VRc,
      oneof: "result"
    }, {
      no: 3,
      name: "results",
      kind: "message",
      T: nTh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new nOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nOi, e, t);
  }
};
VRc = class iOi extends ie {
  constructor(e) {
    super();
    this.children = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "children",
      kind: "message",
      T: vve,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new iOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iOi, e, t);
  }
};
nTh = class rOi extends ie {
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
    this.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "match",
      kind: "scalar",
      T: 8,
      oneof: "result"
    }, {
      no: 2,
      name: "mismatch",
      kind: "message",
      T: VRc,
      oneof: "result"
    }, {
      no: 3,
      name: "response_size_limit_exceeded",
      kind: "scalar",
      T: 8,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new rOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rOi, e, t);
  }
};
iTh = class sOi extends ie {
  constructor(e) {
    super();
    this.partialPath = {
      case: undefined
    };
    this.ancestorSpline = [];
    this.updateType = H5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "directory",
      kind: "message",
      T: vve,
      oneof: "partial_path"
    }, {
      no: 3,
      name: "local_file",
      kind: "message",
      T: rTh,
      oneof: "partial_path"
    }, {
      no: 4,
      name: "ancestor_spline",
      kind: "message",
      T: vve,
      repeated: true
    }, {
      no: 5,
      name: "update_type",
      kind: "enum",
      T: v.getEnumType(H5n)
    }]);
  }
  static fromBinary(e, t) {
    return new sOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ADD = 1] = "ADD";
  n[n.DELETE = 2] = "DELETE";
  n[n.MODIFY = 3] = "MODIFY";
})(H5n ||= {});
v.util.setEnumType(H5n, "aiserver.v1.FastUpdateFileRequest.UpdateType", [{
  no: 0,
  name: "UPDATE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "UPDATE_TYPE_ADD"
}, {
  no: 2,
  name: "UPDATE_TYPE_DELETE"
}, {
  no: 3,
  name: "UPDATE_TYPE_MODIFY"
}]);
rTh = class oOi extends ie {
  constructor(e) {
    super();
    this.hash = "";
    this.unencryptedRelativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileRequest.LocalFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: iae
    }, {
      no: 2,
      name: "hash",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "unencrypted_relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new oOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(oOi, e, t);
  }
};
sTh = class aOi extends ie {
  constructor(e) {
    super();
    this.status = J5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(J5n)
    }]);
  }
  static fromBinary(e, t) {
    return new aOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.EXPECTED_FAILURE = 3] = "EXPECTED_FAILURE";
})(J5n ||= {});
v.util.setEnumType(J5n, "aiserver.v1.FastUpdateFileResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_EXPECTED_FAILURE"
}]);
oTh = class cOi extends ie {
  constructor(e) {
    super();
    this.codebaseId = "";
    this.partialPath = {
      case: undefined
    };
    this.ancestorSpline = [];
    this.updateType = Ubt.UNSPECIFIED;
    this.fileUpdates = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileV2Request";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "client_repository_info",
      kind: "message",
      T: zRc
    }, {
      no: 2,
      name: "codebase_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "directory",
      kind: "message",
      T: vve,
      oneof: "partial_path"
    }, {
      no: 4,
      name: "local_file",
      kind: "message",
      T: KRc,
      oneof: "partial_path"
    }, {
      no: 5,
      name: "ancestor_spline",
      kind: "message",
      T: vve,
      repeated: true
    }, {
      no: 6,
      name: "update_type",
      kind: "enum",
      T: v.getEnumType(Ubt)
    }, {
      no: 7,
      name: "file_updates",
      kind: "message",
      T: aTh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new cOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.ADD = 1] = "ADD";
  n[n.DELETE = 2] = "DELETE";
  n[n.MODIFY = 3] = "MODIFY";
  n[n.BATCH = 4] = "BATCH";
})(Ubt ||= {});
v.util.setEnumType(Ubt, "aiserver.v1.FastUpdateFileV2Request.UpdateType", [{
  no: 0,
  name: "UPDATE_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "UPDATE_TYPE_ADD"
}, {
  no: 2,
  name: "UPDATE_TYPE_DELETE"
}, {
  no: 3,
  name: "UPDATE_TYPE_MODIFY"
}, {
  no: 4,
  name: "UPDATE_TYPE_BATCH"
}]);
KRc = class lOi extends ie {
  constructor(e) {
    super();
    this.hash = "";
    this.unencryptedRelativeWorkspacePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileV2Request.LocalFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: iae
    }, {
      no: 2,
      name: "hash",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "unencrypted_relative_workspace_path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new lOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lOi, e, t);
  }
};
aTh = class uOi extends ie {
  constructor(e) {
    super();
    this.partialPath = {
      case: undefined
    };
    this.ancestorSpline = [];
    this.updateType = Ubt.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileV2Request.FileUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "directory",
      kind: "message",
      T: vve,
      oneof: "partial_path"
    }, {
      no: 2,
      name: "local_file",
      kind: "message",
      T: KRc,
      oneof: "partial_path"
    }, {
      no: 3,
      name: "ancestor_spline",
      kind: "message",
      T: vve,
      repeated: true
    }, {
      no: 4,
      name: "update_type",
      kind: "enum",
      T: v.getEnumType(Ubt)
    }]);
  }
  static fromBinary(e, t) {
    return new uOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uOi, e, t);
  }
};
cTh = class dOi extends ie {
  constructor(e) {
    super();
    this.status = G5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FastUpdateFileV2Response";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(G5n)
    }]);
  }
  static fromBinary(e, t) {
    return new dOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.EXPECTED_FAILURE = 3] = "EXPECTED_FAILURE";
})(G5n ||= {});
v.util.setEnumType(G5n, "aiserver.v1.FastUpdateFileV2Response.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_EXPECTED_FAILURE"
}]);
lTh = class hOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetUploadLimitsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new hOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hOi, e, t);
  }
};
uTh = class mOi extends ie {
  constructor(e) {
    super();
    this.softLimit = 0;
    this.hardLimit = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetUploadLimitsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "soft_limit",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "hard_limit",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new mOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mOi, e, t);
  }
};
dTh = class pOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetNumFilesToSendRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new pOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pOi, e, t);
  }
};
hTh = class gOi extends ie {
  constructor(e) {
    super();
    this.numFiles = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetNumFilesToSendResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "num_files",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new gOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gOi, e, t);
  }
};
mTh = class fOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetAvailableChunkingStrategiesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new fOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fOi, e, t);
  }
};
pTh = class bOi extends ie {
  constructor(e) {
    super();
    this.chunkingStrategies = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetAvailableChunkingStrategiesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "chunking_strategies",
      kind: "enum",
      T: v.getEnumType(r8o),
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new bOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bOi, e, t);
  }
};
gTh = class vOi extends ie {
  constructor(e) {
    super();
    this.texts = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEmbeddingsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "texts",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new vOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vOi, e, t);
  }
};
fTh = class AOi extends ie {
  constructor(e) {
    super();
    this.embeddings = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEmbeddingsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "embeddings",
      kind: "message",
      T: bTh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new AOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AOi, e, t);
  }
};
bTh = class yOi extends ie {
  constructor(e) {
    super();
    this.embedding = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetEmbeddingsResponse.Embedding";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "embedding",
      kind: "scalar",
      T: 2,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new yOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yOi, e, t);
  }
};
bpA = class wOi extends ie {
  constructor(e) {
    super();
    this.codebaseId = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AdminRemoveRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebase_id",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new wOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wOi, e, t);
  }
};
vpA = class _Oi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.AdminRemoveRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new _Oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Oi, e, t);
  }
};
ApA = class COi extends ie {
  constructor(e) {
    super();
    this.codebaseId = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebase_id",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new COi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new COi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new COi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(COi, e, t);
  }
};
ypA = class SOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SyncRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new SOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SOi, e, t);
  }
};
wpA = class kOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartUploadRepoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new kOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kOi, e, t);
  }
};
_pA = class EOi extends ie {
  constructor(e) {
    super();
    this.status = W5n.UNSPECIFIED;
    this.seenFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartUploadRepoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(W5n)
    }, {
      no: 2,
      name: "seen_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new EOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.ALREADY_EXISTS = 3] = "ALREADY_EXISTS";
})(W5n ||= {});
v.util.setEnumType(W5n, "aiserver.v1.StartUploadRepoResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_ALREADY_EXISTS"
}]);
CpA = class xOi extends ie {
  constructor(e) {
    super();
    this.commitSha = "";
    this.queueId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UploadFileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "file",
      kind: "message",
      T: iae
    }, {
      no: 3,
      name: "commit_sha",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "queue_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new xOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xOi, e, t);
  }
};
SpA = class TOi extends ie {
  constructor(e) {
    super();
    this.status = Q5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UploadFileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(Q5n)
    }]);
  }
  static fromBinary(e, t) {
    return new TOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.EXPECTED_FAILURE = 3] = "EXPECTED_FAILURE";
  n[n.QUEUE_BACKED_UP = 4] = "QUEUE_BACKED_UP";
})(Q5n ||= {});
v.util.setEnumType(Q5n, "aiserver.v1.UploadFileResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_EXPECTED_FAILURE"
}, {
  no: 4,
  name: "STATUS_QUEUE_BACKED_UP"
}]);
kpA = class IOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FinishUploadRepoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new IOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IOi, e, t);
  }
};
EpA = class DOi extends ie {
  constructor(e) {
    super();
    this.status = j5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FinishUploadRepoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(j5n)
    }]);
  }
  static fromBinary(e, t) {
    return new DOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
})(j5n ||= {});
v.util.setEnumType(j5n, "aiserver.v1.FinishUploadRepoResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}]);
xpA = class BOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartUpdateRepoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new BOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BOi, e, t);
  }
};
TpA = class ROi extends ie {
  constructor(e) {
    super();
    this.status = z5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StartUpdateRepoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(z5n)
    }]);
  }
  static fromBinary(e, t) {
    return new ROi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ROi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ROi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ROi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.NOT_FOUND = 3] = "NOT_FOUND";
  n[n.ALREADY_SYNCING = 4] = "ALREADY_SYNCING";
})(z5n ||= {});
v.util.setEnumType(z5n, "aiserver.v1.StartUpdateRepoResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_NOT_FOUND"
}, {
  no: 4,
  name: "STATUS_ALREADY_SYNCING"
}]);
IpA = class POi extends ie {
  constructor(e) {
    super();
    this.commitSha = "";
    this.queueId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateFileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "added_file",
      kind: "message",
      T: iae
    }, {
      no: 3,
      name: "deleted_file_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "commit_sha",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "queue_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new POi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new POi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new POi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(POi, e, t);
  }
};
DpA = class LOi extends ie {
  constructor(e) {
    super();
    this.status = V5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpdateFileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(V5n)
    }]);
  }
  static fromBinary(e, t) {
    return new LOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.EXPECTED_FAILURE = 3] = "EXPECTED_FAILURE";
  n[n.QUEUE_BACKED_UP = 4] = "QUEUE_BACKED_UP";
})(V5n ||= {});
v.util.setEnumType(V5n, "aiserver.v1.UpdateFileResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_EXPECTED_FAILURE"
}, {
  no: 4,
  name: "STATUS_QUEUE_BACKED_UP"
}]);
BpA = class NOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FinishUpdateRepoRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new NOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NOi, e, t);
  }
};
RpA = class MOi extends ie {
  constructor(e) {
    super();
    this.status = K5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FinishUpdateRepoResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(K5n)
    }]);
  }
  static fromBinary(e, t) {
    return new MOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
})(K5n ||= {});
v.util.setEnumType(K5n, "aiserver.v1.FinishUpdateRepoResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}]);
PpA = class FOi extends ie {
  constructor(e) {
    super();
    this.requests = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BatchRepositoryStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "requests",
      kind: "message",
      T: _Th,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new FOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FOi, e, t);
  }
};
LpA = class OOi extends ie {
  constructor(e) {
    super();
    this.responses = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.BatchRepositoryStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "responses",
      kind: "message",
      T: CTh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new OOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OOi, e, t);
  }
};
NpA = class UOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UnsubscribeRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new UOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UOi, e, t);
  }
};
MpA = class $Oi extends ie {
  constructor(e) {
    super();
    this.status = Y5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UnsubscribeRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(Y5n)
    }]);
  }
  static fromBinary(e, t) {
    return new $Oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Oi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NOT_FOUND = 1] = "NOT_FOUND";
  n[n.NOT_SUBSCRIBED = 2] = "NOT_SUBSCRIBED";
  n[n.SUCCESS = 3] = "SUCCESS";
})(Y5n ||= {});
v.util.setEnumType(Y5n, "aiserver.v1.UnsubscribeRepositoryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_NOT_FOUND"
}, {
  no: 2,
  name: "STATUS_NOT_SUBSCRIBED"
}, {
  no: 3,
  name: "STATUS_SUCCESS"
}]);
FpA = class qOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LogoutRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new qOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qOi, e, t);
  }
};
OpA = class HOi extends ie {
  constructor(e) {
    super();
    this.status = Z5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LogoutResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(Z5n)
    }]);
  }
  static fromBinary(e, t) {
    return new HOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.NOT_LOGGED_IN = 3] = "NOT_LOGGED_IN";
})(Z5n ||= {});
v.util.setEnumType(Z5n, "aiserver.v1.LogoutResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_NOT_LOGGED_IN"
}]);
YRc = class JOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RemoveRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new JOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JOi, e, t);
  }
};
vTh = class GOi extends ie {
  constructor(e) {
    super();
    this.status = X5n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RemoveRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(X5n)
    }]);
  }
  static fromBinary(e, t) {
    return new GOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NOT_FOUND = 1] = "NOT_FOUND";
  n[n.NOT_AUTHORIZED = 2] = "NOT_AUTHORIZED";
  n[n.STARTED = 3] = "STARTED";
  n[n.SUCCESS = 4] = "SUCCESS";
})(X5n ||= {});
v.util.setEnumType(X5n, "aiserver.v1.RemoveRepositoryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_NOT_FOUND"
}, {
  no: 2,
  name: "STATUS_NOT_AUTHORIZED"
}, {
  no: 3,
  name: "STATUS_STARTED"
}, {
  no: 4,
  name: "STATUS_SUCCESS"
}]);
UpA = class WOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubscribeRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new WOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WOi, e, t);
  }
};
$pA = class QOi extends ie {
  constructor(e) {
    super();
    this.status = e9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SubscribeRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(e9n)
    }]);
  }
  static fromBinary(e, t) {
    return new QOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new QOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new QOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(QOi, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NOT_FOUND = 1] = "NOT_FOUND";
  n[n.NOT_AUTHORIZED = 2] = "NOT_AUTHORIZED";
  n[n.ALREADY_SUBSCRIBED = 3] = "ALREADY_SUBSCRIBED";
  n[n.SUCCESS = 4] = "SUCCESS";
})(e9n ||= {});
v.util.setEnumType(e9n, "aiserver.v1.SubscribeRepositoryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_NOT_FOUND"
}, {
  no: 2,
  name: "STATUS_NOT_AUTHORIZED"
}, {
  no: 3,
  name: "STATUS_ALREADY_SUBSCRIBED"
}, {
  no: 4,
  name: "STATUS_SUCCESS"
}]);
ZRc = class jOi extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.topK = 0;
    this.rerank = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 3,
      name: "top_k",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 5,
      name: "rerank",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "context_cache_request",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 7,
      name: "glob_filter",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "not_glob_filter",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "race_n_requests",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 10,
      name: "query_only_repo_access",
      kind: "message",
      T: $bt
    }]);
  }
  static fromBinary(e, t) {
    return new jOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jOi, e, t);
  }
};
$bt = class zOi extends ie {
  constructor(e) {
    super();
    this.ownerAuthId = "";
    this.accessToken = "";
    this.userRepoOwner = "";
    this.userRepoName = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.QueryOnlyRepoAccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "owner_auth_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "access_token",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "user_repo_owner",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "user_repo_name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zOi, e, t);
  }
};
zR = class VOi extends ie {
  constructor(e) {
    super();
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_block",
      kind: "message",
      T: WB
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new VOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VOi, e, t);
  }
};
ATh = class KOi extends ie {
  constructor(e) {
    super();
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FileResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: iae
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new KOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KOi, e, t);
  }
};
XRc = class YOi extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new YOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YOi, e, t);
  }
};
ePc = class ZOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemSearchRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request",
      kind: "message",
      T: ZRc
    }]);
  }
  static fromBinary(e, t) {
    return new ZOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZOi, e, t);
  }
};
tPc = class XOi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeResultWithClassificationInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "code_result",
      kind: "message",
      T: zR
    }, {
      no: 2,
      name: "line_number_classification",
      kind: "message",
      T: yTh,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new XOi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XOi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XOi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XOi, e, t);
  }
};
yTh = class e3i extends ie {
  constructor(e) {
    super();
    this.queryComputedFor = "";
    this.matchedStrings = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "detailed_line",
      kind: "message",
      T: M9o
    }, {
      no: 2,
      name: "query_computed_for",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "matched_strings",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "highlight_range",
      kind: "message",
      T: wF
    }]);
  }
  static fromBinary(e, t) {
    return new e3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e3i, e, t);
  }
};
nPc = class t3i extends ie {
  constructor(e) {
    super();
    this.codeResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemSearchResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "response",
      kind: "message",
      T: XRc
    }, {
      no: 2,
      name: "metadata",
      kind: "message",
      T: wTh,
      opt: true
    }, {
      no: 3,
      name: "code_results",
      kind: "message",
      T: tPc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new t3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t3i, e, t);
  }
};
wTh = class n3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SemSearchResponse.SemSearchMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query_embedding_model",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "server_side_latency_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "embed_latency_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "knn_latency_ms",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new n3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n3i, e, t);
  }
};
qpA = class i3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LoginRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new i3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i3i, e, t);
  }
};
HpA = class r3i extends ie {
  constructor(e) {
    super();
    this.loginUrl = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.LoginResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "login_url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new r3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r3i, e, t);
  }
};
JpA = class s3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IsLoggedInRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new s3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s3i, e, t);
  }
};
GpA = class o3i extends ie {
  constructor(e) {
    super();
    this.loggedIn = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IsLoggedInResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "logged_in",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new o3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o3i, e, t);
  }
};
WpA = class a3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PollLoginRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new a3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a3i, e, t);
  }
};
QpA = class c3i extends ie {
  constructor(e) {
    super();
    this.status = t9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PollLoginResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(t9n)
    }]);
  }
  static fromBinary(e, t) {
    return new c3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.LOGGED_IN = 1] = "LOGGED_IN";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.CHECKING = 3] = "CHECKING";
})(t9n ||= {});
v.util.setEnumType(t9n, "aiserver.v1.PollLoginResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_LOGGED_IN"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_CHECKING"
}]);
jpA = class l3i extends ie {
  constructor(e) {
    super();
    this.scopes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpgradeScopeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "scopes",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new l3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l3i, e, t);
  }
};
zpA = class u3i extends ie {
  constructor(e) {
    super();
    this.status = n9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UpgradeScopeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(n9n)
    }]);
  }
  static fromBinary(e, t) {
    return new u3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
})(n9n ||= {});
v.util.setEnumType(n9n, "aiserver.v1.UpgradeScopeResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}]);
VpA = class d3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoriesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new d3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d3i, e, t);
  }
};
KpA = class h3i extends ie {
  constructor(e) {
    super();
    this.repositories = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoriesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repositories",
      kind: "message",
      T: z_,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new h3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h3i, e, t);
  }
};
YpA = class m3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UploadRepositoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new m3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m3i, e, t);
  }
};
ZpA = class p3i extends ie {
  constructor(e) {
    super();
    this.status = i9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.UploadRepositoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(i9n)
    }]);
  }
  static fromBinary(e, t) {
    return new p3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.AUTH_TOKEN_BAD_PERMISSIONS = 3] = "AUTH_TOKEN_BAD_PERMISSIONS";
  n[n.ALREADY_EXISTS = 4] = "ALREADY_EXISTS";
})(i9n ||= {});
v.util.setEnumType(i9n, "aiserver.v1.UploadRepositoryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_AUTH_TOKEN_BAD_PERMISSIONS"
}, {
  no: 4,
  name: "STATUS_ALREADY_EXISTS"
}]);
_Th = class g3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new g3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g3i, e, t);
  }
};
CTh = class f3i extends ie {
  constructor(e) {
    super();
    this.status = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "not_found",
      kind: "message",
      T: STh,
      oneof: "status"
    }, {
      no: 2,
      name: "uploading",
      kind: "message",
      T: ETh,
      oneof: "status"
    }, {
      no: 3,
      name: "syncing",
      kind: "message",
      T: xTh,
      oneof: "status"
    }, {
      no: 4,
      name: "synced",
      kind: "message",
      T: TTh,
      oneof: "status"
    }, {
      no: 5,
      name: "not_subscribed",
      kind: "message",
      T: kTh,
      oneof: "status"
    }, {
      no: 6,
      name: "too_big",
      kind: "message",
      T: ITh,
      oneof: "status"
    }, {
      no: 7,
      name: "auth_token_not_found",
      kind: "message",
      T: DTh,
      oneof: "status"
    }, {
      no: 8,
      name: "auth_token_not_authorized",
      kind: "message",
      T: BTh,
      oneof: "status"
    }, {
      no: 10,
      name: "error_uploading",
      kind: "message",
      T: iPc,
      oneof: "status"
    }, {
      no: 11,
      name: "error_syncing",
      kind: "message",
      T: iPc,
      oneof: "status"
    }, {
      no: 9,
      name: "is_owner",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new f3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f3i, e, t);
  }
};
STh = class b3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.NotFound";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new b3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b3i, e, t);
  }
};
kTh = class v3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.NotSubscribed";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new v3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v3i, e, t);
  }
};
ETh = class A3i extends ie {
  constructor(e) {
    super();
    this.progress = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.Uploading";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "progress",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new A3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A3i, e, t);
  }
};
xTh = class y3i extends ie {
  constructor(e) {
    super();
    this.branch = "";
    this.oldCommit = "";
    this.newCommit = "";
    this.progress = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.Syncing";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "branch",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "old_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "new_commit",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "progress",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new y3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y3i, e, t);
  }
};
TTh = class w3i extends ie {
  constructor(e) {
    super();
    this.branch = "";
    this.commit = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.Synced";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "branch",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "commit",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new w3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w3i, e, t);
  }
};
ITh = class _3i extends ie {
  constructor(e) {
    super();
    this.maxSize = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.TooBig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "max_size",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new _3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_3i, e, t);
  }
};
DTh = class C3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotFound";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new C3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C3i, e, t);
  }
};
BTh = class S3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotAuthorized";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new S3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S3i, e, t);
  }
};
iPc = class k3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryStatusResponse.EmptyMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new k3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k3i, e, t);
  }
};
z_ = class E3i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.remoteUrls = [];
    this.remoteNames = [];
    this.repoName = "";
    this.repoOwner = "";
    this.isTracked = false;
    this.isLocal = false;
    this.workspaceUri = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepositoryInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "remote_urls",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 3,
      name: "remote_names",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 4,
      name: "repo_name",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "repo_owner",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "is_tracked",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "is_local",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "num_files",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 9,
      name: "orthogonal_transform_seed",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 10,
      name: "preferred_embedding_model",
      kind: "enum",
      T: v.getEnumType(AT),
      opt: true
    }, {
      no: 11,
      name: "workspace_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "preferred_db_provider",
      kind: "enum",
      T: v.getEnumType(s8o),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new E3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E3i, e, t);
  }
};
XpA = class x3i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.topK = 0;
    this.topReflectionsK = 0;
    this.indexIds = [];
    this.useModelOnFiles = false;
    this.useReflections = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchRepositoryDeepContextRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "top_k",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "top_reflections_k",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "index_ids",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "use_model_on_files",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "use_reflections",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new x3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x3i, e, t);
  }
};
RTh = class T3i extends ie {
  constructor(e) {
    super();
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.NodeResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "node",
      kind: "message",
      T: QRc
    }, {
      no: 2,
      name: "file",
      kind: "message",
      T: iae
    }, {
      no: 3,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new T3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T3i, e, t);
  }
};
PTh = class I3i extends ie {
  constructor(e) {
    super();
    this.score = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReflectionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "reflection",
      kind: "message",
      T: xxh
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }]);
  }
  static fromBinary(e, t) {
    return new I3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I3i, e, t);
  }
};
LTh = class D3i extends ie {
  constructor(e) {
    super();
    this.topNodes = [];
    this.reflections = [];
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchRepositoryDeepContextResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "top_nodes",
      kind: "message",
      T: RTh,
      repeated: true
    }, {
      no: 2,
      name: "reflections",
      kind: "message",
      T: PTh,
      repeated: true
    }, {
      no: 3,
      name: "index_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new D3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D3i, e, t);
  }
};
NTh = class B3i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.codeResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLineNumberClassificationsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "code_results",
      kind: "message",
      T: zR,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new B3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B3i, e, t);
  }
};
MTh = class R3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetLineNumberClassificationsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "classified_result",
      kind: "message",
      T: tPc
    }]);
  }
  static fromBinary(e, t) {
    return new R3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R3i, e, t);
  }
};
FTh = class P3i extends ie {
  constructor(e) {
    super();
    this.codebaseId = "";
    this.copyTaskHandle = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCopyStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "codebase_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "copy_task_handle",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new P3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P3i, e, t);
  }
};
OTh = class L3i extends ie {
  constructor(e) {
    super();
    this.phase = r9n.UNSPECIFIED;
    this.percentDone = 0;
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCopyStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "phase",
      kind: "enum",
      T: v.getEnumType(r9n)
    }, {
      no: 2,
      name: "percent_done",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "error_message",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "completed_status",
      kind: "enum",
      T: v.getEnumType(a8o),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new L3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INITIALIZING = 1] = "INITIALIZING";
  n[n.COPYING = 2] = "COPYING";
  n[n.COMPLETED = 3] = "COMPLETED";
  n[n.CREATING_SEARCH_FILTERS = 4] = "CREATING_SEARCH_FILTERS";
  n[n.COPYING_SEARCH_STATE = 5] = "COPYING_SEARCH_STATE";
  n[n.COPYING_TREE_STATE = 6] = "COPYING_TREE_STATE";
  n[n.SYNCING_COPY = 7] = "SYNCING_COPY";
})(r9n ||= {});
v.util.setEnumType(r9n, "aiserver.v1.GetCopyStatusResponse.Phase", [{
  no: 0,
  name: "PHASE_UNSPECIFIED"
}, {
  no: 1,
  name: "PHASE_INITIALIZING"
}, {
  no: 2,
  name: "PHASE_COPYING"
}, {
  no: 3,
  name: "PHASE_COMPLETED"
}, {
  no: 4,
  name: "PHASE_CREATING_SEARCH_FILTERS"
}, {
  no: 5,
  name: "PHASE_COPYING_SEARCH_STATE"
}, {
  no: 6,
  name: "PHASE_COPYING_TREE_STATE"
}, {
  no: 7,
  name: "PHASE_SYNCING_COPY"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.UP_TO_DATE = 1] = "UP_TO_DATE";
  n[n.OUT_OF_SYNC = 2] = "OUT_OF_SYNC";
  n[n.FAILURE = 3] = "FAILURE";
})(a8o ||= {});
v.util.setEnumType(a8o, "aiserver.v1.GetCopyStatusResponse.CompletedStatus", [{
  no: 0,
  name: "COMPLETED_STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "COMPLETED_STATUS_UP_TO_DATE"
}, {
  no: 2,
  name: "COMPLETED_STATUS_OUT_OF_SYNC"
}, {
  no: 3,
  name: "COMPLETED_STATUS_FAILURE"
}]);
UTh = class N3i extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.diff = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IndexedFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "diff",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new N3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N3i, e, t);
  }
};
$Th = class M3i extends ie {
  constructor(e) {
    super();
    this.prNumber = 0;
    this.sha = "";
    this.message = "";
    this.changedFiles = [];
    this.generation = 0;
    this.commitSecret = "";
    this.unixTimestamp = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IndexedPullRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_number",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "changed_files",
      kind: "message",
      T: UTh,
      repeated: true
    }, {
      no: 5,
      name: "generation",
      kind: "scalar",
      T: 13
    }, {
      no: 6,
      name: "commit_secret",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "unix_timestamp",
      kind: "scalar",
      T: 3
    }, {
      no: 8,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "author",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new M3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new M3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new M3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(M3i, e, t);
  }
};
qTh = class F3i extends ie {
  constructor(e) {
    super();
    this.origin = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistoryInitHandshakeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "origin",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "test_origin_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "test_origin_commit_secret",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "send_copy_candidates",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new F3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(F3i, e, t);
  }
};
HTh = class O3i extends ie {
  constructor(e) {
    super();
    this.historyId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistoryInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "history_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "branch_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "last_indexed_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "last_indexed_commit_generation",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 5,
      name: "sync_bitmap",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new O3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new O3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new O3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(O3i, e, t);
  }
};
JTh = class U3i extends ie {
  constructor(e) {
    super();
    this.status = s9n.UNSPECIFIED;
    this.histories = [];
    this.copyCandidates = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistoryInitHandshakeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(s9n)
    }, {
      no: 2,
      name: "histories",
      kind: "message",
      T: HTh,
      repeated: true
    }, {
      no: 3,
      name: "copy_candidate_nonce",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "copy_candidates",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 5,
      name: "error_message",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new U3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(U3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.FAILURE = 1] = "FAILURE";
  n[n.SUCCESS = 2] = "SUCCESS";
  n[n.TEST_CANDIDATES = 3] = "TEST_CANDIDATES";
  n[n.NO_INDEXING = 4] = "NO_INDEXING";
})(s9n ||= {});
v.util.setEnumType(s9n, "aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_FAILURE"
}, {
  no: 2,
  name: "STATUS_SUCCESS"
}, {
  no: 3,
  name: "STATUS_TEST_CANDIDATES"
}, {
  no: 4,
  name: "STATUS_NO_INDEXING"
}]);
GTh = class $3i extends ie {
  constructor(e) {
    super();
    this.historyId = "";
    this.pullRequests = [];
    this.ignoreCommits = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistorySyncOneRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "history_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pull_requests",
      kind: "message",
      T: $Th,
      repeated: true
    }, {
      no: 3,
      name: "ignore_commits",
      kind: "scalar",
      T: 13,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new $3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($3i, e, t);
  }
};
WTh = class q3i extends ie {
  constructor(e) {
    super();
    this.status = o9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistorySyncOneResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(o9n)
    }]);
  }
  static fromBinary(e, t) {
    return new q3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new q3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new q3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(q3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.PARTIAL_SUCCESS = 3] = "PARTIAL_SUCCESS";
  n[n.NOT_INDEXING = 4] = "NOT_INDEXING";
})(o9n ||= {});
v.util.setEnumType(o9n, "aiserver.v1.RepoHistorySyncOneResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_PARTIAL_SUCCESS"
}, {
  no: 4,
  name: "STATUS_NOT_INDEXING"
}]);
QTh = class H3i extends ie {
  constructor(e) {
    super();
    this.syncedHistories = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistorySyncCompleteRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "synced_histories",
      kind: "message",
      T: jTh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new H3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(H3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SUCCESS = 1] = "SUCCESS";
  n[n.FAILURE = 2] = "FAILURE";
  n[n.TOTAL_FAILURE = 3] = "TOTAL_FAILURE";
  n[n.INTERRUPTED = 4] = "INTERRUPTED";
})(a9n ||= {});
v.util.setEnumType(a9n, "aiserver.v1.RepoHistorySyncCompleteRequest.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_SUCCESS"
}, {
  no: 2,
  name: "STATUS_FAILURE"
}, {
  no: 3,
  name: "STATUS_TOTAL_FAILURE"
}, {
  no: 4,
  name: "STATUS_INTERRUPTED"
}]);
jTh = class J3i extends ie {
  constructor(e) {
    super();
    this.historyId = "";
    this.status = a9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "history_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status",
      kind: "enum",
      T: v.getEnumType(a9n)
    }, {
      no: 3,
      name: "last_indexed_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "last_indexed_commit_secret",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "last_indexed_commit_generation",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new J3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new J3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new J3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(J3i, e, t);
  }
};
zTh = class G3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RepoHistorySyncCompleteResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new G3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(G3i, e, t);
  }
};
VTh = class W3i extends ie {
  constructor(e) {
    super();
    this.query = "";
    this.topK = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchPRHistoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }, {
      no: 2,
      name: "query",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "top_k",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new W3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(W3i, e, t);
  }
};
KTh = class Q3i extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    this.startLineNumberZeroIndexed = 0;
    this.endLineNumberZeroIndexedExclusive = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.PRDiffChunkPointer";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number_zero_indexed",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number_zero_indexed_exclusive",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Q3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Q3i, e, t);
  }
};
YTh = class j3i extends ie {
  constructor(e) {
    super();
    this.results = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchPRHistoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "results",
      kind: "message",
      T: ZTh,
      repeated: true
    }, {
      no: 2,
      name: "git_height",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new j3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(j3i, e, t);
  }
};
ZTh = class z3i extends ie {
  constructor(e) {
    super();
    this.commitHash = "";
    this.score = 0;
    this.diffChunks = [];
    this.changedFiles = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SearchPRHistoryResponse.PRSearchResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "score",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "diff_chunks",
      kind: "message",
      T: KTh,
      repeated: true
    }, {
      no: 4,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "summary",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "pr_number",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 7,
      name: "author",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 8,
      name: "date",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 9,
      name: "changed_files",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new z3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(z3i, e, t);
  }
};
XTh = class V3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RemoveRepoHistoryRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new V3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(V3i, e, t);
  }
};
eIh = class K3i extends ie {
  constructor(e) {
    super();
    this.status = c9n.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RemoveRepoHistoryResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(c9n)
    }]);
  }
  static fromBinary(e, t) {
    return new K3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(K3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NOT_FOUND = 1] = "NOT_FOUND";
  n[n.NOT_AUTHORIZED = 2] = "NOT_AUTHORIZED";
  n[n.PARTIAL_SUCCESS = 3] = "PARTIAL_SUCCESS";
  n[n.SUCCESS = 4] = "SUCCESS";
})(c9n ||= {});
v.util.setEnumType(c9n, "aiserver.v1.RemoveRepoHistoryResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_NOT_FOUND"
}, {
  no: 2,
  name: "STATUS_NOT_AUTHORIZED"
}, {
  no: 3,
  name: "STATUS_PARTIAL_SUCCESS"
}, {
  no: 4,
  name: "STATUS_SUCCESS"
}]);
tIh = class Y3i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPRIndexingStatusRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "repository",
      kind: "message",
      T: z_
    }]);
  }
  static fromBinary(e, t) {
    return new Y3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Y3i, e, t);
  }
};
nIh = class Z3i extends ie {
  constructor(e) {
    super();
    this.status = l9n.UNSPECIFIED;
    this.syncPercentage = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetPRIndexingStatusResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "status",
      kind: "enum",
      T: v.getEnumType(l9n)
    }, {
      no: 2,
      name: "sync_percentage",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "last_indexed_commit",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "last_indexed_generation",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 5,
      name: "total_commits",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 6,
      name: "indexing_rate",
      kind: "scalar",
      T: 2,
      opt: true
    }, {
      no: 7,
      name: "last_updated_timestamp",
      kind: "scalar",
      T: 3,
      opt: true
    }, {
      no: 8,
      name: "index_version",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Z3i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z3i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z3i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Z3i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.EMPTY = 1] = "EMPTY";
  n[n.SYNCING = 2] = "SYNCING";
  n[n.SYNCED = 3] = "SYNCED";
  n[n.PARTIAL = 4] = "PARTIAL";
})(l9n ||= {});
v.util.setEnumType(l9n, "aiserver.v1.GetPRIndexingStatusResponse.Status", [{
  no: 0,
  name: "STATUS_UNSPECIFIED"
}, {
  no: 1,
  name: "STATUS_EMPTY"
}, {
  no: 2,
  name: "STATUS_SYNCING"
}, {
  no: 3,
  name: "STATUS_SYNCED"
}, {
  no: 4,
  name: "STATUS_PARTIAL"
}]);
