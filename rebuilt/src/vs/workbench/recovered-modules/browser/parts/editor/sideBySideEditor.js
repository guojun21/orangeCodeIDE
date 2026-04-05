"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/sideBySideEditor.js
// Offset: 31122594 (bundle byte offset)
// Size: 9791 bytes
Tsy();
Ht();
ri();
Ws();
Nu();
Zq();
Pa();
Wt();
Io();
od();
qne();
yn();
kr();
Js();
Ei();
exe();
rt();
ky();
nfn();
sw();
ss();
Yr();
Yn();
Oce = class extends Uqe {
  static {
    P1t = this;
  }
  static {
    this.ID = sbg;
  }
  static {
    this.SIDE_BY_SIDE_LAYOUT_SETTING = "workbench.editor.splitInGroupLayout";
  }
  static {
    this.VIEW_STATE_PREFERENCE_KEY = "sideBySideEditorViewState";
  }
  get minimumPrimaryWidth() {
    if (this.primaryEditorPane) {
      return this.primaryEditorPane.minimumWidth;
    } else {
      return 0;
    }
  }
  get maximumPrimaryWidth() {
    if (this.primaryEditorPane) {
      return this.primaryEditorPane.maximumWidth;
    } else {
      return Number.POSITIVE_INFINITY;
    }
  }
  get minimumPrimaryHeight() {
    if (this.primaryEditorPane) {
      return this.primaryEditorPane.minimumHeight;
    } else {
      return 0;
    }
  }
  get maximumPrimaryHeight() {
    if (this.primaryEditorPane) {
      return this.primaryEditorPane.maximumHeight;
    } else {
      return Number.POSITIVE_INFINITY;
    }
  }
  get minimumSecondaryWidth() {
    if (this.secondaryEditorPane) {
      return this.secondaryEditorPane.minimumWidth;
    } else {
      return 0;
    }
  }
  get maximumSecondaryWidth() {
    if (this.secondaryEditorPane) {
      return this.secondaryEditorPane.maximumWidth;
    } else {
      return Number.POSITIVE_INFINITY;
    }
  }
  get minimumSecondaryHeight() {
    if (this.secondaryEditorPane) {
      return this.secondaryEditorPane.minimumHeight;
    } else {
      return 0;
    }
  }
  get maximumSecondaryHeight() {
    if (this.secondaryEditorPane) {
      return this.secondaryEditorPane.maximumHeight;
    } else {
      return Number.POSITIVE_INFINITY;
    }
  }
  set minimumWidth(e) {}
  set maximumWidth(e) {}
  set minimumHeight(e) {}
  set maximumHeight(e) {}
  get minimumWidth() {
    return this.minimumPrimaryWidth + this.minimumSecondaryWidth;
  }
  get maximumWidth() {
    return this.maximumPrimaryWidth + this.maximumSecondaryWidth;
  }
  get minimumHeight() {
    return this.minimumPrimaryHeight + this.minimumSecondaryHeight;
  }
  get maximumHeight() {
    return this.maximumPrimaryHeight + this.maximumSecondaryHeight;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super(P1t.ID, e, P1t.VIEW_STATE_PREFERENCE_KEY, t, i, s, a, r, l, u);
    this.configurationService = o;
    this.onDidCreateEditors = this._register(new Qe());
    this._onDidChangeSizeConstraints = this._register(new CH());
    this.onDidChangeSizeConstraints = In.any(this.onDidCreateEditors.event, this._onDidChangeSizeConstraints.event);
    this._onDidChangeSelection = this._register(new Qe());
    this.onDidChangeSelection = this._onDidChangeSelection.event;
    this.primaryEditorPane = undefined;
    this.secondaryEditorPane = undefined;
    this.splitviewDisposables = this._register(new Ut());
    this.editorDisposables = this._register(new Ut());
    this.dimension = new Lu(0, 0);
    this.lastFocusedSide = undefined;
    this.orientation = this.configurationService.getValue(P1t.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? 0 : 1;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration(e => this.onConfigurationUpdated(e)));
  }
  onConfigurationUpdated(e) {
    if (e.affectsConfiguration(P1t.SIDE_BY_SIDE_LAYOUT_SETTING)) {
      this.orientation = this.configurationService.getValue(P1t.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? 0 : 1;
      if (this.splitview) {
        this.recreateSplitview();
      }
    }
  }
  recreateSplitview() {
    const e = ed(this.getContainer());
    const t = this.getSplitViewRatio();
    if (this.splitview) {
      this.splitview.el.remove();
      this.splitviewDisposables.clear();
    }
    this.createSplitView(e, t);
    this.layout(this.dimension);
  }
  getSplitViewRatio() {
    let e;
    if (this.splitview) {
      const t = this.splitview.getViewSize(0);
      const i = this.splitview.getViewSize(1);
      if (Math.abs(t - i) > 1) {
        const r = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
        e = t / r;
      }
    }
    return e;
  }
  createEditor(e) {
    e.classList.add("side-by-side-editor");
    this.secondaryEditorContainer = Ct(".side-by-side-editor-container.editor-instance");
    this.primaryEditorContainer = Ct(".side-by-side-editor-container.editor-instance");
    this.createSplitView(e);
  }
  createSplitView(e, t) {
    this.splitview = this.splitviewDisposables.add(new Xz(e, {
      orientation: this.orientation
    }));
    this.splitviewDisposables.add(this.splitview.onDidSashReset(() => this.splitview?.distributeViewSizes()));
    if (this.orientation === 1) {
      this.splitview.orthogonalEndSash = this._boundarySashes?.bottom;
    } else {
      this.splitview.orthogonalStartSash = this._boundarySashes?.left;
      this.splitview.orthogonalEndSash = this._boundarySashes?.right;
    }
    let i = tP.Distribute;
    let r = tP.Distribute;
    if (t) {
      const a = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
      i = Math.round(a * t);
      r = a - i;
      this.splitview.layout(this.orientation === 1 ? this.dimension.width : this.dimension.height);
    }
    const s = ed(this.secondaryEditorContainer);
    this.splitview.addView({
      element: s,
      layout: a => this.layoutPane(this.secondaryEditorPane, a),
      minimumSize: this.orientation === 1 ? Zye.width : Zye.height,
      maximumSize: Number.POSITIVE_INFINITY,
      onDidChange: In.None
    }, i);
    const o = ed(this.primaryEditorContainer);
    this.splitview.addView({
      element: o,
      layout: a => this.layoutPane(this.primaryEditorPane, a),
      minimumSize: this.orientation === 1 ? Zye.width : Zye.height,
      maximumSize: Number.POSITIVE_INFINITY,
      onDidChange: In.None
    }, r);
    this.updateStyles();
  }
  getTitle() {
    if (this.input) {
      return this.input.getName();
    } else {
      return _(3829, null);
    }
  }
  async setInput(e, t, i, r) {
    const s = this.input;
    await super.setInput(e, t, i, r);
    if (!s || !e.matches(s)) {
      if (s) {
        this.disposeEditors();
      }
      this.createEditors(e);
    }
    const {
      primary: o,
      secondary: a,
      viewState: l
    } = this.loadViewState(e, t, i);
    this.lastFocusedSide = l?.focus;
    if (typeof l?.ratio == "number" && this.splitview) {
      const u = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
      this.splitview.resizeView(0, Math.round(u * l.ratio));
    } else {
      this.splitview?.distributeViewSizes();
    }
    await Promise.all([this.secondaryEditorPane?.setInput(e.secondary, a, i, r), this.primaryEditorPane?.setInput(e.primary, o, i, r)]);
    if (typeof t?.target == "number") {
      this.lastFocusedSide = t.target;
    }
  }
  loadViewState(e, t, i) {
    const r = Rsy(t?.viewState) ? t?.viewState : this.loadEditorViewState(e, i);
    let s = Object.create(null);
    let o;
    if (t?.target === op.SECONDARY) {
      o = {
        ...t
      };
    } else {
      s = {
        ...t
      };
    }
    s.viewState = r?.primary;
    if (r?.secondary) {
      if (o) {
        o.viewState = r?.secondary;
      } else {
        o = {
          viewState: r.secondary
        };
      }
    }
    return {
      primary: s,
      secondary: o,
      viewState: r
    };
  }
  createEditors(e) {
    this.secondaryEditorPane = this.doCreateEditor(e.secondary, ed(this.secondaryEditorContainer));
    this.primaryEditorPane = this.doCreateEditor(e.primary, ed(this.primaryEditorContainer));
    this.layout(this.dimension);
    this._onDidChangeSizeConstraints.input = In.any(In.map(this.secondaryEditorPane.onDidChangeSizeConstraints, () => {}), In.map(this.primaryEditorPane.onDidChangeSizeConstraints, () => {}));
    this.onDidCreateEditors.fire(undefined);
    this.editorDisposables.add(this.primaryEditorPane.onDidFocus(() => this.onDidFocusChange(op.PRIMARY)));
    this.editorDisposables.add(this.secondaryEditorPane.onDidFocus(() => this.onDidFocusChange(op.SECONDARY)));
  }
  doCreateEditor(e, t) {
    const i = Di.as(Jp.EditorPane).getEditorPane(e);
    if (!i) {
      throw new Error("No editor pane descriptor for editor found");
    }
    const r = i.instantiate(this.instantiationService, this.group);
    r.create(t);
    r.setVisible(this.isVisible());
    if (egi(r)) {
      this.editorDisposables.add(r.onDidChangeSelection(s => this._onDidChangeSelection.fire(s)));
    }
    this.editorDisposables.add(r);
    return r;
  }
  onDidFocusChange(e) {
    this.lastFocusedSide = e;
    this._onDidChangeControl.fire();
  }
  getSelection() {
    const e = this.getLastFocusedEditorPane();
    if (egi(e)) {
      const t = e.getSelection();
      if (t) {
        return new sDf(t, e === this.primaryEditorPane ? op.PRIMARY : op.SECONDARY);
      }
    }
  }
  setOptions(e) {
    super.setOptions(e);
    if (typeof e?.target == "number") {
      this.lastFocusedSide = e.target;
    }
    this.getLastFocusedEditorPane()?.setOptions(e);
  }
  setEditorVisible(e) {
    this.primaryEditorPane?.setVisible(e);
    this.secondaryEditorPane?.setVisible(e);
    super.setEditorVisible(e);
  }
  clearInput() {
    super.clearInput();
    this.primaryEditorPane?.clearInput();
    this.secondaryEditorPane?.clearInput();
    this.disposeEditors();
  }
  focus() {
    super.focus();
    this.getLastFocusedEditorPane()?.focus();
  }
  getLastFocusedEditorPane() {
    if (this.lastFocusedSide === op.SECONDARY) {
      return this.secondaryEditorPane;
    } else {
      return this.primaryEditorPane;
    }
  }
  layout(e) {
    this.dimension = e;
    ed(this.splitview).layout(this.orientation === 1 ? e.width : e.height);
  }
  setBoundarySashes(e) {
    this._boundarySashes = e;
    if (this.splitview) {
      this.splitview.orthogonalEndSash = e.bottom;
    }
  }
  layoutPane(e, t) {
    e?.layout(this.orientation === 1 ? new Lu(t, this.dimension.height) : new Lu(this.dimension.width, t));
  }
  getControl() {
    return this.getLastFocusedEditorPane()?.getControl();
  }
  getPrimaryEditorPane() {
    return this.primaryEditorPane;
  }
  getSecondaryEditorPane() {
    return this.secondaryEditorPane;
  }
  tracksEditorViewState(e) {
    return e instanceof O1;
  }
  computeEditorViewState(e) {
    if (!this.input || !Zc(e, this.toEditorViewStateResource(this.input))) {
      return;
    }
    const t = this.primaryEditorPane?.getViewState();
    const i = this.secondaryEditorPane?.getViewState();
    if (!!t && !!i) {
      return {
        primary: t,
        secondary: i,
        focus: this.lastFocusedSide,
        ratio: this.getSplitViewRatio()
      };
    }
  }
  toEditorViewStateResource(e) {
    let t;
    let i;
    if (e instanceof O1) {
      t = e.primary.resource;
      i = e.secondary.resource;
    }
    if (!!i && !!t) {
      return je.from({
        scheme: "sideBySide",
        path: `${Wgt(i.toString())}${Wgt(t.toString())}`
      });
    }
  }
  updateStyles() {
    super.updateStyles();
    if (this.primaryEditorContainer) {
      if (this.orientation === 1) {
        this.primaryEditorContainer.style.borderLeftWidth = "1px";
        this.primaryEditorContainer.style.borderLeftStyle = "solid";
        this.primaryEditorContainer.style.borderLeftColor = this.getColor(M1f) ?? "";
        this.primaryEditorContainer.style.borderTopWidth = "0";
      } else {
        this.primaryEditorContainer.style.borderTopWidth = "1px";
        this.primaryEditorContainer.style.borderTopStyle = "solid";
        this.primaryEditorContainer.style.borderTopColor = this.getColor(N1f) ?? "";
        this.primaryEditorContainer.style.borderLeftWidth = "0";
      }
    }
  }
  dispose() {
    this.disposeEditors();
    super.dispose();
  }
  disposeEditors() {
    this.editorDisposables.clear();
    this.secondaryEditorPane = undefined;
    this.primaryEditorPane = undefined;
    this.lastFocusedSide = undefined;
    if (this.secondaryEditorContainer) {
      th(this.secondaryEditorContainer);
    }
    if (this.primaryEditorContainer) {
      th(this.primaryEditorContainer);
    }
  }
};
Oce = P1t = __decorate([__param(1, ea), __param(2, ln), __param(3, bo), __param(4, Hi), __param(5, Fn), __param(6, uy), __param(7, yi), __param(8, da)], Oce);
sDf = class mjb {
  constructor(e, t) {
    this.selection = e;
    this.side = t;
  }
  compare(e) {
    if (!(e instanceof mjb) || this.side !== e.side) {
      return 3;
    } else {
      return this.selection.compare(e.selection);
    }
  }
  restore(e) {
    const t = {
      ...e,
      target: this.side
    };
    return this.selection.restore(t);
  }
};
