"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/usageDataService.js
// Offset: 27454916 (bundle byte offset)
// Size: 9403 bytes
rt();
Ti();
Wt();
Er();
uR();
Rb();
Dd();
smn = xi("usageDataService");
ffa = class extends at {
  constructor(e, t) {
    super();
    this.cursorAuthenticationService = e;
    this.reactiveStorageService = t;
    this.refreshInterval = 300000;
    this.retryInterval = 1800000;
    this.CACHE_DURATION = 30000;
    this.PLAN_INFO_CACHE_DURATION = 30000;
    this.lastFetchTime = 0;
    this.lastPlanInfoFetchTime = 0;
    this.autoRefreshActive = false;
    this.activeConsumers = 0;
    this.fetchInProgress = null;
    this.planInfoFetchInProgress = null;
    this._register(this.reactiveStorageService.createScoped(this));
    const [i, r] = lt(null);
    const [s, o] = lt(null);
    const [a, l] = lt(null);
    const [u, d] = lt(null);
    const [m, p] = lt(false);
    const [g, f] = lt(null);
    const [A, w] = lt(null);
    const [C, x] = lt(null);
    const [I, B] = lt(null);
    const [R, N] = lt([]);
    const [M, O] = lt(true);
    this.displayMessageData = A;
    this.setDisplayMessageData = w;
    this.autoModelSelectedDisplayMessageData = C;
    this.setAutoModelSelectedDisplayMessageData = x;
    this.namedModelSelectedDisplayMessageData = I;
    this.setNamedModelSelectedDisplayMessageData = B;
    this.autoBucketModelsData = R;
    this.setAutoBucketModelsData = N;
    this.planUsageData = i;
    this.setPlanUsageData = r;
    this.spendLimitUsageData = s;
    this.setSpendLimitUsageData = o;
    this.planInfoData = a;
    this.setPlanInfoData = l;
    this.nextUpgradeData = u;
    this.setNextUpgradeData = d;
    this.isLoadingData = m;
    this.setIsLoading = p;
    this.errorData = g;
    this.setError = f;
    this.usageDisplayEnabledData = M;
    this.setUsageDisplayEnabled = O;
    const $ = H => {
      this.clearCachedData();
      if (H) {
        if (this.activeConsumers > 0 && !this.autoRefreshActive) {
          this.startAutoRefresh();
        }
      } else {
        this.stopAutoRefresh();
      }
    };
    this.cursorAuthenticationService.addLoginChangedListener($);
    this._register({
      dispose: () => {
        this.cursorAuthenticationService.removeLoginChangedListener($);
      }
    });
  }
  get displayMessage() {
    return this.displayMessageData;
  }
  get autoModelSelectedDisplayMessage() {
    return this.autoModelSelectedDisplayMessageData;
  }
  get namedModelSelectedDisplayMessage() {
    return this.namedModelSelectedDisplayMessageData;
  }
  get autoBucketModels() {
    return this.autoBucketModelsData;
  }
  get planUsage() {
    return this.planUsageData;
  }
  get spendLimitUsage() {
    return this.spendLimitUsageData;
  }
  get planInfo() {
    return this.planInfoData;
  }
  get nextUpgrade() {
    return this.nextUpgradeData;
  }
  get isLoading() {
    return this.isLoadingData;
  }
  get error() {
    return this.errorData;
  }
  get usageDisplayEnabled() {
    return this.usageDisplayEnabledData;
  }
  get hasCachedData() {
    return () => this.planUsageData() !== null || this.planInfoData() !== null;
  }
  async refetch(e = false) {
    if (!this.cursorAuthenticationService.isAuthenticated()) {
      return;
    }
    const t = this.fetchPlanInfo(e).catch(r => {
      console.error("[UsageDataService] Plan info fetch failed:", r);
    });
    if (this.fetchInProgress) {
      await t;
      return this.fetchInProgress;
    }
    const i = Date.now();
    if (i - this.lastFetchTime < this.CACHE_DURATION && !this.errorData() && !e) {
      await t;
      return;
    }
    this.fetchInProgress = this.performFetch(i);
    try {
      await Promise.all([this.fetchInProgress, t]);
    } finally {
      this.fetchInProgress = null;
    }
  }
  async prefetch() {
    if (!this.cursorAuthenticationService.isAuthenticated()) {
      return;
    }
    const e = Date.now();
    this.fetchPlanInfo(false).catch(t => {
      console.error("[UsageDataService] Prefetch plan info failed:", t);
    });
    this.fetchInProgress = this.performFetchSilent(e);
    try {
      await this.fetchInProgress;
    } finally {
      this.fetchInProgress = null;
    }
  }
  async performFetchSilent(e) {
    this.setError(null);
    try {
      const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new efa());
      this.setUsageDisplayEnabled(i.enabled);
      this.setAutoBucketModelsData(i.autoBucketModels ?? []);
      if (i.enabled) {
        this.setDisplayMessageData(i.displayMessage);
        this.setAutoModelSelectedDisplayMessageData(i.autoModelSelectedDisplayMessage ?? null);
        this.setNamedModelSelectedDisplayMessageData(i.namedModelSelectedDisplayMessage ?? null);
      } else {
        this.setDisplayMessageData(null);
        this.setAutoModelSelectedDisplayMessageData(null);
        this.setNamedModelSelectedDisplayMessageData(null);
      }
      if (i.planUsage && i.planUsage.limit > 0) {
        const r = i.planUsage.totalSpend / 100;
        const s = i.planUsage.includedSpend / 100;
        const o = i.planUsage.bonusSpend / 100;
        const a = i.planUsage.limit / 100;
        const l = i.planUsage.autoSpend !== undefined ? i.planUsage.autoSpend / 100 : undefined;
        const u = i.planUsage.apiSpend !== undefined ? i.planUsage.apiSpend / 100 : undefined;
        const d = Math.min(s / a * 100, 100);
        const m = {
          total: r,
          used: s,
          bonus: o,
          limit: a,
          bonusRemaining: i.planUsage?.remainingBonus ?? false,
          bonusTooltip: i.planUsage?.bonusTooltip,
          usedPercentage: d,
          displayThreshold: i.displayThreshold ?? 50,
          billingCycleEnd: Number(i.billingCycleEnd),
          autoUsed: l,
          apiUsed: u,
          autoPercentUsed: i.planUsage.autoPercentUsed,
          apiPercentUsed: i.planUsage.apiPercentUsed,
          totalPercentUsed: i.planUsage.totalPercentUsed
        };
        this.setPlanUsageData(m);
      } else {
        this.setPlanUsageData(null);
      }
      if (i.spendLimitUsage) {
        const r = i.spendLimitUsage.individualUsed / 100;
        const s = (i.spendLimitUsage.individualLimit ?? 0) / 100;
        const o = s > 0 ? Math.min(r / s * 100, 100) : 0;
        this.setSpendLimitUsageData({
          used: r,
          limit: s,
          percentage: o
        });
      } else {
        this.setSpendLimitUsageData(null);
      }
      this.lastFetchTime = e;
    } catch (t) {
      console.error("[UsageDataService] Failed to prefetch current period usage:", t);
      this.setError(t instanceof Error ? t.message : "Failed to fetch usage data");
    }
  }
  async fetchPlanInfo(e = false) {
    if (!this.cursorAuthenticationService.isAuthenticated()) {
      return;
    }
    if (this.planInfoFetchInProgress) {
      return this.planInfoFetchInProgress;
    }
    const t = Date.now();
    if (!!e || !(t - this.lastPlanInfoFetchTime < this.PLAN_INFO_CACHE_DURATION)) {
      this.planInfoFetchInProgress = this.performPlanInfoFetch(t);
      try {
        await this.planInfoFetchInProgress;
      } finally {
        this.planInfoFetchInProgress = null;
      }
    }
  }
  async performPlanInfoFetch(e) {
    const i = await (await this.cursorAuthenticationService.dashboardClient()).getPlanInfo(new yiu());
    if (i.planInfo) {
      this.setPlanInfoData({
        planName: i.planInfo.planName,
        includedAmount: i.planInfo.includedAmountCents / 100,
        price: i.planInfo.price ?? undefined,
        billingCycleEnd: i.planInfo.billingCycleEnd !== undefined ? Number(i.planInfo.billingCycleEnd) : undefined
      });
    } else {
      this.setPlanInfoData(null);
    }
    if (i.nextUpgrade && i.nextUpgrade.tier) {
      this.setNextUpgradeData({
        tier: i.nextUpgrade.tier,
        name: i.nextUpgrade.name,
        amount: i.nextUpgrade.includedAmountCents / 100,
        price: i.nextUpgrade.price,
        description: i.nextUpgrade.description
      });
    } else {
      this.setNextUpgradeData(null);
    }
    this.lastPlanInfoFetchTime = e;
  }
  async performFetch(e) {
    this.setIsLoading(true);
    this.setError(null);
    try {
      const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new efa());
      this.setUsageDisplayEnabled(i.enabled);
      this.setAutoBucketModelsData(i.autoBucketModels ?? []);
      if (i.enabled) {
        this.setDisplayMessageData(i.displayMessage);
        this.setAutoModelSelectedDisplayMessageData(i.autoModelSelectedDisplayMessage ?? null);
        this.setNamedModelSelectedDisplayMessageData(i.namedModelSelectedDisplayMessage ?? null);
      } else {
        this.setDisplayMessageData(null);
        this.setAutoModelSelectedDisplayMessageData(null);
        this.setNamedModelSelectedDisplayMessageData(null);
      }
      if (i.planUsage && i.planUsage.limit > 0) {
        const r = i.planUsage.totalSpend / 100;
        const s = i.planUsage.includedSpend / 100;
        const o = i.planUsage.bonusSpend / 100;
        const a = i.planUsage.limit / 100;
        const l = i.planUsage.autoSpend !== undefined ? i.planUsage.autoSpend / 100 : undefined;
        const u = i.planUsage.apiSpend !== undefined ? i.planUsage.apiSpend / 100 : undefined;
        const d = Math.min(s / a * 100, 100);
        const m = {
          total: r,
          used: s,
          bonus: o,
          limit: a,
          bonusRemaining: i.planUsage?.remainingBonus ?? false,
          bonusTooltip: i.planUsage?.bonusTooltip,
          usedPercentage: d,
          displayThreshold: i.displayThreshold ?? 50,
          billingCycleEnd: Number(i.billingCycleEnd),
          autoUsed: l,
          apiUsed: u,
          autoPercentUsed: i.planUsage.autoPercentUsed,
          apiPercentUsed: i.planUsage.apiPercentUsed,
          totalPercentUsed: i.planUsage.totalPercentUsed
        };
        this.setPlanUsageData(m);
      } else {
        this.setPlanUsageData(null);
      }
      if (i.spendLimitUsage) {
        const r = i.spendLimitUsage.individualUsed / 100;
        const s = (i.spendLimitUsage.individualLimit ?? 0) / 100;
        const o = s > 0 ? Math.min(r / s * 100, 100) : 0;
        this.setSpendLimitUsageData({
          used: r,
          limit: s,
          percentage: o
        });
      } else {
        this.setSpendLimitUsageData(null);
      }
      this.lastFetchTime = e;
    } catch (t) {
      console.error("[UsageDataService] Failed to fetch current period usage:", t);
      this.setError(t instanceof Error ? t.message : "Failed to fetch usage data");
      this.setPlanUsageData(null);
      this.setSpendLimitUsageData(null);
      this.setDisplayMessageData(null);
    } finally {
      this.setIsLoading(false);
    }
  }
  addConsumer() {
    this.activeConsumers++;
    if (this.activeConsumers === 1 && !this.autoRefreshActive && this.cursorAuthenticationService.isAuthenticated()) {
      this.startAutoRefresh();
    }
  }
  removeConsumer() {
    this.activeConsumers = Math.max(0, this.activeConsumers - 1);
    if (this.activeConsumers === 0 && this.autoRefreshActive) {
      this.stopAutoRefresh();
    }
  }
  startAutoRefresh() {
    if (this.autoRefreshActive || !this.cursorAuthenticationService.isAuthenticated()) {
      return;
    }
    this.stopAutoRefresh();
    this.autoRefreshActive = true;
    const e = () => {
      if (!this.autoRefreshActive || this.activeConsumers === 0 || !this.cursorAuthenticationService.isAuthenticated()) {
        return;
      }
      const t = this.errorData() ? this.retryInterval : this.refreshInterval;
      this.timeoutId = setTimeout(async () => {
        if (this.autoRefreshActive && this.activeConsumers > 0 && this.cursorAuthenticationService.isAuthenticated()) {
          await this.refetch();
          e();
        }
      }, t);
    };
    e();
  }
  stopAutoRefresh() {
    this.autoRefreshActive = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
  clearCachedData() {
    this.setPlanUsageData(null);
    this.setSpendLimitUsageData(null);
    this.setDisplayMessageData(null);
    this.setAutoModelSelectedDisplayMessageData(null);
    this.setNamedModelSelectedDisplayMessageData(null);
    this.setAutoBucketModelsData([]);
    this.setPlanInfoData(null);
    this.setNextUpgradeData(null);
    this.setError(null);
    this.setUsageDisplayEnabled(true);
    this.lastFetchTime = 0;
    this.lastPlanInfoFetchTime = 0;
    this.planInfoFetchInProgress = null;
  }
  dispose() {
    this.stopAutoRefresh();
    super.dispose();
  }
};
ffa = __decorate([__param(0, wg), __param(1, ku)], ffa);
Vi(smn, ffa, 1);
