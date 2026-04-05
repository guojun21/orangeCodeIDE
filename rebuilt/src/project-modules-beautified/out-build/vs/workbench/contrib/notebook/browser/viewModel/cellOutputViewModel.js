"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellOutputViewModel.js
// Offset: 32981414 (bundle byte offset)
// Size: 1525 bytes
yn();
rt();
Uc();
ph();
L9f = 0;
GSi = class extends at {
  setVisible(n = true, e = false) {
    if (!!n || !this.alwaysShow) {
      if (e && n) {
        this.alwaysShow = true;
      }
      this.visible.set(n, undefined);
    }
  }
  get model() {
    return this._outputRawData;
  }
  get pickedMimeType() {
    return this._pickedMimeType;
  }
  set pickedMimeType(n) {
    this._pickedMimeType = n;
  }
  constructor(n, e, t) {
    super();
    this.cellViewModel = n;
    this._outputRawData = e;
    this._notebookService = t;
    this._onDidResetRendererEmitter = this._register(new Qe());
    this.onDidResetRenderer = this._onDidResetRendererEmitter.event;
    this.alwaysShow = false;
    this.visible = Ua("outputVisible", false);
    this.outputHandle = L9f++;
  }
  hasMultiMimeType() {
    if (this._outputRawData.outputs.length < 2) {
      return false;
    }
    const n = this._outputRawData.outputs[0].mime;
    return this._outputRawData.outputs.some(e => e.mime !== n);
  }
  resolveMimeTypes(n, e) {
    const t = this._notebookService.getOutputMimeTypeInfo(n, e, this.model);
    const i = t.findIndex(r => r.rendererId !== uCt && r.isTrusted);
    return [t, Math.max(i, 0)];
  }
  resetRenderer() {
    this._pickedMimeType = undefined;
    this.model.bumpVersion();
    this._onDidResetRendererEmitter.fire();
  }
  toRawJSON() {
    return {
      outputs: this._outputRawData.outputs
    };
  }
};
