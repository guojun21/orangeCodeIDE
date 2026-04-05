"use strict";

// Module: out-build/vs/workbench/services/workingCopy/common/workingCopyFileService.js
// Offset: 31216382 (bundle byte offset)
// Size: 6112 bytes
Wt();
Er();
yn();
vr();
Vs();
rt();
ns();
Po();
lP();
_d();
loy();
uoy();
t7 = xi("workingCopyFileService");
vka = class extends at {
  constructor(e, t, i, r) {
    super();
    this.fileService = e;
    this.workingCopyService = t;
    this.uriIdentityService = r;
    this._onWillRunWorkingCopyFileOperation = this._register(new j2n());
    this.onWillRunWorkingCopyFileOperation = this._onWillRunWorkingCopyFileOperation.event;
    this._onDidFailWorkingCopyFileOperation = this._register(new j2n());
    this.onDidFailWorkingCopyFileOperation = this._onDidFailWorkingCopyFileOperation.event;
    this._onDidRunWorkingCopyFileOperation = this._register(new j2n());
    this.onDidRunWorkingCopyFileOperation = this._onDidRunWorkingCopyFileOperation.event;
    this.correlationIds = 0;
    this.workingCopyProviders = [];
    this.fileOperationParticipants = this._register(i.createInstance(fka));
    this.saveParticipants = this._register(i.createInstance(bka));
    this._register(this.registerWorkingCopyProvider(s => this.workingCopyService.workingCopies.filter(o => this.fileService.hasProvider(s) ? this.uriIdentityService.extUri.isEqualOrParent(o.resource, s) : this.uriIdentityService.extUri.isEqual(o.resource, s))));
  }
  create(e, t, i) {
    return this.doCreateFileOrFolder(e, true, t, i);
  }
  createFolder(e, t, i) {
    return this.doCreateFileOrFolder(e, false, t, i);
  }
  async doCreateFileOrFolder(e, t, i, r) {
    if (e.length === 0) {
      return [];
    }
    if (t) {
      const u = (await ib.settled(e.map(d => this.fileService.canCreateFile(d.resource, {
        overwrite: d.overwrite
      })))).find(d => d instanceof Error);
      if (u instanceof Error) {
        throw u;
      }
    }
    const s = e.map(l => ({
      target: l.resource
    }));
    await this.runFileOperationParticipants(s, 0, r, i);
    const o = {
      correlationId: this.correlationIds++,
      operation: 0,
      files: s
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(o, Cs.None);
    let a;
    try {
      if (t) {
        a = await ib.settled(e.map(l => this.fileService.createFile(l.resource, l.contents, {
          overwrite: l.overwrite
        })));
      } else {
        a = await ib.settled(e.map(l => this.fileService.createFolder(l.resource)));
      }
    } catch (l) {
      await this._onDidFailWorkingCopyFileOperation.fireAsync(o, Cs.None);
      throw l;
    }
    await this._onDidRunWorkingCopyFileOperation.fireAsync(o, Cs.None);
    return a;
  }
  async move(e, t, i) {
    return this.doMoveOrCopy(e, true, t, i);
  }
  async copy(e, t, i) {
    return this.doMoveOrCopy(e, false, t, i);
  }
  async doMoveOrCopy(e, t, i, r) {
    const s = [];
    for (const {
      file: {
        source: l,
        target: u
      },
      overwrite: d
    } of e) {
      const m = await (t ? this.fileService.canMove(l, u, d) : this.fileService.canCopy(l, u, d));
      if (m instanceof Error) {
        throw m;
      }
    }
    const o = e.map(l => l.file);
    await this.runFileOperationParticipants(o, t ? 2 : 3, r, i);
    const a = {
      correlationId: this.correlationIds++,
      operation: t ? 2 : 3,
      files: o
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(a, Cs.None);
    try {
      for (const {
        file: {
          source: l,
          target: u
        },
        overwrite: d
      } of e) {
        if (!this.uriIdentityService.extUri.isEqual(l, u)) {
          const m = t ? [...this.getDirty(l), ...this.getDirty(u)] : this.getDirty(u);
          await ib.settled(m.map(p => p.revert({
            soft: true
          })));
        }
        if (t) {
          s.push(await this.fileService.move(l, u, d));
        } else {
          s.push(await this.fileService.copy(l, u, d));
        }
      }
    } catch (l) {
      await this._onDidFailWorkingCopyFileOperation.fireAsync(a, Cs.None);
      throw l;
    }
    await this._onDidRunWorkingCopyFileOperation.fireAsync(a, Cs.None);
    return s;
  }
  async delete(e, t, i) {
    for (const o of e) {
      const a = await this.fileService.canDelete(o.resource, {
        recursive: o.recursive,
        useTrash: o.useTrash
      });
      if (a instanceof Error) {
        throw a;
      }
    }
    const r = e.map(o => ({
      target: o.resource
    }));
    await this.runFileOperationParticipants(r, 1, i, t);
    const s = {
      correlationId: this.correlationIds++,
      operation: 1,
      files: r
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(s, Cs.None);
    for (const o of e) {
      const a = this.getDirty(o.resource);
      await ib.settled(a.map(l => l.revert({
        soft: true
      })));
    }
    try {
      for (const o of e) {
        await this.fileService.del(o.resource, {
          recursive: o.recursive,
          useTrash: o.useTrash
        });
      }
    } catch (o) {
      await this._onDidFailWorkingCopyFileOperation.fireAsync(s, Cs.None);
      throw o;
    }
    await this._onDidRunWorkingCopyFileOperation.fireAsync(s, Cs.None);
  }
  addFileOperationParticipant(e) {
    return this.fileOperationParticipants.addFileOperationParticipant(e);
  }
  runFileOperationParticipants(e, t, i, r) {
    return this.fileOperationParticipants.participate(e, t, i, r);
  }
  get hasSaveParticipants() {
    return this.saveParticipants.length > 0;
  }
  addSaveParticipant(e) {
    return this.saveParticipants.addSaveParticipant(e);
  }
  runSaveParticipants(e, t, i, r) {
    return this.saveParticipants.participate(e, t, i, r);
  }
  registerWorkingCopyProvider(e) {
    const t = kbe(this.workingCopyProviders, e);
    return $i(t);
  }
  getDirty(e) {
    const t = new Set();
    for (const i of this.workingCopyProviders) {
      for (const r of i(e)) {
        if (r.isDirty()) {
          t.add(r);
        }
      }
    }
    return Array.from(t);
  }
};
vka = __decorate([__param(0, Gr), __param(1, cB), __param(2, ln), __param(3, xl)], vka);
Vi(t7, vka, 1);
