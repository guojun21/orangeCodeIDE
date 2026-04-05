"use strict";

// Module: out-build/vs/workbench/services/aiSettings/browser/adminSettingsService.js
// Offset: 26857153 (bundle byte offset)
// Size: 2460 bytes
iu();
yn();
Er();
Wt();
rt();
Rb();
kr();
i8 = xi("adminSettingsService");
kga = {
  allowedModels: [],
  blockedModels: [],
  dotCursorProtection: false,
  browserFeatures: false,
  browserOriginAllowlist: [],
  allowedMcpConfiguration: undefined,
  byokDisabled: false,
  networkDenylist: [],
  networkAllowlist: [],
  sharedConversationSettings: {
    enabled: false,
    allowedVisibilities: [],
    allowPublicIndexing: false
  },
  cursorBlameSettings: {
    enabled: true
  },
  attributionControls: {
    disableAttribution: false
  }
};
Ega = class extends at {
  static {
    Sga = this;
  }
  static {
    this.STORAGE_KEY = "adminSettings.cached";
  }
  constructor(e, t) {
    super();
    this.cursorAuthenticationService = e;
    this.storageService = t;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this.cached = kga;
    this.loadFromStorage();
    this.cursorAuthenticationService.addLoginChangedListener(() => {
      this.refresh();
    });
    this.refresh();
    const i = bi.setInterval(() => {
      this.refresh();
    }, 300000);
    this._register($i(() => {
      bi.clearInterval(i);
    }));
  }
  loadFromStorage() {
    const e = this.storageService.getObject(Sga.STORAGE_KEY, -1, kga);
    this.cached = e;
  }
  saveToStorage() {
    this.storageService.store(Sga.STORAGE_KEY, JSON.stringify(this.cached), -1, 0);
  }
  async refresh() {
    const e = JSON.stringify(this.cached);
    const t = await this.cursorAuthenticationService.dashboardClient();
    try {
      const i = await t.getTeams({});
      const r = i.teams?.find(o => o.seats !== 0);
      if (!i.teams?.length || !r) {
        this.cached = kga;
        this.saveToStorage();
        if (JSON.stringify(this.cached) !== e) {
          this._onDidChange.fire(this.cached);
        }
        return this.cached;
      }
      const s = r.id;
      this.cached = await t.getTeamAdminSettings({
        teamId: s
      });
      this.saveToStorage();
    } catch (i) {
      console.warn("[AdminSettingsService] Failed to refresh admin settings, keeping cached settings:", i);
    }
    if (JSON.stringify(this.cached) !== e) {
      this._onDidChange.fire(this.cached);
    }
    return this.cached;
  }
  getCached() {
    return this.cached;
  }
  async getLatest() {
    return await this.refresh();
  }
  async forceRefresh() {
    return await this.refresh();
  }
  isModelBlocked(e) {
    const t = this.getCached();
    const i = s => s.toLowerCase().replace(/-/g, ".");
    const r = i(e);
    return !!t.blockedModels && !!(t.blockedModels.length > 0) && !!t.blockedModels.some(s => r.includes(i(s))) || !!t.allowedModels && !!(t.allowedModels.length > 0) && !t.allowedModels.some(s => r.includes(i(s)));
  }
  isCursorBlameEnabledForTeam() {
    return this.getCached().cursorBlameSettings?.enabled ?? false;
  }
  isAttributionDisabledByAdmin() {
    return this.getCached().attributionControls?.disableAttribution ?? false;
  }
};
Ega = Sga = __decorate([__param(0, wg), __param(1, Hi)], Ega);
Vi(i8, Ega, 0);
