"use strict";

// Module: out-build/proto/agent/v1/repo_pb.js
// Offset: 3211659 (bundle byte offset)
// Size: 1205 bytes
Ka();
IRh = class RGi extends ie {
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
    this.pathEncryptionKey = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RepositoryIndexingInfo";
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
      name: "orthogonal_transform_seed",
      kind: "scalar",
      T: 1,
      opt: true
    }, {
      no: 9,
      name: "workspace_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "path_encryption_key",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new RGi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new RGi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new RGi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(RGi, e, t);
  }
};
