// Module: out-build/external/sentry/core/utils/misc.js
// Offset: 23544 (bundle byte offset)
// Size: 853 bytes

Wj(), mBe(), c3(), hKd=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
}
});
function pBe(){
  return Date.now()/UAc
}
function _jv(){
  const{
    performance:n
  }
  =Ev;
  if(!n?.now||!n.timeOrigin)return pBe;
  const e=n.timeOrigin;
  return()=>(e+n.now())/UAc
}
function MR(){
  return(mKd??(mKd=_jv()))()
}
function Cjv(){
  const{
    performance:n
  }
  =Ev;
  if(!n?.now)return[void 0, "none"];
  const e=3600*1e3, t=n.now(), i=Date.now(), r=n.timeOrigin?Math.abs(n.timeOrigin+t-i):e, s=r<e, o=n.timing?.navigationStart, l=typeof o=="number"?Math.abs(o+t-i):e, u=l<e;
  return s||u?r<=l?[n.timeOrigin, "timeOrigin"]:[o, "navigationStart"]:[i, "dateNow"]
}
function F$(){
  return $Ac||($Ac=Cjv()), $Ac[0]
}
var UAc, mKd, $Ac, ide=