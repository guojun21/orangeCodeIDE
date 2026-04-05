// Module: out-build/external/statsig/client-core/NetworkCore.js
// Offset: 26700230 (bundle byte offset)
// Size: 5276 bytes

Ttt(), Ttt(), Btu(), eie(), Opa(), AMA(), M2g(), enu(), fSt(), lnu(), tga(), $2g(), Zpa(), $bi(), Wtu(), H2g=1e4, J2g=500, G2g=3e4, W2g=1e3, unu=50, Q2g=unu/W2g, j2g=new Set([408, 500, 502, 503, 504, 522, 524, 599]), z2g=class{
  constructor(n, e){
    this._emitter=e, this._errorBoundary=null, this._timeout=H2g, this._netConfig={
      
    }, this._options={
      
    }, this._leakyBucket={
      
    }, this._lastUsedInitUrl=null, n&&(this._options=n), this._options.networkConfig&&(this._netConfig=this._options.networkConfig), this._netConfig.networkTimeoutMs&&(this._timeout=this._netConfig.networkTimeoutMs), this._fallbackResolver=new N2g(this._options), this.setLogEventCompressionMode(this._getLogEventCompressionMode(n))
  }
  setLogEventCompressionMode(n){
    this._options.logEventCompressionMode=n
  }
  setErrorBoundary(n){
    this._errorBoundary=n, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(n)
  }
  isBeaconSupported(){
    return typeof navigator<"u"&&typeof navigator.sendBeacon=="function"
  }
  getLastUsedInitUrlAndReset(){
    const n=this._lastUsedInitUrl;
    return this._lastUsedInitUrl=null, n
  }
  beacon(n){
    if(!dnu(n))return!1;
    const e=this._getInternalRequestArgs("POST", n), t=this._getPopulatedURL(e), i=navigator;
    return i.sendBeacon.bind(i)(t, e.body)
  }
  async post(n){
    const e=this._getInternalRequestArgs("POST", n);
    return this._tryEncodeBody(e), await this._tryToCompressBody(e), this._sendRequest(e)
  }
  get(n){
    const e=this._getInternalRequestArgs("GET", n);
    return this._sendRequest(e)
  }
  async _sendRequest(n){
    if(!dnu(n)||this._netConfig.preventAllNetworkTraffic)return null;
    const{
      method:e,body:t,retries:i,attempt:r
    }
    =n, s=n.urlConfig.endpoint;
    if(this._isRateLimited(s))return CI.warn(`Request to ${s} was blocked because you are making requests too frequently.`), null;
    const o=r??1, a=typeof AbortController<"u"?new AbortController:null, l=setTimeout(()=>{
      a?.abort(`Timeout of ${this._timeout}ms expired.`)
    }, this._timeout), u=this._getPopulatedURL(n);
    let d=null;
    const m=Gtu();
    try{
      const p={
        method:e,body:t,headers:{
          ...n.headers
        },signal:a?.signal,priority:n.priority,keepalive:m
      };
      DMA(n,o);
      const g=this._leakyBucket[s];
      if(g&&(g.lastRequestTime=Date.now(),this._leakyBucket[s]=g),d=await(this._netConfig.networkOverrideFunc??fetch)(u,p),clearTimeout(l),!d.ok){
        const w=await d.text().catch(()=>"No Text"),C=new Error(`NetworkError: ${u} ${w}`);
        throw C.name="NetworkError",C
      }
      const A=await d.text();
      return q2g(n,d,o,A),this._fallbackResolver.tryBumpExpiryTime(n.sdkKey,n.urlConfig),{
        body:A,code:d.status
      }
    }
    catch(p){
      const g=TMA(a,p),f=IMA(a);
      if(q2g(n,d,o,"",p),await this._fallbackResolver.tryFetchUpdatedFallbackInfo(n.sdkKey,n.urlConfig,g,f)&&(n.fallbackUrl=this._fallbackResolver.getActiveFallbackUrl(n.sdkKey,n.urlConfig)),!i||o>i||!j2g.has(d?.status??500)){
        this._emitter?.({
          name:"error",error:p,tag:U2g.NetworkError,requestArgs:n
        });
        const w=`A networking error occurred during ${e} request to ${u}.`;
        return CI.error(w,g,p),this._errorBoundary?.attachErrorIfNoneExists(w),null
      }
      return await BMA(o),this._sendRequest({
        ...n,retries:i,attempt:o+1
      })
    }
  }
  _getLogEventCompressionMode(n){
    let e=n?.logEventCompressionMode;
    return!e&&n?.disableCompression===!0&&(e=Dtt.Disabled), e||(e=Dtt.Enabled), e
  }
  _isRateLimited(n){
    const e=Date.now(), t=this._leakyBucket[n]??{
      count:0,lastRequestTime:e
    }, i=e-t.lastRequestTime, r=Math.floor(i*Q2g);
    return t.count=Math.max(0, t.count-r), t.count>=unu?!0:(t.count+=1, t.lastRequestTime=e, this._leakyBucket[n]=t, !1)
  }
  _getPopulatedURL(n){
    const e=n.fallbackUrl??n.urlConfig.getUrl();
    (n.urlConfig.endpoint===Cme._initialize||n.urlConfig.endpoint===Cme._download_config_specs)&&(this._lastUsedInitUrl=e);
    const t={
      [v$e.SdkKey]:n.sdkKey,[v$e.SdkType]:Gbi._get(n.sdkKey),[v$e.SdkVersion]:Kpa,[v$e.Time]:String(Date.now()),[v$e.SessionID]:cnu.get(n.sdkKey),...n.params
    }, i=Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&");
    return`${e}${i?`?${
      i
    }
    `:""}`
  }
  _tryEncodeBody(n){
    const e=gSt(), t=n.body;
    if(!(!n.isStatsigEncodable||this._options.disableStatsigEncoding||typeof t!="string"||Etu("no-encode")!=null||!e?.btoa))try{
      n.body=e.btoa(t).split("").reverse().join(""),n.params={
        ...n.params??{
          
        },[v$e.StatsigEncoded]:"1"
      }
    }
    catch(i){
      CI.warn(`Request encoding failed for ${n.urlConfig.getUrl()}`,i)
    }
  }
  async _tryToCompressBody(n){
    const e=n.body;
    if(!(typeof e!="string"||!xMA(n, this._options)))try{
      const t=new TextEncoder().encode(e),i=new CompressionStream("gzip"),r=i.writable.getWriter();
      r.write(t).catch(CI.error),r.close().catch(CI.error);
      const s=i.readable.getReader(),o=[];
      let a;
      for(;
      !(a=await s.read()).done;
      )o.push(a.value);
      const l=o.reduce((m,p)=>m+p.length,0),u=new Uint8Array(l);
      let d=0;
      for(const m of o)u.set(m,d),d+=m.length;
      n.body=u,n.params={
        ...n.params??{
          
        },[v$e.IsGzipped]:"1"
      }
    }
    catch(t){
      CI.warn(`Request compression failed for ${n.urlConfig.getUrl()}`,t)
    }
  }
  _getInternalRequestArgs(n, e){
    const t=this._fallbackResolver.getActiveFallbackUrl(e.sdkKey, e.urlConfig), i={
      ...e,method:n,fallbackUrl:t
    };
    return"data"in e&&V2g(i, e.data), i
  }
}, dnu=n=>n.sdkKey?!0:(CI.warn("Unable to make request without an SDK key"), !1), V2g=(n, e)=>{
  const{
    sdkKey:t, fallbackUrl:i
  }
  =n, r=TNe.get(t), s=cnu.get(t), o=Gbi._get(t);
  n.body=JSON.stringify({
    ...e, statsigMetadata:{
      ...jtu.get(),stableID:r,sessionID:s,sdkType:o,fallbackUrl:i
    }
  })
}
}
}), PMA=