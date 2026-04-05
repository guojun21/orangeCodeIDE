"use strict";

// Module: out-build/proto/anyrun/v1/pod_event_pb.js
// Offset: 27706385 (bundle byte offset)
// Size: 14282 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.DOCKER_BUILD = 1] = "DOCKER_BUILD";
  n[n.WORKSPACE_SETUP = 2] = "WORKSPACE_SETUP";
})(zSt ||= {});
v.util.setEnumType(zSt, "anyrun.v1.ClonePurpose", [{
  no: 0,
  name: "CLONE_PURPOSE_UNSPECIFIED"
}, {
  no: 1,
  name: "CLONE_PURPOSE_DOCKER_BUILD"
}, {
  no: 2,
  name: "CLONE_PURPOSE_WORKSPACE_SETUP"
}]);
VGg = class qps extends ie {
  constructor(e) {
    super();
    this.tenantId = "";
    this.podId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PodIdentity";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "tenant_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pod_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new qps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(qps, e, t);
  }
};
ssu = class Hps extends ie {
  constructor(e) {
    super();
    this.creationTimestamp = Eo.zero;
    this.payload = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PodEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 49,
      name: "creation_timestamp",
      kind: "scalar",
      T: 4
    }, {
      no: 26,
      name: "error",
      kind: "message",
      T: ZGg,
      oneof: "payload"
    }, {
      no: 1,
      name: "debug_event",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 43,
      name: "hydration_started",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 44,
      name: "hydration_progress",
      kind: "message",
      T: YGg,
      oneof: "payload"
    }, {
      no: 45,
      name: "hydration_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 31,
      name: "clone_started",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 32,
      name: "clone_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 51,
      name: "clone_started_v2",
      kind: "message",
      T: aWg,
      oneof: "payload"
    }, {
      no: 52,
      name: "clone_completed_v2",
      kind: "message",
      T: cWg,
      oneof: "payload"
    }, {
      no: 33,
      name: "checkout_started",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 34,
      name: "checkout_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 2,
      name: "build_started",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 3,
      name: "build_status_message",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 27,
      name: "build_step_started",
      kind: "message",
      T: XGg,
      oneof: "payload"
    }, {
      no: 28,
      name: "build_status_line",
      kind: "message",
      T: eWg,
      oneof: "payload"
    }, {
      no: 29,
      name: "internal_build_message",
      kind: "message",
      T: tWg,
      oneof: "payload"
    }, {
      no: 30,
      name: "build_exit_code",
      kind: "scalar",
      T: 5,
      oneof: "payload"
    }, {
      no: 14,
      name: "prepare_stdout",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 15,
      name: "prepare_stderr",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 16,
      name: "prepare_exit_code",
      kind: "scalar",
      T: 3,
      oneof: "payload"
    }, {
      no: 50,
      name: "install_command",
      kind: "message",
      T: oWg,
      oneof: "payload"
    }, {
      no: 17,
      name: "install_stdout",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 18,
      name: "install_stderr",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 19,
      name: "install_exit_code",
      kind: "scalar",
      T: 3,
      oneof: "payload"
    }, {
      no: 46,
      name: "verify_stdout",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 47,
      name: "verify_stderr",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 48,
      name: "verify_exit_code",
      kind: "scalar",
      T: 3,
      oneof: "payload"
    }, {
      no: 6,
      name: "start_stdout",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 7,
      name: "start_stderr",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 8,
      name: "start_exit_code",
      kind: "scalar",
      T: 3,
      oneof: "payload"
    }, {
      no: 20,
      name: "extension_install_stdout",
      kind: "message",
      T: Zvi,
      oneof: "payload"
    }, {
      no: 21,
      name: "extension_install_stderr",
      kind: "message",
      T: Zvi,
      oneof: "payload"
    }, {
      no: 22,
      name: "extension_install_exit_code",
      kind: "message",
      T: osu,
      oneof: "payload"
    }, {
      no: 35,
      name: "snapshot_started",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 36,
      name: "snapshot_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 9,
      name: "creation_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 10,
      name: "post_start_stdout",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 11,
      name: "post_start_stderr",
      kind: "scalar",
      T: 9,
      oneof: "payload"
    }, {
      no: 12,
      name: "post_start_exit_code",
      kind: "scalar",
      T: 3,
      oneof: "payload"
    }, {
      no: 23,
      name: "extension_start_stdout",
      kind: "message",
      T: Zvi,
      oneof: "payload"
    }, {
      no: 24,
      name: "extension_start_stderr",
      kind: "message",
      T: Zvi,
      oneof: "payload"
    }, {
      no: 25,
      name: "extension_start_exit_code",
      kind: "message",
      T: osu,
      oneof: "payload"
    }, {
      no: 13,
      name: "startup_completed",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 37,
      name: "image_pull_started",
      kind: "message",
      T: nWg,
      oneof: "payload"
    }, {
      no: 38,
      name: "image_pull_layer_update",
      kind: "message",
      T: iWg,
      oneof: "payload"
    }, {
      no: 39,
      name: "image_pull_status_update",
      kind: "message",
      T: rWg,
      oneof: "payload"
    }, {
      no: 40,
      name: "image_pull_completed",
      kind: "message",
      T: sWg,
      oneof: "payload"
    }, {
      no: 41,
      name: "blocked_repo_state",
      kind: "message",
      T: VGg,
      oneof: "payload"
    }, {
      no: 42,
      name: "acquired_repo_state",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 53,
      name: "private_worker_ready",
      kind: "message",
      T: ZI,
      oneof: "payload"
    }, {
      no: 54,
      name: "waiting_for_worker",
      kind: "message",
      T: KGg,
      oneof: "payload"
    }]);
  }
  static fromBinary(e, t) {
    return new Hps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Hps, e, t);
  }
};
KGg = class Jps extends ie {
  constructor(e) {
    super();
    this.retryCount = 0;
    this.maxRetries = 0;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.WaitingForWorkerStatus";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "retry_count",
      kind: "scalar",
      T: 5
    }, {
      no: 2,
      name: "max_retries",
      kind: "scalar",
      T: 5
    }]);
  }
  static fromBinary(e, t) {
    return new Jps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Jps, e, t);
  }
};
YGg = class Gps extends ie {
  constructor(e) {
    super();
    this.transferred = Eo.zero;
    this.total = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.HydrationProgress";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "transferred",
      kind: "scalar",
      T: 4
    }, {
      no: 2,
      name: "total",
      kind: "scalar",
      T: 4
    }]);
  }
  static fromBinary(e, t) {
    return new Gps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Gps, e, t);
  }
};
ZGg = class Wps extends ie {
  constructor(e) {
    super();
    this.errorMessage = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.PodErrorEvent";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error_message",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Wps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Wps, e, t);
  }
};
Zvi = class Qps extends ie {
  constructor(e) {
    super();
    this.featureId = "";
    this.output = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.FeatureOutput";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "feature_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "output",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Qps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Qps, e, t);
  }
};
osu = class jps extends ie {
  constructor(e) {
    super();
    this.featureId = "";
    this.exitCode = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.FeatureExitCode";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "feature_id",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "exit_code",
      kind: "scalar",
      T: 3
    }]);
  }
  static fromBinary(e, t) {
    return new jps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jps, e, t);
  }
};
XGg = class zps extends ie {
  constructor(e) {
    super();
    this.streamId = 0;
    this.step = 0;
    this.totalSteps = 0;
    this.command = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.BuildStepStarted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "step",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "total_steps",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "command",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new zps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zps, e, t);
  }
};
eWg = class Vps extends ie {
  constructor(e) {
    super();
    this.streamId = 0;
    this.timestamp = "";
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.BuildStatusLine";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Vps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Vps, e, t);
  }
};
tWg = class Kps extends ie {
  constructor(e) {
    super();
    this.streamId = 0;
    this.content = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.InternalBuildMessage";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "content",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Kps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Kps, e, t);
  }
};
nWg = class Yps extends ie {
  constructor(e) {
    super();
    this.imageName = "";
    this.pullId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ImagePullStarted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "image_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pull_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new Yps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Yps, e, t);
  }
};
iWg = class Zps extends ie {
  constructor(e) {
    super();
    this.imageName = "";
    this.pullId = "";
    this.layerId = "";
    this.status = {
      case: undefined
    };
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ImagePullLayerUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "image_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pull_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "layer_id",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "pulling_fs_layer",
      kind: "scalar",
      T: 8,
      oneof: "status"
    }, {
      no: 5,
      name: "waiting",
      kind: "scalar",
      T: 8,
      oneof: "status"
    }, {
      no: 6,
      name: "verifying_checksum",
      kind: "scalar",
      T: 8,
      oneof: "status"
    }, {
      no: 7,
      name: "download_complete",
      kind: "scalar",
      T: 8,
      oneof: "status"
    }, {
      no: 8,
      name: "pull_complete",
      kind: "scalar",
      T: 8,
      oneof: "status"
    }, {
      no: 9,
      name: "downloading",
      kind: "message",
      T: asu,
      oneof: "status"
    }, {
      no: 10,
      name: "extracting",
      kind: "message",
      T: asu,
      oneof: "status"
    }, {
      no: 11,
      name: "other",
      kind: "scalar",
      T: 9,
      oneof: "status"
    }]);
  }
  static fromBinary(e, t) {
    return new Zps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Zps, e, t);
  }
};
asu = class Xps extends ie {
  constructor(e) {
    super();
    this.current = Eo.zero;
    this.total = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ProgressDetail";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current",
      kind: "scalar",
      T: 4
    }, {
      no: 2,
      name: "total",
      kind: "scalar",
      T: 4
    }]);
  }
  static fromBinary(e, t) {
    return new Xps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Xps, e, t);
  }
};
rWg = class egs extends ie {
  constructor(e) {
    super();
    this.imageName = "";
    this.pullId = "";
    this.status = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ImagePullStatusUpdate";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "image_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pull_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "status",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new egs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new egs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new egs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(egs, e, t);
  }
};
sWg = class tgs extends ie {
  constructor(e) {
    super();
    this.imageName = "";
    this.pullId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.ImagePullCompleted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "image_name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pull_id",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new tgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tgs, e, t);
  }
};
oWg = class ngs extends ie {
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
    this.typeName = "anyrun.v1.InstallCommand";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "command",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "user",
      kind: "scalar",
      T: 9,
      opt: true
    }, {
      no: 4,
      name: "is_system",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new ngs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ngs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ngs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ngs, e, t);
  }
};
aWg = class igs extends ie {
  constructor(e) {
    super();
    this.purpose = zSt.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.CloneStarted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "purpose",
      kind: "enum",
      T: v.getEnumType(zSt)
    }]);
  }
  static fromBinary(e, t) {
    return new igs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new igs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new igs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(igs, e, t);
  }
};
cWg = class rgs extends ie {
  constructor(e) {
    super();
    this.purpose = zSt.UNSPECIFIED;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "anyrun.v1.CloneCompleted";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "purpose",
      kind: "enum",
      T: v.getEnumType(zSt)
    }]);
  }
  static fromBinary(e, t) {
    return new rgs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rgs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rgs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(rgs, e, t);
  }
};
