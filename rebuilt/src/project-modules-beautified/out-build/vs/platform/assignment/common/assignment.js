"use strict";

// Module: out-build/vs/platform/assignment/common/assignment.js
// Offset: 30908432 (bundle byte offset)
// Size: 1822 bytes
_r();
Oxf = "VSCode.ABExp.FeatureData";
Uxf = 0;
(function (n) {
  n.Insiders = "insider";
  n.Public = "public";
  n.Exploration = "exploration";
})(B_i ||= {});
(function (n) {
  n.Market = "X-MSEdge-Market";
  n.CorpNet = "X-FD-Corpnet";
  n.ApplicationVersion = "X-VSCode-AppVersion";
  n.Build = "X-VSCode-Build";
  n.ClientId = "X-MSEdge-ClientId";
  n.ExtensionName = "X-VSCode-ExtensionName";
  n.ExtensionVersion = "X-VSCode-ExtensionVersion";
  n.Language = "X-VSCode-Language";
  n.TargetPopulation = "X-VSCode-TargetPopulation";
})(PMe ||= {});
$xf = class PQb {
  constructor(e, t, i, r) {
    this.version = e;
    this.appName = t;
    this.machineId = i;
    this.targetPopulation = r;
  }
  static trimVersionSuffix(e) {
    const t = /\-[a-zA-Z0-9]+$/;
    return e.split(t)[0];
  }
  getFilterValue(e) {
    switch (e) {
      case PMe.ApplicationVersion:
        return PQb.trimVersionSuffix(this.version);
      case PMe.Build:
        return this.appName;
      case PMe.ClientId:
        return this.machineId;
      case PMe.Language:
        return yC;
      case PMe.ExtensionName:
        return "vscode-core";
      case PMe.ExtensionVersion:
        return "999999.0";
      case PMe.TargetPopulation:
        return this.targetPopulation;
      default:
        return "";
    }
  }
  getFilters() {
    const e = new Map();
    const t = Object.values(PMe);
    for (const i of t) {
      e.set(i, this.getFilterValue(i));
    }
    return e;
  }
};
