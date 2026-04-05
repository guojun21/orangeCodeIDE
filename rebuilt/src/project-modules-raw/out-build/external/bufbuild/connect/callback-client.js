// Module: out-build/external/bufbuild/connect/callback-client.js
// Offset: 26663578 (bundle byte offset)
// Size: 1462 bytes

Ka(), yM(), pL(), wtu(), Ett()
}
});
function RNA(n, e){
  return TNA(n, t=>{
    switch(t.kind){
      case vn.Unary:return PNA(e,n,t);
      case vn.ServerStreaming:return LNA(e,n,t);
      case vn.ClientStreaming:return NNA(e,n,t);
      case vn.BiDiStreaming:return MNA(e,n,t);
      default:return null
    }
  })
}
function kMg(n, e){
  return RNA(n, e)
}
function PNA(n, e, t){
  return async function(i, r){
    const s=await n.unary(e, t, r?.signal, r?.timeoutMs, r?.headers, i, r?.contextValues);
    return r?.onHeader?.(s.header), r?.onTrailer?.(s.trailer), s.message
  }
}
function LNA(n, e, t){
  return function(i, r){
    return EMg(n.stream(e, t, r?.signal, r?.timeoutMs, r?.headers, DNA([i]), r?.contextValues), r)
  }
}
function NNA(n, e, t){
  return async function(i, r){
    const s=await n.stream(e, t, r?.signal, r?.timeoutMs, r?.headers, i, r?.contextValues);
    r?.onHeader?.(s.header);
    let o, a=0;
    for await(const l of s.message)o=l, a++;
    if(!o)throw new fA("protocol error: missing response message", j0.Unimplemented);
    if(a>1)throw new fA("protocol error: received extra messages for client streaming method", j0.Unimplemented);
    return r?.onTrailer?.(s.trailer), o
  }
}
function MNA(n, e, t){
  return function(i, r){
    return EMg(n.stream(e, t, r?.signal, r?.timeoutMs, r?.headers, i, r?.contextValues), r)
  }
}
function EMg(n, e){
  const t=(async function*(){
    const i=await n;
    e?.onHeader?.(i.header), yield*i.message, e?.onTrailer?.(i.trailer)
  })()[Symbol.asyncIterator]();
  return{
    [Symbol.asyncIterator]:()=>({
      next:()=>t.next()
    })
  }
}
var FNA=