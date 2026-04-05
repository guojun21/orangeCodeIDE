"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/markupCellViewModel.js
// Offset: 33010699 (bundle byte offset)
// Size: 5461 bytes
yn();
Bc();
Ei();
Sb();
F9f();
ph();
td();
VD();
Oh();
G0a();
yit();
GV = class extends ywu {
  get renderedHtml() {
    return this._renderedHtml;
  }
  set renderedHtml(e) {
    if (this._renderedHtml !== e) {
      this._renderedHtml = e;
      this._onDidChangeState.fire({
        contentChanged: true
      });
    }
  }
  get layoutInfo() {
    return this._layoutInfo;
  }
  set renderedMarkdownHeight(e) {
    this._previewHeight = e;
    this._updateTotalHeight(this._computeTotalHeight());
  }
  set chatHeight(e) {
    this._chatHeight = e;
    this._updateTotalHeight(this._computeTotalHeight());
  }
  get chatHeight() {
    return this._chatHeight;
  }
  set editorHeight(e) {
    this._editorHeight = e;
    this._statusBarHeight = this.viewContext.notebookOptions.computeStatusBarHeight();
    this._updateTotalHeight(this._computeTotalHeight());
  }
  get editorHeight() {
    throw new Error("MarkdownCellViewModel.editorHeight is write only");
  }
  get foldingState() {
    return this.foldingDelegate.getFoldingState(this.foldingDelegate.getCellIndex(this));
  }
  get outputIsHovered() {
    return this._hoveringOutput;
  }
  set outputIsHovered(e) {
    this._hoveringOutput = e;
  }
  get outputIsFocused() {
    return this._focusOnOutput;
  }
  set outputIsFocused(e) {
    this._focusOnOutput = e;
  }
  get inputInOutputIsFocused() {
    return false;
  }
  set inputInOutputIsFocused(e) {}
  get cellIsHovered() {
    return this._hoveringCell;
  }
  set cellIsHovered(e) {
    this._hoveringCell = e;
    this._onDidChangeState.fire({
      cellIsHoveredChanged: true
    });
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super(e, t, Wr(), s, o, a, l, u, d);
    this.foldingDelegate = r;
    this.viewContext = s;
    this.cellKind = zd.Markup;
    this._previewHeight = 0;
    this._chatHeight = 0;
    this._editorHeight = 0;
    this._statusBarHeight = 0;
    this._onDidChangeLayout = this._register(new Qe());
    this.onDidChangeLayout = this._onDidChangeLayout.event;
    this._hoveringOutput = false;
    this._focusOnOutput = false;
    this._hoveringCell = false;
    this.outputsViewModels = [];
    this._hasFindResult = this._register(new Qe());
    this.hasFindResult = this._hasFindResult.event;
    const {
      bottomToolbarGap: m
    } = this.viewContext.notebookOptions.computeBottomToolbarDimensions(this.viewType);
    this._layoutInfo = {
      chatHeight: 0,
      editorHeight: 0,
      previewHeight: 0,
      fontInfo: i?.fontInfo || null,
      editorWidth: i?.width ? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(i.width) : 0,
      commentOffset: 0,
      commentHeight: 0,
      bottomToolbarOffset: m,
      totalHeight: 100,
      layoutState: p5.Uninitialized,
      foldHintHeight: 0,
      statusBarHeight: 0
    };
    this._register(this.onDidChangeState(p => {
      this.viewContext.eventDispatcher.emit([new HEf(p, this.model)]);
      if (p.foldingStateChanged) {
        this._updateTotalHeight(this._computeTotalHeight(), n0u.Fold);
      }
    }));
  }
  _computeTotalHeight() {
    const e = this.viewContext.notebookOptions.getLayoutConfiguration();
    const {
      bottomToolbarGap: t
    } = this.viewContext.notebookOptions.computeBottomToolbarDimensions(this.viewType);
    const i = this._computeFoldHintHeight();
    if (this.getEditState() === aw.Editing) {
      return this._editorHeight + e.markdownCellTopMargin + e.markdownCellBottomMargin + t + this._statusBarHeight + this._commentHeight;
    } else {
      return Math.max(1, this._previewHeight + t + i + this._commentHeight);
    }
  }
  _computeFoldHintHeight() {
    if (this.getEditState() === aw.Editing || this.foldingState !== 2) {
      return 0;
    } else {
      return this.viewContext.notebookOptions.getLayoutConfiguration().markdownFoldHintHeight;
    }
  }
  updateOptions(e) {
    super.updateOptions(e);
    if (e.cellStatusBarVisibility || e.insertToolbarPosition || e.cellToolbarLocation) {
      this._updateTotalHeight(this._computeTotalHeight());
    }
  }
  getOutputOffset(e) {
    return -1;
  }
  updateOutputHeight(e, t) {}
  triggerFoldingStateChange() {
    this._onDidChangeState.fire({
      foldingStateChanged: true
    });
  }
  _updateTotalHeight(e, t) {
    if (e !== this.layoutInfo.totalHeight) {
      this.layoutChange({
        totalHeight: e,
        context: t
      });
    }
  }
  layoutChange(e) {
    let t;
    let i;
    if (this.isInputCollapsed) {
      t = this.viewContext.notebookOptions.computeCollapsedMarkdownCellHeight(this.viewType);
      e.totalHeight = t;
      i = 0;
    } else {
      t = e.totalHeight === undefined ? this._layoutInfo.layoutState === p5.Uninitialized ? 100 : this._layoutInfo.totalHeight : e.totalHeight;
      i = this._computeFoldHintHeight();
    }
    let r;
    if (this.getEditState() === aw.Editing) {
      const s = this.viewContext.notebookOptions.getLayoutConfiguration();
      r = s.editorToolbarHeight + s.cellTopMargin + this._chatHeight + this._editorHeight + this._statusBarHeight;
    } else {
      r = this._previewHeight;
    }
    this._layoutInfo = {
      fontInfo: e.font || this._layoutInfo.fontInfo,
      editorWidth: e.outerWidth !== undefined ? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(e.outerWidth) : this._layoutInfo.editorWidth,
      chatHeight: this._chatHeight,
      editorHeight: this._editorHeight,
      statusBarHeight: this._statusBarHeight,
      previewHeight: this._previewHeight,
      bottomToolbarOffset: this.viewContext.notebookOptions.computeBottomToolbarOffset(t, this.viewType),
      totalHeight: t,
      layoutState: p5.Measured,
      foldHintHeight: i,
      commentOffset: r,
      commentHeight: e.commentHeight ? this._commentHeight : this._layoutInfo.commentHeight
    };
    this._onDidChangeLayout.fire(e);
  }
  restoreEditorViewState(e, t) {
    super.restoreEditorViewState(e);
    if (t !== undefined && this.layoutInfo.layoutState === p5.Uninitialized) {
      this._layoutInfo = {
        ...this.layoutInfo,
        totalHeight: t,
        chatHeight: this._chatHeight,
        editorHeight: this._editorHeight,
        statusBarHeight: this._statusBarHeight,
        layoutState: p5.FromCache
      };
      this.layoutChange({});
    }
  }
  getDynamicHeight() {
    return null;
  }
  getHeight(e) {
    if (this._layoutInfo.layoutState === p5.Uninitialized) {
      return 100;
    } else {
      return this._layoutInfo.totalHeight;
    }
  }
  onDidChangeTextModelContent() {
    this._onDidChangeState.fire({
      contentChanged: true
    });
  }
  onDeselect() {}
  startFind(e, t) {
    const i = super.cellStartFind(e, t);
    if (i === null) {
      return null;
    } else {
      return {
        cell: this,
        contentMatches: i
      };
    }
  }
  dispose() {
    super.dispose();
    this.foldingDelegate = null;
  }
};
GV = __decorate([__param(5, Fn), __param(6, El), __param(7, qB), __param(8, fl), __param(9, YEe)], GV);
