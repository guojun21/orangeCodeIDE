// Module: out-build/vs/base/common/codecs/asyncDecoder.js
// Offset: 31057623 (bundle byte offset)
// Size: 740 bytes

rt(), hIf=class extends at{
  constructor(n){
    super(), this.decoder=n, this.messages=[], this._register(n)
  }
  async*[Symbol.asyncIterator](){
    const n=e=>{
      e!==void 0?this.messages.push(e):(this.decoder.removeListener("data",n),this.decoder.removeListener("end",n)),this.resolveOnNewEvent&&(this.resolveOnNewEvent(),delete this.resolveOnNewEvent)
    };
    for(this.decoder.on("data", n), this.decoder.on("end", n), this.decoder.start();
    ;
    ){
      const e=this.messages.shift();
      if(e!==void 0){
        yield e;
        continue
      }
      if(this.decoder.ended)return this.dispose(),null;
      await new Promise(t=>{
        this.resolveOnNewEvent=t
      })
    }
  }
}
}
});
function Ogu(n, e){
  if(!n.disposed)return;
  throw typeof e=="string"?new Error(e):e
}
var T1t, Jgn=