// Module: out-build/external/sentry/core/tracing/utils.js
// Offset: 36431 (bundle byte offset)
// Size: 1185 bytes

Wj(), c3(), WAc="_sentryScope", QAc="_sentryIsolationScope"
}
});
function sNo(n){
  const e=EKd(n);
  if(!e)return;
  const t=Object.entries(e).reduce((i, [r, s])=>{
    if(r.match(zAc)){
      const o=r.slice(GMn.length);
      i[o]=s
    }
    return i
  }, {
    
  });
  if(Object.keys(t).length>0)return t
}
function jAc(n){
  if(!n)return;
  const e=Object.entries(n).reduce((t, [i, r])=>(r&&(t[`${GMn}${i}`]=r), t), {
    
  });
  return TKd(e)
}
function EKd(n){
  if(!(!n||!gte(n)&&!Array.isArray(n)))return Array.isArray(n)?n.reduce((e, t)=>{
    const i=xKd(t);
    return Object.entries(i).forEach(([r, s])=>{
      e[r]=s
    }), e
  }, {
    
  }):xKd(n)
}
function xKd(n){
  return n.split(",").map(e=>{
    const t=e.indexOf("=");
    if(t===-1)return[];
    const i=e.slice(0, t), r=e.slice(t+1);
    return[i, r].map(s=>{
      try{
        return decodeURIComponent(s.trim())
      }
      catch{
        return
      }
    })
  }).reduce((e, [t, i])=>(t&&i&&(e[t]=i), e), {
    
  })
}
function TKd(n){
  if(Object.keys(n).length!==0)return Object.entries(n).reduce((e, [t, i], r)=>{
    const s=`${encodeURIComponent(t)}=${encodeURIComponent(i)}`, o=r===0?s:`${e},${s}`;
    return o.length>VAc?(Lg&&Jo.warn(`Not adding key: ${t} with val: ${i} to baggage header due to exceeding baggage size limits.`), e):o
  }, "")
}
var GMn, zAc, VAc, Q2t=