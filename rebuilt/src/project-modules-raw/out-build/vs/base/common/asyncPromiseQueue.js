// Module: out-build/vs/base/common/asyncPromiseQueue.js
// Offset: 30432147 (bundle byte offset)
// Size: 1152 bytes

GEe=class{
  constructor(n){
    this.timeoutMs=n, this.queue=[], this.resolve=void 0, this.reject=void 0, this._end=!1, this.e=void 0, this.basicPromise=new Promise((e, t)=>{
      this.resolve=e,this.reject=t
    })
  }
  get size(){
    return this.queue.length
  }
  push(n){
    this.queue.push(n), this.resolve&&this.resolve()
  }
  end(){
    this.resolve&&this.resolve(), this._end=!0
  }
  error(n){
    this.reject&&this.reject(n), this.e=n
  }
  resetPromise(){
    const n=this;
    this.basicPromise=new Promise((e, t)=>{
      this.resolve=e,this.reject=t
    }).catch(e=>{
      n.e=e
    })
  }
  [Symbol.asyncIterator](){
    const n=this.timeoutMs;
    return{
      next:async()=>{
        try{
          if(this.e!==void 0)throw this.e;
          if(this.queue.length>0)return{
            done:!1,value:this.queue.shift()
          };
          if(this._end)return{
            done:!0,value:void 0
          };
          let e=!1;
          if(n===void 0?await this.basicPromise:e=await Promise.race([this.basicPromise.then(()=>!1),new Promise(t=>setTimeout(()=>t(!0),n))]),this.e!==void 0)throw this.e;
          if(this.queue.length>0)return{
            done:!1,value:this.queue.shift()
          };
          if(e||this._end)return{
            done:!0,value:void 0
          };
          throw new Error("AsyncIterPushable: should not be here")
        }
        finally{
          this.resetPromise()
        }
      }
    }
  }
}
}
}), qSf, fty=