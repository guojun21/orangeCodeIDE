// Module: out-build/external/sentry/core/utils/openai/constants.js
// Offset: 165577 (bundle byte offset)
// Size: 1422 bytes

l_c="OpenAI", Deh=["responses.create", "chat.completions.create"], Beh=["response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"], Reh=["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta", ...Beh]
}
});
function u_c(n){
  return n.includes("chat.completions")?e_c.CHAT:n.includes("responses")?e_c.RESPONSES:n.split(".").pop()||"unknown"
}
function Peh(n){
  return`gen_ai.${u_c(n)}`
}
function gZv(n){
  return Deh.includes(n)
}
function fZv(n, e){
  return n?`${n}.${e}`:e
}
function bZv(n){
  return n!==null&&typeof n=="object"&&"object"in n&&n.object==="chat.completion"
}
function vZv(n){
  return n!==null&&typeof n=="object"&&"object"in n&&n.object==="response"
}
function AZv(n){
  return n!==null&&typeof n=="object"&&"type"in n&&typeof n.type=="string"&&n.type.startsWith("response.")
}
function yZv(n){
  return n!==null&&typeof n=="object"&&"object"in n&&n.object==="chat.completion.chunk"
}
function d_c(n, e, t, i){
  e!==void 0&&n.setAttributes({
    [leh]:e, [i5e]:e
  }), t!==void 0&&n.setAttributes({
    [ceh]:t, [r5e]:t
  }), i!==void 0&&n.setAttributes({
    [qpt]:i
  })
}
function h_c(n, e, t, i){
  n.setAttributes({
    [seh]:e, [$pt]:e
  }), n.setAttributes({
    [oeh]:t, [Upt]:t
  }), n.setAttributes({
    [aeh]:new Date(i*1e3).toISOString()
  })
}
var Leh=