"use strict";

// Module: out-build/vs/workbench/services/agent/browser/backgroundWorkRegistry.js
// Offset: 30552244 (bundle byte offset)
// Size: 2323 bytes
VNe();
yn();
rt();
Er();
Wt();
Tw();
ogn = xi("backgroundWorkService");
KSf = class extends at {
  constructor() {
    super(...arguments);
    this._shellWorkById = new Map();
    this._subagentWorkById = new Map();
    this._pendingCompletionsByComposerId = new Map();
    this._onDidEnqueueCompletion = this._register(new Qe());
    this.onDidEnqueueCompletion = this._onDidEnqueueCompletion.event;
    this.backgroundWorkItems = this._register(new j_([]));
  }
  _publish() {
    this.backgroundWorkItems.change([...this._subagentWorkById.values(), ...this._shellWorkById.values()]);
  }
  getComposerBackgroundWork(n) {
    return this.backgroundWorkItems.value.filter(e => e.composerId === n);
  }
  enqueueCompletion(n) {
    const e = this._pendingCompletionsByComposerId.get(n.composerId) ?? [];
    e.push(n);
    this._pendingCompletionsByComposerId.set(n.composerId, e);
    this._onDidEnqueueCompletion.fire({
      composerId: n.composerId
    });
  }
  hasPendingCompletions(n) {
    const e = this._pendingCompletionsByComposerId.get(n);
    return e !== undefined && e.length > 0;
  }
  drainCompletions(n) {
    const e = this._pendingCompletionsByComposerId.get(n);
    if (!e || e.length === 0) {
      return [];
    } else {
      this._pendingCompletionsByComposerId.delete(n);
      return [...e];
    }
  }
  replaceShellWorkSnapshot(n) {
    this._shellWorkById.clear();
    for (const e of n) {
      if (e.kind === "shell") {
        this._shellWorkById.set(e.id, e);
      }
    }
    this._publish();
  }
  upsertShellWork(n) {
    if (n.kind === "shell") {
      this._shellWorkById.set(n.id, n);
      this._publish();
    }
  }
  clearShellWork(n) {
    if (this._shellWorkById.delete(n)) {
      this._publish();
    }
  }
  async openBackgroundShell(n) {
    return this._shellOpener?.(n) ?? false;
  }
  upsertSubagentWork(n) {
    if (n.kind === "subagent") {
      this._subagentWorkById.set(n.id, n);
      this._publish();
    }
  }
  clearSubagentWork(n) {
    if (this._subagentWorkById.delete(n)) {
      this._publish();
    }
  }
  async killBackgroundWork(n) {
    switch (n.kind) {
      case "shell":
        {
          const e = await this._shellKiller?.(n.id);
          if (e) {
            this.clearShellWork(n.id);
          }
          return e ?? false;
        }
      case "subagent":
        {
          const e = await this._subagentKiller?.(n.id);
          if (e) {
            this.clearSubagentWork(n.id);
          }
          return e ?? false;
        }
      default:
        return Pty(n.kind);
    }
  }
  registerShellKiller(n) {
    this._shellKiller = n;
    return $i(() => {
      if (this._shellKiller === n) {
        this._shellKiller = undefined;
      }
    });
  }
  registerShellOpener(n) {
    this._shellOpener = n;
    return $i(() => {
      if (this._shellOpener === n) {
        this._shellOpener = undefined;
      }
    });
  }
  registerSubagentKiller(n) {
    this._subagentKiller = n;
    return $i(() => {
      if (this._subagentKiller === n) {
        this._subagentKiller = undefined;
      }
    });
  }
};
Vi(ogn, KSf, 1);
