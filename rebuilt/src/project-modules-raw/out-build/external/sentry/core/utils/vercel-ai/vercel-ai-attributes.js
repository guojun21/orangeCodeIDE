// Module: out-build/external/sentry/core/utils/vercel-ai/vercel-ai-attributes.js
// Offset: 160666 (bundle byte offset)
// Size: 4771 bytes

s_c="ai.prompt", geh="ai.schema", feh="ai.response.object", beh="ai.response.text", veh="ai.response.toolCalls", Aeh="ai.prompt.messages", yeh="ai.prompt.tools", _Be="ai.model.id", weh="ai.model.provider", _eh="ai.response.providerMetadata", Ceh="ai.usage.cachedInputTokens", Seh="ai.telemetry.functionId", keh="ai.usage.completionTokens", Eeh="ai.usage.promptTokens", o_c="gen_ai.response.model", aMo="gen_ai.usage.input_tokens", cMo="gen_ai.usage.output_tokens", a_c="ai.toolCall.name", c_c="ai.toolCall.id", xeh="ai.toolCall.args", Teh="ai.toolCall.result"
}
});
function Ieh(n, e){
  n.setAttribute(w1, e)
}
function aZv(n){
  const{
    data:e, description:t
  }
  =jA(n);
  if(!t)return;
  if(e[a_c]&&e[c_c]&&t==="ai.toolCall"){
    uZv(n, e);
    return
  }
  const i=e[_Be], r=e[weh];
  typeof i!="string"||typeof r!="string"||!i||!r||dZv(n, t, e)
}
function cZv(n){
  if(n.type==="transaction"&&n.spans){
    const e=new Map;
    for(const i of n.spans)lZv(i), iZv(i, e);
    for(const i of n.spans)i.op==="gen_ai.invoke_agent"&&meh(i, e);
    const t=n.contexts?.trace;
    t&&t.op==="gen_ai.invoke_agent"&&meh(t, e)
  }
  return n
}
function lZv(n){
  const{
    data:e, origin:t
  }
  =n;
  if(t==="auto.vercelai.otel"){
    doe(e, keh, cMo), doe(e, Eeh, aMo), doe(e, Ceh, uFt), typeof e[cMo]=="number"&&typeof e[aMo]=="number"&&(e["gen_ai.usage.total_tokens"]=e[cMo]+e[aMo]), doe(e, Aeh, "gen_ai.request.messages"), doe(e, beh, "gen_ai.response.text"), doe(e, veh, "gen_ai.response.tool_calls"), doe(e, feh, "gen_ai.response.object"), doe(e, yeh, "gen_ai.request.available_tools"), doe(e, xeh, "gen_ai.tool.input"), doe(e, Teh, "gen_ai.tool.output"), doe(e, geh, "gen_ai.request.schema"), mZv(e);
    for(const i of Object.keys(e))i.startsWith("ai.")&&doe(e, i, `vercel.${i}`)
  }
}
function doe(n, e, t){
  n[e]!=null&&(n[t]=n[e], delete n[e])
}
function uZv(n, e){
  Ieh(n, "auto.vercelai.otel"), n.setAttribute(HE, "gen_ai.execute_tool"), doe(e, a_c, "gen_ai.tool.name"), doe(e, c_c, "gen_ai.tool.call.id");
  const t=e["gen_ai.tool.call.id"];
  typeof t=="string"&&oMo.set(t, n), e["gen_ai.tool.type"]||n.setAttribute("gen_ai.tool.type", "function");
  const i=e["gen_ai.tool.name"];
  i&&n.updateName(`execute_tool ${i}`)
}
function dZv(n, e, t){
  Ieh(n, "auto.vercelai.otel");
  const i=e.replace("ai.", "");
  n.setAttribute("ai.pipeline.name", i), n.updateName(i);
  const r=t[Seh];
  if(r&&typeof r=="string"&&(n.updateName(`${i} ${r}`), n.setAttribute("gen_ai.function_id", r)), t[s_c]){
    const s=pze(t[s_c]);
    n.setAttribute("gen_ai.prompt", s)
  }
  if(t[_Be]&&!t[o_c]&&n.setAttribute(o_c, t[_Be]), n.setAttribute("ai.streaming", e.includes("stream")), e==="ai.generateText"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.generateText.doGenerate"){
    n.setAttribute(HE, "gen_ai.generate_text"), n.updateName(`generate_text ${t[_Be]}`);
    return
  }
  if(e==="ai.streamText"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.streamText.doStream"){
    n.setAttribute(HE, "gen_ai.stream_text"), n.updateName(`stream_text ${t[_Be]}`);
    return
  }
  if(e==="ai.generateObject"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.generateObject.doGenerate"){
    n.setAttribute(HE, "gen_ai.generate_object"), n.updateName(`generate_object ${t[_Be]}`);
    return
  }
  if(e==="ai.streamObject"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.streamObject.doStream"){
    n.setAttribute(HE, "gen_ai.stream_object"), n.updateName(`stream_object ${t[_Be]}`);
    return
  }
  if(e==="ai.embed"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.embed.doEmbed"){
    n.setAttribute(HE, "gen_ai.embed"), n.updateName(`embed ${t[_Be]}`);
    return
  }
  if(e==="ai.embedMany"){
    n.setAttribute(HE, "gen_ai.invoke_agent");
    return
  }
  if(e==="ai.embedMany.doEmbed"){
    n.setAttribute(HE, "gen_ai.embed_many"), n.updateName(`embed_many ${t[_Be]}`);
    return
  }
  if(e.startsWith("ai.stream")){
    n.setAttribute(HE, "ai.run");
    return
  }
}
function hZv(n){
  n.on("spanStart", aZv), n.addEventProcessor(Object.assign(cZv, {
    id:"VercelAiEventProcessor"
  }))
}
function mZv(n){
  const e=n[_eh];
  if(e)try{
    const t=JSON.parse(e);
    if(t.openai&&(gSe(n, uFt, t.openai.cachedPromptTokens), gSe(n, "gen_ai.usage.output_tokens.reasoning", t.openai.reasoningTokens), gSe(n, "gen_ai.usage.output_tokens.prediction_accepted", t.openai.acceptedPredictionTokens), gSe(n, "gen_ai.usage.output_tokens.prediction_rejected", t.openai.rejectedPredictionTokens), gSe(n, "gen_ai.conversation.id", t.openai.responseId)), t.anthropic){
      const i=t.anthropic.usage?.cache_read_input_tokens??t.anthropic.cacheReadInputTokens;
      gSe(n,uFt,i);
      const r=t.anthropic.usage?.cache_creation_input_tokens??t.anthropic.cacheCreationInputTokens;
      gSe(n,Xwc,r)
    }
    t.bedrock?.usage&&(gSe(n, uFt, t.bedrock.usage.cacheReadInputTokens), gSe(n, Xwc, t.bedrock.usage.cacheWriteInputTokens)), t.deepseek&&(gSe(n, uFt, t.deepseek.promptCacheHitTokens), gSe(n, "gen_ai.usage.input_tokens.cache_miss", t.deepseek.promptCacheMissTokens))
  }
  catch{
    
  }
}
function gSe(n, e, t){
  t!=null&&(n[e]=t)
}
var pZv=