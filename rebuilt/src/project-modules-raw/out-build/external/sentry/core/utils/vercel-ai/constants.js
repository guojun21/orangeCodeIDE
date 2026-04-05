// Module: out-build/external/sentry/core/utils/vercel-ai/constants.js
// Offset: 159791 (bundle byte offset)
// Size: 695 bytes

oMo=new Map
}
});
function iZv(n, e){
  const t=n.parent_span_id;
  if(!t)return;
  const i=n.data[i5e], r=n.data[r5e];
  if(typeof i=="number"||typeof r=="number"){
    const s=e.get(t)||{
      inputTokens:0,outputTokens:0
    };
    typeof i=="number"&&(s.inputTokens+=i), typeof r=="number"&&(s.outputTokens+=r), e.set(t, s)
  }
}
function meh(n, e){
  const t=e.get(n.span_id);
  !t||!n.data||(t.inputTokens>0&&(n.data[i5e]=t.inputTokens), t.outputTokens>0&&(n.data[r5e]=t.outputTokens), (t.inputTokens>0||t.outputTokens>0)&&(n.data["gen_ai.usage.total_tokens"]=t.inputTokens+t.outputTokens))
}
function rZv(n){
  return oMo.get(n)
}
function sZv(n){
  oMo.delete(n)
}
var peh=