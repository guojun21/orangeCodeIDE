// Module: out-build/external/sentry/core/utils/envelope.js
// Offset: 50709 (bundle byte offset)
// Size: 1671 bytes

gbe(), hSe(), xpt(), c3(), HKd={
  session:"session", sessions:"session", attachment:"attachment", transaction:"transaction", event:"error", client_report:"internal", user_report:"default", profile:"profile", profile_chunk:"profile", replay_event:"replay", replay_recording:"replay", check_in:"monitor", feedback:"feedback", span:"span", raw_security:"security", log:"log_item", metric:"metric", trace_metric:"metric"
}
}
});
function Zjv(n, e){
  if(!e)return n;
  const t=n.sdk||{
    
  };
  return n.sdk={
    ...t, name:t.name||e.name, version:t.version||e.version, integrations:[...n.sdk?.integrations||[], ...e.integrations||[]], packages:[...n.sdk?.packages||[], ...e.packages||[]], settings:n.sdk?.settings||e.settings?{
      ...n.sdk?.settings,...e.settings
    }
    :void 0
  }, n
}
function JKd(n, e, t, i){
  const r=V2t(t), s={
    sent_at:new Date().toISOString(), ...r&&{
      sdk:r
    }, ...!!i&&e&&{
      dsn:ade(e)
    }
  }, o="aggregates"in n?[{
    type:"sessions"
  }, n]:[{
    type:"session"
  }, n.toJSON()];
  return fte(s, [o])
}
function GKd(n, e, t, i){
  const r=V2t(t), s=n.type&&n.type!=="replay_event"?n.type:"event";
  Zjv(n, t?.sdk);
  const o=gyc(n, r, i, e);
  return delete n.sdkProcessingMetadata, fte(o, [[{
    type:s
  }, n]])
}
function WKd(n, e){
  function t(g){
    return!!g.trace_id&&!!g.public_key
  }
  const i=cde(n[0]), r=e?.getDsn(), s=e?.getOptions().tunnel, o={
    sent_at:new Date().toISOString(), ...t(i)&&{
      trace:i
    }, ...!!s&&r&&{
      dsn:ade(r)
    }
  }, {
    beforeSendSpan:a, ignoreSpans:l
  }
  =e?.getOptions()||{
    
  }, u=l?.length?n.filter(g=>!hNo(jA(g), l)):n, d=n.length-u.length;
  d&&e?.recordDroppedEvent("before_send", "span", d);
  const m=a?g=>{
    const f=jA(g), A=a(f);
    return A||(iyc(), f)
  }
  :jA, p=[];
  for(const g of u){
    const f=m(g);
    f&&p.push($Kd(f))
  }
  return fte(o, p)
}
var fyc=