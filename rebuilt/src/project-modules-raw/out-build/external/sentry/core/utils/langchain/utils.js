// Module: out-build/external/sentry/core/utils/langchain/utils.js
// Offset: 189846 (bundle byte offset)
// Size: 2622 bytes

y6(), Abe(), v_c(), CBe=(n, e, t)=>{
  t!=null&&(n[e]=t)
}, moe=(n, e, t)=>{
  const i=Number(t);
  Number.isNaN(i)||(n[e]=i)
}
}
});
function AXv(n={
  
}){
  const e=n.recordInputs??!1, t=n.recordOutputs??!1, i=new Map, r=o=>{
    const a=i.get(o);
    a?.isRecording()&&(a.end(), i.delete(o))
  }, s={
    lc_serializable:!1, lc_namespace:["langchain_core", "callbacks", "sentry"], lc_secrets:void 0, lc_attributes:void 0, lc_aliases:void 0, lc_serializable_keys:void 0, lc_id:["langchain_core", "callbacks", "sentry"], lc_kwargs:{
      
    }, name:"SentryCallbackHandler", ignoreLLM:!1, ignoreChain:!1, ignoreAgent:!1, ignoreRetriever:!1, ignoreCustomEvent:!1, raiseError:!1, awaitHandlers:!0, handleLLMStart(o, a, l, u, d, m, p, g){
      const f=tth(m),A=mXv(o,a,e,f,p),w=A[vte],C=A[Hpt];
      mSe({
        name:`${C} ${w}`,op:"gen_ai.pipeline",attributes:{
          ...A,[HE]:"gen_ai.pipeline"
        }
      },x=>(i.set(l,x),x))
    }, handleChatModelStart(o, a, l, u, d, m, p, g){
      const f=tth(m),A=pXv(o,a,e,f,p),w=A[vte],C=A[Hpt];
      mSe({
        name:`${C} ${w}`,op:"gen_ai.chat",attributes:{
          ...A,[HE]:"gen_ai.chat"
        }
      },x=>(i.set(l,x),x))
    }, handleLLMEnd(o, a, l, u, d){
      const m=i.get(a);
      if(m?.isRecording()){
        const p=bXv(o,t);
        p&&m.setAttributes(p),r(a)
      }
    }, handleLLMError(o, a){
      const l=i.get(a);
      l?.isRecording()&&(l.setStatus({
        code:nE,message:"llm_error"
      }),r(a)),Sw(o,{
        mechanism:{
          handled:!1,type:`${dFt}.llm_error_handler`
        }
      })
    }, handleChainStart(o, a, l, u){
      const d=o.name||"unknown_chain",m={
        [w1]:"auto.ai.langchain","langchain.chain.name":d
      };
      e&&(m["langchain.chain.inputs"]=JSON.stringify(a)),mSe({
        name:`chain ${d}`,op:"gen_ai.invoke_agent",attributes:{
          ...m,[HE]:"gen_ai.invoke_agent"
        }
      },p=>(i.set(l,p),p))
    }, handleChainEnd(o, a){
      const l=i.get(a);
      l?.isRecording()&&(t&&l.setAttributes({
        "langchain.chain.outputs":JSON.stringify(o)
      }),r(a))
    }, handleChainError(o, a){
      const l=i.get(a);
      l?.isRecording()&&(l.setStatus({
        code:nE,message:"chain_error"
      }),r(a)),Sw(o,{
        mechanism:{
          handled:!1,type:`${dFt}.chain_error_handler`
        }
      })
    }, handleToolStart(o, a, l, u){
      const d=o.name||"unknown_tool",m={
        [w1]:dFt,"gen_ai.tool.name":d
      };
      e&&(m["gen_ai.tool.input"]=a),mSe({
        name:`execute_tool ${d}`,op:"gen_ai.execute_tool",attributes:{
          ...m,[HE]:"gen_ai.execute_tool"
        }
      },p=>(i.set(l,p),p))
    }, handleToolEnd(o, a){
      const l=i.get(a);
      l?.isRecording()&&(t&&l.setAttributes({
        "gen_ai.tool.output":JSON.stringify(o)
      }),r(a))
    }, handleToolError(o, a){
      const l=i.get(a);
      l?.isRecording()&&(l.setStatus({
        code:nE,message:"tool_error"
      }),r(a)),Sw(o,{
        mechanism:{
          handled:!1,type:`${dFt}.tool_error_handler`
        }
      })
    }, copy(){
      return s
    }, toJSON(){
      return{
        lc:1,type:"not_implemented",id:s.lc_id
      }
    }, toJSONNotImplemented(){
      return{
        lc:1,type:"not_implemented",id:s.lc_id
      }
    }
  };
  return s
}
var yXv=