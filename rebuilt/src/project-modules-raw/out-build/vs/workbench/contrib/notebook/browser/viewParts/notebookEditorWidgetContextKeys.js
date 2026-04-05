// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookEditorWidgetContextKeys.js
// Offset: 33394786 (bundle byte offset)
// Size: 4963 bytes

ri(), rt(), si(), Sb(), i1(), uD(), bO(), _u(), YTa=class{
  constructor(e, t, i, r, s){
    this._editor=e, this._notebookKernelService=t, this._extensionService=r, this._notebookExecutionStateService=s, this._disposables=new Ut, this._viewModelDisposables=new Ut, this._cellOutputsListeners=[], this._selectedKernelDisposables=new Ut, this._notebookKernel=eCa.bindTo(i), this._notebookKernelCount=w_i.bindTo(i), this._notebookKernelSelected=gxf.bindTo(i), this._interruptibleKernel=xMe.bindTo(i), this._hasVariableProvider=__i.bindTo(i), this._someCellRunning=pit.bindTo(i), this._kernelRunning=EMe.bindTo(i), this._useConsolidatedOutputButton=K0a.bindTo(i), this._hasOutputs=kpu.bindTo(i), this._viewType=mxf.bindTo(i), this._missingKernelExtension=Spu.bindTo(i), this._notebookKernelSourceCount=tCa.bindTo(i), this._cellToolbarLocation=hxf.bindTo(i), this._lastCellFailed=v_i.bindTo(i), this._handleDidChangeModel(), this._updateForNotebookOptions(), this._disposables.add(e.onDidChangeModel(this._handleDidChangeModel, this)), this._disposables.add(t.onDidAddKernel(this._updateKernelContext, this)), this._disposables.add(t.onDidChangeSelectedNotebooks(this._updateKernelContext, this)), this._disposables.add(t.onDidChangeSourceActions(this._updateKernelContext, this)), this._disposables.add(e.notebookOptions.onDidChangeOptions(this._updateForNotebookOptions, this)), this._disposables.add(r.onDidChangeExtensions(this._updateForInstalledExtension, this)), this._disposables.add(s.onDidChangeExecution(this._updateForExecution, this)), this._disposables.add(s.onDidChangeLastRunFailState(this._updateForLastRunFailState, this))
  }
  dispose(){
    this._disposables.dispose(), this._viewModelDisposables.dispose(), this._selectedKernelDisposables.dispose(), this._notebookKernelCount.reset(), this._notebookKernelSourceCount.reset(), this._interruptibleKernel.reset(), this._hasVariableProvider.reset(), this._someCellRunning.reset(), this._kernelRunning.reset(), this._viewType.reset(), Bo(this._cellOutputsListeners), this._cellOutputsListeners.length=0
  }
  _handleDidChangeModel(){
    if(this._updateKernelContext(), this._updateForNotebookOptions(), this._viewModelDisposables.clear(), Bo(this._cellOutputsListeners), this._cellOutputsListeners.length=0, !this._editor.hasModel())return;
    const e=()=>{
      let r=!1;
      if(this._editor.hasModel()){
        for(let s=0;
        s<this._editor.getLength();
        s++)if(this._editor.cellAt(s).outputsViewModels.length>0){
          r=!0;
          break
        }
      }
      this._hasOutputs.set(r)
    }, t=this._viewModelDisposables.add(new Ut), i=r=>r.model.onDidChangeOutputs(()=>{
      t.clear(),t.add(r_(As(this._editor.getDomNode()),()=>{
        e()
      }))
    });
    for(let r=0;
    r<this._editor.getLength();
    r++){
      const s=this._editor.cellAt(r);
      this._cellOutputsListeners.push(i(s))
    }
    e(), this._updateForInstalledExtension(), this._viewModelDisposables.add(this._editor.onDidChangeViewCells(r=>{
      [...r.splices].reverse().forEach(s=>{
        const[o,a,l]=s,u=this._cellOutputsListeners.splice(o,a,...l.map(i));
        Bo(u)
      })
    })), this._viewType.set(this._editor.textModel.viewType)
  }
  _updateForExecution(e){
    if(this._editor.textModel){
      const t=this._notebookExecutionStateService.getExecution(this._editor.textModel.uri),i=this._notebookExecutionStateService.getCellExecutionsForNotebook(this._editor.textModel.uri);
      this._kernelRunning.set(i.length>0||!!t),e.type===vJ.cell&&this._someCellRunning.set(i.length>0)
    }
    else this._kernelRunning.set(!1), e.type===vJ.cell&&this._someCellRunning.set(!1)
  }
  _updateForLastRunFailState(e){
    e.notebook===this._editor.textModel?.uri&&this._lastCellFailed.set(e.visible)
  }
  async _updateForInstalledExtension(){
    if(!this._editor.hasModel())return;
    const e=this._editor.textModel.viewType, t=J6f.get(e);
    this._missingKernelExtension.set(!!t&&!await this._extensionService.getExtension(t))
  }
  _updateKernelContext(){
    if(!this._editor.hasModel()){
      this._notebookKernelCount.reset(),this._notebookKernelSourceCount.reset(),this._interruptibleKernel.reset(),this._hasVariableProvider.reset();
      return
    }
    const{
      selected:e,all:t
    }
    =this._notebookKernelService.getMatchingKernel(this._editor.textModel), i=this._notebookKernelService.getSourceActions(this._editor.textModel, this._editor.scopedContextKeyService);
    this._notebookKernelCount.set(t.length), this._notebookKernelSourceCount.set(i.length), this._interruptibleKernel.set(e?.implementsInterrupt??!1), this._hasVariableProvider.set(e?.hasVariableProvider??!1), this._notebookKernelSelected.set(!!e), this._notebookKernel.set(e?.id??""), this._selectedKernelDisposables.clear(), e&&this._selectedKernelDisposables.add(e.onDidChange(()=>{
      this._interruptibleKernel.set(e?.implementsInterrupt??!1)
    }))
  }
  _updateForNotebookOptions(){
    const e=this._editor.notebookOptions.getDisplayOptions();
    this._useConsolidatedOutputButton.set(e.consolidatedOutputButton), this._cellToolbarLocation.set(this._editor.notebookOptions.computeCellToolbarLocation(this._editor.textModel?.viewType))
  }
}, YTa=__decorate([__param(1, NM), __param(2, wi), __param(3, su), __param(4, pE)], YTa)
}
}), ZTa, $dy=