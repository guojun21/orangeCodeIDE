// Module: out-build/vs/workbench/services/ai/common/retrievalUtils.js
// Offset: 28416583 (bundle byte offset)
// Size: 1617 bytes

Ae({
  "out-build/vs/workbench/services/ai/common/retrievalUtils.js"(){
    "use strict"
  }
});
function _8A(n){
  if(n.length===0)return[];
  const e=[];
  let t=n[0];
  for(const i of n.slice(1))t.endPosition?.line===i.startPosition?.line&&t.endPosition?.column===i.startPosition?.column?t=new fz({
    startPosition:t.startPosition, endPosition:i.endPosition
  }):(e.push(t), t=i);
  return e.push(t), e.map(i=>new fz({
    startPosition:{
      line:i.startPosition?.line??1,column:1
    }, endPosition:i.endPosition
  }))
}
function C8A(n){
  return n.provider.rootUri?.path
}
async function S8A(n, e, t){
  const i=Array.isArray(n)?n:[n], r=[];
  for(const s of i){
    if(s.startsWith("~")||E8A(s))return;
    const o=eCc(s), a=t.resolveRelativePath(o);
    let l=!1, u=!1;
    try{
      const m=await e.stat(a);
      l=m.isFile,u=m.isDirectory
    }
    catch{
      return
    }
    const d=t.asRelativePath(a);
    if(l&&u)r.push(_Aa(d)), r.push(_Aa(d)+C1+"**");
    else if(l)r.push(_Aa(d));
    else if(u)r.push(_Aa(d)+C1+"**");
    else return
  }
  return r.length===1?r[0]:`{${r.join(",")}}`
}
function k8A(n){
  return n.startsWith("{")&&n.endsWith("}")?n.substring(1, n.length-1).split(",").map(e=>e.trim()):n
}
function E8A(n){
  return n.includes("*")||n.includes("?")||n.includes("[")||n.includes("{")
}
function _Aa(n){
  let e=n.replaceAll("/", C1);
  return e=eCc(e), e="."+C1+e, e
}
function x8A(n){
  return typeof n=="string"?n:`{${Object.keys(n).filter(t=>n[t]===!0).join(",")}}`
}
function T8A(n, e, t){
  if(t?.includePattern){
    const i=e.parseSearchPaths(t.includePattern);
    if(i.pattern&&!nP(i.pattern, n))return!1
  }
  if(t?.excludePattern){
    const i=e.parseSearchPaths(t.excludePattern);
    if(i.pattern&&nP(i.pattern, n))return!1
  }
  return!(t?.globFilter&&!nP(t.globFilter, n))
}
var Inf, oX, CAa, Dnf, Fme=