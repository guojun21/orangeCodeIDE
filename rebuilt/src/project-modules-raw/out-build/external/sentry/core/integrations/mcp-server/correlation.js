// Module: out-build/external/sentry/core/integrations/mcp-server/correlation.js
// Offset: 144666 (bundle byte offset)
// Size: 430 bytes

aT(), rW(), FXd(), KKv(), ZNo=new WeakMap
}
});
function tYv(n, e){
  n.sessionId&&hze.set(n, e)
}
function nYv(n, e){
  if(n.sessionId){
    const t=hze.get(n)||{
      
    };
    hze.set(n, {
      ...t,...e
    })
  }
}
function iYv(n){
  return hze.get(n)?.clientInfo
}
function rYv(n){
  return hze.get(n)?.protocolVersion
}
function sYv(n){
  return hze.get(n)
}
function oYv(n){
  hze.delete(n)
}
var hze, $Xd=