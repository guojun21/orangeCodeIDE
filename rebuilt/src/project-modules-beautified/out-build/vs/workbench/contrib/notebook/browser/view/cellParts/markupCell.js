"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/markupCell.js
// Offset: 33313219 (bundle byte offset)
// Size: 11850 bytes
ri();
bS();
vr();
Po();
qi();
Jr();
rt();
VI();
Qh();
Ku();
LSe();
Ht();
zg();
Ei();
si();
Wt();
E_();
ka();
Sb();
bJ();
uki();
$yu();
UTa = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super();
    this.notebookEditor = e;
    this.viewCell = t;
    this.templateData = i;
    this.renderedEditors = r;
    this.accessibilityService = s;
    this.contextKeyService = o;
    this.instantiationService = a;
    this.languageService = l;
    this.configurationService = u;
    this.keybindingService = d;
    this.editor = null;
    this.localDisposables = this._register(new Ut());
    this.focusSwitchDisposable = this._register(new uo());
    this.editorDisposables = this._register(new Ut());
    this._isDisposed = false;
    this.constructDOM();
    this.editorPart = i.editorPart;
    this.cellEditorOptions = this._register(new xbn(this.notebookEditor.getBaseCellEditorOptions(t.language), this.notebookEditor.notebookOptions, this.configurationService));
    this.cellEditorOptions.setLineNumbers(this.viewCell.lineNumbers);
    this.editorOptions = this.cellEditorOptions.getValue(this.viewCell.internalMetadata, this.viewCell.uri);
    this._register($i(() => r.delete(this.viewCell)));
    this.registerListeners();
    this.templateData.cellParts.scheduleRenderCell(this.viewCell);
    this._register($i(() => {
      this.templateData.cellParts.unrenderCell(this.viewCell);
    }));
    this._register(this.accessibilityService.onDidChangeScreenReaderOptimized(() => {
      this.viewUpdate();
    }));
    this.updateForHover();
    this.updateForFocusModeChange();
    this.foldingState = t.foldingState;
    this.layoutFoldingIndicator();
    this.updateFoldingIconShowClass();
    if (this.viewCell.layoutInfo.totalHeight > 0) {
      this.relayoutCell();
    }
    this.viewUpdate();
    this.layoutCellParts();
    this._register(this.viewCell.onDidChangeLayout(() => {
      this.layoutCellParts();
    }));
  }
  layoutCellParts() {
    this.templateData.cellParts.updateInternalLayoutNow(this.viewCell);
  }
  constructDOM() {
    const e = `aria-markup-cell-${this.viewCell.id}`;
    this.markdownAccessibilityContainer = this.templateData.cellContainer;
    this.markdownAccessibilityContainer.id = e;
    this.markdownAccessibilityContainer.style.height = "1px";
    this.markdownAccessibilityContainer.style.overflow = "hidden";
    this.markdownAccessibilityContainer.style.position = "absolute";
    this.markdownAccessibilityContainer.style.top = "100000px";
    this.markdownAccessibilityContainer.style.left = "10000px";
    this.markdownAccessibilityContainer.ariaHidden = "false";
    this.templateData.rootContainer.setAttribute("aria-describedby", e);
    this.templateData.container.classList.toggle("webview-backed-markdown-cell", true);
  }
  registerListeners() {
    this._register(this.viewCell.onDidChangeState(e => {
      this.templateData.cellParts.updateState(this.viewCell, e);
    }));
    this._register(this.viewCell.model.onDidChangeMetadata(() => {
      this.viewUpdate();
    }));
    this._register(this.viewCell.onDidChangeState(e => {
      if (e.editStateChanged || e.contentChanged) {
        this.viewUpdate();
      }
      if (e.focusModeChanged) {
        this.updateForFocusModeChange();
      }
      if (e.foldingStateChanged) {
        const t = this.viewCell.foldingState;
        if (t !== this.foldingState) {
          this.foldingState = t;
          this.layoutFoldingIndicator();
        }
      }
      if (e.cellIsHoveredChanged) {
        this.updateForHover();
      }
      if (e.inputCollapsedChanged) {
        this.updateCollapsedState();
        this.viewUpdate();
      }
      if (e.cellLineNumberChanged) {
        this.cellEditorOptions.setLineNumbers(this.viewCell.lineNumbers);
      }
    }));
    this._register(this.notebookEditor.notebookOptions.onDidChangeOptions(e => {
      if (e.showFoldingControls) {
        this.updateFoldingIconShowClass();
      }
    }));
    this._register(this.viewCell.onDidChangeLayout(e => {
      const t = this.editor?.getLayoutInfo();
      if (e.outerWidth && this.viewCell.getEditState() === aw.Editing && t && t.width !== this.viewCell.layoutInfo.editorWidth) {
        this.onCellEditorWidthChange();
      }
    }));
    this._register(this.cellEditorOptions.onDidChange(() => this.updateMarkupCellOptions()));
  }
  updateMarkupCellOptions() {
    this.updateEditorOptions(this.cellEditorOptions.getUpdatedValue(this.viewCell.internalMetadata, this.viewCell.uri));
    if (this.editor) {
      this.editor.updateOptions(this.cellEditorOptions.getUpdatedValue(this.viewCell.internalMetadata, this.viewCell.uri));
      const e = new Wc();
      this._register({
        dispose() {
          e.dispose(true);
        }
      });
      WP(this.viewCell.resolveTextModel(), e.token).then(t => {
        if (!this._isDisposed) {
          if (t) {
            t.updateOptions({
              indentSize: this.cellEditorOptions.indentSize,
              tabSize: this.cellEditorOptions.tabSize,
              insertSpaces: this.cellEditorOptions.insertSpaces
            });
          }
        }
      });
    }
  }
  updateCollapsedState() {
    if (this.viewCell.isInputCollapsed) {
      this.notebookEditor.hideMarkupPreviews([this.viewCell]);
    } else {
      this.notebookEditor.unhideMarkupPreviews([this.viewCell]);
    }
  }
  updateForHover() {
    this.templateData.container.classList.toggle("markdown-cell-hover", this.viewCell.cellIsHovered);
  }
  updateForFocusModeChange() {
    if (this.viewCell.focusMode === Tk.Editor) {
      this.focusEditorIfNeeded();
    }
    this.templateData.container.classList.toggle("cell-editor-focus", this.viewCell.focusMode === Tk.Editor);
  }
  dispose() {
    this._isDisposed = true;
    if (this.notebookEditor.getActiveCell() === this.viewCell && this.viewCell.focusMode === Tk.Editor && (this.notebookEditor.hasEditorFocus() || this.notebookEditor.getDomNode().ownerDocument.activeElement === this.notebookEditor.getDomNode().ownerDocument.body)) {
      this.notebookEditor.focusContainer();
    }
    this.viewCell.detachTextEditor();
    super.dispose();
  }
  updateFoldingIconShowClass() {
    const e = this.notebookEditor.notebookOptions.getDisplayOptions().showFoldingControls;
    this.templateData.foldingIndicator.classList.remove("mouseover", "always");
    this.templateData.foldingIndicator.classList.add(e);
  }
  viewUpdate() {
    if (this.viewCell.isInputCollapsed) {
      this.viewUpdateCollapsed();
    } else if (this.viewCell.getEditState() === aw.Editing) {
      this.viewUpdateEditing();
    } else {
      this.viewUpdatePreview();
    }
  }
  viewUpdateCollapsed() {
    gv(this.templateData.cellInputCollapsedContainer);
    Ng(this.editorPart);
    this.templateData.cellInputCollapsedContainer.innerText = "";
    Rt(this.templateData.cellInputCollapsedContainer, Ct("span")).classList.add(...Qt.asClassNameArray(Be.markdown));
    const t = Ct("div");
    t.classList.add("cell-collapse-preview");
    const i = this.getRichText(this.viewCell.textBuffer, this.viewCell.language);
    Ggt(t, i);
    this.templateData.cellInputCollapsedContainer.appendChild(t);
    const r = Rt(t, Ct("span.expandInputIcon"));
    r.classList.add(...Qt.asClassNameArray(Be.more));
    const s = this.keybindingService.lookupKeybinding(MIa);
    if (s) {
      t.title = _(9494, null, s.getLabel());
      r.title = _(9495, null, s.getLabel());
    }
    this.markdownAccessibilityContainer.ariaHidden = "true";
    this.templateData.container.classList.toggle("input-collapsed", true);
    this.viewCell.renderedMarkdownHeight = 0;
    this.viewCell.layoutChange({});
  }
  getRichText(e, t) {
    return Abh(this.languageService, e.getLineContent(1), t);
  }
  viewUpdateEditing() {
    let e;
    gv(this.editorPart);
    this.markdownAccessibilityContainer.ariaHidden = "true";
    Ng(this.templateData.cellInputCollapsedContainer);
    this.notebookEditor.hideMarkupPreviews([this.viewCell]);
    this.templateData.container.classList.toggle("input-collapsed", false);
    this.templateData.container.classList.toggle("markdown-cell-edit-mode", true);
    if (this.editor && this.editor.hasModel()) {
      e = this.editor.getContentHeight();
      this.viewCell.attachTextEditor(this.editor);
      this.focusEditorIfNeeded();
      this.bindEditorListeners(this.editor);
      this.editor.layout({
        width: this.viewCell.layoutInfo.editorWidth,
        height: e
      });
    } else {
      this.editorDisposables.clear();
      const t = this.notebookEditor.notebookOptions.computeMarkdownCellEditorWidth(this.notebookEditor.getLayoutInfo().width);
      const i = this.viewCell.lineCount;
      const r = this.viewCell.layoutInfo.fontInfo?.lineHeight || 17;
      const s = this.notebookEditor.notebookOptions.computeEditorPadding(this.viewCell.internalMetadata, this.viewCell.uri);
      e = Math.max(i, 1) * r + s.top + s.bottom;
      this.templateData.editorContainer.innerText = "";
      const o = this.contextKeyService.createScoped(this.templateData.editorPart);
      Ci.inCompositeEditor.bindTo(o).set(true);
      const a = this.editorDisposables.add(this.instantiationService.createChild(new EA([wi, o])));
      this.editorDisposables.add(o);
      this.editor = this.editorDisposables.add(a.createInstance(WS, this.templateData.editorContainer, {
        ...this.editorOptions,
        dimension: {
          width: t,
          height: e
        }
      }, {
        contributions: this.notebookEditor.creationOptions.cellEditorContributions
      }));
      this.templateData.currentEditor = this.editor;
      this.editorDisposables.add(this.editor.onDidBlurEditorWidget(() => {
        if (this.editor) {
          HV.get(this.editor)?.stopHighlighting();
        }
      }));
      this.editorDisposables.add(this.editor.onDidFocusEditorWidget(() => {
        if (this.editor) {
          HV.get(this.editor)?.restoreViewState(true);
        }
      }));
      const l = new Wc();
      this.editorDisposables.add({
        dispose() {
          l.dispose(true);
        }
      });
      WP(this.viewCell.resolveTextModel(), l.token).then(u => {
        if (!u) {
          return;
        }
        this.editor.setModel(u);
        u.updateOptions({
          indentSize: this.cellEditorOptions.indentSize,
          tabSize: this.cellEditorOptions.tabSize,
          insertSpaces: this.cellEditorOptions.insertSpaces
        });
        const d = this.editor.getContentHeight();
        if (d !== e) {
          this.editor.layout({
            width: t,
            height: d
          });
          e = d;
        }
        this.viewCell.attachTextEditor(this.editor);
        if (this.viewCell.getEditState() === aw.Editing) {
          this.focusEditorIfNeeded();
        }
        this.bindEditorListeners(this.editor);
        this.viewCell.editorHeight = e;
      });
    }
    this.viewCell.editorHeight = e;
    this.focusEditorIfNeeded();
    this.renderedEditors.set(this.viewCell, this.editor);
  }
  viewUpdatePreview() {
    this.viewCell.detachTextEditor();
    Ng(this.editorPart);
    Ng(this.templateData.cellInputCollapsedContainer);
    this.markdownAccessibilityContainer.ariaHidden = "false";
    this.templateData.container.classList.toggle("input-collapsed", false);
    this.templateData.container.classList.toggle("markdown-cell-edit-mode", false);
    this.renderedEditors.delete(this.viewCell);
    this.markdownAccessibilityContainer.innerText = "";
    if (this.viewCell.renderedHtml) {
      if (this.accessibilityService.isScreenReaderOptimized()) {
        Ggt(this.markdownAccessibilityContainer, this.viewCell.renderedHtml);
      } else {
        th(this.markdownAccessibilityContainer);
      }
    }
    this.notebookEditor.createMarkupPreview(this.viewCell);
  }
  focusEditorIfNeeded() {
    if (this.viewCell.focusMode === Tk.Editor && (this.notebookEditor.hasEditorFocus() || this.notebookEditor.getDomNode().ownerDocument.activeElement === this.notebookEditor.getDomNode().ownerDocument.body)) {
      if (!this.editor) {
        return;
      }
      this.editor.focus();
      const e = this.editor.getSelection();
      if (!e) {
        return;
      }
      this.notebookEditor.revealRangeInViewAsync(this.viewCell, e);
    }
  }
  layoutEditor(e) {
    this.editor?.layout(e);
  }
  onCellEditorWidthChange() {
    const e = this.editor.getContentHeight();
    this.layoutEditor({
      width: this.viewCell.layoutInfo.editorWidth,
      height: e
    });
  }
  relayoutCell() {
    this.notebookEditor.layoutNotebookCell(this.viewCell, this.viewCell.layoutInfo.totalHeight);
    this.layoutFoldingIndicator();
  }
  updateEditorOptions(e) {
    this.editorOptions = e;
    this.editor?.updateOptions(this.editorOptions);
  }
  layoutFoldingIndicator() {
    switch (this.foldingState) {
      case 0:
        this.templateData.foldingIndicator.style.display = "none";
        this.templateData.foldingIndicator.innerText = "";
        break;
      case 2:
        this.templateData.foldingIndicator.style.display = "";
        um(this.templateData.foldingIndicator, tL(DWl));
        break;
      case 1:
        this.templateData.foldingIndicator.style.display = "";
        um(this.templateData.foldingIndicator, tL(BWl));
        break;
      default:
        break;
    }
  }
  bindEditorListeners(e) {
    this.localDisposables.clear();
    this.focusSwitchDisposable.clear();
    this.localDisposables.add(e.onDidContentSizeChange(i => {
      if (i.contentHeightChanged) {
        this.onCellEditorHeightChange(e, i.contentHeight);
      }
    }));
    this.localDisposables.add(e.onDidChangeCursorSelection(i => {
      if (i.source === "restoreState") {
        return;
      }
      const r = e.getSelections();
      if (r?.length) {
        const s = e.getContentHeight();
        const o = this.viewCell.layoutInfo.editorHeight;
        if (s !== o) {
          this.onCellEditorHeightChange(e, s);
        }
        const a = r[r.length - 1];
        this.notebookEditor.revealRangeInViewAsync(this.viewCell, a);
      }
    }));
    const t = () => this.viewCell.focusMode = e.hasWidgetFocus() ? Tk.Editor : Tk.Container;
    this.localDisposables.add(e.onDidFocusEditorWidget(() => {
      t();
    }));
    this.localDisposables.add(e.onDidBlurEditorWidget(() => {
      if (this.templateData.container.ownerDocument.activeElement?.contains(this.templateData.container)) {
        this.focusSwitchDisposable.value = nC(() => t(), 300);
      } else {
        t();
      }
    }));
    t();
  }
  onCellEditorHeightChange(e, t) {
    const i = e.getLayoutInfo();
    this.viewCell.editorHeight = t;
    e.layout({
      width: i.width,
      height: t
    });
  }
};
UTa = __decorate([__param(4, Cf), __param(5, wi), __param(6, ln), __param(7, Jl), __param(8, Fn), __param(9, mo)], UTa);
