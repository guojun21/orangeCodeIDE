// Module: out-build/external/sentry/core/sdk.js
// Offset: 98270 (bundle byte offset)
// Size: 511 bytes

aT(), ZT(), US()
}
});
function o2n(n=100){
  const e=new Set;
  function t(){
    return e.size<n
  }
  function i(o){
    e.delete(o)
  }
  function r(o){
    if(!t())return ANo(INo);
    const a=o();
    return e.add(a), a.then(()=>i(a), ()=>i(a)), a
  }
  function s(o){
    if(!e.size)return e5e(!0);
    const a=Promise.allSettled(Array.from(e)).then(()=>!0);
    if(!o)return a;
    const l=[a, new Promise(u=>setTimeout(()=>u(!1), o))];
    return Promise.race(l)
  }
  return{
    get $(){
      return Array.from(e)
    }, add:r, drain:s
  }
}
var INo, cwc=