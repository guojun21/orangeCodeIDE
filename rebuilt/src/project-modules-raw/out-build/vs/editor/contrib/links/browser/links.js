// Module: out-build/vs/editor/contrib/links/browser/links.js
// Offset: 30891387 (bundle byte offset)
// Size: 5884 bytes

vr(), Po(), _s(), tg(), rt(), zr(), _r(), Yr(), Sx(), Yn(), Cry(), Cu(), bv(), xve(), Cm(), Api(), Sry(), Ht(), So(), Fc(), DMe=class extends at{
  static{
    Opu=this
  }
  static{
    this.ID="editor.linkDetector"
  }
  static get(e){
    return e.getContribution(Opu.ID)
  }
  constructor(e, t, i, r, s){
    super(), this.editor=e, this.openerService=t, this.notificationService=i, this.languageFeaturesService=r, this.providers=this.languageFeaturesService.linkProvider, this.debounceInformation=s.for(this.providers, "Links", {
      min:1e3,max:4e3
    }), this.computeLinks=this._register(new Hu(()=>this.computeLinksNow(), 1e3)), this.computePromise=null, this.activeLinksList=null, this.currentOccurrences={
      
    }, this.activeLinkDecorationId=null;
    const o=this._register(new Cun(e));
    this._register(o.onMouseMoveOrRelevantKeyDown(([a, l])=>{
      this._onEditorMouseMove(a,l)
    })), this._register(o.onExecute(a=>{
      this.onEditorMouseUp(a)
    })), this._register(o.onCancel(a=>{
      this.cleanUpActiveLinkDecoration()
    })), this._register(e.onDidChangeConfiguration(a=>{
      a.hasChanged(72)&&(this.updateDecorations([]),this.stop(),this.computeLinks.schedule(0))
    })), this._register(e.onDidChangeModelContent(a=>{
      this.editor.hasModel()&&this.computeLinks.schedule(this.debounceInformation.get(this.editor.getModel()))
    })), this._register(e.onDidChangeModel(a=>{
      this.currentOccurrences={
        
      },this.activeLinkDecorationId=null,this.stop(),this.computeLinks.schedule(0)
    })), this._register(e.onDidChangeModelLanguage(a=>{
      this.stop(),this.computeLinks.schedule(0)
    })), this._register(this.providers.onDidChange(a=>{
      this.stop(),this.computeLinks.schedule(0)
    })), this.computeLinks.schedule(0)
  }
  async computeLinksNow(){
    if(!this.editor.hasModel()||!this.editor.getOption(72))return;
    const e=this.editor.getModel();
    if(!e.isTooLargeForSyncing()&&this.providers.has(e)){
      this.activeLinksList&&(this.activeLinksList.dispose(),this.activeLinksList=null),this.computePromise=dw(t=>Nxf(this.providers,e,t));
      try{
        const t=new J_(!1);
        if(this.activeLinksList=await this.computePromise,this.debounceInformation.update(e,t.elapsed()),e.isDisposed())return;
        this.updateDecorations(this.activeLinksList.links)
      }
      catch(t){
        Gc(t)
      }
      finally{
        this.computePromise=null
      }
    }
  }
  updateDecorations(e){
    const t=this.editor.getOption(79)==="altKey", i=[], r=Object.keys(this.currentOccurrences);
    for(const o of r){
      const a=this.currentOccurrences[o];
      i.push(a.decorationId)
    }
    const s=[];
    if(e)for(const o of e)s.push($pu.decoration(o, t));
    this.editor.changeDecorations(o=>{
      const a=o.deltaDecorations(i,s);
      this.currentOccurrences={
        
      },this.activeLinkDecorationId=null;
      for(let l=0,u=a.length;
      l<u;
      l++){
        const d=new $pu(e[l],a[l]);
        this.currentOccurrences[d.decorationId]=d
      }
    })
  }
  _onEditorMouseMove(e, t){
    const i=this.editor.getOption(79)==="altKey";
    if(this.isEnabled(e, t)){
      this.cleanUpActiveLinkDecoration();
      const r=this.getLinkOccurrence(e.target.position);
      r&&this.editor.changeDecorations(s=>{
        r.activate(s,i),this.activeLinkDecorationId=r.decorationId
      })
    }
    else this.cleanUpActiveLinkDecoration()
  }
  cleanUpActiveLinkDecoration(){
    const e=this.editor.getOption(79)==="altKey";
    if(this.activeLinkDecorationId){
      const t=this.currentOccurrences[this.activeLinkDecorationId];
      t&&this.editor.changeDecorations(i=>{
        t.deactivate(i,e)
      }),this.activeLinkDecorationId=null
    }
  }
  onEditorMouseUp(e){
    if(!this.isEnabled(e))return;
    const t=this.getLinkOccurrence(e.target.position);
    t&&this.openLinkOccurrence(t, e.hasSideBySideModifier, !0)
  }
  openLinkOccurrence(e, t, i=!1){
    if(!this.openerService)return;
    const{
      link:r
    }
    =e;
    r.resolve(Cs.None).then(s=>{
      if(typeof s=="string"&&this.editor.hasModel()){
        const o=this.editor.getModel().uri;
        if(o.scheme===_n.file&&s.startsWith(`${_n.file}:`)){
          const a=je.parse(s);
          if(a.scheme===_n.file){
            const l=RBe(a);
            let u=null;
            l.startsWith("/./")||l.startsWith("\\.\\")?u=`.${l.substr(1)}`:(l.startsWith("//./")||l.startsWith("\\\\.\\"))&&(u=`.${l.substr(2)}`),u&&(s=Wo(o,u))
          }
        }
      }
      return this.openerService.open(s,{
        openToSide:t,fromUserGesture:i,allowContributedOpeners:!0,allowCommands:!0,fromWorkspace:!0
      })
    }, s=>{
      const o=s instanceof Error?s.message:s;
      o==="invalid"?this.notificationService.warn(_(1425,null,r.url.toString())):o==="missing"?this.notificationService.warn(_(1426,null)):Gc(s)
    })
  }
  getLinkOccurrence(e){
    if(!this.editor.hasModel()||!e)return null;
    const t=this.editor.getModel().getDecorationsInRange({
      startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:e.lineNumber,endColumn:e.column
    }, 0, !0);
    for(const i of t){
      const r=this.currentOccurrences[i.id];
      if(r)return r
    }
    return null
  }
  isEnabled(e, t){
    return!!(e.target.type===6&&(e.hasTriggerModifier||t&&t.keyCodeIsTriggerKey))
  }
  stop(){
    this.computeLinks.cancel(), this.activeLinksList&&(this.activeLinksList?.dispose(), this.activeLinksList=null), this.computePromise&&(this.computePromise.cancel(), this.computePromise=null)
  }
  dispose(){
    super.dispose(), this.stop()
  }
}, DMe=Opu=__decorate([__param(1, Ja), __param(2, ms), __param(3, $u), __param(4, ene)], DMe), Upu={
  general:Zh.register({
    description:"detected-link", stickiness:1, collapseOnReplaceEdit:!0, inlineClassName:"detected-link"
  }), active:Zh.register({
    description:"detected-link-active", stickiness:1, collapseOnReplaceEdit:!0, inlineClassName:"detected-link-active"
  })
}, $pu=class TWa{
  static decoration(e, t){
    return{
      range:e.range,options:TWa._getOptions(e,t,!1)
    }
  }
  static _getOptions(e, t, i){
    const r={
      ...i?Upu.active:Upu.general
    };
    return r.hoverMessage=kry(e, t), r
  }
  constructor(e, t){
    this.link=e, this.decorationId=t
  }
  activate(e, t){
    e.changeDecorationOptions(this.decorationId, TWa._getOptions(this.link, t, !0))
  }
  deactivate(e, t){
    e.changeDecorationOptions(this.decorationId, TWa._getOptions(this.link, t, !1))
  }
}, Fxf=class extends vu{
  constructor(){
    super({
      id:"editor.action.openLink",label:dt(1434,"Open Link"),precondition:void 0
    })
  }
  run(n, e){
    const t=DMe.get(e);
    if(!t||!e.hasModel())return;
    const i=e.getSelections();
    for(const r of i){
      const s=t.getLinkOccurrence(r.getEndPosition());
      s&&t.openLinkOccurrence(s,!1)
    }
  }
}, Mg(DMe.ID, DMe, 1), ac(Fxf)
}
}), D_i, Ery=