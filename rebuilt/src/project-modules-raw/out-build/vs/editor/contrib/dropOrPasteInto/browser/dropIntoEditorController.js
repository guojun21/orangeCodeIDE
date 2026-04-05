// Module: out-build/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorController.js
// Offset: 25131816 (bundle byte offset)
// Size: 3186 bytes

Vs(), vr(), ZSe(), QY(), rt(), _s(), Ht(), Ei(), si(), sN(), Wt(), wBc(), ts(), Cm(), lgi(), Xun(), dve(), TBc(), EBc(), ZSh(), bla="editor.dropIntoEditor.preferences", oQl="editor.changeDropType", vla=new Sn("dropWidgetVisible", !1, _(1072, null)), mme=class extends at{
  static{
    KUe=this
  }
  static{
    this.ID="editor.contrib.dropIntoEditorController"
  }
  static get(e){
    return e.getContribution(KUe.ID)
  }
  static setConfigureDefaultAction(e){
    this._configureDefaultAction=e
  }
  constructor(e, t, i, r, s){
    super(), this._configService=i, this._languageFeaturesService=r, this._treeViewsDragAndDropService=s, this.treeItemsTransfer=GB.getInstance(), this._dropProgressManager=this._register(t.createInstance(K3n, "dropIntoEditor", e)), this._postDropWidgetManager=this._register(t.createInstance(Z3n, "dropIntoEditor", e, vla, {
      id:oQl,label:_(1073,null)
    }, ()=>KUe._configureDefaultAction?[KUe._configureDefaultAction]:[])), this._register(e.onDropIntoEditor(o=>this.onDropIntoEditor(e, o.position, o.event)))
  }
  clearWidgets(){
    this._postDropWidgetManager.clear()
  }
  changeDropType(){
    this._postDropWidgetManager.tryShowSelector()
  }
  async onDropIntoEditor(e, t, i){
    if(!i.dataTransfer||!e.hasModel())return;
    KUe._currentDropOperation?.cancel(), e.focus(), e.setPosition(t);
    const r=dw(async s=>{
      const o=new Ut,a=o.add(new ERe(e,1,void 0,s));
      try{
        const l=await this.extractDataTransferData(i);
        if(l.size===0||a.token.isCancellationRequested)return;
        const u=e.getModel();
        if(!u)return;
        const d=this._languageFeaturesService.documentDropEditProvider.ordered(u).filter(p=>p.dropMimeTypes?p.dropMimeTypes.some(g=>l.matches(g)):!0),m=o.add(await this.getDropEdits(d,u,t,l,a.token));
        if(a.token.isCancellationRequested)return;
        if(m.edits.length){
          const p=this.getInitialActiveEditIndex(u,m.edits),g=e.getOption(36).showDropSelector==="afterDrop";
          await this._postDropWidgetManager.applyEditAndShowIfNeeded([Zt.fromPositions(t)],{
            activeEditIndex:p,allEdits:m.edits
          },g,async f=>f,s)
        }
      }
      finally{
        o.dispose(),KUe._currentDropOperation===r&&(KUe._currentDropOperation=void 0)
      }
    });
    this._dropProgressManager.showWhile(t, _(1074, null), r, {
      cancel:()=>r.cancel()
    }), KUe._currentDropOperation=r
  }
  async getDropEdits(e, t, i, r, s){
    const o=new Ut, a=await WP(Promise.all(e.map(async u=>{
      try{
        const d=await u.provideDocumentDropEdits(t,i,r,s);
        return d&&o.add(d),d?.edits.map(m=>({
          ...m,providerId:u.id
        }))
      }
      catch(d){
        bf(d)||console.error(d),console.error(d)
      }
    })), s), l=lh(a??[]).flat();
    return{
      edits:USh(l),dispose:()=>o.dispose()
    }
  }
  getInitialActiveEditIndex(e, t){
    const i=this._configService.getValue(bla, {
      resource:e.uri
    });
    for(const r of Array.isArray(i)?i:[]){
      const s=new p0(r),o=t.findIndex(a=>a.kind&&s.contains(a.kind));
      if(o>=0)return o
    }
    return 0
  }
  async extractDataTransferData(e){
    if(!e.dataTransfer)return new wbt;
    const t=V5o(e.dataTransfer);
    if(this.treeItemsTransfer.hasData(hme.prototype)){
      const i=this.treeItemsTransfer.getData(hme.prototype);
      if(Array.isArray(i))for(const r of i){
        const s=await this._treeViewsDragAndDropService.removeDragOperationTransfer(r.identifier);
        if(s)for(const[o,a]of s)t.replace(o,a)
      }
    }
    return t
  }
}, mme=KUe=__decorate([__param(1, ln), __param(2, Fn), __param(3, $u), __param(4, Zun)], mme)
}
}), edn, aQl=