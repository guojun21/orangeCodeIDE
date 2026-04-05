"use strict";

// Module: out-build/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js
// Offset: 32766030 (bundle byte offset)
// Size: 13215 bytes
Ht();
Ew();
vr();
Po();
_s();
rt();
cu();
zr();
Yr();
Ei();
si();
jr();
lv();
Cu();
Oh();
ts();
Qh();
Rvt();
bxa();
xw();
Cm();
td();
x5f();
Wly();
Axa = new Sn("hasWordHighlights", false);
Oyu = class {
  constructor(n, e, t) {
    this._model = n;
    this._selection = e;
    this._wordSeparators = t;
    this._wordRange = this._getCurrentWordRange(n, e);
    this._result = null;
  }
  get result() {
    this._result ||= dw(n => this._compute(this._model, this._selection, this._wordSeparators, n));
    return this._result;
  }
  _getCurrentWordRange(n, e) {
    const t = n.getWordAtPosition(e.getPosition());
    if (t) {
      return new Zt(e.startLineNumber, t.startColumn, e.startLineNumber, t.endColumn);
    } else {
      return null;
    }
  }
  isValid(n, e, t) {
    const i = e.startLineNumber;
    const r = e.startColumn;
    const s = e.endColumn;
    const o = this._getCurrentWordRange(n, e);
    let a = !!this._wordRange && !!this._wordRange.equalsRange(o);
    for (let l = 0, u = t.length; !a && l < u; l++) {
      const d = t.getRange(l);
      if (d && d.startLineNumber === i && d.startColumn <= r && d.endColumn >= s) {
        a = true;
      }
    }
    return a;
  }
  cancel() {
    this.result.cancel();
  }
};
I5f = class extends Oyu {
  constructor(n, e, t, i) {
    super(n, e, t);
    this._providers = i;
  }
  _compute(n, e, t, i) {
    return T5f(this._providers, n, e.getPosition(), i).then(r => r || new fu());
  }
};
D5f = class extends Oyu {
  constructor(n, e, t, i, r) {
    super(n, e, t);
    this._providers = i;
    this._otherModels = r;
  }
  _compute(n, e, t, i) {
    return Qly(this._providers, n, e.getPosition(), i, this._otherModels).then(r => r || new fu());
  }
};
RY("_executeDocumentHighlights", async (n, e, t) => {
  const i = n.get($u);
  return (await T5f(i.documentHighlightProvider, e, t, Cs.None))?.get(e.uri);
});
yxa = class {
  static {
    mP = this;
  }
  static {
    this.storedDecorationIDs = new fu();
  }
  static {
    this.query = null;
  }
  constructor(e, t, i, r, s, o, a, l) {
    this.toUnhook = new Ut();
    this.workerRequestTokenId = 0;
    this.workerRequestCompleted = false;
    this.workerRequestValue = new fu();
    this.lastCursorPositionChangeTime = 0;
    this.renderDecorationsTimer = -1;
    this.runDelayer = this.toUnhook.add(new Nv(25));
    this.editor = e;
    this.providers = t;
    this.multiDocumentProviders = i;
    this.codeEditorService = o;
    this.textModelService = s;
    this.configurationService = a;
    this.logService = l;
    this._hasWordHighlights = Axa.bindTo(r);
    this._ignorePositionChangeEvent = false;
    this.occurrencesHighlightEnablement = this.editor.getOption(82);
    this.occurrencesHighlightDelay = this.configurationService.getValue("editor.occurrencesHighlightDelay");
    this.model = this.editor.getModel();
    this.toUnhook.add(e.onDidChangeCursorPosition(u => {
      if ((e.getModel().uri.toString() !== "output:anysphere.cursor-always-local.Cursor%20Tab" || u.source === "mouse") && !this._ignorePositionChangeEvent) {
        if (this.occurrencesHighlightEnablement !== "off") {
          this.runDelayer.trigger(() => {
            this._onPositionChanged(u);
          });
        }
      }
    }));
    this.toUnhook.add(e.onDidFocusEditorText(u => {
      if (this.occurrencesHighlightEnablement !== "off") {
        if (!this.workerRequest) {
          this.runDelayer.trigger(() => {
            this._run();
          });
        }
      }
    }));
    this.toUnhook.add(e.onDidChangeModelContent(u => {
      if (!OR(this.model.uri, "output")) {
        this._stopAll();
      }
    }));
    this.toUnhook.add(e.onDidChangeModel(u => {
      if (!u.newModelUrl && u.oldModelUrl) {
        this._stopSingular();
      } else if (mP.query) {
        this._run();
      }
    }));
    this.toUnhook.add(e.onDidChangeConfiguration(u => {
      const d = this.editor.getOption(82);
      if (this.occurrencesHighlightEnablement !== d) {
        this.occurrencesHighlightEnablement = d;
        switch (d) {
          case "off":
            this._stopAll();
            break;
          case "singleFile":
            this._stopAll(mP.query?.modelInfo?.modelURI);
            break;
          case "multiFile":
            if (mP.query) {
              this._run(true);
            }
            break;
          default:
            console.warn("Unknown occurrencesHighlight setting value:", d);
            break;
        }
      }
    }));
    this.toUnhook.add(this.configurationService.onDidChangeConfiguration(u => {
      if (u.affectsConfiguration("editor.occurrencesHighlightDelay")) {
        const d = a.getValue("editor.occurrencesHighlightDelay");
        if (this.occurrencesHighlightDelay !== d) {
          this.occurrencesHighlightDelay = d;
        }
      }
    }));
    this.toUnhook.add(e.onDidBlurEditorWidget(() => {
      const u = this.codeEditorService.getFocusedCodeEditor();
      if (u) {
        if (u.getModel()?.uri.scheme === _n.vscodeNotebookCell && this.editor.getModel()?.uri.scheme !== _n.vscodeNotebookCell) {
          this._stopAll();
        }
      } else {
        this._stopAll();
      }
    }));
    this.decorations = this.editor.createDecorationsCollection();
    this.workerRequestTokenId = 0;
    this.workerRequest = null;
    this.workerRequestCompleted = false;
    this.lastCursorPositionChangeTime = 0;
    this.renderDecorationsTimer = -1;
    if (mP.query) {
      this._run();
    }
  }
  hasDecorations() {
    return this.decorations.length > 0;
  }
  restore(e) {
    if (this.occurrencesHighlightEnablement !== "off") {
      this.runDelayer.cancel();
      this.runDelayer.trigger(() => {
        this._run(false, e);
      });
    }
  }
  trigger() {
    this.runDelayer.cancel();
    this._run(false, 0);
  }
  stop() {
    if (this.occurrencesHighlightEnablement !== "off") {
      this._stopAll();
    }
  }
  _getSortedHighlights() {
    return this.decorations.getRanges().sort(Zt.compareRangesUsingStarts);
  }
  moveNext() {
    const e = this._getSortedHighlights();
    const i = (e.findIndex(s => s.containsPosition(this.editor.getPosition())) + 1) % e.length;
    const r = e[i];
    try {
      this._ignorePositionChangeEvent = true;
      this.editor.setPosition(r.getStartPosition());
      this.editor.revealRangeInCenterIfOutsideViewport(r);
      const s = this._getWord();
      if (s) {
        const o = this.editor.getModel().getLineContent(r.startLineNumber);
        W_(`${o}, ${i + 1} of ${e.length} for '${s.word}'`);
      }
    } finally {
      this._ignorePositionChangeEvent = false;
    }
  }
  moveBack() {
    const e = this._getSortedHighlights();
    const i = (e.findIndex(s => s.containsPosition(this.editor.getPosition())) - 1 + e.length) % e.length;
    const r = e[i];
    try {
      this._ignorePositionChangeEvent = true;
      this.editor.setPosition(r.getStartPosition());
      this.editor.revealRangeInCenterIfOutsideViewport(r);
      const s = this._getWord();
      if (s) {
        const o = this.editor.getModel().getLineContent(r.startLineNumber);
        W_(`${o}, ${i + 1} of ${e.length} for '${s.word}'`);
      }
    } finally {
      this._ignorePositionChangeEvent = false;
    }
  }
  _removeSingleDecorations() {
    if (!this.editor.hasModel()) {
      return;
    }
    const e = mP.storedDecorationIDs.get(this.editor.getModel().uri);
    if (e) {
      this.editor.removeDecorations(e);
      mP.storedDecorationIDs.delete(this.editor.getModel().uri);
      if (this.decorations.length > 0) {
        this.decorations.clear();
        this._hasWordHighlights.set(false);
      }
    }
  }
  _removeAllDecorations(e) {
    const t = this.codeEditorService.listCodeEditors();
    const i = [];
    for (const r of t) {
      if (!r.hasModel() || Zc(r.getModel().uri, e)) {
        continue;
      }
      const s = mP.storedDecorationIDs.get(r.getModel().uri);
      if (!s) {
        continue;
      }
      r.removeDecorations(s);
      i.push(r.getModel().uri);
      const o = HV.get(r);
      if (o?.wordHighlighter && o.wordHighlighter.decorations.length > 0) {
        o.wordHighlighter.decorations.clear();
        o.wordHighlighter.workerRequest = null;
        o.wordHighlighter._hasWordHighlights.set(false);
      }
    }
    for (const r of i) {
      mP.storedDecorationIDs.delete(r);
    }
  }
  _stopSingular() {
    this._removeSingleDecorations();
    if (this.editor.hasTextFocus()) {
      if (this.editor.getModel()?.uri.scheme !== _n.vscodeNotebookCell && mP.query?.modelInfo?.modelURI.scheme !== _n.vscodeNotebookCell) {
        mP.query = null;
        this._run();
      } else if (mP.query?.modelInfo) {
        mP.query.modelInfo = null;
      }
    }
    if (this.renderDecorationsTimer !== -1) {
      clearTimeout(this.renderDecorationsTimer);
      this.renderDecorationsTimer = -1;
    }
    if (this.workerRequest !== null) {
      this.workerRequest.cancel();
      this.workerRequest = null;
    }
    if (!this.workerRequestCompleted) {
      this.workerRequestTokenId++;
      this.workerRequestCompleted = true;
    }
  }
  _stopAll(e) {
    this._removeAllDecorations(e);
    if (this.renderDecorationsTimer !== -1) {
      clearTimeout(this.renderDecorationsTimer);
      this.renderDecorationsTimer = -1;
    }
    if (this.workerRequest !== null) {
      this.workerRequest.cancel();
      this.workerRequest = null;
    }
    if (!this.workerRequestCompleted) {
      this.workerRequestTokenId++;
      this.workerRequestCompleted = true;
    }
  }
  _onPositionChanged(e) {
    if (this.occurrencesHighlightEnablement === "off") {
      this._stopAll();
      return;
    }
    if (e.source !== "api" && e.reason !== 3) {
      this._stopAll();
      return;
    }
    this._run();
  }
  _getWord() {
    const e = this.editor.getSelection();
    const t = e.startLineNumber;
    const i = e.startColumn;
    if (this.model.isDisposed()) {
      return null;
    } else {
      return this.model.getWordAtPosition({
        lineNumber: t,
        column: i
      });
    }
  }
  getOtherModelsToHighlight(e) {
    if (!e) {
      return [];
    }
    if (e.uri.scheme === _n.vscodeNotebookCell) {
      const s = [];
      const o = this.codeEditorService.listCodeEditors();
      for (const a of o) {
        const l = a.getModel();
        if (l && l !== e && l.uri.scheme === _n.vscodeNotebookCell) {
          s.push(l);
        }
      }
      return s;
    }
    const i = [];
    const r = this.codeEditorService.listCodeEditors();
    for (const s of r) {
      if (!iB(s)) {
        continue;
      }
      const o = s.getModel();
      if (o && e === o.modified) {
        i.push(o.modified);
      }
    }
    if (i.length) {
      return i;
    }
    if (this.occurrencesHighlightEnablement === "singleFile") {
      return [];
    }
    for (const s of r) {
      const o = s.getModel();
      if (o && o !== e) {
        i.push(o);
      }
    }
    return i;
  }
  async _run(e, t) {
    if (this.editor.hasTextFocus()) {
      const r = this.editor.getSelection();
      if (!r || r.startLineNumber !== r.endLineNumber) {
        mP.query = null;
        this._stopAll();
        return;
      }
      const s = r.startColumn;
      const o = r.endColumn;
      const a = this._getWord();
      if (!a || a.startColumn > s || a.endColumn < o) {
        mP.query = null;
        this._stopAll();
        return;
      }
      mP.query = {
        modelInfo: {
          modelURI: this.model.uri,
          selection: r
        }
      };
    } else if (!mP.query) {
      this._stopAll();
      return;
    }
    this.lastCursorPositionChangeTime = new Date().getTime();
    if (Zc(this.editor.getModel().uri, mP.query.modelInfo?.modelURI)) {
      if (!e) {
        const a = this.decorations.getRanges();
        for (const l of a) {
          if (l.containsPosition(this.editor.getPosition())) {
            return;
          }
        }
      }
      this._stopAll(e ? this.model.uri : undefined);
      const r = ++this.workerRequestTokenId;
      this.workerRequestCompleted = false;
      const s = this.getOtherModelsToHighlight(this.editor.getModel());
      if (!mP.query || !mP.query.modelInfo) {
        return;
      }
      const o = await this.textModelService.createModelReference(mP.query.modelInfo.modelURI);
      try {
        this.workerRequest = this.computeWithModel(o.object.textEditorModel, mP.query.modelInfo.selection, s);
        this.workerRequest?.result.then(a => {
          if (r === this.workerRequestTokenId) {
            this.workerRequestCompleted = true;
            this.workerRequestValue = a || [];
            this._beginRenderDecorations(t ?? this.occurrencesHighlightDelay);
          }
        }, Gc);
      } catch (a) {
        this.logService.error("Unexpected error during occurrence request. Log: ", a);
      } finally {
        o.dispose();
      }
    } else if (this.model.uri.scheme === _n.vscodeNotebookCell) {
      const r = ++this.workerRequestTokenId;
      this.workerRequestCompleted = false;
      if (!mP.query || !mP.query.modelInfo) {
        return;
      }
      const s = await this.textModelService.createModelReference(mP.query.modelInfo.modelURI);
      try {
        this.workerRequest = this.computeWithModel(s.object.textEditorModel, mP.query.modelInfo.selection, [this.model]);
        this.workerRequest?.result.then(o => {
          if (r === this.workerRequestTokenId) {
            this.workerRequestCompleted = true;
            this.workerRequestValue = o || [];
            this._beginRenderDecorations(t ?? this.occurrencesHighlightDelay);
          }
        }, Gc);
      } catch (o) {
        this.logService.error("Unexpected error during occurrence request. Log: ", o);
      } finally {
        s.dispose();
      }
    }
  }
  computeWithModel(e, t, i) {
    if (i.length) {
      return zly(this.multiDocumentProviders, e, t, this.editor.getOption(136), i);
    } else {
      return jly(this.providers, e, t, this.editor.getOption(136));
    }
  }
  _beginRenderDecorations(e) {
    const t = new Date().getTime();
    const i = this.lastCursorPositionChangeTime + e;
    if (t >= i) {
      this.renderDecorationsTimer = -1;
      this.renderDecorations();
    } else {
      this.renderDecorationsTimer = setTimeout(() => {
        this.renderDecorations();
      }, i - t);
    }
  }
  renderDecorations() {
    this.renderDecorationsTimer = -1;
    const e = this.codeEditorService.listCodeEditors();
    for (const t of e) {
      const i = HV.get(t);
      if (!i) {
        continue;
      }
      const r = [];
      const s = t.getModel()?.uri;
      if (s && this.workerRequestValue.has(s)) {
        const o = mP.storedDecorationIDs.get(s);
        const a = this.workerRequestValue.get(s);
        if (a) {
          for (const u of a) {
            if (u.range) {
              r.push({
                range: u.range,
                options: Jly(u.kind)
              });
            }
          }
        }
        let l = [];
        t.changeDecorations(u => {
          l = u.deltaDecorations(o ?? [], r);
        });
        mP.storedDecorationIDs = mP.storedDecorationIDs.set(s, l);
        if (r.length > 0) {
          i.wordHighlighter?.decorations.set(r);
          i.wordHighlighter?._hasWordHighlights.set(true);
        }
      }
    }
    this.workerRequest = null;
  }
  dispose() {
    this._stopSingular();
    this.toUnhook.dispose();
  }
};
yxa = mP = __decorate([__param(4, El), __param(5, fl), __param(6, Fn), __param(7, Rr)], yxa);
HV = class extends at {
  static {
    Fyu = this;
  }
  static {
    this.ID = "editor.contrib.wordHighlighter";
  }
  static get(e) {
    return e.getContribution(Fyu.ID);
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this._wordHighlighter = null;
    const l = () => {
      if (e.hasModel() && !e.getModel().isTooLargeForTokenization() && e.getModel().uri.scheme !== _n.accessibleView) {
        this._wordHighlighter = new yxa(e, i.documentHighlightProvider, i.multiDocumentHighlightProvider, t, s, r, o, a);
      }
    };
    this._register(e.onDidChangeModel(u => {
      if (this._wordHighlighter) {
        if (!u.newModelUrl && u.oldModelUrl?.scheme !== _n.vscodeNotebookCell) {
          this.wordHighlighter?.stop();
        }
        this._wordHighlighter.dispose();
        this._wordHighlighter = null;
      }
      l();
    }));
    l();
  }
  get wordHighlighter() {
    return this._wordHighlighter;
  }
  saveViewState() {
    return !!this._wordHighlighter && !!this._wordHighlighter.hasDecorations();
  }
  moveNext() {
    this._wordHighlighter?.moveNext();
  }
  moveBack() {
    this._wordHighlighter?.moveBack();
  }
  restoreViewState(e) {
    if (this._wordHighlighter && e) {
      this._wordHighlighter.restore(250);
    }
  }
  stopHighlighting() {
    this._wordHighlighter?.stop();
  }
  dispose() {
    if (this._wordHighlighter) {
      this._wordHighlighter.dispose();
      this._wordHighlighter = null;
    }
    super.dispose();
  }
};
HV = Fyu = __decorate([__param(1, wi), __param(2, $u), __param(3, fl), __param(4, El), __param(5, Fn), __param(6, Rr)], HV);
Uyu = class extends vu {
  constructor(n, e) {
    super(e);
    this._isNext = n;
  }
  run(n, e) {
    const t = HV.get(e);
    if (t) {
      if (this._isNext) {
        t.moveNext();
      } else {
        t.moveBack();
      }
    }
  }
};
B5f = class extends Uyu {
  constructor() {
    super(true, {
      id: "editor.action.wordHighlight.next",
      label: dt(1711, "Go to Next Symbol Highlight"),
      precondition: Axa,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 65,
        weight: 100
      }
    });
  }
};
R5f = class extends Uyu {
  constructor() {
    super(false, {
      id: "editor.action.wordHighlight.prev",
      label: dt(1712, "Go to Previous Symbol Highlight"),
      precondition: Axa,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 1089,
        weight: 100
      }
    });
  }
};
P5f = class extends vu {
  constructor() {
    super({
      id: "editor.action.wordHighlight.trigger",
      label: dt(1713, "Trigger Symbol Highlight"),
      precondition: undefined,
      kbOpts: {
        kbExpr: Ci.editorTextFocus,
        primary: 0,
        weight: 100
      }
    });
  }
  run(n, e, t) {
    const i = HV.get(e);
    if (i) {
      i.restoreViewState(true);
    }
  }
};
Mg(HV.ID, HV, 0);
ac(B5f);
ac(R5f);
ac(P5f);
Bvt(vxa);
