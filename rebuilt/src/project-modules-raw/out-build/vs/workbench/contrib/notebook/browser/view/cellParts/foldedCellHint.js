// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/foldedCellHint.js
// Offset: 33310674 (bundle byte offset)
// Size: 2545 bytes

ri(), qi(), Jr(), Ht(), FTa(), Sb(), LQ(), bJ(), uD(), ph(), rt(), OTa=class extends JV{
  constructor(e, t, i){
    super(), this._notebookEditor=e, this._container=t, this._notebookExecutionStateService=i, this._runButtonListener=this._register(new uo), this._cellExecutionListener=this._register(new uo)
  }
  didRenderCell(e){
    this.update(e)
  }
  update(e){
    if(!this._notebookEditor.hasModel()){
      this._cellExecutionListener.clear(),this._runButtonListener.clear();
      return
    }
    if(e.isInputCollapsed||e.getEditState()===aw.Editing)this._cellExecutionListener.clear(), this._runButtonListener.clear(), Ng(this._container);
    else if(e.foldingState===2){
      const t=this._notebookEditor.getViewModel().getCellIndex(e),i=this._notebookEditor.getViewModel().getFoldedLength(t),r=this.getRunFoldedSectionButton({
        start:t,end:t+i+1
      });
      r?um(this._container,r,this.getHiddenCellsLabel(i),this.getHiddenCellHintButton(e)):um(this._container,this.getHiddenCellsLabel(i),this.getHiddenCellHintButton(e)),gv(this._container);
      const s=e.layoutInfo.previewHeight;
      this._container.style.top=`${s}px`
    }
    else this._cellExecutionListener.clear(), this._runButtonListener.clear(), Ng(this._container)
  }
  getHiddenCellsLabel(e){
    const t=e===1?_(9492, null):_(9493, null, e);
    return Ct("span.notebook-folded-hint-label", void 0, t)
  }
  getHiddenCellHintButton(e){
    const t=Ct("span.cell-expand-part-button");
    return t.classList.add(...Qt.asClassNameArray(Be.more)), this._register(ei(t, ir.CLICK, ()=>{
      const i=this._notebookEditor.getContribution(m2e.id),r=this._notebookEditor.getCellIndex(e);
      typeof r=="number"&&i.setFoldingStateDown(r,1,1)
    })), t
  }
  getRunFoldedSectionButton(e){
    const t=Ct("span.folded-cell-run-section-button"), i=this._notebookEditor.getCellsInRange(e);
    if(!i.some(a=>a.cellKind===zd.Code))return;
    const o=i.some(a=>{
      const l=this._notebookExecutionStateService.getCellExecution(a.uri);
      return l&&l.state===XE.Executing
    })?Qt.modify(lNe, "spin"):Be.play;
    return t.classList.add(...Qt.asClassNameArray(o)), this._runButtonListener.value=ei(t, ir.CLICK, ()=>{
      this._notebookEditor.executeNotebookCells(i)
    }), this._cellExecutionListener.value=this._notebookExecutionStateService.onDidChangeExecution(()=>{
      const l=i.some(u=>{
        const d=this._notebookExecutionStateService.getCellExecution(u.uri);
        return d&&d.state===XE.Executing
      })?Qt.modify(lNe,"spin"):Be.play;
      t.className="",t.classList.add("folded-cell-run-section-button",...Qt.asClassNameArray(l))
    }), t
  }
  updateInternalLayoutNow(e){
    this.update(e)
  }
}, OTa=__decorate([__param(2, pE)], OTa)
}
}), UTa, Edy=