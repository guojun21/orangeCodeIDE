// Module: out-build/vs/workbench/services/experiment/browser/experimentService.js
// Offset: 26792477 (bundle byte offset)
// Size: 21253 bytes

Wt(), Er(), rt(), o2A(), $bi(), sFg(), kr(), eu(), Rl(), yn(), ySt(), fE(), si(), Av(), Tw(), Ntt(), rce(), iu(), Tl=xi("experimentService"), lga=class extends at{
  static{
    dye=this
  }
  static{
    this.FEATURE_FLAG_OVERRIDES_STORAGE_KEY="workbench.experiments.featureFlagOverrides"
  }
  static{
    this.FEATURE_FLAG_OVERRIDE_TTL_MS=1440*60*1e3
  }
  static{
    this.EXPERIMENT_OVERRIDES_STORAGE_KEY="workbench.experiments.experimentOverrides"
  }
  static{
    this.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY="workbench.experiments.dynamicConfigOverrides"
  }
  constructor(e, t, i, r, s, o, a){
    if(super(), this.storageService=e, this.environmentService=t, this.productService=i, this.metricsService=r, this.contextKeyService=s, this.clientNumericMetricsService=o, this.clientDebugLogService=a, this._statsig=null, this._initialized=!1, this._featureFlagOverrides=new Map, this._experimentOverrides=new Map, this._dynamicConfigOverrides=new Map, this._featureGateProperties=new Map, this._experimentParamProperties=new Map, this._dynamicConfigParamProperties=new Map, this._isCalculatingHash=!1, this._needsRecalculation=!1, this._onDidChangeGates=this._register(new Qe), this.onDidChangeGates=this._onDidChangeGates.event, this._constructionTime=performance.now(), this._dataAdapter=new fnu, this._isTestMode=!!this.environmentService.enableSmokeTestDriver, this._isTestMode){
      console.log("[ExperimentService] Test mode detected (enableSmokeTestDriver) - using default feature flags with overrides"),this._initialized=!0,this._loadTestFeatureFlags(),this._loadTestDynamicConfigs();
      return
    }
    this._canUseOverrides()&&this._loadOverridesFromStorage(), this._register(this.contextKeyService.onDidChangeContext(m=>{
      m.affectsSome(new Set([hL.key]))&&(this._canUseOverrides()&&this._featureFlagOverrides.size===0&&this._loadOverridesFromStorage(),this._onDidChangeGates.fire({
        
      }))
    }));
    const l=performance.now(), u=this._initFromCachedBootstrap(), d=performance.now();
    this.metricsService.distribution({
      stat:"experimentService.blocking_time",value:d-l,tags:{
        source:u?"cache":"network"
      }
    }), this.metricsService.distribution({
      stat:"experimentService.blocking_time_from_construction",value:d-this._constructionTime,tags:{
        source:u?"cache":"network"
      }
    }), this._register(this.onDidChangeGates(m=>{
      for(const[p,g]of this._featureGateProperties)(!m.changedGates||m.changedGates.has(p))&&g.change(this.checkFeatureGate(p));
      for(const[p,g]of this._experimentParamProperties){
        const[f,A]=p.split("::::");
        if(!m.changedExperiments||m.changedExperiments.has(f)){
          const w=this.getExperimentParam(f,A);
          g.change(w)
        }
      }
      for(const[p,g]of this._dynamicConfigParamProperties){
        const[f,A]=p.split("::::");
        if(!m.changedConfigs||m.changedConfigs.has(f)){
          const w=this.getDynamicConfigParam(f,A);
          g.change(w)
        }
      }
      (!m.changedGates||m.changedGates.size>0)&&this._recalculateGatesHash()
    })), this.clientNumericMetricsService.setExperimentService(this), this._syncGateToDebugLogService()
  }
  _syncGateToDebugLogService(){
    this.clientDebugLogService.setIssueTracesEnabled(this.checkFeatureGate("issue_traces_enabled")), this._register(this.onDidChangeGates(e=>{
      (!e.changedGates||e.changedGates.has("issue_traces_enabled"))&&this.clientDebugLogService.setIssueTracesEnabled(this.checkFeatureGate("issue_traces_enabled"))
    }))
  }
  _initFromCachedBootstrap(){
    const e=performance.now(), t=this.storageService.get(dye.STATSIG_BOOTSTRAP_STORAGE_KEY, -1);
    if(!t||t.length===0)return this.metricsService.increment({
      stat:"experimentService.bootstrap.source",tags:{
        source:"network_cache_miss"
      }
    }), !1;
    try{
      const i=JSON.parse(t),r=i&&i.user?i.user:{
        
      };
      this._hydrateStatsigClient(t,r,"cache"),this.metricsService.increment({
        stat:"experimentService.bootstrap.source",tags:{
          source:"cache"
        }
      });
      const s=performance.now();
      return this.metricsService.distribution({
        stat:"experimentService.cache_init_time",value:s-e
      }),!0
    }
    catch(i){
      return console.error("[ExperimentService] Error parsing cached bootstrap",i),this.metricsService.increment({
        stat:"experimentService.bootstrap.source",tags:{
          source:"network_cache_parse_error"
        }
      }),this.metricsService.increment({
        stat:"experimentService.cache_parse_error"
      }),!1
    }
  }
  _getUrlString(e){
    return typeof e=="string"?e:e instanceof Request?e.url:String(e)
  }
  _initializeStatsigClient(e, t){
    const i=performance.now();
    if(this._statsig)this._statsig.updateUserSync(e, {
      disableBackgroundCacheRefresh:!0
    });
    else{
      const s=this.productService.statsigLogEventProxyUrl,o=typeof s=="string"&&s.length>0;
      this._statsig=new bnu(this.productService.statsigClientKey??"",e,{
        dataAdapter:t,loggingEnabled:o?"always":"disabled",disableStorage:!0,logEventCompressionMode:Dtt.Forced,networkConfig:o?{
          api:s,networkOverrideFunc:(a,l)=>this._getUrlString(a).includes("/rgstr")?fetch(a,l):Promise.resolve(new Response(null,{
            status:204
          }))
        }
        :{
          preventAllNetworkTraffic:!0
        }
      }),this._statsig.initializeSync({
        disableBackgroundCacheRefresh:!0
      })
    }
    const r=performance.now();
    this.metricsService.distribution({
      stat:"experimentService.statsig_client_init_time",value:r-i
    })
  }
  checkFeatureGate(e, t){
    const i=this._featureFlagOverrides.get(e);
    if(this._canUseOverrides()&&i){
      if(this._isOverrideActive(i))return this.metricsService.increment({
        stat:"experimentService.override_gate_check",tags:{
          gate:e
        }
      }),i.value;
      console.log(`[ExperimentService] Feature flag override "${e}" expired during runtime, clearing`),this._featureFlagOverrides.delete(e),this._persistOverridesToStorage(),this._onDidChangeGates.fire({
        changedGates:new Set([e])
      })
    }
    return this._checkGateWithoutOverride(e, t)
  }
  _checkGateWithoutOverride(e, t){
    if(this._statsig)try{
      return this._statsig.checkGate(e,t)
    }
    catch{
      return this.metricsService.increment({
        stat:"experimentService.gate_check_error"
      }),uye[e]?.default??!1
    }
    else return this.metricsService.increment({
      stat:"experimentService.uninitialized_gate_check"
    }), uye[e]?.default??!1
  }
  _isOverrideActive(e){
    return e.expiresAt===null||e.expiresAt>Date.now()
  }
  getFeatureGateProperty(e){
    let t=this._featureGateProperties.get(e);
    return t||(t=this._register(new j_(this.checkFeatureGate(e))), this._featureGateProperties.set(e, t)), t
  }
  getExperimentParamProperty(e, t){
    const i=`${e}::::${String(t)}`;
    let r=this._experimentParamProperties.get(i);
    return r||(r=this._register(new j_(this.getExperimentParam(e, t))), this._experimentParamProperties.set(i, r)), r
  }
  getDynamicConfigParamProperty(e, t){
    const i=`${e}::::${String(t)}`;
    let r=this._dynamicConfigParamProperties.get(i);
    return r||(r=this._register(new j_(this.getDynamicConfigParam(e, t))), this._dynamicConfigParamProperties.set(i, r)), r
  }
  getExperiment(e){
    const t=performance.now();
    let i, r;
    if(this._canUseOverrides()&&this._experimentOverrides.has(e))i=this._experimentOverrides.get(e), r="override", this.metricsService.increment({
      stat:"experimentService.override_experiment_check",tags:{
        experiment:e
      }
    });
    else if(!this._statsig)i=A$e[e]?.fallbackValues??{
      
    }, r="default", this.metricsService.increment({
      stat:"experimentService.uninitialized_experiment_check"
    });
    else try{
      i=this._statsig.getExperiment(e).value,r="statsig"
    }
    catch{
      i=A$e[e]?.fallbackValues??{
        
      },r="error",this.metricsService.increment({
        stat:"experimentService.experiment_check_error"
      })
    }
    const s=performance.now();
    return this.metricsService.distribution({
      stat:"experimentService.experiment_check_time",value:s-t,tags:{
        source:r
      }
    }), i
  }
  getExperimentParam(e, t){
    return this.getExperiment(e)[t]
  }
  getExperimentGroup(e){
    if(!this._statsig)return null;
    try{
      return this._statsig.getExperiment(e).groupName??null
    }
    catch(t){
      return console.error(`[ExperimentService] Error getting experiment group for ${e}:`,t),null
    }
  }
  getDynamicConfig(e){
    const t=performance.now();
    let i, r;
    if(!mEe[e])throw new Error(`Dynamic config ${e} not found`);
    if(this._canUseOverrides()&&this._dynamicConfigOverrides.has(e))i=this._dynamicConfigOverrides.get(e), r="override", this.metricsService.increment({
      stat:"experimentService.override_config_check",tags:{
        config:e
      }
    });
    else if(!this._statsig)i=mEe[e]?.fallbackValues, r="default", this.metricsService.increment({
      stat:"experimentService.uninitialized_config_check"
    });
    else try{
      i=this._statsig.getDynamicConfig(e).value,r="statsig"
    }
    catch{
      i=mEe[e]?.fallbackValues,r="error",this.metricsService.increment({
        stat:"experimentService.config_check_error"
      })
    }
    const s=performance.now();
    return this.metricsService.distribution({
      stat:"experimentService.config_check_time",value:s-t,tags:{
        source:r
      }
    }), i
  }
  getDynamicConfigParam(e, t){
    return this.getDynamicConfig(e)[t]
  }
  setExperimentOverride(e, t){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot set experiment overrides in production builds for non-dev users");
      return
    }
    const i=this._experimentOverrides.has(e), r=i?this._experimentOverrides.get(e):void 0;
    this._experimentOverrides.set(e, t), this._persistOverridesToStorage(), (!i||JSON.stringify(r)!==JSON.stringify(t))&&this._onDidChangeGates.fire({
      changedExperiments:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.experiment_override_set",tags:{
        experiment:e
      }
    })
  }
  clearExperimentOverride(e){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot clear experiment overrides in production builds for non-dev users");
      return
    }
    this._experimentOverrides.has(e)&&(this._experimentOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
      changedExperiments:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.experiment_override_cleared",tags:{
        experiment:e
      }
    }))
  }
  getExperimentOverrides(){
    return new Map(this._experimentOverrides)
  }
  hasExperimentOverride(e){
    return this._experimentOverrides.has(e)
  }
  setDynamicConfigOverride(e, t){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot set dynamic config overrides in production builds for non-dev users");
      return
    }
    const i=this._dynamicConfigOverrides.has(e), r=i?this._dynamicConfigOverrides.get(e):void 0;
    this._dynamicConfigOverrides.set(e, t), this._persistOverridesToStorage(), (!i||JSON.stringify(r)!==JSON.stringify(t))&&this._onDidChangeGates.fire({
      changedConfigs:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.config_override_set",tags:{
        config:e
      }
    })
  }
  clearDynamicConfigOverride(e){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot clear dynamic config overrides in production builds for non-dev users");
      return
    }
    this._dynamicConfigOverrides.has(e)&&(this._dynamicConfigOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
      changedConfigs:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.config_override_cleared",tags:{
        config:e
      }
    }))
  }
  getDynamicConfigOverrides(){
    return new Map(this._dynamicConfigOverrides)
  }
  hasDynamicConfigOverride(e){
    return this._dynamicConfigOverrides.has(e)
  }
  isInitialized(){
    return this._initialized
  }
  static{
    this.STATSIG_BOOTSTRAP_STORAGE_KEY="workbench.experiments.statsigBootstrap"
  }
  async _persistBootstrap(e, t){
    try{
      this.storageService.store(dye.STATSIG_BOOTSTRAP_STORAGE_KEY,e,-1,1),await this.storageService.flush(),this.metricsService.increment({
        stat:"experimentService.persist_success",tags:{
          trigger:t
        }
      })
    }
    catch(i){
      console.error("[ExperimentService] Error persisting bootstrap",i),this.metricsService.increment({
        stat:"experimentService.persist_failure",tags:{
          trigger:t
        }
      })
    }
  }
  _hydrateStatsigClient(e, t, i){
    t.userAgent=bi.navigator.userAgent.trim(), this._initializeStatsigClient(t, this._dataAdapter), this._dataAdapter.setData(e), this._statsig?.updateUserSync(t, {
      disableBackgroundCacheRefresh:!0
    });
    const r=this._initialized;
    if(this._initialized=!0, !r){
      const s=performance.now();
      this.metricsService.distribution({
        stat:"experimentService.time_to_initialized_ms",value:s-this._constructionTime,tags:{
          source:i
        }
      })
    }
  }
  refreshStatsigConfig(e, t, i){
    this._persistBootstrap(e, i).catch(()=>{
      
    }), this._hydrateStatsigClient(e, t, "network"), this._onDidChangeGates.fire({
      
    })
  }
  setFeatureFlagOverride(e, t){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot set feature flag overrides in production builds for non-dev users");
      return
    }
    const i=this.hasFeatureFlagOverride(e), s=(i?this._featureFlagOverrides.get(e):void 0)?.value, o=Date.now()+dye.FEATURE_FLAG_OVERRIDE_TTL_MS;
    this._featureFlagOverrides.set(e, {
      value:t,expiresAt:o
    }), this._persistOverridesToStorage(), (!i||s!==t)&&this._onDidChangeGates.fire({
      changedGates:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.override_set",tags:{
        gate:e,value:String(t)
      }
    })
  }
  clearFeatureFlagOverride(e){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
      return
    }
    this._featureFlagOverrides.has(e)&&(this._featureFlagOverrides.delete(e), this._persistOverridesToStorage(), this._onDidChangeGates.fire({
      changedGates:new Set([e])
    }), this.metricsService.increment({
      stat:"experimentService.override_cleared",tags:{
        gate:e
      }
    }))
  }
  clearAllFeatureFlagOverrides(){
    if(!this._canUseOverrides()){
      console.warn("[ExperimentService] Cannot clear feature flag overrides in production builds for non-dev users");
      return
    }
    const e=new Set(this._featureFlagOverrides.keys());
    e.size>0&&(this._featureFlagOverrides.clear(), this.storageService.remove(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY, -1), this._onDidChangeGates.fire({
      changedGates:e
    }), this.metricsService.increment({
      stat:"experimentService.all_overrides_cleared",tags:{
        count:String(e.size)
      }
    }))
  }
  getFeatureFlagOverrides(){
    const e=new Map;
    for(const[t, i]of this._featureFlagOverrides)this._isOverrideActive(i)&&e.set(t, i.value);
    return e
  }
  hasFeatureFlagOverride(e){
    const t=this._featureFlagOverrides.get(e);
    return t!==void 0&&this._isOverrideActive(t)
  }
  getOverridesForHeader(){
    if(!this._canUseOverrides())return;
    const e=32768, t={
      
    }, i=this.getFeatureFlagOverrides();
    if(i.size>0&&(t.featureFlags=Object.fromEntries(i)), this._experimentOverrides.size>0){
      const o=Object.create(null);
      for(const[a,l]of this._experimentOverrides)typeof l=="object"&&l!==null&&!Array.isArray(l)&&(o[a]=l);
      Object.keys(o).length>0&&(t.experiments=o)
    }
    if(this._dynamicConfigOverrides.size>0){
      const o=Object.create(null);
      for(const[a,l]of this._dynamicConfigOverrides)typeof l=="object"&&l!==null&&!Array.isArray(l)&&(o[a]=l);
      Object.keys(o).length>0&&(t.dynamicConfigs=o)
    }
    if(!(t.featureFlags!==void 0||t.experiments!==void 0||t.dynamicConfigs!==void 0))return;
    const s=JSON.stringify(t);
    if(!(s.length>e))return s
  }
  _loadTestFeatureFlags(){
    const e=this.environmentService.testFeatureFlags;
    if(!e){
      console.log("[ExperimentService] No test feature flags provided - using all defaults");
      return
    }
    let t;
    try{
      const i=atob(e);
      t=JSON.parse(i)
    }
    catch(i){
      console.error("[ExperimentService] Failed to parse test feature flags JSON (expected base64-encoded JSON):",i);
      return
    }
    for(const[i, r]of Object.entries(t))typeof r=="boolean"?(this._featureFlagOverrides.set(i, {
      value:r,expiresAt:null
    }), console.log(`[ExperimentService] Test flag: ${i} = ${r}`)):console.warn(`[ExperimentService] Ignoring non-boolean test flag value for ${i}: ${r}`)
  }
  _loadTestDynamicConfigs(){
    const e=this.environmentService.testDynamicConfigs;
    if(e)try{
      const t=atob(e),i=JSON.parse(t);
      for(const[r,s]of Object.entries(i)){
        if(!(r in mEe)){
          console.warn(`[ExperimentService] Ignoring unknown dynamic config override "${r}"`);
          continue
        }
        const o=r,l=cFg[o].safeParse(s);
        if(!l.success){
          console.error(`[ExperimentService] Failed to parse dynamic config override for "${r}"`,l.error);
          continue
        }
        this.setDynamicConfigOverride(o,l.data)
      }
    }
    catch(t){
      console.error("[ExperimentService] Failed to parse test dynamic configs JSON:",t),console.error("[ExperimentService] JSON was:",e)
    }
  }
  _loadOverridesFromStorage(){
    try{
      const e=this.storageService.get(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY,-1);
      if(e){
        const t=JSON.parse(e);
        let i=0;
        for(const[r,s]of Object.entries(t))if(s!==null&&typeof s=="object"&&"value"in s&&"expiresAt"in s){
          const o=s;
          this._isOverrideActive(o)?this._featureFlagOverrides.set(r,o):(i++,console.log(`[ExperimentService] Feature flag override "${r}" expired, clearing`))
        }
        else typeof s=="boolean"?(i++,console.log(`[ExperimentService] Feature flag override "${r}" has no TTL, discarding`)):(i++,console.log(`[ExperimentService] Feature flag override "${r}" has invalid format, clearing`));
        i>0&&this._persistFeatureFlagOverridesToStorage(),this.metricsService.increment({
          stat:"experimentService.flag_overrides_loaded",tags:{
            count:String(this._featureFlagOverrides.size)
          }
        })
      }
    }
    catch(e){
      console.error("Failed to load feature flag overrides from storage:",e),this.metricsService.increment({
        stat:"experimentService.flag_overrides_load_error"
      })
    }
    try{
      const e=this.storageService.get(dye.EXPERIMENT_OVERRIDES_STORAGE_KEY,-1);
      if(e){
        const t=JSON.parse(e);
        this._experimentOverrides=new Map(Object.entries(t)),this.metricsService.increment({
          stat:"experimentService.experiment_overrides_loaded",tags:{
            count:String(this._experimentOverrides.size)
          }
        })
      }
    }
    catch(e){
      console.error("Failed to load experiment overrides from storage:",e),this.metricsService.increment({
        stat:"experimentService.experiment_overrides_load_error"
      })
    }
    try{
      const e=this.storageService.get(dye.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY,-1);
      if(e){
        const t=JSON.parse(e);
        this._dynamicConfigOverrides=new Map(Object.entries(t)),this.metricsService.increment({
          stat:"experimentService.config_overrides_loaded",tags:{
            count:String(this._dynamicConfigOverrides.size)
          }
        })
      }
    }
    catch(e){
      console.error("Failed to load dynamic config overrides from storage:",e),this.metricsService.increment({
        stat:"experimentService.config_overrides_load_error"
      })
    }
  }
  _canUseOverrides(){
    return this._isTestMode||!(this.environmentService.isBuilt&&!this.environmentService.isExtensionDevelopment)?!0:!!this.contextKeyService.getContextKeyValue(hL.key)
  }
  _persistFeatureFlagOverridesToStorage(){
    if(!this._isTestMode)try{
      const e={
        
      };
      for(const[t,i]of this._featureFlagOverrides)e[t]=i;
      this.storageService.store(dye.FEATURE_FLAG_OVERRIDES_STORAGE_KEY,JSON.stringify(e),-1,0),this.metricsService.increment({
        stat:"experimentService.flag_overrides_persisted",tags:{
          count:String(this._featureFlagOverrides.size)
        }
      })
    }
    catch(e){
      console.error("Failed to persist feature flag overrides to storage:",e),this.metricsService.increment({
        stat:"experimentService.flag_overrides_persist_error"
      })
    }
  }
  _persistOverridesToStorage(){
    if(!this._isTestMode){
      this._persistFeatureFlagOverridesToStorage();
      try{
        const e={
          
        };
        for(const[t,i]of this._experimentOverrides)e[t]=i;
        this.storageService.store(dye.EXPERIMENT_OVERRIDES_STORAGE_KEY,JSON.stringify(e),-1,0),this.metricsService.increment({
          stat:"experimentService.experiment_overrides_persisted",tags:{
            count:String(this._experimentOverrides.size)
          }
        })
      }
      catch(e){
        console.error("Failed to persist experiment overrides to storage:",e),this.metricsService.increment({
          stat:"experimentService.experiment_overrides_persist_error"
        })
      }
      try{
        const e={
          
        };
        for(const[t,i]of this._dynamicConfigOverrides)e[t]=i;
        this.storageService.store(dye.DYNAMIC_CONFIG_OVERRIDES_STORAGE_KEY,JSON.stringify(e),-1,0),this.metricsService.increment({
          stat:"experimentService.config_overrides_persisted",tags:{
            count:String(this._dynamicConfigOverrides.size)
          }
        })
      }
      catch(e){
        console.error("Failed to persist dynamic config overrides to storage:",e),this.metricsService.increment({
          stat:"experimentService.config_overrides_persist_error"
        })
      }
    }
  }
  _recalculateGatesHash(){
    this._isCalculatingHash?this._needsRecalculation=!0:(this._isCalculatingHash=!0, this._needsRecalculation=!1, this._calculateGatesHash().finally(()=>{
      this._isCalculatingHash=!1,this._needsRecalculation&&this._recalculateGatesHash()
    }))
  }
  async _calculateGatesHash(){
    const e=[];
    for(const a of Object.keys(uye))this.checkFeatureGate(a, {
      disableExposureLog:!0
    })&&e.push(a);
    e.sort();
    const t=e.join("|"), i=new TextEncoder, r=await crypto.subtle.digest("SHA-256", i.encode(t)), o=Array.from(new Uint8Array(r)).map(a=>a.toString(16).padStart(2, "0")).join("");
    this.clientNumericMetricsService.featureFlagHash=o.substring(0, 16), this.clientNumericMetricsService.featureFlagResolved=t
  }
}, lga=dye=__decorate([__param(0, Hi), __param(1, Cc), __param(2, za), __param(3, R1), __param(4, wi), __param(5, y$e), __param(6, tie)], lga), Vi(Tl, lga, 0, 1)
}
});
function l2A(n){
  for(let e=n.length-1;
  e>=0;
  e--)if(n[e].type===ul.HUMAN)return n.slice(e).map(t=>t.bubbleId);
  return[]
}
async function lFg(n, e, t, i, r){
  const s=o=>{
    const a=_(6058, null), l=_(6059, null), u=new cN({
      error:yc.CUSTOM,details:{
        title:a,detail:l,isRetryable:!1,shouldShowImmediateError:!0
      }
    });
    return new fA(`Failed to hydrate conversation checkpoint from ${o}`, j0.DataLoss, void 0, [u])
  };
  if(r===void 0){
    const o=new eO(n, t);
    let a;
    try{
      a=await o.getBubbleCheckpoint(i)
    }
    catch(l){
      throw e.error("composer","Error getting bubble checkpoint pointer from blob store",l instanceof Error?l:new Error(String(l)),{
        composerId:t,bubbleId:i
      }),s("blob store pointer")
    }
    if(a)try{
      const l=await o.getBlob(TC(),a);
      if(l)return vk.fromBinary(l)
    }
    catch(l){
      throw e.error("composer","Error hydrating conversation checkpoint from blob store",l instanceof Error?l:new Error(String(l)),{
        composerId:t,bubbleId:i,checkpointBlobId:a
      }),s("blob store")
    }
    return new vk
  }
  if(typeof r=="string")try{
    const o=r.startsWith("~")?Zj(r.slice(1)).buffer:Zne(r);
    return vk.fromBinary(o)
  }
  catch(o){
    throw e.error("composer", "Error hydrating conversation checkpoint from string", o instanceof Error?o:new Error(String(o)), {
      composerId:t,bubbleId:i,checkpointLength:r.length,format:r.startsWith("~")?"base64":"hex"
    }), s("string")
  }
  return r instanceof vk?r:(e.warn("composer", "Unexpected checkpoint type during hydration", {
    composerId:t, bubbleId:i, checkpointType:typeof r
  }), new vk)
}
var uFg, dFg, Mtt, Ftt, DNe, pEe, wSt=