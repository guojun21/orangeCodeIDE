// Module: out-build/external/sentry/core/envelope.js
// Offset: 52380 (bundle byte offset)
// Size: 814 bytes

cze(), hSe(), lde(), loe(), cyc(), iW()
}
});
function QKd(n){
  if(!Lg)return;
  const{
    description:e="< unknown name >", op:t="< unknown op >", parent_span_id:i
  }
  =jA(n), {
    spanId:r
  }
  =n.spanContext(), s=fBe(n), o=qP(n), a=o===n, l=`[Tracing] Starting ${s?"sampled":"unsampled"} ${a?"root ":""}span`, u=[`op: ${t}`, `name: ${e}`, `ID: ${r}`];
  if(i&&u.push(`parent ID: ${i}`), !a){
    const{
      op:d,description:m
    }
    =jA(o);
    u.push(`root ID: ${o.spanContext().spanId}`), d&&u.push(`root op: ${d}`), m&&u.push(`root description: ${m}`)
  }
  Jo.log(`${l}
  ${u.join(`
  `)}`)
}
function jKd(n){
  if(!Lg)return;
  const{
    description:e="< unknown name >", op:t="< unknown op >"
  }
  =jA(n), {
    spanId:i
  }
  =n.spanContext(), s=qP(n)===n, o=`[Tracing] Finishing "${t}" ${s?"root ":""}span "${e}" with ID ${i}`;
  Jo.log(o)
}
var byc=