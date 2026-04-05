// Module: out-build/vs/platform/reactivestorage/common/aiCodeTypes.js
// Offset: 27500127 (bundle byte offset)
// Size: 1175 bytes

(function(n){
  n.TAB="tab", n.COMPOSER="composer", n.HUMAN="human"
})(rO||(rO={
  
}))
}
});
function cmn(n, e){
  let t;
  return(...r)=>{
    clearTimeout(t), t=setTimeout(()=>n(...r), e)
  }
}
function j2A(n, e){
  return cJg(n, e)[0]
}
function cJg(n, e){
  let t, i=-(e+1);
  return[(...s)=>{
    if(performance.now()-i>e)clearTimeout(t), n(...s), i=performance.now();
    else{
      clearTimeout(t);
      const o=Math.max(e-(performance.now()-i),0);
      t=setTimeout(()=>{
        n(...s),i=performance.now()
      },o)
    }
  }, ()=>clearTimeout(t)]
}
function z2A(n, e, t){
  const i={
    
  };
  return(...s)=>{
    const o=e(...s);
    clearTimeout(i[o]), i[o]=setTimeout(()=>n(...s), t)
  }
}
async function Dfa(n, e){
  let t=0, i=e.initialRetryTimeMs;
  for(;
  t<e.maxNumberOfRetries;
  )try{
    if(e.signal?.aborted)throw new Error("Aborted");
    const r=await n();
    if(e.shouldRetry?.(r)){
      if(t++,t>=e.maxNumberOfRetries)return r;
      await new Promise(s=>setTimeout(s,i)),i=Math.min(i*2,e.maxDelayMs??1/0);
      continue
    }
    return r
  }
  catch(r){
    if(r instanceof Error&&r.message==="Aborted"||(t++, t>=e.maxNumberOfRetries))throw r;
    await new Promise(s=>setTimeout(s, i)), i=Math.min(i*2, e.maxDelayMs??1/0)
  }
  throw new Error("Max retries reached")
}
var lJg, UNe=