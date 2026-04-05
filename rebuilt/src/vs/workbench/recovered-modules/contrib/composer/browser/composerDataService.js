"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerDataService.js
// Offset: 26933631 (bundle byte offset)
// Size: 52726 bytes
X9();
Ti();
gT();
Jk();
cv();
Uv();
Vg();
vr();
ml();
_s();
yn();
rt();
zr();
Js();
Yn();
Bc();
hs();
Ei();
ns();
Er();
Wt();
So();
Dd();
Ws();
kr();
M4();
VA();
ps();
jh();
sB();
rce();
eu();
Wu();
Rnu();
fN();
ET();
Bp();
RNe();
r8();
pye();
Hhn();
J0();
LNe();
KZ();
SI();
k$e();
yhn();
Ott();
QFg();
jk();
vhn();
zbi();
Zk();
uce();
nvi();
wSt();
vEe();
of();
KS();
Whn = "New Chat";
Oa = xi("composerDataService");
ly = class extends at {
  static {
    Jnu = this;
  }
  get loadedComposers() {
    return this._ownLoadedComposers;
  }
  fireWorktreeChanged(e, t) {
    this._onDidChangeComposerWorktree.fire({
      composerId: e,
      worktreePath: t
    });
  }
  get isRefreshingFromDisk() {
    return this._isRefreshingFromDisk;
  }
  getComposerIdFromViewId(e) {
    const t = FB + ".";
    if (e.startsWith(t)) {
      return e.slice(t.length);
    }
  }
  getComposerIdFromViewContainer(e) {
    const i = Di.as(Fg.ViewsRegistry).getViews(e)[0];
    if (i) {
      return this.getComposerIdFromViewId(i.id);
    }
  }
  findLoadedComposerIdByBackgroundAgentId(e) {
    const t = this.getLoadedComposers();
    for (const i of t) {
      const r = this.getHandleIfLoaded(i);
      const s = r ? this.getComposerData(r) : undefined;
      if (s?.createdFromBackgroundAgent?.bcId === e && s.createdFromBackgroundAgent.shouldStreamMessages) {
        return i;
      }
    }
  }
  findComposerIdByBackgroundAgentId(e) {
    const t = this.allComposersData.allComposers.find(i => i.createdFromBackgroundAgent?.bcId === e && i.createdFromBackgroundAgent.shouldStreamMessages);
    if (t) {
      return t.composerId;
    } else {
      return this.findLoadedComposerIdByBackgroundAgentId(e);
    }
  }
  getComposerTitle(e) {
    try {
      const t = this.getHandleIfLoaded(e);
      const i = t ? this.getComposerData(t) : undefined;
      if (i) {
        return i.name ?? Whn;
      }
      {
        const r = this.allComposersData.allComposers.find(s => s.composerId === e);
        if (r) {
          return r.name ?? Whn;
        }
      }
      return Whn;
    } catch (t) {
      console.error("[composer] error getting composer title", t);
      return Whn;
    }
  }
  resolveComposerIdToSelected(e) {
    const t = this.getHandleIfLoaded(e);
    const i = t ? this.getComposerData(t) : undefined;
    if (!i) {
      return e;
    }
    if (i.isBestOfNParent && i.selectedSubComposerId) {
      const r = i.selectedSubComposerId;
      if (i.subComposerIds?.includes(r)) {
        return r;
      }
    }
    return e;
  }
  setLastFocusedComposerId(e) {
    const t = this.allComposersData.selectedComposerIds[0];
    if (t && t !== e) {
      try {
        const a = this.getHandleIfLoaded(t);
        const l = a ? this.getComposerData(a) : undefined;
        if (a && l && Vgi(l)) {
          const u = Kgi(l);
          this.updateComposerData(a, {
            subtitle: u,
            isDraft: true
          });
          this.setAllComposersData("allComposers", d => d.composerId === t, {
            subtitle: u,
            isDraft: true
          });
        }
      } catch (a) {
        console.error("[composer] error handling draft subtitle:", a);
      }
    }
    const i = sc(() => this.getHandleIfLoaded(e));
    const r = i ? this.getComposerData(i) : undefined;
    const o = (r?.isBestOfNSubcomposer ?? false) && r?.subagentInfo?.parentComposerId ? r.subagentInfo.parentComposerId : e;
    this.setAllComposersData("lastFocusedComposerIds", a => {
      const l = a.filter(u => u !== o);
      return [o, ...l];
    });
    this.setAllComposersData("selectedComposerIds", a => {
      const l = (a ?? []).filter(u => u !== o);
      return [o, ...l];
    });
    this._onDidChangeLastFocusedComposerId.fire(e);
    this.setAllComposersData("allComposers", a => a.composerId === e, {
      hasUnreadMessages: false
    });
    setTimeout(async () => {
      try {
        const a = this.getHandleIfLoaded(e);
        if (a) {
          this.updateComposerData(a, {
            hasUnreadMessages: false
          });
        }
      } catch (a) {
        console.error("[composer] error clearing unread messages", a);
      }
    }, 5);
  }
  get selectedComposerId() {
    const e = this.allComposersData.selectedComposerIds;
    const t = this.allComposersData.lastFocusedComposerIds;
    const i = t.find(a => e.includes(a));
    if (i) {
      return i;
    }
    const r = t.filter(a => e.includes(a));
    if (r.length !== t.length) {
      this.setAllComposersData("lastFocusedComposerIds", r);
    }
    const s = this._paneCompositePartService.getLastActivePaneCompositeId(2);
    if (s) {
      const a = this._viewDescriptorService.getViewContainerById(s);
      if (a) {
        const l = this.getComposerIdFromViewContainer(a);
        if (l && e.includes(l)) {
          if (t[0] !== l) {
            this.setLastFocusedComposerId(l);
          }
          return l;
        }
      }
    }
    if (e.length > 0) {
      const a = e[0];
      if (t[0] !== a) {
        this.setLastFocusedComposerId(a);
      }
      return a;
    } else if (this.allComposersData.allComposers.length > 0) {
      const a = this.allComposersData.allComposers[0];
      if (a) {
        return a.composerId;
      }
    }
    console.log("[composer] no composers found, resetting");
    const o = this.resetComposers();
    this.setLastFocusedComposerId(o.composerId);
    return o.composerId;
  }
  get selectedComposerIds() {
    return this.allComposersData.selectedComposerIds;
  }
  hasNearbyCachedSummary(e, t, i) {
    const r = this.getComposerData(e);
    if (!r) {
      return false;
    }
    const s = r.latestConversationSummary?.summary?.truncationLastBubbleIdInclusive ?? r.latestConversationSummary?.lastBubbleId;
    let o;
    for (let a = r.fullConversationHeadersOnly.length - 1; a >= 0; a--) {
      const l = r.fullConversationHeadersOnly[a];
      const u = r.conversationMap[l.bubbleId];
      if (u) {
        if (s !== undefined && (l.bubbleId === s || l.serverBubbleId === s)) {
          break;
        }
        if (u.type === ul.HUMAN && u.contextWindowStatusAtCreation) {
          o = u.contextWindowStatusAtCreation;
        }
        if (u.cachedConversationSummary) {
          const d = u.contextWindowStatusAtCreation || o;
          if (!d) {
            continue;
          }
          let m;
          if (d.tokensUsed !== undefined && d.tokenLimit !== undefined && d.tokenLimit > 0) {
            m = d.tokensUsed / d.tokenLimit * 100;
          } else if (d.percentageRemainingFloat !== undefined) {
            m = 100 - d.percentageRemainingFloat;
          } else if (d.percentageRemaining !== undefined) {
            m = 100 - d.percentageRemaining;
          }
          if (typeof m == "number" && Math.abs(t - m) <= i) {
            return true;
          }
        }
      }
    }
    return false;
  }
  get composerDataStorageID() {
    return FFn;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H, W, z, Y) {
    super();
    this._storageService = e;
    this._workspaceContextService = t;
    this._reactiveStorageService = i;
    this._instantiationService = r;
    this.composerTextModelService = s;
    this._composerEventService = o;
    this._composerFileService = a;
    this._paneCompositePartService = l;
    this._viewsService = u;
    this._viewDescriptorService = d;
    this._commandService = m;
    this._environmentService = p;
    this._composerCheckpointStorageService = g;
    this._composerMessageStorageService = f;
    this._composerCodeBlockDiffStorageService = A;
    this._composerMessageRequestContextStorageService = w;
    this._composerCodeBlockPartialInlineDiffFatesStorageService = C;
    this._modelConfigService = x;
    this._gitContextService = I;
    this._notificationService = B;
    this.instantiationService = R;
    this.reactiveStorageService = N;
    this._fileService = M;
    this._worktreeManagerService = O;
    this._experimentService = $;
    this._configurationService = H;
    this._clientDebugLogService = W;
    this._asyncOperationRegistry = z;
    this._patchGraphStorageService = Y;
    this._planReferencesIndex = new Map();
    this._ownLoadedComposers = mFg();
    this._onDidChangeLastFocusedComposerId = this._register(new Qe());
    this.onDidChangeLastFocusedComposerId = this._onDidChangeLastFocusedComposerId.event;
    this._onDidChangeComposerWorktree = this._register(new Qe());
    this.onDidChangeComposerWorktree = this._onDidChangeComposerWorktree.event;
    this._isRefreshingFromDisk = false;
    this._pendingBackgroundAgentComposerCreations = new Map();
    this._composerDisposableMap = new mp();
    this._worktreeWatchers = new Map();
    this._loadingCapabilities = new Set();
    this._register(this._viewsService.onDidChangeFocusedView(ne => {
      const pe = this._viewsService.getFocusedView();
      if (!pe) {
        return;
      }
      const le = this.getComposerIdFromViewId(pe.id);
      if (le) {
        this.setLastFocusedComposerId(le);
      }
    }));
    this._register(this._viewsService.onDidChangeViewContainerVisibility(({
      id: ne,
      visible: pe,
      location: le
    }) => {
      if (!pe || le !== 2) {
        return;
      }
      const he = this._viewDescriptorService.getViewContainerById(ne);
      if (!he) {
        return;
      }
      const be = this.getComposerIdFromViewContainer(he);
      if (be) {
        this.setLastFocusedComposerId(be);
      }
    }));
    this._register(this._composerEventService.onNewFileDeleted(async ne => {
      const pe = this.getHandleIfLoaded(ne.composerId);
      const le = pe ? this.getComposerData(pe) : undefined;
      if (!le || !pe) {
        return;
      }
      const he = le.newlyCreatedFiles?.filter(ke => ke.uri.toString() !== ne.uri.toString()) ?? [];
      let be = ZC(le.newlyCreatedFolders) ?? [];
      const fe = be.filter(ke => ne.uri.toString().startsWith(ke.uri.toString()));
      for (const ke of fe) {
        if (((await this._composerFileService.resolve({
          uri: ke.uri,
          options: {
            resolveMetadata: true
          },
          composerData: le
        })).children ?? []).filter(De => !De.isDirectory).length === 0) {
          await this._composerFileService.deleteFolder({
            uri: ke.uri,
            composerData: le,
            useTrash: true
          });
          be = be.filter(De => De.uri.toString() !== ke.uri.toString());
        }
      }
      this.updateComposerData(pe, {
        newlyCreatedFiles: he,
        newlyCreatedFolders: be
      });
    }));
    this.composerDataHandleManager = this._register(m2A(this._instantiationService, this._experimentService, this.composerWasLoadedHook.bind(this), this.composerWasUnloadedHook.bind(this), this._ownLoadedComposers));
    let j;
    [this.allComposersData, this.setAllComposersData, this.resetComposers, j] = yNA(this._storageService, this._reactiveStorageService, this._workspaceContextService, this._modelConfigService, this.composerDataHandleManager, this.composerDataStorageID, this._environmentService.isGlass === true);
    this._initialComposerDataLoadPromise = j;
    j.finally(() => {
      this._initialComposerDataLoadPromise = undefined;
      j = undefined;
    });
    this._rebuildPlanReferencesIndexFromHeaders();
    this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    const X = [];
    const ee = new yoe();
    const re = async () => {
      const ne = Date.now();
      await new Promise(ke => setTimeout(ke, 0));
      if (j) {
        await j;
      }
      const pe = X.splice(0);
      const le = new Set();
      const he = [];
      const be = [];
      for (const ke of pe.reverse()) {
        if (!le.has(ke.composerId)) {
          le.add(ke.composerId);
          if (ke.type === "add") {
            he.push(ke.composerId);
          }
          if (ke.type === "remove") {
            be.push(ke.composerId);
          }
        }
      }
      const fe = await Promise.all(he.map(async ke => ({
        handle: await this.getComposerHandleById(ke).catch(() => {}),
        id: ke
      })));
      Gw(() => {
        for (const {
          id: ke,
          handle: Se
        } of fe) {
          if (Se) {
            this.loadComposerCapabilities(Se);
            this.setAllComposersData("selectedComposerHandles", ke, Se);
          } else {
            be.push(ke);
            if (this.allComposersData.allComposers.find(De => De.composerId === ke)?.subagentInfo?.parentComposerId) {
              this.setAllComposersData("allComposers", De => De.filter(Pe => Pe.composerId !== ke));
            }
          }
        }
        for (const ke of be) {
          const Se = this.allComposersData.selectedComposerHandles[ke];
          if (Se) {
            Se.dispose();
            this.setAllComposersData(FOo(Fe => {
              delete Fe.selectedComposerHandles[ke];
            }));
          }
        }
        if (be.length > 0) {
          this.setAllComposersData("lastFocusedComposerIds", ke => ke.filter(Se => !be.includes(Se)));
          this.setAllComposersData("selectedComposerIds", ke => ke.filter(Se => !be.includes(Se)));
        }
      });
    };
    if (!this._environmentService.isGlass) {
      this.reactiveStorageRoot.onChangeEffect({
        deps: [() => this.allComposersData.selectedComposerIds],
        onChange: async ({
          deps: ne,
          prevDeps: pe
        }) => {
          const le = ne[0];
          const he = pe?.[0] ?? [];
          le.filter(be => !he.includes(be)).forEach(be => X.push({
            type: "add",
            composerId: be
          }));
          he.filter(be => !le.includes(be)).forEach(be => X.push({
            type: "remove",
            composerId: be
          }));
          if (X.length > 0) {
            ee.queue(re);
          }
        },
        runNowToo: true
      });
    }
    for (const ne of Jnu.registeredActions) {
      ne(this._reactiveStorageService, this);
    }
    this._register(this._storageService.onWillSaveState(() => {
      this.saveComposers();
    }));
  }
  loadComposerCapabilities(e) {
    const t = e.composerId;
    if (this._loadingCapabilities.has(t)) {
      return;
    }
    const i = this.getComposerData(e);
    if (i) {
      this._loadingCapabilities.add(t);
      try {
        if (i.capabilities !== undefined && i.capabilities.every(r => r instanceof Pq) && i.capabilities.length > 0) {
          this.restorePendingDecisionsForQuestionnaires(e);
          return;
        }
        this.updateComposerDataSetStore(e, r => {
          const s = cce(this.instantiationService, e.composerId, {
            savedCapabilityData: i.capabilities
          });
          r("capabilities", s);
          setTimeout(() => {
            this.restorePendingDecisionsForQuestionnaires(e);
          }, 0);
        });
      } finally {
        this._loadingCapabilities.delete(t);
      }
    }
  }
  restorePendingDecisionsForQuestionnaires(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return;
    }
    const i = t.capabilities?.find(r => r instanceof Pq && r.type === ko.TOOL_FORMER);
    if (i) {
      i.restorePendingDecisionsForUnansweredQuestionnaires();
    }
  }
  async updateComposerDataAsync(e, t) {
    const i = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const r = __addDisposableResource(i, await this.getComposerHandleById(e), false);
      if (r) {
        t(r.setData);
      }
    } catch (r) {
      i.error = r;
      i.hasError = true;
    } finally {
      __disposeResources(i);
    }
  }
  dispose() {
    for (const [, e] of this._worktreeWatchers) {
      e.dispose();
    }
    this._worktreeWatchers.clear();
    super.dispose();
  }
  getHandleIfLoaded(e) {
    return this.composerDataHandleManager.getHandleIfLoaded(e);
  }
  getHandleIfLoaded_MIGRATED(e) {
    return this.getHandleIfLoaded(e);
  }
  getRootHandle(e) {
    const t = this.getComposerData(e);
    if (t) {
      if (t.isBestOfNSubcomposer === true && t.subagentInfo?.parentComposerId) {
        const i = t.subagentInfo.parentComposerId;
        return this.getHandleIfLoaded_MIGRATED(i);
      }
      return e;
    }
  }
  getLoadedSubComposerHandles(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return [];
    }
    const i = t.subComposerIds ?? [];
    const r = [];
    for (const s of i) {
      const o = this.getHandleIfLoaded_MIGRATED(s);
      if (o) {
        r.push(o);
      }
    }
    return r;
  }
  composerWasLoadedHook(e) {
    try {
      const t = this.allComposersData.allComposers.find(o => o.composerId === e.composerId);
      const i = e.gitWorktree !== undefined || e.worktreeStartedReadOnly === true;
      if (t && (t.isWorktree !== i || t.worktreeStartedReadOnly !== e.worktreeStartedReadOnly)) {
        this.setAllComposersData("allComposers", o => o.composerId === e.composerId, {
          isWorktree: i,
          worktreeStartedReadOnly: e.worktreeStartedReadOnly
        });
      }
      const r = e.subComposerIds?.length;
      if (t && t.numSubComposers !== r) {
        this.setAllComposersData("allComposers", o => o.composerId === e.composerId, {
          numSubComposers: r
        });
      }
      if (e.unifiedMode !== t?.unifiedMode && e.unifiedMode !== undefined) {
        this.setAllComposersData("allComposers", o => o.composerId === e.composerId, {
          unifiedMode: e.unifiedMode
        });
      }
      if (t && e.plan) {
        const o = e.plan.content || "";
        const a = Bdn(o, e.plan.name);
        const l = e.plan.overview ? e.plan.overview.replace(/\s+/g, " ").trim().slice(0, 120) : "";
        const u = {
          title: a,
          overview: l,
          composerId: e.composerId
        };
        const d = t.authoredPlan;
        if (!d || d.title !== u.title || d.overview !== u.overview || d.composerId !== u.composerId) {
          this.setAllComposersData("allComposers", m => m.composerId === e.composerId, {
            authoredPlan: u
          });
        }
      } else if (t && !e.plan && t.authoredPlan) {
        this.setAllComposersData("allComposers", o => o.composerId === e.composerId, {
          authoredPlan: undefined
        });
      }
      if (t) {
        const o = [];
        const a = new Set();
        const l = m => {
          const p = je.from(m);
          if (p.scheme === _n.cursorPlan) {
            const g = p.authority;
            if (g) {
              const f = `composer:${g}`;
              if (!a.has(f)) {
                a.add(f);
                o.push({
                  type: "composer",
                  composerId: g
                });
              }
            }
          } else if (p.scheme === _n.file && p.path.includes(".cursor/plans/")) {
            const g = `file:${p.toString()}`;
            if (!a.has(g)) {
              a.add(g);
              o.push({
                type: "file",
                uri: p.toString()
              });
            }
          }
        };
        if (e.context?.fileSelections) {
          for (const m of e.context.fileSelections) {
            const p = m.uri;
            if (p) {
              l(p);
            }
          }
        }
        if (e.conversationMap) {
          for (const m of Object.values(e.conversationMap)) {
            if (m.context?.fileSelections) {
              for (const p of m.context.fileSelections) {
                const g = p.uri;
                if (g) {
                  l(g);
                }
              }
            }
          }
        }
        const u = t.referencedPlans || [];
        if (o.length !== u.length || !o.every((m, p) => {
          const g = u[p];
          if (!g || m.type !== g.type) {
            return false;
          } else if (m.type === "composer") {
            return g.type === "composer" && m.composerId === g.composerId;
          } else {
            return g.type === "file" && m.uri === g.uri;
          }
        })) {
          this.setAllComposersData("allComposers", m => m.composerId === e.composerId, {
            referencedPlans: o
          });
        }
        this._updatePlanReferencesIndex(e.composerId, o);
      }
      if (!this._composerDisposableMap.has(e.composerId) || this._composerDisposableMap.get(e.composerId)?.isDisposed === true) {
        this._composerDisposableMap.set(e.composerId, new Ut());
      }
      const s = this._composerDisposableMap.get(e.composerId);
      if (!s) {
        console.error("[composer] No store found for composer id: " + e.composerId);
        return;
      }
      s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps: [() => e.composerId, () => e.name, () => e.lastUpdatedAt, () => e.createdAt, () => e.unifiedMode, () => e.hasUnreadMessages, () => e.contextUsagePercent, () => e.hasBlockingPendingActions, () => e.totalLinesAdded, () => e.totalLinesRemoved, () => e.subtitle, () => e.isArchived, () => e.isDraft, () => e.draftTarget, () => e.gitWorktree, () => e.worktreeStartedReadOnly, () => e.isSpec, () => e.subagentInfo, () => e.createdFromBackgroundAgent, () => e.plan, () => e.conversationMap, () => e.context, () => e.subComposerIds, () => e.filesChangedCount, () => e.isEphemeral, () => e.prUrl, () => e.prBranchName, () => e.committedToBranch, () => e.lastMessageSentOnBranch, () => e.createdOnBranch, () => e.activeBranch, () => e.branches, () => e.isProject, () => e.projectIcon],
        onChange: ({
          deps: o
        }) => {
          const a = o[0];
          const l = o[1];
          const u = o[2];
          const d = o[3];
          const m = o[4];
          const p = o[5];
          const g = o[6];
          const f = o[7];
          const A = o[8];
          const w = o[9];
          const C = o[10];
          const x = o[11];
          const I = o[12];
          const B = o[13];
          const R = o[14];
          const N = o[15];
          const M = o[16];
          const O = o[17];
          const $ = o[18];
          const H = o[19];
          const W = o[20];
          const z = o[21];
          const Y = o[22];
          const j = o[23];
          const X = o[24];
          const ee = o[25];
          const re = o[26];
          const ne = o[27];
          const pe = o[28];
          const le = o[29];
          const he = o[30];
          const be = o[31];
          const fe = o[32];
          const ke = o[33];
          let Se;
          if (H) {
            Se = sc(() => {
              const De = H.content || "";
              const Pe = Bdn(De, H.name);
              const Ne = H.overview ? H.overview.replace(/\s+/g, " ").trim().slice(0, 120) : "";
              return {
                title: Pe,
                overview: Ne,
                composerId: a
              };
            });
          }
          const Fe = sc(() => {
            const De = new Set();
            const Pe = [];
            const Ne = Oe => {
              const Ge = je.from(Oe);
              if (Ge.scheme === _n.cursorPlan) {
                const Le = Ge.authority;
                if (Le) {
                  const We = `composer:${Le}`;
                  if (!De.has(We)) {
                    De.add(We);
                    Pe.push({
                      type: "composer",
                      composerId: Le
                    });
                  }
                }
              } else if (Ge.scheme === _n.file && Ge.path.includes(".cursor/plans/")) {
                const Le = `file:${Ge.toString()}`;
                if (!De.has(Le)) {
                  De.add(Le);
                  Pe.push({
                    type: "file",
                    uri: Ge.toString()
                  });
                }
              }
            };
            if (z?.fileSelections) {
              for (const Oe of z.fileSelections) {
                const Ge = Oe.uri;
                if (Ge) {
                  Ne(Ge);
                }
              }
            }
            if (W) {
              for (const Oe of Object.values(W)) {
                sc(() => {
                  if (Oe.context?.fileSelections) {
                    for (const Ge of Oe.context.fileSelections) {
                      const Le = Ge.uri;
                      if (Le) {
                        Ne(Le);
                      }
                    }
                  }
                });
              }
            }
            return Pe;
          });
          this.setAllComposersData("allComposers", De => De.composerId === a, {
            name: l,
            lastUpdatedAt: u,
            createdAt: d,
            unifiedMode: m,
            hasUnreadMessages: p,
            contextUsagePercent: g,
            hasBlockingPendingActions: f,
            totalLinesAdded: A,
            totalLinesRemoved: w,
            filesChangedCount: j,
            subtitle: C,
            isDraft: I,
            draftTarget: B,
            isWorktree: R !== undefined || N === true,
            worktreeStartedReadOnly: N,
            isSpec: M,
            isProject: fe,
            projectIcon: ke,
            subagentInfo: O,
            createdFromBackgroundAgent: $,
            authoredPlan: Se,
            referencedPlans: Fe,
            numSubComposers: Y?.length,
            isEphemeral: X,
            prUrl: ee,
            prBranchName: re,
            committedToBranch: ne,
            lastMessageSentOnBranch: pe,
            createdOnBranch: le,
            activeBranch: he,
            branches: be
          });
          this._updatePlanReferencesIndex(a, Fe);
        }
      }));
      s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps: [() => e.name],
        onChange: ({
          deps: o
        }) => {
          const a = o[0];
          this._commandService.executeCommand(tca, e.composerId, a ?? Whn);
        }
      }));
      s.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
        deps: [() => e.status],
        onChange: ({
          deps: o
        }) => {
          const a = o[0];
          this._commandService.executeCommand(nca, e.composerId, a);
          if (a === "none") {
            const l = sc(() => e.fullConversationHeadersOnly?.length ?? 0);
            if (l > 0) {
              const u = sc(() => !!e.name);
              const d = sc(() => e.name?.length ?? 0);
              const m = sc(() => !!e.createdFromBackgroundAgent?.bcId);
              const p = sc(() => !!e.pendingBackgroundAgent);
              const g = m || p;
              const f = new Error().stack;
              Sw(new Error("Composer status set to none with existing content"), {
                tags: {
                  client_error_type: "composer_status_reset_to_none",
                  is_background_composer: m,
                  is_pending_background_agent: p,
                  is_background_flow: g
                },
                extra: {
                  composerId: e.composerId,
                  messageCount: l,
                  hasName: u,
                  nameLength: d,
                  isBackgroundComposer: m,
                  isPendingBackgroundAgent: p,
                  createdAt: sc(() => e.createdAt),
                  lastUpdatedAt: sc(() => e.lastUpdatedAt),
                  stackTrace: f
                }
              });
            }
          }
        }
      }));
      this._composerEventService.fireDidLoadComposer({
        composerId: e.composerId
      });
    } catch (t) {
      console.error("[composer] Error loading composer data:", t);
    }
  }
  composerWasUnloadedHook(e) {
    this._composerDisposableMap.deleteAndDispose(e);
    this._asyncOperationRegistry.clear(e);
  }
  static {
    this.registeredActions = [];
  }
  static registerAction(e) {
    this.registeredActions.push(e);
  }
  get selectedComposer() {
    const e = this.allComposersData.selectedComposerHandles[this.selectedComposerId];
    if (e) {
      return e.data;
    }
  }
  get selectedComposerHandle() {
    return this.allComposersData.selectedComposerHandles[this.selectedComposerId];
  }
  async getComposerHandleById(e) {
    return await this.composerDataHandleManager.getHandle(e);
  }
  whenInitialComposerDataLoaded() {
    return this._initialComposerDataLoadPromise ?? Promise.resolve();
  }
  async getAgentReferenceByComposerId(e) {
    const t = await this.getComposerHandleById(e);
    if (!t) {
      throw new Error(`Composer not found: ${e}`);
    }
    const i = new eO(this._storageService, e);
    const r = {
      getBlob: async (f, A) => {
        const w = await i.getBlob(f, A);
        if (w === undefined) {
          throw new Error(`Blob not found: ${A}`);
        }
        return w;
      },
      hasBlobLoaded: f => true
    };
    const s = new Set();
    const o = () => sc(() => t.data.conversationState) ?? new vk();
    const a = {
      get value() {
        return o();
      },
      onChange: f => {
        s.add(f);
        return {
          dispose: () => {
            s.delete(f);
          }
        };
      }
    };
    const l = new Set();
    const u = () => {
      const f = sc(() => this.getToolFormer(t));
      if (f) {
        return sc(() => f.getPendingUserDecisionGroup()()).map(w => {
          if (w.clientSideTool === an.ASK_QUESTION) {
            const I = f.getBubbleData(f.getBubbleIdByToolCallId(w.toolCallId) ?? "")?.params?.questions?.[0]?.prompt ?? "";
            return {
              type: "ask_question",
              toolCallId: w.toolCallId,
              question: I
            };
          }
          return {
            type: "edit_tool",
            toolCallId: w.toolCallId
          };
        });
      } else {
        return [];
      }
    };
    const d = {
      get value() {
        return u();
      },
      onChange: f => {
        l.add(f);
        return {
          dispose: () => {
            l.delete(f);
          }
        };
      }
    };
    const m = new Qe();
    return {
      conversationStateStructure: a,
      blobStore: r,
      interactionUpdates: {
        addListener: f => {
          const C = this._instantiationService.invokeFunction(I => I.get(bEe)).getInteractionUpdatesEvent(e)(I => {
            for (const B of I) {
              f(B);
            }
          });
          const x = m.event(I => {
            for (const B of I) {
              f(B);
            }
          });
          return {
            dispose: () => {
              C.dispose();
              x.dispose();
            }
          };
        }
      },
      pendingDecisions: d,
      submitMessage: async (f, A, w) => {
        const C = Wr();
        const x = new bM({
          message: {
            case: "userMessageAppended",
            value: new GCt({
              userMessage: new KR({
                text: w,
                messageId: C
              })
            })
          }
        });
        m.fire([x]);
        await this._instantiationService.invokeFunction(B => B.get(wM)).submitChatMaybeAbortCurrent(e, w, {
          forceBubbleId: C
        });
      }
    };
  }
  async getOrCreateHandleForBackgroundAgent(e, t) {
    const i = this.findComposerIdByBackgroundAgentId(e);
    if (i) {
      return await this.getComposerHandleById(i);
    }
    const r = this._pendingBackgroundAgentComposerCreations.get(e);
    if (r) {
      return await r;
    }
    const s = (async () => {
      try {
        const a = await this._instantiationService.invokeFunction(u => u.get(ag)).createComposer({
          skipSelect: true,
          partialState: {
            createdFromBackgroundAgent: {
              bcId: e,
              shouldStreamMessages: t?.shouldStreamMessages ?? true
            }
          }
        });
        if (!a?.composerId) {
          return;
        }
        const l = this.selectedComposerIds;
        if (!l.includes(a.composerId)) {
          this.setAllComposersData("selectedComposerIds", [...l, a.composerId]);
        }
        return await this.getComposerHandleById(a.composerId);
      } finally {
        this._pendingBackgroundAgentComposerCreations.delete(e);
      }
    })();
    this._pendingBackgroundAgentComposerCreations.set(e, s);
    return await s;
  }
  updateSelectedComposer(e) {
    const t = this.selectedComposerHandle;
    if (t) {
      t.setData(e);
    }
  }
  updateComposerDataSetStore(e, t) {
    t(e.setData);
  }
  updateComposerData(e, t) {
    e.setData(i => ({
      ...i,
      ...t
    }));
  }
  async saveComposers() {
    const e = (await this._commandService.executeCommand(lca)) || [];
    const t = a => {
      const l = this.getComposerDataIfLoaded(a) ?? this.allComposersData.allComposers.find(u => u.composerId === a);
      if (!l || l.isBestOfNSubcomposer) {
        return false;
      } else {
        return !!l.composerId.startsWith("task-") || !!l.subagentInfo?.parentComposerId;
      }
    };
    const i = e.filter(a => !t(a));
    let r = this.allComposersData.lastFocusedComposerIds.filter(a => !t(a));
    if (r.length === 0 && i.length > 0) {
      r = [i[0]];
    }
    const s = {
      allComposers: this.allComposersData.allComposers,
      selectedComposerIds: i,
      lastFocusedComposerIds: r,
      hasMigratedComposerData: this.allComposersData.hasMigratedComposerData,
      hasMigratedMultipleComposers: this.allComposersData.hasMigratedMultipleComposers
    };
    const o = JSON.stringify(s);
    this._storageService.store(this.composerDataStorageID, o, 1, 1);
  }
  async appendComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e) {
    if (this.allComposersData.allComposers.find(o => o.composerId === e.composerId)) {
      console.error(`[composer] appendComposer called with existing composerId ${e.composerId}`);
      Sw(new Error("appendComposer called with existing composerId"), {
        tags: {
          client_error_type: "appendComposer_duplicate"
        },
        extra: {
          composerId: e.composerId
        }
      });
      return;
    }
    const i = r$e(e);
    this.setAllComposersData("allComposers", o => [i, ...o]);
    if (this.allComposersData.selectedComposerIds.length === 0) {
      this.setAllComposersData("selectedComposerIds", [e.composerId]);
    }
    await this.composerDataHandleManager.persistLoadedComposer(e);
    await this.saveComposers();
    return this.composerDataHandleManager.pushComposer(e) ?? (await this.composerDataHandleManager.getHandle(e.composerId));
  }
  async appendSubComposer(e) {
    if (this.allComposersData.allComposers.find(s => s.composerId === e.composerId)) {
      console.error(`[composer] appendSubComposer called with existing composerId ${e.composerId}`);
      Sw(new Error("appendSubComposer called with existing composerId"), {
        tags: {
          client_error_type: "appendSubComposer_duplicate"
        },
        extra: {
          composerId: e.composerId
        }
      });
      return;
    }
    const i = r$e(e);
    this.setAllComposersData("allComposers", s => [i, ...s]);
    await this.composerDataHandleManager.persistLoadedComposer(e);
    await this.saveComposers();
    return this.composerDataHandleManager.pushComposer(e) ?? (await this.composerDataHandleManager.getHandle(e.composerId));
  }
  async ensureSubagentPersistedForStandaloneOpen(e) {
    const t = e.composerId;
    const i = this.allComposersData.allComposers.find(r => r.composerId === t);
    if (i) {
      if (!i.name && e.name) {
        this.setAllComposersData("allComposers", r => r.composerId === t, {
          name: e.name
        });
      }
    } else {
      const r = r$e(e);
      this.setAllComposersData("allComposers", s => [r, ...s]);
    }
    this.composerDataHandleManager.pushComposer(e);
    await this.composerDataHandleManager.persistLoadedComposer(e);
  }
  unlistComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e) {
    this.setAllComposersData("allComposers", t => t.filter(i => i.composerId !== e));
    if (this.allComposersData.selectedComposerIds.includes(e)) {
      this.setAllComposersData("selectedComposerIds", t => t.filter(i => i !== e));
    }
  }
  async deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e, t) {
    const i = this.getHandleIfLoaded(e);
    const r = i ? this.getComposerData(i) : undefined;
    const s = r?.subComposerIds || [];
    if (i && r?.isBestOfNSubcomposer) {
      const a = this.getRootHandle(i);
      if (a && a !== i) {
        const l = a.composerId;
        const u = this.getComposerData(a);
        const d = (u?.subComposerIds || []).filter(m => m !== e);
        this.updateComposerDataSetStore(a, m => m("subComposerIds", d));
        if (u?.selectedSubComposerId === e) {
          const m = d.length > 0 ? d[0] : l;
          this.updateComposerDataSetStore(a, p => p("selectedSubComposerId", m));
        }
      }
    }
    const o = this.instantiationService.invokeFunction(a => a.get(ag));
    try {
      if (r?.status === "generating") {
        console.log(`[composer] Stopping composer ${e} before deletion`);
        o.cancelChat(e);
      }
    } catch (a) {
      console.info("[composer] Error stopping composer before deletion (continuing):", a);
    }
    for (const a of s) {
      try {
        const l = this.getHandleIfLoaded(a);
        if ((l ? this.getComposerData(l) : undefined)?.status === "generating") {
          console.log(`[composer] Stopping subcomposer ${a} before deletion`);
          o.cancelChat(a);
        }
      } catch (l) {
        console.info(`[composer] Error stopping subcomposer ${a} before deletion (continuing):`, l);
      }
    }
    try {
      const a = r?.createdFromBackgroundAgent?.bcId;
      if (a && r?.createdFromBackgroundAgent?.shouldStreamMessages) {
        this.instantiationService.invokeFunction(u => u.get(rx)).archiveBackgroundComposer(a);
      }
    } catch (a) {
      console.info("[composer] Error archiving linked background composer (continuing):", a);
    }
    try {
      const a = r?.gitWorktree?.worktreePath;
      if (a) {
        const l = this.getHandleIfLoaded(e);
        if (l) {
          this.updateComposerDataSetStore(l, u => u("gitWorktree", undefined));
        }
        this._stopWorktreeWatcher(e);
        (async () => {
          try {
            await this._worktreeManagerService.removeWorktree(a);
          } catch (u) {
            console.info("[composer] Async worktree cleanup failed (continuing):", u);
          }
        })();
      }
    } catch (a) {
      console.info("[composer] Error scheduling worktree cleanup (continuing with delete):", a);
    }
    this.unlistComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(e);
    await Promise.all([this._composerCheckpointStorageService.clearComposerCheckpoints(e), this._composerCodeBlockDiffStorageService.clearComposerDiffs(e), this._composerMessageStorageService.clearComposerMessages(e), this._composerMessageRequestContextStorageService.clearComposerContexts(e), this._composerCodeBlockPartialInlineDiffFatesStorageService.clearComposerPartialInlineDiffFates(e), this._patchGraphStorageService.clearPatchesForComposer(e), this.composerDataHandleManager.deleteComposer(e)]);
    for (const a of s) {
      await this.deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(a, true);
    }
  }
  async removeComposerWorktreeIfPresent(e, t) {
    const i = t ?? new Set();
    if (i.has(e)) {
      return;
    }
    i.add(e);
    let r;
    try {
      r = this.getHandleIfLoaded(e);
      let s = r ? this.getComposerData(r) : undefined;
      if (!s) {
        r = await this.getComposerHandleById(e);
        s = r ? this.getComposerData(r) : undefined;
      }
      if (!s) {
        console.info(`[composer] No composer data found for ${e};`);
        return;
      }
      const o = s.gitWorktree?.worktreePath;
      if (!o) {
        return;
      }
      try {
        await this._gitContextService?.waitForGitContextProvider();
        if (this._gitContextService?.hasGitContextProvider()) {
          await this._gitContextService.removeWorktree(o);
          console.info(`[composer] Removed git worktree: ${o}`);
        } else {
          console.info(`[composer] Git provider not registered; skipping git worktree removal for ${o}`);
        }
      } catch (a) {
        console.info(`[composer] Error removing git worktree ${o}`, a);
      }
    } finally {
      if (r && !r.isDisposed) {
        this.updateComposerDataSetStore(r, s => s("gitWorktree", undefined));
      }
      this._stopWorktreeWatcher(e);
      r?.dispose();
    }
  }
  getComposerData(e) {
    try {
      return e.data;
    } catch {
      return;
    }
  }
  getComposerDataIfLoaded(e) {
    const t = this.getHandleIfLoaded(e);
    if (t) {
      return t.data;
    }
  }
  getAllCachedCodeBlocks(e) {
    const t = this.getComposerData(e);
    if (!t) {
      throw Error("[composer] composer doesn't exist");
    }
    const {
      codeBlockData: i
    } = t;
    const r = [];
    for (const s of Object.keys(i)) {
      const o = i[s];
      for (const a of Object.keys(o)) {
        r.push(o[a]);
      }
    }
    return r.filter(({
      isCached: s
    }) => s === true);
  }
  isRunningCapabilities(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return false;
    }
    for (const i of t.capabilities) {
      if (i.isRunning()) {
        return true;
      }
    }
    return false;
  }
  isComposerRunning(e) {
    const t = this.getComposerData(e);
    if (t) {
      if (t.status === "generating") {
        return true;
      } else {
        return Object.values(t.codeBlockData ?? {}).some(r => Object.values(r).some(s => s.status === "applying" && !s.isNotApplied));
      }
    } else {
      return false;
    }
  }
  getOldestNonRunningSelectedComposerId(e) {
    const t = this.selectedComposerIds;
    if (t.length === 0) {
      return;
    }
    const i = t.filter(s => {
      if (e && s === e) {
        return false;
      }
      const o = this.getHandleIfLoaded(s);
      return !o || !this.isComposerRunning(o);
    });
    if (i.length === 0) {
      return;
    }
    const r = this.allComposersData.lastFocusedComposerIds.filter(s => i.includes(s));
    if (r.length > 0) {
      return r[r.length - 1];
    } else {
      return i[0];
    }
  }
  getToolFormer(e) {
    return this.getComposerCapability(e, ko.TOOL_FORMER);
  }
  getPendingUserDecisionGroup(e) {
    const t = this.getToolFormer(e);
    if (t) {
      return t.getPendingUserDecisionGroup()();
    } else {
      return [];
    }
  }
  getIsBlockingUserDecision(e) {
    const t = this.getToolFormer(e);
    if (t) {
      return t.getIsBlockingUserDecision()();
    } else {
      return false;
    }
  }
  getBlockingUserDecisionToolType(e) {
    const t = this.getToolFormer(e);
    if (!t) {
      return;
    }
    const i = t.getPendingUserDecisionGroup()();
    if (i.length !== 0) {
      return i[0].clientSideTool;
    }
  }
  setLoadingToolFormerToolsToCancelled(e) {
    const t = this.getToolFormer(e);
    if (t) {
      t.setLoadingToolsToCancelled();
    }
  }
  setPendingToolFormerToolsToCancelled(e) {
    const t = this.getToolFormer(e);
    if (t) {
      t.setPendingToolsToCancelled();
    }
  }
  getComposerCapability(e, t) {
    const i = this.getComposerData(e);
    if (i) {
      return sc(() => {
        let r = i.capabilities.find(s => s.type === t);
        if (!!r && !!(r instanceof Pq) || !(this.loadComposerCapabilities(e), r = i.capabilities.find(s => s.type === t), !r || !(r instanceof Pq))) {
          return r;
        }
      });
    }
  }
  getLoadedConversation(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return [];
    }
    const i = t.conversationMap;
    const r = t.fullConversationHeadersOnly;
    const s = r.length;
    return sc(() => {
      const o = [];
      for (let a = r.length - 1; a >= 0; a--) {
        const l = r[a];
        const u = i[l.bubbleId];
        if (u) {
          o.push(u);
        } else {
          break;
        }
      }
      return o.reverse();
    });
  }
  getLoadedConversationById(e) {
    const t = sc(() => this.loadedComposers.byId[e]);
    if (!t) {
      return [];
    }
    const i = t.conversationMap;
    const r = t.fullConversationHeadersOnly;
    const s = r.length;
    return sc(() => {
      const o = [];
      for (let a = r.length - 1; a >= 0; a--) {
        const l = r[a];
        const u = i[l.bubbleId];
        if (u) {
          o.push(u);
        } else {
          break;
        }
      }
      return o.reverse();
    });
  }
  unloadComposerBubblesBeforeBubble(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return;
    }
    const r = i.fullConversationHeadersOnly.findIndex(o => o.bubbleId === t);
    if (r <= 0) {
      return;
    }
    const s = i.fullConversationHeadersOnly.slice(0, r).map(o => o.bubbleId).filter(o => i.conversationMap[o] !== undefined);
    if (s.length !== 0) {
      this.updateComposerDataSetStore(e, o => {
        Gw(() => {
          for (const a of s) {
            o("conversationMap", a, undefined);
          }
        });
      });
    }
  }
  async deleteComposerBubbles(e, t) {
    this.updateComposerDataSetStore(e, i => i("fullConversationHeadersOnly", r => r.filter(s => !t.includes(s.bubbleId))));
    for (const i of t) {
      this.updateComposerDataSetStore(e, r => r("conversationMap", i, undefined));
    }
    await Promise.all(t.map(i => this._composerMessageStorageService.deleteMessage(e.composerId, i)));
  }
  async appendComposerBubbles(e, t) {
    const i = sc(() => this.getComposerData(e));
    if (!i) {
      return;
    }
    const r = i.fullConversationHeadersOnly.findIndex(a => i.conversationMap[a.bubbleId]?.bcId);
    this.updateComposerDataSetStore(e, a => {
      Gw(() => {
        for (const l of t) {
          a("conversationMap", l.bubbleId, l);
        }
      });
    });
    this.updateComposerDataSetStore(e, a => {
      Gw(() => {
        let l = i.fullConversationHeadersOnly.length;
        for (const u of t) {
          a("fullConversationHeadersOnly", l, {
            bubbleId: u.bubbleId,
            type: u.type,
            serverBubbleId: u.serverBubbleId
          });
          l++;
        }
      });
    });
    const s = e.composerId;
    let o = t;
    if (i.createdFromBackgroundAgent?.shouldStreamMessages) {
      if (i.createdFromBackgroundAgent.bcId === PNe) {
        o = [];
      } else {
        const a = i.agentSessionId !== undefined ? i.createdFromBackgroundAgent.kickoffMessageId : undefined;
        if (a !== undefined) {
          o = t.filter(l => l.serverBubbleId !== undefined && l.serverBubbleId.length > 0 ? true : l.bubbleId === a);
        } else {
          o = t.filter(l => l.serverBubbleId !== undefined && l.serverBubbleId.length > 0);
        }
      }
    }
    if (o.length > 0) {
      await Promise.all(o.map(a => this._composerMessageStorageService.storeMessage(s, a)));
    }
  }
  async insertComposerBubblesAtIndex(e, t, i) {
    this.updateComposerDataSetStore(e, r => r("fullConversationHeadersOnly", s => {
      const o = Math.max(0, Math.min(i, s.length));
      const a = s.slice(0, o);
      const l = s.slice(o);
      return [...a, ...t.map(u => ({
        bubbleId: u.bubbleId,
        type: u.type,
        serverBubbleId: u.serverBubbleId
      })), ...l];
    }));
    for (const r of t) {
      this.updateComposerDataSetStore(e, s => s("conversationMap", r.bubbleId, r));
    }
    await Promise.all(t.map(r => this._composerMessageStorageService.storeMessage(e.composerId, r)));
  }
  getComposerBubbleIndex(e, t) {
    const i = this.getComposerData(e);
    if (i) {
      return sc(() => i.fullConversationHeadersOnly.findIndex(r => r.bubbleId === t));
    } else {
      return -1;
    }
  }
  getComposerBubble(e, t) {
    const i = this.getComposerData(e);
    if (i) {
      return i.conversationMap[t];
    }
  }
  getComposerBubbleUntracked(e, t) {
    return sc(() => {
      const i = this.getComposerData(e);
      if (i) {
        return i.conversationMap[t];
      }
    });
  }
  getComposerBubbleAsync(e, t) {
    const i = this.getComposerBubble(e, t);
    if (i) {
      return Promise.resolve(i);
    } else {
      return this._composerMessageStorageService.retrieveMessage(e.composerId, t);
    }
  }
  updateComposerBubbleSetStore(e, t, i) {
    this.updateComposerDataSetStore(e, r => {
      i((...o) => r("conversationMap", t, ...o));
    });
  }
  async updateComposerBubbleCheckpoint(e, t, i, r) {
    if (!i) {
      return;
    }
    const s = e.composerId;
    const o = this.getComposerBubble(e, t)?.checkpointId;
    const a = this.getComposerBubble(e, t)?.afterCheckpointId;
    if (o && !r.isAfterCheckpoint) {
      this._composerCheckpointStorageService.updateCheckpoint(s, o, l => {
        Object.assign(l, i);
      });
    } else if (a && r.isAfterCheckpoint) {
      this._composerCheckpointStorageService.updateCheckpoint(s, a, l => {
        Object.assign(l, i);
      });
    } else {
      const l = await this._composerCheckpointStorageService.storeCheckpoint(s, i);
      this.updateComposerDataSetStore(e, u => u("conversationMap", t, d => r.isAfterCheckpoint ? {
        ...d,
        afterCheckpointId: l
      } : {
        ...d,
        checkpointId: l
      }));
    }
  }
  updateComposerBubble(e, t, i) {
    this.updateComposerDataSetStore(e, r => r("conversationMap", t, s => ({
      ...s,
      ...i
    })));
  }
  getLastHumanBubble(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return;
    }
    const i = t.fullConversationHeadersOnly.length;
    const r = sc(() => {
      for (let s = t.fullConversationHeadersOnly.length - 1; s >= 0; s--) {
        if (t.fullConversationHeadersOnly[s].type === ul.HUMAN) {
          return t.fullConversationHeadersOnly[s].bubbleId;
        }
      }
    });
    if (r) {
      return t.conversationMap[r];
    }
  }
  getLastAiBubble(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return;
    }
    const r = i.fullConversationHeadersOnly.length;
    const s = sc(() => {
      for (let o = i.fullConversationHeadersOnly.length - 1; o >= 0; o--) {
        if (i.fullConversationHeadersOnly[o].type === ul.AI) {
          if (t?.skipSummarization && i.conversationMap[i.fullConversationHeadersOnly[o].bubbleId]?.capabilityType === ko.SUMMARIZATION) {
            continue;
          }
          return i.fullConversationHeadersOnly[o].bubbleId;
        }
      }
    });
    if (s) {
      return i.conversationMap[s];
    }
  }
  getLastHumanBubbleId(e) {
    if (this.getComposerData(e)) {
      return this.getLastHumanBubble(e)?.bubbleId;
    }
  }
  getLastAiBubbleId(e) {
    if (this.getComposerData(e)) {
      return this.getLastAiBubble(e)?.bubbleId;
    }
  }
  getLastBubble(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return;
    }
    const i = this.getLastBubbleId(e);
    if (i) {
      return t.conversationMap[i];
    }
  }
  getLastBubbleId(e) {
    const t = this.getComposerData(e);
    if (t && t.fullConversationHeadersOnly.length !== 0) {
      return t.fullConversationHeadersOnly[t.fullConversationHeadersOnly.length - 1].bubbleId;
    }
  }
  getLastBubbleWhere(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return;
    }
    const r = i.fullConversationHeadersOnly.length;
    const s = sc(() => [...this.getLoadedConversation(e)].reverse().find(l => t(l))?.bubbleId);
    if (s) {
      return i.conversationMap[s];
    }
  }
  getLastAiBubbles(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return [];
    }
    if (t?.humanBubbleId) {
      const r = this.getComposerBubbleIndex(e, t.humanBubbleId);
      if (r === -1) {
        return [];
      }
      let s = r;
      while (s > 0 && i.fullConversationHeadersOnly[s - 1].type === ul.HUMAN) {
        s--;
      }
      let o = s - 1;
      while (o >= 0 && i.fullConversationHeadersOnly[o].type === ul.AI) {
        o--;
      }
      const a = o < 0 ? 0 : o + 1;
      return i.fullConversationHeadersOnly.slice(a, s).map(l => i.conversationMap[l.bubbleId]).filter(Ch);
    } else {
      const r = this.getLastHumanBubbleId(e);
      if (!r) {
        return [];
      }
      const s = i.fullConversationHeadersOnly.findIndex(o => o.bubbleId === r);
      return i.fullConversationHeadersOnly.slice(s + 1).map(o => i.conversationMap[o.bubbleId]).filter(Ch);
    }
  }
  getNextAiBubbles(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return [];
    }
    const r = this.getComposerBubbleIndex(e, t.humanBubbleId);
    if (r === -1) {
      return [];
    }
    let s = r;
    while (s + 1 < i.fullConversationHeadersOnly.length && i.fullConversationHeadersOnly[s + 1].type === ul.HUMAN) {
      s++;
    }
    const o = s + 1;
    if (o >= i.fullConversationHeadersOnly.length) {
      return [];
    }
    let a = o;
    while (a < i.fullConversationHeadersOnly.length && i.fullConversationHeadersOnly[a].type === ul.AI) {
      a++;
    }
    return i.fullConversationHeadersOnly.slice(o, a).map(l => i.conversationMap[l.bubbleId]).filter(Ch);
  }
  async getCurrentFilesContent(e, t) {
    const i = new Map();
    const r = this.getHandleIfLoaded(e);
    const s = r ? this.getComposerData(r) : undefined;
    for (const o of t) {
      if (!(await this._composerFileService.exists({
        uri: je.parse(o),
        composerData: s
      }))) {
        continue;
      }
      const a = je.parse(o);
      let l;
      try {
        l = await this.composerTextModelService.createModelReference(a, s, true);
        const d = l.object.textEditorModel.getLinesContent();
        i.set(o, d);
      } finally {
        l?.dispose();
      }
    }
    return i;
  }
  selectLastHumanBubbleAboveInput(e) {
    const t = this.getComposerData(e);
    if (!t) {
      return false;
    }
    for (let i = t.fullConversationHeadersOnly.length - 1; i >= 0; i--) {
      const r = t.fullConversationHeadersOnly[i];
      if (r.type === ul.HUMAN) {
        this.updateComposerData(e, {
          selectedBubbleId: r.bubbleId
        });
        aSt(r.bubbleId);
        return true;
      }
    }
    return false;
  }
  getDebugInfo() {
    return {
      allComposersData: this.allComposersData,
      selectedComposerId: this.selectedComposerId,
      selectedComposerIds: this.selectedComposerIds,
      lastFocusedComposerIds: this.getLastFocusedComposerIds()
    };
  }
  getLoadedComposers() {
    return ZC(this.loadedComposers.ids);
  }
  getLastFocusedComposerIds() {
    return [...this.allComposersData.lastFocusedComposerIds];
  }
  async getConversationFromBubble(e, t) {
    const i = this.getComposerData(e);
    if (!i) {
      return [];
    }
    const r = e.composerId;
    const s = this.getComposerBubbleIndex(e, t);
    if (s === -1) {
      return [];
    }
    const o = i.fullConversationHeadersOnly.slice(s);
    const a = new Map();
    for (const d of o) {
      const m = i.conversationMap[d.bubbleId];
      if (m) {
        a.set(d.bubbleId, m);
      }
    }
    const l = o.filter(d => !a.has(d.bubbleId)).map(d => d.bubbleId);
    if (l.length > 0) {
      const d = l.map(p => this._composerMessageStorageService.retrieveMessage(r, p));
      const m = await Promise.all(d);
      for (const p of m) {
        if (p) {
          a.set(p.bubbleId, p);
        }
      }
    }
    const u = [];
    for (const d of o) {
      const m = a.get(d.bubbleId);
      if (m) {
        u.push(m);
      }
    }
    return u;
  }
  async loadConversationFromBubble(e, t) {
    const i = await this.getConversationFromBubble(e, t);
    const r = i.filter(s => !this.getComposerBubble(e, s.bubbleId));
    if (r.length > 0) {
      this.updateComposerDataSetStore(e, s => {
        Gw(() => {
          for (const o of r) {
            s("conversationMap", o.bubbleId, o);
          }
        });
      });
    }
    return i;
  }
  async loadBubblesByIds(e, t) {
    const i = this.getComposerData(e);
    if (!i || t.length === 0) {
      return;
    }
    const r = t.filter(o => !i.conversationMap[o]);
    if (r.length === 0) {
      return;
    }
    const s = await this._composerMessageStorageService.retrieveMessagesBatch(e.composerId, r);
    if (s.size > 0) {
      this.updateComposerDataSetStore(e, o => {
        Gw(() => {
          for (const [a, l] of s) {
            o("conversationMap", a, l);
          }
        });
      });
    }
  }
  getComposerBubbleIdFromPotentialServerBubbleId(e, t) {
    const i = this.getComposerData(e);
    if (i) {
      return sc(() => {
        for (const r of i.fullConversationHeadersOnly) {
          if (r.bubbleId === t || r.serverBubbleId === t) {
            return r.bubbleId;
          }
        }
      });
    }
  }
  updateCodeBlockLastAppliedAt(e, t, i) {
    if (!this.getComposerData(e)) {
      return;
    }
    const s = t.toString();
    this.updateComposerDataSetStore(e, o => o("codeBlockData", s, i, "lastAppliedAt", Date.now()));
  }
  async _resolveMainWorktreePath() {
    const e = this._workspaceContextService.getWorkspace().folders;
    if (e.length === 0) {
      return;
    }
    const t = e[0].uri.fsPath;
    if (t.length !== 0) {
      try {
        return (await this._gitContextService.getGitRoot(t)) ?? t;
      } catch {
        return t;
      }
    }
  }
  async createWorktree(e, t, i, r, s) {
    const o = e.composerId;
    try {
      this.updateComposerDataSetStore(e, l => l("isCreatingWorktree", true));
      this.updateComposerDataSetStore(e, l => {
        l("codeBlockData", {});
        l("originalFileStates", {});
        l("newlyCreatedFiles", []);
        l("newlyCreatedFolders", []);
      });
      const a = await this._worktreeManagerService.createWorktree({
        composerId: o,
        baseBranch: i,
        targetWorktreePath: r,
        excludeDirtyFiles: s
      }, t);
      if (a) {
        const l = await this._resolveMainWorktreePath();
        const u = {
          worktreePath: a.path,
          commitHash: a.commitHash,
          branchName: a.branchName,
          mainWorktreePath: l
        };
        this.updateComposerDataSetStore(e, d => d("gitWorktree", u));
        this._startWorktreeWatcher(o, u.worktreePath);
        this._onDidChangeComposerWorktree.fire({
          composerId: o,
          worktreePath: u.worktreePath
        });
        this._generateAndSetWorktreeBranch(e, a.path).catch(d => {
          console.error("[composer] Failed to generate and set worktree branch", d);
        });
        return u;
      }
      return;
    } catch (a) {
      console.error("[composer] Error creating worktree", a);
      this._notificationService?.notify?.({
        message: `Failed to create Git worktree: ${ov(a)}`,
        severity: Rs.Error
      });
      return;
    } finally {
      if (!e.isDisposed) {
        this.updateComposerDataSetStore(e, a => a("isCreatingWorktree", false));
        if (i) {
          this.updateComposerDataSetStore(e, a => a("pendingCreateWorktreeBaseBranchName", undefined));
        }
      }
    }
  }
  getRootComposerId(e) {
    return this._getRootComposerIdRecursive(e, new Set(), 0);
  }
  _getRootComposerIdRecursive(e, t, i) {
    if (i > 10) {
      console.warn("[ComposerDataService] Maximum subagent hierarchy depth exceeded, returning current composer ID");
      return e;
    }
    if (t.has(e)) {
      console.warn("[ComposerDataService] Circular reference detected in subagent hierarchy, returning current composer ID");
      return e;
    }
    t.add(e);
    const r = this.getHandleIfLoaded(e);
    const s = r ? this.getComposerData(r) : undefined;
    if (s?.subagentInfo?.parentComposerId) {
      return this._getRootComposerIdRecursive(s.subagentInfo.parentComposerId, t, i + 1);
    } else {
      return e;
    }
  }
  anyComposerHasMessages() {
    return this.allComposersData.allComposers.some(e => e.lastUpdatedAt !== undefined && e.lastUpdatedAt > e.createdAt);
  }
  isCompatibleScheme(e) {
    return [_n.file, _n.vscodeRemote, _n.vscodeNotebook, _n.vscodeTerminal, _n.git].includes(e);
  }
  async manuallyPersistComposer(e) {
    try {
      const t = this.getHandleIfLoaded(e);
      if (t) {
        await this.composerDataHandleManager.persistLoadedComposer(t.data);
      }
    } catch (t) {
      console.error("[composer] error manually persisting composer data", t);
    }
  }
  _startWorktreeWatcher(e, t) {
    this._stopWorktreeWatcher(e);
    const i = je.file(t);
    const r = {
      recursive: true,
      excludes: []
    };
    const s = this._fileService.watch(i, r);
    this._worktreeWatchers.set(e, s);
    if (VsA(s)) {
      s.onDidChange(a => {
        this._composerEventService.fireDidFilesChange(a);
      });
    }
  }
  _stopWorktreeWatcher(e) {
    const t = this._worktreeWatchers.get(e);
    if (t) {
      try {
        t.dispose();
      } catch {}
      this._worktreeWatchers.delete(e);
    }
  }
  async _generateAndSetWorktreeBranch(e, t) {
    try {
      const i = e.composerId;
      const {
        IComposerService: r
      } = await Promise.resolve().then(() => {
        J0();
        return Bmg;
      });
      const o = await this._instantiationService.invokeFunction(a => a.get(r)).generateBranchNameForWorktree(i);
      if (!o) {
        console.warn("[composer] Failed to generate branch name for worktree");
        return;
      }
      await this._worktreeManagerService.updateWorktreeBranchName(t, o);
      if (!e.isDisposed) {
        this.updateComposerDataSetStore(e, a => {
          a("gitWorktree", l => l && {
            ...l,
            branchName: o
          });
        });
      }
      console.log(`[composer] Generated branch name ${o} for worktree`);
    } catch (i) {
      console.error("[composer] Error generating and setting worktree branch:", i);
    }
  }
  _rebuildPlanReferencesIndexFromHeaders() {
    this._planReferencesIndex.clear();
    for (const e of this.allComposersData.allComposers) {
      if (e.referencedPlans) {
        this._updatePlanReferencesIndex(e.composerId, e.referencedPlans);
      }
    }
  }
  _updatePlanReferencesIndex(e, t) {
    for (const [i, r] of this._planReferencesIndex.entries()) {
      r.delete(e);
      if (r.size === 0) {
        this._planReferencesIndex.delete(i);
      }
    }
    for (const i of t) {
      if (i.type === "composer") {
        const r = i.composerId;
        if (!this._planReferencesIndex.has(r)) {
          this._planReferencesIndex.set(r, new Set());
        }
        this._planReferencesIndex.get(r).add(e);
      } else if (i.type === "file" && i.composerId) {
        const r = i.composerId;
        if (!this._planReferencesIndex.has(r)) {
          this._planReferencesIndex.set(r, new Set());
        }
        this._planReferencesIndex.get(r).add(e);
      }
    }
  }
  getComposersReferencingPlan(e) {
    const t = this._planReferencesIndex.get(e);
    if (!t || t.size === 0) {
      return [];
    }
    const i = [];
    for (const r of t) {
      const s = this.allComposersData.allComposers.find(o => o.composerId === r);
      if (s) {
        i.push({
          composerId: s.composerId,
          name: s.name
        });
      }
    }
    return i;
  }
  isWorktreeComposer(e) {
    if (!e) {
      return false;
    }
    const t = this.getHandleIfLoaded(e);
    return !!(t ? this.getComposerData(t) : undefined)?.gitWorktree?.worktreePath;
  }
};
__decorate([Gs("ComposerDataService.getComposerTitle")], ly.prototype, "getComposerTitle", null);
__decorate([Gs("ComposerDataService.setLastFocusedComposerId")], ly.prototype, "setLastFocusedComposerId", null);
__decorate([Gs("ComposerDataService.updateComposerDataAsync")], ly.prototype, "updateComposerDataAsync", null);
__decorate([Gs("ComposerDataService.getHandleIfLoaded")], ly.prototype, "getHandleIfLoaded", null);
__decorate([Gs("ComposerDataService.composerWasLoadedHook")], ly.prototype, "composerWasLoadedHook", null);
__decorate([Gs("ComposerDataService.composerWasUnloadedHook")], ly.prototype, "composerWasUnloadedHook", null);
__decorate([Gs("ComposerDataService.getComposerHandleById")], ly.prototype, "getComposerHandleById", null);
__decorate([Gs("ComposerDataService.getOrCreateHandleForBackgroundAgent")], ly.prototype, "getOrCreateHandleForBackgroundAgent", null);
__decorate([Gs("ComposerDataService.updateSelectedComposer")], ly.prototype, "updateSelectedComposer", null);
__decorate([Gs("ComposerDataService.updateComposerDataSetStore")], ly.prototype, "updateComposerDataSetStore", null);
__decorate([Gs("ComposerDataService.updateComposerData")], ly.prototype, "updateComposerData", null);
__decorate([Gs("ComposerDataService.saveComposers")], ly.prototype, "saveComposers", null);
__decorate([Gs("ComposerDataService.appendComposer")], ly.prototype, "appendComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING", null);
__decorate([Gs("ComposerDataService.appendSubComposer")], ly.prototype, "appendSubComposer", null);
__decorate([Gs("ComposerDataService.deleteComposer")], ly.prototype, "deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING", null);
__decorate([Gs("ComposerDataService.getAllCachedCodeBlocks")], ly.prototype, "getAllCachedCodeBlocks", null);
__decorate([Gs("ComposerDataService.isRunningCapabilities")], ly.prototype, "isRunningCapabilities", null);
__decorate([Gs("ComposerDataService.isComposerRunning")], ly.prototype, "isComposerRunning", null);
__decorate([Gs("ComposerDataService.getOldestSelectedComposerId")], ly.prototype, "getOldestNonRunningSelectedComposerId", null);
__decorate([Gs("ComposerDataService.getToolFormer")], ly.prototype, "getToolFormer", null);
__decorate([Gs("ComposerDataService.getPendingUserDecisionGroup")], ly.prototype, "getPendingUserDecisionGroup", null);
__decorate([Gs("ComposerDataService.getIsBlockingUserDecision")], ly.prototype, "getIsBlockingUserDecision", null);
__decorate([Gs("ComposerDataService.getBlockingUserDecisionToolType")], ly.prototype, "getBlockingUserDecisionToolType", null);
__decorate([Gs("ComposerDataService.setGeneratingToolFormerToolsToCancelled")], ly.prototype, "setLoadingToolFormerToolsToCancelled", null);
__decorate([Gs("ComposerDataService.setPendingToolFormerToolsToCancelled")], ly.prototype, "setPendingToolFormerToolsToCancelled", null);
__decorate([Gs("ComposerDataService.getComposerCapability")], ly.prototype, "getComposerCapability", null);
__decorate([Gs("ComposerDataService.getLoadedConversation")], ly.prototype, "getLoadedConversation", null);
__decorate([Gs("ComposerDataService.getLoadedConversationById")], ly.prototype, "getLoadedConversationById", null);
__decorate([Gs("ComposerDataService.unloadComposerBubblesBeforeBubble")], ly.prototype, "unloadComposerBubblesBeforeBubble", null);
__decorate([Gs("ComposerDataService.deleteComposerBubbles")], ly.prototype, "deleteComposerBubbles", null);
__decorate([Gs("ComposerDataService.appendComposerBubbles")], ly.prototype, "appendComposerBubbles", null);
__decorate([Gs("ComposerDataService.insertComposerBubblesAtIndex")], ly.prototype, "insertComposerBubblesAtIndex", null);
__decorate([Gs("ComposerDataService.getComposerBubbleIndex")], ly.prototype, "getComposerBubbleIndex", null);
__decorate([Gs("ComposerDataService.getComposerBubble")], ly.prototype, "getComposerBubble", null);
__decorate([Gs("ComposerDataService.getComposerBubbleUntracked")], ly.prototype, "getComposerBubbleUntracked", null);
__decorate([Gs("ComposerDataService.getComposerBubbleAsync")], ly.prototype, "getComposerBubbleAsync", null);
__decorate([Gs("ComposerDataService.updateComposerBubbleSetStore")], ly.prototype, "updateComposerBubbleSetStore", null);
__decorate([Gs("ComposerDataService.updateComposerBubbleCheckpoint")], ly.prototype, "updateComposerBubbleCheckpoint", null);
__decorate([Gs("ComposerDataService.updateComposerBubble")], ly.prototype, "updateComposerBubble", null);
__decorate([Gs("ComposerDataService.getLastHumanBubble")], ly.prototype, "getLastHumanBubble", null);
__decorate([Gs("ComposerDataService.getLastAiBubble")], ly.prototype, "getLastAiBubble", null);
__decorate([Gs("ComposerDataService.getLastHumanBubbleId")], ly.prototype, "getLastHumanBubbleId", null);
__decorate([Gs("ComposerDataService.getLastAiBubbleId")], ly.prototype, "getLastAiBubbleId", null);
__decorate([Gs("ComposerDataService.getLastBubble")], ly.prototype, "getLastBubble", null);
__decorate([Gs("ComposerDataService.getLastBubbleId")], ly.prototype, "getLastBubbleId", null);
__decorate([Gs("ComposerDataService.getLastBubbleWhere")], ly.prototype, "getLastBubbleWhere", null);
__decorate([Gs("ComposerDataService.getCurrentFilesContent")], ly.prototype, "getCurrentFilesContent", null);
__decorate([Gs("ComposerDataService.selectLastHumanBubbleAboveInput")], ly.prototype, "selectLastHumanBubbleAboveInput", null);
__decorate([Gs("ComposerDataService.getLoadedComposers")], ly.prototype, "getLoadedComposers", null);
__decorate([Gs("ComposerDataService.getConversationFromBubble")], ly.prototype, "getConversationFromBubble", null);
__decorate([Gs("ComposerDataService.loadConversationFromBubble")], ly.prototype, "loadConversationFromBubble", null);
__decorate([Gs("ComposerDataService.loadBubblesByIds")], ly.prototype, "loadBubblesByIds", null);
__decorate([Gs("ComposerDataService.getComposerBubbleIdFromPotentialServerBubbleId")], ly.prototype, "getComposerBubbleIdFromPotentialServerBubbleId", null);
__decorate([Gs("ComposerDataService.getRootComposerId")], ly.prototype, "getRootComposerId", null);
__decorate([Gs("ComposerDataService.manuallyPersistComposer")], ly.prototype, "manuallyPersistComposer", null);
ly = Jnu = __decorate([__param(0, Hi), __param(1, Lr), __param(2, ku), __param(3, ln), __param(4, iie), __param(5, BA), __param(6, YZ), __param(7, b0), __param(8, yu), __param(9, fp), __param(10, fr), __param(11, Cc), __param(12, Ctt), __param(13, Ftt), __param(14, _$e), __param(15, Ghn), __param(16, Hga), __param(17, ix), __param(18, AE), __param(19, ms), __param(20, ln), __param(21, ku), __param(22, Gr), __param(23, C$e), __param(24, Tl), __param(25, Fn), __param(26, tie), __param(27, Htt), __param(28, qhn)], ly);
Vi(Oa, ly, 0, 1);
