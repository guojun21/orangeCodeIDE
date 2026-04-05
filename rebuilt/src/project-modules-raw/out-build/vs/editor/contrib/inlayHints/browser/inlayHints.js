// Module: out-build/vs/editor/contrib/inlayHints/browser/inlayHints.js
// Offset: 24746793 (bundle byte offset)
// Size: 3046 bytes

_s(), rt(), tl(), ts(), zr(), Yn(), SGl=class{
  constructor(n, e){
    this.range=n, this.direction=e
  }
}, opg=class DWb{
  constructor(e, t, i){
    this.hint=e, this.anchor=t, this.provider=i, this._isResolved=!1
  }
  with(e){
    const t=new DWb(this.hint, e.anchor, this.provider);
    return t._isResolved=this._isResolved, t._currentResolve=this._currentResolve, t
  }
  async resolve(e){
    if(typeof this.provider.resolveInlayHint=="function"){
      if(this._currentResolve)return await this._currentResolve,e.isCancellationRequested?void 0:this.resolve(e);
      this._isResolved||(this._currentResolve=this._doResolve(e).finally(()=>this._currentResolve=void 0)),await this._currentResolve
    }
  }
  async _doResolve(e){
    try{
      const t=await Promise.resolve(this.provider.resolveInlayHint(this.hint,e));
      this.hint.tooltip=t?.tooltip??this.hint.tooltip,this.hint.label=t?.label??this.hint.label,this.hint.textEdits=t?.textEdits??this.hint.textEdits,this._isResolved=!0
    }
    catch(t){
      JE(t),this._isResolved=!1
    }
  }
}, kGl=class fWa{
  static{
    this._emptyInlayHintList=Object.freeze({
      dispose(){
        
      },hints:[]
    })
  }
  static async create(e, t, i, r){
    const s=[], o=e.ordered(t).reverse().map(a=>i.map(async l=>{
      try{
        const u=await a.provideInlayHints(t,l,r);
        (u?.hints.length||a.onDidChangeInlayHints)&&s.push([u??fWa._emptyInlayHintList,a])
      }
      catch(u){
        JE(u)
      }
    }));
    if(await Promise.all(o.flat()), r.isCancellationRequested||t.isDisposed())throw new vf;
    return new fWa(i, s, t)
  }
  constructor(e, t, i){
    this._disposables=new Ut, this.ranges=e, this.provider=new Set;
    const r=[];
    for(const[s, o]of t){
      this._disposables.add(s),this.provider.add(o);
      for(const a of s.hints){
        const l=i.validatePosition(a.position);
        let u="before";
        const d=fWa._getRangeAtPosition(i,l);
        let m;
        d.getStartPosition().isBefore(l)?(m=Zt.fromPositions(d.getStartPosition(),l),u="after"):(m=Zt.fromPositions(l,d.getEndPosition()),u="before"),r.push(new opg(a,new SGl(m,u),o))
      }
    }
    this.items=r.sort((s, o)=>ar.compare(s.hint.position, o.hint.position))
  }
  dispose(){
    this._disposables.dispose()
  }
  static _getRangeAtPosition(e, t){
    const i=t.lineNumber, r=e.getWordAtPosition(t);
    if(r)return new Zt(i, r.startColumn, i, r.endColumn);
    e.tokenization.tokenizeIfCheap(i);
    const s=e.tokenization.getLineTokens(i), o=t.column-1, a=s.findTokenIndexAtOffset(o);
    let l=s.getStartOffset(a), u=s.getEndOffset(a);
    return u-l===1&&(l===o&&a>1?(l=s.getStartOffset(a-1), u=s.getEndOffset(a-1)):u===o&&a<s.getCount()-1&&(l=s.getStartOffset(a+1), u=s.getEndOffset(a+1))), new Zt(i, l+1, i, u+1)
  }
}
}
});
function Ig(n){
  return n&&typeof n.getEditorType=="function"?n.getEditorType()===SVe.ICodeEditor:!1
}
function iB(n){
  return n&&typeof n.getEditorType=="function"?n.getEditorType()===SVe.IDiffEditor:!1
}
function i0A(n){
  return n&&typeof n.getEditorType=="function"?n.getEditorType()===SVe.InlineMultiDiffEditor:!1
}
function tCt(n){
  return!!n&&typeof n=="object"&&typeof n.onDidChangeActiveEditor=="function"
}
function gN(n){
  return Ig(n)?n:iB(n)?n.getModifiedEditor():tCt(n)&&Ig(n.activeCodeEditor)?n.activeCodeEditor:null
}
function r0A(n){
  return Ig(n)||iB(n)?n:null
}
var apg, cpg, lpg, upg, lv=