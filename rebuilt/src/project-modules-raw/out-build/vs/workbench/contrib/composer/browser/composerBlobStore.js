// Module: out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js
// Offset: 26599560 (bundle byte offset)
// Size: 3330 bytes

t8(), sC(), Cbi="agentKv:blob:", wpa="agentKv:checkpoint:", _pa="agentKv:bubbleCheckpoint:", eO=class{
  constructor(n, e){
    this.storageService=n, this.conversationId=e
  }
  keyFor(n){
    return`${Cbi}${sQ(n)}`
  }
  async getBlob(n, e){
    const t={
      stack:[],error:void 0,hasError:!1
    };
    try{
      const i=__addDisposableResource(t,wS(n.withName("ComposerBlobStore.getBlob")),!1),r=this.keyFor(e),s=await this.storageService.cursorDiskKVGetBinary(r);
      if(s!==void 0)return s.length===1&&s[0]===0?new Uint8Array(0):s;
      const o=await this.storageService.cursorDiskKVGet(r);
      if(o)try{
        const a=Zne(o);
        return a.length===1&&a[0]===0?new Uint8Array(0):a
      }
      catch{
        return
      }
      return
    }
    catch(i){
      t.error=i,t.hasError=!0
    }
    finally{
      __disposeResources(t)
    }
  }
  async setBlob(n, e, t){
    const i={
      stack:[],error:void 0,hasError:!1
    };
    try{
      const r=__addDisposableResource(i,wS(n.withName("ComposerBlobStore.setBlob")),!1),s=this.keyFor(e);
      await this.storageService.cursorDiskKVSetBinary(s,t)
    }
    catch(r){
      i.error=r,i.hasError=!0
    }
    finally{
      __disposeResources(i)
    }
  }
  async setBlobLocallyOnly(n, e, t){
    return Promise.resolve()
  }
  requireConversationId(){
    if(!this.conversationId)throw new Error("Conversation ID is required");
    return this.conversationId
  }
  async getLatestCheckpointPointer(){
    const n=await this.storageService.cursorDiskKVGet(`${wpa}${this.requireConversationId()}`);
    return n?Zne(n):void 0
  }
  async getBubbleCheckpoint(n){
    const e=await this.storageService.cursorDiskKVGet(`${_pa}${this.requireConversationId()}:${n}`);
    return e?Zne(e):void 0
  }
  async flush(n){
    return Promise.resolve()
  }
  async clearLegacyCheckpoints(){
    this.conversationId&&await Promise.all([this.storageService.cursorDiskKVClearPrefix(`${wpa}${this.conversationId}`), this.storageService.cursorDiskKVClearPrefix(`${_pa}${this.conversationId}:`)])
  }
}, CNg=class extends eO{
  constructor(){
    super(...arguments), this._writtenBlobIds=[]
  }
  async setBlob(n, e, t){
    await super.setBlob(n, e, t), this._writtenBlobIds.push(e)
  }
  getWrittenBlobIds(){
    return this._writtenBlobIds
  }
}
}
});
async function iNA(n, e){
  try{
    let t=n;
    if("_v"in t&&t._v>=2){
      const{
        messages:o,hasCorruptedCheckpoints:a
      }
      =await e.composerMessageStorageService.getInitialMessages(t.composerId,t.fullConversationHeadersOnly),l={
        
      };
      for(const u of o)l[u.bubbleId]=u;
      t.conversationMap=l,a&&(t.hasCorruptedCheckpoints=!0)
    }
    const r=ONg.sort((o, a)=>o.version-a.version);
    for(const o of r)if(o.check(t)){
      try{
        t=await o.migrate(t,e)
      }
      catch(a){
        const l=`error with migration ${o.version}: ${a}`;
        throw console.error(l),new Error(l)
      }
      t._v=o.version
    }
    const s=t;
    return s.unifiedMode&&typeof s.unifiedMode=="string"&&(s.unifiedMode=s.unifiedMode.toLowerCase()), s.unifiedMode==="background"&&(s.unifiedMode="agent"), s.modelConfig&&(s.modelConfig=e.modelConfigService.fixupModelConfigForCurrentFlag(s.modelConfig)), s
  }
  catch(t){
    const i=`[composerMigrations] error migrating composer instance data: ${t}`;
    throw console.error(i), new Error(i)
  }
}
function rNA(n){
  const e=JSON.parse(n);
  return Object.fromEntries(Object.entries(e).map(([t, i])=>[t, ANg(i)]))
}
function sNA(n){
  let e;
  try{
    if(e=rNA(n), typeof e!="object")throw new Error("[composer] unable to parse bubbleDataMap");
    for(const[t, i]of Object.entries(e))yNg(i);
    return e
  }
  catch(t){
    return console.error("[composer] unable to parse bubbleDataMap", t), {
      
    }
  }
}
var SNg, kNg, ENg, xNg, TNg, INg, DNg, BNg, RNg, PNg, LNg, NNg, MNg, FNg, ONg, oNA=