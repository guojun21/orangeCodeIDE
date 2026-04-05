// Module: out-build/vs/base/common/naturalLanguage/korean.js
// Offset: 1957111 (bundle byte offset)
// Size: 9304 bytes

Mte=0, y9e=new Uint32Array(10), (function(n){
  n[n.InitialConsonant=4352]="InitialConsonant", n[n.Vowel=4449]="Vowel", n[n.FinalConsonant=4520]="FinalConsonant", n[n.CompatibilityJamo=12593]="CompatibilityJamo"
})(Nwh||(Nwh={
  
})), (function(n){
  n[n.NUL=0]="NUL", n[n.A=65]="A", n[n.B=66]="B", n[n.C=67]="C", n[n.D=68]="D", n[n.E=69]="E", n[n.F=70]="F", n[n.G=71]="G", n[n.H=72]="H", n[n.I=73]="I", n[n.J=74]="J", n[n.K=75]="K", n[n.L=76]="L", n[n.M=77]="M", n[n.N=78]="N", n[n.O=79]="O", n[n.P=80]="P", n[n.Q=81]="Q", n[n.R=82]="R", n[n.S=83]="S", n[n.T=84]="T", n[n.U=85]="U", n[n.V=86]="V", n[n.W=87]="W", n[n.X=88]="X", n[n.Y=89]="Y", n[n.Z=90]="Z", n[n.a=97]="a", n[n.b=98]="b", n[n.c=99]="c", n[n.d=100]="d", n[n.e=101]="e", n[n.f=102]="f", n[n.g=103]="g", n[n.h=104]="h", n[n.i=105]="i", n[n.j=106]="j", n[n.k=107]="k", n[n.l=108]="l", n[n.m=109]="m", n[n.n=110]="n", n[n.o=111]="o", n[n.p=112]="p", n[n.q=113]="q", n[n.r=114]="r", n[n.s=115]="s", n[n.t=116]="t", n[n.u=117]="u", n[n.v=118]="v", n[n.w=119]="w", n[n.x=120]="x", n[n.y=121]="y", n[n.z=122]="z"
})(Mwh||(Mwh={
  
})), (function(n){
  n[n.fa=24934]="fa", n[n.fg=26470]="fg", n[n.fq=29030]="fq", n[n.fr=29286]="fr", n[n.ft=29798]="ft", n[n.fv=30310]="fv", n[n.fx=30822]="fx", n[n.hk=27496]="hk", n[n.hl=27752]="hl", n[n.ho=28520]="ho", n[n.ml=27757]="ml", n[n.nj=27246]="nj", n[n.nl=27758]="nl", n[n.np=28782]="np", n[n.qt=29809]="qt", n[n.rt=29810]="rt", n[n.sg=26483]="sg", n[n.sw=30579]="sw"
})(Fwh||(Fwh={
  
})), E3o=new Uint8Array([114, 82, 115, 101, 69, 102, 97, 113, 81, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103]), x3o=new Uint16Array([107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]), T3o=new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 29809, 116, 84, 100, 119, 99, 122, 120, 118, 103]), zVe=new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 69, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 81, 29809, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103, 107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108])
}
});
function p3t(...n){
  return function(e, t){
    for(let i=0, r=n.length;
    i<r;
    i++){
      const s=n[i](e,t);
      if(s)return s
    }
    return null
  }
}
function Owh(n, e, t){
  if(!t||t.length<e.length)return null;
  let i;
  return n?i=pgt(t, e):i=t.indexOf(e)===0, i?e.length>0?[{
    start:0, end:e.length
  }
  ]:[]:null
}
function VVe(n, e){
  const t=e.toLowerCase().indexOf(n.toLowerCase());
  return t===-1?null:[{
    start:t, end:t+n.length
  }
  ]
}
function DIc(n, e){
  return BIc(n.toLowerCase(), e.toLowerCase(), 0, 0)
}
function BIc(n, e, t, i){
  if(t===n.length)return[];
  if(i===e.length)return null;
  if(n[t]===e[i]){
    let r=null;
    return(r=BIc(n, e, t+1, i+1))?LIc({
      start:i,end:i+1
    }, r):null
  }
  return BIc(n, e, t, i+1)
}
function RIc(n){
  return 97<=n&&n<=122
}
function s3n(n){
  return 65<=n&&n<=90
}
function PIc(n){
  return 48<=n&&n<=57
}
function Uwh(n){
  return n===32||n===9||n===10||n===13
}
function I3o(n){
  return Uwh(n)||qIc.has(n)
}
function $wh(n, e){
  return n===e||I3o(n)&&I3o(e)
}
function qwh(n){
  if(P3o.has(n))return P3o.get(n);
  let e;
  const t=duA(n);
  return t&&(e=t), P3o.set(n, e), e
}
function Hwh(n){
  return RIc(n)||s3n(n)||PIc(n)
}
function LIc(n, e){
  return e.length===0?e=[n]:n.end===e[0].start?e[0].start=n.start:e.unshift(n), e
}
function Jwh(n, e){
  for(let t=e;
  t<n.length;
  t++){
    const i=n.charCodeAt(t);
    if(s3n(i)||PIc(i)||t>0&&!Hwh(n.charCodeAt(t-1)))return t
  }
  return n.length
}
function NIc(n, e, t, i){
  if(t===n.length)return[];
  if(i===e.length)return null;
  if(n[t]!==e[i].toLowerCase())return null;
  {
    let r=null, s=i+1;
    for(r=NIc(n, e, t+1, i+1);
    !r&&(s=Jwh(e, s))<e.length;
    )r=NIc(n, e, t+1, s), s++;
    return r===null?null:LIc({
      start:i,end:i+1
    }, r)
  }
}
function guA(n){
  let e=0, t=0, i=0, r=0, s=0;
  for(let d=0;
  d<n.length;
  d++)s=n.charCodeAt(d), s3n(s)&&e++, RIc(s)&&t++, Hwh(s)&&i++, PIc(s)&&r++;
  const o=e/n.length, a=t/n.length, l=i/n.length, u=r/n.length;
  return{
    upperPercent:o, lowerPercent:a, alphaPercent:l, numericPercent:u
  }
}
function fuA(n){
  const{
    upperPercent:e, lowerPercent:t
  }
  =n;
  return t===0&&e>.6
}
function buA(n){
  const{
    upperPercent:e, lowerPercent:t, alphaPercent:i, numericPercent:r
  }
  =n;
  return t>.2&&e<.8&&i>.6&&r<.2
}
function vuA(n){
  let e=0, t=0, i=0, r=0;
  for(let s=0;
  s<n.length;
  s++)i=n.charCodeAt(s), s3n(i)&&e++, RIc(i)&&t++, Uwh(i)&&r++;
  return(e===0||t===0)&&r===0?n.length<=30:e<=5
}
function D3o(n, e){
  if(!e||(e=e.trim(), e.length===0)||!vuA(n))return null;
  e.length>60&&(e=e.substring(0, 60));
  const t=guA(e);
  if(!buA(t)){
    if(!fuA(t))return null;
    e=e.toLowerCase()
  }
  let i=null, r=0;
  for(n=n.toLowerCase();
  r<e.length&&(i=NIc(n, e, 0, r))===null;
  )r=Jwh(e, r+1);
  return i
}
function fRe(n, e, t=!1){
  if(!e||e.length===0)return null;
  let i=null, r=0;
  for(n=n.toLowerCase(), e=e.toLowerCase();
  r<e.length&&(i=MIc(n, e, 0, r, t), i===null);
  )r=Gwh(e, r+1);
  return i
}
function MIc(n, e, t, i, r){
  let s=0;
  if(t===n.length)return[];
  if(i===e.length)return null;
  if(!$wh(n.charCodeAt(t), e.charCodeAt(i))){
    const l=qwh(n.charCodeAt(t));
    if(!l)return null;
    for(let u=0;
    u<l.length;
    u++)if(!$wh(l[u], e.charCodeAt(i+u)))return null;
    s+=l.length-1
  }
  let o=null, a=i+s+1;
  if(o=MIc(n, e, t+1, a, r), !r)for(;
  !o&&(a=Gwh(e, a))<e.length;
  )o=MIc(n, e, t+1, a, r), a++;
  if(!o)return null;
  if(n.charCodeAt(t)!==e.charCodeAt(i)){
    const l=qwh(n.charCodeAt(t));
    if(!l)return o;
    for(let u=0;
    u<l.length;
    u++)if(l[u]!==e.charCodeAt(i+u))return o
  }
  return LIc({
    start:i, end:i+s+1
  }, o)
}
function Gwh(n, e){
  for(let t=e;
  t<n.length;
  t++)if(I3o(n.charCodeAt(t))||t>0&&I3o(n.charCodeAt(t-1)))return t;
  return n.length
}
function CW(n, e, t=!1){
  if(typeof n!="string"||typeof e!="string")return null;
  let i=HIc.get(n);
  i||(i=new RegExp(TtA(n), "i"), HIc.set(n, i));
  const r=i.exec(e);
  return r?[{
    start:r.index, end:r.index+r[0].length
  }
  ]:t?Vwh(n, e):zwh(n, e)
}
function FIc(n, e){
  const t=w9e(n, n.toLowerCase(), 0, e, e.toLowerCase(), 0, {
    firstMatchCanBeWeak:!0, boostFullMatch:!0
  });
  return t?oI(t):null
}
function AuA(n, e, t, i, r, s){
  const o=Math.min(13, n.length);
  for(;
  t<o;
  t++){
    const a=w9e(n, e, t, i, r, s, {
      firstMatchCanBeWeak:!0,boostFullMatch:!0
    });
    if(a)return a
  }
  return[0, s]
}
function oI(n){
  if(typeof n>"u")return[];
  const e=[], t=n[1];
  for(let i=n.length-1;
  i>1;
  i--){
    const r=n[i]+t, s=e[e.length-1];
    s&&s.end===r?s.end=r+1:e.push({
      start:r,end:r+1
    })
  }
  return e
}
function OIc(){
  const n=[], e=[];
  for(let t=0;
  t<=_9e;
  t++)e[t]=0;
  for(let t=0;
  t<=_9e;
  t++)n.push(e.slice(0));
  return n
}
function Wwh(n){
  const e=[];
  for(let t=0;
  t<=n;
  t++)e[t]=0;
  return e
}
function UIc(n, e, t, i, r){
  function s(a, l, u=" "){
    for(;
    a.length<l;
    )a=u+a;
    return a
  }
  let o=` |   |${i.split("").map(a=>s(a,3)).join("|")}
`;
  for(let a=0;
  a<=t;
  a++)a===0?o+=" |":o+=`${e[a-1]}|`, o+=n[a].slice(0, r+1).map(l=>s(l.toString(), 3)).join("|")+`
`;
  return o
}
function yuA(n, e, t, i){
  n=n.substr(e), t=t.substr(i), console.log(UIc(C9e, n, n.length, t, t.length)), console.log(UIc(g3t, n, n.length, t, t.length)), console.log(UIc(qSe, n, n.length, t, t.length))
}
function B3o(n, e){
  if(e<0||e>=n.length)return!1;
  const t=n.codePointAt(e);
  switch(t){
    case 95:case 45:case 46:case 32:case 47:case 92:case 39:case 34:case 58:case 36:case 60:case 62:case 40:case 41:case 91:case 93:case 123:case 125:return!0;
    case void 0:return!1;
    default:return!!W0c(t)
  }
}
function Qwh(n, e){
  if(e<0||e>=n.length)return!1;
  switch(n.charCodeAt(e)){
    case 32:case 9:return!0;
    default:return!1
  }
}
function R3o(n, e, t){
  return e[n]!==t[n]
}
function $Ic(n, e, t, i, r, s, o=!1){
  for(;
  e<t&&r<s;
  )n[e]===i[r]&&(o&&(JIc[e]=r), e+=1), r+=1;
  return e===t
}
function w9e(n, e, t, i, r, s, o=o3n.default){
  const a=n.length>_9e?_9e:n.length, l=i.length>_9e?_9e:i.length;
  if(t>=a||s>=l||a-t>l-s||!$Ic(e, t, a, r, s, l, !0))return;
  wuA(a, l, t, s, e, r);
  let u=1, d=1, m=t, p=s;
  const g=[!1];
  for(u=1, m=t;
  m<a;
  u++, m++){
    const x=JIc[m], I=L3o[m], B=m+1<a?L3o[m+1]:l;
    for(d=x-s+1, p=x;
    p<B;
    d++, p++){
      let R=Number.MIN_SAFE_INTEGER,N=!1;
      p<=I&&(R=_uA(n,e,m,t,i,r,p,l,s,qSe[u-1][d-1]===0,g));
      let M=0;
      R!==Number.MIN_SAFE_INTEGER&&(N=!0,M=R+C9e[u-1][d-1]);
      const O=p>x,$=O?C9e[u][d-1]+(qSe[u][d-1]>0?-5:0):0,H=p>x+1&&qSe[u][d-1]>0,W=H?C9e[u][d-2]+(qSe[u][d-2]>0?-5:0):0;
      if(H&&(!O||W>=$)&&(!N||W>=M))C9e[u][d]=W,g3t[u][d]=3,qSe[u][d]=0;
      else if(O&&(!N||$>=M))C9e[u][d]=$,g3t[u][d]=2,qSe[u][d]=0;
      else if(N)C9e[u][d]=M,g3t[u][d]=1,qSe[u][d]=qSe[u-1][d-1]+1;
      else throw new Error("not possible")
    }
  }
  if(Kwh&&yuA(n, t, i, s), !g[0]&&!o.firstMatchCanBeWeak)return;
  u--, d--;
  const f=[C9e[u][d], s];
  let A=0, w=0;
  for(;
  u>=1;
  ){
    let x=d;
    do{
      const I=g3t[u][x];
      if(I===3)x=x-2;
      else if(I===2)x=x-1;
      else break
    }
    while(x>=1);
    A>1&&e[t+u-1]===r[s+d-1]&&!R3o(x+s-1, i, r)&&A+1>qSe[u][x]&&(x=d), x===d?A++:A=1, w||(w=x), u--, d=x-1, f.push(d)
  }
  l-s===a&&o.boostFullMatch&&(f[0]+=2);
  const C=w-a;
  return f[0]-=C, f
}
function wuA(n, e, t, i, r, s){
  let o=n-1, a=e-1;
  for(;
  o>=t&&a>=i;
  )r[o]===s[a]&&(L3o[o]=a, o--), a--
}
function _uA(n, e, t, i, r, s, o, a, l, u, d){
  if(e[t]!==s[o])return Number.MIN_SAFE_INTEGER;
  let m=1, p=!1;
  return o===t-i?m=n[t]===r[o]?7:5:R3o(o, r, s)&&(o===0||!R3o(o-1, r, s))?(m=n[t]===r[o]?7:5, p=!0):B3o(s, o)&&(o===0||!B3o(s, o-1))?m=5:(B3o(s, o-1)||Qwh(s, o-1))&&(m=5, p=!0), m>1&&t===i&&(d[0]=!0), p||(p=R3o(o, r, s)||B3o(s, o-1)||Qwh(s, o-1)), t===i?o>l&&(m-=p?3:5):u?m+=p?2:0:m+=p?0:1, o+1===a&&(m-=p?3:5), m
}
function jwh(n, e, t, i, r, s, o){
  return CuA(n, e, t, i, r, s, !0, o)
}
function CuA(n, e, t, i, r, s, o, a){
  let l=w9e(n, e, t, i, r, s, a);
  if(l&&!o)return l;
  if(n.length>=3){
    const u=Math.min(7, n.length-1);
    for(let d=t+1;
    d<u;
    d++){
      const m=SuA(n,d);
      if(m){
        const p=w9e(m,m.toLowerCase(),t,i,r,s,a);
        p&&(p[0]-=3,(!l||p[0]>l[0])&&(l=p))
      }
    }
  }
  return l
}
function SuA(n, e){
  if(e+1>=n.length)return;
  const t=n[e], i=n[e+1];
  if(t!==i)return n.slice(0, e)+i+t+n.slice(e+2)
}
var kuA, KVe, qIc, P3o, zwh, Vwh, HIc, _9e, JIc, L3o, qSe, C9e, g3t, Kwh, Ywh, hz, o3n, Q_=