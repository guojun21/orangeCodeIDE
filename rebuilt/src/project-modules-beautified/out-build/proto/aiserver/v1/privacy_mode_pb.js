"use strict";

// Module: out-build/proto/aiserver/v1/privacy_mode_pb.js
// Offset: 26854954 (bundle byte offset)
// Size: 702 bytes
Ka();
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.NO_STORAGE = 1] = "NO_STORAGE";
  n[n.NO_TRAINING = 2] = "NO_TRAINING";
  n[n.USAGE_DATA_TRAINING_ALLOWED = 3] = "USAGE_DATA_TRAINING_ALLOWED";
  n[n.USAGE_CODEBASE_TRAINING_ALLOWED = 4] = "USAGE_CODEBASE_TRAINING_ALLOWED";
})(pm ||= {});
v.util.setEnumType(pm, "aiserver.v1.PrivacyMode", [{
  no: 0,
  name: "PRIVACY_MODE_UNSPECIFIED"
}, {
  no: 1,
  name: "PRIVACY_MODE_NO_STORAGE"
}, {
  no: 2,
  name: "PRIVACY_MODE_NO_TRAINING"
}, {
  no: 3,
  name: "PRIVACY_MODE_USAGE_DATA_TRAINING_ALLOWED"
}, {
  no: 4,
  name: "PRIVACY_MODE_USAGE_CODEBASE_TRAINING_ALLOWED"
}]);
