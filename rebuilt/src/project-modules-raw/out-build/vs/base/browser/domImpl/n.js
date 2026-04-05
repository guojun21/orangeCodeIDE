// Module: out-build/vs/base/browser/domImpl/n.js
// Offset: 523303 (bundle byte offset)
// Size: 14512 bytes

_s(), rt(), Uc(), ri(), (function(n){
  function e(r=void 0){
    return(s, o, a)=>{
      const l=o.class;
      delete o.class;
      const u=o.ref;
      delete o.ref;
      const d=o.obsRef;
      return delete o.obsRef,new Boh(s,u,d,r,l,o,a)
    }
  }
  function t(r, s=void 0){
    const o=e(s);
    return(a, l)=>o(r, a, l)
  }
  n.div=t("div"), n.elem=e(void 0), n.svg=t("svg", "http://www.w3.org/2000/svg"), n.svgElem=e("http://www.w3.org/2000/svg");
  function i(){
    let r;
    const s=function(o){
      r=o
    };
    return Object.defineProperty(s, "element", {
      get(){
        if(!r)throw new _m("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
        return r
      }
    }), s
  }
  n.ref=i
})(Mv||(Mv={
  
})), Ioh=class aJb{
  constructor(e, t, i, r, s, o, a){
    this._deriveds=[], this._element=r?document.createElementNS(r, e):document.createElement(e), t&&t(this._element), i&&this._deriveds.push(Ite((u, d)=>{
      i(this),d.add({
        dispose:()=>{
          i(null)
        }
      })
    })), s&&(koh(s)?this._deriveds.push(Ro(this, u=>{
      _oh(this._element,Soh(s,u))
    })):_oh(this._element, Soh(s, void 0)));
    for(const[u, d]of Object.entries(o))if(u==="style")for(const[m, p]of Object.entries(d)){
      const g=JSc(m);
      Hgt(p)?this._deriveds.push(uF({
        owner:this,debugName:()=>`set.style.${g}`
      },f=>{
        this._element.style.setProperty(g,Eoh(p.read(f)))
      })):this._element.style.setProperty(g,Eoh(p))
    }
    else u==="tabIndex"?Hgt(d)?this._deriveds.push(Ro(this, m=>{
      this._element.tabIndex=d.read(m)
    })):this._element.tabIndex=d:u.startsWith("on")?this._element[u]=d:Hgt(d)?this._deriveds.push(uF({
      owner:this,debugName:()=>`set.${u}`
    }, m=>{
      Toh(this._element,u,d.read(m))
    })):Toh(this._element, u, d);
    if(a){
      let u=function(m,p){
        return Hgt(p)?u(m,p.read(m)):Array.isArray(p)?p.flatMap(g=>u(m,g)):p instanceof aJb?(m&&p.readEffect(m),[p._element]):p?[p]:[]
      };
      var l=u;
      const d=Ro(this,m=>{
        this._element.replaceChildren(...u(m,a))
      });
      this._deriveds.push(d),xoh(a)||d.get()
    }
  }
  readEffect(e){
    for(const t of this._deriveds)t.read(e)
  }
  keepUpdated(e){
    return Ro(t=>{
      this.readEffect(t)
    }).recomputeInitiallyAndOnChange(e), this
  }
  toDisposableLiveElement(){
    const e=new Ut;
    return this.keepUpdated(e), new Doh(this._element, e)
  }
}, Doh=class{
  constructor(n, e){
    this.element=n, this._disposable=e
  }
  dispose(){
    this._disposable.dispose()
  }
}, Boh=class extends Ioh{
  constructor(){
    super(...arguments), this._isHovered=void 0, this._didMouseMoveDuringHover=void 0
  }
  get element(){
    return this._element
  }
  get isHovered(){
    if(!this._isHovered){
      const n=Ua("hovered",!1);
      this._element.addEventListener("mouseenter",e=>n.set(!0,void 0)),this._element.addEventListener("mouseleave",e=>n.set(!1,void 0)),this._isHovered=n
    }
    return this._isHovered
  }
  get didMouseMoveDuringHover(){
    if(!this._didMouseMoveDuringHover){
      let n=!1;
      const e=Ua("didMouseMoveDuringHover",!1);
      this._element.addEventListener("mouseenter",t=>{
        n=!0
      }),this._element.addEventListener("mousemove",t=>{
        n&&e.set(!0,void 0)
      }),this._element.addEventListener("mouseleave",t=>{
        n=!1,e.set(!1,void 0)
      }),this._didMouseMoveDuringHover=e
    }
    return this._didMouseMoveDuringHover
  }
}
}
});
function th(n){
  for(;
  n.firstChild;
  )n.firstChild.remove()
}
function ei(n, e, t, i){
  return new Koh(n, e, t, i)
}
function GSc(n, e){
  return function(t){
    return e(new yy(n, t))
  }
}
function fiA(n){
  return function(e){
    return n(new vh(e))
  }
}
function nFo(n, e, t){
  return ei(n, ZL&&cW.pointerEvents?ir.POINTER_DOWN:ir.MOUSE_DOWN, e, t)
}
function WSc(n, e, t){
  return ei(n, ZL&&cW.pointerEvents?ir.POINTER_MOVE:ir.MOUSE_MOVE, e, t)
}
function zFn(n, e, t){
  return ei(n, ZL&&cW.pointerEvents?ir.POINTER_UP:ir.MOUSE_UP, e, t)
}
function Dte(n, e, t){
  return pFn(n, e, t)
}
function E5e(n, e, t, i){
  let r=0;
  const s=n.setInterval(()=>{
    r++, (typeof i=="number"&&r>=i||e()===!0)&&o.dispose()
  }, t), o=$i(()=>{
    n.clearInterval(s)
  });
  return o
}
function Roh(n, e){
  return r_(n, e, 1e4)
}
function VFn(n, e){
  return r_(n, e, -1e4)
}
function w4t(n){
  return As(n).getComputedStyle(n, null)
}
function DY(n, e, t){
  const i=As(n), r=i.document;
  if(n!==r.body)return new Lu(n.clientWidth, n.clientHeight);
  if(ZL&&i?.visualViewport)return new Lu(i.visualViewport.width, i.visualViewport.height);
  if(i?.innerWidth&&i.innerHeight)return new Lu(i.innerWidth, i.innerHeight);
  if(r.body&&r.body.clientWidth&&r.body.clientHeight)return new Lu(r.body.clientWidth, r.body.clientHeight);
  if(r.documentElement&&r.documentElement.clientWidth&&r.documentElement.clientHeight)return new Lu(r.documentElement.clientWidth, r.documentElement.clientHeight);
  if(t)return DY(t, e);
  if(e)return e;
  if(Pbe.parentWindowId!==void 0)return Pbe.parentWindowDimensions!==void 0?new Lu(Pbe.parentWindowDimensions.width, Pbe.parentWindowDimensions.height):new Lu(1024, 768);
  throw new Error("Unable to figure out browser width and height")
}
function x5e(n){
  let e=n.offsetParent, t=n.offsetTop, i=n.offsetLeft;
  for(;
  (n=n.parentNode)!==null&&n!==n.ownerDocument.body&&n!==n.ownerDocument.documentElement;
  ){
    t-=n.scrollTop;
    const r=Loh(n)?null:w4t(n);
    r&&(i-=r.direction!=="rtl"?n.scrollLeft:-n.scrollLeft), n===e&&(i+=tz.getBorderLeftWidth(n), t+=tz.getBorderTopWidth(n), t+=n.offsetTop, i+=n.offsetLeft, e=n.offsetParent)
  }
  return{
    left:i, top:t
  }
}
function Jgt(n, e, t){
  typeof e=="number"&&(n.style.width=`${e}px`), typeof t=="number"&&(n.style.height=`${t}px`)
}
function Poh(n, e, t, i, r, s="absolute"){
  typeof e=="number"&&(n.style.top=`${e}px`), typeof t=="number"&&(n.style.right=`${t}px`), typeof i=="number"&&(n.style.bottom=`${i}px`), typeof r=="number"&&(n.style.left=`${r}px`), n.style.position=s
}
function qS(n){
  const e=n.getBoundingClientRect(), t=As(n);
  return{
    left:e.left+t.scrollX, top:e.top+t.scrollY, width:e.width, height:e.height
  }
}
function iFo(n){
  let e=n, t=1;
  do{
    const i=w4t(e).zoom;
    i!=null&&i!=="1"&&(t*=i), e=e.parentElement
  }
  while(e!==null&&e!==e.ownerDocument.documentElement);
  return t
}
function jP(n){
  const e=tz.getMarginLeft(n)+tz.getMarginRight(n);
  return n.offsetWidth+e
}
function KFn(n){
  const e=tz.getBorderLeftWidth(n)+tz.getBorderRightWidth(n), t=tz.getPaddingLeft(n)+tz.getPaddingRight(n);
  return n.offsetWidth-e-t
}
function biA(n){
  const e=tz.getMarginLeft(n)+tz.getMarginRight(n);
  return n.scrollWidth+e
}
function QSc(n){
  const e=tz.getBorderTopWidth(n)+tz.getBorderBottomWidth(n), t=tz.getPaddingTop(n)+tz.getPaddingBottom(n);
  return n.offsetHeight-e-t
}
function DH(n){
  const e=tz.getMarginTop(n)+tz.getMarginBottom(n);
  return n.offsetHeight+e
}
function viA(n, e){
  if(n===null)return 0;
  const t=x5e(n), i=x5e(e);
  return t.left-i.left
}
function jSc(n, e){
  const t=e.map(r=>Math.max(biA(r), jP(r))+viA(r, n)||0);
  return Math.max(...t)
}
function HS(n, e){
  return!!e?.contains(n)
}
function rFo(n, e){
  n.dataset[XSc]=e.id
}
function AiA(n){
  const e=n.dataset[XSc];
  return typeof e=="string"?n.ownerDocument.getElementById(e):null
}
function yiA(n, e){
  let t=n;
  for(;
  t;
  ){
    if(t===e)return!0;
    if(wf(t)){
      const i=AiA(t);
      if(i){
        t=i;
        continue
      }
    }
    t=t.parentNode
  }
  return!1
}
function _oe(n, e, t){
  for(;
  n&&n.nodeType===n.ELEMENT_NODE;
  ){
    if(n.classList.contains(e))return n;
    if(t){
      if(typeof t=="string"){
        if(n.classList.contains(t))return null
      }
      else if(n===t)return null
    }
    n=n.parentNode
  }
  return null
}
function sFo(n, e, t){
  return!!_oe(n, e, t)
}
function Loh(n){
  return n&&!!n.host&&!!n.mode
}
function YFn(n){
  return!!Qze(n)
}
function Qze(n){
  for(;
  n.parentNode;
  ){
    if(n===n.ownerDocument?.body)return null;
    n=n.parentNode
  }
  return Loh(n)?n:null
}
function _C(){
  let n=Jy().activeElement;
  for(;
  n?.shadowRoot;
  )n=n.shadowRoot.activeElement;
  return n
}
function zP(n){
  return _C()===n
}
function UR(n){
  return HS(_C(), n)
}
function Noh(n){
  return n.ownerDocument===Jy()
}
function Jy(){
  return XFn()<=1?bi.document:Array.from(Obe()).map(({
    window:e
  })=>e.document).find(e=>e.hasFocus())??bi.document
}
function $c(){
  return Jy().defaultView?.window??bi
}
function Moh(n=bi.document.head){
  return Foh("meta", n)
}
function wiA(n=bi.document.head){
  return Foh("link", n)
}
function Foh(n, e=bi.document.head){
  const t=document.createElement(n);
  return e.appendChild(t), t
}
function wf(n){
  return n instanceof HTMLElement||n instanceof As(n).HTMLElement
}
function zSc(n){
  return n instanceof HTMLAnchorElement||n instanceof As(n).HTMLAnchorElement
}
function _4t(n){
  return n instanceof HTMLTextAreaElement||n instanceof As(n).HTMLTextAreaElement
}
function oFo(n){
  return n instanceof HTMLInputElement||n instanceof As(n).HTMLInputElement
}
function _iA(n){
  return n instanceof HTMLButtonElement||n instanceof As(n).HTMLButtonElement
}
function Ooh(n){
  return n instanceof HTMLDivElement||n instanceof As(n).HTMLDivElement
}
function Uoh(n){
  return n instanceof SVGElement||n instanceof As(n).SVGElement
}
function I6(n){
  return n instanceof MouseEvent||n instanceof As(n).MouseEvent
}
function BH(n){
  return n instanceof KeyboardEvent||n instanceof As(n).KeyboardEvent
}
function $oh(n){
  return n instanceof PointerEvent||n instanceof As(n).PointerEvent
}
function CiA(n){
  return n instanceof DragEvent||n instanceof As(n).DragEvent
}
function qoh(n){
  const e=n;
  return!!(e&&typeof e.preventDefault=="function"&&typeof e.stopPropagation=="function")
}
function SiA(n){
  const e=[];
  for(let t=0;
  n&&n.nodeType===n.ELEMENT_NODE;
  t++)e[t]=n.scrollTop, n=n.parentNode;
  return e
}
function kiA(n, e){
  for(let t=0;
  n&&n.nodeType===n.ELEMENT_NODE;
  t++)n.scrollTop!==e[t]&&(n.scrollTop=e[t]), n=n.parentNode
}
function CC(n){
  return new Yoh(n)
}
function Hoh(n, e){
  return n.after(e), e
}
function Rt(n, ...e){
  if(n.append(...e), e.length===1&&typeof e[0]!="string")return e[0]
}
function CSe(n, e){
  return n.insertBefore(e, n.firstChild), e
}
function um(n, ...e){
  n.innerText="", Rt(n, ...e)
}
function Joh(n, e, t, ...i){
  const r=Zoh.exec(e);
  if(!r)throw new Error("Bad use of emmet");
  const s=r[1]||"div";
  let o;
  return n!==e4n.HTML?o=document.createElementNS(n, s):o=document.createElement(s), r[3]&&(o.id=r[3]), r[4]&&(o.className=r[4].replace(/\./g, " ").trim()), t&&Object.entries(t).forEach(([a, l])=>{
    typeof l>"u"||(/^on\w+$/.test(a)?o[a]=l:a==="selected"?l&&o.setAttribute(a, "true"):o.setAttribute(a, l))
  }), o.append(...i), o
}
function Ct(n, e, ...t){
  return Joh(e4n.HTML, n, e, ...t)
}
function UBe(n, ...e){
  n?gv(...e):Ng(...e)
}
function gv(...n){
  for(const e of n)e.style.display="", e.removeAttribute("aria-hidden")
}
function Ng(...n){
  for(const e of n)e.style.display="none", e.setAttribute("aria-hidden", "true")
}
function Goh(n){
  return e=>{
    e.preventDefault(), e.stopPropagation(), n(e)
  }
}
function EiA(n){
  return new Promise(e=>{
    if(n.document.readyState==="complete"||n.document&&n.document.body!==null)e(void 0);
    else{
      const i=()=>{
        n.window.removeEventListener("DOMContentLoaded",i,!1),e()
      };
      n.window.addEventListener("DOMContentLoaded",i,!1)
    }
  })
}
function aFo(n, e){
  const t=n.devicePixelRatio*e;
  return Math.max(1, Math.floor(t))/n.devicePixelRatio
}
function ZFn(n){
  bi.open(n, "_blank", "noopener")
}
function Woh(n){
  const e=Math.floor(bi.screenLeft+bi.innerWidth/2-ekc/2), t=Math.floor(bi.screenTop+bi.innerHeight/2-tkc/2);
  bi.open(n, "_blank", `width=${ekc},height=${tkc},top=${t},left=${e}`)
}
function xiA(n, e=!0){
  const t=bi.open();
  return t?(e&&(t.opener=null), t.location.href=n, !0):!1
}
function Qoh(n, e){
  const t=()=>{
    e(), i=r_(n, t)
  };
  let i=r_(n, t);
  return $i(()=>i.dispose())
}
function TiA(n, e){
  let t;
  if(je.isUri(n))t=n.toString(!0);
  else{
    const s=new Blob([n]);
    t=URL.createObjectURL(s), setTimeout(()=>URL.revokeObjectURL(t))
  }
  const i=$c(), r=document.createElement("a");
  i.document.body.appendChild(r), r.download=e, r.href=t, r.click(), setTimeout(()=>r.remove())
}
function IiA(){
  return new Promise(n=>{
    const e=$c(), t=document.createElement("input");
    e.document.body.appendChild(t), t.type="file", t.multiple=!0, In.once(In.fromDOMEventEmitter(t, "input"))(()=>{
      n(t.files??void 0)
    }), t.click(), setTimeout(()=>t.remove())
  })
}
function VSc(n, e=!1){
  const t=document.createElement("a");
  return Rbe.addHook("afterSanitizeAttributes", i=>{
    for(const r of["href", "src"])if(i.hasAttribute(r)){
      const s=i.getAttribute(r);
      if(r==="href"&&s.startsWith("#"))continue;
      if(t.href=s,!n.includes(t.protocol.replace(/:$/,""))){
        if(e&&r==="src"&&t.href.startsWith("data:"))continue;
        i.removeAttribute(r)
      }
    }
  }), $i(()=>{
    Rbe.removeHook("afterSanitizeAttributes")
  })
}
function Ggt(n, e, t){
  const i=VSc(eah);
  try{
    const r=Rbe.sanitize(e, {
      ...tah,...t
    });
    n.innerHTML=r
  }
  finally{
    i.dispose()
  }
}
function DiA(n){
  const e=new Uint16Array(n.length);
  for(let r=0;
  r<e.length;
  r++)e[r]=n.charCodeAt(r);
  let t="";
  const i=new Uint8Array(e.buffer);
  for(let r=0;
  r<i.length;
  r++)t+=String.fromCharCode(i[r]);
  return t
}
function Wgt(n){
  return btoa(DiA(n))
}
function kl(n, ...e){
  let t, i;
  Array.isArray(e[0])?(t={
    
  }, i=e[0]):(t=e[0]||{
    
  }, i=e[1]);
  const r=ikc.exec(n);
  if(!r||!r.groups)throw new Error("Bad use of h");
  const s=r.groups.tag||"div", o=document.createElement(s);
  r.groups.id&&(o.id=r.groups.id);
  const a=[];
  if(r.groups.class)for(const u of r.groups.class.split("."))u!==""&&a.push(u);
  if(t.className!==void 0)for(const u of t.className.split("."))u!==""&&a.push(u);
  a.length>0&&(o.className=a.join(" "));
  const l={
    
  };
  if(r.groups.name&&(l[r.groups.name]=o), i)for(const u of i)wf(u)?o.appendChild(u):typeof u=="string"?o.append(u):"root"in u&&(Object.assign(l, u), o.appendChild(u.root));
  for(const[u, d]of Object.entries(t))if(u!=="className")if(u==="style")for(const[m, p]of Object.entries(d))o.style.setProperty(cFo(m), typeof p=="number"?p+"px":""+p);
  else u==="tabIndex"?o.tabIndex=d:o.setAttribute(cFo(u), d.toString());
  return l.root=o, l
}
function BiA(n, ...e){
  let t, i;
  Array.isArray(e[0])?(t={
    
  }, i=e[0]):(t=e[0]||{
    
  }, i=e[1]);
  const r=ikc.exec(n);
  if(!r||!r.groups)throw new Error("Bad use of h");
  const s=r.groups.tag||"div", o=document.createElementNS("http://www.w3.org/2000/svg", s);
  r.groups.id&&(o.id=r.groups.id);
  const a=[];
  if(r.groups.class)for(const u of r.groups.class.split("."))u!==""&&a.push(u);
  if(t.className!==void 0)for(const u of t.className.split("."))u!==""&&a.push(u);
  a.length>0&&(o.className=a.join(" "));
  const l={
    
  };
  if(r.groups.name&&(l[r.groups.name]=o), i)for(const u of i)wf(u)?o.appendChild(u):typeof u=="string"?o.append(u):"root"in u&&(Object.assign(l, u), o.appendChild(u.root));
  for(const[u, d]of Object.entries(t))if(u!=="className")if(u==="style")for(const[m, p]of Object.entries(d))o.style.setProperty(cFo(m), typeof p=="number"?p+"px":""+p);
  else u==="tabIndex"?o.tabIndex=d:o.setAttribute(cFo(u), d.toString());
  return l.root=o, l
}
function cFo(n){
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function KSc(n, e, t){
  for(const{
    name:i, value:r
  }
  of n.attributes)(!t||t.includes(i))&&e.setAttribute(i, r)
}
function RiA(n, e, t){
  const i=n.getAttribute(t);
  i?e.setAttribute(t, i):e.removeAttribute(t)
}
function YSc(n, e, t){
  KSc(n, e, t);
  const i=new Ut;
  return i.add(dFo.observe(n, i, {
    attributes:!0, attributeFilter:t
  })(r=>{
    for(const s of r)s.type==="attributes"&&s.attributeName&&RiA(n, e, s.attributeName)
  })), i
}
function dW(n){
  return n.tagName.toLowerCase()==="input"||n.tagName.toLowerCase()==="textarea"||wf(n)&&!!n.editContext
}
var joh, As, lFo, Obe, XFn, RH, Coe, Qgt, ez, zoh, Voh, Koh, _f, $Be, ZSc, T5e, I5e, r_, D5e, uFo, tz, Lu, XSc, dFo, ir, zu, Yoh, Zoh, e4n, ekc, tkc, Xoh, eah, nkc, tah, qBe, PH, ikc, rkc, ri=