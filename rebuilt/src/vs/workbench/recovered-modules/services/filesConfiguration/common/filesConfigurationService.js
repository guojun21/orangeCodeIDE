"use strict";

// Module: out-build/vs/workbench/services/filesConfiguration/common/filesConfigurationService.js
// Offset: 28022750 (bundle byte offset)
// Size: 8720 bytes
Ht();
Wt();
Er();
yn();
rt();
si();
Ei();
ns();
np();
_r();
ps();
$ba();
vr();
_d();
qg();
cu();
xT();
Nu();
ay();
sw();
IAi = new Sn("autoSaveAfterShortDelayContext", false, true);
(function (n) {
  n[n.OFF = 0] = "OFF";
  n[n.AFTER_SHORT_DELAY = 1] = "AFTER_SHORT_DELAY";
  n[n.AFTER_LONG_DELAY = 2] = "AFTER_LONG_DELAY";
  n[n.ON_FOCUS_CHANGE = 3] = "ON_FOCUS_CHANGE";
  n[n.ON_WINDOW_CHANGE = 4] = "ON_WINDOW_CHANGE";
})(iYg ||= {});
(function (n) {
  n[n.SETTINGS = 1] = "SETTINGS";
  n[n.OUT_OF_WORKSPACE = 2] = "OUT_OF_WORKSPACE";
  n[n.ERRORS = 3] = "ERRORS";
  n[n.DISABLED = 4] = "DISABLED";
})(rYg ||= {});
IC = xi("filesConfigurationService");
qba = class extends at {
  static {
    kEe = this;
  }
  static {
    this.DEFAULT_AUTO_SAVE_MODE = Eu ? g3.AFTER_DELAY : g3.OFF;
  }
  static {
    this.DEFAULT_AUTO_SAVE_DELAY = 1000;
  }
  static {
    this.READONLY_MESSAGES = {
      providerReadonly: {
        value: _(14273, null),
        isTrusted: true
      },
      sessionReadonly: {
        value: _(14274, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: true
      },
      configuredReadonly: {
        value: _(14275, null, `workbench.action.openSettings?${encodeURIComponent("[\"files.readonly\"]")}`, "workbench.action.files.toggleActiveEditorReadonlyInSession"),
        isTrusted: true
      },
      fileLocked: {
        value: _(14276, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: true
      },
      fileReadonly: {
        value: _(14277, null),
        isTrusted: true
      }
    };
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.configurationService = t;
    this.contextService = i;
    this.environmentService = r;
    this.uriIdentityService = s;
    this.fileService = o;
    this.markerService = a;
    this.textResourceConfigurationService = l;
    this._onDidChangeAutoSaveConfiguration = this._register(new Qe());
    this.onDidChangeAutoSaveConfiguration = this._onDidChangeAutoSaveConfiguration.event;
    this._onDidChangeAutoSaveDisabled = this._register(new Qe());
    this.onDidChangeAutoSaveDisabled = this._onDidChangeAutoSaveDisabled.event;
    this._onDidChangeFilesAssociation = this._register(new Qe());
    this.onDidChangeFilesAssociation = this._onDidChangeFilesAssociation.event;
    this._onDidChangeReadonly = this._register(new Qe());
    this.onDidChangeReadonly = this._onDidChangeReadonly.event;
    this.autoSaveConfigurationCache = new Fb(1000);
    this.autoSaveAfterShortDelayOverrides = new fu();
    this.autoSaveDisabledOverrides = new fu();
    this.readonlyIncludeMatcher = this._register(new gFn(() => this.createReadonlyMatcher(K1c)));
    this.readonlyExcludeMatcher = this._register(new gFn(() => this.createReadonlyMatcher(Y1c)));
    this.sessionReadonlyOverrides = new fu(d => this.uriIdentityService.extUri.getComparisonKey(d));
    this.autoSaveAfterShortDelayContext = IAi.bindTo(e);
    const u = t.getValue();
    this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(undefined, u.files);
    this.currentFilesAssociationConfiguration = u?.files?.associations;
    this.currentHotExitConfiguration = u?.files?.hotExit || FH.ON_EXIT;
    this.onFilesConfigurationChange(u, false);
    this.registerListeners();
  }
  createReadonlyMatcher(e) {
    const t = this._register(new ikt(i => this.configurationService.getValue(e, {
      resource: i
    }), i => i.affectsConfiguration(e), this.contextService, this.configurationService));
    this._register(t.onExpressionChange(() => this._onDidChangeReadonly.fire()));
    return t;
  }
  isReadonly(e, t) {
    const i = this.fileService.getProvider(e.scheme);
    if (i && YsA(i)) {
      return i.readOnlyMessage ?? kEe.READONLY_MESSAGES.providerReadonly;
    }
    const r = this.sessionReadonlyOverrides.get(e);
    if (typeof r == "boolean") {
      if (r === true) {
        return kEe.READONLY_MESSAGES.sessionReadonly;
      } else {
        return false;
      }
    } else if (this.uriIdentityService.extUri.isEqualOrParent(e, this.environmentService.userRoamingDataHome) || this.uriIdentityService.extUri.isEqual(e, this.contextService.getWorkspace().configuration ?? undefined)) {
      return false;
    } else if (this.readonlyIncludeMatcher.value.matches(e)) {
      if (this.readonlyExcludeMatcher.value.matches(e)) {
        return false;
      } else {
        return kEe.READONLY_MESSAGES.configuredReadonly;
      }
    } else if (this.configuredReadonlyFromPermissions && t?.locked) {
      return kEe.READONLY_MESSAGES.fileLocked;
    } else if (t?.readonly) {
      return kEe.READONLY_MESSAGES.fileReadonly;
    } else {
      return false;
    }
  }
  async updateReadonly(e, t) {
    if (t === "toggle") {
      let i;
      try {
        i = await this.fileService.resolve(e, {
          resolveMetadata: true
        });
      } catch {}
      t = !this.isReadonly(e, i);
    }
    if (t === "reset") {
      this.sessionReadonlyOverrides.delete(e);
    } else {
      this.sessionReadonlyOverrides.set(e, t);
    }
    this._onDidChangeReadonly.fire();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration("files")) {
        this.onFilesConfigurationChange(this.configurationService.getValue(), true);
      }
    }));
  }
  onFilesConfigurationChange(e, t) {
    this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(undefined, e.files);
    this.autoSaveConfigurationCache.clear();
    this.autoSaveAfterShortDelayContext.set(this.getAutoSaveMode(undefined).mode === 1);
    if (t) {
      this._onDidChangeAutoSaveConfiguration.fire();
    }
    const i = e?.files?.associations;
    if (!fv(this.currentFilesAssociationConfiguration, i)) {
      this.currentFilesAssociationConfiguration = i;
      if (t) {
        this._onDidChangeFilesAssociation.fire();
      }
    }
    const r = e?.files?.hotExit;
    if (r === FH.OFF || r === FH.ON_EXIT_AND_WINDOW_CLOSE) {
      this.currentHotExitConfiguration = r;
    } else {
      this.currentHotExitConfiguration = FH.ON_EXIT;
    }
    const s = !!e?.files?.readonlyFromPermissions;
    if (s !== !!this.configuredReadonlyFromPermissions) {
      this.configuredReadonlyFromPermissions = s;
      if (t) {
        this._onDidChangeReadonly.fire();
      }
    }
  }
  getAutoSaveConfiguration(e) {
    const t = this.toResource(e);
    if (t) {
      let i = this.autoSaveConfigurationCache.get(t);
      if (!i) {
        i = this.computeAutoSaveConfiguration(t, this.textResourceConfigurationService.getValue(t, "files"));
        this.autoSaveConfigurationCache.set(t, i);
      }
      return i;
    }
    return this.currentGlobalAutoSaveConfiguration;
  }
  computeAutoSaveConfiguration(e, t) {
    let i;
    let r;
    let s;
    let o;
    let a;
    let l;
    switch (t?.autoSave ?? kEe.DEFAULT_AUTO_SAVE_MODE) {
      case g3.AFTER_DELAY:
        {
          i = "afterDelay";
          r = typeof t?.autoSaveDelay == "number" && t.autoSaveDelay >= 0 ? t.autoSaveDelay : kEe.DEFAULT_AUTO_SAVE_DELAY;
          l = r <= kEe.DEFAULT_AUTO_SAVE_DELAY;
          break;
        }
      case g3.ON_FOCUS_CHANGE:
        i = "onFocusChange";
        break;
      case g3.ON_WINDOW_CHANGE:
        i = "onWindowChange";
        break;
    }
    if (t?.autoSaveWorkspaceFilesOnly === true) {
      s = true;
      if (e && !this.contextService.isInsideWorkspace(e)) {
        a = true;
        l = undefined;
      }
    }
    if (t?.autoSaveWhenNoErrors === true) {
      o = true;
      l = undefined;
    }
    return {
      autoSave: i,
      autoSaveDelay: r,
      autoSaveWorkspaceFilesOnly: s,
      autoSaveWhenNoErrors: o,
      isOutOfWorkspace: a,
      isShortAutoSaveDelay: l
    };
  }
  toResource(e) {
    if (e instanceof XS) {
      return gp.getOriginalUri(e, {
        supportSideBySide: op.PRIMARY
      });
    } else {
      return e;
    }
  }
  hasShortAutoSaveDelay(e) {
    const t = this.toResource(e);
    if (t && this.autoSaveAfterShortDelayOverrides.has(t)) {
      return true;
    } else if (this.getAutoSaveConfiguration(t).isShortAutoSaveDelay) {
      return !t || !this.autoSaveDisabledOverrides.has(t);
    } else {
      return false;
    }
  }
  getAutoSaveMode(e, t) {
    const i = this.toResource(e);
    if (i && this.autoSaveAfterShortDelayOverrides.has(i)) {
      return {
        mode: 1
      };
    }
    if (i && this.autoSaveDisabledOverrides.has(i)) {
      return {
        mode: 0,
        reason: 4
      };
    }
    const r = this.getAutoSaveConfiguration(i);
    if (typeof r.autoSave === "undefined") {
      return {
        mode: 0,
        reason: 1
      };
    }
    if (typeof t == "number" && (r.autoSave === "afterDelay" && t !== 2 || r.autoSave === "onFocusChange" && t !== 3 && t !== 4 || r.autoSave === "onWindowChange" && t !== 4)) {
      return {
        mode: 0,
        reason: 1
      };
    }
    if (i) {
      if (r.autoSaveWorkspaceFilesOnly && r.isOutOfWorkspace) {
        return {
          mode: 0,
          reason: 2
        };
      }
      if (r.autoSaveWhenNoErrors && this.markerService.read({
        resource: i,
        take: 1,
        severities: Gl.Error
      }).length > 0) {
        return {
          mode: 0,
          reason: 3
        };
      }
    }
    switch (r.autoSave) {
      case "afterDelay":
        if (typeof r.autoSaveDelay == "number" && r.autoSaveDelay <= kEe.DEFAULT_AUTO_SAVE_DELAY) {
          return {
            mode: r.autoSaveWhenNoErrors ? 2 : 1
          };
        } else {
          return {
            mode: 2
          };
        }
      case "onFocusChange":
        return {
          mode: 3
        };
      case "onWindowChange":
        return {
          mode: 4
        };
    }
  }
  async toggleAutoSave() {
    const e = this.configurationService.getValue("files.autoSave");
    let t;
    if ([g3.AFTER_DELAY, g3.ON_FOCUS_CHANGE, g3.ON_WINDOW_CHANGE].some(i => i === e)) {
      t = g3.OFF;
    } else {
      t = g3.AFTER_DELAY;
    }
    return this.configurationService.updateValue("files.autoSave", t);
  }
  enableAutoSaveAfterShortDelay(e) {
    const t = this.toResource(e);
    if (!t) {
      return at.None;
    }
    const i = this.autoSaveAfterShortDelayOverrides.get(t) ?? 0;
    this.autoSaveAfterShortDelayOverrides.set(t, i + 1);
    return $i(() => {
      const r = this.autoSaveAfterShortDelayOverrides.get(t) ?? 0;
      if (r <= 1) {
        this.autoSaveAfterShortDelayOverrides.delete(t);
      } else {
        this.autoSaveAfterShortDelayOverrides.set(t, r - 1);
      }
    });
  }
  disableAutoSave(e) {
    const t = this.toResource(e);
    if (!t) {
      return at.None;
    }
    const i = this.autoSaveDisabledOverrides.get(t) ?? 0;
    this.autoSaveDisabledOverrides.set(t, i + 1);
    if (i === 0) {
      this._onDidChangeAutoSaveDisabled.fire(t);
    }
    return $i(() => {
      const r = this.autoSaveDisabledOverrides.get(t) ?? 0;
      if (r <= 1) {
        this.autoSaveDisabledOverrides.delete(t);
        this._onDidChangeAutoSaveDisabled.fire(t);
      } else {
        this.autoSaveDisabledOverrides.set(t, r - 1);
      }
    });
  }
  get isHotExitEnabled() {
    if (this.contextService.getWorkspace().transient) {
      return false;
    } else {
      return this.currentHotExitConfiguration !== FH.OFF;
    }
  }
  get hotExitConfiguration() {
    return this.currentHotExitConfiguration;
  }
  preventSaveConflicts(e, t) {
    return this.configurationService.getValue("files.saveConflictResolution", {
      resource: e,
      overrideIdentifier: t
    }) !== "overwriteFileOnDisk";
  }
};
qba = kEe = __decorate([__param(0, wi), __param(1, Fn), __param(2, Lr), __param(3, lg), __param(4, xl), __param(5, Gr), __param(6, bk), __param(7, uy)], qba);
Vi(IC, qba, 0);
