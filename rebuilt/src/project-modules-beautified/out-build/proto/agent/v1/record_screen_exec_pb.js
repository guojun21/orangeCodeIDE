"use strict";

// Module: out-build/proto/agent/v1/record_screen_exec_pb.js
// Offset: 2692072 (bundle byte offset)
// Size: 4306 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.START_RECORDING = 1] = "START_RECORDING";
  n[n.SAVE_RECORDING = 2] = "SAVE_RECORDING";
  n[n.DISCARD_RECORDING = 3] = "DISCARD_RECORDING";
})(PKe ||= {});
v.util.setEnumType(PKe, "agent.v1.RecordingMode", [{
  no: 0,
  name: "RECORDING_MODE_UNSPECIFIED"
}, {
  no: 1,
  name: "RECORDING_MODE_START_RECORDING"
}, {
  no: 2,
  name: "RECORDING_MODE_SAVE_RECORDING"
}, {
  no: 3,
  name: "RECORDING_MODE_DISCARD_RECORDING"
}]);
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.SLASHES_NOT_ALLOWED = 1] = "SLASHES_NOT_ALLOWED";
})(Y9o ||= {});
v.util.setEnumType(Y9o, "agent.v1.RequestedFilePathRejectedReason", [{
  no: 0,
  name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED"
}, {
  no: 1,
  name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED"
}]);
LKe = class EFi extends ie {
  constructor(e) {
    super();
    this.mode = PKe.UNSPECIFIED;
    this.toolCallId = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecordScreenArgs";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "mode",
      kind: "enum",
      T: v.getEnumType(PKe)
    }, {
      no: 2,
      name: "tool_call_id",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "save_as_filename",
      kind: "scalar",
      T: 9,
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new EFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new EFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new EFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(EFi, e, t);
  }
};
c5t = class xFi extends ie {
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
    this.typeName = "agent.v1.RecordScreenResult";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "start_success",
      kind: "message",
      T: QEh,
      oneof: "result"
    }, {
      no: 2,
      name: "save_success",
      kind: "message",
      T: jEh,
      oneof: "result"
    }, {
      no: 3,
      name: "discard_success",
      kind: "message",
      T: zEh,
      oneof: "result"
    }, {
      no: 4,
      name: "failure",
      kind: "message",
      T: VEh,
      oneof: "result"
    }]);
  }
  static fromBinary(e, t) {
    return new xFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(xFi, e, t);
  }
};
QEh = class TFi extends ie {
  constructor(e) {
    super();
    this.wasPriorRecordingCancelled = false;
    this.wasSaveAsFilenameIgnored = false;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecordScreenStartSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "was_prior_recording_cancelled",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "was_save_as_filename_ignored",
      kind: "scalar",
      T: 8
    }]);
  }
  static fromBinary(e, t) {
    return new TFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new TFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new TFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(TFi, e, t);
  }
};
jEh = class IFi extends ie {
  constructor(e) {
    super();
    this.path = "";
    this.recordingDurationMs = Eo.zero;
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecordScreenSaveSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "recording_duration_ms",
      kind: "scalar",
      T: 3
    }, {
      no: 3,
      name: "requested_file_path_rejected_reason",
      kind: "enum",
      T: v.getEnumType(Y9o),
      opt: true
    }]);
  }
  static fromBinary(e, t) {
    return new IFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new IFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new IFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(IFi, e, t);
  }
};
zEh = class DFi extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecordScreenDiscardSuccess";
  }
  static {
    this.fields = v.util.newFieldList(() => []);
  }
  static fromBinary(e, t) {
    return new DFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new DFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new DFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(DFi, e, t);
  }
};
VEh = class BFi extends ie {
  constructor(e) {
    super();
    this.error = "";
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "agent.v1.RecordScreenFailure";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "error",
      kind: "scalar",
      T: 9
    }]);
  }
  static fromBinary(e, t) {
    return new BFi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new BFi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new BFi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(BFi, e, t);
  }
};
