"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerTerminalService.js
// Offset: 33845272 (bundle byte offset)
// Size: 5362 bytes
Wt();
rt();
Er();
yn();
Op();
ADa();
ovn = xi("composerTerminalService");
c$f = 5;
yDa = class extends at {
  constructor(e) {
    super();
    this._lifecycleService = e;
    this._backgroundAITerminals = new Map();
    this._commandDetectionDisposables = new Map();
    this._aiCommandRunning = new Map();
    this._activeToolExecutions = new Map();
    this._onHumanTerminalCommand = new Qe();
    this.onHumanTerminalCommand = this._onHumanTerminalCommand.event;
    this._persistentAITerminals = new svn(c$f, (t, i) => {
      console.log("[ComposerTerminalService] Auto-evicting persistent terminal for composer:", t, i.instanceId);
      if (!i.isDisposed) {
        i.dispose();
      }
    });
    this._register(this._lifecycleService.onWillShutdown(t => {
      console.log("[ComposerTerminalService] App shutting down, cleaning up all AI terminals");
      for (const i of this._persistentAITerminals.keys()) {
        this.cleanupComposerTerminals(i);
      }
    }));
  }
  dispose() {
    for (const e of this._commandDetectionDisposables.values()) {
      e.dispose();
    }
    this._commandDetectionDisposables.clear();
    for (const e of this._persistentAITerminals.keys()) {
      this.cleanupComposerTerminals(e);
    }
    this._onHumanTerminalCommand.dispose();
    super.dispose();
  }
  getPersistentAITerminal(e) {
    const t = this._persistentAITerminals.get(e);
    if (t && !t.isDisposed) {
      return t;
    }
    if (t) {
      this._persistentAITerminals.delete(e);
    }
  }
  registerPersistentAITerminal(e, t) {
    console.log("[ComposerTerminalService] Registering persistent AI terminal for composer:", e, t.instanceId);
    this._persistentAITerminals.set(e, t);
    this._register(t.onDisposed(() => {
      console.log("[ComposerTerminalService] Persistent AI terminal disposed for composer:", e, t.instanceId);
      if (this._persistentAITerminals.get(e) === t) {
        const i = this._commandDetectionDisposables.get(e);
        if (i) {
          i.dispose();
          this._commandDetectionDisposables.delete(e);
        }
        this._persistentAITerminals.delete(e);
        this._aiCommandRunning.delete(e);
        console.log("[ComposerTerminalService] Cleaned up state for manually disposed persistent terminal");
      }
    }));
    this._setupCommandDetectionMonitoring(e, t);
  }
  registerBackgroundAITerminal(e, t) {
    console.log("[ComposerTerminalService] Registering background AI terminal for composer:", e, t.instanceId);
    const i = this._backgroundAITerminals.get(e) || [];
    i.push(t);
    this._backgroundAITerminals.set(e, i);
    this._register(t.onDisposed(() => {
      console.log("[ComposerTerminalService] Background AI terminal disposed for composer:", e, t.instanceId);
      const r = this._backgroundAITerminals.get(e);
      if (r) {
        const s = r.indexOf(t);
        if (s !== -1) {
          r.splice(s, 1);
          console.log("[ComposerTerminalService] Removed disposed background terminal from tracking");
          if (r.length === 0) {
            this._backgroundAITerminals.delete(e);
          }
        }
      }
    }));
    if (i.length > 10) {
      const r = i.shift();
      if (r && !r.isDisposed) {
        console.log("[ComposerTerminalService] Evicting oldest background terminal:", r.instanceId);
        r.dispose();
      }
    }
  }
  isAITerminal(e) {
    for (const [t, i] of this._persistentAITerminals) {
      if (i === e) {
        return true;
      }
    }
    for (const [t, i] of this._backgroundAITerminals) {
      for (const r of i) {
        if (r === e) {
          return true;
        }
      }
    }
    return false;
  }
  getComposerIdForTerminal(e) {
    for (const [t, i] of this._persistentAITerminals) {
      if (i === e) {
        return t;
      }
    }
    for (const [t, i] of this._backgroundAITerminals) {
      for (const r of i) {
        if (r === e) {
          return t;
        }
      }
    }
  }
  setAICommandRunning(e, t) {
    this._aiCommandRunning.set(e, t);
    console.log(`[ComposerTerminalService] AI command running for composer ${e}: ${t}`);
  }
  registerToolExecution(e, t, i) {
    console.log(`[ComposerTerminalService] Registering tool execution for composer ${e}, tool ${t}`);
    if (!this._activeToolExecutions.has(e)) {
      this._activeToolExecutions.set(e, new Map());
    }
    this._activeToolExecutions.get(e).set(t, i);
  }
  unregisterToolExecution(e, t) {
    console.log(`[ComposerTerminalService] Unregistering tool execution for composer ${e}, tool ${t}`);
    const i = this._activeToolExecutions.get(e);
    if (i) {
      i.delete(t);
      if (i.size === 0) {
        this._activeToolExecutions.delete(e);
      }
    }
  }
  cleanupComposerTerminals(e) {
    console.log("[ComposerTerminalService] Cleaning up terminals for composer:", e);
    const t = this._commandDetectionDisposables.get(e);
    if (t) {
      t.dispose();
      this._commandDetectionDisposables.delete(e);
    }
    this._aiCommandRunning.delete(e);
    const i = this._activeToolExecutions.get(e);
    if (i) {
      for (const [o, a] of i) {
        console.log(`[ComposerTerminalService] Aborting remaining tool execution: ${o}`);
        a.abort();
      }
      this._activeToolExecutions.delete(e);
    }
    const r = this._persistentAITerminals.get(e);
    if (r && !r.isDisposed) {
      console.log("[ComposerTerminalService] Disposing shared terminal:", r.instanceId);
      r.dispose();
    }
    this._persistentAITerminals.delete(e);
    const s = this._backgroundAITerminals.get(e);
    if (s) {
      for (const o of s) {
        if (!o.isDisposed) {
          console.log("[ComposerTerminalService] Disposing background terminal:", o.instanceId);
          o.dispose();
        }
      }
    }
    this._backgroundAITerminals.delete(e);
  }
  _setupCommandDetectionMonitoring(e, t) {
    const i = this._commandDetectionDisposables.get(e);
    if (i) {
      i.dispose();
    }
    const r = new Ut();
    this._commandDetectionDisposables.set(e, r);
    let s;
    const o = () => {
      s = setTimeout(a, 500);
      r.add($i(() => clearTimeout(s)));
    };
    const a = () => {
      if (r.isDisposed) {
        return;
      }
      const l = t.capabilities.get(2);
      if (l) {
        console.log("[ComposerTerminalService] Setting up command detection monitoring for composer:", e);
        const u = l.onCommandFinished(d => {
          const m = (this._activeToolExecutions.get(e)?.size ?? 0) > 0;
          if (!(this._aiCommandRunning.get(e) ?? false) && !m && d.command) {
            console.log("[ComposerTerminalService] Detected human-run command:", d.command);
            this._onHumanTerminalCommand.fire({
              composerId: e,
              command: d.command,
              terminalResource: t.resource
            });
          }
        });
        r.add(u);
      } else {
        o();
      }
    };
    a();
  }
};
yDa = __decorate([__param(0, ap)], yDa);
Vi(ovn, yDa, 2);
