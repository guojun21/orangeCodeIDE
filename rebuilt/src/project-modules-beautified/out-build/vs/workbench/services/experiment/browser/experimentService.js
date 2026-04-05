"use strict";

// Module: out-build/vs/workbench/services/experiment/browser/experimentService.js
// Offset: 26792477 (bundle byte offset)
// Size: 21253 bytes
Wt();
Er();
rt();
o2A();
$bi();
sFg();
kr();
eu();
Rl();
yn();
ySt();
fE();
si();
Av();
Tw();
Ntt();
rce();
iu();
Tl = xi("experimentService");
lga = class extends at {
  static {
    dye = this;
  }
  static {
    this.FEATURE_FLAG_OVERRIDES_STORAGE_KEY = "workbench.experiments.featureFlagOverrides";
  }
  static {
    this.FEATURE_FLAG_OVERRIDE_TTL_MS = 86400000;
  }
  static {
    this.EXPERIMENT_OVERRIDES_STORAGE_KEY = "workbench.experiments.experimentOverrides";
  }
  static {
    this.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY = "workbench.experiments.dynamicConfigOverrides";
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.storageService = e;
    this.environmentService = t;
    this.productService = i;
    this.metricsService = r;
    this.contextKeyService = s;
    this.clientNumericMetricsService = o;
    this.clientDebugLogService = a;
    this._statsig = null;
    this._initialized = false;
    this._featureFlagOverrides = new Map();
    this._experimentOverrides = new Map();
    this._dynamicConfigOverrides = new Map();
    this._featureGateProperties = new Map();
    this._experimentParamProperties = new Map();
    this._dynamicConfigParamProperties = new Map();
    this._isCalculatingHash = false;
    this._needsRecalculation = false;
    this._onDidChangeGates = this._register(new Qe());
    this.onDidChangeGates = this._onDidChangeGates.event;
    this._constructionTime = performance.now();
    this._dataAdapter = new fnu();
    this._isTestMode = !!this.environmentService.enableSmokeTestDriver;
    if (this._isTestMode) {
      console.log("[ExperimentService] Test mode detected (enableSmokeTestDriver) - using default feature flags with overrides");
      this._initialized = true;
      this._loadTestFeatureFlags();
      this._loadTestDynamicConfigs();
      return;
    }
    if (this._canUseOverrides()) {
      this._loadOverridesFromStorage();
    }
    this._register(this.contextKeyService.onDidChangeContext(m => {
      if (m.affectsSome(new Set([hL.key]))) {
        if (this._canUseOverrides() && this._featureFlagOverrides.size === 0) {
          this._loadOverridesFromStorage();
        }
        this._onDidChangeGates.fire({});
      }
    }));
    const l = performance.now();
    const u = this._initFromCachedBootstrap();
    const d = performance.now();
    this.metricsService.distribution({
      stat: "experimentService.blocking_time",
      value: d - l,
      tags: {
        source: u ? "cache" : "network"
      }
    });
    this.metricsService.distribution({
      stat: "experimentService.blocking_time_from_construction",
      value: d - this._constructionTime,
      tags: {
        source: u ? "cache" : "network"
      }
    });
    this._register(this.onDidChangeGates(m => {
      for (const [p, g] of this._featureGateProperties) {
        if (!m.changedGates || m.changedGates.has(p)) {
          g.change(this.checkFeatureGate(p));
        }
      }
      for (const [p, g] of this._experimentParamProperties) {
        const [f, A] = p.split("::::");
        if (!m.changedExperiments || m.changedExperiments.has(f)) {
          const w = this.getExperimentParam(f, A);
          g.change(w);
        }
      }
      for (const [p, g] of this._dynamicConfigParamProperties) {
        const [f, A] = p.split("::::");
        if (!m.changedConfigs || m.changedConfigs.has(f)) {
          const w = this.getDynamicConfigParam(f, A);
          g.change(w);
        }
      }
      if (!m.changedGates || m.changedGates.size > 0) {
        this._recalculateGatesHash();
      }
    }));
    this.clientNumericMetricsService.setExperimentService(this);
    this._syncGateToDebugLogService();
  }
  _syncGateToDebugLogService() {
    this.clientDebugLogService.setIssueTracesEnabled(this.checkFeatureGate("issue_traces_enabled"));
    this._register(this.onDidChangeGates(e => {
      if (!e.changedGates || e.changedGates.has("issue_traces_enabled")) {
        this.clientDebugLogService.setIssueTracesEnabled(this.checkFeatureGate("issue_traces_enabled"));
      }
    }));
  }
  _initFromCachedBootstrap() {
    const e = performance.now();
    const t = this.storageService.get(dye.STATSIG_BOOTSTRAP_STORAGE_KEY, -1);
    if (!t || t.length === 0) {
      this.metricsService.increment({
        stat: "experimentService.bootstrap.source",
        tags: {
          source: "network_cache_miss"
        }
      });
      return false;
    }
    try {
      const i = JSON.parse(t);
      const r = i && i.user ? i.user : {};
      this._hydrateStatsigClient(t, r, "cache");
      this.metricsService.increment({
        stat: "experimentService.bootstrap.source",
        tags: {
          source: "cache"
        }
      });
      const s = performance.now();
      this.metricsService.distribution({
        stat: "experimentService.cache_init_time",
        value: s - e
      });
      return true;
    } catch (i) {
      console.error("[ExperimentService] Error parsing cached bootstrap", i);
      this.metricsService.increment({
        stat: "experimentService.bootstrap.source",
        tags: {
          source: "network_cache_parse_error"
        }
      });
      this.metricsService.increment({
        stat: "experimentService.cache_parse_error"
      });
      return false;
    }
  }
  _getUrlString(e) {
    if (typeof e == "string") {
      return e;
    } else if (e instanceof Request) {
      return e.url;
    } else {
      return String(e);
    }
  }
  _initializeStatsigClient(e, t) {
    const i = performance.now();
    if (this._statsig) {
      this._statsig.updateUserSync(e, {
        disableBackgroundCacheRefresh: true
      });
    } else {
      const s = this.productService.statsigLogEventProxyUrl;
      const o = typeof s == "string" && s.length > 0;
      this._statsig = new bnu(this.productService.statsigClientKey ?? "", e, {
        dataAdapter: t,
        loggingEnabled: o ? "always" : "disabled",
        disableStorage: true,
        logEventCompressionMode: Dtt.Forced,
        networkConfig: o ? {
          api: s,
          networkOverrideFunc: (a, l) => this._getUrlString(a).includes("/rgstr") ? fetch(a, l) : Promise.resolve(new Response(null, {
            status: 204
          }))
        } : {
          preventAllNetworkTraffic: true
        }
      });
      this._statsig.initializeSync({
        disableBackgroundCacheRefresh: true
      });
    }
    const r = performance.now();
    this.metricsService.distribution({
      stat: "experimentService.statsig_client_init_time",
      value: r - i
    });
  }
  checkFeatureGate(e, t) {
    const i = this._featureFlagOverrides.get(e);
    if (this._canUseOverrides() && i) {
      if (this._isOverrideActive(i)) {
        this.metricsService.increment({
          stat: "experimentService.override_gate_check",
          tags: {
            gate: e
          }
        });
        return i.value;
      }
      console.log(`[ExperimentService] Feature flag override "${e}" expired during runtime, clearing`);
      this._featureFlagOverrides.delete(e);
      this._persistOverridesToStorage();
      this._onDidChangeGates.fire({
        changedGates: new Set([e])
      });
    }
    return this._checkGateWithoutOverride(e, t);
  }
  _checkGateWithoutOverride(e, t) {
    if (this._statsig) {
      try {
        return this._statsig.checkGate(e, t);
      } catch {
        this.metricsService.increment({
          stat: "experimentService.gate_check_error"
        });
        return uye[e]?.default ?? false;
      }
    } else {
      this.metricsService.increment({
        stat: "experimentService.uninitialized_gate_check"
      });
      return uye[e]?.default ?? false;
    }
  }
  _isOverrideActive(e) {
    return e.expiresAt === null || e.expiresAt > Date.now();
  }
  getFeatureGateProperty(e) {
    let t = this._featureGateProperties.get(e);
    if (!t) {
      t = this._register(new j_(this.checkFeatureGate(e)));
      this._featureGateProperties.set(e, t);
    }
    return t;
  }
  getExperimentParamProperty(e, t) {
    const i = `${e}::::${String(t)}`;
    let r = this._experimentParamProperties.get(i);
    if (!r) {
      r = this._register(new j_(this.getExperimentParam(e, t)));
      this._experimentParamProperties.set(i, r);
    }
    return r;
  }
  getDynamicConfigParamProperty(e, t) {
    const i = `${e}::::${String(t)}`;
    let r = this._dynamicConfigParamProperties.get(i);
    if (!r) {
      r = this._register(new j_(this.getDynamicConfigParam(e, t)));
      this._dynamicConfigParamProperties.set(i, r);
    }
    return r;
  }
  getExperiment(e) {
    const t = performance.now();
    let i;
    let r;
    if (this._canUseOverrides() && this._experimentOverrides.has(e)) {
      i = this._experimentOverrides.get(e);
      r = "override";
      this.metricsService.increment({
        stat: "experimentService.override_experiment_check",
        tags: {
          experiment: e
        }
      });
    } else if (!this._statsig) {
      i = A$e[e]?.fallbackValues ?? {};
      r = "default";
      this.metricsService.increment({
        stat: "experimentService.uninitialized_experiment_check"
      });
    } else {
      try {
        i = this._statsig.getExperiment(e).value;
        r = "statsig";
      } catch {
        i = A$e[e]?.fallbackValues ?? {};
        r = "error";
        this.metricsService.increment({
          stat: "experimentService.experiment_check_error"
        });
      }
    }
    const s = performance.now();
    this.metricsService.distribution({
      stat: "experimentService.experiment_check_time",
      value: s - t,
      tags: {
        source: r
      }
    });
    return i;
  }
  getExperimentParam(e, t) {
    return this.getExperiment(e)[t];
  }
  getExperimentGroup(e) {
    if (!this._statsig) {
      return null;
    }
    try {
      return this._statsig.getExperiment(e).groupName ?? null;
    } catch (t) {
      console.error(`[ExperimentService] Error getting experiment group for ${e}:`, t);
      return null;
    }
  }
  getDynamicConfig(e) {
    const t = performance.now();
    let i;
    let r;
    if (!mEe[e]) {
      throw new Error(`Dynamic config ${e} not found`);
    }
    if (this._canUseOverrides() && this._dynamicConfigOverrides.has(e)) {
      i = this._dynamicConfigOverrides.get(e);
      r = "override";
      this.metricsService.increment({
        stat: "experimentService.override_config_check",
        tags: {
          config: e
        }
      });
    } else if (!this._statsig) {
      i = mEe[e]?.fallbackValues;
      r = "default";
      this.metricsService.increment({
        stat: "experimentService.uninitialized_config_check"
      });
    } else {
      try {
        i = this._statsig.getDynamicConfig(e).value;
        r = "statsig";
      } catch {
        i = mEe[e]?.fallbackValues;
        r = "error";
        this.metricsService.increment({
          stat: "experimentService.config_check_error"
        });
      }
    }
    const s = performance.now();
    this.metricsService.distribution({
      stat: "experimentService.config_check_time",
      value: s - t,
      tags: {
        source: r
      }
    });
    return i;
  }
  getDynamicConfigParam(e, t) {
    return this.getDynamicConfig(e)[t];
  }
  setExperimentOverride(e, t) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot set experiment overrides in production builds for non-dev users");
      return;
    }
    const i = this._experimentOverrides.has(e);
    const r = i ? this._experimentOverrides.get(e) : undefined;
    this._experimentOverrides.set(e, t);
    this._persistOverridesToStorage();
    if (!i || JSON.stringify(r) !== JSON.stringify(t)) {
      this._onDidChangeGates.fire({
        changedExperiments: new Set([e])
      });
    }
    this.metricsService.increment({
      stat: "experimentService.experiment_override_set",
      tags: {
        experiment: e
      }
    });
  }
  clearExperimentOverride(e) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot clear experiment overrides in production builds for non-dev users");
      return;
    }
    if (this._experimentOverrides.has(e)) {
      this._experimentOverrides.delete(e);
      this._persistOverridesToStorage();
      this._onDidChangeGates.fire({
        changedExperiments: new Set([e])
      });
      this.metricsService.increment({
        stat: "experimentService.experiment_override_cleared",
        tags: {
          experiment: e
        }
      });
    }
  }
  getExperimentOverrides() {
    return new Map(this._experimentOverrides);
  }
  hasExperimentOverride(e) {
    return this._experimentOverrides.has(e);
  }
  setDynamicConfigOverride(e, t) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot set dynamic config overrides in production builds for non-dev users");
      return;
    }
    const i = this._dynamicConfigOverrides.has(e);
    const r = i ? this._dynamicConfigOverrides.get(e) : undefined;
    this._dynamicConfigOverrides.set(e, t);
    this._persistOverridesToStorage();
    if (!i || JSON.stringify(r) !== JSON.stringify(t)) {
      this._onDidChangeGates.fire({
        changedConfigs: new Set([e])
      });
    }
    this.metricsService.increment({
      stat: "experimentService.config_override_set",
      tags: {
        config: e
      }
    });
  }
  clearDynamicConfigOverride(e) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot clear dynamic config overrides in production builds for non-dev users");
      return;
    }
    if (this._dynamicConfigOverrides.has(e)) {
      this._dynamicConfigOverrides.delete(e);
      this._persistOverridesToStorage();
      this._onDidChangeGates.fire({
        changedConfigs: new Set([e])
      });
      this.metricsService.increment({
        stat: "experimentService.config_override_cleared",
        tags: {
          config: e
        }
      });
    }
  }
  getDynamicConfigOverrides() {
    return new Map(this._dynamicConfigOverrides);
  }
  hasDynamicConfigOverride(e) {
    return this._dynamicConfigOverrides.has(e);
  }
  isInitialized() {
    return this._initialized;
  }
  static {
    this.STATSIG_BOOTSTRAP_STORAGE_KEY = "workbench.experiments.statsigBootstrap";
  }
  async _persistBootstrap(e, t) {
    try {
      this.storageService.store(dye.STATSIG_BOOTSTRAP_STORAGE_KEY, e, -1, 1);
      await this.storageService.flush();
      this.metricsService.increment({
        stat: "experimentService.persist_success",
        tags: {
          trigger: t
        }
      });
    } catch (i) {
      console.error("[ExperimentService] Error persisting bootstrap", i);
      this.metricsService.increment({
        stat: "experimentService.persist_failure",
        tags: {
          trigger: t
        }
      });
    }
  }
  _hydrateStatsigClient(e, t, i) {
    t.userAgent = bi.navigator.userAgent.trim();
    this._initializeStatsigClient(t, this._dataAdapter);
    this._dataAdapter.setData(e);
    this._statsig?.updateUserSync(t, {
      disableBackgroundCacheRefresh: true
    });
    const r = this._initialized;
    this._initialized = true;
    if (!r) {
      const s = performance.now();
      this.metricsService.distribution({
        stat: "experimentService.time_to_initialized_ms",
        value: s - this._constructionTime,
        tags: {
          source: i
        }
      });
    }
  }
  refreshStatsigConfig(e, t, i) {
    this._persistBootstrap(e, i).catch(() => {});
    this._hydrateStatsigClient(e, t, "network");
    this._onDidChangeGates.fire({});
  }
  setFeatureFlagOverride(e, t) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot set feature flag overrides in production builds for non-dev users");
      return;
    }
    const i = this.hasFeatureFlagOverride(e);
    const s = (i ? this._featureFlagOverrides.get(e) : undefined)?.value;
    const o = Date.now() + dye.FEATURE_FLAG_OVERRIDE_TTL_MS;
    this._featureFlagOverrides.set(e, {
      value: t,
      expiresAt: o
    });
    this._persistOverridesToStorage();
    if (!i || s !== t) {
      this._onDidChangeGates.fire({
        changedGates: new Set([e])
      });
    }
    this.metricsService.increment({
      stat: "experimentService.override_set",
      tags: {
        gate: e,
        value: String(t)
      }
    });
  }
  clearFeatureFlagOverride(e) {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
      return;
    }
    if (this._featureFlagOverrides.has(e)) {
      this._featureFlagOverrides.delete(e);
      this._persistOverridesToStorage();
      this._onDidChangeGates.fire({
        changedGates: new Set([e])
      });
      this.metricsService.increment({
        stat: "experimentService.override_cleared",
        tags: {
          gate: e
        }
      });
    }
  }
  clearAllFeatureFlagOverrides() {
    if (!this._canUseOverrides()) {
      console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
      return;
    }
    const e = new Set(this._featureFlagOverrides.keys());
    if (e.size > 0) {
      this._featureFlagOverrides.clear();
      this.storageService.remove(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1);
      this._onDidChangeGates.fire({
        changedGates: e
      });
      this.metricsService.increment({
        stat: "experimentService.all_overrides_cleared",
        tags: {
          count: String(e.size)
        }
      });
    }
  }
  getFeatureFlagOverrides() {
    const e = new Map();
    for (const [t, i] of this._featureFlagOverrides) {
      if (this._isOverrideActive(i)) {
        e.set(t, i.value);
      }
    }
    return e;
  }
  hasFeatureFlagOverride(e) {
    const t = this._featureFlagOverrides.get(e);
    return t !== undefined && this._isOverrideActive(t);
  }
  getOverridesForHeader() {
    if (!this._canUseOverrides()) {
      return;
    }
    const e = 32768;
    const t = {};
    const i = this.getFeatureFlagOverrides();
    if (i.size > 0) {
      t.featureFlags = Object.fromEntries(i);
    }
    if (this._experimentOverrides.size > 0) {
      const o = Object.create(null);
      for (const [a, l] of this._experimentOverrides) {
        if (typeof l == "object" && l !== null && !Array.isArray(l)) {
          o[a] = l;
        }
      }
      if (Object.keys(o).length > 0) {
        t.experiments = o;
      }
    }
    if (this._dynamicConfigOverrides.size > 0) {
      const o = Object.create(null);
      for (const [a, l] of this._dynamicConfigOverrides) {
        if (typeof l == "object" && l !== null && !Array.isArray(l)) {
          o[a] = l;
        }
      }
      if (Object.keys(o).length > 0) {
        t.dynamicConfigs = o;
      }
    }
    if (t.featureFlags === undefined && t.experiments === undefined && t.dynamicConfigs === undefined) {
      return;
    }
    const s = JSON.stringify(t);
    if (!(s.length > e)) {
      return s;
    }
  }
  _loadTestFeatureFlags() {
    const e = this.environmentService.testFeatureFlags;
    if (!e) {
      console.log("[ExperimentService] No test feature flags provided - using all defaults");
      return;
    }
    let t;
    try {
      const i = atob(e);
      t = JSON.parse(i);
    } catch (i) {
      console.error("[ExperimentService] Failed to parse test feature flags JSON (expected base64-encoded JSON):", i);
      return;
    }
    for (const [i, r] of Object.entries(t)) {
      if (typeof r == "boolean") {
        this._featureFlagOverrides.set(i, {
          value: r,
          expiresAt: null
        });
        console.log(`[ExperimentService] Test flag: ${i} = ${r}`);
      } else {
        console.warn(`[ExperimentService] Ignoring non-boolean test flag value for ${i}: ${r}`);
      }
    }
  }
  _loadTestDynamicConfigs() {
    const e = this.environmentService.testDynamicConfigs;
    if (e) {
      try {
        const t = atob(e);
        const i = JSON.parse(t);
        for (const [r, s] of Object.entries(i)) {
          if (!(r in mEe)) {
            console.warn(`[ExperimentService] Ignoring unknown dynamic config override "${r}"`);
            continue;
          }
          const o = r;
          const l = cFg[o].safeParse(s);
          if (!l.success) {
            console.error(`[ExperimentService] Failed to parse dynamic config override for "${r}"`, l.error);
            continue;
          }
          this.setDynamicConfigOverride(o, l.data);
        }
      } catch (t) {
        console.error("[ExperimentService] Failed to parse test dynamic configs JSON:", t);
        console.error("[ExperimentService] JSON was:", e);
      }
    }
  }
  _loadOverridesFromStorage() {
    try {
      const e = this.storageService.get(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1);
      if (e) {
        const t = JSON.parse(e);
        let i = 0;
        for (const [r, s] of Object.entries(t)) {
          if (s !== null && typeof s == "object" && "value" in s && "expiresAt" in s) {
            const o = s;
            if (this._isOverrideActive(o)) {
              this._featureFlagOverrides.set(r, o);
            } else {
              i++;
              console.log(`[ExperimentService] Feature flag override "${r}" expired, clearing`);
            }
          } else if (typeof s == "boolean") {
            i++;
            console.log(`[ExperimentService] Feature flag override "${r}" has no TTL, discarding`);
          } else {
            i++;
            console.log(`[ExperimentService] Feature flag override "${r}" has invalid format, clearing`);
          }
        }
        if (i > 0) {
          this._persistFeatureFlagOverridesToStorage();
        }
        this.metricsService.increment({
          stat: "experimentService.flag_overrides_loaded",
          tags: {
            count: String(this._featureFlagOverrides.size)
          }
        });
      }
    } catch (e) {
      console.error("Failed to load feature flag overrides from storage:", e);
      this.metricsService.increment({
        stat: "experimentService.flag_overrides_load_error"
      });
    }
    try {
      const e = this.storageService.get(dye.EXPERIMENT_OVERRIDES_STORAGE_KEY, -1);
      if (e) {
        const t = JSON.parse(e);
        this._experimentOverrides = new Map(Object.entries(t));
        this.metricsService.increment({
          stat: "experimentService.experiment_overrides_loaded",
          tags: {
            count: String(this._experimentOverrides.size)
          }
        });
      }
    } catch (e) {
      console.error("Failed to load experiment overrides from storage:", e);
      this.metricsService.increment({
        stat: "experimentService.experiment_overrides_load_error"
      });
    }
    try {
      const e = this.storageService.get(dye.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, -1);
      if (e) {
        const t = JSON.parse(e);
        this._dynamicConfigOverrides = new Map(Object.entries(t));
        this.metricsService.increment({
          stat: "experimentService.config_overrides_loaded",
          tags: {
            count: String(this._dynamicConfigOverrides.size)
          }
        });
      }
    } catch (e) {
      console.error("Failed to load dynamic config overrides from storage:", e);
      this.metricsService.increment({
        stat: "experimentService.config_overrides_load_error"
      });
    }
  }
  _canUseOverrides() {
    if (this._isTestMode || !this.environmentService.isBuilt || !!this.environmentService.isExtensionDevelopment) {
      return true;
    } else {
      return !!this.contextKeyService.getContextKeyValue(hL.key);
    }
  }
  _persistFeatureFlagOverridesToStorage() {
    if (!this._isTestMode) {
      try {
        const e = {};
        for (const [t, i] of this._featureFlagOverrides) {
          e[t] = i;
        }
        this.storageService.store(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0);
        this.metricsService.increment({
          stat: "experimentService.flag_overrides_persisted",
          tags: {
            count: String(this._featureFlagOverrides.size)
          }
        });
      } catch (e) {
        console.error("Failed to persist feature flag overrides to storage:", e);
        this.metricsService.increment({
          stat: "experimentService.flag_overrides_persist_error"
        });
      }
    }
  }
  _persistOverridesToStorage() {
    if (!this._isTestMode) {
      this._persistFeatureFlagOverridesToStorage();
      try {
        const e = {};
        for (const [t, i] of this._experimentOverrides) {
          e[t] = i;
        }
        this.storageService.store(dye.EXPERIMENT_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0);
        this.metricsService.increment({
          stat: "experimentService.experiment_overrides_persisted",
          tags: {
            count: String(this._experimentOverrides.size)
          }
        });
      } catch (e) {
        console.error("Failed to persist experiment overrides to storage:", e);
        this.metricsService.increment({
          stat: "experimentService.experiment_overrides_persist_error"
        });
      }
      try {
        const e = {};
        for (const [t, i] of this._dynamicConfigOverrides) {
          e[t] = i;
        }
        this.storageService.store(dye.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY, JSON.stringify(e), -1, 0);
        this.metricsService.increment({
          stat: "experimentService.config_overrides_persisted",
          tags: {
            count: String(this._dynamicConfigOverrides.size)
          }
        });
      } catch (e) {
        console.error("Failed to persist dynamic config overrides to storage:", e);
        this.metricsService.increment({
          stat: "experimentService.config_overrides_persist_error"
        });
      }
    }
  }
  _recalculateGatesHash() {
    if (this._isCalculatingHash) {
      this._needsRecalculation = true;
    } else {
      this._isCalculatingHash = true;
      this._needsRecalculation = false;
      this._calculateGatesHash().finally(() => {
        this._isCalculatingHash = false;
        if (this._needsRecalculation) {
          this._recalculateGatesHash();
        }
      });
    }
  }
  async _calculateGatesHash() {
    const e = [];
    for (const a of Object.keys(uye)) {
      if (this.checkFeatureGate(a, {
        disableExposureLog: true
      })) {
        e.push(a);
      }
    }
    e.sort();
    const t = e.join("|");
    const i = new TextEncoder();
    const r = await crypto.subtle.digest("SHA-256", i.encode(t));
    const o = Array.from(new Uint8Array(r)).map(a => a.toString(16).padStart(2, "0")).join("");
    this.clientNumericMetricsService.featureFlagHash = o.substring(0, 16);
    this.clientNumericMetricsService.featureFlagResolved = t;
  }
};
lga = dye = __decorate([__param(0, Hi), __param(1, Cc), __param(2, za), __param(3, R1), __param(4, wi), __param(5, y$e), __param(6, tie)], lga);
Vi(Tl, lga, 0, 1);
