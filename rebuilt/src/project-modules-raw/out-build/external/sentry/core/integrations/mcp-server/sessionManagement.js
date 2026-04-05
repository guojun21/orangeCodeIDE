// Module: out-build/external/sentry/core/integrations/mcp-server/sessionManagement.js
// Offset: 145096 (bundle byte offset)
// Size: 1820 bytes

hze=new WeakMap
}
});
function qXd(n){
  const e={
    
  };
  return ABe(n)&&(typeof n.name=="string"&&(e.name=n.name), typeof n.title=="string"&&(e.title=n.title), typeof n.version=="string"&&(e.version=n.version)), e
}
function aYv(n){
  const e={
    
  };
  return ABe(n.params)&&(typeof n.params.protocolVersion=="string"&&(e.protocolVersion=n.params.protocolVersion), n.params.clientInfo&&(e.clientInfo=qXd(n.params.clientInfo))), e
}
function cYv(n){
  const e={
    
  };
  return ABe(n)&&(typeof n.protocolVersion=="string"&&(e.protocolVersion=n.protocolVersion), n.serverInfo&&(e.serverInfo=qXd(n.serverInfo))), e
}
function lYv(n){
  const e=iYv(n), t={
    
  };
  return e?.name&&(t["mcp.client.name"]=e.name), e?.title&&(t["mcp.client.title"]=e.title), e?.version&&(t["mcp.client.version"]=e.version), t
}
function uYv(n){
  const e=sYv(n)?.serverInfo, t={
    
  };
  return e?.name&&(t[pXd]=e.name), e?.title&&(t[gXd]=e.title), e?.version&&(t[fXd]=e.version), t
}
function dYv(n){
  return{
    address:n?.requestInfo?.remoteAddress||n?.clientAddress||n?.request?.ip||n?.request?.connection?.remoteAddress, port:n?.requestInfo?.remotePort||n?.clientPort||n?.request?.connection?.remotePort
  }
}
function hYv(n){
  if(!n?.constructor)return{
    mcpTransport:"unknown", networkTransport:"unknown"
  };
  const e=typeof n.constructor?.name=="string"?n.constructor.name:"unknown";
  let t="unknown";
  const i=e.toLowerCase();
  return i.includes("stdio")?t="pipe":(i.includes("http")||i.includes("sse"))&&(t="tcp"), {
    mcpTransport:e, networkTransport:t
  }
}
function HXd(n, e){
  const t=n&&"sessionId"in n?n.sessionId:void 0, i=e?dYv(e):{
    
  }, {
    mcpTransport:r, networkTransport:s
  }
  =hYv(n), o=lYv(n), a=uYv(n), l=rYv(n);
  return{
    ...t&&{
      [hXd]:t
    }, ...i.address&&{
      [Uwc]:i.address
    }, ...i.port&&{
      [$wc]:i.port
    }, [mXd]:r, [DXd]:s, [BXd]:"2.0", ...l&&{
      [bXd]:l
    }, ...o, ...a
  }
}
var JXd=