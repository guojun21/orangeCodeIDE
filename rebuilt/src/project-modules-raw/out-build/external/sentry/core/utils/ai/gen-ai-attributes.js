// Module: out-build/external/sentry/core/utils/ai/gen-ai-attributes.js
// Offset: 156394 (bundle byte offset)
// Size: 2511 bytes

teh="gen_ai.prompt", d2n="gen_ai.system", vte="gen_ai.request.model", tMo="gen_ai.request.stream", h2n="gen_ai.request.temperature", nMo="gen_ai.request.max_tokens", m2n="gen_ai.request.frequency_penalty", iMo="gen_ai.request.presence_penalty", p2n="gen_ai.request.top_p", Zwc="gen_ai.request.top_k", mze="gen_ai.response.finish_reasons", Upt="gen_ai.response.model", $pt="gen_ai.response.id", neh="gen_ai.response.stop_reason", i5e="gen_ai.usage.input_tokens", r5e="gen_ai.usage.output_tokens", qpt="gen_ai.usage.total_tokens", Hpt="gen_ai.operation.name", yBe="gen_ai.request.messages", vbe="gen_ai.response.text", rMo="gen_ai.request.available_tools", g2n="gen_ai.response.streaming", wBe="gen_ai.response.tool_calls", ieh="gen_ai.usage.cache_creation_input_tokens", reh="gen_ai.usage.cache_read_input_tokens", Xwc="gen_ai.usage.input_tokens.cache_write", uFt="gen_ai.usage.input_tokens.cached", seh="openai.response.id", oeh="openai.response.model", aeh="openai.response.timestamp", ceh="openai.usage.completion_tokens", leh="openai.usage.prompt_tokens", e_c={
  CHAT:"chat", RESPONSES:"responses"
}, t_c="anthropic.response.timestamp"
}
});
function n_c(n, e){
  if(f2n(n)<=e)return n;
  let t=0, i=n.length, r="";
  for(;
  t<=i;
  ){
    const s=Math.floor((t+i)/2), o=n.slice(0, s);
    f2n(o)<=e?(r=o, t=s+1):i=s-1
  }
  return r
}
function jYv(n){
  return typeof n=="string"?n:n.text
}
function ueh(n, e){
  return typeof n=="string"?e:{
    ...n, text:e
  }
}
function zYv(n){
  return n!==null&&typeof n=="object"&&"content"in n&&typeof n.content=="string"
}
function VYv(n){
  return n!==null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)&&n.parts.length>0
}
function KYv(n, e){
  const t={
    ...n, content:""
  }, i=b2n(t), r=e-i;
  if(r<=0)return[];
  const s=n_c(n.content, r);
  return[{
    ...n, content:s
  }
  ]
}
function YYv(n, e){
  const{
    parts:t
  }
  =n, i=t.map(a=>ueh(a, "")), r=b2n({
    ...n, parts:i
  });
  let s=e-r;
  if(s<=0)return[];
  const o=[];
  for(const a of t){
    const l=jYv(a), u=f2n(l);
    if(u<=s)o.push(a), s-=u;
    else if(o.length===0){
      const d=n_c(l,s);
      d&&o.push(ueh(a,d));
      break
    }
    else break
  }
  return o.length>0?[{
    ...n, parts:o
  }
  ]:[]
}
function ZYv(n, e){
  return!n||typeof n!="object"?[]:zYv(n)?KYv(n, e):VYv(n)?YYv(n, e):[]
}
function XYv(n, e){
  if(!Array.isArray(n)||n.length===0||b2n(n)<=e)return n;
  const i=n.map(b2n);
  let r=0, s=n.length;
  for(let o=n.length-1;
  o>=0;
  o--){
    const a=i[o];
    if(a&&r+a>e)break;
    a&&(r+=a), s=o
  }
  if(s===n.length){
    const o=n[n.length-1];
    return ZYv(o, e)
  }
  return n.slice(s)
}
function eZv(n){
  return XYv(n, i_c)
}
function tZv(n){
  return n_c(n, i_c)
}
var i_c, f2n, b2n, nZv=