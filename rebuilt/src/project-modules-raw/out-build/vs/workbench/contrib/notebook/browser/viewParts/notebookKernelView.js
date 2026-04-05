// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookKernelView.js
// Offset: 33377154 (bundle byte offset)
// Size: 5508 bytes

Rx(), nl(), qi(), Jr(), Ht(), dr(), si(), HA(), Wt(), AN(), Sb(), K8f(), i1(), bO(), ss(), Dt(class extends rn{
  constructor(){
    super({
      id:uwe,category:o7,title:dt(9520,"Select Notebook Kernel"),f1:!0,precondition:SE,menu:[{
        id:st.EditorTitle,when:Ee.and(SE,Ee.notEquals("config.notebook.globalToolbar",!0)),group:"navigation",order:-10
      },{
        id:st.NotebookToolbar,when:Ee.equals("config.notebook.globalToolbar",!0),group:"status",order:-10
      },{
        id:st.InteractiveToolbar,when:w_i.notEqualsTo(0),group:"status",order:-10
      }
      ],metadata:{
        description:_(9519,null),args:[{
          name:"kernelInfo",description:"The kernel info",schema:{
            type:"object",required:["id","extension"],properties:{
              id:{
                type:"string"
              },extension:{
                type:"string"
              },notebookEditorId:{
                type:"string"
              }
            }
          }
        }
        ]
      }
    })
  }
  async run(n, e){
    const t=n.get(ln), i=n.get(yi), r=Mdy(i, e);
    if(!r||!r.hasModel())return!1;
    let s=e&&"id"in e?e.id:void 0, o=e&&"extension"in e?e.extension:void 0;
    s&&(typeof s!="string"||typeof o!="string")&&(s=void 0, o=void 0);
    const a=r.textModel, u=n.get(NM).getMatchingKernel(a), {
      selected:d
    }
    =u;
    if(d&&s&&d.id===s&&$h.equals(d.extension, o))return!0;
    const m=s?`${o}/${s}`:void 0;
    return t.createInstance(Dbn).showQuickPick(r, m)
  }
}), xrt=class extends aI{
  constructor(e, t, i, r, s){
    const o=new Hs("fakeAction", void 0, void 0, !0, a=>e.run(a));
    super(void 0, o, {
      ...i,label:!1,icon:!1
    }), this._editor=t, this._notebookKernelService=r, this._notebookKernelHistoryService=s, this._isLoading=!1, this._register(o), this._register(t.onDidChangeModel(this._update, this)), this._register(r.onDidAddKernel(this._update, this)), this._register(r.onDidRemoveKernel(this._update, this)), this._register(r.onDidChangeNotebookAffinity(this._update, this)), this._register(r.onDidChangeSelectedNotebooks(this._update, this)), this._register(r.onDidChangeSourceActions(this._update, this)), this._register(r.onDidChangeKernelDetectionTasks(this._update, this))
  }
  render(e){
    this._update(), super.render(e), e.classList.add("kernel-action-view-item"), this._spinner=document.createElement("span"), this._spinner.classList.add("kernel-spinner", ...Qt.asClassNameArray(Qt.modify(Be.loading, "spin"))), this._spinner.style.display="none", e.appendChild(this._spinner), this._kernelLabel=document.createElement("a"), this._kernelLabel.setAttribute("role", "button"), e.appendChild(this._kernelLabel), this.updateLabel(), this.updateEnabled(), this._updateSpinnerVisibility()
  }
  isFocused(){
    return!!this._kernelLabel&&this._kernelLabel.tabIndex===0
  }
  focus(){
    this._kernelLabel&&(this._kernelLabel.tabIndex=0, this._kernelLabel.focus())
  }
  blur(){
    this._kernelLabel&&(this._kernelLabel.tabIndex=-1)
  }
  setFocusable(e){
    this._kernelLabel&&(this._kernelLabel.tabIndex=e?0:-1)
  }
  updateLabel(){
    this._kernelLabel&&(this._kernelLabel.classList.add("kernel-label"), this._kernelLabel.innerText=this._action.label, this._kernelLabel.setAttribute("aria-label", this._action.label||""))
  }
  updateEnabled(){
    this._action.enabled?(this._kernelLabel&&(this._kernelLabel.removeAttribute("aria-disabled"), this._kernelLabel.classList.remove("disabled")), this.element?.classList.remove("disabled")):(this._kernelLabel&&(this._kernelLabel.setAttribute("aria-disabled", "true"), this._kernelLabel.classList.add("disabled")), this.element?.classList.add("disabled"))
  }
  _updateSpinnerVisibility(){
    this._spinner&&(this._spinner.style.display=this._isLoading?"inline-block":"none")
  }
  _update(){
    const e=this._editor.textModel;
    if(!e){
      this._resetAction();
      return
    }
    Dbn.updateKernelStatusAction(e, this._action, this._notebookKernelService, this._notebookKernelHistoryService), this._isLoading=this._action.class?.includes("spin")??!1, this._updateSpinnerVisibility(), this.updateLabel(), this.updateEnabled()
  }
  _resetAction(){
    this._action.enabled=!1, this._action.label="", this._action.class="", this._isLoading=!1, this._updateSpinnerVisibility(), this.updateLabel(), this.updateEnabled()
  }
}, xrt=__decorate([__param(3, NM), __param(4, v7e)], xrt)
}
});
function Z8f(n, e, t){
  return zTa(n, e, t, !1)
}
function Fdy(n, e, t){
  if(n.length===0)return{
    primaryActions:[], secondaryActions:e
  };
  const i=n.filter(a=>a.size!==0).length;
  if(n.map(a=>a.size).reduce((a, l)=>a+l, 0)+(i-1)*p2e<=t)return n.forEach(a=>{
    a.renderLabel=!0
  }), zTa(n, e, t, !1);
  if(i*VTa+(i-1)*p2e>t)return n.forEach(a=>{
    a.renderLabel=!1
  }), zTa(n, e, t, !0);
  let s=0, o=-1;
  for(let a=0;
  a<n.length;
  a++)if(s+=n[a].size+p2e, n[a].action instanceof id){
    const l=n.slice(a+1).filter(d=>d.size!==0);
    s+(l.length===0?0:l.length*VTa+(l.length-1)*p2e)<=t&&(o=a)
  }
  else continue;
  return o<0?(n.forEach(a=>{
    a.renderLabel=!1
  }), zTa(n, e, t, !0)):(n.slice(0, o+1).forEach(a=>{
    a.renderLabel=!0
  }), n.slice(o+1).forEach(a=>{
    a.renderLabel=!1
  }), {
    primaryActions:n, secondaryActions:e
  })
}
function zTa(n, e, t, i){
  const r=[], s=[];
  let o=0, a=!1, l=!1;
  if(n.length===0)return{
    primaryActions:[], secondaryActions:e
  };
  for(let u=0;
  u<n.length;
  u++){
    const d=n[u], m=i?d.size===0?0:VTa:d.size;
    if(!(d.action instanceof id&&r.length>0&&r[r.length-1].action instanceof id)&&!(d.action instanceof id&&!a))if(o+m<=t&&!l)o+=p2e+m, r.push(d), m!==0&&(a=!0), d.action instanceof id&&(a=!1);
    else if(l=!0, m===0)r.push(d);
    else{
      if(d.action instanceof id)continue;
      s.push(d.action)
    }
  }
  for(let u=r.length-1;
  u>0;
  u--){
    const d=r[u];
    if(d.size!==0){
      d.action instanceof id&&r.splice(u,1);
      break
    }
  }
  if(r.length&&r[r.length-1].action instanceof id&&r.pop(), s.length!==0&&s.push(new id), i){
    const u=r.findIndex(d=>d.action.id==="notebook.cell.insertMarkdownCellBelow");
    u!==-1&&r.splice(u, 1)
  }
  return{
    primaryActions:r, secondaryActions:[...s, ...e]
  }
}
var dwe, VTa, X8f, p2e, e6f, t6f, n6f, KTa, Ody=