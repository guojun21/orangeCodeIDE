"use strict";

// Module: out-build/vs/platform/commands/common/commands.js
// Offset: 609323 (bundle byte offset)
// Size: 1482 bytes
yn();
Ef();
rt();
l2();
Js();
Wt();
fr = xi("commandService");
Ss = new class {
  constructor() {
    this._commands = new Map();
    this._onDidRegisterCommand = new Qe();
    this.onDidRegisterCommand = this._onDidRegisterCommand.event;
  }
  registerCommand(n, e) {
    if (!n) {
      throw new Error("invalid command");
    }
    if (typeof n == "string") {
      if (!e) {
        throw new Error("invalid command");
      }
      return this.registerCommand({
        id: n,
        handler: e
      });
    }
    if (n.metadata && Array.isArray(n.metadata.args)) {
      const o = [];
      for (const l of n.metadata.args) {
        o.push(l.constraint);
      }
      const a = n.handler;
      n.handler = function (l, ...u) {
        qnh(u, o);
        return a(l, ...u);
      };
    }
    const {
      id: t
    } = n;
    let i = this._commands.get(t);
    if (!i) {
      i = new WD();
      this._commands.set(t, i);
    }
    const r = i.unshift(n);
    const s = $i(() => {
      r();
      if (this._commands.get(t)?.isEmpty()) {
        this._commands.delete(t);
      }
    });
    this._onDidRegisterCommand.fire(t);
    return Cte(s);
  }
  registerCommandAlias(n, e) {
    return Ss.registerCommand(n, (t, ...i) => t.get(fr).executeCommand(e, ...i));
  }
  getCommand(n) {
    const e = this._commands.get(n);
    if (!!e && !e.isEmpty()) {
      return bl.first(e);
    }
  }
  getCommands() {
    const n = new Map();
    for (const e of this._commands.keys()) {
      const t = this.getCommand(e);
      if (t) {
        n.set(e, t);
      }
    }
    return n;
  }
}();
Ss.registerCommand("noop", () => {});
Ss.registerCommandAlias("inlineChat.hideHint", "noop");
Ss.registerCommandAlias("inlineChat.showHint", "noop");
