// Module: out-build/vs/workbench/services/gitIgnore/browser/gitIgnoreService.js
// Offset: 33796555 (bundle byte offset)
// Size: 2248 bytes

Er(), Yn(), ps(), rt(), yn(), jr(), cu(), Wt(), sB(), ns(), iDa=xi("gitIgnoreService"), rDa=class extends at{
  constructor(e, t, i, r){
    super(), this.workspaceContextService=e, this.logService=t, this.gitContextService=i, this.fileService=r, this._onDidGitIgnoreChange=this._register(new Qe), this.onDidGitIgnoreChange=this._onDidGitIgnoreChange.event, this._cache=new Fb(2e3, .5), this._register(this._onDidGitIgnoreChange.event(()=>{
      this._cache.clear()
    })), this._register(this.fileService.onDidFilesChange(async s=>{
      let o=!1;
      if(s.gotAdded()){
        const a=s.rawAdded.filter(l=>l.path.endsWith(".gitignore"));
        a.length>0&&(o=!0,this.logService.debug(`[GitIgnoreService] New .gitignore files detected: ${a.map(l=>l.path).join(", ")}`))
      }
      if(s.gotDeleted()){
        const a=s.rawDeleted.filter(l=>l.path.endsWith(".gitignore"));
        a.length>0&&(o=!0,this.logService.debug(`[GitIgnoreService] Deleted .gitignore files detected: ${a.map(l=>l.path).join(", ")}`))
      }
      if(s.gotUpdated()){
        const a=s.rawUpdated.filter(l=>l.path.endsWith(".gitignore"));
        a.length>0&&(o=!0,this.logService.debug(`[GitIgnoreService] Modified .gitignore files detected: ${a.map(l=>l.path).join(", ")}`))
      }
      o&&(this.logService.debug("[GitIgnoreService] .gitignore files changed, clearing cache and notifying listeners"),this._onDidGitIgnoreChange.fire({
        
      }))
    }))
  }
  async shouldIgnoreUris(e){
    if(e.length===0)return[];
    const t=e.map(o=>je.revive(o)), i=[], r=[], s=new Array(e.length).fill(!1);
    if(!this.gitContextService.hasCorrectGitIgnoreProvider())return this.logService.debug("[GitIgnoreService] No git ignore provider available"), s;
    for(let o=0;
    o<t.length;
    o++){
      const a=t[o],l=a.toString();
      this._cache.has(l)?s[o]=this._cache.get(l):(i.push(a),r.push(o))
    }
    if(i.length===0)return s;
    try{
      const o=await this.gitContextService.areIgnored(i);
      for(let a=0;
      a<i.length;
      a++){
        const l=i[a],u=r[a],d=o[a];
        this._cache.set(l.toString(),d),s[u]=d
      }
      return s
    }
    catch(o){
      this.logService.debug("[GitIgnoreService] Error checking ignore status for batch:",o);
      for(let a=0;
      a<i.length;
      a++){
        const l=i[a],u=r[a];
        this._cache.set(l.toString(),!1),s[u]=!1
      }
      return s
    }
  }
}, rDa=__decorate([__param(0, Lr), __param(1, Rr), __param(2, AE), __param(3, Gr)], rDa), Vi(iDa, rDa, 1)
}
}), qUf, C0u, HUf, S0u, k0u=