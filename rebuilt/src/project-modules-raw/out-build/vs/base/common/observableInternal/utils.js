// Module: out-build/vs/base/common/observableInternal/utils.js
// Offset: 501576 (bundle byte offset)
// Size: 5292 bytes

GFn(), w5e(), y5e(), d4t(), f4t(), Fgt(), aoh=class extends NSc{
  constructor(n){
    super(), this.value=n
  }
  get debugName(){
    return this.toString()
  }
  get(){
    return this.value
  }
  addObserver(n){
    
  }
  removeObserver(n){
    
  }
  log(){
    return this
  }
  toString(){
    return`Const: ${this.value}`
  }
}, OBe=class extends Ogt{
  constructor(n, e, t, i, r){
    super(), this._debugNameData=n, this.event=e, this._getValue=t, this._getTransaction=i, this._equalityComparator=r, this._hasValue=!1, this.handleEvent=s=>{
      const o=this._getValue(s),a=this._value,l=!this._hasValue||!this._equalityComparator(a,o);
      let u=!1;
      l&&(this._value=o,this._hasValue&&(u=!0,h4t(this._getTransaction(),d=>{
        T6()?.handleObservableUpdated(this,{
          oldValue:a,newValue:o,change:void 0,didChange:l,hadValue:this._hasValue
        });
        for(const m of this._observers)d.updateObserver(m,this),m.handleChange(this,void 0)
      },()=>{
        const d=this.getDebugName();
        return"Event fired"+(d?`: ${d}`:"")
      })),this._hasValue=!0),u||T6()?.handleObservableUpdated(this,{
        oldValue:a,newValue:o,change:void 0,didChange:l,hadValue:this._hasValue
      })
    }
  }
  getDebugName(){
    return this._debugNameData.getDebugName(this)
  }
  get debugName(){
    const n=this.getDebugName();
    return"From Event"+(n?`: ${n}`:"")
  }
  onFirstObserverAdded(){
    this._subscription=this.event(this.handleEvent)
  }
  onLastObserverRemoved(){
    this._subscription.dispose(), this._subscription=void 0, this._hasValue=!1, this._value=void 0
  }
  get(){
    return this._subscription?(this._hasValue||this.handleEvent(void 0), this._value):this._getValue(void 0)
  }
  debugSetValue(n){
    this._value=n
  }
}, (function(n){
  n.Observer=OBe;
  function e(t, i){
    let r=!1;
    OBe.globalTransaction===void 0&&(OBe.globalTransaction=t, r=!0);
    try{
      i()
    }
    finally{
      r&&(OBe.globalTransaction=void 0)
    }
  }
  n.batchEventsGlobally=e
})(tp||(tp={
  
})), coh=class extends Ogt{
  constructor(n, e){
    super(), this.event=e, this.handleEvent=()=>{
      pp(t=>{
        for(const i of this._observers)t.updateObserver(i,this),i.handleChange(this,void 0)
      },()=>this.debugName)
    }, this.debugName=typeof n=="string"?n:n.getDebugName(this)??"Observable Signal From Event"
  }
  onFirstObserverAdded(){
    this.subscription=this.event(this.handleEvent)
  }
  onLastObserverRemoved(){
    this.subscription.dispose(), this.subscription=void 0
  }
  get(){
    
  }
}, USc=class extends Ogt{
  get debugName(){
    return new N4(this._owner, this._debugName, void 0).getDebugName(this)??"Observable Signal"
  }
  toString(){
    return this.debugName
  }
  constructor(n, e){
    super(), this._debugName=n, this._owner=e
  }
  trigger(n, e){
    if(!n){
      pp(t=>{
        this.trigger(t,e)
      },()=>`Trigger signal ${this.debugName}`);
      return
    }
    for(const t of this._observers)n.updateObserver(t, this), t.handleChange(this, e)
  }
  get(){
    
  }
}, MnA(b4t), NnA($gt), $Sc=class{
  constructor(n, e){
    this._forceRecompute=n, this._handleValue=e, this._counter=0
  }
  beginUpdate(n){
    this._counter++
  }
  endUpdate(n){
    this._counter===1&&this._forceRecompute&&(this._handleValue?this._handleValue(n.get()):n.reportChanges()), this._counter--
  }
  handlePossibleChange(n){
    
  }
  handleChange(n, e){
    
  }
}, qSc=class{
  constructor(n, e){
    this._map=n, this._keySelector=e, this._cache=new Map, this._items=[]
  }
  dispose(){
    this._cache.forEach(n=>n.store.dispose()), this._cache.clear()
  }
  setItems(n){
    const e=[], t=new Set(this._cache.keys());
    for(const i of n){
      const r=this._keySelector?this._keySelector(i):i;
      let s=this._cache.get(r);
      if(s)t.delete(r);
      else{
        const o=new Ut;
        s={
          out:this._map(i,o),store:o
        },this._cache.set(r,s)
      }
      e.push(s.out)
    }
    for(const i of t)this._cache.get(i).store.dispose(), this._cache.delete(i);
    this._items=e
  }
  getItems(){
    return this._items
  }
}, qgt=class{
  constructor(n){
    this.observable=n
  }
  get onDidChange(){
    return In.fromObservableLight(this.observable)
  }
  get value(){
    return this.observable.get()
  }
}
}
});
function KnA(n){
  eFo||(eFo=new HSc, RSc(eFo)), eFo.addFilteredObj(n)
}
function YnA(n){
  const e=new Array, t=[];
  let i="";
  function r(o){
    if("length"in o)for(const a of o)a&&r(a);
    else"text"in o?(i+=`%c${o.text}`, e.push(o.style), o.data&&t.push(...o.data)):"data"in o&&t.push(...o.data)
  }
  r(n);
  const s=[i, ...e];
  return s.push(...t), s
}
function v4t(n){
  return Fbe(n, {
    color:"black"
  })
}
function A4t(n){
  return Fbe(tiA(`${n}: `, 10), {
    color:"black", bold:!0
  })
}
function Fbe(n, e={
  color:"black"
}){
  function t(r){
    return Object.entries(r).reduce((s, [o, a])=>`${s}${o}:${a};`, "")
  }
  const i={
    color:e.color
  };
  return e.strikeThrough&&(i["text-decoration"]="line-through"), e.bold&&(i["font-weight"]="bold"), {
    text:n, style:t(i)
  }
}
function S5e(n, e){
  switch(typeof n){
    case"number":return""+n;
    case"string":return n.length+2<=e?`"${n}"`:`"${n.substr(0,e-7)}"+...`;
    case"boolean":return n?"true":"false";
    case"undefined":return"undefined";
    case"object":return n===null?"null":Array.isArray(n)?ZnA(n, e):XnA(n, e);
    case"symbol":return n.toString();
    case"function":return`[[Function${n.name?" "+n.name:""}]]`;
    default:return""+n
  }
}
function ZnA(n, e){
  let t="[ ", i=!0;
  for(const r of n){
    if(i||(t+=", "), t.length-5>e){
      t+="...";
      break
    }
    i=!1, t+=`${S5e(r,e-t.length)}`
  }
  return t+=" ]", t
}
function XnA(n, e){
  if(typeof n.toString=="function"&&n.toString!==Object.prototype.toString){
    const s=n.toString();
    return s.length<=e?s:s.substring(0, e-3)+"..."
  }
  const t=Qsh(n);
  let i=t?t+"(":"{ ", r=!0;
  for(const[s, o]of Object.entries(n)){
    if(r||(i+=", "), i.length-5>e){
      i+="...";
      break
    }
    r=!1, i+=`${s}: ${S5e(o,e-i.length)}`
  }
  return i+=t?")":" }", i
}
function eiA(n, e){
  let t="";
  for(let i=1;
  i<=e;
  i++)t+=n;
  return t
}
function tiA(n, e){
  for(;
  n.length<e;
  )n+=" ";
  return n
}
var eFo, HSc, loh=