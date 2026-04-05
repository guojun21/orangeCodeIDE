"use strict";

// Module: out-build/vs/workbench/common/editor/textDiffEditorModel.js
// Offset: 31137348 (bundle byte offset)
// Size: 1051 bytes
cDf();
WSa = class extends mfu {
  get originalModel() {
    return this._originalModel;
  }
  get modifiedModel() {
    return this._modifiedModel;
  }
  get textDiffEditorModel() {
    return this._textDiffEditorModel;
  }
  constructor(n, e) {
    super(n, e);
    this._textDiffEditorModel = undefined;
    this._originalModel = n;
    this._modifiedModel = e;
    this.updateTextDiffEditorModel();
  }
  async resolve() {
    await super.resolve();
    this.updateTextDiffEditorModel();
  }
  updateTextDiffEditorModel() {
    if (this.originalModel?.isResolved() && this.modifiedModel?.isResolved()) {
      if (this._textDiffEditorModel) {
        this._textDiffEditorModel.original = this.originalModel.textEditorModel;
        this._textDiffEditorModel.modified = this.modifiedModel.textEditorModel;
      } else {
        this._textDiffEditorModel = {
          original: this.originalModel.textEditorModel,
          modified: this.modifiedModel.textEditorModel
        };
      }
    }
  }
  isResolved() {
    return !!this._textDiffEditorModel;
  }
  isReadonly() {
    return !!this.modifiedModel && this.modifiedModel.isReadonly();
  }
  dispose() {
    this._textDiffEditorModel = undefined;
    super.dispose();
  }
};
