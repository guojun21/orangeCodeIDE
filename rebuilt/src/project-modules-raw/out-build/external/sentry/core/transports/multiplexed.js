// Module: out-build/external/sentry/core/transports/multiplexed.js
// Offset: 102925 (bundle byte offset)
// Size: 1690 bytes

Gyc(), hSe(), lde()
}
});
function tFt(n){
  return"isRelative"in n
}
function nFt(n, e){
  const t=n.indexOf("://")<=0&&n.indexOf("//")!==0, i=e??(t?KYd:void 0);
  try{
    if("canParse"in URL&&!URL.canParse(n, i))return;
    const r=new URL(n, i);
    return t?{
      isRelative:t,pathname:r.pathname,search:r.search,hash:r.hash
    }
    :r
  }
  catch{
    
  }
}
function pwc(n){
  if(tFt(n))return n.pathname;
  const e=new URL(n);
  return e.search="", e.hash="", ["80", "443"].includes(e.port)&&(e.port=""), e.password&&(e.password="%filtered%"), e.username&&(e.username="%filtered%"), e.toString()
}
function sVv(n, e, t, i){
  const r=t?.method?.toUpperCase()??"GET", s=i||(n?e==="client"?pwc(n):n.pathname:"/");
  return`${r} ${s}`
}
function oVv(n, e, t, i, r){
  const s={
    [w1]:t, [c2]:"url"
  };
  return r&&(s[e==="server"?"http.route":"url.template"]=r, s[c2]="route"), i?.method&&(s[UMn]=i.method.toUpperCase()), n&&(n.search&&(s["url.query"]=n.search), n.hash&&(s["url.fragment"]=n.hash), n.pathname&&(s["url.path"]=n.pathname, n.pathname==="/"&&(s[c2]="route")), tFt(n)||(s[$Mn]=n.href, n.port&&(s["url.port"]=n.port), n.protocol&&(s["url.scheme"]=n.protocol), n.hostname&&(s[e==="server"?"server.address":"url.domain"]=n.hostname))), [sVv(n, e, i, r), s]
}
function uoe(n){
  if(!n)return{
    
  };
  const e=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if(!e)return{
    
  };
  const t=e[6]||"", i=e[8]||"";
  return{
    host:e[4], path:e[5], protocol:e[2], search:t, hash:i, relative:e[5]+t+i
  }
}
function a2n(n){
  return n.split(/[?#]/, 1)[0]
}
function aVv(n){
  const{
    protocol:e, host:t, path:i
  }
  =n, r=t?.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "")||"";
  return`${e?`${
    e
  }
  ://`:""}${r}${i}`
}
var KYd, RNo=