"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/explorerFileContrib.js
// Offset: 32469761 (bundle byte offset)
// Size: 2109 bytes
yn();
rt();
Ws();
(function (n) {
  n.FileContributionRegistry = "workbench.registry.explorer.fileContributions";
})(UOf ||= {});
$Of = class extends at {
  constructor() {
    super(...arguments);
    this._onDidRegisterDescriptor = this._register(new Qe());
    this.onDidRegisterDescriptor = this._onDidRegisterDescriptor.event;
    this.descriptors = [];
  }
  register(n) {
    this.descriptors.push(n);
    this._onDidRegisterDescriptor.fire(n);
  }
  create(n, e, t) {
    return this.descriptors.map(i => {
      const r = i.create(n, e);
      t.add(r);
      return r;
    });
  }
};
oEa = new $Of();
Di.add("workbench.registry.explorer.fileContributions", oEa);
