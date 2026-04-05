// Module: out-build/external/sentry/core/integrations/featureFlags/index.js
// Offset: 134249 (bundle byte offset)
// Size: 914 bytes

wKv(), oXd()
}
});
function aXd(n){
  return!!n&&typeof n._profiler<"u"&&typeof n._profiler.start=="function"&&typeof n._profiler.stop=="function"
}
function CKv(){
  const n=sm();
  if(!n){
    Lg&&Jo.warn("No Sentry client available, profiling is not started");
    return
  }
  const e=n.getIntegrationByName("ProfilingIntegration");
  if(!e){
    Lg&&Jo.warn("ProfilingIntegration is not available");
    return
  }
  if(!aXd(e)){
    Lg&&Jo.warn("Profiler is not available on profiling integration.");
    return
  }
  e._profiler.start()
}
function SKv(){
  const n=sm();
  if(!n){
    Lg&&Jo.warn("No Sentry client available, profiling is not started");
    return
  }
  const e=n.getIntegrationByName("ProfilingIntegration");
  if(!e){
    Lg&&Jo.warn("ProfilingIntegration is not available");
    return
  }
  if(!aXd(e)){
    Lg&&Jo.warn("Profiler is not available on profiling integration.");
    return
  }
  e._profiler.stop()
}
var cXd, kKv=