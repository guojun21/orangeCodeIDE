// Module: out-build/vs/platform/quickinput/browser/quickAccess.js
// Offset: 27604936 (bundle byte offset)
// Size: 3504 bytes

vr(), Po(), yn(), rt(), Wt(), eX(), Kl(), Ws(), $vi=class extends at{
  constructor(e, t){
    super(), this.quickInputService=e, this.instantiationService=t, this.registry=Di.as(kJ.Quickaccess), this.mapProviderToDescriptor=new Map, this.lastAcceptedPickerValues=new Map, this.visibleQuickAccess=void 0
  }
  pick(e="", t){
    return this.doShowOrPick(e, !0, t)
  }
  show(e="", t){
    this.doShowOrPick(e, !1, t)
  }
  doShowOrPick(e, t, i){
    const[r, s]=this.getOrInstantiateProvider(e, i?.enabledProviderPrefixes), o=this.visibleQuickAccess, a=o?.descriptor;
    if(o&&s&&a===s){
      e!==s.prefix&&!i?.preserveValue&&(o.picker.value=e),this.adjustValueSelection(o.picker,s,i);
      return
    }
    if(s&&!i?.preserveValue){
      let f;
      if(o&&a&&a!==s){
        const A=o.value.substr(a.prefix.length);
        A&&(f=`${s.prefix}${A}`)
      }
      if(!f){
        const A=r?.defaultFilterValue;
        A===vmn.LAST?f=this.lastAcceptedPickerValues.get(s):typeof A=="string"&&(f=`${s.prefix}${A}`)
      }
      typeof f=="string"&&(e=f)
    }
    const l=o?.picker?.valueSelection, u=o?.picker?.value, d=new Ut, m=d.add(this.quickInputService.createQuickPick({
      useSeparators:!0
    }));
    m.value=e, this.adjustValueSelection(m, s, i), m.placeholder=i?.placeholder??s?.placeholder, m.quickNavigate=i?.quickNavigateConfiguration, m.hideInput=!!m.quickNavigate&&!o, (typeof i?.itemActivation=="number"||i?.quickNavigateConfiguration)&&(m.itemActivation=i?.itemActivation??IW.SECOND), m.contextKey=s?.contextKey, m.filterValue=f=>f.substring(s?s.prefix.length:0);
    let p;
    t&&(p=new wy, d.add(In.once(m.onWillAccept)(f=>{
      f.veto(),m.hide()
    }))), d.add(this.registerPickerListeners(m, r, s, e, i));
    const g=d.add(new Wc);
    if(r&&d.add(r.provide(m, g.token, i?.providerOptions)), In.once(m.onDidHide)(()=>{
      m.selectedItems.length===0&&g.cancel(),d.dispose(),p?.complete(m.selectedItems.slice(0))
    }), m.show(), l&&u===e&&(m.valueSelection=l), t)return p?.p
  }
  adjustValueSelection(e, t, i){
    let r;
    i?.preserveValue?r=[e.value.length, e.value.length]:r=[t?.prefix.length??0, e.value.length], e.valueSelection=r
  }
  registerPickerListeners(e, t, i, r, s){
    const o=new Ut, a=this.visibleQuickAccess={
      picker:e,descriptor:i,value:r
    };
    return o.add($i(()=>{
      a===this.visibleQuickAccess&&(this.visibleQuickAccess=void 0)
    })), o.add(e.onDidChangeValue(l=>{
      const[u]=this.getOrInstantiateProvider(l,s?.enabledProviderPrefixes);
      u!==t?this.show(l,{
        enabledProviderPrefixes:s?.enabledProviderPrefixes,preserveValue:!0,providerOptions:s?.providerOptions
      }):a.value=l
    })), i&&o.add(e.onDidAccept(()=>{
      this.lastAcceptedPickerValues.set(i,e.value)
    })), o
  }
  getOrInstantiateProvider(e, t){
    const i=this.registry.getQuickAccessProvider(e);
    if(!i||t&&!t?.includes(i.prefix))return[void 0, void 0];
    let r=this.mapProviderToDescriptor.get(i);
    return r||(r=this.instantiationService.createInstance(i.ctor), this.mapProviderToDescriptor.set(i, r)), [r, i]
  }
}, $vi=__decorate([__param(0, ha), __param(1, ln)], $vi)
}
});
function aFA(n){
  return!!n.forwardPort
}
function Gfa(n){
  if(n.scheme!=="http"&&n.scheme!=="https")return;
  const e=/^(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/.exec(n.authority);
  if(e)return{
    address:e[1], port:+e[2]
  }
}
function cFA(n){
  if(n.scheme!=="http"&&n.scheme!=="https"||!n.query)return;
  const e=n.query.split("&");
  for(const t of e){
    const i=t.split("=")[1];
    if(/^https?:/.exec(i)){
      const r=Gfa(je.parse(i));
      if(r)return r
    }
  }
}
function int(n){
  return Amn.indexOf(n)>=0
}
function rnt(n){
  return qvi.indexOf(n)>=0
}
function lFA(n, e, t, i){
  if(t===1)return!1;
  if(t===2&&rnt(e)){
    const r=/(\d+)\.(\d+)\.(\d+)/g.exec(i);
    if(r?.length===4&&parseInt(r[1])>=18)return!1
  }
  return n<1024
}
var D2, uFA, Z3, tX, snt, Amn, qvi, BJg, Wfa, hQ=