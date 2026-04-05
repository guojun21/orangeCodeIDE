// Module: out-build/vs/workbench/contrib/files/browser/explorerFileContrib.js
// Offset: 32469761 (bundle byte offset)
// Size: 2109 bytes

yn(), rt(), Ws(), (function(n){
  n.FileContributionRegistry="workbench.registry.explorer.fileContributions"
})(UOf||(UOf={
  
})), $Of=class extends at{
  constructor(){
    super(...arguments), this._onDidRegisterDescriptor=this._register(new Qe), this.onDidRegisterDescriptor=this._onDidRegisterDescriptor.event, this.descriptors=[]
  }
  register(n){
    this.descriptors.push(n), this._onDidRegisterDescriptor.fire(n)
  }
  create(n, e, t){
    return this.descriptors.map(i=>{
      const r=i.create(n,e);
      return t.add(r),r
    })
  }
}, oEa=new $Of, Di.add("workbench.registry.explorer.fileContributions", oEa)
}
});
function oly(n, e, t){
  const i=new lT;
  for(const s of n){
    const o=eN(e.resource, s);
    if(!o)throw new Error("Resource is not a child of the root");
    let a=e.resource;
    const l=o.split("/").slice(0, -1);
    for(const u of l)a=a.with({
      path:`${a.path}/${u}`
    }), i.add(a)
  }
  const r=[];
  for(const s of i){
    const o=s.path.split("/"), a=o[o.length-1];
    !a||!nP(t, a)||r.push(s)
  }
  return r
}
function aly(n, e){
  const t=eN(e.resource, n);
  if(!t)throw new Error("Resource is not a child of the root");
  let i=e, r=e.resource;
  const s=t.split("/");
  for(const o of s){
    r=r.with({
      path:`${r.path}/${o}`
    });
    const a=i.getChild(o);
    if(!a)return i;
    i=a
  }
}
function cly(n){
  return n?"*"+n.split("").join("*")+"*":"*"
}
function lly(n){
  return n?"*"+n+"*":"*"
}
function uly(n){
  let e="";
  for(let t=0;
  t<n.length;
  t++){
    const i=n[t];
    /[a-zA-Z]/.test(i)?e+=`[${i.toLowerCase()}${i.toUpperCase()}]`:e+=i
  }
  return e
}
function aEa(n){
  if(!wf(n))return null;
  let e=n;
  for(;
  e&&!e.classList.contains("monaco-list-row");
  ){
    if(e.classList.contains("label-name")&&e.hasAttribute("data-icon-label-count")){
      const t=Number(e.getAttribute("data-icon-label-count")),i=Number(e.getAttribute("data-icon-label-index"));
      if(_1(t)&&_1(i))return{
        element:e,count:t,index:i
      }
    }
    e=e.parentElement
  }
  return null
}
function dly(n){
  return!!aEa(n)
}
function qOf(n){
  return n.length===1?n[0].name:n.every(e=>e.isDirectory)?_(8100, null, n.length):n.every(e=>!e.isDirectory)?_(8101, null, n.length):`${n.length} files and folders`
}
var GAu, mxe, WAu, cEa, lEa, QAu, HOf, uEa, jAu, yCi, dEa, hEa, mEa, JOf, GOf=