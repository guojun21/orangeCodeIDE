// Module: out-build/external/sentry/core/utils/is.js
// Offset: 17609 (bundle byte offset)
// Size: 1492 bytes

RAc=Object.prototype.toString
}
});
function vY(n, e={
  
}){
  if(!n)return"<unknown>";
  try{
    let t=n;
    const i=5, r=[];
    let s=0, o=0;
    const a=" > ", l=a.length;
    let u;
    const d=Array.isArray(e)?e:e.keyAttrs, m=!Array.isArray(e)&&e.maxStringLength||oKd;
    for(;
    t&&s++<i&&(u=mjv(t, d), !(u==="html"||s>1&&o+r.length*l+u.length>=m));
    )r.push(u), o+=u.length, t=t.parentNode;
    return r.reverse().join(a)
  }
  catch{
    return"<unknown>"
  }
}
function mjv(n, e){
  const t=n, i=[];
  if(!t?.tagName)return"";
  if(ZLo.HTMLElement&&t instanceof HTMLElement&&t.dataset){
    if(t.dataset.sentryComponent)return t.dataset.sentryComponent;
    if(t.dataset.sentryElement)return t.dataset.sentryElement
  }
  i.push(t.tagName.toLowerCase());
  const r=e?.length?e.filter(o=>t.getAttribute(o)).map(o=>[o, t.getAttribute(o)]):null;
  if(r?.length)r.forEach(o=>{
    i.push(`[${o[0]}="${o[1]}"]`)
  });
  else{
    t.id&&i.push(`#${t.id}`);
    const o=t.className;
    if(o&&gte(o)){
      const a=o.split(/\s+/);
      for(const l of a)i.push(`.${l}`)
    }
  }
  const s=["aria-label", "type", "name", "title", "alt"];
  for(const o of s){
    const a=t.getAttribute(o);
    a&&i.push(`[${o}="${a}"]`)
  }
  return i.join("")
}
function nde(){
  try{
    return ZLo.document.location.href
  }
  catch{
    return""
  }
}
function YLo(n){
  if(!ZLo.HTMLElement)return null;
  let e=n;
  const t=5;
  for(let i=0;
  i<t;
  i++){
    if(!e)return null;
    if(e instanceof HTMLElement){
      if(e.dataset.sentryComponent)return e.dataset.sentryComponent;
      if(e.dataset.sentryElement)return e.dataset.sentryElement
    }
    e=e.parentNode
  }
  return null
}
var ZLo, oKd, aKd=