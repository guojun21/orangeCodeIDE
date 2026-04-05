// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellToolbars.js
// Offset: 33263323 (bundle byte offset)
// Size: 5910 bytes

ri(), wRe(), vr(), yn(), dg(), dr(), si(), pl(), Wt(), ka(), hki(), LQ(), R8f(), vT(), mb(), pki=class extends gwu{
  constructor(e, t, i, r, s, o, a){
    super(), this._notebookEditor=e, this._bottomCellToolbarContainer=i, this.instantiationService=r, this.contextMenuService=s, this.contextKeyService=o, this.menuService=a
  }
  _initialize(){
    if(this._betweenCellToolbar)return this._betweenCellToolbar;
    const e=this._register(new ave(this._bottomCellToolbarContainer, this.contextMenuService, {
      actionViewItemProvider:(r,s)=>{
        if(r instanceof Ub)return this._notebookEditor.notebookOptions.getDisplayOptions().insertToolbarAlignment==="center"?this.instantiationService.createInstance(Tbn,r,{
          hoverDelegate:s.hoverDelegate
        }):this.instantiationService.createInstance(f2,r,{
          hoverDelegate:s.hoverDelegate
        })
      }
    }));
    this._betweenCellToolbar=e;
    const t=this._register(this.menuService.createMenu(this._notebookEditor.creationOptions.menuIds.cellInsertToolbar, this.contextKeyService)), i=()=>{
      const r=mki(t);
      e.setActions(r.primary,r.secondary)
    };
    return this._register(t.onDidChange(()=>i())), this._register(this._notebookEditor.notebookOptions.onDidChangeOptions(r=>{
      r.insertToolbarAlignment&&i()
    })), i(), e
  }
  didRenderCell(e){
    const t=this._initialize();
    this._notebookEditor.hasModel()&&(t.context={
      ui:!0,cell:e,notebookEditor:this._notebookEditor,source:"insertToolbar",$mid:13
    }), this.updateInternalLayoutNow(e)
  }
  updateInternalLayoutNow(e){
    const t=e.layoutInfo.bottomToolbarOffset;
    this._bottomCellToolbarContainer.style.transform=`translateY(${t}px)`
  }
}, pki=__decorate([__param(3, ln), __param(4, kc), __param(5, wi), __param(6, xd)], pki), gki=class extends gwu{
  get hasActions(){
    return this._model?this._model.actions.primary.length+this._model.actions.secondary.length+this._model.deleteActions.primary.length+this._model.deleteActions.secondary.length>0:!1
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.toolbarContainer=e, this._rootClassDelegate=t, this.toolbarId=i, this.deleteToolbarId=r, this._notebookEditor=s, this.contextKeyService=o, this.menuService=a, this.instantiationService=l, this._onDidUpdateActions=this._register(new Qe), this.onDidUpdateActions=this._onDidUpdateActions.event
  }
  _initializeModel(){
    if(this._model)return this._model;
    const e=this._register(this.menuService.createMenu(this.toolbarId, this.contextKeyService)), t=this._register(this.menuService.createMenu(this.deleteToolbarId, this.contextKeyService)), i=mki(e), r=mki(t);
    return this._model={
      titleMenu:e,actions:i,deleteMenu:t,deleteActions:r
    }, this._model
  }
  _initialize(e, t){
    if(this._view)return this._view;
    const i=this._register(F6()), r=this._register(this.instantiationService.createInstance(KI, this.toolbarContainer, {
      actionViewItemProvider:(o,a)=>GR(this.instantiationService,o,a),renderDropdownAsChildElement:!0,hoverDelegate:i
    })), s=this._register(this.instantiationService.invokeFunction(o=>gdy(o, this.toolbarContainer, i, "cell-delete-toolbar")));
    return(e.deleteActions.primary.length!==0||e.deleteActions.secondary.length!==0)&&s.setActions(e.deleteActions.primary, e.deleteActions.secondary), this.setupChangeListeners(r, e.titleMenu, e.actions), this.setupChangeListeners(s, e.deleteMenu, e.deleteActions), this._view={
      toolbar:r,deleteToolbar:s
    }, this._view
  }
  prepareRenderCell(e){
    this._initializeModel()
  }
  didRenderCell(e){
    const t=this._initializeModel(), i=this._initialize(t, e);
    if(this.cellDisposables.add(B8f(this._notebookEditor, e, this.toolbarContainer, {
      extraOffset:4,min:-14
    })), this._notebookEditor.hasModel()){
      const r={
        ui:!0,cell:e,notebookEditor:this._notebookEditor,source:"cellToolbar",$mid:13
      };
      this.updateContext(i,r)
    }
  }
  updateContext(e, t){
    e.toolbar.context=t, e.deleteToolbar.context=t
  }
  setupChangeListeners(e, t, i){
    let r=!1, s;
    this.updateActions(e, i), this._register(t.onDidChange(()=>{
      if(r){
        const a=mki(t);
        s=()=>this.updateActions(e,a);
        return
      }
      const o=mki(t);
      this.updateActions(e,o)
    })), this._rootClassDelegate.toggle("cell-toolbar-dropdown-active", !1), this._register(e.onDidChangeDropdownVisibility(o=>{
      r=o,this._rootClassDelegate.toggle("cell-toolbar-dropdown-active",o),s&&!o&&(nC(()=>{
        s?.()
      },0,this._store),s=void 0)
    }))
  }
  updateActions(e, t){
    const i=UR(e.getElement());
    e.setActions(t.primary, t.secondary), i&&this._notebookEditor.focus(), t.primary.length||t.secondary.length?(this._rootClassDelegate.toggle("cell-has-toolbar-actions", !0), this._onDidUpdateActions.fire()):(this._rootClassDelegate.toggle("cell-has-toolbar-actions", !1), this._onDidUpdateActions.fire())
  }
}, gki=__decorate([__param(5, wi), __param(6, xd), __param(7, ln)], gki)
}
});
function t_u(n, e, t=!1){
  const i=[];
  for(let s=0;
  s<e.outputsViewModels.length;
  s++){
    const o=e.outputsViewModels[s], a=e.model.outputs[s], [l, u]=o.resolveMimeTypes(n, void 0), d=l[u].mimeType;
    let m=a.outputs.find(g=>g.mime===d);
    if((!m||d.startsWith("image"))&&(m=a.outputs.find(g=>!g.mime.startsWith("image"))), !m)continue;
    let p="";
    if(Let(d)){
      const{
        text:g,count:f
      }
      =P8f(o);
      p=g,f>1&&(s+=f-1)
    }
    else p=L8f(d, m, t);
    i.push(p)
  }
  let r;
  return i.length>1?r=i.map((s, o)=>`Cell output ${o+1} of ${i.length}
${s}`).join(`
`):r=i[0]??"", r
}
function P8f(n){
  let e="";
  const t=n.cellViewModel;
  let i=t.outputsViewModels.indexOf(n), r=0;
  for(;
  i<t.model.outputs.length;
  ){
    const o=t.model.outputs[i].outputs.find(a=>Let(a.mime));
    if(!o)break;
    e=e+n_u.decode(o.data.buffer), i=i+1, r++
  }
  return{
    text:e.trim(), count:r
  }
}
function L8f(n, e, t=!1){
  let i=`${n}`;
  const r=1e5;
  if(i=n_u.decode(e.data.slice(0, r).buffer), e.data.byteLength>r)i=i+"...(truncated)";
  else if(n==="application/vnd.code.notebook.error"){
    i=i.replace(/\\u001b\[[0-9;
    ]*m/gi, "");
    try{
      const s=JSON.parse(i);
      !s.stack||t?i=`${s.name}: ${s.message}`:i=s.stack
    }
    catch{
      
    }
  }
  return i.trim()
}
async function bdy(n, e, t, i){
  const r=e.model, s=n&&BTa.includes(n)?r.outputs.find(a=>a.mime===n):r.outputs.find(a=>BTa.includes(a.mime));
  if(n=s?.mime, !n||!s)return;
  const o=Let(n)?P8f(e).text:L8f(n, s);
  try{
    await t.writeText(o)
  }
  catch(a){
    i.error(`Failed to copy content: ${a}`)
  }
}
var n_u, BTa, fki=