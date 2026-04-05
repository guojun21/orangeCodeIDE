// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellContextKeys.js
// Offset: 33016160 (bundle byte offset)
// Size: 5755 bytes

rt(), Uc(), si(), Wt(), pwu(), Sb(), LQ(), l2e(), VSi(), ph(), i1(), uD(), KSi=class extends JV{
  constructor(e, t){
    super(), this.instantiationService=t, this.cellContextKeyManager=this._register(this.instantiationService.createInstance(YSi, e, void 0))
  }
  didRenderCell(e){
    this.cellContextKeyManager.updateForElement(e)
  }
}, KSi=__decorate([__param(1, ln)], KSi), YSi=class extends at{
  constructor(e, t, i, r){
    super(), this.notebookEditor=e, this.element=t, this._contextKeyService=i, this._notebookExecutionStateService=r, this.elementDisposables=this._register(new Ut), this._contextKeyService.bufferChangeEvents(()=>{
      this.cellType=LV.bindTo(this._contextKeyService),this.cellEditable=pX.bindTo(this._contextKeyService),this.cellFocused=Sgn.bindTo(this._contextKeyService),this.cellEditorFocused=Yq.bindTo(this._contextKeyService),this.markdownEditMode=kgn.bindTo(this._contextKeyService),this.cellRunState=A_i.bindTo(this._contextKeyService),this.cellExecuting=vpu.bindTo(this._contextKeyService),this.cellHasOutputs=zEe.bindTo(this._contextKeyService),this.cellContentCollapsed=y_i.bindTo(this._contextKeyService),this.cellOutputCollapsed=X0a.bindTo(this._contextKeyService),this.cellLineNumbers=Z0a.bindTo(this._contextKeyService),this.cellGeneratedByChat=_pu.bindTo(this._contextKeyService),this.cellResource=pxf.bindTo(this._contextKeyService),this.cellHasErrorDiagnostics=Egn.bindTo(this._contextKeyService),t&&this.updateForElement(t)
    }), this._register(this._notebookExecutionStateService.onDidChangeExecution(s=>{
      s.type===vJ.cell&&this.element&&s.affectsCell(this.element.uri)&&this.updateForExecutionState()
    }))
  }
  updateForElement(e){
    if(this.elementDisposables.clear(), this.element=e, !e)return;
    this.elementDisposables.add(e.onDidChangeState(i=>this.onDidChangeState(i))), e instanceof jJ&&(this.elementDisposables.add(e.onDidChangeOutputs(()=>this.updateForOutputs())), this.elementDisposables.add(Oc(i=>{
      this.cellHasErrorDiagnostics.set(!!i.readObservable(e.executionErrorDiagnostic))
    }))), this.elementDisposables.add(this.notebookEditor.onDidChangeActiveCell(()=>this.updateForFocusState())), this.element instanceof GV?this.cellType.set("markup"):this.element instanceof jJ&&this.cellType.set("code"), this._contextKeyService.bufferChangeEvents(()=>{
      this.updateForFocusState(),this.updateForExecutionState(),this.updateForEditState(),this.updateForCollapseState(),this.updateForOutputs(),this.updateForChat(),this.cellLineNumbers.set(this.element.lineNumbers),this.cellResource.set(this.element.uri.toString())
    });
    const t=C8.get(this.notebookEditor);
    t&&this.elementDisposables.add(t.onDidChangePromptCache(i=>{
      i.cell.toString()===this.element.uri.toString()&&this.updateForChat()
    }))
  }
  onDidChangeState(e){
    this._contextKeyService.bufferChangeEvents(()=>{
      e.internalMetadataChanged&&this.updateForExecutionState(),e.editStateChanged&&this.updateForEditState(),e.focusModeChanged&&this.updateForFocusState(),e.cellLineNumberChanged&&this.cellLineNumbers.set(this.element.lineNumbers),(e.inputCollapsedChanged||e.outputCollapsedChanged)&&this.updateForCollapseState()
    })
  }
  updateForFocusState(){
    if(!this.element)return;
    const e=this.notebookEditor.getActiveCell();
    this.cellFocused.set(this.notebookEditor.getActiveCell()===this.element), e===this.element?this.cellEditorFocused.set(this.element.focusMode===Tk.Editor):this.cellEditorFocused.set(!1)
  }
  updateForExecutionState(){
    if(!this.element)return;
    const e=this.element.internalMetadata;
    this.cellEditable.set(!this.notebookEditor.isReadOnly);
    const t=this._notebookExecutionStateService.getCellExecution(this.element.uri);
    this.element instanceof GV?(this.cellRunState.reset(), this.cellExecuting.reset()):t?.state===XE.Executing?(this.cellRunState.set("executing"), this.cellExecuting.set(!0)):t?.state===XE.Pending||t?.state===XE.Unconfirmed?(this.cellRunState.set("pending"), this.cellExecuting.set(!0)):e.lastRunSuccess===!0?(this.cellRunState.set("succeeded"), this.cellExecuting.set(!1)):e.lastRunSuccess===!1?(this.cellRunState.set("failed"), this.cellExecuting.set(!1)):(this.cellRunState.set("idle"), this.cellExecuting.set(!1))
  }
  updateForEditState(){
    this.element&&(this.element instanceof GV?this.markdownEditMode.set(this.element.getEditState()===aw.Editing):this.markdownEditMode.set(!1))
  }
  updateForCollapseState(){
    this.element&&(this.cellContentCollapsed.set(!!this.element.isInputCollapsed), this.cellOutputCollapsed.set(!!this.element.isOutputCollapsed))
  }
  updateForOutputs(){
    this.element instanceof jJ?this.cellHasOutputs.set(this.element.outputsViewModels.length>0):this.cellHasOutputs.set(!1)
  }
  updateForChat(){
    const e=C8.get(this.notebookEditor);
    if(!e||!this.element){
      this.cellGeneratedByChat.set(!1);
      return
    }
    this.cellGeneratedByChat.set(e.isCellGeneratedByChat(this.element))
  }
}, YSi=__decorate([__param(2, wi), __param(3, pE)], YSi)
}
});
function Euy(n, e, t, i){
  const r=n.getCellIndex(e);
  let s=n.getCellIndex(i);
  if(typeof r!="number"||typeof s!="number")return;
  t==="below"&&(s=n.getNextVisibleCellIndex(s)??s);
  let o=n.getSelections();
  o.length||(o=[n.getFocus()]);
  let a=n.getFocus().start;
  o.some(w=>w.start<=r&&w.end>r)||(o=[{
    start:r, end:r+1
  }
  ], a=r);
  const l=o.find(w=>w.start<=s&&w.end>s);
  l&&(s=l.start);
  let u=0, d=s, m=s;
  o.sort((w, C)=>C.start-w.start);
  const p=o.map(w=>{
    const C=w.end-w.start;
    let x=0;
    w.end<=m&&(x=-C);
    const I=m+x;
    if(a>=w.start&&a<=w.end){
      const N=a-w.start;
      d=I+N
    }
    const B=w.start>=s?u:0, R={
      editType:6,index:w.start+B,length:C,newIdx:I
    };
    return u+=C, w.end<m&&(m-=C), R
  }), g=p[p.length-1], f={
    start:g.newIdx, end:g.newIdx+u
  }, A={
    start:d, end:d+1
  };
  n.textModel.applyEdits(p, !0, {
    kind:Wy.Index, focus:n.getFocus(), selections:n.getSelections()
  }, ()=>({
    kind:Wy.Index, focus:A, selections:[f]
  }), void 0, !0), n.revealCellRangeInView(f)
}
var U9f, wwu, rTa, _wu, $9f, q9f=