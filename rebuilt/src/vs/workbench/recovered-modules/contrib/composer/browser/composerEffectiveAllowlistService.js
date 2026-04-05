"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerEffectiveAllowlistService.js
// Offset: 30378423 (bundle byte offset)
// Size: 3400 bytes
yn();
zpn();
rt();
Wt();
Er();
ns();
_d();
aie();
Rl();
_g();
Dd();
Xpn = xi("composerEffectiveAllowlistService");
s0a = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this._fileService = e;
    this._pathService = t;
    this._productService = i;
    this._uriIdentityService = r;
    this._reactiveStorageService = s;
    this._onDidChangePermissionsFile = this._register(new Qe());
    this.onDidChangePermissionsFile = this._onDidChangePermissionsFile.event;
    this._permissionsFileAllowlists = {
      mcp: [],
      terminal: []
    };
    this._loadPermissionsFile();
    this._register(this._fileService.onDidFilesChange(o => this._onDidFilesChange(o)));
  }
  async _onDidFilesChange(e) {
    const t = await this._getPermissionsFilePath();
    if (e.affects(t)) {
      await this._loadPermissionsFile();
    }
  }
  async _getPermissionsFilePath() {
    const e = await this._pathService.userHome({
      preferLocal: false
    });
    const t = this._productService.dataFolderName ?? ".cursor";
    return this._uriIdentityService.extUri.joinPath(e, t, "permissions.json");
  }
  async _loadPermissionsFile() {
    try {
      const e = await this._getPermissionsFilePath();
      if (!(await this._fileService.exists(e))) {
        this._permissionsFileAllowlists = {
          mcp: [],
          terminal: []
        };
        this._onDidChangePermissionsFile.fire();
        return;
      }
      const i = await this._fileService.readFile(e);
      const r = Okt(i.value.toString());
      const s = Array.isArray(r.mcpAllowlist) ? r.mcpAllowlist.filter(a => typeof a == "string") : [];
      const o = Array.isArray(r.terminalAllowlist) ? r.terminalAllowlist.filter(a => typeof a == "string") : [];
      this._permissionsFileAllowlists = {
        mcp: s,
        terminal: o
      };
      this._onDidChangePermissionsFile.fire();
    } catch {
      this._permissionsFileAllowlists = {
        mcp: [],
        terminal: []
      };
      this._onDidChangePermissionsFile.fire();
    }
  }
  getPermissionsFileMcpAllowlist() {
    return this._permissionsFileAllowlists.mcp;
  }
  getPermissionsFileTerminalAllowlist() {
    return this._permissionsFileAllowlists.terminal;
  }
  getEffectiveMcpAllowlist() {
    const e = wU();
    const t = e.mcpAllowedTools ?? [];
    const i = this._permissionsFileAllowlists.mcp;
    if (e.isAdminControlled) {
      return t;
    } else if (i.length > 0) {
      return i;
    } else {
      return t;
    }
  }
  getEffectiveTerminalAllowlist() {
    const e = wU();
    const t = e.allowedCommands ?? [];
    const i = this._reactiveStorageService.applicationUserPersistentStorage.composerState.yoloCommandAllowlist ?? [];
    const r = this._permissionsFileAllowlists.terminal;
    if (e.isAdminControlled) {
      return t;
    } else if (r.length > 0) {
      return r;
    } else {
      return i;
    }
  }
  canAddToAllowlistFromIde(e) {
    if (wU().isAdminControlled) {
      return false;
    } else if (e === "mcp") {
      return this._permissionsFileAllowlists.mcp.length === 0;
    } else {
      return this._permissionsFileAllowlists.terminal.length === 0;
    }
  }
};
s0a = __decorate([__param(0, Gr), __param(1, kp), __param(2, za), __param(3, xl), __param(4, ku)], s0a);
Vi(Xpn, s0a, 1);
