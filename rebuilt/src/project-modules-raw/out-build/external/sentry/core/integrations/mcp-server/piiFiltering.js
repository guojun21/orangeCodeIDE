// Module: out-build/external/sentry/core/integrations/mcp-server/piiFiltering.js
// Offset: 141918 (bundle byte offset)
// Size: 736 bytes

cFt(), MXd=new Set([Uwc, $wc, VNo, Owc, kXd, aFt, _Xd])
}
});
function GKv(n){
  return typeof n=="object"&&n!==null&&"jsonrpc"in n&&n.jsonrpc==="2.0"&&"method"in n&&"id"in n
}
function OXd(n){
  return typeof n=="object"&&n!==null&&"jsonrpc"in n&&n.jsonrpc==="2.0"&&"method"in n&&!("id"in n)
}
function WKv(n){
  return typeof n=="object"&&n!==null&&"jsonrpc"in n&&n.jsonrpc==="2.0"&&"id"in n&&("result"in n||"error"in n)
}
function QKv(n){
  return typeof n=="object"&&n!==null&&"resource"in n&&"tool"in n&&"prompt"in n&&"connect"in n?!0:(Lg&&Jo.warn("Did not patch MCP server. Interface is incompatible."), !1)
}
function ABe(n){
  return n!=null&&typeof n=="object"
}
var YNo=