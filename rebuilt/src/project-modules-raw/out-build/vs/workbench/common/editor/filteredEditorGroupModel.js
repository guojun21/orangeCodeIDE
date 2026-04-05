// Module: out-build/vs/workbench/common/editor/filteredEditorGroupModel.js
// Offset: 31455155 (bundle byte offset)
// Size: 4099 bytes

yn(), rt(), tvu=class extends at{
  constructor(n){
    super(), this.model=n, this._onDidModelChange=this._register(new Qe), this.onDidModelChange=this._onDidModelChange.event, this._register(this.model.onDidModelChange(e=>{
      const t=e.editorIndex??e.editor;
      t!==void 0&&!this.filter(t)||this._onDidModelChange.fire(e)
    }))
  }
  get id(){
    return this.model.id
  }
  get isLocked(){
    return this.model.isLocked
  }
  get stickyCount(){
    return this.model.stickyCount
  }
  get hasHadEditors(){
    return this.model.hasHadEditors
  }
  get activeEditor(){
    return this.model.activeEditor&&this.filter(this.model.activeEditor)?this.model.activeEditor:null
  }
  get previewEditor(){
    return this.model.previewEditor&&this.filter(this.model.previewEditor)?this.model.previewEditor:null
  }
  get selectedEditors(){
    return this.model.selectedEditors.filter(n=>this.filter(n))
  }
  isPinned(n){
    return this.model.isPinned(n)
  }
  isTransient(n){
    return this.model.isTransient(n)
  }
  isSticky(n){
    return this.model.isSticky(n)
  }
  isActive(n){
    return this.model.isActive(n)
  }
  isSelected(n){
    return this.model.isSelected(n)
  }
  isFirst(n){
    return this.model.isFirst(n, this.getEditors(1))
  }
  isLast(n){
    return this.model.isLast(n, this.getEditors(1))
  }
  getEditors(n, e){
    return this.model.getEditors(n, e).filter(i=>this.filter(i))
  }
  findEditor(n, e){
    const t=this.model.findEditor(n, e);
    if(t)return this.filter(t[1])?t:void 0
  }
}, nvu=class extends tvu{
  get count(){
    return this.model.stickyCount
  }
  getEditors(n, e){
    return e?.excludeSticky?[]:n===1?this.model.getEditors(1).slice(0, this.model.stickyCount):super.getEditors(n, e)
  }
  isSticky(n){
    return!0
  }
  getEditorByIndex(n){
    return n<this.count?this.model.getEditorByIndex(n):void 0
  }
  indexOf(n, e, t){
    const i=this.model.indexOf(n, e, t);
    return i<0||i>=this.model.stickyCount?-1:i
  }
  contains(n, e){
    const t=this.model.indexOf(n, void 0, e);
    return t>=0&&t<this.model.stickyCount
  }
  filter(n){
    return this.model.isSticky(n)
  }
}, ivu=class extends tvu{
  get count(){
    return this.model.count-this.model.stickyCount
  }
  get stickyCount(){
    return 0
  }
  isSticky(n){
    return!1
  }
  getEditors(n, e){
    return n===1?this.model.getEditors(1).slice(this.model.stickyCount):super.getEditors(n, e)
  }
  getEditorByIndex(n){
    return n>=0?this.model.getEditorByIndex(n+this.model.stickyCount):void 0
  }
  indexOf(n, e, t){
    const i=this.model.indexOf(n, e, t);
    return i<this.model.stickyCount||i>=this.model.count?-1:i-this.model.stickyCount
  }
  contains(n, e){
    const t=this.model.indexOf(n, void 0, e);
    return t>=this.model.stickyCount&&t<this.model.count
  }
  filter(n){
    return!this.model.isSticky(n)
  }
}
}
});
function tNf(n){
  const o=.8999999999999999, a=[];
  for(let l=0;
  l<8;
  l++){
    const d=(l*45-90)*Math.PI/180, m=Math.cos(d), p=Math.sin(d), g=5.25+m*2.625, f=5.25+p*2.625, A=5.25+m*4.3785, w=5.25+p*4.3785;
    a.push(`<line x1="${g.toFixed(2)}" y1="${f.toFixed(2)}" x2="${A.toFixed(2)}" y2="${w.toFixed(2)}" stroke="${n}" stroke-width="${o.toFixed(2)}" stroke-linecap="round"/>`)
  }
  return`<svg width="12" height="12" viewBox="0 0 ${10.5.toFixed(2)} ${10.5.toFixed(2)}" xmlns="http://www.w3.org/2000/svg" fill="none">${a.join("")}</svg>`
}
function iay(){
  const s=.8999999999999999, o="http://www.w3.org/2000/svg", a=document.createElementNS(o, "svg");
  a.setAttribute("width", String(12)), a.setAttribute("height", String(12)), a.setAttribute("viewBox", `0 0 ${10.5.toFixed(2)} ${10.5.toFixed(2)}`), a.setAttribute("fill", "none");
  for(let u=0;
  u<8;
  u++){
    const m=(u*45-90)*Math.PI/180, p=Math.cos(m), g=Math.sin(m), f=5.25+p*2.625, A=5.25+g*2.625, w=5.25+p*4.3785, C=5.25+g*4.3785, x=document.createElementNS(o, "line");
    x.setAttribute("x1", f.toFixed(2)), x.setAttribute("y1", A.toFixed(2)), x.setAttribute("x2", w.toFixed(2)), x.setAttribute("y2", C.toFixed(2)), x.setAttribute("stroke", "currentColor"), x.setAttribute("stroke-width", s.toFixed(2)), x.setAttribute("stroke-linecap", "round"), a.appendChild(x)
  }
  const l=document.createElement("div");
  return l.appendChild(a), l
}
function j0i(n){
  return n.isBlocked?Be.question:n.isGenerating?kfn:n.isDraft?Be.editTwo:n.isArchived?Be.archive:Be.checkCircled
}
function ray(n){
  return n?kfn:Be.cloudTwo
}
function rvu(n){
  return n.id===kfn.id?{
    iconPath:rNf
  }
  :{
    iconClass:Qt.asClassName(n)
  }
}
var kfn, nNf, iNf, rNf, z0i=