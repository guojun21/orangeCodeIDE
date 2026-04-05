// Module: out-build/vs/workbench/services/ai/browser/fastSemSearchService.js
// Offset: 33704015 (bundle byte offset)
// Size: 2470 bytes

o0u(), o0u(), eUf(), rt(), Rb(), Dd(), Cie(), Rl(), od(), Yn(), ps(), ss(), zr(), tl(), Er(), Wt(), Po(), b2e(), ts(), oB(), zk(), a0u=xi("IFastSemSearchService"), WIa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this._cursorAuthenticationService=e, this.reactiveStorageService=t, this.productService=i, this.editorGroupsService=r, this._workspaceContextService=s, this._editorService=o, this._cursorCredsService=a, this.fastContextService=l, this._instantiationService=u, this.fastSearchClientPromise=this._instantiationService.createInstance(YS, {
      service:GIa
    })
  }
  async startFastSearch(e){
    const t=await this.editorGroupsService.getGroups(1).map(a=>a.editors.map(l=>l.resource)).flat().filter(a=>a!==void 0).map(a=>this._workspaceContextService.asRelativePath(a)).map(a=>new JIa({
      relativeWorkspacePath:a
    })), s=(this.getLastActiveFileEditor()?.getControl()).getPosition()??new ar(1, 1);
    let o;
    try{
      o=await(await this.fastSearchClientPromise.get()).startFastSearch({
        uuid:e,cursorPosition:s,openTabs:t
      })
    }
    catch{
      o=new i0u({
        response:{
          case:"ready",value:new r0u({
            ready:!0
          })
        }
      })
    }
    return o
  }
  getLastActiveFileEditor(){
    let e=this._editorService.activeEditorPane;
    return e?.input?.resource?.scheme!==_n.aiChat, e
  }
  getAbortControllerFromCancellationToken(e){
    const t=new AbortController;
    return e.onCancellationRequested(()=>{
      t.abort()
    }), t
  }
  async fastSearch(e, t, i){
    return await this.internalPureFastSearch(e, t, i)
  }
  async postProcessSearchResults(e){
    const t=e.fileChunks.map(o=>o.chunk?.relativeWorkspacePath).filter(o=>o!==void 0), i=new Wc;
    let r=new Map;
    await DIA(t, async o=>{
      const a=await this.fastContextService.getApproximateRangeOfImports(je.file(o),i.token);
      a&&r.set(o,a)
    }, {
      max:8
    });
    const s=this.neverShowImports(e, r);
    return e
  }
  neverShowImports(e, t){
    const i=e.fileChunks, r=a=>{
      const l=t.get(a.chunk?.relativeWorkspacePath??"");
      if(l){
        const u=new Zt(a.chunk?.range?.startLine??1,1,(a.chunk?.range?.endLineInclusive??2)-1,1);
        return Zt.containsRange(l,u)
      }
      return!0
    }, s=i.filter(a=>!r(a));
    let o=e;
    return o.fileChunks=s, o
  }
  async internalPureFastSearch(e, t, i){
    const r=await this.fastSearchClientPromise.get(), s=this.getAbortControllerFromCancellationToken(i);
    try{
      return await r.fastSearch({
        uuid:e,query:t
      },{
        signal:s.signal
      })
    }
    catch{
      return new s0u({
        fileChunks:[]
      })
    }
  }
}, WIa=__decorate([__param(0, wg), __param(1, ku), __param(2, za), __param(3, da), __param(4, Lr), __param(5, yi), __param(6, MJ), __param(7, wxe), __param(8, ln)], WIa), Vi(a0u, WIa, 1)
}
}), _xe, Ybn=