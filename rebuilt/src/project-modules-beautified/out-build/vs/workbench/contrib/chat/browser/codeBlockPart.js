"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/codeBlockPart.js
// Offset: 32804887 (bundle byte offset)
// Size: 17114 bytes
$ly();
ri();
iKe();
fk();
qi();
yn();
rt();
zr();
Yr();
Js();
Yn();
Cu();
Oh();
VI();
TW();
pk();
ts();
Tg();
q3t();
hd();
fxa();
td();
pSh();
Pvt();
dme();
Ifa();
GAe();
git();
I_i();
xRe();
_ua();
f5f();
$yu();
Ht();
zg();
vT();
Ei();
si();
ru();
ns();
Wt();
E_();
Pd();
Fc();
zF();
Mm();
z5f();
X1e();
Tqe();
Bqe();
_E();
Wq();
Xg();
Tq();
pU();
ape = Ct;
V5f = "vscode-local-file";
AEt = 10;
xSi = class extends at {
  get verticalPadding() {
    return this.currentCodeBlockData?.renderOptions?.verticalPadding ?? AEt;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super();
    this.editorOptions = e;
    this.menuId = t;
    this.modelService = a;
    this.configurationService = l;
    this.accessibilityService = u;
    this._onDidChangeContentHeight = this._register(new Qe());
    this.onDidChangeContentHeight = this._onDidChangeContentHeight.event;
    this.currentScrollWidth = 0;
    this.isDisposed = false;
    this.element = ape(".interactive-result-code-block");
    this.resourceContextKey = this._register(s.createInstance(Ep));
    this.contextKeyService = this._register(o.createScoped(this.element));
    const d = this._register(s.createChild(new EA([wi, this.contextKeyService])));
    const m = Rt(this.element, ape(".interactive-result-editor"));
    this.editor = this.createEditor(d, m, {
      ...MMe(this.configurationService),
      readOnly: true,
      lineNumbers: "off",
      selectOnLineNumbers: true,
      scrollBeyondLastLine: false,
      lineDecorationsWidth: 8,
      dragAndDrop: false,
      padding: {
        top: this.verticalPadding,
        bottom: this.verticalPadding
      },
      mouseWheelZoom: false,
      scrollbar: {
        vertical: "hidden",
        alwaysConsumeMouseWheel: false
      },
      definitionLinkOpensInPeek: false,
      gotoLocation: {
        multiple: "goto",
        multipleDeclarations: "goto",
        multipleDefinitions: "goto",
        multipleImplementations: "goto"
      },
      ariaLabel: _(5527, null),
      overflowWidgetsDomNode: r,
      ...this.getEditorOptionsFromConfig()
    });
    const p = Rt(this.element, ape(".interactive-result-code-block-toolbar"));
    const g = this.editor.contextKeyService.createScoped(p);
    const f = this._register(d.createChild(new EA([wi, g])));
    this.toolbar = this._register(f.createInstance(nL, p, t, {
      menuOptions: {
        shouldForwardArgs: true
      }
    }));
    const A = Rt(this.element, ape(".interactive-result-vulns"));
    const w = Rt(A, ape(".interactive-result-vulns-header", undefined));
    this.vulnsButton = this._register(new pw(w, {
      buttonBackground: undefined,
      buttonBorder: undefined,
      buttonForeground: undefined,
      buttonHoverBackground: undefined,
      buttonSecondaryBackground: undefined,
      buttonSecondaryForeground: undefined,
      buttonSecondaryHoverBackground: undefined,
      buttonSeparator: undefined,
      supportIcons: true
    }));
    this.vulnsListElement = Rt(A, ape("ul.interactive-result-vulns-list"));
    this._register(this.vulnsButton.onDidClick(() => {
      const C = this.currentCodeBlockData.element;
      C.vulnerabilitiesListExpanded = !C.vulnerabilitiesListExpanded;
      this.vulnsButton.label = this.getVulnerabilitiesLabel();
      this.element.classList.toggle("chat-vulnerabilities-collapsed", !C.vulnerabilitiesListExpanded);
      this._onDidChangeContentHeight.fire();
    }));
    this._register(this.toolbar.onDidChangeDropdownVisibility(C => {
      p.classList.toggle("force-visibility", C);
    }));
    this._configureForScreenReader();
    this._register(this.accessibilityService.onDidChangeScreenReaderOptimized(() => this._configureForScreenReader()));
    this._register(this.configurationService.onDidChangeConfiguration(C => {
      if (C.affectedKeys.has("accessibility.verbosity.panelChat")) {
        this._configureForScreenReader();
      }
    }));
    this._register(this.editorOptions.onDidChange(() => {
      this.editor.updateOptions(this.getEditorOptionsFromConfig());
    }));
    this._register(this.editor.onDidScrollChange(C => {
      this.currentScrollWidth = C.scrollWidth;
    }));
    this._register(this.editor.onDidContentSizeChange(C => {
      if (C.contentHeightChanged) {
        this._onDidChangeContentHeight.fire();
      }
    }));
    this._register(this.editor.onDidBlurEditorWidget(() => {
      this.element.classList.remove("focused");
      HV.get(this.editor)?.stopHighlighting();
      this.clearWidgets();
    }));
    this._register(this.editor.onDidFocusEditorWidget(() => {
      this.element.classList.add("focused");
      HV.get(this.editor)?.restoreViewState(true);
    }));
    if (i.onDidScroll) {
      this._register(i.onDidScroll(C => {
        this.clearWidgets();
      }));
    }
  }
  dispose() {
    this.isDisposed = true;
    super.dispose();
  }
  get uri() {
    return this.editor.getModel()?.uri;
  }
  createEditor(e, t, i) {
    return this._register(e.createInstance(WS, t, i, {
      isSimpleWidget: false,
      contributions: SC.getSomeEditorContributions([jZ.ID, Gye, j9.ID, HV.ID, i$e.ID, vKe.ID, Art.ID, ex.ID, IQ.ID, C3.ID, L$e.ID, aR.ID, tx.ID, iPe.ID, DMe.ID, wrt.ID])
    }));
  }
  focus() {
    this.editor.focus();
  }
  updatePaddingForLayout() {
    const e = this.currentScrollWidth > this.editor.getLayoutInfo().contentWidth;
    const t = this.editor.getLayoutInfo().horizontalScrollbarHeight;
    const i = e ? Math.max(this.verticalPadding - t, 2) : this.verticalPadding;
    this.editor.updateOptions({
      padding: {
        top: this.verticalPadding,
        bottom: i
      }
    });
  }
  _configureForScreenReader() {
    const e = this.toolbar.getElement();
    if (this.accessibilityService.isScreenReaderOptimized()) {
      e.style.display = "block";
      e.ariaLabel = this.configurationService.getValue("accessibility.verbosity.panelChat") ? _(5528, null) : _(5529, null);
    } else {
      e.style.display = "";
    }
  }
  getEditorOptionsFromConfig() {
    return {
      wordWrap: this.editorOptions.configuration.resultEditor.wordWrap,
      fontLigatures: this.editorOptions.configuration.resultEditor.fontLigatures,
      bracketPairColorization: this.editorOptions.configuration.resultEditor.bracketPairColorization,
      fontFamily: this.editorOptions.configuration.resultEditor.fontFamily === "default" ? jI.fontFamily : this.editorOptions.configuration.resultEditor.fontFamily,
      fontSize: this.editorOptions.configuration.resultEditor.fontSize,
      fontWeight: this.editorOptions.configuration.resultEditor.fontWeight,
      lineHeight: this.editorOptions.configuration.resultEditor.lineHeight,
      ...this.currentCodeBlockData?.renderOptions?.editorOptions
    };
  }
  layout(e) {
    const t = this.getContentHeight();
    let i = t;
    if (this.currentCodeBlockData?.renderOptions?.maxHeightInLines) {
      i = Math.min(t, this.editor.getOption(68) * this.currentCodeBlockData?.renderOptions?.maxHeightInLines);
    }
    e = e - 2 - (this.currentCodeBlockData?.renderOptions?.reserveWidth ?? 0);
    this.editor.layout({
      width: e,
      height: i
    });
    this.updatePaddingForLayout();
  }
  getContentHeight() {
    if (this.currentCodeBlockData?.range) {
      const e = this.currentCodeBlockData.range.endLineNumber - this.currentCodeBlockData.range.startLineNumber + 1;
      const t = this.editor.getOption(68);
      return e * t;
    }
    return this.editor.getContentHeight();
  }
  async render(e, t) {
    this.currentCodeBlockData = e;
    if (e.parentContextKeyService) {
      this.contextKeyService.updateParent(e.parentContextKeyService);
    }
    if (this.getEditorOptionsFromConfig().wordWrap === "on") {
      this.layout(t);
    }
    await this.updateEditor(e);
    if (!this.isDisposed) {
      this.editor.updateOptions({
        ...this.getEditorOptionsFromConfig(),
        ariaLabel: _(5530, null, e.codeBlockIndex + 1)
      });
      this.layout(t);
      this.toolbar.setAriaLabel(_(5531, null, e.codeBlockIndex + 1));
      if (e.renderOptions?.hideToolbar) {
        Ng(this.toolbar.getElement());
      } else {
        gv(this.toolbar.getElement());
      }
      if (e.vulns?.length && rA(e.element)) {
        th(this.vulnsListElement);
        this.element.classList.remove("no-vulns");
        this.element.classList.toggle("chat-vulnerabilities-collapsed", !e.element.vulnerabilitiesListExpanded);
        Rt(this.vulnsListElement, ...e.vulns.map(i => ape("li", undefined, ape("span.chat-vuln-title", undefined, i.title), " " + i.description)));
        this.vulnsButton.label = this.getVulnerabilitiesLabel();
      } else {
        this.element.classList.add("no-vulns");
      }
    }
  }
  reset() {
    this.clearWidgets();
  }
  clearWidgets() {
    ex.get(this.editor)?.hideContentHover();
    IQ.get(this.editor)?.hideGlyphHover();
  }
  async updateEditor(e) {
    const t = await e.textModel;
    this.editor.setModel(t);
    if (e.range) {
      this.editor.setSelection(e.range);
      this.editor.revealRangeInCenter(e.range, 1);
    }
    this.toolbar.context = {
      code: t.getTextBuffer().getValueInRange(e.range ?? t.getFullModelRange(), 0),
      codeBlockIndex: e.codeBlockIndex,
      element: e.element,
      languageId: t.getLanguageId(),
      codemapperUri: e.codemapperUri
    };
    this.resourceContextKey.set(t.uri);
  }
  getVulnerabilitiesLabel() {
    if (!this.currentCodeBlockData || !this.currentCodeBlockData.vulns) {
      return "";
    } else {
      return `${this.currentCodeBlockData.vulns.length > 1 ? _(5532, null, this.currentCodeBlockData.vulns.length) : _(5533, null, 1)} $(${(i => i.vulnerabilitiesListExpanded ? Be.chevronDown : Be.chevronRight)(this.currentCodeBlockData.element).id})`;
    }
  }
};
xSi = __decorate([__param(4, ln), __param(5, wi), __param(6, Il), __param(7, Fn), __param(8, Cf)], xSi);
Cxa = class extends at {
  constructor(e, t) {
    super();
    this._modelService = t;
    this._register(e.registerTextModelContentProvider(_n.vscodeChatCodeBlock, this));
  }
  async provideTextContent(e) {
    const t = this._modelService.getModel(e);
    return t || this._modelService.createModel("", null, e);
  }
};
Cxa = __decorate([__param(0, El), __param(1, Il)], Cxa);
Sxa = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.options = e;
    this.menuId = t;
    this.modelService = a;
    this.configurationService = l;
    this.accessibilityService = u;
    this.labelService = d;
    this.openerService = m;
    this._onDidChangeContentHeight = this._register(new Qe());
    this.onDidChangeContentHeight = this._onDidChangeContentHeight.event;
    this._lastDiffEditorViewModel = this._store.add(new uo());
    this.currentScrollWidth = 0;
    this.element = ape(".interactive-result-code-block");
    this.element.classList.add("compare");
    this.messageElement = Rt(this.element, ape(".message"));
    this.messageElement.setAttribute("role", "status");
    this.messageElement.tabIndex = 0;
    this.contextKeyService = this._register(o.createScoped(this.element));
    const p = this._register(s.createChild(new EA([wi, this.contextKeyService], [p2, new class {
      show(C, x) {
        return EIc;
      }
      async showWhile(C, x) {
        await C;
      }
    }()])));
    const g = Rt(this.element, ape(".interactive-result-header.show-file-icons"));
    const f = Rt(this.element, ape(".interactive-result-editor"));
    this.diffEditor = this.createDiffEditor(p, f, {
      ...MMe(this.configurationService),
      lineNumbers: "on",
      selectOnLineNumbers: true,
      scrollBeyondLastLine: false,
      lineDecorationsWidth: 12,
      dragAndDrop: false,
      padding: {
        top: AEt,
        bottom: AEt
      },
      mouseWheelZoom: false,
      scrollbar: {
        vertical: "hidden",
        alwaysConsumeMouseWheel: false
      },
      definitionLinkOpensInPeek: false,
      gotoLocation: {
        multiple: "goto",
        multipleDeclarations: "goto",
        multipleDefinitions: "goto",
        multipleImplementations: "goto"
      },
      ariaLabel: _(5534, null),
      overflowWidgetsDomNode: r,
      ...this.getEditorOptionsFromConfig()
    });
    this.resourceLabel = this._register(p.createInstance(RMe, g, {
      supportIcons: true
    }));
    const A = this.diffEditor.getModifiedEditor().contextKeyService.createScoped(g);
    const w = this._register(p.createChild(new EA([wi, A])));
    this.toolbar = this._register(w.createInstance(nL, g, t, {
      menuOptions: {
        shouldForwardArgs: true
      }
    }));
    this._configureForScreenReader();
    this._register(this.accessibilityService.onDidChangeScreenReaderOptimized(() => this._configureForScreenReader()));
    this._register(this.configurationService.onDidChangeConfiguration(C => {
      if (C.affectedKeys.has("accessibility.verbosity.panelChat")) {
        this._configureForScreenReader();
      }
    }));
    this._register(this.options.onDidChange(() => {
      this.diffEditor.updateOptions(this.getEditorOptionsFromConfig());
    }));
    this._register(this.diffEditor.getModifiedEditor().onDidScrollChange(C => {
      this.currentScrollWidth = C.scrollWidth;
    }));
    this._register(this.diffEditor.onDidContentSizeChange(C => {
      if (C.contentHeightChanged) {
        this._onDidChangeContentHeight.fire();
      }
    }));
    this._register(this.diffEditor.getModifiedEditor().onDidBlurEditorWidget(() => {
      this.element.classList.remove("focused");
      HV.get(this.diffEditor.getModifiedEditor())?.stopHighlighting();
      this.clearWidgets();
    }));
    this._register(this.diffEditor.getModifiedEditor().onDidFocusEditorWidget(() => {
      this.element.classList.add("focused");
      HV.get(this.diffEditor.getModifiedEditor())?.restoreViewState(true);
    }));
    if (i.onDidScroll) {
      this._register(i.onDidScroll(C => {
        this.clearWidgets();
      }));
    }
  }
  get uri() {
    return this.diffEditor.getModifiedEditor().getModel()?.uri;
  }
  createDiffEditor(e, t, i) {
    const r = {
      isSimpleWidget: false,
      contributions: SC.getSomeEditorContributions([jZ.ID, Gye, j9.ID, HV.ID, i$e.ID, vKe.ID, Art.ID, ex.ID, IQ.ID, L$e.ID])
    };
    return this._register(e.createInstance(JB, t, {
      scrollbar: {
        useShadows: false,
        alwaysConsumeMouseWheel: false,
        ignoreHorizontalScrollbarInContentHeight: true
      },
      renderMarginRevertIcon: false,
      diffCodeLens: false,
      scrollBeyondLastLine: false,
      stickyScroll: {
        enabled: false
      },
      originalAriaLabel: _(5535, null),
      modifiedAriaLabel: _(5536, null),
      diffAlgorithm: "advanced",
      readOnly: false,
      isInEmbeddedEditor: true,
      useInlineViewWhenSpaceIsLimited: true,
      experimental: {
        useTrueInlineView: true
      },
      renderSideBySideInlineBreakpoint: 300,
      renderOverviewRuler: false,
      compactMode: true,
      hideUnchangedRegions: {
        enabled: true,
        contextLineCount: 1
      },
      renderGutterMenu: false,
      lineNumbersMinChars: 1,
      ...i
    }, {
      originalEditor: r,
      modifiedEditor: r
    }));
  }
  focus() {
    this.diffEditor.focus();
  }
  updatePaddingForLayout() {
    const e = this.currentScrollWidth > this.diffEditor.getModifiedEditor().getLayoutInfo().contentWidth;
    const t = this.diffEditor.getModifiedEditor().getLayoutInfo().horizontalScrollbarHeight;
    const i = e ? Math.max(AEt - t, 2) : AEt;
    this.diffEditor.updateOptions({
      padding: {
        top: AEt,
        bottom: i
      }
    });
  }
  _configureForScreenReader() {
    const e = this.toolbar.getElement();
    if (this.accessibilityService.isScreenReaderOptimized()) {
      e.style.display = "block";
      e.ariaLabel = this.configurationService.getValue("accessibility.verbosity.panelChat") ? _(5537, null) : _(5538, null);
    } else {
      e.style.display = "";
    }
  }
  getEditorOptionsFromConfig() {
    return {
      wordWrap: this.options.configuration.resultEditor.wordWrap,
      fontLigatures: this.options.configuration.resultEditor.fontLigatures,
      bracketPairColorization: this.options.configuration.resultEditor.bracketPairColorization,
      fontFamily: this.options.configuration.resultEditor.fontFamily === "default" ? jI.fontFamily : this.options.configuration.resultEditor.fontFamily,
      fontSize: this.options.configuration.resultEditor.fontSize,
      fontWeight: this.options.configuration.resultEditor.fontWeight,
      lineHeight: this.options.configuration.resultEditor.lineHeight
    };
  }
  layout(e) {
    const i = DH(this.toolbar.getElement());
    const r = this.diffEditor.getModel() ? this.diffEditor.getContentHeight() : DH(this.messageElement);
    const s = new Lu(e - 2, i + r);
    this.element.style.height = `${s.height}px`;
    this.element.style.width = `${s.width}px`;
    this.diffEditor.layout(s.with(undefined, r - 2));
    this.updatePaddingForLayout();
  }
  async render(e, t, i) {
    if (e.parentContextKeyService) {
      this.contextKeyService.updateParent(e.parentContextKeyService);
    }
    if (this.options.configuration.resultEditor.wordWrap === "on") {
      this.layout(t);
    }
    await this.updateEditor(e, i);
    this.layout(t);
    this.diffEditor.updateOptions({
      ariaLabel: _(5539, null)
    });
    this.resourceLabel.element.setFile(e.edit.uri, {
      fileKind: xg.FILE,
      fileDecorations: {
        colors: true,
        badges: false
      }
    });
  }
  reset() {
    this.clearWidgets();
  }
  clearWidgets() {
    ex.get(this.diffEditor.getOriginalEditor())?.hideContentHover();
    ex.get(this.diffEditor.getModifiedEditor())?.hideContentHover();
    IQ.get(this.diffEditor.getOriginalEditor())?.hideGlyphHover();
    IQ.get(this.diffEditor.getModifiedEditor())?.hideGlyphHover();
  }
  async updateEditor(e, t) {
    if (!rA(e.element)) {
      return;
    }
    const i = !!(e.edit.state?.applied ?? 0);
    qa.editApplied.bindTo(this.contextKeyService).set(i);
    this.element.classList.toggle("no-diff", i);
    if (i) {
      Kd(e.edit.state?.applied);
      const s = this.labelService.getUriLabel(e.edit.uri, {
        relative: true,
        noPrefix: true
      });
      let o;
      if (e.edit.state.applied === 1) {
        o = _(5540, null, s);
      } else if (e.edit.state.applied < 0) {
        o = _(5541, null, s);
      } else {
        o = _(5542, null, e.edit.state.applied, s);
      }
      const a = nKe(o, {
        renderCodeSegments: true,
        actionHandler: {
          callback: () => {
            this.openerService.open(e.edit.uri, {
              fromUserGesture: true,
              allowCommands: false
            });
          },
          disposables: this._store
        }
      });
      um(this.messageElement, a);
    }
    const r = await e.diffData;
    if (!i && r) {
      const s = this.diffEditor.createViewModel({
        original: r.original,
        modified: r.modified
      });
      await s.waitForDiff();
      if (t.isCancellationRequested) {
        return;
      }
      const o = In.any(r.original.onWillDispose, r.modified.onWillDispose)(() => {
        this.diffEditor.setModel(null);
      });
      this.diffEditor.setModel(s);
      this._lastDiffEditorViewModel.value = H_(o, s);
    } else {
      this.diffEditor.setModel(null);
      this._lastDiffEditorViewModel.value = undefined;
      this._onDidChangeContentHeight.fire();
    }
    this.toolbar.context = {
      edit: e.edit,
      element: e.element,
      diffEditor: this.diffEditor
    };
  }
};
Sxa = __decorate([__param(4, ln), __param(5, wi), __param(6, Il), __param(7, Fn), __param(8, Cf), __param(9, Ol), __param(10, Ja)], Sxa);
kxa = class {
  constructor(e, t, i) {
    this.modelService = e;
    this.editorService = t;
    this.dialogService = i;
    this._sha1 = new vSi();
  }
  async apply(e, t, i) {
    if (!e.response.value.includes(t) || t.state?.applied) {
      return;
    }
    if (!i) {
      for (const s of this.editorService.listDiffEditors()) {
        if (!s.getContainerDomNode().isConnected) {
          continue;
        }
        const o = s.getModel();
        if (!o || !Zc(o.original.uri, t.uri) || o.modified.uri.scheme !== _n.vscodeChatCodeCompareBlock) {
          i = s;
          break;
        }
      }
    }
    const r = i ? await this._applyWithDiffEditor(i, t) : await this._apply(t);
    e.setEditApplied(t, r);
  }
  async _applyWithDiffEditor(e, t) {
    const i = e.getModel();
    if (!i) {
      return 0;
    }
    const r = e.getDiffComputationResult();
    if (!r || r.identical || !(await this._checkSha1(i.original, t))) {
      return 0;
    }
    const s = new bKe(i.modified);
    const o = r.changes2.map(a => a.toRangeMapping().toTextEdit(s).toSingleEditOperation());
    i.original.pushStackElement();
    i.original.pushEditOperations(null, o, () => null);
    i.original.pushStackElement();
    return o.length;
  }
  async _apply(e) {
    const t = await this.modelService.createModelReference(e.uri);
    try {
      if (!(await this._checkSha1(t.object.textEditorModel, e))) {
        return 0;
      }
      t.object.textEditorModel.pushStackElement();
      let i = 0;
      for (const r of e.edits) {
        const s = r.map(Zbe.asEditOperation);
        t.object.textEditorModel.pushEditOperations(null, s, () => null);
        i += s.length;
      }
      t.object.textEditorModel.pushStackElement();
      return i;
    } finally {
      t.dispose();
    }
  }
  async _checkSha1(e, t) {
    return !t.state?.sha1 || !this._sha1.computeSHA1(e) || this._sha1.computeSHA1(e) === t.state.sha1 || !!(await this.dialogService.confirm({
      message: _(5543, null),
      detail: _(5544, null)
    })).confirmed;
  }
  discard(e, t) {
    if (e.response.value.includes(t)) {
      if (!t.state?.applied) {
        e.setEditApplied(t, -1);
      }
    }
  }
};
kxa = __decorate([__param(0, El), __param(1, fl), __param(2, Ml)], kxa);
