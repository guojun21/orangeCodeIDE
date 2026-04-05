// Module: out-build/vs/platform/telemetry/common/telemetry.js
// Offset: 657043 (bundle byte offset)
// Size: 1525 bytes

Wt(), ea=xi("telemetryService"), NFo="inlineDiffAccept", MFo="inlineDiffReject", Ckc=xi("customEndpointTelemetryService"), FFo="telemetry.firstSessionDate", qah="telemetry.lastSessionDate", Hah="crashReporting", zze="crashReporting.enabled", Skc="telemetry.enableCrashReporter", s4n="telemetry.enableTelemetry", (function(n){
  n[n.NONE=0]="NONE", n[n.CRASH=1]="CRASH", n[n.ERROR=2]="ERROR", n[n.USAGE=3]="USAGE"
})(Jah||(Jah={
  
})), (function(n){
  n.OFF="off", n.ON="all"
})(Gah||(Gah={
  
})), ZiA=xi("mainProcessPerformanceTelemetryService")
}
});
function kkc(n, e){
  return e&&(n.stack||n.stacktrace)?_(110, null, Qah(n), Wah(n.stack)||Wah(n.stacktrace)):Qah(n)
}
function Wah(n){
  return Array.isArray(n)?n.join(`
`):n
}
function Qah(n){
  return n.code==="ERR_UNC_HOST_NOT_ALLOWED"?`${n.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`:typeof n.code=="string"&&typeof n.errno=="number"&&typeof n.syscall=="string"?_(111, null, n.message):n.message||_(112, null)
}
function Jw(n=null, e=!1){
  if(!n)return _(113, null);
  if(Array.isArray(n)){
    const t=lh(n), i=Jw(t[0], e);
    return t.length>1?_(114, null, i, t.length):i
  }
  if(Qo(n))return n;
  if(n.detail){
    const t=n.detail;
    if(t.error)return kkc(t.error, e);
    if(t.exception)return kkc(t.exception, e)
  }
  return n.stack?kkc(n, e):n.message?n.message:_(115, null)
}
function OFo(n){
  const e=n;
  return e instanceof Error&&Array.isArray(e.actions)
}
function P4t(n, e){
  let t;
  return typeof n=="string"?t=new Error(n):t=n, t.actions=e, t
}
var mk=