"use strict";

// Module: out-build/vs/workbench/contrib/files/common/files.js
// Offset: 31009889 (bundle byte offset)
// Size: 4122 bytes
Nu();
ns();
si();
rt();
hd();
Ku();
Ff();
Av();
yn();
Ht();
BQ = "workbench.view.explorer";
GJ = "workbench.explorer.fileView";
WCa = new Sn("explorerViewletVisible", true, {
  type: "boolean",
  description: _(8115, null)
});
wit = new Sn("foldersViewVisible", true, {
  type: "boolean",
  description: _(8116, null)
});
dB = new Sn("explorerResourceIsFolder", false, {
  type: "boolean",
  description: _(8117, null)
});
cgu = new Sn("explorerResourceReadonly", false, {
  type: "boolean",
  description: _(8118, null)
});
ZEe = cgu.toNegated();
lgu = new Sn("explorerResourceParentReadonly", false, {
  type: "boolean",
  description: _(8119, null)
});
ugu = new Sn("explorerResourceAvailableEditorIds", "");
gX = new Sn("explorerResourceIsRoot", false, {
  type: "boolean",
  description: _(8120, null)
});
dgu = new Sn("explorerResourceCut", false, {
  type: "boolean",
  description: _(8121, null)
});
Ngn = new Sn("explorerResourceMoveableToTrash", false, {
  type: "boolean",
  description: _(8122, null)
});
hgu = new Sn("filesExplorerFocus", true, {
  type: "boolean",
  description: _(8123, null)
});
xTf = new Sn("openEditorsFocus", true, {
  type: "boolean",
  description: _(8124, null)
});
QCa = new Sn("explorerViewletFocus", true, {
  type: "boolean",
  description: _(8125, null)
});
mgu = new Sn("explorerFindProviderActive", false, {
  type: "boolean",
  description: _(8126, null)
});
Mgn = new Sn("explorerViewletCompressedFocus", true, {
  type: "boolean",
  description: _(8127, null)
});
jCa = new Sn("explorerViewletCompressedFirstFocus", true, {
  type: "boolean",
  description: _(8128, null)
});
zCa = new Sn("explorerViewletCompressedLastFocus", true, {
  type: "boolean",
  description: _(8129, null)
});
TTf = new Sn("viewHasSomeCollapsibleItem", false, {
  type: "boolean",
  description: _(8130, null)
});
fX = Ee.and(wit, hgu, Ee.not(lD));
ITf = Ee.and(wit, QCa, Ee.not(lD));
_1t = "workbench.editors.files.textFileEditor";
C1t = "workbench.editors.files.fileEditorInput";
pgu = "workbench.editors.files.binaryFileEditor";
VCa = "code-text-binary";
(function (n) {
  n.Default = "default";
  n.Mixed = "mixed";
  n.FilesFirst = "filesFirst";
  n.Type = "type";
  n.Modified = "modified";
  n.FoldersNestsFiles = "foldersNestsFiles";
})(DTf ||= {});
(function (n) {
  n.Verbose = "verbose";
  n.Default = "default";
  n.Light = "light";
})(BTf ||= {});
(function (n) {
  n.Default = "default";
  n.Upper = "upper";
  n.Lower = "lower";
  n.Unicode = "unicode";
})(RTf ||= {});
S1t = q_i = class extends at {
  constructor(e, t, i, r) {
    super();
    this.textFileService = e;
    this.fileService = t;
    this.languageService = i;
    this.modelService = r;
    this.fileWatcherDisposable = this._register(new uo());
  }
  static async open(e, t, i, r, s) {
    await r.openEditor({
      original: {
        resource: q_i.resourceToTextFile(t, e)
      },
      modified: {
        resource: e
      },
      label: i,
      options: s
    });
  }
  static resourceToTextFile(e, t) {
    return t.with({
      scheme: e,
      query: JSON.stringify({
        scheme: t.scheme,
        query: t.query
      })
    });
  }
  static textFileToResource(e) {
    const {
      scheme: t,
      query: i
    } = JSON.parse(e.query);
    return e.with({
      scheme: t,
      query: i
    });
  }
  async provideTextContent(e) {
    if (!e.query) {
      return null;
    }
    const t = q_i.textFileToResource(e);
    const i = await this.resolveEditorModel(e);
    if (!this.fileWatcherDisposable.value) {
      const r = new Ut();
      this.fileWatcherDisposable.value = r;
      r.add(this.fileService.onDidFilesChange(s => {
        if (s.contains(t, 0)) {
          this.resolveEditorModel(e, false);
        }
      }));
      if (i) {
        r.add(In.once(i.onWillDispose)(() => this.fileWatcherDisposable.clear()));
      }
    }
    return i;
  }
  async resolveEditorModel(e, t = true) {
    const i = q_i.textFileToResource(e);
    const r = await this.textFileService.readStream(i);
    let s = this.modelService.getModel(e);
    if (s) {
      this.modelService.updateModel(s, r.value);
    } else if (t) {
      const o = this.modelService.getModel(i);
      let a;
      if (o) {
        a = this.languageService.createById(o.getLanguageId());
      } else {
        a = this.languageService.createByFilepathOrFirstLine(i);
      }
      s = this.modelService.createModel(r.value, a, e);
    }
    return s;
  }
};
S1t = q_i = __decorate([__param(0, Gg), __param(1, Gr), __param(2, Jl), __param(3, Il)], S1t);
N2 = class QQb {
  static {
    this.COUNTER = 0;
  }
  constructor(e, t) {
    this._editor = e;
    this._group = t;
    this.id = QQb.COUNTER++;
  }
  get editor() {
    return this._editor;
  }
  get group() {
    return this._group;
  }
  get groupId() {
    return this._group.id;
  }
  getId() {
    return `openeditor:${this.groupId}:${this.id}`;
  }
  isPreview() {
    return !this._group.isPinned(this.editor);
  }
  isSticky() {
    return this._group.isSticky(this.editor);
  }
  getResource() {
    return gp.getOriginalUri(this.editor, {
      supportSideBySide: op.PRIMARY
    });
  }
};
