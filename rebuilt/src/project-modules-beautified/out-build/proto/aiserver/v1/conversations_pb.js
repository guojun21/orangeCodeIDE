"use strict";

// Module: out-build/proto/aiserver/v1/conversations_pb.js
// Offset: 34021534 (bundle byte offset)
// Size: 4219 bytes
Ka();
iM();
ZDa = class Uto extends ie {
  constructor(e) {
    super();
    this.commitHashes = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCommitMetricsRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit_hashes",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 2,
      name: "branch",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Uto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Uto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Uto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Uto, e, t);
  }
};
oqf = class $to extends ie {
  constructor(e) {
    super();
    this.filePath = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCommitMetricsByFilePathRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "file_path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "start_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 3,
      name: "end_line",
      kind: "scalar",
      T: 5,
      opt: true
    }, {
      no: 4,
      name: "commit_hash",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "limit",
      kind: "scalar",
      T: 5,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new $to().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $to().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $to().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals($to, e, t);
  }
};
XDa = class qto extends ie {
  constructor(e) {
    super();
    this.commitHash = "";
    this.totalLinesAdded = 0;
    this.totalLinesDeleted = 0;
    this.tabLinesAdded = 0;
    this.tabLinesDeleted = 0;
    this.agentLinesAdded = 0;
    this.agentLinesDeleted = 0;
    this.nonAiLinesAdded = 0;
    this.nonAiLinesDeleted = 0;
    this.repoName = "";
    this.userEmail = "";
    this.rangeAnnotations = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.CommitMetrics";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commit_hash",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "total_lines_added",
      kind: "scalar",
      T: 5
    }, {
      no: 3,
      name: "total_lines_deleted",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "tab_lines_added",
      kind: "scalar",
      T: 5
    }, {
      no: 5,
      name: "tab_lines_deleted",
      kind: "scalar",
      T: 5
    }, {
      no: 6,
      name: "agent_lines_added",
      kind: "scalar",
      T: 5
    }, {
      no: 7,
      name: "agent_lines_deleted",
      kind: "scalar",
      T: 5
    }, {
      no: 8,
      name: "non_ai_lines_added",
      kind: "scalar",
      T: 5
    }, {
      no: 9,
      name: "non_ai_lines_deleted",
      kind: "scalar",
      T: 5
    }, {
      no: 10,
      name: "branch_name",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 11,
      name: "is_primary_branch",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 12,
      name: "repo_name",
      kind: "scalar",
      T: 9
    }, {
      no: 13,
      name: "message",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 14,
      name: "commit_timestamp",
      kind: "message",
      T: $0,
      opt: true
    }, {
      no: 16,
      name: "user_email",
      kind: "scalar",
      T: 9
    }, {
      no: 19,
      name: "range_annotations",
      kind: "message",
      T: sUo,
      repeated: true
    }, {
      no: 20,
      name: "commit_source",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new qto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qto, e, t);
  }
};
eBa = class Hto extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.summaryBullets = [];
    this.models = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.ConversationReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
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
      name: "tldr",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "overview",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 5,
      name: "summary_bullets",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 6,
      name: "models",
      kind: "scalar",
      T: 9,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Hto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hto, e, t);
  }
};
mCu = class Jto extends ie {
  constructor(e) {
    super();
    this.commits = [];
    this.conversations = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.GetCommitMetricsResponse";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "commits",
      kind: "message",
      T: XDa,
      repeated: true
    }, {
      no: 2,
      name: "conversations",
      kind: "message",
      T: eBa,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new Jto().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jto().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jto().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jto, e, t);
  }
};
