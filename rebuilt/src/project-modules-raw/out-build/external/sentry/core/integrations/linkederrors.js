// Module: out-build/external/sentry/core/integrations/linkederrors.js
// Offset: 113563 (bundle byte offset)
// Size: 896 bytes

sW(), pZd(), owc(), gZd="cause", fZd=5, bZd="LinkedErrors", vZd=((n={
  
})=>{
  const e=n.limit||fZd, t=n.key||gZd;
  return{
    name:bZd, preprocessEvent(i, r, s){
      const o=s.getOptions();
      FNo(swc,o.stackParser,t,e,i,r)
    }
  }
}), AZd=vZd
}
});
function RVv(n){
  if(Ev._sentryModuleMetadata)for(const e of Object.keys(Ev._sentryModuleMetadata)){
    const t=Ev._sentryModuleMetadata[e];
    if(Cwc.has(e))continue;
    Cwc.add(e);
    const i=n(e);
    for(const r of i.reverse())if(r.filename){
      _wc.set(r.filename,t);
      break
    }
  }
}
function PVv(n, e){
  return RVv(n), _wc.get(e)
}
function yZd(n, e){
  e.exception?.values?.forEach(t=>{
    t.stacktrace?.frames?.forEach(i=>{
      if(!i.filename||i.module_metadata)return;
      const r=PVv(n,i.filename);
      r&&(i.module_metadata=r)
    })
  })
}
function wZd(n){
  n.exception?.values?.forEach(e=>{
    e.stacktrace?.frames?.forEach(t=>{
      delete t.module_metadata
    })
  })
}
var _wc, Cwc, _Zd=