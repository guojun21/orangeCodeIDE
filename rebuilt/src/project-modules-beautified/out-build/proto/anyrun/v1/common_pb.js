"use strict";

// Module: out-build/proto/anyrun/v1/common_pb.js
// Offset: 27669481 (bundle byte offset)
// Size: 15047 bytes
Ka();
(function (n) {
  n[n.LEGACY_UNSPECIFIED = 0] = "LEGACY_UNSPECIFIED";
  n[n.V1 = 1] = "V1";
  n[n.VM_SNAPSHOT_V1 = 2] = "VM_SNAPSHOT_V1";
})(H$e ||= {});
v.util.setEnumType(H$e, "anyrun.v1.BlobStorageFormat", [{
  no: 0,
  name: "BLOB_STORAGE_FORMAT_LEGACY_UNSPECIFIED"
}, {
  no: 1,
  name: "BLOB_STORAGE_FORMAT_V1"
}, {
  no: 2,
  name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V1"
}]);
pba = class Hms extends ie {
  constructor(e) {
    super();
    this.env = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ImageMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 2,
      name: "env",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 3,
      name: "working_dir",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "arch",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Hms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hms, e, t);
  }
};
gba = class Jms extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.port = 0;
    this.visibility = {
      case: undefined
    };
    this.authentication = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PortDefinition";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "port",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "public",
      kind: "message",
      T: ZI,
      oneof: "visibility"
    }, {
      no: 4,
      name: "private",
      kind: "message",
      T: ZI,
      oneof: "visibility"
    }, {
      no: 5,
      name: "open",
      kind: "message",
      T: ZI,
      oneof: "authentication"
    }, {
      no: 6,
      name: "token",
      kind: "message",
      T: ZI,
      oneof: "authentication"
    }]);
  }
  static fromBinary(e, t) {
    return new Jms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jms, e, t);
  }
};
fba = class Gms extends ie {
  constructor(e) {
    super();
    this.visibility = {
      case: undefined
    };
    this.authentication = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DefaultPortConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "public",
      kind: "message",
      T: ZI,
      oneof: "visibility"
    }, {
      no: 2,
      name: "private",
      kind: "message",
      T: ZI,
      oneof: "visibility"
    }, {
      no: 3,
      name: "open",
      kind: "message",
      T: ZI,
      oneof: "authentication"
    }, {
      no: 4,
      name: "token",
      kind: "message",
      T: ZI,
      oneof: "authentication"
    }]);
  }
  static fromBinary(e, t) {
    return new Gms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gms, e, t);
  }
};
J$e = class Wms extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.command = "";
    this.isSystem = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DevContainerExecCommand";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 3,
      name: "command",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "is_system",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "cache_key",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new Wms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wms, e, t);
  }
};
zvi = class Qms extends ie {
  constructor(e) {
    super();
    this.cpuMcores = Eo.zero;
    this.memoryMb = Eo.zero;
    this.diskMb = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ResourceRequests";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cpu_mcores",
      kind: "scalar",
      T: 4
    }, {
      no: 2,
      name: "memory_mb",
      kind: "scalar",
      T: 4
    }, {
      no: 3,
      name: "disk_mb",
      kind: "scalar",
      T: 4
    }]);
  }
  static fromBinary(e, t) {
    return new Qms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qms, e, t);
  }
};
tsu = class jms extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ResourceLimits";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cpu_mcores",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 2,
      name: "memory_mb",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 3,
      name: "disk_mb",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 4,
      name: "swap_mb",
      kind: "scalar",
      T: 4,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new jms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jms, e, t);
  }
};
VFA = class zms extends ie {
  constructor(e) {
    super();
    this.bytesUsed = Eo.zero;
    this.bytesTotal = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DiskUsage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "bytes_used",
      kind: "scalar",
      T: 4
    }, {
      no: 2,
      name: "bytes_total",
      kind: "scalar",
      T: 4
    }]);
  }
  static fromBinary(e, t) {
    return new zms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zms, e, t);
  }
};
dGg = class Vms extends ie {
  constructor(e) {
    super();
    this.cacheUri = "";
    this.checkoutUri = "";
    this.commitHash = new Uint8Array(0);
    this.httpProxy = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.GitRepoSourceReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cache_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "checkout_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "commit_hash",
      kind: "scalar",
      T: 12
    }, {
      no: 5,
      name: "http_proxy",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Vms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vms, e, t);
  }
};
hGg = class Kms extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.tarArchive = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.TarRepoSourceReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "tar_archive",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new Kms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kms, e, t);
  }
};
mGg = class Yms extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.LocalDirectoryReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Yms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yms, e, t);
  }
};
pGg = class Zms extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.url = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.TarGzipUrlSourceReference";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Zms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zms, e, t);
  }
};
gGg = class Xms extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.NoopSourceReference";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new Xms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xms, e, t);
  }
};
KFA = class eps extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.podLabels = {};
    this.nodeLabels = {};
    this.lowCardinalityPodLabels = [];
    this.blobStorageFormat = H$e.LEGACY_UNSPECIFIED;
    this.workload = "";
    this.twoPassDownload = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DevContainerSpec";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 23,
      name: "platform",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 6,
      name: "deletion_timestamp",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 14,
      name: "hibernation_timestamp",
      kind: "scalar",
      T: 4,
      opt: true
    }, {
      no: 7,
      name: "pod_labels",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 8,
      name: "node_labels",
      kind: "map",
      K: 9,
      V: {
        kind: "scalar",
        T: 9
      }
    }, {
      no: 27,
      name: "low_cardinality_pod_labels",
      kind: "scalar",
      T: 9,
      repeated: true
    }, {
      no: 9,
      name: "requests",
      kind: "message",
      T: zvi
    }, {
      no: 16,
      name: "hibernated_requests",
      kind: "message",
      T: zvi
    }, {
      no: 10,
      name: "limits",
      kind: "message",
      T: tsu
    }, {
      no: 13,
      name: "cache",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 20,
      name: "enable_base_container_cache",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 18,
      name: "enable_checkpoint_read",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 19,
      name: "enable_checkpoint_write",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 17,
      name: "blob_storage_format",
      kind: "enum",
      T: v.getEnumType(H$e)
    }, {
      no: 15,
      name: "cache_tag",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 21,
      name: "workload",
      kind: "scalar",
      T: 9
    }, {
      no: 12,
      name: "config",
      kind: "message",
      T: vGg
    }, {
      no: 22,
      name: "persist_config",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 24,
      name: "expected_fork_count",
      kind: "scalar",
      T: 13,
      opt: true
    }, {
      no: 25,
      name: "two_pass_download",
      kind: "scalar",
      T: 8
    }, {
      no: 26,
      name: "egress_policy",
      kind: "message",
      T: AGg,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new eps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eps, e, t);
  }
};
fGg = class tps extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.value = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DevContainerEnv";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "inline",
      kind: "scalar",
      T: 9,
      oneof: "value"
    }, {
      no: 3,
      name: "encrypted",
      kind: "scalar",
      T: 9,
      oneof: "value"
    }]);
  }
  static fromBinary(e, t) {
    return new tps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tps, e, t);
  }
};
bGg = class nps extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    this.presignedUrl = "";
    this.blobStorageFormat = H$e.LEGACY_UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ExternalSnapshot";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "presigned_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "image_metadata",
      kind: "message",
      T: pba
    }, {
      no: 4,
      name: "blob_storage_format",
      kind: "enum",
      T: v.getEnumType(H$e)
    }]);
  }
  static fromBinary(e, t) {
    return new nps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(nps, e, t);
  }
};
vGg = class ips extends ie {
  constructor(e) {
    super();
    this.source = {
      case: undefined
    };
    this.image = {
      case: undefined
    };
    this.workspace = {
      case: undefined
    };
    this.prepareCommands = [];
    this.installCommands = [];
    this.verifyCommands = [];
    this.startCommands = [];
    this.ports = [];
    this.env = [];
    this.shell = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DevContainerConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "git",
      kind: "message",
      T: dGg,
      oneof: "source"
    }, {
      no: 2,
      name: "tar",
      kind: "message",
      T: hGg,
      oneof: "source"
    }, {
      no: 15,
      name: "local",
      kind: "message",
      T: mGg,
      oneof: "source"
    }, {
      no: 16,
      name: "tar_gzip_url",
      kind: "message",
      T: pGg,
      oneof: "source"
    }, {
      no: 22,
      name: "noop",
      kind: "message",
      T: gGg,
      oneof: "source"
    }, {
      no: 4,
      name: "registry_reference",
      kind: "scalar",
      T: 9,
      oneof: "image"
    }, {
      no: 5,
      name: "snapshot_id",
      kind: "scalar",
      T: 9,
      oneof: "image"
    }, {
      no: 6,
      name: "build",
      kind: "message",
      T: nsu,
      oneof: "image"
    }, {
      no: 27,
      name: "external_snapshot",
      kind: "message",
      T: bGg,
      oneof: "image"
    }, {
      no: 7,
      name: "workspace_path",
      kind: "scalar",
      T: 9,
      oneof: "workspace"
    }, {
      no: 18,
      name: "workdir_relative_path",
      kind: "scalar",
      T: 9,
      oneof: "workspace"
    }, {
      no: 19,
      name: "prepare_commands_tag",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 8,
      name: "prepare_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 20,
      name: "install_commands_tag",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 9,
      name: "install_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 24,
      name: "verify_commands_tag",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 25,
      name: "verify_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 21,
      name: "start_commands_tag",
      kind: "scalar",
      T: 12,
      opt: true
    }, {
      no: 10,
      name: "start_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 11,
      name: "ports",
      kind: "message",
      T: gba,
      repeated: true
    }, {
      no: 26,
      name: "default_port_config",
      kind: "message",
      T: fba,
      opt: true
    }, {
      no: 12,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 13,
      name: "env",
      kind: "message",
      T: fGg,
      repeated: true
    }, {
      no: 14,
      name: "shell",
      kind: "scalar",
      T: 9
    }, {
      no: 17,
      name: "privileged",
      kind: "scalar",
      T: 8,
      opt: true
    }, {
      no: 23,
      name: "checkpoint_threshold_ms",
      kind: "scalar",
      T: 4,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new ips().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ips().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ips().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ips, e, t);
  }
};
nsu = class rps extends ie {
  constructor(e) {
    super();
    this.dockerfile = "";
    this.context = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.Build";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "dockerfile",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "context",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new rps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rps, e, t);
  }
};
AGg = class sps extends ie {
  constructor(e) {
    super();
    this.policy = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.EgressPolicy";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "allow_all",
      kind: "message",
      T: ZI,
      oneof: "policy"
    }, {
      no: 2,
      name: "restricted",
      kind: "message",
      T: yGg,
      oneof: "policy"
    }]);
  }
  static fromBinary(e, t) {
    return new sps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(sps, e, t);
  }
};
yGg = class ops extends ie {
  constructor(e) {
    super();
    this.allowedDomains = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.EgressRestricted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "allowed_domains",
      kind: "message",
      T: wGg,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new ops().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ops().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ops().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ops, e, t);
  }
};
wGg = class aps extends ie {
  constructor(e) {
    super();
    this.domain = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.AllowedDomain";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "domain",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new aps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new aps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new aps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(aps, e, t);
  }
};
