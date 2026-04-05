// Module: out-build/vs/platform/progress/common/progress.js
// Offset: 1950123 (bundle byte offset)
// Size: 1869 bytes

vr(), Po(), rt(), Er(), Wt(), Ib=xi("progressService"), (function(n){
  n[n.Explorer=1]="Explorer", n[n.Scm=3]="Scm", n[n.Extensions=5]="Extensions", n[n.Window=10]="Window", n[n.Notification=15]="Notification", n[n.Dialog=20]="Dialog"
})(Ewh||(Ewh={
  
})), EIc=Object.freeze({
  total(){
    
  }, worked(){
    
  }, done(){
    
  }
}), qde=class{
  static{
    this.None=Object.freeze({
      report(){
        
      }
    })
  }
  get value(){
    return this._value
  }
  constructor(n){
    this.callback=n
  }
  report(n){
    this._value=n, this.callback(this._value)
  }
}, S3o=class extends at{
  constructor(e, t){
    super(), this.deferred=new wy, t.withProgress(e, i=>(this.reporter=i, this.lastStep&&i.report(this.lastStep), this.deferred.p)), this._register($i(()=>this.deferred.complete()))
  }
  report(e){
    this.reporter?this.reporter.report(e):this.lastStep=e
  }
}, S3o=__decorate([__param(1, Ib)], S3o), xIc=class extends at{
  constructor(n){
    super(), this.progressIndicator=n, this.currentOperationId=0, this.currentOperationDisposables=this._register(new Ut)
  }
  start(n){
    this.stop();
    const e=++this.currentOperationId, t=new Wc;
    return this.currentProgressTimeout=setTimeout(()=>{
      e===this.currentOperationId&&(this.currentProgressRunner=this.progressIndicator.show(!0))
    }, n), this.currentOperationDisposables.add($i(()=>clearTimeout(this.currentProgressTimeout))), this.currentOperationDisposables.add($i(()=>t.cancel())), this.currentOperationDisposables.add($i(()=>this.currentProgressRunner?this.currentProgressRunner.done():void 0)), {
      id:e,token:t.token,stop:()=>this.doStop(e),isCurrent:()=>this.currentOperationId===e
    }
  }
  stop(){
    this.doStop(this.currentOperationId)
  }
  doStop(n){
    this.currentOperationId===n&&this.currentOperationDisposables.clear()
  }
}, p2=xi("editorProgressService"), xwh=Object.freeze({
  total(){
    
  }, worked(){
    
  }, done(){
    
  }
}), Twh=class extends at{
  show(n, e){
    return xwh
  }
  showWhile(n, e){
    return Promise.resolve()
  }
}, Vi(p2, Twh, 1)
}
}), $Se, TIc, A9e=