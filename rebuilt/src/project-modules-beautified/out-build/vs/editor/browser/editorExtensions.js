"use strict";

// Module: out-build/vs/editor/browser/editorExtensions.js
// Offset: 667087 (bundle byte offset)
// Size: 6744 bytes
Ht();
Yn();
Oh();
tl();
hd();
td();
dr();
hs();
si();
Wt();
Hw();
Ws();
Pa();
Js();
jr();
ri();
(function (n) {
  n[n.Eager = 0] = "Eager";
  n[n.AfterFirstRender = 1] = "AfterFirstRender";
  n[n.BeforeFirstInteraction = 2] = "BeforeFirstInteraction";
  n[n.Eventually = 3] = "Eventually";
  n[n.Lazy = 4] = "Lazy";
})(rch ||= {});
l4n = class {
  constructor(n) {
    this.id = n.id;
    this.precondition = n.precondition;
    this._kbOpts = n.kbOpts;
    this._menuOpts = n.menuOpts;
    this.metadata = n.metadata;
  }
  register() {
    if (Array.isArray(this._menuOpts)) {
      this._menuOpts.forEach(this._registerMenuItem, this);
    } else if (this._menuOpts) {
      this._registerMenuItem(this._menuOpts);
    }
    if (this._kbOpts) {
      const n = Array.isArray(this._kbOpts) ? this._kbOpts : [this._kbOpts];
      for (const e of n) {
        let t = e.kbExpr;
        if (this.precondition) {
          if (t) {
            t = Ee.and(t, this.precondition);
          } else {
            t = this.precondition;
          }
        }
        const i = {
          id: this.id,
          weight: e.weight,
          args: e.args,
          when: t,
          primary: e.primary,
          secondary: e.secondary,
          win: e.win,
          linux: e.linux,
          mac: e.mac
        };
        qo.registerKeybindingRule(i);
      }
    }
    Ss.registerCommand({
      id: this.id,
      handler: (n, e) => this.runCommand(n, e),
      metadata: this.metadata
    });
  }
  _registerMenuItem(n) {
    or.appendMenuItem(n.menuId, {
      group: n.group,
      command: {
        id: this.id,
        title: n.title,
        icon: n.icon,
        precondition: this.precondition
      },
      when: n.when,
      order: n.order
    });
  }
};
N5e = class extends l4n {
  constructor() {
    super(...arguments);
    this._implementations = [];
  }
  addImplementation(n, e, t, i) {
    this._implementations.push({
      priority: n,
      name: e,
      implementation: t,
      when: i
    });
    this._implementations.sort((r, s) => s.priority - r.priority);
    return {
      dispose: () => {
        for (let r = 0; r < this._implementations.length; r++) {
          if (this._implementations[r].implementation === t) {
            this._implementations.splice(r, 1);
            return;
          }
        }
      }
    };
  }
  runCommand(n, e) {
    const t = n.get(Rr);
    const i = n.get(wi);
    t.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);
    for (const r of this._implementations) {
      if (r.when) {
        const o = i.getContext(_C());
        if (!r.when.evaluate(o)) {
          continue;
        }
      }
      const s = r.implementation(n, e);
      if (s) {
        t.trace(`Command '${this.id}' was handled by '${r.name}'.`);
        if (typeof s == "boolean") {
          return undefined;
        } else {
          return s;
        }
      }
    }
    t.trace(`The Command '${this.id}' was not handled by any implementation.`);
  }
};
Ikc = class extends l4n {
  constructor(n, e) {
    super(e);
    this.command = n;
  }
  runCommand(n, e) {
    return this.command.runCommand(n, e);
  }
};
dF = class cad extends l4n {
  static bindToContribution(e) {
    return class extends cad {
      constructor(i) {
        super(i);
        this._callback = i.handler;
      }
      runEditorCommand(i, r, s) {
        const o = e(r);
        if (o) {
          this._callback(o, s);
        }
      }
    };
  }
  static runEditorCommand(e, t, i, r) {
    const s = e.get(fl);
    const o = s.getFocusedCodeEditor() || s.getActiveCodeEditor();
    if (o) {
      return o.invokeWithinContext(a => {
        if (a.get(wi).contextMatchesRules(i ?? undefined)) {
          return r(a, o, t);
        }
      });
    }
  }
  runCommand(e, t) {
    return cad.runEditorCommand(e, t, this.precondition, (i, r, s) => this.runEditorCommand(i, r, s));
  }
};
vu = class kJb extends dF {
  static convertOptions(e) {
    let t;
    if (Array.isArray(e.menuOpts)) {
      t = e.menuOpts;
    } else if (e.menuOpts) {
      t = [e.menuOpts];
    } else {
      t = [];
    }
    function i(r) {
      r.menuId ||= st.EditorContext;
      r.title ||= typeof e.label == "string" ? e.label : e.label.value;
      r.when = Ee.and(e.precondition, r.when);
      return r;
    }
    if (Array.isArray(e.contextMenuOpts)) {
      t.push(...e.contextMenuOpts.map(i));
    } else if (e.contextMenuOpts) {
      t.push(i(e.contextMenuOpts));
    }
    e.menuOpts = t;
    return e;
  }
  constructor(e) {
    super(kJb.convertOptions(e));
    if (typeof e.label == "string") {
      this.label = e.label;
      this.alias = e.alias ?? e.label;
    } else {
      this.label = e.label.value;
      this.alias = e.alias ?? e.label.original;
    }
  }
  runEditorCommand(e, t, i) {
    this.reportTelemetry(e, t);
    return this.run(e, t, i || {});
  }
  reportTelemetry(e, t) {
    e.get(ea).publicLog2("editorActionInvoked", {
      name: this.label,
      id: this.id
    });
  }
};
Dkc = class extends vu {
  constructor() {
    super(...arguments);
    this._implementations = [];
  }
  addImplementation(n, e) {
    this._implementations.push([n, e]);
    this._implementations.sort((t, i) => i[0] - t[0]);
    return {
      dispose: () => {
        for (let t = 0; t < this._implementations.length; t++) {
          if (this._implementations[t][1] === e) {
            this._implementations.splice(t, 1);
            return;
          }
        }
      }
    };
  }
  run(n, e, t) {
    for (const i of this._implementations) {
      const r = i[1](n, e, t);
      if (r) {
        if (typeof r == "boolean") {
          return undefined;
        } else {
          return r;
        }
      }
    }
  }
};
xx = class extends rn {
  run(n, ...e) {
    const t = n.get(fl);
    const i = t.getFocusedCodeEditor() || t.getActiveCodeEditor();
    if (i) {
      return i.invokeWithinContext(r => {
        const s = r.get(wi);
        const o = r.get(Rr);
        if (!s.contextMatchesRules(this.desc.precondition ?? undefined)) {
          o.debug("[EditorAction2] NOT running command because its precondition is FALSE", this.desc.id, this.desc.precondition?.serialize());
          return;
        }
        return this.runEditorCommand(r, i, ...e);
      });
    }
  }
};
(function (n) {
  function e(o) {
    return Sde.INSTANCE.getEditorCommand(o);
  }
  n.getEditorCommand = e;
  function t() {
    return Sde.INSTANCE.getEditorActions();
  }
  n.getEditorActions = t;
  function i() {
    return Sde.INSTANCE.getEditorContributions();
  }
  n.getEditorContributions = i;
  function r(o) {
    return Sde.INSTANCE.getEditorContributions().filter(a => o.indexOf(a.id) >= 0);
  }
  n.getSomeEditorContributions = r;
  function s() {
    return Sde.INSTANCE.getDiffEditorContributions();
  }
  n.getDiffEditorContributions = s;
})(SC ||= {});
sch = {
  EditorCommonContributions: "editor.contributions"
};
Sde = class EJb {
  static {
    this.INSTANCE = new EJb();
  }
  constructor() {
    this.editorContributions = [];
    this.diffEditorContributions = [];
    this.editorActions = [];
    this.editorCommands = Object.create(null);
  }
  registerEditorContribution(e, t, i) {
    this.editorContributions.push({
      id: e,
      ctor: t,
      instantiation: i
    });
  }
  getEditorContributions() {
    return this.editorContributions.slice(0);
  }
  registerDiffEditorContribution(e, t) {
    this.diffEditorContributions.push({
      id: e,
      ctor: t
    });
  }
  getDiffEditorContributions() {
    return this.diffEditorContributions.slice(0);
  }
  registerEditorAction(e) {
    e.register();
    this.editorActions.push(e);
  }
  getEditorActions() {
    return this.editorActions;
  }
  registerEditorCommand(e) {
    e.register();
    this.editorCommands[e.id] = e;
  }
  getEditorCommand(e) {
    return this.editorCommands[e] || null;
  }
};
Di.add(sch.EditorCommonContributions, Sde.INSTANCE);
M5e = c4n(new N5e({
  id: "undo",
  precondition: undefined,
  kbOpts: {
    weight: 0,
    primary: 2104
  },
  menuOpts: [{
    menuId: st.MenubarEditMenu,
    group: "1_do",
    title: _(189, null),
    order: 1
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(190, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: "1_do",
    title: _(191, null),
    order: 1
  }]
}));
c4n(new Ikc(M5e, {
  id: "default:undo",
  precondition: undefined
}));
F5e = c4n(new N5e({
  id: "redo",
  precondition: undefined,
  kbOpts: {
    weight: 0,
    primary: 2103,
    secondary: [3128],
    mac: {
      primary: 3128
    }
  },
  menuOpts: [{
    menuId: st.MenubarEditMenu,
    group: "1_do",
    title: _(192, null),
    order: 2
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(193, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: "1_do",
    title: _(194, null),
    order: 2
  }]
}));
c4n(new Ikc(F5e, {
  id: "default:redo",
  precondition: undefined
}));
Bkc = c4n(new N5e({
  id: "editor.action.selectAll",
  precondition: undefined,
  kbOpts: {
    weight: 0,
    kbExpr: null,
    primary: 2079
  },
  menuOpts: [{
    menuId: st.MenubarSelectionMenu,
    group: "1_basic",
    title: _(195, null),
    order: 1
  }, {
    menuId: st.CommandPalette,
    group: "",
    title: _(196, null),
    order: 1
  }, {
    menuId: st.SimpleEditorContext,
    group: "9_select",
    title: _(197, null),
    order: 1
  }]
}));
