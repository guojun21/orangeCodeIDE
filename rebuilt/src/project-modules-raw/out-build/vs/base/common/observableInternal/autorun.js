// Module: out-build/vs/base/common/observableInternal/autorun.js
// Offset: 489388 (bundle byte offset)
// Size: 3572 bytes

y5e(), d4t(), Fgt(), (function(n){
  n[n.dependenciesMightHaveChanged=1]="dependenciesMightHaveChanged", n[n.stale=2]="stale", n[n.upToDate=3]="upToDate"
})(eoh||(eoh={
  
})), g4t=class{
  get debugName(){
    return this._debugNameData.getDebugName(this)??"(anonymous)"
  }
  constructor(n, e, t, i){
    this._debugNameData=n, this._runFn=e, this.createChangeSummary=t, this._handleChange=i, this._state=2, this._updateCount=0, this._disposed=!1, this._dependencies=new Set, this._dependenciesToBeRemoved=new Set, this._isRunning=!1, this._changeSummary=this.createChangeSummary?.(), T6()?.handleAutorunCreated(this), this._run(), tgt(this)
  }
  dispose(){
    if(!this._disposed){
      this._disposed=!0;
      for(const n of this._dependencies)n.removeObserver(this);
      this._dependencies.clear(),T6()?.handleAutorunDisposed(this),ngt(this)
    }
  }
  _run(){
    const n=this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved=this._dependencies, this._dependencies=n, this._state=3;
    try{
      if(!this._disposed){
        T6()?.handleAutorunStarted(this);
        const e=this._changeSummary;
        try{
          this._changeSummary=this.createChangeSummary?.(),this._isRunning=!0,this._runFn(this,e)
        }
        catch(t){
          IMo(t)
        }
        finally{
          this._isRunning=!1
        }
      }
    }
    finally{
      this._disposed||T6()?.handleAutorunFinished(this);
      for(const e of this._dependenciesToBeRemoved)e.removeObserver(this);
      this._dependenciesToBeRemoved.clear()
    }
  }
  toString(){
    return`Autorun<${this.debugName}>`
  }
  beginUpdate(n){
    this._state===3&&(this._state=1), this._updateCount++
  }
  endUpdate(n){
    try{
      if(this._updateCount===1)do{
        if(this._state===1){
          this._state=3;
          for(const e of this._dependencies)if(e.reportChanges(),this._state===2)break
        }
        this._state!==3&&this._run()
      }
      while(this._state!==3)
    }
    finally{
      this._updateCount--
    }
    _te(()=>this._updateCount>=0)
  }
  handlePossibleChange(n){
    this._state===3&&this._isDependency(n)&&(this._state=1)
  }
  handleChange(n, e){
    if(this._isDependency(n)){
      T6()?.handleAutorunDependencyChanged(this,n,e);
      try{
        (this._handleChange?this._handleChange({
          changedObservable:n,change:e,didChange:i=>i===n
        },this._changeSummary):!0)&&(this._state=2)
      }
      catch(t){
        IMo(t)
      }
    }
  }
  _isDependency(n){
    return this._dependencies.has(n)&&!this._dependenciesToBeRemoved.has(n)
  }
  readObservable(n){
    if(!this._isRunning)throw new _m("The reader object cannot be used outside its compute function!");
    if(this._disposed)return n.get();
    n.addObserver(this);
    const e=n.get();
    return this._dependencies.add(n), this._dependenciesToBeRemoved.delete(n), e
  }
  debugGetState(){
    return{
      isRunning:this._isRunning,updateCount:this._updateCount,dependencies:this._dependencies,state:this._state
    }
  }
  debugRerun(){
    this._isRunning?this._state=2:this._run()
  }
}, (function(n){
  n.Observer=g4t
})(Oc||(Oc={
  
}))
}
});
function Ro(n, e){
  return e!==void 0?new TY(new N4(n, void 0, e), e, void 0, void 0, void 0, Xj):new TY(new N4(void 0, void 0, n), n, void 0, void 0, void 0, Xj)
}
function MSc(n, e, t){
  return new noh(new N4(n, void 0, e), e, void 0, void 0, void 0, Xj, t)
}
function uF(n, e){
  return new TY(new N4(n.owner, n.debugName, n.debugReferenceFn), e, void 0, void 0, n.onLastObserverRemoved, n.equalsFn??Xj)
}
function FSc(n, e){
  return new TY(new N4(n.owner, n.debugName, void 0), e, n.createEmptyChangeSummary, n.handleChange, void 0, n.equalityComparer??Xj)
}
function Ite(n, e){
  let t, i;
  e===void 0?(t=n, i=void 0):(i=n, t=e);
  let r=new Ut;
  return new TY(new N4(i, void 0, t), s=>(r.isDisposed?r=new Ut:r.clear(), t(s, r)), void 0, void 0, ()=>r.dispose(), Xj)
}
function wde(n, e){
  let t, i;
  e===void 0?(t=n, i=void 0):(i=n, t=e);
  let r;
  return new TY(new N4(i, void 0, t), s=>{
    r?r.clear():r=new Ut;
    const o=t(s);
    return o&&r.add(o), o
  }, void 0, void 0, ()=>{
    r&&(r.dispose(), r=void 0)
  }, Xj)
}
var toh, TY, noh, f4t=