// Module: out-build/vs/workbench/contrib/aiServerConfigService/browser/aiServerConfigService.js
// Offset: 26658832 (bundle byte offset)
// Size: 821 bytes

dr(), Wt(), nA(), Bc(), ru(), Vk=xi("aiServerConfigService"), Dt(class extends rn{
  constructor(){
    super({
      id:gtu.GetCachedServerConfig,title:{
        original:"Get Cached Server Config",value:"Get Cached Server Config"
      },f1:!1
    })
  }
  run(n){
    return n.get(Vk).cachedServerConfig
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"aiServerConfigService.forceRefresh",title:{
        original:"Force Refresh Server Config",value:"Force Refresh Server Config"
      },f1:!0,category:"Developer"
    })
  }
  run(n){
    const e=n.get(Ml), t=Wr();
    n.get(Vk).forceRefreshServerConfig({
      requestId:t,rethrow:!0
    }).then(()=>{
      e.info("Server config refreshed",`Request ID: ${t}`)
    }).catch(i=>{
      e.error("Failed to refresh server config",`Request ID: ${t}
Error: ${i.message}`)
    })
  }
})
}
}), Kk, vE=