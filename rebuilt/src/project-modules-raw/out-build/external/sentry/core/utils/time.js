// Module: out-build/external/sentry/core/utils/time.js
// Offset: 24397 (bundle byte offset)
// Size: 1631 bytes

c3(), UAc=1e3
}
});
function pKd(n){
  const e=MR(), t={
    sid:NB(), init:!0, timestamp:e, started:e, duration:0, status:"ok", errors:0, ignoreDuration:!1, toJSON:()=>Sjv(t)
  };
  return n&&ypt(t, n), t
}
function ypt(n, e={
  
}){
  if(e.user&&(!n.ipAddress&&e.user.ip_address&&(n.ipAddress=e.user.ip_address), !n.did&&!e.did&&(n.did=e.user.id||e.user.email||e.user.username)), n.timestamp=e.timestamp||MR(), e.abnormal_mechanism&&(n.abnormal_mechanism=e.abnormal_mechanism), e.ignoreDuration&&(n.ignoreDuration=e.ignoreDuration), e.sid&&(n.sid=e.sid.length===32?e.sid:NB()), e.init!==void 0&&(n.init=e.init), !n.did&&e.did&&(n.did=`${e.did}`), typeof e.started=="number"&&(n.started=e.started), n.ignoreDuration)n.duration=void 0;
  else if(typeof e.duration=="number")n.duration=e.duration;
  else{
    const t=n.timestamp-n.started;
    n.duration=t>=0?t:0
  }
  e.release&&(n.release=e.release), e.environment&&(n.environment=e.environment), !n.ipAddress&&e.ipAddress&&(n.ipAddress=e.ipAddress), !n.userAgent&&e.userAgent&&(n.userAgent=e.userAgent), typeof e.errors=="number"&&(n.errors=e.errors), e.status&&(n.status=e.status)
}
function gKd(n, e){
  let t={
    
  };
  e?t={
    status:e
  }
  :n.status==="ok"&&(t={
    status:"exited"
  }), ypt(n, t)
}
function Sjv(n){
  return{
    sid:`${n.sid}`, init:n.init, started:new Date(n.started*1e3).toISOString(), timestamp:new Date(n.timestamp*1e3).toISOString(), status:n.status, errors:n.errors, did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0, duration:n.duration, abnormal_mechanism:n.abnormal_mechanism, attrs:{
      release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent
    }
  }
}
var nNo=