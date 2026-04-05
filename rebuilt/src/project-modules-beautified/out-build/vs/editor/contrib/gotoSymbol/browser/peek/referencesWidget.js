"use strict";

// Module: out-build/vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget.js
// Offset: 25054234 (bundle byte offset)
// Size: 12015 bytes
ri();
qne();
xf();
yn();
rt();
zr();
Yr();
O0A();
yq();
ts();
bv();
WE();
td();
H0A();
wq();
Ht();
Wt();
ka();
Pd();
Rf();
Io();
eCt();
dz();
Fc();
eV();
Po();
NWl();
Ov();
nl();
Jr();
qi();
J0();
gE();
of();
Obg = class HWb {
  static {
    this.DecorationOptions = Zh.register({
      description: "reference-decoration",
      stickiness: 1,
      className: "reference-decoration"
    });
  }
  constructor(e, t) {
    this._editor = e;
    this._model = t;
    this._decorations = new Map();
    this._decorationIgnoreSet = new Set();
    this._callOnDispose = new Ut();
    this._callOnModelChange = new Ut();
    this._callOnDispose.add(this._editor.onDidChangeModel(() => this._onModelChanged()));
    this._onModelChanged();
  }
  dispose() {
    this._callOnModelChange.dispose();
    this._callOnDispose.dispose();
    this.removeDecorations();
  }
  _onModelChanged() {
    this._callOnModelChange.clear();
    const e = this._editor.getModel();
    if (e) {
      for (const t of this._model.references) {
        if (t.uri.toString() === e.uri.toString()) {
          this._addDecorations(t.parent);
          return;
        }
      }
    }
  }
  _addDecorations(e) {
    if (!this._editor.hasModel()) {
      return;
    }
    this._callOnModelChange.add(this._editor.getModel().onDidChangeDecorations(() => this._onDecorationChanged()));
    const t = [];
    const i = [];
    for (let r = 0, s = e.children.length; r < s; r++) {
      const o = e.children[r];
      if (!this._decorationIgnoreSet.has(o.id)) {
        if (o.uri.toString() === this._editor.getModel().uri.toString()) {
          t.push({
            range: o.range,
            options: HWb.DecorationOptions
          });
          i.push(r);
        }
      }
    }
    this._editor.changeDecorations(r => {
      const s = r.deltaDecorations([], t);
      for (let o = 0; o < s.length; o++) {
        this._decorations.set(s[o], e.children[i[o]]);
      }
    });
  }
  _onDecorationChanged() {
    const e = [];
    const t = this._editor.getModel();
    if (t) {
      for (const [i, r] of this._decorations) {
        const s = t.getDecorationRange(i);
        if (!s) {
          continue;
        }
        let o = false;
        if (!Zt.equalsRange(s, r.range)) {
          if (Zt.spansMultipleLines(s)) {
            o = true;
          } else {
            const a = r.range.endColumn - r.range.startColumn;
            const l = s.endColumn - s.startColumn;
            if (a !== l) {
              o = true;
            }
          }
          if (o) {
            this._decorationIgnoreSet.add(r.id);
            e.push(i);
          } else {
            r.range = s;
          }
        }
      }
      for (let i = 0, r = e.length; i < r; i++) {
        this._decorations.delete(e[i]);
      }
      this._editor.removeDecorations(e);
    }
  }
  removeDecorations() {
    this._editor.removeDecorations([...this._decorations.keys()]);
    this._decorations.clear();
  }
};
Ubg = class {
  constructor() {
    this.ratio = 0.7;
    this.heightInLines = 18;
  }
  static fromJSON(n) {
    let e;
    let t;
    try {
      const i = JSON.parse(n);
      e = i.ratio;
      t = i.heightInLines;
    } catch {}
    return {
      ratio: e || 0.7,
      heightInLines: t || 18
    };
  }
};
$bg = class extends Eq {};
sla = class {
  constructor(e) {
    this.labelService = e;
    this.disposables = new Ut();
  }
  getDragURI(e) {
    if (e instanceof X0t) {
      return e.uri.toString();
    } else if (e instanceof tNe) {
      return b2(e.uri, e.range).toString();
    } else {
      return null;
    }
  }
  getDragLabel(e) {
    if (e.length === 0) {
      return undefined;
    } else {
      return e.map(i => this.labelService.getUriBasenameLabel(i.uri)).join(", ");
    }
  }
  onDragStart(e, t) {
    if (!t.dataTransfer) {
      return;
    }
    const r = e.elements.map(s => this.getDragURI(s)).filter(Boolean);
    if (r.length) {
      t.dataTransfer.setData(fT.RESOURCES, JSON.stringify(r));
      t.dataTransfer.setData(fT.TEXT, r.join(`
`));
    }
  }
  onDragOver() {
    return false;
  }
  drop() {}
  dispose() {
    this.disposables.dispose();
  }
};
sla = __decorate([__param(0, Ol)], sla);
ola = class extends nNe {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    super(e, {
      showFrame: false,
      showArrow: true,
      isResizeable: true,
      isAccessible: true,
      supportOnTitleClick: true
    }, o);
    this._defaultTreeKeyboardSupport = t;
    this.layoutData = i;
    this._textModelResolverService = s;
    this._instantiationService = o;
    this._peekViewService = a;
    this._uriLabel = l;
    this._keybindingService = u;
    this._outlineModelService = d;
    this.composerService = m;
    this._textModelService = p;
    this._disposeOnNewModel = new Ut();
    this._callOnDispose = new Ut();
    this._onDidSelectReference = new Qe();
    this.onDidSelectReference = this._onDidSelectReference.event;
    this._dim = new Lu(0, 0);
    this._isClosing = false;
    this._applyTheme(r.getColorTheme());
    this._callOnDispose.add(r.onDidColorThemeChange(this._applyTheme.bind(this)));
    this._peekViewService.addExclusiveWidget(e, this);
    this.create();
  }
  get isClosing() {
    return this._isClosing;
  }
  dispose() {
    this._isClosing = true;
    this.setModel(undefined);
    this._callOnDispose.dispose();
    this._disposeOnNewModel.dispose();
    Bo(this._preview);
    Bo(this._previewNotAvailableMessage);
    Bo(this._tree);
    Bo(this._previewModelReference);
    this._splitView.dispose();
    super.dispose();
  }
  _applyTheme(e) {
    const t = e.getColor(O1e) || Xr.transparent;
    this.style({
      arrowColor: t,
      frameColor: t,
      headerBackgroundColor: e.getColor(Cet) || Xr.transparent,
      primaryHeadingColor: e.getColor(ket),
      secondaryHeadingColor: e.getColor(Eet)
    });
  }
  show(e) {
    super.show(e, this.layoutData.heightInLines || 18);
  }
  focusOnReferenceTree() {
    this._tree.domFocus();
  }
  focusOnPreviewEditor() {
    this._preview.focus();
  }
  isPreviewEditorFocused() {
    return this._preview.hasTextFocus();
  }
  getPreviewEditor() {
    return this._preview;
  }
  _onTitleClick(e) {
    if (this._preview && this._preview.getModel()) {
      this._onDidSelectReference.fire({
        element: this._getFocusedReference(),
        kind: e.ctrlKey || e.metaKey || e.altKey ? "side" : "open",
        source: "title"
      });
    }
  }
  _fillHead(e, t) {
    this._titleElement = Ct(".peekview-title");
    if (this.options.supportOnTitleClick) {
      this._titleElement.classList.add("clickable");
      _f(this._titleElement, "click", o => this._onTitleClick(o));
    }
    Rt(this._headElement, this._titleElement);
    this._fillTitleIcon(this._titleElement);
    this._primaryHeading = Ct("span.filename");
    this._secondaryHeading = Ct("span.dirname");
    this._metaHeading = Ct("span.meta");
    Rt(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
    const i = Ct(".peekview-actions");
    Rt(this._headElement, i);
    const r = this._getActionBarOptions();
    this._actionbarWidget = new Gf(i, r);
    this._disposables.add(this._actionbarWidget);
    if (!this._actionbarWidget) {
      return;
    }
    const s = new Hs("peekview.composer", _(1224, null), `peekview-composer-button ${Qt.asClassName(Be.symbolMethod)}`, true, () => {
      this._openReferencesInComposer();
    });
    this._disposables.add(s);
    this._actionbarWidget.push(s, {
      label: false,
      icon: true,
      index: 0
    });
    if (!t) {
      this._actionbarWidget.push(new Hs("peekview.close", _(1225, null), Qt.asClassName(Be.close), true, () => {
        this.dispose();
        return Promise.resolve();
      }), {
        label: false,
        icon: true
      });
    }
  }
  async _openReferencesInComposer() {
    if (!this._model) {
      return;
    }
    const e = [];
    for (const i of this._model.groups) {
      const r = i.uri;
      for (const s of i.children) {
        let o;
        o = await ila(this._textModelService, r, new Zt({
          startLineNumber: s.range.startLineNumber - uun,
          startColumn: 1,
          endLineNumber: s.range.endLineNumber + uun + 1,
          endColumn: 1
        }));
        if (o) {
          e.push(o);
        }
      }
    }
    const t = await this.composerService.createComposer({});
    if (t && e.length > 0) {
      this.composerService.addCodeSelectionsWithInlineMentionsBatch(t.composerId, e, "editor");
    }
    this.dispose();
  }
  _fillBody(e) {
    this.setCssClass("reference-zone-widget");
    this._messageContainer = Rt(e, Ct("div.messages"));
    Ng(this._messageContainer);
    this._splitView = new Xz(e, {
      orientation: 1
    });
    this._previewContainer = Rt(e, Ct("div.preview.inline"));
    const t = {
      scrollBeyondLastLine: false,
      scrollbar: {
        verticalScrollbarSize: 14,
        horizontal: "auto",
        useShadows: true,
        verticalHasArrows: false,
        horizontalHasArrows: false,
        alwaysConsumeMouseWheel: true
      },
      overviewRulerLanes: 2,
      fixedOverflowWidgets: true,
      minimap: {
        enabled: false
      }
    };
    this._preview = this._instantiationService.createInstance(q3, this._previewContainer, t, {}, this.editor);
    Ng(this._previewContainer);
    this._previewNotAvailableMessage = this._instantiationService.createInstance(N6, _(1226, null), o_, N6.DEFAULT_CREATION_OPTIONS, null, false, false);
    this._treeContainer = Rt(e, Ct("div.ref-tree.inline"));
    const i = {
      keyboardSupport: this._defaultTreeKeyboardSupport,
      accessibilityProvider: new qgg(),
      keyboardNavigationLabelProvider: this._instantiationService.createInstance(Uca),
      identityProvider: new Ugg(),
      openOnSingleClick: true,
      selectionNavigation: true,
      overrideStyles: {
        listBackground: wpi
      },
      dnd: this._instantiationService.createInstance(sla)
    };
    if (this._defaultTreeKeyboardSupport) {
      this._callOnDispose.add(_f(this._treeContainer, "keydown", s => {
        if (s.equals(9)) {
          this._keybindingService.dispatchEvent(s, s.target);
          s.stopPropagation();
        }
      }, true));
    }
    this._tree = this._instantiationService.createInstance($bg, "ReferencesWidget", this._treeContainer, new Ogg(), [this._instantiationService.createInstance(Fpi), this._instantiationService.createInstance(mWl)], this._instantiationService.createInstance(Oca), i);
    this._splitView.addView({
      onDidChange: In.None,
      element: this._previewContainer,
      minimumSize: 200,
      maximumSize: Number.MAX_VALUE,
      layout: s => {
        this._preview.layout({
          height: this._dim.height,
          width: s
        });
      }
    }, tP.Distribute);
    this._splitView.addView({
      onDidChange: In.None,
      element: this._treeContainer,
      minimumSize: 100,
      maximumSize: Number.MAX_VALUE,
      layout: s => {
        this._treeContainer.style.height = `${this._dim.height}px`;
        this._treeContainer.style.width = `${s}px`;
        this._tree.layout(this._dim.height, s);
      }
    }, tP.Distribute);
    this._disposables.add(this._splitView.onDidSashChange(() => {
      if (this._dim.width) {
        this.layoutData.ratio = this._splitView.getViewSize(0) / this._dim.width;
      }
    }, undefined));
    const r = (s, o) => {
      if (s instanceof tNe) {
        if (o === "show") {
          this._revealReference(s, false);
        }
        this._onDidSelectReference.fire({
          element: s,
          kind: o,
          source: "tree"
        });
      }
    };
    this._disposables.add(this._tree.onDidOpen(s => {
      if (s.sideBySide) {
        r(s.element, "side");
      } else if (s.editorOptions.pinned) {
        r(s.element, "goto");
      } else {
        r(s.element, "show");
      }
    }));
    Ng(this._treeContainer);
  }
  _onWidth(e) {
    if (this._dim) {
      this._doLayoutBody(this._dim.height, e);
    }
  }
  _doLayoutBody(e, t) {
    super._doLayoutBody(e, t);
    this._dim = new Lu(t, e);
    this.layoutData.heightInLines = this._viewZone ? this._viewZone.heightInLines : this.layoutData.heightInLines;
    this._splitView.layout(t);
    this._splitView.resizeView(0, t * this.layoutData.ratio);
  }
  setSelection(e) {
    return this._revealReference(e, true).then(() => {
      if (this._model) {
        this._tree.setSelection([e]);
        this._tree.setFocus([e]);
      }
    });
  }
  setModel(e) {
    this._disposeOnNewModel.clear();
    this._model = e;
    if (this._model) {
      return this._onNewModel();
    } else {
      return Promise.resolve();
    }
  }
  _onNewModel() {
    if (this._model) {
      if (this._model.isEmpty) {
        this.setTitle("");
        this._messageContainer.innerText = _(1227, null);
        gv(this._messageContainer);
        return Promise.resolve(undefined);
      } else {
        Ng(this._messageContainer);
        this._decorationsManager = new Obg(this._preview, this._model);
        this._disposeOnNewModel.add(this._decorationsManager);
        this._disposeOnNewModel.add(this._model.onDidChangeReferenceRange(e => this._tree.rerender(e)));
        this._disposeOnNewModel.add(this._preview.onMouseDown(e => {
          const {
            event: t,
            target: i
          } = e;
          if (t.detail !== 2) {
            return;
          }
          const r = this._getFocusedReference();
          if (r) {
            this._onDidSelectReference.fire({
              element: {
                uri: r.uri,
                range: i.range
              },
              kind: t.ctrlKey || t.metaKey || t.altKey ? "side" : "open",
              source: "editor"
            });
          }
        }));
        this.container.classList.add("results-loaded");
        gv(this._treeContainer);
        gv(this._previewContainer);
        this._splitView.layout(this._dim.width);
        this.focusOnReferenceTree();
        return this._tree.setInput(this._model.groups.length === 1 ? this._model.groups[0] : this._model);
      }
    } else {
      return Promise.resolve(undefined);
    }
  }
  _getFocusedReference() {
    const [e] = this._tree.getFocus();
    if (e instanceof tNe) {
      return e;
    }
    if (e instanceof X0t && e.children.length > 0) {
      return e.children[0];
    }
  }
  async revealReference(e) {
    await this._revealReference(e, false);
    this._onDidSelectReference.fire({
      element: e,
      kind: "goto",
      source: "tree"
    });
  }
  async _revealReference(e, t) {
    if (this._revealedReference === e) {
      return;
    }
    this._revealedReference = e;
    if (e.uri.scheme !== _n.inMemory) {
      const o = await this._textModelResolverService.createModelReference(e.uri);
      try {
        const a = o.object.textEditorModel;
        const l = await this._outlineModelService.getOrCreate(a, Cs.None);
        const d = PWl(l.getTopLevelSymbols(), 7).reduce((m, p) => (p.kind === 11 || p.kind === 5 || p.kind === 4) && (m === null || p.level > m.level) && Zt.lift(p.range).containsRange(Zt.lift(e.range)) ? p : m, null);
        this.setTitle(GP(e.uri), this._uriLabel.getUriLabel(Td(e.uri)) + (d !== null ? " > " + d.name : ""));
      } finally {
        o.dispose();
      }
    } else {
      this.setTitle(_(1228, null));
    }
    const i = this._textModelResolverService.createModelReference(e.uri);
    if (this._tree.getInput() === e.parent) {
      this._tree.reveal(e);
    } else {
      if (t) {
        this._tree.reveal(e.parent);
      }
      await this._tree.expand(e.parent);
      this._tree.reveal(e);
    }
    const r = await i;
    if (!this._model) {
      r.dispose();
      return;
    }
    Bo(this._previewModelReference);
    const s = r.object;
    if (s) {
      const o = this._preview.getModel() === s.textEditorModel ? 0 : 1;
      const a = Zt.lift(e.range).collapseToStart();
      this._previewModelReference = r;
      this._preview.setModel(s.textEditorModel);
      this._preview.setSelection(a);
      this._preview.revealRangeInCenter(a, o);
    } else {
      this._preview.setModel(this._previewNotAvailableMessage);
      r.dispose();
    }
  }
};
ola = __decorate([__param(3, bo), __param(4, El), __param(5, ln), __param(6, kun), __param(7, Ol), __param(8, mo), __param(9, Gne), __param(10, ag), __param(11, El)], ola);
