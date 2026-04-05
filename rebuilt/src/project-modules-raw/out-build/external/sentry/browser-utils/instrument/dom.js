// Module: out-build/external/sentry/browser-utils/instrument/dom.js
// Offset: 228091 (bundle byte offset)
// Size: 656 bytes

lm(), AY(), mnh=1e3
}
});
function Vpt(n){
  const e="history";
  K3e(e, n), Y3e(e, NeA)
}
function NeA(){
  if(zC.addEventListener("popstate", ()=>{
    const e=zC.location.href, t=xMo;
    if(xMo=e, t===e)return;
    ede("history", {
      from:t,to:e
    })
  }), !rth())return;
  function n(e){
    return function(...t){
      const i=t.length>2?t[2]:void 0;
      if(i){
        const r=xMo,s=MeA(String(i));
        if(xMo=s,r===s)return e.apply(this,t);
        ede("history",{
          from:r,to:s
        })
      }
      return e.apply(this,t)
    }
  }
  LB(zC.history, "pushState", n), LB(zC.history, "replaceState", n)
}
function MeA(n){
  try{
    return new URL(n, zC.location.origin).toString()
  }
  catch{
    return n
  }
}
var xMo, FeA=