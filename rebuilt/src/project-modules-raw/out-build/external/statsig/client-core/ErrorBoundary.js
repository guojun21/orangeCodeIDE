// Module: out-build/external/statsig/client-core/ErrorBoundary.js
// Offset: 26691561 (bundle byte offset)
// Size: 1609 bytes

eie(), enu(), Zpa(), C2g="https://statsigapi.net/v1/sdk_exception", tnu="[Statsig] UnknownError", S2g=class{
  constructor(n, e, t, i){
    this._sdkKey=n, this._options=e, this._emitter=t, this._lastSeenError=i, this._seen=new Set
  }
  wrap(n){
    try{
      const e=n;
      aMA(e).forEach(t=>{
        const i=e[t];
        "$EB"in i||(e[t]=(...r)=>this._capture(t,()=>i.apply(n,r)),e[t].$EB=!0)
      })
    }
    catch(e){
      this._onError("eb:wrap",e)
    }
  }
  logError(n, e){
    this._onError(n, e)
  }
  getLastSeenErrorAndReset(){
    const n=this._lastSeenError;
    return this._lastSeenError=void 0, n??null
  }
  attachErrorIfNoneExists(n){
    this._lastSeenError||(this._lastSeenError=_2g(n))
  }
  _capture(n, e){
    try{
      const t=e();
      return t&&t instanceof Promise?t.catch(i=>this._onError(n,i)):t
    }
    catch(t){
      return this._onError(n,t),null
    }
  }
  _onError(n, e){
    try{
      CI.warn(`Caught error in ${n}`,{
        error:e
      }),(async()=>{
        const i=e||Error(tnu),r=i instanceof Error,s=r?i.name:"No Name",o=_2g(i);
        if(this._lastSeenError=o,this._seen.has(s))return;
        if(this._seen.add(s),this._options?.networkConfig?.preventAllNetworkTraffic){
          this._emitter?.({
            name:"error",error:e,tag:n
          });
          return
        }
        const a=Gbi._get(this._sdkKey),l=jtu.get(),u=r?i.stack:oMA(i),d={
          tag:n,exception:s,info:u,statsigOptions:cMA(this._options),...l,sdkType:a
        };
        await(this._options?.networkConfig?.networkOverrideFunc??fetch)(C2g,{
          method:"POST",headers:{
            "STATSIG-API-KEY":this._sdkKey,"STATSIG-SDK-TYPE":String(a),"STATSIG-SDK-VERSION":String(l.sdkVersion),"Content-Type":"application/json"
          },body:JSON.stringify(d)
        }),this._emitter?.({
          name:"error",error:e,tag:n
        })
      })().then(()=>{
        
      }).catch(()=>{
        
      })
    }
    catch{
      
    }
  }
}
}
}), lMA=