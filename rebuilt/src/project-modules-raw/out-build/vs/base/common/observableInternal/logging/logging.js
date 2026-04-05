// Module: out-build/vs/base/common/observableInternal/logging/logging.js
// Offset: 480919 (bundle byte offset)
// Size: 1949 bytes

Z2o=void 0, PSc=class{
  constructor(n){
    this.loggers=n
  }
  handleObservableCreated(n){
    for(const e of this.loggers)e.handleObservableCreated(n)
  }
  handleOnListenerCountChanged(n, e){
    for(const t of this.loggers)t.handleOnListenerCountChanged(n, e)
  }
  handleObservableUpdated(n, e){
    for(const t of this.loggers)t.handleObservableUpdated(n, e)
  }
  handleAutorunCreated(n){
    for(const e of this.loggers)e.handleAutorunCreated(n)
  }
  handleAutorunDisposed(n){
    for(const e of this.loggers)e.handleAutorunDisposed(n)
  }
  handleAutorunDependencyChanged(n, e, t){
    for(const i of this.loggers)i.handleAutorunDependencyChanged(n, e, t)
  }
  handleAutorunStarted(n){
    for(const e of this.loggers)e.handleAutorunStarted(n)
  }
  handleAutorunFinished(n){
    for(const e of this.loggers)e.handleAutorunFinished(n)
  }
  handleDerivedDependencyChanged(n, e, t){
    for(const i of this.loggers)i.handleDerivedDependencyChanged(n, e, t)
  }
  handleDerivedCleared(n){
    for(const e of this.loggers)e.handleDerivedCleared(n)
  }
  handleBeginTransaction(n){
    for(const e of this.loggers)e.handleBeginTransaction(n)
  }
  handleEndTransaction(n){
    for(const e of this.loggers)e.handleEndTransaction(n)
  }
}
}
});
function NnA(n){
  Ksh=n
}
function MnA(n){
  Ysh=n
}
function FnA(n){
  LSc=n
}
function pp(n, e){
  const t=new Ugt(n, e);
  try{
    n(t)
  }
  finally{
    t.finish()
  }
}
function HFn(n){
  if(JFn)n(JFn);
  else{
    const e=new Ugt(n, void 0);
    JFn=e;
    try{
      n(e)
    }
    finally{
      e.finish(),JFn=void 0
    }
  }
}
async function Jze(n, e){
  const t=new Ugt(n, e);
  try{
    await n(t)
  }
  finally{
    t.finish()
  }
}
function h4t(n, e, t){
  n?e(n):pp(e, t)
}
function Vsh(n){
  const e=new Error("BugIndicatingErrorRecovery: "+n);
  Gc(e), console.error("recovered from an error that indicates a bug", e)
}
function Ua(n, e){
  let t;
  return typeof n=="string"?t=new N4(void 0, n, void 0):t=new N4(n, void 0, void 0), new Gze(t, e, Xj)
}
function m4t(n, e){
  let t;
  return typeof n=="string"?t=new N4(void 0, n, void 0):t=new N4(n, void 0, void 0), new Zsh(t, e, Xj)
}
var Ksh, Ysh, LSc, NSc, Ogt, JFn, Ugt, Gze, Zsh, w5e=