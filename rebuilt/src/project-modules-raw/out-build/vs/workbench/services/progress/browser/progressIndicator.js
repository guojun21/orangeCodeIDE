// Module: out-build/vs/workbench/services/progress/browser/progressIndicator.js
// Offset: 30845747 (bundle byte offset)
// Size: 4183 bytes

yn(), rt(), Xg(), Tpu=class extends at{
  constructor(n, e){
    super(), this.progressBar=n, this.group=e, this.registerListeners()
  }
  registerListeners(){
    this.group&&this._register(this.group.onDidModelChange(n=>{
      (n.kind===8||n.kind===6&&this.group&&this.group.isEmpty)&&this.progressBar.stop().hide()
    }))
  }
  show(n, e){
    return this.group&&this.group.isEmpty?EIc:n===!0?this.doShow(!0, e):this.doShow(n, e)
  }
  doShow(n, e){
    return typeof n=="boolean"?this.progressBar.infinite().show(e):this.progressBar.total(n).show(e), {
      total:t=>{
        this.progressBar.total(t)
      },worked:t=>{
        this.progressBar.hasTotal()?this.progressBar.worked(t):this.progressBar.infinite().show()
      },done:()=>{
        this.progressBar.stop().hide()
      }
    }
  }
  async showWhile(n, e){
    if(this.group&&this.group.isEmpty)try{
      await n
    }
    catch{
      
    }
    return this.doShowWhile(n, e)
  }
  async doShowWhile(n, e){
    try{
      this.progressBar.infinite().show(e),await n
    }
    catch{
      
    }
    finally{
      this.progressBar.stop().hide()
    }
  }
}, (function(n){
  let e;
  (function(r){
    r[r.None=0]="None", r[r.Done=1]="Done", r[r.Infinite=2]="Infinite", r[r.While=3]="While", r[r.Work=4]="Work"
  })(e=n.Type||(n.Type={
    
  })), n.None={
    type:0
  }, n.Done={
    type:1
  }, n.Infinite={
    type:2
  };
  class t{
    constructor(s, o, a){
      this.whilePromise=s,this.whileStart=o,this.whileDelay=a,this.type=3
    }
  }
  n.While=t;
  class i{
    constructor(s, o){
      this.total=s,this.worked=o,this.type=4
    }
  }
  n.Work=i
})(Hye||(Hye={
  
})), sCa=class extends at{
  constructor(n, e){
    super(), this.progressBar=n, this.scope=e, this.progressState=Hye.None, this.registerListeners()
  }
  registerListeners(){
    this._register(this.scope.onDidChangeActive(()=>{
      this.scope.isActive?this.onDidScopeActivate():this.onDidScopeDeactivate()
    }))
  }
  onDidScopeActivate(){
    if(this.progressState.type!==Hye.Done.type)if(this.progressState.type===3){
      let n;
      if(this.progressState.whileDelay>0){
        const e=this.progressState.whileDelay-(Date.now()-this.progressState.whileStart);
        e>0&&(n=e)
      }
      this.doShowWhile(n)
    }
    else this.progressState.type===2?this.progressBar.infinite().show():this.progressState.type===4&&(this.progressState.total&&this.progressBar.total(this.progressState.total).show(), this.progressState.worked&&this.progressBar.worked(this.progressState.worked).show())
  }
  onDidScopeDeactivate(){
    this.progressBar.stop().hide()
  }
  show(n, e){
    return typeof n=="boolean"?this.progressState=Hye.Infinite:this.progressState=new Hye.Work(n, void 0), this.scope.isActive&&(this.progressState.type===2?this.progressBar.infinite().show(e):this.progressState.type===4&&typeof this.progressState.total=="number"&&this.progressBar.total(this.progressState.total).show(e)), {
      total:t=>{
        this.progressState=new Hye.Work(t,this.progressState.type===4?this.progressState.worked:void 0),this.scope.isActive&&this.progressBar.total(t)
      },worked:t=>{
        !this.scope.isActive||this.progressBar.hasTotal()?(this.progressState=new Hye.Work(this.progressState.type===4?this.progressState.total:void 0,this.progressState.type===4&&typeof this.progressState.worked=="number"?this.progressState.worked+t:t),this.scope.isActive&&this.progressBar.worked(t)):(this.progressState=Hye.Infinite,this.progressBar.infinite().show())
      },done:()=>{
        this.progressState=Hye.Done,this.scope.isActive&&this.progressBar.stop().hide()
      }
    }
  }
  async showWhile(n, e){
    this.progressState.type===3&&(n=Promise.allSettled([n, this.progressState.whilePromise])), this.progressState=new Hye.While(n, e||0, Date.now());
    try{
      this.doShowWhile(e),await n
    }
    catch{
      
    }
    finally{
      (this.progressState.type!==3||this.progressState.whilePromise===n)&&(this.progressState=Hye.None,this.scope.isActive&&this.progressBar.stop().hide())
    }
  }
  doShowWhile(n){
    this.scope.isActive&&this.progressBar.infinite().show(n)
  }
}, oCa=class extends at{
  get isActive(){
    return this._isActive
  }
  constructor(n, e){
    super(), this.scopeId=n, this._isActive=e, this._onDidChangeActive=this._register(new Qe), this.onDidChangeActive=this._onDidChangeActive.event
  }
  PUBLIC_BE_CAREFUL_onScopeOpened(n){
    this.onScopeOpened(n)
  }
  PUBLIC_BE_CAREFUL_onScopeClosed(n){
    this.onScopeClosed(n)
  }
  onScopeOpened(n){
    n===this.scopeId&&(this._isActive||(this._isActive=!0, this._onDidChangeActive.fire()))
  }
  onScopeClosed(n){
    n===this.scopeId&&this._isActive&&(this._isActive=!1, this._onDidChangeActive.fire())
  }
}
}
}), Sxf, u1t, aCa=