"use strict";

// Module: out-build/vs/workbench/services/modelConfig/browser/modelConfigService.js
// Offset: 26822090 (bundle byte offset)
// Size: 18969 bytes
Od();
rt();
Er();
Wt();
Dd();
nA();
vE();
gT();
Ti();
gEe = [{
  name: "default",
  defaultOn: true,
  supportsAgent: true,
  supportsMaxMode: true,
  supportsNonMaxMode: true,
  supportsThinking: false,
  supportsImages: true,
  parameterDefinitions: [],
  variants: [],
  legacySlugs: []
}];
ix = xi("modelConfigService");
uga = class extends at {
  constructor(e, t) {
    super();
    this.reactiveStorageService = e;
    this.structuredLogService = t;
    this._isMigrating = false;
  }
  getDefaultModelForFeature(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs;
    let i;
    switch (e) {
      case "composer":
        i = t?.composer;
        break;
      case "cmd-k":
        i = t?.cmdK;
        break;
      case "background-composer":
        i = t?.backgroundComposer;
        break;
      case "plan-execution":
        i = t?.planExecution;
        break;
      case "spec":
        i = t?.spec;
        break;
      case "deep-search":
        i = t?.deepSearch;
        break;
      case "quick-agent":
        i = t?.quickAgent;
        break;
      default:
        i = undefined;
    }
    if (i?.defaultModel) {
      return i.defaultModel;
    } else {
      return "default";
    }
  }
  shouldAllowMultiModel(e, t, i) {
    if (e === "background-composer" || e === "composer-ensemble" || (t.selectedModels?.length ?? 0) > 1 || (t.modelName?.includes(",") ?? false)) {
      return true;
    }
    const o = !!i.modelName?.includes(",") || !!i.selectedModels && !!(i.selectedModels.length > 1);
    const a = t.modelName === undefined && t.selectedModels === undefined;
    return !!o && !!a;
  }
  resolveToCatalogName(e, t) {
    return sc(() => {
      for (const i of t) {
        if (i.name === e || i.legacySlugs?.includes(e)) {
          return i.name;
        }
      }
      return e;
    });
  }
  migrateVisibilityArrayToCatalog(e, t) {
    const i = new Set();
    const r = [];
    for (const s of e) {
      const o = this.resolveToCatalogName(s, t);
      if (!i.has(o)) {
        i.add(o);
        r.push(o);
      }
    }
    return r;
  }
  migrateModelSettingsToCurrentCatalog() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage;
    const t = e.aiSettings;
    const i = this.getAvailableDefaultModels();
    if (i.length === 0) {
      return;
    }
    const r = t.modelOverrideEnabled ?? [];
    const s = t.modelOverrideDisabled ?? [];
    const o = this.migrateVisibilityArrayToCatalog(r, i);
    const a = this.migrateVisibilityArrayToCatalog(s, i);
    const l = r.length !== o.length || !r.every((d, m) => d === o[m]);
    const u = s.length !== a.length || !s.every((d, m) => d === a[m]);
    if (l) {
      this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", o);
    }
    if (u) {
      this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", a);
    }
    if (l || u) {
      this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelVisibilityMigrated", true);
      this.structuredLogService.info("composer", "Migrated model visibility to current catalog", {
        subkey: "model_visibility_catalog_migration",
        useModelParameters: String(e.useModelParameters === true),
        enabledBeforeCount: String(r.length),
        enabledAfterCount: String(o.length),
        disabledBeforeCount: String(s.length),
        disabledAfterCount: String(a.length)
      });
    }
    for (const d of whn) {
      const m = t.modelConfig[d];
      if (!m) {
        continue;
      }
      let p = false;
      if (m.modelName) {
        const A = m.modelName.split(",").map(w => w.trim()).filter(w => w.length > 0).map(w => this.resolveToCatalogName(w, i)).join(",");
        if (A !== m.modelName) {
          this.structuredLogService.info("composer", "Migrated modelConfig modelName to current catalog", {
            subkey: "model_config_modelname_catalog_migration",
            surface: d,
            before: m.modelName,
            after: A
          });
          this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", d, {
            ...m,
            modelName: A
          });
          p = true;
        }
      }
      if (m.selectedModels && m.selectedModels.length > 0 && !p) {
        let g = false;
        const f = m.selectedModels.map(A => {
          const w = this.resolveToCatalogName(A.modelId, i);
          if (w !== A.modelId) {
            g = true;
            return {
              ...A,
              modelId: w
            };
          } else {
            return A;
          }
        });
        if (g) {
          this.structuredLogService.info("composer", "Migrated modelConfig selectedModels to current catalog", {
            subkey: "model_config_selectedmodels_catalog_migration",
            surface: d,
            before: m.selectedModels.map(A => A.modelId).join(","),
            after: f.map(A => A.modelId).join(",")
          });
          this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", d, {
            ...m,
            selectedModels: f
          });
        }
      }
    }
  }
  migrateParameterizedModelConfigIfNecessary() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage;
    if (e.useModelParameters !== true) {
      return;
    }
    const i = [];
    for (const s of whn) {
      const o = e.aiSettings.modelConfig[s];
      if (o?.modelName && (o.selectedModels?.length ?? 0) === 0) {
        i.push(s);
      }
    }
    if (i.length === 0) {
      this.migrateModelSettingsToCurrentCatalog();
      return;
    }
    const r = this.getAvailableDefaultModels();
    if (r.length === 0) {
      this.migrateModelSettingsToCurrentCatalog();
      return;
    }
    this._isMigrating = true;
    try {
      for (const s of i) {
        const o = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[s];
        if (!o?.modelName || (o.selectedModels?.length ?? 0) > 0) {
          continue;
        }
        const l = this.normalizeModelList(o.modelName).map(u => ({
          modelId: this.resolveToCatalogName(u, r),
          parameters: []
        }));
        if (o.modelName && l.length === 0) {
          this.structuredLogService.warn("composer", "Model config migration produced no selected models", {
            subkey: "model_config_migration_empty_selected_models",
            sourceModelName: o.modelName
          });
        } else {
          this.structuredLogService.info("composer", "Migrated modelName to selectedModels", {
            subkey: "model_config_parameterized_migration",
            surface: s,
            sourceModelName: o.modelName,
            selectedModelIds: l.map(u => u.modelId).join(",")
          });
        }
        this.setModelConfig(s, {
          selectedModels: l
        });
      }
      this.migrateModelSettingsToCurrentCatalog();
    } finally {
      this._isMigrating = false;
    }
  }
  triggerParameterizedModelConfigMigration() {
    this.migrateParameterizedModelConfigIfNecessary();
  }
  getModelConfig(e) {
    if (!this._isMigrating) {
      sc(() => this.migrateParameterizedModelConfigIfNecessary());
    }
    let t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[e];
    t ||= {
      modelName: this.getDefaultModelForFeature(e),
      maxMode: e === "background-composer"
    };
    const i = {
      ...t
    };
    if (i.modelName) {
      const r = sc(() => {
        const s = this.getAvailableDefaultModels();
        if (s.length === 0) {
          return i.modelName;
        } else {
          return i.modelName.split(",").map(l => l.trim()).filter(l => l.length > 0).map(l => this.resolveToCatalogName(l, s)).join(",");
        }
      });
      i.modelName = r;
    }
    if (e === "plan-execution") {
      const r = this.getModelConfig("composer");
      i.maxMode = r.maxMode;
    }
    return i;
  }
  applyInvariants(e, t, i, r) {
    const s = {
      ...e,
      ...t
    };
    if (t.selectedModels !== undefined) {
      if (t.selectedModels.length > 0) {
        s.modelName = t.selectedModels.map(o => o.modelId).join(",");
      } else {
        this.structuredLogService.warn("composer", "Model config reset to default due to empty selectedModels", {
          subkey: "model_config_empty_selected_models_reset",
          surface: i,
          previousModelName: e.modelName,
          hasIncomingModelName: String(t.modelName !== undefined)
        });
        s.modelName = "default";
        s.selectedModels = undefined;
      }
    }
    if (t.modelName !== undefined && t.selectedModels === undefined) {
      s.selectedModels = undefined;
    }
    if (!r.allowMultiModel) {
      if (s.modelName && s.modelName.includes(",")) {
        const o = s.modelName.split(",")[0]?.trim();
        if (!o) {
          this.structuredLogService.warn("composer", "Model config fell back to default while truncating multi-model string", {
            subkey: "model_config_multi_model_truncate_empty_first_model",
            surface: i,
            originalModelName: s.modelName
          });
        }
        s.modelName = o || "default";
      }
      if (s.selectedModels && s.selectedModels.length > 1) {
        s.selectedModels = [s.selectedModels[0]];
      }
    }
    if (i === "background-composer") {
      s.maxMode = true;
      return s;
    }
    if (s.modelName && s.modelName.includes(",")) {
      return s;
    }
    if (t.maxMode === true && !this.doesModelSupportMaxMode(s.modelName)) {
      s.modelName = this.firstAvailableMaxModel() ?? s.modelName;
    }
    if (t.maxMode === false && !this.doesModelSupportNonMaxMode(s.modelName)) {
      s.modelName = this.firstAvailableNonMaxModel() ?? s.modelName;
    }
    if (t.modelName !== undefined) {
      if (!this.doesModelSupportMaxMode(t.modelName)) {
        s.maxMode = false;
      }
      if (!this.doesModelSupportNonMaxMode(t.modelName)) {
        s.maxMode = true;
      }
    }
    if (t.maxMode === false && s.selectedModels) {
      const o = s.selectedModels.map(a => {
        const l = this.getAvailableDefaultModels().find(m => m.name === a.modelId);
        if (!l || !l.variants || l.variants.length === 0) {
          return a;
        }
        const u = wae(a.parameters ?? []);
        const d = itl(l, u, false);
        if (d && !d.maxMode) {
          return {
            modelId: a.modelId,
            parameters: d.parameters.map(m => ({
              id: m.id,
              value: m.value
            }))
          };
        } else {
          return a;
        }
      });
      s.selectedModels = o;
    }
    return s;
  }
  autoEnableSelectedModels(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings;
    const i = t.modelOverrideDisabled ?? [];
    const r = t.modelOverrideEnabled ?? [];
    const s = this.getAvailableDefaultModels();
    for (const o of e) {
      const a = o.modelId;
      if (a === "default") {
        continue;
      }
      const l = i.includes(a);
      const m = !(s.find(p => p.name === a)?.defaultOn ?? true) && !r.includes(a);
      if (l || m) {
        if (l) {
          this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(p => p !== a));
        }
        if (!r.includes(a)) {
          this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [...(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? []), a]);
        }
      }
    }
  }
  setModelConfig(e, t) {
    if (e === "composer" && (t.modelName?.includes(",") || (t.selectedModels?.length ?? 0) > 1)) {
      this.structuredLogService.warn("composer", "Dropped global composer model config write with multi-model name", {
        subkey: "model_config_drop_composer_multi_model_write",
        modelName: t.modelName,
        selectedModelsCount: String(t.selectedModels?.length ?? 0)
      });
      return;
    }
    let i = t;
    if (e === "plan-execution" && t.maxMode !== undefined) {
      this.setModelConfig("composer", {
        maxMode: t.maxMode
      });
      const {
        maxMode: a,
        ...l
      } = t;
      i = l;
    }
    if (i.maxMode === false) {
      this.clearAllMaxModeRequiredPreferences();
    }
    const r = this.getModelConfig(e);
    const s = this.shouldAllowMultiModel(e, i, r);
    const o = this.applyInvariants(r, i, e, {
      allowMultiModel: s
    });
    if (t.modelName !== undefined) {
      if (t.modelName === "default" && r.modelName !== "default") {
        const a = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {};
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", {
          ...a,
          [e]: r.modelName
        });
      } else if (r.modelName === "default" && t.modelName !== "default") {
        const l = {
          ...(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {})
        };
        delete l[e];
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", l);
      }
    }
    if (t.selectedModels && t.selectedModels.length > 0 && !this._isMigrating) {
      this.autoEnableSelectedModels(t.selectedModels);
    }
    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", e, o);
  }
  setModelConfigForComposer(e, t, i) {
    const r = e.data.modelConfig;
    const s = this.applyInvariants(r, t, "composer", {
      allowMultiModel: true
    });
    let o;
    if (i) {
      o = i;
    } else {
      const a = e.data.unifiedMode;
      const l = (s.selectedModels?.length ?? 0) > 1 || (s.modelName?.includes(",") ?? false);
      o = a === "background" ? "background-composer" : l ? "composer-ensemble" : "composer";
    }
    if (o !== "background-composer") {
      e.setData("modelConfig", s);
    }
    this.setModelConfig(o, t);
  }
  setMaxMode(e, t) {
    if (t === "plan-execution") {
      this.setModelConfig("composer", {
        maxMode: e
      });
      return;
    }
    this.setModelConfig(t, {
      maxMode: e
    });
  }
  setSpecificModel(e, t) {
    this.setModelConfig(e, {
      modelName: t
    });
  }
  getSpecificModel(e) {
    return this.getModelConfig(e).modelName;
  }
  getPreviousNonDefaultModel(e) {
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault?.[e];
  }
  getMaxMode(e) {
    return this.getModelConfig(e).maxMode;
  }
  normalizeModelList(e) {
    if (e) {
      return e.split(",").map(t => t.trim()).filter(t => t.length > 0);
    } else {
      return [];
    }
  }
  doesModelSupportMaxMode(e) {
    const t = this.normalizeModelList(e);
    if (t.length === 0) {
      return false;
    }
    if (t.length > 1) {
      return t.every(l => this.doesModelSupportMaxMode(l));
    }
    const i = t[0];
    const r = this.getAvailableDefaultModels();
    const s = [...gEe];
    const o = r.find(l => l.name === i);
    const a = s.find(l => l.name === i);
    if (o !== undefined && o.supportsMaxMode !== undefined) {
      return o.supportsMaxMode;
    } else {
      return a?.supportsMaxMode ?? false;
    }
  }
  doesModelSupportNonMaxMode(e) {
    const t = this.normalizeModelList(e);
    if (t.length === 0) {
      return true;
    }
    if (t.length > 1) {
      return t.every(l => this.doesModelSupportNonMaxMode(l));
    }
    const i = t[0];
    if (i === "default") {
      return true;
    }
    const r = this.getAvailableDefaultModels();
    const s = [...gEe];
    const o = r.find(l => l.name === i);
    const a = s.find(l => l.name === i);
    if (o !== undefined && o.supportsNonMaxMode !== undefined) {
      return o.supportsNonMaxMode;
    } else {
      return a?.supportsNonMaxMode ?? true;
    }
  }
  getAvailableDefaultModels() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2 ?? [];
    if (e.length === 0) {
      return [...gEe];
    } else {
      return e;
    }
  }
  resolveModelNameToCatalog(e) {
    const t = this.getAvailableDefaultModels();
    if (t.length === 0) {
      return e;
    } else {
      return this.resolveToCatalogName(e, t);
    }
  }
  fixupModelConfigForCurrentFlag(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.useModelParameters;
    if (t === undefined) {
      return e;
    }
    const i = t === true;
    const r = this.getAvailableDefaultModels();
    if (r.length === 0) {
      return e;
    }
    if (!i) {
      if (!e.selectedModels || e.selectedModels.length === 0) {
        return e;
      }
      const s = e.modelName ? e.modelName.split(",").map(o => o.trim()).filter(o => o.length > 0).map(o => this.resolveToCatalogName(o, r)).join(",") : e.selectedModels.map(o => this.resolveToCatalogName(o.modelId, r)).join(",");
      this.structuredLogService.info("composer", "fixupModelConfig: clearing selectedModels (flag off)", {
        subkey: "model_config_fixup_clear_selected",
        useModelParameters: String(i),
        beforeModelName: e.modelName ?? "",
        afterModelName: s,
        clearedSelectedModelIds: e.selectedModels.map(o => o.modelId).join(",")
      });
      return {
        ...e,
        modelName: s,
        selectedModels: undefined
      };
    }
    if (e.modelName && (!e.selectedModels || e.selectedModels.length === 0)) {
      const o = e.modelName.split(",").map(a => a.trim()).filter(a => a.length > 0).map(a => ({
        modelId: this.resolveToCatalogName(a, r),
        parameters: []
      }));
      this.structuredLogService.info("composer", "fixupModelConfig: populating selectedModels from modelName (flag on)", {
        subkey: "model_config_fixup_populate_selected",
        useModelParameters: String(i),
        sourceModelName: e.modelName,
        resolvedSelectedModelIds: o.map(a => a.modelId).join(",")
      });
      return {
        ...e,
        selectedModels: o
      };
    }
    return e;
  }
  firstAvailableMaxModel() {
    return this.getAvailableDefaultModels().find(t => t.supportsMaxMode)?.name;
  }
  firstAvailableNonMaxModel() {
    return this.getAvailableDefaultModels().find(t => t.supportsNonMaxMode)?.name;
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
    const o = this.getAvailableDefaultModels();
    const a = [...gEe];
    const l = o.find(d => d.name === e);
    const u = a.find(d => d.name === e);
    if (l !== undefined && l.supportsAgent !== undefined) {
      return l.supportsAgent;
    } else {
      return u?.supportsAgent ?? true;
    }
  }
  doesModelSupportThinking(e) {
    if (e === "default") {
      return false;
    }
    const t = this.getAvailableDefaultModels();
    const i = [...gEe];
    const r = t.find(o => o.name === e);
    const s = i.find(o => o.name === e);
    if (r !== undefined && r.supportsThinking !== undefined) {
      return r.supportsThinking;
    } else {
      return s?.supportsThinking ?? false;
    }
  }
  doesModelSupportImages(e) {
    if (e === "default") {
      return true;
    }
    const t = this.getAvailableDefaultModels();
    const i = [...gEe];
    const r = t.find(o => o.name === e);
    const s = i.find(o => o.name === e);
    if (r !== undefined && r.supportsImages !== undefined) {
      return r.supportsImages;
    } else {
      return s?.supportsImages ?? true;
    }
  }
  getServerModelName(e) {
    if (e === "default") {
      return e;
    }
    const t = this.resolveModelNameToCatalog(e);
    const i = this.getAvailableDefaultModels();
    const r = [...gEe];
    const s = i.find(a => a.name === t);
    const o = r.find(a => a.name === t);
    if (s !== undefined && s.serverModelName !== undefined) {
      return s.serverModelName;
    } else {
      return o?.serverModelName ?? t;
    }
  }
  getSelectedModels(e) {
    const t = this.getModelConfig(e);
    return this.deriveSelectedModels(t);
  }
  getSelectedModelsForComposer(e) {
    const t = e.data.modelConfig;
    return this.deriveSelectedModels(t);
  }
  deriveSelectedModels(e) {
    if (e.selectedModels && e.selectedModels.length > 0) {
      return e.selectedModels;
    } else {
      return this.normalizeModelList(e.modelName).map(i => ({
        modelId: i,
        parameters: []
      }));
    }
  }
  getModelParameterPreferences(e) {
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences?.[e];
  }
  setModelParameterPreferences(e, t) {
    const i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {};
    const r = {
      modelId: e,
      parameters: t,
      updatedAt: new Date().toISOString()
    };
    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", {
      ...i,
      [e]: r
    });
  }
  clearModelParameterPreferences(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences;
    if (!t || !t[e]) {
      return;
    }
    const i = {};
    for (const r of Object.keys(t)) {
      if (r !== e) {
        i[r] = t[r];
      }
    }
    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", _fh(i));
  }
  getAllModelParameterPreferences() {
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {};
  }
  resolveModelParametersForSubmission(e, t, i) {
    if (t && t.length > 0) {
      return t;
    }
    const r = this.getAvailableDefaultModels().find(a => a.name === e);
    if (!r || !r.parameterDefinitions || r.parameterDefinitions.length === 0) {
      return [];
    }
    const s = this.getModelParameterPreferences(e)?.parameters;
    if (s && s.length > 0) {
      return s;
    } else {
      return Ahe(r, i)?.parameterValues ?? [];
    }
  }
  doesModelPreferencesRequireMaxMode(e) {
    const t = this.getModelParameterPreferences(e);
    if (!t || t.parameters.length === 0) {
      return false;
    }
    const i = this.getAvailableDefaultModels().find(o => o.name === e);
    if (!i || !i.variants || i.variants.length === 0) {
      return false;
    }
    const r = new Map(t.parameters.map(o => [o.id, o.value]));
    return i.variants.find(o => o.parameterValues.every(a => r.get(a.id) === a.value))?.isMaxMode ?? false;
  }
  cycleHotkeyParameter(e, t) {
    const i = t ? this.getSelectedModelsForComposer(t) : this.getSelectedModels(e);
    if (i.length === 0) {
      return;
    }
    const r = this.getAvailableDefaultModels();
    let s;
    const o = i.map(a => {
      const l = r.find(f => f.name === a.modelId);
      if (!l || !l.parameterDefinitions) {
        return a;
      }
      const u = l.parameterDefinitions.find(f => f.isCycleableByHotkey === true);
      if (!u) {
        return a;
      }
      const d = a.parameters?.find(f => f.id === u.id)?.value ?? "";
      const m = XTm(u, d);
      let p = m;
      if (u.parameterType?.booleanParameter) {
        p = m === "true" ? "On" : "Off";
      } else if (u.parameterType?.enumParameter) {
        p = u.parameterType.enumParameter.values.find(A => A.value === m)?.displayName ?? m;
      }
      s = {
        paramName: u.name,
        newValue: m,
        newDisplayValue: p
      };
      const g = (a.parameters ?? []).filter(f => f.id !== u.id);
      g.push({
        id: u.id,
        value: m
      });
      this.setModelParameterPreferences(a.modelId, g);
      return {
        modelId: a.modelId,
        parameters: g
      };
    });
    if (s) {
      if (t) {
        this.setModelConfigForComposer(t, {
          selectedModels: o
        });
      } else {
        this.setModelConfig(e, {
          selectedModels: o
        });
      }
      return s;
    }
  }
  clearAllMaxModeRequiredPreferences() {
    const e = this.getAllModelParameterPreferences();
    const t = [];
    for (const i of Object.keys(e)) {
      if (this.doesModelPreferencesRequireMaxMode(i)) {
        this.clearModelParameterPreferences(i);
        t.push(i);
      }
    }
    return t;
  }
};
uga = __decorate([__param(0, ku), __param(1, Kk)], uga);
Vi(ix, uga, 1);
