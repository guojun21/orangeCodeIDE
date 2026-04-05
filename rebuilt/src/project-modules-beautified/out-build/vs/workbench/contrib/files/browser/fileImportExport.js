"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/fileImportExport.js
// Offset: 31222939 (bundle byte offset)
// Size: 18271 bytes
Ht();
Po();
ru();
ns();
So();
Xg();
$ie();
gD();
ss();
vr();
Ql();
Yr();
YI();
hfn();
Yn();
wm();
ps();
sN();
Uye();
_r();
ri();
jr();
zr();
gde();
rt();
wH();
Vs();
_s();
Ei();
H3n();
Wt();
kr();
_0i = class {
  static {
    Aka = this;
  }
  static {
    this.MAX_PARALLEL_UPLOADS = 20;
  }
  constructor(e, t, i, r, s) {
    this.progressService = e;
    this.dialogService = t;
    this.explorerService = i;
    this.editorService = r;
    this.fileService = s;
  }
  upload(e, t) {
    const i = new Wc();
    const r = this.progressService.withProgress({
      location: 10,
      delay: 800,
      cancellable: true,
      title: _(7927, null)
    }, async s => this.doUpload(e, this.toTransfer(t), s, i.token), () => i.dispose(true));
    this.progressService.withProgress({
      location: GJ,
      delay: 500
    }, () => r);
    return r;
  }
  toTransfer(e) {
    if (CiA(e)) {
      return e.dataTransfer;
    }
    const t = {
      items: []
    };
    for (const i of e) {
      t.items.push({
        webkitGetAsEntry: () => ({
          name: i.name,
          isDirectory: false,
          isFile: true,
          createReader: () => {
            throw new Error("Unsupported for files");
          },
          file: r => r(i)
        })
      });
    }
    return t;
  }
  async doUpload(e, t, i, r) {
    const s = t.items;
    const o = [];
    for (const m of s) {
      o.push(m.webkitGetAsEntry());
    }
    const a = [];
    const l = {
      startTime: Date.now(),
      progressScheduler: new ZFt(m => {
        i.report(m[m.length - 1]);
      }, 1000),
      filesTotal: o.length,
      filesUploaded: 0,
      totalBytesUploaded: 0
    };
    const u = new wSe(Aka.MAX_PARALLEL_UPLOADS);
    await ib.settled(o.map(m => u.queue(async () => {
      if (r.isCancellationRequested) {
        return;
      }
      if (e && m.name && e.getChild(m.name)) {
        const {
          confirmed: g
        } = await this.dialogService.confirm(Gfu(m.name));
        if (!g || (await this.explorerService.applyBulkEdit([new QR(Wo(e.resource, m.name), undefined, {
          recursive: true,
          folder: e.getChild(m.name)?.isDirectory
        })], {
          undoLabel: _(7928, null, m.name),
          progressLabel: _(7929, null, m.name)
        }), r.isCancellationRequested)) {
          return;
        }
      }
      const p = await this.doUploadEntry(m, e.resource, e, i, l, r);
      if (p) {
        a.push(p);
      }
    })));
    l.progressScheduler.dispose();
    const d = a[0];
    if (!r.isCancellationRequested && d?.isFile) {
      await this.editorService.openEditor({
        resource: d.resource,
        options: {
          pinned: true
        }
      });
    }
  }
  async doUploadEntry(e, t, i, r, s, o) {
    if (o.isCancellationRequested || !e.name || !e.isFile && !e.isDirectory) {
      return;
    }
    let a = 0;
    const l = (d, m) => {
      a += m;
      s.totalBytesUploaded += m;
      const p = s.totalBytesUploaded / ((Date.now() - s.startTime) / 1000);
      let g;
      if (d < dT.MB) {
        if (s.filesTotal === 1) {
          g = `${e.name}`;
        } else {
          g = _(7930, null, s.filesUploaded, s.filesTotal, dT.formatSize(p));
        }
      } else {
        g = _(7931, null, e.name, dT.formatSize(a), dT.formatSize(d), dT.formatSize(p));
      }
      s.progressScheduler.work({
        message: g
      });
    };
    s.filesUploaded++;
    l(0, 0);
    const u = Wo(t, e.name);
    if (e.isFile) {
      const d = await new Promise((m, p) => e.file(m, p));
      if (o.isCancellationRequested) {
        return undefined;
      } else {
        if (typeof d.stream == "function" && d.size > dT.MB) {
          await this.doUploadFileBuffered(u, d, l, o);
        } else {
          await this.doUploadFileUnbuffered(u, d, l);
        }
        return {
          isFile: true,
          resource: u
        };
      }
    } else {
      await this.fileService.createFolder(u);
      if (o.isCancellationRequested) {
        return;
      }
      const d = e.createReader();
      const m = [];
      let p = false;
      do {
        const C = await new Promise((x, I) => d.readEntries(x, I));
        if (C.length > 0) {
          m.push(...C);
        } else {
          p = true;
        }
      } while (!p && !o.isCancellationRequested);
      s.filesTotal += m.length;
      const g = i && i.getChild(e.name) || undefined;
      const f = [];
      const A = [];
      for (const C of m) {
        if (C.isFile) {
          f.push(C);
        } else if (C.isDirectory) {
          A.push(C);
        }
      }
      const w = new wSe(Aka.MAX_PARALLEL_UPLOADS);
      await ib.settled(f.map(C => w.queue(() => this.doUploadEntry(C, u, g, r, s, o))));
      for (const C of A) {
        await this.doUploadEntry(C, u, g, r, s, o);
      }
      return {
        isFile: false,
        resource: u
      };
    }
  }
  async doUploadFileBuffered(e, t, i, r) {
    const s = cCc({
      highWaterMark: 10
    });
    const o = this.fileService.writeFile(e, s);
    try {
      const a = t.stream().getReader();
      let l = await a.read();
      while (!l.done && !r.isCancellationRequested) {
        const u = Ms.wrap(l.value);
        await s.write(u);
        if (r.isCancellationRequested) {
          break;
        }
        i(t.size, u.byteLength);
        l = await a.read();
      }
      s.end(undefined);
    } catch (a) {
      s.error(a);
      s.end();
    }
    if (!r.isCancellationRequested) {
      await o;
    }
  }
  doUploadFileUnbuffered(e, t, i) {
    return new Promise((r, s) => {
      const o = new FileReader();
      o.onload = async a => {
        try {
          if (a.target?.result instanceof ArrayBuffer) {
            const l = Ms.wrap(new Uint8Array(a.target.result));
            await this.fileService.writeFile(e, l);
            i(t.size, l.byteLength);
          } else {
            throw new Error("Could not read from dropped file.");
          }
          r();
        } catch (l) {
          s(l);
        }
      };
      o.readAsArrayBuffer(t);
    });
  }
};
_0i = Aka = __decorate([__param(0, Ib), __param(1, Ml), __param(2, DC), __param(3, yi), __param(4, Gr)], _0i);
wka = class {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    this.fileService = e;
    this.hostService = t;
    this.contextService = i;
    this.configurationService = r;
    this.dialogService = s;
    this.workspaceEditingService = o;
    this.explorerService = a;
    this.editorService = l;
    this.progressService = u;
    this.notificationService = d;
    this.instantiationService = m;
  }
  async import(e, t, i) {
    const r = new Wc();
    const s = this.progressService.withProgress({
      location: 10,
      delay: 800,
      cancellable: true,
      title: _(7932, null)
    }, async () => await this.doImport(e, t, i, r.token), () => r.dispose(true));
    this.progressService.withProgress({
      location: GJ,
      delay: 500
    }, () => s);
    return s;
  }
  async doImport(e, t, i, r) {
    const s = lh((await this.instantiationService.invokeFunction(u => z5o(u, t))).map(u => u.resource));
    await Promise.all(s.map(u => this.fileService.activateProvider(u.scheme)));
    const o = lh(s.filter(u => this.fileService.hasProvider(u)));
    const a = await this.fileService.resolveAll(o.map(u => ({
      resource: u
    })));
    if (r.isCancellationRequested) {
      return;
    }
    this.hostService.focus(i);
    const l = a.filter(u => u.success && u.stat?.isDirectory).map(u => ({
      uri: u.stat.resource
    }));
    if (l.length > 0 && e.isRoot) {
      let u;
      (function (f) {
        f[f.Copy = 1] = "Copy";
        f[f.Add = 2] = "Add";
      })(u ||= {});
      const d = [{
        label: l.length > 1 ? _(7933, null) : _(7934, null),
        run: () => u.Copy
      }];
      let m;
      const p = this.contextService.getWorkspace().folders.map(f => f.uri.scheme);
      if (l.some(f => p.indexOf(f.uri.scheme) >= 0)) {
        d.unshift({
          label: l.length > 1 ? _(7935, null) : _(7936, null),
          run: () => u.Add
        });
        m = l.length > 1 ? _(7937, null) : _(7938, null, ca(l[0].uri));
      } else {
        m = l.length > 1 ? _(7939, null) : _(7940, null, ca(l[0].uri));
      }
      const {
        result: g
      } = await this.dialogService.prompt({
        type: Rs.Info,
        message: m,
        buttons: d,
        cancelButton: true
      });
      if (g === u.Add) {
        return this.workspaceEditingService.addFolders(l);
      }
      if (g === u.Copy) {
        return this.importResources(e, o, r);
      }
    } else if (e instanceof v8) {
      return this.importResources(e, o, r);
    }
  }
  async importResources(e, t, i) {
    if (t && t.length > 0) {
      const r = await this.fileService.resolve(e.resource);
      if (i.isCancellationRequested) {
        return;
      }
      const s = new Set();
      const o = this.fileService.hasCapability(e.resource, 1024);
      if (r.children) {
        r.children.forEach(p => {
          s.add(o ? p.name : p.name.toLowerCase());
        });
      }
      let a = 0;
      const l = lh(await ib.settled(t.map(async p => {
        if (!(await this.fileService.exists(p))) {
          a++;
          return;
        }
        if (!s.has(o ? ca(p) : ca(p).toLowerCase()) || !!(await this.dialogService.confirm(Gfu(ca(p)))).confirmed) {
          return p;
        }
      })));
      if (a > 0) {
        this.notificationService.error(a > 1 ? _(7941, null) : _(7942, null));
      }
      const u = l.map(p => {
        const g = ca(p);
        const f = Wo(e.resource, g);
        return new QR(p, f, {
          overwrite: true,
          copy: true
        });
      });
      const d = this.configurationService.getValue().explorer.confirmUndo;
      await this.explorerService.applyBulkEdit(u, {
        undoLabel: l.length === 1 ? _(7943, null, ca(l[0])) : _(7944, null, l.length),
        progressLabel: l.length === 1 ? _(7945, null, ca(l[0])) : _(7946, null, l.length),
        progressLocation: 10,
        confirmBeforeUndo: d === "verbose" || d === "default"
      });
      if (this.configurationService.getValue().explorer.autoOpenDroppedFile && u.length === 1) {
        const p = this.explorerService.findClosest(u[0].newResource);
        if (p && !p.isDirectory) {
          this.editorService.openEditor({
            resource: p.resource,
            options: {
              pinned: true
            }
          });
        }
      }
    }
  }
};
wka = __decorate([__param(0, Gr), __param(1, wd), __param(2, Lr), __param(3, Fn), __param(4, Ml), __param(5, uX), __param(6, DC), __param(7, yi), __param(8, Ib), __param(9, ms), __param(10, ln)], wka);
_ka = class {
  static {
    yka = this;
  }
  static {
    this.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY = "workbench.explorer.downloadPath";
  }
  constructor(e, t, i, r, s, o) {
    this.fileService = e;
    this.explorerService = t;
    this.progressService = i;
    this.logService = r;
    this.fileDialogService = s;
    this.storageService = o;
  }
  download(e) {
    const t = new Wc();
    const i = this.progressService.withProgress({
      location: 10,
      delay: 800,
      cancellable: Eu,
      title: _(7947, null)
    }, async r => this.doDownload(e, r, t), () => t.dispose(true));
    this.progressService.withProgress({
      location: GJ,
      delay: 500
    }, () => i);
    return i;
  }
  async doDownload(e, t, i) {
    for (const r of e) {
      if (i.token.isCancellationRequested) {
        return;
      }
      if (Eu) {
        await this.doDownloadBrowser(r.resource, t, i);
      } else {
        await this.doDownloadNative(r, t, i);
      }
    }
  }
  async doDownloadBrowser(e, t, i) {
    const r = await this.fileService.resolve(e, {
      resolveMetadata: true
    });
    if (i.token.isCancellationRequested) {
      return;
    }
    const s = dT.MB * 32;
    const o = r.isDirectory || r.size > s;
    const a = $c();
    if (o && zde.supported(a)) {
      try {
        const l = await a.showDirectoryPicker();
        const u = {
          startTime: Date.now(),
          progressScheduler: new ZFt(d => {
            t.report(d[d.length - 1]);
          }, 1000),
          filesTotal: r.isDirectory ? 0 : 1,
          filesDownloaded: 0,
          totalBytesDownloaded: 0,
          fileBytesDownloaded: 0
        };
        if (r.isDirectory) {
          const d = await l.getDirectoryHandle(r.name, {
            create: true
          });
          await this.downloadFolderBrowser(r, d, u, i.token);
        } else {
          await this.downloadFileBrowser(l, r, u, i.token);
        }
        u.progressScheduler.dispose();
      } catch (l) {
        this.logService.warn(l);
        i.cancel();
      }
    } else if (r.isFile) {
      let l;
      try {
        l = (await this.fileService.readFile(r.resource, {
          limits: {
            size: s
          }
        }, i.token)).value.buffer;
      } catch {
        l = og.uriToBrowserUri(r.resource);
      }
      if (!i.token.isCancellationRequested) {
        TiA(l, r.name);
      }
    }
  }
  async downloadFileBufferedBrowser(e, t, i, r) {
    const s = await this.fileService.readFileStream(e, undefined, r);
    if (r.isCancellationRequested) {
      t.close();
      return;
    }
    return new Promise((o, a) => {
      const l = s.value;
      const u = new Ut();
      u.add($i(() => t.close()));
      u.add(_6(r.onCancellationRequested)(() => {
        u.dispose();
        a(_be());
      }));
      Agt(l, {
        onData: d => {
          t.write(d.buffer);
          this.reportProgress(s.name, s.size, d.byteLength, i);
        },
        onError: d => {
          u.dispose();
          a(d);
        },
        onEnd: () => {
          u.dispose();
          o();
        }
      }, r);
    });
  }
  async downloadFileUnbufferedBrowser(e, t, i, r) {
    const s = await this.fileService.readFile(e, undefined, r);
    if (!r.isCancellationRequested) {
      t.write(s.value.buffer);
      this.reportProgress(s.name, s.size, s.value.byteLength, i);
    }
    t.close();
  }
  async downloadFileBrowser(e, t, i, r) {
    i.filesDownloaded++;
    i.fileBytesDownloaded = 0;
    this.reportProgress(t.name, 0, 0, i);
    const o = await (await e.getFileHandle(t.name, {
      create: true
    })).createWritable();
    if (t.size > dT.MB) {
      return this.downloadFileBufferedBrowser(t.resource, o, i, r);
    } else {
      return this.downloadFileUnbufferedBrowser(t.resource, o, i, r);
    }
  }
  async downloadFolderBrowser(e, t, i, r) {
    if (e.children) {
      i.filesTotal += e.children.map(s => s.isFile).length;
      for (const s of e.children) {
        if (r.isCancellationRequested) {
          return;
        }
        if (s.isFile) {
          await this.downloadFileBrowser(t, s, i, r);
        } else {
          const o = await t.getDirectoryHandle(s.name, {
            create: true
          });
          const a = await this.fileService.resolve(s.resource, {
            resolveMetadata: true
          });
          await this.downloadFolderBrowser(a, o, i, r);
        }
      }
    }
  }
  reportProgress(e, t, i, r) {
    r.fileBytesDownloaded += i;
    r.totalBytesDownloaded += i;
    const s = r.totalBytesDownloaded / ((Date.now() - r.startTime) / 1000);
    let o;
    if (t < dT.MB) {
      if (r.filesTotal === 1) {
        o = e;
      } else {
        o = _(7948, null, r.filesDownloaded, r.filesTotal, dT.formatSize(s));
      }
    } else {
      o = _(7949, null, e, dT.formatSize(r.fileBytesDownloaded), dT.formatSize(t), dT.formatSize(s));
    }
    r.progressScheduler.work({
      message: o
    });
  }
  async doDownloadNative(e, t, i) {
    t.report({
      message: e.name
    });
    let r;
    const s = this.storageService.get(yka.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY, -1);
    if (s) {
      r = Wo(je.file(s), e.name);
    } else {
      r = Wo(e.isDirectory ? await this.fileDialogService.defaultFolderPath(_n.file) : await this.fileDialogService.defaultFilePath(_n.file), e.name);
    }
    const o = await this.fileDialogService.showSaveDialog({
      availableFileSystems: [_n.file],
      saveLabel: _(7950, null),
      title: _(7951, null),
      defaultUri: r
    });
    if (o) {
      this.storageService.store(yka.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY, Td(o).fsPath, -1, 1);
      await this.explorerService.applyBulkEdit([new QR(e.resource, o, {
        overwrite: true,
        copy: true
      })], {
        undoLabel: _(7952, null, e.name),
        progressLabel: _(7953, null, e.name),
        progressLocation: 10
      });
    } else {
      i.cancel();
    }
  }
};
_ka = yka = __decorate([__param(0, Gr), __param(1, DC), __param(2, Ib), __param(3, Rr), __param(4, oy), __param(5, Hi)], _ka);
