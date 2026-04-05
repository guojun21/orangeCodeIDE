// Module: out-build/vs/base/common/observableInternal/logging/consoleObservableLogger.js
// Offset: 506868 (bundle byte offset)
// Size: 3096 bytes

f4t(), Fgt(), y5e(), HSc=class{
  constructor(){
    this.indentation=0, this.changedObservablesSets=new WeakMap
  }
  addFilteredObj(n){
    this._filteredObjects||(this._filteredObjects=new Set), this._filteredObjects.add(n)
  }
  _isIncluded(n){
    return this._filteredObjects?.has(n)??!0
  }
  textToConsoleArgs(n){
    return YnA([v4t(eiA("|  ", this.indentation)), n])
  }
  formatInfo(n){
    return n.hadValue?n.didChange?[v4t(" "), Fbe(S5e(n.oldValue, 70), {
      color:"red",strikeThrough:!0
    }), v4t(" "), Fbe(S5e(n.newValue, 60), {
      color:"green"
    })]:[v4t(" (unchanged)")]:[v4t(" "), Fbe(S5e(n.newValue, 60), {
      color:"green"
    }), v4t(" (initial)")]
  }
  handleObservableCreated(n){
    if(n instanceof TY){
      const e=n;
      if(this.changedObservablesSets.set(e,new Set),!1){
        const i=[];
        e.__debugUpdating=i;
        const r=e.beginUpdate;
        e.beginUpdate=o=>(i.push(o),r.apply(e,[o]));
        const s=e.endUpdate;
        e.endUpdate=o=>{
          const a=i.indexOf(o);
          return a===-1&&console.error("endUpdate called without beginUpdate",e.debugName,o.debugName),i.splice(a,1),s.apply(e,[o])
        }
      }
    }
  }
  handleOnListenerCountChanged(n, e){
    
  }
  handleObservableUpdated(n, e){
    if(this._isIncluded(n)){
      if(n instanceof TY){
        this._handleDerivedRecomputed(n,e);
        return
      }
      console.log(...this.textToConsoleArgs([A4t("observable value changed"),Fbe(n.debugName,{
        color:"BlueViolet"
      }),...this.formatInfo(e)]))
    }
  }
  formatChanges(n){
    if(n.size!==0)return Fbe(" (changed deps: "+[...n].map(e=>e.debugName).join(", ")+")", {
      color:"gray"
    })
  }
  handleDerivedDependencyChanged(n, e, t){
    this._isIncluded(n)&&this.changedObservablesSets.get(n)?.add(e)
  }
  _handleDerivedRecomputed(n, e){
    if(!this._isIncluded(n))return;
    const t=this.changedObservablesSets.get(n);
    t&&(console.log(...this.textToConsoleArgs([A4t("derived recomputed"), Fbe(n.debugName, {
      color:"BlueViolet"
    }), ...this.formatInfo(e), this.formatChanges(t), {
      data:[{
        fn:n._debugNameData.referenceFn??n._computeFn
      }
      ]
    }
    ])), t.clear())
  }
  handleDerivedCleared(n){
    this._isIncluded(n)&&console.log(...this.textToConsoleArgs([A4t("derived cleared"), Fbe(n.debugName, {
      color:"BlueViolet"
    })]))
  }
  handleFromEventObservableTriggered(n, e){
    this._isIncluded(n)&&console.log(...this.textToConsoleArgs([A4t("observable from event triggered"), Fbe(n.debugName, {
      color:"BlueViolet"
    }), ...this.formatInfo(e), {
      data:[{
        fn:n._getValue
      }
      ]
    }
    ]))
  }
  handleAutorunCreated(n){
    this._isIncluded(n)&&this.changedObservablesSets.set(n, new Set)
  }
  handleAutorunDisposed(n){
    
  }
  handleAutorunDependencyChanged(n, e, t){
    this._isIncluded(n)&&this.changedObservablesSets.get(n).add(e)
  }
  handleAutorunStarted(n){
    const e=this.changedObservablesSets.get(n);
    e&&(this._isIncluded(n)&&console.log(...this.textToConsoleArgs([A4t("autorun"), Fbe(n.debugName, {
      color:"BlueViolet"
    }), this.formatChanges(e), {
      data:[{
        fn:n._debugNameData.referenceFn??n._runFn
      }
      ]
    }
    ])), e.clear(), this.indentation++)
  }
  handleAutorunFinished(n){
    this.indentation--
  }
  handleBeginTransaction(n){
    let e=n.getDebugName();
    e===void 0&&(e=""), this._isIncluded(n)&&console.log(...this.textToConsoleArgs([A4t("transaction"), Fbe(e, {
      color:"BlueViolet"
    }), {
      data:[{
        fn:n._fn
      }
      ]
    }
    ])), this.indentation++
  }
  handleEndTransaction(){
    this.indentation--
  }
}
}
}), uoh, niA=