// Module: out-build/vs/platform/request/common/request.js
// Offset: 28266549 (bundle byte offset)
// Size: 1073 bytes

Ql(), _s(), rt(), Ht(), Mp(), Wt(), Ws(), u8=xi("requestService"), Qef=class{
  constructor(n){
    this.original=n
  }
  toJSON(){
    if(!this.headers){
      const n=Object.create(null);
      for(const e in this.original)e.toLowerCase()==="authorization"||e.toLowerCase()==="proxy-authorization"?n[e]="*****":n[e]=this.original[e];
      this.headers=n
    }
    return this.headers
  }
}, jef=class extends at{
  constructor(n){
    super(), this.logService=n, this.counter=0
  }
  async logAndRequest(n, e){
    const t=`#${++this.counter}: ${n.url}`;
    this.logService.trace(`${t} - begin`, n.type, new Qef(n.headers??{
      
    }));
    try{
      const i=await e();
      return this.logService.trace(`${t} - end`,n.type,i.res.statusCode,i.res.headers),i
    }
    catch(i){
      throw this.logService.error(`${t} - error`,n.type,ov(i)),i
    }
  }
}, zau=["http.proxy", "http.proxyStrictSSL", "http.proxyKerberosServicePrincipal", "http.noProxy", "http.proxyAuthorization", "http.proxySupport", "http.systemCertificates", "http.experimental.systemCertificatesV2", "http.fetchAdditionalSupport"], Wva=[], Vau=void 0, Kau=void 0, Wef()
}
}), Qva, WF, cyi, SU=