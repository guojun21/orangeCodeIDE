"use strict";

// Module: out-build/vs/workbench/contrib/mcp/browser/mcpUrlHandler.js
// Offset: 31034560 (bundle byte offset)
// Size: 1000 bytes
Ql();
L0();
rt();
Yn();
ns();
Tgu();
Wt();
Aye();
sIf();
nSa = "mcp-install";
iSa = class extends at {
  static {
    this.scheme = nSa;
  }
  constructor(e, t, i) {
    super();
    this._instaService = t;
    this._fileService = i;
    this._fileSystemProvider = new Ob(() => this._instaService.invokeFunction(r => {
      const s = r.get(Gr);
      const o = new z_i();
      this._register(s.registerProvider(nSa, o));
      return nSa;
    }));
    this._register(e.registerHandler(this));
  }
  async handleURL(e, t) {
    if (e.path !== "mcp/install") {
      return false;
    }
    let i;
    try {
      i = JSON.parse(decodeURIComponent(e.query));
    } catch {
      return false;
    }
    const {
      name: r,
      ...s
    } = i;
    const o = this._fileSystemProvider.value;
    const a = je.from({
      scheme: o,
      path: `/${encodeURIComponent(r)}.json`
    });
    await this._fileService.writeFile(a, Ms.fromString(JSON.stringify(s, null, "\t")));
    this._instaService.createInstance($gn, undefined).pickForUrlHandler(a, true);
    return Promise.resolve(true);
  }
};
iSa = __decorate([__param(0, fce), __param(1, ln), __param(2, Gr)], iSa);
