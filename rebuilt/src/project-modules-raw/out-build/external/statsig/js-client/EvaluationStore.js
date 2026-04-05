// Module: out-build/external/statsig/js-client/EvaluationStore.js
// Offset: 26711091 (bundle byte offset)
// Size: 3546 bytes

Rtt(), tFg=class{
  constructor(n){
    this._sdkKey=n, this._rawValues=null, this._values=null, this._source="Uninitialized", this._lcut=0, this._receivedAt=0, this._bootstrapMetadata=null, this._warnings=new Set
  }
  reset(){
    this._values=null, this._rawValues=null, this._source="Loading", this._lcut=0, this._receivedAt=0, this._bootstrapMetadata=null
  }
  finalize(){
    this._values||(this._source="NoValues")
  }
  getValues(){
    return this._rawValues?bSt(this._rawValues, "has_updates", "EvaluationStoreValues"):null
  }
  setValues(n, e){
    if(!n)return!1;
    const t=bSt(n.data, "has_updates", "EvaluationResponse");
    return t==null?!1:(this._source=n.source, t?.has_updates!==!0||(this._rawValues=n.data, this._lcut=t.time, this._receivedAt=n.receivedAt, this._values=t, this._bootstrapMetadata=this._extractBootstrapMetadata(n.source, t), n.source&&t.user&&this._setWarningState(e, t), snu.setFlags(this._sdkKey, t.sdk_flags??{
      
    })), !0)
  }
  getWarnings(){
    if(this._warnings.size!==0)return Array.from(this._warnings)
  }
  getGate(n){
    return this._getDetailedStoreResult(this._values?.feature_gates, n)
  }
  getConfig(n){
    return this._getDetailedStoreResult(this._values?.dynamic_configs, n)
  }
  getConfigList(){
    return this._values?.dynamic_configs?Object.values(this._values.dynamic_configs).map(n=>n.name):[]
  }
  getLayer(n){
    return this._getDetailedStoreResult(this._values?.layer_configs, n)
  }
  getParamStore(n){
    return this._getDetailedStoreResult(this._values?.param_stores, n)
  }
  getSource(){
    return this._source
  }
  getExposureMapping(){
    return this._values?.exposures
  }
  _extractBootstrapMetadata(n, e){
    if(n!=="Bootstrap")return null;
    const t={
      
    };
    return e.user&&(t.user=e.user), e.sdkInfo&&(t.generatorSDKInfo=e.sdkInfo), t.lcut=e.time, t
  }
  _getDetailedStoreResult(n, e){
    let t=null;
    return n&&(t=n[e]?n[e]:n[Itt(e)]), {
      result:t,details:this._getDetails(t==null)
    }
  }
  _setWarningState(n, e){
    const t=TNe.get(this._sdkKey);
    if(n.customIDs?.stableID!==t&&(n.customIDs?.stableID||t)){
      this._warnings.add("StableIDMismatch");
      return
    }
    if("user"in e){
      const i=e.user,r={
        ...n,analyticsOnlyMetadata:void 0
      };
      nga(r),nga(i)
    }
  }
  getCurrentSourceDetails(){
    if(this._source==="Uninitialized"||this._source==="NoValues")return{
      reason:this._source
    };
    const n={
      reason:this._source,lcut:this._lcut,receivedAt:this._receivedAt
    };
    return this._warnings.size>0&&(n.warnings=Array.from(this._warnings)), n
  }
  _getDetails(n){
    const e=this.getCurrentSourceDetails();
    let t=e.reason;
    const i=e.warnings??[];
    this._source==="Bootstrap"&&i.length>0&&(t=t+i[0]), t!=="Uninitialized"&&t!=="NoValues"&&(t=`${t}:${n?"Unrecognized":"Recognized"}`);
    const r=this._source==="Bootstrap"?this._bootstrapMetadata??void 0:void 0;
    return r&&(e.bootstrapMetadata=r), {
      ...e,reason:t
    }
  }
}
}
});
function zMA(n, e){
  const t=bSt(e, "checksum", "DeltasEvaluationResponse");
  if(!t)return{
    hadBadDeltaChecksum:!0
  };
  const i=VMA(n, t), r=KMA(i), s=Ptu({
    feature_gates:r.feature_gates, dynamic_configs:r.dynamic_configs, layer_configs:r.layer_configs
  }, nFg);
  return s===t.checksumV2?JSON.stringify(r):{
    hadBadDeltaChecksum:!0, badChecksum:s, badMergedConfigs:r, badFullResponse:t.deltas_full_response
  }
}
function VMA(n, e){
  return{
    ...n, ...e, feature_gates:{
      ...n.feature_gates,...e.feature_gates
    }, layer_configs:{
      ...n.layer_configs,...e.layer_configs
    }, dynamic_configs:{
      ...n.dynamic_configs,...e.dynamic_configs
    }
  }
}
function KMA(n){
  const e=n;
  return pnu(n.deleted_gates, e.feature_gates), delete e.deleted_gates, pnu(n.deleted_configs, e.dynamic_configs), delete e.deleted_configs, pnu(n.deleted_layers, e.layer_configs), delete e.deleted_layers, e
}
function pnu(n, e){
  n?.forEach(t=>{
    delete e[t]
  })
}
var nFg, YMA=