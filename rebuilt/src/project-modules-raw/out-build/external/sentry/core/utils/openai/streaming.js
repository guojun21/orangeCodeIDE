// Module: out-build/external/sentry/core/utils/openai/streaming.js
// Offset: 169596 (bundle byte offset)
// Size: 3295 bytes

bte(), rW(), Abe(), lMo(), Leh()
}
});
function EZv(n, e){
  const t={
    [d2n]:"openai", [Hpt]:u_c(e), [w1]:"auto.ai.openai"
  };
  if(n.length>0&&typeof n[0]=="object"&&n[0]!==null){
    const i=n[0], r=Array.isArray(i.tools)?i.tools:[], o=i.web_search_options&&typeof i.web_search_options=="object"?[{
      type:"web_search_options",...i.web_search_options
    }
    ]:[], a=[...r, ...o];
    a.length>0&&(t[rMo]=JSON.stringify(a))
  }
  if(n.length>0&&typeof n[0]=="object"&&n[0]!==null){
    const i=n[0];
    t[vte]=i.model??"unknown", "temperature"in i&&(t[h2n]=i.temperature), "top_p"in i&&(t[p2n]=i.top_p), "frequency_penalty"in i&&(t[m2n]=i.frequency_penalty), "presence_penalty"in i&&(t[iMo]=i.presence_penalty), "stream"in i&&(t[tMo]=i.stream)
  }
  else t[vte]="unknown";
  return t
}
function xZv(n, e, t){
  if(h_c(n, e.id, e.model, e.created), e.usage&&d_c(n, e.usage.prompt_tokens, e.usage.completion_tokens, e.usage.total_tokens), Array.isArray(e.choices)){
    const i=e.choices.map(r=>r.finish_reason).filter(r=>r!==null);
    if(i.length>0&&n.setAttributes({
      [mze]:JSON.stringify(i)
    }), t){
      const r=e.choices.map(s=>s.message?.tool_calls).filter(s=>Array.isArray(s)&&s.length>0).flat();
      r.length>0&&n.setAttributes({
        [wBe]:JSON.stringify(r)
      })
    }
  }
}
function TZv(n, e, t){
  if(h_c(n, e.id, e.model, e.created_at), e.status&&n.setAttributes({
    [mze]:JSON.stringify([e.status])
  }), e.usage&&d_c(n, e.usage.input_tokens, e.usage.output_tokens, e.usage.total_tokens), t){
    const i=e;
    if(Array.isArray(i.output)&&i.output.length>0){
      const r=i.output.filter(s=>typeof s=="object"&&s!==null&&s.type==="function_call");
      r.length>0&&n.setAttributes({
        [wBe]:JSON.stringify(r)
      })
    }
  }
}
function IZv(n, e, t){
  if(!e||typeof e!="object")return;
  const i=e;
  if(bZv(i)){
    if(xZv(n, i, t), t&&i.choices?.length){
      const r=i.choices.map(s=>s.message?.content||"");
      n.setAttributes({
        [vbe]:JSON.stringify(r)
      })
    }
  }
  else vZv(i)&&(TZv(n, i, t), t&&i.output_text&&n.setAttributes({
    [vbe]:i.output_text
  }))
}
function Neh(n, e){
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
}
function DZv(){
  const e=ry().getClient(), t=e?.getIntegrationByName(l_c), i=t?!!e?.getOptions().sendDefaultPii:!1;
  return{
    recordInputs:t?.options?.recordInputs??i, recordOutputs:t?.options?.recordOutputs??i
  }
}
function BZv(n, e, t, i){
  return async function(...s){
    const o=i||DZv(), a=EZv(s, e), l=a[vte]||"unknown", u=u_c(e), d=s[0];
    return d&&typeof d=="object"&&d.stream===!0?mSe({
      name:`${u} ${l} stream-response`,op:Peh(e),attributes:a
    }, async p=>{
      try{
        o.recordInputs&&s[0]&&typeof s[0]=="object"&&Neh(p,s[0]);
        const g=await n.apply(t,s);
        return SZv(g,p,o.recordOutputs??!1)
      }
      catch(g){
        throw p.setStatus({
          code:nE,message:"internal_error"
        }),Sw(g,{
          mechanism:{
            handled:!1,type:"auto.ai.openai.stream",data:{
              function:e
            }
          }
        }),p.end(),g
      }
    }):X3e({
      name:`${u} ${l}`,op:Peh(e),attributes:a
    }, async p=>{
      try{
        o.recordInputs&&s[0]&&typeof s[0]=="object"&&Neh(p,s[0]);
        const g=await n.apply(t,s);
        return IZv(p,g,o.recordOutputs),g
      }
      catch(g){
        throw Sw(g,{
          mechanism:{
            handled:!1,type:"auto.ai.openai",data:{
              function:e
            }
          }
        }),g
      }
    })
  }
}
function Meh(n, e="", t){
  return new Proxy(n, {
    get(i, r){
      const s=i[r],o=fZv(e,String(r));
      return typeof s=="function"&&gZv(o)?BZv(s,o,i,t):typeof s=="function"?s.bind(i):s&&typeof s=="object"?Meh(s,o,t):s
    }
  })
}
function Feh(n, e){
  return Meh(n, "", e)
}
var RZv=