// Module: out-build/vs/workbench/contrib/cursorBlame/browser/cursorBlameEditor.js
// Offset: 34198438 (bundle byte offset)
// Size: 35711 bytes

qi(), zr(), Yn(), Wt(), kr(), Pa(), Io(), hB(), Ud(), xT(), fgy(), Qrt="workbench.editor.cursorblame", g1i=class{
  constructor(e){
    this.instantiationService=e
  }
  canSerialize(e){
    return e instanceof Sxe
  }
  serialize(e){
    if(e instanceof Sxe)return JSON.stringify({
      options:e.options
    })
  }
  deserialize(e, t){
    try{
      const{
        options:i
      }
      =JSON.parse(t);
      return e.createInstance(Sxe,i)
    }
    catch{
      return
    }
  }
}, g1i=__decorate([__param(0, ln)], g1i), Sxe=class Gto extends XS{
  static{
    this.ID="workbench.editor.cursorblame.input"
  }
  constructor(e){
    super(), this.options=e
  }
  get typeId(){
    return Gto.ID
  }
  get editorId(){
    return Qrt
  }
  get resource(){
    return je.from({
      scheme:_n.cursorBlame,path:`commit/${this.options.commitId}`
    })
  }
  get capabilities(){
    return 2
  }
  matches(e){
    return super.matches(e)?!0:e instanceof Gto?this.options.commitId===e.options.commitId:!(e instanceof XS)&&"resource"in e&&e.resource?e.resource.scheme===_n.cursorBlame&&e.resource.path===`commit/${this.options.commitId}`:!1
  }
  getName(){
    const e=this.options.displayId||this.options.commitId.substring(0, 7), t=this.options.subject, i=`${e}: ${t}`;
    return i.length<=50?i:i.substring(0, 47)+"..."
  }
  getTitle(e){
    const t=this.options.displayId||this.options.commitId.substring(0, 7), i=this.options.subject;
    if(e===2){
      const s=this.options.author?` by ${this.options.author}`:"";
      return`${t}: ${i}${s}`
    }
    const r=`${t}: ${i}`;
    return r.length<=50?r:r.substring(0, 47)+"..."
  }
  getIcon(){
    return Be.gitCommit
  }
  toJSON(){
    return{
      options:this.options
    }
  }
  toUntyped(){
    return{
      resource:this.resource,options:{
        override:Gto.ID,pinned:!0
      }
    }
  }
  copy(){
    return new Gto(this.options)
  }
}, _vn=class extends fD{
  static{
    UCu=this
  }
  static{
    this.ID=Qrt
  }
  constructor(e, t, i, r, s, o){
    super(UCu.ID, e, t, i, r), this._instantiationService=s, this._analyticsService=o
  }
  createEditor(e){
    
  }
  async setInput(e, t, i, r){
    await super.setInput(e, {
      ...t,pinned:!0
    }, i, r);
    const s=this.getContainer();
    if(!s)return;
    const o=this._currentCommitId!==e.options.commitId;
    (!this._solidDisposable||o)&&(this._solidDisposable?.dispose(), this._solidDisposable=void 0, s.replaceChildren(), this._currentCommitId=e.options.commitId, this._solidDisposable=uHf(s, this._instantiationService, e.options), this._analyticsService.trackEvent("cursor_blame.ai_details_opened")), this._inputDisposable?.dispose(), this._inputDisposable=e.onWillDispose(()=>{
      this._solidDisposable?.dispose(),this._solidDisposable=void 0
    })
  }
  layout(e){
    
  }
  dispose(){
    this._solidDisposable?.dispose(), this._solidDisposable=void 0, this._inputDisposable?.dispose(), super.dispose()
  }
}, _vn=UCu=__decorate([__param(1, ea), __param(2, bo), __param(3, Hi), __param(4, ln), __param(5, uh)], _vn)
}
});
function bgy(){
  return!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(kvn.userAgent)||/Macintosh/i.test(kvn.userAgent)&&kvn.maxTouchPoints&&kvn.maxTouchPoints>1||!isSecureContext)
}
function pBa(n, e){
  return{
    ...n, ...e, tags:{
      ...n.tags,...e.tags
    }, onFormOpen:()=>{
      e.onFormOpen?.(),n.onFormOpen?.()
    }, onFormClose:()=>{
      e.onFormClose?.(),n.onFormClose?.()
    }, onSubmitSuccess:(t, i)=>{
      e.onSubmitSuccess?.(t,i),n.onSubmitSuccess?.(t,i)
    }, onSubmitError:t=>{
      e.onSubmitError?.(t),n.onSubmitError?.(t)
    }, onFormSubmitted:()=>{
      e.onFormSubmitted?.(),n.onFormSubmitted?.()
    }, themeDark:{
      ...n.themeDark,...e.themeDark
    }, themeLight:{
      ...n.themeLight,...e.themeLight
    }
  }
}
function vgy(n){
  const e=CN.createElement("style");
  return e.textContent=`
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, n&&e.setAttribute("nonce", n), e
}
function gpe(n, e){
  return Object.entries(e).forEach(([t, i])=>{
    n.setAttributeNS(null, t, i)
  }), n
}
function Agy(){
  const n=a=>vwe.document.createElementNS(JHf, a), e=gpe(n("svg"), {
    width:`${JEt}`, height:`${JEt}`, viewBox:`0 0 ${JEt} ${JEt}`, fill:"var(--actor-color, var(--foreground))"
  }), t=gpe(n("g"), {
    clipPath:"url(#clip0_57_80)"
  }), i=gpe(n("path"), {
    "fill-rule":"evenodd", "clip-rule":"evenodd", d:"M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
  });
  e.appendChild(t).appendChild(i);
  const r=n("defs"), s=gpe(n("clipPath"), {
    id:"clip0_57_80"
  }), o=gpe(n("rect"), {
    width:`${JEt}`, height:`${JEt}`, fill:"white"
  });
  return s.appendChild(o), r.appendChild(s), e.appendChild(r).appendChild(s).appendChild(o), e
}
function ygy({
  triggerLabel:n, triggerAriaLabel:e, shadow:t, styleNonce:i
}){
  const r=CN.createElement("button");
  if(r.type="button", r.className="widget__actor", r.ariaHidden="false", r.ariaLabel=e||n||KCu, r.appendChild(Agy()), n){
    const o=CN.createElement("span");
    o.appendChild(CN.createTextNode(n)), r.appendChild(o)
  }
  const s=vgy(i);
  return{
    el:r, appendToDom(){
      t.appendChild(s),t.appendChild(r)
    }, removeFromDom(){
      r.remove(),s.remove()
    }, show(){
      r.ariaHidden="false"
    }, hide(){
      r.ariaHidden="true"
    }
  }
}
function dHf(n){
  return`
  --foreground: ${n.foreground};
  --background: ${n.background};
  --accent-foreground: ${n.accentForeground};
  --accent-background: ${n.accentBackground};
  --success-color: ${n.successColor};
  --error-color: ${n.errorColor};
  --border: ${n.border};
  --box-shadow: ${n.boxShadow};
  --outline: ${n.outline};
  --interactive-filter: ${n.interactiveFilter};
  `
}
function wgy({
  colorScheme:n, themeDark:e, themeLight:t, styleNonce:i
}){
  const r=CN.createElement("style");
  return r.textContent=`
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${n!=="system"?"color-scheme: only light;":""}

  ${dHf(n==="dark"?{...XCu,...e}:{...GHf,...t})}
}

