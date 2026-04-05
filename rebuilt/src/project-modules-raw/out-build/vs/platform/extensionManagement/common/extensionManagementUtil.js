// Module: out-build/vs/platform/extensionManagement/common/extensionManagementUtil.js
// Offset: 28248142 (bundle byte offset)
// Size: 975 bytes

oa(), Gv(), HA(), _r(), Yn(), _s(), S6(), l8(), Js(), Sef=/^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/, kef=class EWa{
  static create(e){
    const t=e.manifest?e.manifest.version:e.version, i=e.manifest?e.targetPlatform:e.properties.targetPlatform;
    return new EWa(e.identifier, t, i)
  }
  static parse(e){
    const t=Sef.exec(e);
    return t&&t[1]&&t[2]?new EWa({
      id:t[1]
    }, t[2], t[4]||void 0):null
  }
  constructor(e, t, i="undefined"){
    this.identifier=e, this.version=t, this.targetPlatform=i, this.id=e.id
  }
  toString(){
    return`${this.id}-${this.version}${this.targetPlatform!=="undefined"?`-${
      this.targetPlatform
    }
    `:""}`
  }
  equals(e){
    return e instanceof EWa?ic(this, e)&&this.version===e.version&&this.targetPlatform===e.targetPlatform:!1
  }
}, Eef=/^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/, xef=new $h("pprice.better-merge")
}
}), GF, dkt, Tef, Ief, Em, Iau, Def, Rme, Lva, Bef, hkt, eyi, tyi, Dau, Bau, Rau, Nva, xnt, Pau, kM, Ref, nyi, mkt, Mva, Fva, v0=