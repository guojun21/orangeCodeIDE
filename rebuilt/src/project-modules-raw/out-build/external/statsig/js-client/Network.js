// Module: out-build/external/statsig/js-client/Network.js
// Offset: 26714746 (bundle byte offset)
// Size: 2235 bytes

Rtt(), YMA(), sga=class extends z2g{
  constructor(n, e){
    super(n, e);
    const t=n?.networkConfig;
    this._option=n, this._initializeUrlConfig=new qtu(Cme._initialize, t?.initializeUrl, t?.api, t?.initializeFallbackUrls)
  }
  async fetchEvaluations(n, e, t, i, r){
    const s=e?bSt(e, "has_updates", "InitializeResponse"):null;
    let o={
      user:i,hash:this._option?.networkConfig?.initializeHashAlgorithm??"djb2",deltasResponseRequested:!1,full_checksum:null
    };
    if(s?.has_updates){
      const a=s?.hash_used!==(this._option?.networkConfig?.initializeHashAlgorithm??"djb2");
      o={
        ...o,sinceTime:r&&!a?s.time:0,previousDerivedFields:"derived_fields"in s&&r?s.derived_fields:{
          
        },deltasResponseRequested:!0,full_checksum:s.full_checksum,partialUserMatchSinceTime:a?0:s.time
      }
    }
    return this._fetchEvaluations(n, s, o, t)
  }
  async _fetchEvaluations(n, e, t, i){
    const r=await this.post({
      sdkKey:n,urlConfig:this._initializeUrlConfig,data:t,retries:2,isStatsigEncodable:!0,priority:i
    });
    if(r?.code===204)return'{"has_updates": false}';
    if(r?.code!==200)return r?.body??null;
    if(e?.has_updates!==!0||r.body?.includes('"is_delta":true')!==!0||t.deltasResponseRequested!==!0)return r.body;
    const s=zMA(e, r.body);
    return typeof s=="string"?s:this._fetchEvaluations(n, e, {
      ...t,...s,deltasResponseRequested:!1
    }, i)
  }
}
}
});
function oga(n){
  return n==null||n.disableExposureLog===!1
}
function gnu(n, e){
  return e!=null&&!QMg(n, e)
}
function ZMA(n, e){
  return n.value
}
function XMA(n, e, t){
  return n.getFeatureGate(e.gate_name, oga(t)?void 0:Qbi).value?e.pass_value:e.fail_value
}
function e2A(n, e, t, i){
  const s=n.getDynamicConfig(e.config_name, oga(i)?void 0:Qbi).get(e.param_name);
  return gnu(s, t)?t:s
}
function t2A(n, e, t, i){
  const s=n.getExperiment(e.experiment_name, oga(i)?void 0:Qbi).get(e.param_name);
  return gnu(s, t)?t:s
}
function n2A(n, e, t, i){
  const s=n.getLayer(e.layer_name, oga(i)?void 0:Qbi).get(e.param_name);
  return gnu(s, t)?t:s
}
function rFg(n, e, t){
  return(i, r)=>{
    if(e==null)return r;
    const s=e[i];
    if(s==null||r!=null&&WMg(r)!==s.param_type)return r;
    switch(s.ref_type){
      case"static":return ZMA(s,t);
      case"gate":return XMA(n,s,t);
      case"dynamic_config":return e2A(n,s,r,t);
      case"experiment":return t2A(n,s,r,t);
      case"layer":return n2A(n,s,r,t);
      default:return r
    }
  }
}
var Qbi, i2A=