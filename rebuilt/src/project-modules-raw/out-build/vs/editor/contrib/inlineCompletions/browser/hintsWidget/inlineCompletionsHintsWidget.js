// Module: out-build/vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js
// Offset: 4208873 (bundle byte offset)
// Size: 7764 bytes

ri(), y3(), Rx(), Kde(), nl(), Vs(), vr(), qi(), v9e(), rt(), Uc(), _r(), Jr(), Ht(), dg(), vT(), dr(), hs(), si(), pl(), Wt(), ka(), Pa(), Pm(), tl(), Tg(), h$o(), eAA(), m$o=class extends at{
  constructor(e, t, i){
    super(), this.editor=e, this.model=t, this.instantiationService=i, this.alwaysShowToolbar=tp(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(64).showToolbar==="always"), this.sessionPosition=void 0, this.position=Ro(this, r=>{
      const s=this.model.read(r)?.primaryGhostText.read(r);
      if(!this.alwaysShowToolbar.read(r)||!s||s.parts.length===0)return this.sessionPosition=void 0,null;
      const o=s.parts[0].column;
      this.sessionPosition&&this.sessionPosition.lineNumber!==s.lineNumber&&(this.sessionPosition=void 0);
      const a=new ar(s.lineNumber,Math.min(o,this.sessionPosition?.column??Number.MAX_SAFE_INTEGER));
      return this.sessionPosition=a,a
    }), this._register(M0((r, s)=>{
      const o=this.model.read(r);
      if(!o||!this.alwaysShowToolbar.read(r))return;
      const a=Ite((u,d)=>{
        const m=d.add(this.instantiationService.createInstance(Mvt.hot.read(u),this.editor,!0,this.position,o.selectedInlineCompletionIndex,o.inlineCompletionsCount,o.activeCommands,o.warning,()=>{
          
        }));
        return e.addContentWidget(m),d.add($i(()=>e.removeContentWidget(m))),d.add(Oc(p=>{
          this.position.read(p)&&o.lastTriggerKind.read(p)!==Ybe.Explicit&&o.triggerExplicitly()
        })),m
      }),l=C5e(this,(u,d)=>!!this.position.read(u)||!!d);
      s.add(Oc(u=>{
        l.read(u)&&a.read(u)
      }))
    }))
  }
}, m$o=__decorate([__param(2, ln)], m$o), FJh=us("inline-suggestion-hints-next", Be.chevronRight, _(1351, null)), OJh=us("inline-suggestion-hints-previous", Be.chevronLeft, _(1352, null)), Mvt=class extends at{
  static{
    X6n=this
  }
  static{
    this.hot=i3n(X6n)
  }
  static{
    this._dropDownVisible=!1
  }
  static get dropDownVisible(){
    return this._dropDownVisible
  }
  static{
    this.id=0
  }
  createCommandAction(e, t, i){
    const r=new Hs(e, t, i, !0, ()=>this._commandService.executeCommand(e)), s=this.keybindingService.lookupKeybinding(e, this._contextKeyService);
    let o=t;
    return s&&(o=_(1353, null, t, s.getLabel())), r.tooltip=o, r
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    super(), this.editor=e, this.withBorder=t, this._position=i, this._currentSuggestionIdx=r, this._suggestionCount=s, this._extraCommands=o, this._warning=a, this._relayout=l, this._commandService=u, this.keybindingService=m, this._contextKeyService=p, this._menuService=g, this.id=`InlineSuggestionHintsContentWidget${X6n.id++}`, this.allowEditorOverflow=!0, this.suppressMouseDown=!1, this._warningMessageContentNode=Ite((f, A)=>{
      const w=this._warning.read(f);
      return w?typeof w.message=="string"?w.message:A.add(Jde(w.message)).element:void 0
    }), this._warningMessageNode=Mv.div({
      class:"warningMessage",style:{
        maxWidth:400,margin:4,marginBottom:4,display:Ro(f=>this._warning.read(f)?"block":"none")
      }
    }, [this._warningMessageContentNode]).keepUpdated(this._store), this.nodes=kl("div.inlineSuggestionsHints", {
      className:this.withBorder?"monaco-hover monaco-hover-content":""
    }, [this._warningMessageNode.element, kl("div@toolBar")]), this.previousAction=this._register(this.createCommandAction(x5c, _(1354, null), Qt.asClassName(OJh))), this.availableSuggestionCountAction=this._register(new Hs("inlineSuggestionHints.availableSuggestionCount", "", void 0, !1)), this.nextAction=this._register(this.createCommandAction(T5c, _(1355, null), Qt.asClassName(FJh))), this.inlineCompletionsActionsMenus=this._register(this._menuService.createMenu(st.InlineCompletionsActions, this._contextKeyService)), this.clearAvailableSuggestionCountLabelDebounced=this._register(new Hu(()=>{
      this.availableSuggestionCountAction.label=""
    }, 100)), this.disableButtonsDebounced=this._register(new Hu(()=>{
      this.previousAction.enabled=this.nextAction.enabled=!1
    }, 100)), this._register(Oc(f=>{
      this._warningMessageContentNode.read(f),this._warningMessageNode.readEffect(f),this._relayout()
    })), this.toolBar=this._register(d.createInstance(p$o, this.nodes.toolBar, st.InlineSuggestionToolbar, {
      menuOptions:{
        renderShortTitle:!0
      },toolbarOptions:{
        primaryGroup:f=>f.startsWith("primary")
      },actionViewItemProvider:(f,A)=>{
        if(f instanceof Ub)return d.createInstance($Jh,f,void 0);
        if(f===this.availableSuggestionCountAction){
          const w=new UJh(void 0,f,{
            label:!0,icon:!1
          });
          return w.setClass("availableSuggestionCount"),w
        }
      },telemetrySource:"InlineSuggestionToolbar"
    })), this.toolBar.setPrependedPrimaryActions([this.previousAction, this.availableSuggestionCountAction, this.nextAction]), this._register(this.toolBar.onDidChangeDropdownVisibility(f=>{
      X6n._dropDownVisible=f
    })), this._register(Oc(f=>{
      this._position.read(f),this.editor.layoutContentWidget(this)
    })), this._register(Oc(f=>{
      const A=this._suggestionCount.read(f),w=this._currentSuggestionIdx.read(f);
      A!==void 0?(this.clearAvailableSuggestionCountLabelDebounced.cancel(),this.availableSuggestionCountAction.label=`${w+1}/${A}`):this.clearAvailableSuggestionCountLabelDebounced.schedule(),A!==void 0&&A>1?(this.disableButtonsDebounced.cancel(),this.previousAction.enabled=this.nextAction.enabled=!0):this.disableButtonsDebounced.schedule()
    })), this._register(Oc(f=>{
      const w=this._extraCommands.read(f).map(C=>({
        class:void 0,id:C.id,enabled:!0,tooltip:C.tooltip||"",label:C.title,run:x=>this._commandService.executeCommand(C.id)
      }));
      for(const[C,x]of this.inlineCompletionsActionsMenus.getActions())for(const I of x)I instanceof Ub&&w.push(I);
      w.length>0&&w.unshift(new id),this.toolBar.setAdditionalSecondaryActions(w)
    }))
  }
  getId(){
    return this.id
  }
  getDomNode(){
    return this.nodes.root
  }
  getPosition(){
    return{
      position:this._position.get(),preference:[1,2],positionAffinity:3
    }
  }
}, Mvt=X6n=__decorate([__param(8, fr), __param(9, ln), __param(10, mo), __param(11, wi), __param(12, xd)], Mvt), UJh=class extends aI{
  constructor(){
    super(...arguments), this._className=void 0
  }
  setClass(n){
    this._className=n
  }
  render(n){
    super.render(n), this._className&&n.classList.add(this._className)
  }
  updateTooltip(){
    
  }
}, $Jh=class extends f2{
  updateLabel(){
    const n=this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService, !0);
    if(!n)return super.updateLabel();
    if(this.label){
      const e=kl("div.keybinding").root;
      this._register(new Xoe(e,cf,{
        disableTitle:!0,...RBc
      })).set(n),this.label.textContent=this._action.label,this.label.appendChild(e),this.label.classList.add("inlineSuggestionStatusBarItemLabel")
    }
  }
  updateTooltip(){
    
  }
}, p$o=class extends KI{
  constructor(e, t, i, r, s, o, a, l, u){
    super(e, {
      resetMenu:t,...i
    }, r, s, o, a, l, u), this.menuId=t, this.options2=i, this.menuService=r, this.contextKeyService=s, this.menu=this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, {
      emitEventsForSubmenuChanges:!0
    })), this.additionalActions=[], this.prependedPrimaryActions=[], this.additionalPrimaryActions=[], this._store.add(this.menu.onDidChange(()=>this.updateToolbar())), this.updateToolbar()
  }
  updateToolbar(){
    const{
      primary:e,secondary:t
    }
    =tM(this.menu.getActions(this.options2?.menuOptions), this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
    t.push(...this.additionalActions), e.unshift(...this.prependedPrimaryActions), e.push(...this.additionalPrimaryActions), this.setActions(e, t)
  }
  setPrependedPrimaryActions(e){
    cg(this.prependedPrimaryActions, e, (t, i)=>t===i)||(this.prependedPrimaryActions=e, this.updateToolbar())
  }
  setAdditionalPrimaryActions(e){
    cg(this.additionalPrimaryActions, e, (t, i)=>t===i)||(this.additionalPrimaryActions=e, this.updateToolbar())
  }
  setAdditionalSecondaryActions(e){
    cg(this.additionalActions, e, (t, i)=>t===i)||(this.additionalActions=e, this.updateToolbar())
  }
}, p$o=__decorate([__param(3, xd), __param(4, wi), __param(5, kc), __param(6, mo), __param(7, fr), __param(8, ea)], p$o)
}
});
function f$o(n, e, t){
  const i=qS(n);
  return!(e<i.left||e>i.left+i.width||t<i.top||t>i.top+i.height)
}
var b$o=