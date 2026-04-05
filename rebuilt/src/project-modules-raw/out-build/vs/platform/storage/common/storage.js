// Module: out-build/vs/platform/storage/common/storage.js
// Offset: 946910 (bundle byte offset)
// Size: 7405 bytes

vr(), yn(), rt(), O4(), Js(), W1c(), Wt(), m0(), tEc="__$__isNewStorageMarker", X4n="__$__targetStorageMarker", Hi=xi("storageService"), (function(n){
  n[n.NONE=0]="NONE", n[n.SHUTDOWN=1]="SHUTDOWN"
})(bW||(bW={
  
})), (function(n){
  n[n.APPLICATION=-1]="APPLICATION", n[n.PROFILE=0]="PROFILE", n[n.WORKSPACE=1]="WORKSPACE"
})(ohh||(ohh={
  
})), (function(n){
  n[n.USER=0]="USER", n[n.MACHINE=1]="MACHINE"
})(ahh||(ahh={
  
})), G4o=class FJb extends at{
  static{
    this.DEFAULT_FLUSH_INTERVAL=60*1e3
  }
  constructor(e={
    flushInterval:FJb.DEFAULT_FLUSH_INTERVAL
  }){
    super(), this._onDidChangeValue=this._register(new zj), this._onDidChangeTarget=this._register(new zj), this.onDidChangeTarget=this._onDidChangeTarget.event, this._onWillSaveState=this._register(new Qe), this.onWillSaveState=this._onWillSaveState.event, this.runFlushWhenIdle=this._register(new uo), this._workspaceKeyTargets=void 0, this._profileKeyTargets=void 0, this._applicationKeyTargets=void 0, this.onDiskShouldSaveCallbacks=[], this.flushWhenIdleScheduler=this._register(new Hu(()=>this.doFlushWhenIdle(), e.flushInterval))
  }
  onDidChangeValue(e, t, i){
    return In.filter(this._onDidChangeValue.event, r=>r.scope===e&&(t===void 0||r.key===t), i)
  }
  doFlushWhenIdle(){
    this.runFlushWhenIdle.value=Mze(()=>{
      this.shouldFlushWhenIdle()&&this.flush(),this.flushWhenIdleScheduler.schedule()
    })
  }
  shouldFlushWhenIdle(){
    return!0
  }
  stopFlushWhenIdle(){
    Bo([this.runFlushWhenIdle, this.flushWhenIdleScheduler])
  }
  initialize(){
    return this.initializationPromise||(this.initializationPromise=(async()=>{
      Yh("code/willInitStorage");
      try{
        await this.doInitialize()
      }
      finally{
        Yh("code/didInitStorage")
      }
      this.flushWhenIdleScheduler.schedule()
    })()), this.initializationPromise
  }
  emitDidChangeValue(e, t){
    const{
      key:i,external:r
    }
    =t;
    if(i===X4n){
      switch(e){
        case-1:this._applicationKeyTargets=void 0;
        break;
        case 0:this._profileKeyTargets=void 0;
        break;
        case 1:this._workspaceKeyTargets=void 0;
        break
      }
      this._onDidChangeTarget.fire({
        scope:e
      })
    }
    else this._onDidChangeValue.fire({
      scope:e,key:i,target:this.getKeyTargets(e)[i],external:r
    })
  }
  emitWillSaveState(e){
    this._onWillSaveState.fire({
      reason:e
    })
  }
  get(e, t, i){
    return this.getStorage(t)?.get(e, i)
  }
  getBoolean(e, t, i){
    return this.getStorage(t)?.getBoolean(e, i)
  }
  getNumber(e, t, i){
    return this.getStorage(t)?.getNumber(e, i)
  }
  getObject(e, t, i){
    return this.getStorage(t)?.getObject(e, i)
  }
  storeAll(e, t){
    this.withPausedEmitters(()=>{
      for(const i of e)this.store(i.key,i.value,i.scope,i.target,t)
    })
  }
  store(e, t, i, r, s=!1){
    if(gA(t)){
      this.remove(e,i,s);
      return
    }
    this.withPausedEmitters(()=>{
      this.updateKeyTarget(e,i,r),this.getStorage(i)?.set(e,t,s)
    })
  }
  remove(e, t, i=!1){
    this.withPausedEmitters(()=>{
      this.updateKeyTarget(e,t,void 0),this.getStorage(t)?.delete(e,i)
    })
  }
  withPausedEmitters(e){
    this._onDidChangeValue.pause(), this._onDidChangeTarget.pause();
    try{
      e()
    }
    finally{
      this._onDidChangeValue.resume(),this._onDidChangeTarget.resume()
    }
  }
  keys(e, t){
    const i=[], r=this.getKeyTargets(e);
    for(const s of Object.keys(r))r[s]===t&&i.push(s);
    return i
  }
  updateKeyTarget(e, t, i, r=!1){
    const s=this.getKeyTargets(t);
    typeof i=="number"?s[e]!==i&&(s[e]=i, this.getStorage(t)?.set(X4n, JSON.stringify(s), r)):typeof s[e]=="number"&&(delete s[e], this.getStorage(t)?.set(X4n, JSON.stringify(s), r))
  }
  get workspaceKeyTargets(){
    return this._workspaceKeyTargets||(this._workspaceKeyTargets=this.loadKeyTargets(1)), this._workspaceKeyTargets
  }
  get profileKeyTargets(){
    return this._profileKeyTargets||(this._profileKeyTargets=this.loadKeyTargets(0)), this._profileKeyTargets
  }
  get applicationKeyTargets(){
    return this._applicationKeyTargets||(this._applicationKeyTargets=this.loadKeyTargets(-1)), this._applicationKeyTargets
  }
  getKeyTargets(e){
    switch(e){
      case-1:return this.applicationKeyTargets;
      case 0:return this.profileKeyTargets;
      default:return this.workspaceKeyTargets
    }
  }
  loadKeyTargets(e){
    const t=this.getStorage(e);
    return t?toA(t):Object.create(null)
  }
  isNew(e){
    return this.getBoolean(tEc, e)===!0
  }
  async cursorDiskKVGet(e, t){
    return this.getStorage(-1)?.cursorDiskKVGet(e, t)
  }
  async cursorDiskKVGetWithLogs(e){
    return await this.getStorage(-1)?.cursorDiskKVGetWithLogs(e)??{
      result:void 0,logs:[`[storage] StorageService.cursorDiskKVGetWithLogs: ${e} undefined storage`]
    }
  }
  async cursorDiskKVGetBatch(e){
    return await this.getStorage(-1)?.cursorDiskKVGetBatch(e)??[]
  }
  async cursorDiskKVSet(e, t){
    return this.getStorage(-1)?.cursorDiskKVSet(e, t)
  }
  async cursorDiskKVSetBinary(e, t){
    return this.getStorage(-1)?.cursorDiskKVSetBinary(e, t)
  }
  async cursorDiskKVGetBinary(e){
    return this.getStorage(-1)?.cursorDiskKVGetBinary(e)
  }
  async cursorDiskKVClearPrefix(e){
    return this.getStorage(-1)?.cursorDiskKVClearPrefix(e)
  }
  async cursorDiskKVGetPrefix(e){
    return this.getStorage(-1)?.cursorDiskKVGetPrefix(e)??[]
  }
  async cursorDiskKVGetPrefixKeys(e){
    return this.getStorage(-1)?.cursorDiskKVGetPrefixKeys(e)??[]
  }
  async cursorDiskKVGetPrefixBinary(e){
    return this.getStorage(-1)?.cursorDiskKVGetPrefixBinary(e)??[]
  }
  cursorDiskKVOnShouldSave(e){
    return this.onDiskShouldSaveCallbacks.push(e), {
      dispose:()=>{
        this.onDiskShouldSaveCallbacks=this.onDiskShouldSaveCallbacks.filter(t=>t!==e)
      }
    }
  }
  async flush(e=bW.NONE){
    this._onWillSaveState.fire({
      reason:e
    });
    const t=this.getStorage(-1), i=this.getStorage(0), r=this.getStorage(1);
    switch(e){
      case bW.NONE:for(const s of this.onDiskShouldSaveCallbacks)try{
        s(e).catch(console.error)
      }
      catch{
        
      }
      await ib.settled([t?.whenFlushed()??Promise.resolve(),i?.whenFlushed()??Promise.resolve(),r?.whenFlushed()??Promise.resolve()]);
      break;
      case bW.SHUTDOWN:for(const s of this.onDiskShouldSaveCallbacks)try{
        await s(e)
      }
      catch(o){
        console.error(o)
      }
      await ib.settled([t?.flush(0)??Promise.resolve(),i?.flush(0)??Promise.resolve(),r?.flush(0)??Promise.resolve()]);
      break
    }
  }
  async log(){
    const e=this.getStorage(-1)?.items??new Map, t=this.getStorage(0)?.items??new Map, i=this.getStorage(1)?.items??new Map;
    return noA(e, t, i, this.getLogDetails(-1)??"", this.getLogDetails(0)??"", this.getLogDetails(1)??"")
  }
  async optimize(e){
    return await this.flush(), this.getStorage(e)?.optimize()
  }
  async getStorageStats(e){
    return this.getStorage(e)?.getStorageStats()
  }
  async switch(e, t){
    return this.emitWillSaveState(bW.NONE), K5e(e)?this.switchToProfile(e, t):this.switchToWorkspace(e, t)
  }
  canSwitchProfile(e, t){
    return!(e.id===t.id||J4o(t)&&J4o(e))
  }
  switchData(e, t, i){
    this.withPausedEmitters(()=>{
      const r=new Set;
      for(const[s,o]of e)r.add(s),t.get(s)!==o&&this.emitDidChangeValue(i,{
        key:s,external:!0
      });
      for(const[s]of t.items)r.has(s)||this.emitDidChangeValue(i,{
        key:s,external:!0
      })
    })
  }
}, chh=class extends G4o{
  constructor(){
    super(), this.applicationStorage=this._register(new gVe(new $4o, {
      hint:pVe.STORAGE_IN_MEMORY
    })), this.profileStorage=this._register(new gVe(new $4o, {
      hint:pVe.STORAGE_IN_MEMORY
    })), this.workspaceStorage=this._register(new gVe(new $4o, {
      hint:pVe.STORAGE_IN_MEMORY
    })), this._register(this.workspaceStorage.onDidChangeStorage(n=>this.emitDidChangeValue(1, n))), this._register(this.profileStorage.onDidChangeStorage(n=>this.emitDidChangeValue(0, n))), this._register(this.applicationStorage.onDidChangeStorage(n=>this.emitDidChangeValue(-1, n)))
  }
  getStorage(n){
    switch(n){
      case-1:return this.applicationStorage;
      case 0:return this.profileStorage;
      default:return this.workspaceStorage
    }
  }
  getLogDetails(n){
    switch(n){
      case-1:return"inMemory (application)";
      case 0:return"inMemory (profile)";
      default:return"inMemory (workspace)"
    }
  }
  async doInitialize(){
    
  }
  async switchToProfile(){
    
  }
  async switchToWorkspace(){
    
  }
  shouldFlushWhenIdle(){
    return!1
  }
  hasScope(n){
    return!1
  }
}
}
}), eOn, lhh, ioA=