${n==="system"?`
@media (prefers-color-scheme: dark) {
    
  :host {
      
    ${
        dHf({
          ...XCu,...e
        })
      }
      
  
    }
    

  }
  `:""}
}
`, i&&r.setAttribute("nonce", i), r
}
function _gy(){
  return sm()?.getIntegrationByName("Feedback")
}
function jrt(n, e){
  for(var t in e)n[t]=e[t];
  return n
}
function hHf(n){
  var e=n.parentNode;
  e&&e.removeChild(n)
}
function $1(n, e, t){
  var i, r, s, o={
    
  };
  for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];
  if(arguments.length>2&&(o.children=arguments.length>3?yBa.call(arguments, 2):t), typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)o[s]===void 0&&(o[s]=n.defaultProps[s]);
  return gBa(n, o, i, r, null)
}
function gBa(n, e, t, i, r){
  var s={
    type:n, props:e, key:t, ref:i, __k:null, __:null, __b:0, __e:null, __d:void 0, __c:null, constructor:void 0, __v:r??++WHf, __i:-1, __u:0
  };
  return r==null&&MM.vnode!=null&&MM.vnode(s), s
}
function f1i(n){
  return n.children
}
function fBa(n, e){
  this.props=n, this.context=e
}
function Cvn(n, e){
  if(e==null)return n.__?Cvn(n.__, n.__i+1):null;
  for(var t;
  e<n.__k.length;
  e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;
  return typeof n.type=="function"?Cvn(n):null
}
function Cgy(n, e, t){
  var i, r=n.__v, s=r.__e, o=n.__P;
  if(o)return(i=jrt({
    
  }, r)).__v=r.__v+1, MM.vnode&&MM.vnode(i), $Cu(o, i, r, n.__n, o.ownerSVGElement!==void 0, 32&r.__u?[s]:null, e, s??Cvn(r), !!(32&r.__u), t), i.__.__k[i.__i]=i, i.__d=void 0, i.__e!=s&&mHf(i), i
}
function mHf(n){
  var e, t;
  if((n=n.__)!=null&&n.__c!=null){
    for(n.__e=n.__c.base=null, e=0;
    e<n.__k.length;
    e++)if((t=n.__k[e])!=null&&t.__e!=null){
      n.__e=n.__c.base=t.__e;
      break
    }
    return mHf(n)
  }
}
function pHf(n){
  (!n.__d&&(n.__d=!0)&&GEt.push(n)&&!bBa.__r++||QHf!==MM.debounceRendering)&&((QHf=MM.debounceRendering)||jHf)(bBa)
}
function bBa(){
  var n, e, t, i=[], r=[];
  for(GEt.sort(tSu);
  n=GEt.shift();
  )n.__d&&(t=GEt.length, e=Cgy(n, i, r)||e, t===0||GEt.length>t?(qCu(i, e, r), r.length=i.length=0, e=void 0, GEt.sort(tSu)):e&&MM.__c&&MM.__c(e, wBa));
  e&&qCu(i, e, r), bBa.__r=0
}
function gHf(n, e, t, i, r, s, o, a, l, u, d){
  var m, p, g, f, A, w=i&&i.__k||wBa, C=e.length;
  for(t.__d=l, Sgy(t, e, w), l=t.__d, m=0;
  m<C;
  m++)(g=t.__k[m])!=null&&typeof g!="boolean"&&typeof g!="function"&&(p=g.__i===-1?Evn:w[g.__i]||Evn, g.__i=m, $Cu(n, g, p, r, s, o, a, l, u, d), f=g.__e, g.ref&&p.ref!=g.ref&&(p.ref&&HCu(p.ref, null, g), d.push(g.ref, g.__c||f, g)), A==null&&f!=null&&(A=f), 65536&g.__u||p.__k===g.__k?l=fHf(g, l, n):typeof g.type=="function"&&g.__d!==void 0?l=g.__d:f&&(l=f.nextSibling), g.__d=void 0, g.__u&=-196609);
  t.__d=l, t.__e=A
}
function Sgy(n, e, t){
  var i, r, s, o, a, l=e.length, u=t.length, d=u, m=0;
  for(n.__k=[], i=0;
  i<l;
  i++)(r=n.__k[i]=(r=e[i])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?gBa(null, r, null, null, r):_Ba(r)?gBa(f1i, {
    children:r
  }, null, null, null):r.constructor===void 0&&r.__b>0?gBa(r.type, r.props, r.key, r.ref?r.ref:null, r.__v):r)!=null?(r.__=n, r.__b=n.__b+1, a=kgy(r, t, o=i+m, d), r.__i=a, s=null, a!==-1&&(d--, (s=t[a])&&(s.__u|=131072)), s==null||s.__v===null?(a==-1&&m--, typeof r.type!="function"&&(r.__u|=65536)):a!==o&&(a===o+1?m++:a>o?d>l-o?m+=a-o:m--:m=a<o&&a==o-1?a-o:0, a!==i+m&&(r.__u|=65536))):(s=t[i])&&s.key==null&&s.__e&&(s.__e==n.__d&&(n.__d=Cvn(s)), JCu(s, s, !1), t[i]=null, d--);
  if(d)for(i=0;
  i<u;
  i++)(s=t[i])!=null&&(131072&s.__u)==0&&(s.__e==n.__d&&(n.__d=Cvn(s)), JCu(s, s))
}
function fHf(n, e, t){
  var i, r;
  if(typeof n.type=="function"){
    for(i=n.__k, r=0;
    i&&r<i.length;
    r++)i[r]&&(i[r].__=n, e=fHf(i[r], e, t));
    return e
  }
  n.__e!=e&&(t.insertBefore(n.__e, e||null), e=n.__e);
  do e=e&&e.nextSibling;
  while(e!=null&&e.nodeType===8);
  return e
}
function kgy(n, e, t, i){
  var r=n.key, s=n.type, o=t-1, a=t+1, l=e[t];
  if(l===null||l&&r==l.key&&s===l.type)return t;
  if(i>(l!=null&&(131072&l.__u)==0?1:0))for(;
  o>=0||a<e.length;
  ){
    if(o>=0){
      if((l=e[o])&&(131072&l.__u)==0&&r==l.key&&s===l.type)return o;
      o--
    }
    if(a<e.length){
      if((l=e[a])&&(131072&l.__u)==0&&r==l.key&&s===l.type)return a;
      a++
    }
  }
  return-1
}
function bHf(n, e, t){
  e[0]==="-"?n.setProperty(e, t??""):n[e]=t==null?"":typeof t!="number"||zHf.test(e)?t:t+"px"
}
function vBa(n, e, t, i, r){
  var s;
  e:if(e==="style")if(typeof t=="string")n.style.cssText=t;
  else{
    if(typeof i=="string"&&(n.style.cssText=i=""), i)for(e in i)t&&e in t||bHf(n.style, e, "");
    if(t)for(e in t)i&&t[e]===i[e]||bHf(n.style, e, t[e])
  }
  else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/i, "$1")), e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2), n.l||(n.l={
    
  }), n.l[e+s]=t, t?i?t.u=i.u:(t.u=Date.now(), n.addEventListener(e, s?AHf:vHf, s)):n.removeEventListener(e, s?AHf:vHf, s);
  else{
    if(r)e=e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in n)try{
      n[e]=t??"";
      break e
    }
    catch{
      
    }
    typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e, t))
  }
}
function vHf(n){
  if(this.l){
    var e=this.l[n.type+!1];
    if(n.t){
      if(n.t<=e.u)return
    }
    else n.t=Date.now();
    return e(MM.event?MM.event(n):n)
  }
}
function AHf(n){
  if(this.l)return this.l[n.type+!0](MM.event?MM.event(n):n)
}
function $Cu(n, e, t, i, r, s, o, a, l, u){
  var d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $=e.type;
  if(e.constructor!==void 0)return null;
  128&t.__u&&(l=!!(32&t.__u), s=[a=e.__e=t.__e]), (d=MM.__b)&&d(e);
  e:if(typeof $=="function")try{
    if(C=e.props, x=(d=$.contextType)&&i[d.__c], I=d?x?x.props.value:d.__:i, t.__c?w=(m=e.__c=t.__c).__=m.__E:("prototype"in $&&$.prototype.render?e.__c=m=new $(C, I):(e.__c=m=new fBa(C, I), m.constructor=$, m.render=xgy), x&&x.sub(m), m.props=C, m.state||(m.state={
      
    }), m.context=I, m.__n=i, p=m.__d=!0, m.__h=[], m._sb=[]), m.__s==null&&(m.__s=m.state), $.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=jrt({
      
    }, m.__s)), jrt(m.__s, $.getDerivedStateFromProps(C, m.__s))), g=m.props, f=m.state, m.__v=e, p)$.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(), m.componentDidMount!=null&&m.__h.push(m.componentDidMount);
    else{
      if($.getDerivedStateFromProps==null&&C!==g&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(C,I),!m.__e&&(m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(C,m.__s,I)===!1||e.__v===t.__v)){
        for(e.__v!==t.__v&&(m.props=C,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(H){
          H&&(H.__=e)
        }),B=0;
        B<m._sb.length;
        B++)m.__h.push(m._sb[B]);
        m._sb=[],m.__h.length&&o.push(m);
        break e
      }
      m.componentWillUpdate!=null&&m.componentWillUpdate(C,m.__s,I),m.componentDidUpdate!=null&&m.__h.push(function(){
        m.componentDidUpdate(g,f,A)
      })
    }
    if(m.context=I, m.props=C, m.__P=n, m.__e=!1, R=MM.__r, N=0, "prototype"in $&&$.prototype.render){
      for(m.state=m.__s,m.__d=!1,R&&R(e),d=m.render(m.props,m.state,m.context),M=0;
      M<m._sb.length;
      M++)m.__h.push(m._sb[M]);
      m._sb=[]
    }
    else do m.__d=!1, R&&R(e), d=m.render(m.props, m.state, m.context), m.state=m.__s;
    while(m.__d&&++N<25);
    m.state=m.__s, m.getChildContext!=null&&(i=jrt(jrt({
      
    }, i), m.getChildContext())), p||m.getSnapshotBeforeUpdate==null||(A=m.getSnapshotBeforeUpdate(g, f)), gHf(n, _Ba(O=d!=null&&d.type===f1i&&d.key==null?d.props.children:d)?O:[O], e, t, i, r, s, o, a, l, u), m.base=e.__e, e.__u&=-161, m.__h.length&&o.push(m), w&&(m.__E=m.__=null)
  }
  catch(H){
    e.__v=null, l||s!=null?(e.__e=a, e.__u|=l?160:32, s[s.indexOf(a)]=null):(e.__e=t.__e, e.__k=t.__k), MM.__e(H, e, t)
  }
  else s==null&&e.__v===t.__v?(e.__k=t.__k, e.__e=t.__e):e.__e=Egy(t.__e, e, t, i, r, s, o, l, u);
  (d=MM.diffed)&&d(e)
}
function qCu(n, e, t){
  for(var i=0;
  i<t.length;
  i++)HCu(t[i], t[++i], t[++i]);
  MM.__c&&MM.__c(e, n), n.some(function(r){
    try{
      n=r.__h,r.__h=[],n.some(function(s){
        s.call(r)
      })
    }
    catch(s){
      MM.__e(s,r.__v)
    }
  })
}
function Egy(n, e, t, i, r, s, o, a, l){
  var u, d, m, p, g, f, A, w=t.props, C=e.props, x=e.type;
  if(x==="svg"&&(r=!0), s!=null){
    for(u=0;
    u<s.length;
    u++)if((g=s[u])&&"setAttribute"in g==!!x&&(x?g.localName===x:g.nodeType===3)){
      n=g,s[u]=null;
      break
    }
  }
  if(n==null){
    if(x===null)return document.createTextNode(C);
    n=r?document.createElementNS("http://www.w3.org/2000/svg", x):document.createElement(x, C.is&&C), s=null, a=!1
  }
  if(x===null)w===C||a&&n.data===C||(n.data=C);
  else{
    if(s=s&&yBa.call(n.childNodes), w=t.props||Evn, !a&&s!=null)for(w={
      
    }, u=0;
    u<n.attributes.length;
    u++)w[(g=n.attributes[u]).name]=g.value;
    for(u in w)g=w[u], u=="children"||(u=="dangerouslySetInnerHTML"?m=g:u==="key"||u in C||vBa(n, u, null, g, r));
    for(u in C)g=C[u], u=="children"?p=g:u=="dangerouslySetInnerHTML"?d=g:u=="value"?f=g:u=="checked"?A=g:u==="key"||a&&typeof g!="function"||w[u]===g||vBa(n, u, g, w[u], r);
    if(d)a||m&&(d.__html===m.__html||d.__html===n.innerHTML)||(n.innerHTML=d.__html), e.__k=[];
    else if(m&&(n.innerHTML=""), gHf(n, _Ba(p)?p:[p], e, t, i, r&&x!=="foreignObject", s, o, s?s[0]:t.__k&&Cvn(t, 0), a, l), s!=null)for(u=s.length;
    u--;
    )s[u]!=null&&hHf(s[u]);
    a||(u="value", f!==void 0&&(f!==n[u]||x==="progress"&&!f||x==="option"&&f!==w[u])&&vBa(n, u, f, w[u], !1), u="checked", A!==void 0&&A!==n[u]&&vBa(n, u, A, w[u], !1))
  }
  return n
}
function HCu(n, e, t){
  try{
    typeof n=="function"?n(e):n.current=e
  }
  catch(i){
    MM.__e(i, t)
  }
}
function JCu(n, e, t){
  var i, r;
  if(MM.unmount&&MM.unmount(n), (i=n.ref)&&(i.current&&i.current!==n.__e||HCu(i, null, e)), (i=n.__c)!=null){
    if(i.componentWillUnmount)try{
      i.componentWillUnmount()
    }
    catch(s){
      MM.__e(s,e)
    }
    i.base=i.__P=null, n.__c=void 0
  }
  if(i=n.__k)for(r=0;
  r<i.length;
  r++)i[r]&&JCu(i[r], e, t||typeof n.type!="function");
  t||n.__e==null||hHf(n.__e), n.__=n.__e=n.__d=void 0
}
function xgy(n, e, t){
  return this.constructor(n, t)
}
function Tgy(n, e, t){
  var i, r, s, o;
  MM.__&&MM.__(n, e), r=(i=!1)?null:e.__k, s=[], o=[], $Cu(e, n=e.__k=$1(f1i, null, [n]), r||Evn, Evn, e.ownerSVGElement!==void 0, r?null:e.firstChild?yBa.call(e.childNodes):null, s, r?r.__e:e.firstChild, i, o), n.__d=void 0, qCu(s, n, o)
}
function qEt(n, e){
  yO.__h&&yO.__h(FM, n, WEt||e), WEt=0;
  var t=FM.__H||(FM.__H={
    __:[], __h:[]
  });
  return n>=t.__.length&&t.__.push({
    __V:A1i
  }), t.__[n]
}
function HEt(n){
  return WEt=1, yHf(_Hf, n)
}
function yHf(n, e, t){
  var i=qEt(T7e++, 2);
  if(i.t=n, !i.__c&&(i.__=[t?t(e):_Hf(void 0, e), function(a){
    var l=i.__N?i.__N[0]:i.__[0], u=i.t(l, a);
    l!==u&&(i.__N=[u, i.__[1]], i.__c.setState({
      
    }))
  }
  ], i.__c=FM, !FM.u)){
    var r=function(a, l, u){
      if(!i.__c.__H)return!0;
      var d=i.__c.__H.__.filter(function(p){
        return!!p.__c
      });
      if(d.every(function(p){
        return!p.__N
      }))return!s||s.call(this,a,l,u);
      var m=!1;
      return d.forEach(function(p){
        if(p.__N){
          var g=p.__[0];
          p.__=p.__N,p.__N=void 0,g!==p.__[0]&&(m=!0)
        }
      }),!(!m&&i.__c.props===a)&&(!s||s.call(this,a,l,u))
    };
    FM.u=!0;
    var s=FM.shouldComponentUpdate, o=FM.componentWillUpdate;
    FM.componentWillUpdate=function(a, l, u){
      if(this.__e){
        var d=s;
        s=void 0,r(a,l,u),s=d
      }
      o&&o.call(this,a,l,u)
    }, FM.shouldComponentUpdate=r
  }
  return i.__N||i.__
}
function Igy(n, e){
  var t=qEt(T7e++, 3);
  !yO.__s&&WCu(t.__H, e)&&(t.__=n, t.i=e, FM.__H.__h.push(t))
}
function wHf(n, e){
  var t=qEt(T7e++, 4);
  !yO.__s&&WCu(t.__H, e)&&(t.__=n, t.i=e, FM.__h.push(t))
}
function Dgy(n){
  return WEt=5, b1i(function(){
    return{
      current:n
    }
  }, [])
}
function Bgy(n, e, t){
  WEt=6, wHf(function(){
    return typeof n=="function"?(n(e()), function(){
      return n(null)
    }):n?(n.current=e(), function(){
      return n.current=null
    }):void 0
  }, t==null?t:t.concat(n))
}
function b1i(n, e){
  var t=qEt(T7e++, 7);
  return WCu(t.__H, e)?(t.__V=n(), t.i=e, t.__h=n, t.__V):t.__
}
function Svn(n, e){
  return WEt=8, b1i(function(){
    return n
  }, e)
}
function Rgy(n){
  var e=FM.context[n.__c], t=qEt(T7e++, 9);
  return t.c=n, e?(t.__==null&&(t.__=!0, e.sub(FM)), e.props.value):n.__
}
function Pgy(n, e){
  yO.useDebugValue&&yO.useDebugValue(e?e(n):n)
}
function Lgy(n){
  var e=qEt(T7e++, 10), t=HEt();
  return e.__=n, FM.componentDidCatch||(FM.componentDidCatch=function(i, r){
    e.__&&e.__(i, r), t[1](i)
  }), [t[0], function(){
    t[1](void 0)
  }
  ]
}
function Ngy(){
  var n=qEt(T7e++, 11);
  if(!n.__){
    for(var e=FM.__v;
    e!==null&&!e.__m&&e.__!==null;
    )e=e.__;
    var t=e.__m||(e.__m=[0, 0]);
    n.__="P"+t[0]+"-"+t[1]++
  }
  return n.__
}
function Mgy(){
  for(var n;
  n=iSu.shift();
  )if(n.__P&&n.__H)try{
    n.__H.__h.forEach(ABa), n.__H.__h.forEach(GCu), n.__H.__h=[]
  }
  catch(e){
    n.__H.__h=[], yO.__e(e, n.__v)
  }
}
function Fgy(n){
  var e, t=function(){
    clearTimeout(i), uSu&&cancelAnimationFrame(e), setTimeout(n)
  }, i=setTimeout(t, 100);
  uSu&&(e=requestAnimationFrame(t))
}
function ABa(n){
  var e=FM, t=n.__c;
  typeof t=="function"&&(n.__c=void 0, t()), FM=e
}
function GCu(n){
  var e=FM;
  n.__c=n.__(), FM=e
}
function WCu(n, e){
  return!n||n.length!==e.length||e.some(function(t, i){
    return t!==n[i]
  })
}
function _Hf(n, e){
  return typeof e=="function"?e(n):e
}
function Ogy(){
  const n=i=>CN.createElementNS(YHf, i), e=gpe(n("svg"), {
    width:"32", height:"30", viewBox:"0 0 72 66", fill:"inherit"
  }), t=gpe(n("path"), {
    transform:"translate(11, 11)", d:"M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
  });
  return e.appendChild(t), e
}
function Ugy({
  options:n
}){
  const e=b1i(()=>({
    __html:Ogy().outerHTML
  }), []);
  return $1("h2", {
    class:"dialog__header"
  }, $1("span", {
    class:"dialog__title"
  }, n.formTitle), n.showBranding?$1("a", {
    class:"brand-link", target:"_blank", href:"https://sentry.io/welcome/", title:"Powered by Sentry", rel:"noopener noreferrer", dangerouslySetInnerHTML:e
  }):null)
}
function $gy(n, e){
  const t=[];
  return e.isNameRequired&&!n.name&&t.push(e.nameLabel), e.isEmailRequired&&!n.email&&t.push(e.emailLabel), n.message||t.push(e.messageLabel), t
}
function QCu(n, e){
  const t=n.get(e);
  return typeof t=="string"?t.trim():""
}
function qgy({
  options:n, defaultEmail:e, defaultName:t, onFormClose:i, onSubmit:r, onSubmitSuccess:s, onSubmitError:o, showEmail:a, showName:l, screenshotInput:u
}){
  const{
    tags:d, addScreenshotButtonLabel:m, removeScreenshotButtonLabel:p, cancelButtonLabel:g, emailLabel:f, emailPlaceholder:A, isEmailRequired:w, isNameRequired:C, messageLabel:x, messagePlaceholder:I, nameLabel:B, namePlaceholder:R, submitButtonLabel:N, isRequiredLabel:M
  }
  =n, [O, $]=HEt(!1), [H, W]=HEt(null), [z, Y]=HEt(!1), j=u?.input, [X, ee]=HEt(null), re=Svn(le=>{
    ee(le), Y(!1)
  }, []), ne=Svn(le=>{
    const he=$gy(le, {
      emailLabel:f,isEmailRequired:w,isNameRequired:C,messageLabel:x,nameLabel:B
    });
    return he.length>0?W(`Please enter in the following required fields: ${he.join(", ")}`):W(null), he.length===0
  }, [f, w, C, x, B]), pe=Svn(async le=>{
    $(!0);
    try{
      if(le.preventDefault(),!(le.target instanceof HTMLFormElement))return;
      const he=new FormData(le.target),be=await(u&&z?u.value():void 0),fe={
        name:QCu(he,"name"),email:QCu(he,"email"),message:QCu(he,"message"),attachments:be?[be]:void 0
      };
      if(!ne(fe))return;
      try{
        const ke=await r({
          name:fe.name,email:fe.email,message:fe.message,source:$Hf,tags:d
        },{
          attachments:fe.attachments
        });
        s(fe,ke)
      }
      catch(ke){
        v1i&&Jo.error(ke),W(ke),o(ke)
      }
    }
    finally{
      $(!1)
    }
  }, [u&&z, s, o]);
  return $1("form", {
    class:"form", onSubmit:pe
  }, j&&z?$1(j, {
    onError:re
  }):null, $1("fieldset", {
    class:"form__right", "data-sentry-feedback":!0, disabled:O
  }, $1("div", {
    class:"form__top"
  }, H?$1("div", {
    class:"form__error-container"
  }, H):null, l?$1("label", {
    for:"name", class:"form__label"
  }, $1(jCu, {
    label:B, isRequiredLabel:M, isRequired:C
  }), $1("input", {
    class:"form__input", defaultValue:t, id:"name", name:"name", placeholder:R, required:C, type:"text"
  })):$1("input", {
    "aria-hidden":!0, value:t, name:"name", type:"hidden"
  }), a?$1("label", {
    for:"email", class:"form__label"
  }, $1(jCu, {
    label:f, isRequiredLabel:M, isRequired:w
  }), $1("input", {
    class:"form__input", defaultValue:e, id:"email", name:"email", placeholder:A, required:w, type:"email"
  })):$1("input", {
    "aria-hidden":!0, value:e, name:"email", type:"hidden"
  }), $1("label", {
    for:"message", class:"form__label"
  }, $1(jCu, {
    label:x, isRequiredLabel:M, isRequired:!0
  }), $1("textarea", {
    autoFocus:!0, class:"form__input form__input--textarea", id:"message", name:"message", placeholder:I, required:!0, rows:5
  })), j?$1("label", {
    for:"screenshot", class:"form__label"
  }, $1("button", {
    class:"btn btn--default", disabled:O, type:"button", onClick:()=>{
      ee(null),Y(le=>!le)
    }
  }, z?p:m), X?$1("div", {
    class:"form__error-container"
  }, X.message):null):null), $1("div", {
    class:"btn-group"
  }, $1("button", {
    class:"btn btn--primary", disabled:O, type:"submit"
  }, N), $1("button", {
    class:"btn btn--default", disabled:O, type:"button", onClick:i
  }, g))))
}
function jCu({
  label:n, isRequired:e, isRequiredLabel:t
}){
  return $1("span", {
    class:"form__label__text"
  }, n, e&&$1("span", {
    class:"form__label__text--required"
  }, t))
}
function Hgy(){
  const n=l=>vwe.document.createElementNS(ZHf, l), e=gpe(n("svg"), {
    width:`${y1i}`, height:`${dSu}`, viewBox:`0 0 ${y1i} ${dSu}`, fill:"inherit"
  }), t=gpe(n("g"), {
    clipPath:"url(#clip0_57_156)"
  }), i=gpe(n("path"), {
    "fill-rule":"evenodd", "clip-rule":"evenodd", d:"M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
  }), r=gpe(n("path"), {
    d:"M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
  });
  e.appendChild(t).append(r, i);
  const s=n("defs"), o=gpe(n("clipPath"), {
    id:"clip0_57_156"
  }), a=gpe(n("rect"), {
    width:`${y1i}`, height:`${y1i}`, fill:"white", transform:"translate(0 0.5)"
  });
  return o.appendChild(a), s.appendChild(o), e.appendChild(s).appendChild(o).appendChild(a), e
}
function Jgy({
  open:n, onFormSubmitted:e, ...t
}){
  const i=t.options, r=b1i(()=>({
    __html:Hgy().outerHTML
  }), []), [s, o]=HEt(null), a=Svn(()=>{
    s&&(clearTimeout(s), o(null)), e()
  }, [s]), l=Svn((u, d)=>{
    t.onSubmitSuccess(u, d), o(setTimeout(()=>{
      e(),o(null)
    }, HHf))
  }, [e]);
  return $1(f1i, null, s?$1("div", {
    class:"success__position", onClick:a
  }, $1("div", {
    class:"success__content"
  }, i.successMessageText, $1("span", {
    class:"success__icon", dangerouslySetInnerHTML:r
  }))):$1("dialog", {
    class:"dialog", onClick:i.onFormClose, open:n
  }, $1("div", {
    class:"dialog__position"
  }, $1("div", {
    class:"dialog__content", onClick:u=>{
      u.stopPropagation()
    }
  }, $1(Ugy, {
    options:i
  }), $1(qgy, {
    ...t, onSubmitSuccess:l
  })))))
}
function Ggy(n){
  const e=CN.createElement("style");
  return e.textContent=`
