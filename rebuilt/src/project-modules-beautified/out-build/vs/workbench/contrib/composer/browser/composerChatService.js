"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerChatService.js
// Offset: 30446467 (bundle byte offset)
// Size: 92758 bytes
$Ai();
rkt();
sC();
zk();
Ti();
gT();
mD();
ytu();
ZS();
rva();
cv();
Uv();
Vg();
qp();
vr();
Ql();
_s();
yn();
Cye();
rt();
zr();
_r();
Js();
Yn();
Bc();
sie();
F$e();
_M();
hs();
Ei();
si();
dQ();
Er();
Wt();
jr();
So();
Rl();
Dd();
rf();
zAe();
akt();
kr();
vE();
VA();
M4();
Cde();
ps();
Bme();
Lyi();
Jnt();
wm();
Q8A();
wlu();
yif();
Fhu();
ICf();
DCf();
Iwi();
imu();
Hba();
Ud();
Vw();
oB();
Pfa();
Cie();
mba();
sB();
Iie();
fE();
Fme();
$me();
SJ();
Rb();
Hnt();
Nce();
omu();
jq();
uO();
eu();
Wu();
fqe();
_u();
Pwi();
mR();
_g();
Wf();
wE();
MEe();
Q9();
gE();
S9();
Nwi();
Uye();
RNe();
gSf();
CJ();
Mwi();
pye();
UNe();
hD();
m8();
Pf();
tit();
Hhn();
bSf();
LNe();
hty();
Uwi();
k$e();
bqe();
yhn();
pQ();
TV();
lie();
jk();
cp();
Zk();
uce();
nvi();
wSt();
vN();
ign();
gye();
kQ();
oP();
gty();
of();
fty();
UF();
d0a();
k$e();
Jwi = [];
(function (n) {
  n.RUNNING = "running";
  n.ABORTING = "aborting";
})(vqe ||= {});
vMe = class extends at {
  get composerContextService() {
    this._composerContextService ||= this._instantiationService.invokeFunction(e => e.get(hV));
    return this._composerContextService;
  }
  _shouldTrackSessionRecording() {
    const {
      isInternalUser: e,
      replaysSessionSampleRate: t
    } = kx();
    return e && t > 0;
  }
  _getSentryReplayId() {
    return sm()?.getIntegrationByName?.("Replay")?.getReplayId?.();
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H, W, z, Y, j, X, ee, re, ne, pe, le, he, be, fe, ke, Se, Fe, De, Pe, Ne, Oe, Ge, Le, We, tt, it, bt, Nt, ft, _t, It, sn, Vt, Ft, Xt, bn, St, Bt, Jt, Ot, cn, Mt, Pt, ut, ot, Lt, Gt, jt, hn) {
    super();
    this._composerDataService = e;
    this._composerUtilsService = t;
    this._composerViewsService = i;
    this._appLayoutService = r;
    this._composerEventService = s;
    this._composerCheckpointService = o;
    this._composerCheckpointStorageService = a;
    this._reactiveStorageService = l;
    this._storageService = u;
    this._productService = d;
    this._commandService = m;
    this._aiErrorService = p;
    this._selectedContextService = g;
    this._cursorAuthenticationService = f;
    this._repositoryService = A;
    this._cursorCredsService = w;
    this._mcpService = C;
    this._instantiationService = x;
    this._workspaceContextService = I;
    this._workspaceEditingService = B;
    this._aiServerConfigService = R;
    this._everythingProviderService = N;
    this._pathService = M;
    this._composerModesService = O;
    this._aiSettingsService = $;
    this._uiOverlayService = H;
    this._cursorRulesService = W;
    this._cursorCommandsService = z;
    this._cursorIgnoreService = Y;
    this._terminalExecutionService = j;
    this._terminalService = X;
    this._notificationService = ee;
    this._metricsService = re;
    this._experimentService = ne;
    this._composerMessageRequestContextStorageService = pe;
    this._analyticsService = le;
    this._configurationService = he;
    this._knowledgeBaseService = be;
    this._composerFileService = fe;
    this._gitContextService = ke;
    this._remoteAgentService = Se;
    this._composerCodeBlockService = Fe;
    this._inlineDiffService = De;
    this._aiFileInfoService = Pe;
    this._aiService = Ne;
    this._debugServerService = Oe;
    this._composerStorageService = Ge;
    this._hostService = Le;
    this._cursorHooksService = We;
    this._aiConnectRequestService = tt;
    this._secretStorageService = it;
    this._searchService = bt;
    this._composerAgentService = Nt;
    this._backgroundComposerDataService = ft;
    this._backgroundComposerEventService = _t;
    this._workbenchEnvironmentService = It;
    this._logService = sn;
    this._structuredLogService = Vt;
    this._outputService = Ft;
    this._worktreeManagerService = Xt;
    this._extensionService = bn;
    this._cloudAgentStorageService = St;
    this._agentPrewarmService = Bt;
    this._usageLimitPolicyStatusService = Jt;
    this._composerMessageStorageService = Ot;
    this._asyncOperationRegistry = cn;
    this._contextKeyService = Mt;
    this._agentProviderService = Pt;
    this._diffChangeSourceRegistry = ut;
    this._diffDecorationVisibilityService = ot;
    this._agentRepositoryService = Lt;
    this._glassActiveAgentService = Gt;
    this._powerMainService = jt;
    this._composerEffectiveAllowlistService = hn;
    this._speculativeSummarizationInFlight = new Map();
    this._recentlyResumedComposerIds = new Set();
    this._activeUserTurnTrackers = new Map();
    this._reviveAbortControllers = new Map();
    this._backgroundAgentAttachmentLoops = new Map();
    this._backgroundAgentAttachmentStartLocks = new Map();
    this._skipHandleAbortChat = new Set();
    this._onDidDisplayDiffs = this._register(new Qe());
    this.onDidDisplayDiffs = this._onDidDisplayDiffs.event;
    this._composerAgentProviderRouter = new LSf(this._agentProviderService, this._instantiationService, this._workspaceContextService, this._reactiveStorageService, this._composerModesService, this._composerEventService, this._composerEffectiveAllowlistService);
    this.allowModelFallbacks = this._register(hm(this._storageService, "allowModelFallbacks"));
    this.numberOfTimesShownFallbackModelWarning = this._register(hm(this._storageService, "numberOfTimesShownFallbackModelWarning"));
    this.sandboxingSupportEnabled = this._register(hm(this._storageService, "sandboxSupported"));
    this.worktreeSetupWarningShownCount = this._register(hm(this._storageService, "worktreeSetupWarningShownCount"));
    this.hideWorktreeSetupWarning = this._register(hm(this._storageService, "hideWorktreeSetupWarning"));
    if (this._workbenchEnvironmentService.enableSmokeTestDriver) {
      this._mockComposerStreamController = new qSf(this._logService);
    } else {
      this._mockComposerStreamController = undefined;
    }
    this._abortControllerFactory = new fif(this._structuredLogService);
    this._chatClient = this._instantiationService.createInstance(YS, {
      service: qAi
    });
    this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => ZC(this._composerDataService.allComposersData.selectedComposerIds)],
      onChange: ({
        deps: [on],
        prevDeps: [en] = [[]]
      }) => {
        for (const gt of en) {
          if (!on.includes(gt)) {
            const At = this._backgroundAgentAttachmentLoops.get(gt);
            if (At) {
              At.state = vqe.ABORTING;
              At.abortController.abort("Composer closed - aborting background agent attachment");
            }
            const Tt = this._reviveAbortControllers.get(gt);
            if (Tt) {
              Tt.abort("Composer closed - aborting stream revival");
              this._reviveAbortControllers.delete(gt);
            }
          }
        }
        for (const gt of on) {
          if (!en.includes(gt)) {
            const At = this._composerDataService.getComposerDataIfLoaded(gt);
            if (At && gmu(At)) {
              const Tt = At.createdFromBackgroundAgent.bcId;
              this._structuredLogService.info("background_composer", "Re-attaching to background agent stream after re-selection", {
                bcId: Tt,
                composerId: gt
              });
              this.startBackgroundAgentAttachment({
                bcId: Tt,
                composerId: gt,
                shouldSetRunningStatus: fmu(At.createdAt)
              });
            }
          }
        }
      },
      runNowToo: true
    }));
    this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => ZC(this._composerDataService.loadedComposers.ids)],
      onChange: ({
        deps: [on],
        prevDeps: [en] = [[]]
      }) => {
        const gt = on.filter(At => !en.includes(At));
        for (const At of gt) {
          const Tt = sc(() => this._composerDataService.loadedComposers.byId[At]);
          if (Tt && gmu(Tt)) {
            const ze = Tt.createdFromBackgroundAgent.bcId;
            this._structuredLogService.info("background_composer", "Attaching to background agent stream", {
              composerId: At,
              bcId: ze
            });
            this.startBackgroundAgentAttachment({
              bcId: ze,
              composerId: At,
              shouldSetRunningStatus: fmu(Tt.createdAt)
            });
          }
        }
      },
      runNowToo: true
    }));
    this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => ZC(this._composerDataService.loadedComposers.ids)],
      onChange: ({
        deps: [on],
        prevDeps: [en] = [[]]
      }) => {
        for (const gt of on) {
          if (!en.includes(gt)) {
            const At = this._composerDataService.getHandleIfLoaded(gt);
            if (At && At.data.agentBackend !== "cursor-agent") {
              this._composerAgentProviderRouter.createAgentHandle(gt, At);
            }
          }
        }
        for (const gt of en) {
          if (!on.includes(gt)) {
            this._composerAgentProviderRouter.removeAgentHandle(gt);
          }
        }
      },
      runNowToo: true
    }));
    this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => {
        const on = [];
        const en = ZC(this._composerDataService.allComposersData.selectedComposerIds);
        for (const gt of en) {
          const At = this._composerDataService.getComposerDataIfLoaded(gt);
          if (At?.isBestOfNParent && At.subComposerIds && At.subComposerIds.length > 0) {
            on.push({
              parentId: gt,
              selectedSubComposerId: At.selectedSubComposerId
            });
          }
        }
        return on;
      }],
      onChange: ({
        deps: [on],
        prevDeps: [en] = [[]]
      }) => {
        for (const {
          parentId: gt,
          selectedSubComposerId: At
        } of on) {
          if (!At || en.find(Yt => Yt.parentId === gt)?.selectedSubComposerId === At) {
            continue;
          }
          const ze = this._composerDataService.getComposerDataIfLoaded(At);
          if (ze && gmu(ze)) {
            const Yt = ze.createdFromBackgroundAgent.bcId;
            this._structuredLogService.info("background_composer", "Attaching to subcomposer after tab selection", {
              composerId: At,
              parentId: gt,
              bcId: Yt
            });
            this.startBackgroundAgentAttachment({
              bcId: Yt,
              composerId: At,
              shouldSetRunningStatus: fmu(ze.createdAt)
            });
          }
        }
      },
      runNowToo: true
    }));
    this._register(this._extensionService.onDidChangeResponsiveChange(on => {
      const en = Vq(on.extensionHostKind);
      if (on.isResponsive) {
        this._structuredLogService.info("composer", "Extension host became responsive", {
          extensionHostKind: en,
          timestamp: Date.now()
        });
      } else {
        const gt = this._composerDataService.allComposersData.selectedComposerIds.length;
        (async () => {
          try {
            const Tt = (await this._extensionService.getExtensionHostsInfo(on.extensionHostKind, false)).map(ze => ({
              extHostPid: ze.extHostPid,
              isRemote: ze.isRemote,
              extensions: ze.extensions.map(Yt => Yt.id)
            }));
            this._structuredLogService.error("composer", "Extension host became UNRESPONSIVE", undefined, {
              extensionHostKind: en,
              timestamp: Date.now(),
              activeComposersCount: gt,
              extensionHosts: Tt
            });
          } catch (At) {
            this._structuredLogService.error("composer", "Extension host became UNRESPONSIVE (extension list unavailable)", At instanceof Error ? At : undefined, {
              extensionHostKind: en,
              timestamp: Date.now(),
              activeComposersCount: gt
            });
          }
        })();
      }
    }));
    this._installComposerStateBreadcrumbs();
    this._setupPrewarmReactiveEffect();
  }
  _installComposerStateBreadcrumbs() {
    this._register(new woe()).cancelAndSet(() => {
      sc(() => {
        const t = this._composerDataService.loadedComposers;
        const i = t.ids;
        const r = this._composerDataService.selectedComposerIds;
        let s = 0;
        let o = 0;
        let a = 0;
        for (const d of i) {
          const m = t.byId[d];
          if (m?.subagentInfo?.parentComposerId) {
            o++;
          }
          if (m?.status === "generating") {
            s++;
            if (m.subagentInfo?.parentComposerId) {
              a++;
            }
          }
        }
        let l = 0;
        let u = 0;
        for (const d of this._terminalService.instances) {
          l++;
          if (d.shellLaunchConfig.isFeatureTerminal || d.reconnectionProperties?.data?.agentOwned === true) {
            u++;
          }
        }
        P5e({
          category: "composers",
          level: "info",
          message: "composerState",
          data: {
            selectedCount: r.length,
            loadedCount: i.length,
            subagentCount: o,
            generatingCount: s,
            generatingSubagentCount: a,
            totalTerminals: l,
            agentTerminals: u
          }
        });
      });
    }, 30000);
  }
  _shouldBlockDueToMissingGit() {
    const e = this._reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos;
    const t = e && e.length > 0;
    const r = this._contextKeyService.getContextKeyValue("git.missing") === true;
    const o = this._configurationService.getValue("git.enabled") === false;
    if (t) {
      return r || o;
    } else {
      return false;
    }
  }
  _autoAcceptPendingDiffs(e, t) {
    const i = this._composerDataService.getLoadedSubComposerHandles(e);
    const r = [e, ...i];
    const s = new Set();
    for (const o of r) {
      const a = this._composerCodeBlockService.getAllPendingDiffDescriptors(o);
      for (const l of a) {
        if (!s.has(l.id)) {
          s.add(l.id);
          this._diffChangeSourceRegistry.accept(l.id, {
            sourceContext: "composer"
          });
        }
      }
    }
    if (s.size > 0) {
      this._structuredLogService.info("composer", "Auto-accepted pending diffs on follow-up", {
        composerId: t,
        diffCount: s.size
      });
    }
  }
  _setupPrewarmReactiveEffect() {
    if (this._experimentService.checkFeatureGate("agent_prewarm")) {
      this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps: [() => this._composerDataService.selectedComposerId, () => this._reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig, () => {
          const e = this._composerDataService.selectedComposerId;
          if (e) {
            return this._composerModesService.getComposerUnifiedMode(e);
          }
        }, () => {
          const e = this._composerDataService.selectedComposerId;
          if (!e) {
            return;
          }
          const t = this._composerDataService.loadedComposers.byId[e];
          if (t && (t.isBestOfNParent || t.isBestOfNSubcomposer)) {
            return this._composerUtilsService.getBestOfNGroupId(e);
          }
        }, () => {
          const e = this._composerDataService.selectedComposerId;
          if (!e) {
            return false;
          }
          const t = this._composerDataService.loadedComposers.byId[e];
          return !!t?.text && !!(t.text.trim().length > 0);
        }, () => {
          const e = this._composerDataService.selectedComposerId;
          if (e) {
            return this._composerDataService.loadedComposers.byId[e]?.editingBubbleId;
          } else {
            return undefined;
          }
        }],
        onChange: ({
          deps: [e,,,, t]
        }) => {
          if (!e) {
            return;
          }
          const i = this._composerDataService.getComposerDataIfLoaded(e);
          if (i && i.isNAL && t) {
            this.triggerPrewarmForComposer(e);
          }
        }
      }));
    }
  }
  async _acquireBackgroundAgentAttachmentStartLock(e) {
    const t = this._backgroundAgentAttachmentStartLocks.get(e) ?? Promise.resolve();
    let i;
    const r = t.then(() => new Promise(s => {
      i = s;
    }));
    this._backgroundAgentAttachmentStartLocks.set(e, r);
    await t;
    return () => {
      i();
      if (this._backgroundAgentAttachmentStartLocks.get(e) === r) {
        this._backgroundAgentAttachmentStartLocks.delete(e);
      }
    };
  }
  convertCtxToContext(e) {
    if (e === L5e) {
      return;
    }
    const t = e.spanContext();
    if (!t) {
      return;
    }
    const i = bbi(t, "agent-context");
    const r = i.get(uhn);
    if (r) {
      r.end();
    }
    return O_a(i, this._structuredLogService, this._metricsService);
  }
  logTimeout(e, t) {
    const i = {
      operation: e,
      ...t
    };
    this._logService.warn(`[ComposerChatService] Timeout: ${e} did not complete within ${t.timeoutMs ?? "unknown"}ms`, i);
    this._structuredLogService.warn("composer", "Composer operation timed out", i);
  }
  getSmokeTestAwareTimeout(e) {
    if (this._workbenchEnvironmentService.enableSmokeTestDriver) {
      return Math.min(e, 0);
    } else {
      return e;
    }
  }
  getAbortControllerSamplingRate() {
    return this._experimentService.getDynamicConfigParam("abort_controller_logging_config", "sampling_rate") ?? 1;
  }
  isModelInOverrideList(e) {
    if (e) {
      return (this._experimentService.getDynamicConfigParam("cc_override_models_config", "models") ?? []).some(i => e.toLowerCase().includes(i.toLowerCase()));
    } else {
      return false;
    }
  }
  isModelCompatibleWithClaudeCodeBackend(e) {
    return this.isModelInOverrideList(e);
  }
  getAgentBackendForFirstSubmit(e) {
    if (this._experimentService.checkFeatureGate("cc_override_agent_backend") && this.isModelInOverrideList(e.modelName)) {
      return {
        agentBackend: "claude-code",
        applyAgentBackendTypeRestrictions: true
      };
    }
    const i = this._workbenchEnvironmentService.remoteAuthority;
    const o = !!i && !i.startsWith("ssh-remote+") || !xv && !Fs;
    if (e.unifiedMode === "agent" && !o && this.isModelInOverrideList(e.modelName)) {
      const l = this._experimentService.getExperimentParam("agent_backend_ab_test_1", "group");
      if (l === "cursor-agent" || l === "claude-code") {
        return {
          agentBackend: l,
          applyAgentBackendTypeRestrictions: true
        };
      }
      const u = this._experimentService.getExperimentParam("agent_backend_ab_test_2", "group");
      if (u === "cursor-agent" || u === "claude-code") {
        return {
          agentBackend: u,
          applyAgentBackendTypeRestrictions: true
        };
      }
    }
    return {
      agentBackend: "cursor-agent",
      applyAgentBackendTypeRestrictions: false
    };
  }
  async fetchBackgroundComposerErrorDetails({
    client: e,
    bcId: t,
    composerId: i,
    abortController: r
  }) {
    try {
      const o = (await e.listDetailedBackgroundComposers(new lsu({
        bcId: t,
        n: 1
      }), {
        signal: r.signal
      })).composers?.[0];
      const a = o?.permanentError ?? o?.startError;
      if (a) {
        this._structuredLogService.info("composer", "Background composer error details retrieved", {
          bcId: t,
          composerId: i,
          errorDetails: a.toJsonString()
        });
        const l = this._composerDataService.getHandleIfLoaded_MIGRATED(i);
        const u = l ? this._composerDataService.getComposerCapability(l, ko.BACKGROUND_COMPOSER) : undefined;
        if (u) {
          u.setErrorDetails({
            requestId: "",
            error: a
          });
        }
      }
    } catch (s) {
      this._structuredLogService.warn("composer", "Failed to fetch error details", {
        bcId: t,
        composerId: i,
        error: s
      });
    }
  }
  async attachToBackgroundAgent(e, t, i, r, s) {
    let o = await this._composerDataService.getComposerHandleById(t);
    if (!o) {
      try {
        o = await Dfa(async () => {
          const a = await this._composerDataService.getComposerHandleById(t);
          if (a) {
            return Promise.resolve(a);
          } else {
            this._structuredLogService.debug("composer", "Waiting for composer data handle to be created", {
              bcId: e,
              composerId: t
            });
            return Promise.reject(new Error("Composer not found"));
          }
        }, {
          initialRetryTimeMs: 25,
          maxNumberOfRetries: 8,
          maxDelayMs: 1000
        });
      } catch (a) {
        console.error("[composer.backgroundAgent] unable to get composer data", a);
      }
    }
    if (!o) {
      this._structuredLogService.warn("background_composer", "Invalid composerId", {
        bcId: e,
        composerId: t
      });
      return {
        shouldRetry: false
      };
    }
    try {
      return await this._attachToBackgroundAgentInner(e, t, o, i, r, s);
    } finally {
      o.dispose();
    }
  }
  async _attachToBackgroundAgentInner(e, t, i, r, s, o) {
    if (!i.data.createdFromBackgroundAgent) {
      this._structuredLogService.warn("background_composer", "Unexpected missing createdFromBackgroundAgent", {
        bcId: e,
        composerId: t
      });
      return {
        shouldRetry: false
      };
    }
    const a = i.data.fullConversationHeadersOnly.slice();
    const l = Object.fromEntries(Object.entries(i.data.conversationMap).map(([m, p]) => [m, p]));
    let u;
    for (const m of i.data.fullConversationHeadersOnly) {
      if (m.type === ul.HUMAN) {
        const p = i.data.conversationMap[m.bubbleId];
        if (!p) {
          this._structuredLogService.warn("background_composer", "unexpected missing bubble", {
            bcId: e,
            numHeaders: i.data.fullConversationHeadersOnly.length,
            mapSize: Object.keys(i.data.conversationMap).length
          });
          continue;
        }
        u = new Date(p.createdAt);
        break;
      }
      if (m.bubbleId === e) {
        break;
      }
    }
    if (!i.data.conversationActionManager) {
      this._structuredLogService.info("background_composer", "Creating ControlledConversationActionManager for background agent", {
        bcId: e,
        composerId: t
      });
      const m = new RAi();
      this._composerDataService.updateComposerData(i, {
        conversationActionManager: m
      });
    }
    this._structuredLogService.info("background_composer", "Starting attachment to background composer", {
      bcId: e,
      composerId: t
    });
    if (i.data.isNAL !== true) {
      this._composerDataService.updateComposerData(i, {
        isNAL: true
      });
    }
    await this._composerUtilsService.ensureCapabilitiesAreLoaded(i);
    const d = this._aiService.backgroundComposerClient();
    this._structuredLogService.debug("background_composer", "Loading and listening to cloud agent", {
      bcId: e,
      composerId: t
    });
    try {
      await this.loadAndListenToCloudAgent({
        bcId: e,
        composerId: t,
        composerDataHandle: i,
        originalConversationHeaders: a,
        originalConversationMap: l,
        abortController: r,
        startOffsetKey: s
      });
      const m = await this._cloudAgentStorageService.getMetadataAsync(e);
      if (m.workflowStatus === uv.ARCHIVED || m.workflowStatus === uv.ERROR || m.workflowStatus === uv.EXPIRED) {
        this._structuredLogService.debug("background_composer", "cloud agent workflow is finished, stopping stream", {
          bcId: e,
          composerId: t,
          workflowStatus: m.workflowStatus
        });
        if (m.workflowStatus === uv.ERROR) {
          const p = await d;
          await this.fetchBackgroundComposerErrorDetails({
            client: p,
            bcId: e,
            composerId: t,
            abortController: r
          });
        }
        return {
          shouldRetry: false
        };
      }
      throw new Error("loadAndListenToCloudAgent should not return");
    } catch (m) {
      if (r.signal.aborted || bf(m)) {
        return {
          shouldRetry: false
        };
      }
      if (m instanceof qga) {
        return {
          shouldRetry: true,
          resumeOffsetKeyForRestart: m.offsetKey
        };
      }
      if (m instanceof Fnu) {
        return {
          shouldRetry: true,
          resumeOffsetKeyForRestart: "-"
        };
      }
      const p = o || u && Date.now() - u.getTime() < 3600000;
      const g = p;
      const f = m instanceof fA && (m.code === j0.InvalidArgument || !g && m.code === j0.NotFound || m.code === j0.FailedPrecondition || m.code === j0.OutOfRange || m.code === j0.Unauthenticated || m.code === j0.PermissionDenied);
      this._structuredLogService.error("background_composer", "Error while streaming background agent", m, {
        composerId: t,
        bcId: e,
        isClientError: f,
        shouldRetryNotFound: g,
        isRecentlyCreatedBc: p,
        ...(m instanceof fA ? {
          code: m.code
        } : {})
      });
      if (f) {
        const A = BU(m);
        if (A) {
          const w = this._composerDataService.getComposerCapability(i, ko.BACKGROUND_COMPOSER);
          if (w && !w.getErrorDetails()) {
            w.setErrorDetails({
              requestId: "",
              error: A
            });
          }
        }
      }
      return {
        shouldRetry: !f
      };
    }
  }
  syncWorkflowStatusToInMemoryStorage({
    bcId: e,
    composerId: t,
    composerDataHandle: i,
    newWorkflowStatus: r,
    setMostRecentGeneratingBubbles: s
  }) {
    const o = this._backgroundComposerDataService.data.backgroundComposers.find(d => d.bcId === e);
    const a = o?.status ?? sl.UNSPECIFIED;
    const l = a === sl.ERROR || a === sl.EXPIRED;
    let u = a;
    switch (r) {
      case uv.RUNNING:
        u = sl.RUNNING;
        break;
      case uv.NOT_YET_STARTED:
        u = sl.CREATING;
        break;
      case uv.IDLE:
        u = sl.FINISHED;
        break;
      case uv.ERROR:
        u = sl.ERROR;
        break;
      case uv.ARCHIVED:
        u = sl.FINISHED;
        break;
      case uv.EXPIRED:
        u = sl.EXPIRED;
        break;
      case uv.UNSPECIFIED:
        u = sl.UNSPECIFIED;
        break;
      default:
        {
          const d = r;
          u = sl.UNSPECIFIED;
          break;
        }
    }
    if (!l && a !== u && (this._backgroundComposerDataService.setData("backgroundComposers", d => d.bcId === e, "status", u), this._backgroundComposerEventService.fireDidBcStatusChange({
      bcId: e,
      newStatus: u
    }), r === uv.IDLE)) {
      const d = this._composerDataService.getLastHumanBubbleId(i);
      const m = this._composerDataService.getLastAiBubbleId(i);
      if (d && m) {
        this._composerUtilsService.runCapabilitiesForProcess(i, "chat-stream-finished", {
          composerId: t,
          humanBubbleId: d,
          aiBubbleId: m,
          startTime: o?.createdAt,
          parentSpanCtx: L5e
        }).catch(p => {
          console.error("[composer] error running capabilities for chat-stream-finished in registerResumeOffset", p);
        });
      }
    }
    if (r !== uv.RUNNING && i.data.status === "generating") {
      this._composerDataService.updateComposerDataSetStore(i, d => {
        d("status", "completed");
        d("generatingBubbleIds", m => {
          s(m ?? []);
          return [];
        });
      });
    }
  }
  async loadAndListenToCloudAgent({
    bcId: e,
    composerId: t,
    composerDataHandle: i,
    originalConversationHeaders: r,
    originalConversationMap: s,
    abortController: o,
    startOffsetKey: a
  }) {
    let l;
    let u;
    const d = this._aiService.backgroundComposerClient();
    let m = false;
    const p = false;
    const g = false;
    let f = [];
    let A = r.slice();
    let w = {
      ...s
    };
    let C = i.data.todos ?? [];
    try {
      m = true;
      this._composerDataService.updateComposerDataSetStore(i, ne => {
        ne("isLoadingBackgroundConversationFromState", m);
      });
      u = await this._cloudAgentStorageService.getConversationStateWithLastInteraction({
        bcId: e,
        composerId: t
      });
      this._structuredLogService.debug("background_composer", "loaded latest state from disk", {
        bcId: e,
        hasPrevState: !!u,
        hasConversationState: !!u?.value.conversationState,
        prevStatus: u?.metadata.workflowStatus ?? "unknown"
      });
    } catch (ne) {
      this._structuredLogService.warn("background_composer", "error loading latest state from disk", {
        bcId: e,
        error: ne
      });
    }
    let x = [];
    const I = ne => {
      x = ne;
    };
    let B;
    if (!g && !p && u && u.value.conversationState && u.value.lastInteractionUpdateOffsetKey.length > 0 && (u.metadata.workflowStatus !== uv.RUNNING || a)) {
      try {
        const ne = i.data.createdFromBackgroundAgent?.kickoffMessageId;
        let pe = 0;
        const le = await Zpn({
          instantiationService: this._instantiationService,
          selectedContextService: this._selectedContextService,
          structuredLogService: this._structuredLogService,
          conversationState: u.value.conversationState,
          kickoffMessageId: ne,
          existingConversationMap: w,
          existingConversationHeaders: A,
          blobStore: {
            getBlob: async (he, be) => {
              const fe = await this._cloudAgentStorageService.getBlob({
                bcId: e,
                composerId: t,
                blobId: be
              });
              if (fe) {
                f.push(be);
                return fe;
              }
              console.warn("[ComposerAgentService] Blob not found in cloud agent storage");
              const Se = await (await d).getBlobForAgentKV(new Imn({
                bcId: e,
                blobId: be
              }), {
                signal: o.signal
              });
              this._cloudAgentStorageService.enqueueSetBlobs({
                bcId: e,
                composerId: t,
                blobs: [new mQ({
                  id: be,
                  value: Se.blobData
                })]
              });
              pe++;
              return Se.blobData;
            }
          }
        });
        A = le.conversationHeaders;
        w = le.conversationMap;
        C = le.todos;
        this._composerDataService.updateComposerDataSetStore(i, he => {
          he("conversationMap", le.conversationMap);
          he("fullConversationHeadersOnly", le.conversationHeaders);
          he("todos", le.todos);
        });
        this._composerViewsService.triggerScrollToBottom(i);
        m = false;
        this._composerDataService.updateComposerDataSetStore(i, he => {
          he("isLoadingBackgroundConversationFromState", m);
        });
        l = a ?? u.metadata.offsetKey ?? u.value.lastInteractionUpdateOffsetKey;
        B = WSf(u.metadata.cloudAgentStateBlobId);
        this.syncWorkflowStatusToInMemoryStorage({
          bcId: e,
          composerId: t,
          composerDataHandle: i,
          newWorkflowStatus: u.metadata.workflowStatus,
          setMostRecentGeneratingBubbles: I
        });
        this._structuredLogService.info("background_composer", "loaded conversation from disk successfully", {
          bcId: e,
          composerId: t,
          loadedBlobIdString: B,
          blobsLoaded: pe
        });
      } catch (ne) {
        this._structuredLogService.error("background_composer", "Error processing conversation state from disk", ne, {
          bcId: e,
          composerId: t
        });
        this._composerDataService.updateComposerDataSetStore(i, pe => {
          pe("conversationMap", w);
          pe("fullConversationHeadersOnly", A);
          pe("todos", C);
        });
      }
    }
    if (l === undefined) {
      if (a) {
        l = a;
      } else if (g) {
        l = "-";
      }
    }
    if (f.length === 0 && u?.value.conversationState) {
      try {
        f = await sSf(u.value.conversationState, {
          getBlob: async (ne, pe) => {
            const le = await this._cloudAgentStorageService.getBlob({
              bcId: e,
              composerId: t,
              blobId: pe
            });
            if (le) {
              return le;
            }
            throw new Error("Blob not found on disk");
          }
        });
        this._structuredLogService.debug("background_composer", "extracted existing blob IDs from skipped disk state", {
          bcId: e,
          count: f.length
        });
      } catch (ne) {
        this._structuredLogService.warn("background_composer", "failed to extract blob IDs from skipped disk state", {
          bcId: e,
          error: ne
        });
      }
    }
    if (f.length > 0) {
      this._structuredLogService.debug("background_composer", "sending existing blob IDs from disk reads", {
        bcId: e,
        count: f.length
      });
    }
    const R = new pAi({
      bcId: e,
      offsetKey: l,
      shouldSendPrefetchedBlobsFirst: true,
      preFetchedBlobIds: f
    });
    let N = false;
    const M = () => {
      const ne = {
        ...h_(),
        type: ul.AI,
        text: "",
        createdAt: new Date().toISOString(),
        requestId: e
      };
      this._composerDataService.appendComposerBubbles(i, [ne]);
      if (!N && u?.metadata.workflowStatus && u.metadata.workflowStatus !== uv.RUNNING) {
        this._composerDataService.updateComposerDataSetStore(i, pe => {
          pe("status", "completed");
          pe("generatingBubbleIds", le => {
            I([...(le ?? []), ne.bubbleId]);
            return [];
          });
        });
      } else {
        this._composerDataService.updateComposerDataSetStore(i, pe => {
          pe("status", "generating");
          pe("generatingBubbleIds", le => [...(le ?? []), ne.bubbleId]);
        });
      }
      N = true;
      return ne.bubbleId;
    };
    const O = TC();
    const $ = new AbortController();
    const H = () => {
      $.abort(o.signal.reason);
    };
    if (o.signal.aborted) {
      $.abort(o.signal.reason);
    } else {
      o.signal.addEventListener("abort", H);
    }
    const W = await d;
    const z = W.streamConversation(R, {
      signal: $.signal
    });
    const Y = Jfi();
    let j;
    const X = async () => {
      for await (const ne of z) {
        let pe = false;
        if (ne.message.case === "prefetchedBlobs") {
          this._cloudAgentStorageService.enqueueSetBlobs({
            bcId: e,
            composerId: t,
            blobs: ne.message.value.preFetchedBlobs
          });
        } else if (ne.message.case === "initialState") {
          this._composerDataService.updateComposerDataSetStore(i, Fe => {
            Fe("devBannerText", undefined);
          });
          await this._cloudAgentStorageService.waitForPendingWrites({
            bcId: e,
            composerId: t
          });
          await this._cloudAgentStorageService.storePreFetchedBlobs({
            bcId: e,
            composerId: t,
            blobs: ne.message.value.preFetchedBlobs
          });
          const le = ne.message.value.workflowStatus;
          const he = le === uv.EXPIRED || le === uv.ARCHIVED || le === uv.ERROR;
          let be = false;
          let fe = false;
          const ke = ne.message.value.cloudAgentState?.conversationState;
          if (ke !== undefined && (!B || WSf(ne.message.value.blobId) !== B)) {
            this._structuredLogService.debug("background_composer", "loading conversation from initial state", {
              bcId: e,
              composerId: t
            });
            m = true;
            this._composerDataService.updateComposerDataSetStore(i, Fe => {
              Fe("isLoadingBackgroundConversationFromState", m);
            });
            try {
              const Fe = i.data.createdFromBackgroundAgent?.kickoffMessageId;
              let De = 0;
              const Pe = await Zpn({
                instantiationService: this._instantiationService,
                selectedContextService: this._selectedContextService,
                structuredLogService: this._structuredLogService,
                conversationState: ke,
                kickoffMessageId: Fe,
                existingConversationMap: w,
                existingConversationHeaders: A,
                blobStore: {
                  getBlob: async (Ne, Oe) => {
                    const Ge = await this._cloudAgentStorageService.getBlob({
                      bcId: e,
                      composerId: t,
                      blobId: Oe
                    });
                    if (Ge) {
                      return Ge;
                    }
                    console.warn("[ComposerAgentService] Blob not found in prefetchedBlobs");
                    const Le = await W.getBlobForAgentKV(new Imn({
                      bcId: e,
                      blobId: Oe
                    }), {
                      signal: o.signal
                    });
                    this._cloudAgentStorageService.enqueueSetBlobs({
                      bcId: e,
                      composerId: t,
                      blobs: [new mQ({
                        id: Oe,
                        value: Le.blobData
                      })]
                    });
                    De++;
                    return Le.blobData;
                  }
                }
              });
              A = Pe.conversationHeaders;
              w = Pe.conversationMap;
              C = Pe.todos;
              this._composerDataService.updateComposerDataSetStore(i, Ne => {
                Ne("conversationMap", Pe.conversationMap);
                Ne("fullConversationHeadersOnly", Pe.conversationHeaders);
                Ne("todos", Pe.todos);
                Ne("isLoadingBackgroundConversationFromState", false);
              });
              this._composerViewsService.triggerScrollToBottom(i);
              this._structuredLogService.debug("composer", "loaded conversation from initial state successfully", {
                bcId: e,
                composerId: t,
                blobsLoaded: De
              });
              if (he) {
                this._structuredLogService.debug("background_composer", "workflow is complete, will stop stream after persistence", {
                  bcId: e,
                  composerId: t
                });
                be = true;
              }
            } catch (Fe) {
              this._structuredLogService.error("composer", "Error processing conversation state from initial state", Fe, {
                bcId: e,
                composerId: t
              });
              m = false;
              this._composerDataService.updateComposerDataSetStore(i, De => {
                De("conversationMap", w);
                De("fullConversationHeadersOnly", A);
                De("todos", C);
                De("isLoadingBackgroundConversationFromState", m);
              });
              if (ne.message.value.workflowStatus !== uv.EXPIRED) {
                fe = true;
              } else {
                this._structuredLogService.warn("background_composer", "Failed to process initial state snapshot, but the agent is expired", {
                  bcId: e,
                  composerId: t
                });
                be = true;
              }
            }
          } else {
            this._composerDataService.updateComposerDataSetStore(i, Fe => {
              Fe("isLoadingBackgroundConversationFromState", false);
            });
            if (he) {
              be = true;
            }
          }
          await this._cloudAgentStorageService.saveNewCloudAgentState({
            bcId: e,
            composerId: t,
            blobId: ne.message.value.blobId,
            state: ne.message.value.cloudAgentState
          });
          await this._cloudAgentStorageService.saveNewWorkflowStatus(e, ne.message.value.workflowStatus);
          this.syncWorkflowStatusToInMemoryStorage({
            bcId: e,
            composerId: t,
            composerDataHandle: i,
            newWorkflowStatus: ne.message.value.workflowStatus,
            setMostRecentGeneratingBubbles: I
          });
          if (be) {
            break;
          }
          if (fe) {
            Y.throw(new Fnu("Failed to process initial state snapshot"));
            return;
          }
        } else if (ne.message.case === "cloudAgentStateWithIdAndOffset") {
          await this._cloudAgentStorageService.storePreFetchedBlobs({
            bcId: e,
            composerId: t,
            blobs: ne.message.value.preFetchedBlobs
          });
          const le = ne.message.value.cloudAgentState?.conversationState;
          if (le) {
            try {
              const he = i.data.createdFromBackgroundAgent?.kickoffMessageId;
              const be = await Zpn({
                instantiationService: this._instantiationService,
                selectedContextService: this._selectedContextService,
                structuredLogService: this._structuredLogService,
                conversationState: le,
                kickoffMessageId: he,
                existingConversationMap: w,
                existingConversationHeaders: A,
                shouldSetServerBubbleId: true,
                blobStore: {
                  getBlob: async (fe, ke) => {
                    const Se = await this._cloudAgentStorageService.getBlob({
                      bcId: e,
                      composerId: t,
                      blobId: ke
                    });
                    if (Se) {
                      return Se;
                    }
                    const Fe = await W.getBlobForAgentKV(new Imn({
                      bcId: e,
                      blobId: ke
                    }), {
                      signal: o.signal
                    });
                    this._cloudAgentStorageService.enqueueSetBlobs({
                      bcId: e,
                      composerId: t,
                      blobs: [new mQ({
                        id: ke,
                        value: Fe.blobData
                      })]
                    });
                    return Fe.blobData;
                  }
                }
              });
              A = be.conversationHeaders;
              w = be.conversationMap;
              C = be.todos;
            } catch (he) {
              this._structuredLogService.warn("background_composer", "Error computing safe bubbles from cloud checkpoint", {
                bcId: e,
                composerId: t,
                error: he
              });
            }
          }
          await this._cloudAgentStorageService.saveNewCloudAgentState({
            bcId: e,
            composerId: t,
            blobId: ne.message.value.blobId,
            state: ne.message.value.cloudAgentState,
            offsetKey: ne.message.value.offsetKey
          });
          await this._cloudAgentStorageService.waitForPendingWrites({
            bcId: e,
            composerId: t
          });
        } else if (ne.message.case === "workflowStatusWithOffset") {
          await this._cloudAgentStorageService.saveNewWorkflowStatus(e, ne.message.value.workflowStatus, ne.message.value.offsetKey);
          this.syncWorkflowStatusToInMemoryStorage({
            bcId: e,
            composerId: t,
            composerDataHandle: i,
            newWorkflowStatus: ne.message.value.workflowStatus,
            setMostRecentGeneratingBubbles: I
          });
        } else if (ne.message.case === "interactionUpdateWithOffset") {
          const le = ne.message.value.interactionUpdate?.message?.case;
          if (le && le !== "turnEnded" && i.data.status === "completed") {
            this._composerDataService.updateComposerDataSetStore(i, he => {
              he("status", "generating");
              he("generatingBubbleIds", x);
            });
          }
          try {
            await Y.write(ne.message.value);
          } catch (he) {
            this._structuredLogService.error("background_composer", "Error writing interaction update to stream", he, {
              bcId: e
            });
            j = he;
            break;
          }
        } else if (ne.message.case === "devBannerMessage") {
          const le = ne.message.value.text;
          if (le) {
            this._composerDataService.updateComposerDataSetStore(i, he => {
              he("devBannerText", `[dev-info: ${le}]`);
            });
          }
        } else {
          pe = true;
        }
        if (m && !pe && ne.message.case !== "prefetchedBlobs") {
          m = false;
          this._composerDataService.updateComposerDataSetStore(i, le => {
            le("isLoadingBackgroundConversationFromState", m);
          });
        }
      }
      Y.close();
    };
    const ee = async () => {
      const ne = this._composerAgentService.handleCloudAgentInteractionUpdates({
        ctx: O,
        interactionUpdates: Y,
        composerDataHandle: i,
        abortController: o,
        createEmptyAiBubble: M,
        bcId: e,
        composerId: t
      });
      for await (const pe of ne);
    };
    const re = (async () => {
      try {
        await X();
      } catch (ne) {
        this._structuredLogService.error("background_composer", "Error in processConversationStream", ne, {
          bcId: e,
          composerId: t
        });
        throw ne;
      } finally {
        Y.close();
        await this._cloudAgentStorageService.waitForPendingWrites({
          bcId: e,
          composerId: t
        });
      }
    })();
    try {
      await ee();
      await re;
      if (j) {
        this._structuredLogService.error("background_composer", "Error in processConversationStream when we expected one from turnInteractionUpdatesIntoBubbles", j, {
          bcId: e,
          composerId: t
        });
        throw j;
      }
      this._composerDataService.updateComposerDataSetStore(i, ne => {
        ne("conversationMap", w);
        ne("fullConversationHeadersOnly", A);
        ne("todos", C);
      });
    } catch (ne) {
      this._composerDataService.updateComposerDataSetStore(i, pe => {
        pe("conversationMap", w);
        pe("fullConversationHeadersOnly", A);
        pe("todos", C);
      });
      throw ne;
    } finally {
      o.signal.removeEventListener("abort", H);
      if (!$.signal.aborted) {
        $.abort("loadAndListenToCloudAgent ended");
      }
      if (m) {
        m = false;
        this._composerDataService.updateComposerDataSetStore(i, ne => {
          ne("isLoadingBackgroundConversationFromState", m);
        });
      }
    }
  }
  async startBackgroundAgentAttachment(e) {
    const {
      bcId: t,
      composerId: i,
      shouldSetRunningStatus: r
    } = e;
    const s = await this._acquireBackgroundAgentAttachmentStartLock(i);
    let o;
    let a;
    try {
      const m = this._backgroundAgentAttachmentLoops.get(i);
      if (m) {
        if (m.bcId === t && m.state === vqe.RUNNING) {
          this._structuredLogService.debug("background_composer", "Background agent attachment already active for this bcId", {
            bcId: t,
            composerId: i
          });
          return;
        }
        if (m.state === vqe.RUNNING) {
          const g = "Replacing attachment with different bcId";
          this._structuredLogService.error("background_composer", "Attachment already exists - aborting existing attachment loop before starting new one", undefined, {
            composerId: i,
            existingBcId: m.bcId,
            newBcId: t,
            reason: g
          });
          m.state = vqe.ABORTING;
          m.abortController.abort(g);
        } else if (m.state === vqe.ABORTING) {
          this._structuredLogService.error("background_composer", "Attachment waiting for abort to complete", undefined, {
            composerId: i,
            existingBcId: m.bcId
          });
        }
        await m.cleanupPromise;
      }
      o = this._abortControllerFactory.create("background_composer", {
        composerId: i,
        bcId: t,
        context: "startBackgroundAgentAttachment"
      }, this.getAbortControllerSamplingRate());
      const p = new Promise(g => {
        a = g;
      });
      this._backgroundAgentAttachmentLoops.set(i, {
        bcId: t,
        abortController: o,
        cleanupPromise: p,
        state: vqe.RUNNING
      });
    } finally {
      s();
    }
    const l = 8;
    const u = 1000;
    const d = async () => {
      let m;
      let p = true;
      while (!o.signal.aborted && p) {
        try {
          p = await Dfa(async () => {
            if (o.signal.aborted) {
              return false;
            }
            const {
              shouldRetry: f,
              resumeOffsetKeyForRestart: A
            } = await this.attachToBackgroundAgent(t, i, o, m, r);
            if (f) {
              m = A;
              throw new Error(`attachToBackgroundAgent returned false for ${t}`);
            }
            return false;
          }, {
            initialRetryTimeMs: u,
            maxNumberOfRetries: l,
            maxDelayMs: u * 5
          });
          if (o.signal.aborted) {
            this._structuredLogService.debug("composer", "Background agent attachment was aborted", {
              bcId: t,
              composerId: i
            });
          } else {
            this._structuredLogService.debug("composer", "Background agent attachment loop exited without error, unexpected.", {
              bcId: t,
              composerId: i,
              shouldRetry: p
            });
          }
        } catch (f) {
          if (!o.signal.aborted) {
            this._structuredLogService.debug("composer", "Background agent attachment iteration failed, will retry", {
              bcId: t,
              composerId: i,
              error: f instanceof Error ? f.message : String(f)
            });
            await new Promise(A => setTimeout(A, u));
          }
        }
        if (this._experimentService.getDynamicConfigParam("disable_infinite_cloud_agent_stream_retries", "enabled")) {
          this._structuredLogService.warn("background_composer", "Breaking attachment loop after first iteration due to disable_infinite_cloud_agent_stream_retries config", {
            bcId: t,
            composerId: i
          });
          break;
        }
      }
    };
    try {
      await d();
    } finally {
      if (!this._backgroundAgentAttachmentLoops.get(i)) {
        console.warn("expected to still have entry for", t, i);
      }
      this._backgroundAgentAttachmentLoops.delete(i);
      a();
    }
  }
  async stopBackgroundAgentAttachment(e) {
    const t = e.composerId;
    const i = e.reason ?? "Stopping background agent attachment";
    const r = this._backgroundAgentAttachmentLoops.get(t);
    if (r) {
      r.state = vqe.ABORTING;
      r.abortController.abort(i);
      await r.cleanupPromise;
    }
  }
  getBucketForConversationLength(e) {
    if (e === 0) {
      return "0";
    }
    const t = Math.log2(e);
    if (t < 1) {
      return "1";
    } else if (t < 2) {
      return "2-3";
    } else if (t < 3) {
      return "4-7";
    } else if (t < 4) {
      return "8-15";
    } else if (t < 5) {
      return "16-31";
    } else if (t < 6) {
      return "32-63";
    } else if (t < 7) {
      return "64-127";
    } else if (t < 8) {
      return "128-255";
    } else if (t < 9) {
      return "256-511";
    } else if (t < 10) {
      return "512-1023";
    } else {
      return "1024+";
    }
  }
  getModelNameForMetrics(e, t) {
    const i = e.modelName;
    if (i) {
      if (this._isBringYourOwnKey(e)) {
        return "byok";
      } else if (!t.isDefaultModel(i) || t.isUserAddedModel(i)) {
        return "user-provided";
      } else {
        return i;
      }
    } else {
      return "unknown";
    }
  }
  extractFirstModelName(e) {
    if (!!e && typeof e == "string") {
      if (e.includes(",")) {
        const t = e.split(",").map(i => i.trim()).filter(i => i.length > 0)[0];
        if (t && t.length > 0) {
          return t;
        } else {
          return undefined;
        }
      }
      return e;
    }
  }
  async appendQueuedHumanMessage(e, t, i) {
    const r = this._composerDataService.getComposerData(e);
    if (!r) {
      console.error("[composer] appendQueuedHumanMessage called without composer state!");
      return;
    }
    const s = h_();
    const o = {
      ...s,
      bubbleId: i?.bubbleId ?? s.bubbleId,
      richText: i?.richText ?? t,
      text: t,
      tokenDetailsUpUntilHere: r.tokenDetails,
      tokenCountUpUntilHere: r.tokenCount,
      context: mL(i?.contextOverride ?? r.context),
      conversationState: r.conversationState
    };
    this._composerDataService.appendComposerBubbles(e, [o]);
    this._composerCheckpointService.updateComposerBubbleCheckpoint(e.composerId, o.bubbleId);
  }
  _detachReservedWorktreeAfterNewIteration(e) {
    const t = e.composerId;
    const i = e.data;
    if (!i.reservedWorktree || i.applied !== true) {
      return;
    }
    const r = i.reservedWorktree.worktreePath;
    this._structuredLogService.info("composer", "Clearing reserved worktree after new iteration", {
      composerId: t,
      worktreePath: r
    });
    this._composerDataService.updateComposerDataSetStore(e, s => {
      s("reservedWorktree", undefined);
      s("applied", false);
      s("appliedDiffs", undefined);
    });
    this._worktreeManagerService.removeWorktree(r).catch(s => {
      this._structuredLogService.warn("composer", "Failed to remove worktree after new iteration", {
        composerId: t,
        worktreePath: r,
        error: String(s)
      });
    });
  }
  async triggerStopHook(e, t) {
    try {
      if (!this._cursorHooksService.hasHookForStep(df.stop)) {
        return;
      }
      const i = e.composerId;
      const r = this._composerDataService.getComposerData(e);
      if (!r) {
        return;
      }
      const s = r.stopHookLoopCount ?? 0;
      const o = await this._cursorHooksService.executeHookForStep(df.stop, {
        conversation_id: i,
        generation_id: r.chatGenerationUUID || r.latestChatGenerationUUID || Wr(),
        model: r.modelConfig?.modelName ?? "",
        status: t,
        loop_count: s
      });
      if (o && typeof o.followup_message == "string" && o.followup_message.trim().length > 0) {
        const a = o.followup_message;
        this._composerDataService.updateComposerData(e, {
          stopHookLoopCount: s + 1
        });
        this.submitChatMaybeAbortCurrent(i, a, {
          skipClearInput: true,
          skipFocusAfterSubmission: true,
          isAutoFollowupFromStopHook: true
        }).catch(l => {
          console.error("[composer] Error submitting follow-up from stop hook:", l);
        });
      }
    } catch (i) {
      console.error("[composer] Error executing stop hook:", i);
    }
  }
  getUserTurnTracker(e, t, i, r, s) {
    if (i) {
      if (s !== undefined) {
        return s;
      }
      const u = this._activeUserTurnTrackers.get(e);
      if (!u) {
        this._structuredLogService.warn("composer", "Missing turn tracker for continuation", {
          composerId: e,
          turnType: t
        });
      }
      return u;
    }
    const o = this._aiService.getModelDetails({
      composerId: e
    });
    const a = this._isBringYourOwnKey(o);
    const l = new GIg({
      logger: this._structuredLogService,
      logKey: "composer",
      startEventName: "agent.turn.start",
      outcomeEventName: "agent.turn.outcome",
      simulatedThinkingTimeoutEventName: "agent.turn.simulated_thinking_timeout",
      turnType: t,
      workspaceTag: r,
      bringYourOwnKey: a
    });
    this._activeUserTurnTrackers.set(e, l);
    return l;
  }
  _isBringYourOwnKey(e) {
    if (e) {
      return !!e.apiKey || e.azureState?.useAzure === true || e.bedrockState?.useBedrock === true;
    } else {
      return false;
    }
  }
  isTurnCancellation(e, t) {
    if (t === "user_stopped_generation" || t === "new_message_submitted" || e instanceof _ce || bf(e)) {
      return true;
    }
    if (e instanceof fA) {
      const i = BU(e);
      return i?.error === yc.USER_ABORTED_REQUEST || i?.error === yc.DEBOUNCED;
    }
    return false;
  }
  getErrorCodeFromErrorDisplayInfo(e) {
    if (!e) {
      return;
    }
    const t = e?.errorCode;
    if (t !== undefined) {
      const s = yc[t];
      if (s === undefined) {
        return t.toString();
      } else {
        return s;
      }
    }
    const i = e?.connectCode;
    if (i !== undefined) {
      return Thn(i);
    } else {
      return undefined;
    }
  }
  classifyTurnError(e) {
    if (e instanceof vnt) {
      return {
        errorType: "action_required",
        errorCode: e.action ?? this.getErrorCodeFromErrorDisplayInfo(e.displayInfo),
        errorText: e.message
      };
    }
    if (e instanceof die) {
      return {
        errorType: "retriable",
        errorCode: this.getErrorCodeFromErrorDisplayInfo(e.displayInfo),
        errorText: e.message
      };
    }
    if (e instanceof OAi) {
      return {
        errorType: "non_retriable",
        errorCode: this.getErrorCodeFromErrorDisplayInfo(e.displayInfo),
        errorText: e.message
      };
    }
    if (e instanceof V$e) {
      return {
        errorType: "agent_error",
        errorCode: this.getErrorCodeFromErrorDisplayInfo(e.displayInfo),
        errorText: e.message
      };
    }
    if (e instanceof fA) {
      const t = BU(e);
      return {
        errorType: "connect_error",
        errorCode: (t?.error !== undefined ? yc[t.error] : undefined) ?? Thn(e.code),
        errorText: e.message
      };
    }
    return {
      errorType: "unknown",
      errorCode: e instanceof Error ? e.name : "unknown",
      errorText: e instanceof Error ? e.message : undefined
    };
  }
  markAgentTurnSimulatedThinkingTimeout(e, t) {
    const i = this._activeUserTurnTrackers.get(e);
    if (!i) {
      this._structuredLogService.warn("composer", "Simulated thinking timeout without active turn tracker", {
        composerId: e
      });
      return;
    }
    i.markSimulatedThinkingTimedOut(t);
    if (this._shouldTrackSessionRecording()) {
      P5e({
        category: "agent.loop",
        message: `Agent simulated thinking timeout [${e}]`,
        level: "warning",
        data: {
          composerId: e,
          thresholdMs: t
        }
      });
    }
  }
  async _tryAcquireLocalAgentGuardRef(e) {
    try {
      if (this._agentRepositoryService?.agents.value?.find(i => i.id === e)?.source === "local") {
        return await this._agentRepositoryService.loadAgent(e);
      }
    } catch {}
  }
  async submitChatMaybeAbortCurrent(e, t, i) {
    const r = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      this._composerViewsService.getInputDelegate(e).disablePendingSuggestion();
      if (this._composerViewsService.isFindWidgetVisible(e)) {
        this._composerViewsService.hideFindWidget(e);
      }
      const s = i?.isResume ? "resume" : "new";
      const a = this._remoteAgentService.getConnection()?.remoteAuthority;
      const l = !!a && (a.startsWith("ssh-remote+") || a.includes("@ssh-remote+"));
      const u = l ? "remote_ssh" : "local";
      const d = i?.isAutoResume === true || i?.isAutoFollowupFromStopHook === true;
      const m = await this._computePrewarmKey(e);
      const p = m ? Aif(m) : undefined;
      const g = this._agentPrewarmService?.consumePrewarm(e, p);
      const f = g ? g.generationUUID : Wr();
      const A = this.getUserTurnTracker(e, s, d, u, i?._internalTurnTracker);
      let w = true;
      const C = (Ot, cn) => {
        if (A) {
          A.finalize(Ot, cn);
          if (this._activeUserTurnTrackers.get(e) === A) {
            this._activeUserTurnTrackers.delete(e);
          }
          if (x) {
            P5e({
              category: "agent.loop",
              message: `Agent turn ${Ot} [${f}]`,
              level: Ot === "error" ? "error" : "info",
              data: {
                requestId: f,
                composerId: e,
                outcome: Ot,
                ...(cn && {
                  errorType: cn.errorType,
                  errorCode: cn.errorCode
                })
              }
            });
          }
        }
      };
      const x = this._shouldTrackSessionRecording();
      kty(f, x);
      const I = g ? {
        requestStream: g.requestStream,
        responseIterator: g.responseIterator,
        abortController: g.abortController
      } : undefined;
      const B = __addDisposableResource(r, this._createSubmitTraceScope(g, f), false);
      const {
        rootSpanCtx: R,
        submitSpanCtx: N,
        isPrewarmed: M
      } = B;
      const O = R?.spanContext();
      if (!d && A) {
        if (O?.traceId) {
          A.start(f, {
            traceId: O.traceId,
            spanId: O.spanId
          });
        } else {
          A.startUntraced(f);
        }
      } else if (A && O?.traceId) {
        A.setTraceContext({
          traceId: O.traceId,
          spanId: O.spanId
        });
      }
      if (x) {
        P5e({
          category: "agent.loop",
          message: `Agent request submitted [${f}]`,
          level: "info",
          data: {
            requestId: f,
            composerId: e,
            generationUUID: f,
            turnType: s,
            isPrewarmed: M,
            isContinuation: d,
            textLength: t.length
          }
        });
      }
      if (M) {
        this._logService.info("[ComposerChatService] Using prewarmed state", {
          composerId: e,
          generationUUID: f
        });
      }
      const $ = __addDisposableResource(r, await this._composerDataService.getComposerHandleById(e), false);
      const H = __addDisposableResource(r, await this._tryAcquireLocalAgentGuardRef(e), false);
      if (!$) {
        console.error("[composer] Cannot submit chat - composer not loaded");
        this._structuredLogService.error("composer", "Cannot submit chat - composer not loaded", undefined, {
          requestId: f,
          composerId: e
        });
        C("error", {
          errorType: "bounce",
          errorCode: "composer_not_loaded"
        });
        return;
      }
      const W = $.data;
      const z = W.fullConversationHeadersOnly.length === 0;
      if (!W.isNAL) {
        this._structuredLogService.error("composer", "Cannot submit chat - chat is too old and no longer supported", undefined, {
          requestId: f,
          composerId: e
        });
        const Ot = {
          ...h_(),
          type: ul.HUMAN,
          text: t,
          codeBlocks: []
        };
        const cn = {
          title: "Chat Too Old",
          message: "This chat was created in an older version of Cursor and is no longer supported. Please start a new chat.",
          error: new cN({
            error: yc.CUSTOM,
            details: new Rbt({
              title: "Chat Too Old",
              detail: "This chat was created in an older version of Cursor and is no longer supported. Please start a new chat.",
              isRetryable: false
            })
          }),
          extraButtons: [{
            id: "new-chat",
            label: "New Chat",
            callback: () => {
              this._commandService.executeCommand(M1e);
            },
            variant: "primary"
          }]
        };
        const Mt = {
          ...h_(),
          codeBlocks: [],
          type: ul.AI,
          text: "",
          errorDetails: cn
        };
        this._composerDataService.appendComposerBubbles($, [Ot, Mt]);
        this._composerViewsService.triggerScrollToBottom($);
        this._composerUtilsService.clearText($);
        C("error", {
          errorType: "bounce",
          errorCode: "chat_too_old"
        });
        return;
      }
      this._structuredLogService.info("composer", "Chat submission started", {
        composerId: e,
        requestId: f,
        textLength: t.length,
        hasContext: !!i?.contextOverride,
        isResume: !!i?.isResume
      });
      if (this._shouldBlockDueToMissingGit()) {
        this._structuredLogService.warn("composer", "Blocking submission: team repo blocking rules configured but Git is missing/disabled", {
          requestId: f,
          composerId: e
        });
        const Ot = {
          ...h_(),
          type: ul.HUMAN,
          text: t,
          codeBlocks: []
        };
        const cn = {
          title: "Git Required",
          message: "Your organization has configured repository access rules that require Git to be installed. Please install Git and restart Cursor to continue using the agent.",
          error: new cN({
            error: yc.CUSTOM,
            details: new Rbt({
              title: "Git Required",
              detail: "Your organization has configured repository access rules that require Git to be installed. Please install Git and restart Cursor to continue using the agent.",
              isRetryable: false
            })
          }),
          extraButtons: [{
            id: "download-git",
            label: "Download Git",
            callback: () => {
              this._commandService.executeCommand("vscode.open", je.parse("https://git-scm.com/downloads"));
            },
            variant: "secondary"
          }]
        };
        const Mt = {
          ...h_(),
          codeBlocks: [],
          type: ul.AI,
          text: "",
          errorDetails: cn
        };
        this._composerDataService.appendComposerBubbles($, [Ot, Mt]);
        this._composerViewsService.triggerScrollToBottom($);
        this._composerUtilsService.clearText($);
        C("error", {
          errorType: "bounce",
          errorCode: "git_missing"
        });
        return;
      }
      this._usageLimitPolicyStatusService.refetch();
      const Y = QZ(a) ?? "local";
      const j = !!a;
      N.setAttribute("cursor.remote.isRemote", j);
      N.setAttribute("cursor.remote.isSSH", l);
      if (a) {
        N.setAttribute("cursor.remote.authority", a);
      }
      const X = N.startSpan("localProcessingBeforeStream");
      const ee = performance.now();
      N.setAttribute("composer.id", e);
      let re = false;
      let ne = false;
      let pe = [];
      let le = false;
      const he = () => {
        if (pe.length > 0 && !le) {
          le = true;
          const Ot = performance.now() - ee;
          N.setAttribute("hang_ttft", Ot);
          this._metricsService.distribution({
            stat: "composer.submitChat.hangTtft",
            value: Ot,
            tags: {
              model: this.getModelNameForMetrics(fe, this._aiSettingsService),
              chatService: "agent",
              isWorktree: String(!!W?.gitWorktree || !!W?.pendingCreateWorktree || !!W?.worktreeStartedReadOnly)
            }
          });
        }
        for (const Ot of pe) {
          clearTimeout(Ot);
        }
        pe = [];
      };
      try {
        const Ot = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          const cn = __addDisposableResource(Ot, X.startSpan("ensureCapabilitiesAreLoaded"), false);
          const Mt = performance.now();
          await this._composerUtilsService.ensureCapabilitiesAreLoaded($);
          const Pt = performance.now() - Mt;
          console.debug(`[composer.submitChat] Time to ensure capabilities are loaded: ${Pt}ms`);
          this._metricsService.distribution({
            stat: "composer.submitChat.ensureCapabilitiesAreLoaded",
            value: Pt
          });
        } catch (cn) {
          Ot.error = cn;
          Ot.hasError = true;
        } finally {
          __disposeResources(Ot);
        }
      } catch (Ot) {
        console.error("[composer] error ensuring capabilities are loaded", Ot);
        this._structuredLogService.error("composer", "Failed to ensure capabilities are loaded", Ot instanceof Error ? Ot : undefined, {
          requestId: f,
          composerId: e,
          errorMessage: String(Ot)
        });
        C("error", {
          errorType: "bounce",
          errorCode: "capabilities_failed"
        });
        return;
      }
      this._uiOverlayService.closeReportFeedbackModal();
      const be = this._composerModesService.getComposerUnifiedMode(e);
      const fe = await this.getModelDetails(e);
      let ke = i?.modelOverride;
      const Se = this._composerDataService.getComposerData($);
      if (!ke && Se?.modelConfig?.modelName) {
        ke = Se?.modelConfig?.modelName;
      }
      let Fe = ke;
      if (ke) {
        let Ot = ke;
        if (ke.includes(",")) {
          const cn = this.extractFirstModelName(ke);
          if (cn) {
            Ot = cn;
          }
        }
        Fe = Ot;
        fe.modelName = this._aiSettingsService.getServerModelName(Ot);
        fe.maxMode = Se?.modelConfig?.maxMode;
      }
      Fe ||= Se?.modelConfig?.modelName ?? this._reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig.composer?.modelName ?? fe.modelName;
      if (z && i?.bubbleId === undefined && i?.isResume !== true) {
        const {
          agentBackend: Ot,
          applyAgentBackendTypeRestrictions: cn
        } = this.getAgentBackendForFirstSubmit({
          modelName: Fe,
          unifiedMode: be
        });
        this._composerDataService.updateComposerDataSetStore($, Mt => {
          Mt("agentBackend", Ot);
          Mt("applyAgentBackendTypeRestrictions", cn);
        });
      }
      const Pe = this.getModelNameForMetrics(fe, this._aiSettingsService);
      N.setAttribute("composer.selectedModel", Pe);
      X.setAttribute("composer.selectedModel", Pe);
      if (fe.maxMode !== undefined) {
        N.setAttribute("composer.maxMode", fe.maxMode);
      }
      A?.setModel(Pe);
      const Ne = [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 32000];
      const Oe = this._experimentService.getDynamicConfigParam("composer_hang_detection_config", "thresholds_ms") ?? Ne;
      const Ge = "agent";
      this._metricsService.increment({
        stat: "composer.submitChat.calls",
        tags: {
          model: Pe,
          chatService: Ge,
          ...(Y ? {
            remoteType: Y
          } : {})
        }
      });
      const Le = String(!!Se?.gitWorktree || !!Se?.pendingCreateWorktree || !!Se?.worktreeStartedReadOnly);
      pe = Oe.map(Ot => setTimeout(() => {
        const cn = Ot / 1000;
        this._metricsService.increment({
          stat: "composer.submitChat.hang_s",
          tags: {
            thresholdSec: String(cn),
            model: Pe,
            chatService: Ge,
            isWorktree: Le,
            ...(Y ? {
              remoteType: Y
            } : {})
          }
        });
        this._structuredLogService.warn("composer", `No first token received within ${cn}s`, {
          requestId: f,
          composerId: e,
          thresholdMs: Ot,
          chatService: Ge
        });
      }, Ot));
      i = i ?? {};
      N.setAttribute("chatService", "agent");
      this._structuredLogService.info("composer", "Composer state loaded", {
        requestId: f,
        composerId: e,
        modelName: fe.modelName,
        unifiedMode: be,
        hasContext: Object.keys(W.context).length > 0
      });
      if (!i.isAutoFollowupFromStopHook) {
        this._composerDataService.updateComposerData($, {
          stopHookLoopCount: 0
        });
      }
      if (W.gitWorktree && !(await Hwi(this._workspaceContextService, this._gitContextService))) {
        const Ot = (await HSf(this._workspaceContextService, this._gitContextService)) ?? u0a;
        this._structuredLogService.warn("composer", "Worktree feature not available, blocking submission", {
          requestId: f,
          composerId: e,
          hasWorktree: !!W.gitWorktree
        });
        this._notificationService?.notify?.({
          severity: Rs.Error,
          message: Ot
        });
        return;
      }
      N.setAttribute("composer.tokenCount", W.tokenCount);
      if (W.analyticsMetadata && !W.analyticsMetadata.isSubmitted) {
        const Ot = W.analyticsMetadata;
        switch (Ot.source) {
          case "deeplink":
            {
              this._analyticsService.trackEvent("deeplink.submitted", {
                type: "prompt",
                correlationId: Ot.correlationId,
                promptHash: Ot.promptHash,
                composerId: W.composerId,
                mode: be
              });
              break;
            }
        }
        this._composerDataService.updateComposerData($, {
          analyticsMetadata: {
            ...Ot,
            isSubmitted: true
          }
        });
      }
      if (!this.shouldSkipCapabilities(i.capabilityProcessesToSkip, "start-submit-chat")) {
        this._asyncOperationRegistry.enter(e, "capability_start_submit_chat");
        try {
          const Ot = (await this._composerUtilsService.runCapabilitiesForProcess($, "start-submit-chat", {
            composerId: e,
            submitChatProps: {
              text: t,
              extra: i
            },
            parentSpanCtx: X
          })) ?? {
            shouldStop: false,
            reason: "No result"
          };
          if (Ot.shouldStop) {
            this._structuredLogService.info("composer", "Capabilities stopped submission at start-submit-chat", {
              requestId: f,
              composerId: e,
              reason: Ot.reason
            });
            return;
          }
        } catch (Ot) {
          console.error("[composer] error running capabilities for start-submit-chat", Ot);
          this._structuredLogService.error("composer", "Error in start-submit-chat capability", Ot instanceof Error ? Ot : undefined, {
            requestId: f,
            composerId: e,
            errorMessage: String(Ot)
          });
          this._composerDataService.updateComposerDataSetStore($, cn => cn("status", "aborted"));
          if (this.isTurnCancellation(Ot)) {
            C("cancelled");
          } else {
            C("error", this.classifyTurnError(Ot));
          }
          return;
        } finally {
          this._asyncOperationRegistry.exit(e, "capability_start_submit_chat");
        }
      }
      const We = N.startSpan("generating");
      We.setAttribute("composer.selectedModel", Pe);
      this._composerDataService.updateComposerDataSetStore($, Ot => {
        Ot("status", "generating");
        Ot("generatingBubbleIds", []);
        Ot("lastUpdatedAt", Date.now());
      });
      const tt = this._composerDataService.getToolFormer($);
      const it = tt ? Object.values(tt.pendingDecisions().pendingDecisions).some(Ot => Ot.blocking && Ot.clientSideTool === an.ASK_QUESTION) : false;
      const bt = $.data.chatGenerationUUID;
      if (!it) {
        this._composerDataService.updateComposerDataSetStore($, Ot => {
          Ot("chatGenerationUUID", f);
          Ot("latestChatGenerationUUID", f);
        });
      }
      if (!it && $.data.conversationActionManager !== undefined) {
        const Ot = {
          activeRequestId: bt,
          nextRequestId: f,
          hasPendingQuestionnaire: it
        };
        this.logClientStreamAbort({
          composerId: e,
          requestId: bt,
          source: "submit_chat_abort_existing",
          metadata: Ot
        });
        $.data.conversationActionManager.abort("new_message_submitted");
      }
      const Nt = this._abortControllerFactory.create("composer", {
        composerId: e,
        requestId: f,
        context: "submitChatMaybeAbortCurrent"
      }, this.getAbortControllerSamplingRate());
      let ft = false;
      let _t = false;
      let It = false;
      let sn = false;
      let Vt;
      let Ft;
      let Xt;
      if (!W.createdFromBackgroundAgent?.bcId) {
        Xt = new $Sf($, this._powerMainService, this._logService);
      }
      let St;
      const Bt = () => {
        if (St) {
          this.submitChatMaybeAbortCurrent(e, t, {
            ...i,
            bubbleId: St.bubbleId
          });
        }
      };
      const Jt = Ot => {
        const cn = Ot instanceof V$e ? Ot.displayInfo : undefined;
        const Mt = Ot instanceof fA ? Ot : undefined;
        const Pt = Mt ? BU(Mt) : undefined;
        const ut = Mt ? this._aiErrorService.shouldShowImmediateErrorMessage(Mt) : true;
        const ot = $ ? this._composerDataService.getComposerData($) : undefined;
        if (!ut || !ot || !$) {
          console.log("[composer.maybeThrowErrorAndRetry] not showing error inline", {
            reason: ut ? ot ? "no composerHandle" : "no composer" : "shouldShowError=false"
          });
          return;
        }
        const Lt = cn?.errorDetails ?? Pt;
        const Gt = cn?.connectCode ?? Mt?.code;
        const jt = cn?.detail;
        const hn = cn?.isRetryable ?? Lt?.details?.isRetryable ?? true;
        const on = (Mt?.code !== undefined ? `${Mt?.rawMessage} [${Thn(Mt.code)}]` : Mt?.rawMessage) ?? (Ot instanceof Error ? Ot.message : "Internal Client Error");
        const en = this._composerDataService.getLastAiBubbles($).some(kt => (kt.text.length ?? 0) > 0) && !i.isResume;
        const gt = $.clone();
        const At = () => {
          try {
            this.resumeChat(gt, i);
          } catch (kt) {
            this._notificationService.warn(kt instanceof Error ? kt.message : "Cannot resume");
          } finally {
            if (!gt.isDisposed) {
              gt.dispose();
            }
          }
        };
        const Tt = {
          requestId: f,
          error: Lt,
          message: jt,
          stackTrace: [on, Ot instanceof Error ? Ot.stack : undefined].filter(Boolean).join(`
`),
          connectCode: Gt,
          extraButtons: hn ? [{
            id: "resume",
            label: en ? "Resume" : "Try again",
            callback: At,
            variant: "secondary"
          }] : []
        };
        if (this._workbenchEnvironmentService.isGlass) {
          if (St === undefined || this._composerDataService.getLastHumanBubbleId($) !== St.bubbleId) {
            return;
          }
          const xt = St;
          const un = this._composerDataService.getLoadedConversation($);
          const nn = un.findIndex(Si => Si.bubbleId === xt.bubbleId);
          const Dn = nn !== -1 && un.slice(nn + 1).some(Si => Si.type === ul.AI);
          const Bn = xt.text;
          const Vn = xt.richText;
          const Xn = mL(xt.context || sR());
          this.stopChat($);
          this._composerDataService.deleteComposerBubbles($, [xt.bubbleId]);
          if (z && !Dn) {
            const Si = {
              ...Tt,
              extraButtons: []
            };
            this._commandService.executeCommand("glass.abortAgentAndRestoreQuery", {
              agentId: e,
              query: Bn,
              richText: Vn
            });
            this._restoreSubmitErrorToEmptyStateDraft(Bn, Vn, Si, Xn);
            return;
          }
          if (!xt.isPlanExecution) {
            this._composerDataService.updateComposerData($, {
              text: Bn,
              richText: Vn,
              context: Xn
            });
          }
          this._composerEventService.fireShouldForceText({
            composerId: e
          });
          this._composerViewsService.focus(e, true);
          this._composerDataService.updateComposerDataSetStore($, Si => Si("conversationState", xt.conversationState));
          this._composerDataService.updateComposerDataSetStore($, Si => Si("_skipCheckpointUpdate", true));
          this._composerDataService.updateComposerDataSetStore($, Si => Si("submitErrorDetails", Tt));
          return;
        }
        const Yt = {
          ...h_(),
          codeBlocks: [],
          type: ul.AI,
          text: "",
          errorDetails: Tt
        };
        this._composerDataService.appendComposerBubbles($, [Yt]);
        this._composerViewsService.triggerScrollToBottom($);
        this._composerMessageStorageService.storeMessage(e, Yt);
        this._composerUtilsService.clearText($);
      };
      try {
        const Ot = X.startSpan("loadConversation");
        if (i.bubbleId) {
          await this._composerDataService.loadConversationFromBubble($, i.bubbleId);
        }
        const cn = this._composerDataService.getLoadedConversation($);
        Ot.end();
        const Mt = X.startSpan("setupConversationState");
        {
          const Dn = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            const Bn = __addDisposableResource(Dn, Mt.startSpan("clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages"), false);
            this._composerUtilsService.clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages($);
            this._composerDataService.updateComposerDataSetStore($, Vn => Vn("submitErrorDetails", undefined));
          } catch (Bn) {
            Dn.error = Bn;
            Dn.hasError = true;
          } finally {
            __disposeResources(Dn);
          }
        }
        Mt.startSpan("getFilteredAndSortedCapabilities").end();
        const ut = !i.isResume && !i.skipClearInput && !i.bubbleId;
        let ot = W.conversationState;
        let Lt;
        if (i.shouldCheckout && i.bubbleId) {
          const Dn = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            const Bn = __addDisposableResource(Dn, Mt.startSpan("createCheckoutCallback"), false);
            Lt = await this._composerCheckpointService.createCheckoutCallback($, i.bubbleId, {
              fromSubmitChat: true,
              checkpointValidation: i.checkpointValidation
            });
          } catch (Bn) {
            Dn.error = Bn;
            Dn.hasError = true;
          } finally {
            __disposeResources(Dn);
          }
        }
        this._composerDataService.updateComposerDataSetStore($, Dn => {
          Dn("currentBubbleId", undefined);
          Dn("latestCheckpointId", undefined);
        });
        if (i.bubbleId) {
          const Dn = i.bubbleId;
          const Bn = this._composerDataService.getComposerBubbleUntracked($, Dn);
          const Vn = W.fullConversationHeadersOnly.findIndex(Ni => Ni.bubbleId === Dn);
          if (!Bn) {
            throw Error("[composer] current bubble is undefined");
          }
          if (Bn.type !== ul.HUMAN) {
            throw Error("[composer] cannot resubmit from non-human bubble");
          }
          St = Bn;
          ot = Bn.conversationState;
          const Xn = Vn !== -1 ? W.fullConversationHeadersOnly[Vn + 1]?.bubbleId : undefined;
          if (Xn) {
            this._composerUtilsService.removeMessagesAfterBubble($, Xn);
          }
          if (i.pendingServiceStatusUpdate) {
            const Ni = {
              ...h_(),
              type: ul.AI,
              text: "",
              createdAt: new Date().toISOString(),
              serviceStatusUpdate: i.pendingServiceStatusUpdate
            };
            await this._composerDataService.appendComposerBubbles($, [Ni]);
          }
          this._composerDataService.updateComposerDataSetStore($, Ni => Ni("conversationState", Bn.conversationState));
          const hi = cn.findIndex(Ni => Ni.bubbleId === Dn);
          const Si = hi !== -1 ? cn.slice(0, hi) : [];
          let Xi = [];
          for (let Ni = Si.length - 1; Ni >= 0; Ni--) {
            const Ii = Si[Ni];
            if (Ii && Ii.todos && Ii.todos.length > 0) {
              Xi = Ii.todos.map(Ar => new QB(Ar));
              break;
            }
          }
          let Ji;
          for (let Ni = 0; Ni < Si.length; Ni++) {
            const Ii = Si[Ni];
            if (Ii && Ii.toolFormerData && Ii.toolFormerData.tool === an.TODO_WRITE && Ii.todos && Ii.todos.length > 0) {
              Ji = Ii.bubbleId;
              break;
            }
          }
          if (i.isPlanExecution) {
            const Ni = W.todos ?? [];
            if (Ni.length > 0) {
              Xi = Ni.map(Ii => new QB(Ii));
            }
            Ji = Ji ?? W.firstTodoWriteBubble;
          }
          this._composerDataService.updateComposerData($, {
            todos: Xi,
            firstTodoWriteBubble: Ji
          });
          const qr = Bn.contextWindowStatusAtCreation;
          if (qr) {
            this._composerDataService.updateComposerData($, {
              contextUsagePercent: qr.percentageRemainingFloat !== undefined ? 100 - qr.percentageRemainingFloat : 100 - qr.percentageRemaining,
              contextTokensUsed: qr.tokensUsed,
              contextTokenLimit: qr.tokenLimit
            });
          }
        } else if (i?.isResume) {
          St = this._composerDataService.getLastHumanBubble($);
          if (!St) {
            throw new Error("No human message found for resume");
          }
        } else {
          let Dn = Fwi.getContextWindowStatus(e, this._composerDataService);
          let Bn;
          if (Dn !== undefined) {
            const {
              percentageRemaining: Xn,
              tokensUsed: hi,
              tokenLimit: Si
            } = Dn;
            Bn = {
              percentageRemaining: Math.floor(Xn),
              percentageRemainingFloat: Xn,
              tokensUsed: hi,
              tokenLimit: Si
            };
          }
          const Vn = h_();
          St = {
            ...Vn,
            bubbleId: i.forceBubbleId ?? Vn.bubbleId,
            richText: i.richText ?? t,
            text: t,
            context: i.contextOverride ?? mL(W.context),
            tokenDetailsUpUntilHere: W.tokenDetails,
            tokenCountUpUntilHere: W.tokenCount,
            requestId: f,
            modelInfo: {
              modelName: fe.modelName ?? ""
            },
            createdAt: new Date().toISOString(),
            contextWindowStatusAtCreation: Bn,
            isPlanExecution: i.isPlanExecution ?? false,
            planUri: i.planUri,
            conversationState: ot,
            capabilityType: i.forceSummarization ? ko.SUMMARIZATION : undefined
          };
          this._composerDataService.appendComposerBubbles($, [St]);
          this.composerContextService.removeNonPersistentContext($);
          if (ut) {
            this._composerUtilsService.clearText($);
          }
          this._composerDataService.updateComposerData($, {
            isDraft: false
          });
        }
        if (this._experimentService.checkFeatureGate("stricter_in_memory_virtualization")) {
          this._composerDataService.unloadComposerBubblesBeforeBubble($, St.bubbleId);
        }
        this._composerViewsService.triggerScrollToBottom($);
        const Gt = performance.now() - ee;
        console.debug(`[composer.submitChat] Time between function start and adding human message: ${Gt}ms`);
        this._metricsService.distribution({
          stat: "composer.submitChat.timeToAddHumanBubble",
          value: Gt
        });
        Mt.end();
        const jt = async () => {
          if (!(await Hwi(this._workspaceContextService, this._gitContextService))) {
            const Dn = (await HSf(this._workspaceContextService, this._gitContextService)) ?? u0a;
            this._notificationService?.notify?.({
              severity: Rs.Error,
              message: Dn
            });
            return false;
          }
          return true;
        };
        const hn = async Dn => {
          const Vn = this._workspaceContextService.getWorkspace().folders[0];
          let Xn;
          if (Vn) {
            const Ii = Vn.uri.scheme !== _n.file;
            Xn = vSe(Vn.uri, true, Ii);
          }
          const {
            ensureWorktreeSetupAndRun: hi
          } = await Promise.resolve().then(() => {
            Sty();
            return GSf;
          });
          const Si = je.joinPath(je.file(Dn), ".cursor", "worktrees.json");
          const Xi = Xn ? je.joinPath(je.file(Xn), ".cursor", "worktrees.json") : undefined;
          const Ji = await this._composerFileService.exists({
            uri: Si,
            composerData: undefined
          });
          const qr = Xi ? await this._composerFileService.exists({
            uri: Xi,
            composerData: undefined
          }) : false;
          if (!Ji && !qr) {
            const Ii = this.worktreeSetupWarningShownCount.get();
            const Ar = this.hideWorktreeSetupWarning.get();
            if (Ii < 3 && !Ar) {
              if (W.isBestOfNSubcomposer !== true) {
                this.worktreeSetupWarningShownCount.set(Ii + 1, undefined, undefined);
              }
              re = true;
            }
          }
          await hi({
            composerId: e,
            worktreePath: Dn,
            rootWorkspacePath: Xn ?? Dn,
            terminalExecutionService: this._terminalExecutionService,
            composerFileService: this._composerFileService,
            remoteAgentService: this._remoteAgentService,
            outputService: this._outputService
          });
        };
        let on;
        if (i.createWorktreeForAgent && W.unifiedMode !== "chat") {
          if (!(await jt())) {
            return;
          }
          this._structuredLogService.info("composer", "Preparing worktree for agent", {
            requestId: f,
            composerId: e
          });
          const Dn = await this._gitContextService.generateWorktreePath();
          if (!Dn) {
            this._structuredLogService.error("composer", "Failed to generate worktree path", undefined, {
              requestId: f,
              composerId: e
            });
            return;
          }
          on = {
            worktreePath: Dn,
            worktreeLockLease: i.worktreeLockLease,
            baseBranch: W.pendingCreateWorktreeBaseBranchName,
            excludeDirtyFiles: W.pendingCreateWorktreeExcludeDirtyFiles
          };
          this._composerDataService.updateComposerDataSetStore($, Bn => Bn("gitWorktree", {
            worktreePath: Dn,
            commitHash: "",
            branchName: undefined
          }));
        }
        this._detachReservedWorktreeAfterNewIteration($);
        if (Lt) {
          const Dn = X.startSpan("checkout");
          await Lt();
          Dn.end();
          this._composerViewsService.triggerScrollToBottom($);
        }
        if (!i.skipFocusAfterSubmission) {
          this._composerViewsService.focus(e, true);
        }
        if (!i.isResume) {
          this._composerCheckpointService.updateComposerBubbleCheckpoint($.composerId, St.bubbleId);
          if (W.fullConversationHeadersOnly.length === 1 && W.name) {
            this._composerDataService.updateComposerDataSetStore($, Bn => Bn("name", undefined));
            if (this.shouldRenameComposer($, St.bubbleId)) {
              this.renameComposer($).catch(Bn => console.error("[composer] Error in early tab rename on resubmit:", Bn));
            }
          } else if (this.shouldRenameComposer($)) {
            this.renameComposer($).catch(Bn => console.error("[composer] Error in early tab rename:", Bn));
          }
        }
        const en = performance.now() - ee;
        console.debug(`[composer.submitChat] Time between function start and handling context / checkpoints: ${en}ms`);
        this._metricsService.distribution({
          stat: "composer.submitChat.timeToHandleContextAndCheckpoints",
          value: en
        });
        if (!this.shouldSkipCapabilities(i.capabilityProcessesToSkip, "before-submit-chat")) {
          this._asyncOperationRegistry.enter(e, "capability_before_submit_chat");
          try {
            if (await this._composerUtilsService.runCapabilitiesForProcess($, "before-submit-chat", {
              composerId: e,
              humanBubbleId: St.bubbleId,
              submitChatProps: {
                text: t,
                extra: i
              },
              parentSpanCtx: X
            })) {
              _t = true;
              It = true;
              return;
            }
          } catch (Dn) {
            console.error("[composer] error running capabilities for before-submit-chat", Dn);
            this._structuredLogService.error("composer", "Error in before-submit-chat capability", Dn instanceof Error ? Dn : undefined, {
              requestId: f,
              composerId: e,
              errorMessage: String(Dn),
              isConnectError: Dn instanceof fA
            });
            const Bn = Nt.getReason();
            if (this.isTurnCancellation(Dn, Bn)) {
              sn = true;
              C("cancelled");
            } else {
              ft = true;
              C("error", this.classifyTurnError(Dn));
            }
            if (it && $.data.conversationActionManager !== undefined) {
              const Xn = $.data.chatGenerationUUID;
              const hi = {
                activeRequestId: Xn,
                hasPendingQuestionnaire: it,
                errorType: Dn instanceof Error ? Dn.name : typeof Dn
              };
              this.logClientStreamAbort({
                composerId: e,
                requestId: Xn,
                source: "before_submit_chat_error_abort",
                metadata: hi
              });
              $.data.conversationActionManager.abort("before_submit_chat_error");
            }
            if (Dn instanceof fA) {
              Jt(Dn);
              this.handleAbortChat($, St.bubbleId);
            }
            return;
          } finally {
            this._asyncOperationRegistry.exit(e, "capability_before_submit_chat");
          }
        }
        if (it && $.data.conversationActionManager !== undefined) {
          const Dn = $.data.chatGenerationUUID;
          const Bn = {
            activeRequestId: Dn,
            hasPendingQuestionnaire: it
          };
          this.logClientStreamAbort({
            composerId: e,
            requestId: Dn,
            source: "before_submit_chat_deferred_abort",
            metadata: Bn
          });
          $.data.conversationActionManager.abort("before_submit_chat_deferred");
        }
        if (on) {
          const Dn = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            const Bn = __addDisposableResource(Dn, X.startSpan("worktreeCreation"), false);
            this._structuredLogService.info("composer", "Creating worktree for agent", {
              requestId: f,
              composerId: e,
              worktreePath: on.worktreePath
            });
            const Vn = await this._composerDataService.createWorktree($, on.worktreeLockLease, on.baseBranch, on.worktreePath, on.excludeDirtyFiles);
            if (!Vn) {
              this._structuredLogService.error("composer", "Failed to create Git worktree", undefined, {
                requestId: f,
                composerId: e,
                worktreePath: on.worktreePath
              });
              this._composerDataService.updateComposerDataSetStore($, Xn => Xn("gitWorktree", undefined));
              return;
            }
            this._structuredLogService.info("composer", "Created worktree successfully", {
              requestId: f,
              composerId: e,
              worktreePath: Vn.worktreePath
            });
            this._analyticsService.trackEvent("git_worktree.create");
            if (Vn.worktreePath) {
              const Xn = {
                stack: [],
                error: undefined,
                hasError: false
              };
              try {
                const hi = __addDisposableResource(Xn, X.startSpan("handleWorktreeSetup"), false);
                await hn(Vn.worktreePath);
              } catch (hi) {
                Xn.error = hi;
                Xn.hasError = true;
              } finally {
                __disposeResources(Xn);
              }
            }
          } catch (Bn) {
            Dn.error = Bn;
            Dn.hasError = true;
          } finally {
            __disposeResources(Dn);
          }
        }
        const gt = performance.now();
        const At = X.startSpan("abortChatAndWaitForFinish");
        const Tt = bt === undefined && $.data.conversationActionManager !== undefined;
        const ze = this._experimentService.checkFeatureGate("fire_and_forget_abort") && !Tt;
        const Yt = bt;
        if (ze) {
          this._structuredLogService.info("composer", "Aborting current chat (fire-and-forget)", {
            requestId: f,
            composerId: e
          });
          this.abortChatAndWaitForFinish($, Yt).then(() => {
            const Bn = performance.now() - gt;
            this._structuredLogService.info("composer", "Abort cleanup completed (background)", {
              requestId: f,
              composerId: e,
              abortTimeMs: Bn
            });
            this._metricsService.distribution({
              stat: "composer.submitChat.abortChatAndWaitForFinish",
              value: Bn,
              tags: {
                async: "true"
              }
            });
          }).catch(Bn => {
            this._structuredLogService.error("composer", "Abort cleanup failed (background)", Bn instanceof Error ? Bn : undefined, {
              requestId: f,
              composerId: e,
              error: String(Bn)
            });
          });
          At.end();
          const Dn = performance.now() - gt;
          this._metricsService.distribution({
            stat: "composer.submitChat.abortSignalTime",
            value: Dn
          });
        } else {
          this._structuredLogService.info("composer", "Aborting current chat", {
            requestId: f,
            composerId: e
          });
          await this.abortChatAndWaitForFinish($, Yt);
          At.end();
          const Dn = performance.now() - gt;
          this._structuredLogService.info("composer", "Aborted current chat", {
            requestId: f,
            composerId: e,
            abortTimeMs: Dn
          });
          this._metricsService.distribution({
            stat: "composer.submitChat.abortChatAndWaitForFinish",
            value: Dn
          });
          if (i.bubbleId === undefined) {
            const Bn = this._composerDataService.getComposerData($);
            if (Bn) {
              ot = Bn.conversationState;
              this._composerDataService.updateComposerBubbleSetStore($, St.bubbleId, Vn => Vn("conversationState", ot));
            }
          }
        }
        const kt = X.startSpan("aiService");
        const [xt, un] = this._aiService.registerNewGeneration({
          generationUUID: f,
          metadata: {
            type: "composer",
            textDescription: t,
            isNAL: true
          },
          rerunQuery: Bt
        });
        Vt = un;
        const nn = () => {
          const Dn = un.signal.reason;
          if (typeof Dn == "string") {
            return Dn;
          } else {
            return Nt.getReason();
          }
        };
        Ft = new jpn(e, un, this._instantiationService, f);
        this._composerDataService.updateComposerDataSetStore($, Dn => Dn("conversationActionManager", Ft));
        kt.end();
        try {
          try {
            if (this._cursorHooksService.hasHookForStep(df.beforeSubmitPrompt)) {
              const Ji = await smu([], undefined, this._cursorRulesService);
              const qr = await this._cursorHooksService.executeHookForStep(df.beforeSubmitPrompt, {
                conversation_id: e,
                generation_id: f,
                model: W.modelConfig?.modelName ?? fe.modelName ?? "",
                prompt: t,
                attachments: Ji
              });
              if (qr && qr.continue === false) {
                const Ni = qr.user_message ?? "A beforeSubmitPrompt hook blocked this submission.";
                this._structuredLogService.warn("composer", "beforeSubmitPrompt hook blocked submission", {
                  requestId: f,
                  composerId: e,
                  userMessage: qr.user_message
                });
                this._composerDataService.appendComposerBubbles($, [{
                  ...h_(),
                  type: ul.AI,
                  text: Ni,
                  errorDetails: {
                    requestId: f,
                    error: new cN({
                      error: yc.HOOKS_BLOCKED,
                      details: {
                        title: "Submission blocked by hook",
                        detail: Ni
                      }
                    }),
                    message: Ni
                  }
                }]);
                this._composerViewsService.triggerScrollToBottom($);
                this.handleAbortChat($, St.bubbleId);
                _t = true;
                It = true;
                return;
              }
            }
          } catch (Ji) {
            console.error("[composer] error executing beforeSubmitPrompt hook", Ji);
          }
          const Bn = ($.data.agentBackend ?? "cursor-agent") !== "cursor-agent";
          this._structuredLogService.info("composer", "Starting stream request", {
            requestId: f,
            composerId: e,
            useAgentProviderRouter: Bn,
            modelName: fe.modelName,
            conversationLength: $.data.fullConversationHeadersOnly.length
          });
          const Vn = this._buildAgentRequestHeaders();
          let Xn;
          let hi;
          const Si = () => {
            if (ne) {
              return;
            }
            ne = true;
            he();
            const Ji = performance.now() - ee;
            A?.setTtftMs(Ji);
            this._structuredLogService.info("composer", "Received first token", {
              requestId: f,
              composerId: e,
              timeToFirstTokenMs: Ji
            });
            this._metricsService.distribution({
              stat: "composer.submitChat.ttftActual",
              value: Ji,
              tags: {
                model: this.getModelNameForMetrics(fe, this._aiSettingsService),
                chatService: "agent",
                ...(hi ? {
                  region: hi
                } : {})
              }
            });
            We?.end();
          };
          const Xi = Ji => {
            const qr = Ji.get("x-cursor-server-region");
            if (qr) {
              hi = qr;
              if (We) {
                We.setAttribute("server.region", qr);
              }
            }
          };
          if (Bn) {
            if (!this.isModelCompatibleWithClaudeCodeBackend(Fe)) {
              throw new XZg(fe.modelName ?? "unknown");
            }
            X.end();
            this._structuredLogService.info("composer", "Using agent provider router backend", {
              requestId: f,
              composerId: e
            });
            const Ji = this.convertCtxToContext(N) ?? O_a(TC(), this._structuredLogService, this._metricsService);
            let qr = this._composerAgentProviderRouter.getAgentHandle(e);
            qr ||= this._composerAgentProviderRouter.createAgentHandle(e, $);
            const Ni = (W.fullConversationHeadersOnly ?? []).filter(Pi => Pi.type === ul.HUMAN);
            const Ii = Ni.length >= 2 ? Ni[Ni.length - 2]?.bubbleId : undefined;
            const Ar = St?.context?.selectedImages ?? [];
            const er = [];
            for (const Pi of Ar) {
              try {
                const gi = je.file(Pi.path);
                const _i = await this._composerFileService.readFile({
                  uri: gi,
                  composerData: W
                });
                const Wi = new Uint8Array(_i.value.buffer);
                let Kr = "image/png";
                if (Wi[0] === 255 && Wi[1] === 216 && Wi[2] === 255) {
                  Kr = "image/jpeg";
                } else if (Wi[0] === 137 && Wi[1] === 80 && Wi[2] === 78 && Wi[3] === 71) {
                  Kr = "image/png";
                } else if (Wi[0] === 71 && Wi[1] === 73 && Wi[2] === 70 && Wi[3] === 56) {
                  Kr = "image/gif";
                } else if (Wi[0] === 82 && Wi[1] === 73 && Wi[2] === 70 && Wi[3] === 70 && Wi[8] === 87 && Wi[9] === 69 && Wi[10] === 66 && Wi[11] === 80) {
                  Kr = "image/webp";
                }
                const rr = VN(Ms.wrap(Wi));
                const Ys = `data:${Kr};base64,${rr}`;
                er.push({
                  data: Ys,
                  mediaType: Kr
                });
              } catch (gi) {
                console.error("[composer] Failed to read image for agent:", Pi.path, gi);
              }
            }
            const Sr = St?.context?.cursorCommands ?? [];
            const Es = [];
            for (const Pi of Sr) {
              let gi = Pi.content;
              if (!gi || gi.trim().length === 0) {
                gi = (await this._cursorCommandsService.getCommand(Pi.filename))?.content;
              }
              if (gi && gi.trim().length > 0) {
                Es.push({
                  filename: Pi.filename,
                  content: gi
                });
              }
            }
            Xn = qr.run(Ji, {
              modelDetails: fe,
              generationUUID: f,
              abortController: Nt,
              startTime: ee,
              message: t,
              userBubbleId: St.bubbleId,
              previousUserBubbleId: Ii,
              images: er.length > 0 ? er : undefined,
              cursorCommands: Es.length > 0 ? Es : undefined
            });
          } else {
            X.end();
            this._structuredLogService.info("composer", "Using agent backend", {
              requestId: f,
              composerId: e
            });
            const Ji = this.convertCtxToContext(N) ?? O_a(TC(), this._structuredLogService, this._metricsService);
            Xn = this._composerAgentService.getAgentStreamResponse(Ji, {
              modelDetails: fe,
              generationUUID: f,
              composerHandle: $,
              abortController: Nt,
              startTime: ee,
              headers: Vn,
              prewarmedStream: I,
              conversationState: ot,
              onFirstToken: Si,
              onHeader: Xi,
              onConnectionStateChange: qr => {
                this._composerDataService.updateComposerDataSetStore($, Ni => Ni("connectionState", qr.state));
              },
              conversationActionOverride: i.conversationActionOverride
            });
          }
          await Xn;
          this._structuredLogService.info("composer", "Stream completed successfully", {
            requestId: f,
            composerId: e,
            totalTimeMs: performance.now() - ee
          });
          _t = true;
          this._recentlyResumedComposerIds.delete(e);
        } catch (Dn) {
          const Bn = nn();
          if (this.isTurnCancellation(Dn, Bn)) {
            sn = true;
            C("cancelled");
            return;
          }
          if (W.status !== "generating" || W.chatGenerationUUID !== f) {
            return;
          }
          const Vn = Dn instanceof fA ? BU(Dn) : undefined;
          if (Dn instanceof fA && Dn.code === j0.Canceled) {
            this._structuredLogService.info("composer", "Stream canceled", {
              requestId: f,
              composerId: e
            });
          } else {
            console.error("[composer] Error in AI response:", JSON.stringify(Vn), Dn);
            const hi = Dn;
            this._structuredLogService.error("composer", "Error in AI response", Dn instanceof Error ? Dn : undefined, {
              requestId: f,
              composerId: e,
              errorMessage: String(Dn),
              errorCode: Dn instanceof fA ? j0[Dn.code] : undefined,
              errorType: Vn?.error !== undefined ? yc[Vn.error] : undefined,
              isRetryable: Vn?.details?.isRetryable,
              causeCode: hi.cause?.code,
              causeSyscall: hi.cause?.syscall,
              causeErrno: String(hi.cause?.errno),
              isConnectError: String(Dn instanceof fA)
            });
          }
          if (!this._recentlyResumedComposerIds.has(e) && !Nt.signal.aborted && Dn instanceof fA && Vn && Vn.error === yc.TIMEOUT) {
            this._structuredLogService.info("composer", "Auto-resuming chat after timeout", {
              requestId: f,
              composerId: e
            });
            this._recentlyResumedComposerIds.add(e);
            try {
              this.resumeChat($, {
                ...i,
                isAutoResume: true,
                _internalTurnTracker: A
              });
              w = false;
              return;
            } catch (hi) {
              console.error("[composer] Error during auto-resume of chat:", hi);
            }
          }
          this._recentlyResumedComposerIds.delete(e);
          C("error", this.classifyTurnError(Dn));
          ft = true;
          It = true;
          if ($) {
            this._composerCodeBlockService.setGeneratingCodeBlocksToAborted($);
            this._composerDataService.setLoadingToolFormerToolsToCancelled($);
          }
          Jt(Dn);
          if (Dn instanceof fA) {
            const hi = BU(Dn);
            const Si = hi?.details?.isRetryable ?? undefined;
            const Xi = Dn.code !== undefined ? Thn(Dn.code) : undefined;
            const Ji = this.getModelNameForMetrics(fe, this._aiSettingsService);
            const qr = hi?.error === yc.OPENAI_RATE_LIMIT_EXCEEDED || hi?.error === yc.PRO_USER_RATE_LIMIT_EXCEEDED || hi?.error === yc.FREE_USER_RATE_LIMIT_EXCEEDED || hi?.error === yc.API_KEY_RATE_LIMIT || hi?.error === yc.GPT_4_VISION_PREVIEW_RATE_LIMIT;
            if (hi?.error !== undefined) {
              try {
                this._analyticsService.trackEvent("composer.agent_trajectory_stopped", {
                  composerId: e,
                  invocationID: f,
                  stop_category: "provider_error",
                  stop_source: "other",
                  reason_code: "error.provider",
                  error_code: Xi,
                  error_is_retryable: Si,
                  provider_error: yc[hi.error] ?? "UNKNOWN",
                  provider_rate_limited: qr,
                  model: Ji
                });
              } catch {}
              this._analyticsService.trackEvent("composer.error.provider", {
                error: yc[hi.error] ?? "UNKNOWN",
                code: Xi,
                isRetryable: Si,
                rateLimited: qr,
                model: Ji
              });
            } else {
              try {
                this._analyticsService.trackEvent("composer.agent_trajectory_stopped", {
                  composerId: e,
                  invocationID: f,
                  stop_category: "connection_error",
                  stop_source: "other",
                  reason_code: "error.connection",
                  error_code: Xi,
                  error_is_retryable: Si,
                  model: Ji
                });
              } catch {}
              this._analyticsService.trackEvent("composer.error.connection", {
                code: Xi,
                isRetryable: Si,
                model: Ji
              });
            }
          }
        }
      } catch (Ot) {
        const cn = Vt?.signal?.reason;
        const Mt = (typeof cn == "string" ? cn : undefined) ?? Nt.getReason();
        if (this.isTurnCancellation(Ot, Mt)) {
          sn = true;
          C("cancelled");
        } else {
          ft = true;
          C("error", this.classifyTurnError(Ot));
        }
        console.error("[composer] submitChatMaybeAbortCurrent errored!", Ot);
        this._structuredLogService.error("composer", "submitChatMaybeAbortCurrent outer error", Ot instanceof Error ? Ot : undefined, {
          requestId: f,
          composerId: e,
          errorMessage: String(Ot)
        });
      } finally {
        this._aiService.removeInprogressAIGeneration(f);
        Xt?.dispose();
        Xt = undefined;
        he();
        const Ot = performance.now();
        const cn = Nt.signal.aborted || W?.status === "aborted" || sn;
        if (cn && !ne) {
          this._metricsService.increment({
            stat: "composer.submitChat.hang_abort",
            tags: {
              model: this.getModelNameForMetrics(fe, this._aiSettingsService),
              chatService: "agent",
              isWorktree: String(!!W?.gitWorktree || !!W?.pendingCreateWorktree || !!W?.worktreeStartedReadOnly),
              ...(Y ? {
                remoteType: Y
              } : {})
            }
          });
          this._structuredLogService.info("composer", "Request aborted before first token", {
            requestId: f,
            composerId: e,
            elapsedMs: performance.now() - ee,
            chatService: "agent"
          });
        }
        if (ft && !cn && W.chatGenerationUUID === f) {
          this.stopChat($);
        }
        if (!this._skipHandleAbortChat.has(f)) {
          if (wb(this._storageService, "autoFormatOnAgentFinish") ?? false) {
            const hn = new Set();
            const on = W.fullConversationHeadersOnly;
            for (let en = on.length - 1; en >= 0; en--) {
              const gt = on[en];
              if (gt.type === ul.HUMAN) {
                break;
              }
              const At = W.conversationMap[gt.bubbleId];
              if (At?.toolFormerData) {
                const Tt = At.toolFormerData.tool;
                if (Tt === an.EDIT_FILE || Tt === an.EDIT_FILE_V2) {
                  const ze = At.toolFormerData.params;
                  if (ze?.relativeWorkspacePath) {
                    hn.add(ze.relativeWorkspacePath);
                  }
                }
              }
            }
            if (hn.size > 0) {
              const en = await this._pathService.userHome();
              const gt = lV(en);
              const At = [];
              for (const Tt of hn) {
                const ze = x$e(Tt, this._workspaceContextService, W);
                if (ze && !Rq(ze, gt)) {
                  At.push(ze);
                }
              }
              if (At.length > 0) {
                await this._composerFileService.saveFiles({
                  uris: At,
                  composerData: W,
                  options: {
                    ignoreModifiedSince: true,
                    force: true
                  }
                });
              }
            }
          }
          if (cn) {
            this.triggerStopHook($, "aborted");
          } else if (_t && !ft && (It || W?.status === "completed")) {
            this._composerDataService.setLoadingToolFormerToolsToCancelled($);
            const hn = this._workbenchEnvironmentService.isGlass ? this._glassActiveAgentService.getActiveAgentId() : undefined;
            const on = this._workbenchEnvironmentService.isGlass && hn === e;
            const en = this._composerViewsService.isShowing(e) && e === this._composerDataService.selectedComposerId;
            if (this._workbenchEnvironmentService.isGlass ? !on : !en) {
              this._composerDataService.updateComposerDataSetStore($, At => {
                At("hasUnreadMessages", true);
              });
            }
            try {
              if (this._cursorHooksService.hasHookForStep(df.afterAgentResponse)) {
                const Tt = this._composerDataService.getLastAiBubble($)?.text ?? "";
                await this._cursorHooksService.executeHookForStep(df.afterAgentResponse, {
                  conversation_id: e,
                  generation_id: f,
                  model: W.modelConfig?.modelName ?? "",
                  text: Tt
                });
              }
            } catch (At) {
              console.error("[composer] error executing afterAgentResponse hook", At);
            }
            this.triggerStopHook($, "completed");
            if (re && (await this.appendWorktreeSetupNotificationMessage($), W.isBestOfNSubcomposer === true)) {
              const At = this._composerDataService.getRootHandle($);
              if (At && At.composerId !== e) {
                await this.appendWorktreeSetupNotificationMessage(At);
              }
            }
          } else if (ft) {
            this.triggerStopHook($, "error");
          }
        }
        const Mt = [];
        const ut = this._composerCodeBlockService.getAllInlineDiffs($).filter(Gt => Gt.composerMetadata?.composerGenerationID === f);
        for (const Gt of ut) {
          const jt = this._inlineDiffService.diffInfos.find(on => on.diffId === Gt.id);
          const hn = {
            uri: Gt.uri,
            composerId: e,
            codeblockId: Gt.composerMetadata?.codeblockId,
            generationUUID: f,
            modelName: Pe,
            unifiedMode: be,
            diffInfo: jt
          };
          Mt.push(hn);
        }
        if (_t && !ft && !cn) {
          this._onDidDisplayDiffs.fire(Mt);
        }
        i.onFinish?.();
        this._composerEventService.fireMaybeRunOnComposerSettled({
          composerId: e
        });
        const Lt = performance.now() - Ot;
        this._metricsService.distribution({
          stat: "composer.submitChat.finallyDuration",
          value: Lt,
          tags: {
            model: Pe
          }
        });
        Ft?.dispose();
        if (Ft && $.data.conversationActionManager === Ft) {
          this._composerDataService.updateComposerDataSetStore($, Gt => Gt("conversationActionManager", undefined));
        }
        if (w && A) {
          let Gt = "success";
          if (ft) {
            Gt = "error";
          } else if (cn || !_t) {
            Gt = "cancelled";
          }
          if (!A.isFinalized()) {
            A.finalize(Gt);
            if (x) {
              P5e({
                category: "agent.loop",
                message: `Agent turn ${Gt} [${f}]`,
                level: Gt === "error" ? "error" : "info",
                data: {
                  requestId: f,
                  composerId: e,
                  outcome: Gt
                }
              });
            }
          }
          if (this._activeUserTurnTrackers.get(e) === A) {
            this._activeUserTurnTrackers.delete(e);
          }
        }
        this._composerEventService.fireDidFinishStreamChat({
          composerId: e,
          isErrored: ft,
          isAborted: cn,
          isCompleted: _t,
          diffEvents: Mt,
          humanBubbleId: St?.bubbleId,
          startTime: ee,
          generationUUID: f
        });
        if (this._workbenchEnvironmentService.isGlass) {
          try {
            await Promise.all([this._composerDataService.manuallyPersistComposer(e), this._composerDataService.saveComposers()]);
            await this._storageService.flush();
          } catch (Gt) {
            this._structuredLogService.error("composer", "failed to force persist composer data after submit", Gt instanceof Error ? Gt : new Error(String(Gt)), {
              composerId: e,
              requestId: f
            });
          }
        }
      }
    } catch (s) {
      r.error = s;
      r.hasError = true;
    } finally {
      __disposeResources(r);
    }
  }
  resumeChat(e, t) {
    const i = e.composerId;
    if (!this._composerDataService.getComposerData(e)) {
      throw new Error("Cannot resume: chat not found");
    }
    const s = this._composerDataService.getRootHandle(e);
    this.submitChatMaybeAbortCurrent(i, "", {
      ...(t ?? {}),
      isResume: true,
      bubbleId: undefined,
      ignoreQueuing: true
    });
  }
  async triggerManualSummarization(e, t) {
    const i = e.composerId;
    const r = e.data;
    this._analyticsService.trackEvent("composer.manual_summarization", {
      contextPercentageUsed: r.contextUsagePercentFloat ?? 0
    });
    const s = this._composerDataService.getLastBubble(e);
    let o;
    let a = false;
    if (s?.capabilityType === ko.SUMMARIZATION) {
      o = s.bubbleId;
    } else {
      const l = {
        ...h_(),
        type: ul.AI,
        text: "",
        capabilityType: ko.SUMMARIZATION
      };
      o = l.bubbleId;
      await this._composerDataService.appendComposerBubbles(e, [l]);
      a = true;
    }
    try {
      const l = Wr();
      const u = this._abortControllerFactory.create("composer", {
        composerId: i,
        requestId: l,
        context: "triggerManualSummarization"
      }, this.getAbortControllerSamplingRate());
      this._composerDataService.updateComposerDataSetStore(e, d => {
        d("status", "generating");
        d("generatingBubbleIds", [o]);
      });
      await this._composerAgentService.summarize(e, u);
    } catch (l) {
      if (a) {
        this._composerDataService.deleteComposerBubbles(e, [o]);
      }
      console.error("[composer] Error during NAL summarization:", l);
      throw l;
    } finally {
      this._composerDataService.updateComposerDataSetStore(e, l => {
        l("status", "completed");
        l("generatingBubbleIds", []);
      });
    }
  }
  shouldSkipCapabilities(e, t) {
    return e === "*" || (e ?? []).includes(t);
  }
  logClientStreamAbort(e) {
    const t = {
      composerId: e.composerId,
      requestId: e.requestId,
      abortSource: e.source,
      ...(e.metadata ?? {})
    };
    this._structuredLogService.error("composer", "Client stream abort", new Error(e.source), t);
  }
  handleAbortChat(e, t) {
    const i = e.composerId;
    const r = e.data;
    if (!r || (t ||= this._composerDataService.getLastHumanBubbleId(e), !t)) {
      return;
    }
    const s = r.chatGenerationUUID;
    if (s && this._skipHandleAbortChat.has(s)) {
      return;
    }
    const o = this._composerDataService.getComposerBubble(e, t);
    const a = this._composerDataService.getLoadedConversation(e);
    const l = a.findIndex(g => g.bubbleId === t);
    if (!o || t !== this._composerDataService.getLastHumanBubbleId(e)) {
      return;
    }
    this.stopChat(e);
    const u = a.slice(l + 1).filter(g => g.type === ul.AI).map(g => this._composerDataService.getComposerBubble(e, g.bubbleId)).filter(Ch);
    const d = u.some(g => g.capabilityType === ko.TOOL_FORMER && (g.toolFormerData?.tool === an.EDIT_FILE_V2 || g.toolFormerData?.tool === an.EDIT_FILE) && g.toolFormerData.status === "completed");
    const m = u.some(g => g.capabilityType === ko.TOOL_FORMER && g.toolFormerData?.tool === an.RUN_TERMINAL_COMMAND_V2 && g.toolFormerData.additionalData?.status === "success");
    const p = u.some(g => g.capabilityType === ko.TOOL_FORMER && g.toolFormerData?.tool === an.CREATE_PLAN && !!g.toolFormerData.params?.plan);
    if (!d && !m && !p) {
      if (u.length === 0) {
        this._composerDataService.deleteComposerBubbles(e, [t]);
        if (o.isPlanExecution) {
          this._composerEventService.fireShouldForceText({
            composerId: i
          });
          this._composerViewsService.focus(i, true);
          this._composerDataService.updateComposerDataSetStore(e, w => w("conversationState", o.conversationState));
          this._composerDataService.updateComposerDataSetStore(e, w => w("_skipCheckpointUpdate", true));
          return;
        }
        if (this._workbenchEnvironmentService.isGlass && l === 0) {
          this._commandService.executeCommand("glass.abortAgentAndRestoreQuery", {
            agentId: i,
            query: o.text,
            richText: o.richText
          });
          return;
        }
        const g = mL(o.context || sR());
        const f = o.text;
        const A = o.richText;
        this._composerDataService.updateComposerData(e, {
          text: f,
          richText: A,
          context: g
        });
        this._composerEventService.fireShouldForceText({
          composerId: i
        });
        this._composerViewsService.focus(i, true);
        this._composerDataService.updateComposerDataSetStore(e, w => w("conversationState", o.conversationState));
        this._composerDataService.updateComposerDataSetStore(e, w => w("_skipCheckpointUpdate", true));
      } else if (r.text.length === 0 && this._composerDataService.getLastHumanBubbleId(e) === t && !r.subagentInfo?.parentComposerId) {
        this._composerDataService.updateComposerDataSetStore(e, g => g("editingBubbleId", t));
        this._composerViewsService.focusPrevBubble(i);
      }
    }
  }
  stopChat(e) {
    if (e.data) {
      this._composerDataService.updateComposerDataSetStore(e, i => i("chatGenerationUUID", undefined));
      this._composerDataService.updateComposerDataSetStore(e, i => i("status", "aborted"));
      this._composerDataService.updateComposerDataSetStore(e, i => i("generatingBubbleIds", []));
    }
  }
  async _restoreSubmitErrorToEmptyStateDraft(e, t, i, r) {
    const s = this._composerDataService.getHandleIfLoaded(R2);
    if (s) {
      this._applySubmitErrorToDraftHandle(s, e, t, i, r);
      return;
    }
    const o = await this._composerDataService.getComposerHandleById(R2);
    if (!o) {
      this._structuredLogService.warn("composer", "Failed to restore empty-state draft for local glass submit error", {
        draftId: R2
      });
      return;
    }
    try {
      this._applySubmitErrorToDraftHandle(o, e, t, i, r);
    } finally {
      o.dispose();
    }
  }
  _applySubmitErrorToDraftHandle(e, t, i, r, s) {
    const o = t ?? "";
    e.setData("conversationMap", {});
    e.setData("fullConversationHeadersOnly", []);
    e.setData("status", "none");
    e.setData("generatingBubbleIds", []);
    e.setData("chatGenerationUUID", undefined);
    e.setData("text", o);
    e.setData("richText", i ?? o);
    e.setData("context", mL(s ?? sR()));
    e.setData("submitErrorDetails", r);
  }
  async getModelDetails(e) {
    return this._aiService.getModelDetails({
      composerId: e
    });
  }
  async appendWorktreeSetupNotificationMessage(e) {
    if (e.data.fullConversationHeadersOnly.some(o => {
      const a = this._composerDataService.getComposerBubble(e, o.bubbleId);
      return a?.serviceStatusUpdate && Kmi(a.serviceStatusUpdate.message);
    })) {
      return;
    }
    const r = new e9t({
      message: xmg,
      codicon: "info",
      allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown: true
    });
    const s = {
      ...h_(),
      type: ul.AI,
      text: "",
      createdAt: new Date().toISOString(),
      serviceStatusUpdate: r
    };
    this._composerDataService.appendComposerBubbles(e, [s]);
    this._composerViewsService.triggerScrollToBottom(e);
  }
  async renameComposerIfNeeded(e) {
    if (this.shouldRenameComposer(e)) {
      await this.renameComposer(e);
    }
  }
  shouldRenameComposer(e, t) {
    const i = e.data;
    if (i.isBestOfNSubcomposer) {
      return false;
    } else if (t) {
      return i.fullConversationHeadersOnly.find(o => o.type === ul.HUMAN)?.bubbleId === t;
    } else if ((i.isProject || i.unifiedMode === "project") && i.name && i.name === "New Project") {
      return true;
    } else {
      return !i.name;
    }
  }
  async renameComposer(e) {
    const t = e.composerId;
    const i = this._composerDataService.getComposerData(e);
    if (!i) {
      return;
    }
    const r = this._composerDataService.getRootHandle(e);
    const s = r?.composerId ?? t;
    const a = (r ? this._composerDataService.getLoadedConversation(r) : []).find(l => l.type === ul.HUMAN);
    if (a) {
      try {
        const l = a.context?.selectedImages ?? [];
        const u = (await Promise.all(l.map(f => Lwi(f, () => {}, A => this._composerFileService.readFile({
          uri: A,
          composerData: i
        })).catch(() => {})))).filter(f => f !== undefined);
        const d = await this._aiService.aiClient();
        const m = r ? this._composerDataService.getComposerData(r) : undefined;
        const p = m?.isProject || m?.unifiedMode === "project";
        const g = await d.nameTab({
          messages: [{
            ...a,
            images: u
          }],
          isProject: p
        });
        if (g.name) {
          await this._composerDataService.updateComposerDataAsync(s, w => {
            w("name", g.name);
            if (g.icon) {
              w("projectIcon", g.icon);
            }
          });
          const f = r ? this._composerDataService.getComposerData(r) : undefined;
          const A = Array.isArray(f?.subComposerIds) ? f.subComposerIds : [];
          for (const w of A) {
            const C = this._composerDataService.getHandleIfLoaded_MIGRATED(w);
            if ((C ? this._composerDataService.getComposerData(C) : undefined)?.isBestOfNSubcomposer === true) {
              await this._composerDataService.updateComposerDataAsync(w, I => {
                I("name", g.name);
                if (g.icon) {
                  I("projectIcon", g.icon);
                }
              });
            }
          }
        } else {
          const f = a.text.trim().split(`
`)[0].split(" ").slice(0, 10).join(" ") ?? "";
          await this._composerDataService.updateComposerDataAsync(s, C => C("name", f));
          const A = r ? this._composerDataService.getComposerData(r) : undefined;
          const w = Array.isArray(A?.subComposerIds) ? A.subComposerIds : [];
          for (const C of w) {
            const x = this._composerDataService.getHandleIfLoaded_MIGRATED(C);
            if ((x ? this._composerDataService.getComposerData(x) : undefined)?.isBestOfNSubcomposer === true) {
              await this._composerDataService.updateComposerDataAsync(C, B => B("name", f));
            }
          }
        }
      } catch (l) {
        console.error("Error renaming composer on first message", l);
        const u = a.text.trim().split(`
`)[0].split(" ").slice(0, 10).join(" ") ?? "";
        await this._composerDataService.updateComposerDataAsync(s, p => p("name", u));
        const d = r ? this._composerDataService.getComposerData(r) : undefined;
        const m = Array.isArray(d?.subComposerIds) ? d.subComposerIds : [];
        for (const p of m) {
          const g = this._composerDataService.getHandleIfLoaded_MIGRATED(p);
          if ((g ? this._composerDataService.getComposerData(g) : undefined)?.isBestOfNSubcomposer === true) {
            await this._composerDataService.updateComposerDataAsync(p, A => A("name", u));
          }
        }
      }
    }
  }
  triggerPrewarmForComposer(e) {
    this._triggerPrewarmForComposerAsync(e);
  }
  _buildAgentRequestHeaders() {
    const e = {};
    const t = pmu.getValue(this._contextKeyService) === true;
    const i = !this._workbenchEnvironmentService.isBuilt;
    if (t && i) {
      e["x-cursor-simulate-slow-provider"] = "true";
    }
    return e;
  }
  _createSubmitTraceScope(e, t) {
    const i = !!e;
    let r;
    let s;
    if (i && e?.traceId && e?.parentSpanId) {
      r = e.rootSpanCtx;
      s = lkc({
        traceId: e.traceId,
        parentSpanId: e.parentSpanId,
        name: "ComposerChatService.submitChatMaybeAbortCurrent"
      });
    } else {
      r = uah("agent.request");
      r.setAttribute("requestId", t);
      r.setAttribute("reqId", t);
      const a = r.spanContext()?.traceId;
      const l = r.spanContext()?.spanId;
      s = lkc({
        traceId: a,
        parentSpanId: l,
        name: "ComposerChatService.submitChatMaybeAbortCurrent"
      });
    }
    s.setAttribute("requestId", t);
    s.setAttribute("composer.isPrewarmed", i);
    if (e?.traceId) {
      s.setAttribute("composer.prewarmTraceId", e.traceId);
    }
    const o = this._getSentryReplayId();
    if (o) {
      r?.setAttribute("sentry.replay.id", o);
      s.setAttribute("sentry.replay.id", o);
    }
    return {
      rootSpanCtx: r,
      submitSpanCtx: s,
      isPrewarmed: i,
      [Symbol.dispose]: () => {
        s.end();
        r?.end();
      }
    };
  }
  async _computePrewarmKey(e) {
    const t = this._composerDataService.getHandleIfLoaded_MIGRATED(e);
    const i = t ? this._composerDataService.getComposerData(t) : undefined;
    if (!i || !i.isNAL || i.modelConfig?.modelName?.includes(",")) {
      return;
    }
    const r = this._composerModesService.getComposerUnifiedMode(e);
    const s = await this.getModelDetails(e);
    if (!s.modelName) {
      return;
    }
    if (i.modelConfig?.modelName) {
      s.modelName = this._aiSettingsService.getServerModelName(i.modelConfig.modelName);
      s.maxMode = i.modelConfig.maxMode;
    }
    const o = undefined;
    const a = i.editingBubbleId;
    return {
      modelName: s.modelName,
      maxMode: s.maxMode ?? false,
      mode: r,
      bestOfNGroupId: o,
      editingBubbleId: a
    };
  }
  async _triggerPrewarmForComposerAsync(e) {
    this._logService.debug("[Prewarm] Triggering", e);
    try {
      if (!this._experimentService.checkFeatureGate("agent_prewarm")) {
        this._logService.debug("[Prewarm] Skipped: feature flag disabled", e);
        return;
      }
      const t = this._composerDataService.getHandleIfLoaded_MIGRATED(e);
      const i = t ? this._composerDataService.getComposerData(t) : undefined;
      if (!i) {
        this._logService.debug("[Prewarm] Skipped: composer not found", e);
        return;
      }
      if (!i.isNAL) {
        this._logService.debug("[Prewarm] Skipped: not NAL", e);
        return;
      }
      if (i.status === "generating") {
        this._logService.debug("[Prewarm] Skipped: composer is generating, messages will use existing stream", e);
        return;
      }
      if (i.modelConfig?.modelName?.includes(",")) {
        this._agentPrewarmService?.invalidatePrewarm("best-of-n-multiple-models");
        this._logService.debug("[Prewarm] Skipped and invalidated: best-of-N with multiple models", e);
        return;
      }
      const r = await this._computePrewarmKey(e);
      if (!r) {
        this._agentPrewarmService?.invalidatePrewarm("best-of-n-or-invalid");
        this._logService.debug("[Prewarm] Skipped and invalidated: could not compute prewarm key (likely best-of-N)", e);
        return;
      }
      const s = Aif(r);
      if (this._agentPrewarmService?.hasValidPrewarm(e, s)) {
        this._logService.debug("[Prewarm] Skipped: valid prewarm already exists with same key", e);
        return;
      }
      const o = await this.getModelDetails(e);
      if (i.modelConfig?.modelName) {
        o.modelName = this._aiSettingsService.getServerModelName(i.modelConfig.modelName);
        o.maxMode = i.modelConfig.maxMode;
      }
      const a = Wr();
      const l = this._buildAgentRequestHeaders();
      this._logService.debug("[Prewarm] Starting", e, "requestId:", a, "model:", o.modelName, "keyHash:", s, "editingBubbleId:", r.editingBubbleId);
      await this._composerAgentService.prewarmForConversation({
        composerId: e,
        conversationId: e,
        generationUUID: a,
        modelDetails: o,
        prewarmKeyHash: s,
        bestOfNGroupId: r.bestOfNGroupId,
        headers: l,
        editingBubbleId: r.editingBubbleId
      });
    } catch (t) {
      this._logService.warn("[Prewarm] Failed", e, t);
      this._structuredLogService.warn("composer", "Prewarm failed", {
        composerId: e,
        error: String(t)
      });
    }
  }
  async abortChatAndWaitForFinish(e, t) {
    const i = this._composerDataService.getComposerData(e);
    if (!i) {
      return;
    }
    const r = Ety(t, i.conversationActionManager, i.chatGenerationUUID);
    if (r) {
      this._skipHandleAbortChat.add(r);
    }
    try {
      if (i.chatGenerationUUID && i.status !== "generating") {
        nz("composer.has_generation_uuid_but_not_generating", {
          status: i.status,
          chatGenerationUUID: i.chatGenerationUUID
        });
      }
      if (!i.conversationActionManager) {
        return;
      }
      const s = {
        activeRequestId: r,
        status: i.status
      };
      this.logClientStreamAbort({
        composerId: i.composerId,
        requestId: r,
        source: "abort_chat_and_wait_for_finish",
        metadata: s
      });
      i.conversationActionManager.abort("user_stopped_generation");
      const o = [new Promise(a => {
        const l = this._composerEventService.onDidFinishStreamChat(u => {
          if (u.composerId === i.composerId && (!r || u.generationUUID === r)) {
            l.dispose();
            a();
          }
        });
      })];
      await Promise.race(o);
    } finally {
      if (r) {
        this._skipHandleAbortChat.delete(r);
      }
    }
  }
  async createMockComposer(e) {
    if (!this._mockComposerStreamController) {
      throw new Error("Mock composer stream controller not available (enableSmokeTestDriver must be true)");
    }
    return this._mockComposerStreamController.createMock(e);
  }
  async pushMockEvent(e, t) {
    if (!this._mockComposerStreamController) {
      throw new Error("Mock composer stream controller not available (enableSmokeTestDriver must be true)");
    }
    this._mockComposerStreamController.pushEvent(e, t);
  }
  async completeMockComposer(e) {
    if (!this._mockComposerStreamController) {
      throw new Error("Mock composer stream controller not available (enableSmokeTestDriver must be true)");
    }
    this._mockComposerStreamController.completeMock(e);
  }
  async disposeMockComposer(e) {
    if (!this._mockComposerStreamController) {
      throw new Error("Mock composer stream controller not available (enableSmokeTestDriver must be true)");
    }
    this._mockComposerStreamController.disposeMock(e);
  }
  async abortMockComposer(e) {
    await this.disposeMockComposer(e);
  }
};
__decorate([ckc("ComposerChatService.attachToBackgroundAgent")], vMe.prototype, "attachToBackgroundAgent", null);
__decorate([ckc("ComposerChatService.startBackgroundAgentAttachment")], vMe.prototype, "startBackgroundAgentAttachment", null);
__decorate([Gs("ComposerChatService.getModelDetails")], vMe.prototype, "getModelDetails", null);
__decorate([Gs("ComposerChatService.renameComposerIfNeeded")], vMe.prototype, "renameComposerIfNeeded", null);
__decorate([Gs("ComposerChatService.shouldRenameComposer")], vMe.prototype, "shouldRenameComposer", null);
__decorate([Gs("ComposerChatService.renameComposer")], vMe.prototype, "renameComposer", null);
vMe = __decorate([__param(0, Oa), __param(1, IM), __param(2, rw), __param(3, xM), __param(4, BA), __param(5, bMe), __param(6, Ctt), __param(7, ku), __param(8, Hi), __param(9, za), __param(10, fr), __param(11, Qkt), __param(12, Nye), __param(13, wg), __param(14, oX), __param(15, MJ), __param(16, IU), __param(17, ln), __param(18, Lr), __param(19, uX), __param(20, Vk), __param(21, AU), __param(22, kp), __param(23, DT), __param(24, vU), __param(25, YD), __param(26, FJ), __param(27, hMe), __param(28, s5), __param(29, eit), __param(30, Jb), __param(31, ms), __param(32, R1), __param(33, Tl), __param(34, Ghn), __param(35, uh), __param(36, Fn), __param(37, jkt), __param(38, YZ), __param(39, AE), __param(40, Vp), __param(41, EJ), __param(42, fL), __param(43, gnt), __param(44, Jv), __param(45, Tmn), __param(46, Zkt), __param(47, wd), __param(48, lX), __param(49, lmn), __param(50, Z$e), __param(51, bQ), __param(52, bEe), __param(53, Yk), __param(54, zkt), __param(55, Cc), __param(56, Rr), __param(57, Kk), __param(58, iS), __param(59, C$e), __param(60, su), __param(61, Swi), __param(62, Nyi), __param(63, Dwi), __param(64, Ftt), __param(65, Htt), __param(66, wi), __param(67, UAa), __param(68, K3), __param(69, CEe), __param(70, Cce), __param(71, cqe), __param(72, cmu), __param(73, Xpn)], vMe);
Vi(wM, vMe, 1);
