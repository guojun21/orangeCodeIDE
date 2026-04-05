"use strict";

// Module: out-build/external/statsig/js-client/EvaluationStore.js
// Offset: 26711091 (bundle byte offset)
// Size: 3546 bytes
Rtt();
tFg = class {
  constructor(n) {
    this._sdkKey = n;
    this._rawValues = null;
    this._values = null;
    this._source = "Uninitialized";
    this._lcut = 0;
    this._receivedAt = 0;
    this._bootstrapMetadata = null;
    this._warnings = new Set();
  }
  reset() {
    this._values = null;
    this._rawValues = null;
    this._source = "Loading";
    this._lcut = 0;
    this._receivedAt = 0;
    this._bootstrapMetadata = null;
  }
  finalize() {
    if (!this._values) {
      this._source = "NoValues";
    }
  }
  getValues() {
    if (this._rawValues) {
      return bSt(this._rawValues, "has_updates", "EvaluationStoreValues");
    } else {
      return null;
    }
  }
  setValues(n, e) {
    if (!n) {
      return false;
    }
    const t = bSt(n.data, "has_updates", "EvaluationResponse");
    if (t == null) {
      return false;
    } else {
      this._source = n.source;
      if (t?.has_updates === true) {
        this._rawValues = n.data;
        this._lcut = t.time;
        this._receivedAt = n.receivedAt;
        this._values = t;
        this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, t);
        if (n.source && t.user) {
          this._setWarningState(e, t);
        }
        snu.setFlags(this._sdkKey, t.sdk_flags ?? {});
      }
      return true;
    }
  }
  getWarnings() {
    if (this._warnings.size !== 0) {
      return Array.from(this._warnings);
    }
  }
  getGate(n) {
    return this._getDetailedStoreResult(this._values?.feature_gates, n);
  }
  getConfig(n) {
    return this._getDetailedStoreResult(this._values?.dynamic_configs, n);
  }
  getConfigList() {
    if (this._values?.dynamic_configs) {
      return Object.values(this._values.dynamic_configs).map(n => n.name);
    } else {
      return [];
    }
  }
  getLayer(n) {
    return this._getDetailedStoreResult(this._values?.layer_configs, n);
  }
  getParamStore(n) {
    return this._getDetailedStoreResult(this._values?.param_stores, n);
  }
  getSource() {
    return this._source;
  }
  getExposureMapping() {
    return this._values?.exposures;
  }
  _extractBootstrapMetadata(n, e) {
    if (n !== "Bootstrap") {
      return null;
    }
    const t = {};
    if (e.user) {
      t.user = e.user;
    }
    if (e.sdkInfo) {
      t.generatorSDKInfo = e.sdkInfo;
    }
    t.lcut = e.time;
    return t;
  }
  _getDetailedStoreResult(n, e) {
    let t = null;
    if (n) {
      t = n[e] ? n[e] : n[Itt(e)];
    }
    return {
      result: t,
      details: this._getDetails(t == null)
    };
  }
  _setWarningState(n, e) {
    const t = TNe.get(this._sdkKey);
    if (n.customIDs?.stableID !== t && (n.customIDs?.stableID || t)) {
      this._warnings.add("StableIDMismatch");
      return;
    }
    if ("user" in e) {
      const i = e.user;
      const r = {
        ...n,
        analyticsOnlyMetadata: undefined
      };
      nga(r);
      nga(i);
    }
  }
  getCurrentSourceDetails() {
    if (this._source === "Uninitialized" || this._source === "NoValues") {
      return {
        reason: this._source
      };
    }
    const n = {
      reason: this._source,
      lcut: this._lcut,
      receivedAt: this._receivedAt
    };
    if (this._warnings.size > 0) {
      n.warnings = Array.from(this._warnings);
    }
    return n;
  }
  _getDetails(n) {
    const e = this.getCurrentSourceDetails();
    let t = e.reason;
    const i = e.warnings ?? [];
    if (this._source === "Bootstrap" && i.length > 0) {
      t = t + i[0];
    }
    if (t !== "Uninitialized" && t !== "NoValues") {
      t = `${t}:${n ? "Unrecognized" : "Recognized"}`;
    }
    const r = this._source === "Bootstrap" ? this._bootstrapMetadata ?? undefined : undefined;
    if (r) {
      e.bootstrapMetadata = r;
    }
    return {
      ...e,
      reason: t
    };
  }
};
