"use strict";

// Module: out-build/vs/platform/telemetry/common/telemetryUtils.js
// Offset: 28245382 (bundle byte offset)
// Size: 2760 bytes
np();
Js();
Ht();
zAe();
gef();
Pa();
X$e = class {
  constructor(n) {
    this.value = n;
    this.isTrustedTelemetryValue = true;
  }
};
vef = class {
  constructor() {
    this.telemetryLevel = 0;
    this.sessionId = "someValue.sessionId";
    this.machineId = "someValue.machineId";
    this.macMachineId = "someValue.macMachineId";
    this.sqmId = "someValue.sqmId";
    this.devDeviceId = "someValue.devDeviceId";
    this.firstSessionDate = "someValue.firstSessionDate";
    this.sendErrorTelemetry = false;
  }
  registerAuthId() {}
  publicLog() {}
  publicLog2() {}
  publicLogError() {}
  publicLogError2() {}
  publicLogCapture() {}
  setExperimentProperty() {}
};
Aef = new vef();
tpn = "telemetry";
Bva = {
  id: tpn,
  name: _(2259, null)
};
yef = new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]);
