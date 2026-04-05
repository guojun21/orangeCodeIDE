"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/codeCell.js
// Offset: 33290078 (bundle byte offset)
// Size: 12960 bytes
Ht();
ri();
vr();
Po();
qi();
yn();
rt();
sE();
oa();
Jr();
Ku();
LSe();
l8e();
Ei();
Wt();
ka();
Fc();
uD();
Sb();
l2e();
uki();
vdy();
Ady();
LTa = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super();
    this.notebookEditor = e;
    this.viewCell = t;
    this.templateData = i;
    this.editorPool = r;
    this.instantiationService = s;
    this.keybindingService = o;
    this.languageService = l;
    this.configurationService = u;
    this._isDisposed = false;
    this._cellEditorOptions = this._register(new xbn(this.notebookEditor.getBaseCellEditorOptions(t.language), this.notebookEditor.notebookOptions, this.configurationService));
    this._outputContainerRenderer = this.instantiationService.createInstance(RTa, e, t, i, {
      limit: iTa
    });
    this.cellParts = this._register(i.cellParts.concatContentPart([this._cellEditorOptions, this._outputContainerRenderer], As(e.getDomNode())));
    const m = this.calculateInitEditorHeight();
    this.initializeEditor(m);
    this._renderedInputCollapseState = false;
    this.registerNotebookEditorListeners();
    this.registerViewCellLayoutChange();
    this.registerCellEditorEventListeners();
    this.registerMouseListener();
    this._register(In.any(this.viewCell.onDidStartExecution, this.viewCell.onDidStopExecution)(g => {
      this.cellParts.updateForExecutionState(this.viewCell, g);
    }));
    this._register(this.viewCell.onDidChangeState(g => {
      this.cellParts.updateState(this.viewCell, g);
      if (g.outputIsHoveredChanged) {
        this.updateForOutputHover();
      }
      if (g.outputIsFocusedChanged) {
        this.updateForOutputFocus();
      }
      if (g.metadataChanged || g.internalMetadataChanged) {
        this.updateEditorOptions();
      }
      if (g.inputCollapsedChanged || g.outputCollapsedChanged) {
        this.viewCell.pauseLayout();
        const f = this.updateForCollapseState();
        this.viewCell.resumeLayout();
        if (f) {
          this.relayoutCell();
        }
      }
      if (g.focusModeChanged) {
        this.updateEditorForFocusModeChange(true);
      }
    }));
    this.cellParts.scheduleRenderCell(this.viewCell);
    this._register($i(() => {
      this.cellParts.unrenderCell(this.viewCell);
    }));
    this.updateEditorOptions();
    this.updateEditorForFocusModeChange(false);
    this.updateForOutputHover();
    this.updateForOutputFocus();
    this.viewCell.editorHeight = m;
    this._outputContainerRenderer.render();
    this._renderedOutputCollapseState = false;
    this.initialViewUpdateExpanded();
    this._register(this.viewCell.onLayoutInfoRead(() => {
      this.cellParts.prepareLayout();
    }));
    const p = Rt(this.templateData.cellInputCollapsedContainer, Ct(".collapsed-execution-icon"));
    this._register($i(() => {
      p.remove();
    }));
    this._collapsedExecutionIcon = this._register(this.instantiationService.createInstance(PTa, this.notebookEditor, this.viewCell, p));
    this.updateForCollapseState();
    this._register(In.runAndSubscribe(t.onDidChangeOutputs, this.updateForOutputs.bind(this)));
    this._register(In.runAndSubscribe(t.onDidChangeLayout, this.updateForLayout.bind(this)));
    this._cellEditorOptions.setLineNumbers(this.viewCell.lineNumbers);
    i.editor.updateOptions(this._cellEditorOptions.getUpdatedValue(this.viewCell.internalMetadata, this.viewCell.uri));
  }
  updateCodeCellOptions(e) {
    e.editor.updateOptions(this._cellEditorOptions.getUpdatedValue(this.viewCell.internalMetadata, this.viewCell.uri));
    const t = new Wc();
    this._register({
      dispose() {
        t.dispose(true);
      }
    });
    WP(this.viewCell.resolveTextModel(), t.token).then(i => {
      if (!this._isDisposed) {
        if (i) {
          i.updateOptions({
            indentSize: this._cellEditorOptions.indentSize,
            tabSize: this._cellEditorOptions.tabSize,
            insertSpaces: this._cellEditorOptions.insertSpaces
          });
        }
      }
    });
  }
  updateForLayout() {
    this._pendingLayout?.dispose();
    this._pendingLayout = VFn(As(this.notebookEditor.getDomNode()), () => {
      this.cellParts.updateInternalLayoutNow(this.viewCell);
    });
  }
  updateForOutputHover() {
    this.templateData.container.classList.toggle("cell-output-hover", this.viewCell.outputIsHovered);
  }
  updateForOutputFocus() {
    this.templateData.container.classList.toggle("cell-output-focus", this.viewCell.outputIsFocused);
  }
  calculateInitEditorHeight() {
    const e = this.viewCell.lineCount;
    const t = this.viewCell.layoutInfo.fontInfo?.lineHeight || 17;
    const i = this.notebookEditor.notebookOptions.computeEditorPadding(this.viewCell.internalMetadata, this.viewCell.uri);
    if (this.viewCell.layoutInfo.editorHeight === 0) {
      return e * t + i.top + i.bottom;
    } else {
      return this.viewCell.layoutInfo.editorHeight;
    }
  }
  initializeEditor(e) {
    const t = this.viewCell.layoutInfo.editorWidth;
    this.layoutEditor({
      width: t,
      height: e
    });
    const i = new Wc();
    this._register({
      dispose() {
        i.dispose(true);
      }
    });
    WP(this.viewCell.resolveTextModel(), i.token).then(r => {
      if (!this._isDisposed && !r?.isDisposed()) {
        if (r && this.templateData.editor) {
          this._reigsterModelListeners(r);
          this.templateData.editor.setModel(r);
          if (this._isDisposed) {
            return;
          }
          r.updateOptions({
            indentSize: this._cellEditorOptions.indentSize,
            tabSize: this._cellEditorOptions.tabSize,
            insertSpaces: this._cellEditorOptions.insertSpaces
          });
          this.viewCell.attachTextEditor(this.templateData.editor, this.viewCell.layoutInfo.estimatedHasHorizontalScrolling);
          const s = () => {
            if (this.notebookEditor.getActiveCell() === this.viewCell && this.viewCell.focusMode === Tk.Editor && (this.notebookEditor.hasEditorFocus() || this.notebookEditor.getDomNode().ownerDocument.activeElement === this.notebookEditor.getDomNode().ownerDocument.body)) {
              this.templateData.editor?.focus();
            }
          };
          s();
          const o = this.templateData.editor?.getContentHeight();
          if (o !== undefined && o !== e) {
            this.onCellEditorHeightChange(o);
          }
          if (this._isDisposed) {
            return;
          }
          s();
        }
        this._register(this._cellEditorOptions.onDidChange(() => this.updateCodeCellOptions(this.templateData)));
      }
    });
  }
  updateForOutputs() {
    UBe(this.viewCell.outputsViewModels.length > 0, this.templateData.focusSinkElement);
  }
  updateEditorOptions() {
    const e = this.templateData.editor;
    if (!e) {
      return;
    }
    const t = this.notebookEditor.isReadOnly;
    const i = this.notebookEditor.notebookOptions.computeEditorPadding(this.viewCell.internalMetadata, this.viewCell.uri);
    const r = e.getOptions();
    if (r.get(96) !== t || r.get(88) !== i) {
      e.updateOptions({
        readOnly: this.notebookEditor.isReadOnly,
        padding: this.notebookEditor.notebookOptions.computeEditorPadding(this.viewCell.internalMetadata, this.viewCell.uri)
      });
    }
  }
  registerNotebookEditorListeners() {
    this._register(this.notebookEditor.onDidScroll(() => {
      this.adjustEditorPosition();
    }));
    this._register(this.notebookEditor.onDidChangeLayout(() => {
      this.adjustEditorPosition();
      this.onCellWidthChange();
    }));
  }
  adjustEditorPosition() {
    const i = this.notebookEditor.scrollTop;
    const r = this.notebookEditor.getAbsoluteTopOfElement(this.viewCell);
    const s = i - r + -7;
    const o = this.notebookEditor.getLayoutInfo();
    const a = o.height - o.stickyHeight - 26;
    const l = this.viewCell.layoutInfo.editorHeight - a;
    const u = l > 20 ? zA(0, s, l) : 0;
    this.templateData.editorPart.style.top = `${u}px`;
    this.templateData.editor?.setScrollTop(u);
  }
  registerViewCellLayoutChange() {
    this._register(this.viewCell.onDidChangeLayout(e => {
      if (e.outerWidth !== undefined && this.templateData.editor.getLayoutInfo().width !== this.viewCell.layoutInfo.editorWidth) {
        this.onCellWidthChange();
        this.adjustEditorPosition();
      }
    }));
  }
  registerCellEditorEventListeners() {
    this._register(this.templateData.editor.onDidContentSizeChange(e => {
      if (e.contentHeightChanged && this.viewCell.layoutInfo.editorHeight !== e.contentHeight) {
        this.onCellEditorHeightChange(e.contentHeight);
        this.adjustEditorPosition();
      }
    }));
    this._register(this.templateData.editor.onDidChangeCursorSelection(e => {
      if (e.source === "restoreState" || e.oldModelVersionId === 0) {
        return;
      }
      const t = this.templateData.editor.getSelections();
      if (t?.length) {
        const i = this.templateData.editor.getContentHeight();
        const r = this.viewCell.layoutInfo.editorHeight;
        if (i !== r && (this.onCellEditorHeightChange(i), this._isDisposed)) {
          return;
        }
        const s = t[t.length - 1];
        this.notebookEditor.revealRangeInViewAsync(this.viewCell, s);
      }
    }));
    this._register(this.templateData.editor.onDidBlurEditorWidget(() => {
      Xte.get(this.templateData.editor)?.hideCodeActions();
      Xte.get(this.templateData.editor)?.hideLightBulbWidget();
    }));
  }
  _reigsterModelListeners(e) {
    this._register(e.onDidChangeTokens(() => {
      if (this.viewCell.isInputCollapsed && this._inputCollapseElement) {
        const t = this._getRichTextFromLineTokens(e);
        Ggt(this._inputCollapseElement, t);
        this._attachInputExpandButton(this._inputCollapseElement);
      }
    }));
  }
  registerMouseListener() {
    this._register(this.templateData.editor.onMouseDown(e => {
      if (e.event.rightButton) {
        e.event.preventDefault();
      }
    }));
  }
  shouldPreserveEditor() {
    return this.notebookEditor.getActiveCell() === this.viewCell && this.viewCell.focusMode === Tk.Editor && (this.notebookEditor.hasEditorFocus() || this.notebookEditor.getDomNode().ownerDocument.activeElement === this.notebookEditor.getDomNode().ownerDocument.body);
  }
  updateEditorForFocusModeChange(e) {
    if (this.shouldPreserveEditor()) {
      if (e) {
        this.templateData.editor?.focus();
      } else {
        this._register(I5e(As(this.templateData.container), () => {
          this.templateData.editor?.focus();
        }));
      }
    }
    this.templateData.container.classList.toggle("cell-editor-focus", this.viewCell.focusMode === Tk.Editor);
    this.templateData.container.classList.toggle("cell-output-focus", this.viewCell.focusMode === Tk.Output);
  }
  updateForCollapseState() {
    if (this.viewCell.isOutputCollapsed === this._renderedOutputCollapseState && this.viewCell.isInputCollapsed === this._renderedInputCollapseState) {
      return false;
    } else {
      this.viewCell.layoutChange({
        editorHeight: true
      });
      if (this.viewCell.isInputCollapsed) {
        this._collapseInput();
      } else {
        this._showInput();
      }
      if (this.viewCell.isOutputCollapsed) {
        this._collapseOutput();
      } else {
        this._showOutput(false);
      }
      this.relayoutCell();
      this._renderedOutputCollapseState = this.viewCell.isOutputCollapsed;
      this._renderedInputCollapseState = this.viewCell.isInputCollapsed;
      return true;
    }
  }
  _collapseInput() {
    Ng(this.templateData.editorPart);
    this.templateData.container.classList.toggle("input-collapsed", true);
    this._removeInputCollapsePreview();
    this._collapsedExecutionIcon.setVisibility(true);
    const e = this.templateData.editor.hasModel() ? this._getRichTextFromLineTokens(this.templateData.editor.getModel()) : this._getRichText(this.viewCell.textBuffer, this.viewCell.language);
    const t = Ct("div.cell-collapse-preview");
    Ggt(t, e);
    this._inputCollapseElement = t;
    this.templateData.cellInputCollapsedContainer.appendChild(t);
    this._attachInputExpandButton(t);
    gv(this.templateData.cellInputCollapsedContainer);
  }
  _attachInputExpandButton(e) {
    const t = Ct("span.expandInputIcon");
    const i = this.keybindingService.lookupKeybinding(MIa);
    if (i) {
      e.title = _(9482, null, i.getLabel());
      t.title = _(9483, null, i.getLabel());
    }
    t.classList.add(...Qt.asClassNameArray(Be.more));
    e.appendChild(t);
  }
  _showInput() {
    this._collapsedExecutionIcon.setVisibility(false);
    gv(this.templateData.editorPart);
    Ng(this.templateData.cellInputCollapsedContainer);
  }
  _getRichText(e, t) {
    return Abh(this.languageService, e.getLineContent(1), t);
  }
  _getRichTextFromLineTokens(e) {
    let t = "<div class=\"monaco-tokenized-source\">";
    const r = e.tokenization.getLineTokens(1).inflate();
    const s = e.getLineContent(1);
    let o = 0;
    for (let a = 0, l = r.getCount(); a < l; a++) {
      const u = r.getClassName(a);
      const d = r.getEndOffset(a);
      t += `<span class="${u}">${LA(s.substring(o, d))}</span>`;
      o = d;
    }
    t += "</div>";
    return t;
  }
  _removeInputCollapsePreview() {
    const e = this.templateData.cellInputCollapsedContainer.children;
    const t = [];
    for (let i = 0; i < e.length; i++) {
      if (e[i].classList.contains("cell-collapse-preview")) {
        t.push(e[i]);
      }
    }
    t.forEach(i => {
      i.remove();
    });
  }
  _updateOutputInnerContainer(e) {
    const t = this.templateData.outputContainer.domNode.children;
    for (let i = 0; i < t.length; i++) {
      if (t[i].classList.contains("output-inner-container")) {
        UBe(!e, t[i]);
      }
    }
  }
  _collapseOutput() {
    this.templateData.container.classList.toggle("output-collapsed", true);
    gv(this.templateData.cellOutputCollapsedContainer);
    this._updateOutputInnerContainer(true);
    this._outputContainerRenderer.viewUpdateHideOuputs();
  }
  _showOutput(e) {
    this.templateData.container.classList.toggle("output-collapsed", false);
    Ng(this.templateData.cellOutputCollapsedContainer);
    this._updateOutputInnerContainer(false);
    this._outputContainerRenderer.viewUpdateShowOutputs(e);
  }
  initialViewUpdateExpanded() {
    this.templateData.container.classList.toggle("input-collapsed", false);
    gv(this.templateData.editorPart);
    Ng(this.templateData.cellInputCollapsedContainer);
    this.templateData.container.classList.toggle("output-collapsed", false);
    this._showOutput(true);
  }
  layoutEditor(e) {
    const t = this.notebookEditor.getLayoutInfo();
    const i = Math.min(t.height - t.stickyHeight - 26, e.height);
    this.templateData.editor?.layout({
      width: e.width,
      height: i
    }, true);
  }
  onCellWidthChange() {
    if (!this.templateData.editor.hasModel()) {
      return;
    }
    const e = this.templateData.editor.getContentHeight();
    this.viewCell.editorHeight = e;
    this.relayoutCell();
    this.layoutEditor({
      width: this.viewCell.layoutInfo.editorWidth,
      height: e
    });
  }
  onCellEditorHeightChange(e) {
    const t = this.templateData.editor.getLayoutInfo();
    this.viewCell.editorHeight = e;
    this.relayoutCell();
    this.layoutEditor({
      width: t.width,
      height: e
    });
  }
  relayoutCell() {
    this.notebookEditor.layoutNotebookCell(this.viewCell, this.viewCell.layoutInfo.totalHeight);
  }
  dispose() {
    this._isDisposed = true;
    if (this.shouldPreserveEditor()) {
      this.editorPool.preserveFocusedEditor(this.viewCell);
    }
    this.viewCell.detachTextEditor();
    this._removeInputCollapsePreview();
    this._outputContainerRenderer.dispose();
    this._pendingLayout?.dispose();
    super.dispose();
  }
};
LTa = __decorate([__param(4, ln), __param(5, mo), __param(6, Ja), __param(7, Jl), __param(8, Fn), __param(9, pE)], LTa);
