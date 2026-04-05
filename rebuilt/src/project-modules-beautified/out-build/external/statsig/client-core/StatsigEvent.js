"use strict";

// Module: out-build/external/statsig/client-core/StatsigEvent.js
// Offset: 26675659 (bundle byte offset)
// Size: 1483 bytes
Ntu = "statsig::config_exposure";
Mtu = "statsig::gate_exposure";
Ftu = "statsig::layer_exposure";
Hpa = (n, e, t, i, r) => {
  if (t.bootstrapMetadata) {
    i.bootstrapMetadata = t.bootstrapMetadata;
  }
  return {
    eventName: n,
    user: e,
    value: null,
    metadata: t2g(t, i),
    secondaryExposures: r,
    time: Date.now()
  };
};
ZMg = ({
  eventName: n
}) => n === Mtu || n === Ntu || n === Ftu;
XMg = (n, e, t) => {
  const i = {
    gate: e.name,
    gateValue: String(e.value),
    ruleID: e.ruleID
  };
  if (e.__evaluation?.version != null) {
    i.configVersion = e.__evaluation.version;
  }
  return Hpa(Mtu, n, e.details, i, qpa(e.__evaluation?.secondary_exposures ?? [], t));
};
Otu = (n, e, t) => {
  const i = {
    config: e.name,
    ruleID: e.ruleID
  };
  if (e.__evaluation?.version != null) {
    i.configVersion = e.__evaluation.version;
  }
  if (e.__evaluation?.passed != null) {
    i.rulePassed = String(e.__evaluation.passed);
  }
  return Hpa(Ntu, n, e.details, i, qpa(e.__evaluation?.secondary_exposures ?? [], t));
};
e2g = (n, e, t, i) => {
  const r = e.__evaluation;
  const s = r?.explicit_parameters?.includes(t) === true;
  let o = "";
  let a = r?.undelegated_secondary_exposures ?? [];
  if (s) {
    o = r.allocated_experiment_name ?? "";
    a = r.secondary_exposures ?? [];
  }
  const l = e.__evaluation?.parameter_rule_ids;
  const u = {
    config: e.name,
    parameterName: t,
    ruleID: l?.[t] ?? e.ruleID,
    allocatedExperiment: o,
    isExplicitParameter: String(s)
  };
  if (e.__evaluation?.version != null) {
    u.configVersion = e.__evaluation.version;
  }
  return Hpa(Ftu, n, e.details, u, qpa(a, i));
};
t2g = (n, e) => {
  e.reason = n.reason;
  if (n.lcut) {
    e.lcut = String(n.lcut);
  }
  if (n.receivedAt) {
    e.receivedAt = String(n.receivedAt);
  }
  return e;
};
