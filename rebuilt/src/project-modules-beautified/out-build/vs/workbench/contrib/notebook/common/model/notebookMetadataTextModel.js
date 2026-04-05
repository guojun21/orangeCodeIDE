"use strict";

// Module: out-build/vs/workbench/contrib/notebook/common/model/notebookMetadataTextModel.js
// Offset: 33531081 (bundle byte offset)
// Size: 2603 bytes
ant();
ph();
iw();
rt();
yn();
ts();
bv();
N_u = class extends at {
  get metadata() {
    return this.notebookModel.metadata;
  }
  get textBuffer() {
    if (this._textBuffer) {
      return this._textBuffer;
    }
    const n = L_u(this.notebookModel.transientOptions.transientDocumentMetadata, this.metadata);
    this._textBuffer = this._register(POn(n, 1).textBuffer);
    this._register(this._textBuffer.onDidChangeContent(() => {
      this._onDidChange.fire();
    }));
    return this._textBuffer;
  }
  constructor(n) {
    super();
    this.notebookModel = n;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._textBufferHash = null;
    this.uri = Qca.generate(this.notebookModel.uri);
    this._register(this.notebookModel.onDidChangeContent(e => {
      if (e.rawEvents.some(t => t.kind === sb.ChangeDocumentMetadata || t.kind === sb.ModelChange)) {
        this._textBuffer?.dispose();
        this._textBuffer = undefined;
        this._textBufferHash = null;
        this._onDidChange.fire();
      }
    }));
  }
  getHash() {
    if (this._textBufferHash !== null) {
      return this._textBufferHash;
    }
    const n = new yde();
    const e = this.textBuffer.createSnapshot(false);
    let t;
    while (t = e.read()) {
      n.update(t);
    }
    this._textBufferHash = n.digest();
    return this._textBufferHash;
  }
  getValue() {
    const n = this.getFullModelRange();
    if (this.textBuffer.getEOL() === `
`) {
      return this.textBuffer.getValueInRange(n, 1);
    } else {
      return this.textBuffer.getValueInRange(n, 2);
    }
  }
  getFullModelRange() {
    const n = this.textBuffer.getLineCount();
    return new Zt(1, 1, n, this.textBuffer.getLineLength(n) + 1);
  }
};
