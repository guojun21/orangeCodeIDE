// Module: out-build/vs/platform/markers/common/markers.js
// Offset: 2480591 (bundle byte offset)
// Size: 10615 bytes

Vf(), Ht(), Wt(), (function(n){
  n[n.Unnecessary=1]="Unnecessary", n[n.Deprecated=2]="Deprecated"
})(akh||(akh={
  
})), (function(n){
  n[n.Hint=1]="Hint", n[n.Info=2]="Info", n[n.AI=3]="AI", n[n.Warning=4]="Warning", n[n.Error=8]="Error"
})(Gl||(Gl={
  
})), (function(n){
  function e(l, u){
    return u-l
  }
  n.compare=e;
  const t=Object.create(null);
  t[n.Error]=_(2121, null), t[n.Warning]=_(2122, null), t[n.Info]=_(2123, null), t[n.AI]="AI Hint";
  function i(l){
    return t[l]||""
  }
  n.toString=i;
  const r=Object.create(null);
  r[n.Error]=_(2124, null), r[n.Warning]=_(2125, null), r[n.Info]=_(2126, null);
  function s(l){
    return r[l]||""
  }
  n.toStringPlural=s;
  function o(l){
    switch(l){
      case Ha.Error:return n.Error;
      case Ha.Warning:return n.Warning;
      case Ha.Info:return n.Info;
      case Ha.Ignore:return n.Hint;
      case Ha.AI:return n.AI;
      case Ha.Success:return n.Info
    }
  }
  n.fromSeverity=o;
  function a(l){
    switch(l){
      case n.Error:return Ha.Error;
      case n.Warning:return Ha.Warning;
      case n.Info:return Ha.Info;
      case n.Hint:return Ha.Ignore;
      case n.AI:return Ha.AI
    }
  }
  n.toSeverity=a
})(Gl||(Gl={
  
})), (function(n){
  function t(r){
    return i(r, !0)
  }
  n.makeKey=t;
  function i(r, s){
    const o=[""];
    return r.source?o.push(r.source.replace("\xA6", "\\\xA6")):o.push(""), r.code?typeof r.code=="string"?o.push(r.code.replace("\xA6", "\\\xA6")):o.push(r.code.value.replace("\xA6", "\\\xA6")):o.push(""), r.severity!==void 0&&r.severity!==null?o.push(Gl.toString(r.severity)):o.push(""), r.message&&s?o.push(r.message.replace("\xA6", "\\\xA6")):o.push(""), r.startLineNumber!==void 0&&r.startLineNumber!==null?o.push(r.startLineNumber.toString()):o.push(""), r.startColumn!==void 0&&r.startColumn!==null?o.push(r.startColumn.toString()):o.push(""), r.endLineNumber!==void 0&&r.endLineNumber!==null?o.push(r.endLineNumber.toString()):o.push(""), r.endColumn!==void 0&&r.endColumn!==null?o.push(r.endColumn.toString()):o.push(""), o.push(""), o.join("\xA6")
  }
  n.makeKeyOptionalMessage=i
})(kKe||(kKe={
  
})), bk=xi("markerService")
}
});
function WhA(n, e){
  const t=fkh[n];
  return typeof t=="object"?t[e]?t.$:void 0:t
}
function QhA(n, e, t){
  let i=t.length, r=e.length, s=i, o=0, a=0, l=e[r-1].nextSibling, u=null;
  for(;
  o<r||a<s;
  ){
    if(e[o]===t[a]){
      o++,a++;
      continue
    }
    for(;
    e[r-1]===t[s-1];
    )r--, s--;
    if(r===o){
      const d=s<i?a?t[a-1].nextSibling:t[s-a]:l;
      for(;
      a<s;
      )n.insertBefore(t[a++],d)
    }
    else if(s===a)for(;
    o<r;
    )(!u||!u.has(e[o]))&&e[o].remove(), o++;
    else if(e[o]===t[s-1]&&t[a]===e[r-1]){
      const d=e[--r].nextSibling;
      n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--s],d),e[r]=t[s]
    }
    else{
      if(!u){
        u=new Map;
        let m=a;
        for(;
        m<s;
        )u.set(t[m],m++)
      }
      const d=u.get(e[o]);
      if(d!=null)if(a<d&&d<s){
        let m=o,p=1,g;
        for(;
        ++m<r&&m<s&&!((g=u.get(e[m]))==null||g!==d+p);
        )p++;
        if(p>d-a){
          const f=e[o];
          for(;
          a<d;
          )n.insertBefore(t[a++],f)
        }
        else n.replaceChild(t[a++],e[o++])
      }
      else o++;
      else e[o++].remove()
    }
  }
}
function DRe(n, e, t, i={
  
}){
  let r;
  return iI(s=>{
    r=s, e===document?n():ge(e, n(), e.firstChild?null:void 0, t)
  }, i.owner), ()=>{
    r(), e.textContent=""
  }
}
function qe(n, e, t, i){
  let r;
  const s=()=>{
    const a=i?document.createElementNS("http://www.w3.org/1998/Math/MathML", "template"):document.createElement("template");
    return a.innerHTML=jBc?jBc.createHTML(n):n, t?a.content.firstChild.firstChild:i?a.firstChild:a.content.firstChild
  }, o=e?()=>sc(()=>document.importNode(r||(r=s()), !0)):()=>(r||(r=s())).cloneNode(!0);
  return o.cloneNode=o, o
}
function jhA(n, e=window.document){
  const t=e[QBc]||(e[QBc]=new Set);
  for(let i=0, r=n.length;
  i<r;
  i++){
    const s=n[i];
    t.has(s)||(t.add(s), e.addEventListener(s, XhA))
  }
}
function Zr(n, e, t){
  kbt(n)||(t==null?n.removeAttribute(e):n.setAttribute(e, t))
}
function zhA(n, e, t, i){
  kbt(n)||(i==null?n.removeAttributeNS(e, t):n.setAttributeNS(e, t, i))
}
function VhA(n, e, t){
  kbt(n)||(t?n.setAttribute(e, ""):n.removeAttribute(e))
}
function Un(n, e){
  kbt(n)||(e==null?n.removeAttribute("class"):n.className=e)
}
function Yd(n, e, t, i){
  if(i)Array.isArray(t)?(n[`$$${e}`]=t[0], n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;
  else if(Array.isArray(t)){
    const r=t[0];
    n.addEventListener(e, t[0]=s=>r.call(n, t[1], s))
  }
  else n.addEventListener(e, t, typeof t!="function"&&t)
}
function t5n(n, e, t={
  
}){
  const i=Object.keys(e||{
    
  }), r=Object.keys(t);
  let s, o;
  for(s=0, o=r.length;
  s<o;
  s++){
    const a=r[s];
    !a||a==="undefined"||e[a]||(ckh(n, a, !1), delete t[a])
  }
  for(s=0, o=i.length;
  s<o;
  s++){
    const a=i[s], l=!!e[a];
    !a||a==="undefined"||t[a]===l||!l||(ckh(n, a, !0), t[a]=l)
  }
  return t
}
function La(n, e, t){
  if(!e)return t?Zr(n, "style"):e;
  const i=n.style;
  if(typeof e=="string")return i.cssText=e;
  typeof t=="string"&&(i.cssText=t=void 0), t||(t={
    
  }), e||(e={
    
  });
  let r, s;
  for(s in t)e[s]==null&&i.removeProperty(s), delete t[s];
  for(s in e)r=e[s], r!==t[s]&&(i.setProperty(s, r), t[s]=r);
  return t
}
function $6(n, e={
  
}, t, i){
  const r={
    
  };
  return i||tn(()=>r.children=X3t(n, e.children, r.children)), tn(()=>typeof e.ref=="function"&&Bs(e.ref, n)), tn(()=>KhA(n, e, t, !0, r, !0)), r
}
function Bs(n, e, t){
  return sc(()=>n(e, t))
}
function ge(n, e, t, i){
  if(t!==void 0&&!i&&(i=[]), typeof e!="function")return X3t(n, e, i, t);
  tn(r=>X3t(n, e(), r, t), i)
}
function KhA(n, e, t, i, r={
  
}, s=!1){
  e||(e={
    
  });
  for(const o in r)if(!(o in e)){
    if(o==="children")continue;
    r[o]=lkh(n, o, null, r[o], t, s, e)
  }
  for(const o in e){
    if(o==="children"){
      i||X3t(n,e.children);
      continue
    }
    const a=e[o];
    r[o]=lkh(n, o, a, r[o], t, s, e)
  }
}
function YhA(n){
  let e, t;
  return!kbt()||!(e=Ww.registry.get(t=emA()))?n():(Ww.completed&&Ww.completed.add(e), Ww.registry.delete(t), e)
}
function kbt(n){
  return!!Ww.context&&!Ww.done&&(!n||n.isConnected)
}
function ZhA(n){
  return n.toLowerCase().replace(/-([a-z])/g, (e, t)=>t.toUpperCase())
}
function ckh(n, e, t){
  const i=e.trim().split(/\s+/);
  for(let r=0, s=i.length;
  r<s;
  r++)n.classList.toggle(i[r], t)
}
function lkh(n, e, t, i, r, s, o){
  let a, l, u, d, m;
  if(e==="style")return La(n, t, i);
  if(e==="classList")return t5n(n, t, i);
  if(t===i)return i;
  if(e==="ref")s||t(n);
  else if(e.slice(0, 3)==="on:"){
    const p=e.slice(3);
    i&&n.removeEventListener(p, i, typeof i!="function"&&i), t&&n.addEventListener(p, t, typeof t!="function"&&t)
  }
  else if(e.slice(0, 10)==="oncapture:"){
    const p=e.slice(10);
    i&&n.removeEventListener(p, i, !0), t&&n.addEventListener(p, t, !0)
  }
  else if(e.slice(0, 2)==="on"){
    const p=e.slice(2).toLowerCase(), g=WBc.has(p);
    if(!g&&i){
      const f=Array.isArray(i)?i[0]:i;
      n.removeEventListener(p,f)
    }
    (g||t)&&(Yd(n, p, t, g), g&&jhA([p]))
  }
  else if(e.slice(0, 5)==="attr:")Zr(n, e.slice(5), t);
  else if(e.slice(0, 5)==="bool:")VhA(n, e.slice(5), t);
  else if((m=e.slice(0, 5)==="prop:")||(u=pkh.has(e))||!r&&((d=WhA(e, n.tagName))||(l=mkh.has(e)))||(a=n.nodeName.includes("-")||"is"in o)){
    if(m)e=e.slice(5), l=!0;
    else if(kbt(n))return t;
    e==="class"||e==="className"?Un(n, t):a&&!l&&!u?n[ZhA(e)]=t:n[d||e]=t
  }
  else{
    const p=r&&e.indexOf(":")>-1&&vkh[e.split(":")[0]];
    p?zhA(n, p, e, t):Zr(n, gkh[e]||e, t)
  }
  return t
}
function XhA(n){
  if(Ww.registry&&Ww.events&&Ww.events.find(([l, u])=>u===n))return;
  let e=n.target;
  const t=`$$${n.type}`, i=n.target, r=n.currentTarget, s=l=>Object.defineProperty(n, "target", {
    configurable:!0, value:l
  }), o=()=>{
    const l=e[t];
    if(l&&!e.disabled){
      const u=e[`${t}Data`];
      if(u!==void 0?l.call(e,u,n):l.call(e,n),n.cancelBubble)return
    }
    return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&s(e.host), !0
  }, a=()=>{
    for(;
    o()&&(e=e._$host||e.parentNode||e.host);
    );
  };
  if(Object.defineProperty(n, "currentTarget", {
    configurable:!0, get(){
      return e||document
    }
  }), Ww.registry&&!Ww.done&&(Ww.done=_$HY.done=!0), n.composedPath){
    const l=n.composedPath();
    s(l[0]);
    for(let u=0;
    u<l.length-2&&(e=l[u], !!o());
    u++){
      if(e._$host){
        e=e._$host,a();
        break
      }
      if(e.parentNode===r)break
    }
  }
  else a();
  s(i)
}
function X3t(n, e, t, i, r){
  const s=kbt(n);
  if(s){
    !t&&(t=[...n.childNodes]);
    let l=[];
    for(let u=0;
    u<t.length;
    u++){
      const d=t[u];
      d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)
    }
    t=l
  }
  for(;
  typeof t=="function";
  )t=t();
  if(e===t)return t;
  const o=typeof e, a=i!==void 0;
  if(n=a&&t[0]&&t[0].parentNode||n, o==="string"||o==="number"){
    if(s||o==="number"&&(e=e.toString(), e===t))return t;
    if(a){
      let l=t[0];
      l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=e5t(n,t,i,l)
    }
    else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e
  }
  else if(e==null||o==="boolean"){
    if(s)return t;
    t=e5t(n, t, i)
  }
  else{
    if(o==="function")return tn(()=>{
      let l=e();
      for(;
      typeof l=="function";
      )l=l();
      t=X3t(n,l,t,i)
    }), ()=>t;
    if(Array.isArray(e)){
      const l=[],u=t&&Array.isArray(t);
      if(JBc(l,e,t,r))return tn(()=>t=X3t(n,l,t,i,!0)),()=>t;
      if(s){
        if(!l.length)return t;
        if(i===void 0)return t=[...n.childNodes];
        let d=l[0];
        if(d.parentNode!==n)return t;
        const m=[d];
        for(;
        (d=d.nextSibling)!==i;
        )m.push(d);
        return t=m
      }
      if(l.length===0){
        if(t=e5t(n,t,i),a)return t
      }
      else u?t.length===0?ukh(n,l,i):QhA(n,t,l):(t&&e5t(n),ukh(n,l));
      t=l
    }
    else if(e.nodeType){
      if(s&&e.parentNode)return t=a?[e]:e;
      if(Array.isArray(t)){
        if(a)return t=e5t(n,t,i,e);
        e5t(n,t,null,e)
      }
      else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);
      t=e
    }
  }
  return t
}
function JBc(n, e, t, i){
  let r=!1;
  for(let s=0, o=e.length;
  s<o;
  s++){
    let a=e[s], l=t&&t[n.length], u;
    if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)n.push(a);
    else if(Array.isArray(a))r=JBc(n, a, l)||r;
    else if(u==="function")if(i){
      for(;
      typeof a=="function";
      )a=a();
      r=JBc(n,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||r
    }
    else n.push(a), r=!0;
    else{
      const d=String(a);
      l&&l.nodeType===3&&l.data===d?n.push(l):n.push(document.createTextNode(d))
    }
  }
  return r
}
function ukh(n, e, t=null){
  for(let i=0, r=e.length;
  i<r;
  i++)n.insertBefore(e[i], t)
}
function e5t(n, e, t, i){
  if(t===void 0)return n.textContent="";
  const r=i||document.createTextNode("");
  if(e.length){
    let s=!1;
    for(let o=e.length-1;
    o>=0;
    o--){
      const a=e[o];
      if(r!==a){
        const l=a.parentNode===n;
        !s&&!o?l?n.replaceChild(r,a):n.insertBefore(r,t):l&&a.remove()
      }
      else s=!0
    }
  }
  else n.insertBefore(r, t);
  return[r]
}
function emA(){
  return Ww.getNextContextId()
}
function dkh(n, e=!1){
  return e?document.createElementNS(Akh, n):document.createElement(n)
}
function Ebt(n){
  const{
    useShadow:e
  }
  =n, t=document.createTextNode(""), i=()=>n.mount||document.body, r=a9e();
  let s, o=!!Ww.context;
  return An(()=>{
    o&&(a9e().user=o=!1), s||(s=c9e(r, ()=>xe(()=>n.children)));
    const a=i();
    if(a instanceof HTMLHeadElement){
      const[l,u]=lt(!1),d=()=>u(!0);
      iI(m=>ge(a,()=>l()?m():s(),null)),Ai(d)
    }
    else{
      const l=dkh(n.isSVG?"g":"div",n.isSVG),u=e&&l.attachShadow?l.attachShadow({
        mode:"open"
      }):l;
      Object.defineProperty(l,"_$host",{
        get(){
          return t.parentNode
        },configurable:!0
      }),ge(u,s),a.appendChild(l),n.ref&&n.ref(l),Ai(()=>a.removeChild(l))
    }
  }, void 0, {
    render:!o
  }), t
}
function tmA(n, e){
  const t=xe(n);
  return xe(()=>{
    const i=t();
    switch(typeof i){
      case"function":return sc(()=>i(e));
      case"string":const r=bkh.has(i),s=Ww.context?YhA():dkh(i,r);
      return $6(s,e,r),s
    }
  })
}
function GBc(n){
  const[, e]=Bft(n, ["component"]);
  return tmA(()=>n.component, e)
}
var hkh, mkh, pkh, gkh, fkh, WBc, bkh, vkh, Ui, QBc, jBc, nmA, m9o, Akh, Ie=