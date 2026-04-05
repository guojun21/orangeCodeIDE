// Module: out-build/vs/editor/common/services/languageFeatureDebounce.js
// Offset: 4196880 (bundle byte offset)
// Size: 1887 bytes

iw(), cu(), sE(), qg(), Er(), Wt(), jr(), zr(), ene=xi("ILanguageFeatureDebounceService"), (function(n){
  const e=new WeakMap;
  let t=0;
  function i(r){
    let s=e.get(r);
    return s===void 0&&(s=++t, e.set(r, s)), s
  }
  n.of=i
})(s$o||(s$o={
  
})), mJh=class{
  constructor(n){
    this._default=n
  }
  get(n){
    return this._default
  }
  update(n, e){
    return this._default
  }
  default(){
    return this._default
  }
}, pJh=class{
  constructor(n, e, t, i, r, s){
    this._logService=n, this._name=e, this._registry=t, this._default=i, this._min=r, this._max=s, this._cache=new Fb(50, .7)
  }
  _key(n){
    return n.id+this._registry.all(n).reduce((e, t)=>_Se(s$o.of(t), e), 0)
  }
  get(n){
    const e=this._key(n), t=this._cache.get(e);
    return t?zA(t.value, this._min, this._max):this.default()
  }
  update(n, e){
    const t=this._key(n);
    let i=this._cache.get(t);
    i||(i=new csh(6), this._cache.set(t, i));
    const r=zA(i.update(e), this._min, this._max);
    return OR(n.uri, "output")||this._logService.trace(`[DEBOUNCE: ${this._name}] for ${n.uri.toString()} is ${r}ms`), r
  }
  _overall(){
    const n=new _Fn;
    for(const[, e]of this._cache)n.update(e.value);
    return n.value
  }
  default(){
    const n=this._overall()|0||this._default;
    return zA(n, this._min, this._max)
  }
}, o$o=class{
  constructor(e, t){
    this._logService=e, this._data=new Map, this._isDev=t.isExtensionDevelopment||!t.isBuilt
  }
  for(e, t, i){
    const r=i?.min??50, s=i?.max??r**2, o=i?.key??void 0, a=`${s$o.of(e)},${r}${o?","+o:""}`;
    let l=this._data.get(a);
    return l||(this._isDev?(this._logService.debug(`[DEBOUNCE: ${t}] is disabled in developed mode`), l=new mJh(r*1.5)):l=new pJh(this._logService, t, e, this._overallAverage()|0||r*1.5, r, s), this._data.set(a, l)), l
  }
  _overallAverage(){
    const e=new _Fn;
    for(const t of this._data.values())e.update(t.default());
    return e.value
  }
}, o$o=__decorate([__param(0, Rr), __param(1, lg)], o$o), Vi(ene, o$o, 1)
}
});
function Bvt(n){
  w5c.push(n)
}
function XvA(){
  return w5c.slice(0)
}
var w5c, Rvt=