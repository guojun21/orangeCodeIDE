// Module: out-build/external/sentry/core/utils/vercelWaitUntil.js
// Offset: 199733 (bundle byte offset)
// Size: 789 bytes

c3()
}
});
async function hMo(n){
  try{
    Jo.log("Flushing events..."), await $yc(n), Jo.log("Done flushing events")
  }
  catch(e){
    Jo.log(`Error while flushing events:
`, e)
  }
}
async function $Xv(n={
  
}){
  const{
    timeout:e=2e3
  }
  =n;
  if("cloudflareWaitUntil"in n&&typeof n?.cloudflareWaitUntil=="function"){
    n.cloudflareWaitUntil(hMo(e));
    return
  }
  if("cloudflareCtx"in n&&typeof n.cloudflareCtx?.waitUntil=="function"){
    n.cloudflareCtx.waitUntil(hMo(e));
    return
  }
  if(Ev[Symbol.for("@vercel/request-context")]){
    vth(hMo(e));
    return
  }
  if(typeof process>"u")return;
  (!!process.env.FUNCTIONS_WORKER_RUNTIME||!!process.env.LAMBDA_TASK_ROOT||!!process.env.K_SERVICE||!!process.env.CF_PAGES||!!process.env.VERCEL||!!process.env.NETLIFY)&&await hMo(e)
}
var qXv=