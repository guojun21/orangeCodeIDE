// Module: out-build/vs/workbench/contrib/notebook/browser/controller/foldingController.js
// Offset: 33306535 (bundle byte offset)
// Size: 4139 bytes

rt(), i1(), Sb(), Ifg(), ph(), PU(), dr(), si(), Av(), ss(), AN(), Ht(), m2e=class extends at{
  static{
    this.id="workbench.notebook.foldingController"
  }
  constructor(n){
    super(), this._notebookEditor=n, this._foldingModel=null, this._localStore=this._register(new Ut), this._register(this._notebookEditor.onMouseUp(e=>{
      this.onMouseUp(e)
    })), this._register(this._notebookEditor.onDidChangeModel(()=>{
      this._localStore.clear(),this._notebookEditor.hasModel()&&(this._localStore.add(this._notebookEditor.onDidChangeCellState(e=>{
        e.source.editStateChanged&&e.cell.cellKind===zd.Markup&&this._foldingModel?.recompute()
      })),this._foldingModel=new Tfg,this._localStore.add(this._foldingModel),this._foldingModel.attachViewModel(this._notebookEditor.getViewModel()),this._localStore.add(this._foldingModel.onDidFoldingRegionChanged(()=>{
        this._updateEditorFoldingRanges()
      })))
    }))
  }
  saveViewState(){
    return this._foldingModel?.getMemento()||[]
  }
  restoreViewState(n){
    this._foldingModel?.applyMemento(n||[]), this._updateEditorFoldingRanges()
  }
  setFoldingStateDown(n, e, t){
    const i=e===2, r=this._foldingModel.getRegionAtLine(n+1), s=[];
    if(r&&(r.isCollapsed!==i&&s.push(r), t>1)){
      const o=this._foldingModel.getRegionsInside(r,(a,l)=>a.isCollapsed!==i&&l<t);
      s.push(...o)
    }
    s.forEach(o=>this._foldingModel.setCollapsed(o.regionIndex, e===2)), this._updateEditorFoldingRanges()
  }
  setFoldingStateUp(n, e, t){
    if(!this._foldingModel)return;
    this._foldingModel.getAllRegionsAtLine(n+1, (r, s)=>r.isCollapsed!==(e===2)&&s<=t).forEach(r=>this._foldingModel.setCollapsed(r.regionIndex, e===2)), this._updateEditorFoldingRanges()
  }
  _updateEditorFoldingRanges(){
    if(!this._foldingModel||!this._notebookEditor.hasModel())return;
    const n=this._notebookEditor.getViewModel();
    n.updateFoldingRanges(this._foldingModel.regions);
    const e=n.getHiddenRanges();
    this._notebookEditor.setHiddenAreas(e)
  }
  onMouseUp(n){
    if(!n.event.target||!this._notebookEditor.hasModel())return;
    const e=this._notebookEditor.getViewModel(), t=n.event.target;
    if(t.classList.contains("codicon-notebook-collapsed")||t.classList.contains("codicon-notebook-expanded")){
      if(!t.parentElement.classList.contains("notebook-folding-indicator"))return;
      const r=n.target,s=e.getCellIndex(r),o=e.getFoldingState(s);
      if(o===0)return;
      this.setFoldingStateUp(s,o===2?1:2,1),this._notebookEditor.focusElement(r)
    }
  }
  recompute(){
    this._foldingModel?.recompute()
  }
}, HJ(m2e.id, m2e), O8f=_(9188, null), c_u=dt(9189, "Unfold Cell"), l_u={
  args:[{
    isOptional:!0, name:"index", description:"The cell index", schema:{
      type:"object",required:["index","direction"],properties:{
        index:{
          type:"number"
        },direction:{
          type:"string",enum:["up","down"],default:"down"
        },levels:{
          type:"number",default:1
        }
      }
    }
  }
  ]
}, Dt(class extends rn{
  constructor(){
    super({
      id:"notebook.fold",title:dt(9190,"Fold Cell"),category:o7,keybinding:{
        when:Ee.and(dv,Ee.not(lD)),primary:3164,mac:{
          primary:2652,secondary:[15]
        },secondary:[15],weight:200
      },metadata:{
        description:O8f,args:l_u.args
      },precondition:SE,f1:!0
    })
  }
  async run(n, e){
    const t=n.get(yi), i=sA(t.activeEditorPane);
    if(!i||!i.hasModel())return;
    const r=e&&e.levels||1, s=e&&e.direction==="up"?"up":"down";
    let o;
    if(e)o=e.index;
    else{
      const l=i.getActiveCell();
      if(!l)return;
      o=i.getCellIndex(l)
    }
    const a=i.getContribution(m2e.id);
    if(o!==void 0){
      if((o<0||o>=i.getLength()?void 0:i.cellAt(o))?.cellKind===zd.Code&&s==="down")return;
      s==="up"?a.setFoldingStateUp(o,2,r):a.setFoldingStateDown(o,2,r);
      const u=i.getViewModel().getNearestVisibleCellIndexUpwards(o);
      i.focusElement(i.cellAt(u))
    }
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"notebook.unfold",title:c_u,category:o7,keybinding:{
        when:Ee.and(dv,Ee.not(lD)),primary:3166,mac:{
          primary:2654,secondary:[17]
        },secondary:[17],weight:200
      },metadata:{
        description:c_u,args:l_u.args
      },precondition:SE,f1:!0
    })
  }
  async run(n, e){
    const t=n.get(yi), i=sA(t.activeEditorPane);
    if(!i)return;
    const r=e&&e.levels||1, s=e&&e.direction==="up"?"up":"down";
    let o;
    if(e)o=e.index;
    else{
      const l=i.getActiveCell();
      if(!l)return;
      o=i.getCellIndex(l)
    }
    const a=i.getContribution(m2e.id);
    o!==void 0&&(s==="up"?a.setFoldingStateUp(o, 1, r):a.setFoldingStateDown(o, 1, r))
  }
})
}
}), OTa, kdy=