"use strict";

// Module: out-build/vs/platform/extensionResourceLoader/common/extensionResourceLoader.js
// Offset: 30971790 (bundle byte offset)
// Size: 2989 bytes
_r();
oa();
Yn();
Wt();
Bgn();
l8();
zr();
jye();
rt();
mTf = "/web-extension-resource/";
NMe = xi("extensionResourceLoaderService");
pTf = class extends at {
  constructor(n, e, t, i, r, s, o) {
    super();
    this._fileService = n;
    this._storageService = e;
    this._productService = t;
    this._environmentService = i;
    this._configurationService = r;
    this._extensionGalleryManifestService = s;
    this._logService = o;
    this._initPromise = this._init();
  }
  async _init() {
    try {
      const n = await this._extensionGalleryManifestService.getExtensionGalleryManifest();
      this.resolve(n);
      this._register(this._extensionGalleryManifestService.onDidChangeExtensionGalleryManifest(() => this.resolve(n)));
    } catch (n) {
      this._logService.error(n);
    }
  }
  resolve(n) {
    this._extensionGalleryResourceUrlTemplate = n ? LMe(n, "ExtensionResourceUriTemplate") : undefined;
    this._extensionGalleryAuthority = this._extensionGalleryResourceUrlTemplate ? this._getExtensionGalleryAuthority(je.parse(this._extensionGalleryResourceUrlTemplate)) : undefined;
  }
  async supportsExtensionGalleryResources() {
    await this._initPromise;
    return this._extensionGalleryResourceUrlTemplate !== undefined;
  }
  async getExtensionGalleryResourceURL({
    publisher: n,
    name: e,
    version: t,
    targetPlatform: i
  }, r) {
    await this._initPromise;
    if (this._extensionGalleryResourceUrlTemplate) {
      const s = je.parse(mgt(this._extensionGalleryResourceUrlTemplate, {
        publisher: n,
        name: e,
        version: i !== undefined && i !== "undefined" && i !== "unknown" && i !== "universal" ? `${t}+${i}` : t,
        path: "extension"
      }));
      if (this._isWebExtensionResourceEndPoint(s)) {
        return s.with({
          scheme: ASe.getPreferredWebSchema()
        });
      } else {
        return s;
      }
    }
  }
  async isExtensionGalleryResource(n) {
    await this._initPromise;
    return !!this._extensionGalleryAuthority && this._extensionGalleryAuthority === this._getExtensionGalleryAuthority(n);
  }
  async getExtensionGalleryRequestHeaders() {
    const n = {
      "X-Client-Name": `${this._productService.applicationName}${Eu ? "-web" : ""}`,
      "X-Client-Version": this._productService.version
    };
    if (knt(this._productService, this._environmentService) && Ent(this._configurationService) === 3) {
      n["X-Machine-Id"] = await this._getServiceMachineId();
    }
    if (this._productService.commit) {
      n["X-Client-Commit"] = this._productService.commit;
    }
    return n;
  }
  _getServiceMachineId() {
    this._serviceMachineIdPromise ||= Dgn(this._environmentService, this._fileService, this._storageService);
    return this._serviceMachineIdPromise;
  }
  _getExtensionGalleryAuthority(n) {
    if (this._isWebExtensionResourceEndPoint(n)) {
      return n.authority;
    }
    const e = n.authority.indexOf(".");
    if (e !== -1) {
      return n.authority.substring(e + 1);
    } else {
      return undefined;
    }
  }
  _isWebExtensionResourceEndPoint(n) {
    const e = n.path;
    const t = ASe.getServerRootPath();
    return e.startsWith(t) && e.startsWith(mTf, t.length);
  }
};
