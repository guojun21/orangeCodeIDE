// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/tokens/fileReference.js
// Offset: 31084876 (bundle byte offset)
// Size: 427 bytes

Hgu(), Lv(), ISa="file", o0i=class Ncd extends Y_i{
  constructor(e, t){
    super(e, ISa, t), this.path=t
  }
  static from(e){
    return Qb(e.name===ISa, `Variable name must be '${ISa}', got '${e.name}'.`), new Ncd(e.range, e.data)
  }
  equals(e){
    return e instanceof Ncd?super.equals(e):!1
  }
  get linkRange(){
    return super.dataRange
  }
}
}
}), jgn, DSa, PIf, LIf=