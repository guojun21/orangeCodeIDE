// Module: out-build/vs/workbench/services/agentData/browser/artifactCacheService.js
// Offset: 30759187 (bundle byte offset)
// Size: 4532 bytes

yn(), rt(), Wt(), Er(), Vw(), t_i(), jkf="backgroundComposerArtifactCache", zkf=1, r1t="artifacts", Emu=7200*60*1e3, xmu=32*1024*1024, Vkf=512*1024, Tmu=xi("artifactCacheService"), Kkf=class{
  constructor(n){
    this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._url=n
  }
  get url(){
    return this._url
  }
  update(n){
    n!==this._url&&(this._url=n, this._onDidChange.fire(n))
  }
  dispose(){
    this._onDidChange.dispose()
  }
}, S0a=class extends at{
  constructor(e){
    super(), this._aiService=e, this._activeBlobUrls=new Map, this._inflightFetches=new Map, this._inflightRevalidations=new Set, this._lastFetchedAt=new Map, this._handles=new Map
  }
  async resolveArtifactUrl(e, t, i){
    if(!Nny(t)){
      const l=await this._resolveViaPresignedUrl(e,t,i);
      return this._getOrCreateHandle(Gkf(e,t),l)
    }
    const r=Gkf(e, t), s=this._activeBlobUrls.get(r);
    if(s)return this._maybeRevalidateInBackground(e, t, r), this._getOrCreateHandle(r, s);
    const o=this._inflightFetches.get(r);
    if(o)return o;
    const a=this._resolveWithDiskCache(e, t, r, i);
    return this._inflightFetches.set(r, a), a.finally(()=>{
      this._inflightFetches.delete(r)
    }), a
  }
  _getOrCreateHandle(e, t){
    let i=this._handles.get(e);
    return i?(i.update(t), i):(i=new Kkf(t), this._handles.set(e, i), i)
  }
  async _resolveWithDiskCache(e, t, i, r){
    const s=await this._idbGet(i);
    if(s){
      const o=Qkf(s.content,s.contentType);
      return this._activeBlobUrls.set(i,o),Wkf(s)&&this._revalidate(e,t,i),this._getOrCreateHandle(i,o)
    }
    return await this._fetchAndCache(e, t, i, r), this._handles.get(i)
  }
  async _fetchAndCache(e, t, i, r){
    const{
      arrayBuffer:s,contentType:o,totalSize:a
    }
    =await this._streamArtifact(e, t, r), l=this._activeBlobUrls.get(i);
    if(l){
      const d=await this._idbGet(i);
      if(d&&Mny(d.content,s)){
        a<=xmu&&this._idbPut(i,{
          content:d.content,contentType:o,savedAt:Date.now()
        }).catch(()=>{
          
        }),this._lastFetchedAt.set(i,Date.now());
        return
      }
    }
    a<=xmu&&this._idbPut(i, {
      content:s,contentType:o,savedAt:Date.now()
    }).catch(()=>{
      
    });
    const u=Qkf(s, o);
    this._activeBlobUrls.set(i, u), this._lastFetchedAt.set(i, Date.now()), l&&URL.revokeObjectURL(l), this._getOrCreateHandle(i, u)
  }
  async _streamArtifact(e, t, i){
    const r=await this._aiService.backgroundComposerClient();
    try{
      const s=r.streamBackgroundComposerArtifact({
        bcId:e,absolutePath:t
      },i?{
        signal:i
      }
      :void 0);
      let o="application/octet-stream",a=0;
      const l=[];
      for await(const d of s)d.contentType&&(o=d.contentType),d.totalSize&&(a=Number(d.totalSize)),d.contentChunk.length>0&&l.push(d.contentChunk);
      const u=Fny(l,a);
      return a===0&&(a=u.byteLength),{
        arrayBuffer:u,contentType:o,totalSize:a
      }
    }
    catch{
      const s=await r.getBackgroundComposerArtifactBytes({
        bcId:e,absolutePath:t
      },i?{
        signal:i
      }
      :void 0),o=s.content.buffer.slice(s.content.byteOffset,s.content.byteOffset+s.content.byteLength),a=s.contentType||"application/octet-stream";
      return{
        arrayBuffer:o,contentType:a,totalSize:o.byteLength
      }
    }
  }
  _maybeRevalidateInBackground(e, t, i){
    this._inflightRevalidations.has(i)||this._idbGet(i).then(r=>{
      if(r){
        Wkf(r)&&this._revalidate(e,t,i);
        return
      }
      const s=this._lastFetchedAt.get(i);
      (!s||Date.now()-s>Emu)&&this._revalidate(e,t,i)
    }).catch(()=>{
      
    })
  }
  _revalidate(e, t, i){
    this._inflightRevalidations.has(i)||(this._inflightRevalidations.add(i), this._fetchAndCache(e, t, i, void 0).catch(()=>{
      
    }).finally(()=>{
      this._inflightRevalidations.delete(i)
    }))
  }
  async _resolveViaPresignedUrl(e, t, i){
    return(await(await this._aiService.backgroundComposerClient()).getBackgroundComposerArtifact({
      bcId:e,absolutePath:t
    }, i?{
      signal:i
    }
    :void 0)).url
  }
  _getDb(){
    return this._dbPromise||(this._dbPromise=new Promise((e, t)=>{
      const i=indexedDB.open(jkf,zkf);
      i.onupgradeneeded=()=>{
        const r=i.result;
        r.objectStoreNames.contains(r1t)||r.createObjectStore(r1t)
      },i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)
    })), this._dbPromise
  }
  async _idbGet(e){
    const t=await this._getDb();
    return new Promise((i, r)=>{
      const a=t.transaction(r1t,"readonly").objectStore(r1t).get(e);
      a.onsuccess=()=>i(a.result),a.onerror=()=>r(a.error)
    })
  }
  async _idbPut(e, t){
    const i=await this._getDb();
    return new Promise((r, s)=>{
      const l=i.transaction(r1t,"readwrite").objectStore(r1t).put(t,e);
      l.onsuccess=()=>r(),l.onerror=()=>s(l.error)
    })
  }
  dispose(){
    super.dispose();
    for(const e of this._activeBlobUrls.values())URL.revokeObjectURL(e);
    this._activeBlobUrls.clear();
    for(const e of this._handles.values())e.dispose();
    this._handles.clear(), this._dbPromise?.then(e=>e.close()).catch(()=>{
      
    }), this._dbPromise=void 0
  }
}, S0a=__decorate([__param(0, Jv)], S0a), Vi(Tmu, S0a, 1)
}
}), Uny, Ykf, Zkf, Xkf, e1f, t1f, hX, k0a, n1f, $ny, i1f, bA, r1f, s1f, o1f, a1f, c1f, l1f, xQ, yMe, u1f, Imu, RU, t1=