// Module: out-build/vs/base/common/async.js
// Offset: 428270 (bundle byte offset)
// Size: 27090 bytes

Po(), _s(), yn(), rt(), Yr(), _r(), VFt(), L0(), fde=class{
  constructor(){
    this.isDisposed=!1, this.activePromise=null, this.queuedPromise=null, this.queuedPromiseFactory=null
  }
  queue(n){
    if(this.isDisposed)return Promise.reject(new Error("Throttler is disposed"));
    if(this.activePromise){
      if(this.queuedPromiseFactory=n,!this.queuedPromise){
        const e=()=>{
          if(this.queuedPromise=null,this.isDisposed)return;
          const t=this.queue(this.queuedPromiseFactory);
          return this.queuedPromiseFactory=null,t
        };
        this.queuedPromise=new Promise(t=>{
          this.activePromise.then(e,e).then(t)
        })
      }
      return new Promise((e,t)=>{
        this.queuedPromise.then(e,t)
      })
    }
    return this.activePromise=n(), new Promise((e, t)=>{
      this.activePromise.then(i=>{
        this.activePromise=null,e(i)
      },i=>{
        this.activePromise=null,t(i)
      })
    })
  }
  dispose(){
    this.isDisposed=!0
  }
}, bde=class{
  constructor(){
    this.current=Promise.resolve(null)
  }
  queue(n){
    return this.current=this.current.then(()=>n(), ()=>n())
  }
}, KFt=class{
  constructor(){
    this.promiseMap=new Map
  }
  queue(n, e){
    const i=(this.promiseMap.get(n)??Promise.resolve()).catch(()=>{
      
    }).then(e).finally(()=>{
      this.promiseMap.get(n)===i&&this.promiseMap.delete(n)
    });
    return this.promiseMap.set(n, i), i
  }
  keys(){
    return this.promiseMap.keys()
  }
}, Lrh=(n, e)=>{
  let t=!0;
  const i=setTimeout(()=>{
    t=!1, e()
  }, n);
  return{
    isTriggered:()=>t, dispose:()=>{
      clearTimeout(i),t=!1
    }
  }
}, Nrh=n=>{
  let e=!0;
  return queueMicrotask(()=>{
    e&&(e=!1, n())
  }), {
    isTriggered:()=>e, dispose:()=>{
      e=!1
    }
  }
}, Nv=class{
  constructor(n){
    this.defaultDelay=n, this.deferred=null, this.completionPromise=null, this.doResolve=null, this.doReject=null, this.task=null
  }
  trigger(n, e=this.defaultDelay){
    this.task=n, this.cancelTimeout(), this.completionPromise||(this.completionPromise=new Promise((i, r)=>{
      this.doResolve=i,this.doReject=r
    }).then(()=>{
      if(this.completionPromise=null,this.doResolve=null,this.task){
        const i=this.task;
        return this.task=null,i()
      }
    }));
    const t=()=>{
      this.deferred=null,this.doResolve?.(null)
    };
    return this.deferred=e===Sgt?Nrh(t):Lrh(e, t), this.completionPromise
  }
  isTriggered(){
    return!!this.deferred?.isTriggered()
  }
  cancel(){
    this.cancelTimeout(), this.completionPromise&&(this.doReject?.(new vf), this.completionPromise=null)
  }
  cancelTimeout(){
    this.deferred?.dispose(), this.deferred=null
  }
  dispose(){
    this.cancel()
  }
}, L4=class{
  constructor(n){
    this.delayer=new Nv(n), this.throttler=new fde
  }
  trigger(n, e){
    return this.delayer.trigger(()=>this.throttler.queue(n), e)
  }
  isTriggered(){
    return this.delayer.isTriggered()
  }
  cancel(){
    this.delayer.cancel()
  }
  dispose(){
    this.delayer.dispose(), this.throttler.dispose()
  }
}, x6=class{
  constructor(){
    this._isOpen=!1, this._promise=new Promise((n, e)=>{
      this._completePromise=n
    })
  }
  isOpen(){
    return this._isOpen
  }
  open(){
    this._isOpen=!0, this._completePromise(!0)
  }
  wait(){
    return this._promise
  }
}, mFn=class extends x6{
  constructor(n){
    super(), this._timeout=setTimeout(()=>this.open(), n)
  }
  open(){
    clearTimeout(this._timeout), super.open()
  }
}, wSe=class{
  constructor(n){
    this._size=0, this._isDisposed=!1, this.maxDegreeOfParalellism=n, this.outstandingPromises=[], this.runningPromises=0, this._onDrained=new Qe
  }
  whenIdle(){
    return this.size>0?In.toPromise(this.onDrained):Promise.resolve()
  }
  get onDrained(){
    return this._onDrained.event
  }
  get size(){
    return this._size
  }
  queue(n){
    if(this._isDisposed)throw new Error("Object has been disposed");
    return this._size++, new Promise((e, t)=>{
      this.outstandingPromises.push({
        factory:n,c:e,e:t
      }),this.consume()
    })
  }
  consume(){
    for(;
    this.outstandingPromises.length&&this.runningPromises<this.maxDegreeOfParalellism;
    ){
      const n=this.outstandingPromises.shift();
      this.runningPromises++;
      const e=n.factory();
      e.then(n.c,n.e),e.then(()=>this.consumed(),()=>this.consumed())
    }
  }
  consumed(){
    this._isDisposed||(this.runningPromises--, --this._size===0&&this._onDrained.fire(), this.outstandingPromises.length>0&&this.consume())
  }
  clear(){
    if(this._isDisposed)throw new Error("Object has been disposed");
    this.outstandingPromises.length=0, this._size=this.runningPromises
  }
  dispose(){
    this._isDisposed=!0, this.outstandingPromises.length=0, this._size=0, this._onDrained.dispose()
  }
}, yoe=class extends wSe{
  constructor(){
    super(1)
  }
}, Mrh=class{
  constructor(){
    this.sequentializer=new b2o, this.tasks=0
  }
  queue(n){
    return this.sequentializer.isRunning()?this.sequentializer.queue(()=>this.sequentializer.run(this.tasks++, n())):this.sequentializer.run(this.tasks++, n())
  }
}, YFt=class{
  constructor(){
    this.queues=new Map, this.drainers=new Set, this.drainListeners=void 0, this.drainListenerCount=0
  }
  async whenDrained(){
    if(this.isDrained())return;
    const n=new wy;
    return this.drainers.add(n), n.p
  }
  isDrained(){
    for(const[, n]of this.queues)if(n.size>0)return!1;
    return!0
  }
  queueSize(n, e=Iu){
    const t=e.getComparisonKey(n);
    return this.queues.get(t)?.size??0
  }
  queueFor(n, e, t=Iu){
    const i=t.getComparisonKey(n);
    let r=this.queues.get(i);
    if(!r){
      r=new yoe;
      const s=this.drainListenerCount++,o=In.once(r.onDrained)(()=>{
        r?.dispose(),this.queues.delete(i),this.onDidQueueDrain(),this.drainListeners?.deleteAndDispose(s),this.drainListeners?.size===0&&(this.drainListeners.dispose(),this.drainListeners=void 0)
      });
      this.drainListeners||(this.drainListeners=new mp),this.drainListeners.set(s,o),this.queues.set(i,r)
    }
    return r.queue(e)
  }
  onDidQueueDrain(){
    this.isDrained()&&this.releaseDrainers()
  }
  releaseDrainers(){
    for(const n of this.drainers)n.complete();
    this.drainers.clear()
  }
  dispose(){
    for(const[, n]of this.queues)n.dispose();
    this.queues.clear(), this.releaseDrainers(), this.drainListeners?.dispose()
  }
}, O$=class{
  constructor(n, e){
    this._isDisposed=!1, this._token=-1, typeof n=="function"&&typeof e=="number"&&this.setIfNotSet(n, e)
  }
  dispose(){
    this.cancel(), this._isDisposed=!0
  }
  cancel(){
    this._token!==-1&&(clearTimeout(this._token), this._token=-1)
  }
  cancelAndSet(n, e){
    if(this._isDisposed)throw new _m("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    this.cancel(), this._token=setTimeout(()=>{
      this._token=-1,n()
    }, e)
  }
  setIfNotSet(n, e){
    if(this._isDisposed)throw new _m("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    this._token===-1&&(this._token=setTimeout(()=>{
      this._token=-1,n()
    }, e))
  }
}, woe=class{
  constructor(){
    this.disposable=void 0, this.isDisposed=!1
  }
  cancel(){
    this.disposable?.dispose(), this.disposable=void 0
  }
  cancelAndSet(n, e, t=globalThis){
    if(this.isDisposed)throw new _m("Calling 'cancelAndSet' on a disposed IntervalTimer");
    this.cancel();
    const i=t.setInterval(()=>{
      n()
    }, e);
    this.disposable=$i(()=>{
      t.clearInterval(i),this.disposable=void 0
    })
  }
  dispose(){
    this.cancel(), this.isDisposed=!0
  }
}, Hu=class{
  constructor(n, e){
    this.timeoutToken=-1, this.runner=n, this.timeout=e, this.timeoutHandler=this.onTimeout.bind(this)
  }
  dispose(){
    this.cancel(), this.runner=null
  }
  cancel(){
    this.isScheduled()&&(clearTimeout(this.timeoutToken), this.timeoutToken=-1)
  }
  schedule(n=this.timeout){
    this.cancel(), this.timeoutToken=setTimeout(this.timeoutHandler, n)
  }
  get delay(){
    return this.timeout
  }
  set delay(n){
    this.timeout=n
  }
  isScheduled(){
    return this.timeoutToken!==-1
  }
  flush(){
    this.isScheduled()&&(this.cancel(), this.doRun())
  }
  onTimeout(){
    this.timeoutToken=-1, this.runner&&this.doRun()
  }
  doRun(){
    this.runner?.()
  }
}, ZFt=class extends Hu{
  constructor(n, e){
    super(n, e), this.units=[]
  }
  work(n){
    this.units.push(n), this.isScheduled()||this.schedule()
  }
  doRun(){
    const n=this.units;
    this.units=[], this.runner?.(n)
  }
  dispose(){
    this.units=[], super.dispose()
  }
}, (function(){
  typeof globalThis.requestIdleCallback!="function"||typeof globalThis.cancelIdleCallback!="function"?pFn=(n, e, t)=>{
    l5e(()=>{
      if(i)return;
      const r=Date.now()+15;
      e(Object.freeze({
        didTimeout:!0,timeRemaining(){
          return Math.max(0,r-Date.now())
        }
      }))
    });
    let i=!1;
    return{
      dispose(){
        i||(i=!0)
      }
    }
  }
  :pFn=(n, e, t)=>{
    const i=n.requestIdleCallback(e, typeof t=="number"?{
      timeout:t
    }
    :void 0);
    let r=!1;
    return{
      dispose(){
        r||(r=!0,n.cancelIdleCallback(i))
      }
    }
  }, Mze=(n, e)=>pFn(globalThis, n, e)
})(), wCc=class{
  constructor(n, e){
    this._didRun=!1, this._executor=()=>{
      try{
        this._value=e()
      }
      catch(t){
        this._error=t
      }
      finally{
        this._didRun=!0
      }
    }, this._handle=pFn(n, ()=>this._executor())
  }
  dispose(){
    this._handle.dispose()
  }
  get value(){
    if(this._didRun||(this._handle.dispose(), this._executor()), this._error)throw this._error;
    return this._value
  }
  get isInitialized(){
    return this._didRun
  }
}, gFn=class extends wCc{
  constructor(n){
    super(globalThis, n)
  }
}, b2o=class{
  isRunning(n){
    return typeof n=="number"?this._running?.taskId===n:!!this._running
  }
  get running(){
    return this._running?.promise
  }
  cancelRunning(){
    this._running?.cancel()
  }
  run(n, e, t){
    return this._running={
      taskId:n,cancel:()=>t?.(),promise:e
    }, e.then(()=>this.doneRunning(n), ()=>this.doneRunning(n)), e
  }
  doneRunning(n){
    this._running&&n===this._running.taskId&&(this._running=void 0, this.runQueued())
  }
  runQueued(){
    if(this._queued){
      const n=this._queued;
      this._queued=void 0,n.run().then(n.promiseResolve,n.promiseReject)
    }
  }
  queue(n){
    if(this._queued)this._queued.run=n;
    else{
      const{
        promise:e,resolve:t,reject:i
      }
      =PBe();
      this._queued={
        run:n,promise:e,promiseResolve:t,promiseReject:i
      }
    }
    return this._queued.promise
  }
  hasQueued(){
    return!!this._queued
  }
  async join(){
    return this._queued?.promise??this._running?.promise
  }
}, Frh=class{
  constructor(n, e=()=>Date.now()){
    this.interval=n, this.nowFn=e, this.lastIncrementTime=0, this.value=0
  }
  increment(){
    const n=this.nowFn();
    return n-this.lastIncrementTime>this.interval&&(this.lastIncrementTime=n, this.value=0), this.value++, this.value
  }
}, (function(n){
  n[n.Resolved=0]="Resolved", n[n.Rejected=1]="Rejected"
})(Orh||(Orh={
  
})), wy=class{
  get isRejected(){
    return this.outcome?.outcome===1
  }
  get isResolved(){
    return this.outcome?.outcome===0
  }
  get isSettled(){
    return!!this.outcome
  }
  get value(){
    return this.outcome?.outcome===0?this.outcome?.value:void 0
  }
  constructor(){
    this.p=new Promise((n, e)=>{
      this.completeCallback=n,this.errorCallback=e
    })
  }
  complete(n){
    return new Promise(e=>{
      this.completeCallback(n),this.outcome={
        outcome:0,value:n
      },e()
    })
  }
  error(n){
    return new Promise(e=>{
      this.errorCallback(n),this.outcome={
        outcome:1,value:n
      },e()
    })
  }
  cancel(){
    return this.error(new vf)
  }
}, (function(n){
  async function e(i){
    let r;
    const s=await Promise.all(i.map(o=>o.then(a=>a, a=>{
      r||(r=a)
    })));
    if(typeof r<"u")throw r;
    return s
  }
  n.settled=e;
  function t(i){
    return new Promise(async(r, s)=>{
      try{
        await i(r,s)
      }
      catch(o){
        s(o)
      }
    })
  }
  n.withAsyncBody=t
})(ib||(ib={
  
})), Urh=class{
  get value(){
    return this._value
  }
  get error(){
    return this._error
  }
  get isResolved(){
    return this._isResolved
  }
  constructor(n){
    this._value=void 0, this._error=void 0, this._isResolved=!1, this.promise=n.then(e=>(this._value=e, this._isResolved=!0, e), e=>{
      throw this._error=e,this._isResolved=!0,e
    })
  }
  requireValue(){
    if(!this._isResolved)throw new _m("Promise is not resolved yet");
    if(this._error)throw this._error;
    return this._value
  }
}, $rh=class{
  constructor(n){
    this._compute=n, this._promise=new Ob(()=>new Urh(this._compute()))
  }
  requireValue(){
    return this._promise.value.requireValue()
  }
  getPromise(){
    return this._promise.value.promise
  }
  get currentValue(){
    return this._promise.rawValue?.value
  }
}, (function(n){
  n[n.Initial=0]="Initial", n[n.DoneOK=1]="DoneOK", n[n.DoneError=2]="DoneError"
})(qrh||(qrh={
  
})), IH=class rge{
  static fromArray(e){
    return new rge(t=>{
      t.emitMany(e)
    })
  }
  static fromPromise(e){
    return new rge(async t=>{
      t.emitMany(await e)
    })
  }
  static fromPromisesResolveOrder(e){
    return new rge(async t=>{
      await Promise.all(e.map(async i=>t.emitOne(await i)))
    })
  }
  static merge(e){
    return new rge(async t=>{
      await Promise.all(e.map(async i=>{
        for await(const r of i)t.emitOne(r)
      }))
    })
  }
  static{
    this.EMPTY=rge.fromArray([])
  }
  constructor(e, t){
    this._state=0, this._results=[], this._error=null, this._onReturn=t, this._onStateChanged=new Qe, queueMicrotask(async()=>{
      const i={
        emitOne:r=>this.emitOne(r),emitMany:r=>this.emitMany(r),reject:r=>this.reject(r)
      };
      try{
        await Promise.resolve(e(i)),this.resolve()
      }
      catch(r){
        this.reject(r)
      }
      finally{
        i.emitOne=void 0,i.emitMany=void 0,i.reject=void 0
      }
    })
  }
  [Symbol.asyncIterator](){
    let e=0;
    return{
      next:async()=>{
        do{
          if(this._state===2)throw this._error;
          if(e<this._results.length)return{
            done:!1,value:this._results[e++]
          };
          if(this._state===1)return{
            done:!0,value:void 0
          };
          await In.toPromise(this._onStateChanged.event)
        }
        while(!0)
      },return:async()=>(this._onReturn?.(),{
        done:!0,value:void 0
      })
    }
  }
  static map(e, t){
    return new rge(async i=>{
      for await(const r of e)i.emitOne(t(r))
    })
  }
  map(e){
    return rge.map(this, e)
  }
  static filter(e, t){
    return new rge(async i=>{
      for await(const r of e)t(r)&&i.emitOne(r)
    })
  }
  filter(e){
    return rge.filter(this, e)
  }
  static coalesce(e){
    return rge.filter(e, t=>!!t)
  }
  coalesce(){
    return rge.coalesce(this)
  }
  static async toPromise(e){
    const t=[];
    for await(const i of e)t.push(i);
    return t
  }
  toPromise(){
    return rge.toPromise(this)
  }
  emitOne(e){
    this._state===0&&(this._results.push(e), this._onStateChanged.fire())
  }
  emitMany(e){
    this._state===0&&(this._results=this._results.concat(e), this._onStateChanged.fire())
  }
  resolve(){
    this._state===0&&(this._state=1, this._onStateChanged.fire())
  }
  reject(e){
    this._state===0&&(this._state=2, this._error=e, this._onStateChanged.fire())
  }
}, Hrh=class extends IH{
  constructor(n, e){
    super(e), this._source=n
  }
  cancel(){
    this._source.cancel()
  }
}, v2o=class{
  constructor(n){
    this._deferred=new wy, this._asyncIterable=new IH(i=>{
      if(e){
        i.reject(e);
        return
      }
      return t&&i.emitMany(t),this._errorFn=r=>i.reject(r),this._emitFn=r=>i.emitOne(r),this._deferred.p
    }, n);
    let e, t;
    this._emitFn=i=>{
      t||(t=[]),t.push(i)
    }, this._errorFn=i=>{
      e||(e=i)
    }
  }
  get asyncIterable(){
    return this._asyncIterable
  }
  resolve(){
    this._deferred.complete()
  }
  reject(n){
    this._errorFn(n), this._deferred.complete()
  }
  emitOne(n){
    this._emitFn(n)
  }
}
}
});
function vde(n){
  return function(e){
    for(var t=arguments.length, i=new Array(t>1?t-1:0), r=1;
    r<t;
    r++)i[r-1]=arguments[r];
    return A2o(n, e, i)
  }
}
function AnA(n){
  return function(){
    for(var e=arguments.length, t=new Array(e), i=0;
    i<e;
    i++)t[i]=arguments[i];
    return y2o(n, t)
  }
}
function GE(n, e){
  let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:vFn;
  CCc&&CCc(n, null);
  let i=e.length;
  for(;
  i--;
  ){
    let r=e[i];
    if(typeof r=="string"){
      const s=t(r);
      s!==r&&(Grh(e)||(e[i]=s),r=s)
    }
    n[r]=!0
  }
  return n
}
function ynA(n){
  for(let e=0;
  e<n.length;
  e++)Bbe(n, e)||(n[e]=null);
  return n
}
function xgt(n){
  const e=SCc(null);
  for(const[t, i]of _Cc(n))Bbe(n, t)&&(Array.isArray(i)?e[t]=ynA(i):i&&typeof i=="object"&&i.constructor===Object?e[t]=xgt(i):e[t]=i);
  return e
}
function fFn(n, e){
  for(;
  n!==null;
  ){
    const i=Qrh(n, e);
    if(i){
      if(i.get)return vde(i.get);
      if(typeof i.value=="function")return vde(i.value)
    }
    n=Wrh(n)
  }
  function t(){
    return null
  }
  return t
}
function Jrh(){
  let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ssh();
  const e=Pi=>Jrh(Pi);
  if(e.version="3.1.7", e.removed=[], !n||!n.document||n.document.nodeType!==n4t.document)return e.isSupported=!1, e;
  let{
    document:t
  }
  =n;
  const i=t, r=i.currentScript, {
    DocumentFragment:s, HTMLTemplateElement:o, Node:a, Element:l, NodeFilter:u, NamedNodeMap:d=n.NamedNodeMap||n.MozNamedAttrMap, HTMLFormElement:m, DOMParser:p, trustedTypes:g
  }
  =n, f=l.prototype, A=fFn(f, "cloneNode"), w=fFn(f, "remove"), C=fFn(f, "nextSibling"), x=fFn(f, "childNodes"), I=fFn(f, "parentNode");
  if(typeof o=="function"){
    const Pi=t.createElement("template");
    Pi.content&&Pi.content.ownerDocument&&(t=Pi.content.ownerDocument)
  }
  let B, R="";
  const{
    implementation:N, createNodeIterator:M, createDocumentFragment:O, getElementsByTagName:$
  }
  =t, {
    importNode:H
  }
  =i;
  let W={
    
  };
  e.isSupported=typeof _Cc=="function"&&typeof I=="function"&&N&&N.createHTMLDocument!==void 0;
  const{
    MUSTACHE_EXPR:z, ERB_EXPR:Y, TMPLIT_EXPR:j, DATA_ATTR:X, ARIA_ATTR:ee, IS_SCRIPT_OR_DATA:re, ATTR_WHITESPACE:ne, CUSTOM_ELEMENT:pe
  }
  =PCc;
  let{
    IS_ALLOWED_URI:le
  }
  =PCc, formatPeriod=null;
  const be=GE({
    
  }, [...xCc, ..._2o, ...C2o, ...S2o, ...TCc]);
  let formatUTCShortWeekday=null;
  const ke=GE({
    
  }, [...ICc, ...k2o, ...DCc, ...AFn]);
  let Se=Object.seal(SCc(null, {
    tagNameCheck:{
      writable:!0,configurable:!1,enumerable:!0,value:null
    }, attributeNameCheck:{
      writable:!0,configurable:!1,enumerable:!0,value:null
    }, allowCustomizedBuiltInElements:{
      writable:!0,configurable:!1,enumerable:!0,value:!1
    }
  })), Fe=null, De=null, Pe=!0, Ne=!0, Oe=!1, Ge=!0, Le=!1, We=!0, tt=!1, it=!1, bt=!1, Nt=!1, ft=!1, _t=!1, It=!0, sn=!1;
  const Vt="user-content-";
  let Ft=!0, Xt=!1, bn={
    
  }, St=null;
  const Bt=GE({
    
  }, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Jt=null;
  const Ot=GE({
    
  }, ["audio", "video", "img", "source", "image", "track"]);
  let popStack=null;
  const Mt=GE({
    
  }, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt="http://www.w3.org/1998/Math/MathML", ut="http://www.w3.org/2000/svg", ot="http://www.w3.org/1999/xhtml";
  let Lt=ot, Gt=!1, jt=null;
  const hn=GE({
    
  }, [Pt, ut, ot], w2o);
  let on=null;
  const en=["application/xhtml+xml", "text/html"], gt="text/html";
  let At=null, Tt=null;
  const ze=t.createElement("form"), Yt=function(gi){
    return gi instanceof RegExp||gi instanceof Function
  }, kt=function(){
    let gi=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{
      
    };
    if(!(Tt&&Tt===gi)){
      if((!gi||typeof gi!="object")&&(gi={
        
      }),gi=xgt(gi),on=en.indexOf(gi.PARSER_MEDIA_TYPE)===-1?gt:gi.PARSER_MEDIA_TYPE,At=on==="application/xhtml+xml"?w2o:vFn,formatPeriod=Bbe(gi,"ALLOWED_TAGS")?GE({
        
      },gi.ALLOWED_TAGS,At):be,formatUTCShortWeekday=Bbe(gi,"ALLOWED_ATTR")?GE({
        
      },gi.ALLOWED_ATTR,At):ke,jt=Bbe(gi,"ALLOWED_NAMESPACES")?GE({
        
      },gi.ALLOWED_NAMESPACES,w2o):hn,popStack=Bbe(gi,"ADD_URI_SAFE_ATTR")?GE(xgt(Mt),gi.ADD_URI_SAFE_ATTR,At):Mt,Jt=Bbe(gi,"ADD_DATA_URI_TAGS")?GE(xgt(Ot),gi.ADD_DATA_URI_TAGS,At):Ot,St=Bbe(gi,"FORBID_CONTENTS")?GE({
        
      },gi.FORBID_CONTENTS,At):Bt,Fe=Bbe(gi,"FORBID_TAGS")?GE({
        
      },gi.FORBID_TAGS,At):{
        
      },De=Bbe(gi,"FORBID_ATTR")?GE({
        
      },gi.FORBID_ATTR,At):{
        
      },bn=Bbe(gi,"USE_PROFILES")?gi.USE_PROFILES:!1,Pe=gi.ALLOW_ARIA_ATTR!==!1,Ne=gi.ALLOW_DATA_ATTR!==!1,Oe=gi.ALLOW_UNKNOWN_PROTOCOLS||!1,Ge=gi.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Le=gi.SAFE_FOR_TEMPLATES||!1,We=gi.SAFE_FOR_XML!==!1,tt=gi.WHOLE_DOCUMENT||!1,Nt=gi.RETURN_DOM||!1,ft=gi.RETURN_DOM_FRAGMENT||!1,_t=gi.RETURN_TRUSTED_TYPE||!1,bt=gi.FORCE_BODY||!1,It=gi.SANITIZE_DOM!==!1,sn=gi.SANITIZE_NAMED_PROPS||!1,Ft=gi.KEEP_CONTENT!==!1,Xt=gi.IN_PLACE||!1,le=gi.ALLOWED_URI_REGEXP||BCc,Lt=gi.NAMESPACE||ot,Se=gi.CUSTOM_ELEMENT_HANDLING||{
        
      },gi.CUSTOM_ELEMENT_HANDLING&&Yt(gi.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=gi.CUSTOM_ELEMENT_HANDLING.tagNameCheck),gi.CUSTOM_ELEMENT_HANDLING&&Yt(gi.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=gi.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),gi.CUSTOM_ELEMENT_HANDLING&&typeof gi.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Se.allowCustomizedBuiltInElements=gi.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Ne=!1),ft&&(Nt=!0),bn&&(formatPeriod=GE({
        
      },TCc),formatUTCShortWeekday=[],bn.html===!0&&(GE(formatPeriod,xCc),GE(formatUTCShortWeekday,ICc)),bn.svg===!0&&(GE(formatPeriod,_2o),GE(formatUTCShortWeekday,k2o),GE(formatUTCShortWeekday,AFn)),bn.svgFilters===!0&&(GE(formatPeriod,C2o),GE(formatUTCShortWeekday,k2o),GE(formatUTCShortWeekday,AFn)),bn.mathMl===!0&&(GE(formatPeriod,S2o),GE(formatUTCShortWeekday,DCc),GE(formatUTCShortWeekday,AFn))),gi.ADD_TAGS&&(formatPeriod===be&&(formatPeriod=xgt(formatPeriod)),GE(formatPeriod,gi.ADD_TAGS,At)),gi.ADD_ATTR&&(formatUTCShortWeekday===ke&&(formatUTCShortWeekday=xgt(formatUTCShortWeekday)),GE(formatUTCShortWeekday,gi.ADD_ATTR,At)),gi.ADD_URI_SAFE_ATTR&&GE(popStack,gi.ADD_URI_SAFE_ATTR,At),gi.FORBID_CONTENTS&&(St===Bt&&(St=xgt(St)),GE(St,gi.FORBID_CONTENTS,At)),Ft&&(formatPeriod["#text"]=!0),tt&&GE(formatPeriod,["html","head","body"]),formatPeriod.table&&(GE(formatPeriod,["tbody"]),delete Fe.tbody),gi.TRUSTED_TYPES_POLICY){
        if(typeof gi.TRUSTED_TYPES_POLICY.createHTML!="function")throw t4t('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if(typeof gi.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw t4t('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B=gi.TRUSTED_TYPES_POLICY,R=B.createHTML("")
      }
      else B===void 0&&(B=osh(g,r)),B!==null&&typeof R=="string"&&(R=B.createHTML(""));
      kY&&kY(gi),Tt=gi
    }
  }, xt=GE({
    
  }, ["mi", "mo", "mn", "ms", "mtext"]), un=GE({
    
  }, ["annotation-xml"]), nn=GE({
    
  }, ["title", "style", "font", "a", "script"]), Dn=GE({
    
  }, [..._2o, ...C2o, ...Vrh]), Bn=GE({
    
  }, [...S2o, ...Krh]), Vn=function(gi){
    let _i=I(gi);
    (!_i||!_i.tagName)&&(_i={
      namespaceURI:Lt,tagName:"template"
    });
    const Wi=vFn(gi.tagName), Kr=vFn(_i.tagName);
    return jt[gi.namespaceURI]?gi.namespaceURI===ut?_i.namespaceURI===ot?Wi==="svg":_i.namespaceURI===Pt?Wi==="svg"&&(Kr==="annotation-xml"||xt[Kr]):!!Dn[Wi]:gi.namespaceURI===Pt?_i.namespaceURI===ot?Wi==="math":_i.namespaceURI===ut?Wi==="math"&&un[Kr]:!!Bn[Wi]:gi.namespaceURI===ot?_i.namespaceURI===ut&&!un[Kr]||_i.namespaceURI===Pt&&!xt[Kr]?!1:!Bn[Wi]&&(nn[Wi]||!Dn[Wi]):!!(on==="application/xhtml+xml"&&jt[gi.namespaceURI]):!1
  }, Xn=function(gi){
    XFt(e.removed, {
      element:gi
    });
    try{
      I(gi).removeChild(gi)
    }
    catch{
      w(gi)
    }
  }, hi=function(gi, _i){
    try{
      XFt(e.removed,{
        attribute:_i.getAttributeNode(gi),from:_i
      })
    }
    catch{
      XFt(e.removed,{
        attribute:null,from:_i
      })
    }
    if(_i.removeAttribute(gi), gi==="is"&&!formatUTCShortWeekday[gi])if(Nt||ft)try{
      Xn(_i)
    }
    catch{
      
    }
    else try{
      _i.setAttribute(gi,"")
    }
    catch{
      
    }
  }, Si=function(gi){
    let _i=null, Wi=null;
    if(bt)gi="<remove></remove>"+gi;
    else{
      const Ys=ECc(gi,/^[\r\n\t ]+/);
      Wi=Ys&&Ys[0]
    }
    on==="application/xhtml+xml"&&Lt===ot&&(gi='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+gi+"</body></html>");
    const Kr=B?B.createHTML(gi):gi;
    if(Lt===ot)try{
      _i=new p().parseFromString(Kr,on)
    }
    catch{
      
    }
    if(!_i||!_i.documentElement){
      _i=N.createDocument(Lt,"template",null);
      try{
        _i.documentElement.innerHTML=Gt?R:Kr
      }
      catch{
        
      }
    }
    const rr=_i.body||_i.documentElement;
    return gi&&Wi&&rr.insertBefore(t.createTextNode(Wi), rr.childNodes[0]||null), Lt===ot?$.call(_i, tt?"html":"body")[0]:tt?_i.documentElement:rr
  }, Xi=function(gi){
    return M.call(gi.ownerDocument||gi, gi, u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION, null)
  }, Ji=function(gi){
    return gi instanceof m&&(typeof gi.nodeName!="string"||typeof gi.textContent!="string"||typeof gi.removeChild!="function"||!(gi.attributes instanceof d)||typeof gi.removeAttribute!="function"||typeof gi.setAttribute!="function"||typeof gi.namespaceURI!="string"||typeof gi.insertBefore!="function"||typeof gi.hasChildNodes!="function")
  }, qr=function(gi){
    return typeof a=="function"&&gi instanceof a
  }, Ni=function(gi, _i, Wi){
    W[gi]&&bFn(W[gi], Kr=>{
      Kr.call(e,_i,Wi,Tt)
    })
  }, Ii=function(gi){
    let _i=null;
    if(Ni("beforeSanitizeElements", gi, null), Ji(gi))return Xn(gi), !0;
    const Wi=At(gi.nodeName);
    if(Ni("uponSanitizeElement", gi, {
      tagName:Wi,allowedTags:formatPeriod
    }), gi.hasChildNodes()&&!qr(gi.firstElementChild)&&EY(/<[/\w]/g, gi.innerHTML)&&EY(/<[/\w]/g, gi.textContent)||gi.nodeType===n4t.progressingInstruction||We&&gi.nodeType===n4t.comment&&EY(/<[/\w]/g, gi.data))return Xn(gi), !0;
    if(!formatPeriod[Wi]||Fe[Wi]){
      if(!Fe[Wi]&&er(Wi)&&(Se.tagNameCheck instanceof RegExp&&EY(Se.tagNameCheck,Wi)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(Wi)))return!1;
      if(Ft&&!St[Wi]){
        const Kr=I(gi)||gi.parentNode,rr=x(gi)||gi.childNodes;
        if(rr&&Kr){
          const Ys=rr.length;
          for(let Fo=Ys-1;
          Fo>=0;
          --Fo){
            const Wa=A(rr[Fo],!0);
            Wa.__removalCount=(gi.__removalCount||0)+1,Kr.insertBefore(Wa,C(gi))
          }
        }
      }
      return Xn(gi),!0
    }
    return gi instanceof l&&!Vn(gi)||(Wi==="noscript"||Wi==="noembed"||Wi==="noframes")&&EY(/<\/no(script|embed|frames)/i, gi.innerHTML)?(Xn(gi), !0):(Le&&gi.nodeType===n4t.text&&(_i=gi.textContent, bFn([z, Y, j], Kr=>{
      _i=e4t(_i,Kr," ")
    }), gi.textContent!==_i&&(XFt(e.removed, {
      element:gi.cloneNode()
    }), gi.textContent=_i)), Ni("afterSanitizeElements", gi, null), !1)
  }, Ar=function(gi, _i, Wi){
    if(It&&(_i==="id"||_i==="name")&&(Wi in t||Wi in ze))return!1;
    if(!(Ne&&!De[_i]&&EY(X, _i))){
      if(!(Pe&&EY(ee,_i))){
        if(!formatUTCShortWeekday[_i]||De[_i]){
          if(!(er(gi)&&(Se.tagNameCheck instanceof RegExp&&EY(Se.tagNameCheck,gi)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(gi))&&(Se.attributeNameCheck instanceof RegExp&&EY(Se.attributeNameCheck,_i)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(_i))||_i==="is"&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&EY(Se.tagNameCheck,Wi)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(Wi))))return!1
        }
        else if(!popStack[_i]){
          if(!EY(le,e4t(Wi,ne,""))){
            if(!((_i==="src"||_i==="xlink:href"||_i==="href")&&gi!=="script"&&jrh(Wi,"data:")===0&&Jt[gi])){
              if(!(Oe&&!EY(re,e4t(Wi,ne,"")))){
                if(Wi)return!1
              }
            }
          }
        }
      }
    }
    return!0
  }, er=function(gi){
    return gi!=="annotation-xml"&&ECc(gi, pe)
  }, Sr=function(gi){
    Ni("beforeSanitizeAttributes", gi, null);
    const{
      attributes:_i
    }
    =gi;
    if(!_i)return;
    const Wi={
      attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:formatUTCShortWeekday
    };
    let Kr=_i.length;
    for(;
    Kr--;
    ){
      const rr=_i[Kr],{
        name:Ys,namespaceURI:Fo,value:Wa
      }
      =rr,ll=At(Ys);
      let Xc=Ys==="value"?Wa:zrh(Wa);
      if(Wi.attrName=ll,Wi.attrValue=Xc,Wi.keepAttr=!0,Wi.forceKeepAttr=void 0,Ni("uponSanitizeAttribute",gi,Wi),Xc=Wi.attrValue,Wi.forceKeepAttr||(hi(Ys,gi),!Wi.keepAttr))continue;
      if(!Ge&&EY(/\/>/i,Xc)){
        hi(Ys,gi);
        continue
      }
      Le&&bFn([z,Y,j],Yi=>{
        Xc=e4t(Xc,Yi," ")
      });
      const Ns=At(gi.nodeName);
      if(Ar(Ns,ll,Xc)){
        if(sn&&(ll==="id"||ll==="name")&&(hi(Ys,gi),Xc=Vt+Xc),We&&EY(/((--!?|])>)|<\/(style|title)/i,Xc)){
          hi(Ys,gi);
          continue
        }
        if(B&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Fo)switch(g.getAttributeType(Ns,ll)){
          case"TrustedHTML":{
            Xc=B.createHTML(Xc);
            break
          }
          case"TrustedScriptURL":{
            Xc=B.createScriptURL(Xc);
            break
          }
        }
        try{
          Fo?gi.setAttributeNS(Fo,Ys,Xc):gi.setAttribute(Ys,Xc),Ji(gi)?Xn(gi):kCc(e.removed)
        }
        catch{
          
        }
      }
    }
    Ni("afterSanitizeAttributes", gi, null)
  }, Es=function Pi(gi){
    let _i=null;
    const Wi=Xi(gi);
    for(Ni("beforeSanitizeShadowDOM", gi, null);
    _i=Wi.nextNode();
    )Ni("uponSanitizeShadowNode", _i, null), !Ii(_i)&&(_i.content instanceof s&&Pi(_i.content), Sr(_i));
    Ni("afterSanitizeShadowDOM", gi, null)
  };
  return e.sanitize=function(Pi){
    let gi=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{
      
    }, _i=null, Wi=null, Kr=null, rr=null;
    if(Gt=!Pi, Gt&&(Pi="<!-->"), typeof Pi!="string"&&!qr(Pi))if(typeof Pi.toString=="function"){
      if(Pi=Pi.toString(),typeof Pi!="string")throw t4t("dirty is not a string, aborting")
    }
    else throw t4t("toString is not a function");
    if(!e.isSupported)return Pi;
    if(it||kt(gi), e.removed=[], typeof Pi=="string"&&(Xt=!1), Xt){
      if(Pi.nodeName){
        const Wa=At(Pi.nodeName);
        if(!formatPeriod[Wa]||Fe[Wa])throw t4t("root node is forbidden and cannot be sanitized in-place")
      }
    }
    else if(Pi instanceof a)_i=Si("<!---->"), Wi=_i.ownerDocument.importNode(Pi, !0), Wi.nodeType===n4t.element&&Wi.nodeName==="BODY"||Wi.nodeName==="HTML"?_i=Wi:_i.appendChild(Wi);
    else{
      if(!Nt&&!Le&&!tt&&Pi.indexOf("<")===-1)return B&&_t?B.createHTML(Pi):Pi;
      if(_i=Si(Pi),!_i)return Nt?null:_t?R:""
    }
    _i&&bt&&Xn(_i.firstChild);
    const Ys=Xi(Xt?Pi:_i);
    for(;
    Kr=Ys.nextNode();
    )Ii(Kr)||(Kr.content instanceof s&&Es(Kr.content), Sr(Kr));
    if(Xt)return Pi;
    if(Nt){
      if(ft)for(rr=O.call(_i.ownerDocument);
      _i.firstChild;
      )rr.appendChild(_i.firstChild);
      else rr=_i;
      return(formatUTCShortWeekday.shadowroot||formatUTCShortWeekday.shadowrootmode)&&(rr=H.call(i,rr,!0)),rr
    }
    let Fo=tt?_i.outerHTML:_i.innerHTML;
    return tt&&formatPeriod["!doctype"]&&_i.ownerDocument&&_i.ownerDocument.doctype&&_i.ownerDocument.doctype.name&&EY(RCc, _i.ownerDocument.doctype.name)&&(Fo="<!DOCTYPE "+_i.ownerDocument.doctype.name+`>
`+Fo), Le&&bFn([z, Y, j], Wa=>{
      Fo=e4t(Fo,Wa," ")
    }), B&&_t?B.createHTML(Fo):Fo
  }, e.setConfig=function(){
    let Pi=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{
      
    };
    kt(Pi), it=!0
  }, e.clearConfig=function(){
    Tt=null, it=!1
  }, e.isValidAttribute=function(Pi, gi, _i){
    Tt||kt({
      
    });
    const Wi=At(Pi), Kr=At(gi);
    return Ar(Wi, Kr, _i)
  }, e.addHook=function(Pi, gi){
    typeof gi=="function"&&(W[Pi]=W[Pi]||[], XFt(W[Pi], gi))
  }, e.removeHook=function(Pi){
    if(W[Pi])return kCc(W[Pi])
  }, e.removeHooks=function(Pi){
    W[Pi]&&(W[Pi]=[])
  }, e.removeAllHooks=function(){
    W={
      
    }
  }, e
}
var _Cc, CCc, Grh, Wrh, Qrh, kY, Ade, SCc, A2o, y2o, bFn, kCc, XFt, vFn, w2o, ECc, e4t, jrh, zrh, Bbe, EY, t4t, xCc, _2o, C2o, Vrh, S2o, Krh, TCc, ICc, k2o, DCc, AFn, Yrh, Zrh, Xrh, esh, tsh, BCc, nsh, ish, RCc, rsh, PCc, n4t, ssh, osh, Rbe, i4t=