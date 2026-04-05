// Module: out-build/vs/workbench/contrib/search/browser/symbolsQuickAccess.js
// Offset: 28196349 (bundle byte offset)
// Size: 4373 bytes

Ht(), bce(), vr(), ynt(), Tg(), Pd(), zr(), Fc(), ss(), ts(), Ei(), Oh(), Get(), iX(), qi(), Jr(), wnt=class extends nX{
  static{
    zAi=this
  }
  static{
    this.PREFIX="#"
  }
  static{
    this.TYPING_SEARCH_DELAY=200
  }
  static{
    this.TREAT_AS_GLOBAL_SYMBOL_TYPES=new Set([4, 9, 0, 10, 2, 3, 1])
  }
  get defaultFilterValue(){
    const e=this.codeEditorService.getFocusedCodeEditor();
    if(e)return cdn(e)??void 0
  }
  constructor(e, t, i, r, s){
    super(zAi.PREFIX, {
      canAcceptInBackground:!0,noResultsPick:{
        label:_(10786,null)
      }
    }), this.labelService=e, this.openerService=t, this.editorService=i, this.configurationService=r, this.codeEditorService=s, this.delayer=this._register(new L4(zAi.TYPING_SEARCH_DELAY)), this.excludedProviders=new Set, this._refreshExcludedProvidersFromConfig(), this._register(this.configurationService.onDidChangeConfiguration(o=>{
      o.affectsConfiguration("search.quickAccess.excludeSymbolProviders")&&this._refreshExcludedProvidersFromConfig()
    }))
  }
  get configuration(){
    const e=this.configurationService.getValue().workbench?.editor;
    return{
      openEditorPinned:!e?.enablePreviewFromQuickOpen||!e?.enablePreview,openSideBySideDirection:e?.openSideBySideDirection
    }
  }
  _getPicks(e, t, i){
    return this.getSymbolPicks(e, void 0, i)
  }
  async getSymbolPicks(e, t, i){
    return this.delayer.trigger(async()=>i.isCancellationRequested?[]:this.doGetSymbolPicks(o8(e), t, i), t?.delay)
  }
  async doGetSymbolPicks(e, t, i){
    let r, s;
    e.values&&e.values.length>1?(r=nba(e.values[0]), s=nba(e.values.slice(1))):r=e;
    const o=await KXg(r.original, this.excludedProviders, i);
    if(i.isCancellationRequested)return[];
    const a=[], l=this.configuration.openSideBySideDirection;
    for(const{
      symbol:u,provider:d
    }
    of o){
      if(t?.skipLocal&&!zAi.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(u.kind)&&u.containerName)continue;
      const m=u.name,p=`$(${$oe.toIcon(u.kind).id}) ${m}`,g=p.length-m.length;
      let f,A,w=!1;
      if(r.original.length>0&&(r!==e&&([f,A]=Cmn(p,{
        ...e,values:void 0
      },0,g),typeof f=="number"&&(w=!0)),typeof f!="number"&&([f,A]=Cmn(p,r,0,g),typeof f!="number")))continue;
      const C=u.location.uri;
      let x;
      if(C){
        const N=this.labelService.getUriLabel(C,{
          relative:!0
        });
        u.containerName?x=`${u.containerName} \u2022 ${N}`:x=N
      }
      let I,B;
      if(!w&&s&&s.original.length>0){
        if(x&&([I,B]=Cmn(x,s)),typeof I!="number")continue;
        typeof f=="number"&&(f+=I)
      }
      const R=u.tags?u.tags.indexOf(1)>=0:!1;
      a.push({
        symbol:u,resource:C,score:f,label:p,ariaLabel:m,highlights:R?void 0:{
          label:A,description:B
        },description:x,strikethrough:R,buttons:[{
          iconClass:l==="right"?Qt.asClassName(Be.splitHorizontal):Qt.asClassName(Be.splitVertical),tooltip:_(l==="right"?10787:10788,null)
        }
        ],trigger:(N,M)=>(this.openSymbol(d,u,i,{
          keyMods:M,forceOpenSideBySide:!0
        }),HF.CLOSE_PICKER),accept:async(N,M)=>this.openSymbol(d,u,i,{
          keyMods:N,preserveFocus:M.inBackground,forcePinned:M.inBackground
        })
      })
    }
    return t?.skipSorting||a.sort((u, d)=>this.compareSymbols(u, d)), a
  }
  async openSymbol(e, t, i, r){
    let s=t;
    typeof e.resolveWorkspaceSymbol=="function"&&(s=await e.resolveWorkspaceSymbol(t, i)||t, i.isCancellationRequested)||(s.location.uri.scheme===_n.http||s.location.uri.scheme===_n.https?await this.openerService.open(s.location.uri, {
      fromUserGesture:!0,allowContributedOpeners:!0
    }):await this.editorService.openEditor({
      resource:s.location.uri,options:{
        preserveFocus:r?.preserveFocus,pinned:r.keyMods.ctrlCmd||r.forcePinned||this.configuration.openEditorPinned,selection:s.location.range?Zt.collapseToStart(s.location.range):void 0
      }
    }, r.keyMods.alt||this.configuration.openEditorPinned&&r.keyMods.ctrlCmd||r?.forceOpenSideBySide?Aw:B1))
  }
  compareSymbols(e, t){
    if(typeof e.score=="number"&&typeof t.score=="number"){
      if(e.score>t.score)return-1;
      if(e.score<t.score)return 1
    }
    if(e.symbol&&t.symbol){
      const i=e.symbol.name.toLowerCase(),r=t.symbol.name.toLowerCase(),s=i.localeCompare(r);
      if(s!==0)return s
    }
    if(e.symbol&&t.symbol){
      const i=$oe.toIcon(e.symbol.kind).id,r=$oe.toIcon(t.symbol.kind).id;
      return i.localeCompare(r)
    }
    return 0
  }
  _refreshExcludedProvidersFromConfig(){
    const e=this.configurationService.getValue("search.quickAccess.excludeSymbolProviders"), t=Array.isArray(e)?e:[];
    this.excludedProviders=new Set(t.map(i=>i.toLowerCase()))
  }
}, wnt=zAi=__decorate([__param(0, Ol), __param(1, Ja), __param(2, yi), __param(3, Fn), __param(4, fl)], wnt)
}
});
function Eye(n, e){
  return t=>{
    const i=t.get(mo), r=t.get(ha), o={
      keybindings:i.lookupKeybindings(n)
    };
    r.navigate(!!e, o)
  }
}
var dau, ief, kce, hau, mau, Vmn, TEe=