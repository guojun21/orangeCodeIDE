// Module: out-build/external/sentry/core/constants.js
// Offset: 44874 (bundle byte offset)
// Size: 1045 bytes

Ept="production"
}
});
function pNo(n, e){
  tW(n, uyc, e)
}
function lyc(n, e){
  const t=e.getOptions(), {
    publicKey:i
  }
  =e.getDsn()||{
    
  }, r={
    environment:t.environment||Ept, release:t.release, public_key:i, trace_id:n, org_id:DKd(e)
  };
  return e.emit("createDsc", r), r
}
function gNo(n, e){
  const t=e.getPropagationContext();
  return t.dsc||lyc(t.traceId, n)
}
function cde(n){
  const e=sm();
  if(!e)return{
    
  };
  const t=qP(n), i=jA(t), r=i.data, s=t.spanContext().traceState, o=s?.get("sentry.sample_rate")??r[ize]??r[MMn];
  function a(f){
    return(typeof o=="number"||typeof o=="string")&&(f.sample_rate=`${o}`), f
  }
  const l=t[uyc];
  if(l)return a(l);
  const u=s?.get("sentry.dsc"), d=u&&sNo(u);
  if(d)return a(d);
  const m=lyc(n.spanContext().traceId, e), p=r[c2], g=i.description;
  return p!=="url"&&g&&(m.transaction=g), yH()&&(m.sampled=String(fBe(t)), m.sample_rand=s?.get("sentry.sample_rand")??HMn(t).scope?.getPropagationContext().sampleRand.toString()), a(m), e.emit("createDsc", m, t), m
}
function OKd(n){
  const e=cde(n);
  return jAc(e)
}
var uyc, cze=