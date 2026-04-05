"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/codeCellViewModel.js
// Offset: 32999885 (bundle byte offset)
// Size: 10814 bytes
yn();
rt();
Uc();
Bc();
Oh();
UVe();
td();
Ei();
VD();
Sb();
N9f();
ph();
z0();
F9f();
yit();
iTa = 500;
jJ = class extends ywu {
  set editorHeight(e) {
    if (this._editorHeight !== e) {
      this._editorHeight = e;
      this.layoutChange({
        editorHeight: true
      }, "CodeCellViewModel#editorHeight");
    }
  }
  get editorHeight() {
    throw new Error("editorHeight is write-only");
  }
  set chatHeight(e) {
    if (this._chatHeight !== e) {
      this._chatHeight = e;
      this.layoutChange({
        chatHeight: true
      }, "CodeCellViewModel#chatHeight");
    }
  }
  get chatHeight() {
    return this._chatHeight;
  }
  get outputIsHovered() {
    return this._hoveringOutput;
  }
  set outputIsHovered(e) {
    this._hoveringOutput = e;
    this._onDidChangeState.fire({
      outputIsHoveredChanged: true
    });
  }
  get outputIsFocused() {
    return this._focusOnOutput;
  }
  set outputIsFocused(e) {
    this._focusOnOutput = e;
    this._onDidChangeState.fire({
      outputIsFocusedChanged: true
    });
  }
  get inputInOutputIsFocused() {
    return this._focusInputInOutput;
  }
  set inputInOutputIsFocused(e) {
    this._focusInputInOutput = e;
  }
  get outputMinHeight() {
    return this._outputMinHeight;
  }
  set outputMinHeight(e) {
    this._outputMinHeight = e;
  }
  get layoutInfo() {
    return this._layoutInfo;
  }
  get outputsViewModels() {
    return this._outputViewModels;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super(e, t, Wr(), r, s, a, l, u, d);
    this.viewContext = r;
    this._notebookService = o;
    this.cellKind = zd.Code;
    this._onLayoutInfoRead = this._register(new Qe());
    this.onLayoutInfoRead = this._onLayoutInfoRead.event;
    this._onDidStartExecution = this._register(new Qe());
    this.onDidStartExecution = this._onDidStartExecution.event;
    this._onDidStopExecution = this._register(new Qe());
    this.onDidStopExecution = this._onDidStopExecution.event;
    this._onDidChangeOutputs = this._register(new Qe());
    this.onDidChangeOutputs = this._onDidChangeOutputs.event;
    this._onDidRemoveOutputs = this._register(new Qe());
    this.onDidRemoveOutputs = this._onDidRemoveOutputs.event;
    this._outputCollection = [];
    this._outputsTop = null;
    this._pauseableEmitter = this._register(new zj());
    this.onDidChangeLayout = this._pauseableEmitter.event;
    this._editorHeight = 0;
    this._chatHeight = 0;
    this._hoveringOutput = false;
    this._focusOnOutput = false;
    this._focusInputInOutput = false;
    this._outputMinHeight = 0;
    this.executionErrorDiagnostic = Ua("excecutionError", undefined);
    this._hasFindResult = this._register(new Qe());
    this.hasFindResult = this._hasFindResult.event;
    this._outputViewModels = this.model.outputs.map(m => new GSi(this, m, this._notebookService));
    this._register(this.model.onDidChangeOutputs(m => {
      const p = [];
      let g = false;
      for (let f = m.start; f < m.start + m.deleteCount; f++) {
        if (this._outputCollection[f] !== undefined && this._outputCollection[f] !== 0) {
          g = true;
        }
      }
      this._outputCollection.splice(m.start, m.deleteCount, ...m.newOutputs.map(() => 0));
      p.push(...this._outputViewModels.splice(m.start, m.deleteCount, ...m.newOutputs.map(f => new GSi(this, f, this._notebookService))));
      this._outputsTop = null;
      this._onDidChangeOutputs.fire(m);
      this._onDidRemoveOutputs.fire(p);
      if (g) {
        this.layoutChange({
          outputHeight: true
        }, "CodeCellViewModel#model.onDidChangeOutputs");
      }
      if (!this._outputCollection.length) {
        this.executionErrorDiagnostic.set(undefined, undefined);
      }
      Bo(p);
    }));
    this._outputCollection = new Array(this.model.outputs.length);
    this._layoutInfo = {
      fontInfo: i?.fontInfo || null,
      editorHeight: 0,
      editorWidth: i ? this.viewContext.notebookOptions.computeCodeCellEditorWidth(i.width) : 0,
      chatHeight: 0,
      statusBarHeight: 0,
      commentOffset: 0,
      commentHeight: 0,
      outputContainerOffset: 0,
      outputTotalHeight: 0,
      outputShowMoreContainerHeight: 0,
      outputShowMoreContainerOffset: 0,
      totalHeight: this.computeTotalHeight(17, 0, 0, 0),
      codeIndicatorHeight: 0,
      outputIndicatorHeight: 0,
      bottomToolbarOffset: 0,
      layoutState: p5.Uninitialized,
      estimatedHasHorizontalScrolling: false
    };
  }
  updateExecutionState(e) {
    if (e.changed) {
      this.executionErrorDiagnostic.set(undefined, undefined);
      this._onDidStartExecution.fire(e);
    } else {
      this._onDidStopExecution.fire(e);
    }
  }
  updateOptions(e) {
    super.updateOptions(e);
    if (e.cellStatusBarVisibility || e.insertToolbarPosition || e.cellToolbarLocation) {
      this.layoutChange({});
    }
  }
  pauseLayout() {
    this._pauseableEmitter.pause();
  }
  resumeLayout() {
    this._pauseableEmitter.resume();
  }
  layoutChange(e, t) {
    this._ensureOutputsTop();
    const i = this.viewContext.notebookOptions.getLayoutConfiguration();
    const r = this.viewContext.notebookOptions.computeBottomToolbarDimensions(this.viewType);
    const s = e.outputShowMoreContainerHeight ? e.outputShowMoreContainerHeight : this._layoutInfo.outputShowMoreContainerHeight;
    const o = Math.max(this._outputMinHeight, this.isOutputCollapsed ? i.collapsedIndicatorHeight : this._outputsTop.getTotalSum());
    const a = e.commentHeight ? this._commentHeight : this._layoutInfo.commentHeight;
    const l = this.layoutInfo;
    if (this.isInputCollapsed) {
      const u = i.collapsedIndicatorHeight;
      const d = o + s;
      const m = e.chatHeight ? this._chatHeight : this._layoutInfo.chatHeight;
      const p = i.cellTopMargin + i.collapsedIndicatorHeight;
      const g = i.cellTopMargin + i.collapsedIndicatorHeight + i.cellBottomMargin + r.bottomToolbarGap + m + a + o + s;
      const f = g - r.bottomToolbarGap - r.bottomToolbarHeight / 2 - s;
      const A = this.viewContext.notebookOptions.computeBottomToolbarOffset(g, this.viewType);
      const w = e.outerWidth !== undefined ? this.viewContext.notebookOptions.computeCodeCellEditorWidth(e.outerWidth) : this._layoutInfo?.editorWidth;
      this._layoutInfo = {
        fontInfo: e.font ?? this._layoutInfo.fontInfo ?? null,
        editorHeight: this._layoutInfo.editorHeight,
        editorWidth: w,
        chatHeight: m,
        statusBarHeight: 0,
        outputContainerOffset: p,
        outputTotalHeight: o,
        outputShowMoreContainerHeight: s,
        outputShowMoreContainerOffset: f,
        commentOffset: p + o,
        commentHeight: a,
        totalHeight: g,
        codeIndicatorHeight: u,
        outputIndicatorHeight: d,
        bottomToolbarOffset: A,
        layoutState: this._layoutInfo.layoutState,
        estimatedHasHorizontalScrolling: false
      };
    } else {
      let u;
      let d;
      let m;
      let p = false;
      const g = e.chatHeight ? this._chatHeight : this._layoutInfo.chatHeight;
      if (!e.editorHeight && this._layoutInfo.layoutState === p5.FromCache && !e.outputHeight) {
        const R = this.estimateEditorHeight(e.font?.lineHeight ?? this._layoutInfo.fontInfo?.lineHeight);
        d = R.editorHeight;
        p = R.hasHorizontalScrolling;
        m = this._layoutInfo.totalHeight;
        u = p5.FromCache;
      } else if (e.editorHeight || this._layoutInfo.layoutState === p5.Measured) {
        d = this._editorHeight;
        m = this.computeTotalHeight(this._editorHeight, o, s, g);
        u = p5.Measured;
        p = this._layoutInfo.estimatedHasHorizontalScrolling;
      } else {
        const R = this.estimateEditorHeight(e.font?.lineHeight ?? this._layoutInfo.fontInfo?.lineHeight);
        d = R.editorHeight;
        p = R.hasHorizontalScrolling;
        m = this.computeTotalHeight(d, o, s, g);
        u = p5.Estimated;
      }
      const f = this.viewContext.notebookOptions.computeEditorStatusbarHeight(this.internalMetadata, this.uri);
      const A = d + f;
      const w = o + s;
      const C = i.editorToolbarHeight + i.cellTopMargin + g + d + f;
      const x = m - r.bottomToolbarGap - r.bottomToolbarHeight / 2 - s;
      const I = this.viewContext.notebookOptions.computeBottomToolbarOffset(m, this.viewType);
      const B = e.outerWidth !== undefined ? this.viewContext.notebookOptions.computeCodeCellEditorWidth(e.outerWidth) : this._layoutInfo?.editorWidth;
      this._layoutInfo = {
        fontInfo: e.font ?? this._layoutInfo.fontInfo ?? null,
        chatHeight: g,
        editorHeight: d,
        editorWidth: B,
        statusBarHeight: f,
        outputContainerOffset: C,
        outputTotalHeight: o,
        outputShowMoreContainerHeight: s,
        outputShowMoreContainerOffset: x,
        commentOffset: C + o,
        commentHeight: a,
        totalHeight: m,
        codeIndicatorHeight: A,
        outputIndicatorHeight: w,
        bottomToolbarOffset: I,
        layoutState: u,
        estimatedHasHorizontalScrolling: p
      };
    }
    this._fireOnDidChangeLayout({
      ...e,
      totalHeight: this.layoutInfo.totalHeight !== l.totalHeight,
      source: t
    });
  }
  _fireOnDidChangeLayout(e) {
    this._pauseableEmitter.fire(e);
  }
  restoreEditorViewState(e, t) {
    super.restoreEditorViewState(e);
    if (t !== undefined && this._layoutInfo.layoutState !== p5.Measured) {
      this._layoutInfo = {
        ...this._layoutInfo,
        totalHeight: t,
        layoutState: p5.FromCache
      };
    }
  }
  getDynamicHeight() {
    this._onLayoutInfoRead.fire();
    return this._layoutInfo.totalHeight;
  }
  getHeight(e) {
    if (this._layoutInfo.layoutState === p5.Uninitialized) {
      const t = this.estimateEditorHeight(e);
      return this.computeTotalHeight(t.editorHeight, 0, 0, 0);
    } else {
      return this._layoutInfo.totalHeight;
    }
  }
  estimateEditorHeight(e = 20) {
    let t = false;
    const i = this.viewContext.getBaseCellEditorOptions(this.language);
    if (this.layoutInfo.fontInfo && i.value.wordWrap === "off") {
      for (let a = 0; a < this.lineCount; a++) {
        if (this.textBuffer.getLineLastNonWhitespaceColumn(a + 1) * (this.layoutInfo.fontInfo.typicalHalfwidthCharacterWidth + this.layoutInfo.fontInfo.letterSpacing) > this.layoutInfo.editorWidth) {
          t = true;
          break;
        }
      }
    }
    const r = t ? 12 : 0;
    const s = this.viewContext.notebookOptions.computeEditorPadding(this.internalMetadata, this.uri);
    return {
      editorHeight: this.lineCount * e + s.top + s.bottom + r,
      hasHorizontalScrolling: t
    };
  }
  computeTotalHeight(e, t, i, r) {
    const s = this.viewContext.notebookOptions.getLayoutConfiguration();
    const {
      bottomToolbarGap: o
    } = this.viewContext.notebookOptions.computeBottomToolbarDimensions(this.viewType);
    return s.editorToolbarHeight + s.cellTopMargin + r + e + this.viewContext.notebookOptions.computeEditorStatusbarHeight(this.internalMetadata, this.uri) + this._commentHeight + t + i + o + s.cellBottomMargin;
  }
  onDidChangeTextModelContent() {
    if (this.getEditState() !== aw.Editing) {
      this.updateEditState(aw.Editing, "onDidChangeTextModelContent");
      this._onDidChangeState.fire({
        contentChanged: true
      });
    }
  }
  onDeselect() {
    this.updateEditState(aw.Preview, "onDeselect");
  }
  updateOutputShowMoreContainerHeight(e) {
    this.layoutChange({
      outputShowMoreContainerHeight: e
    }, "CodeCellViewModel#updateOutputShowMoreContainerHeight");
  }
  updateOutputMinHeight(e) {
    this.outputMinHeight = e;
  }
  unlockOutputHeight() {
    this.outputMinHeight = 0;
    this.layoutChange({
      outputHeight: true
    });
  }
  updateOutputHeight(e, t, i) {
    if (e >= this._outputCollection.length) {
      throw new Error("Output index out of range!");
    }
    this._ensureOutputsTop();
    try {
      if (e === 0 || t > 0) {
        this._outputViewModels[e].setVisible(true);
      } else if (t === 0) {
        this._outputViewModels[e].setVisible(false);
      }
    } catch (r) {
      const s = `Failed to update output height for cell ${this.handle}, output ${e}. this.outputCollection.length: ${this._outputCollection.length}, this._outputViewModels.length: ${this._outputViewModels.length}`;
      throw new Error(`${s}.
 Error: ${r.message}`);
    }
    if (this._outputViewModels[e].visible.get() && t < 28) {
      t = 28;
    }
    this._outputCollection[e] = t;
    if (this._outputsTop.setValue(e, t)) {
      this.layoutChange({
        outputHeight: true
      }, i);
    }
  }
  getOutputOffsetInContainer(e) {
    this._ensureOutputsTop();
    if (e >= this._outputCollection.length) {
      throw new Error("Output index out of range!");
    }
    return this._outputsTop.getPrefixSum(e - 1);
  }
  getOutputOffset(e) {
    return this.layoutInfo.outputContainerOffset + this.getOutputOffsetInContainer(e);
  }
  spliceOutputHeights(e, t, i) {
    this._ensureOutputsTop();
    this._outputsTop.removeValues(e, t);
    if (i.length) {
      const r = new Uint32Array(i.length);
      for (let s = 0; s < i.length; s++) {
        r[s] = i[s];
      }
      this._outputsTop.insertValues(e, r);
    }
    this.layoutChange({
      outputHeight: true
    }, "CodeCellViewModel#spliceOutputs");
  }
  _ensureOutputsTop() {
    if (!this._outputsTop) {
      const e = new Uint32Array(this._outputCollection.length);
      for (let t = 0; t < this._outputCollection.length; t++) {
        e[t] = this._outputCollection[t];
      }
      this._outputsTop = new Uft(e);
    }
  }
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
    this._outputCollection = [];
    this._outputsTop = null;
    Bo(this._outputViewModels);
  }
};
jJ = __decorate([__param(4, Fn), __param(5, JA), __param(6, El), __param(7, qB), __param(8, fl), __param(9, YEe)], jJ);
