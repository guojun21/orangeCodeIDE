// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookViewModelImpl.js
// Offset: 33347662 (bundle byte offset)
// Size: 16276 bytes

Ate(), _s(), yn(), rt(), sE(), oa(), YI(), ts(), DOt(), sgh(), bv(), td(), Wt(), VD(), HTa(), Sb(), G0a(), Ddy(), l2e(), VSi(), ph(), uD(), W1e(), J8f=()=>{
  throw new Error("Invalid change accessor")
}, G8f=class{
  constructor(){
    this._decorationsTree=new mOn
  }
  intervalSearch(n, e, t, i, r, s=!1){
    return this._decorationsTree.intervalSearch(n, e, t, i, r, s)
  }
  search(n, e, t, i, r){
    return this._decorationsTree.search(n, e, i, r)
  }
  collectNodesFromOwner(n){
    return this._decorationsTree.collectNodesFromOwner(n)
  }
  collectNodesPostOrder(){
    return this._decorationsTree.collectNodesPostOrder()
  }
  insert(n){
    this._decorationsTree.insert(n)
  }
  delete(n){
    this._decorationsTree.delete(n)
  }
  resolveNode(n, e){
    this._decorationsTree.resolveNode(n, e)
  }
  acceptReplace(n, e, t, i){
    this._decorationsTree.acceptReplace(n, e, t, i)
  }
}, p_u=[Zh.register({
  description:"notebook-view-model-tracked-range-always-grows-when-typing-at-edges", stickiness:0
}), Zh.register({
  description:"notebook-view-model-tracked-range-never-grows-when-typing-at-edges", stickiness:1
}), Zh.register({
  description:"notebook-view-model-tracked-range-grows-only-when-typing-before", stickiness:2
}), Zh.register({
  description:"notebook-view-model-tracked-range-grows-only-when-typing-after", stickiness:3
})], JTa=0, GTa=class extends at{
  get options(){
    return this._options
  }
  get onDidChangeOptions(){
    return this._onDidChangeOptions.event
  }
  get viewCells(){
    return this._viewCells
  }
  get length(){
    return this._viewCells.length
  }
  get notebookDocument(){
    return this._notebook
  }
  get uri(){
    return this._notebook.uri
  }
  get metadata(){
    return this._notebook.metadata
  }
  get isRepl(){
    return this.viewType==="repl"
  }
  get onDidChangeViewCells(){
    return this._onDidChangeViewCells.event
  }
  get lastNotebookEditResource(){
    return this._lastNotebookEditResource.length?this._lastNotebookEditResource[this._lastNotebookEditResource.length-1]:null
  }
  get layoutInfo(){
    return this._layoutInfo
  }
  get onDidChangeSelection(){
    return this._onDidChangeSelection.event
  }
  get selectionHandles(){
    const e=new Set, t=[];
    return Qne(this._selectionCollection.selections).map(i=>i<this.length?this.cellAt(i):void 0).forEach(i=>{
      i&&!e.has(i.handle)&&t.push(i.handle)
    }), t
  }
  set selectionHandles(e){
    const t=e.map(i=>this._viewCells.findIndex(r=>r.handle===i));
    this._selectionCollection.setSelections(Vpi(t), !0, "model")
  }
  get focused(){
    return this._focused
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this.viewType=e, this._notebook=t, this._viewContext=i, this._layoutInfo=r, this._options=s, this._instantiationService=o, this._bulkEditService=a, this._undoService=l, this._textModelService=u, this.notebookExecutionStateService=d, this._localStore=this._register(new Ut), this._handleToViewCellMapping=new Map, this._onDidChangeOptions=this._register(new Qe), this._viewCells=[], this._onDidChangeViewCells=this._register(new Qe), this._lastNotebookEditResource=[], this._onDidChangeSelection=this._register(new Qe), this._selectionCollection=this._register(new q8f), this._decorationsTree=new G8f, this._decorations=Object.create(null), this._lastDecorationId=0, this._foldingRanges=null, this._onDidFoldingStateChanged=new Qe, this.onDidFoldingStateChanged=this._onDidFoldingStateChanged.event, this._hiddenRanges=[], this._focused=!0, this._decorationIdToCellMap=new Map, this._statusBarItemIdToCellMap=new Map, this._lastOverviewRulerDecorationId=0, this._overviewRulerDecorations=new Map, JTa++, this.id="$notebookViewModel"+JTa, this._instanceId=V0c(JTa);
    const m=(g, f)=>{
      const A=g.map(I=>[I[0],I[1],I[2].map(B=>H8f(this._instantiationService,this,B,this._viewContext))]);
      A.reverse().forEach(I=>{
        const B=this._viewCells.splice(I[0],I[1],...I[2]);
        this._decorationsTree.acceptReplace(I[0],I[1],I[2].length,!0),B.forEach(R=>{
          this._handleToViewCellMapping.delete(R.handle),R.dispose()
        }),I[2].forEach(R=>{
          this._handleToViewCellMapping.set(R.handle,R),this._localStore.add(R)
        })
      });
      const w=this.selectionHandles;
      this._onDidChangeViewCells.fire({
        synchronous:f,splices:A
      });
      let C=[];
      if(w.length){
        const I=w[0],B=this._viewCells.indexOf(this.getCellByHandle(I));
        C=[I];
        let R=0;
        for(let N=0;
        N<A.length;
        N++){
          const M=A[0];
          if(M[0]+M[1]<=B){
            R+=M[2].length-M[1];
            continue
          }
          if(M[0]>B){
            C=[I];
            break
          }
          if(M[0]+M[1]>B){
            C=[this._viewCells[M[0]+R].handle];
            break
          }
        }
      }
      const x=C.map(I=>this._viewCells.findIndex(B=>B.handle===I));
      this._selectionCollection.setState(Vpi([x[0]])[0],Vpi(x),!0,"model")
    };
    this._register(this._notebook.onDidChangeContent(g=>{
      for(let f=0;
      f<g.rawEvents.length;
      f++){
        const A=g.rawEvents[f];
        let w=[];
        const C=g.synchronous??!0;
        if(A.kind===sb.ModelChange||A.kind===sb.Initialize){
          w=A.changes,m(w,C);
          continue
        }
        else if(A.kind===sb.Move)m([[A.index,A.length,[]]],C),m([[A.newIdx,0,A.cells]],C);
        else continue
      }
    })), this._register(this._notebook.onDidChangeContent(g=>{
      g.rawEvents.forEach(f=>{
        f.kind===sb.ChangeDocumentMetadata&&this._viewContext.eventDispatcher.emit([new qEf(this._notebook.metadata)])
      }),g.endSelectionState&&this.updateSelectionsState(g.endSelectionState)
    })), this._register(this._viewContext.eventDispatcher.onDidChangeLayout(g=>{
      this._layoutInfo=g.value,this._viewCells.forEach(f=>{
        f.cellKind===zd.Markup?(g.source.width||g.source.fontInfo)&&f.layoutChange({
          outerWidth:g.value.width,font:g.value.fontInfo
        }):g.source.width!==void 0&&f.layoutChange({
          outerWidth:g.value.width,font:g.value.fontInfo
        })
      })
    })), this._register(this._viewContext.notebookOptions.onDidChangeOptions(g=>{
      for(let f=0;
      f<this.length;
      f++)this._viewCells[f].updateOptions(g)
    })), this._register(d.onDidChangeExecution(g=>{
      if(g.type!==vJ.cell)return;
      const f=this.getCellByHandle(g.cellHandle);
      f instanceof jJ&&f.updateExecutionState(g)
    })), this._register(this._selectionCollection.onDidChangeSelection(g=>{
      this._onDidChangeSelection.fire(g)
    }));
    const p=this.isRepl?this._notebook.cells.length-1:this._notebook.cells.length;
    for(let g=0;
    g<p;
    g++)this._viewCells.push(H8f(this._instantiationService, this, this._notebook.cells[g], this._viewContext));
    this._viewCells.forEach(g=>{
      this._handleToViewCellMapping.set(g.handle,g)
    })
  }
  updateOptions(e){
    this._options={
      ...this._options,...e
    }, this._viewCells.forEach(t=>t.updateOptions({
      readonly:this._options.isReadOnly
    })), this._onDidChangeOptions.fire()
  }
  getFocus(){
    return this._selectionCollection.focus
  }
  getSelections(){
    return this._selectionCollection.selections
  }
  getMostRecentlyExecutedCell(){
    const e=this.notebookExecutionStateService.getLastCompletedCellForNotebook(this._notebook.uri);
    return e!==void 0?this.getCellByHandle(e):void 0
  }
  setEditorFocus(e){
    this._focused=e
  }
  getCellsBefore(e){
    const t=this.getCellIndex(e);
    if(t!==-1)return this._viewCells.slice(0, t)
  }
  getCellsAfter(e){
    const t=this.getCellIndex(e);
    if(t!==-1)return this._viewCells.slice(t+1)
  }
  validateRange(e){
    if(!e)return null;
    const t=zA(e.start, 0, this.length), i=zA(e.end, 0, this.length);
    return t<=i?{
      start:t,end:i
    }
    :{
      start:i,end:t
    }
  }
  updateSelectionsState(e, t="model"){
    if(this._focused||t==="model")if(e.kind===Wy.Handle){
      const i=e.primary!==null?this.getCellIndexByHandle(e.primary):null,r=i!==null?this.validateRange({
        start:i,end:i+1
      }):null,s=Vpi(e.selections.map(o=>this.getCellIndexByHandle(o))).map(o=>this.validateRange(o)).filter(o=>o!==null);
      this._selectionCollection.setState(r,QUe(s),!0,t)
    }
    else{
      const i=this.validateRange(e.focus),r=e.selections.map(s=>this.validateRange(s)).filter(s=>s!==null);
      this._selectionCollection.setState(i,QUe(r),!0,t)
    }
  }
  getFoldingStartIndex(e){
    if(!this._foldingRanges)return-1;
    const t=this._foldingRanges.findRange(e+1);
    return this._foldingRanges.getStartLineNumber(t)-1
  }
  getFoldingState(e){
    if(!this._foldingRanges)return 0;
    const t=this._foldingRanges.findRange(e+1);
    return this._foldingRanges.getStartLineNumber(t)-1!==e?0:this._foldingRanges.isCollapsed(t)?2:1
  }
  getFoldedLength(e){
    if(!this._foldingRanges)return 0;
    const t=this._foldingRanges.findRange(e+1), i=this._foldingRanges.getStartLineNumber(t)-1;
    return this._foldingRanges.getEndLineNumber(t)-1-i
  }
  updateFoldingRanges(e){
    this._foldingRanges=e;
    let t=!1;
    const i=[];
    let r=0, s=0, o=Number.MAX_VALUE, a=-1;
    for(;
    r<e.length;
    r++){
      if(!e.isCollapsed(r))continue;
      const l=e.getStartLineNumber(r)+1,u=e.getEndLineNumber(r);
      o<=l&&u<=a||(!t&&s<this._hiddenRanges.length&&this._hiddenRanges[s].start+1===l&&this._hiddenRanges[s].end+1===u?(i.push(this._hiddenRanges[s]),s++):(t=!0,i.push({
        start:l-1,end:u-1
      })),o=l,a=u)
    }
    (t||s<this._hiddenRanges.length)&&(this._hiddenRanges=i, this._onDidFoldingStateChanged.fire()), this._viewCells.forEach(l=>{
      l.cellKind===zd.Markup&&l.triggerFoldingStateChange()
    })
  }
  getHiddenRanges(){
    return this._hiddenRanges
  }
  getOverviewRulerDecorations(){
    return Array.from(this._overviewRulerDecorations.values())
  }
  getCellByHandle(e){
    return this._handleToViewCellMapping.get(e)
  }
  getCellIndexByHandle(e){
    return this._viewCells.findIndex(t=>t.handle===e)
  }
  getCellIndex(e){
    return this._viewCells.indexOf(e)
  }
  cellAt(e){
    return this._viewCells[e]
  }
  getCellsInRange(e){
    if(!e)return this._viewCells.slice(0);
    const t=this.validateRange(e);
    if(t){
      const i=[];
      for(let r=t.start;
      r<t.end;
      r++)i.push(this._viewCells[r]);
      return i
    }
    return[]
  }
  getNearestVisibleCellIndexUpwards(e){
    for(let t=this._hiddenRanges.length-1;
    t>=0;
    t--){
      const i=this._hiddenRanges[t],r=i.start-1,s=i.end;
      if(!(r>e)){
        if(r<=e&&s>=e)return e;
        break
      }
    }
    return e
  }
  getNextVisibleCellIndex(e){
    for(let t=0;
    t<this._hiddenRanges.length;
    t++){
      const i=this._hiddenRanges[t],r=i.start-1,s=i.end;
      if(!(s<e)){
        if(r<=e)return s+1;
        break
      }
    }
    return e+1
  }
  getPreviousVisibleCellIndex(e){
    for(let t=this._hiddenRanges.length-1;
    t>=0;
    t--){
      const i=this._hiddenRanges[t],r=i.start-1;
      if(i.end<e)return e;
      if(r<=e)return r
    }
    return e
  }
  hasCell(e){
    return this._handleToViewCellMapping.has(e.handle)
  }
  getVersionId(){
    return this._notebook.versionId
  }
  getAlternativeId(){
    return this._notebook.alternativeVersionId
  }
  getTrackedRange(e){
    return this._getDecorationRange(e)
  }
  _getDecorationRange(e){
    const t=this._decorations[e];
    if(!t)return null;
    const i=this.getVersionId();
    return t.cachedVersionId!==i&&this._decorationsTree.resolveNode(t, i), t.range===null?{
      start:t.cachedAbsoluteStart-1,end:t.cachedAbsoluteEnd-1
    }
    :{
      start:t.range.startLineNumber-1,end:t.range.endLineNumber-1
    }
  }
  setTrackedRange(e, t, i){
    const r=e?this._decorations[e]:null;
    return r?t?(this._decorationsTree.delete(r), r.reset(this.getVersionId(), t.start, t.end+1, new Zt(t.start+1, 1, t.end+1, 1)), r.setOptions(p_u[i]), this._decorationsTree.insert(r), r.id):(this._decorationsTree.delete(r), delete this._decorations[r.id], null):t?this._deltaCellDecorationsImpl(0, [], [{
      range:new Zt(t.start+1,1,t.end+1,1),options:p_u[i]
    }
    ])[0]:null
  }
  _deltaCellDecorationsImpl(e, t, i){
    const r=this.getVersionId(), s=t.length;
    let o=0;
    const a=i.length;
    let l=0;
    const u=new Array(a);
    for(;
    o<s||l<a;
    ){
      let d=null;
      if(o<s){
        do d=this._decorations[t[o++]];
        while(!d&&o<s);
        d&&this._decorationsTree.delete(d)
      }
      if(l<a){
        if(!d){
          const f=++this._lastDecorationId,A=`${this._instanceId};${f}`;
          d=new pOo(A,0,0),this._decorations[A]=d
        }
        const m=i[l],p=m.range,g=Bdy(m.options);
        d.ownerId=e,d.reset(r,p.startLineNumber,p.endLineNumber,Zt.lift(p)),d.setOptions(g),this._decorationsTree.insert(d),u[l]=d.id,l++
      }
      else d&&delete this._decorations[d.id]
    }
    return u
  }
  deltaCellDecorations(e, t){
    e.forEach(r=>{
      const s=this._decorationIdToCellMap.get(r);
      s!==void 0&&(this.getCellByHandle(s)?.deltaCellDecorations([r],[]),this._decorationIdToCellMap.delete(r)),this._overviewRulerDecorations.has(r)&&this._overviewRulerDecorations.delete(r)
    });
    const i=[];
    return t.forEach(r=>{
      if(Mhy(r)){
        const o=this.getCellByHandle(r.handle)?.deltaCellDecorations([],[r.options])||[];
        o.forEach(a=>{
          this._decorationIdToCellMap.set(a,r.handle)
        }),i.push(...o)
      }
      else{
        const s=++this._lastOverviewRulerDecorationId,o=`_overview_${this.id};${s}`;
        this._overviewRulerDecorations.set(o,r),i.push(o)
      }
    }), i
  }
  deltaCellStatusBarItems(e, t){
    const i=vze(e, s=>this._statusBarItemIdToCellMap.get(s)??-1), r=[];
    t.forEach(s=>{
      const o=this.getCellByHandle(s.handle),a=i[s.handle]??[];
      delete i[s.handle],a.forEach(u=>this._statusBarItemIdToCellMap.delete(u));
      const l=o?.deltaCellStatusBarItems(a,s.items)||[];
      l.forEach(u=>{
        this._statusBarItemIdToCellMap.set(u,s.handle)
      }),r.push(...l)
    });
    for(const s in i){
      const o=parseInt(s),a=i[o];
      this.getCellByHandle(o)?.deltaCellStatusBarItems(a,[]),a.forEach(u=>this._statusBarItemIdToCellMap.delete(u))
    }
    return r
  }
  nearestCodeCellIndex(e){
    const t=this.viewCells.slice(0, e).reverse().findIndex(i=>i.cellKind===zd.Code);
    if(t>-1)return e-t-1;
    {
      const i=this.viewCells.slice(e+1).findIndex(r=>r.cellKind===zd.Code);
      return i>-1?e+1+i:-1
    }
  }
  getEditorViewState(){
    const e={
      
    }, t={
      
    }, i={
      
    }, r={
      
    };
    this._viewCells.forEach((o, a)=>{
      o.getEditState()===aw.Editing&&(e[a]=!0),o.isInputCollapsed&&(t[a]=!0),o instanceof jJ&&o.isOutputCollapsed&&(i[a]=!0),o.lineNumbers!=="inherit"&&(r[a]=o.lineNumbers)
    });
    const s={
      
    };
    return this._viewCells.map(o=>({
      handle:o.model.handle,state:o.saveEditorViewState()
    })).forEach((o, a)=>{
      o.state&&(s[a]=o.state)
    }), {
      editingCells:e,editorViewStates:s,cellLineNumberStates:r,collapsedInputCells:t,collapsedOutputCells:i
    }
  }
  restoreEditorViewState(e){
    e&&this._viewCells.forEach((t, i)=>{
      const r=e.editingCells&&e.editingCells[i],s=e.editorViewStates&&e.editorViewStates[i];
      t.updateEditState(r?aw.Editing:aw.Preview,"viewState");
      const o=e.cellTotalHeights?e.cellTotalHeights[i]:void 0;
      t.restoreEditorViewState(s,o),e.collapsedInputCells&&e.collapsedInputCells[i]&&(t.isInputCollapsed=!0),e.collapsedOutputCells&&e.collapsedOutputCells[i]&&t instanceof jJ&&(t.isOutputCollapsed=!0),e.cellLineNumberStates&&e.cellLineNumberStates[i]&&(t.lineNumbers=e.cellLineNumberStates[i])
    })
  }
  changeModelDecorations(e){
    const t={
      deltaDecorations:(r,s)=>this._deltaModelDecorationsImpl(r,s)
    };
    let i=null;
    try{
      i=e(t)
    }
    catch(r){
      Gc(r)
    }
    return t.deltaDecorations=J8f, i
  }
  _deltaModelDecorationsImpl(e, t){
    const i=new Map;
    e.forEach(s=>{
      const o=s.ownerId;
      if(!i.has(o)){
        const l=this._viewCells.find(u=>u.handle===o);
        l&&i.set(o,{
          cell:l,oldDecorations:[],newDecorations:[]
        })
      }
      const a=i.get(o);
      a&&(a.oldDecorations=s.decorations)
    }), t.forEach(s=>{
      const o=s.ownerId;
      if(!i.has(o)){
        const l=this._viewCells.find(u=>u.handle===o);
        l&&i.set(o,{
          cell:l,oldDecorations:[],newDecorations:[]
        })
      }
      const a=i.get(o);
      a&&(a.newDecorations=s.decorations)
    });
    const r=[];
    return i.forEach((s, o)=>{
      const a=s.cell.deltaModelDecorations(s.oldDecorations,s.newDecorations);
      r.push({
        ownerId:o,decorations:a
      })
    }), r
  }
  find(e, t){
    const i=[];
    let r=[];
    if(t.findScope&&(t.findScope.findScopeType===Wne.Cells||t.findScope.findScopeType===Wne.Text)){
      const s=t.findScope.selectedCellRanges?.map(a=>this.validateRange(a)).filter(a=>!!a)??[];
      r=Qne(s).map(a=>this._viewCells[a])
    }
    else r=this._viewCells;
    return r.forEach((s, o)=>{
      const a=s.startFind(e,t);
      a&&i.push(new Aki(a.cell,o,a.contentMatches,[]))
    }), i.filter(s=>s.cell.cellKind===zd.Code?t.includeCodeInput:(s.cell.getEditState()===aw.Editing||!t.includeMarkupPreview)&&t.includeMarkupInput)
  }
  replaceOne(e, t, i){
    const r=e;
    return this._lastNotebookEditResource.push(r.uri), r.resolveTextModel().then(()=>{
      this._bulkEditService.apply([new WR(e.uri,{
        range:t,text:i
      })],{
        quotableLabel:"Notebook Replace"
      })
    })
  }
  async replaceAll(e, t){
    if(!e.length)return;
    const i=[];
    return this._lastNotebookEditResource.push(e[0].cell.uri), e.forEach(r=>{
      r.contentMatches.forEach((s,o)=>{
        i.push({
          versionId:void 0,textEdit:{
            range:s.range,text:t[o]
          },resource:r.cell.uri
        })
      })
    }), Promise.all(e.map(r=>r.cell.resolveTextModel())).then(async()=>{
      this._bulkEditService.apply({
        edits:i
      },{
        quotableLabel:"Notebook Replace All"
      })
    })
  }
  async _withElement(e, t){
    const i=this._viewCells.filter(s=>e.matchesResource(s.uri)), r=await Promise.all(i.map(s=>this._textModelService.createModelReference(s.uri)));
    await t(), r.forEach(s=>s.dispose())
  }
  async undo(){
    const e=this._undoService.getElements(this.uri), t=e.past.length?e.past[e.past.length-1]:void 0;
    return t&&t instanceof oRe||t instanceof _ft?(await this._withElement(t, async()=>{
      await this._undoService.undo(this.uri)
    }), t instanceof oRe?[t.resource]:t.resources):(await this._undoService.undo(this.uri), [])
  }
  async redo(){
    const t=this._undoService.getElements(this.uri).future[0];
    return t&&t instanceof oRe||t instanceof _ft?(await this._withElement(t, async()=>{
      await this._undoService.redo(this.uri)
    }), t instanceof oRe?[t.resource]:t.resources):(await this._undoService.redo(this.uri), [])
  }
  equal(e){
    return this._notebook===e
  }
  dispose(){
    this._localStore.clear(), this._viewCells.forEach(e=>{
      e.dispose()
    }), super.dispose()
  }
}, GTa=__decorate([__param(5, ln), __param(6, rL), __param(7, qB), __param(8, El), __param(9, pE)], GTa)
}
}), W8f, Pdy=