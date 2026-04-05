"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerCodeBlockService.js
// Offset: 27925134 (bundle byte offset)
// Size: 30447 bytes
Ti();
cv();
Lmn();
iw();
rt();
cu();
zr();
Yr();
oa();
Yn();
Bc();
sie();
_M();
Ix();
L3t();
WY();
Hk();
Er();
Wt();
Dd();
VA();
ps();
fE();
_g();
Ott();
QFg();
jk();
cp();
Zk();
uce();
vEe();
gye();
hnt();
UF();
RVg = {
  shouldGracefullyFallBackOnTimeout: true
};
EJ = xi("composerCodeBlockService");
tS = class extends at {
  get userPlansDir() {
    return this._userPlansDir;
  }
  async _getUserPlansDirAsync() {
    if (this._userPlansDir) {
      return this._userPlansDir;
    } else {
      this._userPlansDirPromise ||= this._pathService.userHome().then(e => {
        this._userPlansDir = lV(e);
        return this._userPlansDir;
      });
      return this._userPlansDirPromise;
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super();
    this._reactiveStorageService = e;
    this.composerTextModelService = t;
    this._composerEventService = i;
    this._composerCodeBlockDiffStorageService = r;
    this._composerCodeBlockPartialInlineDiffFatesStorageService = s;
    this._editorWorkerService = o;
    this._metricsService = a;
    this._composerDataService = l;
    this._composerFileService = u;
    this._inlineDiffService = d;
    this._diffChangeSourceRegistry = m;
    this._workspaceContextService = p;
    this._pathService = g;
    this._composerDiffCache = new Fb(50);
    this._composerDiffSemaphore = new Pmn(5);
    this._fileWatchers = new Map();
    this._uriToCachedCodeBlocks = new Map();
    this._uriToCachedCodeBlocksQueue = new Map();
    this._getUserPlansDirAsync();
    this._register(this._composerEventService.onDidFilesChange(B => {
      const R = Array.from(new Set([...this._uriToCachedCodeBlocks.keys(), ...this._uriToCachedCodeBlocksQueue.keys()]));
      for (const N of R) {
        const M = je.parse(N);
        if (B.contains(M)) {
          const O = this._uriToCachedCodeBlocksQueue.get(M.toString()) ?? [];
          this.markUriAsOutdated(M, O.length > 0);
          if (O.length > 0) {
            this._uriToCachedCodeBlocks.set(M.toString(), O);
            this._uriToCachedCodeBlocksQueue.delete(M.toString());
          }
        }
      }
    }));
    this._register(this._inlineDiffService.onDidAcceptDiff(B => {
      this._storePartialInlineDiffFates(B);
    }));
    this._register(this._inlineDiffService.onDidRejectDiff(B => {
      this._storePartialInlineDiffFates(B);
    }));
    const f = (B, R, N) => {
      const M = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const O = __addDisposableResource(M, VP("ComposerCodeBlockService.abortAndRemoveApplyGenerationUUID"), false);
        if (this.getComposerCodeBlock(B, R, N)?.applyGenerationUUID) {
          this.updateComposerCodeBlock(B, R, N, {
            applyGenerationUUID: undefined
          });
        }
      } catch (O) {
        M.error = O;
        M.hasError = true;
      } finally {
        __disposeResources(M);
      }
    };
    const A = B => {
      const R = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const N = __addDisposableResource(R, VP("ComposerCodeBlockService.handleDiffRemoval"), false);
        if (!B.composerId) {
          return;
        }
        if (B.accepted) {
          C(B.diffInfo, false);
        } else {
          w(B.diffInfo, false);
        }
      } catch (N) {
        R.error = N;
        R.hasError = true;
      } finally {
        __disposeResources(R);
      }
    };
    const w = (B, R = true) => {
      const N = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const M = __addDisposableResource(N, VP("ComposerCodeBlockService.handleDiffReject"), false);
        const {
          composerId: O,
          codeblockId: $
        } = B.composerMetadata ?? {};
        if (!O) {
          return;
        }
        const H = this._composerDataService.getHandleIfLoaded(O);
        if (!H) {
          return;
        }
        const W = this._composerDataService.getComposerData(H);
        if (!W) {
          return;
        }
        let z = B.uri;
        if (W.isNAL === true && B.uri.scheme === _n.vscodeNotebookCell) {
          try {
            z = wgt(B.uri);
          } catch {
            z = B.uri;
          }
        }
        if ($ !== undefined && this.getComposerCodeBlock(H, z, $)) {
          if (!this.isCodeBlockRegisteredAsCached(H, z, $)) {
            this.setCodeBlockStatusIncludingPreviouslyChained(H, z, $, "rejected");
            f(H, z, $);
          }
        }
        if (this._isLegacyInlineDiffsUsed()) {
          const j = B.inlineDiff !== undefined && B.inlineDiff.uri.scheme !== _n.vscodeNotebookCell && B.inlineDiff.originalTextLines.length === 0;
          if (!j) {
            const X = z.toString();
            if (W.newlyCreatedFiles?.some(re => re.uri.toString() === X) ?? false) {
              this._composerDataService.updateComposerData(H, {
                newlyCreatedFiles: W.newlyCreatedFiles?.filter(re => re.uri.toString() !== X) ?? [],
                newlyCreatedFolders: W.newlyCreatedFolders?.filter(re => !X.startsWith(re.uri.toString())) ?? []
              });
            }
          }
          if (j) {
            this._composerFileService.deleteNewFileAndMaybeFolder(z, O, W).then(X => {
              if (!X && R) {
                this._composerFileService.saveFile({
                  uri: z,
                  composerData: W,
                  options: {
                    force: true
                  }
                });
              }
            });
          } else if (R) {
            this._composerFileService.saveFile({
              uri: z,
              composerData: W,
              options: {
                force: true
              }
            });
          }
        } else {
          this._composerFileService.deleteNewFileAndMaybeFolder(z, O, W).then(j => {
            if (!j && R) {
              this._composerFileService.saveFile({
                uri: z,
                composerData: W,
                options: {
                  force: true
                }
              });
            }
          });
        }
      } catch (M) {
        N.error = M;
        N.hasError = true;
      } finally {
        __disposeResources(N);
      }
    };
    const C = (B, R = true) => {
      const N = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const M = __addDisposableResource(N, VP("ComposerCodeBlockService.handleDiffAccept"), false);
        const {
          composerId: O,
          codeblockId: $
        } = B.composerMetadata ?? {};
        if (!O) {
          return;
        }
        const H = this._composerDataService.getHandleIfLoaded(O);
        if (!H) {
          return;
        }
        const W = H.data;
        if (!W) {
          return;
        }
        let z = B.uri;
        if (W.isNAL === true && B.uri.scheme === _n.vscodeNotebookCell) {
          try {
            z = wgt(B.uri);
          } catch {
            z = B.uri;
          }
        }
        if ($ !== undefined) {
          if (!this.getComposerCodeBlock(H, z, $)) {
            return;
          }
          this.setCodeBlockStatusIncludingPreviouslyChained(H, z, $, "accepted");
          f(H, z, $);
        }
        if (R) {
          this._composerFileService.saveFile({
            uri: z,
            composerData: W,
            options: {
              force: true
            }
          });
        }
        this._composerDataService.updateComposerData(H, {
          newlyCreatedFiles: W.newlyCreatedFiles?.filter(Y => Y.uri.toString() !== z.toString()) ?? [],
          newlyCreatedFolders: W.newlyCreatedFolders?.filter(Y => !z.toString().startsWith(Y.uri.toString())) ?? []
        });
      } catch (M) {
        N.error = M;
        N.hasError = true;
      } finally {
        __disposeResources(N);
      }
    };
    const x = (B, R) => {
      const N = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const M = __addDisposableResource(N, VP("ComposerCodeBlockService.handlePartialDiff"), false);
        const {
          composerId: O
        } = B.diffInfo.composerMetadata ?? {};
        if (!O) {
          return;
        }
        const $ = this._composerDataService.getHandleIfLoaded(O);
        if (!($ ? this._composerDataService.getComposerData($) : undefined)) {
          return;
        }
        const {
          diffInfo: W,
          isDone: z
        } = B;
        if (z) {
          if (R === "accepted") {
            C(W);
          } else if (this._isLegacyInlineDiffsUsed()) {
            w({
              ...W,
              inlineDiff: B.inlineDiff
            });
          } else {
            w(W);
          }
        }
      } catch (M) {
        N.error = M;
        N.hasError = true;
      } finally {
        __disposeResources(N);
      }
    };
    const I = B => {
      const R = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        const N = __addDisposableResource(R, VP("ComposerCodeBlockService.handleAddDiffFromUndoRedo"), false);
        const {
          composerId: M,
          codeblockId: O
        } = B.composerMetadata ?? {};
        if (!M || O === undefined) {
          return;
        }
        const $ = this._composerDataService.getHandleIfLoaded(M);
        if (!$ || !$.data || !this.getComposerCodeBlock($, B.uri, O)) {
          return;
        }
        this.updateComposerCodeBlock($, B.uri, O, {
          status: "completed"
        });
        console.log(`[composer] Restored diff for ${B.uri.toString()} with codeblockId ${O}`);
      } catch (N) {
        R.error = N;
        R.hasError = true;
      } finally {
        __disposeResources(R);
      }
    };
    this._register(this._inlineDiffService.onDidAcceptDiff(C));
    this._register(this._inlineDiffService.onDidRejectDiff(B => w(B)));
    this._register(this._inlineDiffService.onDidRemoveDiffFromUndoRedo(B => A(B)));
    this._register(this._inlineDiffService.onDidAddDiffFromUndoRedo(B => I(B)));
    this._register(this._inlineDiffService.onDidAcceptPartialDiff(B => x(B, "accepted")));
    this._register(this._inlineDiffService.onDidRejectPartialDiff(B => x(B, "rejected")));
  }
  _isLegacyInlineDiffsUsed() {
    return this._diffChangeSourceRegistry.isLegacyInlineDiffsUsed();
  }
  async _storePartialInlineDiffFates(e) {
    const {
      composerMetadata: t,
      partialInlineDiffFates: i
    } = e;
    if (!t || !i) {
      return;
    }
    const {
      composerId: r,
      codeblockId: s
    } = t;
    const o = e.uri;
    const a = await this._composerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates(r, i);
    const l = this._composerDataService.getHandleIfLoaded(r);
    if (l && s) {
      this.updateComposerCodeBlock(l, o, s, {
        partialInlineDiffFatesId: a
      });
    }
  }
  getComposerCodeBlock(e, t, i) {
    return e.data.codeBlockData?.[t.toString()]?.[i];
  }
  updateComposerCodeBlock(e, t, i, r) {
    if (!e.data.codeBlockData[t.toString()]?.[i]) {
      console.trace("[composer] updateReactiveCodeBlock called for codeblockId that does not exist", t, i);
      return;
    }
    try {
      this._composerDataService.updateComposerDataSetStore(e, o => o("codeBlockData", t.toString(), i, a => ({
        ...a,
        ...r
      })));
    } catch {}
  }
  updateComposerCodeBlockSetStore(e, t, i, r) {
    if (!e.data.codeBlockData[t.toString()]?.[i]) {
      console.trace("[composer] updateComposerCodeBlockSetStore called for codeblockId that does not exist", t, i);
      return;
    }
    try {
      this._composerDataService.updateComposerDataSetStore(e, a => {
        r((...u) => a("codeBlockData", t.toString(), i, ...u));
      });
    } catch {}
  }
  shouldCache(e, t) {
    const i = e.data;
    if (t !== undefined) {
      const a = this.getComposerCodeBlock(e, t.uri, t.codeblockId);
      if (a && a.isNotApplied) {
        return true;
      }
    }
    const r = this._composerDataService.selectedComposerIds.includes(i.composerId);
    const s = this._composerDataService.getRootComposerId(i.composerId);
    const o = this._composerDataService.selectedComposerIds.includes(s);
    return !r && !o;
  }
  unregisterCachedCodeBlock(e, t, i) {
    this.updateComposerCodeBlock(e, t, i, {
      isCached: false
    });
    const r = e.data.composerId;
    const o = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter(u => u.composerId !== r || u.codeblockId !== i);
    const l = (this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? []).filter(u => u.composerId !== r || u.codeblockId !== i);
    if (o.length === 0 && l.length === 0) {
      this._fileWatchers.get(t.toString())?.dispose();
      this._fileWatchers.delete(t.toString());
      this._uriToCachedCodeBlocks.delete(t.toString());
      this._uriToCachedCodeBlocksQueue.delete(t.toString());
      return;
    }
    this._uriToCachedCodeBlocks.set(t.toString(), o);
    this._uriToCachedCodeBlocksQueue.set(t.toString(), l);
  }
  unregisterAllCachedCodeBlocks(e) {
    const t = this.getAllCachedCodeBlocks(e);
    for (const i of t) {
      this.unregisterCachedCodeBlock(e, i.uri, i.codeblockId);
    }
  }
  registerCachedCodeBlock(e, t, i, r) {
    this.updateComposerCodeBlock(e, t, i, {
      isCached: true
    });
    const s = e.data;
    const o = s.composerId;
    if (!this._fileWatchers.has(t.toString())) {
      const a = this._composerFileService.watch({
        uri: t,
        composerData: s
      });
      this._fileWatchers.set(t.toString(), a);
    }
    if (r) {
      const a = this._uriToCachedCodeBlocksQueue.get(t.toString()) ?? [];
      this._uriToCachedCodeBlocksQueue.set(t.toString(), [...a.filter(d => d.composerId !== o || d.codeblockId !== i), {
        composerId: o,
        codeblockId: i
      }]);
      const u = (this._uriToCachedCodeBlocks.get(t.toString()) ?? []).filter(d => d.composerId !== o || d.codeblockId !== i);
      this._uriToCachedCodeBlocks.set(t.toString(), u);
    } else {
      const a = this._uriToCachedCodeBlocks.get(t.toString()) ?? [];
      this._uriToCachedCodeBlocks.set(t.toString(), [...a.filter(l => l.composerId !== o || l.codeblockId !== i), {
        composerId: o,
        codeblockId: i
      }]);
    }
  }
  markUriAsOutdated(e, t) {
    if (!this._uriToCachedCodeBlocks.has(e.toString()) || !this._fileWatchers.has(e.toString())) {
      return;
    }
    const i = this._uriToCachedCodeBlocks.get(e.toString()) ?? [];
    for (const {
      composerId: r,
      codeblockId: s
    } of i) {
      const o = this._composerDataService.getHandleIfLoaded(r);
      if (!o) {
        continue;
      }
      const a = this.getComposerCodeBlock(o, e, s);
      if (a && a.isNotApplied) {
        this._composerDataService.updateComposerDataSetStore(o, l => l("codeBlockData", e.toString(), s, "diffId", undefined));
      } else {
        this.setCodeBlockStatus(o, e, s, "outdated");
        this.updateComposerCodeBlock(o, e, s, {
          isCached: false
        });
      }
    }
    if (!t) {
      this._fileWatchers.get(e.toString())?.dispose();
      this._fileWatchers.delete(e.toString());
    }
    this._uriToCachedCodeBlocks.delete(e.toString());
    this._uriToCachedCodeBlocksQueue.delete(e.toString());
  }
  isCodeBlockRegisteredAsCached(e, t, i) {
    const r = e.data.composerId;
    const s = !!this._uriToCachedCodeBlocks.get(t.toString())?.some(a => a.codeblockId === i && a.composerId === r) || !!this._uriToCachedCodeBlocksQueue.get(t.toString())?.some(a => a.codeblockId === i && a.composerId === r);
    const o = this.getComposerCodeBlock(e, t, i)?.isCached;
    return (s && o) ?? false;
  }
  getCodeBlockStatus(e, t, i) {
    const r = e.data;
    if (!r) {
      return "none";
    }
    const s = r?.codeBlockData[t.toString()];
    if (!s) {
      return "none";
    }
    const o = s[i];
    if (o) {
      return o.status;
    } else {
      return "none";
    }
  }
  setCodeBlockStatus(e, t, i, r) {
    const s = e.data;
    const o = this.getComposerCodeBlock(e, t, i);
    if (o && (this.updateComposerCodeBlock(e, t, i, {
      status: r
    }), o.fromSubagentCodeBlockInfo)) {
      const a = this._composerDataService.getHandleIfLoaded(o.fromSubagentCodeBlockInfo.composerId);
      if (a) {
        this.updateComposerCodeBlock(a, o.uri, o.fromSubagentCodeBlockInfo.codeblockId, {
          status: r
        });
      }
    }
  }
  setCodeBlockStatusIncludingPreviouslyChained(e, t, i, r) {
    const s = this.getComposerCodeBlock(e, t, i);
    if (s && (this.setCodeBlockStatus(e, t, i, r), s.chainedInfo)) {
      const o = new Set([i]);
      let a = s.chainedInfo;
      while (a) {
        const l = a.chainedFromCodeblockId;
        const u = a.composerId || e.data.composerId;
        const d = u ? this._composerDataService.getHandleIfLoaded(u) : e;
        if (!d) {
          break;
        }
        const m = this.getComposerCodeBlock(d, t, l);
        if (!m || o.has(l)) {
          break;
        }
        o.add(l);
        this.setCodeBlockStatus(d, t, l, r);
        a = m.chainedInfo || undefined;
      }
    }
  }
  getCodeBlocksOfStatuses(e, t) {
    const i = e.data;
    if (!i) {
      return [];
    }
    const r = i.codeBlockData;
    const s = Array.isArray(t) ? t : [t];
    const o = [];
    for (const a of Object.keys(r)) {
      const l = r[a];
      for (const u of Object.keys(l)) {
        const d = l[u];
        if (s.includes(d.status)) {
          o.push(d);
        }
      }
    }
    return o;
  }
  setGeneratingCodeBlocksToAborted(e) {
    const t = this.getCodeBlocksOfStatuses(e, "generating");
    for (const r of t) {
      this.setCodeBlockStatus(e, r.uri, r.codeblockId, "aborted");
    }
    const i = e.data;
    if (i) {
      for (const r of Object.keys(i.conversationMap)) {
        const s = i.conversationMap[r];
        if (s.type === ul.AI) {
          for (const o of s.codeBlocks ?? []) {
            if (o.isGenerating === true) {
              this._composerDataService.updateComposerDataSetStore(e, a => a("conversationMap", r, "codeBlocks", l => l.codeBlockIdx === o.codeBlockIdx && l.unregistered === true, "isGenerating", false));
            }
          }
        }
      }
    }
  }
  getLastCreatedCodeBlockId(e, t) {
    const i = e.data;
    if (!i) {
      return;
    }
    const r = i.codeBlockData[t.toString()];
    if (!r || Object.keys(r).length === 0) {
      return;
    }
    let s = -1;
    let o;
    for (const a in r) {
      const l = r[a];
      if (l.createdAt !== undefined && l.createdAt > s) {
        s = l.createdAt;
        o = a;
      }
    }
    return o;
  }
  getLastAppliedCodeBlockId(e, t) {
    const i = e.data;
    if (!i) {
      return;
    }
    const r = i.codeBlockData[t.toString()];
    if (!r || Object.keys(r).length === 0) {
      return;
    }
    let s = -1;
    let o;
    for (const a in r) {
      const l = r[a];
      if (l.lastAppliedAt !== undefined && l.lastAppliedAt > s) {
        s = l.lastAppliedAt;
        o = a;
      }
    }
    return o;
  }
  getLastAppliedCodeBlock(e, t) {
    const i = this.getLastAppliedCodeBlockId(e, t);
    if (i) {
      return this.getComposerCodeBlock(e, t, i);
    }
  }
  getLastAcceptedCodeBlock(e, t) {
    const i = e.data;
    if (!i) {
      return;
    }
    const r = i.codeBlockData[t.toString()];
    if (!r || Object.keys(r).length === 0) {
      return;
    }
    let s = -1;
    let o;
    for (const a in r) {
      const l = r[a];
      if (l.status === "accepted" && l.lastAppliedAt !== undefined && l.lastAppliedAt > s) {
        s = l.lastAppliedAt;
        o = a;
      }
    }
    if (o) {
      return this.getComposerCodeBlock(e, t, o);
    }
  }
  getLastAppliedCodeBlocks(e) {
    const t = e.data;
    if (!t) {
      return [];
    }
    const i = [];
    Object.keys(t.codeBlockData ?? {}).forEach(r => {
      const s = je.parse(r);
      const o = this.getLastAppliedCodeBlock(e, s);
      if (o) {
        i.push(o);
      }
    });
    return i;
  }
  getAllCachedCodeBlocks(e) {
    const t = e.data;
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
  updateCodeBlockLastAppliedAt(e, t, i) {
    if (!e.data) {
      return;
    }
    const s = t.toString();
    this._composerDataService.updateComposerDataSetStore(e, o => o("codeBlockData", s, i, "lastAppliedAt", Date.now()));
  }
  _getRelevantComposerIds(e) {
    const t = new Set();
    const i = [e.data.composerId];
    while (i.length > 0) {
      const r = i.pop();
      if (t.has(r)) {
        continue;
      }
      t.add(r);
      const s = r === e.data.composerId ? e : this._composerDataService.getHandleIfLoaded(r);
      if (s) {
        for (const o of s.data.subagentComposerIds ?? []) {
          if (!t.has(o)) {
            i.push(o);
          }
        }
      }
    }
    return t;
  }
  getRelevantComposerIds(e) {
    return this._getRelevantComposerIds(e);
  }
  hasPendingDiffs(e) {
    const t = this._getRelevantComposerIds(e);
    return this._diffChangeSourceRegistry.getDescriptors().some(i => {
      const r = i.metadata?.composerId;
      return r !== undefined && t.has(r);
    });
  }
  getInlineDiff(e, t) {
    const i = this._getRelevantComposerIds(e);
    return this._inlineDiffService.inlineDiffs.nonReactive().find(r => {
      if (r.uri.toString() !== t.toString()) {
        return false;
      }
      const s = r.composerMetadata?.composerId;
      return !!s && !!i.has(s);
    });
  }
  getAllInlineDiffs(e) {
    const t = this._getRelevantComposerIds(e);
    const i = this._inlineDiffService.inlineDiffs.nonReactive().filter(s => {
      const o = s.composerMetadata?.composerId;
      return o !== undefined && t.has(o);
    });
    const r = this.userPlansDir;
    return i.filter(s => !ZSt(s.uri, this._workspaceContextService) && (!r || !Rq(s.uri, r)));
  }
  getAllPendingDiffDescriptors(e) {
    const t = this._getRelevantComposerIds(e);
    const i = this._diffChangeSourceRegistry.getDescriptors();
    const r = this.userPlansDir;
    return i.filter(s => {
      const o = s.metadata?.composerId;
      return !!o && !!t.has(o) && !ZSt(s.uri, this._workspaceContextService) && (!r || !Rq(s.uri, r));
    });
  }
  getCodeBlockFileUris(e) {
    const t = e.data.codeBlockData;
    const i = Object.keys(t);
    const r = this.userPlansDir;
    return i.filter(s => {
      const o = t[s];
      if (!o || Object.keys(o).length === 0) {
        return false;
      }
      try {
        const a = je.parse(s);
        return !ZSt(a, this._workspaceContextService) && (!r || !Rq(a, r));
      } catch {
        return true;
      }
    });
  }
  getInlineDiffForChaining(e) {
    const t = e.toString();
    return this._inlineDiffService.inlineDiffs.nonReactive().find(i => i.uri.toString() === t && i.composerMetadata?.composerId !== undefined);
  }
  doesFileHaveInlineDiff(e, t) {
    return !!this.getInlineDiff(e, t);
  }
  doesFileHaveChanges(e, t) {
    const i = this.getLastAppliedCodeBlock(e, t);
    return i != null && i.diffId !== undefined;
  }
  getUrisOfCodeblocksWithDiffsInLastAiBubbles(e, t) {
    if (!e.data) {
      return [];
    }
    const r = this._composerDataService.getLastAiBubbles(e, {
      humanBubbleId: t
    });
    if (r.length) {
      return this.getUrisOfCodeblocksWithDiffsInAiBubbles(e, r).map(s => s.uri);
    } else {
      return [];
    }
  }
  getUrisOfCodeblocksWithDiffsInAiBubbles(e, t) {
    if (!t.length) {
      return [];
    }
    const i = new Map();
    for (const r of t) {
      r.codeBlocks?.forEach(s => {
        if (s.uri && !i.has(s.uri.toString())) {
          const o = this.getComposerCodeBlock(e, s.uri, s.codeblockId);
          if (o?.diffId !== undefined && o.lastAppliedAt !== undefined) {
            i.set(s.uri.toString(), r.bubbleId);
          }
        }
      });
    }
    return Array.from(i.entries()).map(([r, s]) => ({
      uri: je.parse(r),
      firstBubbleId: s
    }));
  }
  changeCodeBlockUri(e, t, i, r) {
    const s = e.data;
    if (!s) {
      throw new Error("[composer] No composer found for the given ID");
    }
    const o = t.toString();
    const a = i.toString();
    const l = this.getComposerCodeBlock(e, t, r);
    if (!l) {
      console.error("[composer] No codeblock found for the given URI and codeblockId", t, r);
      return "";
    }
    if (s.codeBlockData[o]?.[r]) {
      const d = {
        ...s.codeBlockData[o][r],
        uri: i
      };
      if (Object.keys(s.codeBlockData[o]).filter(p => p !== r).length === 0) {
        this._composerDataService.updateComposerDataSetStore(e, p => {
          p("codeBlockData", o, undefined);
        });
      } else {
        this._composerDataService.updateComposerDataSetStore(e, p => {
          p("codeBlockData", o, r, undefined);
        });
      }
      this._composerDataService.updateComposerDataSetStore(e, p => p("codeBlockData", a, (g = {}) => ({
        ...g,
        [r]: d
      })));
    }
    this._composerDataService.updateComposerDataSetStore(e, u => u("conversationMap", l.bubbleId, "codeBlocks", d => !d.unregistered && d.uri?.toString() === o && d.codeblockId === r, d => ({
      ...d,
      uri: i
    })));
    return r;
  }
  async computeLineDiffs(e, t, i, r) {
    const s = this.getCodeBlockV0ModelLines(e, t);
    if (!s) {
      return [];
    }
    const o = await this.computeLinesDiffWithSemaphore({
      first: s,
      second: i,
      options: {
        ignoreTrimWhitespace: r?.forStats === true,
        computeMoves: false,
        maxComputationTimeMs: 2000,
        ...RVg
      }
    });
    let a = o.changes;
    if (o.hitTimeout) {
      console.warn(`[composer] Diff computation timed out for ${t.fsPath}. File has ${s.length} original lines and ${i.length} new lines. Treating entire file as changed.`);
      a = [new _3(new rh(1, s.length + 1), new rh(1, i.length + 1), undefined)];
    }
    return a.map(u => ({
      original: u.original,
      modified: i.slice(u.modified.startLineNumber - 1, u.modified.endLineNumberExclusive - 1)
    }));
  }
  async computeLinesDiffWithSemaphore({
    first: e,
    second: t,
    options: i
  }) {
    return this._composerDiffSemaphore.withSemaphore(async () => {
      const r = await x2o(Array.isArray(e) ? e.join(`
`) : e);
      const s = await x2o(Array.isArray(t) ? t.join(`
`) : t);
      const o = JSON.stringify({
        firstSha1: r,
        secondSha1: s
      });
      const a = this._composerDiffCache.get(o);
      if (a) {
        return a;
      }
      const l = new Promise(m => {
        setTimeout(() => {
          m(new Voe([], [], true));
        }, i.maxComputationTimeMs);
      });
      const u = this._editorWorkerService.computeLinesDiff(Array.isArray(e) ? e : Zv(e), Array.isArray(t) ? t : Zv(t), i);
      const d = await Promise.race([u, l]);
      if (d.hitTimeout) {
        this._metricsService.increment({
          stat: "composer.computeLinesDiff.timedOut"
        });
      } else {
        this._composerDiffCache.set(o, d);
      }
      return d;
    });
  }
  getCodeBlockLinesByDiff(e, t, i) {
    if (!e.data) {
      return null;
    }
    const s = this.getCodeBlockV0ModelLines(e, t);
    return sc(() => i.length === 0 ? s ?? [] : this.applyDiffToLines(s ?? [], i));
  }
  getCodeBlockV0ModelLines(e, t) {
    const i = e.data;
    if (!i) {
      return null;
    }
    const r = i.originalFileStates[t.toString()];
    if (r) {
      return Zv(r.content);
    } else {
      return null;
    }
  }
  async getCodeBlockOriginalModelLines(e, t, i, r) {
    const s = e.data;
    if (!s) {
      return null;
    }
    const o = this.getComposerCodeBlock(e, t, i);
    if (!o || !o.diffId) {
      return null;
    }
    if (r?.shouldChain && o.chainedInfo) {
      const l = o.chainedInfo.composerId || e.data.composerId;
      const u = l ? this._composerDataService.getHandleIfLoaded(l) : e;
      if (!u) {
        return null;
      }
      const d = this.getComposerCodeBlock(u, t, o.chainedInfo.chainedFromCodeblockId);
      if (!d || !d.diffId) {
        return null;
      }
      const m = await this._composerCodeBlockDiffStorageService.retrieveDiff(l, d.diffId);
      if (m) {
        return this.getCodeBlockLinesByDiff(u, t, m.originalModelDiffWrtV0);
      } else {
        return null;
      }
    }
    const a = await this._composerCodeBlockDiffStorageService.retrieveDiff(s.composerId, o.diffId);
    if (a) {
      return this.getCodeBlockLinesByDiff(e, t, a.originalModelDiffWrtV0);
    } else {
      return null;
    }
  }
  async getCodeBlockNewModelLines(e, t, i) {
    const r = e.data;
    if (!r) {
      return null;
    }
    const s = this.getComposerCodeBlock(e, t, i);
    if (!s || !s.diffId) {
      return null;
    }
    const o = await this._composerCodeBlockDiffStorageService.retrieveDiff(r.composerId, s.diffId);
    if (o) {
      return this.getCodeBlockLinesByDiff(e, t, o.newModelDiffWrtV0);
    } else {
      return null;
    }
  }
  applyDiffToLines(e, t) {
    const i = [];
    let r = 0;
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (r < t.length) {
        const {
          original: a,
          modified: l
        } = t[r];
        if (s === a.startLineNumber - 1 && (i.push(...l), r++, a.endLineNumberExclusive !== a.startLineNumber)) {
          s += a.endLineNumberExclusive - a.startLineNumber - 1;
          continue;
        }
      }
      i.push(o);
    }
    while (r < t.length) {
      const {
        original: s,
        modified: o
      } = t[r];
      i.push(...o);
      r++;
    }
    return i;
  }
  async registerNewCodeBlock(e, t, i, r, s) {
    const o = e.data;
    if (!o) {
      throw new Error("[composer] No composer found for the given ID");
    }
    const a = this._composerDataService.getLoadedConversation(e);
    const l = s?.bubbleId ? a.findIndex(C => C.bubbleId === s.bubbleId) : a.length - 1;
    const u = a.at(l);
    const d = s?.bubbleId ?? u?.bubbleId;
    if (!d) {
      throw new Error("[composer] No AI message found");
    }
    const m = u && u.codeBlocks?.find(C => C.codeBlockIdx === r)?.unregistered === true;
    const p = t.toString();
    const g = Wr();
    const f = {
      _v: t_g,
      bubbleId: d,
      codeBlockIdx: r,
      uri: t,
      codeblockId: g,
      status: s?.status ?? "none",
      isNotApplied: s?.isNotApplied,
      languageId: s?.languageId,
      chainedInfo: s?.chainedInfo,
      fromSubagentCodeBlockInfo: s?.fromSubagentCodeBlockInfo,
      codeBlockDisplayPreference: s?.isNotApplied ? "expanded" : "collapsed",
      createdAt: Date.now(),
      composerChatGenerationUuid: o.chatGenerationUUID
    };
    this._composerDataService.updateComposerDataSetStore(e, C => C("codeBlockData", p, x => ({
      ...(x || {}),
      [g]: f
    })));
    if (u) {
      if (m) {
        this._composerDataService.updateComposerDataSetStore(e, C => C("conversationMap", d, "codeBlocks", x => x.codeBlockIdx === r, {
          uri: t,
          codeblockId: g,
          codeBlockIdx: r,
          unregistered: false,
          content: i,
          searchReplace: s?.searchReplace
        }));
      } else {
        this.addNewCodeBlockToBubble(e, d, r, {
          uri: t,
          codeblockId: g,
          codeBlockIdx: r,
          content: i,
          languageId: s?.languageId,
          searchReplace: s?.searchReplace
        });
      }
    }
    const A = o.codeBlockData[p];
    if ((!A || Object.keys(A).length === 1) && o.originalFileStates[p] === undefined) {
      const C = (await this.getFileContent(t, e)) ?? "";
      const x = await this._composerFileService.exists({
        uri: t,
        composerData: o
      });
      const I = [];
      if (!x) {
        let B = t;
        let R = Td(B);
        while (!Zc(B, R) && !(await this._composerFileService.exists({
          uri: R,
          composerData: o
        }))) {
          I.push(R);
          B = R;
          R = Td(B);
        }
        I.reverse();
      }
      this._composerDataService.updateComposerDataSetStore(e, B => B("originalFileStates", p, {
        content: C,
        firstEditBubbleId: d,
        isNewlyCreated: !x,
        newlyCreatedFolders: I
      }));
      if (t.scheme === _n.vscodeNotebookCell) {
        try {
          const B = wgt(t);
          if (o.originalFileStates[B.toString()] === undefined) {
            const R = (await this.getFileContent(B, e)) ?? "";
            const N = await this._composerFileService.exists({
              uri: B,
              composerData: o
            });
            this._composerDataService.updateComposerDataSetStore(e, M => M("originalFileStates", B.toString(), {
              content: R,
              firstEditBubbleId: d,
              isNewlyCreated: !N,
              newlyCreatedFolders: I
            }));
          }
        } catch {
          console.error(`[registerNewCodeBlock] Failed to process notebook cell URI: ${t.toString()}`);
        }
      }
    }
    this._composerEventService.fireDidRegisterNewCodeBlock({
      composerId: o.composerId,
      uri: t,
      codeblockId: g,
      codeBlockIdx: r,
      messageIndex: l
    });
    return f;
  }
  async getFileContent(e, t) {
    const i = t.data;
    if (!(await this._composerFileService.exists({
      uri: e,
      composerData: i
    }))) {
      return null;
    }
    let s;
    try {
      const o = t.data;
      s = await this.composerTextModelService.createModelReference(e, o, true);
      return s.object.textEditorModel.getValue();
    } catch (o) {
      console.error("[composer] error getting content of file", e, o);
      return null;
    } finally {
      s?.dispose();
    }
  }
  addNewCodeBlockToBubble(e, t, i, r) {
    this._composerDataService.updateComposerDataSetStore(e, s => s("conversationMap", t, "codeBlocks", o => {
      const a = [...(o || [])];
      const l = a.findIndex(d => d.codeBlockIdx > i);
      const u = {
        ...r,
        codeBlockIdx: i
      };
      if (l === -1) {
        a.push(u);
      } else {
        a.splice(l, 0, u);
      }
      return a;
    }));
  }
  getChainedOriginalCodeBlock(e, t, i) {
    if (!e.data) {
      return null;
    }
    const s = this.getComposerCodeBlock(e, t, i);
    if (!s || !s.chainedInfo) {
      return null;
    }
    let o = s.chainedInfo;
    let a;
    const l = new Set([i]);
    while (o) {
      const u = o.chainedFromCodeblockId;
      const d = o.composerId || e.data.composerId;
      const m = d ? this._composerDataService.getHandleIfLoaded(d) : e;
      if (!m || (a = this.getComposerCodeBlock(m, t, u), l.has(u))) {
        break;
      }
      l.add(u);
      o = a?.chainedInfo || undefined;
    }
    return a ?? null;
  }
  async getCodeBlockDiffStats(e, t) {
    const i = e.data;
    if (!i) {
      return {
        added: 0,
        removed: 0
      };
    }
    let r = t.toString();
    if (i.gitWorktree) {
      r = TSt(t, i, this._workspaceContextService).toString();
    }
    const s = i.codeBlockData[r];
    if (!s || Object.keys(s).length === 0) {
      console.warn(`[composer] No code blocks found for URI: ${r} in composer ${e.composerId}`);
      return {
        added: 0,
        removed: 0
      };
    }
    const o = this.getLastAppliedCodeBlock(e, t);
    if (!o) {
      return {
        added: 0,
        removed: 0
      };
    }
    const a = this.getCodeBlockV0ModelLines(e, t);
    const l = await this.getCodeBlockNewModelLines(e, t, o.codeblockId);
    if (!a || !l) {
      return {
        added: 0,
        removed: 0
      };
    }
    if (a.length === l.length) {
      let f = false;
      for (let A = 0; A < a.length; A++) {
        if (a[A] !== l[A]) {
          f = true;
          break;
        }
      }
      if (!f) {
        return {
          added: 0,
          removed: 0
        };
      }
    }
    const u = await this.computeLineDiffs(e, t, l, {
      forStats: true
    });
    const d = u.reduce((f, A) => f + A.modified.length + (A.original.endLineNumberExclusive - A.original.startLineNumber), 0);
    const m = a.length + l.length;
    if (d > m * 0.8) {
      console.warn(`[composer] Large diff detected for ${t.fsPath} (${d}/${m} lines). This may be due to diff timeout or whitespace issues.`);
    }
    let p = 0;
    let g = 0;
    for (const f of u) {
      p += f.modified.length;
      g += f.original.endLineNumberExclusive - f.original.startLineNumber;
    }
    return {
      added: p,
      removed: g
    };
  }
  async getPartialInlineDiffFates(e, t, i) {
    const r = e.data;
    if (!r) {
      return;
    }
    const s = this.getComposerCodeBlock(e, t, i);
    if (!s || !s.partialInlineDiffFatesId) {
      return undefined;
    } else {
      return (await this._composerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates(r.composerId, s.partialInlineDiffFatesId))?.fates;
    }
  }
  getRecentDiffDescriptors(e) {
    if (this._isLegacyInlineDiffsUsed()) {
      return this.getAllPendingDiffDescriptors(e);
    }
    const t = this._getRelevantComposerIds(e);
    const i = [];
    for (const r of t) {
      i.push(...this._diffChangeSourceRegistry.getRecentDiffDescriptors(r));
    }
    return i;
  }
};
__decorate([Gs("ComposerCodeBlockService.getComposerCodeBlock")], tS.prototype, "getComposerCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.updateComposerCodeBlock")], tS.prototype, "updateComposerCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.updateComposerCodeBlockSetStore")], tS.prototype, "updateComposerCodeBlockSetStore", null);
__decorate([Gs("ComposerCodeBlockService.unregisterCachedCodeBlock")], tS.prototype, "unregisterCachedCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.unregisterAllCachedCodeBlocks")], tS.prototype, "unregisterAllCachedCodeBlocks", null);
__decorate([Gs("ComposerCodeBlockService.registerCachedCodeBlock")], tS.prototype, "registerCachedCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.markUriAsOutdated")], tS.prototype, "markUriAsOutdated", null);
__decorate([Gs("ComposerCodeBlockService.isCodeBlockRegisteredAsCached")], tS.prototype, "isCodeBlockRegisteredAsCached", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockStatus")], tS.prototype, "getCodeBlockStatus", null);
__decorate([Gs("ComposerCodeBlockService.setCodeBlockStatus")], tS.prototype, "setCodeBlockStatus", null);
__decorate([Gs("ComposerCodeBlockService.setCodeBlockStatusIncludingPreviouslyChained")], tS.prototype, "setCodeBlockStatusIncludingPreviouslyChained", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlocksOfStatuses")], tS.prototype, "getCodeBlocksOfStatuses", null);
__decorate([Gs("ComposerCodeBlockService.setGeneratingCodeBlocksToAborted")], tS.prototype, "setGeneratingCodeBlocksToAborted", null);
__decorate([Gs("ComposerCodeBlockService.getLastCreatedCodeBlockId")], tS.prototype, "getLastCreatedCodeBlockId", null);
__decorate([Gs("ComposerCodeBlockService.getLastAppliedCodeBlockId")], tS.prototype, "getLastAppliedCodeBlockId", null);
__decorate([Gs("ComposerCodeBlockService.getLastAppliedCodeBlock")], tS.prototype, "getLastAppliedCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.getLastAcceptedCodeBlock")], tS.prototype, "getLastAcceptedCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.getLastAppliedCodeBlocks")], tS.prototype, "getLastAppliedCodeBlocks", null);
__decorate([Gs("ComposerCodeBlockService.getAllCachedCodeBlocks")], tS.prototype, "getAllCachedCodeBlocks", null);
__decorate([Gs("ComposerCodeBlockService.updateCodeBlockLastAppliedAt")], tS.prototype, "updateCodeBlockLastAppliedAt", null);
__decorate([Gs("ComposerCodeBlockService.getInlineDiff")], tS.prototype, "getInlineDiff", null);
__decorate([Gs("ComposerCodeBlockService.getAllInlineDiffs")], tS.prototype, "getAllInlineDiffs", null);
__decorate([Gs("ComposerCodeBlockService.getAllPendingDiffDescriptors")], tS.prototype, "getAllPendingDiffDescriptors", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockFileUris")], tS.prototype, "getCodeBlockFileUris", null);
__decorate([Gs("ComposerCodeBlockService.getInlineDiffForChaining")], tS.prototype, "getInlineDiffForChaining", null);
__decorate([Gs("ComposerCodeBlockService.doesFileHaveInlineDiff")], tS.prototype, "doesFileHaveInlineDiff", null);
__decorate([Gs("ComposerCodeBlockService.doesFileHaveChanges")], tS.prototype, "doesFileHaveChanges", null);
__decorate([Gs("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInLastAiBubbles")], tS.prototype, "getUrisOfCodeblocksWithDiffsInLastAiBubbles", null);
__decorate([Gs("ComposerCodeBlockService.getUrisOfCodeblocksWithDiffsInLastAiBubbles")], tS.prototype, "getUrisOfCodeblocksWithDiffsInAiBubbles", null);
__decorate([Gs("ComposerCodeBlockService.changeCodeBlockUri")], tS.prototype, "changeCodeBlockUri", null);
__decorate([Gs("ComposerCodeBlockService.computeLineDiffs")], tS.prototype, "computeLineDiffs", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockLinesByDiff")], tS.prototype, "getCodeBlockLinesByDiff", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockV0ModelLines")], tS.prototype, "getCodeBlockV0ModelLines", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockOriginalModelLines")], tS.prototype, "getCodeBlockOriginalModelLines", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockNewModelLines")], tS.prototype, "getCodeBlockNewModelLines", null);
__decorate([Gs("ComposerCodeBlockService.registerNewCodeBlock")], tS.prototype, "registerNewCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.getChainedOriginalCodeBlock")], tS.prototype, "getChainedOriginalCodeBlock", null);
__decorate([Gs("ComposerCodeBlockService.getCodeBlockDiffStats")], tS.prototype, "getCodeBlockDiffStats", null);
__decorate([Gs("ComposerCodeBlockService.getPartialInlineDiffFates")], tS.prototype, "getPartialInlineDiffFates", null);
__decorate([Gs("ComposerCodeBlockService.getRecentDiffDescriptors")], tS.prototype, "getRecentDiffDescriptors", null);
tS = __decorate([__param(0, ku), __param(1, iie), __param(2, BA), __param(3, _$e), __param(4, Hga), __param(5, c_), __param(6, R1), __param(7, Oa), __param(8, YZ), __param(9, fL), __param(10, K3), __param(11, Lr), __param(12, kp)], tS);
Vi(EJ, tS, 1);
