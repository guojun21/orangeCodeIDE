// Module: out-build/vs/base/parts/storage/common/storage.js
// Offset: 909630 (bundle byte offset)
// Size: 5008 bytes

vr(), yn(), rt(), UB(), Js(), (function(n){
  n[n.STORAGE_DOES_NOT_EXIST=0]="STORAGE_DOES_NOT_EXIST", n[n.STORAGE_IN_MEMORY=1]="STORAGE_IN_MEMORY"
})(pVe||(pVe={
  
})), (function(n){
  n[n.None=0]="None", n[n.Initialized=1]="Initialized", n[n.Closed=2]="Closed"
})(xSe||(xSe={
  
})), gVe=class NJb extends at{
  static{
    this.DEFAULT_FLUSH_DELAY=100
  }
  constructor(e, t=Object.create(null)){
    super(), this.database=e, this.options=t, this._onDidChangeStorage=this._register(new zj), this.onDidChangeStorage=this._onDidChangeStorage.event, this.state=xSe.None, this.cache=new Map, this.flushDelayer=this._register(new L4(NJb.DEFAULT_FLUSH_DELAY)), this.pendingDeletes=new Set, this.pendingInserts=new Map, this.pendingClose=void 0, this.whenFlushedCallbacks=[], this.registerListeners()
  }
  registerListeners(){
    this._register(this.database.onDidChangeItemsExternal(e=>this.onDidChangeItemsExternal(e)))
  }
  onDidChangeItemsExternal(e){
    this._onDidChangeStorage.pause();
    try{
      e.changed?.forEach((t,i)=>this.acceptExternal(i,t)),e.deleted?.forEach(t=>this.acceptExternal(t,void 0))
    }
    finally{
      this._onDidChangeStorage.resume()
    }
  }
  acceptExternal(e, t){
    if(this.state===xSe.Closed)return;
    let i=!1;
    gA(t)?i=this.cache.delete(e):this.cache.get(e)!==t&&(this.cache.set(e, t), i=!0), i&&this._onDidChangeStorage.fire({
      key:e,external:!0
    })
  }
  get items(){
    return this.cache
  }
  get size(){
    return this.cache.size
  }
  async init(){
    this.state===xSe.None&&(this.state=xSe.Initialized, this.options.hint!==pVe.STORAGE_DOES_NOT_EXIST&&(this.cache=await this.database.getItems()))
  }
  cursorDiskKVGet(e, t){
    return this.database.cursorDiskKVGet(e, t)
  }
  cursorDiskKVGetWithLogs(e){
    return this.database.cursorDiskKVGetWithLogs(e)
  }
  cursorDiskKVGetBatch(e){
    return this.database.cursorDiskKVGetBatch(e)
  }
  cursorDiskKVSet(e, t){
    return this.database.cursorDiskKVSet(e, t)
  }
  cursorDiskKVSetBinary(e, t){
    return this.database.cursorDiskKVSetBinary(e, t)
  }
  cursorDiskKVGetBinary(e){
    return this.database.cursorDiskKVGetBinary(e)
  }
  cursorDiskKVClearPrefix(e){
    return this.database.cursorDiskKVClearPrefix(e)
  }
  cursorDiskKVGetPrefix(e){
    return this.database.cursorDiskKVGetPrefix(e)
  }
  cursorDiskKVGetPrefixKeys(e){
    return this.database.cursorDiskKVGetPrefixKeys(e)
  }
  cursorDiskKVGetPrefixBinary(e){
    return this.database.cursorDiskKVGetPrefixBinary(e)
  }
  get(e, t){
    const i=this.cache.get(e);
    return gA(i)?t:i
  }
  getBoolean(e, t){
    const i=this.get(e);
    return gA(i)?t:i==="true"
  }
  getNumber(e, t){
    const i=this.get(e);
    return gA(i)?t:parseFloat(i)
  }
  getObject(e, t){
    const i=this.get(e);
    return gA(i)?t:gW(i)
  }
  async set(e, t, i=!1){
    if(this.state===xSe.Closed)return;
    if(gA(t))return this.delete(e, i);
    const r=$g(t)||Array.isArray(t)?G1c(t):String(t);
    if(this.cache.get(e)!==r)return this.cache.set(e, r), this.pendingInserts.set(e, r), this.pendingDeletes.delete(e), this._onDidChangeStorage.fire({
      key:e,external:i
    }), this.doFlush()
  }
  async delete(e, t=!1){
    if(!(this.state===xSe.Closed||!this.cache.delete(e)))return this.pendingDeletes.has(e)||this.pendingDeletes.add(e), this.pendingInserts.delete(e), this._onDidChangeStorage.fire({
      key:e,external:t
    }), this.doFlush()
  }
  async optimize(){
    if(this.state!==xSe.Closed)return await this.flush(0), this.database.optimize()
  }
  async getStorageStats(){
    return this.database.getStorageStats?.()
  }
  async close(){
    return this.pendingClose||(this.pendingClose=this.doClose()), this.pendingClose
  }
  async doClose(){
    this.state=xSe.Closed;
    try{
      await this.doFlush(0)
    }
    catch{
      
    }
    await this.database.close(()=>this.cache)
  }
  get hasPending(){
    return this.pendingInserts.size>0||this.pendingDeletes.size>0
  }
  async flushPending(){
    if(!this.hasPending)return;
    const e={
      insert:this.pendingInserts,delete:this.pendingDeletes
    };
    return this.pendingDeletes=new Set, this.pendingInserts=new Map, this.database.updateItems(e).finally(()=>{
      if(!this.hasPending)for(;
      this.whenFlushedCallbacks.length;
      )this.whenFlushedCallbacks.pop()?.()
    })
  }
  async flush(e){
    if(!(this.state===xSe.Closed||this.pendingClose))return this.doFlush(e)
  }
  async doFlush(e){
    return this.options.hint===pVe.STORAGE_IN_MEMORY?this.flushPending():this.flushDelayer.trigger(()=>this.flushPending(), e)
  }
  async whenFlushed(){
    if(this.hasPending)return new Promise(e=>this.whenFlushedCallbacks.push(e))
  }
  isInMemory(){
    return this.options.hint===pVe.STORAGE_IN_MEMORY
  }
}, $4o=class{
  constructor(){
    this.onDidChangeItemsExternal=In.None, this.items=new Map
  }
  async getItems(){
    return this.items
  }
  async cursorDiskKVGet(n, e){
    e?.(`[storage] InMemoryStorageDatabase.cursorDiskKVGet: ${n} undefined`)
  }
  async cursorDiskKVGetWithLogs(n){
    return{
      result:void 0,logs:[`[storage] InMemoryStorageDatabase.cursorDiskKVGetWithLogs: ${n} undefined`]
    }
  }
  async cursorDiskKVGetBatch(n){
    return[]
  }
  async cursorDiskKVSet(n, e){
    
  }
  async cursorDiskKVSetBinary(n, e){
    
  }
  async cursorDiskKVGetBinary(n){
    
  }
  async cursorDiskKVClearPrefix(n){
    
  }
  async cursorDiskKVGetPrefix(n){
    return[]
  }
  async cursorDiskKVGetPrefixKeys(n){
    return[]
  }
  async cursorDiskKVGetPrefixBinary(n){
    return[]
  }
  async updateItems(n){
    n.insert?.forEach((e, t)=>this.items.set(t, e)), n.delete?.forEach(e=>this.items.delete(e))
  }
  async optimize(){
    
  }
  async close(){
    
  }
}
}
}), lg, MY, qg=