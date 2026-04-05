// Module: out-build/vs/workbench/contrib/chat/browser/chatInlineAnchorWidget.js
// Offset: 32733984 (bundle byte offset)
// Size: 5954 bytes

ri(), h0(), mb(), rt(), Yn(), Oh(), Qh(), Tg(), Ku(), oR(), hd(), agi(), Ht(), dg(), dr(), Kf(), hs(), si(), pl(), ns(), Id(), Wt(), Pd(), Pa(), Io(), A8(), Mm(), ss(), gD(), x_i(), kk(), HAu(), mxa(), gSi=class extends at{
  static{
    Byu=this
  }
  static{
    this.className="chat-inline-anchor-widget"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    super(), this.element=e, this.inlineReference=t, this._isDisposed=!1, this.data="uri"in t.inlineReference?t.inlineReference:"name"in t.inlineReference?{
      kind:"symbol",symbol:t.inlineReference
    }
    :{
      uri:t.inlineReference
    };
    const f=this._register(i.createScoped(e));
    this._chatResourceContext=ACi.bindTo(f), e.classList.add(Byu.className, "show-file-icons");
    let A, w, C, x;
    if(this.data.kind==="symbol"){
      const M=this.data.symbol;
      C=this.data.symbol.location,A=this.data.symbol.name,w=["codicon",...yS(m,u,void 0,void 0,$oe.toIcon(M.kind))],this._store.add(a.invokeFunction(O=>qAu(O,e,f,{
        value:M.location,name:M.name,kind:M.kind
      },st.ChatInlineSymbolAnchorContext)))
    }
    else{
      C=this.data;
      const M=l.getUriBasenameLabel(C.uri);
      A=C.range&&this.data.kind!=="symbol"?`${M}#${C.range.startLineNumber}-${C.range.endLineNumber}`:M;
      let O=C.uri.path.endsWith("/")?xg.FOLDER:xg.FILE;
      const $=()=>yS(m,u,C.uri,O,O===xg.FOLDER&&!g.getFileIconTheme().hasFolderIcons?mVe:void 0);
      w=$();
      const H=()=>{
        B.classList.remove(...w),w=$(),B.classList.add(...w)
      };
      this._register(g.onDidFileIconThemeChange(()=>{
        H()
      }));
      const W=dB.bindTo(f);
      s.stat(C.uri).then(z=>{
        W.set(z.isDirectory),z.isDirectory&&(O=xg.FOLDER,H())
      }).catch(()=>{
        
      }),this._register(ei(e,ir.CONTEXT_MENU,async z=>{
        const Y=new yy(As(z),z);
        zu.stop(z,!0);
        try{
          await x?.()
        }
        catch(j){
          console.error(j)
        }
        this._isDisposed||r.showContextMenu({
          contextKeyService:f,getAnchor:()=>Y,getActions:()=>{
            const j=d.getMenuActions(st.ChatInlineResourceAnchorContext,f,{
              arg:C.uri
            });
            return YH(j)
          }
        })
      }))
    }
    this._register(new Ep(f, s, u, m)).set(C.uri), this._chatResourceContext.set(C.uri.toString());
    const B=Ct("span.icon");
    B.classList.add(...w), e.replaceChildren(B, Ct("span.icon-label", {
      
    }, A));
    const R=C.range?`${C.range.startLineNumber},${C.range.startColumn}`:"";
    e.setAttribute("data-href", (R?C.uri.with({
      fragment:R
    }):C.uri).toString());
    const N=l.getUriLabel(C.uri, {
      relative:!0
    });
    this._register(o.setupManagedHover(Sm("element"), e, N)), this.data.kind!=="symbol"&&(e.draggable=!0, this._register(ei(e, "dragstart", M=>{
      const O={
        resource:C.uri,selection:C.range
      };
      a.invokeFunction($=>Yme($,[O],M)),M.dataTransfer?.setDragImage(e,0,0)
    })))
  }
  dispose(){
    this._isDisposed=!0, super.dispose()
  }
  getHTMLElement(){
    return this.element
  }
}, gSi=Byu=__decorate([__param(2, wi), __param(3, kc), __param(4, Gr), __param(5, Kc), __param(6, ln), __param(7, Ol), __param(8, Jl), __param(9, xd), __param(10, Il), __param(11, ea), __param(12, bo)], gSi), Dt(class azb extends rn{
  static{
    this.id="chat.inlineResourceAnchor.addFileToChat"
  }
  constructor(){
    super({
      id:azb.id,title:dt(5345,"Add File to Chat"),menu:[{
        id:st.ChatInlineResourceAnchorContext,group:"chat",order:1,when:dB.negate()
      }
      ]
    })
  }
  async run(e, t){
    const i=e.get(M1), r=e.get(h1t), s=i.lastFocusedWidget;
    s&&r.attachContext("file", t, s.location)
  }
}), Dt(class czb extends rn{
  static{
    this.id="chat.inlineResourceAnchor.copyResource"
  }
  constructor(){
    super({
      id:czb.id,title:dt(5346,"Copy"),f1:!1,precondition:ACi,keybinding:{
        weight:200,primary:2081
      }
    })
  }
  async run(e){
    const t=e.get(fEt), i=e.get(jm), r=t.lastFocusedAnchor;
    if(!r)return;
    const s=r.data.kind==="symbol"?r.data.symbol.location.uri:r.data.uri;
    i.writeResources([s])
  }
}), Dt(class lzb extends rn{
  static{
    this.id="chat.inlineResourceAnchor.openToSide"
  }
  constructor(){
    super({
      id:lzb.id,title:dt(5347,"Open to the Side"),f1:!1,precondition:ACi,keybinding:{
        weight:402,primary:2051,mac:{
          primary:259
        }
      },menu:[st.ChatInlineSymbolAnchorContext,st.ChatInputSymbolAttachmentContext].map(e=>({
        id:e,group:"navigation",order:1
      }))
    })
  }
  async run(e, t){
    const i=e.get(yi), r=this.getTarget(e, t);
    if(!r)return;
    const s=je.isUri(r)?{
      resource:r
    }
    :{
      resource:r.uri,options:{
        selection:{
          startColumn:r.range.startColumn,startLineNumber:r.range.startLineNumber
        }
      }
    };
    await i.openEditors([s], Aw)
  }
  getTarget(e, t){
    const i=e.get(fEt);
    if(t)return t;
    const r=i.lastFocusedAnchor;
    if(r)return r.data.kind==="symbol"?r.data.symbol.location:r.data.uri
  }
}), Dt(class uzb extends rn{
  static{
    this.id="chat.inlineSymbolAnchor.goToDefinition"
  }
  constructor(){
    super({
      id:uzb.id,title:{
        ...dt(5348,"Go to Definition"),mnemonicTitle:_(5341,null)
      },menu:[st.ChatInlineSymbolAnchorContext,st.ChatInputSymbolAttachmentContext].map(e=>({
        id:e,group:"4_symbol_nav",order:1.1,when:Ci.hasDefinitionProvider
      }))
    })
  }
  async run(e, t){
    const i=e.get(fl);
    return await s5f(i, t), new bCt({
      openToSide:!1,openInPeek:!1,muteMessage:!0
    }, {
      title:{
        value:"",original:""
      },id:"",precondition:void 0
    }).run(e)
  }
}), Dt(class dzb extends rn{
  static{
    this.id="chat.inlineSymbolAnchor.goToTypeDefinitions"
  }
  constructor(){
    super({
      id:dzb.id,title:{
        ...dt(5349,"Go to Type Definitions"),mnemonicTitle:_(5342,null)
      },menu:[st.ChatInlineSymbolAnchorContext,st.ChatInputSymbolAttachmentContext].map(e=>({
        id:e,group:"4_symbol_nav",order:1.1,when:Ci.hasTypeDefinitionProvider
      }))
    })
  }
  async run(e, t){
    return Dyu(e, "editor.action.goToTypeDefinition", t)
  }
}), Dt(class hzb extends rn{
  static{
    this.id="chat.inlineSymbolAnchor.goToImplementations"
  }
  constructor(){
    super({
      id:hzb.id,title:{
        ...dt(5350,"Go to Implementations"),mnemonicTitle:_(5343,null)
      },menu:[st.ChatInlineSymbolAnchorContext,st.ChatInputSymbolAttachmentContext].map(e=>({
        id:e,group:"4_symbol_nav",order:1.2,when:Ci.hasImplementationProvider
      }))
    })
  }
  async run(e, t){
    return Dyu(e, "editor.action.goToImplementation", t)
  }
}), Dt(class mzb extends rn{
  static{
    this.id="chat.inlineSymbolAnchor.goToReferences"
  }
  constructor(){
    super({
      id:mzb.id,title:{
        ...dt(5351,"Go to References"),mnemonicTitle:_(5344,null)
      },menu:[st.ChatInlineSymbolAnchorContext,st.ChatInputSymbolAttachmentContext].map(e=>({
        id:e,group:"4_symbol_nav",order:1.3,when:Ci.hasReferenceProvider
      }))
    })
  }
  async run(e, t){
    return Dyu(e, "editor.action.goToReferences", t)
  }
})
}
}), Oly=