"use strict";

// Module: out-build/proto/anyrun/v1/persisted_dev_container_pb.js
// Offset: 27684528 (bundle byte offset)
// Size: 10208 bytes
Ka();
isu();
_Gg = class cps extends ie {
  constructor(e) {
    super();
    this.cacheUri = "";
    this.commitHash = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedGitRepoSource";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "cache_uri",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "commit_hash",
      kind: "scalar",
      T: 12
    }]);
  }
  static fromBinary(e, t) {
    return new cps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(cps, e, t);
  }
};
CGg = class lps extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedTarRepoSource";
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
    return new lps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(lps, e, t);
  }
};
SGg = class ups extends ie {
  constructor(e) {
    super();
    this.path = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedLocalRepoSource";
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
    return new ups().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ups().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ups().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ups, e, t);
  }
};
kGg = class dps extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedTarGzipUrlSource";
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
    return new dps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(dps, e, t);
  }
};
EGg = class hps extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedNoopSource";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new hps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(hps, e, t);
  }
};
xGg = class mps extends ie {
  constructor(e) {
    super();
    this.snapshotId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedExternalSnapshot";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "snapshot_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new mps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mps, e, t);
  }
};
TGg = class pps extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.value = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedEnvVar";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "value",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new pps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pps, e, t);
  }
};
rsu = class gps extends ie {
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
    this.env = [];
    this.ports = [];
    this.shell = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PersistedDevContainerConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "git",
      kind: "message",
      T: _Gg,
      oneof: "source"
    }, {
      no: 2,
      name: "tar",
      kind: "message",
      T: CGg,
      oneof: "source"
    }, {
      no: 3,
      name: "local",
      kind: "message",
      T: SGg,
      oneof: "source"
    }, {
      no: 4,
      name: "tar_gzip_url",
      kind: "message",
      T: kGg,
      oneof: "source"
    }, {
      no: 18,
      name: "noop",
      kind: "message",
      T: EGg,
      oneof: "source"
    }, {
      no: 5,
      name: "registry_reference",
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
      no: 7,
      name: "snapshot_id",
      kind: "scalar",
      T: 9,
      oneof: "image"
    }, {
      no: 20,
      name: "external_snapshot",
      kind: "message",
      T: xGg,
      oneof: "image"
    }, {
      no: 8,
      name: "workspace_path",
      kind: "scalar",
      T: 9,
      oneof: "workspace"
    }, {
      no: 9,
      name: "workdir_relative_path",
      kind: "scalar",
      T: 9,
      oneof: "workspace"
    }, {
      no: 10,
      name: "prepare_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 11,
      name: "install_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 19,
      name: "verify_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 12,
      name: "start_commands",
      kind: "message",
      T: J$e,
      repeated: true
    }, {
      no: 13,
      name: "env",
      kind: "message",
      T: TGg,
      repeated: true
    }, {
      no: 14,
      name: "ports",
      kind: "message",
      T: gba,
      repeated: true
    }, {
      no: 15,
      name: "shell",
      kind: "scalar",
      T: 9
    }, {
      no: 16,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 17,
      name: "privileged",
      kind: "scalar",
      T: 8,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new gps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gps, e, t);
  }
};
IGg = class fps extends ie {
  constructor(e) {
    super();
    this.name = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.IsoDevContainerMetadata";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "persistent_state",
      kind: "message",
      T: BGg
    }, {
      no: 3,
      name: "env_config",
      kind: "message",
      T: DGg
    }]);
  }
  static fromBinary(e, t) {
    return new fps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(fps, e, t);
  }
};
DGg = class bps extends ie {
  constructor(e) {
    super();
    this.vcpuCount = 0;
    this.memSizeMib = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.IsoEnvConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "vcpu_count",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "mem_size_mib",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "swap_size_mib",
      kind: "scalar",
      T: 13,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new bps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(bps, e, t);
  }
};
BGg = class vps extends ie {
  constructor(e) {
    super();
    this.name = "";
    this.shell = "";
    this.daemonPort = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DockerDevContainerPersistentState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "container",
      kind: "message",
      T: RGg
    }, {
      no: 3,
      name: "runtime_state",
      kind: "message",
      T: PGg
    }, {
      no: 4,
      name: "image_metadata",
      kind: "message",
      T: pba
    }, {
      no: 5,
      name: "network_info",
      kind: "message",
      T: NGg
    }, {
      no: 6,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 7,
      name: "shell",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "daemon_port",
      kind: "scalar",
      T: 13
    }, {
      no: 9,
      name: "workspace",
      kind: "message",
      T: MGg
    }]);
  }
  static fromBinary(e, t) {
    return new vps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(vps, e, t);
  }
};
RGg = class Aps extends ie {
  constructor(e) {
    super();
    this.id = "";
    this.name = "";
    this.stopped = false;
    this.removed = false;
    this.leaked = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DockerContainerPersistentState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "stopped",
      kind: "scalar",
      T: 8
    }, {
      no: 4,
      name: "removed",
      kind: "scalar",
      T: 8
    }, {
      no: 5,
      name: "leaked",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new Aps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Aps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Aps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Aps, e, t);
  }
};
PGg = class yps extends ie {
  constructor(e) {
    super();
    this.commandHandlers = {};
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.RuntimeStatePersistentState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "command_handlers",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: LGg
      }
    }]);
  }
  static fromBinary(e, t) {
    return new yps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(yps, e, t);
  }
};
LGg = class wps extends ie {
  constructor(e) {
    super();
    this.vpid = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.DaemonCommandHandlerPersistentState";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "vpid",
      kind: "scalar",
      T: 3
    }, {
      no: 2,
      name: "last_event_id",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new wps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(wps, e, t);
  }
};
NGg = class _ps extends ie {
  constructor(e) {
    super();
    this.ipAddress = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.NetworkInfo";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "ip_address",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new _ps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _ps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _ps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(_ps, e, t);
  }
};
MGg = class Cps extends ie {
  constructor(e) {
    super();
    this.config = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.WorkspaceConfig";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "absolute",
      kind: "scalar",
      T: 9,
      oneof: "config"
    }, {
      no: 2,
      name: "workdir_relative",
      kind: "scalar",
      T: 9,
      oneof: "config"
    }]);
  }
  static fromBinary(e, t) {
    return new Cps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Cps, e, t);
  }
};
