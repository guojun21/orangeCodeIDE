// Module: out-build/external/sentry/core/integrations/mcp-server/errorCapture.js
// Offset: 139154 (bundle byte offset)
// Size: 1236 bytes

aT(), bte(), rW(), iW()
}
});
function Mwc(n, e){
  LB(n, e, t=>function(i, ...r){
    const s=r[r.length-1];
    if(typeof s!="function")return t.call(this, i, ...r);
    const o=MKv(s, e, i);
    return t.call(this, i, ...r.slice(0, -1), o)
  })
}
function MKv(n, e, t){
  return function(...i){
    try{
      return FKv.call(this,n,e,t,i)
    }
    catch(r){
      return Lg&&Jo.warn("MCP handler wrapping failed:",r),n.apply(this,i)
    }
  }
}
function FKv(n, e, t, i){
  try{
    const r=n.apply(this, i);
    return r&&typeof r=="object"&&typeof r.then=="function"?Promise.resolve(r).catch(s=>{
      throw uXd(s,e,t),s
    }):r
  }
  catch(r){
    throw uXd(r, e, t), r
  }
}
function uXd(n, e, t){
  try{
    const i={
      
    };
    e==="tool"?(i.tool_name=t, n.name==="ProtocolValidationError"||n.message.includes("validation")||n.message.includes("protocol")?Opt(n, "validation", i):n.name==="ServerTimeoutError"||n.message.includes("timed out")||n.message.includes("timeout")?Opt(n, "timeout", i):Opt(n, "tool_execution", i)):e==="resource"?(i.resource_uri=t, Opt(n, "resource_execution", i)):e==="prompt"&&(i.prompt_name=t, Opt(n, "prompt_execution", i))
  }
  catch{
    
  }
}
function OKv(n){
  Mwc(n, "tool")
}
function UKv(n){
  Mwc(n, "resource")
}
function $Kv(n){
  Mwc(n, "prompt")
}
function qKv(n){
  OKv(n), UKv(n), $Kv(n)
}
var HKv=