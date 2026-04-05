"use strict";

// Module: out-build/vs/workbench/services/aiSettings/browser/aiSettingsService.js
// Offset: 27471127 (bundle byte offset)
// Size: 22814 bytes
ml();
rt();
dr();
Er();
Wt();
Px();
Dd();
nA();
kr();
Rb();
yn();
iM();
nie();
Ti();
gT();
fN();
S9();
rf();
CSt();
vE();
si();
cp();
bfa();
rie();
Wu();
zp();
J0();
oP();
Zk();
vU = xi("AISettingsService");
Efa = async (n, e, t, i, r) => {
  e.setModelConfig("composer", n);
  if (!r.isVisible("workbench.parts.auxiliarybar")) {
    r.setPartHidden(false, "workbench.parts.auxiliarybar");
  }
  let s = t.selectedComposerId;
  if (s) {
    await i.openComposer({
      type: "local",
      id: s
    });
  } else {
    await i.createNewComposer();
    s = t.selectedComposerId;
  }
  if (s) {
    const o = await t.getComposerHandleById(s);
    if (o) {
      try {
        e.setModelConfigForComposer(o, n);
      } finally {
        o.dispose();
      }
    }
  }
};
aJg = (n, e, t, i) => {
  let r = n.getModelConfig(t);
  if (r === null) {
    return {
      modelName: "default",
      maxMode: false
    };
  }
  const s = r.modelName.split(",").map(l => l.trim()).filter(l => l.length > 0);
  const o = s.map(l => i?.get(l) ?? l);
  if (o.length > 0 && o.every(l => e.includes(l))) {
    if (o.some((l, u) => l !== s[u])) {
      r = {
        ...r,
        modelName: o.join(",")
      };
      n.setModelConfig(t, r);
    }
  } else {
    if (e.length === 0 || t === "background-composer") {
      return r;
    }
    const l = o.filter(d => e.includes(d));
    r = {
      modelName: l.length > 0 ? l.join(",") : e[0],
      maxMode: false
    };
    n.setModelConfig(t, r);
  }
  return r;
};
xfa = class extends at {
  getLastSingleModelPreferenceState() {
    const e = this.lastSingleModelPreference.get();
    if (!e) {
      return {};
    }
    try {
      return JSON.parse(e);
    } catch {
      return {};
    }
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.storageService = e;
    this.reactiveStorageService = t;
    this.cursorAuthenticationService = i;
    this.adminSettingsService = r;
    this.modelConfigService = s;
    this.uiOverlayService = o;
    this.devConsoleService = a;
    this.structuredLogService = l;
    this.storageId = "aisettings.service";
    this._onDidChangeUseOpenAIKey = new Qe();
    this.getLastSingleModelPreference = u => this.getLastSingleModelPreferenceState()[u];
    this.setLastSingleModelPreference = (u, d) => {
      const m = this.getLastSingleModelPreferenceState();
      if (!d || d === "") {
        if (m[u] !== undefined) {
          delete m[u];
          this.lastSingleModelPreference.set(JSON.stringify(m), undefined);
        }
        return;
      }
      if (m[u] !== d) {
        m[u] = d;
        this.lastSingleModelPreference.set(JSON.stringify(m), undefined);
      }
    };
    this.saveData = () => {};
    this.loadData = () => {
      if (this.reactiveStorageService.applicationUserPersistentStorage.havePerformedSettingsServiceMigration !== true) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("havePerformedSettingsServiceMigration", true);
        const u = this.storageService.get(this.storageId, -1);
        if (u) {
          const d = JSON.parse(u);
          if (d.useOpenAIKey !== undefined) {
            this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", d.useOpenAIKey);
          }
          if (d.availableModels !== undefined) {
            this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", d.availableModels);
          }
          if (d.noStorageMode !== undefined) {
            this.reactiveStorageService.setApplicationUserPersistentStorage("noStorageMode", d.noStorageMode || this.cursorAuthenticationService.membershipType() === ra.ENTERPRISE && this.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise().privacyModeForced);
          }
        }
      }
    };
    this.getUseOpenAIKey = () => this.reactiveStorageService.applicationUserPersistentStorage.useOpenAIKey ?? false;
    this.enableModel = u => {
      if (this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(d => d !== u));
      }
      if (!this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [...(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? []), u]);
      }
      this._didChangeAvailableModels();
    };
    this.addUserAddedModel = u => {
      if (!this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", [...(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? []), u]);
        this._didChangeAvailableModels();
      }
    };
    this.removeUserAddedModel = u => {
      if (!!this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u) || !this.isDefaultModel(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.filter(d => d !== u) ?? []);
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.filter(d => d !== u) ?? []);
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.filter(d => d !== u) ?? []);
        this._didChangeAvailableModels();
      }
    };
    this.isDefaultModel = u => this.modelConfigService.getAvailableDefaultModels().filter(m => !m.isLongContextOnly).map(m => m.name).includes(u);
    this.isUserAddedModel = u => this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u) ?? false;
    this.removeModel = u => {
      if (this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(d => d !== u));
      }
      if (this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(d => d !== u));
      }
      this._didChangeAvailableModels();
    };
    this.disableModel = u => {
      if (this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(d => d !== u));
      }
      if (!this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", [...(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled ?? []), u]);
      }
      this._didChangeAvailableModels();
    };
    this.getAllPotentialModelsReactiveWithStatus = () => {
      const u = m => ({
        name: m.name,
        clientDisplayName: m.clientDisplayName ?? m.name,
        serverModelName: m.serverModelName ?? m.name,
        status: m.degradationStatus ?? HRe.UNSPECIFIED,
        price: m.price,
        tooltipData: m.tooltipData,
        supportsMaxMode: m.supportsMaxMode,
        tooltipDataForMaxMode: m.tooltipDataForMaxMode,
        isRecommendedForBackgroundComposer: m.isRecommendedForBackgroundComposer,
        supportsPlanMode: m.supportsPlanMode,
        supportsSandboxing: m.supportsSandboxing,
        inputboxShortModelName: m.inputboxShortModelName,
        backgroundComposerSortOrder: m.backgroundComposerSortOrder,
        variants: m.variants,
        namedModelSectionIndex: m.namedModelSectionIndex,
        tagline: m.tagline
      });
      return this.modelConfigService.getAvailableDefaultModels().filter(m => !m.isLongContextOnly && !this.getHardcodedLongContextOnlyModelNames().includes(m.name)).map(m => u(m));
    };
    this.useOpenAIKeyListeners = [];
    this.availableModelsListeners = [];
    this.popupListeners = [];
    this.closePopupListeners = [];
    this.addOpenAIKeyListener = u => {
      this.useOpenAIKeyListeners.push(u);
    };
    this.removeOpenAIKeyListener = u => {
      this.useOpenAIKeyListeners = this.useOpenAIKeyListeners.filter(d => d !== u);
    };
    this.addAvailableModelsListener = u => {
      this.availableModelsListeners.push(u);
    };
    this.removeAvailableModelsListener = u => {
      this.availableModelsListeners = this.availableModelsListeners.filter(d => d !== u);
    };
    this.onDidChangeUseOpenAIKey = this._onDidChangeUseOpenAIKey.event;
    this.addPopupListener = u => {
      this.popupListeners.push(u);
    };
    this.addClosePopupListener = u => {
      this.closePopupListeners.push(u);
    };
    this.removeClosePopupListener = u => {
      this.closePopupListeners = this.closePopupListeners.filter(d => d !== u);
    };
    this.settingsDismissedOpenAIKeyWarning = this._register(hm(this.storageService, "settingsDismissedOpenAIKeyWarning"));
    this.settingsDismissedClaudeKeyWarning = this._register(hm(this.storageService, "settingsDismissedClaudeKeyWarning"));
    this.settingsDismissedGoogleKeyWarning = this._register(hm(this.storageService, "settingsDismissedGoogleKeyWarning"));
    this.settingsDismissedBedrockKeyWarning = this._register(hm(this.storageService, "settingsDismissedBedrockKeyWarning"));
    this.bestOfNCountPreference = this._register(hm(this.storageService, "bestOfNCountPreference"));
    this.bestOfNEnsemblePreferences = this._register(hm(this.storageService, "bestOfNEnsemblePreferences"));
    this.lastSingleModelPreference = this._register(hm(this.storageService, "lastSingleModelPreference"));
    this.loadData();
    this._register(this.storageService.onWillSaveState(() => this.saveData()));
    this.devConsoleService.register("getApplicationProperty", u => wb(this.storageService, u));
  }
  getUseApiKeyForModel(e) {
    if (Enu(e) && this.reactiveStorageService.applicationUserPersistentStorage.useClaudeKey) {
      return this.reactiveStorageService.applicationUserPersistentStorage.useClaudeKey;
    } else if (xnu(e) && this.reactiveStorageService.applicationUserPersistentStorage.useGoogleKey) {
      return true;
    } else {
      return this.getUseOpenAIKey();
    }
  }
  getHardcodedLongContextOnlyModelNames() {
    return gEe.filter(e => e.isLongContextOnly).map(e => e.name);
  }
  getAvailableModelsReactive(e) {
    return [...this.getAvailableModelsReactiveWithStatus(e).map(t => t.name)];
  }
  getAvailableModelsWithStatus(e) {
    return sc(() => this.getAvailableModelsReactiveWithStatus(e));
  }
  getAvailableModelsReactiveWithStatus(e) {
    let t = [];
    const i = l => ({
      name: l.name,
      clientDisplayName: l.clientDisplayName ?? l.name,
      serverModelName: l.serverModelName ?? l.name,
      status: l.degradationStatus ?? HRe.UNSPECIFIED,
      price: l.price,
      tooltipData: l.tooltipData,
      supportsMaxMode: l.supportsMaxMode,
      tooltipDataForMaxMode: l.tooltipDataForMaxMode,
      isRecommendedForBackgroundComposer: l.isRecommendedForBackgroundComposer,
      supportsPlanMode: l.supportsPlanMode,
      supportsSandboxing: l.supportsSandboxing,
      inputboxShortModelName: l.inputboxShortModelName,
      backgroundComposerSortOrder: l.backgroundComposerSortOrder,
      variants: l.variants,
      namedModelSectionIndex: l.namedModelSectionIndex,
      tagline: l.tagline
    });
    const r = ZC(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled);
    const s = [];
    const o = this.modelConfigService.getAvailableDefaultModels();
    t = sc(() => o.filter(l => {
      if (!l.defaultOn && !r?.includes(l.name)) {
        return false;
      }
      const u = e?.specificModelField === "cmd-k";
      if (u && l.supportsNonMaxMode === false || u && l.supportsThinking === true || u && l.supportsCmdK === false || !u && l.onlySupportsCmdK === true) {
        s.push(l.name);
        return false;
      } else {
        return true;
      }
    }).map(l => i(l)));
    if (r !== undefined) {
      for (const l of r) {
        if (!s.includes(l) && !t.some(u => u.name === l)) {
          t.push({
            name: l,
            clientDisplayName: l,
            status: HRe.UNSPECIFIED
          });
        }
      }
    }
    const a = ZC(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled);
    if (a !== undefined) {
      t = t.filter(l => !a.includes(l.name));
    }
    t = t.filter(l => !this.getHardcodedLongContextOnlyModelNames().includes(l.name));
    if (e?.specificModelField === "background-composer") {
      for (const l of this.modelConfigService.getAvailableDefaultModels()) {
        if (l.isRecommendedForBackgroundComposer) {
          if (!t.some(u => u.name === l.name)) {
            t.push(i(l));
          }
        }
      }
    }
    if (e?.filterBlockedModels !== false) {
      t = t.filter(l => !this.adminSettingsService.isModelBlocked(l.clientDisplayName));
    }
    return t;
  }
  _setUseOpenAIKey(e) {
    this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", e);
    for (let t of this.useOpenAIKeyListeners) {
      t(e);
    }
    this._onDidChangeUseOpenAIKey.fire(e);
  }
  _setAvailableModels(e) {
    this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", e);
    this._didChangeAvailableModels();
  }
  handleAvailableModelsChange() {
    this.modelConfigService.triggerParameterizedModelConfigMigration();
    const e = this.modelConfigService.getAvailableDefaultModels();
    const i = e.find(l => l.name === "default")?.variants?.map(l => l.parameterValues.find(u => u.id === "kind")?.value).filter(l => l !== undefined) ?? [];
    const r = [...e.map(l => l.name), ...i];
    const s = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? [];
    for (const l of s) {
      if (!r.includes(l)) {
        r.push(l);
      }
    }
    const o = new Map();
    for (const l of e) {
      if (l.name !== "default" && l.legacySlugs) {
        for (const u of l.legacySlugs) {
          o.set(u, l.name);
        }
      }
    }
    const a = this.reactiveStorageService.applicationUserPersistentStorage.useModelParameters === true;
    if (!a) {
      this.modelConfigService.migrateModelSettingsToCurrentCatalog();
      for (const l of whn) {
        const u = this.modelConfigService.getModelConfig(l);
        const d = u.selectedModels;
        if (!d || d.length === 0) {
          continue;
        }
        const m = d.map(g => o.get(g.modelId) ?? g.modelId).map(g => g.trim()).filter(g => g.length > 0);
        if (m.length === 0) {
          continue;
        }
        const p = l === "composer" ? m[0] : m.join(",");
        this.structuredLogService.info("composer", "Global surface reverse migration: selectedModels → modelName, clearing selectedModels (flag off)", {
          subkey: "global_surface_reverse_migration",
          surface: l,
          beforeModelName: u.modelName ?? "",
          beforeSelectedModelIds: d.map(g => g.modelId).join(","),
          afterModelName: p
        });
        this.modelConfigService.setModelConfig(l, {
          modelName: p,
          selectedModels: undefined
        });
      }
    }
    this.migrateLoadedComposerModelConfigs(a, o);
    for (const l of whn) {
      const u = this.modelConfigService.getModelConfig(l).modelName;
      const d = aJg(this.modelConfigService, r, l, o);
      if (d.modelName !== u) {
        this.structuredLogService.warn("composer", "Model reset by fixUnavailable", {
          subkey: "fix_unavailable_model_reset",
          surface: l,
          previousModel: u,
          newModel: d.modelName,
          availableModelCount: String(r.length),
          availableModels: r.join(",")
        });
      }
    }
    this._didChangeAvailableModels();
  }
  _didChangeAvailableModels() {
    const e = this.getAvailableModelsReactive();
    for (let t of this.availableModelsListeners) {
      t(e);
    }
  }
  migrateLoadedComposerModelConfigs(e, t) {}
};
xfa = __decorate([__param(0, Hi), __param(1, ku), __param(2, wg), __param(3, i8), __param(4, ix), __param(5, YD), __param(6, mye), __param(7, Kk)], xfa);
Tfa = class extends xfa {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super(r, s, i, o, a, l, u, d);
    this.layoutService = e;
    this.instantiationService = t;
    this.usageDataService = m;
    this.openPopup = (p, g) => {
      this.usageDataService.prefetch().catch(f => {
        console.error("[AISettingsService] Failed to prefetch usage data:", f);
      });
      if (p !== undefined || g !== undefined) {
        const f = this.uiOverlayService.settingsOpenData.value;
        const A = {
          ...(f ?? {}),
          openTab: p ?? f?.openTab
        };
        if (g === undefined) {
          delete A.idToScrollTo;
          delete A.skipScrollToId;
          delete A.highlightStyle;
        } else {
          A.idToScrollTo = g;
        }
        this.uiOverlayService.setSettingsOpenData(A);
      }
      for (let f of this.popupListeners) {
        f(this.layoutService, this.instantiationService, p, g);
      }
    };
    this.closePopup = () => {
      for (let p of this.closePopupListeners) {
        p();
      }
    };
    this.loginChangedListener = p => {
      if (this.cursorAuthenticationService.membershipType() === ra.PRO || this.cursorAuthenticationService.membershipType() === ra.PRO_PLUS || this.cursorAuthenticationService.membershipType() === ra.ULTRA) {
        this.setUseOpenAIKey(false);
      }
    };
    this.subscriptionChangedListener = p => {
      if (p !== ra.FREE) {
        this.setUseOpenAIKey(false);
      }
    };
    this.cursorAuthenticationService.addLoginChangedListener(this.loginChangedListener);
    this.cursorAuthenticationService.addSubscriptionChangedListener(this.subscriptionChangedListener);
  }
  migrateLoadedComposerModelConfigs(e, t) {
    const i = this.instantiationService.invokeFunction(s => s.get(Oa));
    const r = sc(() => {
      const s = i.allComposersData.allComposers;
      if (Array.isArray(s)) {
        return s.map(o => o.composerId);
      } else {
        return [];
      }
    });
    for (const s of r) {
      const o = i.getHandleIfLoaded_MIGRATED(s);
      if (!o) {
        continue;
      }
      const a = i.getComposerData(o);
      if (!a?.modelConfig) {
        continue;
      }
      const {
        modelConfig: l
      } = a;
      if (e) {
        if (l.modelName && (!l.selectedModels || l.selectedModels.length === 0)) {
          if (this.modelConfigService.getAvailableDefaultModels().length === 0) {
            continue;
          }
          const m = l.modelName.split(",").map(p => p.trim()).filter(p => p.length > 0).map(p => ({
            modelId: this.modelConfigService.resolveModelNameToCatalog(p),
            parameters: []
          }));
          this.structuredLogService.info("composer", "Per-composer migration: forward-migrating modelName → selectedModels (flag on)", {
            subkey: "composer_model_config_forward_migration",
            composerId: s,
            useModelParameters: String(e),
            sourceModelName: l.modelName,
            resolvedSelectedModelIds: m.map(p => p.modelId).join(",")
          });
          i.updateComposerData(o, {
            modelConfig: {
              modelName: l.modelName,
              maxMode: l.maxMode,
              selectedModels: m
            }
          });
        }
      } else {
        const u = l.selectedModels;
        if (!u || u.length === 0) {
          continue;
        }
        const d = u.map(m => t.get(m.modelId) ?? m.modelId).map(m => m.trim()).filter(m => m.length > 0);
        if (d.length === 0) {
          continue;
        }
        this.structuredLogService.info("composer", "Per-composer migration: reverse-migrating selectedModels → modelName (flag off)", {
          subkey: "composer_model_config_reverse_migration",
          composerId: s,
          useModelParameters: String(e),
          beforeModelName: l.modelName ?? "",
          beforeSelectedModelIds: u.map(m => m.modelId).join(","),
          afterModelName: d[0]
        });
        i.updateComposerData(o, {
          modelConfig: {
            modelName: d[0],
            maxMode: l.maxMode,
            selectedModels: undefined
          }
        });
      }
    }
  }
  getModelConfig(e) {
    return this.modelConfigService.getModelConfig(e);
  }
  async getApiKey() {
    return await this.cursorAuthenticationService.openAIKey();
  }
  async refreshAPIKeyModels() {
    try {
      if (!this.getUseOpenAIKey()) {
        return;
      }
      const e = await this.cursorAuthenticationService.openAIKey();
      if (!e) {
        return;
      }
      const {
        models: t
      } = await this.getModels(e);
      this._setAvailableModels(t);
    } catch (e) {
      console.error("Error refreshing API key models:", e);
    }
  }
  async setUseOpenAIKey(e) {
    if (e === false) {
      this._setUseOpenAIKey(false);
      this._didChangeAvailableModels();
      return false;
    }
    {
      this._setUseOpenAIKey(true);
      const t = await this.cursorAuthenticationService.openAIKey();
      if (t) {
        const {
          models: i
        } = await this.getModels(t);
        this._setAvailableModels(i);
        return true;
      } else {
        this._setUseOpenAIKey(false);
        this._didChangeAvailableModels();
        return false;
      }
    }
  }
  async setOpenAIKey(e) {
    const t = await this.tryChallenge(e);
    if (t !== true) {
      return t;
    }
    const {
      models: i
    } = await this.getModels(e);
    this._setAvailableModels(i);
    this._setUseOpenAIKey(true);
    this.cursorAuthenticationService.storeOpenAIKey(e);
    return true;
  }
  async getModels(e) {
    return {
      models: []
    };
  }
  getProviderFromUrl(e) {
    try {
      const i = new URL(e).hostname.toLowerCase();
      if (i === "api.openai.com" || i.endsWith(".api.openai.com")) {
        return "openai";
      } else if (i === "api.x.ai" || i.endsWith(".api.x.ai")) {
        return "xai";
      } else {
        return "unknown";
      }
    } catch {
      return "unknown";
    }
  }
  getModelForChallenge() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1";
    const t = this.getProviderFromUrl(e);
    const i = this.getAvailableModelsReactive().filter(s => s !== "default");
    const r = {
      openai: ["gpt-4o-mini", "4o", "gpt", "o1", "o3"],
      xai: ["grok-4", "grok-3"]
    };
    if (r[t]) {
      return r[t][0];
    }
    for (const s of ["gpt-4o-mini", "4o", "gpt", "o1", "o3"]) {
      const o = i.find(a => a.includes(s));
      if (o) {
        return o;
      }
    }
    return i.at(0) ?? "please-enable-some-models";
  }
  async tryChallenge(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1";
    try {
      const i = await fetch(`${t}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`
        },
        body: JSON.stringify({
          model: this.getModelForChallenge(),
          messages: [{
            role: "system",
            content: "You are a helpful assistant."
          }, {
            role: "user",
            content: "Test prompt using gpt-3.5-turbo"
          }],
          temperature: 1,
          max_tokens: 10,
          stream: false
        })
      });
      if (i.status === 200) {
        return true;
      }
      {
        const r = await Promise.race([i.text(), new Promise((s, o) => setTimeout(() => s("Request timed out after 10 seconds"), 10000))]);
        return {
          code: i.status,
          error: r
        };
      }
    } catch (i) {
      return {
        code: 0,
        error: i.toString()
      };
    }
  }
  doesModelSupportAgent(e) {
    if (e === "default") {
      return true;
    }
    const t = e.toLowerCase().includes("claude-3");
    const i = e.toLowerCase().includes("gpt-4o") && !e.toLowerCase().includes("mini");
    const r = e.toLowerCase().includes("o3-mini");
    const s = e.toLowerCase().includes("grok-3");
    if (t || i || r || s) {
      return true;
    }
    const o = this.modelConfigService.getAvailableDefaultModels();
    const a = [...gEe];
    const l = o.find(d => d.name === e);
    const u = a.find(d => d.name === e);
    return (l?.supportsAgent || u?.supportsAgent) ?? false;
  }
  doesModelSupportImages(e) {
    const t = e.split(",").map(s => s.trim());
    const i = this.modelConfigService.getAvailableDefaultModels();
    const r = [...gEe];
    return t.every(s => {
      if (s === "default") {
        return true;
      }
      const o = i.find(l => l.name === s);
      const a = r.find(l => l.name === s);
      return (o?.supportsImages || a?.supportsImages) ?? false;
    });
  }
  getServerModelName(e) {
    return this.modelConfigService.getServerModelName(e);
  }
  dispose() {
    this.cursorAuthenticationService.removeLoginChangedListener(this.loginChangedListener);
    this.cursorAuthenticationService.removeSubscriptionChangedListener(this.subscriptionChangedListener);
    super.dispose();
  }
};
Tfa = __decorate([__param(0, vS), __param(1, ln), __param(2, wg), __param(3, Hi), __param(4, ku), __param(5, i8), __param(6, ix), __param(7, YD), __param(8, mye), __param(9, Kk), __param(10, smn)], Tfa);
Vi(vU, Tfa, 1);
Dt(class extends rn {
  constructor() {
    super({
      id: SFn,
      title: {
        value: "Switch to model",
        original: "Switch to model"
      },
      f1: false
    });
  }
  async run(n, e, t) {
    const i = n.get(ix);
    if (!t) {
      console.error("No specific model field provided");
      return;
    }
    const s = {
      ...i.getModelConfig(t),
      modelName: e
    };
    i.setModelConfig(t, s);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "cursorai.action.switchToComposer1",
      title: {
        value: "Switch to Composer-1",
        original: "Switch to Composer-1"
      },
      f1: false,
      precondition: Ee.equals("aiSettings.composer1Available", true)
    });
  }
  async run(n) {
    const e = n.get(ix);
    const t = n.get(Oa);
    e.setModelConfig("composer", {
      modelName: "composer-1"
    });
    const i = t.selectedComposerId;
    if (i) {
      const r = await t.getComposerHandleById(i);
      if (r) {
        try {
          e.setModelConfigForComposer(r, {
            modelName: "composer-1"
          });
        } finally {
          r.dispose();
        }
      }
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "cursorai.action.switchToModelSlug",
      title: {
        value: "Switch to Model Slug",
        original: "Switch to Model Slug"
      },
      f1: false
    });
  }
  async run(n, e) {
    const t = n.get(ix);
    const i = n.get(Oa);
    const r = n.get(sP);
    const s = n.get(Vu);
    const o = W2A(e);
    if (!o) {
      console.warn("No valid model config provided for switchToModelSlug");
      return;
    }
    await Efa(o, t, i, r, s);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "cursorai.action.switchToDynamicModelSlug",
      title: {
        value: "Switch to Dynamic Model Slug",
        original: "Switch to Dynamic Model Slug"
      },
      f1: false
    });
  }
  async run(n) {
    const e = n.get(ix);
    const t = n.get(Oa);
    const i = n.get(sP);
    const r = n.get(Vu);
    const s = n.get(Tl);
    const o = s.getDynamicConfigParam("switch_to_model_slug_config", "modelSlug");
    if (!o) {
      console.warn("No model slug configured in switch_to_model_slug_config");
      return;
    }
    const a = s.getDynamicConfigParam("switch_to_model_slug_config", "modelIdWithParams");
    const l = {
      modelName: o,
      selectedModels: a?.modelId ? [{
        modelId: a.modelId,
        parameters: a.params
      }] : undefined
    };
    await Efa(l, e, t, i, r);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "cursorai.action.createNewAgentWithImagePrompt",
      title: {
        value: "Generate an Image",
        original: "Generate an Image"
      },
      f1: false
    });
  }
  async run(n) {
    const e = n.get(ag);
    const t = n.get(rw);
    const i = n.get(BA);
    const r = await e.createComposer({
      partialState: {
        unifiedMode: "agent",
        text: "Generate an image of ",
        richText: "Generate an image of "
      },
      openInNewTab: true
    });
    if (!r) {
      console.error("[composer] Failed to create composer for image generation prompt");
      return;
    }
    const s = r.composerId;
    i.fireShouldForceText({
      composerId: s
    });
    await t.showAndFocus(s);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "cursorai.action.switchToProAuto",
      title: {
        value: "Switch to Pro Auto",
        original: "Switch to Pro Auto"
      },
      f1: false
    });
  }
  async run(n) {
    const e = n.get(ix);
    const t = n.get(Oa);
    const i = n.get(sP);
    const r = n.get(Vu);
    await Efa({
      modelName: "pro"
    }, e, t, i, r);
  }
});
