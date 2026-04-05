// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatReferencesContentPart.js
// Offset: 32526324 (bundle byte offset)
// Size: 8193 bytes

ri(), Vs(), qi(), rt(), zr(), Hl(), Yr(), Jr(), Yn(), Ht(), dg(), vT(), dr(), Kf(), si(), pl(), ns(), Wt(), E_(), Pd(), Rf(), Fc(), Rl(), Io(), A8(), zF(), ily(), Mm(), P_(), KAu(), gD(), Hq(), xS(), x_i(), kk(), QOf(), bEa(), Hfn=Ct, Jfn=class extends YAu{
  constructor(e, t, i, r, s, o, a, l){
    super(t??(e.length>1?_(5227, null, e.length):_(5228, null, 1)), i), this.data=e, this.contentReferencesListPool=r, this.openerService=s, this.menuService=o, this.instantiationService=a, this.contextMenuService=l
  }
  initContent(){
    const t=this._register(this.contentReferencesListPool.get()).object;
    this._register(t.onDidOpen(a=>{
      if(a.element&&"reference"in a.element&&typeof a.element.reference=="object"){
        const l="variableName"in a.element.reference?a.element.reference.value:a.element.reference,u=je.isUri(l)?l:l?.uri;
        u&&this.openerService.open(u,{
          fromUserGesture:!0,editorOptions:{
            ...a.editorOptions,selection:l&&"range"in l?l.range:void 0
          }
        })
      }
    })), this._register(t.onContextMenu(a=>{
      zu.stop(a.browserEvent,!0);
      const l=a.element&&_Ci(a.element);
      l&&this.contextMenuService.showContextMenu({
        getAnchor:()=>a.anchor,getActions:()=>{
          const u=this.menuService.getMenuActions(st.ChatAttachmentsContext,t.contextKeyService,{
            shouldForwardArgs:!0,arg:l
          });
          return YH(u)
        }
      })
    }));
    const i=this._register(this.instantiationService.createInstance(Ep));
    this._register(t.onDidChangeFocus(a=>{
      i.reset();
      const l=a.elements.length?a.elements[0]:void 0,u=l&&_Ci(l);
      i.set(u??null)
    }));
    const o=Math.min(this.data.length, 6)*22;
    return t.layout(o), t.getHTMLElement().style.height=`${o}px`, t.splice(0, t.length, this.data), t.getHTMLElement().parentElement
  }
  hasSameContent(e, t, i){
    return e.kind==="references"&&e.references.length===this.data.length&&!!t.length===this.hasFollowingContent
  }
}, Jfn=__decorate([__param(4, Ja), __param(5, xd), __param(6, ln), __param(7, kc)], Jfn), vEa=class extends Jfn{
  constructor(e, t, i, r, s, o, a, l, u){
    super(e, t, i, r, o, a, l, u), this.options=s, e.length===0&&Ng(this.domNode)
  }
  isExpanded(){
    const e=this.context.element;
    return e.usedReferencesExpanded??!!(this.options.expandedWhenEmptyResponse&&e.response.value.length===0)
  }
  setExpanded(e){
    const t=this.context.element;
    t.usedReferencesExpanded=!this.isExpanded()
  }
}, vEa=__decorate([__param(5, Ja), __param(6, xd), __param(7, ln), __param(8, kc)], vEa), CCi=class extends at{
  get inUse(){
    return this._pool.inUse
  }
  constructor(e, t, i, r, s){
    super(), this._onDidChangeVisibility=e, this.menuId=t, this.instantiationService=i, this.themeService=r, this.labelService=s, this._pool=this._register(new wCi(()=>this.listFactory()))
  }
  listFactory(){
    const e=this._register(this.instantiationService.createInstance(c5, {
      onDidChangeVisibility:this._onDidChangeVisibility
    })), t=Hfn(".chat-used-context-list");
    return this._register(zAu(t, this.themeService)), this.instantiationService.createInstance(tQ, "ChatListRenderer", t, new jOf, [this.instantiationService.createInstance(SCi, e, this.menuId)], {
      alwaysConsumeMouseWheel:!1,accessibilityProvider:{
        getAriaLabel:r=>{
          if(r.kind==="warning")return r.content.value;
          const s=r.reference;
          return typeof s=="string"?s:"variableName"in s?s.variableName:je.isUri(s)?fd(s.path):fd(s.uri.path)
        },getWidgetAriaLabel:()=>_(5229,null)
      },dnd:{
        getDragURI:r=>_Ci(r)?.toString()??null,getDragLabel:(r,s)=>{
          const o=lh(r.map(_Ci));
          if(o.length)return o.length===1?this.labelService.getUriLabel(o[0],{
            relative:!0
          }):`${o.length}`
        },dispose:()=>{
          
        },onDragOver:()=>!1,drop:()=>{
          
        },onDragStart:(r,s)=>{
          try{
            const o=r.getData(),a=lh(o.map(_Ci));
            this.instantiationService.invokeFunction(l=>Yme(l,a,s))
          }
          catch{
            
          }
        }
      }
    })
  }
  get(){
    const e=this._pool.get();
    let t=!1;
    return{
      object:e,isStale:()=>t,dispose:()=>{
        t=!0,this._pool.release(e)
      }
    }
  }
}, CCi=__decorate([__param(2, ln), __param(3, bo), __param(4, Ol)], CCi), jOf=class{
  getHeight(n){
    return 22
  }
  getTemplateId(n){
    return SCi.TEMPLATE_ID
  }
}, SCi=class{
  static{
    ZAu=this
  }
  static{
    this.TEMPLATE_ID="chatCollapsibleListRenderer"
  }
  constructor(e, t, i, r, s, o){
    this.labels=e, this.menuId=t, this.themeService=i, this.productService=r, this.instantiationService=s, this.contextKeyService=o, this.templateId=ZAu.TEMPLATE_ID
  }
  renderTemplate(e){
    const t=new Ut, i=t.add(this.labels.create(e, {
      supportHighlights:!0,supportIcons:!0
    }));
    let r, s, o;
    if(this.menuId){
      s=Hfn(".chat-collapsible-list-action-bar"),o=t.add(this.contextKeyService.createScoped(s));
      const a=t.add(this.instantiationService.createChild(new EA([wi,o])));
      r=t.add(a.createInstance(nL,s,this.menuId,{
        menuOptions:{
          shouldForwardArgs:!0,arg:void 0
        }
      })),i.element.appendChild(s)
    }
    return{
      templateDisposables:t,label:i,toolbar:r,actionBarContainer:s,contextKeyService:o
    }
  }
  getReferenceIcon(e){
    return Qt.isThemeIcon(e.iconPath)?e.iconPath:this.themeService.getColorTheme().type===JAu.DARK&&e.iconPath?.dark?e.iconPath?.dark:e.iconPath?.light
  }
  renderElement(e, t, i, r){
    if(e.kind==="warning"){
      i.label.setResource({
        name:e.content.value
      },{
        icon:Be.warning
      });
      return
    }
    const s=e.reference, o=this.getReferenceIcon(e);
    i.label.element.style.display="flex";
    let a;
    if(typeof s=="object"&&"variableName"in s)if(s.value){
      const l=je.isUri(s.value)?s.value:s.value.uri;
      i.label.setResource({
        resource:l,name:GP(l),description:`#${s.variableName}`,range:"range"in s.value?s.value.range:void 0
      },{
        icon:o,title:e.options?.status?.description??e.title
      })
    }
    else if(s.variableName.startsWith("kernelVariable")){
      const u=`${s.variableName.split(":")[1]}`;
      i.label.setLabel("Kernel variable",u,{
        title:e.options?.status?.description
      })
    }
    else i.label.setLabel("Unknown variable type");
    else if(typeof s=="string")i.label.setLabel(s, void 0, {
      iconPath:je.isUri(o)?o:void 0,title:e.options?.status?.description??e.title
    });
    else{
      const l="uri"in s?s.uri:s;
      a=l;
      const u=e.excluded?["excluded"]:[];
      if(l.scheme==="https"&&Lze(l.authority,"github.com")&&l.path.includes("/tree/")){
        const d=l.path.split("/").slice(1,3).join("/"),m=l.path.split("/").slice(5).join("/");
        i.label.setResource({
          resource:l,name:d,description:m
        },{
          icon:Be.github,title:e.title,strikethrough:e.excluded,extraClasses:u
        })
      }
      else if(l.scheme===this.productService.urlProtocol&&Lze(l.authority,KSa)){
        const d=l.path.substring(1);
        i.label.setResource({
          resource:l,name:d
        },{
          icon:Be.settingsGear,title:_(5230,null,d),strikethrough:e.excluded,extraClasses:u
        })
      }
      else Cgt(l,_n.mailto,_n.http,_n.https)?i.label.setResource({
        resource:l,name:l.toString()
      },{
        icon:o??Be.globe,title:e.options?.status?.description??e.title??l.toString(),strikethrough:e.excluded,extraClasses:u
      }):i.label.setFile(l,{
        fileKind:xg.FILE,fileDecorations:void 0,range:"range"in s?s.range:void 0,title:e.options?.status?.description??e.title,strikethrough:e.excluded,extraClasses:u
      })
    }
    for(const l of[".monaco-icon-suffix-container", ".monaco-icon-name-container"]){
      const u=i.label.element.querySelector(l);
      u&&(e.options?.status?.kind===lpn.Omitted||e.options?.status?.kind===lpn.Partial?u.classList.add("warning"):u.classList.remove("warning"))
    }
    e.state!==void 0&&(i.actionBarContainer&&(e.state===0&&!i.actionBarContainer.classList.contains("modified")?(i.actionBarContainer.classList.add("modified"), i.label.element.querySelector(".monaco-icon-name-container")?.classList.add("modified")):e.state!==0&&(i.actionBarContainer.classList.remove("modified"), i.label.element.querySelector(".monaco-icon-name-container")?.classList.remove("modified"))), i.toolbar&&(i.toolbar.context=a), i.contextKeyService&&e.state!==void 0&&gyi.bindTo(i.contextKeyService).set(e.state))
  }
  disposeTemplate(e){
    e.templateDisposables.dispose()
  }
}, SCi=ZAu=__decorate([__param(2, bo), __param(3, za), __param(4, ln), __param(5, wi)], SCi), Dt(class szb extends rn{
  static{
    this.id="workbench.action.chat.addToChatAction"
  }
  constructor(){
    super({
      id:szb.id,title:{
        ...dt(5231,"Add File to Chat")
      },f1:!1,menu:[{
        id:st.ChatAttachmentsContext,group:"chat",order:1,when:Ee.and(Ep.IsFileSystemResource,dB.negate())
      }
      ]
    })
  }
  async run(e, t){
    const i=e.get(M1), r=e.get(h1t);
    if(!t)return;
    const s=i.lastFocusedWidget;
    s&&r.attachContext("file", t, s.location)
  }
}), Dt(class ozb extends rn{
  static{
    this.id="workbench.action.chat.copyLink"
  }
  constructor(){
    super({
      id:ozb.id,title:{
        ...dt(5232,"Copy Link")
      },f1:!1,menu:[{
        id:st.ChatAttachmentsContext,group:"chat",order:0,when:Ee.or(Ep.Scheme.isEqualTo(_n.http),Ep.Scheme.isEqualTo(_n.https))
      }
      ]
    })
  }
  async run(e, t){
    await e.get(jm).writeResources([t])
  }
})
}
}), AEa, WJ, l7e=