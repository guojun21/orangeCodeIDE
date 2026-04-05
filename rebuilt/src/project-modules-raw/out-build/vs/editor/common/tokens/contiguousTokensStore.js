// Module: out-build/vs/editor/common/tokens/contiguousTokensStore.js
// Offset: 1223438 (bundle byte offset)
// Size: 2955 bytes

Vs(), tl(), Pgh(), LH(), tVe(), gxc=class pad{
  constructor(e){
    this._lineTokens=[], this._len=0, this._languageIdCodec=e
  }
  flush(){
    this._lineTokens=[], this._len=0
  }
  get hasTokens(){
    return this._lineTokens.length>0
  }
  getTokens(e, t, i){
    let r=null;
    if(t<this._len&&(r=this._lineTokens[t]), r!==null&&r!==lRe)return new OB(s9e(r), i, this._languageIdCodec);
    const s=new Uint32Array(2);
    return s[0]=i.length, s[1]=zgh(this._languageIdCodec.encodeLanguageId(e)), new OB(s, i, this._languageIdCodec)
  }
  static _massageTokens(e, t, i){
    const r=i?s9e(i):null;
    if(t===0){
      let s=!1;
      if(r&&r.length>1&&(s=pF.getLanguageId(r[1])!==e),!s)return lRe
    }
    if(!r||r.length===0){
      const s=new Uint32Array(2);
      return s[0]=t,s[1]=zgh(e),s.buffer
    }
    return r[r.length-2]=t, r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer:r
  }
  _ensureLine(e){
    for(;
    e>=this._len;
    )this._lineTokens[this._len]=null, this._len++
  }
  _deleteLines(e, t){
    t!==0&&(e+t>this._len&&(t=this._len-e), this._lineTokens.splice(e, t), this._len-=t)
  }
  _insertLines(e, t){
    if(t===0)return;
    const i=[];
    for(let r=0;
    r<t;
    r++)i[r]=null;
    this._lineTokens=$2n(this._lineTokens, e, i), this._len+=t
  }
  setTokens(e, t, i, r, s){
    const o=pad._massageTokens(this._languageIdCodec.encodeLanguageId(e), i, r);
    this._ensureLine(t);
    const a=this._lineTokens[t];
    return this._lineTokens[t]=o, s?!pad._equals(a, o):!1
  }
  static _equals(e, t){
    if(!e||!t)return!e&&!t;
    const i=s9e(e), r=s9e(t);
    if(i.length!==r.length)return!1;
    for(let s=0, o=i.length;
    s<o;
    s++)if(i[s]!==r[s])return!1;
    return!0
  }
  acceptEdit(e, t, i){
    this._acceptDeleteRange(e), this._acceptInsertText(new ar(e.startLineNumber, e.startColumn), t, i)
  }
  _acceptDeleteRange(e){
    const t=e.startLineNumber-1;
    if(t>=this._len)return;
    if(e.startLineNumber===e.endLineNumber){
      if(e.startColumn===e.endColumn)return;
      this._lineTokens[t]=cz.delete(this._lineTokens[t],e.startColumn-1,e.endColumn-1);
      return
    }
    this._lineTokens[t]=cz.deleteEnding(this._lineTokens[t], e.startColumn-1);
    const i=e.endLineNumber-1;
    let r=null;
    i<this._len&&(r=cz.deleteBeginning(this._lineTokens[i], e.endColumn-1)), this._lineTokens[t]=cz.append(this._lineTokens[t], r), this._deleteLines(e.startLineNumber, e.endLineNumber-e.startLineNumber)
  }
  _acceptInsertText(e, t, i){
    if(t===0&&i===0)return;
    const r=e.lineNumber-1;
    if(!(r>=this._len)){
      if(t===0){
        this._lineTokens[r]=cz.insert(this._lineTokens[r],e.column-1,i);
        return
      }
      this._lineTokens[r]=cz.deleteEnding(this._lineTokens[r],e.column-1),this._lineTokens[r]=cz.insert(this._lineTokens[r],e.column-1,i),this._insertLines(e.lineNumber,t)
    }
  }
  setMultilineTokens(e, t){
    if(e.length===0)return{
      changes:[]
    };
    const i=[];
    for(let r=0, s=e.length;
    r<s;
    r++){
      const o=e[r];
      let a=0,l=0,u=!1;
      for(let d=o.startLineNumber;
      d<=o.endLineNumber;
      d++)u?(this.setTokens(t.getLanguageId(),d-1,t.getLineLength(d),o.getLineTokens(d),!1),l=d):this.setTokens(t.getLanguageId(),d-1,t.getLineLength(d),o.getLineTokens(d),!0)&&(u=!0,a=d,l=d);
      u&&i.push({
        fromLineNumber:a,toLineNumber:l
      })
    }
    return{
      changes:i
    }
  }
}
}
}), Vgh, maA=