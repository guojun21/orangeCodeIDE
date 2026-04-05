// Module: out-build/vs/editor/common/commands/surroundSelectionCommand.js
// Offset: 799676 (bundle byte offset)
// Size: 5865 bytes

ts(), db(), Elh=class{
  constructor(n, e, t){
    this._range=n, this._charBeforeSelection=e, this._charAfterSelection=t
  }
  getEditOperations(n, e){
    e.addTrackedEditOperation(new Zt(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection), e.addTrackedEditOperation(new Zt(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection)
  }
  computeCursorState(n, e){
    const t=e.getInverseEditOperations(), i=t[0].range, r=t[1].range;
    return new Vl(i.endLineNumber, i.endColumn, r.endLineNumber, r.endColumn-this._charAfterSelection.length)
  }
}, xlh=class{
  constructor(n, e, t){
    this._position=n, this._text=e, this._charAfter=t
  }
  getEditOperations(n, e){
    e.addTrackedEditOperation(new Zt(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column), this._text+this._charAfter)
  }
  computeCursorState(n, e){
    const i=e.getInverseEditOperations()[0].range;
    return new Vl(i.endLineNumber, i.startColumn, i.endLineNumber, i.endColumn-this._charAfter.length)
  }
}
}
});
function NrA(n, e, t){
  const i=n.tokenization.getLanguageIdAtPosition(e, 0);
  if(e>1){
    let r, s=-1;
    for(r=e-1;
    r>=1;
    r--){
      if(n.tokenization.getLanguageIdAtPosition(r,0)!==i)return s;
      const o=n.getLineContent(r);
      if(t.shouldIgnore(r)||/^\s+$/.test(o)||o===""){
        s=r;
        continue
      }
      return r
    }
  }
  return-1
}
function k4n(n, e, t, i=!0, r){
  if(n<4)return null;
  const s=r.getLanguageConfiguration(e.tokenization.getLanguageId()).indentRulesSupport;
  if(!s)return null;
  const o=new u4o(e, s, r);
  if(t<=1)return{
    indentation:"", action:null
  };
  for(let l=t-1;
  l>0&&e.getLineContent(l)==="";
  l--)if(l===1)return{
    indentation:"", action:null
  };
  const a=NrA(e, t, o);
  if(a<0)return null;
  if(a<1)return{
    indentation:"", action:null
  };
  if(o.shouldIncrease(a)||o.shouldIndentNextLine(a)){
    const l=e.getLineContent(a);
    return{
      indentation:rE(l),action:$R.Indent,line:a
    }
  }
  else if(o.shouldDecrease(a)){
    const l=e.getLineContent(a);
    return{
      indentation:rE(l),action:null,line:a
    }
  }
  else{
    if(a===1)return{
      indentation:rE(e.getLineContent(a)),action:null,line:a
    };
    const l=a-1, u=s.getIndentMetadata(e.getLineContent(l));
    if(!(u&3)&&u&4){
      let d=0;
      for(let m=l-1;
      m>0;
      m--)if(!o.shouldIndentNextLine(m)){
        d=m;
        break
      }
      return{
        indentation:rE(e.getLineContent(d+1)),action:null,line:d+1
      }
    }
    if(i)return{
      indentation:rE(e.getLineContent(a)),action:null,line:a
    };
    for(let d=a;
    d>0;
    d--){
      if(o.shouldIncrease(d))return{
        indentation:rE(e.getLineContent(d)),action:$R.Indent,line:d
      };
      if(o.shouldIndentNextLine(d)){
        let m=0;
        for(let p=d-1;
        p>0;
        p--)if(!o.shouldIndentNextLine(d)){
          m=p;
          break
        }
        return{
          indentation:rE(e.getLineContent(m+1)),action:null,line:m+1
        }
      }
      else if(o.shouldDecrease(d))return{
        indentation:rE(e.getLineContent(d)),action:null,line:d
      }
    }
    return{
      indentation:rE(e.getLineContent(1)),action:null,line:1
    }
  }
}
function E4n(n, e, t, i, r, s){
  if(n<4)return null;
  const o=s.getLanguageConfiguration(t);
  if(!o)return null;
  const a=s.getLanguageConfiguration(t).indentRulesSupport;
  if(!a)return null;
  const l=new u4o(e, a, s), u=k4n(n, e, i, void 0, s);
  if(u){
    const d=u.line;
    if(d!==void 0){
      let m=!0;
      for(let p=d;
      p<i-1;
      p++)if(!/^\s*$/.test(e.getLineContent(p))){
        m=!1;
        break
      }
      if(m){
        const p=o.onEnter(n,"",e.getLineContent(d),"");
        if(p){
          let g=rE(e.getLineContent(d));
          return p.removeText&&(g=g.substring(0,g.length-p.removeText)),p.indentAction===$R.Indent||p.indentAction===$R.IndentOutdent?g=r.shiftIndent(g):p.indentAction===$R.Outdent&&(g=r.unshiftIndent(g)),l.shouldDecrease(i)&&(g=r.unshiftIndent(g)),p.appendText&&(g+=p.appendText),rE(g)
        }
      }
    }
    return l.shouldDecrease(i)?u.action===$R.Indent?u.indentation:r.unshiftIndent(u.indentation):u.action===$R.Indent?r.shiftIndent(u.indentation):u.indentation
  }
  return null
}
function MrA(n, e, t, i, r){
  if(n<4)return null;
  const s=e.getLanguageIdAtPosition(t.startLineNumber, t.startColumn), o=r.getLanguageConfiguration(s).indentRulesSupport;
  if(!o)return null;
  e.tokenization.forceTokenization(t.startLineNumber);
  const l=new d4o(e, r).getProcessedTokenContextAroundRange(t), u=l.afterRangeProcessedTokens, d=l.beforeRangeProcessedTokens, m=rE(d.getLineContent()), p=OrA(e, t.startLineNumber, d), g=n1c(e, t.getStartPosition()), f=e.getLineContent(t.startLineNumber), A=rE(f), w=k4n(n, p, t.startLineNumber+1, void 0, r);
  if(!w){
    const x=g?A:m;
    return{
      beforeEnter:x,afterEnter:x
    }
  }
  let C=g?A:w.indentation;
  return w.action===$R.Indent&&(C=i.shiftIndent(C)), o.shouldDecrease(u.getLineContent())&&(C=i.unshiftIndent(C)), {
    beforeEnter:g?A:m, afterEnter:C
  }
}
function FrA(n, e, t, i, r, s){
  const o=n.autoIndent;
  if(o<4||n1c(e, t.getStartPosition()))return null;
  const l=e.getLanguageIdAtPosition(t.startLineNumber, t.startColumn), u=s.getLanguageConfiguration(l).indentRulesSupport;
  if(!u)return null;
  const m=new d4o(e, s).getProcessedTokenContextAroundRange(t), p=m.beforeRangeProcessedTokens.getLineContent(), g=m.afterRangeProcessedTokens.getLineContent(), f=p+g, A=p+i+g;
  if(!u.shouldDecrease(f)&&u.shouldDecrease(A)){
    const C=k4n(o, e, t.startLineNumber, !1, s);
    if(!C)return null;
    let x=C.indentation;
    return C.action!==$R.Indent&&(x=r.unshiftIndent(x)), x
  }
  const w=t.startLineNumber-1;
  if(w>0){
    const C=e.getLineContent(w);
    if(u.shouldIndentNextLine(C)&&u.shouldIncrease(A)){
      const I=k4n(o,e,t.startLineNumber,!1,s)?.indentation;
      if(I!==void 0){
        const B=e.getLineContent(t.startLineNumber),R=rE(B),M=r.shiftIndent(I)===R,O=/^\s*$/.test(f),$=n.autoClosingPairs.autoClosingPairsOpenByEnd.get(i),W=$&&$.length>0&&O;
        if(M&&W)return I
      }
    }
  }
  return null
}
function Ilh(n, e, t){
  const i=t.getLanguageConfiguration(n.getLanguageId()).indentRulesSupport;
  return!i||e<1||e>n.getLineCount()?null:i.getIndentMetadata(n.getLineContent(e))
}
function OrA(n, e, t){
  return{
    tokenization:{
      getLineTokens:r=>r===e?t:n.tokenization.getLineTokens(r),getLanguageId:()=>n.getLanguageId(),getLanguageIdAtPosition:(r,s)=>n.getLanguageIdAtPosition(r,s)
    }, getLineContent:r=>r===e?t.getLineContent():n.getLineContent(r)
  }
}
var o1c=