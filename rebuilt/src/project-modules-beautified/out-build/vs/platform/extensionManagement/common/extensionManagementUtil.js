"use strict";

// Module: out-build/vs/platform/extensionManagement/common/extensionManagementUtil.js
// Offset: 28248142 (bundle byte offset)
// Size: 975 bytes
oa();
Gv();
HA();
_r();
Yn();
_s();
S6();
l8();
Js();
Sef = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/;
kef = class EWa {
  static create(e) {
    const t = e.manifest ? e.manifest.version : e.version;
    const i = e.manifest ? e.targetPlatform : e.properties.targetPlatform;
    return new EWa(e.identifier, t, i);
  }
  static parse(e) {
    const t = Sef.exec(e);
    if (t && t[1] && t[2]) {
      return new EWa({
        id: t[1]
      }, t[2], t[4] || undefined);
    } else {
      return null;
    }
  }
  constructor(e, t, i = "undefined") {
    this.identifier = e;
    this.version = t;
    this.targetPlatform = i;
    this.id = e.id;
  }
  toString() {
    return `${this.id}-${this.version}${this.targetPlatform !== "undefined" ? `-${this.targetPlatform}
  ` : ""}`;
  }
  equals(e) {
    if (e instanceof EWa) {
      return ic(this, e) && this.version === e.version && this.targetPlatform === e.targetPlatform;
    } else {
      return false;
    }
  }
};
Eef = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/;
xef = new $h("pprice.better-merge");
