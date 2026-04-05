"use strict";

// Module: out-build/external/statsig/js-client/StatsigClient.js
// Offset: 26718166 (bundle byte offset)
// Size: 6963 bytes
Rtt();
jMA();
iFg();
i2A();
sFg();
bnu = class mcd extends Y2g {
  static instance(e) {
    const t = xtt().instance(e);
    if (t instanceof mcd) {
      return t;
    } else {
      CI.warn(Ubi() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance");
      return new mcd(e ?? "", {});
    }
  }
  constructor(e, t, i = null) {
    Gbi._setClientType(e, "javascript-client");
    const r = new sga(i, o => {
      this.$emt(o);
    });
    super(e, i?.dataAdapter ?? new fnu(), r, i);
    this._possibleFirstTouchMetadata = {};
    this.getFeatureGate = this._memoize(vSt._gate, this._getFeatureGateImpl.bind(this));
    this.getDynamicConfig = this._memoize(vSt._dynamicConfig, this._getDynamicConfigImpl.bind(this));
    this.getExperiment = this._memoize(vSt._experiment, this._getExperimentImpl.bind(this));
    this.getConfigList = this._memoize(vSt._configList, this._getConfigListImpl.bind(this));
    this.getLayer = this._memoize(vSt._layer, this._getLayerImpl.bind(this));
    this.getParameterStore = this._memoize(vSt._paramStore, this._getParameterStoreImpl.bind(this));
    this._store = new tFg(e);
    this._network = r;
    this._user = this._configureUser(t, i);
    this._sdkInstanceID = Xpa();
    const s = i?.plugins ?? [];
    for (const o of s) {
      o.bind(this);
    }
  }
  initializeSync(e) {
    if (this.loadingStatus !== "Uninitialized") {
      return ASt(true, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...(this._store.getWarnings() ?? [])]);
    } else {
      this._logger.start();
      return this.updateUserSync(this._user, e);
    }
  }
  async initializeAsync(e) {
    if (this._initializePromise) {
      return this._initializePromise;
    } else {
      this._initializePromise = this._initializeAsyncImpl(e);
      return this._initializePromise;
    }
  }
  updateUserSync(e, t) {
    const i = performance.now();
    try {
      return this._updateUserSyncImpl(e, t, i);
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      return this._createErrorUpdateDetails(s, i);
    }
  }
  _updateUserSyncImpl(e, t, i) {
    const r = [...(this._store.getWarnings() ?? [])];
    this._resetForUser(e);
    const s = this.dataAdapter.getDataSync(this._user);
    if (s == null) {
      r.push("NoCachedValues");
    }
    this._store.setValues(s, this._user);
    this._finalizeUpdate(s);
    const o = t?.disableBackgroundCacheRefresh;
    if (o === true || o == null && s?.source === "Bootstrap") {
      return ASt(true, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r);
    } else {
      this._runPostUpdate(s ?? null, this._user);
      return ASt(true, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r);
    }
  }
  async updateUserAsync(e, t) {
    const i = performance.now();
    try {
      return await this._updateUserAsyncImpl(e, t);
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      return this._createErrorUpdateDetails(s, i);
    }
  }
  async _updateUserAsyncImpl(e, t) {
    this._resetForUser(e);
    const i = this._user;
    lye._markInitOverallStart(this._sdkKey);
    let r = this.dataAdapter.getDataSync(i);
    this._store.setValues(r, this._user);
    this._setStatus("Loading", r);
    r = await this.dataAdapter.getDataAsync(r, i, t);
    if (i !== this._user) {
      return ASt(false, this._store.getSource(), -1, new Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
    }
    let s = false;
    if (r != null) {
      lye._markInitProcessStart(this._sdkKey);
      s = this._store.setValues(r, this._user);
      lye._markInitProcessEnd(this._sdkKey, {
        success: s
      });
    }
    this._finalizeUpdate(r);
    if (!s) {
      this._errorBoundary.attachErrorIfNoneExists(eFg.NO_NETWORK_DATA);
      this.$emt({
        name: "initialization_failure"
      });
    }
    lye._markInitOverallEnd(this._sdkKey, s, this._store.getCurrentSourceDetails());
    const o = lye._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
    return ASt(s, this._store.getSource(), o, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
  }
  getContext() {
    return {
      sdkKey: this._sdkKey,
      options: this._options,
      values: this._store.getValues(),
      user: JSON.parse(JSON.stringify(this._user)),
      errorBoundary: this._errorBoundary,
      session: rga.get(this._sdkKey),
      stableID: TNe.get(this._sdkKey),
      sdkInstanceID: this._sdkInstanceID
    };
  }
  checkGate(e, t) {
    return this.getFeatureGate(e, t).value;
  }
  logEvent(e, t, i) {
    const r = typeof e == "string" ? {
      eventName: e,
      value: t,
      metadata: i
    } : e;
    this.$emt({
      name: "log_event_called",
      event: r
    });
    this._logger.enqueue({
      ...r,
      user: this._user,
      time: Date.now()
    });
  }
  updateUserWithAnalyticsOnlyMetadata(e) {
    this._user = this._configureUser({
      ...this._user,
      analyticsOnlyMetadata: e
    }, this._options);
  }
  _primeReadyRipcord() {
    this.$on("error", () => {
      if (this.loadingStatus === "Loading") {
        this._finalizeUpdate(null);
      }
    });
  }
  async _initializeAsyncImpl(e) {
    if (!j3.isReady()) {
      await j3.isReadyResolver();
    }
    this._logger.start();
    return this.updateUserAsync(this._user, e);
  }
  _createErrorUpdateDetails(e, t) {
    return ASt(false, this._store.getSource(), performance.now() - t, e, null, [...(this._store.getWarnings() ?? [])]);
  }
  _finalizeUpdate(e) {
    this._store.finalize();
    this._setStatus("Ready", e);
  }
  _runPostUpdate(e, t) {
    this.dataAdapter.getDataAsync(e, t, {
      priority: "low"
    }).catch(i => {
      CI.error("An error occurred after update.", i);
    });
  }
  _resetForUser(e) {
    this._logger.reset();
    this._store.reset();
    this._user = this._configureUser(e, this._options);
  }
  _configureUser(e, t) {
    const i = Jbi(e, t);
    const r = i.customIDs?.stableID;
    if (r) {
      TNe.setOverride(r, this._sdkKey);
    }
    i.analyticsOnlyMetadata = {
      ...i.analyticsOnlyMetadata,
      ...this._possibleFirstTouchMetadata
    };
    return i;
  }
  _getFeatureGateImpl(e, t) {
    const {
      result: i,
      details: r
    } = this._store.getGate(e);
    const s = $MA(e, r, i);
    const a = this.overrideAdapter?.getGateOverride?.(s, this._user, t) ?? s;
    this._enqueueExposure(e, XMg(this._user, a, this._store.getExposureMapping()), t);
    this.$emt({
      name: "gate_evaluation",
      gate: a
    });
    return a;
  }
  _getDynamicConfigImpl(e, t) {
    const {
      result: i,
      details: r
    } = this._store.getConfig(e);
    const s = X2g(e, r, i);
    const a = this.overrideAdapter?.getDynamicConfigOverride?.(s, this._user, t) ?? s;
    this._enqueueExposure(e, Otu(this._user, a, this._store.getExposureMapping()), t);
    this.$emt({
      name: "dynamic_config_evaluation",
      dynamicConfig: a
    });
    return a;
  }
  _getExperimentImpl(e, t) {
    const {
      result: i,
      details: r
    } = this._store.getConfig(e);
    const s = qMA(e, r, i);
    if (s.__evaluation != null) {
      s.__evaluation.secondary_exposures = qpa(s.__evaluation?.secondary_exposures ?? [], this._store.getExposureMapping());
    }
    const a = this.overrideAdapter?.getExperimentOverride?.(s, this._user, t) ?? s;
    this._enqueueExposure(e, Otu(this._user, a, this._store.getExposureMapping()), t);
    this.$emt({
      name: "experiment_evaluation",
      experiment: a
    });
    return a;
  }
  _getConfigListImpl() {
    return this._store.getConfigList();
  }
  _getLayerImpl(e, t) {
    const {
      result: i,
      details: r
    } = this._store.getLayer(e);
    const s = HMA(e, r, i);
    const o = this.overrideAdapter?.getLayerOverride?.(s, this._user, t);
    if (t?.disableExposureLog) {
      this._logger.incrementNonExposureCount(e);
    }
    const a = JMA(s, o, o?.__value ?? s.__value, l => {
      if (!t?.disableExposureLog) {
        this._enqueueExposure(e, e2g(this._user, a, l, this._store.getExposureMapping()), t);
      }
    });
    this.$emt({
      name: "layer_evaluation",
      layer: a
    });
    return a;
  }
  _getParameterStoreImpl(e, t) {
    const {
      result: i,
      details: r
    } = this._store.getParamStore(e);
    this._logger.incrementNonExposureCount(e);
    const s = {
      name: e,
      details: r,
      __configuration: i,
      get: rFg(this, i, t)
    };
    const o = this.overrideAdapter?.getParamStoreOverride?.(s, t);
    if (o != null) {
      s.__configuration = o.config;
      s.details = o.details;
      s.get = rFg(this, o.config, t);
    }
    return s;
  }
};
