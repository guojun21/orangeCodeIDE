// Module: out-build/external/statsig/client-core/SDKFlags.js
// Offset: 26697599 (bundle byte offset)
// Size: 1142 bytes

rnu={
  
}, snu={
  setFlags:(n, e)=>{
    rnu[n]=e
  }, get:(n, e)=>rnu[n]?.[e]??!1
}
}
});
function yMA(n){
  let e=EMA(n);
  const t=Date.now();
  return e||(e={
    sessionID:Xpa(), startTime:t, lastUpdate:t
  }), {
    data:e, sdkKey:n
  }
}
function wMA(n, e){
  const t=Date.now();
  return{
    data:{
      sessionID:n,startTime:t,lastUpdate:t
    }, sdkKey:e
  }
}
function _MA(n){
  const e=Date.now(), t=n.data, i=n.sdkKey;
  if(CMA(t)||SMA(t)){
    t.sessionID=Xpa(), t.startTime=e;
    const s=__STATSIG__?.instance(i);
    s&&s.$emt({
      name:"session_expired"
    })
  }
  t.lastUpdate=e, kMA(t, n.sdkKey), clearTimeout(n.idleTimeoutID), clearTimeout(n.ageTimeoutID);
  const r=e-t.startTime;
  return n.idleTimeoutID=F2g(i, onu), n.ageTimeoutID=F2g(i, anu-r), n
}
function F2g(n, e){
  return setTimeout(()=>{
    const t=xtt()?.instance(n);
    t&&t.$emt({
      name:"session_expired"
    })
  }, e)
}
function CMA({
  lastUpdate:n
}){
  return Date.now()-n>onu
}
function SMA({
  startTime:n
}){
  return Date.now()-n>anu
}
function O2g(n){
  return`statsig.session_id.${Mpa(n)}`
}
function kMA(n, e){
  const t=O2g(e);
  try{
    Gpa(t, n)
  }
  catch{
    CI.warn("Failed to save SessionID")
  }
}
function EMA(n){
  const e=O2g(n);
  return Jpa(e)
}
var onu, anu, Wbi, cnu, rga, lnu=