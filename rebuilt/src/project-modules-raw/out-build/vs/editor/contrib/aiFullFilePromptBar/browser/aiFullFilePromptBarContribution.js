// Module: out-build/vs/editor/contrib/aiFullFilePromptBar/browser/aiFullFilePromptBarContribution.js
// Offset: 33991732 (bundle byte offset)
// Size: 8004 bytes

Cu(), L0(), rt(), Wt(), Dd(), ri(), Dx(), yn(), zr(), si(), rf(), kr(), ps(), Q0(), Wu(), cp(), uQ(), sie(), _M(), wq(), rFA(), Gmy(), fvn=class extends at{
  static{
    nCu=this
  }
  static{
    this.ID="aiFullFilePromptBar"
  }
  static get(e){
    return e.getContribution(nCu.ID)
  }
  _shouldKeepIsland(){
    return this._experimentService.getDynamicConfigParam("agent_layout_migration", "keepIsland")??!1
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this._instantiationService=t, this._reactiveStorageService=i, this._contextKeyService=r, this._diffChangeSourceRegistry=s, this._experimentService=o, this._composerDataService=a, this._storageService=l, this._editor=e, this.reactiveStorageRoot=this._register(this._reactiveStorageService.createScoped(this)), this._widget=new Ob(()=>{
      const A=this._register(this._instantiationService.createInstance(QDa,this._editor));
      return this._register(A.onClick(w=>{
        
      })),A
    });
    const u=Z4.inPeekEditor.getValue(this._contextKeyService), d=this._editor.getDomNode(), m=Array.from(d?.classList.values()??[]).find(A=>A.includes("monaco-diff-editor")), g=d?.getAttribute("data-uri")?.startsWith("output:");
    if(!u&&!m&&!g){
      const A=this._experimentService.getDynamicConfigParamProperty("agent_layout_migration","keepIsland");
      let w=A.nonReactive()??!1;
      const C=()=>{
        const N=this._editor.getContainerDomNode()?.closest(".editor-group-container"),M=N?.querySelector(".title"),O=N?.querySelector(".label-container"),$=!!(M&&M.classList.contains("breadcrumbs")),H=N?.querySelector(".breadcrumbs-below-tabs"),W=N?.querySelector(".breadcrumbs-below-tabs .breadcrumbs-control"),z=!!(W&&!W.classList.contains("hidden")),Y=$||z,j=this._diffChangeSourceRegistry.getDescriptors().filter(he=>he.metadata?.source===gce).filter(he=>!this._composerDataService.isWorktreeComposer(he.metadata?.composerId)).filter(he=>!FSt(he.uri)).length>0,X=w,ee=Bh(this._storageService),re=this._editor.getModel()?.uri?.scheme===_n.git;
        j&&!re&&(!ee||X||ee&&!X&&!Y)?this._widget.value.show():this._widget.value.hide();
        const pe=$?O||void 0:H||void 0;
        if(ee&&!X&&j&&Y&&!!pe&&pe){
          const he=this._editor.hasTextFocus()||this._editor.hasWidgetFocus(),be=N?.querySelector("[data-breadcrumb-review-controls]");
          if(!(he||!be))return;
          M&&M.classList.contains("breadcrumbs")&&!M.classList.contains("has-review-controls")&&M.classList.add("has-review-controls");
          const ke=pe.querySelector(".breadcrumbs-control");
          let Se=pe.querySelector(".breadcrumbs-row");
          Se?ke&&ke.parentElement!==Se&&Se.appendChild(ke):(Se=document.createElement("div"),Se.className="breadcrumbs-row",ke&&ke.parentElement?(ke.parentElement.insertBefore(Se,ke),Se.appendChild(ke)):pe.appendChild(Se)),he&&be&&be!==this._breadcrumbsControlsContainer&&be.remove();
          let Fe=!this._breadcrumbsControlsDispose;
          (!this._breadcrumbsControlsContainer||!this._breadcrumbsControlsContainer.isConnected)&&(this._breadcrumbsControlsDispose?.dispose(),this._breadcrumbsControlsDispose=void 0,Fe=!0,this._breadcrumbsControlsContainer=document.createElement("div"),this._breadcrumbsControlsContainer.setAttribute("data-breadcrumb-review-controls","true")),this._breadcrumbsControlsContainer.parentElement!==Se&&Se.appendChild(this._breadcrumbsControlsContainer),Fe&&(this._breadcrumbsControlsDispose=K$f(this._breadcrumbsControlsContainer,this._instantiationService,this._editor));
          try{
            const De=pe.querySelector(".breadcrumbs-control.relative-path .monaco-breadcrumbs");
            if(De){
              const Pe=As(De);
              Pe.requestAnimationFrame(()=>{
                Pe.requestAnimationFrame(()=>{
                  De.scrollLeft=De.scrollWidth
                })
              })
            }
          }
          catch(De){
            console.error("Error ensuring breadcrumbs scroll to show the last item by default when using relative path mode",De)
          }
        }
        else this._breadcrumbsControlsDispose?.dispose(),this._breadcrumbsControlsDispose=void 0,this._breadcrumbsControlsContainer?.parentElement&&this._breadcrumbsControlsContainer.remove(),this._breadcrumbsControlsContainer=void 0,M&&M.classList.contains("has-review-controls")&&M.classList.remove("has-review-controls")
      };
      this._register(this._diffChangeSourceRegistry.onDidChange(C));
      const x=hm(this._storageService,"unifiedAppLayout");
      this._register(x),x.recomputeInitiallyAndOnChange(this._store,C),this.reactiveStorageRoot.onChangeEffect({
        deps:[()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip],onChange:C
      }),this._register(this._editor.onDidChangeModel(()=>{
        this._widget.value.rerender(),w||this._breadcrumbsControlsContainer&&this._breadcrumbsControlsContainer.isConnected&&(this._breadcrumbsControlsDispose?.dispose(),this._breadcrumbsControlsDispose=K$f(this._breadcrumbsControlsContainer,this._instantiationService,this._editor))
      })),this._register(this._experimentService.onDidChangeGates(N=>{
        (!N.changedConfigs||N.changedConfigs.has("agent_layout_migration"))&&(w=A.nonReactive()??!1,C())
      }));
      const I=this._editor.getContainerDomNode()?.closest(".editor-group-container"),B=I?.querySelector(".title");
      if(B){
        const N=new MutationObserver(C);
        N.observe(B,{
          attributes:!0,attributeFilter:["class"]
        }),this._breadcrumbsMutationDisconnect=$i(()=>N.disconnect()),this._register(this._breadcrumbsMutationDisconnect)
      }
      const R=I?.querySelector(".breadcrumbs-below-tabs");
      if(R){
        const N=new MutationObserver(C);
        N.observe(R,{
          subtree:!0,attributes:!0,attributeFilter:["class"]
        }),this._register($i(()=>N.disconnect()))
      }
      this._widget.value.rerender(),C()
    }
  }
}, fvn=nCu=__decorate([__param(1, ln), __param(2, ku), __param(3, wi), __param(4, K3), __param(5, Tl), __param(6, Oa), __param(7, Hi)], fvn), QDa=class extends at{
  constructor(e, t, i, r){
    super(), this._editor=e, this.reactiveStorageService=t, this.workspaceContextService=i, this.instantiationService=r, this.allowEditorOverflow=!0, this._onClick=this._register(new Qe), this.onClick=this._onClick.event, this.isWordWrap=!1, this._domNode=Ct("div.aiFullFilePromptBarWidget"), this._domNode.style.width="100%", this._domNode.style.boxSizing="border-box", this._domNode.style.pointerEvents="none", this._domNode.style.display="flex", this._domNode.style.justifyContent="center", this._domNode.style.zIndex="10", this._offsetDomNode=Ct("div"), this._offsetDomNode.style.width="100%", this._offsetDomNode.style.display="flex", this._offsetDomNode.style.justifyContent="center", this._offsetDomNode.style.alignItems="center", this._offsetDomNode.style.boxSizing="border-box", this._offsetDomNode.style.position="relative", this._offsetDomNode.style.zIndex="2530", this._domNode.appendChild(this._offsetDomNode), this._register(this._editor.onMouseMove(s=>{
      this._isMouseInEditor(s)&&this._applyHoverEffect()
    })), this._register(this._editor.onMouseLeave(()=>{
      this._editor.hasTextFocus()||this._removeHoverEffect()
    })), this._register(this._editor.onDidFocusEditorText(()=>{
      this._applyHoverEffect()
    })), this._register(this._editor.onDidBlurEditorText(()=>{
      this._removeHoverEffect()
    })), this._register(E1.ignoreTarget(this._domNode)), this._editor.addOverlayWidget(this), this.disposeRender=this._register(V$f(this._offsetDomNode, this, this.instantiationService, this._editor)), this._register(this._editor.onDidChangeModelContent(()=>{
      this._editor.layoutOverlayWidget(this)
    }))
  }
  _isMouseInEditor(e){
    return!e.target||e.target.type===0?!1:e.target.type!==13
  }
  rerender(){
    this.disposeRender?.dispose(), this.disposeRender=this._register(V$f(this._offsetDomNode, this, this.instantiationService, this._editor))
  }
  getId(){
    return"aiFullFilePromptBarWidget"
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return{
      preference:3
    }
  }
  getURI(){
    const e=this._editor.getModel()?.uri;
    if(e?.path)return e
  }
  show(){
    this._editor.getModel()?.uri?.scheme!==_n.git&&(this._domNode.style.display="block")
  }
  hide(){
    this._domNode.style.display="none"
  }
  update(){
    this.rerender()
  }
  _applyHoverEffect(){
    this._domNode.classList.contains("editor-hover")||this._domNode.classList.add("editor-hover")
  }
  _removeHoverEffect(){
    this._domNode.classList.contains("editor-hover")&&this._domNode.classList.remove("editor-hover")
  }
  dispose(){
    this.disposeRender?.dispose(), super.dispose()
  }
}, QDa=__decorate([__param(1, ku), __param(2, Lr), __param(3, ln)], QDa), Mg(fvn.ID, fvn, 3)
}
}), Wmy=