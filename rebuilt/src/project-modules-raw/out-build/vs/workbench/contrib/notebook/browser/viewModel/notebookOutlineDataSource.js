// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineDataSource.js
// Offset: 33431689 (bundle byte offset)
// Size: 2857 bytes

yn(), rt(), Yr(), Ei(), ay(), ph(), NWl(), rIa=class{
  constructor(e, t, i, r){
    this._editor=e, this._markerService=t, this._configurationService=i, this._outlineEntryFactory=r, this._disposables=new Ut, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._entries=[], this.recomputeState()
  }
  get activeElement(){
    return this._activeEntry
  }
  get entries(){
    return this._entries
  }
  get isEmpty(){
    return this._entries.length===0
  }
  get uri(){
    return this._uri
  }
  async computeFullSymbols(e){
    try{
      const i=this._editor?.getViewModel()?.viewCells.filter(r=>r.cellKind===zd.Code);
      if(i){
        const r=[];
        for(const s of i.slice(0,50))r.push(this._outlineEntryFactory.cacheSymbols(s,e));
        await Promise.allSettled(r)
      }
      this.recomputeState()
    }
    catch(t){
      console.error("Failed to compute notebook outline symbols:",t),this.recomputeState()
    }
  }
  recomputeState(){
    if(this._disposables.clear(), this._activeEntry=void 0, this._uri=void 0, !this._editor.hasModel())return;
    this._uri=this._editor.textModel.uri;
    const e=this._editor;
    if(e.getLength()===0)return;
    const t=e.getViewModel().viewCells, i=[];
    for(const a of t)i.push(...this._outlineEntryFactory.getOutlineEntries(a, i.length));
    if(i.length>0){
      const a=[i[0]],l=[i[0]];
      for(let u=1;
      u<i.length;
      u++){
        const d=i[u];
        for(;
        ;
        ){
          const m=l.length;
          if(m===0){
            a.push(d),l.push(d);
            break
          }
          else{
            const p=l[m-1];
            if(p.level<d.level){
              p.addChild(d),l.push(d);
              break
            }
            else l.pop()
          }
        }
      }
      this._entries=a
    }
    const r=new uo;
    this._disposables.add(r);
    const s=()=>{
      if(e.isDisposed)return;
      const a=d=>{
        for(const m of this._entries)d?m.clearMarkers():m.updateMarkers(this._markerService)
      },l=this._configurationService.getValue("problems.visibility");
      if(l===void 0)return;
      const u=this._configurationService.getValue("outline.problems.enabled");
      l&&u?(r.value=this._markerService.onMarkerChanged(d=>{
        if(e.isDisposed){
          console.error("notebook editor is disposed");
          return
        }
        d.some(m=>e.getCellsInRange().some(p=>Zc(p.uri,m)))&&(a(!1),this._onDidChange.fire({
          
        }))
      }),a(!1)):(r.clear(),a(!0))
    };
    s(), this._disposables.add(this._configurationService.onDidChangeConfiguration(a=>{
      (a.affectsConfiguration("problems.visibility")||a.affectsConfiguration("outline.problems.enabled"))&&(s(),this._onDidChange.fire({
        
      }))
    }));
    const{
      changeEventTriggered:o
    }
    =this.recomputeActive();
    o||this._onDidChange.fire({
      
    })
  }
  recomputeActive(){
    let e;
    const t=this._editor;
    if(t&&t.hasModel()&&t.getLength()>0){
      const i=t.cellAt(t.getFocus().start);
      if(i){
        for(const r of this._entries)if(e=r.find(i,[]),e)break
      }
    }
    return e!==this._activeEntry?(this._activeEntry=e, this._onDidChange.fire({
      affectOnlyActiveElement:!0
    }), {
      changeEventTriggered:!0
    }):{
      changeEventTriggered:!1
    }
  }
  dispose(){
    this._entries.length=0, this._activeEntry=void 0, this._disposables.dispose()
  }
}, rIa=__decorate([__param(1, bk), __param(2, Fn), __param(3, LWl)], rIa)
}
}), sIa, oIa, aIa, S_u=