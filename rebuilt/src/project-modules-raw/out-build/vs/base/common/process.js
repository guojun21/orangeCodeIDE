// Module: out-build/vs/base/common/process.js
// Offset: 320088 (bundle byte offset)
// Size: 1807 bytes

if(_r(), i2o=globalThis.vscode, typeof i2o<"u"&&typeof i2o.process<"u"){
  const n=i2o.process;
  ugt={
    get platform(){
      return n.platform
    }, get arch(){
      return n.arch
    }, get env(){
      return n.env
    }, cwd(){
      return n.cwd()
    }
  }
}
else typeof process<"u"&&typeof process?.versions?.node=="string"?ugt={
  get platform(){
    return process.platform
  }, get arch(){
    return process.arch
  }, get env(){
    return process.env
  }, cwd(){
    return process.env.VSCODE_CWD||process.cwd()
  }
}
:ugt={
  get platform(){
    return Sc?"win32":Fs?"darwin":"linux"
  }, get arch(){
    
  }, get env(){
    return{
      
    }
  }, cwd(){
    return"/"
  }
};
UFt=ugt.cwd, u2=ugt.env, h5e=ugt.platform, r2o=ugt.arch
}
});
function _tA(n, e){
  if(n===null||typeof n!="object")throw new q0c(e, "Object", n)
}
function g9(n, e){
  if(typeof n!="string")throw new q0c(e, "string", n)
}
function $S(n){
  return n===EH||n===xte
}
function $0c(n){
  return n===EH
}
function m5e(n){
  return n>=Nih&&n<=Fih||n>=Mih&&n<=Oih
}
function s2o(n, e, t, i){
  let r="", s=0, o=-1, a=0, l=0;
  for(let u=0;
  u<=n.length;
  ++u){
    if(u<n.length)l=n.charCodeAt(u);
    else{
      if(i(l))break;
      l=EH
    }
    if(i(l)){
      if(!(o===u-1||a===1))if(a===2){
        if(r.length<2||s!==2||r.charCodeAt(r.length-1)!==kze||r.charCodeAt(r.length-2)!==kze){
          if(r.length>2){
            const d=r.lastIndexOf(t);
            d===-1?(r="",s=0):(r=r.slice(0,d),s=r.length-1-r.lastIndexOf(t)),o=u,a=0;
            continue
          }
          else if(r.length!==0){
            r="",s=0,o=u,a=0;
            continue
          }
        }
        e&&(r+=r.length>0?`${t}..`:"..",s=2)
      }
      else r.length>0?r+=`${t}${n.slice(o+1,u)}`:r=n.slice(o+1,u),s=u-o-1;
      o=u,a=0
    }
    else l===kze&&a!==-1?++a:a=-1
  }
  return r
}
function CtA(n){
  return n?`${n[0]==="."?"":"."}${n}`:""
}
function Lih(n, e){
  _tA(e, "pathObject");
  const t=e.dir||e.root, i=e.base||`${e.name||""}${CtA(e.ext)}`;
  return t?t===e.root?`${t}${i}`:`${t}${n}${i}`:i
}
var Nih, Mih, Fih, Oih, kze, EH, xte, IBe, Uih, q0c, Tte, iE, $ih, Rm, k6, FR, gS, dgt, DBe, zN, fd, QD, StA, hgt, ktA, C1, EtA, Hl=