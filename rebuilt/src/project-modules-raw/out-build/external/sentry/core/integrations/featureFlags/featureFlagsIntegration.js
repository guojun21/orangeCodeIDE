// Module: out-build/external/sentry/core/integrations/featureFlags/featureFlagsIntegration.js
// Offset: 133530 (bundle byte offset)
// Size: 377 bytes

sW(), Rwc(), jNo=()=>({
  name:"FeatureFlags", processEvent(n, e, t){
    return Fpt(n)
  }, addFeatureFlag(n, e){
    uze(n, e), dze(n, e)
  }
})
}
});
function sXd(n){
  return function(...e){
    const t=e[0], i=n.apply(this, e);
    return typeof t=="string"&&typeof i=="boolean"&&(uze(t, i), dze(t, i)), i
  }
}
var Pwc, oXd=