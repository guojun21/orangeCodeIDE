// Module: out-build/external/sentry/core/integrations/captureconsole.js
// Offset: 119203 (bundle byte offset)
// Size: 1100 bytes

aT(), bte(), UNo(), sW(), US(), loe(), kwc(), mBe(), c3(), xZd="CaptureConsole", TZd=((n={
  
})=>{
  const e=n.levels||F2t, t=n.handled??!0;
  return{
    name:xZd, setup(i){
      "console"in Ev&&sFt(({
        args:r,level:s
      })=>{
        sm()!==i||!e.includes(s)||WVv(r,s,t)
      })
    }
  }
}), $No=TZd
}
});
function jVv(n, e){
  return e?!!(zVv(n, e)||VVv(n, e)):!1
}
function zVv(n, e){
  const t=n.message, i=e.message;
  return!(!t&&!i||t&&!i||!t&&i||t!==i||!DZd(n, e)||!IZd(n, e))
}
function VVv(n, e){
  const t=BZd(e), i=BZd(n);
  return!(!t||!i||t.type!==i.type||t.value!==i.value||!DZd(n, e)||!IZd(n, e))
}
function IZd(n, e){
  let t=WLo(n), i=WLo(e);
  if(!t&&!i)return!0;
  if(t&&!i||!t&&i||(t=t, i=i, i.length!==t.length))return!1;
  for(let r=0;
  r<i.length;
  r++){
    const s=i[r], o=t[r];
    if(s.filename!==o.filename||s.lineno!==o.lineno||s.colno!==o.colno||s.function!==o.function)return!1
  }
  return!0
}
function DZd(n, e){
  let t=n.fingerprint, i=e.fingerprint;
  if(!t&&!i)return!0;
  if(t&&!i||!t&&i)return!1;
  t=t, i=i;
  try{
    return t.join("")===i.join("")
  }
  catch{
    return!1
  }
}
function BZd(n){
  return n.exception?.values?.[0]
}
var RZd, PZd, Mpt, KVv=