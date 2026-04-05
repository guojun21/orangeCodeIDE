// Module: out-build/external/sentry/core/transports/userAgent.js
// Offset: 94197 (bundle byte offset)
// Size: 1841 bytes

Ae({
  "out-build/external/sentry/core/transports/userAgent.js"(){
    "use strict"
  }
});
function rwc(n, e){
  return n(e.stack||"", 1)
}
function swc(n, e){
  const t={
    type:e.name||e.constructor.name, value:e.message
  }, i=rwc(n, e);
  return i.length&&(t.stacktrace={
    frames:i
  }), t
}
function zzv(n){
  for(const e in n)if(Object.prototype.hasOwnProperty.call(n, e)){
    const t=n[e];
    if(t instanceof Error)return t
  }
}
function Vzv(n){
  if("name"in n&&typeof n.name=="string"){
    let i=`'${n.name}' captured as exception`;
    return"message"in n&&typeof n.message=="string"&&(i+=` with message '${n.message}'`), i
  }
  else if("message"in n&&typeof n.message=="string")return n.message;
  const e=eNo(n);
  if($2t(n))return`Event \`ErrorEvent\` captured as exception with message \`${n.message}\``;
  const t=Kzv(n);
  return`${t&&t!=="Object"?`'${t}'`:"Object"} captured as exception with keys: ${e}`
}
function Kzv(n){
  try{
    const e=Object.getPrototypeOf(n);
    return e?e.constructor.name:void 0
  }
  catch{
    
  }
}
function Yzv(n, e, t, i){
  if(uSe(t))return[t, void 0];
  if(e.synthetic=!0, bY(t)){
    const s=n?.getOptions().normalizeDepth, o={
      __serialized__:jMn(t,s)
    }, a=zzv(t);
    if(a)return[a, o];
    const l=Vzv(t), u=i?.syntheticException||new Error(l);
    return u.message=l, [u, o]
  }
  const r=i?.syntheticException||new Error(t);
  return r.message=`${t}`, [r, void 0]
}
function $Yd(n, e, t, i){
  const s=i?.data&&i.data.mechanism||{
    handled:!0, type:"generic"
  }, [o, a]=Yzv(n, s, t, i), l={
    exception:{
      values:[swc(e,o)]
    }
  };
  return a&&(l.extra=a), eze(l, void 0, void 0), nW(l, s), {
    ...l, event_id:i?.event_id
  }
}
function qYd(n, e, t="info", i, r){
  const s={
    event_id:i?.event_id, level:t
  };
  if(r&&i?.syntheticException){
    const o=rwc(n, i.syntheticException);
    o.length&&(s.exception={
      values:[{
        value:e,stacktrace:{
          frames:o
        }
      }
      ]
    }, nW(s, {
      synthetic:!0
    }))
  }
  if(Apt(e)){
    const{
      __sentry_template_string__:o,__sentry_template_values__:a
    }
    =e;
    return s.logentry={
      message:o,params:a
    }, s
  }
  return s.message=e, s
}
var owc=