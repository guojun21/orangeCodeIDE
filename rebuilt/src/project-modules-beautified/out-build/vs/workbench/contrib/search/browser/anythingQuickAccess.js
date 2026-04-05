"use strict";

// Module: out-build/vs/workbench/contrib/search/browser/anythingQuickAccess.js
// Offset: 28470993 (bundle byte offset)
// Size: 28400 bytes
y9A();
Kl();
bce();
iX();
mie();
Wt();
ynt();
wE();
ps();
iL();
_g();
Yn();
Yr();
eu();
ns();
rt();
Pd();
oR();
hd();
Ku();
Ht();
lP();
Ei();
Nu();
ss();
ts();
vr();
B9A();
e5();
zr();
N1();
cu();
vva();
eX();
TEe();
kau();
td();
yn();
qi();
Jr();
_d();
kW();
L0();
ka();
Ws();
Itf();
kk();
jr();
Dce();
u8A();
MEe();
eV();
Cm();
d8A();
_Ee();
jq();
D8A();
R8A();
L8A();
Hl();
_r();
Ql();
m8();
cp();
Vs();
elu = _(10516, null);
TAa = _(10517, null);
Gnf = false;
Wnf = class extends at {
  constructor(n, e) {
    super();
    this.provider = n;
    this.picker = undefined;
    this.scorerCache = Object.create(null);
    this.fileQueryCache = undefined;
    this.lastOriginalFilter = undefined;
    this.lastFilter = undefined;
    this.lastRange = undefined;
    this.lastGlobalPicks = undefined;
    this.isQuickNavigating = undefined;
    this.editorViewState = this._register(e.createInstance(Vmn));
  }
  set(n) {
    this.picker = n;
    In.once(n.onDispose)(() => {
      if (n === this.picker) {
        this.picker = undefined;
      }
    });
    const e = !!n.quickNavigate;
    if (!e) {
      this.fileQueryCache = this.provider.createFileQueryCache();
      this.scorerCache = Object.create(null);
    }
    this.isQuickNavigating = e;
    this.lastOriginalFilter = undefined;
    this.lastFilter = undefined;
    this.lastRange = undefined;
    this.lastGlobalPicks = undefined;
    this.editorViewState.reset();
  }
};
sqe = class extends nX {
  static {
    p8 = this;
  }
  static {
    this.PREFIX = "";
  }
  static {
    this.NO_RESULTS_PICK = {
      label: _(10518, null),
      isNoResults: true
    };
  }
  static {
    this.CREATE_FILE_PICK_ID = "__createFile__";
  }
  static {
    this.MAX_RESULTS = 512;
  }
  static {
    this.TYPING_SEARCH_DELAY = 200;
  }
  static {
    this.SYMBOL_PICKS_MERGE_DELAY = 200;
  }
  get scorerCache() {
    return this.pickState.scorerCache;
  }
  get defaultFilterValue() {
    if (this.configuration.preserveInput) {
      return vmn.LAST;
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H, W, z) {
    super(p8.PREFIX, {
      canAcceptInBackground: true
    });
    this.instantiationService = e;
    this.searchService = t;
    this.contextService = i;
    this.appLayoutService = r;
    this.pathService = s;
    this.environmentService = o;
    this.fileService = a;
    this.labelService = l;
    this.modelService = u;
    this.languageService = d;
    this.workingCopyService = m;
    this.configurationService = p;
    this.editorService = g;
    this.historyService = f;
    this.filesConfigurationService = A;
    this.textModelService = w;
    this.uriIdentityService = C;
    this.quickInputService = x;
    this.keybindingService = I;
    this.quickChatService = B;
    this.logService = R;
    this.customEditorLabelService = N;
    this.workspaceContextService = M;
    this.selectedContextService = O;
    this.cursorIgnoreService = $;
    this.languageFeaturesService = H;
    this.cppEventLoggerService = W;
    this.composerDataService = z;
    this.labelOnlyEditorHistoryPickAccessor = new hBc({
      skipDescription: true
    });
    this.fileQueryDelayer = this._register(new L4(p8.TYPING_SEARCH_DELAY));
    this.lazyRegistry = new Ob(() => Di.as(kJ.Quickaccess));
    this.semanticSearchBackgroundRequests = [];
    this.pickState = this._register(new Wnf(this, this.instantiationService));
    this.fileQueryBuilder = this.instantiationService.createInstance(yV);
    this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(wnt));
    this.editorSymbolsQuickAccess = this.instantiationService.createInstance(Tye);
  }
  get configuration() {
    const e = this.configurationService.getValue().workbench?.editor;
    const t = this.configurationService.getValue().search;
    const i = this.configurationService.getValue().workbench.quickOpen;
    return {
      openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
      openSideBySideDirection: e?.openSideBySideDirection,
      includeSymbols: t?.quickOpen.includeSymbols,
      includeHistory: t?.quickOpen.includeHistory,
      historyFilterSortOrder: t?.quickOpen.history.filterSortOrder,
      preserveInput: i.preserveInput,
      useVscodeSearch: t?.quickOpen.useVscodeSearch ?? false
    };
  }
  provide(e, t, i) {
    const r = new Ut();
    this.pickState.set(e);
    r.add(e.onDidAccept(() => {
      const o = [];
      const a = new Map();
      for (const l of e.items) {
        if (l.type === "separator") {
          o.push({
            type: "separator",
            separatorLabel: l.label ?? ""
          });
          continue;
        }
        if (l.type === "section") {
          o.push({
            type: "section",
            sectionHeader: l.label ?? ""
          });
          continue;
        }
        if (l.resource) {
          o.push({
            type: "resource",
            resource: l.resource,
            range: l.semSearchData ? l.semSearchData.highlightRange : undefined
          });
          a.set(l, o.length - 1);
        }
      }
    }));
    const s = r.add(new uo());
    r.add(e.onDidChangeActive(() => {
      s.value = undefined;
      const [o] = e.activeItems;
      const a = N8A(o);
      if (xAa(o)) {
        s.value = this.decorateAndRevealSymbolRange(o);
      } else if (Gnf && a && o.resource && o.range) {
        s.value = this.decorateAndRevealSemanticSearchRange(o);
      }
    }));
    r.add(In.once(e.onDidHide)(({
      reason: o
    }) => {
      if (o === I9e.Gesture) {
        this.pickState.editorViewState.restore();
      }
    }));
    r.add(super.provide(e, t, i));
    return r;
  }
  decorateAndRevealSemanticSearchRange(e) {
    const t = this.editorService.activeEditor;
    if (!e.resource) {
      return at.None;
    }
    if (!this.uriIdentityService.extUri.isEqual(e.resource, t?.resource)) {
      this.editorService.openEditor({
        resource: e.resource,
        options: {
          preserveFocus: true
        }
      });
      return at.None;
    }
    const i = this.editorService.activeTextEditorControl;
    if (!i || !e.range) {
      return at.None;
    } else {
      this.pickState.editorViewState.set();
      i.revealRangeInCenter(e.range, 0);
      this.addDecorations(i, e.range);
      return $i(() => this.clearDecorations(i));
    }
  }
  decorateAndRevealSymbolRange(e) {
    const t = this.editorService.activeEditor;
    if (!this.uriIdentityService.extUri.isEqual(e.resource, t?.resource)) {
      return at.None;
    }
    const i = this.editorService.activeTextEditorControl;
    if (i) {
      this.pickState.editorViewState.set();
      i.revealRangeInCenter(e.range.selection, 0);
      this.addDecorations(i, e.range.decoration);
      return $i(() => this.clearDecorations(i));
    } else {
      return at.None;
    }
  }
  _getPicks(e, t, i, r) {
    const s = D9A(e, [Tye.PREFIX]);
    let o;
    if (s) {
      o = s.filter;
    } else {
      o = e;
    }
    this.pickState.lastRange = s?.range;
    if (e !== this.pickState.lastOriginalFilter && o === this.pickState.lastFilter) {
      return null;
    }
    const a = !!this.pickState.lastOriginalFilter;
    this.pickState.lastOriginalFilter = e;
    this.pickState.lastFilter = o;
    const l = this.pickState.picker?.items;
    const u = this.pickState.picker?.activeItems[0];
    if (l && u) {
      const d = xAa(u);
      const m = u === p8.NO_RESULTS_PICK && o.indexOf(Tye.PREFIX) >= 0;
      if (!d && !m) {
        this.pickState.lastGlobalPicks = {
          items: l,
          active: u
        };
      }
    }
    return this.doGetPicks(o, {
      ...r,
      enableEditorSymbolSearch: a
    }, t, i);
  }
  initializeCaches() {
    this.pickState.fileQueryCache = this.createFileQueryCache();
    this.pickState.scorerCache = Object.create(null);
  }
  doGetPicksPublic(e, t, i, r) {
    return this.doGetPicks(e, t, i, r);
  }
  doGetPicks(e, t, i, r) {
    if (this.configuration.useVscodeSearch) {
      return this.doGetVscodePicks(e, t, i, r);
    } else {
      return this.doGetCursorPicks(e, t, i, r);
    }
  }
  doGetVscodePicks(e, t, i, r) {
    const s = o8(e);
    if (t.enableEditorSymbolSearch) {
      const d = this.getEditorSymbolPicks(s, i, r);
      if (d) {
        return d;
      }
    }
    const o = this.pickState.picker?.activeItems[0];
    if (xAa(o) && this.pickState.lastGlobalPicks) {
      return this.pickState.lastGlobalPicks;
    }
    const a = this.getEditorHistoryPicks(s);
    const l = t.additionPicks?.filter(d => d.type !== "section");
    let u = new Array();
    if (l) {
      for (const d of l) {
        if (d.type === "separator") {
          u.push(d);
          continue;
        }
        if (!s.original) {
          d.highlights = undefined;
          u.push(d);
          continue;
        }
        const {
          score: m,
          labelMatch: p,
          descriptionMatch: g
        } = Mq(d, s, true, DW, this.pickState.scorerCache);
        if (m) {
          d.highlights = {
            label: p,
            description: g
          };
          u.push(d);
        }
      }
    }
    if (this.pickState.isQuickNavigating) {
      if (u.length > 0) {
        u.push({
          type: "separator",
          label: _(10519, null)
        });
      }
      u = a;
    } else {
      if (t.includeHelp) {
        u.push(...this.getHelpPicks(s, r, t));
      }
      if (a.length !== 0) {
        u.push({
          type: "separator",
          label: _(10520, null)
        });
        u.push(...a);
      }
    }
    return {
      picks: t.filter ? u.filter(d => t.filter?.(d)) : u,
      additionalPicks: (async () => {
        const d = new fu(p => this.uriIdentityService.extUri.getComparisonKey(p));
        for (const p of a) {
          if (p.resource) {
            d.set(p.resource, true);
          }
        }
        let m = await this.getVscodeAdditionalPicks(s, d, this.configuration.includeSymbols, r);
        if (t.filter) {
          m = m.filter(p => t.filter?.(p));
        }
        if (r.isCancellationRequested) {
          return [];
        } else if (m.length > 0) {
          return [{
            type: "separator",
            label: this.configuration.includeSymbols ? _(10521, null) : _(10522, null)
          }, ...m];
        } else {
          return [];
        }
      })(),
      mergeDelay: p8.SYMBOL_PICKS_MERGE_DELAY
    };
  }
  doGetCursorPicks(e, t, i, r) {
    const s = t?.excludeCursorIgnore ?? false;
    const o = o8(e);
    const a = p => p.filter(g => !("resource" in g) || !g.resource || !this.cursorIgnoreService.shouldBlockUriFromReading(g.resource));
    let l = [];
    if (!t.excludeSemanticSearch) {
      const {
        fast: p,
        slow: g
      } = this.getSemanticSearchPicks(o, r);
      l = p;
      g.then(f => {
        if (f.length > 0 && !r.isCancellationRequested) {
          const A = [{
            type: "separator",
            label: TAa
          }, ...f];
          this.updatePickerItems(A, true);
        }
      }).catch(f => {});
    }
    if (t.enableEditorSymbolSearch) {
      const p = this.getEditorSymbolPicks(o, i, r);
      if (p) {
        return p;
      }
    }
    const u = this.pickState.picker?.activeItems[0];
    if (xAa(u) && this.pickState.lastGlobalPicks) {
      return this.pickState.lastGlobalPicks;
    }
    let d = s ? a(this.getEditorHistoryPicks(o)) : this.getEditorHistoryPicks(o);
    let m = new Array();
    if (t.additionPicks) {
      for (const p of t.additionPicks) {
        if (p.type === "separator") {
          m.push(p);
          continue;
        }
        if (p.type === "section") {
          m.push(p);
          continue;
        }
        if (!o.original) {
          p.highlights = undefined;
          m.push(p);
          continue;
        }
        const {
          score: g,
          labelMatch: f,
          descriptionMatch: A
        } = Mq(p, o, true, DW, this.pickState.scorerCache);
        if (g) {
          p.highlights = {
            label: f,
            description: A
          };
          m.push(p);
        }
      }
    }
    if (this.pickState.isQuickNavigating) {
      if (m.length > 0) {
        m.push({
          type: "separator",
          label: _(10523, null)
        });
      }
      m = d;
    } else {
      if (t.includeHelp) {
        m.push(...this.getHelpPicks(o, r, t));
      }
      if (d.length !== 0) {
        m.push({
          type: "separator",
          label: _(10524, null)
        });
        m.push(...d);
      }
    }
    if (s) {
      m = m.filter(p => p.type === "separator" || !("resource" in p) || !p.resource || !this.cursorIgnoreService.shouldBlockUriFromReading(p.resource));
    }
    return {
      picks: t.filter ? m.filter(p => t.filter?.(p)) : m,
      additionalPicks: (async () => {
        const p = new fu();
        for (const I of d) {
          if (I.resource) {
            p.set(I.resource, true);
          }
        }
        let {
          highScoringPicks: g,
          lowScoringPicks: f
        } = await this.getCursorAdditionalPicks(o, p, this.configuration.includeSymbols, r);
        if (s) {
          g = a(g);
          f = a(f);
        }
        if (t.filter) {
          g = g.filter(t.filter);
          f = f.filter(t.filter);
        }
        if (r.isCancellationRequested) {
          return [];
        }
        let A = [];
        const w = this.configuration.includeSymbols ? _(10525, null) : _(10526, null);
        if (!m.some(I => I !== p8.NO_RESULTS_PICK && I.type !== "separator" && I.type !== "section") && !(g.length > 0) && !(f.length > 0) && !(l.length > 0) && !(d.length > 0) && this.isValidFilePath(e)) {
          const I = this.createFilePicksForPath(e);
          A = [p8.NO_RESULTS_PICK, ...I.slice(1)];
        } else if (t.excludeSemanticSearch) {
          A = [...g, ...f];
          A = A.length > 0 ? [{
            type: "separator",
            label: w
          }, ...A] : [];
        } else {
          if (g.length > 0) {
            A = [...A, {
              type: "separator",
              label: w
            }, ...g];
          }
          if (l.length > 0) {
            A = [...A, {
              type: "separator",
              label: TAa
            }, ...l];
          } else if (f.length > 0) {
            A = [...A, {
              type: "separator",
              label: elu
            }, ...f];
          }
        }
        return A;
      })(),
      mergeDelay: t.isFromComposer ? this.configuration.includeSymbols ? p8.SYMBOL_PICKS_MERGE_DELAY : 50 : p8.SYMBOL_PICKS_MERGE_DELAY
    };
  }
  async getVscodeAdditionalPicks(e, t, i, r) {
    const [s, o] = await Promise.all([this.getFilePicks(e, t, r), this.getWorkspaceSymbolPicks(e, i, r)]);
    if (r.isCancellationRequested) {
      return [];
    }
    const a = KeA([...s, ...o], (u, d) => tba(u, d, e, true, DW, this.pickState.scorerCache), p8.MAX_RESULTS);
    const l = [];
    for (const u of a) {
      if (u.highlights) {
        l.push(u);
      } else {
        const {
          score: d,
          labelMatch: m,
          descriptionMatch: p
        } = Mq(u, e, true, DW, this.pickState.scorerCache);
        if (!d) {
          continue;
        }
        u.highlights = {
          label: m,
          description: p
        };
        l.push(u);
      }
    }
    return l;
  }
  async getCursorAdditionalPicks(e, t, i, r) {
    const [s, o] = await Promise.all([this.getFilePicks(e, t, r), this.getWorkspaceSymbolPicks(e, i, r)]);
    if (r.isCancellationRequested) {
      return {
        highScoringPicks: [],
        lowScoringPicks: []
      };
    }
    const a = [...s, ...o];
    a.sort((w, C) => tba(w, C, e, true, DW, this.pickState.scorerCache));
    const l = ppn.HIGH_SCORING_THRESHOLD;
    const u = ppn.HIGH_SCORING_CAP_ITEMS;
    const d = [];
    const m = [];
    for (const w of a) {
      const {
        score: C,
        labelMatch: x,
        descriptionMatch: I
      } = Mq(w, e, true, DW, this.pickState.scorerCache);
      const B = {
        ...w,
        highlights: {
          label: x,
          description: I
        }
      };
      if (C >= l && d.length < u) {
        d.push(B);
      } else {
        m.push(B);
      }
      if (d.length + m.length >= p8.MAX_RESULTS) {
        break;
      }
    }
    const p = p8.MAX_RESULTS;
    const g = Math.min(d.length, p);
    const f = Math.min(m.length, p - g);
    return {
      highScoringPicks: d.filter(w => {
        const C = [...(w.highlights?.label ?? []), ...(w.highlights?.description ?? [])];
        if ((e.values?.length ?? 1) <= 1) {
          return w;
        } else {
          return C.reduce((I, B) => I + (B.end - B.start), 0) / C.length > 3;
        }
      }).slice(0, g),
      lowScoringPicks: m.slice(0, f)
    };
  }
  getEditorHistoryPicks(e) {
    const t = this.configuration;
    if (!e.normalized) {
      return this.historyService.getHistory().filter(s => {
        const o = s.resource;
        return !o || !o.path.includes("/.cursor/worktrees/");
      }).map(s => this.createAnythingPick(s, t));
    }
    if (!this.configuration.includeHistory) {
      return [];
    }
    const i = e.containsPathSeparator ? DW : this.labelOnlyEditorHistoryPickAccessor;
    const r = [];
    for (const s of this.historyService.getHistory()) {
      const o = s.resource;
      if (!o || !this.fileService.hasProvider(o) && o.scheme !== _n.untitled && o.scheme !== _n.vscodeTerminal && o.scheme !== _n.aiChat || o.path.includes("/.cursor/worktrees/")) {
        continue;
      }
      const a = this.createAnythingPick(s, t);
      const {
        score: l,
        labelMatch: u,
        descriptionMatch: d
      } = Mq(a, e, false, i, this.pickState.scorerCache);
      if (l) {
        a.highlights = {
          label: u,
          description: d
        };
        r.push(a);
      }
    }
    if (this.configuration.historyFilterSortOrder === "recency") {
      return r;
    } else {
      return r.sort((s, o) => tba(s, o, e, false, i, this.pickState.scorerCache));
    }
  }
  createFileQueryCache() {
    return new eef(e => this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
      cacheKey: e
    })), e => this.searchService.fileSearch(e), e => this.searchService.clearCache(e), this.pickState.fileQueryCache).load();
  }
  getScopedFoldersForSearch() {
    const e = this.contextService.getWorkspace().folders;
    e.length === 0;
    return e;
  }
  async getFilePicks(e, t, i) {
    if (!e.normalized) {
      return [];
    }
    const r = await this.getAbsolutePathFileResult(e, i);
    if (i.isCancellationRequested) {
      return [];
    }
    let s;
    if (r) {
      if (t.has(r)) {
        return [];
      }
      const a = this.createAnythingPick(r, this.configuration);
      a.highlights = {
        label: [{
          start: 0,
          end: a.label.length
        }],
        description: a.description ? [{
          start: 0,
          end: a.description.length
        }] : undefined
      };
      return [a];
    }
    if (this.pickState.fileQueryCache?.isLoaded) {
      s = await this.doFileSearch(e, i);
    } else {
      s = await this.fileQueryDelayer.trigger(async () => i.isCancellationRequested ? [] : this.doFileSearch(e, i));
    }
    if (i.isCancellationRequested) {
      return [];
    }
    const o = this.configuration;
    return s.filter(a => !t.has(a)).map(a => this.createAnythingPick(a, o));
  }
  async doFileSearch(e, t) {
    const [i, r] = await Promise.all([this.getFileSearchResults(e, t), this.getRelativePathFileResults(e, t)]);
    if (t.isCancellationRequested) {
      return [];
    }
    if (!r) {
      return i;
    }
    const s = new fu();
    for (const o of r) {
      s.set(o, true);
    }
    return [...i.filter(o => !s.has(o)), ...r];
  }
  async getFileSearchResults(e, t) {
    let i = "";
    if (e.values && e.values.length > 1) {
      i = e.values[0].original;
    } else {
      i = e.original;
    }
    const r = await this.doGetFileSearchResults(i, t);
    if (t.isCancellationRequested) {
      return [];
    }
    if (r.limitHit && e.values && e.values.length > 1) {
      const s = await this.doGetFileSearchResults(e.original, t);
      if (t.isCancellationRequested) {
        return [];
      }
      const o = new fu();
      for (const a of r.results) {
        o.set(a.resource, true);
      }
      for (const a of s.results) {
        if (!o.has(a.resource)) {
          r.results.push(a);
        }
      }
    }
    return r.results.map(s => s.resource);
  }
  doGetFileSearchResults(e, t) {
    const i = Date.now();
    return this.searchService.fileSearch(this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
      filePattern: e,
      cacheKey: this.pickState.fileQueryCache?.cacheKey,
      maxResults: p8.MAX_RESULTS
    })), t).finally(() => {
      this.logService.trace(`QuickAccess fileSearch ${Date.now() - i}ms`);
    });
  }
  getFileQueryOptions(e) {
    const t = [];
    return {
      _reason: "openFileHandler",
      extraFileResources: this.instantiationService.invokeFunction(fva),
      filePattern: e.filePattern || "",
      cacheKey: e.cacheKey,
      maxResults: e.maxResults || 0,
      sortByScore: true,
      excludePattern: t
    };
  }
  async getAbsolutePathFileResult(e, t) {
    if (!e.containsPathSeparator) {
      return;
    }
    const i = await this.pathService.userHome();
    const r = mBc(e.original, i.scheme === _n.file ? i.fsPath : i.path);
    if (t.isCancellationRequested) {
      return;
    }
    const s = (await this.pathService.path).isAbsolute(r);
    if (!t.isCancellationRequested && s) {
      const o = P4(await this.pathService.fileURI(r), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
      if (t.isCancellationRequested) {
        return;
      }
      try {
        if ((await this.fileService.stat(o)).isFile) {
          return o;
        }
      } catch {}
    }
  }
  async getRelativePathFileResults(e, t) {
    if (!e.containsPathSeparator) {
      return;
    }
    if (!(await this.pathService.path).isAbsolute(e.original)) {
      const r = [];
      for (const s of this.contextService.getWorkspace().folders) {
        if (t.isCancellationRequested) {
          break;
        }
        const o = P4(s.toResource(e.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
        try {
          if ((await this.fileService.stat(o)).isFile) {
            r.push(o);
          }
        } catch {}
      }
      return r;
    }
  }
  getHelpPicks(e, t, i) {
    if (e.normalized) {
      return [];
    }
    const r = this.lazyRegistry.value.getQuickAccessProviders().filter(s => s.helpEntries.some(o => o.commandCenterOrder !== undefined)).flatMap(s => s.helpEntries.filter(o => o.commandCenterOrder !== undefined).map(o => {
      const a = {
        ...i,
        includeHelp: s.prefix === p8.PREFIX ? false : i?.includeHelp
      };
      const l = o.commandCenterLabel ?? o.description;
      return {
        label: l,
        description: o.prefix ?? s.prefix,
        commandCenterOrder: o.commandCenterOrder,
        keybinding: o.commandId ? this.keybindingService.lookupKeybinding(o.commandId) : undefined,
        ariaLabel: _(10527, null, l, o.description),
        accept: () => {
          this.quickInputService.quickAccess.show(s.prefix, {
            preserveValue: true,
            providerOptions: a
          });
        }
      };
    }));
    if (this.quickChatService.enabled) {
      r.push({
        label: _(10528, null),
        commandCenterOrder: 30,
        keybinding: this.keybindingService.lookupKeybinding(ycu),
        accept: () => this.quickChatService.toggle()
      });
    }
    return r.sort((s, o) => s.commandCenterOrder - o.commandCenterOrder);
  }
  async getWorkspaceSymbolPicks(e, t, i) {
    if (!e.normalized || !t || this.pickState.lastRange) {
      return [];
    } else {
      return this.workspaceSymbolsQuickAccess.getSymbolPicks(e.original, {
        skipLocal: true,
        skipSorting: true,
        delay: p8.TYPING_SEARCH_DELAY
      }, i);
    }
  }
  getEditorSymbolPicks(e, t, i) {
    const r = e.original.split(Tye.PREFIX);
    const s = r.length > 1 ? r[r.length - 1].trim() : undefined;
    if (typeof s != "string") {
      return null;
    }
    const o = this.pickState.lastGlobalPicks?.active;
    if (!o) {
      return null;
    }
    const a = o.resource;
    if (!a || !this.fileService.hasProvider(a) && a.scheme !== _n.untitled || (o.label.includes(Tye.PREFIX) || o.description?.includes(Tye.PREFIX)) && r.length < 3) {
      return null;
    } else {
      return this.doGetEditorSymbolPicks(o, a, s, t, i);
    }
  }
  async doGetEditorSymbolPicks(e, t, i, r, s) {
    try {
      this.pickState.editorViewState.set();
      await this.pickState.editorViewState.openTransientEditor({
        resource: t,
        options: {
          preserveFocus: true,
          revealIfOpened: true,
          ignoreError: true
        }
      });
    } catch {
      return [];
    }
    if (s.isCancellationRequested) {
      return [];
    }
    let o = this.modelService.getModel(t);
    if (!o) {
      try {
        const l = r.add(await this.textModelService.createModelReference(t));
        if (s.isCancellationRequested) {
          return [];
        }
        o = l.object.textEditorModel;
      } catch {
        return [];
      }
    }
    const a = await this.editorSymbolsQuickAccess.getSymbolPicks(o, i, {
      extraContainerLabel: zoe(e.label)
    }, r, s);
    if (s.isCancellationRequested) {
      return [];
    } else {
      return a.map(l => l.type === "separator" ? l : {
        ...l,
        resource: t,
        description: l.description,
        trigger: (u, d) => {
          this.openAnything(t, {
            keyMods: d,
            range: l.range?.selection,
            forceOpenSideBySide: true
          });
          return HF.CLOSE_PICKER;
        },
        accept: (u, d) => this.openAnything(t, {
          keyMods: u,
          range: l.range?.selection,
          preserveFocus: d.inBackground,
          forcePinned: d.inBackground
        })
      });
    }
  }
  addDecorations(e, t) {
    this.editorSymbolsQuickAccess.addDecorations(e, t);
  }
  clearDecorations(e) {
    this.editorSymbolsQuickAccess.clearDecorations(e);
  }
  createAnythingPick(e, t) {
    const i = !je.isUri(e);
    let r;
    let s;
    let o;
    let a;
    let l;
    let u;
    if (D_(e)) {
      r = gp.getOriginalUri(e);
      s = e.getName();
      o = e.getDescription();
      a = e.isDirty() && !e.isSaving();
      l = e.getLabelExtraClasses();
      u = e.getIcon();
    } else {
      r = je.isUri(e) ? e : e.resource;
      const g = this.customEditorLabelService.getName(r);
      s = g || GP(r);
      o = this.labelService.getUriLabel(g ? r : Td(r), {
        relative: true
      });
      a = this.workingCopyService.isDirty(r) && !this.filesConfigurationService.hasShortAutoSaveDelay(r);
      l = [];
    }
    const d = o ? `${s} ${o}` : s;
    const m = new Ob(() => yS(this.modelService, this.languageService, r, undefined, u).concat(l));
    const p = new Ob(() => {
      const g = t.openSideBySideDirection;
      const f = [];
      f.push({
        iconClass: g === "right" ? Qt.asClassName(Be.splitHorizontal) : Qt.asClassName(Be.splitVertical),
        tooltip: _(g === "right" ? 10529 : 10530, null)
      });
      if (i) {
        f.push({
          iconClass: a ? "dirty-anything " + Qt.asClassName(Be.circleFilled) : Qt.asClassName(Be.close),
          tooltip: _(10531, null),
          alwaysVisible: a
        });
      }
      return f;
    });
    return {
      resource: r,
      label: s,
      ariaLabel: a ? _(10532, null, d) : d,
      description: o,
      get iconClasses() {
        return m.value;
      },
      get buttons() {
        return p.value;
      },
      trigger: (g, f) => {
        switch (g) {
          case 0:
            this.openAnything(e, {
              keyMods: f,
              range: this.pickState.lastRange,
              forceOpenSideBySide: true
            });
            return HF.CLOSE_PICKER;
          case 1:
            if (!je.isUri(e)) {
              this.historyService.removeFromHistory(e);
              return HF.REMOVE_ITEM;
            }
        }
        return HF.NO_ACTION;
      },
      accept: (g, f) => this.openAnything(e, {
        keyMods: g,
        range: this.pickState.lastRange,
        preserveFocus: f.inBackground,
        forcePinned: f.inBackground
      })
    };
  }
  async openAnything(e, t) {
    const i = {
      preserveFocus: t.preserveFocus,
      pinned: t.keyMods?.ctrlCmd || t.forcePinned || this.configuration.openEditorPinned,
      selection: t.range ? Zt.collapseToStart(t.range) : undefined
    };
    const r = t.keyMods?.alt || this.configuration.openEditorPinned && t.keyMods?.ctrlCmd || t.forceOpenSideBySide ? Aw : B1;
    if (r === Aw) {
      await this.pickState.editorViewState.restore();
    }
    if (D_(e)) {
      await this.editorService.openEditor(e, i, r);
    } else {
      let s;
      if (je.isUri(e)) {
        s = {
          resource: e,
          options: i
        };
      } else {
        s = {
          ...e,
          options: {
            ...e.options,
            ...i
          }
        };
      }
      await this.editorService.openEditor(s, r);
    }
  }
  getShownSemanticPicks() {
    return this.pickState.picker?.items?.filter(t => t.type !== "separator" && t.type !== "section" && t.semSearchData !== undefined) ?? [];
  }
  getSemanticSearchPicks(e, t) {
    if (e.original.split(" ").length <= 1 || e.original.length <= 8 || !e.normalized) {
      return {
        fast: [],
        slow: Promise.resolve([])
      };
    }
    const r = performance.now();
    if (t.isCancellationRequested) {
      return {
        fast: [],
        slow: Promise.resolve([])
      };
    }
    for (const u of this.semanticSearchBackgroundRequests) {
      u.abortC.abort();
    }
    this.semanticSearchBackgroundRequests = [];
    const s = new AbortController();
    this.semanticSearchBackgroundRequests.push({
      abortC: s,
      query: e.original,
      startTime: Date.now()
    });
    const o = u => {
      const {
        startPosition: d,
        endPosition: m
      } = u.codeBlock?.range ?? {};
      if (!d || !m) {
        return null;
      }
      const p = Zt.lift({
        startColumn: d.column,
        startLineNumber: d.line,
        endColumn: m.column,
        endLineNumber: m.line
      });
      return JSON.stringify({
        relativeWorkspacePath: u.codeBlock?.relativeWorkspacePath,
        range: p
      });
    };
    const a = u => JSON.stringify({
      relativeWorkspacePath: u.resource && this.workspaceContextService.asRelativePath(u.resource),
      range: u.range
    });
    const l = u => {
      const d = this.pickState.picker?.items;
      if (d !== undefined) {
        this.updatePickerItems(d.filter(m => m.type !== "separator" && m.semSearchData).map(m => {
          const {
            codeResult: p
          } = u;
          if (!p) {
            return m;
          }
          if (o(p) === a(m)) {
            const g = u.lineNumberClassification?.highlightRange;
            const f = g ? Zt.lift({
              startColumn: g.startColumn,
              startLineNumber: g.startLineNumber,
              endColumn: g.endColumn,
              endLineNumber: g.endLineNumberInclusive
            }) : undefined;
            return {
              ...m,
              semSearchData: {
                ...(m.type === "item" ? m.semSearchData : {}),
                focusLine: u.lineNumberClassification?.detailedLine?.lineNumber,
                highlightRange: f
              }
            };
          }
          return m;
        }), true);
      }
    };
    return {
      fast: this.getShownSemanticPicks(),
      slow: (async () => {
        try {
          const u = [];
          if (s.signal.aborted) {
            return this.getShownSemanticPicks();
          }
          const d = new Map();
          for (const w of u) {
            const C = w.resource.toString();
            if (!d.has(C)) {
              d.set(C, []);
            }
            d.get(C).push(w);
          }
          const m = Array.from(d.keys()).map(async w => {
            const C = je.parse(w);
            const x = await this.getOutlineModel(C, t);
            return {
              resourceKey: w,
              outlineModel: x
            };
          });
          const p = await Promise.all(m);
          const g = new Map(p.map(({
            resourceKey: w,
            outlineModel: C
          }) => [w, C]));
          const f = Array.from(d.entries()).flatMap(([w, C]) => {
            const x = g.get(w);
            return C.map(I => {
              const B = x ? this.findMostRelevantLeaf(x, I.range) : undefined;
              return {
                result: I,
                outlineModel: x,
                relevantLeaf: B
              };
            });
          });
          return f.map(({
            result: w,
            outlineModel: C,
            relevantLeaf: x
          }, I) => {
            const B = ppn.DESCRIPTION_TYPE === "resource";
            const R = C ? this.getBreadcrumbPath(C, x) : undefined;
            const N = R && I > 0 && Iu.isEqual(f[I - 1].result.resource, w.resource);
            return [...(!N && R?.length ? [{
              type: "section",
              customRenderedDom: Lnf(M => B8A(w.resource, M, this.instantiationService), 22)
            }] : []), {
              type: "item",
              resource: w.resource,
              label: w.title,
              description: B ? this.labelService.getUriLabel(Td(w.resource), {
                relative: true
              }) : w.description,
              iconClasses: yS(this.modelService, this.languageService, w.resource),
              range: ppn.USE_SYMBOL_RANGE ? w.symbolRange ?? w.range : w.range,
              customRenderedDom: R?.length ? Lnf(M => P8A(R ?? [], w.range, M, this.instantiationService), 22) : undefined,
              semSearchData: {
                outlineModel: C ? this.serializeOutlineModel(C) : undefined,
                relevantLeaf: this.serializeOutlineElement(x),
                outlineBreadcrumbs: R,
                isSameUriAsPrevious: N
              },
              accept: (M, O) => this.openAnything(w.resource, {
                keyMods: M,
                range: x?.symbol?.selectionRange ?? x?.symbol?.range ?? (ppn.USE_SYMBOL_RANGE ? w.symbolRange ?? w.range : w.range),
                preserveFocus: O.inBackground,
                forcePinned: O.inBackground
              })
            }];
          }).flat();
        } catch {
          return this.getShownSemanticPicks();
        } finally {
          this.semanticSearchBackgroundRequests = this.semanticSearchBackgroundRequests.filter(u => u.abortC !== s);
        }
      })()
    };
  }
  async getOutlineModel(e, t) {
    const i = await this.textModelService.createModelReference(e);
    const r = i.object.textEditorModel;
    try {
      const s = new Promise((l, u) => {
        setTimeout(() => u(new Error("Outline model loading timeout")), 850);
      });
      const o = J1e.create(this.languageFeaturesService.documentSymbolProvider, r, t);
      return await Promise.race([o, s]);
    } catch (s) {
      console.warn("Failed to load outline model:", s);
      return;
    } finally {
      i.dispose();
    }
  }
  findMostRelevantLeaf(e, t) {
    if (!t) {
      return;
    }
    const i = r => {
      if (r instanceof J1e || r instanceof GZ || r.children?.size > 0) {
        let s;
        let o = -1;
        r instanceof J1e;
        const a = r.children.values();
        for (const l of a) {
          if (l instanceof G9) {
            const u = i(l);
            if (u) {
              const d = this.getRelevanceScore(u.symbol.range, t);
              if (d > o) {
                o = d;
                s = u;
              }
            }
          }
        }
        return s;
      } else if (r instanceof G9) {
        return r;
      }
    };
    return i(e);
  }
  getRelevanceScore(e, t) {
    const i = (l, u) => {
      const d = Math.max(l.startLineNumber, u.startLineNumber);
      const m = Math.min(l.endLineNumber, u.endLineNumber);
      return Math.max(0, m - d + 1);
    };
    const r = e.endLineNumber - e.startLineNumber + 1;
    const s = t.endLineNumber - t.startLineNumber + 1;
    const o = i(e, t);
    const a = r + s - o;
    return o / a;
  }
  serializeOutlineModel(e) {
    return {
      children: Array.from(e.children.values()).filter(t => t instanceof G9).map(t => this.serializeOutlineElement(t))
    };
  }
  serializeOutlineElement(e) {
    if (e) {
      return {
        id: e.id,
        symbol: {
          name: e.symbol.name,
          detail: e.symbol.detail,
          kind: e.symbol.kind,
          range: e.symbol.range,
          selectionRange: e.symbol.selectionRange,
          tags: e.symbol.tags
        },
        children: Array.from(e.children.values()).map(t => this.serializeOutlineElement(t))
      };
    }
  }
  getBreadcrumbPath(e, t) {
    if (!t) {
      return;
    }
    const i = (a, l) => {
      if (!!a && !!("children" in a)) {
        for (const u of Array.from(a.children.values())) {
          if (u.id === l) {
            return a;
          }
          const d = i(u, l);
          if (d) {
            return d;
          }
        }
      }
    };
    const r = a => {
      const l = [12, 6];
      return a.symbol.name !== "<unknown>" && !l.includes(a.symbol.kind);
    };
    const o = ((a, l) => {
      const u = [];
      let d = l;
      while (d && d.symbol) {
        u.unshift(d);
        d = i(a, d.id);
      }
      return u;
    })(e, t);
    return o.filter(a => r(a) ? true : o.length <= 2).map(a => {
      let l = a.symbol.name;
      return {
        class: Dtf(a.symbol.kind),
        label: l
      };
    });
  }
  dispose() {
    for (const e of this.semanticSearchBackgroundRequests) {
      e.abortC.abort();
    }
    this.semanticSearchBackgroundRequests = [];
    super.dispose();
  }
  updatePickerItems(e, t = false) {
    if (this.pickState.picker) {
      let i = this.pickState.picker.items;
      const r = this.pickState.picker.activeItems;
      const s = i.indexOf(r[0]);
      if (t) {
        i = i.filter(l => !l.semSearchData && (l.type !== "separator" || l.label !== TAa) && l !== p8.NO_RESULTS_PICK);
        const a = i.findIndex(l => l.type === "separator" && l.label === elu);
        if (a !== -1) {
          i.splice(a, 0, ...e);
        } else {
          i.push(...e);
        }
      } else {
        i = [...i, ...e];
      }
      const o = i.findIndex(a => a.type !== "separator" && a.semSearchData !== undefined);
      if (i.length > 1 || i.length === 1 && i[0] !== p8.NO_RESULTS_PICK) {
        i = i.filter(a => a !== p8.NO_RESULTS_PICK);
      }
      this.pickState.picker.items = i;
      if (s <= o) {
        if (s !== -1 && s < i.length) {
          const a = i[s];
          if (a.type === "section") {
            const l = i[s + 1];
            if (l) {
              this.pickState.picker.activeItems = [l];
            }
          } else {
            this.pickState.picker.activeItems = [a];
          }
        } else if (i.length > 0) {
          this.pickState.picker.activeItems = [i[0]];
        }
      }
    }
  }
  isValidFilePath(e) {
    if (!e || e.trim().length === 0 || (e = e.trim(), /[\\/]$/.test(e))) {
      return false;
    } else {
      return !!(Sc ? iE : Rm).isAbsolute(e) || !!e.includes("/") || !!e.includes("\\") || !!/\.[a-zA-Z0-9]+$/.test(e);
    }
  }
  createFilePicksForPath(e) {
    if (!this.isValidFilePath(e)) {
      return [p8.NO_RESULTS_PICK];
    }
    const t = [];
    t.push(p8.NO_RESULTS_PICK);
    const i = k6(e.trim());
    t.push({
      id: p8.CREATE_FILE_PICK_ID,
      label: _(10533, null, i),
      description: _(10534, null),
      iconClass: Qt.asClassName(Be.newFile),
      accept: async (r, s) => {
        await this.createNewFile(i, r);
      }
    });
    return t;
  }
  async createNewFile(e, t) {
    try {
      let i;
      if ((Sc ? iE : Rm).isAbsolute(e)) {
        i = je.file(e);
      } else {
        const o = this.contextService.getWorkspace().folders;
        if (o.length > 0) {
          i = je.joinPath(o[0].uri, e);
        } else {
          throw new Error("No workspace found");
        }
      }
      const s = Td(i);
      try {
        await this.fileService.stat(s);
      } catch {
        await this.fileService.createFolder(s);
      }
      try {
        await this.fileService.stat(i);
        await this.openAnything(i, {
          keyMods: t,
          forceOpenSideBySide: t?.alt || t?.ctrlCmd
        });
      } catch {
        await this.fileService.writeFile(i, Ms.fromString(""));
        await this.openAnything(i, {
          keyMods: t,
          forceOpenSideBySide: t?.alt || t?.ctrlCmd
        });
      }
    } catch (i) {
      await this.quickInputService.pick([], {
        placeHolder: _(10535, null, i.message)
      });
    }
  }
};
sqe = p8 = __decorate([__param(0, ln), __param(1, bQ), __param(2, Lr), __param(3, xM), __param(4, kp), __param(5, Cc), __param(6, Gr), __param(7, Ol), __param(8, Il), __param(9, Jl), __param(10, cB), __param(11, Fn), __param(12, yi), __param(13, ek), __param(14, IC), __param(15, El), __param(16, xl), __param(17, ha), __param(18, mo), __param(19, lAa), __param(20, Rr), __param(21, _ie), __param(22, Lr), __param(23, Nye), __param(24, s5), __param(25, $u), __param(26, dce), __param(27, Oa)], sqe);
