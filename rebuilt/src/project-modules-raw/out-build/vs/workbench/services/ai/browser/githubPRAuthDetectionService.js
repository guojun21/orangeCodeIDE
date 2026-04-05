// Module: out-build/vs/workbench/services/ai/browser/githubPRAuthDetectionService.js
// Offset: 33789275 (bundle byte offset)
// Size: 919 bytes

fwe(), rt(), Er(), Wt(), f$e(), sB(), Mrt(), p0u=xi("githubPRAuthDetectionService"), KIa=class extends at{
  constructor(e, t, i){
    super(), this.gitContextService=e, this.githubPRService=t, this.composerNotificationService=i
  }
  async checkAndShowGitHubAuthNotification(e, t, i){
    try{
      if(await this.githubPRService.hasGitHubConnection())return;
      await this.gitContextService.waitForGitContextProvider();
      const s=await this.gitContextService.getGitUpstreamURL();
      if(!s)return;
      const o=y7e(s);
      if(!o)return;
      const a=`${t}/${i}`;
      if(o.toLowerCase()!==a.toLowerCase())return;
      this.composerNotificationService.showNotification({
        type:_S.GitHubAuth,prUrl:e,repository:a
      })
    }
    catch(r){
      console.error("[GitHubPRAuthDetectionService] Error checking GitHub auth:",r)
    }
  }
}, KIa=__decorate([__param(0, AE), __param(1, EX), __param(2, g$e)], KIa), Vi(p0u, KIa, 1)
}
}), amy, g0u, cmy, FUf, f0u=