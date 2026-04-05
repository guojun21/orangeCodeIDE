"use strict";

// Module: out-build/vs/workbench/services/inlineDiffsV2/browser/patchGraphSourceAdapterV3.js
// Offset: 33893085 (bundle byte offset)
// Size: 32537 bytes
yn();
vr();
rt();
oa();
zr();
Yr();
_M();
mJg();
Fvi();
_$f();
Bc();
Js();
Pa();
dmn();
ph();
Cde();
dvn = class {
  constructor(n) {
    this._cacheVersion = -1;
    this._cacheSeedCount = -1;
    this.uri = n.uri;
    this.diffId = n.diffId;
    this.composerId = n.composerId;
    this.seedPatches = n.seedPatches;
    this.keptPatch = undefined;
  }
};
C$f = class QSn extends at {
  static {
    this.UNKNOWN_COMPOSER = "__unknown__";
  }
  static {
    this.DEBUG_LOG_ID = "patch-graph";
  }
  static {
    this.TOMBSTONE_TTL_MS = 5000;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C) {
    super();
    this.patchGraphAdapterService = e;
    this.patchGraphService = t;
    this.textModelService = i;
    this.logService = r;
    this.undoRedoService = s;
    this.telemetryService = o;
    this.analyticsService = a;
    this.textFileService = l;
    this.fileService = u;
    this.nonAgentChangeTracker = d;
    this.diffDecorationVisibilityService = m;
    this.clientDebugLogService = p;
    this.experimentService = g;
    this.notebookService = f;
    this.composerEventService = A;
    this.cursorAuthenticationService = w;
    this.cmdKStateService = C;
    this.sourceId = "patchGraphSourceAdapter3";
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._queue = this._register(new YFt());
    this._sessionByComposerUri = new Map();
    this._sessionById = new Map();
    this._modelRefByUri = this._register(new mp());
    this._modelContentListenerByUri = this._register(new mp());
    this._decorationIdsByUri = new Map();
    this._tombstoneByComposerUri = new Map();
    this._isSelfEditing = false;
    this._orphanedTeardownSchedulers = this._register(new mp());
    this._sentryEnabled = false;
    this._sentryEnabled = this.experimentService.checkFeatureGate("patch_graph_sentry_reporting");
    this._register(this.experimentService.onDidChangeGates(x => {
      if (!x.changedGates || x.changedGates.has("patch_graph_sentry_reporting")) {
        this._sentryEnabled = this.experimentService.checkFeatureGate("patch_graph_sentry_reporting");
      }
    }));
    this._register(this.patchGraphAdapterService.onDidApplyAgentEdit(x => {
      this._handleAppliedAgentEdit(x);
    }));
    this._register(this.diffDecorationVisibilityService.onDidChangeGlobal(() => {
      this._refreshAllDecorations();
      this._onDidChange.fire();
    }));
    this._register(this.composerEventService.onToRemoveDiffs(({
      uri: x
    }) => {
      const I = Iu.getComparisonKey(x);
      const B = this._getSessionsForUri(I);
      for (const R of B) {
        this._teardownSession(this._findComposerUriKeyForSession(R), R.diffId);
      }
    }));
    this._register(this.textFileService.files.onDidChangeOrphaned(x => {
      const I = x.resource;
      if (I.scheme === _n.vscodeNotebookCell) {
        return;
      }
      const B = Iu.getComparisonKey(I);
      if (!x.hasState(4)) {
        this._orphanedTeardownSchedulers.deleteAndDispose(B);
        return;
      }
      if (this._getSessionsForUri(B).length === 0) {
        return;
      }
      const N = new Hu(() => {
        if (this._store.isDisposed) {
          return;
        }
        this._orphanedTeardownSchedulers.deleteAndDispose(B);
        const M = this.textFileService.files.get(I);
        if (M && !M.hasState(4)) {
          return;
        }
        const O = this._getSessionsForUri(B);
        for (const $ of O) {
          this._teardownSession(this._findComposerUriKeyForSession($), $.diffId);
        }
      }, 250);
      this._orphanedTeardownSchedulers.deleteAndDispose(B);
      this._orphanedTeardownSchedulers.set(B, N);
      N.schedule();
    }));
    this._register(this.textFileService.files.onDidResolve(({
      model: x
    }) => {
      if (this._isSelfEditing) {
        return;
      }
      const I = x.resource;
      if (I.scheme === _n.vscodeNotebookCell) {
        return;
      }
      const B = Iu.getComparisonKey(I);
      if (this._getSessionsForUri(B).length === 0) {
        return;
      }
      const N = this._modelRefByUri.get(B);
      if (!N || N.object.textEditorModel.isDisposed()) {
        return;
      }
      const M = N.object.textEditorModel.getValue();
      this.nonAgentChangeTracker.recordExternalChanges(I, M);
      this._recomputeDescriptorFromModel(I, N);
    }));
  }
  _makeComposerUriKey(e, t) {
    return `${e ?? QSn.UNKNOWN_COMPOSER}::${t}`;
  }
  _parseComposerUriKey(e) {
    const t = e.indexOf("::");
    return {
      composerId: e.slice(0, t),
      uriKey: e.slice(t + 2)
    };
  }
  _getSessionsForUri(e) {
    const t = [];
    for (const [i, r] of this._sessionByComposerUri) {
      if (i.endsWith(`::${e}`)) {
        t.push(r);
      }
    }
    return t;
  }
  _findComposerUriKeyForSession(e) {
    for (const [t, i] of this._sessionByComposerUri) {
      if (i === e) {
        return t;
      }
    }
    return this._makeComposerUriKey(e.composerId, Iu.getComparisonKey(e.uri));
  }
  getDescriptors() {
    return [...this._sessionById.values()].map(e => this._getDescriptorForSession(e)).filter(e => e !== undefined && e.changes.length > 0).map(e => this._applyVisibilityFlags(e));
  }
  getDescriptorsForUri(e) {
    const t = Iu.getComparisonKey(e);
    return this._getSessionsForUri(t).map(i => this._getDescriptorForSession(i)).filter(i => i !== undefined && i.changes.length > 0).map(i => this._applyVisibilityFlags(i));
  }
  getDescriptorById(e) {
    const t = this._sessionById.get(e);
    if (!t) {
      return;
    }
    const i = this._getDescriptorForSession(t);
    if (!!i && i.changes.length !== 0) {
      return this._applyVisibilityFlags(i);
    }
  }
  canHandle(e) {
    return this._sessionById.has(e);
  }
  getRecentDiffDescriptors(e) {
    const t = [];
    for (const [, i] of this._sessionByComposerUri) {
      if (i.composerId === e) {
        const r = this._getDescriptorForSession(i);
        if (r) {
          t.push(this._applyVisibilityFlags(r));
        }
      }
    }
    return t;
  }
  getBaselineTextLines(e) {
    const t = this._sessionById.get(e);
    if (!t) {
      return;
    }
    const i = this._modelRefByUri.get(Iu.getComparisonKey(t.uri));
    if (!i) {
      return;
    }
    const r = i.object.textEditorModel.getValue();
    const s = this._computeOriginal(t.uri, t.seedPatches, r);
    if (s === undefined) {
      return;
    }
    const o = this._computeBaseline(s, t.keptPatch);
    if (o.length !== 0) {
      return Zv(o);
    }
  }
  _getDescriptorForSession(e) {
    const t = this._modelRefByUri.get(Iu.getComparisonKey(e.uri));
    if (!t) {
      return;
    }
    const i = t.object.textEditorModel;
    const r = i.getVersionId();
    if (e._cacheVersion === r && e._cacheKeptPatchRef === e.keptPatch && e._cacheSeedCount === e.seedPatches.length) {
      return e._cachedDescriptor;
    }
    const s = i.getValue();
    const o = this._computeDescriptor(e.uri, e.diffId, e.seedPatches, e.keptPatch, s, e.composerId);
    e._cachedDescriptor = o;
    e._cacheVersion = r;
    e._cacheKeptPatchRef = e.keptPatch;
    e._cacheSeedCount = e.seedPatches.length;
    return o;
  }
  cancel(e) {}
  async accept(e, t) {
    const i = this._sessionById.get(e);
    if (!i) {
      return;
    }
    const r = this._modelRefByUri.get(Iu.getComparisonKey(i.uri));
    if (!r) {
      return;
    }
    const s = r.object.textEditorModel.getValue();
    const o = this._computeOriginal(i.uri, i.seedPatches, s);
    if (o === undefined) {
      return;
    }
    if (o === s) {
      this._closePromptBarForDiff(i.diffId);
      this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId);
      return;
    }
    const a = i.keptPatch;
    const l = this._getDescriptorForSession(i);
    const u = this.patchGraphService.diff(o, s, {
      fileUri: i.uri,
      timestamp: Date.now(),
      patchSource: "human"
    });
    i.keptPatch = u.hunks.length > 0 ? u : undefined;
    const d = this._getCellIdFromPatches(i.seedPatches);
    const m = {
      uri: i.uri,
      diffId: i.diffId,
      composerId: i.composerId,
      seedPatches: i.seedPatches,
      cellId: d
    };
    this.undoRedoService.pushElement(new pce("Accept All", "accept-all", this._getUndoResourceUri(i.uri), async () => {
      const g = await this._getOrCreateModelRef(m.uri, m.cellId);
      const f = g.object.textEditorModel.getValue();
      const A = this._sessionById.get(m.diffId);
      const w = this._mergeSeeds(A?.seedPatches, m.seedPatches);
      const C = this._computeDescriptor(m.uri, m.diffId, w, a, f, m.composerId);
      if (!C || C.changes.length === 0) {
        this.logService.warn("[patch-graph-v3] undo Accept All: descriptor empty after restore");
        return;
      }
      const x = A ?? new dvn({
        uri: m.uri,
        diffId: m.diffId,
        composerId: m.composerId,
        seedPatches: w
      });
      x.seedPatches = w;
      x.keptPatch = a;
      this._commitSessionRestore(m.composerId, m.uri, x, g);
    }, async () => {
      const g = this._sessionById.get(m.diffId);
      if (g) {
        g.keptPatch = u.hunks.length > 0 ? u : undefined;
        this._teardownSession(this._findComposerUriKeyForSession(g), m.diffId);
      }
    }));
    this._clientDebugLog("accept", {
      diffId: i.diffId,
      composerId: i.composerId,
      seedCount: i.seedPatches.length
    });
    const p = t?.sourceContext ?? "editor";
    this._trackTelemetry(NFo, i.seedPatches);
    this._trackAcceptRejectDiffDetails("accept", i.seedPatches, p);
    this._emitPatchGraphDiffRemainingActionEvents("accept", i, l, p);
    this._closePromptBarForDiff(i.diffId);
    this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId);
  }
  async reject(e, t, i) {
    const r = this._sessionById.get(e);
    if (!r) {
      return;
    }
    const s = this._getCellIdFromPatches(r.seedPatches);
    const a = r.seedPatches.some(B => B.attribs.isNewlyCreatedCell === true) ? this._tryCaptureNotebookCellDeletionInfo(r.uri, s) : undefined;
    const u = this._modelRefByUri.get(Iu.getComparisonKey(r.uri))?.object.textEditorModel;
    if (!u) {
      return;
    }
    const d = u.getValue();
    const m = this._computeOriginal(r.uri, r.seedPatches, d);
    if (m === undefined) {
      return;
    }
    const p = this._getDescriptorForSession(r);
    const g = p ? this._precomputeGenerationUUIDsForDescriptor(r, p) : undefined;
    const f = this._computeBaseline(m, r.keptPatch);
    const A = this.patchGraphService.diff(d, f, {
      fileUri: r.uri,
      timestamp: Date.now(),
      patchSource: "human"
    });
    const w = this.patchGraphService.splitPatch(A);
    for (const B of w) {
      this.patchGraphService.registerPatch(B);
    }
    this.nonAgentChangeTracker.updateLastKnownBaseline(r.uri, f);
    this._isSelfEditing = true;
    try {
      u.applyEdits([{
        range: u.getFullModelRange(),
        text: f
      }], false);
    } finally {
      this._isSelfEditing = false;
    }
    const C = f.length === 0 && r.uri.scheme !== _n.vscodeNotebookCell && r.seedPatches.some(B => B.status === "added");
    if (C) {
      try {
        await this.fileService.del(r.uri);
      } catch {
        this.logService.error(`[patch-graph-v3] reject: failed to delete agent-created file ${r.uri.fsPath}`);
      }
    } else {
      await this._saveResource(r.uri, {
        skipSaveParticipants: true,
        ignoreModifiedSince: true
      });
    }
    const x = r.keptPatch;
    const I = {
      uri: r.uri,
      diffId: r.diffId,
      composerId: r.composerId,
      seedPatches: r.seedPatches,
      rejectPatch: A,
      keptPatch: x,
      cellId: s,
      isNewlyCreatedFile: C
    };
    this.undoRedoService.pushElement(new pce("Reject All", "reject-all", this._getUndoResourceUri(r.uri), async () => {
      const B = await this._getOrCreateModelRef(I.uri, I.cellId);
      const R = B.object.textEditorModel;
      const N = R.getValue();
      const M = this.patchGraphService.inverse(I.rejectPatch);
      let O;
      const $ = this.patchGraphService.apply(M, X => {
        O = X;
      }, N);
      if (O) {
        this._clientDebugLog("undoRejectAllFailed", {
          composerId: I.composerId,
          diffId: I.diffId,
          uri: I.uri.fsPath,
          error: O.message
        });
        this._uploadClientDebugLogs();
        this.logService.error("[patch-graph-v3] undo Reject All: inverse patch failed", O);
        return;
      }
      const H = this.patchGraphService.splitPatch(M);
      for (const X of H) {
        this.patchGraphService.registerPatch(X);
      }
      this.nonAgentChangeTracker.updateLastKnownBaseline(I.uri, $);
      this._isSelfEditing = true;
      try {
        R.applyEdits([{
          range: R.getFullModelRange(),
          text: $
        }], false);
      } finally {
        this._isSelfEditing = false;
      }
      await this._saveResource(I.uri, {
        skipSaveParticipants: true,
        ignoreModifiedSince: true
      });
      const W = this._sessionById.get(I.diffId);
      const z = this._mergeSeeds(W?.seedPatches, I.seedPatches);
      const Y = this._computeDescriptor(I.uri, I.diffId, z, I.keptPatch, $, I.composerId);
      if (!Y || Y.changes.length === 0) {
        this.logService.warn("[patch-graph-v3] undo Reject All: descriptor empty after restore");
        return;
      }
      const j = W ?? new dvn({
        uri: I.uri,
        diffId: I.diffId,
        composerId: I.composerId,
        seedPatches: z
      });
      j.seedPatches = z;
      j.keptPatch = I.keptPatch;
      this._commitSessionRestore(I.composerId, I.uri, j, B);
    }, async () => {
      const B = this._sessionById.get(I.diffId);
      if (!B) {
        return;
      }
      const N = (await this._getOrCreateModelRef(I.uri, I.cellId)).object.textEditorModel;
      const M = N.getValue();
      const O = this.patchGraphService.clonePatch(I.rejectPatch);
      let $;
      const H = this.patchGraphService.apply(O, z => {
        $ = z;
      }, M);
      if ($) {
        this._clientDebugLog("redoRejectAllFailed", {
          composerId: I.composerId,
          diffId: I.diffId,
          uri: I.uri.fsPath,
          error: $.message
        });
        this._uploadClientDebugLogs();
        this.logService.error("[patch-graph-v3] redo Reject All: apply patch failed", $);
        return;
      }
      const W = this.patchGraphService.splitPatch(O);
      for (const z of W) {
        this.patchGraphService.registerPatch(z);
      }
      this.nonAgentChangeTracker.updateLastKnownBaseline(I.uri, H);
      this._isSelfEditing = true;
      try {
        N.applyEdits([{
          range: N.getFullModelRange(),
          text: H
        }], false);
      } finally {
        this._isSelfEditing = false;
      }
      if (I.isNewlyCreatedFile) {
        try {
          await this.fileService.del(I.uri);
        } catch {
          this.logService.error(`[patch-graph-v3] redo Reject All: failed to delete file ${I.uri.fsPath}`);
        }
      } else {
        await this._saveResource(I.uri, {
          skipSaveParticipants: true,
          ignoreModifiedSince: true
        });
      }
      this._teardownSession(this._findComposerUriKeyForSession(B), I.diffId);
    }));
    this._clientDebugLog("reject", {
      diffId: r.diffId,
      composerId: r.composerId,
      seedCount: r.seedPatches.length
    });
    if (!t?.rejectSilently) {
      const B = t?.sourceContext ?? "editor";
      this._trackTelemetry(MFo, r.seedPatches);
      this._trackAcceptRejectDiffDetails("reject", r.seedPatches, B);
      this._emitPatchGraphDiffRemainingActionEvents("reject", r, p, B, g);
    }
    this._teardownSession(this._findComposerUriKeyForSession(r), r.diffId);
    if (a) {
      const B = this.notebookService.getNotebookTextModel(a.notebookUri);
      if (B) {
        B.applyEdits([{
          editType: 1,
          index: a.cellIndex,
          count: 1,
          cells: []
        }], true, undefined, () => {}, undefined, false);
        this.undoRedoService.pushElement(new pce("Undo Delete Notebook Cell", "undo-delete-notebook-cell", a.notebookUri, async () => {
          this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
            editType: 1,
            index: a.cellIndex,
            count: 0,
            cells: [a.cellData]
          }], true, undefined, () => {}, undefined, false);
        }, async () => {
          this.notebookService.getNotebookTextModel(a.notebookUri)?.applyEdits([{
            editType: 1,
            index: a.cellIndex,
            count: 1,
            cells: []
          }], true, undefined, () => {}, undefined, false);
        }));
      }
    }
  }
  acceptChange(e, t) {
    const i = this._sessionById.get(e);
    if (!i) {
      return true;
    }
    const r = this._modelRefByUri.get(Iu.getComparisonKey(i.uri));
    if (!r) {
      return true;
    }
    const s = r.object.textEditorModel.getValue();
    const o = this._computeOriginal(i.uri, i.seedPatches, s);
    if (o === undefined) {
      return true;
    }
    const a = this._computeBaseline(o, i.keptPatch);
    const l = a.length === 0 ? [] : Zv(a);
    const u = s.length === 0 ? [] : Zv(s);
    const d = t.removedLinesOriginalRange.startLineNumber - 1;
    const m = t.removedLinesOriginalRange.endLineNumberExclusive - 1;
    const p = t.addedRange.startLineNumber - 1;
    const g = t.addedRange.endLineNumberExclusive - 1;
    const A = [...l.slice(0, d), ...u.slice(p, g), ...l.slice(m)].join(`
`);
    const w = i.keptPatch;
    const C = this.patchGraphService.diff(o, A, {
      fileUri: i.uri,
      timestamp: Date.now(),
      patchSource: "human"
    });
    i.keptPatch = C.hunks.length > 0 ? C : undefined;
    const x = this._getCellIdFromPatches(i.seedPatches);
    const I = {
      uri: i.uri,
      diffId: i.diffId,
      composerId: i.composerId,
      seedPatches: i.seedPatches,
      cellId: x
    };
    this.undoRedoService.pushElement(new pce("Keep Change", "accept-change", this._getUndoResourceUri(i.uri), async () => {
      const R = await this._getOrCreateModelRef(I.uri, I.cellId);
      const N = R.object.textEditorModel.getValue();
      const M = this._sessionById.get(I.diffId);
      const O = this._mergeSeeds(M?.seedPatches, I.seedPatches);
      const $ = this._computeDescriptor(I.uri, I.diffId, O, w, N, I.composerId);
      if (!$ || $.changes.length === 0) {
        this.logService.warn("[patch-graph-v3] undo Keep: descriptor empty after restore");
        return;
      }
      const H = M ?? new dvn({
        uri: I.uri,
        diffId: I.diffId,
        composerId: I.composerId,
        seedPatches: O
      });
      H.seedPatches = O;
      H.keptPatch = w;
      this._commitSessionRestore(I.composerId, I.uri, H, R);
    }, async () => {
      const R = this._sessionById.get(I.diffId);
      if (!R) {
        return;
      }
      R.keptPatch = C.hunks.length > 0 ? C : undefined;
      const N = this._getDescriptorForSession(R);
      if (!N || N.changes.length === 0) {
        this._teardownSession(this._findComposerUriKeyForSession(R), I.diffId);
      } else {
        this._refreshSessionDecorations(R);
        this._onDidChange.fire();
      }
    }));
    this._clientDebugLog("acceptChange", {
      diffId: i.diffId,
      composerId: i.composerId,
      bStart: d,
      bEnd: m,
      cStart: p,
      cEnd: g
    });
    this._trackTelemetry(NFo, i.seedPatches);
    this._trackAcceptRejectDiffDetails("accept", i.seedPatches, "editor");
    this._emitPatchGraphDiffPartialActionEvent("accept", i, t, "editor");
    const B = this._getDescriptorForSession(i);
    if (!B || B.changes.length === 0) {
      this._closePromptBarForDiff(i.diffId);
      this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId);
    } else {
      this._refreshSessionDecorations(i);
    }
    this._onDidChange.fire();
    return !B || B.changes.length === 0;
  }
  rejectChange(e, t) {
    const i = this._sessionById.get(e);
    if (!i) {
      return false;
    }
    const s = this._modelRefByUri.get(Iu.getComparisonKey(i.uri))?.object.textEditorModel;
    if (!s) {
      return false;
    }
    const o = s.getValue();
    const a = this._getDescriptorForSession(i);
    if (!a) {
      return false;
    }
    const l = this._inferGenerationUUIDForChange(i, t);
    const u = a.currentRange.startLineNumber;
    const d = u + t.addedRange.startLineNumber - 1;
    const m = u + t.addedRange.endLineNumberExclusive - 1;
    const p = o.length === 0 ? [] : Zv(o);
    const g = p.slice(0, d - 1);
    const f = p.slice(m - 1);
    const w = [...g, ...t.removedTextLines, ...f].join(s.getEOL());
    const C = this.patchGraphService.diff(o, w, {
      fileUri: i.uri,
      timestamp: Date.now(),
      patchSource: "human"
    });
    const x = this.patchGraphService.splitPatch(C);
    for (const M of x) {
      this.patchGraphService.registerPatch(M);
    }
    this.nonAgentChangeTracker.updateLastKnownBaseline(i.uri, w);
    this._isSelfEditing = true;
    try {
      s.applyEdits([{
        range: s.getFullModelRange(),
        text: w
      }], false);
    } finally {
      this._isSelfEditing = false;
    }
    this._saveResource(i.uri, {
      skipSaveParticipants: true,
      ignoreModifiedSince: true
    });
    const I = i.keptPatch;
    const B = this._getCellIdFromPatches(i.seedPatches);
    const R = {
      uri: i.uri,
      diffId: i.diffId,
      composerId: i.composerId,
      seedPatches: i.seedPatches,
      rejectPatch: C,
      keptPatch: I,
      cellId: B
    };
    this.undoRedoService.pushElement(new pce("Undo Change", "reject-change", this._getUndoResourceUri(i.uri), async () => {
      const M = await this._getOrCreateModelRef(R.uri, R.cellId);
      const O = M.object.textEditorModel;
      const $ = O.getValue();
      const H = this.patchGraphService.inverse(R.rejectPatch);
      let W;
      const z = this.patchGraphService.apply(H, ne => {
        W = ne;
      }, $);
      if (W) {
        this._clientDebugLog("undoRejectChangeFailed", {
          composerId: R.composerId,
          diffId: R.diffId,
          uri: R.uri.fsPath,
          error: W.message
        });
        this._uploadClientDebugLogs();
        this.logService.error("[patch-graph-v3] undo rejectChange: inverse patch failed", W);
        return;
      }
      const Y = this.patchGraphService.splitPatch(H);
      for (const ne of Y) {
        this.patchGraphService.registerPatch(ne);
      }
      this.nonAgentChangeTracker.updateLastKnownBaseline(R.uri, z);
      this._isSelfEditing = true;
      try {
        O.applyEdits([{
          range: O.getFullModelRange(),
          text: z
        }], false);
      } finally {
        this._isSelfEditing = false;
      }
      await this._saveResource(R.uri, {
        skipSaveParticipants: true,
        ignoreModifiedSince: true
      });
      const j = this._sessionById.get(R.diffId);
      const X = this._mergeSeeds(j?.seedPatches, R.seedPatches);
      const ee = this._computeDescriptor(R.uri, R.diffId, X, R.keptPatch, z, R.composerId);
      if (!ee || ee.changes.length === 0) {
        this.logService.warn("[patch-graph-v3] undo rejectChange: descriptor empty after restore");
        return;
      }
      const re = j ?? new dvn({
        uri: R.uri,
        diffId: R.diffId,
        composerId: R.composerId,
        seedPatches: X
      });
      re.seedPatches = X;
      re.keptPatch = R.keptPatch;
      this._commitSessionRestore(R.composerId, R.uri, re, M);
    }, async () => {
      const M = this._sessionById.get(R.diffId);
      if (!M) {
        return;
      }
      const $ = (await this._getOrCreateModelRef(R.uri, R.cellId)).object.textEditorModel;
      const H = $.getValue();
      const W = this.patchGraphService.clonePatch(R.rejectPatch);
      let z;
      const Y = this.patchGraphService.apply(W, ee => {
        z = ee;
      }, H);
      if (z) {
        this._clientDebugLog("redoRejectChangeFailed", {
          composerId: R.composerId,
          diffId: R.diffId,
          uri: R.uri.fsPath,
          error: z.message
        });
        this._uploadClientDebugLogs();
        this.logService.error("[patch-graph-v3] redo rejectChange: apply patch failed", z);
        return;
      }
      const j = this.patchGraphService.splitPatch(W);
      for (const ee of j) {
        this.patchGraphService.registerPatch(ee);
      }
      this.nonAgentChangeTracker.updateLastKnownBaseline(R.uri, Y);
      this._isSelfEditing = true;
      try {
        $.applyEdits([{
          range: $.getFullModelRange(),
          text: Y
        }], false);
      } finally {
        this._isSelfEditing = false;
      }
      await this._saveResource(R.uri, {
        skipSaveParticipants: true,
        ignoreModifiedSince: true
      });
      const X = this._getDescriptorForSession(M);
      if (!X || X.changes.length === 0) {
        this._teardownSession(this._findComposerUriKeyForSession(M), R.diffId);
      } else {
        this._refreshSessionDecorations(M);
        this._onDidChange.fire();
      }
    }));
    this._clientDebugLog("rejectChange", {
      diffId: i.diffId,
      composerId: i.composerId,
      absStart: d,
      absEndExclusive: m
    });
    this._trackTelemetry(MFo, i.seedPatches);
    this._trackAcceptRejectDiffDetails("reject", i.seedPatches, "editor");
    this._emitPatchGraphDiffPartialActionEvent("reject", i, t, "editor", l);
    const N = this._getDescriptorForSession(i);
    if (!N || N.changes.length === 0) {
      this._teardownSession(this._findComposerUriKeyForSession(i), i.diffId);
    } else {
      this._refreshSessionDecorations(i);
    }
    this._onDidChange.fire();
    return !N || N.changes.length === 0;
  }
  async _handleAppliedAgentEdit(e) {
    if (e.length === 0) {
      return;
    }
    const t = e[0].attribs.fileUri;
    const i = Iu.getComparisonKey(t);
    const r = e[0].attribs.composerMetadata?.composerId;
    const s = e[0].attribs.composerMetadata?.rootComposerId ?? r;
    const o = this._makeComposerUriKey(s, i);
    this._clientDebugLog("agentEdit", {
      composerId: r,
      sessionComposerId: s,
      uri: t.fsPath,
      patchCount: e.length,
      patchIds: e.map(a => a.id)
    });
    await this._queue.queueFor(t, async () => {
      const a = this._sessionByComposerUri.get(o);
      let l;
      if (!a && (l = this._tombstoneByComposerUri.get(o), l)) {
        this._tombstoneByComposerUri.delete(o);
        const x = Date.now() - l.timestamp;
        if (x > QSn.TOMBSTONE_TTL_MS) {
          this._clientDebugLog("tombstoneExpired", {
            composerId: r,
            uri: t.fsPath,
            ageMs: x,
            seedCount: l.seedPatches.length
          });
          l = undefined;
        }
      }
      const u = a?.seedPatches ?? l?.seedPatches;
      const d = a?.diffId ?? l?.diffId ?? Wr();
      const m = u ? [...u, ...e.filter(x => !u.some(I => I.id === x.id))] : [...e];
      const p = this._getCellIdFromPatches(m);
      const g = await this._getOrCreateModelRef(t, p);
      const f = g.object.textEditorModel.getValue();
      const A = a?.keptPatch ?? l?.keptPatch;
      const w = this._computeDescriptor(t, d, m, A, f, s);
      if (!w || w.changes.length === 0) {
        return;
      }
      const C = a ?? new dvn({
        uri: t,
        diffId: d,
        composerId: s,
        seedPatches: m
      });
      if (a) {
        C.seedPatches = m;
      } else if (l) {
        C.seedPatches = m;
        C.keptPatch = A;
        this._clientDebugLog("tombstoneConsumed", {
          composerId: r,
          diffId: d,
          uri: t.fsPath,
          tombstoneSeedCount: l.seedPatches.length,
          mergedSeedCount: m.length,
          hadKeptPatch: !!l.keptPatch,
          ageMs: Date.now() - l.timestamp
        });
      }
      this._tombstoneByComposerUri.delete(o);
      this._sessionByComposerUri.set(o, C);
      this._sessionById.set(d, C);
      this._refreshDecorationsForUri(i, g);
      this._onDidChange.fire();
      this._emitPatchGraphDiffDisplayedEvents(e, r, t);
      this._clientDebugLog(a ? "sessionUpdate" : "sessionStart", {
        composerId: r,
        sessionComposerId: s,
        diffId: d,
        uri: t.fsPath,
        seedCount: m.length,
        changesCount: w.changes.length
      });
    });
  }
  _computeOriginal(e, t, i) {
    const r = this.patchGraphService.queryDescendantClosure(t, [{
      fileUri: e
    }]);
    let s;
    const o = this.patchGraphService.revertPatches(r, a => {
      s = a;
    }, i);
    if (s) {
      this.nonAgentChangeTracker.recordExternalChanges(e, i);
      const a = this.patchGraphService.queryDescendantClosure(t, [{
        fileUri: e
      }]);
      let l;
      const u = this.patchGraphService.revertPatches(a, d => {
        l = d;
      }, i);
      if (l) {
        const d = t[0]?.attribs.composerMetadata?.composerId;
        this._clientDebugLog("computeOriginalFailed", {
          composerId: d,
          uri: e.fsPath,
          firstError: s.message,
          retryError: l.message,
          closureSize: r.length,
          retryClosureSize: a.length,
          seedCount: t.length,
          currentTextLength: i.length,
          closurePatches: r.map(m => this._debugSerializePatch(m)),
          retryClosurePatches: a.map(m => this._debugSerializePatch(m))
        });
        this._uploadClientDebugLogs();
        this.logService.warn(`[patch-graph-v3] failed to compute O for uri=${e.fsPath}`);
        return;
      }
      return u;
    }
    return o;
  }
  _computeBaseline(e, t) {
    if (!t || t.hunks.length === 0) {
      return e;
    }
    let i;
    const r = this.patchGraphService.apply(t, s => {
      i = s;
    }, e);
    if (i) {
      this._clientDebugLog("keptPatchFailed", {
        error: i.message,
        keptPatchHunks: t.hunks.length,
        originalTextLength: e.length
      });
      this._uploadClientDebugLogs();
      this.logService.warn("[patch-graph-v3] failed to apply keptPatch, falling back to O");
      return e;
    } else {
      return r;
    }
  }
  _computeDescriptor(e, t, i, r, s, o) {
    const a = this._computeOriginal(e, i, s);
    if (a === undefined) {
      return;
    }
    const l = this._computeBaseline(a, r);
    const u = l.length === 0 ? [] : Zv(l);
    const d = s.length === 0 ? [] : Zv(s);
    const m = hmn(u, d, true);
    return {
      id: t,
      sourceId: this.sourceId,
      uri: e,
      currentRange: {
        startLineNumber: 1,
        endLineNumberExclusive: d.length + 1
      },
      changes: m.changes,
      metadata: {
        source: gce,
        hideDecorations: false,
        hideDeletionViewZones: false,
        composerId: o
      }
    };
  }
  _teardownSession(e, t, i) {
    const r = this._sessionByComposerUri.get(e);
    if (i && r) {
      this._tombstoneByComposerUri.set(e, {
        seedPatches: r.seedPatches,
        keptPatch: r.keptPatch,
        diffId: r.diffId,
        timestamp: Date.now()
      });
      this._clientDebugLog("tombstoneCreated", {
        composerId: r.composerId,
        diffId: r.diffId,
        seedCount: r.seedPatches.length,
        hadKeptPatch: !!r.keptPatch
      });
    } else {
      this._tombstoneByComposerUri.delete(e);
    }
    const {
      composerId: s,
      uriKey: o
    } = this._parseComposerUriKey(e);
    this._clientDebugLog("sessionEnd", {
      composerId: s,
      diffId: t,
      fromRecompute: i
    });
    this._sessionByComposerUri.delete(e);
    this._sessionById.delete(t);
    if (this._getSessionsForUri(o).length === 0) {
      const l = this._modelRefByUri.get(o);
      const u = this._decorationIdsByUri.get(o);
      if (l && u) {
        l.object.textEditorModel.deltaDecorations(u, []);
      }
      this._decorationIdsByUri.delete(o);
      this._modelContentListenerByUri.deleteAndDispose(o);
      this._modelRefByUri.deleteAndDispose(o);
    } else {
      const l = this._modelRefByUri.get(o);
      if (l) {
        this._refreshDecorationsForUri(o, l);
      }
    }
    this._onDidChange.fire();
  }
  _mergeSeeds(e, t) {
    if (e) {
      return [...e, ...t.filter(i => !e.some(r => r.id === i.id))];
    } else {
      return t;
    }
  }
  _commitSessionRestore(e, t, i, r) {
    const s = Iu.getComparisonKey(t);
    const o = this._makeComposerUriKey(e, s);
    const a = this._sessionByComposerUri.get(o);
    if (a && a.diffId !== i.diffId) {
      this._sessionById.delete(a.diffId);
    }
    this._tombstoneByComposerUri.delete(o);
    this._sessionByComposerUri.set(o, i);
    this._sessionById.set(i.diffId, i);
    this._refreshDecorationsForUri(s, r);
    this._onDidChange.fire();
  }
  _recomputeDescriptorFromModel(e, t) {
    if (this._isSelfEditing) {
      return;
    }
    const i = Iu.getComparisonKey(e);
    const r = this._getSessionsForUri(i);
    if (r.length !== 0) {
      for (const s of r) {
        const o = this._getDescriptorForSession(s);
        if (!o || o.changes.length === 0) {
          this._teardownSession(this._findComposerUriKeyForSession(s), s.diffId, true);
        }
      }
      this._sweepExpiredTombstones();
      this._refreshDecorationsForUri(i, t);
      this._onDidChange.fire();
    }
  }
  _sweepExpiredTombstones() {
    if (this._tombstoneByComposerUri.size === 0) {
      return;
    }
    const e = Date.now();
    for (const [t, i] of this._tombstoneByComposerUri) {
      if (e - i.timestamp > QSn.TOMBSTONE_TTL_MS) {
        this._tombstoneByComposerUri.delete(t);
      }
    }
  }
  async _getOrCreateModelRef(e, t) {
    const i = Iu.getComparisonKey(e);
    const r = this._getModelReferenceUri(e, t);
    const s = this._modelRefByUri.get(i);
    if (s) {
      const l = s.object.textEditorModel;
      if (!l.isDisposed() && Iu.isEqual(l.uri, r)) {
        return s;
      }
      this._modelContentListenerByUri.deleteAndDispose(i);
      this._modelRefByUri.deleteAndDispose(i);
    }
    const o = await this.textModelService.createModelReference(r);
    this._modelRefByUri.set(i, o);
    const a = o.object.textEditorModel.onDidChangeContent(l => {
      if (this._shouldRecomputeDescriptorFromChangeEvent(l)) {
        this._recomputeDescriptorFromModel(e, o);
      }
    });
    this._modelContentListenerByUri.set(i, a);
    return o;
  }
  _refreshSessionDecorations(e) {
    const t = Iu.getComparisonKey(e.uri);
    const i = this._modelRefByUri.get(t);
    if (i) {
      this._refreshDecorationsForUri(t, i);
    }
  }
  _refreshDecorationsForUri(e, t) {
    const i = this._getSessionsForUri(e);
    const r = t.object.textEditorModel;
    if (r.isDisposed()) {
      return;
    }
    const s = this._decorationIdsByUri.get(e) ?? [];
    if (this.diffDecorationVisibilityService.shouldHideInlineDiffs() || i.length === 0) {
      r.deltaDecorations(s, []);
      this._decorationIdsByUri.delete(e);
      return;
    }
    const o = {
      getLineMaxColumn: d => r.getLineMaxColumn(d),
      getValueInRange: d => r.getValueInRange(d)
    };
    const l = i.map(d => this._getDescriptorForSession(d)).filter(d => !!d).flatMap(d => gJg(d, false, {
      isThemed: true
    }, o));
    const u = r.deltaDecorations(s, l);
    this._decorationIdsByUri.set(e, u);
  }
  _refreshAllDecorations() {
    const e = new Set();
    for (const [t] of this._sessionByComposerUri) {
      const {
        uriKey: i
      } = this._parseComposerUriKey(t);
      if (e.has(i)) {
        continue;
      }
      e.add(i);
      const r = this._modelRefByUri.get(i);
      if (r) {
        this._refreshDecorationsForUri(i, r);
      }
    }
  }
  _closePromptBarForDiff(e) {
    const t = this.cmdKStateService.getPromptBarByDiffId(e);
    if (t) {
      if (t.uri) {
        const i = Iu.getComparisonKey(t.uri);
        const r = this._modelRefByUri.get(i);
        if (r && t.currentRangeDecorationId) {
          r.object.textEditorModel.deltaDecorations([t.currentRangeDecorationId], []);
        }
      }
      this.cmdKStateService.removePromptBar(t.id);
    }
  }
  _trackTelemetry(e, t) {
    const i = new Set(t.map(r => r.attribs.composerMetadata?.composerGenerationID).filter(Ch));
    for (const r of i) {
      this.telemetryService.publicLogCapture(e, {
        generationUUID: r
      });
    }
  }
  _trackAcceptRejectDiffDetails(e, t, i) {
    const r = new Map();
    for (const s of t) {
      const o = s.attribs.composerMetadata?.composerGenerationID;
      const a = s.attribs.toolCallId;
      if (!o || !a) {
        continue;
      }
      const l = `${o}:${a}`;
      let u = r.get(l);
      if (!u) {
        u = {
          linesAdded: 0,
          linesRemoved: 0
        };
        r.set(l, u);
      }
      for (const d of s.hunks) {
        for (const m of d.lines) {
          if (m.type === "insert") {
            u.linesAdded += 1;
          } else if (m.type === "delete") {
            u.linesRemoved += 1;
          }
        }
      }
    }
    for (const [s, o] of r.entries()) {
      const [a, l] = s.split(":");
      this.analyticsService.trackEvent("composer.accept_reject_diff_details", {
        chatGenerationUUID: a,
        toolCallId: l,
        acceptOrReject: e,
        linesAdded: o.linesAdded,
        linesRemoved: o.linesRemoved,
        sourceContext: i
      });
    }
  }
  _computeLineStatsByGeneration(e) {
    const t = new Map();
    for (const i of e) {
      const r = i.attribs.composerMetadata?.composerGenerationID;
      const s = r ?? "__unknown_generation__";
      let o = t.get(s);
      if (!o) {
        o = {
          generationUUID: r,
          linesAdded: 0,
          linesRemoved: 0
        };
        t.set(s, o);
      }
      for (const a of i.hunks) {
        for (const l of a.lines) {
          if (l.type === "insert") {
            o.linesAdded += 1;
          } else if (l.type === "delete") {
            o.linesRemoved += 1;
          }
        }
      }
    }
    return Array.from(t.values()).filter(i => i.linesAdded > 0 || i.linesRemoved > 0);
  }
  _inferGenerationUUIDForSession(e) {
    const t = new Set(e.seedPatches.map(i => i.attribs.composerMetadata?.composerGenerationID).filter(Ch));
    if (t.size === 1) {
      return t.values().next().value;
    }
  }
  _extractPatchIdFromOwner(e) {
    if (e === mpe) {
      return;
    }
    const t = e.split(":");
    if (t.length < 3) {
      return e;
    } else {
      t.pop();
      t.pop();
      return t.join(":");
    }
  }
  _buildSeedGenerationMap(e) {
    const t = new Map();
    for (const i of e.seedPatches) {
      const r = i.attribs.composerMetadata?.composerGenerationID;
      if (r) {
        t.set(i.id, r);
      }
    }
    return t;
  }
  _inferGenerationUUIDForChange(e, t) {
    const i = this.patchGraphService.getProvenance(e.uri);
    if (!i) {
      return this._inferGenerationUUIDForSession(e);
    }
    const r = t.addedRange.startLineNumber;
    const s = t.addedRange.endLineNumberExclusive;
    const o = r >= s;
    const a = Math.max(r, s - 1);
    const l = i.getContributingOwnersInRange(r, a, o);
    if (l.size === 0) {
      return this._inferGenerationUUIDForSession(e);
    }
    const u = this._buildSeedGenerationMap(e);
    const d = new Map();
    for (const g of l) {
      const f = this._extractPatchIdFromOwner(g);
      if (!f) {
        continue;
      }
      const A = u.get(f);
      if (A) {
        d.set(A, (d.get(A) ?? 0) + 1);
      }
    }
    if (d.size === 0) {
      return this._inferGenerationUUIDForSession(e);
    }
    let m;
    let p = 0;
    for (const [g, f] of d) {
      if (f > p) {
        m = g;
        p = f;
      }
    }
    return m;
  }
  _emitPatchGraphDiffDisplayedEvents(e, t, i) {
    const r = this._computeLineStatsByGeneration(e);
    for (const s of r) {
      this.composerEventService.fireDidPatchGraphDiffDisplayed({
        composerId: t,
        uri: i,
        generationUUID: s.generationUUID,
        linesAdded: s.linesAdded,
        linesRemoved: s.linesRemoved
      });
    }
  }
  _precomputeGenerationUUIDsForDescriptor(e, t) {
    return t.changes.map(i => this._inferGenerationUUIDForChange(e, i));
  }
  _emitPatchGraphDiffRemainingActionEvents(e, t, i, r, s) {
    if (!i || i.changes.length === 0) {
      return;
    }
    const o = new Map();
    for (let a = 0; a < i.changes.length; a++) {
      const l = i.changes[a];
      const u = Math.max(0, l.addedRange.endLineNumberExclusive - l.addedRange.startLineNumber);
      const d = l.removedTextLines.length;
      if (u === 0 && d === 0) {
        continue;
      }
      const m = s ? s[a] : this._inferGenerationUUIDForChange(t, l);
      const p = m ?? "__unknown_generation__";
      let g = o.get(p);
      if (!g) {
        g = {
          generationUUID: m,
          linesAdded: 0,
          linesRemoved: 0
        };
        o.set(p, g);
      }
      g.linesAdded += u;
      g.linesRemoved += d;
    }
    for (const a of o.values()) {
      if (a.linesAdded === 0 && a.linesRemoved === 0) {
        continue;
      }
      const l = {
        composerId: t.composerId,
        uri: t.uri,
        generationUUID: a.generationUUID,
        linesAdded: a.linesAdded,
        linesRemoved: a.linesRemoved,
        sourceContext: r
      };
      if (e === "accept") {
        this.composerEventService.fireDidPatchGraphDiffAccepted(l);
      } else {
        this.composerEventService.fireDidPatchGraphDiffRejected(l);
      }
    }
  }
  _emitPatchGraphDiffPartialActionEvent(e, t, i, r, s) {
    const o = Math.max(0, i.addedRange.endLineNumberExclusive - i.addedRange.startLineNumber);
    const a = i.removedTextLines.length;
    if (o === 0 && a === 0) {
      return;
    }
    const l = s !== undefined ? s : this._inferGenerationUUIDForChange(t, i);
    const u = {
      composerId: t.composerId,
      uri: t.uri,
      generationUUID: l,
      linesAdded: o,
      linesRemoved: a,
      sourceContext: r
    };
    if (e === "accept") {
      this.composerEventService.fireDidPatchGraphDiffAccepted(u);
    } else {
      this.composerEventService.fireDidPatchGraphDiffRejected(u);
    }
  }
  _applyVisibilityFlags(e) {
    const t = this.diffDecorationVisibilityService.shouldHideInlineDiffs();
    return {
      ...e,
      metadata: {
        ...e.metadata,
        hideDecorations: t,
        hideDeletionViewZones: t
      }
    };
  }
  _getCellIdFromPatches(e) {
    for (const t of e) {
      if (t.attribs.cellId) {
        return t.attribs.cellId;
      }
    }
  }
  _getModelReferenceUri(e, t) {
    if (e.scheme !== _n.vscodeNotebookCell || !t) {
      return e;
    }
    const i = Dg.parse(e);
    if (i) {
      return this.notebookService.getNotebookTextModel(i.notebook)?.cells.find(o => o.metadata?.id === t)?.uri ?? e;
    } else {
      return e;
    }
  }
  _getUndoResourceUri(e) {
    if (e.scheme !== _n.vscodeNotebookCell) {
      return e;
    } else {
      return Dg.parse(e)?.notebook ?? e;
    }
  }
  _tryCaptureNotebookCellDeletionInfo(e, t) {
    if (e.scheme !== _n.vscodeNotebookCell) {
      return;
    }
    const i = this._getModelReferenceUri(e, t);
    const r = Dg.parse(i);
    if (!r) {
      return;
    }
    const s = this.notebookService.getNotebookTextModel(r.notebook);
    if (!s) {
      return;
    }
    let o = -1;
    if (t) {
      o = s.cells.findIndex(u => u.metadata?.id === t);
    } else {
      o = s.cells.findIndex(u => u.handle === r.handle);
    }
    if (o === -1) {
      return;
    }
    const a = s.cells[o];
    const l = {
      source: a.getValue(),
      language: a.language,
      mime: a.mime,
      cellKind: a.cellKind,
      outputs: a.outputs ?? [],
      metadata: a.metadata,
      internalMetadata: a.internalMetadata,
      collapseState: a.collapseState
    };
    return {
      notebookUri: r.notebook,
      cellIndex: o,
      cellData: l
    };
  }
  _saveResource(e, t) {
    if (e.scheme === _n.vscodeNotebookCell) {
      return Promise.resolve(undefined);
    } else {
      return this.textFileService.save(e, t);
    }
  }
  _shouldRecomputeDescriptorFromChangeEvent(e) {
    if (e.isFlush || e.isEolChange) {
      return true;
    }
    for (const t of e.changes) {
      const i = this._countLineBreaks(t.text);
      const r = t.range.endLineNumber - t.range.startLineNumber;
      if (i !== r) {
        return true;
      }
    }
    return false;
  }
  _countLineBreaks(e) {
    let t = 0;
    for (let i = 0; i < e.length; i++) {
      if (e.charCodeAt(i) === 10) {
        t++;
      }
    }
    return t;
  }
  _clientDebugLog(e, t) {
    if (!this._sentryEnabled) {
      return;
    }
    const i = kx().isInternalUser ? JSON.stringify({
      t: new Date().toISOString(),
      m: e,
      ...t
    }) : `${new Date().toISOString()} ${e}`;
    this.clientDebugLogService.log(QSn.DEBUG_LOG_ID, i);
  }
  _uploadClientDebugLogs() {
    if (this._sentryEnabled) {
      if (!this.cursorAuthenticationService.privacyMode()) {
        this.clientDebugLogService.upload(QSn.DEBUG_LOG_ID);
      }
    }
  }
  _debugSerializePatch(e) {
    return {
      id: e.id,
      source: e.attribs.patchSource,
      hunkCount: e.hunks.length,
      hunks: e.hunks.map(t => ({
        oldStart: t.oldStart,
        oldCount: t.oldLineCount,
        newStart: t.newStart,
        newCount: t.newLineCount,
        lines: t.lines.map(i => ({
          type: i.type,
          content: i.content
        }))
      }))
    };
  }
  dispose() {
    for (const [e, t] of this._modelRefByUri) {
      t.object.textEditorModel.deltaDecorations(this._decorationIdsByUri.get(e) ?? [], []);
    }
    this._decorationIdsByUri.clear();
    this._sessionByComposerUri.clear();
    this._sessionById.clear();
    this._tombstoneByComposerUri.clear();
    super.dispose();
  }
};
