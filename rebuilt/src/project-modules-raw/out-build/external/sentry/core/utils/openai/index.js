// Module: out-build/external/sentry/core/utils/openai/index.js
// Offset: 172891 (bundle byte offset)
// Size: 3756 bytes

aT(), bte(), y6(), rW(), Y2t(), Abe(), A2n(), lMo(), kZv(), Leh()
}
});
function PZv(n, e){
  return"type"in n&&typeof n.type=="string"&&n.type==="error"?(e.setStatus({
    code:nE, message:n.error?.type??"internal_error"
  }), Sw(n.error, {
    mechanism:{
      handled:!1,type:"auto.ai.anthropic.anthropic_error"
    }
  }), !0):!1
}
function LZv(n, e){
  if(n.type==="message_delta"&&n.usage&&"output_tokens"in n.usage&&typeof n.usage.output_tokens=="number"&&(e.completionTokens=n.usage.output_tokens), n.message){
    const t=n.message;
    t.id&&(e.responseId=t.id), t.model&&(e.responseModel=t.model), t.stop_reason&&e.finishReasons.push(t.stop_reason), t.usage&&(typeof t.usage.input_tokens=="number"&&(e.promptTokens=t.usage.input_tokens), typeof t.usage.cache_creation_input_tokens=="number"&&(e.cacheCreationInputTokens=t.usage.cache_creation_input_tokens), typeof t.usage.cache_read_input_tokens=="number"&&(e.cacheReadInputTokens=t.usage.cache_read_input_tokens))
  }
}
function NZv(n, e){
  n.type!=="content_block_start"||typeof n.index!="number"||!n.content_block||(n.content_block.type==="tool_use"||n.content_block.type==="server_tool_use")&&(e.activeToolBlocks[n.index]={
    id:n.content_block.id, name:n.content_block.name, inputJsonParts:[]
  })
}
function MZv(n, e, t){
  if(!(n.type!=="content_block_delta"||!n.delta)){
    if(typeof n.index=="number"&&"partial_json"in n.delta&&typeof n.delta.partial_json=="string"){
      const i=e.activeToolBlocks[n.index];
      i&&i.inputJsonParts.push(n.delta.partial_json)
    }
    t&&typeof n.delta.text=="string"&&e.responseTexts.push(n.delta.text)
  }
}
function FZv(n, e){
  if(n.type!=="content_block_stop"||typeof n.index!="number")return;
  const t=e.activeToolBlocks[n.index];
  if(!t)return;
  const i=t.inputJsonParts.join("");
  let r;
  try{
    r=i?JSON.parse(i):{
      
    }
  }
  catch{
    r={
      __unparsed:i
    }
  }
  e.toolCalls.push({
    type:"tool_use", id:t.id, name:t.name, input:r
  }), delete e.activeToolBlocks[n.index]
}
function Oeh(n, e, t, i){
  !(n&&typeof n=="object")||PZv(n, i)||(LZv(n, e), NZv(n, e), MZv(n, e, t), FZv(n, e))
}
function OZv(n, e, t){
  e.isRecording()&&(n.responseId&&e.setAttributes({
    [$pt]:n.responseId
  }), n.responseModel&&e.setAttributes({
    [Upt]:n.responseModel
  }), r_c(e, n.promptTokens, n.completionTokens, n.cacheCreationInputTokens, n.cacheReadInputTokens), e.setAttributes({
    [g2n]:!0
  }), n.finishReasons.length>0&&e.setAttributes({
    [mze]:JSON.stringify(n.finishReasons)
  }), t&&n.responseTexts.length>0&&e.setAttributes({
    [vbe]:n.responseTexts.join("")
  }), t&&n.toolCalls.length>0&&e.setAttributes({
    [wBe]:JSON.stringify(n.toolCalls)
  }), e.end())
}
async function*UZv(n, e, t){
  const i={
    responseTexts:[], finishReasons:[], responseId:"", responseModel:"", promptTokens:void 0, completionTokens:void 0, cacheCreationInputTokens:void 0, cacheReadInputTokens:void 0, toolCalls:[], activeToolBlocks:{
      
    }
  };
  try{
    for await(const r of n)Oeh(r, i, t, e), yield r
  }
  finally{
    i.responseId&&e.setAttributes({
      [$pt]:i.responseId
    }), i.responseModel&&e.setAttributes({
      [Upt]:i.responseModel
    }), r_c(e, i.promptTokens, i.completionTokens, i.cacheCreationInputTokens, i.cacheReadInputTokens), e.setAttributes({
      [g2n]:!0
    }), i.finishReasons.length>0&&e.setAttributes({
      [mze]:JSON.stringify(i.finishReasons)
    }), t&&i.responseTexts.length>0&&e.setAttributes({
      [vbe]:i.responseTexts.join("")
    }), t&&i.toolCalls.length>0&&e.setAttributes({
      [wBe]:JSON.stringify(i.toolCalls)
    }), e.end()
  }
}
function $Zv(n, e, t){
  const i={
    responseTexts:[], finishReasons:[], responseId:"", responseModel:"", promptTokens:void 0, completionTokens:void 0, cacheCreationInputTokens:void 0, cacheReadInputTokens:void 0, toolCalls:[], activeToolBlocks:{
      
    }
  };
  return n.on("streamEvent", r=>{
    Oeh(r, i, t, e)
  }), n.on("message", ()=>{
    OZv(i, e, t)
  }), n.on("error", r=>{
    Sw(r, {
      mechanism:{
        handled:!1,type:"auto.ai.anthropic.stream_error"
      }
    }), e.isRecording()&&(e.setStatus({
      code:nE,message:"stream_error"
    }), e.end())
  }), n
}
var qZv=