:host {
  --dialog-inset: var(--inset);
}

${XHf}
${eJf}
${tJf}
${nJf}
${iJf}
`, n&&e.setAttribute("nonce", n), e
}
function Wgy(){
  const n=ry().getUser(), e=MB().getUser(), t=ode().getUser();
  return n&&Object.keys(n).length?n:e&&Object.keys(e).length?e:t
}
function Qgy({
  h:n
}){
  return function(){
    return n("svg", {
      "data-test-id":"icon-close",viewBox:"0 0 16 16",fill:"#2B2233",height:"25px",width:"25px"
    }, n("circle", {
      r:"7",cx:"8",cy:"8",fill:"white"
    }), n("path", {
      strokeWidth:"1.5",d:"M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
    }), n("path", {
      strokeWidth:"1.5",d:"M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
    }), n("path", {
      strokeWidth:"1.5",d:"M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
    }))
  }
}
function jgy(n){
  const e=CN.createElement("style"), t="#1A141F", i="#302735";
  return e.textContent=`
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${t};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${t} 8px,
      ${t} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${i} 15px,
      ${i} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, n&&e.setAttribute("nonce", n), e
}
function zgy({
  h:n
}){
  return function({
    action:t, setAction:i, options:r
  }){
    return n("div", {
      class:"editor__tool-container"
    }, n("div", {
      class:"editor__tool-bar"
    }, n("button", {
      type:"button",class:`editor__tool ${t==="highlight"?"editor__tool--active":""}`,onClick:()=>{
        i(t==="highlight"?"":"highlight")
      }
    }, r.highlightToolText), n("button", {
      type:"button",class:`editor__tool ${t==="hide"?"editor__tool--active":""}`,onClick:()=>{
        i(t==="hide"?"":"hide")
      }
    }, r.hideToolText)))
  }
}
function Vgy({
  hooks:n
}){
  function e(){
    const[t, i]=n.useState(vwe.devicePixelRatio??1);
    return n.useEffect(()=>{
      const r=()=>{
        i(vwe.devicePixelRatio)
      },s=matchMedia(`(resolution: ${vwe.devicePixelRatio}dppx)`);
      return s.addEventListener("change",r),()=>{
        s.removeEventListener("change",r)
      }
    }, []), t
  }
  return function({
    onBeforeScreenshot:i, onScreenshot:r, onAfterScreenshot:s, onError:o
  }){
    const a=e();
    n.useEffect(()=>{
      (async()=>{
        i();
        const u=await kvn.mediaDevices.getDisplayMedia({
          video:{
            width:vwe.innerWidth*a,height:vwe.innerHeight*a
          },audio:!1,monitorTypeSurfaces:"exclude",preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"
        }),d=CN.createElement("video");
        await new Promise((m,p)=>{
          d.srcObject=u,d.onloadedmetadata=()=>{
            r(d,a),u.getTracks().forEach(g=>g.stop()),m()
          },d.play().catch(p)
        }),s()
      })().catch(o)
    }, [])
  }
}
function Kgy(n, e, t){
  switch(n.type){
    case"highlight":{
      e.shadowColor="rgba(0, 0, 0, 0.7)",e.shadowBlur=50,e.fillStyle=t,e.fillRect(n.x-1,n.y-1,n.w+2,n.h+2),e.clearRect(n.x,n.y,n.w,n.h);
      break
    }
    case"hide":e.fillStyle="rgb(0, 0, 0)", e.fillRect(n.x, n.y, n.w, n.h);
    break
  }
}
function zrt(n, e, t){
  if(!n)return;
  const i=n.getContext("2d", e);
  i&&t(n, i)
}
function zCu(n, e){
  zrt(n, {
    alpha:!0
  }, (t, i)=>{
    i.drawImage(e, 0, 0, e.width, e.height, 0, 0, t.width, t.height)
  })
}
function VCu(n, e, t){
  zrt(n, {
    alpha:!0
  }, (i, r)=>{
    t.length&&(r.fillStyle="rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, i.width, i.height)), t.forEach(s=>{
      Kgy(s,r,e)
    })
  })
}
function Ygy({
  h:n, hooks:e, outputBuffer:t, dialog:i, options:r
}){
  const s=Vgy({
    hooks:e
  }), o=zgy({
    h:n
  }), a=Qgy({
    h:n
  }), l={
    __html:jgy(r.styleNonce).innerText
  }, u=i.el.style, d=({
    screenshot:m
  })=>{
    const[p, g]=e.useState("highlight"), [f, A]=e.useState([]), w=e.useRef(null), C=e.useRef(null), x=e.useRef(null), I=e.useRef(null), [B, R]=e.useState(1), N=e.useMemo(()=>{
      const z=CN.getElementById(r.id);
      if(!z)return"white";
      const Y=getComputedStyle(z);
      return Y.getPropertyValue("--button-primary-background")||Y.getPropertyValue("--accent-background")
    }, [r.id]);
    e.useLayoutEffect(()=>{
      const z=()=>{
        const Y=w.current;
        Y&&(zrt(m.canvas,{
          alpha:!1
        },j=>{
          const X=Math.min(Y.clientWidth/j.width,Y.clientHeight/j.height);
          R(X)
        }),(Y.clientHeight===0||Y.clientWidth===0)&&setTimeout(z,0))
      };
      return z(),vwe.addEventListener("resize",z),()=>{
        vwe.removeEventListener("resize",z)
      }
    }, [m]);
    const M=e.useCallback((z, Y)=>{
      zrt(z,{
        alpha:!0
      },(j,X)=>{
        X.scale(Y,Y),j.width=m.canvas.width,j.height=m.canvas.height
      })
    }, [m]);
    e.useEffect(()=>{
      M(C.current,m.dpi),zCu(C.current,m.canvas)
    }, [m]), e.useEffect(()=>{
      M(x.current,m.dpi),zrt(x.current,{
        alpha:!0
      },(z,Y)=>{
        Y.clearRect(0,0,z.width,z.height)
      }),VCu(x.current,N,f)
    }, [f, N]), e.useEffect(()=>{
      M(t,m.dpi),zCu(t,m.canvas),zrt(CN.createElement("canvas"),{
        alpha:!0
      },(z,Y)=>{
        Y.scale(m.dpi,m.dpi),z.width=m.canvas.width,z.height=m.canvas.height,VCu(z,N,f),zCu(t,z)
      })
    }, [f, m, N]);
    const O=z=>{
      if(!p||!I.current)return;
      const Y=I.current.getBoundingClientRect(),j={
        type:p,x:z.offsetX/B,y:z.offsetY/B
      },X=(ne,pe)=>{
        const le=(pe.clientX-Y.x)/B,he=(pe.clientY-Y.y)/B;
        return{
          type:ne.type,x:Math.min(ne.x,le),y:Math.min(ne.y,he),w:Math.abs(le-ne.x),h:Math.abs(he-ne.y)
        }
      },ee=ne=>{
        zrt(x.current,{
          alpha:!0
        },(pe,le)=>{
          le.clearRect(0,0,pe.width,pe.height)
        }),VCu(x.current,N,[...f,X(j,ne)])
      },re=ne=>{
        const pe=X(j,ne);
        pe.w*B>=1&&pe.h*B>=1&&A(le=>[...le,pe]),CN.removeEventListener("mousemove",ee),CN.removeEventListener("mouseup",re)
      };
      CN.addEventListener("mousemove",ee),CN.addEventListener("mouseup",re)
    }, $=e.useCallback(z=>Y=>{
      Y.preventDefault(),Y.stopPropagation(),A(j=>{
        const X=[...j];
        return X.splice(z,1),X
      })
    }, []), H={
      width:`${m.canvas.width*B}px`,height:`${m.canvas.height*B}px`
    }, W=z=>{
      z.stopPropagation()
    };
    return n("div", {
      class:"editor"
    }, n("style", {
      nonce:r.styleNonce,dangerouslySetInnerHTML:l
    }), n("div", {
      class:"editor__image-container"
    }, n("div", {
      class:"editor__canvas-container",ref:w
    }, n("canvas", {
      ref:C,id:"background",style:H
    }), n("canvas", {
      ref:x,id:"foreground",style:H
    }), n("div", {
      ref:I,onMouseDown:O,style:H
    }, f.map((z, Y)=>n("div", {
      key:Y,class:"editor__rect",style:{
        top:`${z.y*B}px`,left:`${z.x*B}px`,width:`${z.w*B}px`,height:`${z.h*B}px`
      }
    }, n("button", {
      "aria-label":r.removeHighlightText,onClick:$(Y),onMouseDown:W,onMouseUp:W,type:"button"
    }, n(a, null))))))), n(o, {
      options:r,action:p,setAction:g
    }))
  };
  return function({
    onError:p
  }){
    const[g, f]=e.useState();
    return s({
      onBeforeScreenshot:e.useCallback(()=>{
        u.display="none"
      },[]),onScreenshot:e.useCallback((A,w)=>{
        zrt(CN.createElement("canvas"),{
          alpha:!1
        },(C,x)=>{
          x.scale(w,w),C.width=A.videoWidth,C.height=A.videoHeight,x.drawImage(A,0,0,C.width,C.height),f({
            canvas:C,dpi:w
          })
        }),t.width=A.videoWidth,t.height=A.videoHeight
      },[]),onAfterScreenshot:e.useCallback(()=>{
        u.display="block"
      },[]),onError:e.useCallback(A=>{
        u.display="block",p(A)
      },[])
    }), g?n(d, {
      screenshot:g
    }):n("div", null)
  }
}
var vwe, CN, kvn, KCu, CHf, SHf, kHf, EHf, xHf, THf, IHf, DHf, BHf, RHf, PHf, LHf, NHf, MHf, FHf, OHf, UHf, $Hf, qHf, HHf, YCu, v1i, JEt, JHf, ZCu, GHf, XCu, eSu, yBa, MM, WHf, GEt, QHf, jHf, tSu, Evn, wBa, zHf, _Ba, T7e, FM, nSu, VHf, WEt, iSu, A1i, yO, rSu, sSu, oSu, aSu, cSu, lSu, uSu, KHf, YHf, y1i, dSu, ZHf, XHf, eJf, tJf, nJf, iJf, rJf, sJf, hSu=