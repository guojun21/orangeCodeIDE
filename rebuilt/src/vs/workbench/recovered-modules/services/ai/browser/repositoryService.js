"use strict";

// Module: out-build/vs/workbench/services/ai/browser/repositoryService.js
// Offset: 28418200 (bundle byte offset)
// Size: 20146 bytes
Icu();
jY();
oMe();
H6();
yn();
iR();
Yn();
Er();
Wt();
ns();
nA();
Cie();
Rb();
mD();
qp();
rt();
Bc();
hd();
td();
dr();
ps();
oB();
aP();
w8A();
mie();
wE();
ml();
hD();
Ei();
Hl();
d2();
Pa();
Tw();
rf();
vE();
kr();
zk();
(function (n) {
  n[n.INDEX_MODIFIED = 0] = "INDEX_MODIFIED";
  n[n.INDEX_ADDED = 1] = "INDEX_ADDED";
  n[n.INDEX_DELETED = 2] = "INDEX_DELETED";
  n[n.INDEX_RENAMED = 3] = "INDEX_RENAMED";
  n[n.INDEX_COPIED = 4] = "INDEX_COPIED";
  n[n.MODIFIED = 5] = "MODIFIED";
  n[n.DELETED = 6] = "DELETED";
  n[n.UNTRACKED = 7] = "UNTRACKED";
  n[n.IGNORED = 8] = "IGNORED";
  n[n.INTENT_TO_ADD = 9] = "INTENT_TO_ADD";
  n[n.ADDED_BY_US = 10] = "ADDED_BY_US";
  n[n.ADDED_BY_THEM = 11] = "ADDED_BY_THEM";
  n[n.DELETED_BY_US = 12] = "DELETED_BY_US";
  n[n.DELETED_BY_THEM = 13] = "DELETED_BY_THEM";
  n[n.BOTH_ADDED = 14] = "BOTH_ADDED";
  n[n.BOTH_DELETED = 15] = "BOTH_DELETED";
  n[n.BOTH_MODIFIED = 16] = "BOTH_MODIFIED";
})(Inf ||= {});
oX = xi("repositoryService");
CAa = class extends at {
  get indexingGrepEnabled() {
    return this._indexingGrepEnabled.get();
  }
  get primaryQueryOnlyIndex() {
    return this._primaryQueryOnlyIndex;
  }
  setQueryOnlyIndex(e) {
    this._primaryQueryOnlyIndex = e;
  }
  get suppressFileExtensionRecommendations() {
    return Date.now() - (this._suppressFileExtensionRecommendationsStart ?? 0) < 2000;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    super();
    this._cursorAuthenticationService = e;
    this.cursorCredsService = t;
    this.fileService = i;
    this.telemetryService = r;
    this.textModelService = s;
    this.workspaceContextService = o;
    this.serverConfigService = a;
    this.instantiationService = l;
    this.modelService = u;
    this.configurationService = d;
    this.storageService = m;
    this.structuredLogService = p;
    this.clearPollingIntervalFunction = () => {};
    this.clearRepositoryIntervalFunction = () => {};
    this.diffProvider = null;
    this.indexingProvider = undefined;
    this.grepProvider = undefined;
    this._onDidRequestRepoIndex = this._register(new Qe());
    this.onDidRequestRepoIndex = this._onDidRequestRepoIndex.event;
    this._onDidRequestRepoInterrupt = this._register(new Qe());
    this.onDidRequestRepoInterrupt = this._onDidRequestRepoInterrupt.event;
    this._onDidChangeIndexingStatus = this._register(new Qe());
    this.onDidChangeIndexingStatus = this._onDidChangeIndexingStatus.event;
    this.isUriCursorIgnored = () => false;
    this.repositoryIndexingError = this._register(new j_(undefined));
    this.repositoryIndexingStatus = this._register(new j_({
      case: "loading"
    }));
    this.repositoryIndexingJobs = this._register(new j_({}));
    this.repositoryIndexingProgress = this._register(new j_(undefined));
    this.indexingData = this._register(hm(this.storageService, "indexingData"));
    this._indexingGrepEnabled = this._register(hm(this.storageService, "indexingGrepEnabled"));
    this.onDidChangeIndexingGrepEnabled = In.fromObservable(this._indexingGrepEnabled);
    this.queryBuilder = this.instantiationService.createInstance(yV);
    this.repositoryClientPromise = this.instantiationService.createInstance(YS, {
      service: bAa
    });
    this.aiServerClientPromise = this.instantiationService.createInstance(YS, {
      service: Bce
    });
    In.fromObservableLight(this.indexingData)(() => {
      this.indexMainLocalRepository();
    });
    this.onDidChangeIndexingStatus(async () => {
      const g = await this.indexingProvider?.getGlobalStatus();
      if (g !== undefined) {
        if (g.case === "synced") {
          this.repositoryLastSyncedTime = Date.now();
        }
        this.repositoryIndexingStatus.change(g);
        switch (g.case) {
          case "not-indexed":
            break;
          case "not-auto-indexing":
            break;
          case "error":
            {
              this.repositoryIndexingError.change(g.error);
              break;
            }
          case "indexing-setup":
            {
              if ((await this.getNewRepoInfo()) === undefined) {
                this.repositoryIndexingError.change(undefined);
                return;
              }
              break;
            }
          case "indexing-init-from-similar-codebase":
            {
              if ((await this.getNewRepoInfo()) === undefined) {
                this.repositoryIndexingError.change(undefined);
                return;
              }
              break;
            }
          case "indexing":
            {
              const f = await this.getNewRepoInfo();
              if (f === undefined) {
                this.repositoryIndexingError.change(undefined);
                return;
              }
              const A = f.repoName;
              const w = await this.indexingProvider?.getCodebases();
              if (w === undefined) {
                return;
              }
              const C = {};
              let x = 0;
              for (const I of w) {
                const B = await this.indexingProvider?.getIndexingProgress(I);
                if (B === undefined) {
                  continue;
                }
                const R = await this.indexingProvider?.getCurrentJobs(I);
                if (R !== undefined) {
                  if (B > x) {
                    x = B;
                  }
                  C[I] = R;
                }
              }
              this.repositoryIndexingProgress.change({
                progress: x
              });
              this.repositoryIndexingJobs.change(C);
              break;
            }
          case "synced":
            break;
          case "paused":
            break;
          case "loading":
            break;
          default:
            return g;
        }
      }
    });
  }
  async getEmbeddableFilesPath() {
    const e = await this.indexingProvider?.getEmbeddableFilesPath();
    if (e) {
      return je.from(e);
    } else {
      return undefined;
    }
  }
  setIsUriCursorIgnored(e) {
    this.isUriCursorIgnored = e;
  }
  registerIndexingProvider(e) {
    this.indexingProvider = e;
  }
  unregisterIndexingProvider() {
    this.indexingProvider = undefined;
  }
  registerGrepProvider(e) {
    this.grepProvider = e;
  }
  unregisterGrepProvider() {
    this.grepProvider = undefined;
  }
  fireOnDidChangeIndexingStatus() {
    this._onDidChangeIndexingStatus.fire();
  }
  unregisterOnDidChangeIndexingStatus() {}
  async getNewRepoInfo() {
    const e = Date.now();
    while (!this.indexingProvider && Date.now() - e < 500) {
      await new Promise(o => setTimeout(o, 100));
    }
    if (!this.isIndexedMainLocalRepository()) {
      if (this.primaryQueryOnlyIndex) {
        return this.primaryQueryOnlyIndex.repositoryInfo;
      }
      const o = this.indexingProvider?.getQueryOnlyRepoInfo();
      const a = 5000;
      let l;
      const u = o ? new Promise(d => {
        l = setTimeout(() => {
          this.structuredLogService.warn("composer", "IndexingProvider.getQueryOnlyRepoInfo timed out", {
            operation: "IndexingProvider.getQueryOnlyRepoInfo",
            timeoutMs: a,
            indexingProviderRegistered: this.indexingProvider !== undefined
          });
          d(undefined);
        }, a);
      }) : undefined;
      this.queryOnlyIndexFromIndexProvider = o ? await (async () => {
        try {
          return await Promise.race([o, u]);
        } finally {
          if (l !== undefined) {
            clearTimeout(l);
          }
        }
      })() : undefined;
      if (this.queryOnlyIndexFromIndexProvider) {
        return this.queryOnlyIndexFromIndexProvider.repositoryInfo;
      }
    }
    const t = this.indexingProvider?.getRepoInfo();
    const i = 5000;
    let r;
    const s = t ? new Promise(o => {
      r = setTimeout(() => {
        this.structuredLogService.warn("composer", "IndexingProvider.getRepoInfo timed out", {
          operation: "IndexingProvider.getRepoInfo",
          timeoutMs: i,
          indexingProviderRegistered: this.indexingProvider !== undefined
        });
        o(undefined);
      }, i);
    }) : undefined;
    if (t) {
      return await (async () => {
        try {
          return await Promise.race([t, s]);
        } finally {
          if (r !== undefined) {
            clearTimeout(r);
          }
        }
      })();
    } else {
      return undefined;
    }
  }
  async getPathEncryptionKey() {
    const e = Date.now();
    while (!this.indexingProvider && Date.now() - e < 5000) {
      await new Promise(t => setTimeout(t, 100));
    }
    return await this.indexingProvider?.getPathEncryptionKey();
  }
  isIndexedRepository() {
    return this.isIndexedMainLocalRepository() || this.primaryQueryOnlyIndex !== undefined || this.queryOnlyIndexFromIndexProvider !== undefined;
  }
  getQueryOnlyIndex() {
    let e = this.primaryQueryOnlyIndex;
    if (e === undefined) {
      e = this.queryOnlyIndexFromIndexProvider;
    }
    return e;
  }
  getOverridePathEncryptionKey(e) {
    const t = this.getQueryOnlyIndex();
    if (t !== undefined && e.repoName === t.repositoryInfo.repoName && e.repoOwner === t.repositoryInfo.repoOwner) {
      return t.pathEncryptionKey;
    }
  }
  maybeGetQueryOnlyRepoAccess(e) {
    const t = this.getQueryOnlyIndex();
    if (t !== undefined && e !== undefined && e.repoName === t.repositoryInfo.repoName && e.repoOwner === t.repositoryInfo.repoOwner) {
      return t.queryOnlyRepoAccess;
    }
  }
  getIndexingProgress() {
    if (this.repositoryIndexingStatus.value?.case === "synced") {
      return 1;
    } else {
      return this.repositoryIndexingProgress.value?.progress ?? 0;
    }
  }
  getIndexingPhase() {
    return this.repositoryIndexingStatus.value?.case;
  }
  getNumFilesInUnindexedRepo() {
    if (this.repositoryIndexingStatus.value?.case === "not-auto-indexing") {
      return this.repositoryIndexingStatus.value?.numFiles;
    } else {
      return undefined;
    }
  }
  isIndexedMainLocalRepository(e) {
    const t = e?.indexingProgressThreshold ?? 0.8;
    if (this.getIndexingProgress() >= t) {
      return true;
    }
    {
      const i = this.repositoryIndexingStatus.value?.case;
      if (["indexing-setup", "indexing", "indexing-init-from-similar-codebase", "loading", "out-of-sync", "creating-index", "error"].includes(i)) {
        if (i === "indexing" && (this.repositoryIndexingProgress.value?.progress ?? 0) < 0.5) {
          return false;
        }
        const s = this.repositoryLastSyncedTime;
        if (s !== undefined && Date.now() - s < 3600000) {
          return true;
        }
      }
      return false;
    }
  }
  async indexMainRepository(e = false) {
    if (!this._cursorAuthenticationService.isAuthenticated()) {
      this.repositoryIndexingStatus.change({
        case: "error",
        error: "Not authenticated"
      });
      return;
    }
    return this.indexMainLocalRepository();
  }
  async deleteMainLocalRepository() {
    const e = await this.getNewRepoInfo();
    if (e === undefined) {
      return;
    }
    await (await this.repositoryClientPromise.get()).removeRepositoryV2(new YRc({
      repository: e
    }), {
      headers: Kb(Wr())
    });
    this._onDidRequestRepoInterrupt.fire(false);
    this.repositoryIndexingStatus.change({
      case: "not-indexed"
    });
    this.repositoryIndexingProgress.change({
      progress: 0
    });
    this.repositoryIndexingJobs.change({});
  }
  async pauseIndexingJob() {
    this._onDidRequestRepoInterrupt.fire(true);
  }
  registerDiffProvider(e) {
    this.diffProvider = e;
  }
  dispose() {
    super.dispose();
    this.clearPollingIntervalFunction();
    this.clearRepositoryIntervalFunction();
  }
  repositoryToInfo(e) {
    const t = e.provider.remotes;
    if (t === undefined) {
      return null;
    }
    if (t.length === 0) {
      throw new Error("No remotes found");
    }
    const r = t[0].fetchUrl?.split(/\/|\:/);
    if (r === undefined) {
      throw new Error("Could not parse origin url");
    }
    const s = r[r.length - 2];
    const o = r[r.length - 1].split(".")[0];
    if (s === undefined || o === undefined) {
      throw new Error("Could not parse repo owner and name");
    }
    return {
      id: e.id,
      repoName: o,
      repoOwner: s,
      relativeWorkspacePath: C8A(e)
    };
  }
  async codeBlockFromRemote(e) {
    const t = e.relativeWorkspacePath;
    const i = this.workspaceContextService.resolveRelativePath(t);
    let r;
    let s = null;
    try {
      this._suppressFileExtensionRecommendationsStart = Date.now();
      r = await this.textModelService.createModelReference(i, true);
      const o = e.range;
      if (o === undefined || o.startPosition === undefined || o.endPosition === undefined) {
        console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it has an invalid range`);
        return null;
      }
      let a;
      let l = [];
      let u;
      const d = [];
      u = r.object.textEditorModel.getValueInRange({
        startLineNumber: o.startPosition.line,
        startColumn: o.startPosition.column,
        endLineNumber: o.endPosition.line,
        endColumn: o.endPosition.column
      });
      a = u;
      for (const [p, g] of u.split(`
`).entries()) {
        d.push({
          lineNumber: p + (o.startPosition?.line - 1) + 1,
          text: g,
          isSignature: false
        });
      }
      const m = e.signatures?.ranges;
      if (m) {
        m.sort((g, f) => !g.startPosition || !f.startPosition ? 0 : g.startPosition.line !== f.startPosition.line ? g.startPosition.line - f.startPosition.line : (g.startPosition.column ?? 0) - (f.startPosition.column ?? 0));
        const p = _8A(m);
        for (const g of p) {
          if (g === undefined || g.startPosition === undefined || g.endPosition === undefined) {
            l.push("");
            continue;
          }
          if (g.endPosition.line >= o.startPosition.line) {
            l.push("");
            continue;
          }
          l.push(r.object.textEditorModel.getValueInRange({
            startLineNumber: g.startPosition.line,
            startColumn: g.startPosition.column,
            endLineNumber: g.endPosition.line,
            endColumn: Math.min(r.object.textEditorModel.getLineLength(g.endPosition.line) + 1, g.endPosition.column)
          }).trimEnd());
        }
        if (l.length !== 0) {
          let g = "";
          let f = 0;
          for (const [A, w] of [...l, a].entries()) {
            if (A < l.length && w === "") {
              continue;
            }
            let C;
            if (A < l.length) {
              for (const [B, R] of w.split(`
`).entries()) {
                d.push({
                  lineNumber: B + (p[A]?.startPosition?.line ?? 1),
                  text: R,
                  isSignature: true
                });
              }
              C = p[A]?.startPosition?.line ?? 1;
            } else {
              C = o.startPosition?.line ?? 1;
            }
            if (A === 0) {
              g += w;
              continue;
            }
            const x = w.match(/^\s*/);
            let I;
            if (x) {
              I = x[0];
            } else {
              I = "";
            }
            g += `
${I}...
${w}`;
            d.push({
              lineNumber: C - 0.5,
              text: I + "...",
              isSignature: true
            });
          }
          a = g;
        }
      }
      d.sort((p, g) => p.lineNumber - g.lineNumber);
      s = {
        detailedLines: d,
        contents: a,
        originalContents: u,
        relativeWorkspacePath: this.workspaceContextService.asRelativePath(i),
        range: o
      };
    } catch (o) {
      console.error("Error in codeBlockFromRemote:", o);
    } finally {
      if (r) {
        r.dispose();
      }
    }
    return s;
  }
  async semanticSearch(e, t, i) {
    function r(u) {
      return {
        startLineNumber: (u.startPosition?.line || 1) - 1,
        startColumn: (u.startPosition?.column || 1) - 1,
        endLineNumber: (u.endPosition?.line || 1) - 1,
        endColumn: (u.endPosition?.column || 1) - 1
      };
    }
    const o = (await this.parallelSearch(e.contentPattern.pattern, 100)).flatMap((u, d) => {
      if (u.codeBlock === undefined || u.codeBlock.range === undefined) {
        return [];
      }
      const m = r(u.codeBlock.range);
      return [{
        uri: this.workspaceContextService.resolveRelativePath(u.codeBlock.relativeWorkspacePath),
        previewText: u.codeBlock.contents,
        rangeLocations: [{
          source: m,
          preview: {
            startLineNumber: 0,
            startColumn: 0,
            endLineNumber: m.endLineNumber - m.startLineNumber,
            endColumn: m.endColumn
          }
        }]
      }];
    });
    const a = {};
    for (const u of o) {
      if (u.uri) {
        if (a[u.uri.toString()] === undefined) {
          a[u.uri.toString()] = [];
        }
        a[u.uri.toString()].push(u);
      }
    }
    const l = [];
    for (const u in a) {
      const d = je.parse(u);
      if (WAi(e, d.fsPath) && Object.prototype.hasOwnProperty.call(a, u)) {
        const m = a[u];
        l.push({
          resource: d,
          results: m
        });
      }
    }
    for (const u of l) {
      i?.(u);
    }
    return {
      results: l,
      messages: []
    };
  }
  async getRepoAuthId() {
    const e = await (async () => {
      if (this.cursorCredsService.getRepoBackendUrl().includes("cursor.sh") && !this.cursorCredsService.getBackendUrl().includes("cursor.sh")) {
        const i = this.serverConfigService.cachedServerConfig;
        if (i.indexingConfig?.repo42AuthToken) {
          return i.indexingConfig.repo42AuthToken;
        }
      }
      return await this._cursorAuthenticationService.getAccessToken();
    })();
    if (e) {
      return this._cursorAuthenticationService.getAuthIdFromToken(e);
    } else {
      return undefined;
    }
  }
  async parallelSearchGetContents(e, t = 10, i, r) {
    return (await this.parallelSearch(e, t, i, r)).map(o => {
      const a = o.codeBlock;
      if (a === undefined) {
        return o;
      }
      const l = this.workspaceContextService.resolveRelativePath(a.relativeWorkspacePath);
      const u = this.modelService.getModel(l);
      if (!u || a.range === undefined) {
        return o;
      } else {
        return new zR({
          ...o,
          codeBlock: {
            ...o.codeBlock,
            contents: u.getValueInRange({
              startColumn: a.range.startPosition?.column ?? 1,
              startLineNumber: a.range.startPosition?.line ?? 1,
              endColumn: a.range.endPosition?.column ?? 1,
              endLineNumber: a.range.endPosition?.line ?? 1
            })
          }
        });
      }
    });
  }
  async searchMultipleQueries(e, {
    topK: t,
    minK: i,
    finalK: r
  }, s) {
    const a = e.map(l => ({
      text: l.text,
      newGlob: Z0A({
        globsNewLineSeparated: l.globsNewLineSeparated,
        properGlob: s?.newlineSepGlobFilter
      })
    })).map(l => this.parallelSearch(l.text, t, t, {
      includePattern: s?.includePattern,
      excludePattern: s?.excludePattern,
      globFilter: l.newGlob
    }));
    return await y8A(a, {
      minK: i,
      finalK: r
    });
  }
  async parallelSearch(e, t = 10, i, r) {
    try {
      const s = await this.searchNewLocal(e, t, r);
      return this.filterResults(s, t, i);
    } catch {
      return [];
    }
  }
  filterResults(e, t = 10, i) {
    return e.filter(r => r.codeBlock !== undefined && r.codeBlock.contents.length < 20000).sort((r, s) => s.score - r.score).slice(0, i ?? t);
  }
  async compileGlobFilterFromPattern(e) {
    if (this.indexingProvider === undefined) {
      throw new Error("Indexing provider not found");
    }
    const t = {
      globFilter: e?.globFilter ?? (await this.compilePatternIntoGlobFilter(e?.includePattern)),
      notGlobFilter: await this.compilePatternIntoGlobFilter(e?.excludePattern),
      overridePathEncryptionKey: e.overridePathEncryptionKey ?? this.getOverridePathEncryptionKey(e.repoInfo)
    };
    return await this.indexingProvider.compileGlobFilter(t);
  }
  async searchNewLocal(e, t = 10, i) {
    const r = await this.repositoryClientPromise.get();
    const s = await this.getNewRepoInfo();
    if (s === undefined) {
      throw new Error("No repository info found");
    }
    if (this.indexingProvider === undefined) {
      throw new Error("Indexing provider not found");
    }
    const o = {
      ...s,
      id: xpa.id
    };
    let a;
    try {
      const l = await this.compileGlobFilterFromPattern({
        includePattern: i?.includePattern,
        excludePattern: i?.excludePattern,
        globFilter: i?.globFilter,
        repoInfo: s
      });
      const u = {
        query: e,
        repository: s,
        topK: t,
        contextCacheRequest: i?.contextCacheRequest,
        globFilter: l.globFilter,
        notGlobFilter: l.notGlobFilter,
        queryOnlyRepoAccess: this.maybeGetQueryOnlyRepoAccess(s)
      };
      const d = Wr();
      const m = {
        headers: Kb(d),
        signal: i?.abortSignal
      };
      if (i?.abortSignal?.aborted) {
        throw new Error("Aborted");
      }
      a = await r.searchRepositoryV2(u, m);
    } catch (l) {
      if (l instanceof fA) {
        if (!i?.silent) {
          console.error("searchRepositoryV2 failed", l);
        }
        return [];
      }
      throw l;
    }
    return await this.getFinalCodeResults(o, a.codeResults, {
      ...i,
      topK: t
    });
  }
  async refreshTabContext(e) {
    const t = await this.getNewRepoInfo();
    const i = await this.aiServerClientPromise.get();
    if (t === undefined) {
      throw new Error("No repository info found");
    }
    const r = {
      ...e,
      repositoryInfo: t
    };
    const s = await i.refreshTabContext(r, {
      headers: Kb(Wr())
    });
    const o = await this.getFinalCodeResults(t, s.codeResults);
    return new I4c({
      codeResults: o
    });
  }
  syncIndexWithGivenRepositoryInfo(e) {
    this._onDidRequestRepoInterrupt.fire(true);
    this._onDidRequestRepoIndex.fire({
      forceOverrideRepoInfo: e
    });
  }
  indexMainLocalRepository() {
    if (this._cursorAuthenticationService.isAuthenticated()) {
      this._onDidRequestRepoInterrupt.fire(true);
      this._onDidRequestRepoIndex.fire(undefined);
    }
  }
  interruptLocalRepository(e) {
    if (e.id === xpa.id) {
      this._onDidRequestRepoInterrupt.fire(false);
    }
  }
  async getEmbeddings(...e) {
    return (await (await this.repositoryClientPromise.get()).getEmbeddings({
      texts: e
    }, {
      headers: Kb(Wr())
    })).embeddings.map(r => r.embedding);
  }
  async *getLineNumberClassifications(e, t, i) {
    const r = u => JSON.stringify({
      relativeWorkspacePath: u.codeBlock?.relativeWorkspacePath,
      range: u.codeBlock?.range
    });
    const s = new Map(e.map((u, d) => [r(u.ogCodeResult), {
      ogCodeResult: u.ogCodeResult,
      idx: d
    }]));
    const o = {
      query: t,
      codeResults: e.map(u => u.localCodeResult).filter(u => u !== null)
    };
    const l = await (await this.repositoryClientPromise.get()).getLineNumberClassifications(o, {
      signal: i
    });
    for await (const u of l) {
      const d = u.classifiedResult;
      if (d?.codeResult !== undefined) {
        const m = s.get(r(d.codeResult));
        if (m !== undefined) {
          yield {
            withClassificationInfo: d,
            idx: m.idx
          };
        }
      }
    }
  }
  async convertToLocalBlock(e) {
    try {
      const t = await this.codeBlockFromRemote(e);
      if (t) {
        if (t.contents !== undefined && t.contents.length > 20000) {
          console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it's too big`);
          return null;
        } else {
          return t;
        }
      } else {
        console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it couldn't be converted to a local block`);
        return null;
      }
    } catch (t) {
      console.error("Failed to convert code block to local block:", t);
      return null;
    }
  }
  async getFinalCodeResults(e, t, i) {
    if (!this.indexingProvider) {
      throw new Error("Indexing provider not found");
    }
    const r = t.map(d => d.codeBlock?.relativeWorkspacePath).filter(d => d !== undefined);
    const s = await this.indexingProvider.decryptPaths({
      paths: r,
      overridePathEncryptionKey: this.getOverridePathEncryptionKey(e)
    });
    const o = new Map();
    for (let d = 0; d < r.length; d++) {
      o.set(r[d], s[d]);
    }
    const u = (await mDg(t, async d => {
      if (d.codeBlock === undefined) {
        console.log("[Cpp] Skipping because it's undefined");
        throw new Error("Code block undefined");
      }
      const m = o.get(d.codeBlock.relativeWorkspacePath);
      if (m === undefined) {
        throw new Error("Path not found");
      }
      d.codeBlock.relativeWorkspacePath = m;
      if (d.codeBlock.relativeWorkspacePath.startsWith("./") || d.codeBlock.relativeWorkspacePath.startsWith(".\\")) {
        d.codeBlock.relativeWorkspacePath = d.codeBlock.relativeWorkspacePath.substring(2);
      }
      if (!T8A(d.codeBlock.relativeWorkspacePath, this.queryBuilder, i)) {
        console.log(`[Cpp] Skipping ${d.codeBlock.relativeWorkspacePath} because it doesn't match the include/exclude patterns`);
        return null;
      }
      const p = await this.convertToLocalBlock(d.codeBlock);
      if (p === null) {
        console.log(`[Cpp] Skipping ${d.codeBlock.relativeWorkspacePath} because it couldn't be converted to a local block`);
        return null;
      } else {
        return new zR({
          score: d.score,
          codeBlock: p
        });
      }
    }, {
      max: 8
    })).map(d => {
      if (d.status === "rejected") {
        console.error(d.reason);
        return null;
      }
      if (i?.excludeCursorIgnored && d.value?.codeBlock?.relativeWorkspacePath) {
        const m = this.workspaceContextService.resolveRelativePath(d.value.codeBlock.relativeWorkspacePath);
        if (this.isUriCursorIgnored(m)) {
          return null;
        }
      }
      return d.value;
    }).filter(d => d !== null).sort((d, m) => m.score - d.score);
    if (i?.topK) {
      return u.slice(0, i.topK);
    } else {
      return u;
    }
  }
  async compilePatternIntoGlobFilter(e) {
    if (e === undefined) {
      return;
    }
    const t = k8A(e);
    this.telemetryService.publicLogCapture("SimpleGlobPattern.Attempted");
    const i = await this.generateSimpleGlobPattern(t);
    if (i !== undefined) {
      this.telemetryService.publicLogCapture("SimpleGlobPattern.Success");
      return i;
    }
    this.telemetryService.publicLogCapture("SimpleGlobPattern.Fallback");
    const r = this.queryBuilder.parseSearchPaths(t);
    if (r.pattern !== undefined) {
      return x8A(r.pattern);
    }
  }
  async generateSimpleGlobPattern(e) {
    return S8A(e, this.fileService, this.workspaceContextService);
  }
};
CAa = __decorate([__param(0, wg), __param(1, MJ), __param(2, Gr), __param(3, ea), __param(4, El), __param(5, Lr), __param(6, Vk), __param(7, ln), __param(8, Il), __param(9, Fn), __param(10, Hi), __param(11, Kk)], CAa);
Vi(oX, CAa, 1);
Dnf = class extends rn {
  constructor() {
    super({
      id: UCc,
      title: {
        value: "Set Query Only Index",
        original: "Set Query Only Index"
      },
      f1: false
    });
  }
  run(n, {
    queryOnlyRepositoryInfo: e
  }) {
    n.get(oX).setQueryOnlyIndex(e);
  }
};
Dt(Dnf);
