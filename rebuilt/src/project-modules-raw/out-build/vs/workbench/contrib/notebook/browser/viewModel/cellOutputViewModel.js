// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellOutputViewModel.js
// Offset: 32981414 (bundle byte offset)
// Size: 1525 bytes

yn(), rt(), Uc(), ph(), L9f=0, GSi=class extends at{
  setVisible(n=!0, e=!1){
    !n&&this.alwaysShow||(e&&n&&(this.alwaysShow=!0), this.visible.set(n, void 0))
  }
  get model(){
    return this._outputRawData
  }
  get pickedMimeType(){
    return this._pickedMimeType
  }
  set pickedMimeType(n){
    this._pickedMimeType=n
  }
  constructor(n, e, t){
    super(), this.cellViewModel=n, this._outputRawData=e, this._notebookService=t, this._onDidResetRendererEmitter=this._register(new Qe), this.onDidResetRenderer=this._onDidResetRendererEmitter.event, this.alwaysShow=!1, this.visible=Ua("outputVisible", !1), this.outputHandle=L9f++
  }
  hasMultiMimeType(){
    if(this._outputRawData.outputs.length<2)return!1;
    const n=this._outputRawData.outputs[0].mime;
    return this._outputRawData.outputs.some(e=>e.mime!==n)
  }
  resolveMimeTypes(n, e){
    const t=this._notebookService.getOutputMimeTypeInfo(n, e, this.model), i=t.findIndex(r=>r.rendererId!==uCt&&r.isTrusted);
    return[t, Math.max(i, 0)]
  }
  resetRenderer(){
    this._pickedMimeType=void 0, this.model.bumpVersion(), this._onDidResetRendererEmitter.fire()
  }
  toRawJSON(){
    return{
      outputs:this._outputRawData.outputs
    }
  }
}
}
});
function c2e(n, e, t){
  t.setTransientModelProperty(n, bwu, e)
}
function mbn(n, e){
  return e.getTransientModelProperty(n, bwu)
}
function pbn(n, e){
  if(!e||e.isSimpleWidget||!e.getModel())return!1;
  if(e.getOption(63)){
    for(const i of n.listDiffEditors())if(i.getOriginalEditor()===e&&!i.renderSideBySide)return!1
  }
  return!0
}
var bwu, eTa, tTa, vwu, Awu, WSi, M9f, QSi, jSi, zSi, nTa=