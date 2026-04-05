"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerCapabilities.js
// Offset: 26906685 (bundle byte offset)
// Size: 3414 bytes
eu();
Ti();
gT();
Uv();
rt();
Js();
S$e();
jk();
GFg = [ko.UNSPECIFIED, ko.LOOP_ON_TESTS, ko.LOOP_ON_COMMAND, ko.LOOP_ON_LINTS, ko.BROWSER_AGENT];
C2A = Object.values(ko).filter(n => typeof n == "number" && !GFg.includes(n));
evi = Object.fromEntries(Object.entries(Unu).map(([n, e]) => [n, b2A(e)]));
Pq = class extends at {
  constructor(n, e, t) {
    super();
    this.composerDataService = t;
    this.abortController = null;
    this.composerId = n;
    this.data = {
      ...e
    };
    [this.isEnabled, this.setIsEnabled] = lt(true);
    [this.isEnabledForRequest, this.setIsEnabledForRequest] = lt(true);
  }
  setProvidedHandle(n) {
    this._providedHandleRef = new WeakRef(n);
  }
  getComposerHandle() {
    const n = this._providedHandleRef?.deref();
    if (n) {
      return n;
    }
    const e = this.composerDataService.getHandleIfLoaded(this.composerId);
    if (!e) {
      throw new Error(`[ComposerCapability] Composer ${this.composerId} is not loaded. Are you obtaining a handle to the composer during its disposal?`);
    }
    return e;
  }
  providedContextInformation(n) {}
  isBackgroundOnly() {
    return false;
  }
  shouldRunOnStartSubmitChat() {
    return !!this.onStartSubmitChatReturnShouldStop;
  }
  shouldRunOnBeforeSubmitChat() {
    return !!this.onBeforeSubmitChat;
  }
  shouldRunOnChatStreamFinished() {
    return !!this.onChatStreamFinished;
  }
  shouldRunOnComposerDone() {
    return !!this.onComposerDone;
  }
  shouldRunOnAddPendingAction() {
    return !!this.onAddPendingAction;
  }
  shouldRunOnAcceptAllEdits() {
    return !!this.onAcceptAllEdits;
  }
  shouldRunOnBeforeApply() {
    return !!this.onBeforeApply;
  }
  toString() {
    return this.serialize();
  }
  serialize() {
    return JSON.stringify(this.toJSON());
  }
  deserialize(n) {
    const e = JSON.parse(n);
    const t = this.constructor;
    return new t(this.composerId, e, this.composerDataService);
  }
  toJSON() {
    this.onWillSaveState();
    return {
      type: this.type,
      data: this.data
    };
  }
  cancel() {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }
  onWillSaveState() {}
  onAborted() {}
  isAborted() {
    if (this.abortController) {
      return this.abortController.signal.aborted;
    } else {
      return true;
    }
  }
  isRunning() {
    return this.abortController !== null && !this.isAborted();
  }
  getAbortSignal() {
    this.abortController ||= new AbortController();
    return this.abortController.signal;
  }
  dispose() {
    this.cancel();
    this.data = evi[this.type];
    super.dispose();
  }
};
$nu = class AQb {
  static {
    this.INSTANCE = new AQb();
  }
  static registerCapability(e, t) {
    this.INSTANCE.capabilitiesMap[e] = t;
  }
  static getCapabilities(e, t, i) {
    let r = [];
    if (i?.forceCapabilities !== undefined) {
      r = i.forceCapabilities.map(a => ({
        type: a,
        data: evi[a]
      }));
    } else {
      const a = (i?.savedCapabilityData || []).filter(u => Zjl.some(d => d === u.type));
      const l = Zjl.filter(u => !a.some(d => d.type === u)).map(u => ({
        type: u,
        data: evi[u]
      }));
      r = [...a, ...l];
    }
    if (e.invokeFunction(a => a.get(Cc).isGlass)) {
      r = r.filter(a => a.type !== ko.BACKGROUND_COMPOSER);
    }
    const o = r.map(a => {
      try {
        const l = this.INSTANCE.capabilitiesMap[a.type];
        if (!l || !this.getSchema(a.type)) {
          return;
        }
        const m = {
          ...this.INSTANCE.getDefaultDataForCapability(a.type),
          ...(a.data || {})
        };
        const p = e.createInstance(l, t, m);
        if (i?.providedHandle) {
          p.setProvidedHandle(i.providedHandle);
        }
        return p;
      } catch (l) {
        console.error(`[compsoerCapabilities] Error creating capability ${a.type}`, l);
        return;
      }
    }).filter(Ch);
    return y2A(o);
  }
  static getSchema(e) {
    return Unu[e];
  }
  static createInstance(e, t, i, r) {
    const s = this.INSTANCE.capabilitiesMap[i];
    if (!s) {
      throw new Error(`No constructor found for capability type: ${i}`);
    }
    return e.createInstance(s, t, r);
  }
  getDefaultDataForCapability(e) {
    return evi[e] || {};
  }
  constructor() {
    this.capabilitiesMap = {};
  }
};
