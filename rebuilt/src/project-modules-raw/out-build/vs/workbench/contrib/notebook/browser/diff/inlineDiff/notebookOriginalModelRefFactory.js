// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookOriginalModelRefFactory.js
// Offset: 33654516 (bundle byte offset)
// Size: 1487 bytes

rt(), z0(), Ql(), Wt(), td(), U6f=xi("INotebookOriginalModelReferenceFactory"), RIa=class extends igt{
  constructor(e, t){
    super(), this.notebookService=e, this.modelService=t, this.modelsToDispose=new Set
  }
  async createReferencedObject(e, t, i){
    this.modelsToDispose.delete(e);
    const r=t.originalURI, s=this.notebookService.getNotebookTextModel(r);
    if(s)return s;
    const o=await this.modelService.createModelReference(r), a=Ms.fromString(o.object.textEditorModel.getValue()), l=Rze(a);
    return o.dispose(), this.notebookService.createNotebookTextModel(i, r, l)
  }
  destroyReferencedObject(e, t){
    this.modelsToDispose.add(e), (async()=>{
      try{
        const i=await t;
        if(!this.modelsToDispose.has(e))return;
        i.dispose()
      }
      catch{
        
      }
      finally{
        this.modelsToDispose.delete(e)
      }
    })()
  }
}, RIa=__decorate([__param(0, JA), __param(1, El)], RIa), PIa=class{
  get resourceModelCollection(){
    return this._resourceModelCollection||(this._resourceModelCollection=this.instantiationService.createInstance(RIa)), this._resourceModelCollection
  }
  get asyncModelCollection(){
    return this._asyncModelCollection||(this._asyncModelCollection=new c0c(this.resourceModelCollection)), this._asyncModelCollection
  }
  constructor(e){
    this.instantiationService=e, this._resourceModelCollection=void 0, this._asyncModelCollection=void 0
  }
  getOrCreate(e, t){
    return this.asyncModelCollection.acquire(e.originalURI.toString(), e, t)
  }
}, PIa=__decorate([__param(0, ln)], PIa)
}
}), jbn, Lhy=