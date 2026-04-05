// Module: out-build/vs/editor/common/tokens/sparseTokensStore.js
// Offset: 1226393 (bundle byte offset)
// Size: 2571 bytes

Vs(), LH(), Vgh=class XJb{
  constructor(e){
    this._pieces=[], this._isComplete=!1, this._languageIdCodec=e
  }
  flush(){
    this._pieces=[], this._isComplete=!1
  }
  isEmpty(){
    return this._pieces.length===0
  }
  set(e, t){
    this._pieces=e||[], this._isComplete=t
  }
  setPartial(e, t){
    let i=e;
    if(t.length>0){
      const s=t[0].getRange(),o=t[t.length-1].getRange();
      if(!s||!o)return e;
      i=e.plusRange(s).plusRange(o)
    }
    let r=null;
    for(let s=0, o=this._pieces.length;
    s<o;
    s++){
      const a=this._pieces[s];
      if(a.endLineNumber<i.startLineNumber)continue;
      if(a.startLineNumber>i.endLineNumber){
        r=r||{
          index:s
        };
        break
      }
      if(a.removeTokens(i),a.isEmpty()){
        this._pieces.splice(s,1),s--,o--;
        continue
      }
      if(a.endLineNumber<i.startLineNumber)continue;
      if(a.startLineNumber>i.endLineNumber){
        r=r||{
          index:s
        };
        continue
      }
      const[l,u]=a.split(i);
      if(l.isEmpty()){
        r=r||{
          index:s
        };
        continue
      }
      u.isEmpty()||(this._pieces.splice(s,1,l,u),s++,o++,r=r||{
        index:s
      })
    }
    return r=r||{
      index:this._pieces.length
    }, t.length>0&&(this._pieces=$2n(this._pieces, r.index, t)), i
  }
  isComplete(){
    return this._isComplete
  }
  addSparseTokens(e, t){
    if(t.getLineContent().length===0)return t;
    const i=this._pieces;
    if(i.length===0)return t;
    const r=XJb._findFirstPieceWithLine(i, e), s=i[r].getLineTokens(e);
    if(!s)return t;
    const o=t.getCount(), a=s.getCount();
    let l=0;
    const u=[];
    let d=0, m=0;
    const p=(f, A)=>{
      f!==m&&(m=f,u[d++]=f,u[d++]=A)
    }, g=t.getLineContent().length;
    for(let f=0;
    f<a;
    f++){
      const A=s.getStartCharacter(f),w=Math.min(s.getEndCharacter(f),g),C=s.getMetadata(f),x=((C&1?2048:0)|(C&2?4096:0)|(C&4?8192:0)|(C&8?16384:0)|(C&16?16744448:0)|(C&32?4278190080:0))>>>0,I=~x>>>0;
      for(;
      l<o&&t.getEndOffset(l)<=A;
      )p(t.getEndOffset(l),t.getMetadata(l)),l++;
      for(l<o&&t.getStartOffset(l)<A&&p(A,t.getMetadata(l));
      l<o&&t.getEndOffset(l)<w;
      )p(t.getEndOffset(l),t.getMetadata(l)&I|C&x),l++;
      if(l<o)p(w,t.getMetadata(l)&I|C&x),t.getEndOffset(l)===w&&l++;
      else{
        const B=Math.min(Math.max(0,l-1),o-1);
        p(w,t.getMetadata(B)&I|C&x)
      }
    }
    for(;
    l<o;
    )p(t.getEndOffset(l), t.getMetadata(l)), l++;
    return new OB(new Uint32Array(u), t.getLineContent(), this._languageIdCodec)
  }
  static _findFirstPieceWithLine(e, t){
    let i=0, r=e.length-1;
    for(;
    i<r;
    ){
      let s=i+Math.floor((r-i)/2);
      if(e[s].endLineNumber<t)i=s+1;
      else if(e[s].startLineNumber>t)r=s-1;
      else{
        for(;
        s>i&&e[s-1].startLineNumber<=t&&t<=e[s-1].endLineNumber;
        )s--;
        return s
      }
    }
    return i
  }
  acceptEdit(e, t, i, r, s){
    for(const o of this._pieces)o.acceptEdit(e, t, i, r, s)
  }
}
}
});
function paA(n){
  kOo.push(n), EOo||(EOo=!0, l5e(()=>{
    EOo=!1;
    const e=kOo.slice();
    kOo.length=0;
    for(const t of e)try{
      t()
    }
    catch{
      
    }
  }))
}
var SOo, kOo, EOo, xOo, fxc, gaA=