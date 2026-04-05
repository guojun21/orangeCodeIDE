// Module: out-build/vs/base/common/observableInternal/logging/debugger/rpc.js
// Offset: 509964 (bundle byte offset)
// Size: 1470 bytes

uoh=class nad{
  static createHost(e, t){
    return new nad(e, t)
  }
  static createClient(e, t){
    return new nad(e, t)
  }
  constructor(e, t){
    this._channelFactory=e, this._getHandler=t, this._channel=this._channelFactory({
      handleNotification:s=>{
        const o=s,a=this._getHandler().notifications[o[0]];
        if(!a)throw new Error(`Unknown notification "${o[0]}"!`);
        a(...o[1])
      },handleRequest:s=>{
        const o=s;
        try{
          return{
            type:"result",value:this._getHandler().requests[o[0]](...o[1])
          }
        }
        catch(a){
          return{
            type:"error",value:a
          }
        }
      }
    });
    const i=new Proxy({
      
    }, {
      get:(s,o)=>async(...a)=>{
        const l=await this._channel.sendRequest([o,a]);
        if(l.type==="error")throw l.value;
        return l.value
      }
    }), r=new Proxy({
      
    }, {
      get:(s,o)=>(...a)=>{
        this._channel.sendNotification([o,a])
      }
    });
    this.api={
      notifications:r,requests:i
    }
  }
}
}
});
function iiA(n, e){
  const t=globalThis;
  let i=[], r;
  const{
    channel:s, handler:o
  }
  =riA({
    sendNotification:l=>{
      r?r.sendNotification(l):i.push(l)
    }
  });
  let a;
  return(t.$$debugValueEditor_debugChannels??(t.$$debugValueEditor_debugChannels={
    
  }))[n]=l=>{
    a=e(), r=l;
    for(const u of i)l.sendNotification(u);
    return i=[], o
  }, uoh.createClient(s, ()=>{
    if(!a)throw new Error("Not supported");
    return a
  })
}
function riA(n){
  let e;
  return{
    channel:i=>(e=i, {
      sendNotification:r=>{
        n.sendNotification(r)
      },sendRequest:r=>{
        throw new Error("not supported")
      }
    }), handler:{
      handleRequest:i=>i.type==="notification"?e?.handleNotification(i.data):e?.handleRequest(i.data)
    }
  }
}
var siA=