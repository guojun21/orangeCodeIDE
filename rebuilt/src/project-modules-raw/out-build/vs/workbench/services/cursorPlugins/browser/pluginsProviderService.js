// Module: out-build/vs/workbench/services/cursorPlugins/browser/pluginsProviderService.js
// Offset: 28036751 (bundle byte offset)
// Size: 13673 bytes

Od(), uR(), uR(), vr(), yn(), rt(), Uc(), fnt(), Bc(), Er(), Wt(), jr(), M4(), VA(), ps(), fE(), aP(), Rb(), eu(), Wu(), uie=xi("pluginsProviderService"), $mn=3e4, oYg=3e4, Jba=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this._cursorAuthenticationService=e, this._workspaceContextService=t, this._workbenchEnvironmentService=i, this._experimentService=r, this._metricsService=s, this._logService=o, this._pluginsProvider=new wye, this._onDidPluginsChange=this._register(new Qe), this.onDidPluginsChange=this._onDidPluginsChange.event, this._onDidPluginsChangeWithoutRefetch=this._register(new Qe), this.onDidPluginsChangeWithoutRefetch=this._onDidPluginsChangeWithoutRefetch.event, this._onDidNewPluginsDetected=this._register(new Qe), this.onDidNewPluginsDetected=this._onDidNewPluginsDetected.event, this._cacheByContext=new Map, this._pluginsCache=Ua("pluginsCache", void 0), this.pluginsCache=this._pluginsCache, this._refreshInstalledPluginsQueued=!1, this._refreshInstalledPluginsPendingUseReplica=!0, this._allowEmptySnapshotByKey=new Set, this._installedPluginsConsistencyByKey=new Map, this._refreshMarketplacePluginsInFlightByKey=new Map, this._onDidPluginsCacheChange=this._register(new Qe), this.onDidPluginsCacheChange=this._onDidPluginsCacheChange.event, this._register(t.onDidChangeWorkspaceFolders(()=>this._refreshCacheObservable()));
    const a=()=>this._refreshCacheObservable();
    e.addLoginChangedListener(a), this._register($i(()=>e.removeLoginChangedListener(a))), this._maybeWarmMarketplacePluginsForCurrentContext()
  }
  _getCurrentCacheKey(){
    return UOA(this._cursorAuthenticationService.getTeamId(), this._workspaceContextService.getWorkspace().folders[0]?.uri?.toString())
  }
  _refreshCacheObservable(){
    const e=this._getCurrentCacheKey();
    this._pluginsCache.set(this._cacheByContext.get(e), void 0, void 0), this._onDidPluginsCacheChange.fire(), this._maybeWarmMarketplacePluginsForCurrentContext()
  }
  _maybeWarmMarketplacePluginsForCurrentContext(){
    const e=this._getCurrentCacheKey();
    if(this._cacheByContext.get(e)?.allMarketplacePlugins!==void 0||this._refreshMarketplacePluginsInFlightByKey.has(e))return;
    const i=this._refreshMarketplacePluginsFromDashboardClient(e).finally(()=>{
      this._refreshMarketplacePluginsInFlightByKey.delete(e)
    });
    this._refreshMarketplacePluginsInFlightByKey.set(e, i)
  }
  async _refreshMarketplacePluginsFromDashboardClient(e){
    try{
      const t=await this._cursorAuthenticationService.dashboardClient(),i={
        headers:Kb(Wr())
      },s=[...(await t.listMarketplacePlugins(new jtt({
        
      }),i)).plugins].map(sM),o=await t.listMarketplaces(new xvi({
        
      }),i),a=await Promise.all(o.marketplaces.map(async u=>[...(await t.listMarketplacePlugins(new jtt({
        marketplaceId:u.id
      }),i)).plugins].map(sM))),l=new Map;
      for(const u of s)l.set(u.id,u);
      for(const u of a)for(const d of u)l.set(d.id,d);
      this.setCachedPlugins({
        allMarketplacePlugins:Array.from(l.values())
      },e)
    }
    catch{
      
    }
  }
  getPluginsCacheKey(){
    return this._getCurrentCacheKey()
  }
  setCachedPlugins(e, t){
    const i=t??this._getCurrentCacheKey(), s={
      ...this._cacheByContext.get(i)??{
        
      },...e.installedPlugins!==void 0&&{
        installedPlugins:e.installedPlugins
      },...e.importedExternalPlugins!==void 0&&{
        importedExternalPlugins:e.importedExternalPlugins
      },...e.installedCursorThirdPartyPlugins!==void 0&&{
        installedCursorThirdPartyPlugins:e.installedCursorThirdPartyPlugins
      },...e.allMarketplacePlugins!==void 0&&{
        allMarketplacePlugins:e.allMarketplacePlugins
      },...e.installedGitHubPlugins!==void 0&&{
        installedGitHubPlugins:e.installedGitHubPlugins
      },...e.loadedPlugins!==void 0&&{
        loadedPlugins:e.loadedPlugins
      },...e.projectPluginKeys!==void 0&&{
        projectPluginKeys:e.projectPluginKeys
      },...e.pluginComponentFiles!==void 0&&{
        pluginComponentFiles:e.pluginComponentFiles
      }
    };
    this._cacheByContext.set(i, s), i===this._getCurrentCacheKey()&&(this._pluginsCache.set(s, void 0, void 0), this._onDidPluginsCacheChange.fire())
  }
  deleteCachedPlugins(e){
    const t=e??this._getCurrentCacheKey();
    this._cacheByContext.delete(t), this._installedPluginsConsistencyByKey.delete(t), t===this._getCurrentCacheKey()&&(this._pluginsCache.set(void 0, void 0, void 0), this._onDidPluginsCacheChange.fire())
  }
  async _callWithTimeout(e, t, i){
    const r=performance.now(), s=await lW(X3(this._pluginsProvider), $mn, ()=>console.warn(`[PluginsProviderService] Timed out waiting for plugins provider after ${$mn}ms`));
    if(!s)return i;
    const o=performance.now()-r, a=$mn-o;
    if(a<=0){
      const d=`[PluginsProviderService] ${e} timed out after ${o.toFixed(1)}ms (waiting for provider)`;
      return Sw(new Error(d),{
        captureContext:{
          tags:{
            client_error_type:"plugins_provider_timeout"
          },extra:{
            methodName:e,elapsed:o.toFixed(1)
          },fingerprint:["plugins-provider-timeout",e]
        }
      }),console.warn(d),i
    }
    const l=await lW(t(s), a);
    if(l===void 0){
      const d=(performance.now()-r).toFixed(1),m=`[PluginsProviderService] ${e} timed out after ${d}ms`;
      return Sw(new Error(m),{
        captureContext:{
          tags:{
            client_error_type:"plugins_provider_timeout"
          },extra:{
            methodName:e,elapsed:d
          },fingerprint:["plugins-provider-timeout",e]
        }
      }),console.warn(m),i
    }
    const u=performance.now()-r;
    return u>1e3&&console.warn(`[PluginsProviderService] ${e} took ${u.toFixed(1)}ms`), l
  }
  async getPluginMcpServers(){
    return this._callWithTimeout("getPluginMcpServers", e=>e.getPluginMcpServers(), [])
  }
  async getPluginHooks(){
    return this._callWithTimeout("getPluginHooks", e=>e.getPluginHooks(), {
      hooks:[],errors:[]
    })
  }
  async getPluginCommands(){
    return this._callWithTimeout("getPluginCommands", e=>e.getPluginCommands(), [])
  }
  async getLoadedPluginsSummary(){
    return this._callWithTimeout("getLoadedPluginsSummary", e=>e.getLoadedPluginsSummary(), [])
  }
  async getPluginComponentFiles(){
    return this._callWithTimeout("getPluginComponentFiles", e=>e.getPluginComponentFiles(), [])
  }
  async getInstalledGitHubPlugins(){
    return this._callWithTimeout("getInstalledGitHubPlugins", e=>e.getInstalledGitHubPlugins(), [])
  }
  async addGitHubPlugin(e){
    return(await X3(this._pluginsProvider)).addGitHubPlugin(e)
  }
  async removeGitHubPlugin(e){
    return(await X3(this._pluginsProvider)).removeGitHubPlugin(e)
  }
  async removeLocalPlugin(e){
    return(await X3(this._pluginsProvider)).removeLocalPlugin(e)
  }
  async discoverMarketplacePlugins(e, t, i){
    return this._callWithTimeout("discoverMarketplacePlugins", r=>r.discoverMarketplacePlugins(e, t, i), [])
  }
  async parseGitHubRepoForPlugins({
    gitUrl:e, gitRef:t, signal:i, source:r
  }){
    const s=performance.now();
    let o=!1;
    const a=this._experimentService.checkFeatureGate("enable_local_3p_plugin_imports"), l={
      source:r,imported_locally:String(a)
    };
    this._metricsService.increment({
      stat:"marketplace.parseGitHubRepoForPlugins.count",tags:l
    });
    try{
      return a?await this.parseGitHubRepoForPluginsLocally(e,t):await(await this._cursorAuthenticationService.dashboardClient()).parseGitHubRepoForPlugins(new qiu({
        gitUrl:e,gitRef:t
      }),{
        headers:Kb(Wr()),signal:i
      })
    }
    catch(u){
      throw o=!0,this._metricsService.increment({
        stat:"marketplace.parseGitHubRepoForPlugins.error",tags:l
      }),SSe(u,{
        captureContext:{
          tags:{
            client_error_type:"marketplace_parse_github_repo_for_plugins_failed",...l
          },extra:{
            has_git_ref:String(t!==void 0&&t.length>0)
          },fingerprint:["marketplace-parse-github-repo-for-plugins",r]
        }
      }),u
    }
    finally{
      this._metricsService.distribution({
        stat:"marketplace.parseGitHubRepoForPlugins.duration",value:performance.now()-s,tags:{
          ...l,errored:String(o)
        }
      })
    }
  }
  async parseGitHubRepoForPluginsLocally(e, t){
    const i=await lW(X3(this._pluginsProvider), $mn, ()=>console.warn(`[PluginsProviderService] Timed out waiting for plugins provider after ${$mn}ms`));
    if(!i)throw new Error("Plugins provider not available");
    const r=await lW(i.parseGitHubRepoForPluginsLocally(e, t), oYg);
    if(r===void 0)throw new Error("Timed out while cloning or parsing the plugin repository");
    return new Hiu(r)
  }
  async installProjectPlugin(e){
    return(await X3(this._pluginsProvider)).installProjectPlugin(e)
  }
  async removeProjectPlugin(e){
    return(await X3(this._pluginsProvider)).removeProjectPlugin(e)
  }
  async getProjectPluginKeys(){
    return this._callWithTimeout("getProjectPluginKeys", e=>e.getProjectPluginKeys(), [])
  }
  async getEffectiveInstalledPlugins(e){
    return this._callWithTimeout("getEffectiveInstalledPlugins", t=>t.getEffectiveInstalledPlugins(e), [])
  }
  async getPluginsSnapshot(e){
    try{
      return await this._callWithTimeout("getPluginsSnapshot",t=>t.getPluginsSnapshot(e),void 0)
    }
    catch{
      return
    }
  }
  registerPluginsProvider(e){
    return this._pluginsProvider.set(e)
  }
  allowNextEmptyInstalledSnapshot(){
    const e=this._getCurrentCacheKey();
    this._allowEmptySnapshotByKey.add(e)
  }
  notifyPluginsChanged(){
    this._onDidPluginsChange.fire()
  }
  notifyPluginsChangedWithoutRefetch(){
    this._onDidPluginsChangeWithoutRefetch.fire()
  }
  notifyProviderReady(){
    this._onDidPluginsChange.fire()
  }
  applyPluginsSnapshot(e, t, i){
    const r=t??this._getCurrentCacheKey(), s=i?.consistency, o=i?.origin==="push"&&s==="replica"&&this._installedPluginsConsistencyByKey.get(r)==="primary", a=this._allowEmptySnapshotByKey.delete(r), l=e.projectPluginKeys, u=new Set(l), d=Pou(e.effectiveInstalledPlugins, u), m=this._cacheByContext.get(r);
    if(!a&&d.length===0&&e.loadedPluginsSummary.length>0&&(m?.installedPlugins?.length??0)>0){
      this.setCachedPlugins({
        importedExternalPlugins:e.importedExternalPlugins,installedCursorThirdPartyPlugins:e.installedCursorThirdPartyPlugins,installedGitHubPlugins:e.installedGitHubPlugins,loadedPlugins:e.loadedPluginsSummary,projectPluginKeys:l
      },r);
      return
    }
    const p={
      importedExternalPlugins:e.importedExternalPlugins,installedCursorThirdPartyPlugins:e.installedCursorThirdPartyPlugins,installedGitHubPlugins:e.installedGitHubPlugins,loadedPlugins:e.loadedPluginsSummary,projectPluginKeys:l
    };
    o||(p.installedPlugins=d), this.setCachedPlugins(p, r), !o&&s!==void 0&&this._installedPluginsConsistencyByKey.set(r, s)
  }
  async refreshPluginData(e){
    const[t, i, r, s]=await Promise.all([this.getInstalledGitHubPlugins(), this.getLoadedPluginsSummary(), this.getProjectPluginKeys(), this.getPluginComponentFiles()]);
    this.setCachedPlugins({
      installedGitHubPlugins:t,loadedPlugins:i,projectPluginKeys:r,pluginComponentFiles:s
    }, e)
  }
  async refreshInstalledPlugins(e){
    return this._refreshInstalledPluginsPendingUseReplica=this._refreshInstalledPluginsPendingUseReplica&&e.useReplica, this._refreshInstalledPluginsInFlight?(this._refreshInstalledPluginsQueued=!0, this._refreshInstalledPluginsInFlight):(this._refreshInstalledPluginsInFlight=(async()=>{
      do{
        this._refreshInstalledPluginsQueued=!1;
        const t=this._refreshInstalledPluginsPendingUseReplica;
        this._refreshInstalledPluginsPendingUseReplica=!0,await this._refreshInstalledPluginsInternal(t)
      }
      while(this._refreshInstalledPluginsQueued)
    })().finally(()=>{
      this._refreshInstalledPluginsInFlight=void 0,this._refreshInstalledPluginsQueued=!1,this._refreshInstalledPluginsPendingUseReplica=!0
    }), this._refreshInstalledPluginsInFlight)
  }
  async _refreshInstalledPluginsInternal(e){
    const t=this._getCurrentCacheKey();
    try{
      const i=await this.getPluginsSnapshot(e);
      if(i){
        this.applyPluginsSnapshot(i,t,{
          consistency:e?"replica":"primary",origin:"refresh"
        });
        return
      }
      const r=this._allowEmptySnapshotByKey.delete(t),[s]=await Promise.all([this.getEffectiveInstalledPlugins(e),this.refreshPluginData(t)]),o=this._cacheByContext.get(t),a=new Set(o?.projectPluginKeys??[]);
      let l=Pou(s,a);
      const u=o?.loadedPlugins?.length??0,d=o?.installedPlugins?.length??0;
      if(!r&&l.length===0&&u>0){
        const p=await this.getEffectiveInstalledPlugins(e);
        if(p.length>0&&(l=Pou(p,a)),l.length===0&&d>0)return
      }
      const m=o?.installedPlugins;
      if(m!==void 0&&m.length>0){
        const p=new Set(m.map(f=>f.plugin.id)),g=l.filter(f=>!p.has(f.plugin.id));
        g.length>0&&(this._logService.info(`[PluginsProviderService] Detected ${g.length} newly installed plugin(s): ${g.map(f=>f.plugin.displayName).join(", ")}`),this._onDidNewPluginsDetected.fire(g))
      }
      this.setCachedPlugins({
        installedPlugins:l
      },t),this._installedPluginsConsistencyByKey.set(t,e?"replica":"primary")
    }
    catch{
      this._cacheByContext.get(t)?.installedPlugins===void 0&&this.setCachedPlugins({
        installedPlugins:[]
      },t)
    }
  }
  async refreshMarketplacePlugins(e){
    const t=this._getCurrentCacheKey();
    try{
      const i=await $OA(e);
      this.setCachedPlugins({
        allMarketplacePlugins:i
      },t)
    }
    catch{
      
    }
  }
  async requestPluginsRefresh(){
    await(await X3(this._pluginsProvider)).requestRefresh()
  }
  upsertInstalledPluginInCache(e){
    const t=this._getCurrentCacheKey(), r=this._cacheByContext.get(t)?.installedPlugins??[], s=r.findIndex(o=>o.plugin.id===e.plugin.id);
    if(s!==-1){
      const o=new Set([...r[s].sources,...e.sources]);
      if(o.size===r[s].sources.length)return;
      const a=[...r];
      a[s]={
        ...r[s],sources:Array.from(o)
      },this.setCachedPlugins({
        installedPlugins:a
      },t);
      return
    }
    this.setCachedPlugins({
      installedPlugins:[...r,e]
    }, t)
  }
  removeInstalledPluginFromCache(e){
    const t=this._getCurrentCacheKey(), r=this._cacheByContext.get(t)?.installedPlugins;
    r&&this.setCachedPlugins({
      installedPlugins:r.filter(s=>s.plugin.id!==e)
    }, t)
  }
  removeInstalledPluginSourceFromCache(e, t){
    const i=this._getCurrentCacheKey(), s=this._cacheByContext.get(i)?.installedPlugins;
    if(!s)return;
    const o=s.flatMap(a=>{
      if(a.plugin.id!==e)return[a];
      const l=a.sources.filter(u=>u!==t);
      return l.length===0?[]:[{
        ...a,sources:l
      }
      ]
    });
    this.setCachedPlugins({
      installedPlugins:o
    }, i)
  }
}, Jba=__decorate([__param(0, wg), __param(1, Lr), __param(2, Cc), __param(3, Tl), __param(4, R1), __param(5, Rr)], Jba), Vi(uie, Jba, 1)
}
});
function qmn(n, e, t, i, r){
  const s=(...l)=>{
    n.updateComposerBubbleSetStore(e, t, u=>{
      u("toolFormerData","additionalData","composerData",...l)
    })
  }, o=()=>{
    const u=n.getComposerBubble(e, t)?.toolFormerData;
    if(u&&"additionalData"in u&&u.additionalData){
      const d=u.additionalData;
      if("composerData"in d&&d.composerData)return d.composerData;
      if("subagentComposerId"in d&&d.subagentComposerId){
        const m=n.getHandleIfLoaded?.(d.subagentComposerId);
        if(m)return m.data
      }
    }
    return K9({
      modelName:r??"composer-1",maxMode:!1
    }, i)
  };
  return new aYg(o, s)
}
var aYg, BAi=