// Module: out-build/external/sentry/core/utils/ratelimit.js
// Offset: 99557 (bundle byte offset)
// Size: 874 bytes

hwc=60*1e3
}
});
function eFt(n, e, t=o2n(n.bufferSize||WYd)){
  let i={
    
  };
  const r=o=>t.drain(o);
  function s(o){
    const a=[];
    if(bBe(o, (m, p)=>{
      const g=pyc(p);
      uwc(i,g)?n.recordDroppedEvent("ratelimit_backoff",g):a.push(m)
    }), a.length===0)return Promise.resolve({
      
    });
    const l=fte(o[0], a), u=m=>{
      bBe(l,(p,g)=>{
        n.recordDroppedEvent(m,pyc(g))
      })
    }, d=()=>e({
      body:z2t(l)
    }).then(m=>(m.statusCode!==void 0&&(m.statusCode<200||m.statusCode>=300)&&Lg&&Jo.warn(`Sentry responded with status code ${m.statusCode} to sent event.`), i=dwc(i, m), m), m=>{
      throw u("network_error"),Lg&&Jo.error("Encountered error running transport request:",m),m
    });
    return t.add(d).then(m=>m, m=>{
      if(m===INo)return Lg&&Jo.error("Skipped sending event because buffer is full."),u("queue_overflow"),Promise.resolve({
        
      });
      throw m
    })
  }
  return{
    send:s, flush:r
  }
}
var WYd, eVv=