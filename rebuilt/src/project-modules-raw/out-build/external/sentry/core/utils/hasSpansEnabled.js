// Module: out-build/external/sentry/core/utils/hasSpansEnabled.js
// Offset: 44108 (bundle byte offset)
// Size: 659 bytes

aT()
}
});
function FKd(n){
  Jo.log(`Ignoring span ${n.op} - ${n.description} because it matches \`ignoreSpans\`.`)
}
function hNo(n, e){
  if(!e?.length||!n.description)return!1;
  for(const t of e){
    if(Jjv(t)){
      if(RMn(n.description,t))return Lg&&FKd(n),!0;
      continue
    }
    if(!t.name&&!t.op)continue;
    const i=t.name?RMn(n.description, t.name):!0, r=t.op?n.op&&RMn(n.op, t.op):!0;
    if(i&&r)return Lg&&FKd(n), !0
  }
  return!1
}
function Hjv(n, e){
  const t=e.parent_span_id, i=e.span_id;
  if(t)for(const r of n)r.parent_span_id===i&&(r.parent_span_id=t)
}
function Jjv(n){
  return typeof n=="string"||n instanceof RegExp
}
var cyc=