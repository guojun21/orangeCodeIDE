// Module: out-build/vs/base/browser/window.js
// Offset: 231940 (bundle byte offset)
// Size: 559 bytes

bi=window
}
});
function vze(n, e){
  const t=Object.create(null);
  for(const i of n){
    const r=e(i);
    let s=t[r];
    s||(s=t[r]=[]), s.push(i)
  }
  return t
}
function _Ft(n, e){
  const t=[], i=[];
  for(const r of n)e.has(r)||t.push(r);
  for(const r of e)n.has(r)||i.push(r);
  return{
    removed:t, added:i
  }
}
function j_c(n, e){
  const t=[], i=[];
  for(const[r, s]of n)e.has(r)||t.push(s);
  for(const[r, s]of e)n.has(r)||i.push(s);
  return{
    removed:t, added:i
  }
}
function JeA(n, e){
  const t=new Set;
  for(const i of e)n.has(i)&&t.add(i);
  return t
}
var vnh, Anh, Ate=