// Module: out-build/vs/platform/log/common/log.js
// Offset: 660142 (bundle byte offset)
// Size: 6945 bytes

Ht(), mk(), yn(), iw(), rt(), cu(), _r(), Yr(), Js(), Yn(), si(), Wt(), Rr=xi("logService"), YP=xi("loggerService"), (function(n){
  n[n.Off=0]="Off", n[n.Trace=1]="Trace", n[n.Debug=2]="Debug", n[n.Info=3]="Info", n[n.Warning=4]="Warning", n[n.Error=5]="Error"
})(Ju||(Ju={
  
})), a4n=Ju.Info, Ygt=class extends at{
  constructor(){
    super(...arguments), this.level=a4n, this._onDidChangeLogLevel=this._register(new Qe), this.onDidChangeLogLevel=this._onDidChangeLogLevel.event
  }
  setLevel(n){
    this.level!==n&&(this.level=n, this._onDidChangeLogLevel.fire(this.level))
  }
  getLevel(){
    return this.level
  }
  checkLogLevel(n){
    return Ekc(this.level, n)
  }
  canLog(n){
    return this._store.isDisposed?!1:this.checkLogLevel(n)
  }
}, Tkc=class extends Ygt{
  constructor(n){
    super(), this.logAlways=n
  }
  checkLogLevel(n){
    return this.logAlways||super.checkLogLevel(n)
  }
  trace(n, ...e){
    this.canLog(Ju.Trace)&&this.log(Ju.Trace, L4t([n, ...e], !0))
  }
  debug(n, ...e){
    this.canLog(Ju.Debug)&&this.log(Ju.Debug, L4t([n, ...e]))
  }
  info(n, ...e){
    this.canLog(Ju.Info)&&this.log(Ju.Info, L4t([n, ...e]))
  }
  warn(n, ...e){
    this.canLog(Ju.Warning)&&this.log(Ju.Warning, L4t([n, ...e]))
  }
  error(n, ...e){
    if(this.canLog(Ju.Error))if(n instanceof Error){
      const t=Array.prototype.slice.call(arguments);
      t[0]=n.stack,this.log(Ju.Error,L4t(t))
    }
    else this.log(Ju.Error, L4t([n, ...e]))
  }
  flush(){
    
  }
}, Vah=class extends Ygt{
  constructor(n=a4n, e=!0){
    super(), this.useColors=e, this.setLevel(n)
  }
  trace(n, ...e){
    this.canLog(Ju.Trace)&&(this.useColors?console.log("%cTRACE", "color: #888", n, ...e):console.log(n, ...e))
  }
  debug(n, ...e){
    this.canLog(Ju.Debug)&&(this.useColors?console.log("%cDEBUG", "background: #eee; color: #888", n, ...e):console.log(n, ...e))
  }
  info(n, ...e){
    this.canLog(Ju.Info)&&(this.useColors?console.log("%c INFO", "color: #33f", n, ...e):console.log(n, ...e))
  }
  warn(n, ...e){
    this.canLog(Ju.Warning)&&(this.useColors?console.warn("%c WARN", "color: #993", n, ...e):console.log(n, ...e))
  }
  error(n, ...e){
    this.canLog(Ju.Error)&&(this.useColors?console.error("%c  ERR", "color: #f33", n, ...e):console.error(n, ...e))
  }
  flush(){
    
  }
}, Kah=class extends Ygt{
  constructor(n, e=a4n){
    super(), this.adapter=n, this.setLevel(e)
  }
  trace(n, ...e){
    this.canLog(Ju.Trace)&&this.adapter.log(Ju.Trace, [this.extractMessage(n), ...e])
  }
  debug(n, ...e){
    this.canLog(Ju.Debug)&&this.adapter.log(Ju.Debug, [this.extractMessage(n), ...e])
  }
  info(n, ...e){
    this.canLog(Ju.Info)&&this.adapter.log(Ju.Info, [this.extractMessage(n), ...e])
  }
  warn(n, ...e){
    this.canLog(Ju.Warning)&&this.adapter.log(Ju.Warning, [this.extractMessage(n), ...e])
  }
  error(n, ...e){
    this.canLog(Ju.Error)&&this.adapter.log(Ju.Error, [this.extractMessage(n), ...e])
  }
  extractMessage(n){
    return typeof n=="string"?n:Jw(n, this.canLog(Ju.Trace))
  }
  flush(){
    
  }
}, Yah=class extends Ygt{
  constructor(n){
    super(), this.loggers=n, n.length&&this.setLevel(n[0].getLevel())
  }
  setLevel(n){
    for(const e of this.loggers)e.setLevel(n);
    super.setLevel(n)
  }
  trace(n, ...e){
    for(const t of this.loggers)t.trace(n, ...e)
  }
  debug(n, ...e){
    for(const t of this.loggers)t.debug(n, ...e)
  }
  info(n, ...e){
    for(const t of this.loggers)t.info(n, ...e)
  }
  warn(n, ...e){
    for(const t of this.loggers)t.warn(n, ...e)
  }
  error(n, ...e){
    for(const t of this.loggers)t.error(n, ...e)
  }
  flush(){
    for(const n of this.loggers)n.flush()
  }
  dispose(){
    for(const n of this.loggers)n.dispose();
    super.dispose()
  }
}, Zah=class extends at{
  constructor(n, e, t){
    if(super(), this.logLevel=n, this.logsHome=e, this._loggers=new fu, this._onDidChangeLoggers=this._register(new Qe), this.onDidChangeLoggers=this._onDidChangeLoggers.event, this._onDidChangeLogLevel=this._register(new Qe), this.onDidChangeLogLevel=this._onDidChangeLogLevel.event, this._onDidChangeVisibility=this._register(new Qe), this.onDidChangeVisibility=this._onDidChangeVisibility.event, t)for(const i of t)this._loggers.set(i.resource, {
      logger:void 0,info:i
    })
  }
  getLoggerEntry(n){
    return Qo(n)?[...this._loggers.values()].find(e=>e.info.id===n):this._loggers.get(n)
  }
  getLogger(n){
    return this.getLoggerEntry(n)?.logger
  }
  createLogger(n, e){
    const t=this.toResource(n), i=Qo(n)?n:e?.id??VC(t.toString()).toString(16);
    let r=this._loggers.get(t)?.logger;
    const s=e?.logLevel==="always"?Ju.Trace:e?.logLevel;
    r||(r=this.doCreateLogger(t, s??this.getLogLevel(t)??this.logLevel, {
      ...e,id:i
    }));
    const o={
      logger:r,info:{
        resource:t,id:i,logLevel:s,name:e?.name,hidden:e?.hidden,group:e?.group,extensionId:e?.extensionId,when:e?.when
      }
    };
    return this.registerLogger(o.info), this._loggers.set(t, o), r
  }
  toResource(n){
    return Qo(n)?Wo(this.logsHome, `${n}.log`):n
  }
  setLogLevel(n, e){
    if(je.isUri(n)){
      const t=n,i=e,r=this._loggers.get(t);
      r&&i!==r.info.logLevel&&(r.info.logLevel=i===this.logLevel?void 0:i,r.logger?.setLevel(i),this._loggers.set(r.info.resource,r),this._onDidChangeLogLevel.fire([t,i]))
    }
    else{
      this.logLevel=n;
      for(const[t,i]of this._loggers.entries())this._loggers.get(t)?.info.logLevel===void 0&&i.logger?.setLevel(this.logLevel);
      this._onDidChangeLogLevel.fire(this.logLevel)
    }
  }
  setVisibility(n, e){
    const t=this.getLoggerEntry(n);
    t&&e!==!t.info.hidden&&(t.info.hidden=!e, this._loggers.set(t.info.resource, t), this._onDidChangeVisibility.fire([t.info.resource, e]))
  }
  getLogLevel(n){
    let e;
    return n&&(e=this._loggers.get(n)?.info.logLevel), e??this.logLevel
  }
  registerLogger(n){
    const e=this._loggers.get(n.resource);
    e?e.info.hidden!==n.hidden&&this.setVisibility(n.resource, !n.hidden):(this._loggers.set(n.resource, {
      info:n,logger:void 0
    }), this._onDidChangeLoggers.fire({
      added:[n],removed:[]
    }))
  }
  deregisterLogger(n){
    const e=this.toResource(n), t=this._loggers.get(e);
    t&&(t.logger&&t.logger.dispose(), this._loggers.delete(e), this._onDidChangeLoggers.fire({
      added:[],removed:[t.info]
    }))
  }
  *getRegisteredLoggers(){
    for(const n of this._loggers.values())yield n.info
  }
  getRegisteredLogger(n){
    return this._loggers.get(n)?.info
  }
  dispose(){
    this._loggers.forEach(n=>n.logger?.dispose()), this._loggers.clear(), super.dispose()
  }
}, Xah=class{
  constructor(){
    this.onDidChangeLogLevel=new Qe().event
  }
  setLevel(n){
    
  }
  getLevel(){
    return Ju.Info
  }
  trace(n, ...e){
    
  }
  debug(n, ...e){
    
  }
  info(n, ...e){
    
  }
  warn(n, ...e){
    
  }
  error(n, ...e){
    
  }
  critical(n, ...e){
    
  }
  dispose(){
    
  }
  flush(){
    
  }
}, ech=class extends Xah{
  
}, tch=new Sn("logLevel", Hbe(Ju.Info))
}
});
function RY(n, e){
  Ss.registerCommand(n, function(t, ...i){
    const r=t.get(ln), [s, o]=i;
    Kd(je.isUri(s)), Kd(ar.isIPosition(o));
    const a=t.get(Il).getModel(s);
    if(a){
      const l=ar.lift(o);
      return r.invokeFunction(e,a,l,...i.slice(2))
    }
    return t.get(El).createModelReference(s).then(l=>new Promise((u, d)=>{
      try{
        const m=r.invokeFunction(e,l.object.textEditorModel,ar.lift(o),i.slice(2));
        u(m)
      }
      catch(m){
        d(m)
      }
    }).finally(()=>{
      l.dispose()
    }))
  })
}
function ld(n){
  return Sde.INSTANCE.registerEditorCommand(n), n
}
function ac(n){
  const e=new n;
  return Sde.INSTANCE.registerEditorAction(e), e
}
function nch(n){
  return Sde.INSTANCE.registerEditorAction(n), n
}
function XiA(n){
  Sde.INSTANCE.registerEditorAction(n)
}
function Mg(n, e, t){
  Sde.INSTANCE.registerEditorContribution(n, e, t)
}
function ich(n, e){
  Sde.INSTANCE.registerDiffEditorContribution(n, e)
}
function c4n(n){
  return n.register(), n
}
var rch, l4n, N5e, Ikc, dF, vu, Dkc, xx, SC, sch, Sde, M5e, F5e, Bkc, Cu=