"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js
// Offset: 30430522 (bundle byte offset)
// Size: 1625 bytes
Ti();
$Sf = class {
  constructor(n, e, t) {
    this._composerHandle = n;
    this._powerMainService = e;
    this._logService = t;
    this._disposed = false;
    this._pendingOp = Promise.resolve();
    if (!this._composerHandle.data.hasBlockingPendingActions) {
      this._acquire("agent-loop");
    }
    this._setupReactiveWatch();
  }
  _acquire(n) {
    this._pendingOp = this._pendingOp.then(async () => {
      if (!this._disposed) {
        try {
          const e = await this._powerMainService.startWakelock(n);
          if (this._disposed) {
            await this._powerMainService.stopWakelock(e);
            return;
          }
          this._wakelockId = e;
          this._logService.info(`[ComposerWakelockManager] Acquired wakelock id=${e} reason="${n}" composerId=${this._composerHandle.composerId}`);
        } catch (e) {
          this._logService.warn(`[ComposerWakelockManager] Failed to acquire wakelock: ${e}`);
        }
      }
    });
  }
  _release(n) {
    this._pendingOp = this._pendingOp.then(async () => {
      const e = this._wakelockId;
      if (e !== undefined) {
        this._wakelockId = undefined;
        try {
          await this._powerMainService.stopWakelock(e);
          this._logService.info(`[ComposerWakelockManager] Released wakelock id=${e} reason="${n}" composerId=${this._composerHandle.composerId}`);
        } catch (t) {
          this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${e}: ${t}`);
        }
      }
    });
  }
  _setupReactiveWatch() {
    this._disposeReactive = iI(n => {
      An(Bf(() => this._composerHandle.data.hasBlockingPendingActions, (e, t) => {
        if (!this._disposed) {
          if (e && !t) {
            this._release("user-approval-requested");
          } else if (!e && t) {
            this._acquire("agent-loop-resumed");
          }
        }
      }, {
        defer: true
      }));
      return n;
    });
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._disposeReactive?.();
      this._disposeReactive = undefined;
      this._release("generation-ended");
    }
  }
};
