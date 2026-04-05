"use strict";

// Module: out-build/vs/editor/contrib/codeAction/browser/codeAction.js
// Offset: 2478431 (bundle byte offset)
// Size: 2160 bytes
Vs();
Po();
_s();
QY();
rt();
Yn();
Ht();
QS();
hs();
So();
Xg();
Pa();
YI();
ts();
db();
Cm();
hd();
dve();
BW();
a9o = "editor.action.codeAction";
c9o = "editor.action.quickFix";
qBc = "editor.action.autoFix";
l9o = "editor.action.refactor";
u9o = "editor.action.sourceAction";
d9o = "editor.action.organizeImports";
h9o = "editor.action.fixAll";
okh = class dWa extends at {
  static codeActionsPreferredComparator(e, t) {
    if (e.isPreferred && !t.isPreferred) {
      return -1;
    } else if (!e.isPreferred && t.isPreferred) {
      return 1;
    } else {
      return 0;
    }
  }
  static codeActionsComparator({
    action: e
  }, {
    action: t
  }) {
    if (e.isAI && !t.isAI) {
      return 1;
    } else if (!e.isAI && t.isAI) {
      return -1;
    } else if (q_(e.diagnostics)) {
      if (q_(t.diagnostics)) {
        return dWa.codeActionsPreferredComparator(e, t);
      } else {
        return -1;
      }
    } else if (q_(t.diagnostics)) {
      return 1;
    } else {
      return dWa.codeActionsPreferredComparator(e, t);
    }
  }
  constructor(e, t, i) {
    super();
    this.documentation = t;
    this._register(i);
    this.allActions = [...e].sort(dWa.codeActionsComparator);
    this.validActions = this.allActions.filter(({
      action: r
    }) => !r.disabled);
  }
  get hasAutoFix() {
    return this.validActions.some(({
      action: e
    }) => !!e.kind && FA.QuickFix.contains(new p0(e.kind)) && !!e.isPreferred);
  }
  get hasAIFix() {
    return this.validActions.some(({
      action: e
    }) => !!e.isAI);
  }
  get allAIFixes() {
    return this.validActions.every(({
      action: e
    }) => !!e.isAI);
  }
};
HBc = {
  actions: [],
  documentation: undefined
};
(function (n) {
  n.OnSave = "onSave";
  n.FromProblemsView = "fromProblemsView";
  n.FromCodeActions = "fromCodeActions";
  n.FromAILightbulb = "fromAILightbulb";
  n.FromProblemsHover = "fromProblemsHover";
})(eae ||= {});
Ss.registerCommand("_executeCodeActionProvider", async function (n, e, t, i, r) {
  if (!(e instanceof je)) {
    throw uw();
  }
  const {
    codeActionProvider: s
  } = n.get($u);
  const o = n.get(Il).getModel(e);
  if (!o) {
    throw uw();
  }
  const a = Vl.isISelection(t) ? Vl.liftSelection(t) : Zt.isIRange(t) ? o.validateRange(t) : undefined;
  if (!a) {
    throw uw();
  }
  const l = typeof i == "string" ? new p0(i) : undefined;
  const u = await hve(s, o, a, {
    type: 1,
    triggerAction: E9.Default,
    filter: {
      includeSourceActions: true,
      include: l
    }
  }, Cs.None, undefined);
  const d = [];
  const m = Math.min(u.validActions.length, typeof r == "number" ? r : 0);
  for (let p = 0; p < m; p++) {
    d.push(u.validActions[p].resolve(Cs.None));
  }
  try {
    await Promise.all(d);
    return u.validActions.map(p => p.action);
  } finally {
    setTimeout(() => u.dispose(), 100);
  }
});
