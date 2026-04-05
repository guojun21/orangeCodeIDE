"use strict";

// Module: out-build/vs/platform/quickinput/common/quickAccess.js
// Offset: 27603970 (bundle byte offset)
// Size: 966 bytes
Vs();
rt();
Ws();
(function (n) {
  n[n.PRESERVE = 0] = "PRESERVE";
  n[n.LAST = 1] = "LAST";
})(vmn ||= {});
kJ = {
  Quickaccess: "workbench.contributions.quickaccess"
};
IJg = class {
  constructor() {
    this.providers = [];
    this.defaultProvider = undefined;
  }
  registerQuickAccessProvider(n) {
    if (n.prefix.length === 0) {
      this.defaultProvider = n;
    } else {
      this.providers.push(n);
    }
    this.providers.sort((e, t) => t.prefix.length - e.prefix.length);
    return $i(() => {
      this.providers.splice(this.providers.indexOf(n), 1);
      if (this.defaultProvider === n) {
        this.defaultProvider = undefined;
      }
    });
  }
  getQuickAccessProviders() {
    return lh([this.defaultProvider, ...this.providers]);
  }
  getQuickAccessProvider(n) {
    return n && this.providers.find(t => n.startsWith(t.prefix)) || undefined || this.defaultProvider;
  }
  clear() {
    const n = [...this.providers];
    const e = this.defaultProvider;
    this.providers = [];
    this.defaultProvider = undefined;
    return () => {
      this.providers = n;
      this.defaultProvider = e;
    };
  }
};
Di.add(kJ.Quickaccess, new IJg());
