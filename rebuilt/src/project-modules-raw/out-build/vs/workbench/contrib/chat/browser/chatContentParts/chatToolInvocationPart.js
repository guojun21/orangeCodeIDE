// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatToolInvocationPart.js
// Offset: 32837909 (bundle byte offset)
// Size: 10806 bytes

ri(), qi(), yn(), tg(), rt(), Jr(), Ku(), hd(), Ht(), si(), Wt(), ka(), _E(), wie(), $_i(), cIf(), QOf(), n5f(), K5f(), Kyu(), kCi(), Pxa=class extends at{
  get codeblocks(){
    return this.subPart?.codeblocks??[]
  }
  get codeblocksPartId(){
    return this.subPart?.codeblocksPartId
  }
  constructor(e, t, i, r, s, o, a, l, u){
    if(super(), this.toolInvocation=e, this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event, this.domNode=Ct(".chat-tool-invocation-part"), e.presentation==="hidden")return;
    const d=this._register(new Ut), m=()=>{
      th(this.domNode),d.clear(),this.subPart=d.add(u.createInstance(Lxa,e,t,i,r,s,o,a,l)),this.domNode.appendChild(this.subPart.domNode),d.add(this.subPart.onDidChangeHeight(()=>this._onDidChangeHeight.fire())),d.add(this.subPart.onNeedsRerender(()=>{
        m(),this._onDidChangeHeight.fire()
      }))
    };
    m()
  }
  hasSameContent(e, t, i){
    return(e.kind==="toolInvocation"||e.kind==="toolInvocationSerialized")&&this.toolInvocation.toolCallId===e.toolCallId
  }
  addDisposable(e){
    this._register(e)
  }
}, Pxa=__decorate([__param(8, ln)], Pxa), Lxa=class extends at{
  static{
    twu=this
  }
  static{
    this.idPool=0
  }
  get codeblocks(){
    return this.markdownPart?.codeblocks??this._codeblocks
  }
  get codeblocksPartId(){
    return this.markdownPart?.codeblocksPartId??this._codeblocksPartId
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(), this.toolInvocation=e, this.context=t, this.renderer=i, this.listPool=r, this.editorPool=s, this.currentWidthDelegate=o, this.codeBlockModelCollection=a, this.codeBlockStartIndex=l, this.instantiationService=u, this.keybindingService=d, this.modelService=m, this.languageService=p, this.contextKeyService=g, this.languageModelToolsService=f, this._codeblocksPartId="tool-"+twu.idPool++, this._onNeedsRerender=this._register(new Qe), this.onNeedsRerender=this._onNeedsRerender.event, this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event, this._codeblocks=[], e.kind==="toolInvocation"&&e.confirmationMessages?e.toolSpecificData?.kind==="terminal"?this.domNode=this.createTerminalConfirmationWidget(e, e.toolSpecificData):this.domNode=this.createConfirmationWidget(e):e.toolSpecificData?.kind==="terminal"?this.domNode=this.createTerminalMarkdownProgressPart(e, e.toolSpecificData):Array.isArray(e.resultDetails)&&e.resultDetails?.length?this.domNode=this.createResultList(e.pastTenseMessage??e.invocationMessage, e.resultDetails):i8A(e.resultDetails)?this.domNode=this.createInputOutputMarkdownProgressPart(e.pastTenseMessage??e.invocationMessage, e.resultDetails):this.domNode=this.createProgressPart(), e.kind==="toolInvocation"&&!e.isComplete&&e.isCompletePromise.then(()=>this._onNeedsRerender.fire())
  }
  createConfirmationWidget(e){
    if(!e.confirmationMessages)throw new Error("Confirmation messages are missing");
    const t=e.confirmationMessages.title, i=e.confirmationMessages.message, r=e.confirmationMessages.allowAutoConfirm, s=_(5235, null), o=this.keybindingService.lookupKeybinding(Rgu)?.getLabel(), a=o?`${s} (${o})`:s, l=_(5236, null), u=this.keybindingService.lookupKeybinding(GCa)?.getLabel(), d=u?`${l} (${u})`:l;
    let m;
    (function(A){
      A[A.Allow=0]="Allow",A[A.Disallow=1]="Disallow",A[A.AllowWorkspace=2]="AllowWorkspace",A[A.AllowGlobally=3]="AllowGlobally",A[A.AllowSession=4]="AllowSession"
    })(m||(m={
      
    }));
    const p=[{
      label:s,data:0,tooltip:a,moreActions:r?[{
        label:_(5237,null),data:4,tooltip:_(5238,null)
      },{
        label:_(5239,null),data:2,tooltip:_(5240,null)
      },{
        label:_(5241,null),data:3,tooltip:_(5242,null)
      }
      ]:void 0
    }, {
      label:_(5243,null),data:1,isSecondary:!0,tooltip:d
    }
    ];
    let g;
    if(typeof i=="string")g=this._register(this.instantiationService.createInstance(mSi, t, i, p));
    else{
      const A={
        kind:"markdownContent",content:i
      },w={
        hideToolbar:!0,reserveWidth:19,verticalPadding:5,editorOptions:{
          wordWrap:"on"
        }
      },C=kl("div",[kl(".message@message"),kl(".editor@editor")]);
      if(e.toolSpecificData?.kind==="input"){
        const x=e.toolSpecificData,I={
          hideToolbar:!0,reserveWidth:19,maxHeightInLines:13,verticalPadding:5,editorOptions:{
            wordWrap:"on",readOnly:!1
          }
        },B=this.languageService.getLanguageIdByLanguageName("json"),R=this._register(this.modelService.createModel(JSON.stringify(x.rawInput,void 0,2),this.languageService.createById(B),s8A(e.toolId))),N=this._register(this.editorPool.get());
        N.object.render({
          codeBlockIndex:this.codeBlockStartIndex,codeBlockPartIndex:0,element:this.context.element,languageId:B??"json",renderOptions:I,textModel:Promise.resolve(R)
        },this.currentWidthDelegate()),this._codeblocks.push({
          codeBlockIndex:this.codeBlockStartIndex,codemapperUri:void 0,elementId:this.context.element.id,focus:()=>N.object.focus(),isStreaming:!1,ownerMarkdownPartId:this.codeblocksPartId,uri:R.uri,uriPromise:Promise.resolve(R.uri)
        }),this._register(N.object.onDidChangeContentHeight(()=>{
          N.object.layout(this.currentWidthDelegate()),this._onDidChangeHeight.fire()
        })),this._register(R.onDidChangeContent(M=>{
          try{
            x.rawInput=JSON.parse(R.getValue())
          }
          catch{
            
          }
        })),C.editor.append(N.object.element)
      }
      this.markdownPart=this._register(this.instantiationService.createInstance(abn,A,this.context,this.editorPool,!1,this.codeBlockStartIndex,this.renderer,this.currentWidthDelegate(),this.codeBlockModelCollection,{
        codeBlockRenderOptions:w
      })),C.message.append(this.markdownPart.domNode),this._register(this.markdownPart.onDidChangeHeight(()=>this._onDidChangeHeight.fire())),g=this._register(this.instantiationService.createInstance(pSi,t,C.root,e.toolSpecificData?.kind==="input",p))
    }
    const f=qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService);
    return f.set(!0), this._register(g.onDidClick(A=>{
      switch(A.data){
        case 3:this.languageModelToolsService.setToolAutoConfirmation(e.toolId,"profile",!0),e.confirmed.complete(!0);
        break;
        case 2:this.languageModelToolsService.setToolAutoConfirmation(e.toolId,"workspace",!0),e.confirmed.complete(!0);
        break;
        case 4:this.languageModelToolsService.setToolAutoConfirmation(e.toolId,"memory",!0),e.confirmed.complete(!0);
        break;
        case 0:e.confirmed.complete(!0);
        break;
        case 1:e.confirmed.complete(!1);
        break
      }
    })), this._register(g.onDidChangeHeight(()=>this._onDidChangeHeight.fire())), this._register($i(()=>f.reset())), e.confirmed.p.then(()=>{
      f.reset(),this._onNeedsRerender.fire()
    }), g.domNode
  }
  createTerminalConfirmationWidget(e, t){
    if(!e.confirmationMessages)throw new Error("Confirmation messages are missing");
    const i=e.confirmationMessages.title, r=e.confirmationMessages.message, s=_(5244, null), o=this.keybindingService.lookupKeybinding(Rgu)?.getLabel(), a=o?`${s} (${o})`:s, l=_(5245, null), u=this.keybindingService.lookupKeybinding(GCa)?.getLabel(), d=u?`${l} (${u})`:l, m=[{
      label:s,data:!0,tooltip:a
    }, {
      label:l,data:!1,isSecondary:!0,tooltip:d
    }
    ], p=this._register(this.renderer.render(typeof r=="string"?new _c(r):r, {
      asyncRenderCallback:()=>this._onDidChangeHeight.fire()
    })), g={
      hideToolbar:!0,reserveWidth:19,verticalPadding:5,editorOptions:{
        wordWrap:"on",readOnly:!1
      }
    }, f=this.languageService.getLanguageIdByLanguageName(t.language??"sh")??"shellscript", A=this.modelService.createModel(t.command, this.languageService.createById(f)), w=this._register(this.editorPool.get());
    w.object.render({
      codeBlockIndex:this.codeBlockStartIndex,codeBlockPartIndex:0,element:this.context.element,languageId:f,renderOptions:g,textModel:Promise.resolve(A)
    }, this.currentWidthDelegate()), this._codeblocks.push({
      codeBlockIndex:this.codeBlockStartIndex,codemapperUri:void 0,elementId:this.context.element.id,focus:()=>w.object.focus(),isStreaming:!1,ownerMarkdownPartId:this.codeblocksPartId,uri:A.uri,uriPromise:Promise.resolve(A.uri)
    }), this._register(w.object.onDidChangeContentHeight(()=>{
      w.object.layout(this.currentWidthDelegate()),this._onDidChangeHeight.fire()
    })), this._register(A.onDidChangeContent(I=>{
      t.command=A.getValue()
    }));
    const C=Ct("");
    Rt(C, w.object.element), Rt(C, p.element);
    const x=this._register(this.instantiationService.createInstance(pSi, i, C, !1, m));
    return qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService).set(!0), this._register(x.onDidClick(I=>{
      e.confirmed.complete(I.data)
    })), this._register(x.onDidChangeHeight(()=>this._onDidChangeHeight.fire())), e.confirmed.p.then(()=>{
      qa.Editing.hasToolConfirmation.bindTo(this.contextKeyService).set(!1),this._onNeedsRerender.fire()
    }), x.domNode
  }
  createProgressPart(){
    let e;
    this.toolInvocation.isComplete&&this.toolInvocation.isConfirmed!==!1&&this.toolInvocation.pastTenseMessage?e=typeof this.toolInvocation.pastTenseMessage=="string"?new _c().appendText(this.toolInvocation.pastTenseMessage):this.toolInvocation.pastTenseMessage:e=typeof this.toolInvocation.invocationMessage=="string"?new _c().appendText(this.toolInvocation.invocationMessage+"\u2026"):_c.lift(this.toolInvocation.invocationMessage).appendText("\u2026");
    const t={
      kind:"progressMessage",content:e
    }, i=this.toolInvocation.isConfirmed?this.toolInvocation.isComplete?Be.check:void 0:Be.error;
    return this._register(this.instantiationService.createInstance(yEt, t, this.renderer, this.context, void 0, !0, i)).domNode
  }
  createTerminalMarkdownProgressPart(e, t){
    const r={
      kind:"markdownContent",content:new _c(`\`\`\`${t.language}
${t.command}
\`\`\``)
    }, s={
      hideToolbar:!0,reserveWidth:19,verticalPadding:5,editorOptions:{
        wordWrap:"on"
      }
    };
    this.markdownPart=this._register(this.instantiationService.createInstance(abn, r, this.context, this.editorPool, !1, this.codeBlockStartIndex, this.renderer, this.currentWidthDelegate(), this.codeBlockModelCollection, {
      codeBlockRenderOptions:s
    })), this._register(this.markdownPart.onDidChangeHeight(()=>this._onDidChangeHeight.fire()));
    const o=this.toolInvocation.isConfirmed?this.toolInvocation.isComplete?Be.check:Qt.modify(Be.loading, "spin"):Be.error;
    return this.instantiationService.createInstance(Z5f, this.markdownPart.domNode, o).domNode
  }
  createInputOutputMarkdownProgressPart(e, t){
    const i=this._register(this.modelService.createModel(`${t.input}

${t.output}`, this.languageService.createById("json"))), r=this._register(this.instantiationService.createInstance(fEa, e, this.context, this.editorPool, Promise.resolve(i), i.getLanguageId(), {
      hideToolbar:!0,reserveWidth:19,maxHeightInLines:13,verticalPadding:5,editorOptions:{
        wordWrap:"on"
      }
    }, {
      codeBlockIndex:this.codeBlockStartIndex,codemapperUri:void 0,elementId:this.context.element.id,focus:()=>{
        
      },isStreaming:!1,ownerMarkdownPartId:this.codeblocksPartId,uri:i.uri,uriPromise:Promise.resolve(i.uri)
    }));
    return this._register(r.onDidChangeHeight(()=>this._onDidChangeHeight.fire())), r.domNode
  }
  createResultList(e, t){
    const i=this._register(this.instantiationService.createInstance(Jfn, t.map(r=>({
      kind:"reference",reference:r
    })), e, this.context, this.listPool));
    return this._register(i.onDidChangeHeight(()=>this._onDidChangeHeight.fire())), i.domNode
  }
}, Lxa=twu=__decorate([__param(8, ln), __param(9, mo), __param(10, Il), __param(11, Jl), __param(12, wi), __param(13, yie)], Lxa)
}
}), X5f, RSi, Nxa, e9f, t9f, n9f, i9f, suy=