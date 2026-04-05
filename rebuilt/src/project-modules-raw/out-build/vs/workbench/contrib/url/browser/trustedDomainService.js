// Module: out-build/vs/workbench/contrib/url/browser/trustedDomainService.js
// Offset: 32856200 (bundle byte offset)
// Size: 968 bytes

ri(), iu(), rt(), Wt(), kr(), PSi(), u9f(), yn(), cbn=xi("ITrustedDomainService"), Uxa=class extends at{
  constructor(e, t){
    super(), this._instantiationService=e, this._storageService=t, this._onDidChangeTrustedDomains=this._register(new Qe), this.onDidChangeTrustedDomains=this._onDidChangeTrustedDomains.event;
    const i=()=>new T5e(bi, ()=>{
      const{
        defaultTrustedDomains:r,trustedDomains:s
      }
      =this._instantiationService.invokeFunction(Mxa);
      return[...r,...s]
    });
    this._staticTrustedDomainsResult=i(), this._register(this._storageService.onDidChangeValue(-1, s2e, this._store)(()=>{
      this._staticTrustedDomainsResult?.dispose(),this._staticTrustedDomainsResult=i(),this._onDidChangeTrustedDomains.fire()
    }))
  }
  isValid(e){
    const{
      defaultTrustedDomains:t,trustedDomains:i
    }
    =this._instantiationService.invokeFunction(Mxa), r=[...t, ...i];
    return o9f(e, r)
  }
}, Uxa=__decorate([__param(0, ln), __param(1, Hi)], Uxa)
}
}), d9f, $xa, uuy=