// Module: out-build/external/sentry/core/tracing/logSpans.js
// Offset: 53194 (bundle byte offset)
// Size: 449 bytes

ZT(), US(), iW()
}
});
function vyc(n, e, t, i=HP()){
  const r=i&&qP(i);
  r&&(Lg&&Jo.log(`[Measurement] Setting measurement on root span: ${n} = ${e} ${t}`), r.addEvent(n, {
    [Cpt]:e, [_pt]:t
  }))
}
function Ayc(n){
  if(!n||n.length===0)return;
  const e={
    
  };
  return n.forEach(t=>{
    const i=t.attributes||{
      
    }, r=i[_pt], s=i[Cpt];
    typeof r=="string"&&typeof s=="number"&&(e[t.name]={
      value:s,unit:r
    })
  }), e
}
var zKd=