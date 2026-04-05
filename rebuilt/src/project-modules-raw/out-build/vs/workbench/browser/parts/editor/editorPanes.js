// Module: out-build/vs/workbench/browser/parts/editor/editorPanes.js
// Offset: 31408776 (bundle byte offset)
// Size: 6282 bytes

ri(), mk(), _s(), yn(), rt(), Vf(), Js(), Ht(), ru(), wI(), Wt(), jr(), Xg(), Ws(), EE(), Nu(), wm(), zp(), exe(), $Lf(), t1a=class extends at{
  get minimumWidth(){
    return this._activeEditorPane?.minimumWidth??Zye.width
  }
  get minimumHeight(){
    return this._activeEditorPane?.minimumHeight??Zye.height
  }
  get maximumWidth(){
    return this._activeEditorPane?.maximumWidth??R1t.width
  }
  get maximumHeight(){
    return this._activeEditorPane?.maximumHeight??R1t.height
  }
  get activeEditorPane(){
    return this._activeEditorPane
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this.editorGroupParent=e, this.editorPanesParent=t, this.groupView=i, this.layoutService=r, this.instantiationService=s, this.workspaceTrustService=a, this.logService=l, this.dialogService=u, this.hostService=d, this._onDidFocus=this._register(new Qe), this.onDidFocus=this._onDidFocus.event, this._onDidChangeSizeConstraints=this._register(new Qe), this.onDidChangeSizeConstraints=this._onDidChangeSizeConstraints.event, this._activeEditorPane=null, this.editorPanes=[], this.mapEditorPaneToPendingSetInput=new Map, this.activeEditorPaneDisposables=this._register(new Ut), this.editorPanesRegistry=Di.as(Jp.EditorPane), this.editorOperation=this._register(new xIc(o)), this.registerListeners()
  }
  registerListeners(){
    this._register(this.workspaceTrustService.onDidChangeTrust(()=>this.onDidChangeWorkspaceTrust()))
  }
  onDidChangeWorkspaceTrust(){
    const e=this._activeEditorPane?.input, t=this._activeEditorPane?.options;
    e?.hasCapability(16)&&this.groupView.openEditor(e, t)
  }
  async openEditor(e, t, i, r=Object.create(null)){
    try{
      return await this.doOpenEditor(this.getEditorPaneDescriptor(e),e,t,i,r)
    }
    catch(s){
      return t?.ignoreError?{
        error:s
      }
      :this.doShowError(s,e,t,i,r)
    }
  }
  async doShowError(e, t, i, r, s){
    this.logService.error(e);
    let o=!1;
    if(i?.source===rR.USER&&(!jun(e)||e.allowDialog)&&(o=await this.doShowErrorDialog(e, t)), o)return{
      error:e
    };
    const a={
      ...i
    };
    return bf(e)||(a.error=e), {
      ...await this.doOpenEditor(e1a.DESCRIPTOR,t,a,r,s),error:e
    }
  }
  async doShowErrorDialog(e, t){
    let i=Ha.Error, r, s=Jw(e), o;
    jun(e)&&(o=e.actions, i=e.forceSeverity??Ha.Error, e.forceMessage&&(r=e.message, s=void 0)), r||(r=_(3743, null, t.getName()));
    const a=[];
    if(o&&o.length>0)for(const m of o)a.push({
      label:m.label,run:()=>m
    });
    else a.push({
      label:_(3744,null),run:()=>{
        
      }
    });
    let l;
    a.length===1&&(l={
      run:()=>{
        u=!0
      }
    });
    let u=!1;
    const{
      result:d
    }
    =await this.dialogService.prompt({
      type:i,message:r,detail:s,buttons:a,cancelButton:l
    });
    if(d){
      const m=d.run();
      m instanceof Promise&&m.catch(p=>this.dialogService.error(Jw(p))),u=!0
    }
    return u
  }
  async doOpenEditor(e, t, i, r, s=Object.create(null)){
    const o=this.doShowEditorPane(e), a=_C(), {
      changed:l,cancelled:u
    }
    =await this.doSetInput(o, t, i, s);
    return!u&&!i?.silentOpen&&((!i||!i.preserveFocus)&&this.shouldRestoreFocus(a)?o.focus():r?.preserveWindowOrder||this.hostService.moveTop(Coe(this.groupView.windowId, !0).window)), {
      pane:o,changed:l,cancelled:u
    }
  }
  shouldRestoreFocus(e){
    if(!this.layoutService.isRestored()||!e)return!0;
    const t=_C();
    return!!(!t||t===e.ownerDocument.body||e===t||!dW(t)||HS(t, this.editorGroupParent))
  }
  getEditorPaneDescriptor(e){
    return e.hasCapability(16)&&!this.workspaceTrustService.isWorkspaceTrusted()?Xka.DESCRIPTOR:ed(this.editorPanesRegistry.getEditorPane(e))
  }
  doShowEditorPane(e){
    if(this._activeEditorPane&&e.describes(this._activeEditorPane))return this._activeEditorPane;
    this.doHideActiveEditorPane();
    const t=this.doCreateEditorPane(e);
    this.doSetActiveEditorPane(t);
    const i=ed(t.getContainer());
    return this.editorPanesParent.appendChild(i), gv(i), t.setVisible(!0), this.pagePosition&&t.layout(new Lu(this.pagePosition.width, this.pagePosition.height), {
      top:this.pagePosition.top,left:this.pagePosition.left
    }), this.boundarySashes&&t.setBoundarySashes(this.boundarySashes), t
  }
  doCreateEditorPane(e){
    const t=this.doInstantiateEditorPane(e);
    if(!t.getContainer()){
      const i=Ct(".editor-instance");
      this.editorPanesParent.appendChild(i);
      try{
        t.create(i)
      }
      catch(r){
        throw i.remove(),Ng(i),r
      }
    }
    return t
  }
  doInstantiateEditorPane(e){
    const t=this.editorPanes.find(r=>e.describes(r));
    if(t)return t;
    const i=this._register(e.instantiate(this.instantiationService, this.groupView));
    return this.editorPanes.push(i), i
  }
  doSetActiveEditorPane(e){
    this._activeEditorPane=e, this.activeEditorPaneDisposables.clear(), e&&(this.activeEditorPaneDisposables.add(e.onDidChangeSizeConstraints(t=>this._onDidChangeSizeConstraints.fire(t))), this.activeEditorPaneDisposables.add(e.onDidFocus(()=>this._onDidFocus.fire()))), this._onDidChangeSizeConstraints.fire(void 0)
  }
  async doSetInput(e, t, i, r){
    let s=e.input?.matches(t);
    if(s&&!i?.forceReload)return this.mapEditorPaneToPendingSetInput.has(e)&&await this.mapEditorPaneToPendingSetInput.get(e), s=e.input?.matches(t), s&&e.setOptions(i), {
      changed:!1,cancelled:!s
    };
    const o=this.editorOperation.start(this.layoutService.isRestored()?800:3200);
    let a=!1;
    try{
      e.clearInput();
      const l=e.setInput(t,i,r,o.token);
      this.mapEditorPaneToPendingSetInput.set(e,l),await l,o.isCurrent()||(a=!0)
    }
    catch(l){
      if(!o.isCurrent())a=!0;
      else throw l
    }
    finally{
      o.isCurrent()&&this.mapEditorPaneToPendingSetInput.delete(e),o.stop()
    }
    return{
      changed:!s,cancelled:a
    }
  }
  doHideActiveEditorPane(){
    if(!this._activeEditorPane)return;
    this.editorOperation.stop(), this.safeRun(()=>this._activeEditorPane?.clearInput()), this.safeRun(()=>this._activeEditorPane?.setVisible(!1)), this.mapEditorPaneToPendingSetInput.delete(this._activeEditorPane);
    const e=this._activeEditorPane.getContainer();
    e&&(e.remove(), Ng(e)), this.doSetActiveEditorPane(null)
  }
  closeEditor(e){
    this._activeEditorPane?.input&&e.matches(this._activeEditorPane.input)&&this.doHideActiveEditorPane()
  }
  setVisible(e){
    this.safeRun(()=>this._activeEditorPane?.setVisible(e))
  }
  layout(e){
    this.pagePosition=e, this.safeRun(()=>this._activeEditorPane?.layout(new Lu(e.width, e.height), e))
  }
  setBoundarySashes(e){
    this.boundarySashes=e, this.safeRun(()=>this._activeEditorPane?.setBoundarySashes(e))
  }
  safeRun(e){
    try{
      e()
    }
    catch(t){
      this.logService.error(t)
    }
  }
}, t1a=__decorate([__param(3, Vu), __param(4, ln), __param(5, p2), __param(6, Wx), __param(7, Rr), __param(8, Ml), __param(9, wd)], t1a)
}
});
function jMe(n){
  if(!n)return!1;
  const e="/"+xhn.replace(/\\/g, "/")+"/";
  return n.path.replace(/\\/g, "/").includes(e)
}
function qLf(n){
  const e=xhn.replace(/\\/g, "/")+"/";
  return n.replace(/\\/g, "/").includes(e)
}
var Hit=