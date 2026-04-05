// Module: out-build/external/sentry/core/integrations/mcp-server/index.js
// Offset: 152242 (bundle byte offset)
// Size: 457 bytes

Wj(), HKv(), EYv(), YNo(), Wwc=new WeakSet
}
});
function XNo(n, e={
  
}, t=ry()){
  const{
    message:i, name:r, email:s, url:o, source:a, associatedEventId:l, tags:u
  }
  =n, d={
    contexts:{
      feedback:{
        contact_email:s,name:r,message:i,url:o,source:a,associated_event_id:l
      }
    }, type:"feedback", level:"info", tags:u
  }, m=t?.getClient()||sm();
  return m&&m.emit("beforeSendFeedback", d, e), t.captureEvent(d, e)
}
var IYv=