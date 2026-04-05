// Module: out-build/vs/workbench/services/aiSettings/browser/aiSettingsService.js
// Offset: 27471127 (bundle byte offset)
// Size: 22814 bytes

ml(), rt(), dr(), Er(), Wt(), Px(), Dd(), nA(), kr(), Rb(), yn(), iM(), nie(), Ti(), gT(), fN(), S9(), rf(), CSt(), vE(), si(), cp(), bfa(), rie(), Wu(), zp(), J0(), oP(), Zk(), vU=xi("AISettingsService"), Efa=async(n, e, t, i, r)=>{
  e.setModelConfig("composer", n), r.isVisible("workbench.parts.auxiliarybar")||r.setPartHidden(!1, "workbench.parts.auxiliarybar");
  let s=t.selectedComposerId;
  if(s?await i.openComposer({
    type:"local", id:s
  }):(await i.createNewComposer(), s=t.selectedComposerId), s){
    const o=await t.getComposerHandleById(s);
    if(o)try{
      e.setModelConfigForComposer(o,n)
    }
    finally{
      o.dispose()
    }
  }
}, aJg=(n, e, t, i)=>{
  let r=n.getModelConfig(t);
  if(r===null)return{
    modelName:"default", maxMode:!1
  };
  const s=r.modelName.split(",").map(l=>l.trim()).filter(l=>l.length>0), o=s.map(l=>i?.get(l)??l);
  if(o.length>0&&o.every(l=>e.includes(l)))o.some((l, u)=>l!==s[u])&&(r={
    ...r, modelName:o.join(",")
  }, n.setModelConfig(t, r));
  else{
    if(e.length===0||t==="background-composer")return r;
    const l=o.filter(d=>e.includes(d));
    r={
      modelName:l.length>0?l.join(","):e[0],maxMode:!1
    }, n.setModelConfig(t, r)
  }
  return r
}, xfa=class extends at{
  getLastSingleModelPreferenceState(){
    const e=this.lastSingleModelPreference.get();
    if(!e)return{
      
    };
    try{
      return JSON.parse(e)
    }
    catch{
      return{
        
      }
    }
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.storageService=e, this.reactiveStorageService=t, this.cursorAuthenticationService=i, this.adminSettingsService=r, this.modelConfigService=s, this.uiOverlayService=o, this.devConsoleService=a, this.structuredLogService=l, this.storageId="aisettings.service", this._onDidChangeUseOpenAIKey=new Qe, this.getLastSingleModelPreference=u=>this.getLastSingleModelPreferenceState()[u], this.setLastSingleModelPreference=(u, d)=>{
      const m=this.getLastSingleModelPreferenceState();
      if(!d||d===""){
        m[u]!==void 0&&(delete m[u],this.lastSingleModelPreference.set(JSON.stringify(m),void 0));
        return
      }
      m[u]!==d&&(m[u]=d,this.lastSingleModelPreference.set(JSON.stringify(m),void 0))
    }, this.saveData=()=>{
      
    }, this.loadData=()=>{
      if(this.reactiveStorageService.applicationUserPersistentStorage.havePerformedSettingsServiceMigration!==!0){
        this.reactiveStorageService.setApplicationUserPersistentStorage("havePerformedSettingsServiceMigration",!0);
        const u=this.storageService.get(this.storageId,-1);
        if(u){
          const d=JSON.parse(u);
          d.useOpenAIKey!==void 0&&this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey",d.useOpenAIKey),d.availableModels!==void 0&&this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels",d.availableModels),d.noStorageMode!==void 0&&this.reactiveStorageService.setApplicationUserPersistentStorage("noStorageMode",d.noStorageMode||this.cursorAuthenticationService.membershipType()===ra.ENTERPRISE&&this.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise().privacyModeForced)
        }
      }
    }, this.getUseOpenAIKey=()=>this.reactiveStorageService.applicationUserPersistentStorage.useOpenAIKey??!1, this.enableModel=u=>{
      this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideDisabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(d=>d!==u)),this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)||this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideEnabled",[...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled??[],u]),this._didChangeAvailableModels()
    }, this.addUserAddedModel=u=>{
      this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u)||(this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","userAddedModels",[...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels??[],u]),this._didChangeAvailableModels())
    }, this.removeUserAddedModel=u=>{
      !this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u)&&this.isDefaultModel(u)||(this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","userAddedModels",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.filter(d=>d!==u)??[]),this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideEnabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.filter(d=>d!==u)??[]),this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideDisabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.filter(d=>d!==u)??[]),this._didChangeAvailableModels())
    }, this.isDefaultModel=u=>this.modelConfigService.getAvailableDefaultModels().filter(m=>!m.isLongContextOnly).map(m=>m.name).includes(u), this.isUserAddedModel=u=>this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(u)??!1, this.removeModel=u=>{
      this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideEnabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(d=>d!==u)),this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideDisabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(d=>d!==u)),this._didChangeAvailableModels()
    }, this.disableModel=u=>{
      this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(u)&&this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideEnabled",this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(d=>d!==u)),this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(u)||this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings","modelOverrideDisabled",[...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled??[],u]),this._didChangeAvailableModels()
    }, this.getAllPotentialModelsReactiveWithStatus=()=>{
      const u=m=>({
        name:m.name,clientDisplayName:m.clientDisplayName??m.name,serverModelName:m.serverModelName??m.name,status:m.degradationStatus??HRe.UNSPECIFIED,price:m.price,tooltipData:m.tooltipData,supportsMaxMode:m.supportsMaxMode,tooltipDataForMaxMode:m.tooltipDataForMaxMode,isRecommendedForBackgroundComposer:m.isRecommendedForBackgroundComposer,supportsPlanMode:m.supportsPlanMode,supportsSandboxing:m.supportsSandboxing,inputboxShortModelName:m.inputboxShortModelName,backgroundComposerSortOrder:m.backgroundComposerSortOrder,variants:m.variants,namedModelSectionIndex:m.namedModelSectionIndex,tagline:m.tagline
      });
      return this.modelConfigService.getAvailableDefaultModels().filter(m=>!m.isLongContextOnly&&!this.getHardcodedLongContextOnlyModelNames().includes(m.name)).map(m=>u(m))
    }, this.useOpenAIKeyListeners=[], this.availableModelsListeners=[], this.popupListeners=[], this.closePopupListeners=[], this.addOpenAIKeyListener=u=>{
      this.useOpenAIKeyListeners.push(u)
    }, this.removeOpenAIKeyListener=u=>{
      this.useOpenAIKeyListeners=this.useOpenAIKeyListeners.filter(d=>d!==u)
    }, this.addAvailableModelsListener=u=>{
      this.availableModelsListeners.push(u)
    }, this.removeAvailableModelsListener=u=>{
      this.availableModelsListeners=this.availableModelsListeners.filter(d=>d!==u)
    }, this.onDidChangeUseOpenAIKey=this._onDidChangeUseOpenAIKey.event, this.addPopupListener=u=>{
      this.popupListeners.push(u)
    }, this.addClosePopupListener=u=>{
      this.closePopupListeners.push(u)
    }, this.removeClosePopupListener=u=>{
      this.closePopupListeners=this.closePopupListeners.filter(d=>d!==u)
    }, this.settingsDismissedOpenAIKeyWarning=this._register(hm(this.storageService, "settingsDismissedOpenAIKeyWarning")), this.settingsDismissedClaudeKeyWarning=this._register(hm(this.storageService, "settingsDismissedClaudeKeyWarning")), this.settingsDismissedGoogleKeyWarning=this._register(hm(this.storageService, "settingsDismissedGoogleKeyWarning")), this.settingsDismissedBedrockKeyWarning=this._register(hm(this.storageService, "settingsDismissedBedrockKeyWarning")), this.bestOfNCountPreference=this._register(hm(this.storageService, "bestOfNCountPreference")), this.bestOfNEnsemblePreferences=this._register(hm(this.storageService, "bestOfNEnsemblePreferences")), this.lastSingleModelPreference=this._register(hm(this.storageService, "lastSingleModelPreference")), this.loadData(), this._register(this.storageService.onWillSaveState(()=>this.saveData())), this.devConsoleService.register("getApplicationProperty", u=>wb(this.storageService, u))
  }
  getUseApiKeyForModel(e){
    return Enu(e)&&this.reactiveStorageService.applicationUserPersistentStorage.useClaudeKey?this.reactiveStorageService.applicationUserPersistentStorage.useClaudeKey:xnu(e)&&this.reactiveStorageService.applicationUserPersistentStorage.useGoogleKey?!0:this.getUseOpenAIKey()
  }
  getHardcodedLongContextOnlyModelNames(){
    return gEe.filter(e=>e.isLongContextOnly).map(e=>e.name)
  }
  getAvailableModelsReactive(e){
    return[...this.getAvailableModelsReactiveWithStatus(e).map(t=>t.name)]
  }
  getAvailableModelsWithStatus(e){
    return sc(()=>this.getAvailableModelsReactiveWithStatus(e))
  }
  getAvailableModelsReactiveWithStatus(e){
    let t=[];
    const i=l=>({
      name:l.name,clientDisplayName:l.clientDisplayName??l.name,serverModelName:l.serverModelName??l.name,status:l.degradationStatus??HRe.UNSPECIFIED,price:l.price,tooltipData:l.tooltipData,supportsMaxMode:l.supportsMaxMode,tooltipDataForMaxMode:l.tooltipDataForMaxMode,isRecommendedForBackgroundComposer:l.isRecommendedForBackgroundComposer,supportsPlanMode:l.supportsPlanMode,supportsSandboxing:l.supportsSandboxing,inputboxShortModelName:l.inputboxShortModelName,backgroundComposerSortOrder:l.backgroundComposerSortOrder,variants:l.variants,namedModelSectionIndex:l.namedModelSectionIndex,tagline:l.tagline
    }), r=ZC(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled), s=[], o=this.modelConfigService.getAvailableDefaultModels();
    if(t=sc(()=>o.filter(l=>{
      if(!l.defaultOn&&!r?.includes(l.name))return!1;
      const u=e?.specificModelField==="cmd-k";
      return u&&l.supportsNonMaxMode===!1||u&&l.supportsThinking===!0||u&&l.supportsCmdK===!1||!u&&l.onlySupportsCmdK===!0?(s.push(l.name),!1):!0
    }).map(l=>i(l))), r!==void 0)for(const l of r)s.includes(l)||t.some(u=>u.name===l)||t.push({
      name:l,clientDisplayName:l,status:HRe.UNSPECIFIED
    });
    const a=ZC(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled);
    if(a!==void 0&&(t=t.filter(l=>!a.includes(l.name))), t=t.filter(l=>!this.getHardcodedLongContextOnlyModelNames().includes(l.name)), e?.specificModelField==="background-composer")for(const l of this.modelConfigService.getAvailableDefaultModels())l.isRecommendedForBackgroundComposer&&(t.some(u=>u.name===l.name)||t.push(i(l)));
    return e?.filterBlockedModels!==!1&&(t=t.filter(l=>!this.adminSettingsService.isModelBlocked(l.clientDisplayName))), t
  }
  _setUseOpenAIKey(e){
    this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", e);
    for(let t of this.useOpenAIKeyListeners)t(e);
    this._onDidChangeUseOpenAIKey.fire(e)
  }
  _setAvailableModels(e){
    this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", e), this._didChangeAvailableModels()
  }
  handleAvailableModelsChange(){
    this.modelConfigService.triggerParameterizedModelConfigMigration();
    const e=this.modelConfigService.getAvailableDefaultModels(), i=e.find(l=>l.name==="default")?.variants?.map(l=>l.parameterValues.find(u=>u.id==="kind")?.value).filter(l=>l!==void 0)??[], r=[...e.map(l=>l.name), ...i], s=this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels??[];
    for(const l of s)r.includes(l)||r.push(l);
    const o=new Map;
    for(const l of e)if(l.name!=="default"&&l.legacySlugs)for(const u of l.legacySlugs)o.set(u, l.name);
    const a=this.reactiveStorageService.applicationUserPersistentStorage.useModelParameters===!0;
    if(!a){
      this.modelConfigService.migrateModelSettingsToCurrentCatalog();
      for(const l of whn){
        const u=this.modelConfigService.getModelConfig(l),d=u.selectedModels;
        if(!d||d.length===0)continue;
        const m=d.map(g=>o.get(g.modelId)??g.modelId).map(g=>g.trim()).filter(g=>g.length>0);
        if(m.length===0)continue;
        const p=l==="composer"?m[0]:m.join(",");
        this.structuredLogService.info("composer","Global surface reverse migration: selectedModels \u2192 modelName, clearing selectedModels (flag off)",{
          subkey:"global_surface_reverse_migration",surface:l,beforeModelName:u.modelName??"",beforeSelectedModelIds:d.map(g=>g.modelId).join(","),afterModelName:p
        }),this.modelConfigService.setModelConfig(l,{
          modelName:p,selectedModels:void 0
        })
      }
    }
    this.migrateLoadedComposerModelConfigs(a, o);
    for(const l of whn){
      const u=this.modelConfigService.getModelConfig(l).modelName,d=aJg(this.modelConfigService,r,l,o);
      d.modelName!==u&&this.structuredLogService.warn("composer","Model reset by fixUnavailable",{
        subkey:"fix_unavailable_model_reset",surface:l,previousModel:u,newModel:d.modelName,availableModelCount:String(r.length),availableModels:r.join(",")
      })
    }
    this._didChangeAvailableModels()
  }
  _didChangeAvailableModels(){
    const e=this.getAvailableModelsReactive();
    for(let t of this.availableModelsListeners)t(e)
  }
  migrateLoadedComposerModelConfigs(e, t){
    
  }
}, xfa=__decorate([__param(0, Hi), __param(1, ku), __param(2, wg), __param(3, i8), __param(4, ix), __param(5, YD), __param(6, mye), __param(7, Kk)], xfa), Tfa=class extends xfa{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(r, s, i, o, a, l, u, d), this.layoutService=e, this.instantiationService=t, this.usageDataService=m, this.openPopup=(p, g)=>{
      if(this.usageDataService.prefetch().catch(f=>{
        console.error("[AISettingsService] Failed to prefetch usage data:",f)
      }),p!==void 0||g!==void 0){
        const f=this.uiOverlayService.settingsOpenData.value,A={
          ...f??{
            
          },openTab:p??f?.openTab
        };
        g===void 0?(delete A.idToScrollTo,delete A.skipScrollToId,delete A.highlightStyle):A.idToScrollTo=g,this.uiOverlayService.setSettingsOpenData(A)
      }
      for(let f of this.popupListeners)f(this.layoutService,this.instantiationService,p,g)
    }, this.closePopup=()=>{
      for(let p of this.closePopupListeners)p()
    }, this.loginChangedListener=p=>{
      (this.cursorAuthenticationService.membershipType()===ra.PRO||this.cursorAuthenticationService.membershipType()===ra.PRO_PLUS||this.cursorAuthenticationService.membershipType()===ra.ULTRA)&&this.setUseOpenAIKey(!1)
    }, this.subscriptionChangedListener=p=>{
      p!==ra.FREE&&this.setUseOpenAIKey(!1)
    }, this.cursorAuthenticationService.addLoginChangedListener(this.loginChangedListener), this.cursorAuthenticationService.addSubscriptionChangedListener(this.subscriptionChangedListener)
  }
  migrateLoadedComposerModelConfigs(e, t){
    const i=this.instantiationService.invokeFunction(s=>s.get(Oa)), r=sc(()=>{
      const s=i.allComposersData.allComposers;
      return Array.isArray(s)?s.map(o=>o.composerId):[]
    });
    for(const s of r){
      const o=i.getHandleIfLoaded_MIGRATED(s);
      if(!o)continue;
      const a=i.getComposerData(o);
      if(!a?.modelConfig)continue;
      const{
        modelConfig:l
      }
      =a;
      if(e){
        if(l.modelName&&(!l.selectedModels||l.selectedModels.length===0)){
          if(this.modelConfigService.getAvailableDefaultModels().length===0)continue;
          const m=l.modelName.split(",").map(p=>p.trim()).filter(p=>p.length>0).map(p=>({
            modelId:this.modelConfigService.resolveModelNameToCatalog(p),parameters:[]
          }));
          this.structuredLogService.info("composer","Per-composer migration: forward-migrating modelName \u2192 selectedModels (flag on)",{
            subkey:"composer_model_config_forward_migration",composerId:s,useModelParameters:String(e),sourceModelName:l.modelName,resolvedSelectedModelIds:m.map(p=>p.modelId).join(",")
          }),i.updateComposerData(o,{
            modelConfig:{
              modelName:l.modelName,maxMode:l.maxMode,selectedModels:m
            }
          })
        }
      }
      else{
        const u=l.selectedModels;
        if(!u||u.length===0)continue;
        const d=u.map(m=>t.get(m.modelId)??m.modelId).map(m=>m.trim()).filter(m=>m.length>0);
        if(d.length===0)continue;
        this.structuredLogService.info("composer","Per-composer migration: reverse-migrating selectedModels \u2192 modelName (flag off)",{
          subkey:"composer_model_config_reverse_migration",composerId:s,useModelParameters:String(e),beforeModelName:l.modelName??"",beforeSelectedModelIds:u.map(m=>m.modelId).join(","),afterModelName:d[0]
        }),i.updateComposerData(o,{
          modelConfig:{
            modelName:d[0],maxMode:l.maxMode,selectedModels:void 0
          }
        })
      }
    }
  }
  getModelConfig(e){
    return this.modelConfigService.getModelConfig(e)
  }
  async getApiKey(){
    return await this.cursorAuthenticationService.openAIKey()
  }
  async refreshAPIKeyModels(){
    try{
      if(!this.getUseOpenAIKey())return;
      const e=await this.cursorAuthenticationService.openAIKey();
      if(!e)return;
      const{
        models:t
      }
      =await this.getModels(e);
      this._setAvailableModels(t)
    }
    catch(e){
      console.error("Error refreshing API key models:",e)
    }
  }
  async setUseOpenAIKey(e){
    if(e===!1)return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1;
    {
      this._setUseOpenAIKey(!0);
      const t=await this.cursorAuthenticationService.openAIKey();
      if(t){
        const{
          models:i
        }
        =await this.getModels(t);
        return this._setAvailableModels(i),!0
      }
      else return this._setUseOpenAIKey(!1),this._didChangeAvailableModels(),!1
    }
  }
  async setOpenAIKey(e){
    const t=await this.tryChallenge(e);
    if(t!==!0)return t;
    const{
      models:i
    }
    =await this.getModels(e);
    return this._setAvailableModels(i), this._setUseOpenAIKey(!0), this.cursorAuthenticationService.storeOpenAIKey(e), !0
  }
  async getModels(e){
    return{
      models:[]
    }
  }
  getProviderFromUrl(e){
    try{
      const i=new URL(e).hostname.toLowerCase();
      return i==="api.openai.com"||i.endsWith(".api.openai.com")?"openai":i==="api.x.ai"||i.endsWith(".api.x.ai")?"xai":"unknown"
    }
    catch{
      return"unknown"
    }
  }
  getModelForChallenge(){
    const e=this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl??"https://api.openai.com/v1", t=this.getProviderFromUrl(e), i=this.getAvailableModelsReactive().filter(s=>s!=="default"), r={
      openai:["gpt-4o-mini","4o","gpt","o1","o3"],xai:["grok-4","grok-3"]
    };
    if(r[t])return r[t][0];
    for(const s of["gpt-4o-mini", "4o", "gpt", "o1", "o3"]){
      const o=i.find(a=>a.includes(s));
      if(o)return o
    }
    return i.at(0)??"please-enable-some-models"
  }
  async tryChallenge(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl??"https://api.openai.com/v1";
    try{
      const i=await fetch(`${t}/chat/completions`,{
        method:"POST",headers:{
          "Content-Type":"application/json",Authorization:`Bearer ${e}`
        },body:JSON.stringify({
          model:this.getModelForChallenge(),messages:[{
            role:"system",content:"You are a helpful assistant."
          },{
            role:"user",content:"Test prompt using gpt-3.5-turbo"
          }
          ],temperature:1,max_tokens:10,stream:!1
        })
      });
      if(i.status===200)return!0;
      {
        const r=await Promise.race([i.text(),new Promise((s,o)=>setTimeout(()=>s("Request timed out after 10 seconds"),1e4))]);
        return{
          code:i.status,error:r
        }
      }
    }
    catch(i){
      return{
        code:0,error:i.toString()
      }
    }
  }
  doesModelSupportAgent(e){
    if(e==="default")return!0;
    const t=e.toLowerCase().includes("claude-3"), i=e.toLowerCase().includes("gpt-4o")&&!e.toLowerCase().includes("mini"), r=e.toLowerCase().includes("o3-mini"), s=e.toLowerCase().includes("grok-3");
    if(t||i||r||s)return!0;
    const o=this.modelConfigService.getAvailableDefaultModels(), a=[...gEe], l=o.find(d=>d.name===e), u=a.find(d=>d.name===e);
    return(l?.supportsAgent||u?.supportsAgent)??!1
  }
  doesModelSupportImages(e){
    const t=e.split(",").map(s=>s.trim()), i=this.modelConfigService.getAvailableDefaultModels(), r=[...gEe];
    return t.every(s=>{
      if(s==="default")return!0;
      const o=i.find(l=>l.name===s),a=r.find(l=>l.name===s);
      return(o?.supportsImages||a?.supportsImages)??!1
    })
  }
  getServerModelName(e){
    return this.modelConfigService.getServerModelName(e)
  }
  dispose(){
    this.cursorAuthenticationService.removeLoginChangedListener(this.loginChangedListener), this.cursorAuthenticationService.removeSubscriptionChangedListener(this.subscriptionChangedListener), super.dispose()
  }
}, Tfa=__decorate([__param(0, vS), __param(1, ln), __param(2, wg), __param(3, Hi), __param(4, ku), __param(5, i8), __param(6, ix), __param(7, YD), __param(8, mye), __param(9, Kk), __param(10, smn)], Tfa), Vi(vU, Tfa, 1), Dt(class extends rn{
  constructor(){
    super({
      id:SFn,title:{
        value:"Switch to model",original:"Switch to model"
      },f1:!1
    })
  }
  async run(n, e, t){
    const i=n.get(ix);
    if(!t){
      console.error("No specific model field provided");
      return
    }
    const s={
      ...i.getModelConfig(t),modelName:e
    };
    i.setModelConfig(t, s)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"cursorai.action.switchToComposer1",title:{
        value:"Switch to Composer-1",original:"Switch to Composer-1"
      },f1:!1,precondition:Ee.equals("aiSettings.composer1Available",!0)
    })
  }
  async run(n){
    const e=n.get(ix), t=n.get(Oa);
    e.setModelConfig("composer", {
      modelName:"composer-1"
    });
    const i=t.selectedComposerId;
    if(i){
      const r=await t.getComposerHandleById(i);
      if(r)try{
        e.setModelConfigForComposer(r,{
          modelName:"composer-1"
        })
      }
      finally{
        r.dispose()
      }
    }
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"cursorai.action.switchToModelSlug",title:{
        value:"Switch to Model Slug",original:"Switch to Model Slug"
      },f1:!1
    })
  }
  async run(n, e){
    const t=n.get(ix), i=n.get(Oa), r=n.get(sP), s=n.get(Vu), o=W2A(e);
    if(!o){
      console.warn("No valid model config provided for switchToModelSlug");
      return
    }
    await Efa(o, t, i, r, s)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"cursorai.action.switchToDynamicModelSlug",title:{
        value:"Switch to Dynamic Model Slug",original:"Switch to Dynamic Model Slug"
      },f1:!1
    })
  }
  async run(n){
    const e=n.get(ix), t=n.get(Oa), i=n.get(sP), r=n.get(Vu), s=n.get(Tl), o=s.getDynamicConfigParam("switch_to_model_slug_config", "modelSlug");
    if(!o){
      console.warn("No model slug configured in switch_to_model_slug_config");
      return
    }
    const a=s.getDynamicConfigParam("switch_to_model_slug_config", "modelIdWithParams"), l={
      modelName:o,selectedModels:a?.modelId?[{
        modelId:a.modelId,parameters:a.params
      }
      ]:void 0
    };
    await Efa(l, e, t, i, r)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"cursorai.action.createNewAgentWithImagePrompt",title:{
        value:"Generate an Image",original:"Generate an Image"
      },f1:!1
    })
  }
  async run(n){
    const e=n.get(ag), t=n.get(rw), i=n.get(BA), r=await e.createComposer({
      partialState:{
        unifiedMode:"agent",text:"Generate an image of ",richText:"Generate an image of "
      },openInNewTab:!0
    });
    if(!r){
      console.error("[composer] Failed to create composer for image generation prompt");
      return
    }
    const s=r.composerId;
    i.fireShouldForceText({
      composerId:s
    }), await t.showAndFocus(s)
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"cursorai.action.switchToProAuto",title:{
        value:"Switch to Pro Auto",original:"Switch to Pro Auto"
      },f1:!1
    })
  }
  async run(n){
    const e=n.get(ix), t=n.get(Oa), i=n.get(sP), r=n.get(Vu);
    await Efa({
      modelName:"pro"
    }, e, t, i, r)
  }
})
}
}), Q2A=