// Module: out-build/external/sentry/core/integrations/mcp-server/attributes.js
// Offset: 140642 (bundle byte offset)
// Size: 1276 bytes

Fwc="mcp.method.name", dXd="mcp.request.id", hXd="mcp.session.id", mXd="mcp.transport", pXd="mcp.server.name", gXd="mcp.server.title", fXd="mcp.server.version", bXd="mcp.protocol.version", vXd="mcp.tool.name", aFt="mcp.resource.uri", AXd="mcp.prompt.name", yXd="mcp.tool.result.is_error", wXd="mcp.tool.result.content_count", _Xd="mcp.tool.result.content", CXd="mcp.tool.result", Owc="mcp.prompt.result.description", SXd="mcp.prompt.result.message_count", kXd="mcp.prompt.result.message_content", EXd="mcp.prompt.result", u2n="mcp.request.argument", xXd="mcp.logging.level", TXd="mcp.logging.logger", IXd="mcp.logging.data_type", VNo="mcp.logging.message", DXd="network.transport", BXd="network.protocol.version", Uwc="client.address", $wc="client.port", qwc="mcp.server", RXd="mcp.notification.client_to_server", PXd="mcp.notification.server_to_client", LXd="auto.function.mcp_server", Hwc="auto.mcp.notification", NXd="route"
}
});
function JKv(n){
  return!!(MXd.has(n)||n.startsWith(`${u2n}.`)||(n.startsWith(`${CXd}.`)||n.startsWith(`${EXd}.`))&&!n.endsWith("_count")&&!n.endsWith("_error")&&!n.endsWith(".is_error"))
}
function KNo(n, e){
  return e?n:Object.entries(n).reduce((t, [i, r])=>(JKv(i)||(t[i]=r), t), {
    
  })
}
var MXd, FXd=