"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatSlashCommands.js
// Offset: 30872530 (bundle byte offset)
// Size: 1216 bytes
yn();
rt();
Wt();
_u();
Tgn = xi("chatSlashCommandService");
dCa = class extends at {
  constructor(e) {
    super();
    this._extensionService = e;
    this._commands = new Map();
    this._onDidChangeCommands = this._register(new Qe());
    this.onDidChangeCommands = this._onDidChangeCommands.event;
  }
  dispose() {
    super.dispose();
    this._commands.clear();
  }
  registerSlashCommand(e, t) {
    if (this._commands.has(e.command)) {
      throw new Error(`Already registered a command with id ${e.command}}`);
    }
    this._commands.set(e.command, {
      data: e,
      command: t
    });
    this._onDidChangeCommands.fire();
    return $i(() => {
      if (this._commands.delete(e.command)) {
        this._onDidChangeCommands.fire();
      }
    });
  }
  getCommands(e, t) {
    return Array.from(this._commands.values(), i => i.data).filter(i => i.locations.includes(e) && (!i.modes || i.modes.includes(t)));
  }
  hasCommand(e) {
    return this._commands.has(e);
  }
  async executeCommand(e, t, i, r, s, o) {
    const a = this._commands.get(e);
    if (!a) {
      throw new Error("No command with id ${id} NOT registered");
    }
    if (!a.command) {
      await this._extensionService.activateByEvent(`onSlash:${e}`);
    }
    if (!a.command) {
      throw new Error(`No command with id ${e} NOT resolved`);
    }
    return await a.command(t, i, r, s, o);
  }
};
dCa = __decorate([__param(0, su)], dCa);
