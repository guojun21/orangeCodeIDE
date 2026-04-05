// Module: out-build/external/sentry/browser-utils/instrument/xhr.js
// Offset: 230664 (bundle byte offset)
// Size: 854 bytes

lm(), AY(), goe="__sentry_xhr_v3__"
}
});
function fnh(n){
  return new URLSearchParams(n).toString()
}
function wFt(n, e=Jo){
  try{
    if(typeof n=="string")return[n];
    if(n instanceof URLSearchParams)return[n.toString()];
    if(n instanceof FormData)return[fnh(n)];
    if(!n)return[void 0]
  }
  catch(t){
    return gze&&e.error(t, "Failed to serialize body", n), [void 0, "BODY_PARSE_ERROR"]
  }
  return gze&&e.log("Skipping network body because of body type", n), [void 0, "UNPARSEABLE_BODY_TYPE"]
}
function TMo(n=[]){
  if(!(n.length!==2||typeof n[1]!="object"))return n[1].body
}
function Q_c(n){
  let e;
  try{
    e=n.getAllResponseHeaders()
  }
  catch(t){
    return gze&&Jo.error(t, "Failed to get xhr response headers", n), {
      
    }
  }
  return e?e.split(`\r
`).reduce((t, i)=>{
    const[r, s]=i.split(": ");
    return s&&(t[r.toLowerCase()]=s), t
  }, {
    
  }):{
    
  }
}
var HeA=