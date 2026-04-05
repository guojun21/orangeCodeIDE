// Module: out-build/vs/workbench/contrib/composer/browser/usageDataService.js
// Offset: 27454916 (bundle byte offset)
// Size: 9403 bytes

rt(), Ti(), Wt(), Er(), uR(), Rb(), Dd(), smn=xi("usageDataService"), ffa=class extends at{
  constructor(e, t){
    super(), this.cursorAuthenticationService=e, this.reactiveStorageService=t, this.refreshInterval=300*1e3, this.retryInterval=1800*1e3, this.CACHE_DURATION=30*1e3, this.PLAN_INFO_CACHE_DURATION=30*1e3, this.lastFetchTime=0, this.lastPlanInfoFetchTime=0, this.autoRefreshActive=!1, this.activeConsumers=0, this.fetchInProgress=null, this.planInfoFetchInProgress=null, this._register(this.reactiveStorageService.createScoped(this));
    const[i, r]=lt(null), [s, o]=lt(null), [a, l]=lt(null), [u, d]=lt(null), [m, p]=lt(!1), [g, f]=lt(null), [A, w]=lt(null), [C, x]=lt(null), [I, B]=lt(null), [R, N]=lt([]), [M, O]=lt(!0);
    this.displayMessageData=A, this.setDisplayMessageData=w, this.autoModelSelectedDisplayMessageData=C, this.setAutoModelSelectedDisplayMessageData=x, this.namedModelSelectedDisplayMessageData=I, this.setNamedModelSelectedDisplayMessageData=B, this.autoBucketModelsData=R, this.setAutoBucketModelsData=N, this.planUsageData=i, this.setPlanUsageData=r, this.spendLimitUsageData=s, this.setSpendLimitUsageData=o, this.planInfoData=a, this.setPlanInfoData=l, this.nextUpgradeData=u, this.setNextUpgradeData=d, this.isLoadingData=m, this.setIsLoading=p, this.errorData=g, this.setError=f, this.usageDisplayEnabledData=M, this.setUsageDisplayEnabled=O;
    const $=H=>{
      this.clearCachedData(),H?this.activeConsumers>0&&!this.autoRefreshActive&&this.startAutoRefresh():this.stopAutoRefresh()
    };
    this.cursorAuthenticationService.addLoginChangedListener($), this._register({
      dispose:()=>{
        this.cursorAuthenticationService.removeLoginChangedListener($)
      }
    })
  }
  get displayMessage(){
    return this.displayMessageData
  }
  get autoModelSelectedDisplayMessage(){
    return this.autoModelSelectedDisplayMessageData
  }
  get namedModelSelectedDisplayMessage(){
    return this.namedModelSelectedDisplayMessageData
  }
  get autoBucketModels(){
    return this.autoBucketModelsData
  }
  get planUsage(){
    return this.planUsageData
  }
  get spendLimitUsage(){
    return this.spendLimitUsageData
  }
  get planInfo(){
    return this.planInfoData
  }
  get nextUpgrade(){
    return this.nextUpgradeData
  }
  get isLoading(){
    return this.isLoadingData
  }
  get error(){
    return this.errorData
  }
  get usageDisplayEnabled(){
    return this.usageDisplayEnabledData
  }
  get hasCachedData(){
    return()=>this.planUsageData()!==null||this.planInfoData()!==null
  }
  async refetch(e=!1){
    if(!this.cursorAuthenticationService.isAuthenticated())return;
    const t=this.fetchPlanInfo(e).catch(r=>{
      console.error("[UsageDataService] Plan info fetch failed:",r)
    });
    if(this.fetchInProgress)return await t, this.fetchInProgress;
    const i=Date.now();
    if(i-this.lastFetchTime<this.CACHE_DURATION&&!this.errorData()&&!e){
      await t;
      return
    }
    this.fetchInProgress=this.performFetch(i);
    try{
      await Promise.all([this.fetchInProgress,t])
    }
    finally{
      this.fetchInProgress=null
    }
  }
  async prefetch(){
    if(!this.cursorAuthenticationService.isAuthenticated())return;
    const e=Date.now();
    this.fetchPlanInfo(!1).catch(t=>{
      console.error("[UsageDataService] Prefetch plan info failed:",t)
    }), this.fetchInProgress=this.performFetchSilent(e);
    try{
      await this.fetchInProgress
    }
    finally{
      this.fetchInProgress=null
    }
  }
  async performFetchSilent(e){
    this.setError(null);
    try{
      const i=await(await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new efa);
      if(this.setUsageDisplayEnabled(i.enabled),this.setAutoBucketModelsData(i.autoBucketModels??[]),i.enabled?(this.setDisplayMessageData(i.displayMessage),this.setAutoModelSelectedDisplayMessageData(i.autoModelSelectedDisplayMessage??null),this.setNamedModelSelectedDisplayMessageData(i.namedModelSelectedDisplayMessage??null)):(this.setDisplayMessageData(null),this.setAutoModelSelectedDisplayMessageData(null),this.setNamedModelSelectedDisplayMessageData(null)),i.planUsage&&i.planUsage.limit>0){
        const r=i.planUsage.totalSpend/100,s=i.planUsage.includedSpend/100,o=i.planUsage.bonusSpend/100,a=i.planUsage.limit/100,l=i.planUsage.autoSpend!==void 0?i.planUsage.autoSpend/100:void 0,u=i.planUsage.apiSpend!==void 0?i.planUsage.apiSpend/100:void 0,d=Math.min(s/a*100,100),m={
          total:r,used:s,bonus:o,limit:a,bonusRemaining:i.planUsage?.remainingBonus??!1,bonusTooltip:i.planUsage?.bonusTooltip,usedPercentage:d,displayThreshold:i.displayThreshold??50,billingCycleEnd:Number(i.billingCycleEnd),autoUsed:l,apiUsed:u,autoPercentUsed:i.planUsage.autoPercentUsed,apiPercentUsed:i.planUsage.apiPercentUsed,totalPercentUsed:i.planUsage.totalPercentUsed
        };
        this.setPlanUsageData(m)
      }
      else this.setPlanUsageData(null);
      if(i.spendLimitUsage){
        const r=i.spendLimitUsage.individualUsed/100,s=(i.spendLimitUsage.individualLimit??0)/100,o=s>0?Math.min(r/s*100,100):0;
        this.setSpendLimitUsageData({
          used:r,limit:s,percentage:o
        })
      }
      else this.setSpendLimitUsageData(null);
      this.lastFetchTime=e
    }
    catch(t){
      console.error("[UsageDataService] Failed to prefetch current period usage:",t),this.setError(t instanceof Error?t.message:"Failed to fetch usage data")
    }
  }
  async fetchPlanInfo(e=!1){
    if(!this.cursorAuthenticationService.isAuthenticated())return;
    if(this.planInfoFetchInProgress)return this.planInfoFetchInProgress;
    const t=Date.now();
    if(!(!e&&t-this.lastPlanInfoFetchTime<this.PLAN_INFO_CACHE_DURATION)){
      this.planInfoFetchInProgress=this.performPlanInfoFetch(t);
      try{
        await this.planInfoFetchInProgress
      }
      finally{
        this.planInfoFetchInProgress=null
      }
    }
  }
  async performPlanInfoFetch(e){
    const i=await(await this.cursorAuthenticationService.dashboardClient()).getPlanInfo(new yiu);
    i.planInfo?this.setPlanInfoData({
      planName:i.planInfo.planName,includedAmount:i.planInfo.includedAmountCents/100,price:i.planInfo.price??void 0,billingCycleEnd:i.planInfo.billingCycleEnd!==void 0?Number(i.planInfo.billingCycleEnd):void 0
    }):this.setPlanInfoData(null), i.nextUpgrade&&i.nextUpgrade.tier?this.setNextUpgradeData({
      tier:i.nextUpgrade.tier,name:i.nextUpgrade.name,amount:i.nextUpgrade.includedAmountCents/100,price:i.nextUpgrade.price,description:i.nextUpgrade.description
    }):this.setNextUpgradeData(null), this.lastPlanInfoFetchTime=e
  }
  async performFetch(e){
    this.setIsLoading(!0), this.setError(null);
    try{
      const i=await(await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new efa);
      if(this.setUsageDisplayEnabled(i.enabled),this.setAutoBucketModelsData(i.autoBucketModels??[]),i.enabled?(this.setDisplayMessageData(i.displayMessage),this.setAutoModelSelectedDisplayMessageData(i.autoModelSelectedDisplayMessage??null),this.setNamedModelSelectedDisplayMessageData(i.namedModelSelectedDisplayMessage??null)):(this.setDisplayMessageData(null),this.setAutoModelSelectedDisplayMessageData(null),this.setNamedModelSelectedDisplayMessageData(null)),i.planUsage&&i.planUsage.limit>0){
        const r=i.planUsage.totalSpend/100,s=i.planUsage.includedSpend/100,o=i.planUsage.bonusSpend/100,a=i.planUsage.limit/100,l=i.planUsage.autoSpend!==void 0?i.planUsage.autoSpend/100:void 0,u=i.planUsage.apiSpend!==void 0?i.planUsage.apiSpend/100:void 0,d=Math.min(s/a*100,100),m={
          total:r,used:s,bonus:o,limit:a,bonusRemaining:i.planUsage?.remainingBonus??!1,bonusTooltip:i.planUsage?.bonusTooltip,usedPercentage:d,displayThreshold:i.displayThreshold??50,billingCycleEnd:Number(i.billingCycleEnd),autoUsed:l,apiUsed:u,autoPercentUsed:i.planUsage.autoPercentUsed,apiPercentUsed:i.planUsage.apiPercentUsed,totalPercentUsed:i.planUsage.totalPercentUsed
        };
        this.setPlanUsageData(m)
      }
      else this.setPlanUsageData(null);
      if(i.spendLimitUsage){
        const r=i.spendLimitUsage.individualUsed/100,s=(i.spendLimitUsage.individualLimit??0)/100,o=s>0?Math.min(r/s*100,100):0;
        this.setSpendLimitUsageData({
          used:r,limit:s,percentage:o
        })
      }
      else this.setSpendLimitUsageData(null);
      this.lastFetchTime=e
    }
    catch(t){
      console.error("[UsageDataService] Failed to fetch current period usage:",t),this.setError(t instanceof Error?t.message:"Failed to fetch usage data"),this.setPlanUsageData(null),this.setSpendLimitUsageData(null),this.setDisplayMessageData(null)
    }
    finally{
      this.setIsLoading(!1)
    }
  }
  addConsumer(){
    this.activeConsumers++, this.activeConsumers===1&&!this.autoRefreshActive&&this.cursorAuthenticationService.isAuthenticated()&&this.startAutoRefresh()
  }
  removeConsumer(){
    this.activeConsumers=Math.max(0, this.activeConsumers-1), this.activeConsumers===0&&this.autoRefreshActive&&this.stopAutoRefresh()
  }
  startAutoRefresh(){
    if(this.autoRefreshActive||!this.cursorAuthenticationService.isAuthenticated())return;
    this.stopAutoRefresh(), this.autoRefreshActive=!0;
    const e=()=>{
      if(!this.autoRefreshActive||this.activeConsumers===0||!this.cursorAuthenticationService.isAuthenticated())return;
      const t=this.errorData()?this.retryInterval:this.refreshInterval;
      this.timeoutId=setTimeout(async()=>{
        this.autoRefreshActive&&this.activeConsumers>0&&this.cursorAuthenticationService.isAuthenticated()&&(await this.refetch(),e())
      },t)
    };
    e()
  }
  stopAutoRefresh(){
    this.autoRefreshActive=!1, this.timeoutId&&(clearTimeout(this.timeoutId), this.timeoutId=void 0)
  }
  clearCachedData(){
    this.setPlanUsageData(null), this.setSpendLimitUsageData(null), this.setDisplayMessageData(null), this.setAutoModelSelectedDisplayMessageData(null), this.setNamedModelSelectedDisplayMessageData(null), this.setAutoBucketModelsData([]), this.setPlanInfoData(null), this.setNextUpgradeData(null), this.setError(null), this.setUsageDisplayEnabled(!0), this.lastFetchTime=0, this.lastPlanInfoFetchTime=0, this.planInfoFetchInProgress=null
  }
  dispose(){
    this.stopAutoRefresh(), super.dispose()
  }
}, ffa=__decorate([__param(0, wg), __param(1, ku)], ffa), Vi(smn, ffa, 1)
}
}), sP, rie=