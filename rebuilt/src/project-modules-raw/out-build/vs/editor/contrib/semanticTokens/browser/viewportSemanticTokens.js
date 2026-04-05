// Module: out-build/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js
// Offset: 25587856 (bundle byte offset)
// Size: 2759 bytes

vr(), rt(), Cu(), qwg(), Ujl(), qjl(), Ei(), Io(), xve(), Sx(), Cm(), Hjl(), i$e=class extends at{
  static{
    Jjl=this
  }
  static{
    this.ID="editor.contrib.viewportSemanticTokens"
  }
  static get(e){
    return e.getContribution(Jjl.ID)
  }
  constructor(e, t, i, r, s, o){
    super(), this._semanticTokensStylingService=t, this._themeService=i, this._configurationService=r, this._editor=e, this._provider=o.documentRangeSemanticTokensProvider, this._debounceInformation=s.for(this._provider, "DocumentRangeSemanticTokens", {
      min:100,max:500
    }), this._tokenizeViewport=this._register(new Hu(()=>this._tokenizeViewportNow(), 100)), this._outstandingRequests=[];
    const a=()=>{
      this._editor.hasModel()&&this._tokenizeViewport.schedule(this._debounceInformation.get(this._editor.getModel()))
    };
    this._register(this._editor.onDidScrollChange(()=>{
      a()
    })), this._register(this._editor.onDidChangeModel(()=>{
      this._cancelAll(),a()
    })), this._register(this._editor.onDidChangeModelContent(l=>{
      this._cancelAll(),a()
    })), this._register(this._provider.onDidChange(()=>{
      this._cancelAll(),a()
    })), this._register(this._configurationService.onDidChangeConfiguration(l=>{
      l.affectsConfiguration(Qgi)&&(this._cancelAll(),a())
    })), this._register(this._themeService.onDidColorThemeChange(()=>{
      this._cancelAll(),a()
    })), a()
  }
  _cancelAll(){
    for(const e of this._outstandingRequests)e.cancel();
    this._outstandingRequests=[]
  }
  _removeOutstandingRequest(e){
    for(let t=0, i=this._outstandingRequests.length;
    t<i;
    t++)if(this._outstandingRequests[t]===e){
      this._outstandingRequests.splice(t,1);
      return
    }
  }
  _tokenizeViewportNow(){
    if(!this._editor.hasModel())return;
    const e=this._editor.getModel();
    if(e.tokenization.hasCompleteSemanticTokens())return;
    if(!yua(e, this._themeService, this._configurationService)){
      e.tokenization.hasSomeSemanticTokens()&&e.tokenization.setSemanticTokens(null,!1);
      return
    }
    if(!PkA(this._provider, e)){
      e.tokenization.hasSomeSemanticTokens()&&e.tokenization.setSemanticTokens(null,!1);
      return
    }
    const t=this._editor.getVisibleRangesPlusViewportAboveBelow();
    this._outstandingRequests=this._outstandingRequests.concat(t.map(i=>this._requestRange(e, i)))
  }
  _requestRange(e, t){
    const i=e.getVersionId(), r=dw(o=>Promise.resolve(Ojl(this._provider, e, t, o))), s=new J_(!1);
    return r.then(o=>{
      if(this._debounceInformation.update(e,s.elapsed()),!o||!o.tokens||e.isDisposed()||e.getVersionId()!==i)return;
      const{
        provider:a,tokens:l
      }
      =o,u=this._semanticTokensStylingService.getStyling(a);
      e.tokenization.setPartialSemanticTokens(t,Gwg(l,u,e.getLanguageId()))
    }).then(()=>this._removeOutstandingRequest(r), ()=>this._removeOutstandingRequest(r)), r
  }
}, i$e=Jjl=__decorate([__param(1, zgi), __param(2, bo), __param(3, Fn), __param(4, ene), __param(5, $u)], i$e), Mg(i$e.ID, i$e, 1)
}
}), NkA, Vwg, V9, eEe=