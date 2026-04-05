// Module: out-build/vs/platform/undoRedo/common/undoRedo.js
// Offset: 1244171 (bundle byte offset)
// Size: 17124 bytes

Wt(), qB=xi("undoRedoService"), (function(n){
  n[n.Resource=0]="Resource", n[n.Workspace=1]="Workspace"
})(tfh||(tfh={
  
})), Axc=class{
  constructor(n, e){
    this.resource=n, this.elements=e
  }
}, FOt=class fad{
  static{
    this._ID=0
  }
  constructor(){
    this.id=fad._ID++, this.order=1
  }
  nextOrder(){
    return this.id===0?0:this.order++
  }
  static{
    this.None=new fad
  }
}, Ift=class bad{
  static{
    this._ID=0
  }
  constructor(){
    this.id=bad._ID++, this.order=1
  }
  nextOrder(){
    return this.id===0?0:this.order++
  }
  static{
    this.None=new bad
  }
}
}
});
function nfh(n){
  const e=String(n), t=e.length-1;
  return Ww.context.id+(t?String.fromCharCode(96+t):"")+e
}
function Dft(n){
  Ww.context=n
}
function faA(){
  return{
    ...Ww.context, id:Ww.getNextContextId(), count:0
  }
}
function iI(n, e){
  const t=KD, i=iC, r=n.length===0, s=e===void 0?i:e, o=r?kxc:{
    owned:null, cleanups:null, context:s?s.context:null, owner:s
  }, a=r?n:()=>n(()=>sc(()=>l9e(o)));
  iC=o, KD=null;
  try{
    return Hoe(a, !0)
  }
  finally{
    KD=t, iC=i
  }
}
function lt(n, e){
  e=e?Object.assign({
    
  }, xOn, e):xOn;
  const t={
    value:n, observers:null, observerSlots:null, comparator:e.equals||void 0
  }, i=r=>(typeof r=="function"&&(ug&&ug.running&&ug.sources.has(t)?r=r(t.tValue):r=r(t.value)), afh(t, r));
  return[ofh.bind(t), i]
}
function ifh(n, e, t){
  const i=SOn(n, e, !0, Joe);
  Pft&&ug&&ug.running?L6.push(i):OOt(i)
}
function tn(n, e, t){
  const i=SOn(n, e, !1, Joe);
  Pft&&ug&&ug.running?L6.push(i):OOt(i)
}
function An(n, e, t){
  Sxc=_aA;
  const i=SOn(n, e, !1, Joe), r=Nft&&yb(Nft);
  r&&(i.suspense=r), (!t||!t.render)&&(i.user=!0), $H?$H.push(i):OOt(i)
}
function xe(n, e, t){
  t=t?Object.assign({
    
  }, xOn, t):xOn;
  const i=SOn(n, e, !0, 0);
  return i.observers=null, i.observerSlots=null, i.comparator=t.equals||void 0, Pft&&ug&&ug.running?(i.tState=Joe, L6.push(i)):OOt(i), ofh.bind(i)
}
function baA(n){
  return n&&typeof n=="object"&&"then"in n
}
function rI(n, e, t){
  let i, r, s;
  typeof e=="function"?(i=n, r=e, s=t||{
    
  }):(i=!0, r=n, s=e||{
    
  });
  let o=null, a=ROo, l=null, u=!1, d=!1, m="initialValue"in s, p=typeof i=="function"&&xe(i);
  const g=new Set, [f, A]=(s.storage||lt)(s.initialValue), [w, C]=lt(void 0), [x, I]=lt(void 0, {
    equals:!1
  }), [B, R]=lt(m?"ready":"unresolved");
  Ww.context&&(l=Ww.getNextContextId(), s.ssrLoadFrom==="initial"?a=s.initialValue:Ww.load&&Ww.has(l)&&(a=Ww.load(l)));
  function N(W, z, Y, j){
    return o===W&&(o=null, j!==void 0&&(m=!0), (W===a||z===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(j, {
      value:z
    })), a=ROo, ug&&W&&u?(ug.promises.delete(W), u=!1, Hoe(()=>{
      ug.running=!0,M(z,Y)
    }, !1)):M(z, Y)), z
  }
  function M(W, z){
    Hoe(()=>{
      z===void 0&&A(()=>W),R(z!==void 0?"errored":m?"ready":"unresolved"),C(z);
      for(const Y of g.keys())Y.decrement();
      g.clear()
    }, !1)
  }
  function O(){
    const W=Nft&&yb(Nft), z=f(), Y=w();
    if(Y!==void 0&&!o)throw Y;
    return KD&&!KD.user&&W&&ifh(()=>{
      x(),o&&(W.resolved&&ug&&u?ug.promises.add(o):g.has(W)||(W.increment(),g.add(W)))
    }), z
  }
  function $(W=!0){
    if(W!==!1&&d)return;
    d=!1;
    const z=p?p():i;
    if(u=ug&&ug.running, z==null||z===!1){
      N(o,sc(f));
      return
    }
    ug&&o&&ug.promises.delete(o);
    let Y;
    const j=a!==ROo?a:sc(()=>{
      try{
        return r(z,{
          value:f(),refetching:W
        })
      }
      catch(X){
        Y=X
      }
    });
    if(Y!==void 0){
      N(o,void 0,IOo(Y),z);
      return
    }
    else if(!baA(j))return N(o, j, void 0, z), j;
    return o=j, "v"in j?(j.s===1?N(o, j.v, void 0, z):N(o, void 0, IOo(j.v), z), j):(d=!0, queueMicrotask(()=>d=!1), Hoe(()=>{
      R(m?"refreshing":"pending"),I()
    }, !1), j.then(X=>N(j, X, void 0, z), X=>N(j, void 0, IOo(X), z)))
  }
  Object.defineProperties(O, {
    state:{
      get:()=>B()
    }, error:{
      get:()=>w()
    }, loading:{
      get(){
        const W=B();
        return W==="pending"||W==="refreshing"
      }
    }, latest:{
      get(){
        if(!m)return O();
        const W=w();
        if(W&&!o)throw W;
        return f()
      }
    }
  });
  let H=iC;
  return p?ifh(()=>(H=iC, $(!1))):$(!1), [O, {
    refetch:W=>c9e(H, ()=>$(W)), mutate:A
  }
  ]
}
function Gw(n){
  return Hoe(n, !1)
}
function sc(n){
  if(!Lft&&KD===null)return n();
  const e=KD;
  KD=null;
  try{
    return Lft?Lft.untrack(n):n()
  }
  finally{
    KD=e
  }
}
function Bf(n, e, t){
  const i=Array.isArray(n);
  let r, s=t&&t.defer;
  return o=>{
    let a;
    if(i){
      a=Array(n.length);
      for(let u=0;
      u<n.length;
      u++)a[u]=n[u]()
    }
    else a=n();
    if(s)return s=!1, o;
    const l=sc(()=>e(a, r, o));
    return r=a, l
  }
}
function Ic(n){
  An(()=>sc(n))
}
function Ai(n){
  return iC===null||(iC.cleanups===null?iC.cleanups=[n]:iC.cleanups.push(n)), n
}
function rfh(n, e){
  $Ot||($Ot=Symbol("error")), iC=SOn(void 0, void 0, !0), iC.context={
    ...iC.context, [$Ot]:[e]
  }, ug&&ug.running&&ug.sources.add(iC);
  try{
    return n()
  }
  catch(t){
    EOn(t)
  }
  finally{
    iC=iC.owner
  }
}
function yxc(){
  return KD
}
function a9e(){
  return iC
}
function c9e(n, e){
  const t=iC, i=KD;
  iC=n, KD=null;
  try{
    return Hoe(e, !0)
  }
  catch(r){
    EOn(r)
  }
  finally{
    iC=t, KD=i
  }
}
function sfh(n){
  if(ug&&ug.running)return n(), ug.done;
  const e=KD, t=iC;
  return Promise.resolve().then(()=>{
    KD=e, iC=t;
    let i;
    return(Pft||Nft)&&(i=ug||(ug={
      sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0
    }), i.done||(i.done=new Promise(r=>i.resolve=r)), i.running=!0), Hoe(n, !1), KD=iC=null, i?i.done:void 0
  })
}
function vaA(n){
  $H.push.apply($H, n), n.length=0
}
function GS(n, e){
  const t=Symbol("context");
  return{
    id:t, Provider:CaA(t), defaultValue:n
  }
}
function yb(n){
  let e;
  return iC&&iC.context&&(e=iC.context[n.id])!==void 0?e:n.defaultValue
}
function XN(n){
  const e=xe(n), t=xe(()=>wxc(e()));
  return t.toArray=()=>{
    const i=t();
    return Array.isArray(i)?i:i!=null?[i]:[]
  }, t
}
function AaA(){
  return Nft||(Nft=GS())
}
function ofh(){
  const n=ug&&ug.running;
  if(this.sources&&(n?this.tState:this.state))if((n?this.tState:this.state)===Joe)OOt(this);
  else{
    const e=L6;
    L6=null, Hoe(()=>TOo(this), !1), L6=e
  }
  if(KD){
    const e=this.observers?this.observers.length:0;
    KD.sources?(KD.sources.push(this), KD.sourceSlots.push(e)):(KD.sources=[this], KD.sourceSlots=[e]), this.observers?(this.observers.push(KD), this.observerSlots.push(KD.sources.length-1)):(this.observers=[KD], this.observerSlots=[KD.sources.length-1])
  }
  return n&&ug.sources.has(this)?this.tValue:this.value
}
function afh(n, e, t){
  let i=ug&&ug.running&&ug.sources.has(n)?n.tValue:n.value;
  if(!n.comparator||!n.comparator(i, e)){
    if(ug){
      const r=ug.running;
      (r||!t&&ug.sources.has(n))&&(ug.sources.add(n),n.tValue=e),r||(n.value=e)
    }
    else n.value=e;
    n.observers&&n.observers.length&&Hoe(()=>{
      for(let r=0;
      r<n.observers.length;
      r+=1){
        const s=n.observers[r],o=ug&&ug.running;
        o&&ug.disposed.has(s)||((o?!s.tState:!s.state)&&(s.pure?L6.push(s):$H.push(s),s.observers&&ufh(s)),o?s.tState=Joe:s.state=Joe)
      }
      if(L6.length>1e6)throw L6=[],new Error
    }, !1)
  }
  return e
}
function OOt(n){
  if(!n.fn)return;
  l9e(n);
  const e=TOn;
  cfh(n, ug&&ug.running&&ug.sources.has(n)?n.tValue:n.value, e), ug&&!ug.running&&ug.sources.has(n)&&queueMicrotask(()=>{
    Hoe(()=>{
      ug&&(ug.running=!0),KD=iC=n,cfh(n,n.tValue,e),KD=iC=null
    }, !1)
  })
}
function cfh(n, e, t){
  let i;
  const r=iC, s=KD;
  KD=iC=n;
  try{
    i=n.fn(e)
  }
  catch(o){
    return n.pure&&(ug&&ug.running?(n.tState=Joe, n.tOwned&&n.tOwned.forEach(l9e), n.tOwned=void 0):(n.state=Joe, n.owned&&n.owned.forEach(l9e), n.owned=null)), n.updatedAt=t+1, EOn(o)
  }
  finally{
    KD=s, iC=r
  }
  (!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?afh(n, i, !0):ug&&ug.running&&n.pure?(ug.sources.add(n), n.tValue=i):n.value=i, n.updatedAt=t)
}
function SOn(n, e, t, i=Joe, r){
  const s={
    fn:n, state:i, updatedAt:null, owned:null, sources:null, sourceSlots:null, cleanups:null, value:e, owner:iC, context:iC?iC.context:null, pure:t
  };
  if(ug&&ug.running&&(s.state=0, s.tState=i), iC===null||iC!==kxc&&(ug&&ug.running&&iC.pure?iC.tOwned?iC.tOwned.push(s):iC.tOwned=[s]:iC.owned?iC.owned.push(s):iC.owned=[s]), Lft&&s.fn){
    const[o, a]=lt(void 0, {
      equals:!1
    }), l=Lft.factory(s.fn, a);
    Ai(()=>l.dispose());
    const u=()=>sfh(a).then(()=>d.dispose()), d=Lft.factory(s.fn, u);
    s.fn=m=>(o(), ug&&ug.running?d.track(m):l.track(m))
  }
  return s
}
function kOn(n){
  const e=ug&&ug.running;
  if((e?n.tState:n.state)===0)return;
  if((e?n.tState:n.state)===qOt)return TOo(n);
  if(n.suspense&&sc(n.suspense.inFallback))return n.suspense.effects.push(n);
  const t=[n];
  for(;
  (n=n.owner)&&(!n.updatedAt||n.updatedAt<TOn);
  ){
    if(e&&ug.disposed.has(n))return;
    (e?n.tState:n.state)&&t.push(n)
  }
  for(let i=t.length-1;
  i>=0;
  i--){
    if(n=t[i], e){
      let r=n,s=t[i+1];
      for(;
      (r=r.owner)&&r!==s;
      )if(ug.disposed.has(r))return
    }
    if((e?n.tState:n.state)===Joe)OOt(n);
    else if((e?n.tState:n.state)===qOt){
      const r=L6;
      L6=null,Hoe(()=>TOo(n,t[0]),!1),L6=r
    }
  }
}
function Hoe(n, e){
  if(L6)return n();
  let t=!1;
  e||(L6=[]), $H?t=!0:$H=[], TOn++;
  try{
    const i=n();
    return yaA(t), i
  }
  catch(i){
    t||($H=null), L6=null, EOn(i)
  }
}
function yaA(n){
  if(L6&&(Pft&&ug&&ug.running?waA(L6):lfh(L6), L6=null), n)return;
  let e;
  if(ug){
    if(!ug.promises.size&&!ug.queue.size){
      const i=ug.sources,r=ug.disposed;
      $H.push.apply($H,ug.effects),e=ug.resolve;
      for(const s of $H)"tState"in s&&(s.state=s.tState),delete s.tState;
      ug=null,Hoe(()=>{
        for(const s of r)l9e(s);
        for(const s of i){
          if(s.value=s.tValue,s.owned)for(let o=0,a=s.owned.length;
          o<a;
          o++)l9e(s.owned[o]);
          s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0
        }
        Exc(!1)
      },!1)
    }
    else if(ug.running){
      ug.running=!1,ug.effects.push.apply(ug.effects,$H),$H=null,Exc(!0);
      return
    }
  }
  const t=$H;
  $H=null, t.length&&Hoe(()=>Sxc(t), !1), e&&e()
}
function lfh(n){
  for(let e=0;
  e<n.length;
  e++)kOn(n[e])
}
function waA(n){
  for(let e=0;
  e<n.length;
  e++){
    const t=n[e], i=ug.queue;
    i.has(t)||(i.add(t), Pft(()=>{
      i.delete(t),Hoe(()=>{
        ug.running=!0,kOn(t)
      },!1),ug&&(ug.running=!1)
    }))
  }
}
function _aA(n){
  let e, t=0;
  for(e=0;
  e<n.length;
  e++){
    const i=n[e];
    i.user?n[t++]=i:kOn(i)
  }
  if(Ww.context){
    if(Ww.count){
      Ww.effects||(Ww.effects=[]),Ww.effects.push(...n.slice(0,t));
      return
    }
    Dft()
  }
  for(Ww.effects&&(Ww.done||!Ww.count)&&(n=[...Ww.effects, ...n], t+=Ww.effects.length, delete Ww.effects), e=0;
  e<t;
  e++)kOn(n[e])
}
function TOo(n, e){
  const t=ug&&ug.running;
  t?n.tState=0:n.state=0;
  for(let i=0;
  i<n.sources.length;
  i+=1){
    const r=n.sources[i];
    if(r.sources){
      const s=t?r.tState:r.state;
      s===Joe?r!==e&&(!r.updatedAt||r.updatedAt<TOn)&&kOn(r):s===qOt&&TOo(r,e)
    }
  }
}
function ufh(n){
  const e=ug&&ug.running;
  for(let t=0;
  t<n.observers.length;
  t+=1){
    const i=n.observers[t];
    (e?!i.tState:!i.state)&&(e?i.tState=qOt:i.state=qOt, i.pure?L6.push(i):$H.push(i), i.observers&&ufh(i))
  }
}
function l9e(n){
  let e;
  if(n.sources)for(;
  n.sources.length;
  ){
    const t=n.sources.pop(), i=n.sourceSlots.pop(), r=t.observers;
    if(r&&r.length){
      const s=r.pop(),o=t.observerSlots.pop();
      i<r.length&&(s.sourceSlots[o]=i,r[i]=s,t.observerSlots[i]=o)
    }
  }
  if(n.tOwned){
    for(e=n.tOwned.length-1;
    e>=0;
    e--)l9e(n.tOwned[e]);
    delete n.tOwned
  }
  if(ug&&ug.running&&n.pure)dfh(n, !0);
  else if(n.owned){
    for(e=n.owned.length-1;
    e>=0;
    e--)l9e(n.owned[e]);
    n.owned=null
  }
  if(n.cleanups){
    for(e=n.cleanups.length-1;
    e>=0;
    e--)n.cleanups[e]();
    n.cleanups=null
  }
  ug&&ug.running?n.tState=0:n.state=0
}
function dfh(n, e){
  if(e||(n.tState=0, ug.disposed.add(n)), n.owned)for(let t=0;
  t<n.owned.length;
  t++)dfh(n.owned[t])
}
function IOo(n){
  return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error", {
    cause:n
  })
}
function hfh(n, e, t){
  try{
    for(const i of e)i(n)
  }
  catch(i){
    EOn(i, t&&t.owner||null)
  }
}
function EOn(n, e=iC){
  const t=$Ot&&e&&e.context&&e.context[$Ot], i=IOo(n);
  if(!t)throw i;
  $H?$H.push({
    fn(){
      hfh(i,t,e)
    }, state:Joe
  }):hfh(i, t, e)
}
function wxc(n){
  if(typeof n=="function"&&!n.length)return wxc(n());
  if(Array.isArray(n)){
    const e=[];
    for(let t=0;
    t<n.length;
    t++){
      const i=wxc(n[t]);
      Array.isArray(i)?e.push.apply(e,i):e.push(i)
    }
    return e
  }
  return n
}
function CaA(n, e){
  return function(i){
    let r;
    return tn(()=>r=sc(()=>(iC.context={
      ...iC.context,[n]:i.value
    }, XN(()=>i.children))), void 0), r
  }
}
function DOo(n){
  for(let e=0;
  e<n.length;
  e++)n[e]()
}
function SaA(n, e, t={
  
}){
  let i=[], r=[], s=[], o=0, a=e.length>1?[]:null;
  return Ai(()=>DOo(s)), ()=>{
    let l=n()||[], u=l.length, d, m;
    return l[UOt], sc(()=>{
      let g,f,A,w,C,x,I,B,R;
      if(u===0)o!==0&&(DOo(s),s=[],i=[],r=[],o=0,a&&(a=[])),t.fallback&&(i=[POo],r[0]=iI(N=>(s[0]=N,t.fallback())),o=1);
      else if(o===0){
        for(r=new Array(u),m=0;
        m<u;
        m++)i[m]=l[m],r[m]=iI(p);
        o=u
      }
      else{
        for(A=new Array(u),w=new Array(u),a&&(C=new Array(u)),x=0,I=Math.min(o,u);
        x<I&&i[x]===l[x];
        x++);
        for(I=o-1,B=u-1;
        I>=x&&B>=x&&i[I]===l[B];
        I--,B--)A[B]=r[I],w[B]=s[I],a&&(C[B]=a[I]);
        for(g=new Map,f=new Array(B+1),m=B;
        m>=x;
        m--)R=l[m],d=g.get(R),f[m]=d===void 0?-1:d,g.set(R,m);
        for(d=x;
        d<=I;
        d++)R=i[d],m=g.get(R),m!==void 0&&m!==-1?(A[m]=r[d],w[m]=s[d],a&&(C[m]=a[d]),m=f[m],g.set(R,m)):s[d]();
        for(m=x;
        m<u;
        m++)m in A?(r[m]=A[m],s[m]=w[m],a&&(a[m]=C[m],a[m](m))):r[m]=iI(p);
        r=r.slice(0,o=u),i=l.slice(0)
      }
      return r
    });
    function p(g){
      if(s[m]=g,a){
        const[f,A]=lt(m);
        return a[m]=A,e(l[m],f)
      }
      return e(l[m])
    }
  }
}
function kaA(n, e, t={
  
}){
  let i=[], r=[], s=[], o=[], a=0, l;
  return Ai(()=>DOo(s)), ()=>{
    const u=n()||[], d=u.length;
    return u[UOt], sc(()=>{
      if(d===0)return a!==0&&(DOo(s),s=[],i=[],r=[],a=0,o=[]),t.fallback&&(i=[POo],r[0]=iI(p=>(s[0]=p,t.fallback())),a=1),r;
      for(i[0]===POo&&(s[0](),s=[],i=[],r=[],a=0),l=0;
      l<d;
      l++)l<i.length&&i[l]!==u[l]?o[l](()=>u[l]):l>=i.length&&(r[l]=iI(m));
      for(;
      l<i.length;
      l++)s[l]();
      return a=o.length=s.length=d,i=u.slice(0),r=r.slice(0,a)
    });
    function m(p){
      s[l]=p;
      const[g,f]=lt(u[l]);
      return o[l]=f,e(g,l)
    }
  }
}
function K(n, e){
  if(ffh&&Ww.context){
    const t=Ww.context;
    Dft(faA());
    const i=sc(()=>n(e||{
      
    }));
    return Dft(t), i
  }
  return sc(()=>n(e||{
    
  }))
}
function BOo(){
  return!0
}
function _xc(n){
  return(n=typeof n=="function"?n():n)?n:{
    
  }
}
function EaA(){
  for(let n=0, e=this.length;
  n<e;
  ++n){
    const t=this[n]();
    if(t!==void 0)return t
  }
}
function hb(...n){
  let e=!1;
  for(let o=0;
  o<n.length;
  o++){
    const a=n[o];
    e=e||!!a&&Mde in a, n[o]=typeof a=="function"?(e=!0, xe(a)):a
  }
  if(Cxc&&e)return new Proxy({
    get(o){
      for(let a=n.length-1;
      a>=0;
      a--){
        const l=_xc(n[a])[o];
        if(l!==void 0)return l
      }
    }, has(o){
      for(let a=n.length-1;
      a>=0;
      a--)if(o in _xc(n[a]))return!0;
      return!1
    }, keys(){
      const o=[];
      for(let a=0;
      a<n.length;
      a++)o.push(...Object.keys(_xc(n[a])));
      return[...new Set(o)]
    }
  }, LOo);
  const t={
    
  }, i=Object.create(null);
  for(let o=n.length-1;
  o>=0;
  o--){
    const a=n[o];
    if(!a)continue;
    const l=Object.getOwnPropertyNames(a);
    for(let u=l.length-1;
    u>=0;
    u--){
      const d=l[u];
      if(d==="__proto__"||d==="constructor")continue;
      const m=Object.getOwnPropertyDescriptor(a,d);
      if(!i[d])i[d]=m.get?{
        enumerable:!0,configurable:!0,get:EaA.bind(t[d]=[m.get.bind(a)])
      }
      :m.value!==void 0?m:void 0;
      else{
        const p=t[d];
        p&&(m.get?p.push(m.get.bind(a)):m.value!==void 0&&p.push(()=>m.value))
      }
    }
  }
  const r={
    
  }, s=Object.keys(i);
  for(let o=s.length-1;
  o>=0;
  o--){
    const a=s[o], l=i[a];
    l&&l.get?Object.defineProperty(r, a, l):r[a]=l?l.value:void 0
  }
  return r
}
function Bft(n, ...e){
  if(Cxc&&Mde in n){
    const r=new Set(e.length>1?e.flat():e[0]), s=e.map(o=>new Proxy({
      get(a){
        return o.includes(a)?n[a]:void 0
      },has(a){
        return o.includes(a)&&a in n
      },keys(){
        return o.filter(a=>a in n)
      }
    }, LOo));
    return s.push(new Proxy({
      get(o){
        return r.has(o)?void 0:n[o]
      },has(o){
        return r.has(o)?!1:o in n
      },keys(){
        return Object.keys(n).filter(o=>!r.has(o))
      }
    }, LOo)), s
  }
  const t={
    
  }, i=e.map(()=>({
    
  }));
  for(const r of Object.getOwnPropertyNames(n)){
    const s=Object.getOwnPropertyDescriptor(n, r), o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;
    let a=!1, l=0;
    for(const u of e)u.includes(r)&&(a=!0, o?i[l][r]=s.value:Object.defineProperty(i[l], r, s)), ++l;
    a||(o?t[r]=s.value:Object.defineProperty(t, r, s))
  }
  return[...i, t]
}
function mfh(){
  return Ww.context?Ww.getNextContextId():`cl-${bfh++}`
}
function ia(n){
  const e="fallback"in n&&{
    fallback:()=>n.fallback
  };
  return xe(SaA(()=>n.each, n.children, e||void 0))
}
function Rft(n){
  const e="fallback"in n&&{
    fallback:()=>n.fallback
  };
  return xe(kaA(()=>n.each, n.children, e||void 0))
}
function Xe(n){
  const e=n.keyed, t=xe(()=>n.when, void 0, void 0), i=e?t:xe(t, void 0, {
    equals:(r, s)=>!r==!s
  });
  return xe(()=>{
    const r=i();
    if(r){
      const s=n.children;
      return typeof s=="function"&&s.length>0?sc(()=>s(e?r:()=>{
        if(!sc(i))throw xxc("Show");
        return t()
      })):s
    }
    return n.fallback
  }, void 0, void 0)
}
function Xv(n){
  const e=XN(()=>n.children), t=xe(()=>{
    const i=e(), r=Array.isArray(i)?i:[i];
    let s=()=>{
      
    };
    for(let o=0;
    o<r.length;
    o++){
      const a=o,l=r[o],u=s,d=xe(()=>u()?void 0:l.when,void 0,void 0),m=l.keyed?d:xe(d,void 0,{
        equals:(p,g)=>!p==!g
      });
      s=()=>u()||(m()?[a,d,l]:void 0)
    }
    return s
  });
  return xe(()=>{
    const i=t()();
    if(!i)return n.fallback;
    const[r, s, o]=i, a=o.children;
    return typeof a=="function"&&a.length>0?sc(()=>a(o.keyed?s():()=>{
      if(sc(t)()?.[0]!==r)throw xxc("Match");
      return s()
    })):a
  }, void 0, void 0)
}
function ba(n){
  return n
}
function xaA(n){
  let e;
  Ww.context&&Ww.load&&(e=Ww.load(Ww.getContextId()));
  const[t, i]=lt(e, void 0);
  return NOo||(NOo=new Set), NOo.add(i), Ai(()=>NOo.delete(i)), xe(()=>{
    let r;
    if(r=t()){
      const s=n.fallback;
      return typeof s=="function"&&s.length?sc(()=>s(r,()=>i())):s
    }
    return rfh(()=>n.children, i)
  }, void 0, void 0)
}
function TaA(n){
  let e=0, t, i, r, s, o;
  const[a, l]=lt(!1), u=AaA(), d={
    increment:()=>{
      ++e===1&&l(!0)
    }, decrement:()=>{
      --e===0&&l(!1)
    }, inFallback:a, effects:[], resolved:!1
  }, m=a9e();
  if(Ww.context&&Ww.load){
    const f=Ww.getContextId();
    let A=Ww.load(f);
    if(A&&(typeof A!="object"||A.s!==1?r=A:Ww.gather(f)), r&&r!=="$$f"){
      const[w,C]=lt(void 0,{
        equals:!1
      });
      s=w,r.then(()=>{
        if(Ww.done)return C();
        Ww.gather(f),Dft(i),C(),Dft()
      },x=>{
        o=x,C()
      })
    }
  }
  const p=yb(vfh);
  p&&(t=p.register(d.inFallback));
  let g;
  return Ai(()=>g&&g()), K(u.Provider, {
    value:d, get children(){
      return xe(()=>{
        if(o)throw o;
        if(i=Ww.context,s)return s(),s=void 0;
        i&&r==="$$f"&&Dft();
        const f=xe(()=>n.children);
        return xe(A=>{
          const w=d.inFallback(),{
            showContent:C=!0,showFallback:x=!0
          }
          =t?t():{
            
          };
          if((!w||r&&r!=="$$f")&&C)return d.resolved=!0,g&&g(),g=i=r=void 0,vaA(d.effects),f();
          if(x)return g?A:iI(I=>(g=I,i&&(Dft({
            id:i.id+"F",count:0
          }),i=void 0),n.fallback),m)
        })
      })
    }
  })
}
var Ww, pfh, gfh, Mde, Cxc, UOt, IaA, xOn, $Ot, Sxc, Joe, qOt, kxc, ROo, iC, ug, Pft, Lft, KD, L6, $H, TOn, DaA, Exc, Nft, POo, ffh, LOo, bfh, xxc, NOo, vfh, u9e, Ti=