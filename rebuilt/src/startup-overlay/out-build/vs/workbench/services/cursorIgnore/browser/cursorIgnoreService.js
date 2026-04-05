"use strict";

// Module: out-build/vs/workbench/services/cursorIgnore/browser/cursorIgnoreService.js
// Offset: 28440525 (bundle byte offset)
// Size: 23302 bytes
Er();
Wt();
Yn();
ps();
ns();
rt();
yn();
Yr();
jr();
Ytf();
zr();
iR();
wE();
Dd();
mie();
Fme();
sB();
Ei();
ml();
cu();
d2();
_r();
I8A();
_d();
Po();
RNe();
fE();
rce();
vr();
mR();
_g();
s5 = xi("cursorIgnoreService");
Zcu = "hierarchical allow file list is still loading, please retry the tool call";
EAa = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
    super();
    this.workspaceContextService = e;
    this.fileService = t;
    this.logService = i;
    this.searchService = r;
    this.reactiveStorageService = s;
    this.instantiationService = o;
    this.repositoryService = a;
    this.gitContextService = l;
    this.configurationService = u;
    this.uriIdentityService = d;
    this.worktreeManagerService = m;
    this.metricsService = p;
    this.clientDebugLogService = g;
    this.outputService = f;
    this.pathService = A;
    this._ignoreMapping = {};
    this._ignorePatternsMapping = {};
    this._pendingIgnorePaths = new Set();
    this._globalIgnorePatterns = [];
    this._ignoreLoadedCallbacks = [];
    this._ignoreLoaded = false;
    this._gitRepoLocations = [];
    this._gitRepoUpstreamUrls = new Map();
    this._didStartGitRepoScanning = false;
    this._gitReposInitialized = false;
    this._onDidCursorIgnoreChange = this._register(new Qe());
    this.onDidCursorIgnoreChange = this._onDidCursorIgnoreChange.event;
    this._cache = new Fb(2000, 0.5);
    this._scannedOutOfWorkspaceRoots = new Set();
    this._scannedOutOfWorkspaceAncestorRoots = new Set();
    this._realPathCache = new Map();
    this._log = B => this.clientDebugLogService.log("cursorIgnoreService", `${Date.now()} ${B}`);
    this._uploadLog = async () => {
      this.clientDebugLogService.upload("cursorIgnoreService");
    };
    this._initTimeout = this._register(new O$());
    const w = this.pathService.userHome({
      preferLocal: true
    });
    const C = je.joinPath(w, ".cursor");
    this._cursorDataDirPath = this.normalizePathForComparison(C.scheme === _n.vscodeRemote ? C.path : C.fsPath);
    const x = je.joinPath(w, ".cursor", "worktrees");
    this._worktreesDirPath = this.normalizePathForComparison(x.scheme === _n.vscodeRemote ? x.path : x.fsPath);
    this._cancellationTokenSource = new Wc();
    this._cancellationToken = this._cancellationTokenSource.token;
    this._register({
      dispose: () => {
        this._cancellationTokenSource.dispose(true);
      }
    });
    this._register(this._onDidCursorIgnoreChange.event(() => {
      this._cache.clear();
    }));
    this._register(this.fileService.onDidFilesChange(async B => {
      if (B.gotAdded()) {
        const N = B.rawAdded.filter(M => M.path.endsWith(".cursorignore"));
        for (const M of N) {
          const O = M.toString();
          const $ = O.substring(0, O.lastIndexOf(".cursorignore"));
          try {
            const H = await this.fileService.readFile(M);
            const W = this.parseIgnoreRules(H.value.toString());
            if (W.length > 0) {
              this._ignoreMapping[$] = sMe().add(W);
              this._ignorePatternsMapping[$] = W;
            } else {
              this._ignoreMapping[$] = "no-ignore";
              this._ignorePatternsMapping[$] = "no-ignore";
            }
            this._onDidCursorIgnoreChange.fire({});
          } catch (H) {
            console.error(`Error processing new .cursorignore file at ${M.toString()}:`, H);
          }
        }
      }
      if (B.gotDeleted()) {
        const N = B.rawDeleted.filter(M => M.path.endsWith(".cursorignore"));
        for (const M of N) {
          const O = M.toString();
          const $ = O.substring(0, O.lastIndexOf(".cursorignore"));
          delete this._ignoreMapping[$];
          delete this._ignorePatternsMapping[$];
        }
        if (N.length > 0) {
          this._onDidCursorIgnoreChange.fire({});
        }
      }
      const R = Object.keys(this._ignoreMapping);
      for (const N of R) {
        const M = je.parse(N + ".cursorignore");
        if (B.contains(M)) {
          const O = await this.fileService.readFile(M);
          const $ = this.parseIgnoreRules(O.value.toString());
          if ($.length > 0) {
            this._ignoreMapping[N] = sMe().add($);
            this._ignorePatternsMapping[N] = $;
          } else {
            this._ignoreMapping[N] = "no-ignore";
            this._ignorePatternsMapping[N] = "no-ignore";
          }
          this._onDidCursorIgnoreChange.fire({});
        }
      }
    }));
    const I = this.reactiveStorageService.onChangeEffectManuallyDisposed({
      onChange: ({
        deps: B
      }) => {
        const [R, N, M] = B;
        if (R !== undefined || N !== undefined || M !== undefined) {
          if (M !== undefined && M.length > 0 && !this._didStartGitRepoScanning) {
            this.initializeGitRepoMapping().catch($ => {
              console.error("Error initializing git repo mapping:", $);
            });
            this._didStartGitRepoScanning = true;
          }
          if (this.workspaceContextService.getWorkspace().folders.length > 0) {
            this._onDidCursorIgnoreChange.fire({});
          }
        }
      },
      deps: [() => this.reactiveStorageService.applicationUserPersistentStorage.teamAllowlist, () => this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist, () => this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos]
    });
    this._register(I);
    this._register(this.configurationService.onDidChangeConfiguration(B => {
      if (B.affectsConfiguration(G2o)) {
        this.initializeGlobalIgnoreList();
        this._onDidCursorIgnoreChange.fire({});
      }
    }));
    this._register(this.worktreeManagerService.onDidRemoveWorktree(B => {
      this.cleanupWorktreeCursorIgnoreEntries(B);
    }));
    this._queryBuilder = this.instantiationService.createInstance(yV);
    this.initializeGlobalIgnoreList();
    this.initializeIgnoreMapping();
    this.repositoryService.setIsUriCursorIgnored(B => this.shouldBlockUriFromReading(B));
  }
  uriFromFsPathUsingBase(e, t) {
    if (!t) {
      return je.file(e);
    }
    const i = e.replace(/\\/g, "/");
    const r = i.startsWith("/") ? i : "/" + i;
    return je.from({
      scheme: t.scheme,
      authority: t.authority,
      path: r
    });
  }
  async getRealUriAsync(e) {
    if (e.scheme !== _n.file && e.scheme !== _n.vscodeRemote) {
      return e;
    }
    const t = e.toString();
    const i = this._realPathCache.get(t);
    if (i !== undefined) {
      return i;
    }
    try {
      const r = await this.fileService.realpath(e);
      this._realPathCache.set(t, r);
      return r;
    } catch {
      try {
        const s = Td(e);
        const o = await this.fileService.realpath(s);
        const a = this.uriIdentityService.extUri.relativePath(s, e) ?? null;
        const l = a !== null && a !== "" ? Wo(o, a) : o;
        this._realPathCache.set(t, l);
        return l;
      } catch {
        this._realPathCache.set(t, e);
        return e;
      }
    }
  }
  async getRealWorkspaceFolders() {
    const e = this.workspaceContextService.getWorkspace().folders;
    if (e.length === 0) {
      return e;
    }
    const t = [];
    for (const i of e) {
      const r = await this.getRealUriAsync(i.uri);
      if (this.uriIdentityService.extUri.isEqual(r, i.uri)) {
        t.push(i);
        continue;
      }
      t.push({
        uri: r,
        name: i.name,
        index: i.index,
        toResource: s => Wo(r, s)
      });
    }
    return t;
  }
  cleanupWorktreeCursorIgnoreEntries(e) {
    const t = je.file(e);
    const i = [];
    for (const r of Object.keys(this._ignoreMapping)) {
      try {
        const s = je.parse(r);
        if (this.uriIdentityService.extUri.isEqualOrParent(s, t)) {
          i.push(r);
        }
      } catch {}
    }
    if (i.length > 0) {
      for (const r of i) {
        delete this._ignoreMapping[r];
        delete this._ignorePatternsMapping[r];
      }
      this.logService.info(`[CursorIgnore] Cleaned up ${i.length} .cursorignore entries for removed worktree at ${e}`);
      this._onDidCursorIgnoreChange.fire({});
    }
  }
  async shouldIgnoreUri(e, t) {
    const i = await this.getRealUriAsync(e);
    const r = await this.getRealWorkspaceFolders();
    return this.shouldIgnoreUriWithWorkspaceFolders(i, t, r);
  }
  initializeGlobalIgnoreList() {
    const e = this.configurationService.getValue(G2o) || [];
    this._globalIgnorePatterns = e;
    if (e.length > 0) {
      this._globalIgnore = sMe({
        allowRelativePaths: true
      }).add(e);
    } else {
      this._globalIgnore = undefined;
    }
  }
  addOnCursorIgnoreLoadedCallback(e) {
    if (this._ignoreLoaded) {
      e();
    } else {
      this._ignoreLoadedCallbacks.push(e);
    }
  }
  async initializeIgnoreMapping() {
    const e = Date.now();
    this._log("Initializing ignore mapping");
    this._initTimeout.setIfNotSet(() => {
      this._uploadLog();
    }, 60000);
    const t = this.workspaceContextService.getWorkspace().folders;
    this._log(`Folders: ${t.length}`);
    const i = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? false;
    const r = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings;
    const o = r?.cursorIgnore?.ignoreSymlinks || i;
    const a = this._queryBuilder.file(t, {
      _reason: "cursorIgnoreCheck",
      includePattern: ["**/.cursorignore"],
      maxResults: 0,
      ignoreSymlinks: o
    });
    a.log = this._log;
    let l;
    try {
      this._log(`Folders: ${t.length}`);
      l = await this.searchService.fileSearch(a, this._cancellationToken);
    } catch (A) {
      this._log(`Error searching for ignores: ${A.stack}`);
      throw A;
    }
    this._log(`Search results: ${l.results.length}`);
    for (const A of l.results) {
      try {
        const w = await this.fileService.readFile(A.resource);
        const C = this.parseIgnoreRules(w.value.toString());
        const x = A.resource.toString().substring(0, A.resource.toString().lastIndexOf(".cursorignore"));
        if (C.length > 0) {
          this._ignoreMapping[x] = sMe().add(C);
          this._ignorePatternsMapping[x] = C;
        } else {
          this._ignoreMapping[x] = "no-ignore";
          this._ignorePatternsMapping[x] = "no-ignore";
        }
      } catch (w) {
        this.logService.error(`Error processing .cursorignore file at ${A.resource.toString()}:`, w);
      }
    }
    this._log("Ignore mapping done");
    const u = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? false;
    const m = r?.cursorIgnore?.hierarchicalEnabled || u;
    let p = 0;
    if (m) {
      for (const A of t) {
        const w = this.collectHierarchicalDirectories(A.uri, {
          skipWorkspace: false
        });
        for (const C of w) {
          try {
            await this.handleNewHierarchyCursorIgnore(C);
            if (this._ignoreMapping[C.toString()] !== "no-ignore") {
              p++;
            }
          } catch (x) {
            this.logService.error(`Error loading hierarchical .cursorignore at ${C.toString()}:`, x);
          }
        }
      }
    }
    this._log("Hierarchical done");
    this._ignoreLoaded = true;
    this._initTimeout.cancel();
    this._ignoreLoadedCallbacks.forEach(A => A());
    this._ignoreLoadedCallbacks = [];
    this._cache.clear();
    const f = Date.now() - e;
    this.metricsService.distribution({
      stat: "cursor_ignore.initial_load_time_ms",
      value: f
    });
  }
  getAdminBlocklistPatterns() {
    return this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist ?? [];
  }
  getAdminBlockRepos() {
    return this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos ?? [];
  }
  hasAllowlistRepos() {
    return this.getAdminBlockRepos().some(t => t.type === "ALLOW");
  }
  async handleNewHierarchyCursorIgnore(e) {
    const t = je.joinPath(e, ".cursorignore");
    if (await this.fileService.exists(t)) {
      const i = await this.fileService.readFile(t);
      const r = this.parseIgnoreRules(i.value.toString());
      if (r.length > 0) {
        this._ignoreMapping[e.toString()] = sMe().add(r);
        this._ignorePatternsMapping[e.toString()] = r;
      } else {
        this._ignoreMapping[e.toString()] = "no-ignore";
        this._ignorePatternsMapping[e.toString()] = "no-ignore";
      }
    } else {
      this._ignoreMapping[e.toString()] = "no-ignore";
      this._ignorePatternsMapping[e.toString()] = "no-ignore";
    }
  }
  collectHierarchicalDirectories(e, t = {
    skipWorkspace: false
  }) {
    const i = [];
    let r = e;
    let s = 0;
    const o = 100;
    while (Td(r) !== r) {
      if (s >= o) {
        console.error(`Max depth of ${o} reached while populating hierarchy cursor ignore.`);
        break;
      }
      r = Td(r);
      if (!r.toString().endsWith("/")) {
        r = je.parse(r.toString() + "/");
      }
      if (!t.skipWorkspace || !this.workspaceContextService.isInsideWorkspace(r) || !this._ignoreLoaded) {
        if (!t.skipPending || !this._pendingIgnorePaths.has(r.toString())) {
          if (this._ignoreMapping[r.toString()] === undefined) {
            i.push(r);
            s++;
          }
        }
      }
    }
    return i;
  }
  populatesHierarchyCursorIgnore(e) {
    const t = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? false;
    if (!this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.hierarchicalEnabled && !t) {
      return false;
    }
    const o = this.collectHierarchicalDirectories(e, {
      skipWorkspace: true,
      skipPending: false
    });
    let a = false;
    const l = [];
    for (const u of o) {
      if (this._pendingIgnorePaths.has(u.toString())) {
        a = true;
      } else {
        l.push(u);
        this._pendingIgnorePaths.add(u.toString());
      }
    }
    if (l.length > 0) {
      Promise.all(l.map(u => this.handleNewHierarchyCursorIgnore(u).catch(d => {
        this.logService.error(`Error populating hierarchy cursor ignore for ${u.toString()}:`, d);
      }).finally(() => {
        this._pendingIgnorePaths.delete(u.toString());
      }))).finally(() => {
        if (this._ignoreLoaded) {
          this._onDidCursorIgnoreChange.fire({});
        }
      });
    }
    return a || l.length > 0;
  }
  shouldIgnoreUriSync(e, t) {
    e = je.revive(e);
    const i = e.toString();
    if (this._cache.has(i)) {
      const o = this._cache.get(i);
      if (o === null) {
        return undefined;
      } else {
        return o;
      }
    }
    const r = this.workspaceContextService.getWorkspace().folders;
    const s = this.shouldIgnoreUriWithWorkspaceFolders(e, t, r);
    if (s?.type !== "cursorIgnore" || s.source !== Zcu) {
      this._cache.set(i, s ?? null);
    }
    return s;
  }
  shouldIgnoreUriWithWorkspaceFolders(e, t, i) {
    if (this.isAdminBlocked(e)) {
      return {
        type: "adminBlock"
      };
    }
    if (this.isUnderWorktreesDir(e) || e.scheme !== _n.file && e.scheme !== _n.vscodeRemote) {
      return;
    }
    if (i.length === 0 && !t?.gitWorktree) {
      return {
        type: "outOfWorkspace"
      };
    }
    const s = t?.gitWorktree ? false : this.populatesHierarchyCursorIgnore(e);
    let o = false;
    for (const [g, f] of Object.entries(this._ignoreMapping)) {
      const A = je.parse(g);
      if (!this.uriIdentityService.extUri.isEqualOrParent(e, A)) {
        continue;
      }
      const C = this.uriIdentityService.extUri.relativePath(A, e) ?? "";
      if (f && f === "no-ignore" || C === "" || /^[a-zA-Z]:[\\/]/.test(C) || /^\.*\/|^\.+$/.test(C)) {
        continue;
      }
      const x = f.test(C);
      if (x.ignored && !x.unignored) {
        return {
          type: "cursorIgnore",
          source: g
        };
      }
      if (x.unignored) {
        o = true;
      }
    }
    if (!o && this._globalIgnore) {
      let g;
      let f = i;
      let A;
      if (t?.gitWorktree) {
        A = this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath, e);
        if (!A) {
          return {
            type: "outOfWorkspace"
          };
        }
        const w = f[0]?.name ?? "workspace";
        f = [{
          uri: A,
          name: w,
          index: 0,
          toResource: C => Wo(A, C)
        }];
      }
      if (f.length > 0) {
        const w = f.find(C => this.uriIdentityService.extUri.isEqualOrParent(e, C.uri));
        if (w) {
          if (A && this.uriIdentityService.extUri.isEqualOrParent(e, A)) {
            g = this.uriIdentityService.extUri.relativePath(A, e) ?? "";
          } else {
            g = this.uriIdentityService.extUri.relativePath(w.uri, e) ?? "";
          }
          if (g === "" || /^[a-zA-Z]:[\\/]/.test(g)) {
            return;
          }
        } else {
          const C = e.path.split("/");
          g = C[C.length - 1];
        }
      } else {
        const w = e.path.split("/");
        g = w[w.length - 1];
      }
      if (this._globalIgnore.ignores(g)) {
        return {
          type: "cursorIgnore",
          source: "globalIgnore"
        };
      }
    }
    let a = i;
    let l;
    if (t?.gitWorktree) {
      l = this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath, e);
      if (!l) {
        return {
          type: "outOfWorkspace"
        };
      }
      const g = a[0]?.name ?? "workspace";
      a = [{
        uri: l,
        name: g,
        index: 0,
        toResource: f => Wo(l, f)
      }];
    }
    if (a.length === 0) {
      return {
        type: "outOfWorkspace"
      };
    }
    const u = a.find(g => this.uriIdentityService.extUri.isEqualOrParent(e, g.uri));
    if (!u) {
      return {
        type: "outOfWorkspace"
      };
    }
    let d;
    if (l && this.uriIdentityService.extUri.isEqualOrParent(e, l)) {
      d = this.uriIdentityService.extUri.relativePath(l, e) ?? "";
      if (d === "") {
        return;
      }
    } else {
      d = this.uriIdentityService.extUri.relativePath(u.uri, e) ?? "";
    }
    const p = (Sc ? orh(d) : d).split("/");
    if (s) {
      if (t) {
        this.metricsService.increment({
          stat: "cursor_ignore.hierarchical_blocked_still_loading",
          value: 1
        });
      }
      return {
        type: "cursorIgnore",
        source: Zcu
      };
    }
  }
  shouldIgnoreUriUncached(e, t) {
    const i = this.workspaceContextService.getWorkspace().folders;
    return this.shouldIgnoreUriWithWorkspaceFolders(e, t, i);
  }
  shouldBlockUriFromReading(e) {
    const t = this.shouldIgnoreUriSync(e);
    return t !== undefined && t.type !== "outOfWorkspace";
  }
  getSerializableIgnoreMapping() {
    const e = {};
    for (const [t, i] of Object.entries(this._ignorePatternsMapping)) {
      if (Array.isArray(i)) {
        e[t] = i;
      }
    }
    if (this._globalIgnore && this._globalIgnorePatterns.length > 0) {
      const t = this.workspaceContextService.getWorkspace().folders;
      for (const i of t) {
        const r = i.uri.toString();
        const s = e[r];
        if (Array.isArray(s)) {
          e[r] = [...this._globalIgnorePatterns, ...s];
        } else {
          e[r] = [...this._globalIgnorePatterns];
        }
      }
    }
    return e;
  }
  async filterCursorIgnoredFiles(e, t) {
    await new Promise(i => this.addOnCursorIgnoreLoadedCallback(() => i(undefined)));
    return e.filter(i => !this.shouldBlockUriFromReading(t(i)));
  }
  async reloadCursorIgnoreForDirectory(e) {
    const t = await this.getRealUriAsync(e);
    const r = je.joinPath(t, ".cursorignore").toString();
    const s = r.substring(0, r.lastIndexOf(".cursorignore"));
    const a = je.joinPath(e, ".cursorignore").toString();
    const l = a.substring(0, a.lastIndexOf(".cursorignore"));
    if (l !== s) {
      delete this._ignoreMapping[l];
      delete this._ignorePatternsMapping[l];
    }
    delete this._ignoreMapping[s];
    delete this._ignorePatternsMapping[s];
    const u = je.joinPath(e, ".cursorignore");
    try {
      const d = await this.fileService.readFile(u);
      const m = this.parseIgnoreRules(d.value.toString());
      if (m.length > 0) {
        this._ignoreMapping[s] = sMe().add(m);
        this._ignorePatternsMapping[s] = m;
      } else {
        this._ignoreMapping[s] = "no-ignore";
        this._ignorePatternsMapping[s] = "no-ignore";
      }
    } catch {
      this._ignoreMapping[s] = "no-ignore";
      this._ignorePatternsMapping[s] = "no-ignore";
    }
    this._cache.clear();
    this._onDidCursorIgnoreChange.fire({});
  }
  async initializeGitRepoMapping() {
    await this.gitContextService.waitForGitContextProvider();
    const e = this.workspaceContextService.getWorkspace().folders;
    const t = new Set();
    const i = e.map(l => l.uri.scheme === _n.vscodeRemote ? l.uri.path : l.uri.fsPath);
    const r = 100;
    const s = new Set(["node_modules", ".turbo", ".next", ".cache", ".pnpm", ".yarn", "dist", "build", "out", "target", ".vscode", ".idea", "venv", "__pycache__", "logs", "tmp", "temp"]);
    await Bnf(this.fileService, this.logService, e.map(l => l.uri), t, i, {
      maxDepth: r,
      dirsToSkip: s,
      maxConcurrent: 20
    });
    this._gitRepoLocations = i;
    const a = new Map();
    for (const l of this._gitRepoLocations) {
      try {
        const u = await this.gitContextService.getGitUpstreamURL(l);
        const d = await this.gitContextService.getGitRoot(l);
        if (d) {
          a.set(d, u);
        }
      } catch (u) {
        console.warn(`Failed to get Git upstream URL for ${l}: ${u}`);
      }
    }
    this._gitRepoUpstreamUrls = a;
    this._gitReposInitialized = true;
    this._onDidCursorIgnoreChange.fire({});
  }
  normalizePathForComparison(e) {
    let t = e.replace(/\\/g, "/");
    if (t.startsWith("/") && t.length > 2 && t[2] === ":") {
      t = t.substring(1);
    }
    if (Sc) {
      t = t.toLowerCase();
    }
    return t;
  }
  isUnderWorktreesDir(e) {
    const t = e.scheme === _n.vscodeRemote ? e.path : e.fsPath;
    const i = this.normalizePathForComparison(t);
    return i === this._worktreesDirPath || i.startsWith(this._worktreesDirPath + "/");
  }
  isWildcardUrl(e) {
    return e.trim() === "*";
  }
  isPathPatternUrl(e) {
    return !e.includes("://") && !e.includes("github.com") && !e.includes("gitlab.com") && !e.includes("bitbucket.org") && !e.includes("@");
  }
  getRelativePathFromWorkspaceRoot(e) {
    const i = this.workspaceContextService.getWorkspace().folders[0]?.uri;
    if (i) {
      const r = this.normalizePathForComparison(i.fsPath);
      if (e.startsWith(r)) {
        return e.substring(r.length + 1);
      }
    }
    return e;
  }
  matchesWildcardOrPathPatternBlockRepos(e, t) {
    for (const i of e) {
      if (this.isWildcardUrl(i.url)) {
        if (i.patterns.some(s => nP(s.pattern, t))) {
          return true;
        }
      } else if (this.isPathPatternUrl(i.url) && nP(i.url, t)) {
        return true;
      }
    }
    return false;
  }
  isAdminBlocked(e) {
    const t = je.revive(e);
    let i;
    let r;
    let s = 0;
    const o = t.scheme === _n.vscodeRemote ? t.path : t.fsPath;
    const a = this.normalizePathForComparison(o);
    for (const d of this._gitRepoUpstreamUrls.keys()) {
      if (this._gitRepoUpstreamUrls.get(d) !== undefined) {
        const m = this.normalizePathForComparison(d);
        if (a.startsWith(m) && (a.length === m.length || a[m.length] === "/") && m.length > s) {
          i = d;
          r = m;
          s = m.length;
        }
      }
    }
    const l = this.getAdminBlockRepos();
    const u = this.hasAllowlistRepos();
    if (this._gitReposInitialized && i && r) {
      const d = this._gitRepoUpstreamUrls.get(i);
      if (d) {
        const m = a.substring(r.length + 1);
        if (l.length > 0) {
          for (const p of l) {
            if (p.type !== "ALLOW" && this.doesRepoUrlMatch(p.url, d) && p.patterns.some(f => nP(f.pattern, m))) {
              return true;
            }
          }
          if (u && !l.some(g => g.type === "ALLOW" && this.doesRepoUrlMatch(g.url, d) && g.patterns.some(f => nP(f.pattern, m)))) {
            return true;
          }
        }
        return false;
      }
    } else if (this._gitReposInitialized && !i) {
      if (l.length > 0) {
        const d = this.getRelativePathFromWorkspaceRoot(a);
        const m = l.filter(p => p.type !== "ALLOW");
        if (this.matchesWildcardOrPathPatternBlockRepos(m, d)) {
          return true;
        }
        if (u) {
          if (this._cursorDataDirPath && (a === this._cursorDataDirPath || a.startsWith(this._cursorDataDirPath + "/"))) {
            return false;
          }
          const p = l.filter(g => g.type === "ALLOW");
          if (!this.matchesWildcardOrPathPatternBlockRepos(p, d)) {
            return true;
          }
        }
      }
      return false;
    } else {
      const d = this.getAdminBlocklistPatterns();
      if (d.length !== 0) {
        const m = e.path;
        if (m === undefined) {
          return false;
        }
        for (const p of d) {
          if (nP(p, m)) {
            return true;
          }
        }
      }
      if (l.length > 0) {
        const m = this.getRelativePathFromWorkspaceRoot(a);
        const p = l.filter(g => g.type !== "ALLOW");
        if (this.matchesWildcardOrPathPatternBlockRepos(p, m)) {
          return true;
        }
      }
    }
    return false;
  }
  getBlockedChildPatternForDirectory(e) {
    const t = this.getAdminBlockRepos().filter(a => a.type !== "ALLOW");
    const i = this.getAdminBlocklistPatterns();
    const r = e.fsPath;
    const s = this.normalizePathForComparison(r);
    const o = this.getRelativePathFromWorkspaceRoot(s);
    for (const a of i) {
      const l = a.split("/");
      if (l.length > 0) {
        const u = l[0].replace(/\*+$/, "");
        if (u && !u.includes("*")) {
          const d = o ? `${o}/${u}` : u;
          if (nP(a, d) || a.startsWith(u)) {
            return a;
          }
        }
      }
    }
    for (const a of t) {
      if (this.isWildcardUrl(a.url)) {
        for (const l of a.patterns) {
          const u = l.pattern;
          const d = u.split("/");
          if (d.length > 0) {
            const m = d[0].replace(/\*+$/, "");
            if (m && !m.includes("*")) {
              return u;
            }
          }
        }
      } else if (this.isPathPatternUrl(a.url)) {
        const l = a.url;
        const u = l.split("/");
        if (u.length > 0) {
          const d = u[0].replace(/\*+$/, "");
          const m = !o || o === "";
          const p = l.startsWith(o + "/");
          const g = o.startsWith(d);
          if (d && !d.includes("*") && (!o || o === "" || l.startsWith(o + "/") || o.startsWith(d))) {
            return l;
          }
        }
      }
    }
  }
  getDirectoryBlockType(e) {
    if (this.isAdminBlocked(e)) {
      return "directory";
    }
    const t = this.getBlockedChildPatternForDirectory(e);
    if (t) {
      if (t.endsWith("/**")) {
        return "all-contents";
      } else if (t.endsWith("/*")) {
        return "files-only";
      } else {
        return "all-contents";
      }
    }
  }
  doesRepoUrlMatch(e, t) {
    const i = a => {
      a = a.toLowerCase();
      a = a.replace(/^(https?:\/\/|git@)/, "");
      a = a.replace(/\.git$/, "");
      a = a.replace(":", "/");
      const l = a.split("/").filter(Boolean);
      if (l.length >= 2) {
        return `${l[l.length - 2]}/${l[l.length - 1]}`;
      } else {
        return a;
      }
    };
    const r = i(e);
    const s = i(t);
    if (e.includes("*")) {
      if (e.trim() === "*") {
        return true;
      } else {
        return nP(r, s);
      }
    } else {
      return r === s;
    }
  }
  parseIgnoreRules(e) {
    return e.split(`
`).map(t => t.replace(/\r$/, "").trimStart()).filter(t => t !== "" && !t.startsWith("#"));
  }
  async listCursorIgnoreFilesByRoot(e, t) {
    const i = {};
    for (const r of e) {
      i[r.fsPath.replace(/\\/g, "/")] = [];
    }
    if (t.isCancellationRequested) {
      throw new Error("Cancellation requested");
    }
    if (!this._ignoreLoaded) {
      await new Promise((r, s) => {
        let o = t.onCancellationRequested(() => {
          s(new Error("List cursor ignore files by root cancelled"));
          o.dispose();
        });
        this.addOnCursorIgnoreLoadedCallback(() => {
          o.dispose();
          r(undefined);
        });
      });
    }
    for (const r of e) {
      if (!this.workspaceContextService.isInsideWorkspace(r)) {
        const s = r.fsPath.replace(/\\/g, "/");
        if (!this._scannedOutOfWorkspaceRoots.has(s)) {
          await this.scanAndLoadCursorIgnoresUnderRoot(r, t);
          this._scannedOutOfWorkspaceRoots.add(s);
        }
        if (!this._scannedOutOfWorkspaceAncestorRoots.has(s)) {
          await this.scanAndLoadAncestorCursorIgnores(r);
          this._scannedOutOfWorkspaceAncestorRoots.add(s);
        }
      }
    }
    for (const [r, s] of Object.entries(this._ignoreMapping)) {
      if (s === "no-ignore") {
        continue;
      }
      let o;
      try {
        o = je.parse(r.endsWith(".cursorignore") ? r : r + ".cursorignore");
      } catch {
        continue;
      }
      for (const a of e) {
        const l = a.toString();
        const u = o.toString();
        const d = u.startsWith(l);
        const p = !this.workspaceContextService.isInsideWorkspace(a) && l.startsWith(r);
        if (d || p) {
          const g = a.fsPath.replace(/\\/g, "/");
          const f = i[g];
          if (!f.some(A => A.toString() === u)) {
            f.push(o);
          }
        }
      }
    }
    return i;
  }
  async scanAndLoadCursorIgnoresUnderRoot(e, t) {
    try {
      const i = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? false;
      const o = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.ignoreSymlinks || i;
      const a = this._queryBuilder.file([e], {
        _reason: "cursorIgnoreCheck-outOfWorkspace",
        expandPatterns: false,
        ignoreSymlinks: o
      });
      a.includePattern = {
        "**/.cursorignore": true
      };
      const l = await this.searchService.fileSearch(a, t);
      for (const u of l.results) {
        try {
          const d = await this.fileService.readFile(u.resource);
          const m = this.parseIgnoreRules(d.value.toString());
          const p = u.resource.toString().substring(0, u.resource.toString().lastIndexOf(".cursorignore"));
          if (m.length > 0) {
            this._ignoreMapping[p] = sMe().add(m);
            this._ignorePatternsMapping[p] = m;
          } else {
            this._ignoreMapping[p] = "no-ignore";
            this._ignorePatternsMapping[p] = "no-ignore";
          }
        } catch (d) {
          console.error(`Error processing .cursorignore file at ${u.resource.toString()}:`, d);
        }
      }
      this._onDidCursorIgnoreChange.fire({});
    } catch (i) {
      console.warn("scanAndLoadCursorIgnoresUnderRoot failed", i);
    }
  }
  async scanAndLoadAncestorCursorIgnores(e) {
    try {
      let t = Td(e);
      const i = new Set();
      let r = 0;
      const s = 100;
      while (Td(t) !== t && !(r++ > s)) {
        const o = t.toString().endsWith("/") ? t.toString() : t.toString() + "/";
        if (i.has(o)) {
          break;
        }
        i.add(o);
        const a = je.parse(o + ".cursorignore");
        try {
          if (await this.fileService.exists(a)) {
            const u = await this.fileService.readFile(a);
            const d = this.parseIgnoreRules(u.value.toString());
            if (d.length > 0) {
              this._ignoreMapping[o] = sMe().add(d);
              this._ignorePatternsMapping[o] = d;
            } else {
              this._ignoreMapping[o] = "no-ignore";
              this._ignorePatternsMapping[o] = "no-ignore";
            }
          }
        } catch {}
        const l = Td(t);
        if (l.toString() === t.toString()) {
          break;
        }
        t = l;
      }
      this._onDidCursorIgnoreChange.fire({});
    } catch (t) {
      console.warn("scanAndLoadAncestorCursorIgnores failed", t);
    }
  }
};
EAa = __decorate([__param(0, Lr), __param(1, Gr), __param(2, Rr), __param(3, bQ), __param(4, ku), __param(5, ln), __param(6, oX), __param(7, AE), __param(8, Fn), __param(9, xl), __param(10, C$e), __param(11, R1), __param(12, tie), __param(13, iS), __param(14, kp)], EAa);
Vi(s5, EAa, 1);
