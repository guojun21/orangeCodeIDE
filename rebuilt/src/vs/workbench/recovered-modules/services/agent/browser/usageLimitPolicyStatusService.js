"use strict";

// Module: out-build/vs/workbench/services/agent/browser/usageLimitPolicyStatusService.js
// Offset: 30351686 (bundle byte offset)
// Size: 3197 bytes
rt();
Ti();
Wt();
Er();
uR();
Rb();
Dd();
Wu();
Dwi = xi("usageLimitPolicyStatusService");
X_a = class extends at {
  constructor(e, t, i) {
    super();
    this.cursorAuthenticationService = e;
    this.reactiveStorageService = t;
    this.experimentService = i;
    this.CACHE_DURATION = 10000;
    this.lastFetchTime = 0;
    this.fetchInProgress = null;
    this._register(this.reactiveStorageService.createScoped(this));
    const [r, s] = lt(null);
    const [o, a] = lt([]);
    const [l, u] = lt(false);
    const [d, m] = lt(null);
    this.statusData = r;
    this.setStatusData = s;
    this.activeGrantsData = o;
    this.setActiveGrantsData = a;
    this.isLoadingData = l;
    this.setIsLoading = u;
    this.errorData = d;
    this.setError = m;
    const p = g => {
      this.clearCachedData();
    };
    this.cursorAuthenticationService.addLoginChangedListener(p);
    this._register({
      dispose: () => {
        this.cursorAuthenticationService.removeLoginChangedListener(p);
      }
    });
  }
  get status() {
    return this.statusData;
  }
  get activeGrants() {
    return this.activeGrantsData;
  }
  get isLoading() {
    return this.isLoadingData;
  }
  get error() {
    return this.errorData;
  }
  async refetch(e = false) {
    if (!this.cursorAuthenticationService.isAuthenticated()) {
      return;
    }
    if (this.fetchInProgress) {
      return this.fetchInProgress;
    }
    const t = Date.now();
    if (!(t - this.lastFetchTime < this.CACHE_DURATION) || !!this.errorData() || !!e) {
      this.fetchInProgress = this.performFetch(t);
      try {
        await this.fetchInProgress;
      } finally {
        this.fetchInProgress = null;
      }
    }
  }
  async performFetch(e) {
    this.setIsLoading(true);
    this.setError(null);
    try {
      const i = await (await this.cursorAuthenticationService.dashboardClient()).getUsageLimitStatusAndActiveGrants(new wiu());
      const r = i.usageLimitPolicyStatus;
      const s = r?.features && Object.keys(r.features).length > 0 ? Object.fromEntries(Object.entries(r.features).map(([a, l]) => {
        try {
          return [a, JSON.parse(l)];
        } catch (u) {
          console.warn("[USAGE_LIMIT_POLICY] Failed to parse feature value", {
            key: a,
            value: l,
            error: u
          });
          return [a, l];
        }
      })) : undefined;
      this.setStatusData({
        isInSlowPool: r?.isInSlowPool ?? false,
        errorTitle: r?.errorTitle,
        errorDetail: r?.errorDetail,
        slownessMs: r?.slownessMs,
        features: s,
        canConfigureSpendLimit: r?.canConfigureSpendLimit,
        limitType: r?.limitType,
        allowedModelIds: r?.allowedModelIds && r.allowedModelIds.length > 0 ? r.allowedModelIds : undefined,
        allowedModelTags: r?.allowedModelTags && r.allowedModelTags.length > 0 ? r.allowedModelTags : undefined
      });
      const o = i.activeGrants.map(a => ({
        grantId: a.grantId,
        totalCents: a.totalCents,
        remainingCents: a.remainingCents,
        expiresAtMs: a.expiresAtMs,
        allowedModelIds: a.allowedModelIds,
        allowedModelTags: a.allowedModelTags,
        grantType: a.grantType,
        slownessMs: a.slownessMs,
        source: a.source,
        campaignName: a.campaignName,
        showInClient: a.showInClient
      }));
      this.setActiveGrantsData(o);
      this.lastFetchTime = e;
    } catch (t) {
      console.error("Failed to fetch usage limit status and active grants:", t);
      this.setError(t instanceof Error ? t.message : "Failed to fetch usage limit status and active grants");
      this.setStatusData(null);
      this.setActiveGrantsData([]);
    } finally {
      this.setIsLoading(false);
    }
  }
  addConsumer() {
    if (this.cursorAuthenticationService.isAuthenticated()) {
      this.refetch();
    }
  }
  removeConsumer() {}
  clearCachedData() {
    this.setStatusData(null);
    this.setActiveGrantsData([]);
    this.setError(null);
    this.lastFetchTime = 0;
  }
  dispose() {
    super.dispose();
  }
};
X_a = __decorate([__param(0, wg), __param(1, ku), __param(2, Tl)], X_a);
Vi(Dwi, X_a, 1);
