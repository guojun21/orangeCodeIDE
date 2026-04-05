"use strict";

// Module: out-build/vs/editor/common/services/modelService.js
// Offset: 32745060 (bundle byte offset)
// Size: 10915 bytes
yn();
rt();
_r();
nI();
ts();
bv();
z4o();
WE();
Ku();
sw();
Ei();
VD();
iw();
DOt();
zr();
np();
Wt();
jr();
c5f = class {
  constructor(n, e, t) {
    this.model = n;
    this._modelEventListeners = new Ut();
    this.model = n;
    this._modelEventListeners.add(n.onWillDispose(() => e(n)));
    this._modelEventListeners.add(n.onDidChangeLanguage(i => t(n, i)));
  }
  dispose() {
    this._modelEventListeners.dispose();
  }
};
l5f = xv || Fs ? 1 : 2;
u5f = class {
  constructor(n, e, t, i, r, s, o, a) {
    this.uri = n;
    this.initialUndoRedoSnapshot = e;
    this.time = t;
    this.sharesUndoRedoStack = i;
    this.heapSize = r;
    this.sha1 = s;
    this.versionId = o;
    this.alternativeVersionId = a;
  }
};
gxa = class extends at {
  static {
    bEt = this;
  }
  static {
    this.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20971520;
  }
  constructor(e, t, i, r, s, o) {
    super();
    this._configurationService = e;
    this._resourcePropertiesService = t;
    this._undoRedoService = i;
    this._instantiationService = r;
    this.logService = s;
    this._languageService = o;
    this._onModelAdded = this._register(new Qe());
    this.onModelAdded = this._onModelAdded.event;
    this._onModelRemoved = this._register(new Qe());
    this.onModelRemoved = this._onModelRemoved.event;
    this._onModelModeChanged = this._register(new Qe());
    this.onModelLanguageChanged = this._onModelModeChanged.event;
    this._onModelSyncRequested = this._register(new Qe());
    this.onModelSyncRequested = this._onModelSyncRequested.event;
    this._modelCreationOptionsByLanguageAndResource = Object.create(null);
    this._models = {};
    this._disposedModels = new Map();
    this._disposedModelsHeapSize = 0;
    this._register(this._configurationService.onDidChangeConfiguration(a => this._updateModelOptions(a)));
    this._updateModelOptions(undefined);
  }
  static _readModelOptions(e, t) {
    let i = J$.tabSize;
    if (e.editor && typeof e.editor.tabSize !== "undefined") {
      const p = parseInt(e.editor.tabSize, 10);
      if (!isNaN(p)) {
        i = p;
      }
      if (i < 1) {
        i = 1;
      }
    }
    let r = "tabSize";
    if (e.editor && typeof e.editor.indentSize !== "undefined" && e.editor.indentSize !== "tabSize") {
      const p = parseInt(e.editor.indentSize, 10);
      if (!isNaN(p)) {
        r = Math.max(p, 1);
      }
    }
    let s = J$.insertSpaces;
    if (e.editor && typeof e.editor.insertSpaces !== "undefined") {
      s = e.editor.insertSpaces === "false" ? false : !!e.editor.insertSpaces;
    }
    let o = l5f;
    const a = e.eol;
    if (a === `\r
`) {
      o = 2;
    } else if (a === `
`) {
      o = 1;
    }
    let l = J$.trimAutoWhitespace;
    if (e.editor && typeof e.editor.trimAutoWhitespace !== "undefined") {
      l = e.editor.trimAutoWhitespace === "false" ? false : !!e.editor.trimAutoWhitespace;
    }
    let u = J$.detectIndentation;
    if (e.editor && typeof e.editor.detectIndentation !== "undefined") {
      u = e.editor.detectIndentation === "false" ? false : !!e.editor.detectIndentation;
    }
    let d = J$.largeFileOptimizations;
    if (e.editor && typeof e.editor.largeFileOptimizations !== "undefined") {
      d = e.editor.largeFileOptimizations === "false" ? false : !!e.editor.largeFileOptimizations;
    }
    let m = J$.bracketPairColorizationOptions;
    if (e.editor?.bracketPairColorization && typeof e.editor.bracketPairColorization == "object") {
      m = {
        enabled: !!e.editor.bracketPairColorization.enabled,
        independentColorPoolPerBracketType: !!e.editor.bracketPairColorization.independentColorPoolPerBracketType
      };
    }
    return {
      isForSimpleWidget: t,
      tabSize: i,
      indentSize: r,
      insertSpaces: s,
      detectIndentation: u,
      defaultEOL: o,
      trimAutoWhitespace: l,
      largeFileOptimizations: d,
      bracketPairColorizationOptions: m
    };
  }
  _getEOL(e, t) {
    if (e) {
      return this._resourcePropertiesService.getEOL(e, t);
    }
    const i = this._configurationService.getValue("files.eol", {
      overrideIdentifier: t
    });
    if (i && typeof i == "string" && i !== "auto") {
      return i;
    } else if (cf === 3 || cf === 2) {
      return `
`;
    } else {
      return `\r
`;
    }
  }
  _shouldRestoreUndoStack() {
    const e = this._configurationService.getValue("files.restoreUndoStack");
    if (typeof e == "boolean") {
      return e;
    } else {
      return true;
    }
  }
  getCreationOptions(e, t, i) {
    const r = typeof e == "string" ? e : e.languageId;
    let s = this._modelCreationOptionsByLanguageAndResource[r + t];
    if (!s) {
      const o = this._configurationService.getValue("editor", {
        overrideIdentifier: r,
        resource: t
      });
      const a = this._getEOL(t, r);
      s = bEt._readModelOptions({
        editor: o,
        eol: a
      }, i);
      this._modelCreationOptionsByLanguageAndResource[r + t] = s;
    }
    return s;
  }
  _updateModelOptions(e) {
    const t = this._modelCreationOptionsByLanguageAndResource;
    this._modelCreationOptionsByLanguageAndResource = Object.create(null);
    const i = Object.keys(this._models);
    for (let r = 0, s = i.length; r < s; r++) {
      const o = i[r];
      const a = this._models[o];
      const l = a.model.getLanguageId();
      const u = a.model.uri;
      if (e && !e.affectsConfiguration("editor", {
        overrideIdentifier: l,
        resource: u
      }) && !e.affectsConfiguration("files.eol", {
        overrideIdentifier: l,
        resource: u
      })) {
        continue;
      }
      const d = t[l + u];
      const m = this.getCreationOptions(l, u, a.model.isForSimpleWidget);
      bEt._setModelOptionsForModel(a.model, m, d);
    }
  }
  static _setModelOptionsForModel(e, t, i) {
    if (i && i.defaultEOL !== t.defaultEOL && e.getLineCount() === 1) {
      e.setEOL(t.defaultEOL === 1 ? 0 : 1);
    }
    if (!i || i.detectIndentation !== t.detectIndentation || i.insertSpaces !== t.insertSpaces || i.tabSize !== t.tabSize || i.indentSize !== t.indentSize || i.trimAutoWhitespace !== t.trimAutoWhitespace || !fv(i.bracketPairColorizationOptions, t.bracketPairColorizationOptions)) {
      if (t.detectIndentation) {
        e.detectIndentation(t.insertSpaces, t.tabSize);
        e.updateOptions({
          trimAutoWhitespace: t.trimAutoWhitespace,
          bracketColorizationOptions: t.bracketPairColorizationOptions
        });
      } else {
        e.updateOptions({
          insertSpaces: t.insertSpaces,
          tabSize: t.tabSize,
          indentSize: t.indentSize,
          trimAutoWhitespace: t.trimAutoWhitespace,
          bracketColorizationOptions: t.bracketPairColorizationOptions
        });
      }
    }
  }
  _insertDisposedModel(e) {
    this._disposedModels.set(vrt(e.uri), e);
    this._disposedModelsHeapSize += e.heapSize;
  }
  _removeDisposedModel(e) {
    const t = this._disposedModels.get(vrt(e));
    if (t) {
      this._disposedModelsHeapSize -= t.heapSize;
    }
    this._disposedModels.delete(vrt(e));
    return t;
  }
  _ensureDisposedModelsHeapSize(e) {
    if (this._disposedModelsHeapSize > e) {
      const t = [];
      this._disposedModels.forEach(i => {
        if (!i.sharesUndoRedoStack) {
          t.push(i);
        }
      });
      t.sort((i, r) => i.time - r.time);
      while (t.length > 0 && this._disposedModelsHeapSize > e) {
        const i = t.shift();
        this._removeDisposedModel(i.uri);
        if (i.initialUndoRedoSnapshot !== null) {
          this._undoRedoService.restoreSnapshot(i.initialUndoRedoSnapshot);
        }
      }
    }
  }
  _createModelData(e, t, i, r, s, o) {
    const a = this.getCreationOptions(t, i, r);
    const l = this._instantiationService.createInstance(N6, e, t, a, i, s, o);
    if (i && this._disposedModels.has(vrt(i))) {
      const m = this._removeDisposedModel(i);
      const p = this._undoRedoService.getElements(i);
      const g = this._getSHA1Computer();
      const f = g.canComputeSHA1(l) ? g.computeSHA1(l) === m.sha1 : false;
      if (f || m.sharesUndoRedoStack) {
        for (const A of p.past) {
          if (t9e(A) && A.matchesResource(i)) {
            A.setModel(l);
          }
        }
        for (const A of p.future) {
          if (t9e(A) && A.matchesResource(i)) {
            A.setModel(l);
          }
        }
        this._undoRedoService.setElementsValidFlag(i, true, A => t9e(A) && A.matchesResource(i));
        if (f) {
          l._overwriteVersionId(m.versionId);
          l._overwriteAlternativeVersionId(m.alternativeVersionId);
          l._overwriteInitialUndoRedoSnapshot(m.initialUndoRedoSnapshot);
        }
      } else if (m.initialUndoRedoSnapshot !== null) {
        this._undoRedoService.restoreSnapshot(m.initialUndoRedoSnapshot);
      }
    }
    const u = vrt(l.uri);
    if (this._models[u]) {
      throw new Error("ModelService: Cannot add model because it already exists!");
    }
    const d = new c5f(l, m => this._onWillDispose(m), (m, p) => this._onDidChangeLanguage(m, p));
    this._models[u] = d;
    return d;
  }
  updateModel(e, t) {
    const i = this.getCreationOptions(e.getLanguageId(), e.uri, e.isForSimpleWidget);
    const {
      textBuffer: r,
      disposable: s
    } = POn(t, i.defaultEOL);
    if (e.equalsTextBuffer(r)) {
      s.dispose();
      return;
    }
    e.pushStackElement();
    e.pushEOL(r.getEOL() === `\r
` ? 1 : 0);
    e.pushEditOperations([], bEt._computeEdits(e, r), () => []);
    e.pushStackElement();
    s.dispose();
  }
  static _commonPrefix(e, t, i, r, s, o) {
    const a = Math.min(t, s);
    let l = 0;
    for (let u = 0; u < a && e.getLineContent(i + u) === r.getLineContent(o + u); u++) {
      l++;
    }
    return l;
  }
  static _commonSuffix(e, t, i, r, s, o) {
    const a = Math.min(t, s);
    let l = 0;
    for (let u = 0; u < a && e.getLineContent(i + t - u) === r.getLineContent(o + s - u); u++) {
      l++;
    }
    return l;
  }
  static _computeEdits(e, t) {
    const i = e.getLineCount();
    const r = t.getLineCount();
    const s = this._commonPrefix(e, i, 1, t, r, 1);
    if (i === r && s === i) {
      return [];
    }
    const o = this._commonSuffix(e, i - s, s, t, r - s, s);
    let a;
    let l;
    if (o > 0) {
      a = new Zt(s + 1, 1, i - o + 1, 1);
      l = new Zt(s + 1, 1, r - o + 1, 1);
    } else if (s > 0) {
      a = new Zt(s, e.getLineMaxColumn(s), i, e.getLineMaxColumn(i));
      l = new Zt(s, 1 + t.getLineLength(s), r, 1 + t.getLineLength(r));
    } else {
      a = new Zt(1, 1, i, e.getLineMaxColumn(i));
      l = new Zt(1, 1, r, 1 + t.getLineLength(r));
    }
    return [zb.replaceMove(a, t.getValueInRange(l, 0))];
  }
  createModel(e, t, i, r, s, o) {
    let a;
    if (i?.scheme.endsWith("-anysphere")) {
      if (r === undefined) {
        r = true;
      }
      if (s === undefined) {
        s = true;
      }
      if (o === undefined) {
        o = s;
      }
      if (!r) {
        this.logService.debug("Creating model with anysphere scheme that is not as a simple widget: ", i.toString());
      }
      if (!s) {
        this.logService.debug("Creating model with anysphere scheme and not skipping lsp sync: ", i.toString());
      }
    } else {
      if (r === undefined) {
        r = false;
      }
      if (s === undefined) {
        s = false;
      }
      if (o === undefined) {
        o = s;
      }
    }
    if (t) {
      a = this._createModelData(e, t, i, r, s, o);
    } else {
      a = this._createModelData(e, o_, i, r, s, o);
    }
    this._onModelAdded.fire(a.model);
    return a.model;
  }
  destroyModel(e) {
    const t = this._models[vrt(e)];
    if (t) {
      t.model.dispose();
    }
  }
  getModels() {
    const e = [];
    const t = Object.keys(this._models);
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      e.push(this._models[s].model);
    }
    return e;
  }
  getModel(e) {
    const t = vrt(e);
    const i = this._models[t];
    if (i) {
      return i.model;
    } else {
      return null;
    }
  }
  syncModelWithLSP(e) {
    if (!e.syncedWithLSP) {
      e.skipLSPSync = false;
      e.skipLSPRegistration = false;
      this._languageService.requestRichLanguageFeatures(e.getLanguageId());
      this._onModelSyncRequested.fire(e);
    }
  }
  _schemaShouldMaintainUndoRedoElements(e) {
    return e.scheme === _n.file || e.scheme === _n.vscodeRemote || e.scheme === _n.vscodeUserData || e.scheme === _n.vscodeNotebookCell || e.scheme === "fake-fs";
  }
  _onWillDispose(e) {
    const t = vrt(e.uri);
    const i = this._models[t];
    const r = this._undoRedoService.getUriComparisonKey(e.uri) !== e.uri.toString();
    let s = false;
    let o = 0;
    if (r || this._shouldRestoreUndoStack() && this._schemaShouldMaintainUndoRedoElements(e.uri)) {
      const u = this._undoRedoService.getElements(e.uri);
      if (u.past.length > 0 || u.future.length > 0) {
        for (const d of u.past) {
          if (t9e(d) && d.matchesResource(e.uri)) {
            s = true;
            o += d.heapSize(e.uri);
            d.setModel(e.uri);
          }
        }
        for (const d of u.future) {
          if (t9e(d) && d.matchesResource(e.uri)) {
            s = true;
            o += d.heapSize(e.uri);
            d.setModel(e.uri);
          }
        }
      }
    }
    const a = bEt.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK;
    const l = this._getSHA1Computer();
    if (s) {
      if (!r && (o > a || !l.canComputeSHA1(e))) {
        const u = i.model.getInitialUndoRedoSnapshot();
        if (u !== null) {
          this._undoRedoService.restoreSnapshot(u);
        }
      } else {
        this._ensureDisposedModelsHeapSize(a - o);
        this._undoRedoService.setElementsValidFlag(e.uri, false, u => t9e(u) && u.matchesResource(e.uri));
        this._insertDisposedModel(new u5f(e.uri, i.model.getInitialUndoRedoSnapshot(), Date.now(), r, o, l.computeSHA1(e), e.getVersionId(), e.getAlternativeVersionId()));
      }
    } else if (!r) {
      const u = i.model.getInitialUndoRedoSnapshot();
      if (u !== null) {
        this._undoRedoService.restoreSnapshot(u);
      }
    }
    delete this._models[t];
    i.dispose();
    delete this._modelCreationOptionsByLanguageAndResource[e.getLanguageId() + e.uri];
    this._onModelRemoved.fire(e);
  }
  _onDidChangeLanguage(e, t) {
    const i = t.oldLanguage;
    const r = e.getLanguageId();
    const s = this.getCreationOptions(i, e.uri, e.isForSimpleWidget);
    const o = this.getCreationOptions(r, e.uri, e.isForSimpleWidget);
    bEt._setModelOptionsForModel(e, o, s);
    this._onModelModeChanged.fire({
      model: e,
      oldLanguageId: i
    });
  }
  _getSHA1Computer() {
    return new vSi();
  }
};
gxa = bEt = __decorate([__param(0, Fn), __param(1, ent), __param(2, qB), __param(3, ln), __param(4, Rr), __param(5, Jl)], gxa);
vSi = class pzb {
  static {
    this.MAX_MODEL_SIZE = 10485760;
  }
  canComputeSHA1(e) {
    return e.getValueLength() <= pzb.MAX_MODEL_SIZE;
  }
  computeSHA1(e) {
    const t = new yde();
    const i = e.createSnapshot();
    let r;
    while (r = i.read()) {
      t.update(r);
    }
    return t.digest();
  }
};
