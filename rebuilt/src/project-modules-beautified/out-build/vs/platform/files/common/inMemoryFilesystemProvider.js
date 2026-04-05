"use strict";

// Module: out-build/vs/platform/files/common/inMemoryFilesystemProvider.js
// Offset: 31030525 (bundle byte offset)
// Size: 4035 bytes
Ql();
yn();
rt();
Yr();
gde();
ns();
xgu = class {
  constructor(n) {
    this.type = JI.File;
    this.ctime = Date.now();
    this.mtime = Date.now();
    this.size = 0;
    this.name = n;
  }
};
qgn = class {
  constructor(n) {
    this.type = JI.Directory;
    this.ctime = Date.now();
    this.mtime = Date.now();
    this.size = 0;
    this.name = n;
    this.entries = new Map();
  }
};
z_i = class extends at {
  constructor() {
    super(...arguments);
    this.memoryFdCounter = 0;
    this.fdMemory = new Map();
    this._onDidChangeCapabilities = this._register(new Qe());
    this.onDidChangeCapabilities = this._onDidChangeCapabilities.event;
    this._capabilities = 1026;
    this.root = new qgn("");
    this._onDidChangeFile = this._register(new Qe());
    this.onDidChangeFile = this._onDidChangeFile.event;
    this._bufferedChanges = [];
  }
  get capabilities() {
    return this._capabilities;
  }
  setReadOnly(n) {
    const e = !!(this._capabilities & 2048);
    if (n !== e) {
      this._capabilities = n ? 3074 : 1026;
      this._onDidChangeCapabilities.fire();
    }
  }
  async stat(n) {
    return this._lookup(n, false);
  }
  async readdir(n) {
    const e = this._lookupAsDirectory(n, false);
    const t = [];
    e.entries.forEach((i, r) => t.push([r, i.type]));
    return t;
  }
  async readFile(n) {
    const e = this._lookupAsFile(n, false).data;
    if (e) {
      return e;
    }
    throw eL("file not found", Qm.FileNotFound);
  }
  readFileStream(n) {
    const e = this._lookupAsFile(n, false).data;
    const t = bSe(i => Ms.concat(i.map(r => Ms.wrap(r))).buffer);
    t.end(e);
    return t;
  }
  async writeFile(n, e, t) {
    const i = ca(n);
    const r = this._lookupParentDirectory(n);
    let s = r.entries.get(i);
    if (s instanceof qgn) {
      throw eL("file is directory", Qm.FileIsADirectory);
    }
    if (!s && !t.create) {
      throw eL("file not found", Qm.FileNotFound);
    }
    if (s && t.create && !t.overwrite) {
      throw eL("file exists already", Qm.FileExists);
    }
    if (!s) {
      s = new xgu(i);
      r.entries.set(i, s);
      this._fireSoon({
        type: 1,
        resource: n
      });
    }
    s.mtime = Date.now();
    s.size = e.byteLength;
    s.data = e;
    this._fireSoon({
      type: 0,
      resource: n
    });
  }
  open(n, e) {
    const t = this._lookupAsFile(n, false).data;
    if (t) {
      const i = this.memoryFdCounter++;
      this.fdMemory.set(i, t);
      return Promise.resolve(i);
    }
    throw eL("file not found", Qm.FileNotFound);
  }
  close(n) {
    this.fdMemory.delete(n);
    return Promise.resolve();
  }
  read(n, e, t, i, r) {
    const s = this.fdMemory.get(n);
    if (!s) {
      throw eL("No file with that descriptor open", Qm.Unavailable);
    }
    const o = Ms.wrap(s).slice(e, e + r);
    t.set(o.buffer, i);
    return Promise.resolve(o.byteLength);
  }
  write(n, e, t, i, r) {
    const s = this.fdMemory.get(n);
    if (!s) {
      throw eL("No file with that descriptor open", Qm.Unavailable);
    }
    const o = Ms.wrap(t).slice(i, i + r);
    s.set(o.buffer, e);
    return Promise.resolve(o.byteLength);
  }
  async rename(n, e, t) {
    if (!t.overwrite && this._lookup(e, true)) {
      throw eL("file exists already", Qm.FileExists);
    }
    const i = this._lookup(n, false);
    const r = this._lookupParentDirectory(n);
    const s = this._lookupParentDirectory(e);
    const o = ca(e);
    r.entries.delete(i.name);
    i.name = o;
    s.entries.set(o, i);
    this._fireSoon({
      type: 2,
      resource: n
    }, {
      type: 1,
      resource: e
    });
  }
  async delete(n, e) {
    const t = Td(n);
    const i = ca(n);
    const r = this._lookupAsDirectory(t, false);
    if (r.entries.has(i)) {
      r.entries.delete(i);
      r.mtime = Date.now();
      r.size -= 1;
      this._fireSoon({
        type: 0,
        resource: t
      }, {
        resource: n,
        type: 2
      });
    }
  }
  async mkdir(n) {
    if (this._lookup(n, true)) {
      throw eL("file exists already", Qm.FileExists);
    }
    const e = ca(n);
    const t = Td(n);
    const i = this._lookupAsDirectory(t, false);
    const r = new qgn(e);
    i.entries.set(r.name, r);
    i.mtime = Date.now();
    i.size += 1;
    this._fireSoon({
      type: 0,
      resource: t
    }, {
      type: 1,
      resource: n
    });
  }
  _lookup(n, e) {
    const t = n.path.split("/");
    let i = this.root;
    for (const r of t) {
      if (!r) {
        continue;
      }
      let s;
      if (i instanceof qgn) {
        s = i.entries.get(r);
      }
      if (!s) {
        if (e) {
          return;
        }
        throw eL("file not found", Qm.FileNotFound);
      }
      i = s;
    }
    return i;
  }
  _lookupAsDirectory(n, e) {
    const t = this._lookup(n, e);
    if (t instanceof qgn) {
      return t;
    }
    throw eL("file not a directory", Qm.FileNotADirectory);
  }
  _lookupAsFile(n, e) {
    const t = this._lookup(n, e);
    if (t instanceof xgu) {
      return t;
    }
    throw eL("file is a directory", Qm.FileIsADirectory);
  }
  _lookupParentDirectory(n) {
    const e = Td(n);
    return this._lookupAsDirectory(e, false);
  }
  watch(n, e) {
    return at.None;
  }
  _fireSoon(...n) {
    this._bufferedChanges.push(...n);
    if (this._fireSoonHandle) {
      clearTimeout(this._fireSoonHandle);
    }
    this._fireSoonHandle = setTimeout(() => {
      this._onDidChangeFile.fire(this._bufferedChanges);
      this._bufferedChanges.length = 0;
    }, 5);
  }
  dispose() {
    super.dispose();
    this.fdMemory.clear();
  }
};
