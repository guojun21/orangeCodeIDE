"use strict";

// Module: out-build/vs/editor/contrib/codeAction/browser/codeActionModel.js
// Offset: 4174560 (bundle byte offset)
// Size: 6666 bytes
vr();
_s();
yn();
QY();
rt();
Yr();
si();
pk();
tl();
db();
BW();
mve();
p5c = new Sn("supportedCodeAction", "");
g5c = "_typescript.applyFixAllCodeAction";
cJh = class extends at {
  constructor(n, e, t, i = 250) {
    super();
    this._editor = n;
    this._markerService = e;
    this._signalChange = t;
    this._delay = i;
    this._autoTriggerTimer = this._register(new O$());
    this._register(this._markerService.onMarkerChanged(r => this._onMarkerChanges(r)));
    this._register(this._editor.onDidChangeCursorPosition(() => this._tryAutoTrigger()));
  }
  trigger(n) {
    const e = this._getRangeOfSelectionUnlessWhitespaceEnclosed(n);
    this._signalChange(e ? {
      trigger: n,
      selection: e
    } : undefined);
  }
  _onMarkerChanges(n) {
    const e = this._editor.getModel();
    if (e && n.some(t => Zc(t, e.uri))) {
      this._tryAutoTrigger();
    }
  }
  _tryAutoTrigger() {
    this._autoTriggerTimer.cancelAndSet(() => {
      this.trigger({
        type: 2,
        triggerAction: E9.Default
      });
    }, this._delay);
  }
  _getRangeOfSelectionUnlessWhitespaceEnclosed(n) {
    if (!this._editor.hasModel()) {
      return;
    }
    const e = this._editor.getSelection();
    if (n.type === 1) {
      return e;
    }
    const t = this._editor.getOption(66).enabled;
    if (t !== Foe.Off) {
      {
        if (t === Foe.On) {
          return e;
        }
        if (t === Foe.OnCode) {
          if (!e.isEmpty()) {
            return e;
          }
          const r = this._editor.getModel();
          const {
            lineNumber: s,
            column: o
          } = e.getPosition();
          const a = r.getLineContent(s);
          if (a.length === 0) {
            return;
          }
          if (o === 1) {
            if (/\s/.test(a[0])) {
              return;
            }
          } else if (o === r.getLineMaxColumn(s)) {
            if (/\s/.test(a[a.length - 1])) {
              return;
            }
          } else if (/\s/.test(a[o - 2]) && /\s/.test(a[o - 1])) {
            return;
          }
        }
      }
      return e;
    }
  }
};
(function (n) {
  let e;
  (function (i) {
    i[i.Empty = 0] = "Empty";
    i[i.Triggered = 1] = "Triggered";
  })(e = n.Type ||= {});
  n.Empty = {
    type: 0
  };
  class t {
    constructor(r, s, o) {
      this.trigger = r;
      this.position = s;
      this._cancellablePromise = o;
      this.type = 1;
      this.actions = o.catch(a => {
        if (bf(a)) {
          return r$o;
        }
        throw a;
      });
    }
    cancel() {
      this._cancellablePromise.cancel();
    }
  }
  n.Triggered = t;
})(Dvt ||= {});
r$o = Object.freeze({
  allActions: [],
  validActions: [],
  dispose: () => {},
  documentation: [],
  hasAutoFix: false,
  hasAIFix: false,
  allAIFixes: false
});
lJh = class extends at {
  constructor(n, e, t, i, r, s, o, a) {
    super();
    this._editor = n;
    this._registry = e;
    this._markerService = t;
    this._progressService = r;
    this.keybindingService = s;
    this._configurationService = o;
    this._reactiveStorageService = a;
    this._codeActionOracle = this._register(new uo());
    this._state = Dvt.Empty;
    this._onDidChangeState = this._register(new Qe());
    this.onDidChangeState = this._onDidChangeState.event;
    this.codeActionsDisposable = this._register(new uo());
    this._disposed = false;
    this._supportedCodeActions = p5c.bindTo(i);
    this._register(this._editor.onDidChangeModel(() => this._update()));
    this._register(this._editor.onDidChangeModelLanguage(() => this._update()));
    this._register(this._registry.onDidChange(() => this._update()));
    this._register(this._editor.onDidChangeConfiguration(l => {
      if (l.hasChanged(66)) {
        this._update();
      }
    }));
    this._update();
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      super.dispose();
      this.setState(Dvt.Empty, true);
    }
  }
  _settingEnabledNearbyQuickfixes() {
    const n = this._editor?.getModel();
    if (this._configurationService) {
      return this._configurationService.getValue("editor.codeActionWidget.includeNearbyQuickFixes", {
        resource: n?.uri
      });
    } else {
      return false;
    }
  }
  _update() {
    if (this._disposed) {
      return;
    }
    this._codeActionOracle.value = undefined;
    this.setState(Dvt.Empty);
    const n = this._editor.getModel();
    if (n && this._registry.has(n) && !this._editor.getOption(96)) {
      const e = this._registry.all(n).flatMap(t => t.providedCodeActionKinds ?? []);
      this._supportedCodeActions.set(e.join(" "));
      this._codeActionOracle.value = new cJh(this._editor, this._markerService, t => {
        if (!t) {
          this.setState(Dvt.Empty);
          return;
        }
        const i = t.selection.getStartPosition();
        const r = dw(async a => {
          if (this._settingEnabledNearbyQuickfixes() && t.trigger.type === 1 && (t.trigger.triggerAction === E9.QuickFix || t.trigger.filter?.include?.contains(FA.QuickFix))) {
            const u = await hve(this._registry, n, t.selection, t.trigger, a);
            this.codeActionsDisposable.value = u;
            const d = [...u.allActions];
            if (a.isCancellationRequested) {
              u.dispose();
              return r$o;
            }
            const m = u.validActions?.some(g => g.action.kind ? FA.QuickFix.contains(new p0(g.action.kind)) : false);
            const p = this._markerService.read({
              resource: n.uri
            });
            if (m) {
              for (const g of u.validActions) {
                if (g.action.command?.arguments?.some(f => typeof f == "string" && f.includes(g5c))) {
                  g.action.diagnostics = [...p.filter(f => f.relatedInformation)];
                }
              }
              return {
                validActions: u.validActions,
                allActions: d,
                documentation: u.documentation,
                hasAutoFix: u.hasAutoFix,
                hasAIFix: u.hasAIFix,
                allAIFixes: u.allAIFixes,
                dispose: () => {
                  this.codeActionsDisposable.value = u;
                }
              };
            } else if (!m && p.length > 0) {
              const g = t.selection.getPosition();
              let f = g;
              let A = Number.MAX_VALUE;
              const w = [...u.validActions];
              for (const x of p) {
                const I = x.endColumn;
                const B = x.endLineNumber;
                const R = x.startLineNumber;
                if (B === g.lineNumber || R === g.lineNumber) {
                  f = new ar(B, I);
                  const N = {
                    type: t.trigger.type,
                    triggerAction: t.trigger.triggerAction,
                    filter: {
                      include: t.trigger.filter?.include ? t.trigger.filter?.include : FA.QuickFix
                    },
                    autoApply: t.trigger.autoApply,
                    context: {
                      notAvailableMessage: t.trigger.context?.notAvailableMessage || "",
                      position: f
                    }
                  };
                  const M = new Vl(f.lineNumber, f.column, f.lineNumber, f.column);
                  const O = await hve(this._registry, n, M, N, a);
                  if (a.isCancellationRequested) {
                    O.dispose();
                    return r$o;
                  }
                  if (O.validActions.length !== 0) {
                    for (const $ of O.validActions) {
                      if ($.action.command?.arguments?.some(H => typeof H == "string" && H.includes(g5c))) {
                        $.action.diagnostics = [...p.filter(H => H.relatedInformation)];
                      }
                    }
                    if (u.allActions.length === 0) {
                      d.push(...O.allActions);
                    }
                    if (Math.abs(g.column - I) < A) {
                      w.unshift(...O.validActions);
                    } else {
                      w.push(...O.validActions);
                    }
                  }
                  A = Math.abs(g.column - I);
                }
              }
              const C = w.filter((x, I, B) => B.findIndex(R => R.action.title === x.action.title) === I);
              C.sort((x, I) => x.action.isPreferred && !I.action.isPreferred ? -1 : !x.action.isPreferred && I.action.isPreferred || x.action.isAI && !I.action.isAI ? 1 : !x.action.isAI && I.action.isAI ? -1 : 0);
              return {
                validActions: C,
                allActions: d,
                documentation: u.documentation,
                hasAutoFix: u.hasAutoFix,
                hasAIFix: u.hasAIFix,
                allAIFixes: u.allAIFixes,
                dispose: () => {
                  this.codeActionsDisposable.value = u;
                }
              };
            }
          }
          if (t.trigger.type === 1) {
            const u = await hve(this._registry, n, t.selection, t.trigger, a);
            this.codeActionsDisposable.value = u;
            return u;
          }
          const l = await hve(this._registry, n, t.selection, t.trigger, a);
          this.codeActionsDisposable.value = l;
          return l;
        });
        if (t.trigger.type === 1) {
          this._progressService?.showWhile(r, 250);
        }
        const s = new Dvt.Triggered(t.trigger, i, r);
        let o = false;
        if (this._state.type === 1) {
          o = this._state.trigger.type === 1 && s.type === 1 && s.trigger.type === 2 && this._state.position !== s.position;
        }
        if (o) {
          setTimeout(() => {
            this.setState(s);
          }, 500);
        } else {
          this.setState(s);
        }
      }, undefined);
      this._codeActionOracle.value.trigger({
        type: 2,
        triggerAction: E9.Default
      });
    } else {
      this._supportedCodeActions.reset();
    }
  }
  trigger(n) {
    this._codeActionOracle.value?.trigger(n);
    this.codeActionsDisposable.dispose();
  }
  setState(n, e) {
    if (n !== this._state) {
      if (this._state.type === 1) {
        this._state.cancel();
      }
      this._state = n;
      if (!e && !this._disposed) {
        this._onDidChangeState.fire(n);
      }
    }
  }
};
