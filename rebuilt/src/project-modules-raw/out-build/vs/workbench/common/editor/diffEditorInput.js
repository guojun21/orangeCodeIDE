// Module: out-build/vs/workbench/common/editor/diffEditorInput.js
// Offset: 31138399 (bundle byte offset)
// Size: 4051 bytes

Ht(), Zq(), Nu(), ifn(), cDf(), pfu(), ss(), iL(), wI(), kE=class extends O1{
  static{
    QSa=this
  }
  static{
    this.ID="workbench.editors.diffEditorInput"
  }
  get typeId(){
    return QSa.ID
  }
  get editorId(){
    return this.modified.editorId===this.original.editorId?this.modified.editorId:void 0
  }
  get capabilities(){
    let e=super.capabilities;
    return this.labels.forceDescription&&(e|=64), e
  }
  constructor(e, t, i, r, s, o){
    super(e, t, i, r, o), this.original=i, this.modified=r, this.forceOpenAsBinary=s, this.cachedModel=void 0, this.labels=this.computeLabels()
  }
  computeLabels(){
    let e, t=!1;
    if(this.preferredName)e=this.preferredName;
    else{
      const d=this.original.getName(),m=this.modified.getName();
      e=_(4395,null,d,m),t=d===m
    }
    let i, r, s;
    if(this.preferredDescription)i=this.preferredDescription, r=this.preferredDescription, s=this.preferredDescription;
    else{
      i=this.computeLabel(this.original.getDescription(0),this.modified.getDescription(0)),s=this.computeLabel(this.original.getDescription(2),this.modified.getDescription(2));
      const d=this.original.getDescription(1),m=this.modified.getDescription(1);
      if(typeof d=="string"&&typeof m=="string"&&(d||m)){
        const[p,g]=wSh([d,m]);
        r=this.computeLabel(p,g)
      }
    }
    let o=this.computeLabel(this.original.getTitle(0)??this.original.getName(), this.modified.getTitle(0)??this.modified.getName(), " \u2194 "), a=this.computeLabel(this.original.getTitle(1)??this.original.getName(), this.modified.getTitle(1)??this.modified.getName(), " \u2194 "), l=this.computeLabel(this.original.getTitle(2)??this.original.getName(), this.modified.getTitle(2)??this.modified.getName(), " \u2194 ");
    const u=this.getPreferredTitle();
    return u&&(o=`${u} (${o})`, a=`${u} (${a})`, l=`${u} (${l})`), {
      name:e,shortDescription:i,mediumDescription:r,longDescription:s,forceDescription:t,shortTitle:o,mediumTitle:a,longTitle:l
    }
  }
  computeLabel(e, t, i=" - "){
    if(!(!e||!t))return e===t?t:`${e}${i}${t}`
  }
  getName(){
    return this.labels.name
  }
  getDescription(e=1){
    switch(e){
      case 0:return this.labels.shortDescription;
      case 2:return this.labels.longDescription;
      case 1:default:return this.labels.mediumDescription
    }
  }
  getTitle(e){
    switch(e){
      case 0:return this.labels.shortTitle;
      case 2:return this.labels.longTitle;
      default:case 1:return this.labels.mediumTitle
    }
  }
  async resolve(){
    const e=await this.createModel();
    return this.cachedModel?.dispose(), this.cachedModel=e, this.cachedModel
  }
  prefersEditorPane(e){
    return this.forceOpenAsBinary?e.find(t=>t.typeId===qWl):e.find(t=>t.typeId===tla)
  }
  async createModel(){
    const[e, t]=await Promise.all([this.original.resolve(), this.modified.resolve()]);
    return t instanceof qMe&&e instanceof qMe?new WSa(e, t):new mfu(jfg(e)?e:void 0, jfg(t)?t:void 0)
  }
  toUntyped(e){
    const t=super.toUntyped(e);
    if(t)return{
      ...t,modified:t.primary,original:t.secondary
    }
  }
  matches(e){
    return this===e?!0:e instanceof QSa?this.modified.matches(e.modified)&&this.original.matches(e.original)&&e.forceOpenAsBinary===this.forceOpenAsBinary:nV(e)?this.modified.matches(e.modified)&&this.original.matches(e.original):!1
  }
  dispose(){
    this.cachedModel&&(this.cachedModel.dispose(), this.cachedModel=void 0), super.dispose()
  }
}, kE=QSa=__decorate([__param(5, yi)], kE), lDf=class extends lfu{
  createEditorInput(n, e, t, i, r){
    return n.createInstance(kE, e, t, i, r, void 0)
  }
}
}
});
function txe(n, e, t){
  let i=!1;
  const r=Psy(n);
  if(Qun(r)&&(e.restoreViewState(r), i=!0), n.selection){
    const s={
      startLineNumber:n.selection.startLineNumber,startColumn:n.selection.startColumn,endLineNumber:n.selection.endLineNumber??n.selection.startLineNumber,endColumn:n.selection.endColumn??n.selection.startColumn
    };
    e.setSelection(s, n.selectionSource??"code.navigation"), n.selectionRevealType===2?e.revealRangeNearTop(s, t):n.selectionRevealType===3?e.revealRangeNearTopIfOutsideViewport(s, t):n.selectionRevealType===1?e.revealRangeInCenterIfOutsideViewport(s, t):e.revealRangeInCenter(s, t), i=!0
  }
  return i
}
function Psy(n){
  if(!n.selection||!n.viewState)return n.viewState;
  const e=n.viewState;
  if(e.modified)return e.modified.cursorState=[], e;
  const t=n.viewState;
  return t.cursorState&&(t.cursorState=[]), t
}
var Tit=