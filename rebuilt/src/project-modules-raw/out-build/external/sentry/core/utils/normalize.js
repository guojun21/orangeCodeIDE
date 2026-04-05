// Module: out-build/external/sentry/core/utils/normalize.js
// Offset: 48798 (bundle byte offset)
// Size: 1911 bytes

h9(), Wj(), bpt()
}
});
function fte(n, e=[]){
  return[n, e]
}
function UKd(n, e){
  const[t, i]=n;
  return[t, [...i, e]]
}
function bBe(n, e){
  const t=n[1];
  for(const i of t){
    const r=i[0].type;
    if(e(i, r))return!0
  }
  return!1
}
function hyc(n, e){
  return bBe(n, (t, i)=>e.includes(i))
}
function bNo(n){
  const e=M2t(Ev);
  return e.encodePolyfill?e.encodePolyfill(n):new TextEncoder().encode(n)
}
function Kjv(n){
  const e=M2t(Ev);
  return e.decodePolyfill?e.decodePolyfill(n):new TextDecoder().decode(n)
}
function z2t(n){
  const[e, t]=n;
  let i=JSON.stringify(e);
  function r(s){
    typeof i=="string"?i=typeof s=="string"?i+s:[bNo(i), s]:i.push(typeof s=="string"?bNo(s):s)
  }
  for(const s of t){
    const[o, a]=s;
    if(r(`
${JSON.stringify(o)}
`), typeof a=="string"||a instanceof Uint8Array)r(a);
    else{
      let l;
      try{
        l=JSON.stringify(a)
      }
      catch{
        l=JSON.stringify(jj(a))
      }
      r(l)
    }
  }
  return typeof i=="string"?i:Yjv(i)
}
function Yjv(n){
  const e=n.reduce((r, s)=>r+s.length, 0), t=new Uint8Array(e);
  let i=0;
  for(const r of n)t.set(r, i), i+=r.length;
  return t
}
function myc(n){
  let e=typeof n=="string"?bNo(n):n;
  function t(o){
    const a=e.subarray(0, o);
    return e=e.subarray(o+1), a
  }
  function i(){
    let o=e.indexOf(10);
    return o<0&&(o=e.length), JSON.parse(Kjv(t(o)))
  }
  const r=i(), s=[];
  for(;
  e.length;
  ){
    const o=i(), a=typeof o.length=="number"?o.length:void 0;
    s.push([o, a?t(a):i()])
  }
  return[r, s]
}
function $Kd(n){
  return[{
    type:"span"
  }, n]
}
function qKd(n){
  const e=typeof n.data=="string"?bNo(n.data):n.data;
  return[{
    type:"attachment", length:e.length, filename:n.filename, content_type:n.contentType, attachment_type:n.attachmentType
  }, e]
}
function pyc(n){
  return HKd[n]
}
function V2t(n){
  if(!n?.sdk)return;
  const{
    name:e, version:t
  }
  =n.sdk;
  return{
    name:e, version:t
  }
}
function gyc(n, e, t, i){
  const r=n.sdkProcessingMetadata?.dynamicSamplingContext;
  return{
    event_id:n.event_id, sent_at:new Date().toISOString(), ...e&&{
      sdk:e
    }, ...!!t&&i&&{
      dsn:ade(i)
    }, ...r&&{
      trace:r
    }
  }
}
var HKd, lde=