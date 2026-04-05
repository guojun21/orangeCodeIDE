// Module: out-build/external/sentry/core/integrations/dedupe.js
// Offset: 120303 (bundle byte offset)
// Size: 1283 bytes

ZT(), sW(), US(), bpt(), RZd="Dedupe", PZd=(()=>{
  let n;
  return{
    name:RZd, processEvent(e){
      if(e.type)return e;
      try{
        if(jVv(e,n))return Lg&&Jo.warn("Event dropped due to being a duplicate of previously captured event."),null
      }
      catch{
        
      }
      return n=e
    }
  }
}), Mpt=PZd
}
});
function YVv(n, e={
  
}, t, i, r){
  if(!e.originalException||!uSe(e.originalException))return n;
  const s=e.originalException.name||e.originalException.constructor.name, o=LZd(e.originalException, i, r);
  if(o){
    const a={
      ...n.contexts
    }, l=jj(o, t);
    return bY(l)&&(tW(l, "__sentry_skip_normalization__", !0), a[s]=l), {
      ...n,contexts:a
    }
  }
  return n
}
function LZd(n, e, t){
  try{
    const i=["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"], r={
      
    };
    for(const s of Object.keys(n)){
      if(i.indexOf(s)!==-1)continue;
      const o=n[s];
      r[s]=uSe(o)||typeof o=="string"?t?BMn(`${o}`,t):`${o}`:o
    }
    if(e&&n.cause!==void 0)if(uSe(n.cause)){
      const s=n.cause.name||n.cause.constructor.name;
      r.cause={
        [s]:LZd(n.cause,!1,t)
      }
    }
    else r.cause=n.cause;
    if(typeof n.toJSON=="function"){
      const s=n.toJSON();
      for(const o of Object.keys(s)){
        const a=s[o];
        r[o]=uSe(a)?a.toString():a
      }
    }
    return r
  }
  catch(i){
    Lg&&Jo.error("Unable to extract extra data from the Error object:", i)
  }
  return null
}
var NZd, MZd, qNo, ZVv=