// Module: out-build/external/sentry/core/vendor/escapeStringForRegex.js
// Offset: 21152 (bundle byte offset)
// Size: 784 bytes

Ae({
  "out-build/external/sentry/core/vendor/escapeStringForRegex.js"(){
    "use strict"
  }
});
function BMn(n, e=0){
  return typeof n!="string"||e===0||n.length<=e?n:`${n.slice(0,e)}...`
}
function tNo(n, e){
  let t=n;
  const i=t.length;
  if(i<=150)return t;
  e>i&&(e=i);
  let r=Math.max(e-60, 0);
  r<5&&(r=0);
  let s=Math.min(r+140, i);
  return s>i-5&&(s=i), s===i&&(r=Math.max(s-140, 0)), t=t.slice(r, s), r>0&&(t=`'{snip} ${t}`), s<i&&(t+=" {snip}"), t
}
function Xje(n, e){
  if(!Array.isArray(n))return"";
  const t=[];
  for(let i=0;
  i<n.length;
  i++){
    const r=n[i];
    try{
      BAc(r)?t.push("[VueViewModel]"):t.push(String(r))
    }
    catch{
      t.push("[value cannot be serialized]")
    }
  }
  return t.join(e)
}
function RMn(n, e, t=!1){
  return gte(n)?iKd(e)?e.test(n):gte(e)?t?n===e:n.includes(e):!1:!1
}
function Qj(n, e=[], t=!1){
  return e.some(i=>RMn(n, i, t))
}
var mBe=