"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatPasteProviders.js
// Offset: 32539155 (bundle byte offset)
// Size: 4922 bytes
Ql();
qi();
ZSe();
QY();
rt();
hF();
zr();
Yr();
Yn();
Cm();
hd();
Ht();
qg();
ns();
jr();
_u();
kk();
Gfn();
zgn();
ECi = "application/vnd.code.additional-editor-data";
yEa = class {
  constructor(e, t, i, r, s) {
    this.chatWidgetService = e;
    this.extensionService = t;
    this.fileService = i;
    this.environmentService = r;
    this.logService = s;
    this.kind = new p0("chat.attach.image");
    this.providedPasteEditKinds = [this.kind];
    this.copyMimeTypes = [];
    this.pasteMimeTypes = ["image/*"];
    this.imagesFolder = Wo(this.environmentService.workspaceStorageHome, "vscode-chat-images");
    this.cleanupOldImages();
  }
  async provideDocumentPasteEdits(e, t, i, r, s) {
    if (!this.extensionService.extensions.some(I => g8(I, "chatReferenceBinaryData"))) {
      return;
    }
    const o = ["image/png", "image/jpeg", "image/jpg", "image/bmp", "image/gif", "image/tiff"];
    let a;
    let l;
    for (const I of o) {
      l = i.get(I);
      if (l) {
        a = I;
        break;
      }
    }
    if (!l || !a) {
      return;
    }
    const u = await l.asFile()?.data();
    if (s.isCancellationRequested || !u) {
      return;
    }
    const d = this.chatWidgetService.getWidgetByInputUri(e.uri);
    if (!d) {
      return;
    }
    const m = d.attachmentModel.attachments;
    const p = _(5419, null);
    let g = p;
    for (let I = 2; m.some(B => B.name === g); I++) {
      g = `${p} ${I}`;
    }
    const f = await this.createFileForMedia(u, a);
    if (s.isCancellationRequested || !f) {
      return;
    }
    const A = await kit(u);
    if (s.isCancellationRequested || !A) {
      return;
    }
    const w = await vly(A, a, s, g, f);
    if (s.isCancellationRequested || !w || (d.attachmentModel.addContext(w), d.attachmentModel.getAttachmentIDs().has(w.id))) {
      return;
    }
    const x = VOf(e, w, a, this.kind, _(5420, null), this.chatWidgetService);
    return KOf(x);
  }
  async createFileForMedia(e, t) {
    if (!(await this.fileService.exists(this.imagesFolder))) {
      await this.fileService.createFolder(this.imagesFolder);
    }
    const r = t.split("/")[1] || "png";
    const s = `image-${Date.now()}.${r}`;
    const o = Wo(this.imagesFolder, s);
    const a = Ms.wrap(e);
    await this.fileService.writeFile(o, a);
    return o;
  }
  async cleanupOldImages() {
    if (!(await this.fileService.exists(this.imagesFolder))) {
      return;
    }
    const t = 604800000;
    const i = await this.fileService.resolve(this.imagesFolder);
    if (i.children) {
      await Promise.all(i.children.map(async r => {
        try {
          const s = this.getTimestampFromFilename(r.name);
          if (s && Date.now() - s > t) {
            await this.fileService.del(r.resource);
          }
        } catch (s) {
          this.logService.error("Failed to clean up old images", s);
        }
      }));
    }
  }
  getTimestampFromFilename(e) {
    const t = e.match(/image-(\d+)\./);
    if (t) {
      return parseInt(t[1], 10);
    }
  }
};
yEa = __decorate([__param(2, Gr), __param(3, lg), __param(4, Rr)], yEa);
YOf = class {
  constructor() {
    this.providedPasteEditKinds = [];
    this.copyMimeTypes = [ECi];
    this.pasteMimeTypes = [];
  }
  async prepareDocumentPaste(n, e, t, i) {
    if (n.uri.scheme === QJ.INPUT_SCHEME) {
      return;
    }
    const r = new wbt();
    const s = {
      range: e[0],
      uri: n.uri.toJSON()
    };
    r.append(ECi, W3t(JSON.stringify(s)));
    return r;
  }
};
ZOf = class {
  constructor(n, e) {
    this.chatWidgetService = n;
    this.modelService = e;
    this.kind = new p0("chat.attach.text");
    this.providedPasteEditKinds = [this.kind];
    this.copyMimeTypes = [];
    this.pasteMimeTypes = [ECi];
  }
  async provideDocumentPasteEdits(n, e, t, i, r) {
    if (n.uri.scheme !== QJ.INPUT_SCHEME) {
      return;
    }
    const s = t.get(NA.text);
    const o = t.get("vscode-editor-data");
    const a = t.get(ECi);
    if (!o || !s || !a) {
      return;
    }
    const l = await s.asString();
    const u = JSON.parse(await o.asString());
    const d = JSON.parse(await a.asString());
    const m = this.chatWidgetService.getWidgetByInputUri(n.uri);
    if (!m) {
      return;
    }
    const p = d.range.startLineNumber;
    const g = d.range.endLineNumber;
    if (p === g) {
      const C = this.modelService.getModel(je.revive(d.uri));
      if (!C || C.getLineContent(p) !== l) {
        return;
      }
    }
    const f = Aly(l, je.revive(d.uri), u.mode, d.range);
    if (r.isCancellationRequested || !f || m.attachmentModel.getAttachmentIDs().has(f.id)) {
      return;
    }
    const w = VOf(n, f, NA.text, this.kind, _(5421, null), this.chatWidgetService);
    w.yieldTo = [{
      kind: p0.Empty.append("text", "plain")
    }];
    return KOf(w);
  }
};
wEa = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._register(e.documentPasteEditProvider.register({
      scheme: QJ.INPUT_SCHEME,
      pattern: "*",
      hasAccessToAllModels: true
    }, new yEa(t, i, r, o, a)));
    this._register(e.documentPasteEditProvider.register({
      scheme: QJ.INPUT_SCHEME,
      pattern: "*",
      hasAccessToAllModels: true
    }, new ZOf(t, s)));
    this._register(e.documentPasteEditProvider.register("*", new YOf()));
  }
};
wEa = __decorate([__param(0, $u), __param(1, M1), __param(2, su), __param(3, Gr), __param(4, Il), __param(5, lg), __param(6, Rr)], wEa);
