// Module: out-build/vs/base/browser/ui/iconLabel/simpleIconLabel.js
// Offset: 31404787 (bundle byte offset)
// Size: 378 bytes

ri(), O6(), mb(), bS(), sxe=class{
  constructor(n){
    this._container=n
  }
  set text(n){
    um(this._container, ...a_(n??""))
  }
  set title(n){
    !this.hover&&n?this.hover=q4().setupManagedHover(Sm("mouse"), this._container, n):this.hover&&this.hover.update(n)
  }
  dispose(){
    this.hover?.dispose()
  }
}
}
}), Kbu, q0i, Zka, Sfn, Xka, e1a, $Lf=