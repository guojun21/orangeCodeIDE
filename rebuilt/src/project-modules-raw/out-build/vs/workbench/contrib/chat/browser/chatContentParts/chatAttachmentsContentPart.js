// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatAttachmentsContentPart.js
// Offset: 32453874 (bundle byte offset)
// Size: 6345 bytes

ri(), h0(), mb(), yn(), rt(), Hl(), Yn(), ts(), Qh(), Ku(), Cm(), hd(), td(), Ht(), dg(), dr(), hs(), si(), pl(), sN(), ns(), Id(), Wt(), Pd(), Fc(), Io(), A8(), zF(), Mm(), X1a(), Nme(), xS(), zgn(), ACi=new Sn("chatAttachmentResource", void 0, {
  type:"URI", description:_(5196, null)
}), tEa=class extends at{
  constructor(e, t=[], i=Ct(".chat-attached-context"), r, s, o, a, l, u, d){
    super(), this.variables=e, this.contentReferences=t, this.domNode=i, this.contextKeyService=r, this.instantiationService=s, this.openerService=o, this.hoverService=a, this.commandService=l, this.themeService=u, this.labelService=d, this.attachedContextDisposables=this._register(new Ut), this._onDidChangeVisibility=this._register(new Qe), this._contextResourceLabels=this._register(this.instantiationService.createInstance(c5, {
      onDidChangeVisibility:this._onDidChangeVisibility.event
    })), this.initAttachedContext(i), i.childElementCount||(this.domNode=void 0)
  }
  initAttachedContext(e){
    th(e), this.attachedContextDisposables.clear();
    const t=this.attachedContextDisposables.add(F6());
    this.variables.forEach(async i=>{
      let r=je.isUri(i.value)?i.value:i.value&&typeof i.value=="object"&&"uri"in i.value&&je.isUri(i.value.uri)?i.value.uri:void 0,s=i.value&&typeof i.value=="object"&&"range"in i.value&&Zt.isIRange(i.value.range)?i.value.range:void 0;
      const o=Rt(e,Ct(".chat-attached-context-attachment.show-file-icons")),a=this._contextResourceLabels.create(o,{
        supportIcons:!0,hoverDelegate:t,hoverTargetOverride:o
      });
      this.attachedContextDisposables.add(a);
      const l=this.contentReferences.find(g=>typeof g.reference=="object"&&"variableName"in g.reference&&g.reference.variableName===i.name||je.isUri(g.reference)&&fd(g.reference.path)===i.name),u=l?.options?.status?.kind===lpn.Omitted,d=u||l?.options?.status?.kind===lpn.Partial;
      let m;
      if(r&&(i.isFile||i.isDirectory)){
        const g=fd(r.path),f=zN(r.path),A=`${g} ${f}`;
        if(u?m=s?_(5197,null,A,s.startLineNumber,s.endLineNumber):_(5198,null,A):d?m=s?_(5199,null,A,s.startLineNumber,s.endLineNumber):_(5200,null,A):m=s?_(5201,null,A,s.startLineNumber,s.endLineNumber):_(5202,null,A),i.isOmitted)this.customAttachment(o,A,t,m,u);
        else{
          const w={
            hidePath:!0,title:l?.options?.status?.description
          };
          a.setFile(r,i.isFile?{
            ...w,fileKind:xg.FILE,range:s
          }
          :{
            ...w,fileKind:xg.FOLDER,icon:this.themeService.getFileIconTheme().hasFolderIcons?void 0:mVe
          })
        }
        this.instantiationService.invokeFunction(w=>{
          r&&this.attachedContextDisposables.add(eEa(w,o,r))
        })
      }
      else if(i.isImage){
        m=_(5203,null,i.name);
        const g=otf(i)&&i.isURL,f=this.customAttachment(o,i.name,t,m,u,i.isImage,g,i.value);
        if(i.references){
          o.style.cursor="pointer";
          const A=()=>{
            i.references&&je.isUri(i.references[0].reference)&&this.openResource(i.references[0].reference,!1,void 0)
          };
          this.attachedContextDisposables.add(ei(o,"click",A))
        }
        if(!d){
          const A=i.value;
          this.createImageElements(A,o,f),this.attachedContextDisposables.add(this.hoverService.setupManagedHover(t,o,f,{
            trapFocus:!1
          }))
        }
        o.style.position="relative"
      }
      else if(stf(i)){
        m=_(5204,null,i.name);
        const g=["file-icon",`${i.language}-lang-file-icon`];
        if(i.copiedFrom){
          r=i.copiedFrom.uri,s=i.copiedFrom.range;
          const A=fd(r.path);
          a.setLabel(A,void 0,{
            extraClasses:g
          })
        }
        else a.setLabel(i.fileName,void 0,{
          extraClasses:g
        });
        o.appendChild(Ct("span.attachment-additional-info",{
          
        },`Pasted ${i.pastedLines}`)),o.style.position="relative";
        const f={
          markdown:{
            value:`**${i.copiedFrom?this.labelService.getUriLabel(i.copiedFrom.uri,{relative:!0}):i.fileName}**

---

\`\`\`${i.language}
${i.code}
\`\`\``
          },markdownNotSupportedFallback:i.code
        };
        if(!this.attachedContextDisposables.isDisposed){
          this.attachedContextDisposables.add(this.hoverService.setupManagedHover(t,o,f,{
            trapFocus:!0
          }));
          const A=i.copiedFrom?.uri;
          A&&this.attachedContextDisposables.add(this.instantiationService.invokeFunction(w=>eEa(w,o,A)))
        }
      }
      else{
        const g=i.fullName??i.name,f=i.icon?.id?`$(${i.icon.id}) ${g}`:g;
        a.setLabel(f,l?.options?.status?.description),m=_(5205,null,i.name)
      }
      if(i.kind==="symbol"){
        const g=this.attachedContextDisposables.add(this.contextKeyService.createScoped(o));
        this.attachedContextDisposables.add(this.instantiationService.invokeFunction(f=>qAu(f,o,g,{
          ...i,kind:i.symbolKind
        },st.ChatInputSymbolAttachmentContext)))
      }
      d&&o.classList.add("warning");
      const p=l?.options?.status?.description;
      if(d){
        m=`${m}${p?` ${
          p
        }
        `:""}`;
        for(const g of[".monaco-icon-suffix-container",".monaco-icon-name-container"]){
          const f=a.element.querySelector(g);
          f&&f.classList.add("warning")
        }
      }
      this.attachedContextDisposables.isDisposed||(r&&(o.style.cursor="pointer",this.attachedContextDisposables.isDisposed||this.attachedContextDisposables.add(ei(o,ir.CLICK,async g=>{
        zu.stop(g,!0),i.isDirectory?this.openResource(r,!0):this.openResource(r,!1,s)
      }))),o.ariaLabel=m,o.tabIndex=0)
    })
  }
  customAttachment(e, t, i, r, s, o, a, l){
    const u=Ct("div.chat-attached-context-pill", {
      
    }, Ct(s?"span.codicon.codicon-warning":"span.codicon.codicon-file-media")), d=Ct("span.chat-attached-context-custom-text", {
      
    }, t);
    e.appendChild(u), e.appendChild(d);
    const m=Ct("div.chat-attached-context-hover");
    return m.setAttribute("aria-label", r), a&&!s&&l&&(m.textContent=_(5206, null, Esy(l)), this.attachedContextDisposables.add(this.hoverService.setupManagedHover(i, e, m, {
      trapFocus:!0
    }))), s&&(e.classList.add("warning"), m.textContent=_(5207, null, o?"image":"file"), this.attachedContextDisposables.add(this.hoverService.setupManagedHover(i, e, m, {
      trapFocus:!0
    }))), m
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
  async createImageElements(e, t, i){
    const r=new Blob([e], {
      type:"image/png"
    }), s=URL.createObjectURL(r), o=Ct("img.chat-attached-context-image", {
      src:s,alt:""
    }), a=Ct("img.chat-attached-context-pill-image", {
      src:s,alt:""
    }), l=Ct("div.chat-attached-context-pill", {
      
    }, a), u=t.querySelector(".chat-attached-context-pill");
    u&&u.replaceWith(l), i.appendChild(o), o.onload=()=>{
      URL.revokeObjectURL(s)
    }, o.onerror=()=>{
      const d=Ct("div.chat-attached-context-pill",{
        
      },Ct("span.codicon.codicon-file-media")),m=Ct("div.chat-attached-context-pill",{
        
      },d),p=t.querySelector(".chat-attached-context-pill");
      p&&p.replaceWith(m)
    }
  }
}, tEa=__decorate([__param(3, wi), __param(4, ln), __param(5, Ja), __param(6, Kc), __param(7, fr), __param(8, bo), __param(9, Ol)], tEa)
}
}), K1t, nEa, iEa, rEa, sEa, nly=