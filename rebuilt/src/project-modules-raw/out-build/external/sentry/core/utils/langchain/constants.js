// Module: out-build/external/sentry/core/utils/langchain/constants.js
// Offset: 186485 (bundle byte offset)
// Size: 3361 bytes

Zeh="LangChain", dFt="auto.ai.langchain", Xeh={
  human:"user", ai:"assistant", assistant:"assistant", system:"system", function:"function", tool:"tool"
}
}
});
function hoe(n){
  if(typeof n=="string")return n;
  try{
    return JSON.stringify(n)
  }
  catch{
    return String(n)
  }
}
function y2n(n){
  const e=n.toLowerCase();
  return Xeh[e]??e
}
function eth(n){
  return n.includes("System")?"system":n.includes("Human")?"user":n.includes("AI")||n.includes("Assistant")?"assistant":n.includes("Function")?"function":n.includes("Tool")?"tool":"user"
}
function tth(n){
  if(!(!n||Array.isArray(n)))return n.invocation_params
}
function dXv(n){
  return n.map(e=>{
    const t=e._getType;
    if(typeof t=="function"){
      const r=t.call(e);
      return{
        role:y2n(r),content:hoe(e.content)
      }
    }
    const i=e.constructor?.name;
    if(i)return{
      role:y2n(eth(i)),content:hoe(e.content)
    };
    if(e.type){
      const r=String(e.type).toLowerCase();
      return{
        role:y2n(r),content:hoe(e.content)
      }
    }
    if(e.role)return{
      role:y2n(String(e.role)),content:hoe(e.content)
    };
    if(e.lc===1&&e.kwargs){
      const r=e.id,s=Array.isArray(r)&&r.length>0?r[r.length-1]:"",o=typeof s=="string"?eth(s):"user";
      return{
        role:y2n(o),content:hoe(e.kwargs?.content)
      }
    }
    return{
      role:"user",content:hoe(e.content)
    }
  })
}
function hXv(n, e, t){
  const i={
    
  }, r="kwargs"in n?n.kwargs:void 0, s=e?.temperature??t?.ls_temperature??r?.temperature;
  moe(i, h2n, s);
  const o=e?.max_tokens??t?.ls_max_tokens??r?.max_tokens;
  moe(i, nMo, o);
  const a=e?.top_p??r?.top_p;
  moe(i, p2n, a);
  const l=e?.frequency_penalty;
  moe(i, m2n, l);
  const u=e?.presence_penalty;
  return moe(i, iMo, u), e&&"stream"in e&&CBe(i, tMo, !!e.stream), i
}
function nth(n, e, t, i, r, s){
  return{
    [d2n]:hoe(n??"langchain"), [Hpt]:t, [vte]:hoe(e), [w1]:dFt, ...hXv(i, r, s)
  }
}
function mXv(n, e, t, i, r){
  const s=r?.ls_provider, o=i?.model??r?.ls_model_name??"unknown", a=nth(s, o, "pipeline", n, i, r);
  if(t&&Array.isArray(e)&&e.length>0){
    const l=e.map(u=>({
      role:"user",content:u
    }));
    CBe(a, yBe, hoe(l))
  }
  return a
}
function pXv(n, e, t, i, r){
  const s=r?.ls_provider??n.id?.[2], o=i?.model??r?.ls_model_name??"unknown", a=nth(s, o, "chat", n, i, r);
  if(t&&Array.isArray(e)&&e.length>0){
    const l=dXv(e.flat());
    CBe(a, yBe, hoe(l))
  }
  return a
}
function gXv(n, e){
  const t=[], i=n.flat();
  for(const r of i){
    const s=r.message?.content;
    if(Array.isArray(s))for(const o of s){
      const a=o;
      a.type==="tool_use"&&t.push(a)
    }
  }
  t.length>0&&CBe(e, wBe, hoe(t))
}
function fXv(n, e){
  if(!n)return;
  const t=n.tokenUsage, i=n.usage;
  if(t)moe(e, i5e, t.promptTokens), moe(e, r5e, t.completionTokens), moe(e, qpt, t.totalTokens);
  else if(i){
    moe(e, i5e, i.input_tokens), moe(e, r5e, i.output_tokens);
    const r=Number(i.input_tokens), s=Number(i.output_tokens), o=(Number.isNaN(r)?0:r)+(Number.isNaN(s)?0:s);
    o>0&&moe(e, qpt, o), i.cache_creation_input_tokens!==void 0&&moe(e, ieh, i.cache_creation_input_tokens), i.cache_read_input_tokens!==void 0&&moe(e, reh, i.cache_read_input_tokens)
  }
}
function bXv(n, e){
  if(!n)return;
  const t={
    
  };
  if(Array.isArray(n.generations)){
    const s=n.generations.flat().map(o=>o.generation_info?.finish_reason).filter(o=>typeof o=="string");
    if(s.length>0&&CBe(t, mze, hoe(s)), gXv(n.generations, t), e){
      const o=n.generations.flat().map(a=>a.text??a.message?.content).filter(a=>typeof a=="string");
      o.length>0&&CBe(t,vbe,hoe(o))
    }
  }
  fXv(n.llmOutput, t);
  const i=n.llmOutput, r=i?.model_name??i?.model;
  return r&&CBe(t, Upt, r), i?.id&&CBe(t, $pt, i.id), i?.stop_reason&&CBe(t, neh, hoe(i.stop_reason)), t
}
var CBe, moe, vXv=