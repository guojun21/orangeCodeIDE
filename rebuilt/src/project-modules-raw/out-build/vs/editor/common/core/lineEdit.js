// Module: out-build/vs/editor/common/core/lineEdit.js
// Offset: 25449553 (bundle byte offset)
// Size: 5245 bytes

Vs(), Lv(), oa(), Ix(), Y1e(), tl(), ts(), EW(), yjl=class qDt{
  static{
    this.empty=new qDt([])
  }
  static deserialize(e){
    return new qDt(e.map(t=>Ugi.deserialize(t)))
  }
  static fromEdit(e, t){
    const i=Fte.fromOffsetEdit(e, t);
    return qDt.fromTextEdit(i, t)
  }
  static fromTextEdit(e, t){
    const i=e.edits, r=[], s=[];
    for(let o=0;
    o<i.length;
    o++){
      const a=i[o],l=o+1<i.length?i[o+1]:void 0;
      if(s.push(a),l&&l.range.startLineNumber===a.range.endLineNumber)continue;
      const u=cI.joinEdits(s,t);
      s.length=0;
      const d=Ugi.fromSingleTextEdit(u,t);
      r.push(d)
    }
    return new qDt(r)
  }
  static createFromUnsorted(e){
    const t=e.slice();
    return t.sort(JP(i=>i.lineRange.startLineNumber, p9)), new qDt(t)
  }
  constructor(e){
    this.edits=e, Qb(SBe(e, (t, i)=>t.lineRange.endLineNumberExclusive<=i.lineRange.startLineNumber))
  }
  toEdit(e){
    const t=[];
    for(const i of this.edits){
      const r=i.toSingleEdit(e);
      t.push(r)
    }
    return new Vae(t)
  }
  toString(){
    return this.edits.map(e=>e.toString()).join(",")
  }
  serialize(){
    return this.edits.map(e=>e.serialize())
  }
  getNewLineRanges(){
    const e=[];
    let t=0;
    for(const i of this.edits)e.push(rh.ofLength(i.lineRange.startLineNumber+t, i.newLines.length)), t+=i.newLines.length-i.lineRange.length;
    return e
  }
  mapLineNumber(e){
    let t=0;
    for(const i of this.edits){
      if(i.lineRange.endLineNumberExclusive>e)break;
      t+=i.newLines.length-i.lineRange.length
    }
    return e+t
  }
  mapLineRange(e){
    return new rh(this.mapLineNumber(e.startLineNumber), this.mapLineNumber(e.endLineNumberExclusive))
  }
  rebase(e){
    return new qDt(this.edits.map(t=>new Ugi(e.mapLineRange(t.lineRange), t.newLines)))
  }
  humanReadablePatch(e){
    const t=[];
    function i(a, l, u, d){
      const m=u==="unmodified"?" ":u==="deleted"?"-":"+";
      d===void 0&&(d="[[[[[ WARNING: LINE DOES NOT EXIST ]]]]]");
      const p=a===-1?"   ":a.toString().padStart(3," "),g=l===-1?"   ":l.toString().padStart(3," ");
      t.push(`${m} ${p} ${g} ${d}`)
    }
    function r(){
      t.push("---")
    }
    let s=0, o=!0;
    for(const a of RMo(this.edits, (l, u)=>l.lineRange.distanceToRange(u.lineRange)<=5)){
      o?o=!1:r();
      let l=a[0].lineRange.startLineNumber-2;
      for(const u of a){
        for(let p=Math.max(1,l);
        p<u.lineRange.startLineNumber;
        p++)i(p,p+s,"unmodified",e[p-1]);
        const d=u.lineRange,m=u.newLines;
        for(const p of d.mapToLineArray(g=>g)){
          const g=e[p-1];
          i(p,-1,"deleted",g)
        }
        for(let p=0;
        p<m.length;
        p++){
          const g=m[p];
          i(-1,d.startLineNumber+s+p,"added",g)
        }
        l=d.endLineNumberExclusive,s+=u.newLines.length-u.lineRange.length
      }
      for(let u=l;
      u<=Math.min(l+2,e.length);
      u++)i(u,u+s,"unmodified",e[u-1])
    }
    return t.join(`
`)
  }
  apply(e){
    const t=[];
    let i=0;
    for(const r of this.edits){
      for(;
      i<r.lineRange.startLineNumber-1;
      )t.push(e[i]),i++;
      for(const s of r.newLines)t.push(s);
      i=r.lineRange.endLineNumberExclusive-1
    }
    for(;
    i<e.length;
    )t.push(e[i]), i++;
    return t
  }
  toSingleEdit(){
    
  }
}, Ugi=class CWa{
  static deserialize(e){
    return new CWa(rh.ofLength(e[0], e[1]-e[0]), e[2])
  }
  static fromSingleTextEdit(e, t){
    const i=Zv(e.text);
    let r=e.range.startLineNumber;
    const s=t.getValueOfRange(Zt.fromPositions(new ar(e.range.startLineNumber, 1), e.range.getStartPosition()));
    i[0]=s+i[0];
    let o=e.range.endLineNumber+1;
    const a=t.getTransformer().getLineLength(e.range.endLineNumber)+1, l=t.getValueOfRange(Zt.fromPositions(e.range.getEndPosition(), new ar(e.range.endLineNumber, a)));
    i[i.length-1]=i[i.length-1]+l;
    const u=e.range.startColumn===t.getTransformer().getLineLength(e.range.startLineNumber)+1, d=e.range.endColumn===1;
    return u&&i[0].length===s.length&&(r++, i.shift()), i.length>0&&r<o&&d&&i[i.length-1].length===l.length&&(o--, i.pop()), new CWa(new rh(r, o), i)
  }
  constructor(e, t){
    this.lineRange=e, this.newLines=t
  }
  toSingleTextEdit(e){
    if(this.newLines.length===0){
      const t=e.getTransformer().textLength;
      if(this.lineRange.endLineNumberExclusive===t.lineCount+2){
        let i;
        if(this.lineRange.startLineNumber>1){
          const s=this.lineRange.startLineNumber-1,o=e.getTransformer().getLineLength(s)+1;
          i=new ar(s,o)
        }
        else i=new ar(1,1);
        const r=t.addToPosition(new ar(1,1));
        return new cI(Zt.fromPositions(i,r),"")
      }
      else return new cI(new Zt(this.lineRange.startLineNumber,1,this.lineRange.endLineNumberExclusive,1),"")
    }
    else if(this.lineRange.isEmpty){
      let t,i,r;
      const s=this.lineRange.startLineNumber;
      return s===e.getTransformer().textLength.lineCount+2?(t=s-1,i=e.getTransformer().getLineLength(t)+1,r=this.newLines.map(o=>`
`+o).join("")):(t=s,i=1,r=this.newLines.map(o=>o+`
`).join("")),new cI(Zt.fromPositions(new ar(t,i)),r)
    }
    else{
      const t=this.lineRange.endLineNumberExclusive-1,i=e.getTransformer().getLineLength(t)+1,r=new Zt(this.lineRange.startLineNumber,1,t,i),s=this.newLines.join(`
`);
      return new cI(r,s)
    }
  }
  toSingleEdit(e){
    const t=this.toSingleTextEdit(e), i=e.getTransformer().getOffsetRange(t.range);
    return new E2(i, t.text)
  }
  toString(){
    return`${this.lineRange}->${JSON.stringify(this.newLines)}`
  }
  serialize(){
    return[this.lineRange.startLineNumber, this.lineRange.endLineNumberExclusive, this.newLines]
  }
  removeCommonSuffixPrefixLines(e){
    let t=this.lineRange.startLineNumber, i=this.lineRange.endLineNumberExclusive, r=0;
    for(;
    t<i&&r<this.newLines.length&&this.newLines[r]===e.getLineAt(t);
    )t++, r++;
    let s=0;
    for(;
    t<i&&s+r<this.newLines.length&&this.newLines[this.newLines.length-1-s]===e.getLineAt(i-1);
    )i--, s++;
    return r===0&&s===0?this:new CWa(new rh(t, i), this.newLines.slice(r, this.newLines.length-s))
  }
  toLineEdit(){
    return new yjl([this])
  }
}
}
}), wjl, Vyg=