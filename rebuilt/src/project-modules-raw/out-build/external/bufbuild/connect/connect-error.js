// Module: out-build/external/bufbuild/connect/connect-error.js
// Offset: 26660769 (bundle byte offset)
// Size: 1097 bytes

pL(), ytu(), fA=class PSn extends Error{
  constructor(e, t=j0.Unknown, i, r, s){
    super(xNA(e, t)), this.name="ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage=e, this.code=t, this.metadata=new Headers(i??{
      
    }), this.details=r??[], this.cause=s
  }
  static from(e, t=j0.Unknown){
    return e instanceof PSn?e:e instanceof Error?e.name=="AbortError"?new PSn(e.message, j0.Canceled):new PSn(e.message, t, void 0, void 0, e):new PSn(String(e), t, void 0, void 0, e)
  }
  static[Symbol.hasInstance](e){
    return e instanceof Error?Object.getPrototypeOf(e)===PSn.prototype?!0:e.name==="ConnectError"&&"code"in e&&typeof e.code=="number"&&"metadata"in e&&"details"in e&&Array.isArray(e.details)&&"rawMessage"in e&&typeof e.rawMessage=="string"&&"cause"in e:!1
  }
  findDetails(e){
    const t="typeName"in e?{
      findMessage:r=>r===e.typeName?e:void 0
    }
    :e, i=[];
    for(const r of this.details){
      if("getType"in r){
        t.findMessage(r.getType().typeName)&&i.push(r);
        continue
      }
      const s=t.findMessage(r.type);
      if(s)try{
        i.push(s.fromBinary(r.value))
      }
      catch{
        
      }
    }
    return i
  }
}
}
}), Ipa=