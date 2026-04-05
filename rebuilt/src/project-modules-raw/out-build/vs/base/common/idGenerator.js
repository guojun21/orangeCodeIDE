// Module: out-build/vs/base/common/idGenerator.js
// Offset: 2039994 (bundle byte offset)
// Size: 2304 bytes

G3o=class{
  constructor(n){
    this._prefix=n, this._lastId=0
  }
  nextId(){
    return this._prefix+ ++this._lastId
  }
}, w3t=new G3o("id#")
}
});
function tDc(){
  return{
    async:!1, breaks:!1, extensions:null, gfm:!0, hooks:null, pedantic:!1, renderer:null, silent:!1, tokenizer:null, walkTokens:null
  }
}
function C_h(n){
  S9e=n
}
function Hde(n, e){
  if(e){
    if(nDc.test(n))return n.replace(x_h, rDc)
  }
  else if(iDc.test(n))return n.replace(T_h, rDc);
  return n
}
function rN(n, e){
  let t=typeof n=="string"?n:n.source;
  e=e||"";
  const i={
    replace:(r, s)=>{
      let o=typeof s=="string"?s:s.source;
      return o=o.replace(D_h,"$1"),t=t.replace(r,o),i
    }, getRegex:()=>new RegExp(t, e)
  };
  return i
}
function S_h(n){
  try{
    n=encodeURI(n).replace(/%25/g, "%")
  }
  catch{
    return null
  }
  return n
}
function k_h(n, e){
  const t=n.replace(/\|/g, (s, o, a)=>{
    let l=!1, u=o;
    for(;
    --u>=0&&a[u]==="\\";
    )l=!l;
    return l?"|":" |"
  }), i=t.split(/ \|/);
  let r=0;
  if(i[0].trim()||i.shift(), i.length>0&&!i[i.length-1].trim()&&i.pop(), e)if(i.length>e)i.splice(e);
  else for(;
  i.length<e;
  )i.push("");
  for(;
  r<i.length;
  r++)i[r]=i[r].trim().replace(/\\\|/g, "|");
  return i
}
function h3n(n, e, t){
  const i=n.length;
  if(i===0)return"";
  let r=0;
  for(;
  r<i;
  ){
    const s=n.charAt(i-r-1);
    if(s===e&&!t)r++;
    else if(s!==e&&t)r++;
    else break
  }
  return n.slice(0, i-r)
}
function $uA(n, e){
  if(n.indexOf(e[1])===-1)return-1;
  let t=0;
  for(let i=0;
  i<n.length;
  i++)if(n[i]==="\\")i++;
  else if(n[i]===e[0])t++;
  else if(n[i]===e[1]&&(t--, t<0))return i;
  return-1
}
function E_h(n, e, t, i){
  const r=e.href, s=e.title?Hde(e.title):null, o=n[1].replace(/\\([\[\]])/g, "$1");
  if(n[0].charAt(0)!=="!"){
    i.state.inLink=!0;
    const a={
      type:"link",raw:t,href:r,title:s,text:o,tokens:i.inlineTokens(o)
    };
    return i.state.inLink=!1, a
  }
  return{
    type:"image", raw:t, href:r, title:s, text:Hde(o)
  }
}
function quA(n, e){
  const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}function cE(n,e){return tKe.parse(n,e)}var S9e,nDc,x_h,iDc,T_h,I_h,rDc,D_h,C3t,m3n,B_h,R_h,P_h,S3t,L_h,sDc,oDc,W3o,N_h,Q3o,M_h,F_h,p3n,j3o,O_h,aDc,U_h,z3o,cDc,$_h,q_h,lDc,H_h,uDc,J_h,k3t,G_h,W_h,Q_h,j_h,z_h,V_h,K_h,Y_h,Z_h,g3n,X_h,dDc,hDc,e0h,V3o,t0h,K3o,n0h,f3n,E3t,XVe,abt,Y3o,eKe,b3n,Z3o,tKe,HuA,JuA,GuA,i0h,WuA,mDc,r0h,cbt,vRe=