"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerModesService.js
// Offset: 30747353 (bundle byte offset)
// Size: 10827 bytes
Ti();
Vg();
rt();
dr();
hs();
Ei();
Er();
Wt();
ka();
Dd();
kr();
SJ();
Rb();
Wu();
jSt();
fN();
CJ();
aie();
cp();
lGg();
of();
si();
ghn();
mba();
xme();
DT = xi("composerModesService");
C0a = class extends at {
  static {
    wqe = this;
  }
  static {
    this.ACTION_ID_PREFIX = "composerMode.";
  }
  static {
    this.PROTECTED_MODE_IDS = ["agent", "chat", "edit", "background", "plan", "spec", "debug", "triage", "project"];
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
    super();
    this._reactiveStorageService = e;
    this._composerDataService = t;
    this._keybindingEditingService = i;
    this._keybindingService = r;
    this._configurationService = s;
    this._backgroundComposerDataService = o;
    this._modelConfigService = a;
    this._aiSettingsService = l;
    this._cursorAuthenticationService = u;
    this._storageService = d;
    this._experimentService = m;
    this._commandService = p;
    this._instantiationService = g;
    this._debugServerService = f;
    this._workbenchCommandRegistry = A;
    this.modeActionDisposables = new Map();
    try {
      const C = `${wqe.ACTION_ID_PREFIX}background`;
      const x = this._keybindingService.getKeybindings().filter(I => I.command === C);
      for (const I of x) {
        const B = I.resolvedKeybinding?.getUserSettingsLabel()?.toLowerCase();
        if (B === "cmd+e" || B === "ctrl+e" || B === "meta+e") {
          this._keybindingEditingService.removeKeybinding(I).catch(R => console.error("[ChangeManagement] Failed to remove legacy background mode keybinding:", R));
        }
      }
    } catch (C) {
      console.error("[ChangeManagement] Failed to ensure background mode no longer uses Cmd/Ctrl+E:", C);
    }
    this.registerExistingModeActions();
    this.maybeRegisterBackgroundModeAction();
    this._register(this._cursorAuthenticationService.onDidPotentiallyChangePrivacyMode(() => {
      try {
        this.maybeRegisterBackgroundModeAction();
      } catch (C) {
        console.error("[composerModesService] Failed to (re)register background command on privacy change:", C);
      }
    }));
    this._register(this._composerDataService.onDidChangeLastFocusedComposerId(C => {
      if (this.getComposerUnifiedMode(C) === "debug") {
        this.maybeStartDebugServer();
      }
    }));
    const w = this._composerDataService.selectedComposerId;
    if (w && this.getComposerUnifiedMode(w) === "debug") {
      this.maybeStartDebugServer();
    }
  }
  registerExistingModeActions() {
    const e = this.getAllModes();
    for (const t of e) {
      if (t.actionId) {
        this.registerModeAction(t, t.actionId);
      }
    }
  }
  maybeRegisterBackgroundModeAction() {
    const e = "background";
    const t = `${wqe.ACTION_ID_PREFIX}${e}`;
    let r = (this._reactiveStorageService.applicationUserPersistentStorage.composerState?.modes4 ?? []).find(a => a.id === e);
    const s = !!this._keybindingService.lookupKeybinding(t) || !!r?.actionId && !!this._keybindingService.lookupKeybinding(r.actionId);
    if (!!this._cursorAuthenticationService.isBackgroundComposerEnabled() || !!s) {
      r ||= {
        id: e,
        name: "Cloud",
        actionId: t,
        icon: "cloudTwo",
        enabledTools: [],
        enabledMcpServers: [],
        shouldAutoApplyIfNoEditTool: false,
        autoFix: false,
        autoRun: false,
        thinkingLevel: "none"
      };
      if (!this.modeActionDisposables.has(e) || r.actionId !== t) {
        if (r.actionId !== t) {
          this.updateModeSetStore(e, a => {
            a("actionId", t);
          });
          r = {
            ...r,
            actionId: t
          };
        }
        this.registerModeAction(r, t);
      }
    }
  }
  getComposerUnifiedMode(e) {
    let t;
    sc(() => {
      t = this._composerDataService.getComposerDataIfLoaded(e);
      t ||= this._composerDataService.allComposersData.allComposers.find(r => r.composerId === e);
    });
    const i = t?.unifiedMode ?? "agent";
    if (this.checkIfModeExists(i)) {
      return i;
    }
    if (e && this._composerDataService.loadedComposers.ids.includes(e)) {
      const r = this._composerDataService.getHandleIfLoaded(e);
      if (r) {
        this.setComposerUnifiedMode(r, "agent");
      }
    }
    return "agent";
  }
  checkIfModeExists(e) {
    return sc(() => !!this.getAllModes().some(t => t.id === e) || !!wqe.PROTECTED_MODE_IDS.includes(e));
  }
  setComposerUnifiedMode(e, t) {
    if (t === "debug" && this._modelConfigService.getSelectedModelsForComposer(e).length > 1) {
      return;
    }
    if (t === "plan") {
      const s = this._composerDataService.getComposerData(e);
      const a = (s ? s.modelConfig?.modelName : undefined)?.split(",").map(d => d.trim()) ?? [this._modelConfigService.getModelConfig("composer").modelName];
      const l = this._aiSettingsService.getAvailableModelsWithStatus({
        specificModelField: "composer"
      });
      const u = a.filter(d => {
        const m = l.find(p => p.name === d);
        if (m) {
          return dba(m);
        } else {
          return true;
        }
      });
      if (u.length === 0) {
        const d = this._reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs;
        let p = zFA(d).find(g => {
          const f = l.find(A => A.name === g);
          return f && dba(f);
        });
        p ||= l.find(f => dba(f))?.name;
        if (p) {
          this._composerDataService.updateComposerDataSetStore(e, g => {
            g("modelConfig", "modelName", p);
          });
        }
      } else if (u.length !== a.length) {
        this._composerDataService.updateComposerDataSetStore(e, d => {
          d("modelConfig", "modelName", u.join(","));
        });
      }
    }
    const i = this._composerDataService.getComposerData(e);
    if (t !== "chat" && t !== "background" && i?.worktreeStartedReadOnly === true && i?.gitWorktree === undefined && i?.pendingCreateWorktree !== true) {
      this._composerDataService.updateComposerDataSetStore(e, s => {
        s("pendingCreateWorktree", true);
        s("worktreeStartedReadOnly", false);
      });
    }
    this._composerDataService.updateComposerDataSetStore(e, s => {
      s("unifiedMode", t);
    });
    if (t === "debug") {
      this.maybeStartDebugServer();
    }
  }
  maybeStartDebugServer() {
    this._debugServerService.getConfig().catch(() => {});
  }
  getAllModes() {
    const e = this._reactiveStorageService.applicationUserPersistentStorage.composerState?.modes4 ?? [];
    const t = ["spec"];
    if (!this._experimentService.checkFeatureGate("nal_async_task_tool")) {
      t.push("triage");
    }
    t.push("project");
    const i = ["agent", "triage", "plan", "spec", "debug", "chat"];
    return sc(() => e.filter(r => wqe.PROTECTED_MODE_IDS.includes(r.id)).filter(r => !t.includes(r.id)).sort((r, s) => {
      const o = i.indexOf(r.id);
      const a = i.indexOf(s.id);
      const l = o === -1 ? e.indexOf(r) : o;
      const u = a === -1 ? e.indexOf(s) : a;
      return l - u;
    }));
  }
  getMode(e) {
    const t = this.getAllModes();
    let i = sc(() => t.find(r => r.id === e));
    if (!i && wqe.PROTECTED_MODE_IDS.includes(e)) {
      const r = this._reactiveStorageService.applicationUserPersistentStorage.composerState?.modes4 ?? [];
      i = sc(() => r.find(s => s.id === e));
    }
    if (!i) {
      console.error(`[composerModesService] Mode not found: ${e}`);
    }
    return i;
  }
  updateModeSetStore(e, t) {
    t((...i) => {
      this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "modes4", r => r.id === e, ...i);
    });
  }
  getModeThinkingLevel(e) {
    return this.getAllModes().find(r => r.id === e)?.thinkingLevel ?? "none";
  }
  setModeThinkingLevel(e, t) {
    this.updateModeSetStore(e, i => {
      i("thinkingLevel", t);
    });
  }
  getModeAutoRun(e) {
    if (wU().isDisabledByAdmin) {
      return false;
    } else {
      return this.getAllModes().find(s => s.id === e)?.autoRun ?? false;
    }
  }
  setModeAutoRun(e, t) {
    this.updateModeSetStore(e, i => {
      i("autoRun", t);
    });
  }
  getModeFullAutoRun(e) {
    if (wU().isDisabledByAdmin) {
      return false;
    } else {
      return this.getAllModes().find(s => s.id === e)?.fullAutoRun ?? false;
    }
  }
  setModeFullAutoRun(e, t) {
    this.updateModeSetStore(e, i => {
      i("fullAutoRun", t);
    });
    if (t) {
      this._autoApproveAllComposersInMode(e);
    }
  }
  getComposerAutoRun() {
    return this.getModeAutoRun("agent") ?? false;
  }
  setComposerAutoRun(e) {
    this.setModeAutoRun("agent", e);
    if (!e) {
      this.setModeFullAutoRun("agent", false);
    }
  }
  getComposerFullAutoRun() {
    return this.getModeFullAutoRun("agent") ?? false;
  }
  setComposerFullAutoRun(e) {
    this.setModeFullAutoRun("agent", e);
  }
  async _autoApprovePendingTerminalReviews(e) {
    const t = this._composerDataService.getHandleIfLoaded(e);
    const i = t ? this._composerDataService.getToolFormer(t) : undefined;
    if (!i) {
      return;
    }
    const {
      IToolCallHumanReviewService: r
    } = await Promise.resolve().then(() => {
      qJ();
      return Ukf;
    });
    const s = this._instantiationService.invokeFunction(a => a.get(r));
    const o = sc(() => i.pendingDecisions().userInteractionBubbleIds);
    for (const a of o) {
      const l = sc(() => i.getBubbleData(a));
      if (!l || l.tool !== an.RUN_TERMINAL_COMMAND_V2 || l?.additionalData?.reviewData?.status !== "Requested") {
        continue;
      }
      const d = this._composerDataService.getHandleIfLoaded(e);
      if (!d) {
        continue;
      }
      const m = s.getTerminalReviewModelForBubble(d, a);
      if (m) {
        m.updateReviewData({
          approvalType: phn.FULL_AUTO
        });
        m.setSelectedOption(dD.RUN);
      }
    }
  }
  _autoApproveAllComposersInMode(e) {
    const t = this._composerDataService.loadedComposers.store.ids;
    for (const i of t) {
      if (this.getComposerUnifiedMode(i) === e) {
        this._autoApprovePendingTerminalReviews(i);
      }
    }
  }
  getModeShouldAutoApplyIfNoEditTool(e) {
    return this.getAllModes().find(r => r.id === e)?.shouldAutoApplyIfNoEditTool ?? false;
  }
  async saveModeKeybinding(e, t) {
    const i = this.getMode(e);
    if (!i) {
      console.error(`[composerModesService] Cannot save keybinding for non-existent mode: ${e}`);
      return;
    }
    const s = this.getAllModes().find(o => {
      if (o.id === e) {
        return false;
      }
      if (o.actionId) {
        const a = this._keybindingService.lookupKeybinding(o.actionId);
        if (a) {
          return a.getUserSettingsLabel() === t;
        }
      }
      return false;
    });
    if (s) {
      throw new Error(`[composerModesService] Keybinding "${t}" already used by mode "${s.name}" (${s.id})`);
    }
    try {
      let o = i.actionId;
      if (!o) {
        o = this.generateActionIdForMode(i);
        this.updateModeSetStore(e, l => {
          l("actionId", o);
        });
      }
      if (this._keybindingService.lookupKeybinding(o)) {
        const l = this._keybindingService.getKeybindings().find(u => u.command === o);
        if (l) {
          await this._keybindingEditingService.editKeybinding(l, t, undefined);
        } else {
          await this._keybindingEditingService.addKeybindingRule(o, t);
        }
      } else {
        await this._keybindingEditingService.addKeybindingRule(o, t);
      }
      this.deregisterModeAction(e);
      this.registerModeAction(i, o);
    } catch (o) {
      throw new Error(`[composerModesService] Failed to save keybinding for mode ${e}:`, o);
    }
  }
  deregisterModeAction(e) {
    const t = this.modeActionDisposables.get(e);
    if (t) {
      t.dispose();
      this.modeActionDisposables.delete(e);
    }
  }
  registerModeAction(e, t) {
    try {
      this.deregisterModeAction(e.id);
      const i = this;
      const r = this._workbenchCommandRegistry.registerAction2(class extends rn {
        constructor() {
          super({
            id: t,
            title: {
              value: `Open Chat in ${e.name} Mode`,
              original: `Open Chat in ${e.name} Mode`
            },
            precondition: e.id === "background" ? iz.INSTANCE : undefined,
            f1: true
          });
        }
        run(o) {
          return o.get(fr).executeCommand(get, e.id);
        }
      });
      this.modeActionDisposables.set(e.id, r);
    } catch (i) {
      throw new Error(`[composerModesService] Failed to register action for mode ${e.id}:`, i);
    }
  }
  generateActionIdForMode(e) {
    if (!e.name) {
      return `${wqe.ACTION_ID_PREFIX}${e.id}`;
    }
    let t = e.name.toLowerCase().replace(/\s+/g, "_");
    let i = `${wqe.ACTION_ID_PREFIX}${t}`;
    const s = this.getAllModes().filter(a => a.id !== e.id && a.actionId).map(a => a.actionId);
    if (!s.includes(i)) {
      return i;
    }
    let o = 2;
    while (s.includes(`${i}_${o}`)) {
      o++;
    }
    return `${i}_${o}`;
  }
  getModeActionId(e) {
    return this.getMode(e)?.actionId;
  }
  dispose() {
    for (const e of this.modeActionDisposables.values()) {
      e.dispose();
    }
    this.modeActionDisposables.clear();
    super.dispose();
  }
  getModeDescription(e) {
    switch (e) {
      case "agent":
        return "Plan, search, build anything";
      case "chat":
        return "Ask Cursor questions about your codebase";
      case "edit":
        return "Manually decide what gets added to the context (no tools)";
      case "plan":
        return "Create detailed plans for accomplishing tasks";
      case "spec":
        return "Create structured plans with implementation steps";
      case "triage":
        return "Coordinate long-horizon tasks with delegated subagents";
      default:
        return this.getMode(e)?.description;
    }
  }
};
C0a = wqe = __decorate([__param(0, ku), __param(1, Oa), __param(2, dnt), __param(3, mo), __param(4, Fn), __param(5, Yk), __param(6, ix), __param(7, vU), __param(8, wg), __param(9, Hi), __param(10, Tl), __param(11, fr), __param(12, ln), __param(13, Tmn), __param(14, cie)], C0a);
Vi(DT, C0a, 1);
