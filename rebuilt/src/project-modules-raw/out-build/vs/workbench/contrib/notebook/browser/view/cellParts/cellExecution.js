// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellExecution.js
// Offset: 33245572 (bundle byte offset)
// Size: 2230 bytes

ri(), vr(), rt(), sE(), LQ(), l2e(), uD(), D8f=200, xTa=class extends JV{
  constructor(e, t, i){
    super(), this._notebookEditor=e, this._executionOrderLabel=t, this._notebookExecutionStateService=i, this.kernelDisposables=this._register(new Ut), this._register(this._notebookEditor.onDidChangeActiveKernel(()=>{
      this.currentCell&&(this.kernelDisposables.clear(),this._notebookEditor.activeKernel&&this.kernelDisposables.add(this._notebookEditor.activeKernel.onDidChange(()=>{
        this.currentCell&&this.updateExecutionOrder(this.currentCell.internalMetadata)
      })),this.updateExecutionOrder(this.currentCell.internalMetadata))
    })), this._register(this._notebookEditor.onDidScroll(()=>{
      this._updatePosition()
    }))
  }
  didRenderCell(e){
    this.updateExecutionOrder(e.internalMetadata, !0)
  }
  updateExecutionOrder(e, t=!1){
    if(this._notebookEditor.activeKernel?.implementsExecutionOrder||!this._notebookEditor.activeKernel&&typeof e.executionOrder=="number"){
      if(typeof e.executionOrder!="number"&&!t&&this._notebookExecutionStateService.getCellExecution(this.currentCell.uri)){
        const r=this.currentCell;
        nC(()=>{
          this.currentCell===r&&this.updateExecutionOrder(this.currentCell.internalMetadata,!0)
        },D8f,this.cellDisposables);
        return
      }
      const i=typeof e.executionOrder=="number"?`[${e.executionOrder}]`:"[ ]";
      this._executionOrderLabel.innerText=i
    }
    else this._executionOrderLabel.innerText=""
  }
  updateState(e, t){
    t.internalMetadataChanged&&this.updateExecutionOrder(e.internalMetadata)
  }
  updateInternalLayoutNow(e){
    this._updatePosition()
  }
  _updatePosition(){
    if(this.currentCell)if(this.currentCell.isInputCollapsed)Ng(this._executionOrderLabel);
    else{
      gv(this._executionOrderLabel);
      let e=this.currentCell.layoutInfo.editorHeight-22+this.currentCell.layoutInfo.statusBarHeight;
      if(this.currentCell instanceof jJ){
        const i=this._notebookEditor.getAbsoluteTopOfElement(this.currentCell)+this.currentCell.layoutInfo.outputContainerOffset,r=this._notebookEditor.scrollBottom,s=22;
        if(r<=i){
          const o=i-r;
          e-=o,e=zA(e,s+12,this.currentCell.layoutInfo.editorHeight-s+this.currentCell.layoutInfo.statusBarHeight)
        }
      }
      this._executionOrderLabel.style.top=`${e}px`
    }
  }
}, xTa=__decorate([__param(2, pE)], xTa)
}
}), Xwu, udy=