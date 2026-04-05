// Module: out-build/vs/base/common/observableInternal/derived.js
// Offset: 492960 (bundle byte offset)
// Size: 4558 bytes

w5e(), y5e(), d4t(), Fgt(), FnA(uF), (function(n){
  n[n.initial=0]="initial", n[n.dependenciesMightHaveChanged=1]="dependenciesMightHaveChanged", n[n.stale=2]="stale", n[n.upToDate=3]="upToDate"
})(toh||(toh={
  
})), TY=class extends Ogt{
  get debugName(){
    return this._debugNameData.getDebugName(this)??"(anonymous)"
  }
  constructor(n, e, t, i, r=void 0, s){
    super(), this._debugNameData=n, this._computeFn=e, this.createChangeSummary=t, this._handleChange=i, this._handleLastObserverRemoved=r, this._equalityComparator=s, this._state=0, this._value=void 0, this._updateCount=0, this._dependencies=new Set, this._dependenciesToBeRemoved=new Set, this._changeSummary=void 0, this._isUpdating=!1, this._isComputing=!1, this._removedObserverToCallEndUpdateOn=null, this._isReaderValid=!1, this._changeSummary=this.createChangeSummary?.()
  }
  onLastObserverRemoved(){
    this._state=0, this._value=void 0, T6()?.handleDerivedCleared(this);
    for(const n of this._dependencies)n.removeObserver(this);
    this._dependencies.clear(), this._handleLastObserverRemoved?.()
  }
  get(){
    if(this._isComputing, this._observers.size===0){
      let e;
      try{
        this._isReaderValid=!0,e=this._computeFn(this,this.createChangeSummary?.())
      }
      finally{
        this._isReaderValid=!1
      }
      return this.onLastObserverRemoved(),e
    }
    else{
      do{
        if(this._state===1){
          for(const e of this._dependencies)if(e.reportChanges(),this._state===2)break
        }
        this._state===1&&(this._state=3),this._state!==3&&this._recompute()
      }
      while(this._state!==3);
      return this._value
    }
  }
  _recompute(){
    const n=this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved=this._dependencies, this._dependencies=n;
    const e=this._state!==0, t=this._value;
    this._state=3;
    let i=!1;
    this._isComputing=!0;
    try{
      const r=this._changeSummary;
      this._changeSummary=this.createChangeSummary?.();
      try{
        this._isReaderValid=!0,this._value=this._computeFn(this,r)
      }
      finally{
        this._isReaderValid=!1;
        for(const s of this._dependenciesToBeRemoved)s.removeObserver(this);
        this._dependenciesToBeRemoved.clear()
      }
      i=e&&!this._equalityComparator(t,this._value),T6()?.handleObservableUpdated(this,{
        oldValue:t,newValue:this._value,change:void 0,didChange:i,hadValue:e
      })
    }
    catch(r){
      IMo(r)
    }
    if(this._isComputing=!1, i)for(const r of this._observers)r.handleChange(this, void 0)
  }
  toString(){
    return`LazyDerived<${this.debugName}>`
  }
  beginUpdate(n){
    if(this._isUpdating)throw new _m("Cyclic deriveds are not supported yet!");
    this._updateCount++, this._isUpdating=!0;
    try{
      const e=this._updateCount===1;
      if(this._state===3&&(this._state=1,!e))for(const t of this._observers)t.handlePossibleChange(this);
      if(e)for(const t of this._observers)t.beginUpdate(this)
    }
    finally{
      this._isUpdating=!1
    }
  }
  endUpdate(n){
    if(this._updateCount--, this._updateCount===0){
      const e=[...this._observers];
      for(const t of e)t.endUpdate(this);
      if(this._removedObserverToCallEndUpdateOn){
        const t=[...this._removedObserverToCallEndUpdateOn];
        this._removedObserverToCallEndUpdateOn=null;
        for(const i of t)i.endUpdate(this)
      }
    }
    _te(()=>this._updateCount>=0)
  }
  handlePossibleChange(n){
    if(this._state===3&&this._dependencies.has(n)&&!this._dependenciesToBeRemoved.has(n)){
      this._state=1;
      for(const e of this._observers)e.handlePossibleChange(this)
    }
  }
  handleChange(n, e){
    if(this._dependencies.has(n)&&!this._dependenciesToBeRemoved.has(n)){
      T6()?.handleDerivedDependencyChanged(this,n,e);
      let t=!1;
      try{
        t=this._handleChange?this._handleChange({
          changedObservable:n,change:e,didChange:r=>r===n
        },this._changeSummary):!0
      }
      catch(r){
        IMo(r)
      }
      const i=this._state===3;
      if(t&&(this._state===1||i)&&(this._state=2,i))for(const r of this._observers)r.handlePossibleChange(this)
    }
  }
  readObservable(n){
    if(!this._isReaderValid)throw new _m("The reader object cannot be used outside its compute function!");
    n.addObserver(this);
    const e=n.get();
    return this._dependencies.add(n), this._dependenciesToBeRemoved.delete(n), e
  }
  addObserver(n){
    const e=!this._observers.has(n)&&this._updateCount>0;
    super.addObserver(n), e&&(this._removedObserverToCallEndUpdateOn&&this._removedObserverToCallEndUpdateOn.has(n)?this._removedObserverToCallEndUpdateOn.delete(n):n.beginUpdate(this))
  }
  removeObserver(n){
    this._observers.has(n)&&this._updateCount>0&&(this._removedObserverToCallEndUpdateOn||(this._removedObserverToCallEndUpdateOn=new Set), this._removedObserverToCallEndUpdateOn.add(n)), super.removeObserver(n)
  }
  debugGetState(){
    return{
      state:this._state,updateCount:this._updateCount,isComputing:this._isComputing,dependencies:this._dependencies,value:this._value
    }
  }
  debugSetValue(n){
    this._value=n
  }
}, noh=class extends TY{
  constructor(n, e, t, i, r=void 0, s, o){
    super(n, e, t, i, r, s), this.set=o
  }
}
}
}), ioh, _de, WFn, roh, JnA=