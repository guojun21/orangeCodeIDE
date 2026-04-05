// Module: out-build/external/sentry/core/integrations/mcp-server/validation.js
// Offset: 142654 (bundle byte offset)
// Size: 1301 bytes

ZT(), US()
}
});
function jKv(n){
  const e={
    [wXd]:n.length
  };
  for(const[t, i]of n.entries()){
    if(!ABe(i))continue;
    const r=n.length===1?"mcp.tool.result":`mcp.tool.result.${t}`, s=(a, l)=>{
      typeof l=="string"&&(e[`${r}.${a}`]=l)
    };
    s("content_type", i.type), s("mime_type", i.mimeType), s("uri", i.uri), s("name", i.name), typeof i.text=="string"&&(e[`${r}.content`]=i.text), typeof i.data=="string"&&(e[`${r}.data_size`]=i.data.length);
    const o=i.resource;
    ABe(o)&&(s("resource_uri", o.uri), s("resource_mime_type", o.mimeType))
  }
  return e
}
function zKv(n){
  if(!ABe(n))return{
    
  };
  const e=Array.isArray(n.content)?jKv(n.content):{
    
  };
  return typeof n.isError=="boolean"&&(e[yXd]=n.isError), e
}
function VKv(n){
  const e={
    
  };
  if(!ABe(n))return e;
  if(typeof n.description=="string"&&(e[Owc]=n.description), Array.isArray(n.messages)){
    e[SXd]=n.messages.length;
    const t=n.messages;
    for(const[i, r]of t.entries()){
      if(!ABe(r))continue;
      const s=t.length===1?"mcp.prompt.result":`mcp.prompt.result.${i}`;
      if(((a,l)=>{
        if(typeof l=="string"){
          const u=t.length===1?`${s}.message_${a}`:`${s}.${a}`;
          e[u]=l
        }
      })("role",r.role),ABe(r.content)){
        const a=r.content;
        if(typeof a.text=="string"){
          const l=t.length===1?`${s}.message_content`:`${s}.content`;
          e[l]=a.text
        }
      }
    }
  }
  return e
}
var KKv=