// Module: out-build/vs/workbench/services/ai/browser/mcpWellKnownDetection.js
// Offset: 30198972 (bundle byte offset)
// Size: 4350 bytes

Wt(), Er(), zr(), zCf(), Ud(), oB(), XCf(), ZCf(), Mye(), Ime(), vE(), Wkt(), z_a=xi("mcpWellKnownDetectionService"), V_a=j_a=class{
  constructor(e, t, i, r, s){
    this.mcpInstallationService=e, this.analyticsService=t, this.instantiationService=i, this.pluginsProviderService=r, this.preResolvedIconDataUris=new Map, this._log=Ewi(s, "well_known_detection"), this.mcpRegistryBackendClient=this.instantiationService.createInstance(YS, {
      service:Q_a
    }), this.preResolveWellKnownIcons()
  }
  preResolveWellKnownIcons(){
    this.fetchKnownServersIconMap().then(async e=>{
      await Promise.allSettled(Array.from(e.entries()).map(async([t,i])=>{
        try{
          const r=await j_a.resolveIconToDataUri(i);
          this.preResolvedIconDataUris.set(t,r)
        }
        catch(r){
          this._log("warn",`[MCPWellKnownDetection] Failed to pre-resolve icon for server "${t}":`,r)
        }
      }))
    }).catch(e=>{
      this._log("warn","[MCPWellKnownDetection] Failed to fetch known servers for icon pre-resolution:",e)
    })
  }
  preResolveServerIcons(e){
    this.fetchKnownServersIconMap().then(async t=>{
      await Promise.allSettled(e.map(async i=>{
        if(!this.preResolvedIconDataUris.has(i.identifier.toLowerCase()))try{
          let r;
          if(i.pluginManaged&&i.pluginName&&(r=this.getPluginLogoUrl(i.pluginName)),r||(r=t.get(i.name.toLowerCase())),!r)return;
          const s=await j_a.resolveIconToDataUri(r);
          this.preResolvedIconDataUris.set(i.identifier.toLowerCase(),s),this.preResolvedIconDataUris.set(i.name.toLowerCase(),s)
        }
        catch(r){
          this._log("warn",`[MCPWellKnownDetection] Failed to pre-resolve icon for server "${i.identifier}":`,r,{
            identifier:i.identifier
          })
        }
      }))
    }).catch(t=>{
      this._log("warn","[MCPWellKnownDetection] Failed to pre-resolve server icons:",t)
    })
  }
  getPluginLogoUrl(e){
    const t=this.pluginsProviderService.pluginsCache.get();
    if(t?.installedPlugins){
      for(const i of t.installedPlugins)if(i.plugin.name===e)return i.plugin.publisher?.logoUrl??i.plugin.logoUrl
    }
  }
  static async resolveIconToDataUri(e){
    if(e.startsWith("data:"))return e;
    let t=e;
    e.startsWith("vs/")&&(t=og.asBrowserUri(e).toString(!0));
    const r=await(await fetch(t)).blob();
    return new Promise((s, o)=>{
      const a=new FileReader;
      a.onload=()=>s(a.result),a.onerror=()=>o(),a.readAsDataURL(r)
    })
  }
  getPreResolvedIconDataUri(e){
    return this.preResolvedIconDataUris.get(e.toLowerCase())
  }
  async fetchKnownServersIconMap(){
    return this.knownServersCache?this.knownServersCache:(this.knownServersFetchPromise||(this.knownServersFetchPromise=(async()=>{
      try{
        const t=await(await this.mcpRegistryBackendClient.get()).getKnownServers({
          
        }),i=new Map;
        for(const r of t.servers){
          const s=r.info;
          s?.name&&s.icon&&i.set(s.name.toLowerCase(),s.icon)
        }
        return this.knownServersCache=i,i
      }
      catch(e){
        throw this.knownServersFetchPromise=void 0,e
      }
    })()), this.knownServersFetchPromise)
  }
  async findMatchingMCPServer(e){
    const i=await(await this.mcpRegistryBackendClient.get()).getKnownServers({
      
    }), s=new URL(e).hostname;
    for(const o of i.servers)if(o.domains.some(a=>s.includes(a)))return o.info
  }
  async checkUrlAndSuggestInstallation(e){
    try{
      const t=await this.findMatchingMCPServer(e);
      if(!t)return;
      this.analyticsService.trackEvent("mcp.discovery.found",{
        serverName:t.name
      }),this.mcpInstallationService.showMCPNotification(e,t)
    }
    catch{
      
    }
  }
  async getPlaywrightServer(){
    try{
      return new zhu({
        name:Ekt,description:"Let Cursor see logs and view your app with Playwright MCP",icon:"vs/workbench/services/ai/browser/media/playwright.svg",endpoint:"",isFeatured:!1
      })
    }
    catch{
      return
    }
  }
  async getIconForServer(e){
    try{
      return(await this.fetchKnownServersIconMap()).get(e.toLowerCase())
    }
    catch{
      return
    }
  }
}, V_a=j_a=__decorate([__param(0, G_a), __param(1, uh), __param(2, ln), __param(3, uie), __param(4, Kk)], V_a), Vi(z_a, V_a, 1)
}
});
async function Vhu(n, e, t, i){
  const r=performance.now();
  try{
    const s=await i(), o=performance.now()-r;
    return n.setAttribute("mcp.ipc.duration_ms", String(o)), n.setAttribute("mcp.ipc.outcome", "success"), t.distribution({
      stat:"mcp.ipc.duration_ms",value:o,tags:{
        name:e,outcome:"success"
      }
    }), t.increment({
      stat:"mcp.ipc.count",tags:{
        name:e,outcome:"success"
      }
    }), s
  }
  catch(s){
    const o=performance.now()-r;
    throw n.setAttribute("mcp.ipc.duration_ms", String(o)), n.setAttribute("mcp.ipc.outcome", "error"), t.distribution({
      stat:"mcp.ipc.duration_ms",value:o,tags:{
        name:e,outcome:"error"
      }
    }), t.increment({
      stat:"mcp.ipc.count",tags:{
        name:e,outcome:"error"
      }
    }), s
  }
}
var gqe, xwi, $d, Lce, F1, tSf, Khu, Yhu, Zhu, Xhu, nSf, Twi, emu, iSf, K_a, Iie=