// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellProgressBar.js
// Offset: 33251258 (bundle byte offset)
// Size: 1196 bytes

IMe(), $b(), LQ(), ph(), uD(), TTa=class extends JV{
  constructor(e, t, i){
    super(), this._notebookExecutionStateService=i, this._progressBar=this._register(new qye(e, VSe)), this._progressBar.hide(), this._collapsedProgressBar=this._register(new qye(t, VSe)), this._collapsedProgressBar.hide()
  }
  didRenderCell(e){
    this._updateForExecutionState(e)
  }
  updateForExecutionState(e, t){
    this._updateForExecutionState(e, t)
  }
  updateState(e, t){
    if((t.metadataChanged||t.internalMetadataChanged)&&this._updateForExecutionState(e), t.inputCollapsedChanged){
      const i=this._notebookExecutionStateService.getCellExecution(e.uri);
      e.isInputCollapsed?(this._progressBar.hide(),i?.state===XE.Executing&&this._updateForExecutionState(e)):(this._collapsedProgressBar.hide(),i?.state===XE.Executing&&this._updateForExecutionState(e))
    }
  }
  _updateForExecutionState(e, t){
    const i=t?.changed??this._notebookExecutionStateService.getCellExecution(e.uri), r=e.isInputCollapsed?this._collapsedProgressBar:this._progressBar;
    i?.state===XE.Executing&&(!i.didPause||e.isInputCollapsed)?hdy(r):r.hide()
  }
}, TTa=__decorate([__param(2, pE)], TTa)
}
}), kEt, dki, ITa, pdy=