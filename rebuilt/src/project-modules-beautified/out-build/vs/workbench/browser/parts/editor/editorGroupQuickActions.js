"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorGroupQuickActions.js
// Offset: 31397019 (bundle byte offset)
// Size: 2217 bytes
ri();
rt();
hs();
Ei();
si();
Wt();
ka();
Pa();
ps();
r8();
od();
Op();
Wf();
$oy();
joy();
jka = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super();
    this.group = t;
    this.lifecycleService = i;
    this.keybindingService = r;
    this.contextService = s;
    this.contextKeyService = o;
    this.configurationService = a;
    this.telemetryService = l;
    this.commandService = u;
    this.remoteAgentService = d;
    this.instantiationService = m;
    this.editorGroupsService = p;
    this.backgroundComposerService = g;
    this.isInEmbeddedAuxBarEditor = !!e.closest(".embedded-aux-bar-editor");
    this.mainDiv = kl(".editorCursorMainDiv").root;
    this.mainDiv.style.height = "100%";
    Rt(e, this.mainDiv);
    this._register(Goy(this.mainDiv, this.instantiationService));
    const f = kl(".editorBcQuickAction").root;
    f.style.height = "100%";
    Rt(e, f);
    this._register(Uoy(f, this.instantiationService));
    this.workbenchState = s.getWorkbenchState();
    this.registerListeners();
    this.render();
  }
  registerListeners() {
    this._register(this.lifecycleService.onDidShutdown(() => this.dispose()));
    this._register(this.contextService.onDidChangeWorkbenchState(e => {
      if (this.workbenchState !== e) {
        this.workbenchState = e;
        this.render();
      }
    }));
    this._register(this.group.onDidModelChange(() => {
      this.render();
    }));
    this._register(this.editorGroupsService.onDidChangeActiveGroup(e => {
      this.render();
    }));
  }
  render() {
    const e = this.workbenchState !== 1;
    const t = !this.group.isEmpty;
    if (this.isInEmbeddedAuxBarEditor) {
      this.mainDiv.style.display = "none";
      const s = this.mainDiv.parentElement?.querySelector(".editorBcQuickAction") ?? undefined;
      if (s) {
        s.style.display = "none";
      }
      return;
    }
    if (!e && !t) {
      this.mainDiv.style.display = "block";
    } else {
      this.mainDiv.style.display = "none";
    }
    const r = this.mainDiv.parentElement?.querySelector(".editorBcQuickAction") ?? undefined;
    if (r) {
      const s = !!this.backgroundComposerService?.bcIdForThisWindow() && this.editorGroupsService.count === 1 && this.group.isEmpty;
      r.style.display = s ? "block" : "none";
    }
    this.telemetryService.publicLog("actionMenu open");
  }
  dispose() {
    super.dispose();
  }
};
jka = __decorate([__param(2, ap), __param(3, mo), __param(4, Lr), __param(5, wi), __param(6, Fn), __param(7, ea), __param(8, fr), __param(9, Vp), __param(10, ln), __param(11, da), __param(12, rx)], jka);
