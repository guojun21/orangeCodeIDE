// Module: out-build/vs/platform/observable/common/platformObservableUtils.js
// Offset: 1933966 (bundle byte offset)
// Size: 500 bytes

Uc()
}
});
function Cwh(n, e, t){
  return n==="on"||n==="always"||n==="auto"&&e()||n==="userGesture"&&t
}
function Swh(n, e){
  return new Promise((t, i)=>{
    const r=new Audio(n);
    r.volume=e, r.addEventListener("ended", ()=>{
      t(r)
    }), r.addEventListener("error", s=>{
      const o=r.error,a=o?`Audio error: ${o.message||`code ${
        o.code
      }
      `}`:"Failed to load audio file";
      i(new Error(a))
    }), r.play().catch(s=>{
      i(s)
    })
  })
}
var fS, m3t, C3o, gk, kwh, rb, QS=