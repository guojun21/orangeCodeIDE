// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatConfirmationWidget.js
// Offset: 32727994 (bundle byte offset)
// Size: 2706 bytes

ri(), Rly(), fk(), yn(), tg(), rt(), oN(), Wt(), $b(), Uc(), qi(), nl(), pl(), Ei(), wm(), hSi=class extends at{
  get onDidClick(){
    return this._onDidClick.event
  }
  get onDidChangeHeight(){
    return this._onDidChangeHeight.event
  }
  get domNode(){
    return this._domNode
  }
  setShowButtons(e){
    this.domNode.classList.toggle("hideButtons", !e)
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.instantiationService=r, this._configurationService=o, this._hostService=a, this._onDidClick=this._register(new Qe), this._onDidChangeHeight=this._register(new Qe);
    const l=kl(".chat-confirmation-widget@root", [kl(".chat-confirmation-widget-expando@expando"), kl(".chat-confirmation-widget-title@title"), kl(".chat-confirmation-widget-message@message"), kl(".chat-confirmation-buttons-container@buttonsContainer")]);
    if(this._domNode=l.root, this.markdownRenderer=this.instantiationService.createInstance(sL, {
      
    }), i){
      const d=Ua(this,!1),m=this._register(new pw(l.expando,{
        
      }));
      this._register(Oc(p=>{
        const g=d.read(p);
        m.icon=g?Be.chevronDown:Be.chevronRight,l.message.classList.toggle("hidden",!g),this._onDidChangeHeight.fire()
      })),this._register(m.onDidClick(()=>{
        const p=d.get();
        d.set(!p,void 0)
      }))
    }
    const u=this._register(this.markdownRenderer.render(new _c(e, {
      supportThemeIcons:!0
    }), {
      asyncRenderCallback:()=>this._onDidChangeHeight.fire()
    }));
    l.title.append(u.element), this.messageElement=l.message, t.forEach(d=>{
      const m={
        ...lE,secondary:d.isSecondary,title:d.tooltip
      };
      let p;
      d.moreActions?p=new Cbt(l.buttonsContainer,{
        ...m,contextMenuProvider:s,addPrimaryActionToDropdown:!1,actions:d.moreActions.map(g=>this._register(new Hs(g.label,g.label,void 0,!0,()=>(this._onDidClick.fire(g),Promise.resolve()))))
      }):p=new pw(l.buttonsContainer,m),this._register(p),p.label=d.label,this._register(p.onDidClick(()=>this._onDidClick.fire(d)))
    })
  }
  renderMessage(e){
    if(this.messageElement.append(e), this._configurationService.getValue("chat.focusWindowOnConfirmation")){
      const t=As(e);
      t.document.hasFocus()||this._hostService.focus(t,{
        force:!0
      })
    }
  }
}, hSi=__decorate([__param(3, ln), __param(4, kc), __param(5, Fn), __param(6, wd)], hSi), mSi=class extends hSi{
  constructor(e, t, i, r, s, o, a){
    super(e, i, !1, r, s, o, a), this.message=t;
    const l=this._register(this.markdownRenderer.render(typeof this.message=="string"?new _c(this.message):this.message, {
      asyncRenderCallback:()=>this._onDidChangeHeight.fire()
    }));
    this.renderMessage(l.element)
  }
}, mSi=__decorate([__param(3, ln), __param(4, kc), __param(5, Fn), __param(6, wd)], mSi), pSi=class extends hSi{
  constructor(e, t, i, r, s, o, a, l){
    super(e, r, i, s, o, a, l), this.renderMessage(t)
  }
}, pSi=__decorate([__param(4, ln), __param(5, kc), __param(6, Fn), __param(7, wd)], pSi)
}
}), dxa, Ply=