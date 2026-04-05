// Module: out-build/external/sentry/core/utils/openai/utils.js
// Offset: 166999 (bundle byte offset)
// Size: 2597 bytes

Abe(), lMo()
}
});
function wZv(n, e){
  for(const t of n){
    const i=t.index;
    if(!(i===void 0||!t.function))if(!(i in e.chatCompletionToolCalls))e.chatCompletionToolCalls[i]={
      ...t,function:{
        name:t.function.name,arguments:t.function.arguments||""
      }
    };
    else{
      const r=e.chatCompletionToolCalls[i];
      t.function.arguments&&r?.function&&(r.function.arguments+=t.function.arguments)
    }
  }
}
function _Zv(n, e, t){
  e.responseId=n.id??e.responseId, e.responseModel=n.model??e.responseModel, e.responseTimestamp=n.created??e.responseTimestamp, n.usage&&(e.promptTokens=n.usage.prompt_tokens, e.completionTokens=n.usage.completion_tokens, e.totalTokens=n.usage.total_tokens);
  for(const i of n.choices??[])t&&(i.delta?.content&&e.responseTexts.push(i.delta.content), i.delta?.tool_calls&&wZv(i.delta.tool_calls, e)), i.finish_reason&&e.finishReasons.push(i.finish_reason)
}
function CZv(n, e, t, i){
  if(!(n&&typeof n=="object")){
    e.eventTypes.push("unknown:non-object");
    return
  }
  if(n instanceof Error){
    i.setStatus({
      code:nE,message:"internal_error"
    }), Sw(n, {
      mechanism:{
        handled:!1,type:"auto.ai.openai.stream-response"
      }
    });
    return
  }
  if(!("type"in n))return;
  const r=n;
  if(!Reh.includes(r.type)){
    e.eventTypes.push(r.type);
    return
  }
  if(t&&(r.type==="response.output_item.done"&&"item"in r&&e.responsesApiToolCalls.push(r.item), r.type==="response.output_text.delta"&&"delta"in r&&r.delta)){
    e.responseTexts.push(r.delta);
    return
  }
  if("response"in r){
    const{
      response:s
    }
    =r;
    e.responseId=s.id??e.responseId, e.responseModel=s.model??e.responseModel, e.responseTimestamp=s.created_at??e.responseTimestamp, s.usage&&(e.promptTokens=s.usage.input_tokens, e.completionTokens=s.usage.output_tokens, e.totalTokens=s.usage.total_tokens), s.status&&e.finishReasons.push(s.status), t&&s.output_text&&e.responseTexts.push(s.output_text)
  }
}
async function*SZv(n, e, t){
  const i={
    eventTypes:[], responseTexts:[], finishReasons:[], responseId:"", responseModel:"", responseTimestamp:0, promptTokens:void 0, completionTokens:void 0, totalTokens:void 0, chatCompletionToolCalls:{
      
    }, responsesApiToolCalls:[]
  };
  try{
    for await(const r of n)yZv(r)?_Zv(r, i, t):AZv(r)&&CZv(r, i, t, e), yield r
  }
  finally{
    h_c(e, i.responseId, i.responseModel, i.responseTimestamp), d_c(e, i.promptTokens, i.completionTokens, i.totalTokens), e.setAttributes({
      [g2n]:!0
    }), i.finishReasons.length&&e.setAttributes({
      [mze]:JSON.stringify(i.finishReasons)
    }), t&&i.responseTexts.length&&e.setAttributes({
      [vbe]:i.responseTexts.join("")
    });
    const s=[...Object.values(i.chatCompletionToolCalls), ...i.responsesApiToolCalls];
    s.length>0&&e.setAttributes({
      [wBe]:JSON.stringify(s)
    }), e.end()
  }
}
var kZv=