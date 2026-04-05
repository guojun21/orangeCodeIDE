// Deep recovered from recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js
// Cluster: composer-core-names
// webcrackUsed: true
// lockedRenames: 1
// llmRenamesAccepted: 0
// llmEnabled: false
"use strict";
"use strict";

dty();
ComposerAgentProviderRouter = class {
  constructor(n, e, t, i, r, s, o) {
    this.agentHandles = new Map();
    this.naiveComposerAgentProvider = new PSf(n, e, t, i, r, s, o);
  }
  createAgentHandle(n, e) {
    const t = this.agentHandles.get(n);
    if (t) {
      return t;
    }
    const i = this.naiveComposerAgentProvider.loadAgent(n, e, e.data.agentBackendData ?? {});
    this.agentHandles.set(n, i);
    return i;
  }
  getAgentHandle(n) {
    return this.agentHandles.get(n);
  }
  removeAgentHandle(n) {
    this.agentHandles.delete(n);
  }
};
