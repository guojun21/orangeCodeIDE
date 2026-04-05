// Module: out-build/vs/base/common/cursorAsync.js
// Offset: 27923486 (bundle byte offset)
// Size: 1463 bytes

Pmn=class{
  getCount(){
    return this.counter
  }
  constructor(n, e){
    this.max=n, this.counter=0, this.waiting=[], this.abortSignal=e??new AbortController().signal
  }
  async withSemaphore(n, e){
    await this.acquire();
    const t=Date.now();
    try{
      return this.abortSignal.aborted?Promise.reject("Aborted"):await n()
    }
    finally{
      this.release(),e&&e(Date.now()-t)
    }
  }
  async withRetrySemaphore(n, e, t=3){
    if(this.abortSignal.aborted)return Promise.reject("Aborted");
    for(let i=1;
    i<t;
    i++)try{
      return await this.withSemaphore(n,e)
    }
    catch{
      await new Promise(s=>setTimeout(s,200*i))
    }
    return await this.withSemaphore(n)
  }
  take(){
    if(this.waiting.length>0&&this.counter<this.max){
      this.counter++;
      const n=this.waiting.shift();
      n&&n.resolve()
    }
  }
  acquire(){
    return this.counter<this.max?(this.counter++, new Promise(n=>{
      n()
    })):new Promise((n, e)=>{
      this.waiting.push({
        resolve:n,err:e
      })
    })
  }
  release(){
    this.counter--, this.take()
  }
  purge(){
    const n=this.waiting.length;
    for(let e=0;
    e<n;
    e++)this.waiting[e].err("Task has been purged.");
    return this.counter=0, this.waiting=[], n
  }
}, Iba=class extends Pmn{
  constructor(){
    super(1)
  }
}
}
});
function xVg(n){
  return n.replace(/\\/g, "/").replace(/^\//, "")
}
function TVg(n){
  if(!n)return!1;
  const e=xVg(n);
  if(!e.endsWith(".log"))return!1;
  const t=xVg(IVg);
  return e===t||DVg.test(e)
}
function ZSt(n, e){
  const t=e.asRelativePath(n, !1);
  return TVg(t)
}
function p4A(n){
  return TVg(n)
}
function Msu(n){
  return n.replace(/-/g, "").slice(0, BVg)
}
var IVg, DVg, BVg, hnt=