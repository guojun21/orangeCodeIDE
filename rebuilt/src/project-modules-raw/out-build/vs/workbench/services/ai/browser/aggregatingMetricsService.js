// Module: out-build/vs/workbench/services/ai/browser/aggregatingMetricsService.js
// Offset: 30182070 (bundle byte offset)
// Size: 3587 bytes

iu(), rt(), _r(), Er(), Wt(), Rl(), Wf(), eu(), W9(), Gkt=xi("aggregatingMetricsService"), $_a=class extends at{
  constructor(e, t, i){
    super(), this.productService=e, this.remoteAgentService=t, this.workbenchEnvironmentService=i, this._provider=void 0, this._privacyModeEnabled=!0, this._metricsConfig=void 0, this._metricsFifo=Array(1e3).fill(null), this._metricsFifoIndex=0, this._platform=Sze, this._arch=Cze;
    const r=this.productService.urlProtocol, s=this.productService.version;
    r==="cursor-dev"?this._channel="debug":s.includes("nightly")||s.includes("-pre")?this._channel="nightly":this._channel="stable", this._isBackgroundComposer=Q1e(this.workbenchEnvironmentService.remoteAuthority)!==void 0, bi.setInterval(()=>{
      if(!this._shouldStoreMetric())return;
      let o=!1;
      const a=this._metricsFifoIndex%1e3;
      for(let l=0;
      l<1e3;
      l++){
        const u=this._metricsFifo[(a+l)%1e3];
        if(u!=null&&this._provider)switch(o=!0,u.method){
          case"increment":this._provider.increment(u.name,u.value,u.tags);
          break;
          case"gauge":this._provider.gauge(u.name,u.value,u.tags);
          break;
          case"distribution":this._provider.distribution(u.name,u.value,u.tags);
          break
        }
      }
      o&&(this._metricsFifo=Array(1e3).fill(null),this._metricsFifoIndex=0)
    }, 3e4)
  }
  _shouldStoreMetric(){
    return this._metricsConfig?this._privacyModeEnabled?this._metricsConfig.enabledInPrivacyMode===!0:this._metricsConfig.enabledInNonPrivacyMode===!0:!0
  }
  _buildTags(e){
    const i=this.remoteAgentService.getConnection()?"remote":"local", r=e.tags;
    let s;
    if(Array.isArray(r)){
      s={
        
      };
      for(const o of r){
        const a=o.indexOf(":");
        a!==-1?s[o.substring(0,a)]=o.substring(a+1):s[o]=""
      }
    }
    else s={
      ...r||{
        
      }
    };
    return s.channel=this._channel, s.connection_type=i, s.is_background_composer=String(this._isBackgroundComposer), this._platform&&(s.platform=this._platform), this._arch&&(s.arch=this._arch), this._privacyModeEnabled!==void 0&&(s.privacy_mode=String(this._privacyModeEnabled)), s
  }
  increment(e){
    if(!this._shouldStoreMetric())return;
    const t=this._buildTags(e), i=e.value??1;
    this._provider?this._provider.increment(e.stat, i, t):(this._metricsFifo[this._metricsFifoIndex%1e3]={
      name:e.stat,value:i,tags:t,method:"increment"
    }, this._metricsFifoIndex++)
  }
  gauge(e){
    if(!this._shouldStoreMetric())return;
    const t=this._buildTags(e);
    this._provider?this._provider.gauge(e.stat, e.value, t):(this._metricsFifo[this._metricsFifoIndex%1e3]={
      name:e.stat,value:e.value,tags:t,method:"gauge"
    }, this._metricsFifoIndex++)
  }
  distribution(e){
    if(!this._shouldStoreMetric())return;
    const t=this._buildTags(e);
    this._provider?this._provider.distribution(e.stat, e.value, t):(this._metricsFifo[this._metricsFifoIndex%1e3]={
      name:e.stat,value:e.value,tags:t,method:"distribution"
    }, this._metricsFifoIndex++)
  }
  registerProvider(e){
    this._provider=e
  }
  unregisterProvider(){
    this._provider=void 0
  }
  setPrivacyMode(e){
    this._privacyModeEnabled=e
  }
  setMetricsConfig(e){
    this._metricsConfig=e
  }
}, $_a=__decorate([__param(0, za), __param(1, Vp), __param(2, Cc)], $_a), Vi(Gkt, $_a, 1)
}
});
function Bey(n){
  Jhu=n
}
function Rey(n){
  Ghu=n
}
function Pey(n){
  Whu=n
}
function TS(n, e, t, i, r, s){
  if(!(s?.useUiGate?Ghu:Jhu))return;
  const a=i instanceof Error?i:void 0, l={
    mcp_version:Whu, ...r
  };
  a&&(l.errorMessage=a.message, l.errorStack=a.stack);
  const u={
    mcpMeta:l
  };
  switch(e){
    case"error":n.error("mcp", t, a, u, Ypn);
    break;
    case"warn":n.warn("mcp", t, u, Ypn);
    break;
    case"info":n.info("mcp", t, u, Ypn);
    break;
    case"debug":n.debug("mcp", t, u, Ypn);
    break;
    default:{
      const d=e;
      n.info("mcp",t,u,Ypn);
      break
    }
  }
}
function Ewi(n, e, t){
  return(i, r, s, o)=>{
    s!==void 0?console[i](r, s):console[i](r), TS(n, i, r, s, {
      subkey:e,...o
    }, t)
  }
}
var Ypn, Jhu, Ghu, Whu, Wkt=