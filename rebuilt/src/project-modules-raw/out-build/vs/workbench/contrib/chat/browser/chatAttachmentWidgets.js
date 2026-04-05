// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentWidgets.js
// Offset: 32460219 (bundle byte offset)
// Size: 7347 bytes

ri(), yn(), ri(), Tb(), fk(), qi(), rt(), Yn(), Ht(), hs(), ns(), Id(), Wt(), Pd(), Fc(), Io(), X1a(), $Ca(), HAu(), Hl(), si(), dr(), Pa(), K1t=class extends at{
  get onDidDelete(){
    return this._onDidDelete.event
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.attachment=e, this.shouldFocusClearButton=t, this.hoverDelegate=s, this.currentLanguageModel=o, this.commandService=a, this.openerService=l, this._onDidDelete=this._register(new Qe), this.element=Rt(i, Ct(".chat-attached-context-attachment.show-file-icons")), this.label=r.create(this.element, {
      supportIcons:!0,hoverDelegate:s,hoverTargetOverride:this.element
    }), this._register(this.label), this.element.tabIndex=0
  }
  modelSupportsVision(){
    return this.currentLanguageModel?.metadata.capabilities?.vision??!1
  }
  attachClearButton(){
    const e=new pw(this.element, {
      supportIcons:!0,hoverDelegate:this.hoverDelegate,title:_(5185,null)
    });
    e.icon=Be.close, this._register(e), this._register(In.once(e.onDidClick)(t=>{
      this._onDidDelete.fire(t)
    })), this.shouldFocusClearButton&&e.focus()
  }
  addResourceOpenHandlers(e, t){
    this.element.style.cursor="pointer", this._register(ei(this.element, ir.CLICK, i=>{
      zu.stop(i,!0),this.attachment.isDirectory?this.openResource(e,!0):this.openResource(e,!1,t)
    })), this._register(ei(this.element, ir.KEY_DOWN, i=>{
      const r=new vh(i);
      (r.equals(3)||r.equals(10))&&(zu.stop(i,!0),this.attachment.isDirectory?this.openResource(e,!0):this.openResource(e,!1,t))
    }))
  }
  openResource(e, t, i){
    if(t){
      this.commandService.executeCommand(V1t.id,e);
      return
    }
    const s={
      fromUserGesture:!0,editorOptions:i?{
        selection:i
      }
      :void 0
    };
    this.openerService.open(e, s)
  }
}, K1t=__decorate([__param(6, fr), __param(7, Ja)], K1t), nEa=class extends K1t{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(i, s, o, a, l, r, u, d), this.themeService=m, this.hoverService=p, this.languageModelsService=g, this.instantiationService=f;
    const A=fd(e.path), w=zN(e.path), C=`${A} ${w}`, x=t?_(5186, null, C, t.startLineNumber, t.endLineNumber):_(5187, null, C);
    if(this.element.ariaLabel=x, i.isOmitted)this.renderOmittedWarning(C, x, l);
    else{
      const I={
        hidePath:!0
      };
      this.label.setFile(e,i.isFile?{
        ...I,fileKind:xg.FILE,range:t
      }
      :{
        ...I,fileKind:xg.FOLDER,icon:this.themeService.getFileIconTheme().hasFolderIcons?void 0:mVe
      })
    }
    this.instantiationService.invokeFunction(I=>{
      this._register(eEa(I,this.element,e))
    }), this.addResourceOpenHandlers(e, t), this.attachClearButton()
  }
  renderOmittedWarning(e, t, i){
    const r=Ct("div.chat-attached-context-pill", {
      
    }, Ct("span.codicon.codicon-warning")), s=Ct("span.chat-attached-context-custom-text", {
      
    }, e);
    this.element.appendChild(r), this.element.appendChild(s);
    const o=Ct("div.chat-attached-context-hover");
    o.setAttribute("aria-label", t), this.element.classList.add("warning"), o.textContent=_(5188, null, this.currentLanguageModel?this.languageModelsService.lookupLanguageModel(this.currentLanguageModel.identifier)?.name:this.currentLanguageModel, "file"), this._register(this.hoverService.setupManagedHover(i, this.element, o, {
      trapFocus:!0
    }))
  }
}, nEa=__decorate([__param(8, fr), __param(9, Ja), __param(10, bo), __param(11, Kc), __param(12, Pgn), __param(13, ln)], nEa), iEa=class extends K1t{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(t, r, s, o, a, i, l, u), this.hoverService=d, this.languageModelsService=m, this.telemetryService=p;
    const g=_(5189, null, t.name);
    if(this.element.ariaLabel=g, this.element.style.position="relative", t.references){
      this.element.style.cursor="pointer";
      const I=()=>{
        t.references&&je.isUri(t.references[0].reference)&&this.openResource(t.references[0].reference,!1,void 0)
      };
      this._register(ei(this.element,"click",I))
    }
    const f=Ct("div.chat-attached-context-pill", {
      
    }, Ct(this.modelSupportsVision()?"span.codicon.codicon-file-media":"span.codicon.codicon-warning")), A=Ct("span.chat-attached-context-custom-text", {
      
    }, t.name);
    this.element.appendChild(f), this.element.appendChild(A);
    const w=Ct("div.chat-attached-context-hover");
    w.setAttribute("aria-label", g);
    const C=this.currentLanguageModel?this.languageModelsService.lookupLanguageModel(this.currentLanguageModel.identifier)?.name??this.currentLanguageModel.identifier:"unknown", x=this.modelSupportsVision();
    if(this.telemetryService.publicLog2("copilot.attachImage", {
      currentModel:C,supportsVision:x
    }), !x&&this.currentLanguageModel)this.element.classList.add("warning"), w.textContent=_(5190, null, C, "image"), this._register(this.hoverService.setupManagedHover(a, this.element, w, {
      trapFocus:!0
    }));
    else{
      const I=t.value;
      this.createImageElements(I,this.element,w),this._register(this.hoverService.setupManagedHover(a,this.element,w,{
        trapFocus:!1
      }))
    }
    e&&this.addResourceOpenHandlers(e, void 0), this.attachClearButton()
  }
  createImageElements(e, t, i){
    const r=new Blob([e], {
      type:"image/png"
    }), s=URL.createObjectURL(r), o=Ct("img.chat-attached-context-pill-image", {
      src:s,alt:""
    }), a=Ct("div.chat-attached-context-pill", {
      
    }, o), l=t.querySelector(".chat-attached-context-pill");
    l&&l.replaceWith(a);
    const u=Ct("img.chat-attached-context-image", {
      src:s,alt:""
    });
    i.appendChild(u), u.onload=()=>{
      URL.revokeObjectURL(s)
    }, u.onerror=()=>{
      const d=Ct("div.chat-attached-context-pill",{
        
      },Ct("span.codicon.codicon-file-media")),m=Ct("div.chat-attached-context-pill",{
        
      },d),p=t.querySelector(".chat-attached-context-pill");
      p&&p.replaceWith(m)
    }
  }
}, iEa=__decorate([__param(7, fr), __param(8, Ja), __param(9, Kc), __param(10, Pgn), __param(11, ea)], iEa), rEa=class extends K1t{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(e, i, r, s, o, t, a, l), this.hoverService=u, this.instantiationService=d;
    const m=_(5191, null, e.name);
    this.element.ariaLabel=m;
    const p=["file-icon", `${e.language}-lang-file-icon`];
    let g, f;
    if(e.copiedFrom){
      g=e.copiedFrom.uri,f=e.copiedFrom.range;
      const x=fd(g.path);
      this.label.setLabel(x,void 0,{
        extraClasses:p
      })
    }
    else this.label.setLabel(e.fileName, void 0, {
      extraClasses:p
    });
    this.element.appendChild(Ct("span.attachment-additional-info", {
      
    }, `Pasted ${e.pastedLines}`)), this.element.style.position="relative";
    const A=e.copiedFrom?.uri, w={
      markdown:{
        value:`${A?this.instantiationService.invokeFunction(x=>x.get(Ol).getUriLabel(A,{relative:!0})):e.fileName}

---

\`\`\`${e.language}

${e.code}
\`\`\``
      },markdownNotSupportedFallback:e.code
    };
    this._register(this.hoverService.setupManagedHover(o, this.element, w, {
      trapFocus:!0
    }));
    const C=e.copiedFrom?.uri;
    C&&(this._register(this.instantiationService.invokeFunction(x=>eEa(x, this.element, C))), this.addResourceOpenHandlers(C, f)), this.attachClearButton()
  }
}, rEa=__decorate([__param(6, fr), __param(7, Ja), __param(8, Kc), __param(9, ln)], rEa), sEa=class extends K1t{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(i, s, o, a, l, r, u, d), this.contextKeyService=m, this.instantiationService=p;
    const g=i.fullName??i.name, f=i.icon?.id?`$(${i.icon.id}) ${g}`:g;
    if(this.label.setLabel(f, void 0), this.element.ariaLabel=_(5192, null, i.name), i.kind==="diagnostic"&&(i.filterUri?(e=i.filterUri?je.revive(i.filterUri):void 0, t=i.filterRange):(this.element.style.cursor="pointer", this._register(ei(this.element, ir.CLICK, ()=>{
      this.commandService.executeCommand("workbench.panel.markers.view.focus")
    })))), i.kind==="symbol"){
      const A=this._register(this.contextKeyService.createScoped(this.element));
      this._register(this.instantiationService.invokeFunction(w=>qAu(w,this.element,A,{
        ...i,kind:i.symbolKind
      },st.ChatInputSymbolAttachmentContext)))
    }
    e&&this.addResourceOpenHandlers(e, t), this.attachClearButton()
  }
}, sEa=__decorate([__param(8, fr), __param(9, Ja), __param(10, wi), __param(11, ln)], sEa)
}
}), FOf, JAu, ily=