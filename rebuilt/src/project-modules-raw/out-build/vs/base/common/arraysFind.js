// Module: out-build/vs/base/common/arraysFind.js
// Offset: 237799 (bundle byte offset)
// Size: 5029 bytes

Z_c=class KHb{
  static{
    this.assertInvariants=!1
  }
  constructor(e){
    this._array=e, this._findLastMonotonousLastIdx=0
  }
  findLastMonotonous(e){
    if(KHb.assertInvariants){
      if(this._prevFindLastPredicate){
        for(const i of this._array)if(this._prevFindLastPredicate(i)&&!e(i))throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")
      }
      this._prevFindLastPredicate=e
    }
    const t=xFt(this._array, e, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx=t+1, t===-1?void 0:this._array[t]
  }
}
}
});
function l3(n){
  if(n.length===0)throw new Error("Invalid tail call");
  return[n.slice(0, n.length-1), n[n.length-1]]
}
function cg(n, e, t=(i, r)=>i===r){
  if(n===e)return!0;
  if(!n||!e||n.length!==e.length)return!1;
  for(let i=0, r=n.length;
  i<r;
  i++)if(!t(n[i], e[i]))return!1;
  return!0
}
function Snh(n, e){
  const t=n.length-1;
  e<t&&(n[e]=n[t]), n.pop()
}
function s5e(n, e, t){
  return IFt(n.length, i=>t(n[i], e))
}
function IFt(n, e){
  let t=0, i=n-1;
  for(;
  t<=i;
  ){
    const r=(t+i)/2|0, s=e(r);
    if(s<0)t=r+1;
    else if(s>0)i=r-1;
    else return r
  }
  return-(t+1)
}
function BMo(n, e, t){
  if(n=n|0, n>=e.length)throw new TypeError("invalid index");
  const i=e[Math.floor(e.length*Math.random())], r=[], s=[], o=[];
  for(const a of e){
    const l=t(a, i);
    l<0?r.push(a):l>0?s.push(a):o.push(a)
  }
  return n<r.length?BMo(n, r, t):n<r.length+o.length?o[0]:BMo(n-(r.length+o.length), s, t)
}
function yte(n, e){
  const t=[];
  let i;
  for(const r of n.slice(0).sort(e))!i||e(i[0], r)!==0?(i=[r], t.push(i)):i.push(r);
  return t
}
function*RMo(n, e){
  let t, i;
  for(const r of n)i!==void 0&&e(i, r)?t.push(r):(t&&(yield t), t=[r]), i=r;
  t&&(yield t)
}
function knh(n, e){
  for(let t=0;
  t<=n.length;
  t++)e(t===0?void 0:n[t-1], t===n.length?void 0:n[t])
}
function VeA(n, e){
  for(let t=0;
  t<n.length;
  t++)e(t===0?void 0:n[t-1], n[t], t+1===n.length?void 0:n[t+1])
}
function X_c(n, e, t){
  const i=[];
  function r(a, l, u){
    if(l===0&&u.length===0)return;
    const d=i[i.length-1];
    d&&d.start+d.deleteCount===a?(d.deleteCount+=l, d.toInsert.push(...u)):i.push({
      start:a,deleteCount:l,toInsert:u
    })
  }
  let s=0, o=0;
  for(;
  ;
  ){
    if(s===n.length){
      r(s,0,e.slice(o));
      break
    }
    if(o===e.length){
      r(s,n.length-s,[]);
      break
    }
    const a=n[s], l=e[o], u=t(a, l);
    u===0?(s+=1, o+=1):u<0?(r(s, 1, []), s+=1):u>0&&(r(s, 0, [l]), o+=1)
  }
  return i
}
function o5e(n, e, t){
  const i=X_c(n, e, t), r=[], s=[];
  for(const o of i)r.push(...n.slice(o.start, o.start+o.deleteCount)), s.push(...o.toInsert);
  return{
    removed:r, added:s
  }
}
function KeA(n, e, t){
  if(t===0)return[];
  const i=n.slice(0, t).sort(e);
  return YeA(n, e, i, t, n.length), i
}
function YeA(n, e, t, i, r){
  for(const s=t.length;
  i<r;
  i++){
    const o=n[i];
    if(e(o, t[s-1])<0){
      t.pop();
      const a=Sbe(t,l=>e(o,l)<0);
      t.splice(a,0,o)
    }
  }
}
function lh(n){
  return n.filter(e=>!!e)
}
function Ypt(n){
  let e=0;
  for(let t=0;
  t<n.length;
  t++)n[t]&&(n[e]=n[t], e+=1);
  n.length=e
}
function ZeA(n, e, t){
  n.splice(t, 0, n.splice(e, 1)[0])
}
function PMo(n){
  return!Array.isArray(n)||n.length===0
}
function q_(n){
  return Array.isArray(n)&&n.length>0
}
function xb(n, e=t=>t){
  const t=new Set;
  return n.filter(i=>{
    const r=e(i);
    return t.has(r)?!1:(t.add(r), !0)
  })
}
function XeA(n){
  const e=new Set;
  return t=>{
    const i=n(t);
    return e.has(i)?!1:(e.add(i), !0)
  }
}
function etA(n, e, t=(i, r)=>i===r){
  let i=0;
  for(let r=0, s=Math.min(n.length, e.length);
  r<s&&t(n[r], e[r]);
  r++)i++;
  return i
}
function _H(n, e){
  let t=typeof e=="number"?n:0;
  typeof e=="number"?t=n:(t=0, e=n);
  const i=[];
  if(t<=e)for(let r=t;
  r<e;
  r++)i.push(r);
  else for(let r=t;
  r>e;
  r--)i.push(r);
  return i
}
function U2n(n, e, t){
  return n.reduce((i, r)=>(i[e(r)]=t?t(r):r, i), Object.create(null))
}
function kbe(n, e){
  return n.push(e), ()=>e0c(n, e)
}
function e0c(n, e){
  const t=n.indexOf(e);
  if(t>-1)return n.splice(t, 1), e
}
function $2n(n, e, t){
  const i=n.slice(0, e), r=n.slice(e);
  return i.concat(t, r)
}
function q2n(n, e){
  let t;
  if(typeof e=="number"){
    let i=e;
    t=()=>{
      const r=Math.sin(i++)*179426549;
      return r-Math.floor(r)
    }
  }
  else t=Math.random;
  for(let i=n.length-1;
  i>0;
  i-=1){
    const r=Math.floor(t()*(i+1)), s=n[i];
    n[i]=n[r], n[r]=s
  }
}
function t0c(n, e){
  const t=n.indexOf(e);
  t>-1&&(n.splice(t, 1), n.unshift(e))
}
function LMo(n, e){
  const t=n.indexOf(e);
  t>-1&&(n.splice(t, 1), n.push(e))
}
function n0c(n, e){
  for(const t of e)n.push(t)
}
function ttA(n, e){
  return Array.isArray(n)?n.map(e):e(n)
}
function aW(n){
  return Array.isArray(n)?n:[n]
}
function NMo(n, e, t){
  const i=Enh(n, e), r=n.length, s=t.length;
  n.length=r+s;
  for(let o=r-1;
  o>=i;
  o--)n[o+s]=n[o];
  for(let o=0;
  o<s;
  o++)n[o+i]=t[o]
}
function MMo(n, e, t, i){
  const r=Enh(n, e);
  let s=n.splice(r, t);
  return s===void 0&&(s=[]), NMo(n, r, i), s
}
function Enh(n, e){
  return e<0?Math.max(e+n.length, 0):Math.min(e, n.length)
}
function JP(n, e){
  return(t, i)=>e(n(t), n(i))
}
function xnh(...n){
  return(e, t)=>{
    for(const i of n){
      const r=i(e,t);
      if(!wte.isNeitherLessOrGreaterThan(r))return r
    }
    return wte.neitherLessOrGreaterThan
  }
}
function Tnh(n){
  return(e, t)=>-n(e, t)
}
function ntA(n){
  return(e, t)=>e===void 0?t===void 0?wte.neitherLessOrGreaterThan:wte.lessThan:t===void 0?wte.greaterThan:n(e, t)
}
async function itA(n, e){
  return(await Promise.all(n.map(async(i, r)=>({
    element:i, ok:await e(i, r)
  })))).find(i=>i.ok)?.element
}
var Zpt, wte, p9, Inh, Ebe, DFt, Dnh, Vs=