// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/tokens/promptVariable.js
// Offset: 31063570 (bundle byte offset)
// Size: 1011 bytes

dIf(), Lv(), ts(), fIf(), bSa="#", $gu=":", qgu=class cjb extends Fgu{
  constructor(e, t){
    for(const i of t)Qb(Wgu.includes(i)===!1&&r0i.includes(i)===!1, `Variable 'name' cannot contain character '${i}', got '${t}'.`);
    super(e), this.name=t
  }
  get text(){
    return`${bSa}${this.name}`
  }
  equals(e){
    return!super.sameRange(e.range)||!(e instanceof cjb)||this.text.length!==e.text.length?!1:this.text===e.text
  }
  toString(){
    return`${this.text}${this.range}`
  }
}, Y_i=class ljb extends qgu{
  constructor(e, t, i){
    super(e, t), this.data=i;
    for(const r of i)Qb(r0i.includes(r)===!1, `Variable 'data' cannot contain character '${r}', got '${i}'.`)
  }
  get text(){
    return`${bSa}${this.name}${$gu}${this.data}`
  }
  equals(e){
    return e instanceof ljb?super.equals(e):!1
  }
  get dataRange(){
    const{
      range:e
    }
    =this, t=e.startColumn+bSa.length+this.name.length+$gu.length, i=new Zt(e.startLineNumber, t, e.endLineNumber, e.endColumn);
    if(!i.isEmpty())return i
  }
}
}
}), vSa, mIf=