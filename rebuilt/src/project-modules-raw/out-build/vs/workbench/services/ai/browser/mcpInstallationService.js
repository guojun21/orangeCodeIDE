// Module: out-build/vs/workbench/services/ai/browser/mcpInstallationService.js
// Offset: 30190594 (bundle byte offset)
// Size: 4591 bytes

Ql(), hs(), ns(), Er(), Wt(), _d(), Ud(), Tkt(), htu(), Mye(), f$e(), kr(), vE(), Wkt(), jCf=!1, G_a=xi("mcpInstallationService"), W_a=class{
  static{
    J_a=this
  }
  static{
    this.DISMISSED_SERVERS_KEY="mcp.dismissedServers"
  }
  constructor(e, t, i, r, s, o, a){
    if(this.mcpService=e, this.fileService=t, this.uriIdentityService=i, this.analyticsService=r, this.composerNotificationService=s, this.storageService=o, this._log=Ewi(a, "installation"), [this.proposedServer_reactive, this.setProposedServer]=lt(), [this.mcpSuccessNotification_reactive, this.setMCPSuccessNotification]=lt(), jCf){
      const l={
        name:"Notion",description:"Connect your Notion workspace to search, update, and trigger workflows across tools.",icon:"https://www.notion.so/images/notion-logo-block-main.svg",endpoint:"https://mcp.notion.com/mcp",isFeatured:!0
      };
      this.composerNotificationService.showNotification({
        type:_S.MCP,url:"https://www.notion.so/cursorai/Ryo-s-Journal-161da74ef045007ac1bf36660e08e4a4",mcpInfo:l
      })
    }
    Ss.registerCommand({
      id:"mcp.deeplinkInstall",handler:(l,u,d)=>{
        this.setProposedServer({
          name:u,server:d
        })
      }
    })
  }
  async installProposedServer(){
    const e=this.proposedServer_reactive();
    if(!e){
      this._log("error","[MCPInstallationService] No server to install");
      return
    }
    const t=await this.mcpService.getUserConfigFilePath();
    let i={
      mcpServers:{
        
      }
    };
    try{
      if(await this.fileService.exists(t)){
        const s=await this.fileService.readFile(t),o=JSON.parse(s.value.toString());
        o&&typeof o.mcpServers=="object"&&o.mcpServers!==null&&!Array.isArray(o.mcpServers)&&(i=o)
      }
      else{
        const s=this.uriIdentityService.extUri.dirname(t);
        await this.fileService.exists(s)||await this.fileService.createFolder(s)
      }
    }
    catch(r){
      this._log("error","[MCPInstallationService] Error reading config file",r)
    }
    i.mcpServers[e.name]=e.server;
    try{
      const r=JSON.stringify(i,null,2);
      await this.fileService.writeFile(t,Ms.fromString(r)),this.clearInstallation();
      const s=e.server.command;
      let o="";
      s&&s.startsWith("npx")?o=s.split(" ").slice(0,3).join(" "):s&&s.startsWith("uvx")&&(o=s.split(" ").slice(0,2).join(" ")),this.analyticsService.trackEvent("mcp.installed",{
        name:e.name,url:e.server.url,command:o,deeplink:!0
      })
    }
    catch(r){
      this._log("error",`[MCPInstallationService] Error writing to config file ${t.toString()}`,r)
    }
  }
  clearInstallation(){
    this.setProposedServer(void 0)
  }
  updateProposedServer(e){
    this.setProposedServer(e)
  }
  showMCPNotification(e, t){
    if(!this.isMCPServerDismissed(t.name)){
      try{
        if(t.name===Ekt){
          const i=Ekt.toLowerCase();
          if(this.mcpService.allServers().some(s=>s.command==="npx"&&Array.isArray(s.args)&&s.args.length>=2&&s.args[0]==="-y"&&(s.args[1]==="@playwright/mcp@latest"||s.args[1]?.startsWith("@playwright/mcp"))||s.name?.toLowerCase().includes(i)))return
        }
        else{
          const i=t.endpoint;
          if(i)try{
            const r=new URL(i),s=this.mcpService.allServers(),o=this.mcpService.statusCache(),a=s.find(l=>{
              if(!l.url)return!1;
              try{
                const u=new URL(l.url);
                return u.href===r.href||u.origin===r.origin
              }
              catch{
                return l.url===i
              }
            });
            if(a&&o[a.identifier]?.type!=="needsAuth")return
          }
          catch{
            
          }
        }
      }
      catch{
        
      }
      this.composerNotificationService.showNotification({
        type:_S.MCP,url:e,mcpInfo:t,priority:xNe.ACTION
      })
    }
  }
  clearMCPNotification(){
    this.composerNotificationService.clearNotification(_S.MCP)
  }
  getButtonLabelForMCPServer(e){
    return e.name===Ekt?"Enable":this.findMCPServerAuthUrl(e)?"Connect":"Add"
  }
  findMCPServerAuthUrl(e){
    const t=e.endpoint;
    if(t)try{
      const i=new URL(t),r=this.mcpService.allServers(),s=this.mcpService.statusCache();
      for(const o of r)if(o.url)try{
        const a=new URL(o.url);
        if(a.href===i.href||a.origin===i.origin){
          const u=s[o.identifier];
          if(u&&u.type==="needsAuth"&&u.authorizationUrl)return u.authorizationUrl
        }
      }
      catch{
        if(o.url===t){
          const a=s[o.identifier];
          if(a&&a.type==="needsAuth"&&a.authorizationUrl)return a.authorizationUrl
        }
      }
    }
    catch{
      
    }
  }
  showMCPSuccessNotification(e){
    this.setMCPSuccessNotification({
      serverName:e,message:"Done. Cursor can now see logs and view your browser."
    })
  }
  clearMCPSuccessNotification(){
    this.setMCPSuccessNotification(void 0)
  }
  getDismissedServers(){
    const e=this.storageService.get(J_a.DISMISSED_SERVERS_KEY, 0, "[]");
    try{
      const t=JSON.parse(e);
      return Array.isArray(t)?t.filter(i=>typeof i=="string"):[]
    }
    catch{
      return[]
    }
  }
  dismissMCPServer(e){
    const t=this.getDismissedServers();
    t.includes(e)||(t.push(e), this.storageService.store(J_a.DISMISSED_SERVERS_KEY, JSON.stringify(t), 0, 1))
  }
  isMCPServerDismissed(e){
    return this.getDismissedServers().includes(e)
  }
}, W_a=J_a=__decorate([__param(0, IU), __param(1, Gr), __param(2, xl), __param(3, uh), __param(4, g$e), __param(5, Hi), __param(6, Kk)], W_a), Vi(G_a, W_a, 1)
}
}), qey, Hey, zhu, VCf, KCf, YCf, ZCf=