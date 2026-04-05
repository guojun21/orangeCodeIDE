"use strict";

// Module: out-build/vs/workbench/common/contextkeys.js
// Offset: 28251506 (bundle byte offset)
// Size: 6916 bytes
rt();
zr();
Yr();
Ku();
hd();
Ht();
si();
ns();
Nu();
m_ = new Sn("workbenchState", undefined, {
  type: "string",
  description: _(4318, null)
});
Tnt = new Sn("workspaceFolderCount", 0, _(4319, null));
XNe = new Sn("openFolderWorkspaceSupport", true, true);
Pme = new Sn("enterMultiRootWorkspaceSupport", true, true);
npn = new Sn("emptyWorkspaceSupport", true, true);
Ova = new Sn("dirtyWorkingCopies", false, _(4320, null));
REe = new Sn("remoteName", "", _(4321, null));
eqe = new Sn("virtualWorkspace", "", _(4322, null));
Nau = new Sn("temporaryWorkspace", false, _(4323, null));
iyi = new Sn("isFullscreen", false, _(4324, null));
pD = new Sn("isAuxiliaryWindowFocusedContext", false, _(4325, null));
Mau = new Sn("hasWebFileSystemAccess", false, true);
Lef = new Sn("embedderIdentifier", undefined, _(4326, null));
ipn = new Sn("activeEditorIsDirty", false, _(4327, null));
Uva = new Sn("activeEditorIsNotPreview", false, _(4328, null));
Fau = new Sn("activeEditorIsFirstInGroup", false, _(4329, null));
ryi = new Sn("activeEditorIsLastInGroup", false, _(4330, null));
PEe = new Sn("activeEditorIsPinned", false, _(4331, null));
Nef = new Sn("activeEditorIsReadonly", false, _(4332, null));
$va = new Sn("activeCompareEditorCanSwap", false, _(4333, null));
Oau = new Sn("activeEditorCanToggleReadonly", true, _(4334, null));
Uau = new Sn("activeEditorCanRevert", false, _(4335, null));
Int = new Sn("activeEditorCanSplitInGroup", true);
qva = new Sn("activeEditorIsReviewChanges", false, _(4336, null));
ow = new Sn("activeEditor", null, {
  type: "string",
  description: _(4337, null)
});
Dnt = new Sn("activeEditorAvailableEditorIds", "", _(4338, null));
Hva = new Sn("textCompareEditorVisible", false, _(4339, null));
AQ = new Sn("textCompareEditorActive", false, _(4340, null));
fie = new Sn("sideBySideEditorActive", false, _(4341, null));
$au = new Sn("groupEditorsCount", 0, _(4342, null));
rpn = new Sn("activeEditorGroupEmpty", false, _(4343, null));
Mef = new Sn("activeEditorGroupIndex", 0, _(4344, null));
Fef = new Sn("activeEditorGroupLast", false, _(4345, null));
Dye = new Sn("activeEditorGroupLocked", false, _(4346, null));
yQ = new Sn("multipleEditorGroups", false, _(4347, null));
Oef = yQ.toNegated();
pkt = new Sn("multipleEditorsSelectedInGroup", false, _(4348, null));
qau = new Sn("twoEditorsSelectedInGroup", false, _(4349, null));
Hau = new Sn("SelectedEditorsInGroupFileOrUntitledResourceContextKey", true, _(4350, null));
gkt = new Sn("editorPartMultipleEditorGroups", false, _(4351, null));
G9A = gkt.toNegated();
tqe = new Sn("editorPartMaximizedEditorGroup", false, _(4352, null));
fkt = new Sn("isAuxiliaryEditorPart", false, _(4353, null));
Jau = new Sn("editorIsOpen", false, _(4354, null));
_V = new Sn("inZenMode", false, _(4355, null));
Jva = new Sn("isCenteredLayout", false, _(4356, null));
Uef = new Sn("splitEditorsVertically", false, _(4357, null));
Gau = new Sn("mainEditorAreaVisible", true, _(4358, null));
Bye = new Sn("agentChatMaximized", false, _(4359, null));
bkt = new Sn("editorTabsVisible", true, _(4360, null));
Tce = new Sn("sideBarVisible", false, _(4361, null));
LEe = new Sn("sideBarFocus", false, _(4362, null));
$ef = new Sn("activeViewlet", "", _(4363, null));
vkt = new Sn("statusBarFocused", false, _(4364, null));
spn = new Sn("titleBarStyle", "custom", _(4365, null));
Wau = new Sn("titleBarVisible", false, _(4366, null));
syi = new Sn("bannerFocused", false, _(4367, null));
Lme = new Sn("notificationFocus", true, _(4368, null));
Gva = new Sn("notificationCenterVisible", false, _(4369, null));
eMe = new Sn("notificationToastsVisible", false, _(4370, null));
qef = new Sn("activeAuxiliary", "", _(4371, null));
oyi = new Sn("auxiliaryBarFocus", false, _(4372, null));
tMe = new Sn("auxiliaryBarVisible", false, _(4373, null));
Hef = new Sn("activePanel", "", _(4374, null));
Bnt = new Sn("panelFocus", false, _(4375, null));
Rnt = new Sn("panelPosition", "bottom", _(4376, null));
nMe = new Sn("panelAlignment", "center", _(4377, null));
Pnt = new Sn("panelVisible", false, _(4378, null));
opn = new Sn("panelMaximized", false, _(4379, null));
Jx = new Sn("focusedView", "", _(4380, null));
Jef = new Sn("documentBodyFocused", false, _(4381, null));
Ep = class {
  static {
    BEe = this;
  }
  static {
    this.Scheme = new Sn("resourceScheme", undefined, {
      type: "string",
      description: _(4382, null)
    });
  }
  static {
    this.Filename = new Sn("resourceFilename", undefined, {
      type: "string",
      description: _(4383, null)
    });
  }
  static {
    this.Dirname = new Sn("resourceDirname", undefined, {
      type: "string",
      description: _(4384, null)
    });
  }
  static {
    this.Path = new Sn("resourcePath", undefined, {
      type: "string",
      description: _(4385, null)
    });
  }
  static {
    this.LangId = new Sn("resourceLangId", undefined, {
      type: "string",
      description: _(4386, null)
    });
  }
  static {
    this.Resource = new Sn("resource", undefined, {
      type: "URI",
      description: _(4387, null)
    });
  }
  static {
    this.Extension = new Sn("resourceExtname", undefined, {
      type: "string",
      description: _(4388, null)
    });
  }
  static {
    this.HasResource = new Sn("resourceSet", undefined, {
      type: "boolean",
      description: _(4389, null)
    });
  }
  static {
    this.IsFileSystemResource = new Sn("isFileSystemResource", undefined, {
      type: "boolean",
      description: _(4390, null)
    });
  }
  constructor(e, t, i, r) {
    this._contextKeyService = e;
    this._fileService = t;
    this._languageService = i;
    this._modelService = r;
    this._disposables = new Ut();
    this._schemeKey = BEe.Scheme.bindTo(this._contextKeyService);
    this._filenameKey = BEe.Filename.bindTo(this._contextKeyService);
    this._dirnameKey = BEe.Dirname.bindTo(this._contextKeyService);
    this._pathKey = BEe.Path.bindTo(this._contextKeyService);
    this._langIdKey = BEe.LangId.bindTo(this._contextKeyService);
    this._resourceKey = BEe.Resource.bindTo(this._contextKeyService);
    this._extensionKey = BEe.Extension.bindTo(this._contextKeyService);
    this._hasResource = BEe.HasResource.bindTo(this._contextKeyService);
    this._isFileSystemResource = BEe.IsFileSystemResource.bindTo(this._contextKeyService);
    this._disposables.add(t.onDidChangeFileSystemProviderRegistrations(() => {
      const s = this.get();
      this._isFileSystemResource.set(!!s && !!t.hasProvider(s));
    }));
    this._disposables.add(r.onModelAdded(s => {
      if (Zc(s.uri, this.get())) {
        this._setLangId();
      }
    }));
    this._disposables.add(r.onModelLanguageChanged(s => {
      if (Zc(s.model.uri, this.get())) {
        this._setLangId();
      }
    }));
  }
  dispose() {
    this._disposables.dispose();
  }
  _setLangId() {
    const e = this.get();
    if (!e) {
      this._langIdKey.set(null);
      return;
    }
    const t = this._modelService.getModel(e)?.getLanguageId() ?? this._languageService.guessLanguageIdByFilepathOrFirstLine(e);
    this._langIdKey.set(t);
  }
  set(e) {
    e = e ?? undefined;
    if (!Zc(this._value, e)) {
      this._value = e;
      this._contextKeyService.bufferChangeEvents(() => {
        this._resourceKey.set(e ? e.toString() : null);
        this._schemeKey.set(e ? e.scheme : null);
        this._filenameKey.set(e ? ca(e) : null);
        this._dirnameKey.set(e ? this.uriToPath(Td(e)) : null);
        this._pathKey.set(e ? this.uriToPath(e) : null);
        this._setLangId();
        this._extensionKey.set(e ? hk(e) : null);
        this._hasResource.set(!!e);
        this._isFileSystemResource.set(e ? this._fileService.hasProvider(e) : false);
      });
    }
  }
  uriToPath(e) {
    if (e.scheme === _n.file) {
      return e.fsPath;
    } else {
      return e.path;
    }
  }
  reset() {
    this._value = undefined;
    this._contextKeyService.bufferChangeEvents(() => {
      this._resourceKey.reset();
      this._schemeKey.reset();
      this._filenameKey.reset();
      this._dirnameKey.reset();
      this._pathKey.reset();
      this._langIdKey.reset();
      this._extensionKey.reset();
      this._hasResource.reset();
      this._isFileSystemResource.reset();
    });
  }
  get() {
    return this._value;
  }
};
Ep = BEe = __decorate([__param(0, wi), __param(1, Gr), __param(2, Jl), __param(3, Il)], Ep);
