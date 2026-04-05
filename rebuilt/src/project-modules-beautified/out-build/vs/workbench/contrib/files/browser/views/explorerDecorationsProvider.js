"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/views/explorerDecorationsProvider.js
// Offset: 32502998 (bundle byte offset)
// Size: 1757 bytes
yn();
Ht();
ps();
Nl();
rt();
GOf();
$ie();
mk();
pEa = class {
  constructor(e, t) {
    this.explorerService = e;
    this.label = _(8077, null);
    this._onDidChange = new Qe();
    this.toDispose = new Ut();
    this.toDispose.add(this._onDidChange);
    this.toDispose.add(t.onDidChangeWorkspaceFolders(i => {
      this._onDidChange.fire(i.changed.concat(i.added).map(r => r.uri));
    }));
    this.toDispose.add(cEa.event(i => {
      this._onDidChange.fire([i]);
    }));
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  async provideDecorations(e) {
    const t = this.explorerService.findClosest(e);
    if (!t) {
      throw new Error("ExplorerItem not found");
    }
    return hly(t);
  }
  dispose() {
    this.toDispose.dispose();
  }
};
pEa = __decorate([__param(0, DC), __param(1, Lr)], pEa);
