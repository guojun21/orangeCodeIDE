// Module: out-build/external/sentry/core/exports.js
// Offset: 74855 (bundle byte offset)
// Size: 935 bytes

aT(), ZT(), nNo(), US(), h9(), loe(), Lyc(), ide(), c3()
}
});
function pYd(n){
  const e=n.protocol?`${n.protocol}:`:"", t=n.port?`:${n.port}`:"";
  return`${e}//${n.host}${t}${n.path?`/${
    n.path
  }
  `:""}/api/`
}
function yzv(n){
  return`${pYd(n)}${n.projectId}/envelope/`
}
function wzv(n, e){
  const t={
    sentry_version:gYd
  };
  return n.publicKey&&(t.sentry_key=n.publicKey), e&&(t.sentry_client=`${e.name}/${e.version}`), new URLSearchParams(t).toString()
}
function Hyc(n, e, t){
  return e||`${yzv(n)}?${wzv(n,t)}`
}
function Jyc(n, e){
  const t=YAc(n);
  if(!t)return"";
  const i=`${pYd(t)}embed/error-page/`;
  let r=`dsn=${ade(t)}`;
  for(const s in e)if(s!=="dsn"&&s!=="onClose")if(s==="user"){
    const o=e.user;
    if(!o)continue;
    o.name&&(r+=`&name=${encodeURIComponent(o.name)}`), o.email&&(r+=`&email=${encodeURIComponent(o.email)}`)
  }
  else r+=`&${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`;
  return`${i}?${r}`
}
var gYd, Gyc=