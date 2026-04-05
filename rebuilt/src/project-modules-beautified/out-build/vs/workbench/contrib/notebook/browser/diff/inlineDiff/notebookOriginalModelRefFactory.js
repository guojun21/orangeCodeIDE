"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookOriginalModelRefFactory.js
// Offset: 33654516 (bundle byte offset)
// Size: 1487 bytes
rt();
z0();
Ql();
Wt();
td();
U6f = xi("INotebookOriginalModelReferenceFactory");
RIa = class extends igt {
  constructor(e, t) {
    super();
    this.notebookService = e;
    this.modelService = t;
    this.modelsToDispose = new Set();
  }
  async createReferencedObject(e, t, i) {
    this.modelsToDispose.delete(e);
    const r = t.originalURI;
    const s = this.notebookService.getNotebookTextModel(r);
    if (s) {
      return s;
    }
    const o = await this.modelService.createModelReference(r);
    const a = Ms.fromString(o.object.textEditorModel.getValue());
    const l = Rze(a);
    o.dispose();
    return this.notebookService.createNotebookTextModel(i, r, l);
  }
  destroyReferencedObject(e, t) {
    this.modelsToDispose.add(e);
    (async () => {
      try {
        const i = await t;
        if (!this.modelsToDispose.has(e)) {
          return;
        }
        i.dispose();
      } catch {} finally {
        this.modelsToDispose.delete(e);
      }
    })();
  }
};
RIa = __decorate([__param(0, JA), __param(1, El)], RIa);
PIa = class {
  get resourceModelCollection() {
    this._resourceModelCollection ||= this.instantiationService.createInstance(RIa);
    return this._resourceModelCollection;
  }
  get asyncModelCollection() {
    this._asyncModelCollection ||= new c0c(this.resourceModelCollection);
    return this._asyncModelCollection;
  }
  constructor(e) {
    this.instantiationService = e;
    this._resourceModelCollection = undefined;
    this._asyncModelCollection = undefined;
  }
  getOrCreate(e, t) {
    return this.asyncModelCollection.acquire(e.originalURI.toString(), e, t);
  }
};
PIa = __decorate([__param(0, ln)], PIa);
