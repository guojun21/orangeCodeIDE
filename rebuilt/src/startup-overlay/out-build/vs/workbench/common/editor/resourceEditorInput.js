"use strict";

// Module: out-build/vs/workbench/common/editor/resourceEditorInput.js
// Offset: 30772975 (bundle byte offset)
// Size: 3757 bytes
xT();
ns();
Pd();
Yr();
N1();
Ei();
sw();
Dce();
n_i = class extends XS {
  get capabilities() {
    let e = 32;
    if (this.fileService.hasProvider(this.resource)) {
      if (this.filesConfigurationService.isReadonly(this.resource)) {
        e |= 2;
      }
    } else {
      e |= 4;
    }
    if (!(e & 2)) {
      e |= 128;
    }
    return e;
  }
  get preferredResource() {
    return this._preferredResource;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.resource = e;
    this.labelService = i;
    this.fileService = r;
    this.filesConfigurationService = s;
    this.textResourceConfigurationService = o;
    this.customEditorLabelService = a;
    this._name = undefined;
    this._shortDescription = undefined;
    this._mediumDescription = undefined;
    this._longDescription = undefined;
    this._shortTitle = undefined;
    this._mediumTitle = undefined;
    this._longTitle = undefined;
    this._preferredResource = t || e;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.labelService.onDidChangeFormatters(e => this.onLabelEvent(e.scheme)));
    this._register(this.fileService.onDidChangeFileSystemProviderRegistrations(e => this.onLabelEvent(e.scheme)));
    this._register(this.fileService.onDidChangeFileSystemProviderCapabilities(e => this.onLabelEvent(e.scheme)));
    this._register(this.customEditorLabelService.onDidChange(() => this.updateLabel()));
    this._register(this.filesConfigurationService.onDidChangeReadonly(() => this._onDidChangeCapabilities.fire()));
  }
  onLabelEvent(e) {
    if (e === this._preferredResource.scheme) {
      this.updateLabel();
    }
  }
  updateLabel() {
    this._name = undefined;
    this._shortDescription = undefined;
    this._mediumDescription = undefined;
    this._longDescription = undefined;
    this._shortTitle = undefined;
    this._mediumTitle = undefined;
    this._longTitle = undefined;
    this._onDidChangeLabel.fire();
  }
  setPreferredResource(e) {
    if (!Zc(e, this._preferredResource)) {
      this._preferredResource = e;
      this.updateLabel();
    }
  }
  getName() {
    if (typeof this._name != "string") {
      this._name = this.customEditorLabelService.getName(this._preferredResource) ?? this.labelService.getUriBasenameLabel(this._preferredResource);
    }
    return this._name;
  }
  getDescription(e = 1) {
    switch (e) {
      case 0:
        return this.shortDescription;
      case 2:
        return this.longDescription;
      case 1:
      default:
        return this.mediumDescription;
    }
  }
  get shortDescription() {
    if (typeof this._shortDescription != "string") {
      this._shortDescription = this.labelService.getUriBasenameLabel(Td(this._preferredResource));
    }
    return this._shortDescription;
  }
  get mediumDescription() {
    if (typeof this._mediumDescription != "string") {
      this._mediumDescription = this.labelService.getUriLabel(Td(this._preferredResource), {
        relative: true
      });
    }
    return this._mediumDescription;
  }
  get longDescription() {
    if (typeof this._longDescription != "string") {
      this._longDescription = this.labelService.getUriLabel(Td(this._preferredResource));
    }
    return this._longDescription;
  }
  get shortTitle() {
    if (typeof this._shortTitle != "string") {
      this._shortTitle = this.getName();
    }
    return this._shortTitle;
  }
  get mediumTitle() {
    if (typeof this._mediumTitle != "string") {
      this._mediumTitle = this.labelService.getUriLabel(this._preferredResource, {
        relative: true
      });
    }
    return this._mediumTitle;
  }
  get longTitle() {
    if (typeof this._longTitle != "string") {
      this._longTitle = this.labelService.getUriLabel(this._preferredResource);
    }
    return this._longTitle;
  }
  getTitle(e) {
    switch (e) {
      case 0:
        return this.shortTitle;
      case 2:
        return this.longTitle;
      default:
      case 1:
        return this.mediumTitle;
    }
  }
  isReadonly() {
    return this.filesConfigurationService.isReadonly(this.resource);
  }
  ensureLimits(e) {
    if (e?.limits) {
      return e.limits;
    }
    const t = Gdh(this.resource);
    let i;
    const r = this.textResourceConfigurationService.inspect(this.resource, null, "workbench.editorLargeFileConfirmation");
    if (yrA(r)) {
      i = r.value * dT.MB;
    }
    return {
      size: i ?? t
    };
  }
};
n_i = __decorate([__param(2, Ol), __param(3, Gr), __param(4, IC), __param(5, uy), __param(6, _ie)], n_i);
