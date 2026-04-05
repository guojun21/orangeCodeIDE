"use strict";

// Module: out-build/proto/aiserver/v1/symbolic_context_pb.js
// Offset: 2706165 (bundle byte offset)
// Size: 26510 bytes
Ka();
qp();
ixh = class zFi extends ie {
  constructor(e) {
    super();
    this.files = [];
    this.targetDir = "";
    this.repo = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateExperimentalIndexRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "files",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "target_dir",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "repo",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zFi, e, t);
  }
};
rxh = class VFi extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CreateExperimentalIndexResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new VFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VFi, e, t);
  }
};
sxh = class KFi extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListExperimentalIndexFilesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new KFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KFi, e, t);
  }
};
oxh = class YFi extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.files = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListExperimentalIndexFilesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "files",
      kind: "message",
      T: WRc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new YFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YFi, e, t);
  }
};
JRc = class ZFi extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ZFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZFi, e, t);
  }
};
axh = class XFi extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.item = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "ready",
      kind: "message",
      T: cxh,
      oneof: "item"
    }, {
      no: 3,
      name: "register",
      kind: "message",
      T: lxh,
      oneof: "item"
    }, {
      no: 4,
      name: "choose",
      kind: "message",
      T: uxh,
      oneof: "item"
    }, {
      no: 5,
      name: "summarize",
      kind: "message",
      T: dxh,
      oneof: "item"
    }, {
      no: 6,
      name: "error",
      kind: "message",
      T: hxh,
      oneof: "item"
    }]);
  }
  static fromBinary(e, t) {
    return new XFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XFi, e, t);
  }
};
cxh = class e4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ReadyItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "request",
      kind: "message",
      T: JRc
    }]);
  }
  static fromBinary(e, t) {
    return new e4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new e4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new e4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(e4i, e, t);
  }
};
lxh = class t4i extends ie {
  constructor(e) {
    super();
    this.reqUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.RegisterItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "response",
      kind: "message",
      T: mxh
    }, {
      no: 2,
      name: "request",
      kind: "message",
      T: X9o
    }, {
      no: 3,
      name: "req_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new t4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new t4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new t4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(t4i, e, t);
  }
};
uxh = class n4i extends ie {
  constructor(e) {
    super();
    this.reqUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ChooseItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "response",
      kind: "message",
      T: yxh
    }, {
      no: 2,
      name: "request",
      kind: "message",
      T: e8o
    }, {
      no: 3,
      name: "req_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new n4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new n4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new n4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(n4i, e, t);
  }
};
dxh = class i4i extends ie {
  constructor(e) {
    super();
    this.reqUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "response",
      kind: "message",
      T: Sxh
    }, {
      no: 2,
      name: "request",
      kind: "message",
      T: t8o
    }, {
      no: 3,
      name: "req_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new i4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new i4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new i4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(i4i, e, t);
  }
};
hxh = class r4i extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.statusCode = 0;
    this.request = {
      case: undefined
    };
    this.reqUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ErrorItem";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "status_code",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "register",
      kind: "message",
      T: X9o,
      oneof: "request"
    }, {
      no: 4,
      name: "choose",
      kind: "message",
      T: e8o,
      oneof: "request"
    }, {
      no: 5,
      name: "summarize",
      kind: "message",
      T: t8o,
      oneof: "request"
    }, {
      no: 6,
      name: "req_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new r4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new r4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new r4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(r4i, e, t);
  }
};
X9o = class s4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.workspaceRelativePath = "";
    this.content = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterFileToIndexRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workspace_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "root_context_node",
      kind: "message",
      T: Txh
    }, {
      no: 4,
      name: "content",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new s4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new s4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new s4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(s4i, e, t);
  }
};
mxh = class o4i extends ie {
  constructor(e) {
    super();
    this.fileId = "";
    this.rootContextNodeId = "";
    this.dependencyResolutionAttempts = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterFileToIndexResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "root_context_node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "dependency_resolution_attempts",
      kind: "message",
      T: jRc,
      repeated: true
    }, {
      no: 4,
      name: "file_data",
      kind: "message",
      T: WRc
    }]);
  }
  static fromBinary(e, t) {
    return new o4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new o4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new o4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(o4i, e, t);
  }
};
pxh = class a4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.fileId = "";
    this.dependencyResolutionResults = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetupIndexDependenciesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "file_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "dependency_resolution_results",
      kind: "message",
      T: Ixh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new a4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new a4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new a4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(a4i, e, t);
  }
};
gxh = class c4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SetupIndexDependenciesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new c4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new c4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new c4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(c4i, e, t);
  }
};
fxh = class l4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComputeIndexTopoSortRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new l4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new l4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new l4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(l4i, e, t);
  }
};
bxh = class u4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ComputeIndexTopoSortResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new u4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new u4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new u4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(u4i, e, t);
  }
};
e8o = class d4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.request = {
      case: undefined
    };
    this.recompute = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChooseCodeReferencesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file",
      kind: "message",
      T: vxh,
      oneof: "request"
    }, {
      no: 3,
      name: "node",
      kind: "message",
      T: Axh,
      oneof: "request"
    }, {
      no: 4,
      name: "recompute",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new d4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new d4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new d4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(d4i, e, t);
  }
};
vxh = class h4i extends ie {
  constructor(e) {
    super();
    this.fileId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChooseCodeReferencesRequest.FileRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new h4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new h4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new h4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(h4i, e, t);
  }
};
Axh = class m4i extends ie {
  constructor(e) {
    super();
    this.nodeId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChooseCodeReferencesRequest.NodeRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new m4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new m4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new m4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(m4i, e, t);
  }
};
yxh = class p4i extends ie {
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
    this.typeName = "aiserver.v1.ChooseCodeReferencesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file",
      kind: "message",
      T: wxh,
      oneof: "response"
    }, {
      no: 2,
      name: "node",
      kind: "message",
      T: GRc,
      oneof: "response"
    }]);
  }
  static fromBinary(e, t) {
    return new p4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new p4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new p4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(p4i, e, t);
  }
};
GRc = class g4i extends ie {
  constructor(e) {
    super();
    this.nodeId = "";
    this.actions = [];
    this.skipped = false;
    this.dependencies = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChooseCodeReferencesResponse.NodeResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "actions",
      kind: "message",
      T: N5n,
      repeated: true
    }, {
      no: 3,
      name: "skipped",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "dependencies",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new g4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new g4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new g4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(g4i, e, t);
  }
};
wxh = class f4i extends ie {
  constructor(e) {
    super();
    this.fileId = "";
    this.nodeResponses = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ChooseCodeReferencesResponse.FileResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "node_responses",
      kind: "message",
      T: GRc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new f4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new f4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new f4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(f4i, e, t);
  }
};
_xh = class b4i extends ie {
  constructor(e) {
    super();
    this.nodeId = "";
    this.references = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterCodeReferencesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "references",
      kind: "message",
      T: Rxh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new b4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new b4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new b4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(b4i, e, t);
  }
};
Cxh = class v4i extends ie {
  constructor(e) {
    super();
    this.dependencies = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RegisterCodeReferencesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "dependencies",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new v4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new v4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new v4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(v4i, e, t);
  }
};
t8o = class A4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.nodeId = "";
    this.recompute = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeWithReferencesRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "recompute",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new A4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new A4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new A4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(A4i, e, t);
  }
};
Sxh = class y4i extends ie {
  constructor(e) {
    super();
    this.response = {
      case: undefined
    };
    this.nodeId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeWithReferencesResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "success",
      kind: "message",
      T: kxh,
      oneof: "response"
    }, {
      no: 2,
      name: "dependency",
      kind: "message",
      T: Exh,
      oneof: "response"
    }, {
      no: 3,
      name: "node_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new y4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new y4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new y4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(y4i, e, t);
  }
};
kxh = class w4i extends ie {
  constructor(e) {
    super();
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeWithReferencesResponse.Success";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new w4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new w4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new w4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(w4i, e, t);
  }
};
Exh = class _4i extends ie {
  constructor(e) {
    super();
    this.nodes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SummarizeWithReferencesResponse.Dependency";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 2,
      name: "nodes",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new _4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_4i, e, t);
  }
};
n8o = class C4i extends ie {
  constructor(e) {
    super();
    this.reqUuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.RequestReceivedResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "req_uuid",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new C4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new C4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new C4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(C4i, e, t);
  }
};
xxh = class S4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.id = "";
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ReflectionData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new S4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new S4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new S4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(S4i, e, t);
  }
};
WRc = class k4i extends ie {
  constructor(e) {
    super();
    this.indexId = "";
    this.workspaceRelativePath = "";
    this.stage = "";
    this.order = 0;
    this.nodes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IndexFileData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "index_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "workspace_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "stage",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "order",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "nodes",
      kind: "message",
      T: QRc,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new k4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new k4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new k4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(k4i, e, t);
  }
};
QRc = class E4i extends ie {
  constructor(e) {
    super();
    this.nodeId = "";
    this.stage = "";
    this.content = "";
    this.summary = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.IndexFileData.NodeData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "stage",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "summary",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new E4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new E4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new E4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(E4i, e, t);
  }
};
Txh = class iSn extends ie {
  constructor(e) {
    super();
    this.workspaceRelativePath = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.children = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SerializedContextNode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "workspace_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "children",
      kind: "message",
      T: iSn,
      repeated: true
    }, {
      no: 5,
      name: "node_snippets",
      kind: "message",
      T: i8o
    }]);
  }
  static fromBinary(e, t) {
    return new iSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new iSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new iSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(iSn, e, t);
  }
};
jRc = class x4i extends ie {
  constructor(e) {
    super();
    this.workspaceRelativePath = "";
    this.nodeId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.URIResolutionAttempt";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "workspace_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "node_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "symbol",
      kind: "message",
      T: N5n
    }]);
  }
  static fromBinary(e, t) {
    return new x4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new x4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new x4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(x4i, e, t);
  }
};
Ixh = class T4i extends ie {
  constructor(e) {
    super();
    this.resolvedPaths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.URIResolutionResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "request",
      kind: "message",
      T: jRc
    }, {
      no: 2,
      name: "resolved_paths",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new T4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new T4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new T4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(T4i, e, t);
  }
};
Dxh = class I4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ExtractPathsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_code_snippets",
      kind: "message",
      T: i8o
    }]);
  }
  static fromBinary(e, t) {
    return new I4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new I4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new I4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(I4i, e, t);
  }
};
Bxh = class D4i extends ie {
  constructor(e) {
    super();
    this.paths = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ExtractPathsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "paths",
      kind: "message",
      T: N5n,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new D4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new D4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new D4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(D4i, e, t);
  }
};
Rxh = class B4i extends ie {
  constructor(e) {
    super();
    this.references = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SymbolActionResults";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "action",
      kind: "message",
      T: N5n
    }, {
      no: 2,
      name: "references",
      kind: "message",
      T: Pxh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new B4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new B4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new B4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(B4i, e, t);
  }
};
Pxh = class R4i extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.SymbolActionResultReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "range",
      kind: "message",
      T: wF
    }, {
      no: 2,
      name: "reference",
      kind: "message",
      T: i8o
    }]);
  }
  static fromBinary(e, t) {
    return new R4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(R4i, e, t);
  }
};
i8o = class P4i extends ie {
  constructor(e) {
    super();
    this.relativeWorkspacePath = "";
    this.totalLines = 0;
    this.snippets = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.FileCodeSnippets";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "relative_workspace_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "total_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "snippets",
      kind: "message",
      T: Lxh,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new P4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(P4i, e, t);
  }
};
Lxh = class L4i extends ie {
  constructor(e) {
    super();
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.lines = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeSnippet";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "end_line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "lines",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new L4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(L4i, e, t);
  }
};
N5n = class N4i extends ie {
  constructor(e) {
    super();
    this.workspaceRelativePath = "";
    this.lineNumber = 0;
    this.symbolStartColumn = 0;
    this.symbolEndColumn = 0;
    this.action = M5n.UNSPECIFIED;
    this.symbol = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CodeSymbolWithAction";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "workspace_relative_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "line_number",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "symbol_start_column",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "symbol_end_column",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "action",
      kind: "enum",
      T: v.getEnumType(M5n)
    }, {
      no: 6,
      name: "symbol",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new N4i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new N4i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new N4i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(N4i, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.GO_TO_DEFINITION = 1] = "GO_TO_DEFINITION";
  n[n.GO_TO_IMPLEMENTATION = 2] = "GO_TO_IMPLEMENTATION";
  n[n.REFERENCES = 3] = "REFERENCES";
})(M5n ||= {});
v.util.setEnumType(M5n, "aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [{
  no: 0,
  name: "CODE_SYMBOL_ACTION_UNSPECIFIED"
}, {
  no: 1,
  name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION"
}, {
  no: 2,
  name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION"
}, {
  no: 3,
  name: "CODE_SYMBOL_ACTION_REFERENCES"
}]);
