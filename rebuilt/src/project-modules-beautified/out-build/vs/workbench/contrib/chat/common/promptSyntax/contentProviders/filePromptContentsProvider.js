"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/contentProviders/filePromptContentsProvider.js
// Offset: 31092405 (bundle byte offset)
// Size: 1052 bytes
Lv();
_s();
NIf();
Yye();
Hgn();
ns();
a0i = Kgu = class extends BSa {
  constructor(e, t) {
    super();
    this.uri = e;
    this.fileService = t;
    this._register(this.fileService.onDidFilesChange(i => {
      if (i.contains(this.uri, 1, 0)) {
        return this.onChangeEmitter.fire("full");
      }
      if (i.contains(this.uri, 2)) {
        return this.onChangeEmitter.fire(i);
      }
    }));
  }
  async getContentsStream(e, t) {
    Qb(!t?.isCancellationRequested, new vf());
    let i;
    try {
      const r = await this.fileService.resolve(this.uri);
      Qb(!t?.isCancellationRequested, new vf());
      Qb(r.isFile, new mSa(this.uri));
      if (Lqe(this.uri) === false) {
        throw new Nqe(this.uri);
      }
      i = await this.fileService.readFileStream(this.uri);
      if (this.disposed || t?.isCancellationRequested) {
        i.value.destroy();
        throw new vf();
      }
      return i.value;
    } catch (r) {
      throw r instanceof x1t || r instanceof vf ? r : new Lgu(this.uri, r);
    }
  }
  createNew(e) {
    return new Kgu(e.uri, this.fileService);
  }
  toString() {
    return `file-prompt-contents-provider:${this.uri.path}`;
  }
};
a0i = Kgu = __decorate([__param(1, Gr)], a0i);
