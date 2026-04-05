"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/textDiffEditor.js
// Offset: 31152848 (bundle byte offset)
// Size: 5913 bytes
ri();
np();
Yr();
Sx();
Js();
Yn();
TW();
sw();
Ht();
si();
wI();
ns();
Wt();
Ws();
kr();
Pa();
Io();
Nu();
Xq();
Tit();
pfu();
od();
ss();
P_();
sfn();
$qe = class extends Iit {
  static {
    vfu = this;
  }
  static {
    this.ID = tla;
  }
  get scopedContextKeyService() {
    if (!this.diffEditorControl) {
      return;
    }
    const e = this.diffEditorControl.getOriginalEditor();
    const t = this.diffEditorControl.getModifiedEditor();
    return (e.hasTextFocus() ? e : t).invokeWithinContext(i => i.get(wi));
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super(vfu.ID, e, t, i, r, s, a, o, l, u);
    this.preferencesService = d;
    this.diffEditorControl = undefined;
    this.inputLifecycleStopWatch = undefined;
    this._previousViewModel = null;
  }
  getTitle() {
    if (this.input) {
      return this.input.getName();
    } else {
      return _(3831, null);
    }
  }
  createEditorControl(e, t) {
    this.diffEditorControl = this._register(this.instantiationService.createInstance(JB, e, t, {
      modifiedEditor: {
        isMultiDiffEditor: true
      }
    }));
  }
  updateEditorControlOptions(e) {
    this.diffEditorControl?.updateOptions(e);
  }
  getMainControl() {
    return this.diffEditorControl?.getModifiedEditor();
  }
  async setInput(e, t, i, r) {
    if (this._previousViewModel) {
      this._previousViewModel.dispose();
      this._previousViewModel = null;
    }
    this.inputLifecycleStopWatch = undefined;
    await super.setInput(e, t, i, r);
    try {
      const s = await e.resolve();
      if (r.isCancellationRequested) {
        return;
      }
      if (!(s instanceof WSa)) {
        this.openAsBinary(e, t);
        return;
      }
      const o = ed(this.diffEditorControl);
      const a = s;
      const l = a.textDiffEditorModel ? o.createViewModel(a.textDiffEditorModel) : null;
      this._previousViewModel = l;
      await l?.waitForDiff();
      o.setModel(l);
      let u = false;
      if (!Qun(t?.viewState)) {
        u = this.restoreTextDiffEditorViewState(e, t, i, o);
      }
      let d = false;
      if (t) {
        d = txe(t, o, 1);
      }
      if (!d && !u) {
        o.revealFirstDiff();
      }
      o.updateOptions({
        ...this.getReadonlyConfiguration(a.modifiedModel?.isReadonly()),
        originalEditable: !a.originalModel?.isReadonly()
      });
      o.handleInitialized();
      this.inputLifecycleStopWatch = new J_(false);
    } catch (s) {
      await this.handleSetInputError(s, e, t);
    }
  }
  async handleSetInputError(e, t, i) {
    if (this.isFileBinaryError(e)) {
      return this.openAsBinary(t, i);
    }
    if (e.fileOperationResult === 7) {
      let r;
      if (e instanceof vVe) {
        r = _(3832, null, dT.formatSize(e.size));
      } else {
        r = _(3833, null);
      }
      throw Xca(this.group, t, i, r, this.preferencesService);
    }
    throw e;
  }
  restoreTextDiffEditorViewState(e, t, i, r) {
    const s = this.loadEditorViewState(e, i);
    if (s) {
      if (t?.selection && s.modified) {
        s.modified.cursorState = [];
      }
      r.restoreViewState(s);
      if (t?.revealIfVisible) {
        r.revealFirstDiff();
      }
      return true;
    } else {
      return false;
    }
  }
  openAsBinary(e, t) {
    const i = e.original;
    const r = e.modified;
    const s = this.instantiationService.createInstance(kE, e.getName(), e.getDescription(), i, r, true);
    const o = Di.as(Jp.EditorFactory).getFileEditorFactory();
    if (o.isFileEditor(i)) {
      i.setForceOpenAsBinary();
    }
    if (o.isFileEditor(r)) {
      r.setForceOpenAsBinary();
    }
    this.group.replaceEditors([{
      editor: e,
      replacement: s,
      options: {
        ...t,
        activation: X4.PRESERVE,
        pinned: this.group.isPinned(e),
        sticky: this.group.isSticky(e)
      }
    }]);
  }
  setOptions(e) {
    super.setOptions(e);
    if (e) {
      txe(e, ed(this.diffEditorControl), 0);
    }
  }
  shouldHandleConfigurationChangeEvent(e, t) {
    if (super.shouldHandleConfigurationChangeEvent(e, t)) {
      return true;
    } else {
      return e.affectsConfiguration(t, "diffEditor") || e.affectsConfiguration(t, "accessibility.verbosity.diffEditor");
    }
  }
  computeConfiguration(e) {
    const t = super.computeConfiguration(e);
    if ($g(e.diffEditor)) {
      const r = mh(e.diffEditor);
      r.diffCodeLens = r.codeLens;
      delete r.codeLens;
      r.diffWordWrap = r.wordWrap;
      delete r.wordWrap;
      Object.assign(t, r);
    }
    const i = e.accessibility?.verbosity?.diffEditor ?? false;
    t.accessibilityVerbose = i;
    return t;
  }
  getConfigurationOverrides(e) {
    return {
      ...super.getConfigurationOverrides(e),
      ...this.getReadonlyConfiguration(this.input?.isReadonly()),
      originalEditable: this.input instanceof kE && !this.input.original.isReadonly(),
      lineDecorationsWidth: "2ch"
    };
  }
  updateReadonly(e) {
    if (e instanceof kE) {
      this.diffEditorControl?.updateOptions({
        ...this.getReadonlyConfiguration(e.isReadonly()),
        originalEditable: !e.original.isReadonly()
      });
    } else {
      super.updateReadonly(e);
    }
  }
  isFileBinaryError(e) {
    if (Array.isArray(e)) {
      return e.some(i => this.isFileBinaryError(i));
    } else {
      return e.textFileOperationResult === 0;
    }
  }
  clearInput() {
    if (this._previousViewModel) {
      this._previousViewModel.dispose();
      this._previousViewModel = null;
    }
    super.clearInput();
    const e = this.inputLifecycleStopWatch?.elapsed();
    this.inputLifecycleStopWatch = undefined;
    if (typeof e == "number") {
      this.logInputLifecycleTelemetry(e, this.getControl()?.getModel()?.modified?.getLanguageId());
    }
    this.diffEditorControl?.setModel(null);
  }
  logInputLifecycleTelemetry(e, t) {
    let i = false;
    if (this.diffEditorControl instanceof JB) {
      i = this.diffEditorControl.collapseUnchangedRegions;
    }
    this.telemetryService.publicLog2("diffEditor.editorVisibleTime", {
      editorVisibleTimeMs: e,
      languageId: t ?? "",
      collapseUnchangedRegions: i
    });
  }
  getControl() {
    return this.diffEditorControl;
  }
  focus() {
    super.focus();
    this.diffEditorControl?.focus();
  }
  hasFocus() {
    return this.diffEditorControl?.hasTextFocus() || super.hasFocus();
  }
  setEditorVisible(e) {
    super.setEditorVisible(e);
    if (e) {
      this.diffEditorControl?.onVisible();
    } else {
      this.diffEditorControl?.onHide();
    }
  }
  layout(e) {
    this.diffEditorControl?.layout(e);
  }
  setBoundarySashes(e) {
    this.diffEditorControl?.setBoundarySashes(e);
  }
  tracksEditorViewState(e) {
    return e instanceof kE;
  }
  computeEditorViewState(e) {
    if (!this.diffEditorControl) {
      return;
    }
    const t = this.diffEditorControl.getModel();
    if (!t || !t.modified || !t.original) {
      return;
    }
    const i = this.toEditorViewStateResource(t);
    if (i && Zc(i, e)) {
      return this.diffEditorControl.saveViewState() ?? undefined;
    }
  }
  toEditorViewStateResource(e) {
    let t;
    let i;
    if (e instanceof kE) {
      t = e.original.resource;
      i = e.modified.resource;
    } else if (!D_(e)) {
      t = e.original.uri;
      i = e.modified.uri;
    }
    if (!!t && !!i) {
      return je.from({
        scheme: "diff",
        path: `${Wgt(t.toString())}${Wgt(i.toString())}`
      });
    }
  }
};
$qe = vfu = __decorate([__param(1, ea), __param(2, ln), __param(3, Hi), __param(4, uy), __param(5, yi), __param(6, bo), __param(7, da), __param(8, Gr), __param(9, tb)], $qe);
