"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffElementViewModel.js
// Offset: 33533684 (bundle byte offset)
// Size: 16809 bytes
yn();
iw();
rt();
TW();
dIa();
hhy();
B_u();
Rrt();
Sb();
f7e();
ph();
zr();
b6f();
Bki = 25;
A6f = 24;
y6f = 17;
(function (n) {
  n[n.Expanded = 0] = "Expanded";
  n[n.Collapsed = 1] = "Collapsed";
})(kD ||= {});
Rki = 1440;
pIa = class extends at {
  constructor(n, e, t) {
    super();
    this.mainDocumentTextModel = n;
    this.editorEventDispatcher = e;
    this.initData = t;
    this._layoutInfoEmitter = this._register(new Qe());
    this.onDidLayoutChange = this._layoutInfoEmitter.event;
    this._register(this.editorEventDispatcher.onDidChangeLayout(i => this._layoutInfoEmitter.fire({
      outerWidth: true
    })));
  }
};
w6f = class extends pIa {
  constructor(n, e, t) {
    super(n, e, t);
    this.type = "placeholder";
    this.hiddenCells = [];
    this._unfoldHiddenCells = this._register(new Qe());
    this.onUnfoldHiddenCells = this._unfoldHiddenCells.event;
    this.renderOutput = false;
  }
  get totalHeight() {
    return 24 + hwe * 2;
  }
  getHeight(n) {
    return this.totalHeight;
  }
  layoutChange() {}
  showHiddenCells() {
    this._unfoldHiddenCells.fire();
  }
};
M_u = class extends pIa {
  set editorHeight(n) {
    this._layout({
      editorHeight: n
    });
  }
  get editorHeight() {
    throw new Error("Use Cell.layoutInfo.editorHeight");
  }
  set editorMargin(n) {
    this._layout({
      editorMargin: n
    });
  }
  get editorMargin() {
    throw new Error("Use Cell.layoutInfo.editorMargin");
  }
  get layoutInfo() {
    return this._layoutInfo;
  }
  get totalHeight() {
    return this.layoutInfo.totalHeight;
  }
  constructor(n, e, t, i, r, s, o) {
    super(n, i, r);
    this.originalDocumentTextModel = n;
    this.modifiedDocumentTextModel = e;
    this.type = t;
    this.editorHeightCalculator = o;
    this.renderOutput = false;
    this._sourceEditorViewState = null;
    const a = Bki;
    this._layoutInfo = {
      width: 0,
      editorHeight: 0,
      editorMargin: 0,
      metadataHeight: 0,
      cellStatusHeight: a,
      metadataStatusHeight: 0,
      rawOutputHeight: 0,
      outputTotalHeight: 0,
      outputStatusHeight: 0,
      outputMetadataHeight: 0,
      bodyMargin: 32,
      totalHeight: 82 + a + 0,
      layoutState: p5.Uninitialized
    };
    this.cellFoldingState = t === "modifiedMetadata" ? kD.Expanded : kD.Collapsed;
    this.originalMetadata = this._register(new N_u(n));
    this.modifiedMetadata = this._register(new N_u(e));
  }
  async computeHeights() {
    if (this.type === "unchangedMetadata") {
      this.editorHeight = this.editorHeightCalculator.computeHeightFromLines(this.originalMetadata.textBuffer.getLineCount());
    } else {
      const n = this.originalMetadata.uri;
      const e = this.modifiedMetadata.uri;
      this.editorHeight = await this.editorHeightCalculator.diffAndComputeHeight(n, e);
    }
  }
  layoutChange() {
    this._layout({
      recomputeOutput: true
    });
  }
  _layout(n) {
    const e = n.width !== undefined ? n.width : this._layoutInfo.width;
    const t = n.editorHeight !== undefined ? n.editorHeight : this._layoutInfo.editorHeight;
    const i = n.editorMargin !== undefined ? n.editorMargin : this._layoutInfo.editorMargin;
    const r = n.cellStatusHeight !== undefined ? n.cellStatusHeight : this._layoutInfo.cellStatusHeight;
    const s = n.bodyMargin !== undefined ? n.bodyMargin : this._layoutInfo.bodyMargin;
    const o = t + i + r + s;
    const a = {
      width: e,
      editorHeight: t,
      editorMargin: i,
      metadataHeight: 0,
      cellStatusHeight: r,
      metadataStatusHeight: 0,
      outputTotalHeight: 0,
      outputStatusHeight: 0,
      bodyMargin: s,
      rawOutputHeight: 0,
      outputMetadataHeight: 0,
      totalHeight: o,
      layoutState: p5.Measured
    };
    let l = false;
    const u = {};
    if (a.width !== this._layoutInfo.width) {
      u.width = true;
      l = true;
    }
    if (a.editorHeight !== this._layoutInfo.editorHeight) {
      u.editorHeight = true;
      l = true;
    }
    if (a.editorMargin !== this._layoutInfo.editorMargin) {
      u.editorMargin = true;
      l = true;
    }
    if (a.cellStatusHeight !== this._layoutInfo.cellStatusHeight) {
      u.cellStatusHeight = true;
      l = true;
    }
    if (a.bodyMargin !== this._layoutInfo.bodyMargin) {
      u.bodyMargin = true;
      l = true;
    }
    if (a.totalHeight !== this._layoutInfo.totalHeight) {
      u.totalHeight = true;
      l = true;
    }
    if (l) {
      this._layoutInfo = a;
      this._fireLayoutChangeEvent(u);
    }
  }
  getHeight(n) {
    if (this._layoutInfo.layoutState === p5.Uninitialized) {
      const e = this.cellFoldingState === kD.Collapsed ? 0 : this.computeInputEditorHeight(n);
      return this._computeTotalHeight(e);
    } else {
      return this._layoutInfo.totalHeight;
    }
  }
  _computeTotalHeight(n) {
    return n + this._layoutInfo.editorMargin + this._layoutInfo.metadataHeight + this._layoutInfo.cellStatusHeight + this._layoutInfo.metadataStatusHeight + this._layoutInfo.outputTotalHeight + this._layoutInfo.outputStatusHeight + this._layoutInfo.outputMetadataHeight + this._layoutInfo.bodyMargin;
  }
  computeInputEditorHeight(n) {
    return this.editorHeightCalculator.computeHeightFromLines(Math.max(this.originalMetadata.textBuffer.getLineCount(), this.modifiedMetadata.textBuffer.getLineCount()));
  }
  _fireLayoutChangeEvent(n) {
    this._layoutInfoEmitter.fire(n);
    this.editorEventDispatcher.emit([{
      type: xEt.CellLayoutChanged,
      source: this._layoutInfo
    }]);
  }
  getComputedCellContainerWidth(n, e, t) {
    if (t) {
      return n.width - hwe * 2 + (e ? JB.ENTIRE_DIFF_OVERVIEW_WIDTH : 0) - 2;
    } else {
      return (n.width - hwe * 2 + (e ? JB.ENTIRE_DIFF_OVERVIEW_WIDTH : 0)) / 2 - 18 - 2;
    }
  }
  getSourceEditorViewState() {
    return this._sourceEditorViewState;
  }
  saveSpirceEditorViewState(n) {
    this._sourceEditorViewState = n;
  }
};
F_u = class extends pIa {
  hideUnchangedCells() {
    this._hideUnchangedCells.fire();
  }
  set rawOutputHeight(n) {
    this._layout({
      rawOutputHeight: Math.min(Rki, n)
    });
  }
  get rawOutputHeight() {
    throw new Error("Use Cell.layoutInfo.rawOutputHeight");
  }
  set outputStatusHeight(n) {
    this._layout({
      outputStatusHeight: n
    });
  }
  get outputStatusHeight() {
    throw new Error("Use Cell.layoutInfo.outputStatusHeight");
  }
  set outputMetadataHeight(n) {
    this._layout({
      outputMetadataHeight: n
    });
  }
  get outputMetadataHeight() {
    throw new Error("Use Cell.layoutInfo.outputStatusHeight");
  }
  set editorHeight(n) {
    this._layout({
      editorHeight: n
    });
  }
  get editorHeight() {
    throw new Error("Use Cell.layoutInfo.editorHeight");
  }
  set editorMargin(n) {
    this._layout({
      editorMargin: n
    });
  }
  get editorMargin() {
    throw new Error("Use Cell.layoutInfo.editorMargin");
  }
  set metadataStatusHeight(n) {
    this._layout({
      metadataStatusHeight: n
    });
  }
  get metadataStatusHeight() {
    throw new Error("Use Cell.layoutInfo.outputStatusHeight");
  }
  set metadataHeight(n) {
    this._layout({
      metadataHeight: n
    });
  }
  get metadataHeight() {
    throw new Error("Use Cell.layoutInfo.metadataHeight");
  }
  set renderOutput(n) {
    this._renderOutput = n;
    this._layout({
      recomputeOutput: true
    });
    this._stateChangeEmitter.fire({
      renderOutput: this._renderOutput
    });
  }
  get renderOutput() {
    return this._renderOutput;
  }
  get layoutInfo() {
    return this._layoutInfo;
  }
  get totalHeight() {
    return this.layoutInfo.totalHeight;
  }
  get ignoreOutputs() {
    return this.configurationService.getValue("notebook.diff.ignoreOutputs") || !!this.mainDocumentTextModel?.transientOptions.transientOutputs;
  }
  get ignoreMetadata() {
    return this.configurationService.getValue("notebook.diff.ignoreMetadata");
  }
  constructor(n, e, t, i, r, s, o, a, l, u) {
    super(n, r, s);
    this.type = i;
    this.index = a;
    this.configurationService = l;
    this.diffEditorHeightCalculator = u;
    this._stateChangeEmitter = this._register(new Qe());
    this.onDidStateChange = this._stateChangeEmitter.event;
    this._hideUnchangedCells = this._register(new Qe());
    this.onHideUnchangedCells = this._hideUnchangedCells.event;
    this._renderOutput = true;
    this._sourceEditorViewState = null;
    this._outputEditorViewState = null;
    this._metadataEditorViewState = null;
    this.original = e ? this._register(new Dki(e, o)) : undefined;
    this.modified = t ? this._register(new Dki(t, o)) : undefined;
    const d = this._estimateEditorHeight(s.fontInfo);
    const m = Bki;
    this._layoutInfo = {
      width: 0,
      editorHeight: d,
      editorMargin: 0,
      metadataHeight: 0,
      cellStatusHeight: m,
      metadataStatusHeight: this.ignoreMetadata ? 0 : Bki,
      rawOutputHeight: 0,
      outputTotalHeight: 0,
      outputStatusHeight: this.ignoreOutputs ? 0 : Bki,
      outputMetadataHeight: 0,
      bodyMargin: 32,
      totalHeight: 82 + m + d,
      layoutState: p5.Uninitialized
    };
    this.cellFoldingState = t?.getTextBufferHash() !== e?.getTextBufferHash() ? kD.Expanded : kD.Collapsed;
    this.metadataFoldingState = kD.Collapsed;
    this.outputFoldingState = kD.Collapsed;
  }
  layoutChange() {
    this._layout({
      recomputeOutput: true
    });
  }
  _estimateEditorHeight(n) {
    const e = n?.lineHeight ?? 17;
    switch (this.type) {
      case "unchanged":
      case "insert":
        {
          const t = this.modified.textModel.textBuffer.getLineCount();
          return t * e + g2e(t).top + g2e(t).bottom;
        }
      case "delete":
      case "modified":
        {
          const t = this.original.textModel.textBuffer.getLineCount();
          return t * e + g2e(t).top + g2e(t).bottom;
        }
    }
  }
  _layout(n) {
    const e = n.width !== undefined ? n.width : this._layoutInfo.width;
    const t = n.editorHeight !== undefined ? n.editorHeight : this._layoutInfo.editorHeight;
    const i = n.editorMargin !== undefined ? n.editorMargin : this._layoutInfo.editorMargin;
    const r = n.metadataHeight !== undefined ? n.metadataHeight : this._layoutInfo.metadataHeight;
    const s = n.cellStatusHeight !== undefined ? n.cellStatusHeight : this._layoutInfo.cellStatusHeight;
    const o = n.metadataStatusHeight !== undefined ? n.metadataStatusHeight : this._layoutInfo.metadataStatusHeight;
    const a = n.rawOutputHeight !== undefined ? n.rawOutputHeight : this._layoutInfo.rawOutputHeight;
    const l = n.outputStatusHeight !== undefined ? n.outputStatusHeight : this._layoutInfo.outputStatusHeight;
    const u = n.bodyMargin !== undefined ? n.bodyMargin : this._layoutInfo.bodyMargin;
    const d = n.outputMetadataHeight !== undefined ? n.outputMetadataHeight : this._layoutInfo.outputMetadataHeight;
    const m = this.ignoreOutputs ? 0 : n.recomputeOutput || n.rawOutputHeight !== undefined || n.outputMetadataHeight !== undefined ? this._getOutputTotalHeight(a, d) : this._layoutInfo.outputTotalHeight;
    const p = t + i + s + r + o + m + l + u;
    const g = {
      width: e,
      editorHeight: t,
      editorMargin: i,
      metadataHeight: r,
      cellStatusHeight: s,
      metadataStatusHeight: o,
      outputTotalHeight: m,
      outputStatusHeight: l,
      bodyMargin: u,
      rawOutputHeight: a,
      outputMetadataHeight: d,
      totalHeight: p,
      layoutState: p5.Measured
    };
    let f = false;
    const A = {};
    if (g.width !== this._layoutInfo.width) {
      A.width = true;
      f = true;
    }
    if (g.editorHeight !== this._layoutInfo.editorHeight) {
      A.editorHeight = true;
      f = true;
    }
    if (g.editorMargin !== this._layoutInfo.editorMargin) {
      A.editorMargin = true;
      f = true;
    }
    if (g.metadataHeight !== this._layoutInfo.metadataHeight) {
      A.metadataHeight = true;
      f = true;
    }
    if (g.cellStatusHeight !== this._layoutInfo.cellStatusHeight) {
      A.cellStatusHeight = true;
      f = true;
    }
    if (g.metadataStatusHeight !== this._layoutInfo.metadataStatusHeight) {
      A.metadataStatusHeight = true;
      f = true;
    }
    if (g.outputTotalHeight !== this._layoutInfo.outputTotalHeight) {
      A.outputTotalHeight = true;
      f = true;
    }
    if (g.outputStatusHeight !== this._layoutInfo.outputStatusHeight) {
      A.outputStatusHeight = true;
      f = true;
    }
    if (g.bodyMargin !== this._layoutInfo.bodyMargin) {
      A.bodyMargin = true;
      f = true;
    }
    if (g.outputMetadataHeight !== this._layoutInfo.outputMetadataHeight) {
      A.outputMetadataHeight = true;
      f = true;
    }
    if (g.totalHeight !== this._layoutInfo.totalHeight) {
      A.totalHeight = true;
      f = true;
    }
    if (f) {
      this._layoutInfo = g;
      this._fireLayoutChangeEvent(A);
    }
  }
  getHeight(n) {
    if (this._layoutInfo.layoutState === p5.Uninitialized) {
      const e = this.cellFoldingState === kD.Collapsed ? 0 : this.computeInputEditorHeight(n);
      return this._computeTotalHeight(e);
    } else {
      return this._layoutInfo.totalHeight;
    }
  }
  _computeTotalHeight(n) {
    return n + this._layoutInfo.editorMargin + this._layoutInfo.metadataHeight + this._layoutInfo.cellStatusHeight + this._layoutInfo.metadataStatusHeight + this._layoutInfo.outputTotalHeight + this._layoutInfo.outputStatusHeight + this._layoutInfo.outputMetadataHeight + this._layoutInfo.bodyMargin;
  }
  computeInputEditorHeight(n) {
    const e = Math.max(this.original?.textModel.textBuffer.getLineCount() ?? 1, this.modified?.textModel.textBuffer.getLineCount() ?? 1);
    return this.diffEditorHeightCalculator.computeHeightFromLines(e);
  }
  _getOutputTotalHeight(n, e) {
    if (this.outputFoldingState === kD.Collapsed) {
      return 0;
    } else if (this.renderOutput) {
      if (this.isOutputEmpty()) {
        return 24;
      } else {
        return this.getRichOutputTotalHeight() + e;
      }
    } else {
      return n;
    }
  }
  _fireLayoutChangeEvent(n) {
    this._layoutInfoEmitter.fire(n);
    this.editorEventDispatcher.emit([{
      type: xEt.CellLayoutChanged,
      source: this._layoutInfo
    }]);
  }
  getComputedCellContainerWidth(n, e, t) {
    if (t) {
      return n.width - hwe * 2 + (e ? JB.ENTIRE_DIFF_OVERVIEW_WIDTH : 0) - 2;
    } else {
      return (n.width - hwe * 2 + (e ? JB.ENTIRE_DIFF_OVERVIEW_WIDTH : 0)) / 2 - 18 - 2;
    }
  }
  getOutputEditorViewState() {
    return this._outputEditorViewState;
  }
  saveOutputEditorViewState(n) {
    this._outputEditorViewState = n;
  }
  getMetadataEditorViewState() {
    return this._metadataEditorViewState;
  }
  saveMetadataEditorViewState(n) {
    this._metadataEditorViewState = n;
  }
  getSourceEditorViewState() {
    return this._sourceEditorViewState;
  }
  saveSpirceEditorViewState(n) {
    this._sourceEditorViewState = n;
  }
};
mwe = class extends F_u {
  get originalDocument() {
    return this.otherDocumentTextModel;
  }
  get modifiedDocument() {
    return this.mainDocumentTextModel;
  }
  constructor(n, e, t, i, r, s, o, a, l, u, d) {
    super(n, t, i, r, s, o, a, u, l, d);
    this.otherDocumentTextModel = e;
    this.type = r;
    this.cellFoldingState = this.modified.textModel.getValue() !== this.original.textModel.getValue() ? kD.Expanded : kD.Collapsed;
    this.metadataFoldingState = kD.Collapsed;
    this.outputFoldingState = kD.Collapsed;
    if (this.checkMetadataIfModified()) {
      this.metadataFoldingState = kD.Expanded;
    }
    if (this.checkIfOutputsModified()) {
      this.outputFoldingState = kD.Expanded;
    }
    this._register(this.original.onDidChangeOutputLayout(() => {
      this._layout({
        recomputeOutput: true
      });
    }));
    this._register(this.modified.onDidChangeOutputLayout(() => {
      this._layout({
        recomputeOutput: true
      });
    }));
    this._register(this.modified.textModel.onDidChangeContent(() => {
      if (n.transientOptions.cellContentMetadata) {
        const m = [...Object.keys(n.transientOptions.cellContentMetadata)];
        const p = Object.assign({}, this.modified.metadata);
        const g = this.original.metadata;
        for (const f of m) {
          if (f in g) {
            p[f] = g[f];
          }
        }
        this.modified.textModel.metadata = p;
      }
    }));
  }
  checkIfInputModified() {
    if (this.original.textModel.getTextBufferHash() === this.modified.textModel.getTextBufferHash()) {
      return false;
    } else {
      return {
        reason: "Cell content has changed"
      };
    }
  }
  checkIfOutputsModified() {
    if (this.mainDocumentTextModel.transientOptions.transientOutputs || this.ignoreOutputs) {
      return false;
    }
    const n = phy(this.original?.outputs ?? [], this.modified?.outputs ?? []);
    if (n === 0) {
      return false;
    } else {
      return {
        reason: n === 1 ? "Output metadata has changed" : undefined,
        kind: n
      };
    }
  }
  checkMetadataIfModified() {
    if (this.ignoreMetadata) {
      return false;
    } else if (VC(CEt(this.mainDocumentTextModel.transientOptions.transientCellMetadata, this.original?.metadata || {}, this.original?.language)) !== VC(CEt(this.mainDocumentTextModel.transientOptions.transientCellMetadata, this.modified?.metadata ?? {}, this.modified?.language))) {
      return {
        reason: undefined
      };
    } else {
      return false;
    }
  }
  updateOutputHeight(n, e, t) {
    if (n === s1.Original) {
      this.original.updateOutputHeight(e, t);
    } else {
      this.modified.updateOutputHeight(e, t);
    }
  }
  getOutputOffsetInContainer(n, e) {
    if (n === s1.Original) {
      return this.original.getOutputOffset(e);
    } else {
      return this.modified.getOutputOffset(e);
    }
  }
  getOutputOffsetInCell(n, e) {
    const t = this.getOutputOffsetInContainer(n, e);
    return this._layoutInfo.editorHeight + this._layoutInfo.editorMargin + this._layoutInfo.metadataHeight + this._layoutInfo.cellStatusHeight + this._layoutInfo.metadataStatusHeight + this._layoutInfo.outputStatusHeight + this._layoutInfo.bodyMargin / 2 + t;
  }
  isOutputEmpty() {
    if (this.mainDocumentTextModel.transientOptions.transientOutputs) {
      return true;
    } else if (this.checkIfOutputsModified()) {
      return false;
    } else {
      return (this.original?.outputs || []).length === 0;
    }
  }
  getRichOutputTotalHeight() {
    return Math.max(this.original.getOutputTotalHeight(), this.modified.getOutputTotalHeight());
  }
  getNestedCellViewModel(n) {
    if (n === s1.Original) {
      return this.original;
    } else {
      return this.modified;
    }
  }
  getCellByUri(n) {
    if (n.toString() === this.original.uri.toString()) {
      return this.original;
    } else {
      return this.modified;
    }
  }
  computeInputEditorHeight(n) {
    if (this.type === "modified" && typeof this.editorHeightWithUnchangedLinesCollapsed == "number" && this.checkIfInputModified()) {
      return this.editorHeightWithUnchangedLinesCollapsed;
    } else {
      return super.computeInputEditorHeight(n);
    }
  }
  async computeModifiedInputEditorHeight() {
    if (this.checkIfInputModified()) {
      this.editorHeightWithUnchangedLinesCollapsed = this._layoutInfo.editorHeight = await this.diffEditorHeightCalculator.diffAndComputeHeight(this.original.uri, this.modified.uri);
    }
  }
  async computeModifiedMetadataEditorHeight() {
    if (this.checkMetadataIfModified()) {
      const n = Dg.generateCellPropertyUri(this.originalDocument.uri, this.original.handle, _n.vscodeNotebookCellMetadata);
      const e = Dg.generateCellPropertyUri(this.modifiedDocument.uri, this.modified.handle, _n.vscodeNotebookCellMetadata);
      this._layoutInfo.metadataHeight = await this.diffEditorHeightCalculator.diffAndComputeHeight(n, e);
    }
  }
  async computeEditorHeights() {
    if (this.type !== "unchanged") {
      await Promise.all([this.computeModifiedInputEditorHeight(), this.computeModifiedMetadataEditorHeight()]);
    }
  }
};
O_u = class extends F_u {
  get cellViewModel() {
    if (this.type === "insert") {
      return this.modified;
    } else {
      return this.original;
    }
  }
  get originalDocument() {
    if (this.type === "insert") {
      return this.otherDocumentTextModel;
    } else {
      return this.mainDocumentTextModel;
    }
  }
  get modifiedDocument() {
    if (this.type === "insert") {
      return this.mainDocumentTextModel;
    } else {
      return this.otherDocumentTextModel;
    }
  }
  constructor(n, e, t, i, r, s, o, a, l, u, d) {
    super(n, t, i, r, s, o, a, d, l, u);
    this.otherDocumentTextModel = e;
    this.type = r;
    this._register(this.cellViewModel.onDidChangeOutputLayout(() => {
      this._layout({
        recomputeOutput: true
      });
    }));
  }
  checkIfInputModified() {
    return {
      reason: "Cell content has changed"
    };
  }
  getNestedCellViewModel(n) {
    if (this.type === "insert") {
      return this.modified;
    } else {
      return this.original;
    }
  }
  checkIfOutputsModified() {
    return false;
  }
  checkMetadataIfModified() {
    return false;
  }
  updateOutputHeight(n, e, t) {
    this.cellViewModel?.updateOutputHeight(e, t);
  }
  getOutputOffsetInContainer(n, e) {
    return this.cellViewModel.getOutputOffset(e);
  }
  getOutputOffsetInCell(n, e) {
    const t = this.cellViewModel.getOutputOffset(e);
    return this._layoutInfo.editorHeight + this._layoutInfo.editorMargin + this._layoutInfo.metadataHeight + this._layoutInfo.cellStatusHeight + this._layoutInfo.metadataStatusHeight + this._layoutInfo.outputStatusHeight + this._layoutInfo.bodyMargin / 2 + t;
  }
  isOutputEmpty() {
    if (this.mainDocumentTextModel.transientOptions.transientOutputs) {
      return true;
    } else {
      return (this.original?.outputs || this.modified?.outputs || []).length === 0;
    }
  }
  getRichOutputTotalHeight() {
    return this.cellViewModel?.getOutputTotalHeight() ?? 0;
  }
  getCellByUri(n) {
    return this.cellViewModel;
  }
};
(function (n) {
  n[n.Unchanged = 0] = "Unchanged";
  n[n.Metadata = 1] = "Metadata";
  n[n.Other = 2] = "Other";
})(_6f ||= {});
