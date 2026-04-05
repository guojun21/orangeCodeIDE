// Module: out-build/external/sentry/core/utils/transactionEvent.js
// Offset: 84519 (bundle byte offset)
// Size: 1854 bytes

y6()
}
});
function xNo(n){
  return{
    message:n, [nwc]:!0
  }
}
function Zyc(n){
  return{
    message:n, [iwc]:!0
  }
}
function DYd(n){
  return!!n&&typeof n=="object"&&nwc in n
}
function BYd(n){
  return!!n&&typeof n=="object"&&iwc in n
}
function RYd(n, e, t, i, r){
  let s=0, o;
  n.on(t, ()=>{
    s=0, clearTimeout(o)
  }), n.on(e, a=>{
    s+=i(a), s>=8e5?r(n):(clearTimeout(o), o=setTimeout(()=>{
      r(n)
    }, MYd))
  }), n.on("flush", ()=>{
    r(n)
  })
}
function qzv(n, e){
  const t=`${e} must return \`null\` or a valid event.`;
  if(Zje(n))return n.then(i=>{
    if(!bY(i)&&i!==null)throw xNo(t);
    return i
  }, i=>{
    throw xNo(`${e} rejected with ${i}`)
  });
  if(!bY(n)&&n!==null)throw xNo(t);
  return n
}
function Hzv(n, e, t, i){
  const{
    beforeSend:r, beforeSendTransaction:s, beforeSendSpan:o, ignoreSpans:a
  }
  =e;
  let l=t;
  if(Xyc(l)&&r)return r(l, i);
  if(PYd(l)){
    if(o||a){
      const u=Ozv(l);
      if(a?.length&&hNo(u,a))return null;
      if(o){
        const d=o(u);
        d?l=PMn(t,Uzv(d)):iyc()
      }
      if(l.spans){
        const d=[],m=l.spans;
        for(const g of m){
          if(a?.length&&hNo(g,a)){
            Hjv(m,g);
            continue
          }
          if(o){
            const f=o(g);
            f?d.push(f):(iyc(),d.push(g))
          }
          else d.push(g)
        }
        const p=l.spans.length-d.length;
        p&&n.recordDroppedEvent("before_send","span",p),l.spans=d
      }
    }
    if(s){
      if(l.spans){
        const u=l.spans.length;
        l.sdkProcessingMetadata={
          ...t.sdkProcessingMetadata,spanCountBeforeProcessing:u
        }
      }
      return s(l,i)
    }
  }
  return l
}
function Xyc(n){
  return n.type===void 0
}
function PYd(n){
  return n.type==="transaction"
}
function Jzv(n){
  let e=0;
  return n.name&&(e+=n.name.length*2), e+=8, e+LYd(n.attributes)
}
function Gzv(n){
  let e=0;
  return n.message&&(e+=n.message.length*2), e+LYd(n.attributes)
}
function LYd(n){
  if(!n)return 0;
  let e=0;
  return Object.values(n).forEach(t=>{
    Array.isArray(t)?e+=t.length*NYd(t[0]):tde(t)?e+=NYd(t):e+=100
  }), e
}
function NYd(n){
  return typeof n=="string"?n.length*2:typeof n=="number"?8:typeof n=="boolean"?4:0
}
var ewc, twc, nwc, iwc, MYd, s2n, FYd=