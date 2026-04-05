// Module: out-build/vs/editor/contrib/folding/browser/syntaxRangeProvider.js
// Offset: 24994708 (bundle byte offset)
// Size: 7712 bytes

_s(), rt(), Opi(), Qgg={
  
}, jgg="syntax", Upi=class{
  constructor(n, e, t, i, r){
    this.editorModel=n, this.providers=e, this.handleFoldingRangesChange=t, this.foldingRangesLimit=i, this.fallbackRangeProvider=r, this.id=jgg, this.disposables=new Ut, r&&this.disposables.add(r);
    for(const s of e)typeof s.onDidChange=="function"&&this.disposables.add(s.onDidChange(t))
  }
  compute(n){
    return J0A(this.providers, this.editorModel, n).then(e=>this.editorModel.isDisposed()?null:e?Wgg(e, this.foldingRangesLimit):this.fallbackRangeProvider?.compute(n)??null)
  }
  dispose(){
    this.disposables.dispose()
  }
}, zgg=class{
  constructor(n){
    this._startIndexes=[], this._endIndexes=[], this._nestingLevels=[], this._nestingLevelCounts=[], this._types=[], this._length=0, this._foldingRangesLimit=n
  }
  add(n, e, t, i){
    if(n>HAe||e>HAe)return;
    const r=this._length;
    this._startIndexes[r]=n, this._endIndexes[r]=e, this._nestingLevels[r]=i, this._types[r]=t, this._length++, i<30&&(this._nestingLevelCounts[i]=(this._nestingLevelCounts[i]||0)+1)
  }
  toIndentRanges(){
    const n=this._foldingRangesLimit.limit;
    if(this._length<=n){
      this._foldingRangesLimit.update(this._length,!1);
      const e=new Uint32Array(this._length),t=new Uint32Array(this._length);
      for(let i=0;
      i<this._length;
      i++)e[i]=this._startIndexes[i],t[i]=this._endIndexes[i];
      return new Qae(e,t,this._types)
    }
    else{
      this._foldingRangesLimit.update(this._length,n);
      let e=0,t=this._nestingLevelCounts.length;
      for(let o=0;
      o<this._nestingLevelCounts.length;
      o++){
        const a=this._nestingLevelCounts[o];
        if(a){
          if(a+e>n){
            t=o;
            break
          }
          e+=a
        }
      }
      const i=new Uint32Array(n),r=new Uint32Array(n),s=[];
      for(let o=0,a=0;
      o<this._length;
      o++){
        const l=this._nestingLevels[o];
        (l<t||l===t&&e++<n)&&(i[a]=this._startIndexes[o],r[a]=this._endIndexes[o],s[a]=this._types[o],a++)
      }
      return new Qae(i,r,s)
    }
  }
}
}
});
function Vgg(){
  return Object.create(null)
}
function Kgg(n, e){
  switch(n){
    case 0:return"";
    case 1:return`${Hpi}*?`;
    default:return`(?:${qpi}|${Hpi}+${qpi}${e?`|${
      qpi
    }
    ${
      Hpi
    }
    +`:""})*?`
  }
}
function Oun(n, e){
  if(!n)return[];
  const t=[];
  let i=!1, r=!1, s="";
  for(const o of n){
    switch(o){
      case e:if(!i&&!r){
        t.push(s),s="";
        continue
      }
      break;
      case"{":i=!0;
      break;
      case"}":i=!1;
      break;
      case"[":r=!0;
      break;
      case"]":r=!1;
      break
    }
    s+=o
  }
  return s&&t.push(s), t
}
function Ygg(n){
  if(!n)return"";
  let e="";
  const t=Oun(n, vWl);
  if(t.every(i=>i===$pi))e=".*";
  else{
    let i=!1;
    t.forEach((r, s)=>{
      if(r===$pi){
        if(i)return;
        e+=Kgg(2,s===t.length-1)
      }
      else{
        let o=!1,a="",l=!1,u="";
        for(const d of r){
          if(d!=="}"&&o){
            a+=d;
            continue
          }
          if(l&&(d!=="]"||!u)){
            let m;
            d==="-"?m=d:(d==="^"||d==="!")&&!u?m="^":d===vWl?m="":m=UI(d),u+=m;
            continue
          }
          switch(d){
            case"{":o=!0;
            continue;
            case"[":l=!0;
            continue;
            case"}":{
              const p=`(?:${Oun(a,",").map(g=>Ygg(g)).join("|")})`;
              e+=p,o=!1,a="";
              break
            }
            case"]":{
              e+="["+u+"]",l=!1,u="";
              break
            }
            case"?":e+=Hpi;
            continue;
            case"*":e+=Kgg(1);
            continue;
            default:e+=UI(d)
          }
        }
        s<t.length-1&&(t[s+1]!==$pi||s+2<t.length)&&(e+=qpi)
      }
      i=r===$pi
    })
  }
  return e
}
function fWl(n, e){
  if(!n)return G1e;
  let t;
  typeof n!="string"?t=n.pattern:t=n, t=t.trim();
  const i=`${t}_${!!e.trimForExclusions}`;
  let r=AWl.get(i);
  if(r)return Zgg(r, n);
  let s;
  return nfg.test(t)?r=G0A(t.substr(4), t):(s=ifg.exec(bWl(t, e)))?r=W0A(s[1], t):(e.trimForExclusions?sfg:rfg).test(t)?r=Q0A(t, e):(s=ofg.exec(bWl(t, e)))?r=Xgg(s[1].substr(1), t, !0):(s=afg.exec(bWl(t, e)))?r=Xgg(s[1], t, !1):r=j0A(t), AWl.set(i, r), Zgg(r, n)
}
function Zgg(n, e){
  if(typeof e=="string")return n;
  const t=function(i, r){
    return aFn(i, e.base, !xv)?n(BBe(i.substr(e.base.length), C1), r):null
  };
  return t.allBasenames=n.allBasenames, t.allPaths=n.allPaths, t.basenames=n.basenames, t.patterns=n.patterns, t
}
function bWl(n, e){
  return e.trimForExclusions&&n.endsWith("/**")?n.substr(0, n.length-2):n
}
function G0A(n, e){
  return function(t, i){
    return typeof t=="string"&&t.endsWith(n)?e:null
  }
}
function W0A(n, e){
  const t=`/${n}`, i=`\\${n}`, r=function(o, a){
    return typeof o!="string"?null:a?a===n?e:null:o===n||o.endsWith(t)||o.endsWith(i)?e:null
  }, s=[n];
  return r.basenames=s, r.patterns=[e], r.allBasenames=s, r
}
function Q0A(n, e){
  const t=efg(n.slice(1, -1).split(",").map(a=>fWl(a, e)).filter(a=>a!==G1e), n), i=t.length;
  if(!i)return G1e;
  if(i===1)return t[0];
  const r=function(a, l){
    for(let u=0, d=t.length;
    u<d;
    u++)if(t[u](a, l))return n;
    return null
  }, s=t.find(a=>!!a.allBasenames);
  s&&(r.allBasenames=s.allBasenames);
  const o=t.reduce((a, l)=>l.allPaths?a.concat(l.allPaths):a, []);
  return o.length&&(r.allPaths=o), r
}
function Xgg(n, e, t){
  const i=C1===Rm.sep, r=i?n:n.replace(tfg, C1), s=C1+r, o=Rm.sep+n;
  let a;
  return t?a=function(l, u){
    return typeof l=="string"&&(l===r||l.endsWith(s)||!i&&(l===n||l.endsWith(o)))?e:null
  }
  :a=function(l, u){
    return typeof l=="string"&&(l===r||!i&&l===n)?e:null
  }, a.allPaths=[(t?"*/":"./")+n], a
}
function j0A(n){
  try{
    const e=new RegExp(`^${Ygg(n)}$`);
    return function(t){
      return e.lastIndex=0,typeof t=="string"&&e.test(t)?n:null
    }
  }
  catch{
    return G1e
  }
}
function nP(n, e, t){
  return!n||typeof e!="string"?!1:jae(n)(e, void 0, t)
}
function jae(n, e={
  
}){
  if(!n)return yWl;
  if(typeof n=="string"||Pet(n)){
    const t=fWl(n, e);
    if(t===G1e)return yWl;
    const i=function(r, s){
      return!!t(r,s)
    };
    return t.allBasenames&&(i.allBasenames=t.allBasenames), t.allPaths&&(i.allPaths=t.allPaths), i
  }
  return z0A(n, e)
}
function Pet(n){
  const e=n;
  return e?typeof e.base=="string"&&typeof e.pattern=="string":!1
}
function z0A(n, e){
  const t=efg(Object.getOwnPropertyNames(n).map(a=>V0A(a, n[a], e)).filter(a=>a!==G1e)), i=t.length;
  if(!i)return G1e;
  if(!t.some(a=>!!a.requiresSiblings)){
    if(i===1)return t[0];
    const a=function(d, m){
      let p;
      for(let g=0,f=t.length;
      g<f;
      g++){
        const A=t[g](d,m);
        if(typeof A=="string")return A;
        kgt(A)&&(p||(p=[]),p.push(A))
      }
      return p?(async()=>{
        for(const g of p){
          const f=await g;
          if(typeof f=="string")return f
        }
        return null
      })():null
    }, l=t.find(d=>!!d.allBasenames);
    l&&(a.allBasenames=l.allBasenames);
    const u=t.reduce((d, m)=>m.allPaths?d.concat(m.allPaths):d, []);
    return u.length&&(a.allPaths=u), a
  }
  const r=function(a, l, u){
    let d, m;
    for(let p=0, g=t.length;
    p<g;
    p++){
      const f=t[p];
      f.requiresSiblings&&u&&(l||(l=fd(a)),d||(d=l.substr(0,l.length-QD(a).length)));
      const A=f(a,l,d,u);
      if(typeof A=="string")return A;
      kgt(A)&&(m||(m=[]),m.push(A))
    }
    return m?(async()=>{
      for(const p of m){
        const g=await p;
        if(typeof g=="string")return g
      }
      return null
    })():null
  }, s=t.find(a=>!!a.allBasenames);
  s&&(r.allBasenames=s.allBasenames);
  const o=t.reduce((a, l)=>l.allPaths?a.concat(l.allPaths):a, []);
  return o.length&&(r.allPaths=o), r
}
function V0A(n, e, t){
  if(e===!1)return G1e;
  const i=fWl(n, t);
  if(i===G1e)return G1e;
  if(typeof e=="boolean")return i;
  if(e){
    const r=e.when;
    if(typeof r=="string"){
      const s=(o,a,l,u)=>{
        if(!u||!i(o,a))return null;
        const d=r.replace("$(basename)",()=>l),m=u(d);
        return kgt(m)?m.then(p=>p?n:null):m?n:null
      };
      return s.requiresSiblings=!0,s
    }
  }
  return i
}
function efg(n, e){
  const t=n.filter(a=>!!a.basenames);
  if(t.length<2)return n;
  const i=t.reduce((a, l)=>{
    const u=l.basenames;
    return u?a.concat(u):a
  }, []);
  let r;
  if(e){
    r=[];
    for(let a=0, l=i.length;
    a<l;
    a++)r.push(e)
  }
  else r=t.reduce((a, l)=>{
    const u=l.patterns;
    return u?a.concat(u):a
  }, []);
  const s=function(a, l){
    if(typeof a!="string")return null;
    if(!l){
      let d;
      for(d=a.length;
      d>0;
      d--){
        const m=a.charCodeAt(d-1);
        if(m===47||m===92)break
      }
      l=a.substr(d)
    }
    const u=i.indexOf(l);
    return u!==-1?r[u]:null
  };
  s.basenames=i, s.patterns=r, s.allBasenames=i;
  const o=n.filter(a=>!a.basenames);
  return o.push(s), o
}
function K0A(n){
  return n.startsWith("{")&&n.endsWith("}")?n.slice(1, -1).split(","):[n]
}
function Y0A({
  globsNewLineSeparated:n, properGlob:e
}){
  const t=[];
  return n&&t.push(...n.split(`
`)), e&&t.push(...K0A(e)), t.filter(i=>i!=="").map(i=>i.match(/^[a-zA-Z0-9]/)?"*"+i:i)
}
function Z0A({
  globsNewLineSeparated:n, properGlob:e
}){
  const t=Y0A({
    globsNewLineSeparated:n, properGlob:e
  });
  if(t.length!==0)return`{${t.join(",")}}`
}
var $pi, vWl, qpi, Hpi, tfg, nfg, ifg, rfg, sfg, ofg, afg, AWl, yWl, G1e, iR=