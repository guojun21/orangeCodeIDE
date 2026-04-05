// Module: out-build/vs/editor/common/core/rgba.js
// Offset: 1377550 (bundle byte offset)
// Size: 368 bytes

OVe=class MCn{
  static{
    this.Empty=new MCn(0, 0, 0, 0)
  }
  constructor(e, t, i, r){
    this._rgba8Brand=void 0, this.r=MCn._clamp(e), this.g=MCn._clamp(t), this.b=MCn._clamp(i), this.a=MCn._clamp(r)
  }
  equals(e){
    return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a
  }
  static _clamp(e){
    return e<0?0:e>255?255:e|0
  }
}
}
}), Kxc, Pbh=