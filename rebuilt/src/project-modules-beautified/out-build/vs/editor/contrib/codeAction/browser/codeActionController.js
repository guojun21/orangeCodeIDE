"use strict";

// Module: out-build/vs/editor/contrib/codeAction/browser/codeActionController.js
// Offset: 4189363 (bundle byte offset)
// Size: 7517 bytes
ri();
Ew();
_s();
QY();
L0();
rt();
Ht();
MBc();
hs();
Ei();
si();
Wt();
ay();
Xg();
Nl();
qI();
Io();
ka();
Dd();
yn();
tl();
bv();
Cm();
xRe();
BW();
mve();
AvA();
YvA();
uJh();
pk();
dJh();
hJh = "quickfix-edit-highlight";
Xte = class extends at {
  static {
    $9t = this;
  }
  static {
    this.ID = "editor.contrib.codeActionController";
  }
  static get(e) {
    return e.getContribution($9t.ID);
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super();
    this._commandService = a;
    this._configurationService = l;
    this._actionWidgetService = u;
    this._instantiationService = d;
    this._keybindingService = m;
    this._reactiveStorageService = p;
    this._progressService = g;
    this._activeCodeActions = this._register(new uo());
    this._showDisabled = false;
    this._onDidChangeCodeActions = this._register(new Qe());
    this.onDidChangeCodeActions = this._onDidChangeCodeActions.event;
    this._onDidApplyCodeAction = this._register(new Qe());
    this.onDidApplyCodeAction = this._onDidApplyCodeAction.event;
    this._disposed = false;
    this._editor = e;
    this._model = this._register(new lJh(this._editor, s.codeActionProvider, t, i, o, m, l, p));
    this._register(this._model.onDidChangeState(f => this.update(f)));
    this._lightBulbWidget = new Ob(() => {
      const f = this._editor.getContribution(U9t.ID);
      if (f) {
        this._register(f.onClick(A => this.showCodeActionsFromLightbulb(A.actions, A)));
      }
      return f;
    });
    this._resolver = r.createInstance(n$o);
    this._register(this._editor.onDidLayoutChange(() => this._actionWidgetService.hide()));
  }
  dispose() {
    this._disposed = true;
    super.dispose();
  }
  async showCodeActionsFromLightbulb(e, t) {
    if (e.allAIFixes && e.validActions.length === 1) {
      const i = e.validActions[0];
      const r = i.action.command;
      if (r && r.id === "inlineChat.start" && r.arguments && r.arguments.length >= 1) {
        r.arguments[0] = {
          ...r.arguments[0],
          autoSend: false
        };
      }
      await this.applyCodeAction(i, false, false, eae.FromAILightbulb);
      return;
    }
    await this.showCodeActionList(e, t, {
      includeDisabledActions: false,
      fromLightbulb: true
    });
  }
  showCodeActions(e, t, i) {
    return this.showCodeActionList(t, i, {
      includeDisabledActions: false,
      fromLightbulb: false
    });
  }
  hideCodeActions() {
    this._actionWidgetService.hide();
  }
  manualTriggerAtCurrentPosition(e, t, i, r) {
    if (!this._editor.hasModel()) {
      return;
    }
    C3.get(this._editor)?.closeMessage();
    const s = this._editor.getPosition();
    this._trigger({
      type: 1,
      triggerAction: t,
      filter: i,
      autoApply: r,
      context: {
        notAvailableMessage: e,
        position: s
      }
    });
  }
  _trigger(e) {
    return this._model.trigger(e);
  }
  async applyCodeAction(e, t, i, r) {
    const s = this._progressService.show(true, 500);
    try {
      await this._instantiationService.invokeFunction(Sbt, e, r, {
        preview: i,
        editor: this._editor
      });
    } finally {
      if (t) {
        this._trigger({
          type: 2,
          triggerAction: E9.QuickFix,
          filter: {}
        });
      }
      s.done();
    }
  }
  hideLightBulbWidget() {
    this._lightBulbWidget.rawValue?.hide();
    this._lightBulbWidget.rawValue?.gutterHide();
  }
  async update(e) {
    if (e.type !== 1) {
      this.hideLightBulbWidget();
      return;
    }
    let t;
    try {
      t = await e.actions;
    } catch (r) {
      Gc(r);
      return;
    }
    if (!this._disposed && this._editor.getSelection()?.startLineNumber === e.position.lineNumber) {
      if (this._editor.getOption(66).enabled !== Foe.Off) {
        this._lightBulbWidget.value?.update(t, e.trigger, e.position);
      }
      if (e.trigger.type === 1) {
        if (e.trigger.filter?.include) {
          const s = this.tryGetValidActionToApply(e.trigger, t);
          if (s) {
            try {
              this.hideLightBulbWidget();
              await this.applyCodeAction(s, false, false, eae.FromCodeActions);
            } finally {
              t.dispose();
            }
            return;
          }
          if (e.trigger.context) {
            const o = this.getInvalidActionThatWouldHaveBeenApplied(e.trigger, t);
            if (o && o.action.disabled) {
              C3.get(this._editor)?.showMessage(o.action.disabled, e.trigger.context.position);
              t.dispose();
              return;
            }
          }
        }
        const r = !!e.trigger.filter?.include;
        if (e.trigger.context && (!t.allActions.length || !r && !t.validActions.length)) {
          C3.get(this._editor)?.showMessage(e.trigger.context.notAvailableMessage, e.trigger.context.position);
          this._activeCodeActions.value = t;
          this._onDidChangeCodeActions.fire(t);
          t.dispose();
          return;
        }
        this._activeCodeActions.value = t;
        this._onDidChangeCodeActions.fire(t);
        this.showCodeActionList(t, this.toCoords(e.position), {
          includeDisabledActions: r,
          fromLightbulb: false
        });
      } else if (this._actionWidgetService.isVisible) {
        t.dispose();
      } else {
        this._activeCodeActions.value = t;
        this._onDidChangeCodeActions.fire(t);
      }
    }
  }
  getInvalidActionThatWouldHaveBeenApplied(e, t) {
    if (t.allActions.length && (e.autoApply === "first" && t.validActions.length === 0 || e.autoApply === "ifSingle" && t.allActions.length === 1)) {
      return t.allActions.find(({
        action: i
      }) => i.disabled);
    }
  }
  tryGetValidActionToApply(e, t) {
    if (t.validActions.length && (e.autoApply === "first" && t.validActions.length > 0 || e.autoApply === "ifSingle" && t.validActions.length === 1)) {
      return t.validActions[0];
    }
  }
  static {
    this.DECORATION = Zh.register({
      description: "quickfix-highlight",
      className: hJh
    });
  }
  async showCodeActionList(e, t, i) {
    const r = this._editor.createDecorationsCollection();
    const s = this._editor.getDomNode();
    if (!s) {
      return;
    }
    const o = i.includeDisabledActions && (this._showDisabled || e.validActions.length === 0) ? e.allActions : e.validActions;
    if (!o.length) {
      return;
    }
    const a = ar.isIPosition(t) ? this.toCoords(t) : t;
    const l = {
      onSelect: async (u, d) => {
        this.applyCodeAction(u, true, !!d, i.fromLightbulb ? eae.FromAILightbulb : eae.FromCodeActions);
        this._actionWidgetService.hide(false);
        r.clear();
      },
      onHide: u => {
        this._editor?.focus();
        r.clear();
      },
      onHover: async (u, d) => {
        if (d.isCancellationRequested) {
          return;
        }
        let m = false;
        const p = u.action.kind;
        if (p) {
          const g = new p0(p);
          m = [FA.RefactorExtract, FA.RefactorInline, FA.RefactorRewrite, FA.RefactorMove, FA.Source].some(A => A.contains(g));
        }
        return {
          canPreview: m || !!u.action.edit?.edits.length
        };
      },
      onFocus: u => {
        if (u && u.action) {
          const d = u.action.ranges;
          const m = u.action.diagnostics;
          r.clear();
          if (d && d.length > 0) {
            const p = m && m?.length > 1 ? m.map(g => ({
              range: g,
              options: $9t.DECORATION
            })) : d.map(g => ({
              range: g,
              options: $9t.DECORATION
            }));
            r.set(p);
          } else if (m && m.length > 0) {
            const p = m.map(f => ({
              range: f,
              options: $9t.DECORATION
            }));
            r.set(p);
            const g = m[0];
            if (g.startLineNumber && g.startColumn) {
              const f = this._editor.getModel()?.getWordAtPosition({
                lineNumber: g.startLineNumber,
                column: g.startColumn
              })?.word;
              Ex(_(1001, null, f, g.startLineNumber, g.startColumn));
            }
          }
        } else {
          r.clear();
        }
      }
    };
    this._actionWidgetService.show("codeActionWidget", true, KvA(o, this._shouldShowHeaders(), this._resolver.getResolver()), l, a, s, this._getActionBarActions(e, t, i));
  }
  toCoords(e) {
    if (!this._editor.hasModel()) {
      return {
        x: 0,
        y: 0
      };
    }
    this._editor.revealPosition(e, 1);
    this._editor.render();
    const t = this._editor.getScrolledVisiblePosition(e);
    const i = qS(this._editor.getDomNode());
    const r = i.left + t.left;
    const s = i.top + t.top + t.height;
    return {
      x: r,
      y: s
    };
  }
  _shouldShowHeaders() {
    const e = this._editor?.getModel();
    return this._configurationService.getValue("editor.codeActionWidget.showHeaders", {
      resource: e?.uri
    });
  }
  _getActionBarActions(e, t, i) {
    if (i.fromLightbulb) {
      return [];
    }
    const r = e.documentation.map(s => ({
      id: s.id,
      label: s.title,
      tooltip: s.tooltip ?? "",
      class: undefined,
      enabled: true,
      run: () => this._commandService.executeCommand(s.id, ...(s.arguments ?? []))
    }));
    if (i.includeDisabledActions && e.validActions.length > 0 && e.allActions.length !== e.validActions.length) {
      r.push(this._showDisabled ? {
        id: "hideMoreActions",
        label: _(1002, null),
        enabled: true,
        tooltip: "",
        class: undefined,
        run: () => {
          this._showDisabled = false;
          return this.showCodeActionList(e, t, i);
        }
      } : {
        id: "showMoreActions",
        label: _(1003, null),
        enabled: true,
        tooltip: "",
        class: undefined,
        run: () => {
          this._showDisabled = true;
          return this.showCodeActionList(e, t, i);
        }
      });
    }
    return r;
  }
};
Xte = $9t = __decorate([__param(1, bk), __param(2, wi), __param(3, ln), __param(4, $u), __param(5, p2), __param(6, fr), __param(7, Fn), __param(8, TRe), __param(9, ln), __param(10, mo), __param(11, ku), __param(12, p2)], Xte);
HI((n, e) => {
  ((r, s) => {
    if (s) {
      e.addRule(`.monaco-editor ${r} { background-color: ${s}; }`);
    }
  })(".quickfix-edit-highlight", n.getColor(Boe));
  const i = n.getColor(J5e);
  if (i) {
    e.addRule(`.monaco-editor .quickfix-edit-highlight { border: 1px ${Poe(n.type) ? "dotted" : "solid"} ${i}; box-sizing: border-box; }`);
  }
});
