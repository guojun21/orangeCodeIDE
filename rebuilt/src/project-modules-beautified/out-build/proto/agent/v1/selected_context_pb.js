"use strict";

// Module: out-build/proto/agent/v1/selected_context_pb.js
// Offset: 3234415 (bundle byte offset)
// Size: 26858 bytes
Ka();
L9e();
qbt();
r6o();
PRh();
y6o = class aWi extends ie {
  constructor(e) {
    super();
    this.dataOrBlobId = {
      case: undefined
    };
    this.uuid = "";
    this.path = "";
    this.mimeType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedImage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 8,
      name: "data",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 9,
      name: "blob_id_with_data",
      kind: "message",
      T: N2c,
      oneof: "data_or_blob_id"
    }, {
      no: 2,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "dimension",
      kind: "message",
      T: qRh
    }, {
      no: 7,
      name: "mime_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aWi, e, t);
  }
};
N2c = class cWi extends ie {
  constructor(e) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedImage.BlobIdWithData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "data",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new cWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cWi, e, t);
  }
};
qRh = class lWi extends ie {
  constructor(e) {
    super();
    this.width = 0;
    this.height = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedImage.Dimension";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "width",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "height",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new lWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lWi, e, t);
  }
};
HRh = class uWi extends ie {
  constructor(e) {
    super();
    this.dataOrBlobId = {
      case: undefined
    };
    this.uuid = "";
    this.filename = "";
    this.mimeType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedDocument";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 8,
      name: "data",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 9,
      name: "blob_id_with_data",
      kind: "message",
      T: JRh,
      oneof: "data_or_blob_id"
    }, {
      no: 2,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "filename",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "mime_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new uWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(uWi, e, t);
  }
};
JRh = class dWi extends ie {
  constructor(e) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedDocument.BlobIdWithData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "data",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new dWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dWi, e, t);
  }
};
GRh = class hWi extends ie {
  constructor(e) {
    super();
    this.dataOrBlobId = {
      case: undefined
    };
    this.uuid = "";
    this.path = "";
    this.mimeType = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedVideo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 8,
      name: "data",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }, {
      no: 9,
      name: "blob_id_with_data",
      kind: "message",
      T: WRh,
      oneof: "data_or_blob_id"
    }, {
      no: 2,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "fps",
      kind: "scalar",
      T: 2,
      opt: true
    }, {
      no: 7,
      name: "mime_type",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new hWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hWi, e, t);
  }
};
WRh = class mWi extends ie {
  constructor(e) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedVideo.BlobIdWithData";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_id",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "data",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new mWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mWi, e, t);
  }
};
QRh = class pWi extends ie {
  constructor(e) {
    super();
    this.dataOrBlobId = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.ExtraContextEntry";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "data",
      kind: "scalar",
      T: 9,
      oneof: "data_or_blob_id"
    }, {
      no: 2,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      oneof: "data_or_blob_id"
    }]);
  }
  static fromBinary(e, t) {
    return new pWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pWi, e, t);
  }
};
jRh = class gWi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedFile";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "relative_path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gWi, e, t);
  }
};
evt = class fWi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedCodeSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "relative_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "range",
      kind: "message",
      T: NRe
    }]);
  }
  static fromBinary(e, t) {
    return new fWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fWi, e, t);
  }
};
zRh = class bWi extends ie {
  constructor(e) {
    super();
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedTerminal";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "path",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new bWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bWi, e, t);
  }
};
M2c = class vWi extends ie {
  constructor(e) {
    super();
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedTerminalSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "range",
      kind: "message",
      T: NRe
    }]);
  }
  static fromBinary(e, t) {
    return new vWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vWi, e, t);
  }
};
VRh = class AWi extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedFolder";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "relative_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "directory_tree",
      kind: "message",
      T: u9n
    }]);
  }
  static fromBinary(e, t) {
    return new AWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new AWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new AWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(AWi, e, t);
  }
};
F2c = class yWi extends ie {
  constructor(e) {
    super();
    this.url = "";
    this.uuid = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedExternalLink";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "uuid",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "pdf_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "is_pdf",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 5,
      name: "filename",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new yWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yWi, e, t);
  }
};
O2c = class wWi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedCursorRule";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rule",
      kind: "message",
      T: X9n
    }]);
  }
  static fromBinary(e, t) {
    return new wWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wWi, e, t);
  }
};
U2c = class _Wi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.fullContentLengthCharCount = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedGitDiff";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "full_content_length_char_count",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new _Wi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _Wi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _Wi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_Wi, e, t);
  }
};
w6o = class CWi extends ie {
  constructor(e) {
    super();
    this.content = "";
    this.fullContentLengthCharCount = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedGitDiffFromBranchToMain";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "content",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "full_content_length_char_count",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new CWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new CWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new CWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(CWi, e, t);
  }
};
$2c = class SWi extends ie {
  constructor(e) {
    super();
    this.sha = "";
    this.message = "";
    this.diff = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedGitCommit";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "sha",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "diff",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new SWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new SWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new SWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(SWi, e, t);
  }
};
q2c = class kWi extends ie {
  constructor(e) {
    super();
    this.number = 0;
    this.url = "";
    this.folderPath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedPullRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "folder_path",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "summary_json",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new kWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(kWi, e, t);
  }
};
H2c = class EWi extends ie {
  constructor(e) {
    super();
    this.prUrl = "";
    this.filePath = "";
    this.startLine = 0;
    this.endLine = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedGitPRDiffSelection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "pr_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "start_line",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "end_line",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "diff_content",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new EWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EWi, e, t);
  }
};
tvt = class xWi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedCursorCommand";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new xWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xWi, e, t);
  }
};
J2c = class TWi extends ie {
  constructor(e) {
    super();
    this.docId = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedDocumentation";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "doc_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new TWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TWi, e, t);
  }
};
p8n = class IWi extends ie {
  constructor(e) {
    super();
    this.agentId = "";
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedPastChat";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "agent_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new IWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IWi, e, t);
  }
};
G2c = class DWi extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecentAgent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "overview",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new DWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DWi, e, t);
  }
};
W2c = class BWi extends ie {
  constructor(e) {
    super();
    this.recentAgents = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecentAgentsContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "recent_agents",
      kind: "message",
      T: G2c,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new BWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BWi, e, t);
  }
};
KRh = class RWi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.CallFrame";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "function_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "line_number",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "column_number",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new RWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RWi, e, t);
  }
};
YRh = class PWi extends ie {
  constructor(e) {
    super();
    this.callFrames = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.StackTrace";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "call_frames",
      kind: "message",
      T: KRh,
      repeated: true
    }, {
      no: 2,
      name: "raw_stack_trace",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new PWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new PWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new PWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(PWi, e, t);
  }
};
ZRh = class LWi extends ie {
  constructor(e) {
    super();
    this.message = "";
    this.timestamp = 0;
    this.level = "";
    this.clientName = "";
    this.sessionId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedConsoleLog";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 1
    }, {
      no: 3,
      name: "level",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "client_name",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "session_id",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "stack_trace",
      kind: "message",
      T: YRh,
      opt: true
    }, {
      no: 7,
      name: "object_data_json",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new LWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new LWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new LWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(LWi, e, t);
  }
};
XRh = class NWi extends ie {
  constructor(e) {
    super();
    this.element = "";
    this.xpath = "";
    this.textContent = "";
    this.extra = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedUIElement";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "element",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "xpath",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "text_content",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "extra",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "component",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "component_props_json",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new NWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new NWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new NWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(NWi, e, t);
  }
};
Q2c = class MWi extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedSubagent";
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
    return new MWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new MWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new MWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(MWi, e, t);
  }
};
j2c = class FWi extends ie {
  constructor(e) {
    super();
    this.browserId = "";
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedBrowser";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "browser_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "page_title",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new FWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new FWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new FWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(FWi, e, t);
  }
};
rae = class OWi extends ie {
  constructor(e) {
    super();
    this.selectedImages = [];
    this.extraContext = [];
    this.extraContextEntries = [];
    this.files = [];
    this.codeSelections = [];
    this.terminals = [];
    this.terminalSelections = [];
    this.folders = [];
    this.externalLinks = [];
    this.cursorRules = [];
    this.cursorCommands = [];
    this.documentations = [];
    this.uiElements = [];
    this.consoleLogs = [];
    this.gitCommits = [];
    this.pastChats = [];
    this.gitPrDiffSelections = [];
    this.selectedPullRequests = [];
    this.selectedSubagents = [];
    this.selectedVideos = [];
    this.selectedBrowsers = [];
    this.selectedDocuments = [];
    this.selectedSkills = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.SelectedContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "selected_images",
      kind: "message",
      T: y6o,
      repeated: true
    }, {
      no: 2,
      name: "invocation_context",
      kind: "message",
      T: z2c,
      opt: true
    }, {
      no: 3,
      name: "extra_context",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 16,
      name: "extra_context_entries",
      kind: "message",
      T: QRh,
      repeated: true
    }, {
      no: 4,
      name: "files",
      kind: "message",
      T: jRh,
      repeated: true
    }, {
      no: 5,
      name: "code_selections",
      kind: "message",
      T: evt,
      repeated: true
    }, {
      no: 6,
      name: "terminals",
      kind: "message",
      T: zRh,
      repeated: true
    }, {
      no: 7,
      name: "terminal_selections",
      kind: "message",
      T: M2c,
      repeated: true
    }, {
      no: 8,
      name: "folders",
      kind: "message",
      T: VRh,
      repeated: true
    }, {
      no: 9,
      name: "external_links",
      kind: "message",
      T: F2c,
      repeated: true
    }, {
      no: 10,
      name: "cursor_rules",
      kind: "message",
      T: O2c,
      repeated: true
    }, {
      no: 18,
      name: "git_diff",
      kind: "message",
      T: U2c,
      opt: true
    }, {
      no: 11,
      name: "git_diff_from_branch_to_main",
      kind: "message",
      T: w6o,
      opt: true
    }, {
      no: 12,
      name: "cursor_commands",
      kind: "message",
      T: tvt,
      repeated: true
    }, {
      no: 13,
      name: "documentations",
      kind: "message",
      T: J2c,
      repeated: true
    }, {
      no: 14,
      name: "ui_elements",
      kind: "message",
      T: XRh,
      repeated: true
    }, {
      no: 15,
      name: "console_logs",
      kind: "message",
      T: ZRh,
      repeated: true
    }, {
      no: 17,
      name: "git_commits",
      kind: "message",
      T: $2c,
      repeated: true
    }, {
      no: 19,
      name: "past_chats",
      kind: "message",
      T: p8n,
      repeated: true
    }, {
      no: 20,
      name: "git_pr_diff_selections",
      kind: "message",
      T: H2c,
      repeated: true
    }, {
      no: 21,
      name: "selected_pull_requests",
      kind: "message",
      T: q2c,
      repeated: true
    }, {
      no: 22,
      name: "selected_subagents",
      kind: "message",
      T: Q2c,
      repeated: true
    }, {
      no: 23,
      name: "selected_videos",
      kind: "message",
      T: GRh,
      repeated: true
    }, {
      no: 24,
      name: "selected_browsers",
      kind: "message",
      T: j2c,
      repeated: true
    }, {
      no: 25,
      name: "selected_documents",
      kind: "message",
      T: HRh,
      repeated: true
    }, {
      no: 26,
      name: "selected_skills",
      kind: "message",
      T: x2c,
      repeated: true
    }, {
      no: 27,
      name: "recent_agents_context",
      kind: "message",
      T: W2c,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new OWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new OWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new OWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(OWi, e, t);
  }
};
z2c = class UWi extends ie {
  constructor(e) {
    super();
    this.data = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "slack_thread",
      kind: "message",
      T: ePh,
      oneof: "data"
    }, {
      no: 2,
      name: "github_pr",
      kind: "message",
      T: tPh,
      oneof: "data"
    }, {
      no: 3,
      name: "ide_state",
      kind: "message",
      T: V2c,
      oneof: "data"
    }, {
      no: 10,
      name: "blob_id",
      kind: "scalar",
      T: 12,
      oneof: "data"
    }]);
  }
  static fromBinary(e, t) {
    return new UWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new UWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new UWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(UWi, e, t);
  }
};
ePh = class $Wi extends ie {
  constructor(e) {
    super();
    this.thread = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.SlackThread";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "thread",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "channel_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "channel_purpose",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "channel_topic",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new $Wi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $Wi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $Wi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($Wi, e, t);
  }
};
tPh = class qWi extends ie {
  constructor(e) {
    super();
    this.title = "";
    this.description = "";
    this.comments = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.GithubPR";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "title",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "description",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "comments",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "ci_failures",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new qWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qWi, e, t);
  }
};
V2c = class HWi extends ie {
  constructor(e) {
    super();
    this.visibleFiles = [];
    this.recentlyViewedFiles = [];
    this.currentlyViewedPrs = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.IdeState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "visible_files",
      kind: "message",
      T: z5t,
      repeated: true
    }, {
      no: 2,
      name: "recently_viewed_files",
      kind: "message",
      T: z5t,
      repeated: true
    }, {
      no: 3,
      name: "currently_viewed_prs",
      kind: "message",
      T: Y2c,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new HWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new HWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new HWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(HWi, e, t);
  }
};
z5t = class JWi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.totalLines = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.IdeState.File";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "relative_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "cursor_position",
      kind: "message",
      T: K2c,
      opt: true
    }, {
      no: 4,
      name: "total_lines",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "active_command",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new JWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new JWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new JWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(JWi, e, t);
  }
};
K2c = class GWi extends ie {
  constructor(e) {
    super();
    this.line = 0;
    this.text = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.IdeState.File.CursorPosition";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "line",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new GWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new GWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new GWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(GWi, e, t);
  }
};
Y2c = class WWi extends ie {
  constructor(e) {
    super();
    this.number = 0;
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.InvocationContext.IdeState.ViewedPullRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "number",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "title",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "folder_path",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "summary_json",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "description",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new WWi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new WWi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new WWi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(WWi, e, t);
  }
};
