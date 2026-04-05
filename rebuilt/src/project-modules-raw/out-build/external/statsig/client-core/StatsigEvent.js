// Module: out-build/external/statsig/client-core/StatsigEvent.js
// Offset: 26675659 (bundle byte offset)
// Size: 1483 bytes

Ntu="statsig::config_exposure", Mtu="statsig::gate_exposure", Ftu="statsig::layer_exposure", Hpa=(n, e, t, i, r)=>(t.bootstrapMetadata&&(i.bootstrapMetadata=t.bootstrapMetadata), {
  eventName:n, user:e, value:null, metadata:t2g(t, i), secondaryExposures:r, time:Date.now()
}), ZMg=({
  eventName:n
})=>n===Mtu||n===Ntu||n===Ftu, XMg=(n, e, t)=>{
  const i={
    gate:e.name, gateValue:String(e.value), ruleID:e.ruleID
  };
  return e.__evaluation?.version!=null&&(i.configVersion=e.__evaluation.version), Hpa(Mtu, n, e.details, i, qpa(e.__evaluation?.secondary_exposures??[], t))
}, Otu=(n, e, t)=>{
  const i={
    config:e.name, ruleID:e.ruleID
  };
  return e.__evaluation?.version!=null&&(i.configVersion=e.__evaluation.version), e.__evaluation?.passed!=null&&(i.rulePassed=String(e.__evaluation.passed)), Hpa(Ntu, n, e.details, i, qpa(e.__evaluation?.secondary_exposures??[], t))
}, e2g=(n, e, t, i)=>{
  const r=e.__evaluation, s=r?.explicit_parameters?.includes(t)===!0;
  let o="", a=r?.undelegated_secondary_exposures??[];
  s&&(o=r.allocated_experiment_name??"", a=r.secondary_exposures??[]);
  const l=e.__evaluation?.parameter_rule_ids, u={
    config:e.name, parameterName:t, ruleID:l?.[t]??e.ruleID, allocatedExperiment:o, isExplicitParameter:String(s)
  };
  return e.__evaluation?.version!=null&&(u.configVersion=e.__evaluation.version), Hpa(Ftu, n, e.details, u, qpa(a, i))
}, t2g=(n, e)=>(e.reason=n.reason, n.lcut&&(e.lcut=String(n.lcut)), n.receivedAt&&(e.receivedAt=String(n.receivedAt)), e)
}
}), Dtt, Utu, $bi=