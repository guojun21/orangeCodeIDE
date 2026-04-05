// Module: out-build/external/sentry/core/utils/ai/messageTruncation.js
// Offset: 158905 (bundle byte offset)
// Size: 793 bytes

i_c=2e4, f2n=n=>new TextEncoder().encode(n).length, b2n=n=>f2n(JSON.stringify(n))
}
});
function v2n(n){
  return n.includes("messages")?"messages":n.includes("completions")?"completions":n.includes("models")?"models":n.includes("chat")?"chat":n.split(".").pop()||"unknown"
}
function sMo(n){
  return`gen_ai.${v2n(n)}`
}
function deh(n, e){
  return n?`${n}.${e}`:e
}
function r_c(n, e, t, i, r){
  if(e!==void 0&&n.setAttributes({
    [i5e]:e
  }), t!==void 0&&n.setAttributes({
    [r5e]:t
  }), e!==void 0||t!==void 0||i!==void 0||r!==void 0){
    const s=(e??0)+(t??0)+(i??0)+(r??0);
    n.setAttributes({
      [qpt]:s
    })
  }
}
function pze(n){
  if(typeof n=="string")return tZv(n);
  if(Array.isArray(n)){
    const e=eZv(n);
    return JSON.stringify(e)
  }
  return JSON.stringify(n)
}
var A2n=