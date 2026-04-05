// Module: out-build/vs/workbench/services/aiSettings/browser/adminSettingsService.js
// Offset: 26857153 (bundle byte offset)
// Size: 2460 bytes

iu(), yn(), Er(), Wt(), rt(), Rb(), kr(), i8=xi("adminSettingsService"), kga={
  allowedModels:[], blockedModels:[], dotCursorProtection:!1, browserFeatures:!1, browserOriginAllowlist:[], allowedMcpConfiguration:void 0, byokDisabled:!1, networkDenylist:[], networkAllowlist:[], sharedConversationSettings:{
    enabled:!1, allowedVisibilities:[], allowPublicIndexing:!1
  }, cursorBlameSettings:{
    enabled:!0
  }, attributionControls:{
    disableAttribution:!1
  }
}, Ega=class extends at{
  static{
    Sga=this
  }
  static{
    this.STORAGE_KEY="adminSettings.cached"
  }
  constructor(e, t){
    super(), this.cursorAuthenticationService=e, this.storageService=t, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.cached=kga, this.loadFromStorage(), this.cursorAuthenticationService.addLoginChangedListener(()=>{
      this.refresh()
    }), this.refresh();
    const i=bi.setInterval(()=>{
      this.refresh()
    }, 300*1e3);
    this._register($i(()=>{
      bi.clearInterval(i)
    }))
  }
  loadFromStorage(){
    const e=this.storageService.getObject(Sga.STORAGE_KEY, -1, kga);
    this.cached=e
  }
  saveToStorage(){
    this.storageService.store(Sga.STORAGE_KEY, JSON.stringify(this.cached), -1, 0)
  }
  async refresh(){
    const e=JSON.stringify(this.cached), t=await this.cursorAuthenticationService.dashboardClient();
    try{
      const i=await t.getTeams({
        
      }),r=i.teams?.find(o=>o.seats!==0);
      if(!i.teams?.length||!r)return this.cached=kga,this.saveToStorage(),JSON.stringify(this.cached)!==e&&this._onDidChange.fire(this.cached),this.cached;
      const s=r.id;
      this.cached=await t.getTeamAdminSettings({
        teamId:s
      }),this.saveToStorage()
    }
    catch(i){
      console.warn("[AdminSettingsService] Failed to refresh admin settings, keeping cached settings:",i)
    }
    return JSON.stringify(this.cached)!==e&&this._onDidChange.fire(this.cached), this.cached
  }
  getCached(){
    return this.cached
  }
  async getLatest(){
    return await this.refresh()
  }
  async forceRefresh(){
    return await this.refresh()
  }
  isModelBlocked(e){
    const t=this.getCached(), i=s=>s.toLowerCase().replace(/-/g, "."), r=i(e);
    return!!(t.blockedModels&&t.blockedModels.length>0&&t.blockedModels.some(s=>r.includes(i(s)))||t.allowedModels&&t.allowedModels.length>0&&!t.allowedModels.some(s=>r.includes(i(s))))
  }
  isCursorBlameEnabledForTeam(){
    return this.getCached().cursorBlameSettings?.enabled??!1
  }
  isAttributionDisabledByAdmin(){
    return this.getCached().attributionControls?.disableAttribution??!1
  }
}, Ega=Sga=__decorate([__param(0, wg), __param(1, Hi)], Ega), Vi(i8, Ega, 0)
}
}), mye, xga, CSt=