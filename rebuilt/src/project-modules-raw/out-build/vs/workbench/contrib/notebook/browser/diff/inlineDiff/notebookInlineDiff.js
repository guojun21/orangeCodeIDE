// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookInlineDiff.js
// Offset: 33656003 (bundle byte offset)
// Size: 3815 bytes

yn(), rt(), Uc(), Wt(), qbn(), PU(), Rhy(), F6f(), O6f(), vxe(), _Ia(), Er(), Phy(), L6f(), jbn=class extends at{
  static{
    this.ID="workbench.notebook.inlineDiffDecoration"
  }
  constructor(e, t, i, r){
    super(), this.notebookEditor=e, this.notebookEditorWorkerService=t, this.instantiationService=i, this.logService=r, this.cellDecorators=new Map, this.listeners=[], this.logService.debug("inlineDiff", "Watching for previous model"), this._register(Oc(s=>{
      this.previous=this.notebookEditor.notebookOptions.previousModelToCompare.read(s),this.previous&&(this.logService.debug("inlineDiff","Previous model set"),this.notebookEditor.hasModel()?this.initialize():(this.logService.debug("inlineDiff","Waiting for model to attach"),this.listeners.push(In.once(this.notebookEditor.onDidAttachViewModel)(()=>this.initialize()))))
    }))
  }
  clear(){
    this.listeners.forEach(e=>e.dispose()), this.cellDecorators.forEach((e, t)=>{
      e.dispose(),this.cellDecorators.delete(t)
    }), this.insertedCellDecorator?.dispose(), this.deletedCellDecorator?.dispose(), this.cachedNotebookDiff=void 0, this.listeners=[], this.logService.debug("inlineDiff", "Cleared decorations and listeners")
  }
  dispose(){
    this.logService.debug("inlineDiff", "Disposing"), this.clear(), super.dispose()
  }
  initialize(){
    if(this.clear(), !this.previous)return;
    this.insertedCellDecorator=this.instantiationService.createInstance(Y_u, this.notebookEditor), this.deletedCellDecorator=this.instantiationService.createInstance(Hki, this.notebookEditor, void 0), this._update();
    const e=In.debounce(this.notebookEditor.onDidChangeVisibleRanges, t=>t, 100, void 0, void 0, void 0, this._store);
    if(this.listeners.push(e(()=>this._update())), this.listeners.push(this.notebookEditor.onDidChangeModel(()=>this._update())), this.notebookEditor.textModel){
      const t=In.debounce(this.notebookEditor.textModel.onDidChangeContent,(r,s)=>s,100,void 0,void 0,void 0,this._store),i=In.debounce(this.previous.onDidChangeContent,(r,s)=>s,100,void 0,void 0,void 0,this._store);
      this.listeners.push(t(()=>this._update())),this.listeners.push(i(()=>this._update()))
    }
    this.logService.debug("inlineDiff", "Initialized")
  }
  async _update(){
    const e=this.notebookEditor.getViewModel()?.notebookDocument;
    if(!this.previous||!e){
      this.logService.debug("inlineDiff","Update skipped - no original or current document");
      return
    }
    if(!this.cachedNotebookDiff||this.cachedNotebookDiff.originalVersion!==this.previous.versionId||this.cachedNotebookDiff.version!==e.versionId){
      let t={
        cellDiffInfo:[]
      };
      try{
        const i=await this.notebookEditorWorkerService.computeDiff(this.previous.uri,e.uri);
        t=wIa(this.previous,e,i)
      }
      catch(i){
        this.logService.error("inlineDiff",`Error computing diff:
`+i);
        return
      }
      this.cachedNotebookDiff={
        cellDiffInfo:t.cellDiffInfo,originalVersion:this.previous.versionId,version:e.versionId
      },this.insertedCellDecorator?.apply(t.cellDiffInfo),this.deletedCellDecorator?.apply(t.cellDiffInfo,this.previous)
    }
    await this.updateCells(this.previous, e, this.cachedNotebookDiff.cellDiffInfo)
  }
  async updateCells(e, t, i){
    const r=new Set;
    i.forEach(s=>{
      if(s.type==="modified"){
        const o=t.cells[s.modifiedCellIndex],a=e.cells[s.originalCellIndex],l=this.notebookEditor.codeEditors.find(([u])=>u.handle===o.handle)?.[1];
        if(l){
          const u=this.cellDecorators.get(o);
          if(u?.modifiedCell!==o||u?.originalCell!==a){
            u?.dispose();
            const d=this.instantiationService.createInstance(DIa,this.notebookEditor,o,a,l);
            this.cellDecorators.set(o,d),r.add(d),this._register(l.onDidDispose(()=>{
              d.dispose(),this.cellDecorators.get(o)===d&&this.cellDecorators.delete(o)
            }))
          }
          else u&&r.add(u)
        }
      }
    }), this.cellDecorators.forEach((s, o)=>{
      r.has(s)||(s.dispose(),this.cellDecorators.delete(o))
    })
  }
}, jbn=__decorate([__param(1, IEt), __param(2, ln), __param(3, awe)], jbn), HJ(jbn.ID, jbn), Vi(U6f, PIa, 2), Vi(K_u, IIa, 2)
}
}), LIa, Nhy=