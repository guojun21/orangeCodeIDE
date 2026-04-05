// Module: out-build/vs/workbench/browser/parts/views/viewPane.js
// Offset: 30856499 (bundle byte offset)
// Size: 15944 bytes

fxf(), Ht(), yn(), Nl(), ri(), KC(), yF(), rt(), nl(), Ov(), Ws(), ka(), pl(), Io(), Jr(), yxf(), Ei(), jh(), Bp(), si(), Js(), Wt(), dr(), dg(), kqe(), Fc(), fk(), TMe(), IMe(), k_i(), zI(), Yn(), Pm(), qi(), aCa(), vT(), E_i(), Rx(), E_(), $b(), ml(), mb(), Op(), Id(), ky(), bS(), (function(n){
  n[n.Default=0]="Default", n[n.WhenExpanded=1]="WhenExpanded", n[n.Always=2]="Always"
})(Eqe||(Eqe={
  
})), lCa=new Hs("viewpane.action.filter"), Exf=us("view-pane-container-expanded", Be.chevronDown, _(4055, null)), xxf=us("view-pane-container-collapsed", Be.chevronRight, _(4056, null)), Rpu=Di.as(Fg.ViewsRegistry), uCa=class{
  get enabled(){
    return this._enabled
  }
  constructor(e, t, i, r, s, o){
    this.container=e, this.delegate=t, this.instantiationService=i, this.openerService=r, this.contextKeyService=s, this.items=[], this._enabled=!1, this.disposables=new Ut, this.enabledDisposables=this.disposables.add(new Ut), this.renderDisposables=this.disposables.add(new Ut), this.disposables.add(In.runAndSubscribe(this.delegate.onDidChangeViewWelcomeState, ()=>this.onDidChangeViewWelcomeState())), this.disposables.add(o.onWillShutdown(()=>this.dispose()))
  }
  layout(e, t){
    this._enabled&&(this.element.style.height=`${e}px`, this.element.style.width=`${t}px`, this.element.classList.toggle("wide", t>640), this.scrollableElement.scanDomNode())
  }
  focus(){
    this._enabled&&this.element.focus()
  }
  onDidChangeViewWelcomeState(){
    const e=this.delegate.shouldShowWelcome();
    if(this._enabled===e)return;
    if(this._enabled=e, !e){
      this.enabledDisposables.clear();
      return
    }
    this.container.classList.add("welcome");
    const t=Rt(this.container, Ct(".welcome-view"));
    this.element=Ct(".welcome-view-content", {
      tabIndex:0
    }), this.scrollableElement=new vF(this.element, {
      alwaysConsumeMouseWheel:!0,horizontal:2,vertical:3
    }), Rt(t, this.scrollableElement.getDomNode()), this.enabledDisposables.add($i(()=>{
      this.container.classList.remove("welcome"),this.scrollableElement.dispose(),t.remove(),this.scrollableElement=void 0,this.element=void 0
    })), this.contextKeyService.onDidChangeContext(this.onDidChangeContext, this, this.enabledDisposables), In.chain(Rpu.onDidChangeViewWelcomeContent, i=>i.filter(r=>r===this.delegate.id))(this.onDidChangeViewWelcomeContent, this, this.enabledDisposables), this.onDidChangeViewWelcomeContent()
  }
  onDidChangeViewWelcomeContent(){
    const e=Rpu.getViewWelcomeContent(this.delegate.id);
    this.items=[];
    for(const t of e)if(t.when==="default")this.defaultItem={
      descriptor:t,visible:!0
    };
    else{
      const i=t.when?this.contextKeyService.contextMatchesRules(t.when):!0;
      this.items.push({
        descriptor:t,visible:i
      })
    }
    this.render()
  }
  onDidChangeContext(){
    let e=!1;
    for(const t of this.items){
      if(!t.descriptor.when||t.descriptor.when==="default")continue;
      const i=this.contextKeyService.contextMatchesRules(t.descriptor.when);
      t.visible!==i&&(t.visible=i,e=!0)
    }
    e&&this.render()
  }
  render(){
    this.renderDisposables.clear(), this.element.innerText="";
    const e=this.getContentDescriptors();
    if(e.length===0){
      this.container.classList.remove("welcome"),this.scrollableElement.scanDomNode();
      return
    }
    let t=0;
    for(const{
      content:i,precondition:r,renderSecondaryButtons:s
    }
    of e){
      const o=i.split(`
`);
      for(let a of o){
        if(a=a.trim(),!a)continue;
        const l=VEe(a);
        if(l.nodes.length===1&&typeof l.nodes[0]!="string"){
          const u=l.nodes[0],d=Rt(this.element,Ct(".button-container")),m=new pw(d,{
            title:u.title,supportIcons:!0,secondary:!!(s&&t>0),...lE
          });
          if(m.label=u.label,m.onDidClick(p=>{
            this.openerService.open(u.href,{
              allowCommands:!0
            })
          },null,this.renderDisposables),this.renderDisposables.add(m),t++,r){
            const p=()=>m.enabled=this.contextKeyService.contextMatchesRules(r);
            p();
            const g=new Set(r.keys());
            In.filter(this.contextKeyService.onDidChangeContext,A=>A.affectsSome(g))(p,null,this.renderDisposables)
          }
        }
        else{
          const u=Rt(this.element,Ct("p"));
          for(const d of l.nodes)if(typeof d=="string")Rt(u,...a_(d));
          else{
            const m=this.renderDisposables.add(this.instantiationService.createInstance(Lie,u,d,{
              
            }));
            if(r&&d.href.startsWith("command:")){
              const p=()=>m.enabled=this.contextKeyService.contextMatchesRules(r);
              p();
              const g=new Set(r.keys());
              In.filter(this.contextKeyService.onDidChangeContext,A=>A.affectsSome(g))(p,null,this.renderDisposables)
            }
          }
        }
      }
    }
    this.container.classList.add("welcome"), this.scrollableElement.scanDomNode()
  }
  getContentDescriptors(){
    const e=this.items.filter(t=>t.visible);
    return e.length===0&&this.defaultItem?[this.defaultItem.descriptor]:e.map(t=>t.descriptor)
  }
  dispose(){
    this.disposables.dispose()
  }
}, uCa=__decorate([__param(2, ln), __param(3, Ja), __param(4, wi), __param(5, ap)], uCa), BT=class extends bxf{
  static{
    Bpu=this
  }
  static{
    this.AlwaysShowActionsConfig="workbench.view.alwaysShowHeaderActions"
  }
  get title(){
    return this._title
  }
  get titleDescription(){
    return this._titleDescription
  }
  get singleViewPaneContainerTitle(){
    return this._singleViewPaneContainerTitle
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super({
      ...e,orientation:o.getViewLocationById(e.id)===1?1:0
    }), this.keybindingService=t, this.contextMenuService=i, this.configurationService=r, this.contextKeyService=s, this.viewDescriptorService=o, this.instantiationService=a, this.openerService=l, this.themeService=u, this.hoverService=d, this.accessibleViewInformationService=m, this._onDidFocus=this._register(new Qe), this.onDidFocus=this._onDidFocus.event, this._onDidBlur=this._register(new Qe), this.onDidBlur=this._onDidBlur.event, this._onDidChangeBodyVisibility=this._register(new Qe), this.onDidChangeBodyVisibility=this._onDidChangeBodyVisibility.event, this._onDidChangeTitleArea=this._register(new Qe), this.onDidChangeTitleArea=this._onDidChangeTitleArea.event, this._onDidChangeViewWelcomeState=this._register(new Qe), this.onDidChangeViewWelcomeState=this._onDidChangeViewWelcomeState.event, this._isVisible=!1, this.headerActionViewItems=this._register(new mp), this._isAlone=!1, this._isNaturallyExpanded=!1, this.id=e.id, this._title=e.title, this._titleDescription=e.titleDescription, this._singleViewPaneContainerTitle=e.singleViewPaneContainerTitle, this.showActions=e.showActions??Eqe.Default, this.scopedContextKeyService=this._register(s.createScoped(this.element)), this.scopedContextKeyService.createKey("view", this.id);
    const p=this.scopedContextKeyService.createKey("viewLocation", sce(o.getViewLocationById(this.id)));
    this._register(In.filter(o.onDidChangeLocation, f=>f.views.some(A=>A.id===this.id))(()=>p.set(sce(o.getViewLocationById(this.id)))));
    const g=this._register(this.instantiationService.createChild(new EA([wi, this.scopedContextKeyService])));
    this.menuActions=this._register(g.createInstance(u1t, e.titleMenuId??st.ViewTitle, st.ViewTitleContext, {
      shouldForwardArgs:!e.donotForwardArgs,renderShortTitle:!0
    })), this._register(this.menuActions.onDidChange(()=>this.updateActions()))
  }
  get headerVisible(){
    return super.headerVisible
  }
  set headerVisible(e){
    super.headerVisible=e, this.element.classList.toggle("merged-header", !e)
  }
  setVisible(e){
    this._isVisible!==e&&(this._isVisible=e, this.isExpanded()&&this._onDidChangeBodyVisibility.fire(e))
  }
  isVisible(){
    return this._isVisible
  }
  isBodyVisible(){
    return this._isVisible&&this.isExpanded()
  }
  setExpanded(e){
    this.isAlone()&&(e=!0);
    const t=super.setExpanded(e);
    return t&&this._onDidChangeBodyVisibility.fire(e), this.updateTwistyIcon(), t
  }
  setIsAlone(e){
    const t=this._isAlone;
    e&&!t&&(this._isNaturallyExpanded=this._expanded), e&&this.setExpanded(!0), this._isAlone=e, t&&!e&&this.setExpanded(this._isNaturallyExpanded), this.updateTwistyIcon()
  }
  isAlone(){
    return this._isAlone
  }
  render(){
    super.render();
    const e=CC(this.element);
    this._register(e), this._register(e.onDidFocus(()=>this._onDidFocus.fire())), this._register(e.onDidBlur(()=>this._onDidBlur.fire()))
  }
  renderHeader(e){
    this.headerContainer=e, this.twistiesContainer=Rt(e, Ct(`.twisties-container-in-view-pane-header.twisty-container${Qt.asCSSSelector(this.getTwistyIcon(this.isExpanded()))}`)), this.updateTwistyIcon(), this.renderHeaderTitle(e, this.title);
    const t=Rt(e, Ct(".actions"));
    t.classList.toggle("show-always", this.showActions===Eqe.Always), t.classList.toggle("show-expanded", this.showActions===Eqe.WhenExpanded), this.toolbar=this.instantiationService.createInstance(KI, t, {
      orientation:0,actionViewItemProvider:(s,o)=>{
        const a=this.createActionViewItem(s,o);
        return a&&this.headerActionViewItems.set(a.action.id,a),a
      },ariaLabel:_(4057,null,this.title),getKeyBinding:s=>this.keybindingService.lookupKeybinding(s.id),renderDropdownAsChildElement:!0,actionRunner:this.getActionRunner(),resetMenu:this.menuActions.menuId
    }), this._register(this.toolbar), this.setActions(), this._register(ei(t, ir.CLICK, s=>s.preventDefault()));
    const i=this.viewDescriptorService.getViewContainerByViewId(this.id);
    i?this._register(this.viewDescriptorService.getViewContainerModel(i).onDidChangeContainerInfo(({
      title:s
    })=>this.updateTitle(this.title))):console.error(`View container model not found for view ${this.id}`);
    const r=In.filter(this.configurationService.onDidChangeConfiguration, s=>s.affectsConfiguration(Bpu.AlwaysShowActionsConfig));
    this._register(r(this.updateActionsVisibility, this)), this.updateActionsVisibility()
  }
  updateHeader(){
    super.updateHeader(), this.updateTwistyIcon()
  }
  getTwistyIcon(e){
    return e?Exf:xxf
  }
  updateTwistyIcon(){
    this.twistiesContainer&&(!this.isAlone()||this.configurationService.getValue(v5e)==="vertical"?(this.twistiesContainer.style.width="", this.twistiesContainer.style.height="", this.twistiesContainer.classList.remove(...Qt.asClassNameArray(this.getTwistyIcon(!this._expanded))), this.twistiesContainer.classList.add(...Qt.asClassNameArray(this.getTwistyIcon(this._expanded)))):(this.twistiesContainer.style.width="10px", this.twistiesContainer.style.height="10px", this.twistiesContainer.classList.remove(...Qt.asClassNameArray(this.getTwistyIcon(!this._expanded))), this.twistiesContainer.classList.remove(...Qt.asClassNameArray(this.getTwistyIcon(this._expanded)))))
  }
  style(e){
    super.style(e);
    const t=this.getIcon();
    if(this.iconContainer){
      const i=pRe(e.headerForeground,zo(ym));
      je.isUri(t)?(this.iconContainer.style.backgroundColor=i,this.iconContainer.style.color=""):(this.iconContainer.style.color=i,this.iconContainer.style.backgroundColor="")
    }
  }
  getIcon(){
    return this.viewDescriptorService.getViewDescriptorById(this.id)?.containerIcon||Dga
  }
  renderHeaderTitle(e, t){
    this.iconContainer=Rt(e, Ct(".icon", void 0));
    const i=this.getIcon();
    let r;
    if(je.isUri(i)){
      r=`view-${this.id.replace(/[\.\:]/g,"-")}`;
      const o=`.pane-header .icon.${r}`;
      uW(o,`
				mask: ${Bx(i)} no-repeat 50% 50%;
				mask-size: 24px;
				-webkit-mask: ${Bx(i)} no-repeat 50% 50%;
				-webkit-mask-size: 16px;
			`)
    }
    else Qt.isThemeIcon(i)&&(r=Qt.asClassName(i));
    r&&this.iconContainer.classList.add(...r.split(" "));
    const s=this.calculateTitle(t);
    this.titleContainer=Rt(e, Ct("h3.title", {
      
    }, s)), this.titleContainerHover=this._register(this.hoverService.setupManagedHover(Sm("mouse"), this.titleContainer, s)), this._titleDescription&&this.setTitleDescription(this._titleDescription), this.iconContainerHover=this._register(this.hoverService.setupManagedHover(Sm("mouse"), this.iconContainer, s)), this.iconContainer.setAttribute("aria-label", this._getAriaLabel(s, this._titleDescription))
  }
  _getAriaLabel(e, t){
    const i=this.viewDescriptorService.getViewDescriptorById(this.id)?.accessibilityHelpContent, r=this.accessibleViewInformationService?.hasShownAccessibleView(this.id);
    return!i||r?t?`${e} - ${t}`:e:_(4058, null, e)
  }
  updateTitle(e){
    const t=this.calculateTitle(e);
    this.titleContainer&&(this.titleContainer.textContent=t, this.titleContainerHover?.update(t)), this.updateAriaHeaderLabel(t, this._titleDescription), this._title=e, this._onDidChangeTitleArea.fire()
  }
  updateAriaHeaderLabel(e, t){
    const i=this._getAriaLabel(e, t);
    this.iconContainer&&(this.iconContainerHover?.update(e), this.iconContainer.setAttribute("aria-label", i)), this.ariaHeaderLabel=this.getAriaHeaderLabel(i)
  }
  setTitleDescription(e){
    this.titleDescriptionContainer?(this.titleDescriptionContainer.textContent=e??"", this.titleDescriptionContainerHover?.update(e??"")):e&&this.titleContainer&&(this.titleDescriptionContainer=Hoh(this.titleContainer, Ct("span.description", {
      
    }, e)), this.titleDescriptionContainerHover=this._register(this.hoverService.setupManagedHover(Sm("mouse"), this.titleDescriptionContainer, e)))
  }
  updateTitleDescription(e){
    this.setTitleDescription(e), this.updateAriaHeaderLabel(this._title, e), this._titleDescription=e, this._onDidChangeTitleArea.fire()
  }
  calculateTitle(e){
    const t=this.viewDescriptorService.getViewContainerByViewId(this.id), i=this.viewDescriptorService.getViewContainerModel(t), r=this.viewDescriptorService.getViewDescriptorById(this.id);
    return!(this.viewDescriptorService.getDefaultContainerById(this.id)===t)&&r?.containerTitle&&i.title!==r.containerTitle?`${r.containerTitle}: ${e}`:e
  }
  renderBody(e){
    this.viewWelcomeController=this._register(this.instantiationService.createInstance(uCa, e, this))
  }
  layoutBody(e, t){
    this.viewWelcomeController.layout(e, t)
  }
  onDidScrollRoot(){
    
  }
  getProgressIndicator(){
    if(this.progressBar===void 0&&(this.progressBar=this._register(new qye(this.element, VSe)), this.progressBar.hide()), this.progressIndicator===void 0){
      const e=this;
      this.progressIndicator=this._register(new sCa(ed(this.progressBar),this._register(new class extends oCa{
        constructor(){
          super(e.id,e.isBodyVisible()),this._register(e.onDidChangeBodyVisibility(t=>t?this.onScopeOpened(e.id):this.onScopeClosed(e.id)))
        }
      })))
    }
    return this.progressIndicator
  }
  getProgressLocation(){
    return $2o+this.id
  }
  getLocationBasedColors(){
    return Dpu(this.viewDescriptorService.getViewLocationById(this.id))
  }
  focus(){
    this.viewWelcomeController.enabled?this.viewWelcomeController.focus():this.element&&this.element.focus(), (zP(this.element)||UR(this.element))&&this._onDidFocus.fire()
  }
  setActions(){
    if(this.toolbar){
      const e=[...this.menuActions.getPrimaryActions()];
      this.shouldShowFilterInHeader()&&e.unshift(lCa),this.toolbar.setActions(jH(e),jH(this.menuActions.getSecondaryActions())),this.toolbar.context=this.getActionsContext()
    }
  }
  updateActionsVisibility(){
    if(!this.headerContainer)return;
    const e=this.configurationService.getValue("workbench.view.alwaysShowHeaderActions");
    this.headerContainer.classList.toggle("actions-always-visible", e)
  }
  updateActions(){
    this.setActions(), this._onDidChangeTitleArea.fire()
  }
  createActionViewItem(e, t){
    if(e.id===lCa.id){
      const i=this;
      return new class extends w3{
        constructor(){
          super(null,e)
        }
        setFocusable(){
          
        }
        get trapsArrowNavigation(){
          return!0
        }
        render(r){
          r.classList.add("viewpane-filter-container");
          const s=i.getFilterWidget();
          Rt(r,s.element),s.relayout()
        }
      }
    }
    return GR(this.instantiationService, e, {
      ...t,menuAsChild:e instanceof h2
    })
  }
  getActionsContext(){
    
  }
  getActionRunner(){
    
  }
  getOptimalWidth(){
    return 0
  }
  saveState(){
    
  }
  shouldShowWelcome(){
    return!1
  }
  getFilterWidget(){
    
  }
  shouldShowFilterInHeader(){
    return!1
  }
}, BT=Bpu=__decorate([__param(1, mo), __param(2, kc), __param(3, Fn), __param(4, wi), __param(5, fp), __param(6, ln), __param(7, Ja), __param(8, bo), __param(9, Kc)], BT), d1t=class extends BT{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e, t, i, r, s, o, a, l, u, d, m);
    const p=this._register(a.createChild(new EA([wi, this.scopedContextKeyService])));
    this.filterWidget=this._register(p.createInstance(cCa, e.filterOptions))
  }
  getFilterWidget(){
    return this.filterWidget
  }
  renderBody(e){
    super.renderBody(e), this.filterContainer=Rt(e, Ct(".viewpane-filter-container"))
  }
  layoutBody(e, t){
    super.layoutBody(e, t), this.dimension=new Lu(t, e);
    const i=!this.filterContainer?.hasChildNodes(), r=this.shouldShowFilterInHeader();
    i!==r&&(r&&um(this.filterContainer), this.updateActions(), r||Rt(this.filterContainer, this.filterWidget.element)), r||(e=e-44), this.filterWidget.layout(t), this.layoutBodyContent(e, t)
  }
  shouldShowFilterInHeader(){
    return!(this.dimension&&this.dimension.width<600&&this.dimension.height>100)
  }
}, d1t=__decorate([__param(1, mo), __param(2, kc), __param(3, Fn), __param(4, wi), __param(5, fp), __param(6, ln), __param(7, Ja), __param(8, bo), __param(9, Kc)], d1t), eb=class extends rn{
  constructor(n){
    super(n), this.desc=n
  }
  run(n, ...e){
    const t=n.get(yu).getActiveViewWithId(this.desc.viewId);
    if(t)return this.runInView(n, t, ...e)
  }
}
}
});
function xgn(n, e){
  if(e!==void 0)return typeof e=="function"?e(n):e
}
var Txf=