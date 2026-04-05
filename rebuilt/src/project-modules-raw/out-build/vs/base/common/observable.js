// Module: out-build/vs/base/common/observable.js
// Offset: 520551 (bundle byte offset)
// Size: 1413 bytes

liA()
}
});
function uiA(n){
  return y4t.has(n)
}
function boh(){
  return new woh
}
function wC(n=bi.document.head, e, t){
  const i=document.createElement("style");
  if(i.type="text/css", i.media="screen", e?.(i), n.appendChild(i), t&&t.add($i(()=>i.remove())), n===bi.document.head){
    const r=new Set;
    y4t.set(i, r);
    for(const{
      window:s,disposables:o
    }
    of Obe()){
      if(s===bi)continue;
      const a=o.add(voh(i,r,s));
      t?.add(a)
    }
  }
  return i
}
function diA(n){
  const e=new Ut;
  for(const[t, i]of y4t)e.add(voh(t, i, n));
  return e
}
function voh(n, e, t){
  const i=new Ut, r=n.cloneNode(!0);
  t.document.head.appendChild(r), i.add($i(()=>r.remove()));
  for(const s of yoh(n))r.sheet?.insertRule(s.cssText, r.sheet?.cssRules.length);
  return i.add(dFo.observe(n, i, {
    childList:!0
  })(()=>{
    r.textContent=n.textContent
  })), e.add(r), i.add($i(()=>e.delete(r))), i
}
function Aoh(){
  return tFo||(tFo=wC()), tFo
}
function yoh(n){
  return n?.sheet?.rules?n.sheet.rules:n?.sheet?.cssRules?n.sheet.cssRules:[]
}
function uW(n, e, t=Aoh()){
  if(!(!t||!e)){
    t.sheet?.insertRule(`${n} {${e}}`, 0);
    for(const i of y4t.get(t)??[])uW(n, e, i)
  }
}
function k5e(n, e=Aoh()){
  if(!e)return;
  const t=yoh(e), i=[];
  for(let r=0;
  r<t.length;
  r++){
    const s=t[r];
    hiA(s)&&s.selectorText.indexOf(n)!==-1&&i.push(r)
  }
  for(let r=i.length-1;
  r>=0;
  r--)e.sheet?.deleteRule(i[r]);
  for(const r of y4t.get(e)??[])k5e(n, r)
}
function hiA(n){
  return typeof n.selectorText=="string"
}
var y4t, woh, tFo, KC=