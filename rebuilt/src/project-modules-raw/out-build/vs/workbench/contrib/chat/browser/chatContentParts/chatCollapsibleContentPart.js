// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatCollapsibleContentPart.js
// Offset: 32522853 (bundle byte offset)
// Size: 2850 bytes

fk(), qi(), yn(), rt(), Ht(), kCi(), si(), Uc(), YAu=class extends at{
  constructor(n, e){
    super(), this.title=n, this.context=e, this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event, this._isExpanded=Ua(this, !1), this.hasFollowingContent=this.context.contentIndex+1<this.context.content.length
  }
  get domNode(){
    return this._domNode??=this.init(), this._domNode
  }
  init(){
    const n=this.title, e=Hfn(".chat-used-context-label", void 0), t=this._register(new QSh(e, {
      buttonBackground:void 0,buttonBorder:void 0,buttonForeground:void 0,buttonHoverBackground:void 0,buttonSecondaryBackground:void 0,buttonSecondaryForeground:void 0,buttonSecondaryHoverBackground:void 0,buttonSeparator:void 0
    }));
    this._domNode=Hfn(".chat-used-context", void 0, e), t.label=n, this._register(t.onDidClick(()=>{
      const r=this._isExpanded.get();
      this._isExpanded.set(!r,void 0)
    })), this._register(Oc(r=>{
      const s=this._isExpanded.read(r);
      t.icon=s?Be.chevronDown:Be.chevronRight,this._domNode?.classList.toggle("chat-used-context-collapsed",!s),this.updateAriaLabel(t.element,typeof n=="string"?n:n.value,this.isExpanded()),this._domNode?.isConnected&&queueMicrotask(()=>{
        this._onDidChangeHeight.fire()
      })
    }));
    const i=this.initContent();
    return this._domNode.appendChild(i), this._domNode
  }
  updateAriaLabel(n, e, t){
    n.ariaLabel=_(t?5209:5210, null, e)
  }
  addDisposable(n){
    this._register(n)
  }
  get expanded(){
    return this._isExpanded
  }
  isExpanded(){
    return this._isExpanded.get()
  }
  setExpanded(n){
    this._isExpanded.set(n, void 0)
  }
}, fEa=class extends YAu{
  constructor(e, t, i, r, s, o={
    
  }, a, l){
    super(e, t), this.editorPool=i, this.textModel=r, this.languageId=s, this.options=o, this.codeBlockInfo=a, this.contextKeyService=l, this._currentWidth=0, this.codeblocks=[], this._contentDomNode=Hfn("div.chat-collapsible-editor-content"), this._editorReference=this.editorPool.get(), this.codeblocks=[{
      ...a,focus:()=>{
        this._editorReference.object.focus(),a.focus()
      }
    }
    ]
  }
  dispose(){
    this._editorReference?.dispose(), super.dispose()
  }
  initContent(){
    const e={
      languageId:this.languageId,textModel:this.textModel,codeBlockIndex:this.codeBlockInfo.codeBlockIndex,codeBlockPartIndex:0,element:this.context.element,parentContextKeyService:this.contextKeyService,renderOptions:this.options
    };
    return this._editorReference.object.render(e, this._currentWidth||300), this._register(this._editorReference.object.onDidChangeContentHeight(()=>this._onDidChangeHeight.fire())), this._contentDomNode.appendChild(this._editorReference.object.element), this._register(Oc(t=>{
      const i=this._isExpanded.read(t);
      this._contentDomNode.style.display=i?"block":"none"
    })), this._contentDomNode
  }
  hasSameContent(e, t, i){
    return!1
  }
  layout(e){
    this._currentWidth=e, this._editorReference.object.layout(e)
  }
}, fEa=__decorate([__param(7, wi)], fEa)
}
}), wCi, bEa=