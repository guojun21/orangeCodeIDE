// Module: out-build/external/sentry/core/utils/google-genai/utils.js
// Offset: 182939 (bundle byte offset)
// Size: 3384 bytes

f_c()
}
});
function zeh(n, e){
  if("model"in n&&typeof n.model=="string")return n.model;
  if(e&&typeof e=="object"){
    const t=e;
    if("model"in t&&typeof t.model=="string")return t.model;
    if("modelVersion"in t&&typeof t.modelVersion=="string")return t.modelVersion
  }
  return"unknown"
}
function aXv(n){
  const e={
    
  };
  return"temperature"in n&&typeof n.temperature=="number"&&(e[h2n]=n.temperature), "topP"in n&&typeof n.topP=="number"&&(e[p2n]=n.topP), "topK"in n&&typeof n.topK=="number"&&(e[Zwc]=n.topK), "maxOutputTokens"in n&&typeof n.maxOutputTokens=="number"&&(e[nMo]=n.maxOutputTokens), "frequencyPenalty"in n&&typeof n.frequencyPenalty=="number"&&(e[m2n]=n.frequencyPenalty), "presencePenalty"in n&&typeof n.presencePenalty=="number"&&(e[iMo]=n.presencePenalty), e
}
function cXv(n, e, t){
  const i={
    [d2n]:Qeh, [Hpt]:v2n(n), [w1]:"auto.ai.google_genai"
  };
  if(e){
    if(i[vte]=zeh(e, t), "config"in e&&typeof e.config=="object"&&e.config){
      const r=e.config;
      if(Object.assign(i,aXv(r)),"tools"in r&&Array.isArray(r.tools)){
        const s=r.tools.map(o=>o.functionDeclarations);
        i[rMo]=JSON.stringify(s)
      }
    }
  }
  else i[vte]=zeh({
    
  }, t);
  return i
}
function Veh(n, e){
  if("contents"in e){
    const t=e.contents, i=pze(t);
    n.setAttributes({
      [yBe]:i
    })
  }
  if("message"in e){
    const t=e.message, i=pze(t);
    n.setAttributes({
      [yBe]:i
    })
  }
  if("history"in e){
    const t=e.history, i=pze(t);
    n.setAttributes({
      [yBe]:i
    })
  }
}
function lXv(n, e, t){
  if(!(!e||typeof e!="object")){
    if(e.usageMetadata&&typeof e.usageMetadata=="object"){
      const i=e.usageMetadata;
      typeof i.promptTokenCount=="number"&&n.setAttributes({
        [i5e]:i.promptTokenCount
      }),typeof i.candidatesTokenCount=="number"&&n.setAttributes({
        [r5e]:i.candidatesTokenCount
      }),typeof i.totalTokenCount=="number"&&n.setAttributes({
        [qpt]:i.totalTokenCount
      })
    }
    if(t&&Array.isArray(e.candidates)&&e.candidates.length>0){
      const i=e.candidates.map(r=>r.content?.parts&&Array.isArray(r.content.parts)?r.content.parts.map(s=>typeof s.text=="string"?s.text:"").filter(s=>s.length>0).join(""):"").filter(r=>r.length>0);
      i.length>0&&n.setAttributes({
        [vbe]:i.join("")
      })
    }
    if(t&&e.functionCalls){
      const i=e.functionCalls;
      Array.isArray(i)&&i.length>0&&n.setAttributes({
        [wBe]:JSON.stringify(i)
      })
    }
  }
}
function Keh(n, e, t, i){
  const r=e===g_c;
  return new Proxy(n, {
    apply(s, o, a){
      const l=a[0],u=cXv(e,l,t),d=u[vte]??"unknown",m=v2n(e);
      return sXv(e)?mSe({
        name:`${m} ${d} stream-response`,op:sMo(e),attributes:u
      },async p=>{
        try{
          i.recordInputs&&l&&Veh(p,l);
          const g=await s.apply(t,a);
          return nXv(g,p,!!i.recordOutputs)
        }
        catch(g){
          throw p.setStatus({
            code:nE,message:"internal_error"
          }),Sw(g,{
            mechanism:{
              handled:!1,type:"auto.ai.google_genai",data:{
                function:e
              }
            }
          }),p.end(),g
        }
      }):X3e({
        name:r?`${m} ${d} create`:`${m} ${d}`,op:sMo(e),attributes:u
      },p=>(i.recordInputs&&l&&Veh(p,l),zMn(()=>s.apply(t,a),g=>{
        Sw(g,{
          mechanism:{
            handled:!1,type:"auto.ai.google_genai",data:{
              function:e
            }
          }
        })
      },()=>{
        
      },g=>{
        r||lXv(p,g,i.recordOutputs)
      })))
    }
  })
}
function b_c(n, e="", t){
  return new Proxy(n, {
    get:(i, r, s)=>{
      const o=Reflect.get(i,r,s),a=deh(e,String(r));
      if(typeof o=="function"&&rXv(a)){
        if(a===g_c){
          const l=Keh(o,a,i,t);
          return function(...d){
            const m=l(...d);
            return m&&typeof m=="object"?b_c(m,jeh,t):m
          }
        }
        return Keh(o,a,i,t)
      }
      return typeof o=="function"?o.bind(i):o&&typeof o=="object"?b_c(o,a,t):o
    }
  })
}
function Yeh(n, e){
  const t=!!sm()?.getOptions().sendDefaultPii, i={
    recordInputs:t, recordOutputs:t, ...e
  };
  return b_c(n, "", i)
}
var uXv=