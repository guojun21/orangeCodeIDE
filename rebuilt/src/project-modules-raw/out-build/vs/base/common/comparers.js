// Module: out-build/vs/base/common/comparers.js
// Offset: 27641531 (bundle byte offset)
// Size: 6427 bytes

L0(), Hl(), WSt=new Ob(()=>{
  const n=new Intl.Collator(void 0, {
    numeric:!0, sensitivity:"base"
  });
  return{
    collator:n, collatorIsNumeric:n.resolvedOptions().numeric
  }
}), QSt=new Ob(()=>({
  collator:new Intl.Collator(void 0, {
    numeric:!0
  })
})), Xfa=new Ob(()=>({
  collator:new Intl.Collator(void 0, {
    numeric:!0, sensitivity:"accent"
  })
})), Lru=/^(.*?)(\.([^.]*))?$/
}
});
function eba(n, e, t, i){
  if(!n||!e)return Mru;
  const r=n.length, s=e.length;
  if(r<s)return Mru;
  const o=n.toLowerCase();
  return BFA(e, t, s, n, o, r, i)
}
function BFA(n, e, t, i, r, s, o){
  const a=[], l=[];
  for(let p=0;
  p<t;
  p++){
    const g=p*s, f=g-s, A=p>0, w=n[p], C=e[p];
    for(let x=0;
    x<s;
    x++){
      const I=x>0,B=g+x,R=B-1,N=f+x-1,M=I?a[R]:0,O=A&&I?a[N]:0,$=A&&I?l[N]:0;
      let H;
      !O&&A?H=0:H=RFA(w,C,i,r,x,$),H&&O+H>=M&&(o||A||r.startsWith(e,x))?(l[B]=$+1,a[B]=O+H):(l[B]=Gvi,a[B]=M)
    }
  }
  const u=[];
  let d=t-1, m=s-1;
  for(;
  d>=0&&m>=0;
  ){
    const p=d*s+m;
    l[p]===Gvi||(u.push(m), d--), m--
  }
  return[a[t*s-1], u.reverse()]
}
function RFA(n, e, t, i, r, s){
  let o=0;
  if(!PFA(e, i[r]))return o;
  if(o+=1, s>0&&(o+=s*5), n===t[r]&&(o+=1), r===0)o+=8;
  else{
    const a=LFA(t.charCodeAt(r-1));
    a?o+=a:s3n(t.charCodeAt(r))&&s===0&&(o+=2)
  }
  return o
}
function PFA(n, e){
  return n===e?!0:n==="/"||n==="\\"?e==="/"||e==="\\":!1
}
function LFA(n){
  switch(n){
    case 47:case 92:return 5;
    case 95:case 45:case 46:case 32:case 39:case 34:case 58:return 4;
    default:return 0
  }
}
function Cmn(n, e, t=0, i=0){
  const r=e;
  return r.values&&r.values.length>1?NFA(n, r.values, t, i):zJg(n, e, t, i)
}
function NFA(n, e, t, i){
  let r=0;
  const s=[];
  for(const o of e){
    const[a, l]=zJg(n, o, t, i);
    if(typeof a!="number")return Fru;
    r+=a, s.push(...l)
  }
  return[r, Nru(s)]
}
function zJg(n, e, t, i){
  const r=w9e(e.original, e.originalLowercase, t, n, n.toLowerCase(), i, {
    firstMatchCanBeWeak:!0, boostFullMatch:!0
  });
  return r?[r[0], oI(r)]:Fru
}
function MFA(n, e, t, i){
  const r=i.values?i.values:[i];
  return VC({
    [i.normalized]:{
      values:r.map(o=>({
        value:o.normalized,expectContiguousMatch:o.expectContiguousMatch
      })),label:n,description:e,allowNonContiguousMatches:t
    }
  })
}
function Mq(n, e, t, i, r){
  if(!n||!e.normalized)return Wvi;
  const s=i.getItemLabel(n);
  if(!s)return Wvi;
  const o=i.getItemDescription(n), a=MFA(s, o, t, e), l=r[a];
  if(l)return l;
  const u=FFA(s, o, i.getItemPath(n), e, t);
  return r[a]=u, u
}
function FFA(n, e, t, i, r){
  const s=!t||!i.containsPathSeparator;
  return t&&(xv?i.pathNormalized===t:k_(i.pathNormalized, t))?{
    score:Qvi, labelMatch:[{
      start:0,end:n.length
    }
    ], descriptionMatch:e?[{
      start:0,end:e.length
    }
    ]:void 0
  }
  :i.values&&i.values.length>1?OFA(n, e, t, i.values, s, r):VJg(n, e, t, i, s, r)
}
function OFA(n, e, t, i, r, s){
  let o=0;
  const a=[], l=[];
  for(const u of i){
    const{
      score:d,labelMatch:m,descriptionMatch:p
    }
    =VJg(n, e, t, u, r, s);
    if(d===Gvi)return Wvi;
    o+=d, m&&a.push(...m), p&&l.push(...p)
  }
  return{
    score:o, labelMatch:Nru(a), descriptionMatch:Nru(l)
  }
}
function VJg(n, e, t, i, r, s){
  if(r||!e){
    const[o, a]=eba(n, i.normalized, i.normalizedLowercase, s&&!i.expectContiguousMatch);
    if(o){
      const l=KVe(i.normalized,n);
      let u;
      if(l){
        u=iba;
        const d=Math.round(i.normalized.length/n.length*100);
        u+=d
      }
      else u=rba;
      return{
        score:u+o,labelMatch:l||KJg(a)
      }
    }
  }
  if(e){
    let o=e;
    t&&(o=`${e}${C1}`);
    const a=o.length, l=`${o}${n}`, [u, d]=eba(l, i.normalized, i.normalizedLowercase, s&&!i.expectContiguousMatch);
    if(u){
      const m=KJg(d),p=[],g=[];
      return m.forEach(f=>{
        f.start<a&&f.end>a?(p.push({
          start:0,end:f.end-a
        }),g.push({
          start:f.start,end:a
        })):f.start>=a?p.push({
          start:f.start-a,end:f.end-a
        }):g.push(f)
      }),{
        score:u,labelMatch:p,descriptionMatch:g
      }
    }
  }
  return Wvi
}
function KJg(n){
  const e=[];
  if(!n)return e;
  let t;
  for(const i of n)t&&t.end===i?t.end+=1:(t={
    start:i, end:i+1
  }, e.push(t));
  return e
}
function Nru(n){
  const e=n.sort((r, s)=>r.start-s.start), t=[];
  let i;
  for(const r of e)!i||!UFA(i, r)?(i=r, t.push(r)):(i.start=Math.min(i.start, r.start), i.end=Math.max(i.end, r.end));
  return t
}
function UFA(n, e){
  return!(n.end<e.start||e.end<n.start)
}
function tba(n, e, t, i, r, s){
  const o=Mq(n, t, i, r, s), a=Mq(e, t, i, r, s), l=o.score, u=a.score;
  if((l===Qvi||u===Qvi)&&l!==u)return l===Qvi?-1:1;
  if(l>rba||u>rba){
    if(l!==u)return l>u?-1:1;
    if(l<iba&&u<iba){
      const w=$FA(o.labelMatch,a.labelMatch);
      if(w!==0)return w
    }
    const f=r.getItemLabel(n)||"", A=r.getItemLabel(e)||"";
    if(f.length!==A.length)return f.length-A.length
  }
  if(l!==u)return l>u?-1:1;
  const d=Array.isArray(o.labelMatch)&&o.labelMatch.length>0, m=Array.isArray(a.labelMatch)&&a.labelMatch.length>0;
  if(d&&!m)return-1;
  if(m&&!d)return 1;
  const p=YJg(n, o, r), g=YJg(e, a, r);
  return p&&g&&p!==g?g>p?-1:1:qFA(n, e, t, r)
}
function YJg(n, e, t){
  let i=-1, r=-1;
  if(e.descriptionMatch&&e.descriptionMatch.length?i=e.descriptionMatch[0].start:e.labelMatch&&e.labelMatch.length&&(i=e.labelMatch[0].start), e.labelMatch&&e.labelMatch.length){
    if(r=e.labelMatch[e.labelMatch.length-1].end, e.descriptionMatch&&e.descriptionMatch.length){
      const s=t.getItemDescription(n);
      s&&(r+=s.length)
    }
  }
  else e.descriptionMatch&&e.descriptionMatch.length&&(r=e.descriptionMatch[e.descriptionMatch.length-1].end);
  return r-i
}
function $FA(n, e){
  if(!n&&!e||(!n||!n.length)&&(!e||!e.length))return 0;
  if(!e||!e.length)return-1;
  if(!n||!n.length)return 1;
  const t=n[0].start, r=n[n.length-1].end-t, s=e[0].start, a=e[e.length-1].end-s;
  return r===a?0:a<r?1:-1
}
function qFA(n, e, t, i){
  const r=i.getItemLabel(n)||"", s=i.getItemLabel(e)||"", o=i.getItemDescription(n), a=i.getItemDescription(e), l=r.length+(o?o.length:0), u=s.length+(a?a.length:0);
  if(l!==u)return l-u;
  const d=i.getItemPath(n), m=i.getItemPath(e);
  return d&&m&&d.length!==m.length?d.length-m.length:r!==s?Zfa(r, s, t.normalized):o&&a&&o!==a?Zfa(o, a, t.normalized):d&&m&&d!==m?Zfa(d, m, t.normalized):0
}
function ZJg(n){
  return n.startsWith('"')&&n.endsWith('"')
}
function o8(n){
  typeof n!="string"&&(n="");
  const e=n.toLowerCase(), {
    pathNormalized:t, normalized:i, normalizedLowercase:r
  }
  =XJg(n), s=t.indexOf(C1)>=0, o=ZJg(n);
  let a;
  const l=n.split(Oru);
  if(l.length>1)for(const u of l){
    const d=ZJg(u), {
      pathNormalized:m,normalized:p,normalizedLowercase:g
    }
    =XJg(u);
    p&&(a||(a=[]), a.push({
      original:u,originalLowercase:u.toLowerCase(),pathNormalized:m,normalized:p,normalizedLowercase:g,expectContiguousMatch:d
    }))
  }
  return{
    original:n, originalLowercase:e, pathNormalized:t, normalized:i, normalizedLowercase:r, values:a, containsPathSeparator:s, expectContiguousMatch:o
  }
}
function XJg(n){
  let e;
  Sc?e=n.replace(/\//g, C1):e=n.replace(/\\/g, C1);
  const t=ItA(e).replace(/\s|"/g,"");return{pathNormalized:e,normalized:t,normalizedLowercase:t.toLowerCase()}}function nba(n){return Array.isArray(n)?o8(n.map(e=>e.original).join(Oru)):o8(n.original)}var Gvi,Mru,Fru,Wvi,Qvi,iba,rba,Oru,iX=