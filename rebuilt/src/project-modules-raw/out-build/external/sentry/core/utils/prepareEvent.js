// Module: out-build/external/sentry/core/utils/prepareEvent.js
// Offset: 72720 (bundle byte offset)
// Size: 2135 bytes

mNo(), aT(), oYd(), LMn(), CNo(), uYd(), loe(), xpt(), mBe(), ide(), dYd=["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"]
}
});
function Sw(n, e){
  return ry().captureException(n, fzv(e))
}
function Bpt(n, e){
  const t=typeof e=="string"?e:void 0, i=typeof e!="string"?{
    captureContext:e
  }
  :void 0;
  return ry().captureMessage(n, t, i)
}
function ude(n, e){
  return ry().captureEvent(n, e)
}
function SNo(n, e){
  MB().setContext(n, e)
}
function Nyc(n){
  MB().setExtras(n)
}
function Myc(n, e){
  MB().setExtra(n, e)
}
function Fyc(n){
  MB().setTags(n)
}
function XMn(n, e){
  MB().setTag(n, e)
}
function Oyc(n){
  MB().setUser(n)
}
function e2n(){
  return MB().lastEventId()
}
function Uyc(n, e){
  const t=ry(), i=sm();
  if(!i)Lg&&Jo.warn("Cannot capture check-in. No client defined.");
  else if(!i.captureCheckIn)Lg&&Jo.warn("Cannot capture check-in. Client does not support sending check-ins.");
  else return i.captureCheckIn(n, e, t);
  return NB()
}
function Azv(n, e, t){
  const i=Uyc({
    monitorSlug:n, status:"in_progress"
  }, t), r=MR();
  function s(o){
    Uyc({
      monitorSlug:n,status:o,checkInId:i,duration:MR()-r
    })
  }
  return G2t(()=>{
    let o;
    try{
      o=e()
    }
    catch(a){
      throw s("error"),a
    }
    return Zje(o)?o.then(a=>(s("ok"), a), a=>{
      throw s("error"),a
    }):(s("ok"), o)
  })
}
async function $yc(n){
  const e=sm();
  return e?e.flush(n):(Lg&&Jo.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
}
async function hYd(n){
  const e=sm();
  return e?e.close(n):(Lg&&Jo.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
}
function qyc(){
  return!!sm()
}
function kNo(){
  const n=sm();
  return n?.getOptions().enabled!==!1&&!!n?.getTransport()
}
function ENo(n){
  MB().addEventProcessor(n)
}
function Rpt(n){
  const e=MB(), t=ry(), {
    userAgent:i
  }
  =Ev.navigator||{
    
  }, r=pKd({
    user:t.getUser()||e.getUser(), ...i&&{
      userAgent:i
    }, ...n
  }), s=e.getSession();
  return s?.status==="ok"&&ypt(s, {
    status:"exited"
  }), t2n(), e.setSession(r), r
}
function t2n(){
  const n=MB(), t=ry().getSession()||n.getSession();
  t&&gKd(t), mYd(), n.setSession()
}
function mYd(){
  const n=MB(), e=sm(), t=n.getSession();
  t&&e&&e.captureSession(t)
}
function Ppt(n=!1){
  if(n){
    t2n();
    return
  }
  mYd()
}
var bte=