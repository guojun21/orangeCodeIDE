// Module: out-build/vs/workbench/contrib/composer/browser/composerDataHandle.js
// Offset: 26841059 (bundle byte offset)
// Size: 9736 bytes

rt(), kr(), jk(), vhn(), yhn(), wSt(), Ott(), VA(), fN(), of(), gT(), Ti(), Ntt(), vr(), M4(), fE(), hD(), pFg=1e3, gFg=1, fFg=3e4, hga="ofsContent", mga=class{
  constructor(e, t, i, r, s, o, a){
    this.storageService=e, this.composerCheckpointStorageService=t, this.composerMessageStorageService=i, this.composerCodeBlockDiffStorageService=r, this.modelConfigService=s, this.metricsService=o, this.aiServerConfigService=a
  }
  registerSaveHook(e){
    return this.storageService.cursorDiskKVOnShouldSave(e)
  }
  async load(e, t){
    const{
      result:i,logs:r
    }
    =await this.storageService.cursorDiskKVGetWithLogs(this.getComposerDataStorageKey(e));
    if(r.forEach(l=>t(l)), t(`[composer] getHandle: ${e} value=${i?"exists":"undefined"}`), !i)return;
    const s=await vNA(i, {
      composerCheckpointStorageService:this.composerCheckpointStorageService,composerMessageStorageService:this.composerMessageStorageService,composerCodeBlockDiffStorageService:this.composerCodeBlockDiffStorageService,modelConfigService:this.modelConfigService,storageService:this.storageService
    }), a=Object.entries(s.originalFileStates??{
      
    }).filter(([l, u])=>u.contentKey&&u.content===void 0);
    if(a.length>0){
      const l=a.map(([d])=>d),u=await d2A(this.storageService,e,l);
      for(const[d,m]of a){
        const p=u.get(d);
        m.content=p??"",p===void 0&&console.warn(`[composer] Missing ofsContent for ${m.contentKey} in ${e.slice(0,8)}`)
      }
    }
    return t(`[composer] getHandle: ${e} deserialized`), s.hasLoaded=!1, s
  }
  async persistLoadedComposer(e){
    const t=[], i=new Map;
    for(const[g, f]of Object.entries(e.originalFileStates??{
      
    }))f?.content!==void 0&&(t.push({
      uriStr:g,content:f.content
    }), i.set(g, vnu(e.composerId, g)));
    t.length>0&&await u2A(this.storageService, e.composerId, t).catch(g=>{
      Sw(g,{
        tags:{
          client_error_type:"persistLoadedComposer_ofsContent"
        }
      })
    });
    const r=performance.now(), s=XNg(e, i.size>0?i:void 0), o=performance.now()-r, a=performance.now();
    await this.storageService.cursorDiskKVSet(this.getComposerDataStorageKey(e.composerId), s).catch(g=>{
      Sw(g,{
        tags:{
          client_error_type:"persistLoadedComposer"
        }
      })
    });
    const l=performance.now()-a, u=this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers??!1, d={
      "metrics.version":gFg.toString(),"user.dev":u.toString()
    };
    this.metricsService.distribution({
      stat:"renderer.composer.persist.serialize_ms",value:o,tags:d
    }), this.metricsService.distribution({
      stat:"renderer.composer.persist.kv_set_ms",value:l,tags:d
    });
    let m;
    if(e.createdFromBackgroundAgent?.shouldStreamMessages){
      const g=e.agentSessionId!==void 0?e.createdFromBackgroundAgent?.kickoffMessageId:void 0,f=g!==void 0?e.fullConversationHeadersOnly.findIndex(A=>A.bubbleId===g||A.serverBubbleId===g):-1;
      m=e.fullConversationHeadersOnly.filter((A,w)=>{
        const C=f!==-1&&w<=f,x=A.serverBubbleId!==void 0&&A.serverBubbleId.length>0;
        return C||x
      }).map(A=>e.conversationMap[A.bubbleId]).filter(A=>A!==void 0)
    }
    else m=Object.values(e.conversationMap);
    if(m.length===0)return;
    const p=5;
    for(let g=0;
    g<m.length;
    g+=p){
      const f=m.slice(g,g+p);
      await Promise.all(f.map(A=>this.composerMessageStorageService.storeMessage(e.composerId,A).catch(w=>{
        Sw(w,{
          tags:{
            client_error_type:"persistLoadedComposer"
          }
        })
      }))),await new Promise(A=>setTimeout(A,0))
    }
  }
  async deleteComposer(e){
    await Promise.all([this.storageService.cursorDiskKVSet(this.getComposerDataStorageKey(e), void 0), h2A(this.storageService, e)])
  }
  getComposerDataStorageKey(e){
    return KNg(e)
  }
}, mga=__decorate([__param(0, Hi), __param(1, Ctt), __param(2, Ftt), __param(3, _$e), __param(4, ix), __param(5, R1), __param(6, Vk)], mga), jbi=class extends at{
  constructor(e, t, i, r, s){
    super(), this.backend=e, this.composerWasLoadedHook=t, this.composerWasUnloadedHook=i, this.loadedComposers=r, this.clientNumericMetricsService=s, this.refById=new Map, this.metricsTimer=this._register(new woe), this.gcIntervalTimer=this._register(new woe), this.finalizingComposers=new Set, this.dirtyComposers=new Set, this.dirtyPersistScheduler=this._register(new Hu(()=>this.doDirtyPersistWhenIdle(), fFg)), this.runDirtyPersistWhenIdle=this._register(new uo);
    const o=this.backend.registerSaveHook?.(async a=>{
      if(a!==bW.SHUTDOWN)return;
      const l=ZC(this.loadedComposers.byId);
      await Promise.allSettled([...Object.values(l).map(u=>this.persistLoadedComposer(u).catch(d=>{
        Sw(d,{
          tags:{
            client_error_type:"persistLoadedComposer"
          }
        })
      }))]),this.dirtyComposers.clear()
    });
    o&&this._register(o), this.metricsTimer.cancelAndSet(()=>{
      this.clientNumericMetricsService.report("client.loadedComposers.ids.length",this.loadedComposers.ids.length),this.clientNumericMetricsService.report("client.refById.size",this.refById.size),this.clientNumericMetricsService.report("client.dirtyComposers.size",this.dirtyComposers.size)
    }, 6e4), this.gcIntervalTimer.cancelAndSet(()=>{
      this.runGarbageCollection()
    }, pFg), this.dirtyPersistScheduler.schedule()
  }
  dispose(){
    super.dispose(), this.gcIntervalTimer.dispose(), this.metricsTimer.dispose(), this.dirtyPersistScheduler.dispose(), this.runDirtyPersistWhenIdle.dispose()
  }
  doDirtyPersistWhenIdle(){
    this.runDirtyPersistWhenIdle.value=Mze(()=>{
      this.persistDirtyComposers(),this.dirtyPersistScheduler.schedule()
    })
  }
  markDirty(e){
    this.dirtyComposers.add(e)
  }
  async persistDirtyComposers(){
    if(this.dirtyComposers.size===0)return;
    const e=[...this.dirtyComposers];
    this.dirtyComposers.clear();
    const t=ZC(this.loadedComposers.byId);
    await Promise.allSettled(e.map(async i=>{
      const r=t[i];
      r&&await this.persistLoadedComposer(r).catch(s=>{
        this.dirtyComposers.add(i),Sw(s,{
          tags:{
            client_error_type:"persistDirtyComposer"
          }
        })
      })
    }))
  }
  runGarbageCollection(){
    const e=[];
    for(const[t, i]of this.refById)i.type==="REF"&&!i.ref.deref()&&e.push({
      composerId:t,deleteOnUnload:i.deleteOnUnload
    });
    for(const{
      composerId:t,deleteOnUnload:i
    }
    of e){
      const r=this.refById.get(t);
      r?.type==="REF"&&!r.ref.deref()&&this.startFinalization(t,i).finally(()=>{
        this.refById.get(t)?.type==="FINALIZING"&&this.refById.delete(t)
      })
    }
  }
  startFinalization(e, t){
    const i=this.finalizeComposer(e, t);
    return this.refById.set(e, {
      type:"FINALIZING",promise:i
    }), i
  }
  async finalizeComposer(e, t){
    if(this.finalizingComposers.has(e)){
      const r=new Error(`[composer] Invariant violation: double finalization for composer: ${e}`);
      console.error(r.message),Sw(r,{
        tags:{
          client_error_type:"composer_invariant_violation",force_upload:"forced"
        }
      });
      return
    }
    const i=ZC(this.loadedComposers.byId)[e];
    if(i){
      this.finalizingComposers.add(e);
      try{
        ANA(i),this.composerWasUnloadedHook(e),this.loadedComposers.delete(e),t?await this.backend.deleteComposer(e):Cua(i)||await this.backend.persistLoadedComposer(i)
      }
      finally{
        this.finalizingComposers.delete(e)
      }
    }
  }
  async persistLoadedComposer(e){
    await this.backend.persistLoadedComposer(e)
  }
  getHandleIfLoaded(e){
    const t=this.refById.get(e);
    if(t?.type==="REF"){
      const i=t.ref.deref();
      if(i)return i
    }
  }
  getComposerDataIfLoaded(e){
    return sc(()=>this.loadedComposers.byId[e])
  }
  pushComposer(e){
    const t=this.getHandleIfLoaded(e.composerId);
    if(t)return t;
    if(!this.refById.has(e.composerId))return this.registerComposer(e)
  }
  createHandle(e){
    return new bFg(e, this)
  }
  createWeakRef(e){
    return new WeakRef(e)
  }
  registerComposer(e){
    const t=this.createHandle(e.composerId);
    return e.text.length>OJl&&(e.text="", e.richText=""), this.refById.set(e.composerId, {
      type:"REF",ref:this.createWeakRef(t),deleteOnUnload:!1
    }), this.loadedComposers.add(e), this.composerWasLoadedHook(t.data), t
  }
  async deleteComposer(e){
    const t=this.refById.get(e);
    t?.type==="REF"?(await this.startFinalization(e, !0), this.refById.delete(e)):t?.type==="LOADING"?t.deleteOnUnload=!0:t?.type==="FINALIZING"?(await t.promise, await this.backend.deleteComposer(e)):await this.backend.deleteComposer(e)
  }
  async getHandle(e, t){
    const i={
      stack:[],error:void 0,hasError:!1
    };
    try{
      const r=__addDisposableResource(i,VP("getHandle"),!1);
      t=t??(()=>{
        
      });
      const s=this.refById.get(e);
      if(s?.type==="LOADING")return s.promise;
      if(s?.type==="FINALIZING")await s.promise;
      else if(s?.type==="REF"){
        const l=s.ref.deref();
        if(l)return l;
        await this.startFinalization(e,s.deleteOnUnload)
      }
      const o=this.refById.get(e);
      if(o?.type==="LOADING")return o.promise;
      if(o?.type==="REF"){
        const l=o.ref.deref();
        if(l)return l
      }
      const a=this.loadFromStorage(e,t);
      return this.refById.set(e,{
        type:"LOADING",promise:a
      }),a
    }
    catch(r){
      i.error=r,i.hasError=!0
    }
    finally{
      __disposeResources(i)
    }
  }
  async loadFromStorage(e, t){
    const i=new Error("getHandle returned undefined");
    try{
      const r=await this.backend.load(e,t);
      if(r){
        const s=this.refById.get(e);
        if(s?.type==="LOADING"&&s.deleteOnUnload){
          t(`[composer] getHandle: ${e} delete requested during load`),await this.backend.deleteComposer(e),this.refById.delete(e);
          return
        }
        return this.registerComposer(r)
      }
      this.refById.delete(e),Sw(i);
      return
    }
    catch(r){
      t(`[composer] getHandle: ${e} error=${r.stack}`),this.refById.delete(e),console.error("[composer] Error loading composer data:",r);
      return
    }
  }
}, jbi=__decorate([__param(4, y$e)], jbi), bFg=class{
  constructor(n, e){
    this.composerId=n, this.manager=e, this.setData=(...t)=>{
      if(!sc(()=>this.manager.loadedComposers.byId[this.composerId])){
        console.warn("[composer] Attempting to set data on unloaded composer:",this.composerId);
        return
      }
      this.manager.loadedComposers.update(this.composerId,...t),this.manager.markDirty(this.composerId)
    }, this.isDisposed=!1
  }
  get data(){
    const n=sc(()=>this.manager.loadedComposers.byId[this.composerId]);
    if(!n)throw new Error("[composer] No loaded composer found");
    return n
  }
  dispose(){
    
  }
  [Symbol.dispose](){
    this.dispose()
  }
  clone(){
    return this
  }
}, vFg=class bQb{
  constructor(e){
    this.isDisposed=!1, this.setData=(...t)=>{
      this.loadedComposerData[1](...t)
    }, this.loadedComposerData=e
  }
  get composerId(){
    return this.loadedComposerData[0].composerId
  }
  clone(){
    return new bQb(this.loadedComposerData)
  }
  dispose(){
    this.isDisposed=!0
  }
  get data(){
    return this.loadedComposerData[0]
  }
  [Symbol.dispose](){
    this.dispose()
  }
}
}
}), pga, AFg, Anu, ynu, wnu, yFg, wFg, _nu, _Fg, Cnu=