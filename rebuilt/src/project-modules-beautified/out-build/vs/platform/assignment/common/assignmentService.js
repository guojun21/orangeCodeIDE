"use strict";

// Module: out-build/vs/platform/assignment/common/assignmentService.js
// Offset: 30913264 (bundle byte offset)
// Size: 1751 bytes
l8();
xry();
KEe();
Gxf = class {
  get experimentsEnabled() {
    return true;
  }
  constructor(n, e, t, i, r, s) {
    this.machineId = n;
    this.configurationService = e;
    this.productService = t;
    this.environmentService = i;
    this.telemetry = r;
    this.keyValueStorage = s;
    this.networkInitialized = false;
    if (i.extensionTestsLocationURI === undefined && t.tasConfig && this.experimentsEnabled && Ent(this.configurationService) === 3) {
      this.tasClient = this.setupTASClient();
    }
    const a = this.configurationService.getValue("experiments.overrideDelay");
    const l = typeof a == "number" ? a : 0;
    this.overrideInitDelay = new Promise(u => setTimeout(u, l));
  }
  async getTreatment(n) {
    await this.overrideInitDelay;
    const e = this.configurationService.getValue("experiments.override." + n);
    if (e !== undefined) {
      return e;
    }
    if (!this.tasClient || !this.experimentsEnabled) {
      return;
    }
    let t;
    const i = await this.tasClient;
    if (this.networkInitialized) {
      t = i.getTreatmentVariable("vscode", n);
    } else {
      t = await i.getTreatmentVariableAsync("vscode", n, true);
    }
    t = i.getTreatmentVariable("vscode", n);
    return t;
  }
  async setupTASClient() {
    const n = this.productService.quality === "stable" ? B_i.Public : this.productService.quality === "exploration" ? B_i.Exploration : B_i.Insiders;
    const e = new $xf(this.productService.version, this.productService.nameLong, this.machineId, n);
    const t = this.productService.tasConfig;
    const i = new (await DQ("tas-client-umd", "lib/tas-client-umd.js")).ExperimentationService({
      filterProviders: [e],
      telemetry: this.telemetry,
      storageKey: Oxf,
      keyValueStorage: this.keyValueStorage,
      assignmentContextTelemetryPropertyName: t.assignmentContextTelemetryPropertyName,
      telemetryEventName: t.telemetryEventName,
      endpoint: t.endpoint,
      refetchInterval: Uxf
    });
    await i.initializePromise;
    i.initialFetch.then(() => this.networkInitialized = true);
    return i;
  }
};
