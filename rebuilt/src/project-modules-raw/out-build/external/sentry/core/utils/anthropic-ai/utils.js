// Module: out-build/external/sentry/core/utils/anthropic-ai/utils.js
// Offset: 177231 (bundle byte offset)
// Size: 3202 bytes

bte(), rW(), qeh()
}
});
function WZv(n, e){
  const t={
    [d2n]:"anthropic", [Hpt]:v2n(e), [w1]:"auto.ai.anthropic"
  };
  if(n.length>0&&typeof n[0]=="object"&&n[0]!==null){
    const i=n[0];
    i.tools&&Array.isArray(i.tools)&&(t[rMo]=JSON.stringify(i.tools)), t[vte]=i.model??"unknown", "temperature"in i&&(t[h2n]=i.temperature), "top_p"in i&&(t[p2n]=i.top_p), "stream"in i&&(t[tMo]=i.stream), "top_k"in i&&(t[Zwc]=i.top_k), "frequency_penalty"in i&&(t[m2n]=i.frequency_penalty), "max_tokens"in i&&(t[nMo]=i.max_tokens)
  }
  else e==="models.retrieve"||e==="models.get"?t[vte]=n[0]:t[vte]="unknown";
  return t
}
function m_c(n, e){
  if("messages"in e){
    const t=pze(e.messages);
    n.setAttributes({
      [yBe]:t
    })
  }
  if("input"in e){
    const t=pze(e.input);
    n.setAttributes({
      [yBe]:t
    })
  }
  "prompt"in e&&n.setAttributes({
    [teh]:JSON.stringify(e.prompt)
  })
}
function QZv(n, e){
  if("content"in e&&Array.isArray(e.content)){
    n.setAttributes({
      [vbe]:e.content.map(i=>i.text).filter(i=>!!i).join("")
    });
    const t=[];
    for(const i of e.content)(i.type==="tool_use"||i.type==="server_tool_use")&&t.push(i);
    t.length>0&&n.setAttributes({
      [wBe]:JSON.stringify(t)
    })
  }
  "completion"in e&&n.setAttributes({
    [vbe]:e.completion
  }), "input_tokens"in e&&n.setAttributes({
    [vbe]:JSON.stringify(e.input_tokens)
  })
}
function jZv(n, e){
  "id"in e&&"model"in e&&(n.setAttributes({
    [$pt]:e.id, [Upt]:e.model
  }), "created"in e&&typeof e.created=="number"&&n.setAttributes({
    [t_c]:new Date(e.created*1e3).toISOString()
  }), "created_at"in e&&typeof e.created_at=="number"&&n.setAttributes({
    [t_c]:new Date(e.created_at*1e3).toISOString()
  }), "usage"in e&&e.usage&&r_c(n, e.usage.input_tokens, e.usage.output_tokens, e.usage.cache_creation_input_tokens, e.usage.cache_read_input_tokens))
}
function zZv(n, e, t){
  if(!(!e||typeof e!="object")){
    if("type"in e&&e.type==="error"){
      JZv(n,e);
      return
    }
    t&&QZv(n, e), jZv(n, e)
  }
}
function Heh(n, e, t){
  throw Sw(n, {
    mechanism:{
      handled:!1,type:"auto.ai.anthropic",data:{
        function:t
      }
    }
  }), e.isRecording()&&(e.setStatus({
    code:nE, message:"internal_error"
  }), e.end()), n
}
function VZv(n, e, t, i, r, s, o, a, l, u, d){
  const m=r[vte]??"unknown", p={
    name:`${s} ${m} stream-response`, op:sMo(o), attributes:r
  };
  return u&&!d?mSe(p, async g=>{
    try{
      l.recordInputs&&a&&m_c(g,a);
      const f=await n.apply(t,i);
      return UZv(f,g,l.recordOutputs??!1)
    }
    catch(f){
      return Heh(f,g,o)
    }
  }):mSe(p, g=>{
    try{
      l.recordInputs&&a&&m_c(g,a);
      const f=e.apply(t,i);
      return $Zv(f,g,l.recordOutputs??!1)
    }
    catch(f){
      return Heh(f,g,o)
    }
  })
}
function KZv(n, e, t, i){
  return new Proxy(n, {
    apply(r, s, o){
      const a=WZv(o,e),l=a[vte]??"unknown",u=v2n(e),d=typeof o[0]=="object"?o[0]:void 0,m=!!d?.stream,p=e==="messages.stream";
      return m||p?VZv(n,r,t,o,a,u,e,d,i,m,p):X3e({
        name:`${u} ${l}`,op:sMo(e),attributes:a
      },g=>(i.recordInputs&&d&&m_c(g,d),zMn(()=>r.apply(t,o),f=>{
        Sw(f,{
          mechanism:{
            handled:!1,type:"auto.ai.anthropic",data:{
              function:e
            }
          }
        })
      },()=>{
        
      },f=>zZv(g,f,i.recordOutputs))))
    }
  })
}
function Jeh(n, e="", t){
  return new Proxy(n, {
    get(i, r){
      const s=i[r],o=deh(e,String(r));
      return typeof s=="function"&&HZv(o)?KZv(s,o,i,t):typeof s=="function"?s.bind(i):s&&typeof s=="object"?Jeh(s,o,t):s
    }
  })
}
function Geh(n, e){
  const t=!!sm()?.getOptions().sendDefaultPii, i={
    recordInputs:t, recordOutputs:t, ...e
  };
  return Jeh(n, "", i)
}
var YZv=