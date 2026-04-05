// Module: out-build/vs/workbench/contrib/remote/browser/openBrowserUrlsService.js
// Offset: 33872480 (bundle byte offset)
// Size: 1607 bytes

yn(), rt(), hs(), Er(), Wt(), rf(), kr(), h$f(), Wf(), ss(), a7e(), Git(), BDa=xi("openBrowserUrlsService"), RDa=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.storageService=e, this.commandService=t, this.remoteAgentService=i, this.urlOpenToastService=r, this.editorService=s, this.browserViewStore=o, this._hasOpenedBrowser=!1, this._onDidChangeUrls=this._register(new Qe), this.onDidChangeUrls=this._onDidChangeUrls.event, this.autoOpenLocalhostUrls=this._register(hm(this.storageService, "autoOpenLocalhostUrls"))
  }
  getLatestUrl(){
    return this._latestUrl
  }
  isEmptyOrBlankUrl(e){
    if(!e)return!0;
    const t=e.trim().toLowerCase();
    return t===""||t==="about:blank"||t==="cursor://blank"
  }
  async setLatestUrl(e){
    const t=this.remoteAgentService.getConnection()?.remoteAuthority, i=!!t&&(t.startsWith("ssh-remote+")||t.includes("@ssh-remote+"));
    if(this.autoOpenLocalhostUrls.get()&&!this._hasOpenedBrowser&&!i){
      this.urlOpenToastService.showUrlOpenToast(e),this._hasOpenedBrowser=!0;
      const r=this.editorService.activeEditor;
      if(r instanceof e0){
        const s=this.browserViewStore.getView(r.browserId);
        if(s){
          const o=s.getURL();
          if(this.isEmptyOrBlankUrl(o)){
            s.navigate(e),this._latestUrl=e,this._onDidChangeUrls.fire(e);
            return
          }
        }
      }
      await this.commandService.executeCommand("workbench.action.openBrowserEditor",{
        url:e,preserveFocus:!0,trackingId:"open_browser_urls_service"
      })
    }
    this._latestUrl=e, this._onDidChangeUrls.fire(e)
  }
}, RDa=__decorate([__param(0, Hi), __param(1, fr), __param(2, Vp), __param(3, IDa), __param(4, yi), __param(5, BC)], RDa), Vi(BDa, RDa, 1)
}
}), PDa, H0u=