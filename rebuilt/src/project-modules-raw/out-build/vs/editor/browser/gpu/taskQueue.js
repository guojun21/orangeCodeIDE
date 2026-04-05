// Module: out-build/vs/editor/browser/gpu/taskQueue.js
// Offset: 1763463 (bundle byte offset)
// Size: 1315 bytes

ri(), rt(), aIc=class extends at{
  constructor(){
    super(), this._tasks=[], this._i=0, this._register($i(()=>this.clear()))
  }
  enqueue(n){
    this._tasks.push(n), this._start()
  }
  flush(){
    for(;
    this._i<this._tasks.length;
    )this._tasks[this._i]()||this._i++;
    this.clear()
  }
  clear(){
    this._idleCallback&&(this._cancelCallback(this._idleCallback), this._idleCallback=void 0), this._i=0, this._tasks.length=0
  }
  _start(){
    this._idleCallback||(this._idleCallback=this._requestCallback(this._process.bind(this)))
  }
  _process(n){
    this._idleCallback=void 0;
    let e=0, t=0, i=n.timeRemaining(), r=0;
    for(;
    this._i<this._tasks.length;
    ){
      if(e=Date.now(),this._tasks[this._i]()||this._i++,e=Math.max(1,Date.now()-e),t=Math.max(e,t),r=n.timeRemaining(),t*1.5>r){
        i-e<-20&&console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(i-e))}ms`),this._start();
        return
      }
      i=r
    }
    this.clear()
  }
}, _yh=class extends aIc{
  _requestCallback(n){
    return $c().setTimeout(()=>n(this._createDeadline(16)))
  }
  _cancelCallback(n){
    $c().clearTimeout(n)
  }
  _createDeadline(n){
    const e=Date.now()+n;
    return{
      timeRemaining:()=>Math.max(0,e-Date.now())
    }
  }
}, Cyh=class extends aIc{
  _requestCallback(n){
    return $c().requestIdleCallback(n)
  }
  _cancelCallback(n){
    $c().cancelIdleCallback(n)
  }
}, Syh="requestIdleCallback"in $c()?Cyh:_yh
}
}), kyh, ElA=