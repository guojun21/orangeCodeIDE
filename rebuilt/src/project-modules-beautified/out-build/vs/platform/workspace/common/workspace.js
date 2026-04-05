"use strict";

// Module: out-build/vs/platform/workspace/common/workspace.js
// Offset: 931610 (bundle byte offset)
// Size: 1496 bytes
Ht();
Hl();
Dde();
Yr();
Yn();
Wt();
zr();
Lr = xi("contextService");
Ydh = {
  id: "ext-dev"
};
Y4n = {
  id: "empty-window"
};
(function (n) {
  n[n.EMPTY = 1] = "EMPTY";
  n[n.FOLDER = 2] = "FOLDER";
  n[n.WORKSPACE = 3] = "WORKSPACE";
})(Zdh ||= {});
Xdh = class {
  get folders() {
    return this._folders;
  }
  set folders(n) {
    this._folders = n;
    this.updateFoldersMap();
  }
  constructor(n, e, t, i, r) {
    this._id = n;
    this._transient = t;
    this._configuration = i;
    this.ignorePathCasing = r;
    this.foldersMap = MH.forUris(this.ignorePathCasing, () => true);
    this.folders = e;
  }
  update(n) {
    this._id = n.id;
    this._configuration = n.configuration;
    this._transient = n.transient;
    this.ignorePathCasing = n.ignorePathCasing;
    this.folders = n.folders;
  }
  get id() {
    return this._id;
  }
  get transient() {
    return this._transient;
  }
  get configuration() {
    return this._configuration;
  }
  set configuration(n) {
    this._configuration = n;
  }
  getFolder(n) {
    return n && this.foldersMap.findSubstr(n) || null;
  }
  updateFoldersMap() {
    this.foldersMap = MH.forUris(this.ignorePathCasing, () => true);
    for (const n of this.folders) {
      this.foldersMap.set(n.uri, n);
    }
  }
  toJSON() {
    return {
      id: this.id,
      folders: this.folders,
      transient: this.transient,
      configuration: this.configuration
    };
  }
};
H4o = class {
  constructor(n, e) {
    this.raw = e;
    this.uri = n.uri;
    this.index = n.index;
    this.name = n.name;
  }
  toResource(n) {
    return Wo(this.uri, n);
  }
  toJSON() {
    return {
      uri: this.uri,
      name: this.name,
      index: this.index
    };
  }
};
Noe = "code-workspace";
yVe = `.${Noe}`;
ehh = [{
  name: _(2675, null),
  extensions: [Noe]
}];
thh = "workspace.json";
nhh = "4064f6ec-cb38-4ad0-af64-ee6467e63c82";
