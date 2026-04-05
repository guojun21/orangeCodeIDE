// Module: out-build/vs/workbench/services/ai/browser/debugServerService.js
// Offset: 27665339 (bundle byte offset)
// Size: 1225 bytes

rt(), Wt(), Er(), hs(), mD(), qp(), M4(), Js(), _s(), Tmn=xi("debugServerService"), hba=class extends at{
  constructor(e){
    super(), this._commandService=e
  }
  async getConfig(e, t){
    const i=new Error("Debug server failed to start"), r=AbortSignal.any([AbortSignal.timeout(6e4), t].filter(Ch)), s=await this._commandService.executeCommandWithAbortSignal("cursor.ndjsonIngest.start", r, e).catch(o=>{
      if(ynh(o))return"Extension Host failed to start in time";
      throw o
    });
    if(typeof s=="string"){
      const o=new cN({
        error:yc.CUSTOM_MESSAGE,details:{
          title:"Debug Server Failed to Start",detail:`${s}

Please check the [NDJSON port setting](command:workbench.action.openWorkspaceSettings?%5B%22ndjson.port%22%5D) and ensure:
- The port is not already in use by another service
- You have permission to use the port (try a port above 1024)`,allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown:!0,isRetryable:!0
        }
      }),a=new fA("Debug server failed to start",j0.FailedPrecondition);
      throw a.details.push(o),Sw(i,{
        fingerprint:["debug-server-failed-to-start"],extra:{
          result:s
        }
      }),a
    }
    if(s)return s
  }
}, hba=__decorate([__param(0, fr)], hba), Vi(Tmn, hba, 1)
}
}), cie, uGg, xme=