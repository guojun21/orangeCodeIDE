// Module: out-build/vs/workbench/services/modelConfig/browser/modelConfigService.js
// Offset: 26822090 (bundle byte offset)
// Size: 18969 bytes

Od(), rt(), Er(), Wt(), Dd(), nA(), vE(), gT(), Ti(), gEe=[{
  name:"default", defaultOn:!0, supportsAgent:!0, supportsMaxMode:!0, supportsNonMaxMode:!0, supportsThinking:!1, supportsImages:!0, parameterDefinitions:[], variants:[], legacySlugs:[]
}
], ix=xi("modelConfigService"), uga=class extends at{
  constructor(e, t){
    super(), this.reactiveStorageService=e, this.structuredLogService=t, this._isMigrating=!1
  }
  getDefaultModelForFeature(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs;
    let i;
    switch(e){
      case"composer":i=t?.composer;
      break;
      case"cmd-k":i=t?.cmdK;
      break;
      case"background-composer":i=t?.backgroundComposer;
      break;
      case"plan-execution":i=t?.planExecution;
      break;
      case"spec":i=t?.spec;
      break;
      case"deep-search":i=t?.deepSearch;
      break;
      case"quick-agent":i=t?.quickAgent;
      break;
      default:i=void 0
    }
    return i?.defaultModel?i.defaultModel:"default"
  }
  shouldAllowMultiModel(e, t, i){
    if(e==="background-composer"||e==="composer-ensemble"||(t.selectedModels?.length??0)>1||(t.modelName?.includes(",")??!1))return!0;
    const o=!!(i.modelName?.includes(",")||i.selectedModels&&i.selectedModels.length>1), a=t.modelName===void 0&&t.selectedModels===void 0;
    return!!(o&&a)
  }
  resolveToCatalogName(e, t){
    return sc(()=>{
      for(const i of t)if(i.name===e||i.legacySlugs?.includes(e))return i.name;
      return e
    })
  }
  migrateVisibilityArrayToCatalog(e, t){
    const i=new Set, r=[];
    for(const s of e){
      const o=this.resolveToCatalogName(s,t);
      i.has(o)||(i.add(o),r.push(o))
    }
    return r
  }
  migrateModelSettingsToCurrentCatalog(){
    const e=this.reactiveStorageService.applicationUserPersistentStorage, t=e.aiSettings, i=this.getAvailableDefaultModels();
    if(i.length===0)return;
    const r=t.modelOverrideEnabled??[], s=t.modelOverrideDisabled??[], o=this.migrateVisibilityArrayToCatalog(r, i), a=this.migrateVisibilityArrayToCatalog(s, i), l=r.length!==o.length||!r.every((d, m)=>d===o[m]), u=s.length!==a.length||!s.every((d, m)=>d===a[m]);
    l&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", o), u&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", a), (l||u)&&(this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelVisibilityMigrated", !0), this.structuredLogService.info("composer", "Migrated model visibility to current catalog", {
      subkey:"model_visibility_catalog_migration",useModelParameters:String(e.useModelParameters===!0),enabledBeforeCount:String(r.length),enabledAfterCount:String(o.length),disabledBeforeCount:String(s.length),disabledAfterCount:String(a.length)
    }));
    for(const d of whn){
      const m=t.modelConfig[d];
      if(!m)continue;
      let p=!1;
      if(m.modelName){
        const A=m.modelName.split(",").map(w=>w.trim()).filter(w=>w.length>0).map(w=>this.resolveToCatalogName(w,i)).join(",");
        A!==m.modelName&&(this.structuredLogService.info("composer","Migrated modelConfig modelName to current catalog",{
          subkey:"model_config_modelname_catalog_migration",surface:d,before:m.modelName,after:A
        }),this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelConfig",d,{
          ...m,modelName:A
        }),p=!0)
      }
      if(m.selectedModels&&m.selectedModels.length>0&&!p){
        let g=!1;
        const f=m.selectedModels.map(A=>{
          const w=this.resolveToCatalogName(A.modelId,i);
          return w!==A.modelId?(g=!0,{
            ...A,modelId:w
          }):A
        });
        g&&(this.structuredLogService.info("composer","Migrated modelConfig selectedModels to current catalog",{
          subkey:"model_config_selectedmodels_catalog_migration",surface:d,before:m.selectedModels.map(A=>A.modelId).join(","),after:f.map(A=>A.modelId).join(",")
        }),this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelConfig",d,{
          ...m,selectedModels:f
        }))
      }
    }
  }
  migrateParameterizedModelConfigIfNecessary(){
    const e=this.reactiveStorageService.applicationUserPersistentStorage;
    if(!(e.useModelParameters===!0))return;
    const i=[];
    for(const s of whn){
      const o=e.aiSettings.modelConfig[s];
      o?.modelName&&(o.selectedModels?.length??0)===0&&i.push(s)
    }
    if(i.length===0){
      this.migrateModelSettingsToCurrentCatalog();
      return
    }
    const r=this.getAvailableDefaultModels();
    if(r.length===0){
      this.migrateModelSettingsToCurrentCatalog();
      return
    }
    this._isMigrating=!0;
    try{
      for(const s of i){
        const o=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[s];
        if(!o?.modelName||(o.selectedModels?.length??0)>0)continue;
        const l=this.normalizeModelList(o.modelName).map(u=>({
          modelId:this.resolveToCatalogName(u,r),parameters:[]
        }));
        o.modelName&&l.length===0?this.structuredLogService.warn("composer","Model config migration produced no selected models",{
          subkey:"model_config_migration_empty_selected_models",sourceModelName:o.modelName
        }):this.structuredLogService.info("composer","Migrated modelName to selectedModels",{
          subkey:"model_config_parameterized_migration",surface:s,sourceModelName:o.modelName,selectedModelIds:l.map(u=>u.modelId).join(",")
        }),this.setModelConfig(s,{
          selectedModels:l
        })
      }
      this.migrateModelSettingsToCurrentCatalog()
    }
    finally{
      this._isMigrating=!1
    }
  }
  triggerParameterizedModelConfigMigration(){
    this.migrateParameterizedModelConfigIfNecessary()
  }
  getModelConfig(e){
    this._isMigrating||sc(()=>this.migrateParameterizedModelConfigIfNecessary());
    let t=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[e];
    t||(t={
      modelName:this.getDefaultModelForFeature(e),maxMode:e==="background-composer"
    });
    const i={
      ...t
    };
    if(i.modelName){
      const r=sc(()=>{
        const s=this.getAvailableDefaultModels();
        return s.length===0?i.modelName:i.modelName.split(",").map(l=>l.trim()).filter(l=>l.length>0).map(l=>this.resolveToCatalogName(l,s)).join(",")
      });
      i.modelName=r
    }
    if(e==="plan-execution"){
      const r=this.getModelConfig("composer");
      i.maxMode=r.maxMode
    }
    return i
  }
  applyInvariants(e, t, i, r){
    const s={
      ...e,...t
    };
    if(t.selectedModels!==void 0&&(t.selectedModels.length>0?s.modelName=t.selectedModels.map(o=>o.modelId).join(","):(this.structuredLogService.warn("composer", "Model config reset to default due to empty selectedModels", {
      subkey:"model_config_empty_selected_models_reset",surface:i,previousModelName:e.modelName,hasIncomingModelName:String(t.modelName!==void 0)
    }), s.modelName="default", s.selectedModels=void 0)), t.modelName!==void 0&&t.selectedModels===void 0&&(s.selectedModels=void 0), !r.allowMultiModel){
      if(s.modelName&&s.modelName.includes(",")){
        const o=s.modelName.split(",")[0]?.trim();
        o||this.structuredLogService.warn("composer","Model config fell back to default while truncating multi-model string",{
          subkey:"model_config_multi_model_truncate_empty_first_model",surface:i,originalModelName:s.modelName
        }),s.modelName=o||"default"
      }
      s.selectedModels&&s.selectedModels.length>1&&(s.selectedModels=[s.selectedModels[0]])
    }
    if(i==="background-composer")return s.maxMode=!0, s;
    if(s.modelName&&s.modelName.includes(","))return s;
    if(t.maxMode===!0&&!this.doesModelSupportMaxMode(s.modelName)&&(s.modelName=this.firstAvailableMaxModel()??s.modelName), t.maxMode===!1&&!this.doesModelSupportNonMaxMode(s.modelName)&&(s.modelName=this.firstAvailableNonMaxModel()??s.modelName), t.modelName!==void 0&&(this.doesModelSupportMaxMode(t.modelName)||(s.maxMode=!1), this.doesModelSupportNonMaxMode(t.modelName)||(s.maxMode=!0)), t.maxMode===!1&&s.selectedModels){
      const o=s.selectedModels.map(a=>{
        const l=this.getAvailableDefaultModels().find(m=>m.name===a.modelId);
        if(!l||!l.variants||l.variants.length===0)return a;
        const u=wae(a.parameters??[]),d=itl(l,u,!1);
        return d&&!d.maxMode?{
          modelId:a.modelId,parameters:d.parameters.map(m=>({
            id:m.id,value:m.value
          }))
        }
        :a
      });
      s.selectedModels=o
    }
    return s
  }
  autoEnableSelectedModels(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, i=t.modelOverrideDisabled??[], r=t.modelOverrideEnabled??[], s=this.getAvailableDefaultModels();
    for(const o of e){
      const a=o.modelId;
      if(a==="default")continue;
      const l=i.includes(a),m=!(s.find(p=>p.name===a)?.defaultOn??!0)&&!r.includes(a);
      (l||m)&&(l&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideDisabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(p=>p!==a)),r.includes(a)||this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideEnabled",[...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled??[],a]))
    }
  }
  setModelConfig(e, t){
    if(e==="composer"&&(t.modelName?.includes(",")||(t.selectedModels?.length??0)>1)){
      this.structuredLogService.warn("composer","Dropped global composer model config write with multi-model name",{
        subkey:"model_config_drop_composer_multi_model_write",modelName:t.modelName,selectedModelsCount:String(t.selectedModels?.length??0)
      });
      return
    }
    let i=t;
    if(e==="plan-execution"&&t.maxMode!==void 0){
      this.setModelConfig("composer",{
        maxMode:t.maxMode
      });
      const{
        maxMode:a,...l
      }
      =t;
      i=l
    }
    i.maxMode===!1&&this.clearAllMaxModeRequiredPreferences();
    const r=this.getModelConfig(e), s=this.shouldAllowMultiModel(e, i, r), o=this.applyInvariants(r, i, e, {
      allowMultiModel:s
    });
    if(t.modelName!==void 0){
      if(t.modelName==="default"&&r.modelName!=="default"){
        const a=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault||{
          
        };
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","previousModelBeforeDefault",{
          ...a,[e]:r.modelName
        })
      }
      else if(r.modelName==="default"&&t.modelName!=="default"){
        const l={
          ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault||{
            
          }
        };
        delete l[e],this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","previousModelBeforeDefault",l)
      }
    }
    t.selectedModels&&t.selectedModels.length>0&&!this._isMigrating&&this.autoEnableSelectedModels(t.selectedModels), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", e, o)
  }
  setModelConfigForComposer(e, t, i){
    const r=e.data.modelConfig, s=this.applyInvariants(r, t, "composer", {
      allowMultiModel:!0
    });
    let o;
    if(i)o=i;
    else{
      const a=e.data.unifiedMode,l=(s.selectedModels?.length??0)>1||(s.modelName?.includes(",")??!1);
      o=a==="background"?"background-composer":l?"composer-ensemble":"composer"
    }
    o!=="background-composer"&&e.setData("modelConfig", s), this.setModelConfig(o, t)
  }
  setMaxMode(e, t){
    if(t==="plan-execution"){
      this.setModelConfig("composer",{
        maxMode:e
      });
      return
    }
    this.setModelConfig(t, {
      maxMode:e
    })
  }
  setSpecificModel(e, t){
    this.setModelConfig(e, {
      modelName:t
    })
  }
  getSpecificModel(e){
    return this.getModelConfig(e).modelName
  }
  getPreviousNonDefaultModel(e){
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault?.[e]
  }
  getMaxMode(e){
    return this.getModelConfig(e).maxMode
  }
  normalizeModelList(e){
    return e?e.split(",").map(t=>t.trim()).filter(t=>t.length>0):[]
  }
  doesModelSupportMaxMode(e){
    const t=this.normalizeModelList(e);
    if(t.length===0)return!1;
    if(t.length>1)return t.every(l=>this.doesModelSupportMaxMode(l));
    const i=t[0], r=this.getAvailableDefaultModels(), s=[...gEe], o=r.find(l=>l.name===i), a=s.find(l=>l.name===i);
    return o!==void 0&&o.supportsMaxMode!==void 0?o.supportsMaxMode:a?.supportsMaxMode??!1
  }
  doesModelSupportNonMaxMode(e){
    const t=this.normalizeModelList(e);
    if(t.length===0)return!0;
    if(t.length>1)return t.every(l=>this.doesModelSupportNonMaxMode(l));
    const i=t[0];
    if(i==="default")return!0;
    const r=this.getAvailableDefaultModels(), s=[...gEe], o=r.find(l=>l.name===i), a=s.find(l=>l.name===i);
    return o!==void 0&&o.supportsNonMaxMode!==void 0?o.supportsNonMaxMode:a?.supportsNonMaxMode??!0
  }
  getAvailableDefaultModels(){
    const e=this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2??[];
    return e.length===0?[...gEe]:e
  }
  resolveModelNameToCatalog(e){
    const t=this.getAvailableDefaultModels();
    return t.length===0?e:this.resolveToCatalogName(e, t)
  }
  fixupModelConfigForCurrentFlag(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.useModelParameters;
    if(t===void 0)return e;
    const i=t===!0, r=this.getAvailableDefaultModels();
    if(r.length===0)return e;
    if(!i){
      if(!e.selectedModels||e.selectedModels.length===0)return e;
      const s=e.modelName?e.modelName.split(",").map(o=>o.trim()).filter(o=>o.length>0).map(o=>this.resolveToCatalogName(o,r)).join(","):e.selectedModels.map(o=>this.resolveToCatalogName(o.modelId,r)).join(",");
      return this.structuredLogService.info("composer","fixupModelConfig: clearing selectedModels (flag off)",{
        subkey:"model_config_fixup_clear_selected",useModelParameters:String(i),beforeModelName:e.modelName??"",afterModelName:s,clearedSelectedModelIds:e.selectedModels.map(o=>o.modelId).join(",")
      }),{
        ...e,modelName:s,selectedModels:void 0
      }
    }
    if(e.modelName&&(!e.selectedModels||e.selectedModels.length===0)){
      const o=e.modelName.split(",").map(a=>a.trim()).filter(a=>a.length>0).map(a=>({
        modelId:this.resolveToCatalogName(a,r),parameters:[]
      }));
      return this.structuredLogService.info("composer","fixupModelConfig: populating selectedModels from modelName (flag on)",{
        subkey:"model_config_fixup_populate_selected",useModelParameters:String(i),sourceModelName:e.modelName,resolvedSelectedModelIds:o.map(a=>a.modelId).join(",")
      }),{
        ...e,selectedModels:o
      }
    }
    return e
  }
  firstAvailableMaxModel(){
    return this.getAvailableDefaultModels().find(t=>t.supportsMaxMode)?.name
  }
  firstAvailableNonMaxModel(){
    return this.getAvailableDefaultModels().find(t=>t.supportsNonMaxMode)?.name
  }
  doesModelSupportAgent(e){
    if(e==="default")return!0;
    const t=e.toLowerCase().includes("claude-3"), i=e.toLowerCase().includes("gpt-4o")&&!e.toLowerCase().includes("mini"), r=e.toLowerCase().includes("o3-mini"), s=e.toLowerCase().includes("grok-3");
    if(t||i||r||s)return!0;
    const o=this.getAvailableDefaultModels(), a=[...gEe], l=o.find(d=>d.name===e), u=a.find(d=>d.name===e);
    return l!==void 0&&l.supportsAgent!==void 0?l.supportsAgent:u?.supportsAgent??!0
  }
  doesModelSupportThinking(e){
    if(e==="default")return!1;
    const t=this.getAvailableDefaultModels(), i=[...gEe], r=t.find(o=>o.name===e), s=i.find(o=>o.name===e);
    return r!==void 0&&r.supportsThinking!==void 0?r.supportsThinking:s?.supportsThinking??!1
  }
  doesModelSupportImages(e){
    if(e==="default")return!0;
    const t=this.getAvailableDefaultModels(), i=[...gEe], r=t.find(o=>o.name===e), s=i.find(o=>o.name===e);
    return r!==void 0&&r.supportsImages!==void 0?r.supportsImages:s?.supportsImages??!0
  }
  getServerModelName(e){
    if(e==="default")return e;
    const t=this.resolveModelNameToCatalog(e), i=this.getAvailableDefaultModels(), r=[...gEe], s=i.find(a=>a.name===t), o=r.find(a=>a.name===t);
    return s!==void 0&&s.serverModelName!==void 0?s.serverModelName:o?.serverModelName??t
  }
  getSelectedModels(e){
    const t=this.getModelConfig(e);
    return this.deriveSelectedModels(t)
  }
  getSelectedModelsForComposer(e){
    const t=e.data.modelConfig;
    return this.deriveSelectedModels(t)
  }
  deriveSelectedModels(e){
    return e.selectedModels&&e.selectedModels.length>0?e.selectedModels:this.normalizeModelList(e.modelName).map(i=>({
      modelId:i,parameters:[]
    }))
  }
  getModelParameterPreferences(e){
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences?.[e]
  }
  setModelParameterPreferences(e, t){
    const i=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences??{
      
    }, r={
      modelId:e,parameters:t,updatedAt:new Date().toISOString()
    };
    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", {
      ...i,[e]:r
    })
  }
  clearModelParameterPreferences(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences;
    if(!t||!t[e])return;
    const i={
      
    };
    for(const r of Object.keys(t))r!==e&&(i[r]=t[r]);
    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", _fh(i))
  }
  getAllModelParameterPreferences(){
    return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences??{
      
    }
  }
  resolveModelParametersForSubmission(e, t, i){
    if(t&&t.length>0)return t;
    const r=this.getAvailableDefaultModels().find(a=>a.name===e);
    if(!r||!r.parameterDefinitions||r.parameterDefinitions.length===0)return[];
    const s=this.getModelParameterPreferences(e)?.parameters;
    return s&&s.length>0?s:Ahe(r, i)?.parameterValues??[]
  }
  doesModelPreferencesRequireMaxMode(e){
    const t=this.getModelParameterPreferences(e);
    if(!t||t.parameters.length===0)return!1;
    const i=this.getAvailableDefaultModels().find(o=>o.name===e);
    if(!i||!i.variants||i.variants.length===0)return!1;
    const r=new Map(t.parameters.map(o=>[o.id, o.value]));
    return i.variants.find(o=>o.parameterValues.every(a=>r.get(a.id)===a.value))?.isMaxMode??!1
  }
  cycleHotkeyParameter(e, t){
    const i=t?this.getSelectedModelsForComposer(t):this.getSelectedModels(e);
    if(i.length===0)return;
    const r=this.getAvailableDefaultModels();
    let s;
    const o=i.map(a=>{
      const l=r.find(f=>f.name===a.modelId);
      if(!l||!l.parameterDefinitions)return a;
      const u=l.parameterDefinitions.find(f=>f.isCycleableByHotkey===!0);
      if(!u)return a;
      const d=a.parameters?.find(f=>f.id===u.id)?.value??"",m=XTm(u,d);
      let p=m;
      u.parameterType?.booleanParameter?p=m==="true"?"On":"Off":u.parameterType?.enumParameter&&(p=u.parameterType.enumParameter.values.find(A=>A.value===m)?.displayName??m),s={
        paramName:u.name,newValue:m,newDisplayValue:p
      };
      const g=(a.parameters??[]).filter(f=>f.id!==u.id);
      return g.push({
        id:u.id,value:m
      }),this.setModelParameterPreferences(a.modelId,g),{
        modelId:a.modelId,parameters:g
      }
    });
    if(s)return t?this.setModelConfigForComposer(t, {
      selectedModels:o
    }):this.setModelConfig(e, {
      selectedModels:o
    }), s
  }
  clearAllMaxModeRequiredPreferences(){
    const e=this.getAllModelParameterPreferences(), t=[];
    for(const i of Object.keys(e))this.doesModelPreferencesRequireMaxMode(i)&&(this.clearModelParameterPreferences(i), t.push(i));
    return t
  }
}, uga=__decorate([__param(0, ku), __param(1, Kk)], uga), Vi(ix, uga, 1)
}
});
function vnu(n, e){
  return`${hga}:${n}:${e}`
}
async function u2A(n, e, t){
  await Promise.all(t.map(({
    uriStr:i, content:r
  })=>n.cursorDiskKVSet(vnu(e, i), r)))
}
async function d2A(n, e, t){
  if(t.length===0)return new Map;
  const i=t.map(o=>vnu(e, o)), r=await n.cursorDiskKVGetBatch(i), s=new Map;
  for(const[o, a]of r)if(a!=null){
    const l=o.substring(`${hga}:${e}:`.length);
    s.set(l, a)
  }
  return s
}
async function h2A(n, e){
  await n.cursorDiskKVClearPrefix(`${hga}:${e}:`)
}
function m2A(n, e, t, i, r){
  const s=n.createInstance(mga);
  return n.createInstance(jbi, s, t, i, r)
}
function mFg(){
  const[n, e]=v3({
    ids:[], byId:{
      
    }
  });
  return{
    store:n, add(t){
      if(t.composerId in n.byId){
        const i=new Error(`[composer] Invariant violation: duplicate composer added: ${t.composerId}`);
        console.error(i.message),Sw(i,{
          tags:{
            client_error_type:"composer_invariant_violation",force_upload:"forced"
          }
        });
        return
      }
      Gw(()=>{
        e("ids",i=>[...i,t.composerId]),e("byId",t.composerId,t)
      })
    }, update(t, ...i){
      t in n.byId&&e("byId",t,...i)
    }, delete(t){
      const i=ZC(n.byId)[t];
      return Gw(()=>{
        e("ids",r=>r.filter(s=>s!==t)),e("byId",t,void 0)
      }),i
    }, get ids(){
      return n.ids
    }, get byId(){
      return n.byId
    }
  }
}
function dga(n){
  const e=n.unifiedMode!=="background"&&n.unifiedMode!=="debug"?{
    ...n, unifiedMode:"agent"
  }
  :n;
  return new vFg(v3(e))
}
var pFg, gFg, fFg, hga, mga, jbi, bFg, vFg, zbi=