// Module: out-build/external/sentry/core/utils/baggage.js
// Offset: 37616 (bundle byte offset)
// Size: 1517 bytes

ZT(), US(), h9(), GMn="sentry-", zAc=/^sentry-/, VAc=8192
}
});
function Rjv(n){
  return n==="http"||n==="https"
}
function ade(n, e=!1){
  const{
    host:t, path:i, pass:r, port:s, projectId:o, protocol:a, publicKey:l
  }
  =n;
  return`${a}://${l}${e&&r?`:${
    r
  }
  `:""}@${t}${s?`:${
    s
  }
  `:""}/${i&&`${
    i
  }
  /`}${o}`
}
function KAc(n){
  const e=RKd.exec(n);
  if(!e){
    dBe(()=>{
      console.error(`Invalid Sentry Dsn: ${n}`)
    });
    return
  }
  const[t, i, r="", s="", o="", a=""]=e.slice(1);
  let l="", u=a;
  const d=u.split("/");
  if(d.length>1&&(l=d.slice(0, -1).join("/"), u=d.pop()), u){
    const m=u.match(/^\d+/);
    m&&(u=m[0])
  }
  return IKd({
    host:s, pass:r, path:l, projectId:u, port:o, protocol:t, publicKey:i
  })
}
function IKd(n){
  return{
    protocol:n.protocol, publicKey:n.publicKey||"", pass:n.pass||"", host:n.host, port:n.port||"", path:n.path||"", projectId:n.projectId
  }
}
function Pjv(n){
  if(!Lg)return!0;
  const{
    port:e, projectId:t, protocol:i
  }
  =n;
  return["protocol", "publicKey", "host", "projectId"].find(o=>n[o]?!1:(Jo.error(`Invalid Sentry Dsn: ${o} missing`), !0))?!1:t.match(/^\d+$/)?Rjv(i)?e&&isNaN(parseInt(e, 10))?(Jo.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1):!0:(Jo.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1):(Jo.error(`Invalid Sentry Dsn: Invalid projectId ${t}`), !1)
}
function Ljv(n){
  return n.match(BKd)?.[1]
}
function DKd(n){
  const e=n.getOptions(), {
    host:t
  }
  =n.getDsn()||{
    
  };
  let i;
  return e.orgId?i=String(e.orgId):t&&(i=Ljv(t)), i
}
function YAc(n){
  const e=typeof n=="string"?KAc(n):IKd(n);
  if(!(!e||!Pjv(e)))return e
}
var BKd, RKd, hSe=