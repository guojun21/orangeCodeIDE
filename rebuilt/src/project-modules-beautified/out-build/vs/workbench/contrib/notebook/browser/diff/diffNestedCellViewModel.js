"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffNestedCellViewModel.js
// Offset: 33526718 (bundle byte offset)
// Size: 2549 bytes
yn();
rt();
Bc();
UVe();
N9f();
z0();
Dki = class extends at {
  get id() {
    return this._id;
  }
  get outputs() {
    return this.textModel.outputs;
  }
  get language() {
    return this.textModel.language;
  }
  get metadata() {
    return this.textModel.metadata;
  }
  get uri() {
    return this.textModel.uri;
  }
  get handle() {
    return this.textModel.handle;
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
  get outputsViewModels() {
    return this._outputViewModels;
  }
  constructor(e, t) {
    super();
    this.textModel = e;
    this._notebookService = t;
    this._onDidChangeState = this._register(new Qe());
    this._hoveringOutput = false;
    this._focusOnOutput = false;
    this._focusInputInOutput = false;
    this._outputCollection = [];
    this._outputsTop = null;
    this._onDidChangeOutputLayout = this._register(new Qe());
    this.onDidChangeOutputLayout = this._onDidChangeOutputLayout.event;
    this._id = Wr();
    this._outputViewModels = this.textModel.outputs.map(i => new GSi(this, i, this._notebookService));
    this._register(this.textModel.onDidChangeOutputs(i => {
      this._outputCollection.splice(i.start, i.deleteCount, ...i.newOutputs.map(() => 0));
      this._outputViewModels.splice(i.start, i.deleteCount, ...i.newOutputs.map(s => new GSi(this, s, this._notebookService))).forEach(s => s.dispose());
      this._outputsTop = null;
      this._onDidChangeOutputLayout.fire();
    }));
    this._outputCollection = new Array(this.textModel.outputs.length);
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
  getOutputOffset(e) {
    this._ensureOutputsTop();
    if (e >= this._outputCollection.length) {
      throw new Error("Output index out of range!");
    }
    return this._outputsTop.getPrefixSum(e - 1);
  }
  updateOutputHeight(e, t) {
    if (e >= this._outputCollection.length) {
      throw new Error("Output index out of range!");
    }
    this._ensureOutputsTop();
    this._outputCollection[e] = t;
    if (this._outputsTop.setValue(e, t)) {
      this._onDidChangeOutputLayout.fire();
    }
  }
  getOutputTotalHeight() {
    this._ensureOutputsTop();
    return this._outputsTop?.getTotalSum() ?? 0;
  }
  dispose() {
    super.dispose();
    this._outputViewModels.forEach(e => {
      e.dispose();
    });
  }
};
Dki = __decorate([__param(1, JA)], Dki);
