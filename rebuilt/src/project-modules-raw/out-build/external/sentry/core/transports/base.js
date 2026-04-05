// Module: out-build/external/sentry/core/transports/base.js
// Offset: 100431 (bundle byte offset)
// Size: 1398 bytes

ZT(), US(), lde(), cwc(), mwc(), WYd=64
}
});
function QYd(n){
  function e(...t){
    Lg&&Jo.log("[Offline]:", ...t)
  }
  return t=>{
    const i=n(t);
    if(!t.createStore)throw new Error("No `createStore` function was provided");
    const r=t.createStore(t);
    let s=BNo, o;
    function a(m, p, g){
      return hyc(m,["client_report"])?!1:t.shouldStore?t.shouldStore(m,p,g):!0
    }
    function l(m){
      o&&clearTimeout(o),o=setTimeout(async()=>{
        o=void 0;
        const p=await r.shift();
        p&&(e("Attempting to send previously queued event"),p[0].sent_at=new Date().toISOString(),d(p,!0).catch(g=>{
          e("Failed to retry sending",g)
        }))
      },m),typeof o!="number"&&o.unref&&o.unref()
    }
    function u(){
      o||(l(s),s=Math.min(s*2,jYd))
    }
    async function d(m, p=!1){
      if(!p&&hyc(m,["replay_event","replay_recording"]))return await r.push(m),l(DNo),{
        
      };
      try{
        if(t.shouldSend&&await t.shouldSend(m)===!1)throw new Error("Envelope not sent because `shouldSend` callback returned false");
        const g=await i.send(m);
        let f=DNo;
        if(g){
          if(g.headers?.["retry-after"])f=lwc(g.headers["retry-after"]);
          else if(g.headers?.["x-sentry-rate-limits"])f=6e4;
          else if((g.statusCode||0)>=400)return g
        }
        return l(f),s=BNo,g
      }
      catch(g){
        if(await a(m,g,s))return p?await r.unshift(m):await r.push(m),u(),e("Error sending. Event queued.",g),{
          
        };
        throw g
      }
    }
    return t.flushAtStartup&&u(), {
      send:d,flush:m=>(m===void 0&&(s=BNo,l(DNo)),i.flush(m))
    }
  }
}
var DNo, BNo, jYd, tVv=