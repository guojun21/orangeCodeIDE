// Module: out-build/vs/base/common/observableInternal/promise.js
// Offset: 497518 (bundle byte offset)
// Size: 947 bytes

w5e(), f4t(), ioh=class{
  get cachedValue(){
    return this._value
  }
  constructor(n){
    this._computeValue=n, this._value=Ua(this, void 0)
  }
  getValue(){
    let n=this._value.get();
    return n||(n=this._computeValue(), this._value.set(n, void 0)), n
  }
}, _de=class oJb{
  static fromFn(e){
    return new oJb(e())
  }
  constructor(e){
    this._value=Ua(this, void 0), this.promiseResult=this._value, this.promise=e.then(t=>(pp(i=>{
      this._value.set(new WFn(t,void 0),i)
    }), t), t=>{
      throw pp(i=>{
        this._value.set(new WFn(void 0,t),i)
      }),t
    })
  }
}, WFn=class{
  constructor(n, e){
    this.data=n, this.error=e
  }
  getDataOrThrow(){
    if(this.error)throw this.error;
    return this.data
  }
}, roh=class{
  constructor(n){
    this._computePromise=n, this._lazyValue=new ioh(()=>new _de(this._computePromise())), this.cachedPromiseResult=Ro(this, e=>this._lazyValue.cachedValue.read(e)?.promiseResult.read(e))
  }
  getPromise(){
    return this._lazyValue.getValue().promise
  }
}
}
}), GnA=