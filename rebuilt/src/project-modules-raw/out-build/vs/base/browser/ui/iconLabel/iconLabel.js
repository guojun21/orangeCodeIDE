// Module: out-build/vs/base/browser/ui/iconLabel/iconLabel.js
// Offset: 24973239 (bundle byte offset)
// Size: 6462 bytes

kW(), rt(), np(), M3o(), Js(), yF(), ri(), $Ae(), O6(), mb(), $0A(), Fun=class{
  constructor(n){
    this._element=n
  }
  get element(){
    return this._element
  }
  set textContent(n){
    this.disposed||n===this._textContent||(this._textContent=n, this._element.textContent=n)
  }
  set classNames(n){
    this.disposed||fv(n, this._classNames)||(this._classNames=n, this._element.classList.value="", this._element.classList.add(...n))
  }
  set empty(n){
    this.disposed||n===this._empty||(this._empty=n, this._element.style.marginLeft=n?"0":"")
  }
  dispose(){
    this.disposed=!0
  }
}, fJ=class extends at{
  constructor(n, e){
    super(), this.customHovers=new Map, this.creationOptions=e, this.domNode=this._register(new Fun(Rt(n, Ct(".monaco-icon-label")))), this.labelContainer=Rt(this.domNode.element, Ct(".monaco-icon-label-container")), this.nameContainer=Rt(this.labelContainer, Ct("span.monaco-icon-name-container")), e?.supportHighlights||e?.supportIcons?this.nameNode=this._register(new Mgg(this.nameContainer, !!e.supportIcons)):this.nameNode=new Ngg(this.nameContainer), this.hoverDelegate=e?.hoverDelegate??Sm("mouse")
  }
  get element(){
    return this.domNode.element
  }
  setLabel(n, e, t){
    const i=["monaco-icon-label"], r=["monaco-icon-label-container"];
    let s="";
    if(t&&(t.extraClasses&&i.push(...t.extraClasses), t.italic&&i.push("italic"), t.strikethrough&&i.push("strikethrough"), t.disabledCommand&&r.push("disabled"), t.title&&(typeof t.title=="string"?s+=t.title:s+=n)), this.updateIcon(t?.iconElement, t?.iconPath), this.domNode.classNames=i, this.domNode.element.setAttribute("aria-label", s), this.labelContainer.classList.value="", this.labelContainer.classList.add(...r), this.setupHover(t?.descriptionTitle?this.labelContainer:this.element, t?.title), this.nameNode.setLabel(n, t), e||this.descriptionNode){
      const o=this.getOrCreateDescriptionNode();
      o instanceof qx?(o.set(e||"",t?t.descriptionMatches:void 0,void 0,t?.labelEscapeNewLines),this.setupHover(o.element,t?.descriptionTitle)):(o.textContent=e&&t?.labelEscapeNewLines?qx.escapeNewLines(e,[]):e||"",this.setupHover(o.element,t?.descriptionTitle||""),o.empty=!e)
    }
    if(t?.suffix||this.suffixNode){
      const o=this.getOrCreateSuffixNode();
      o.textContent=t?.suffix??""
    }
  }
  setupHover(n, e){
    const t=this.customHovers.get(n);
    if(t&&(t.dispose(), this.customHovers.delete(n)), !e){
      n.removeAttribute("title");
      return
    }
    let i=n;
    if(this.creationOptions?.hoverTargetOverride){
      if(!HS(n,this.creationOptions.hoverTargetOverride))throw new Error("hoverTargetOverrride must be an ancestor of the htmlElement");
      i=this.creationOptions.hoverTargetOverride
    }
    if(this.hoverDelegate.showNativeHover){
      let s=function(o,a){
        Qo(a)?o.title=zoe(a):a?.markdownNotSupportedFallback?o.title=a.markdownNotSupportedFallback:o.removeAttribute("title")
      };
      var r=s;
      s(i,e)
    }
    else{
      const s=q4().setupManagedHover(this.hoverDelegate,i,e);
      s&&this.customHovers.set(n,s)
    }
  }
  updateIcon(n, e){
    n?(this.clearIconPathNode(), this.setIconElementNode(n)):e?(this.clearIconElementNode(), this.setIconPathNode(e)):(this.clearIconPathNode(), this.clearIconElementNode())
  }
  setIconElementNode(n){
    this.iconElementNode!==n&&(this.clearIconElementNode(), n.classList.add("monaco-icon-label-iconelement"), this.domNode.element.prepend(n), this.iconElementNode=n)
  }
  clearIconElementNode(){
    this.iconElementNode&&(this.iconElementNode.remove(), this.iconElementNode=void 0)
  }
  setIconPathNode(n){
    this.iconPathNode||(this.iconPathNode=Ct(".monaco-icon-label-iconpath"), this.domNode.element.prepend(this.iconPathNode)), this.iconPathNode.style.backgroundImage=Bx(n), this.iconPathNode.style.backgroundRepeat="no-repeat", this.iconPathNode.style.backgroundPosition="center", this.iconPathNode.style.backgroundSize="contain"
  }
  clearIconPathNode(){
    this.iconPathNode&&(this.iconPathNode.remove(), this.iconPathNode=void 0)
  }
  dispose(){
    super.dispose();
    for(const n of this.customHovers.values())n.dispose();
    this.customHovers.clear()
  }
  getOrCreateSuffixNode(){
    if(!this.suffixNode){
      const n=this._register(new Fun(Hoh(this.nameContainer,Ct("span.monaco-icon-suffix-container"))));
      this.suffixNode=this._register(new Fun(Rt(n.element,Ct("span.label-suffix"))))
    }
    return this.suffixNode
  }
  getOrCreateDescriptionNode(){
    if(!this.descriptionNode){
      const n=this._register(new Fun(Rt(this.labelContainer,Ct("span.monaco-icon-description-container"))));
      this.creationOptions?.supportDescriptionHighlights?this.descriptionNode=this._register(new qx(Rt(n.element,Ct("span.label-description")),{
        supportIcons:!!this.creationOptions.supportIcons
      })):this.descriptionNode=this._register(new Fun(Rt(n.element,Ct("span.label-description"))))
    }
    return this.descriptionNode
  }
}, Ngg=class{
  constructor(n){
    this.container=n, this.label=void 0, this.singleLabel=void 0
  }
  setLabel(n, e){
    if(!(this.label===n&&fv({
      ...this.options,iconElement:void 0
    }, {
      ...e,iconElement:void 0
    })))if(this.label=n, this.options=e, typeof n=="string")this.singleLabel||(this.container.innerText="", this.container.classList.remove("multiple"), this.singleLabel=Rt(this.container, Ct("a.label-name", {
      id:e?.domId
    }))), this.singleLabel.textContent=n;
    else{
      this.container.innerText="",this.container.classList.add("multiple"),this.singleLabel=void 0;
      for(let t=0;
      t<n.length;
      t++){
        const i=n[t],r=e?.domId&&`${e?.domId}_${t}`;
        Rt(this.container,Ct("a.label-name",{
          id:r,"data-icon-label-count":n.length,"data-icon-label-index":t,role:"treeitem"
        },i)),t<n.length-1&&Rt(this.container,Ct("span.label-separator",void 0,e?.separator||"/"))
      }
    }
  }
}, Mgg=class extends at{
  constructor(n, e){
    super(), this.container=n, this.supportIcons=e, this.label=void 0, this.singleLabel=void 0
  }
  setLabel(n, e){
    if(!(this.label===n&&fv({
      ...this.options,iconElement:void 0
    }, {
      ...e,iconElement:void 0
    })))if(this.label=n, this.options=e, typeof n=="string")this.singleLabel||(this.container.innerText="", this.container.classList.remove("multiple"), this.singleLabel=this._register(new qx(Rt(this.container, Ct("a.label-name", {
      id:e?.domId
    })), {
      supportIcons:this.supportIcons
    }))), this.singleLabel.set(n, e?.matches, void 0, e?.labelEscapeNewLines);
    else{
      this.container.innerText="",this.container.classList.add("multiple"),this.singleLabel=void 0;
      const t=e?.separator||"/",i=q0A(n,t,e?.matches);
      for(let r=0;
      r<n.length;
      r++){
        const s=n[r],o=i?i[r]:void 0,a=e?.domId&&`${e?.domId}_${r}`,l=Ct("a.label-name",{
          id:a,"data-icon-label-count":n.length,"data-icon-label-index":r,role:"treeitem"
        });
        this._register(new qx(Rt(this.container,l),{
          supportIcons:this.supportIcons
        })).set(s,o,void 0,e?.labelEscapeNewLines),r<n.length-1&&Rt(l,Ct("span.label-separator",void 0,t))
      }
    }
  }
}
}
}), Ol, Fgg, Pd=