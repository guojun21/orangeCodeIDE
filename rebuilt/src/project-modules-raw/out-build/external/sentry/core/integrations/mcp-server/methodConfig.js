// Module: out-build/external/sentry/core/integrations/mcp-server/methodConfig.js
// Offset: 147664 (bundle byte offset)
// Size: 1795 bytes

cFt(), Gwc={
  "tools/call":{
    targetField:"name", targetAttribute:vXd, captureArguments:!0, argumentsField:"arguments"
  }, "resources/read":{
    targetField:"uri", targetAttribute:aFt, captureUri:!0
  }, "resources/subscribe":{
    targetField:"uri", targetAttribute:aFt
  }, "resources/unsubscribe":{
    targetField:"uri", targetAttribute:aFt
  }, "prompts/get":{
    targetField:"name", targetAttribute:AXd, captureName:!0, captureArguments:!0, argumentsField:"arguments"
  }
}
}
});
function pYv(n, e){
  const t={
    
  };
  switch(n){
    case"notifications/cancelled":e?.requestId&&(t["mcp.cancelled.request_id"]=String(e.requestId)), e?.reason&&(t["mcp.cancelled.reason"]=String(e.reason));
    break;
    case"notifications/message":e?.level&&(t[xXd]=String(e.level)), e?.logger&&(t[TXd]=String(e.logger)), e?.data!==void 0&&(t[IXd]=typeof e.data, typeof e.data=="string"?t[VNo]=e.data:t[VNo]=JSON.stringify(e.data));
    break;
    case"notifications/progress":e?.progressToken&&(t["mcp.progress.token"]=String(e.progressToken)), typeof e?.progress=="number"&&(t["mcp.progress.current"]=e.progress), typeof e?.total=="number"&&(t["mcp.progress.total"]=e.total, typeof e?.progress=="number"&&(t["mcp.progress.percentage"]=e.progress/e.total*100)), e?.message&&(t["mcp.progress.message"]=String(e.message));
    break;
    case"notifications/resources/updated":if(e?.uri){
      t[aFt]=String(e.uri);
      const i=nFt(String(e.uri));
      i&&!tFt(i)&&(t["mcp.resource.protocol"]=i.protocol.replace(":",""))
    }
    break;
    case"notifications/initialized":t["mcp.lifecycle.phase"]="initialization_complete", t["mcp.protocol.ready"]=1;
    break
  }
  return t
}
function WXd(n, e, t){
  if(n==="request"){
    const i=e, r=Jwc(i.method, t||{
      
    });
    return{
      ...i.id!==void 0&&{
        [dXd]:String(i.id)
      },...r.attributes,...mYv(i.method,t||{
        
      })
    }
  }
  return pYv(e.method, t||{
    
  })
}
var gYv=