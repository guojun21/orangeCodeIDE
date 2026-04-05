// Module: out-build/external/sentry/core/utils/google-genai/constants.js
// Offset: 180597 (bundle byte offset)
// Size: 2022 bytes

Weh="Google_GenAI", p_c=["models.generateContent", "models.generateContentStream", "chats.create", "sendMessage", "sendMessageStream"], Qeh="google_genai", g_c="chats.create", jeh="chat"
}
});
function ZZv(n, e){
  const t=n?.promptFeedback;
  if(t?.blockReason){
    const i=t.blockReasonMessage??t.blockReason;
    return e.setStatus({
      code:nE,message:`Content blocked: ${i}`
    }), Sw(`Content blocked: ${i}`, {
      mechanism:{
        handled:!1,type:"auto.ai.google_genai"
      }
    }), !0
  }
  return!1
}
function XZv(n, e){
  typeof n.responseId=="string"&&(e.responseId=n.responseId), typeof n.modelVersion=="string"&&(e.responseModel=n.modelVersion);
  const t=n.usageMetadata;
  t&&(typeof t.promptTokenCount=="number"&&(e.promptTokens=t.promptTokenCount), typeof t.candidatesTokenCount=="number"&&(e.completionTokens=t.candidatesTokenCount), typeof t.totalTokenCount=="number"&&(e.totalTokens=t.totalTokenCount))
}
function eXv(n, e, t){
  Array.isArray(n.functionCalls)&&e.toolCalls.push(...n.functionCalls);
  for(const i of n.candidates??[]){
    i?.finishReason&&!e.finishReasons.includes(i.finishReason)&&e.finishReasons.push(i.finishReason);
    for(const r of i?.content?.parts??[])t&&r.text&&e.responseTexts.push(r.text), r.functionCall&&e.toolCalls.push({
      type:"function",id:r.functionCall.id,name:r.functionCall.name,arguments:r.functionCall.args
    })
  }
}
function tXv(n, e, t, i){
  !n||ZZv(n, i)||(XZv(n, e), eXv(n, e, t))
}
async function*nXv(n, e, t){
  const i={
    responseTexts:[], finishReasons:[], toolCalls:[]
  };
  try{
    for await(const r of n)tXv(r, i, t, e), yield r
  }
  finally{
    const r={
      [g2n]:!0
    };
    i.responseId&&(r[$pt]=i.responseId), i.responseModel&&(r[Upt]=i.responseModel), i.promptTokens!==void 0&&(r[i5e]=i.promptTokens), i.completionTokens!==void 0&&(r[r5e]=i.completionTokens), i.totalTokens!==void 0&&(r[qpt]=i.totalTokens), i.finishReasons.length&&(r[mze]=JSON.stringify(i.finishReasons)), t&&i.responseTexts.length&&(r[vbe]=i.responseTexts.join("")), t&&i.toolCalls.length&&(r[wBe]=JSON.stringify(i.toolCalls)), e.setAttributes(r), e.end()
  }
}
var iXv=