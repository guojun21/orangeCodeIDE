// Module: out-build/vs/workbench/contrib/composer/browser/blobUploadService.js
// Offset: 30654799 (bundle byte offset)
// Size: 3030 bytes

sC(), vr(), rt(), Bc(), Er(), Wt(), kr(), fE(), KKe(), KZ(), Rkf=xi("agentClientService"), kmu=xi("blobUploadService"), Pkf=100, Lkf=3, Nkf=2e3, w0a=class extends at{
  constructor(e, t, i){
    super(), this._agentClientService=e, this._storageService=t, this._metricsService=i, this._queue=[], this._draining=!1, this._drainScheduler=this._register(new Hu(()=>this._drain(), Nkf))
  }
  enqueue(e){
    const t=Tny(e.blobIds, Pkf), i=t.length, r=`fork-${Wr()}`;
    for(let s=0;
    s<t.length;
    s++)this._queue.push({
      conversationId:e.conversationId,forkRequestId:r,blobIds:t[s],chunkIndex:s,totalChunks:i,attempts:0
    });
    this._draining||this._drainScheduler.schedule()
  }
  notifyClone(e){
    this._agentClientService.notifyConversationClone(TC(), {
      conversationId:e.conversationId,sourceConversationId:e.sourceConversationId,sourceRequestId:e.sourceRequestId
    }).catch(t=>{
      console.error("[BlobUploadService] notifyConversationClone failed:",t)
    })
  }
  async _drain(){
    if(!this._draining){
      this._draining=!0;
      try{
        for(;
        this._queue.length>0;
        ){
          const e=this._queue.shift();
          await this._processJob(e)
        }
      }
      finally{
        this._draining=!1
      }
    }
  }
  async _processJob(e){
    const t=performance.now();
    try{
      const i=new eO(this._storageService,e.conversationId),r=TC(),s=[];
      for(const o of e.blobIds){
        const a=await i.getBlob(r,o);
        a&&s.push(new d4c({
          id:o,value:a
        }))
      }
      s.length>0&&(await this._agentClientService.uploadConversationBlobs(TC(),{
        conversationId:e.conversationId,blobs:s,forkRequestId:e.forkRequestId,chunkIndex:e.chunkIndex,totalChunks:e.totalChunks
      }),this._metricsService.increment({
        stat:"composer.blobUpload.uploaded",tags:{
          success:"true"
        }
      }),this._metricsService.distribution({
        stat:"composer.blobUpload.uploadDuration",value:performance.now()-t
      }),this._metricsService.distribution({
        stat:"composer.blobUpload.blobCount",value:s.length
      }))
    }
    catch(i){
      e.attempts++,e.attempts<Lkf?this._queue.push(e):(console.error("[BlobUploadService] chunk upload failed:",i),this._metricsService.increment({
        stat:"composer.blobUpload.uploaded",tags:{
          success:"false"
        }
      }))
    }
  }
}, w0a=__decorate([__param(0, Rkf), __param(1, Hi), __param(2, R1)], w0a), Vi(kmu, w0a, 1)
}
});
function Iny(n, e){
  const t=e.replace(/[.*+?^${
    
  }
  ()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-zA-Z0-9_])${t}([^a-zA-Z0-9_]|$)`, "i").test(n)
}
function Dny(n, e){
  if(!(!e||e.length===0))for(const t of e){
    const i=t.trim();
    if(!(i.length<2)&&Iny(n, i))return i
  }
}
function Bny(n){
  return n._proto?.marketplace?.name==="cursor-public"
}
function Rny(n, e, t){
  const i=n.trim();
  if(i.length===0)return;
  const r=[];
  for(const s of e){
    if(t.has(s.id)||!Bny(s))continue;
    const o=Dny(i, s.tags);
    o!==void 0&&r.push({
      pluginId:s.id,pluginName:s.name,pluginDisplayName:s.displayName||s.name,pluginKeyword:o,pluginLogoUrl:s.publisher?.logoUrl||s.logoUrl
    })
  }
  if(r.length!==0)return r.sort((s, o)=>{
    if(o.pluginKeyword.length!==s.pluginKeyword.length)return o.pluginKeyword.length-s.pluginKeyword.length;
    const a=s.pluginDisplayName.localeCompare(o.pluginDisplayName);
    return a!==0?a:s.pluginId.localeCompare(o.pluginId)
  }), r[0]
}
var Fkf, Ywi, IM, Okf, hO, kQ=