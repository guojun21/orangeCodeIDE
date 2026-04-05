// Module: out-build/vs/editor/common/codecs/markdownCodec/tokens/markdownImage.js
// Offset: 31072399 (bundle byte offset)
// Size: 1168 bytes

gSa(), ts(), Lv(), bIf=class ujb extends K_i{
  constructor(e, t, i, r){
    Qb(!isNaN(e), "The line number must not be a NaN."), Qb(e>0, `The line number must be >= 1, got "${e}".`), Qb(t>0, `The column number must be >= 1, got "${t}".`), Qb(i[0]==="!", `The caption must start with '!' character, got "${i}".`), Qb(i[1]==="["&&i[i.length-1]==="]", `The caption must be enclosed in square brackets, got "${i}".`), Qb(r[0]==="("&&r[r.length-1]===")", `The reference must be enclosed in parentheses, got "${r}".`), super(new Zt(e, t, e, t+i.length+r.length)), this.caption=i, this.reference=r;
    try{
      new URL(this.path),this.isURL=!0
    }
    catch{
      this.isURL=!1
    }
  }
  get text(){
    return`${this.caption}${this.reference}`
  }
  get path(){
    return this.reference.slice(1, this.reference.length-1)
  }
  equals(e){
    return!super.sameRange(e.range)||!(e instanceof ujb)?!1:this.text===e.text
  }
  get linkRange(){
    if(this.path.length===0)return;
    const{
      range:e
    }
    =this, t=e.startColumn+this.caption.length+1, i=t+this.path.length;
    return new Zt(e.startLineNumber, t, e.endLineNumber, i)
  }
  toString(){
    return`md-image("${this.text}")${this.range}`
  }
}
}
}), s0i, xSa, vIf=