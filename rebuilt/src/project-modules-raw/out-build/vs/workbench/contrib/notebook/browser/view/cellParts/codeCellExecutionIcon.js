// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/codeCellExecutionIcon.js
// Offset: 33288799 (bundle byte offset)
// Size: 1279 bytes

ri(), bS(), rt(), Ht(), Jr(), bJ(), ph(), uD(), PTa=class extends at{
  constructor(e, t, i, r){
    super(), this._cell=t, this._element=i, this._executionStateService=r, this._visible=!1, this._update(), this._register(this._executionStateService.onDidChangeExecution(s=>{
      s.type===vJ.cell&&s.affectsCell(this._cell.uri)&&this._update()
    })), this._register(this._cell.model.onDidChangeInternalMetadata(()=>this._update()))
  }
  setVisibility(e){
    this._visible=e, this._update()
  }
  _update(){
    if(!this._visible)return;
    const e=this._executionStateService.getCellExecution(this._cell.uri), t=this._getItemForState(e, this._cell.model.internalMetadata);
    t?(this._element.style.display="", um(this._element, ...a_(t.text)), this._element.title=t.tooltip??""):(this._element.style.display="none", um(this._element))
  }
  _getItemForState(e, t){
    const i=e?.state, {
      lastRunSuccess:r
    }
    =t;
    if(!i&&r)return{
      text:`$(${xWl.id})`,tooltip:_(9484,null)
    };
    if(!i&&r===!1)return{
      text:`$(${TWl.id})`,tooltip:_(9485,null)
    };
    if(i===XE.Pending||i===XE.Unconfirmed)return{
      text:`$(${IWl.id})`,tooltip:_(9486,null)
    };
    if(i===XE.Executing)return{
      text:`$(${Qt.modify(lNe,"spin").id})`,tooltip:_(9487,null)
    }
  }
}, PTa=__decorate([__param(3, pE)], PTa)
}
}), LTa, ydy=