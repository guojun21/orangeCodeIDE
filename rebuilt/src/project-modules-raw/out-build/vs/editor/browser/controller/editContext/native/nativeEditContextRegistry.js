// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContextRegistry.js
// Offset: 1848878 (bundle byte offset)
// Size: 370 bytes

twh=class{
  constructor(){
    this._nativeEditContextMapping=new Map
  }
  register(n, e){
    return this._nativeEditContextMapping.set(n, e), {
      dispose:()=>{
        this._nativeEditContextMapping.delete(n)
      }
    }
  }
  get(n){
    return this._nativeEditContextMapping.get(n)
  }
}, yIc=new twh
}
}), e3n, t3n, KlA=