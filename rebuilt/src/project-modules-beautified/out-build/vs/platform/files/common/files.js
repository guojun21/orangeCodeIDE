"use strict";

// Module: out-build/vs/platform/files/common/files.js
// Offset: 925122 (bundle byte offset)
// Size: 6488 bytes
Dde();
Hl();
oa();
Js();
Yn();
Ht();
Wt();
_r();
zr();
L0();
Gr = xi("fileService");
(function (n) {
  n[n.Unknown = 0] = "Unknown";
  n[n.File = 1] = "File";
  n[n.Directory = 2] = "Directory";
  n[n.SymbolicLink = 64] = "SymbolicLink";
})(JI ||= {});
(function (n) {
  n[n.Readonly = 1] = "Readonly";
  n[n.Locked = 2] = "Locked";
})(nRe ||= {});
(function (n) {
  n[n.UPDATED = 2] = "UPDATED";
  n[n.ADDED = 4] = "ADDED";
  n[n.DELETED = 8] = "DELETED";
})(Wdh ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.FileReadWrite = 2] = "FileReadWrite";
  n[n.FileOpenReadWriteClose = 4] = "FileOpenReadWriteClose";
  n[n.FileReadStream = 16] = "FileReadStream";
  n[n.FileFolderCopy = 8] = "FileFolderCopy";
  n[n.PathCaseSensitive = 1024] = "PathCaseSensitive";
  n[n.Readonly = 2048] = "Readonly";
  n[n.Trash = 4096] = "Trash";
  n[n.FileWriteUnlock = 8192] = "FileWriteUnlock";
  n[n.FileAtomicRead = 16384] = "FileAtomicRead";
  n[n.FileAtomicWrite = 32768] = "FileAtomicWrite";
  n[n.FileAtomicDelete = 65536] = "FileAtomicDelete";
  n[n.FileClone = 131072] = "FileClone";
})(Qdh ||= {});
(function (n) {
  n.FileExists = "EntryExists";
  n.FileNotFound = "EntryNotFound";
  n.FileNotADirectory = "EntryNotADirectory";
  n.FileIsADirectory = "EntryIsADirectory";
  n.FileExceedsStorageQuota = "EntryExceedsStorageQuota";
  n.FileTooLarge = "EntryTooLarge";
  n.FileWriteLocked = "EntryWriteLocked";
  n.NoPermissions = "NoPermissions";
  n.Unavailable = "Unavailable";
  n.Unknown = "Unknown";
})(Qm ||= {});
V4n = class MJb extends Error {
  static create(e, t) {
    const i = new MJb(e.toString(), t);
    qdh(i, t);
    return i;
  }
  constructor(e, t) {
    super(e);
    this.code = t;
  }
};
(function (n) {
  n[n.CREATE = 0] = "CREATE";
  n[n.DELETE = 1] = "DELETE";
  n[n.MOVE = 2] = "MOVE";
  n[n.COPY = 3] = "COPY";
  n[n.WRITE = 4] = "WRITE";
})(jdh ||= {});
z5e = class {
  constructor(n, e, t) {
    this.resource = n;
    this.operation = e;
    this.target = t;
  }
  isOperation(n) {
    return this.operation === n;
  }
};
(function (n) {
  n[n.UPDATED = 0] = "UPDATED";
  n[n.ADDED = 1] = "ADDED";
  n[n.DELETED = 2] = "DELETED";
})(zdh ||= {});
V5e = class QGa {
  static {
    this.MIXED_CORRELATION = null;
  }
  constructor(e, t) {
    this.ignorePathCasing = t;
    this.correlationId = undefined;
    this.added = new Ob(() => {
      const i = MH.forUris(() => this.ignorePathCasing);
      i.fill(this.rawAdded.map(r => [r, true]));
      return i;
    });
    this.updated = new Ob(() => {
      const i = MH.forUris(() => this.ignorePathCasing);
      i.fill(this.rawUpdated.map(r => [r, true]));
      return i;
    });
    this.deleted = new Ob(() => {
      const i = MH.forUris(() => this.ignorePathCasing);
      i.fill(this.rawDeleted.map(r => [r, true]));
      return i;
    });
    this.rawAdded = [];
    this.rawUpdated = [];
    this.rawDeleted = [];
    for (const i of e) {
      switch (i.type) {
        case 1:
          this.rawAdded.push(i.resource);
          break;
        case 0:
          this.rawUpdated.push(i.resource);
          break;
        case 2:
          this.rawDeleted.push(i.resource);
          break;
      }
      if (this.correlationId !== QGa.MIXED_CORRELATION) {
        if (typeof i.cId == "number") {
          if (this.correlationId === undefined) {
            this.correlationId = i.cId;
          } else if (this.correlationId !== i.cId) {
            this.correlationId = QGa.MIXED_CORRELATION;
          }
        } else if (this.correlationId !== undefined) {
          this.correlationId = QGa.MIXED_CORRELATION;
        }
      }
    }
  }
  contains(e, ...t) {
    return this.doContains(e, {
      includeChildren: false
    }, ...t);
  }
  affects(e, ...t) {
    return this.doContains(e, {
      includeChildren: true
    }, ...t);
  }
  doContains(e, t, ...i) {
    if (!e) {
      return false;
    }
    const r = i.length > 0;
    return (!r || !!i.includes(1)) && (!!this.added.value.get(e) || !!t.includeChildren && !!this.added.value.findSuperstr(e)) || (!r || !!i.includes(0)) && (!!this.updated.value.get(e) || !!t.includeChildren && !!this.updated.value.findSuperstr(e)) || (!r || !!i.includes(2)) && (!!this.deleted.value.findSubstr(e) || !!t.includeChildren && !!this.deleted.value.findSuperstr(e));
  }
  gotAdded() {
    return this.rawAdded.length > 0;
  }
  gotDeleted() {
    return this.rawDeleted.length > 0;
  }
  gotUpdated() {
    return this.rawUpdated.length > 0;
  }
  correlates(e) {
    return this.correlationId === e;
  }
  hasCorrelation() {
    return typeof this.correlationId == "number";
  }
};
GI = class extends Error {
  constructor(n, e, t) {
    super(n);
    this.fileOperationResult = e;
    this.options = t;
  }
};
vVe = class extends GI {
  constructor(n, e, t, i) {
    super(n, e, i);
    this.fileOperationResult = e;
    this.size = t;
  }
};
pOt = class extends GI {
  constructor(n, e, t) {
    super(n, 2, t);
    this.stat = e;
  }
};
(function (n) {
  n[n.FILE_IS_DIRECTORY = 0] = "FILE_IS_DIRECTORY";
  n[n.FILE_NOT_FOUND = 1] = "FILE_NOT_FOUND";
  n[n.FILE_NOT_MODIFIED_SINCE = 2] = "FILE_NOT_MODIFIED_SINCE";
  n[n.FILE_MODIFIED_SINCE = 3] = "FILE_MODIFIED_SINCE";
  n[n.FILE_MOVE_CONFLICT = 4] = "FILE_MOVE_CONFLICT";
  n[n.FILE_WRITE_LOCKED = 5] = "FILE_WRITE_LOCKED";
  n[n.FILE_PERMISSION_DENIED = 6] = "FILE_PERMISSION_DENIED";
  n[n.FILE_TOO_LARGE = 7] = "FILE_TOO_LARGE";
  n[n.FILE_INVALID_PATH = 8] = "FILE_INVALID_PATH";
  n[n.FILE_NOT_DIRECTORY = 9] = "FILE_NOT_DIRECTORY";
  n[n.FILE_OTHER_ERROR = 10] = "FILE_OTHER_ERROR";
})(Vdh ||= {});
g3 = {
  OFF: "off",
  AFTER_DELAY: "afterDelay",
  ON_FOCUS_CHANGE: "onFocusChange",
  ON_WINDOW_CHANGE: "onWindowChange"
};
FH = {
  OFF: "off",
  ON_EXIT: "onExit",
  ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
};
gOt = "files.associations";
V1c = "files.exclude";
K1c = "files.readonlyInclude";
Y1c = "files.readonlyExclude";
Kdh = "files.readonlyFromPermissions";
(function (n) {
  n[n.FILE = 0] = "FILE";
  n[n.FOLDER = 1] = "FOLDER";
  n[n.ROOT_FOLDER = 2] = "ROOT_FOLDER";
  n[n.PULL_REQUEST = 3] = "PULL_REQUEST";
})(xg ||= {});
zbe = "";
dT = class bre {
  static {
    this.KB = 1024;
  }
  static {
    this.MB = bre.KB * bre.KB;
  }
  static {
    this.GB = bre.MB * bre.KB;
  }
  static {
    this.TB = bre.GB * bre.KB;
  }
  static formatSize(e) {
    if (!_1(e)) {
      e = 0;
    }
    if (e < bre.KB) {
      return _(2033, null, e.toFixed(0));
    } else if (e < bre.MB) {
      return _(2034, null, (e / bre.KB).toFixed(2));
    } else if (e < bre.GB) {
      return _(2035, null, (e / bre.MB).toFixed(2));
    } else if (e < bre.TB) {
      return _(2036, null, (e / bre.GB).toFixed(2));
    } else {
      return _(2037, null, (e / bre.TB).toFixed(2));
    }
  }
};
