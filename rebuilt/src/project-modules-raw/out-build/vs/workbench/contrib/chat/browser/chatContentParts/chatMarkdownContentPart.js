// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatMarkdownContentPart.js
// Offset: 32822168 (bundle byte offset)
// Size: 8279 bytes

ri(), h0(), GD(), qi(), yn(), rt(), Uc(), oa(), Jr(), ts(), Ku(), oR(), hd(), td(), Ht(), dg(), dr(), si(), pl(), ns(), Id(), Wt(), Pd(), ss(), xS(), Wq(), Pyu(), TSi(), Xly(), bEa(), Exa=Ct, abn=class extends at{
  static{
    Vyu=this
  }
  static{
    this.idPool=0
  }
  constructor(e, t, i, r=!1, s=0, o, a, l, u, d, m, p){
    super(), this.markdown=e, this.editorPool=i, this.codeBlockModelCollection=l, this.rendererOptions=u, this.textModelService=m, this.instantiationService=p, this.codeblocksPartId=String(++Vyu.idPool), this.allRefs=[], this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event, this.codeblocks=[];
    const g=t.element, f=Cbe(t.content, R=>R.kind==="undoStop", t.contentIndex)?.id, A=[];
    let w=s, C=0;
    const x=Gq(g)?{
      gfm:!0,breaks:!0
    }
    :void 0, I=this._register(o.render(e.content, {
      fillInIncompleteTokens:r,codeBlockRendererSync:(R,N,M)=>{
        const O=!rA(t.element)||t.element.isComplete||!M||euy(M);
        if((!N||N.startsWith("<vscode_codeblock_uri")&&!N.includes(`
`))&&!O){
          const ne=Exa("div");
          return ne.style.display="none",ne
        }
        const $=w++,H=C++;
        let W,z,Y,j;
        if(k_(R,V5f))try{
          const ne=Zly(N);
          z=ne.range&&Zt.lift(ne.range),W=this.textModelService.createModelReference(ne.uri).then(pe=>pe.object.textEditorModel)
        }
        catch{
          return Exa("div")
        }
        else{
          const ne=rA(g)||Gq(g)?g.sessionId:"",pe=this.codeBlockModelCollection.getOrCreate(ne,g,$),le=this.codeBlockModelCollection.updateSync(ne,g,$,{
            text:N,languageId:R,isComplete:O
          });
          Y=pe.vulns,j=le,W=pe.model
        }
        const X=rA(g)&&g.errorDetails?.responseIsFiltered,ee={
          ...this.rendererOptions.codeBlockRenderOptions
        };
        X!==void 0&&(ee.hideToolbar=X);
        const re={
          languageId:R,textModel:W,codeBlockIndex:$,codeBlockPartIndex:H,element:g,range:z,parentContextKeyService:d,vulns:Y,codemapperUri:j?.codemapperUri,renderOptions:ee
        };
        if(g.isCompleteAddedRequest||!j?.codemapperUri||!j.isEdit){
          const ne=this.renderCodeBlock(re,N,O,a);
          this.allRefs.push(ne),this._register(ne.object.onDidChangeContentHeight(()=>this._onDidChangeHeight.fire()));
          const pe=this.codeblocksPartId,le=new class{
            constructor(){
              this.ownerMarkdownPartId=pe,this.codeBlockIndex=$,this.elementId=g.id,this.isStreaming=!1,this.codemapperUri=void 0,this.uriPromise=W.then(he=>he.uri)
            }
            get uri(){
              return ne.object.uri
            }
            focus(){
              ne.object.focus()
            }
          };
          return this.codeblocks.push(le),A.push(ne),ne.object.element
        }
        else{
          const ne=Gq(g)?g.id:g.requestId,pe=this.renderCodeBlockPill(g.sessionId,ne,f,re.codemapperUri,!O);
          rA(re.element)&&this.codeBlockModelCollection.update(re.element.sessionId,re.element,re.codeBlockIndex,{
            text:N,languageId:re.languageId,isComplete:O
          }).then(be=>{
            this.codeblocks[re.codeBlockPartIndex].codemapperUri=be.codemapperUri,this._onDidChangeHeight.fire()
          }),this.allRefs.push(pe);
          const le=this.codeblocksPartId,he=new class{
            constructor(){
              this.ownerMarkdownPartId=le,this.codeBlockIndex=$,this.elementId=g.id,this.isStreaming=!O,this.codemapperUri=j?.codemapperUri,this.uriPromise=Promise.resolve(void 0)
            }
            get uri(){
              
            }
            focus(){
              return pe.object.element.focus()
            }
          };
          return this.codeblocks.push(he),A.push(pe),pe.object.element
        }
      },asyncRenderCallback:()=>this._onDidChangeHeight.fire()
    }, x)), B=p.createInstance(bSi);
    this._register(B.walkTreeAndAnnotateReferenceLinks(e, I.element)), A.reverse().forEach(R=>this._register(R)), this.domNode=I.element
  }
  renderCodeBlockPill(e, t, i, r, s){
    const o=this.instantiationService.createInstance(DSi, e, t, i);
    return r&&o.render(r, s), {
      object:o,isStale:()=>!1,dispose:()=>o.dispose()
    }
  }
  renderCodeBlock(e, t, i, r){
    const s=this.editorPool.get(), o=s.object;
    return rA(e.element)&&this.codeBlockModelCollection.update(e.element.sessionId, e.element, e.codeBlockIndex, {
      text:t,languageId:e.languageId,isComplete:i
    }).then(a=>{
      this.codeblocks[e.codeBlockPartIndex].codemapperUri=a.codemapperUri,this._onDidChangeHeight.fire()
    }), o.render(e, r), s
  }
  hasSameContent(e){
    return e.kind==="markdownContent"&&!!(e.content.value===this.markdown.content.value||this.codeblocks.at(-1)?.isStreaming&&this.codeblocks.at(-1)?.codemapperUri!==void 0&&e.content.value.lastIndexOf("```")===this.markdown.content.value.lastIndexOf("```"))
  }
  layout(e){
    this.allRefs.forEach((t, i)=>{
      if(t.object instanceof xSi)t.object.layout(e);
      else if(t.object instanceof DSi){
        const r=this.codeblocks[i];
        r.codemapperUri&&t.object.uri?.toString()!==r.codemapperUri.toString()&&t.object.render(r.codemapperUri,r.isStreaming)
      }
    })
  }
  addDisposable(e){
    this._register(e)
  }
}, abn=Vyu=__decorate([__param(9, wi), __param(10, El), __param(11, ln)], abn), ISi=class extends at{
  inUse(){
    return this._pool.inUse
  }
  constructor(e, t, i, r){
    super(), this._pool=this._register(new wCi(()=>r.createInstance(xSi, e, st.ChatCodeBlock, t, i)))
  }
  get(){
    const e=this._pool.get();
    let t=!1;
    return{
      object:e,isStale:()=>t,dispose:()=>{
        e.reset(),t=!0,this._pool.release(e)
      }
    }
  }
}, ISi=__decorate([__param(3, ln)], ISi), DSi=class extends at{
  get uri(){
    return this._uri
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(), this.sessionId=e, this.requestId=t, this.inUndoStop=i, this.labelService=r, this.editorService=s, this.modelService=o, this.languageService=a, this.contextMenuService=l, this.contextKeyService=u, this.menuService=d, this.hoverService=m, this.chatService=p, this.hover=this._register(new uo), this._progressStore=this._store.add(new Ut), this.element=Exa(".chat-codeblock-pill-widget"), this.element.classList.add("show-file-icons"), this._register(ei(this.element, "click", async()=>{
      this._currentDiff?this.editorService.openEditor({
        original:{
          resource:this._currentDiff.originalURI
        },modified:{
          resource:this._currentDiff.modifiedURI
        },options:{
          transient:!0
        }
      }):this.uri&&this.editorService.openEditor({
        resource:this.uri
      })
    })), this._register(ei(this.element, ir.CONTEXT_MENU, g=>{
      const f=new yy(As(g),g);
      zu.stop(g,!0),this.contextMenuService.showContextMenu({
        contextKeyService:this.contextKeyService,getAnchor:()=>f,getActions:()=>{
          const A=this.menuService.getMenuActions(st.ChatEditingCodeBlockContext,this.contextKeyService,{
            arg:{
              sessionId:e,requestId:t,uri:this.uri,stopId:i
            }
          });
          return YH(A)
        }
      })
    }))
  }
  render(e, t){
    this._progressStore.clear(), this._uri=e;
    const i=this.chatService.getSession(this.sessionId), r=this.labelService.getUriBasenameLabel(e);
    let s=i?.editingSessionObs?.promiseResult.get()?.data, o=s?.getEntry(e), a=o?.isCurrentlyBeingModifiedBy.get();
    const l=!a||a.requestId!==this.requestId;
    let u=[];
    if(t||!l){
      const A=Qt.modify(Be.loading,"spin");
      u=Qt.asClassNameArray(A)
    }
    else{
      const A=e.path.endsWith("/")?xg.FOLDER:xg.FILE;
      u=yS(this.modelService,this.languageService,e,A)
    }
    const d=Ct("span.icon");
    d.classList.add(...u);
    const m=[Ct("span.icon-label", {
      
    }, r)], p=Ct("span.label-detail", {
      
    }, "");
    m.push(p), t&&(p.textContent=_(5214, null)), this.element.replaceChildren(d, ...m), this.updateTooltip(this.labelService.getUriLabel(e, {
      relative:!1
    }));
    const g=A=>{
      const w=this.element.querySelector(".label-added")??this.element.appendChild(Ct("span.label-added")),C=this.element.querySelector(".label-removed")??this.element.appendChild(Ct("span.label-removed"));
      if(A&&!A?.identical&&!A?.quitEarly){
        this._currentDiff=A,w.textContent=`+${A.added}`,C.textContent=`-${A.removed}`;
        const x=A.added===1?_(5215,null):_(5216,null,A.added),I=A.removed===1?_(5217,null):_(5218,null,A.removed),B=_(5219,null,r,x,I);
        this.element.ariaLabel=B,this.updateTooltip(B)
      }
    };
    let f;
    this._progressStore.add(Oc(A=>{
      s||(s=i?.editingSessionObs?.promiseResult.read(A)?.data,o=s?.getEntry(e)),a=o?.isCurrentlyBeingModifiedBy.read(A);
      const w=!a||a.requestId!==this.requestId,C=o?.rewriteRatio.read(A);
      if(!t&&!w){
        const x=C;
        p.textContent=x===0||!x?_(5220,null):_(5221,null,Math.round(x*100))
      }
      else if(!t&&w){
        d.classList.remove(...u);
        const x=e.path.endsWith("/")?xg.FOLDER:xg.FILE;
        d.classList.add(...yS(this.modelService,this.languageService,e,x)),p.textContent=""
      }
      f||(f=o&&s?s.getEntryDiffBetweenStops(o.modifiedURI,this.requestId,this.inUndoStop):void 0),!t&&w&&f&&g(f.read(A))
    }))
  }
  updateTooltip(e){
    this.tooltip=e, this.hover.value||(this.hover.value=this.hoverService.setupDelayedHover(this.element, ()=>({
      content:this.tooltip,appearance:{
        compact:!0,showPointer:!0
      },position:{
        hoverPosition:2
      },persistence:{
        hideOnKeyDown:!0
      }
    })))
  }
}, DSi=__decorate([__param(3, Ol), __param(4, yi), __param(5, Il), __param(6, Jl), __param(7, kc), __param(8, wi), __param(9, xd), __param(10, Kc), __param(11, ES)], DSi)
}
});
function Y5f(n, e){
  return rA(e)&&!e.isComplete&&n.length===0
}
var yEt, xxa, Z5f, Kyu=