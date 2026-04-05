"use strict";

// Module: out-build/proto/anyrun/v1/snapshot_pb.js
// Offset: 27720667 (bundle byte offset)
// Size: 3906 bytes
Ka();
FGg();
isu();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.CREATING = 1] = "CREATING";
  n[n.READY = 2] = "READY";
  n[n.FAILED = 3] = "FAILED";
})(G$e ||= {});
v.util.setEnumType(G$e, "anyrun.v1.SnapshotState", [{
  no: 0,
  name: "SNAPSHOT_STATE_UNSPECIFIED"
}, {
  no: 1,
  name: "SNAPSHOT_STATE_CREATING"
}, {
  no: 2,
  name: "SNAPSHOT_STATE_READY"
}, {
  no: 3,
  name: "SNAPSHOT_STATE_FAILED"
}]);
lWg = class sgs extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.resourceVersion = 0;
    this.name = "";
    this.labels = {};
    this.creationTimestamp = Eo.zero;
    this.tenantId = "";
    this.podId = "";
    this.state = G$e.UNSPECIFIED;
    this.blobStorageFormat = H$e.LEGACY_UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.Snapshot";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "resource_version",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "labels",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 5,
      name: "creation_timestamp",
      kind: "scalar",
      T: 4
    }, {
      no: 6,
      name: "deletion_timestamp",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 12,
      name: "deletion_duration_ms",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 14,
      name: "archive_timestamp",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 15,
      name: "archive_duration_ms",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 7,
      name: "tenant_id",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }, {
      no: 13,
      name: "pod_config",
      kind: "message",
      T: rsu,
      opt: true
    }, {
      no: 9,
      name: "state",
      kind: "enum",
      T: v.getEnumType(G$e)
    }, {
      no: 10,
      name: "image_metadata",
      kind: "message",
      T: pba
    }, {
      no: 11,
      name: "blob_storage_format",
      kind: "enum",
      T: v.getEnumType(H$e)
    }]);
  }
  static fromBinary(e, t) {
    return new sgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sgs, e, t);
  }
};
i4A = class ogs extends ie {
  constructor(e) {
    super();
    this.items = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.SnapshotCollection";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "items",
      kind: "message",
      T: lWg,
      repeated: true
    }, {
      no: 2,
      name: "next_cursor",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ogs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ogs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ogs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ogs, e, t);
  }
};
Xvi = class ags extends ie {
  constructor(e) {
    super();
    this.blobBegin = Eo.zero;
    this.blobEnd = Eo.zero;
    this.fileBegin = Eo.zero;
    this.fileEnd = Eo.zero;
    this.hash = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.SnapshotFileChunk";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "blob_begin",
      kind: "scalar",
      T: 4
    }, {
      no: 2,
      name: "blob_end",
      kind: "scalar",
      T: 4
    }, {
      no: 3,
      name: "file_begin",
      kind: "scalar",
      T: 4
    }, {
      no: 4,
      name: "file_end",
      kind: "scalar",
      T: 4
    }, {
      no: 5,
      name: "hash",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new ags().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ags().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ags().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ags, e, t);
  }
};
r4A = class cgs extends ie {
  constructor(e) {
    super();
    this.rootfsFileChunks = [];
    this.rootfsFileSize = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.SnapshotVmSnapshotV1Metadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "rootfs_file_chunks",
      kind: "message",
      T: Xvi,
      repeated: true
    }, {
      no: 2,
      name: "rootfs_file_size",
      kind: "scalar",
      T: 4
    }, {
      no: 3,
      name: "memory_file_chunk",
      kind: "message",
      T: Xvi
    }, {
      no: 4,
      name: "state_file_chunk",
      kind: "message",
      T: Xvi
    }, {
      no: 5,
      name: "kernel_file_chunk",
      kind: "message",
      T: Xvi
    }, {
      no: 6,
      name: "dev_container_metadata",
      kind: "message",
      T: IGg
    }]);
  }
  static fromBinary(e, t) {
    return new cgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cgs, e, t);
  }
};
