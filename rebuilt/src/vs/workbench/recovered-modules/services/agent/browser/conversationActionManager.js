"use strict";

// Module: out-build/vs/workbench/services/agent/browser/conversationActionManager.js
// Offset: 30148236 (bundle byte offset)
// Size: 2026 bytes
rkt();
cp();
Bie();
jpn = class extends RAi {
  constructor(n, e, t, i) {
    super();
    this.composerId = n;
    this.composerAbortController = e;
    this.instantiationService = t;
    this.generationUUID = i;
    this.addAbortCallback(() => {
      const r = this.instantiationService.invokeFunction(l => l.get(wM));
      const s = this.instantiationService.invokeFunction(l => l.get(Oa));
      const o = s.getHandleIfLoaded(this.composerId);
      if (!o) {
        return;
      }
      const a = s.getComposerData(o);
      if (a?.status === "generating" && a?.chatGenerationUUID === this.generationUUID) {
        r.handleAbortChat(o);
        s.updateComposerDataSetStore(o, l => l("conversationActionManager", undefined));
      }
    });
    if (this.composerAbortController.signal.aborted) {
      this.abort("composer_abort_controller_already_aborted");
    } else {
      this.composerAbortControllerListener = () => this.abort("composer_abort_controller_aborted");
      this.composerAbortController.signal.addEventListener("abort", this.composerAbortControllerListener, {
        once: true
      });
    }
    if (!this.signal.aborted) {
      this.signalListener = () => {
        const r = this.signal.reason ?? "linked_signal_aborted";
        this.composerAbortController.abort(r);
      };
      this.signal.addEventListener("abort", this.signalListener, {
        once: true
      });
    } else {
      const r = this.signal.reason ?? "linked_signal_already_aborted";
      this.composerAbortController.abort(r);
    }
  }
  getGenerationUUID() {
    return this.generationUUID;
  }
  dispose() {
    super.dispose();
    if (this.composerAbortControllerListener && !this.composerAbortController.signal.aborted) {
      this.composerAbortController.signal.removeEventListener("abort", this.composerAbortControllerListener);
      this.composerAbortControllerListener = undefined;
    }
    if (this.signalListener && !this.signal.aborted) {
      this.signal.removeEventListener("abort", this.signalListener);
      this.signalListener = undefined;
    }
  }
};
