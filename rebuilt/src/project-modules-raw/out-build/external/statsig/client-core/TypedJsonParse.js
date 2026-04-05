// Module: out-build/external/statsig/client-core/TypedJsonParse.js
// Offset: 26687358 (bundle byte offset)
// Size: 394 bytes

eie()
}
});
function Ytu(n, e, t, i){
  return{
    source:n, data:e, receivedAt:Date.now(), stableID:t, fullUserHash:nga(i)
  }
}
function A2g(n, e){
  const t=Object.keys(n);
  return t.length<=e?null:t.reduce((i, r)=>{
    const s=n[i], o=n[r];
    return typeof s=="object"&&typeof o=="object"?o.receivedAt<s.receivedAt?r:i:o<s?r:i
  })
}
var Ztu, y2g, w2g, rMA=