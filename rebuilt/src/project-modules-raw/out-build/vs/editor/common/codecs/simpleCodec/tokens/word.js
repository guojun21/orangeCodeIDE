// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/word.js
// Offset: 31077051 (bundle byte offset)
// Size: 452 bytes

MV(), ts(), tl(), CIf=class Lcd extends NU{
  constructor(e, t){
    super(e), this.text=t
  }
  static newOnLine(e, t, i){
    const{
      range:r
    }
    =t, s=new ar(r.startLineNumber, i), o=new ar(r.startLineNumber, i+e.length);
    return new Lcd(Zt.fromPositions(s, o), e)
  }
  equals(e){
    return!super.equals(e)||!(e instanceof Lcd)?!1:this.text===e.text
  }
  toString(){
    return`word("${this.text}")${this.range}`
  }
}
}
}), SIf, gsy=