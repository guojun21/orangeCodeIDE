// Module: out-build/vs/editor/common/model/guidesTextModelPart.js
// Offset: 1120846 (bundle byte offset)
// Size: 6544 bytes

GD(), oa(), koe(), ts(), $ph(), JEc(), GEc(), _s(), qph=class extends HEc{
  constructor(n, e){
    super(), this.textModel=n, this.languageConfigurationService=e
  }
  getLanguageConfiguration(n){
    return this.languageConfigurationService.getLanguageConfiguration(n)
  }
  _computeIndentLevel(n){
    return mOo(this.textModel.getLineContent(n+1), this.textModel.getOptions().tabSize)
  }
  getActiveIndentGuide(n, e, t){
    this.assertNotDisposed();
    const i=this.textModel.getLineCount();
    if(n<1||n>i)throw new _m("Illegal value for lineNumber");
    const r=this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s=!!(r&&r.offSide);
    let o=-2, a=-1, l=-2, u=-1;
    const d=N=>{
      if(o!==-1&&(o===-2||o>N-1)){
        o=-1,a=-1;
        for(let M=N-2;
        M>=0;
        M--){
          const O=this._computeIndentLevel(M);
          if(O>=0){
            o=M,a=O;
            break
          }
        }
      }
      if(l===-2){
        l=-1,u=-1;
        for(let M=N;
        M<i;
        M++){
          const O=this._computeIndentLevel(M);
          if(O>=0){
            l=M,u=O;
            break
          }
        }
      }
    };
    let m=-2, p=-1, g=-2, f=-1;
    const A=N=>{
      if(m===-2){
        m=-1,p=-1;
        for(let M=N-2;
        M>=0;
        M--){
          const O=this._computeIndentLevel(M);
          if(O>=0){
            m=M,p=O;
            break
          }
        }
      }
      if(g!==-1&&(g===-2||g<N-1)){
        g=-1,f=-1;
        for(let M=N;
        M<i;
        M++){
          const O=this._computeIndentLevel(M);
          if(O>=0){
            g=M,f=O;
            break
          }
        }
      }
    };
    let w=0, C=!0, x=0, I=!0, B=0, R=0;
    for(let N=0;
    C||I;
    N++){
      const M=n-N,O=n+N;
      N>1&&(M<1||M<e)&&(C=!1),N>1&&(O>i||O>t)&&(I=!1),N>5e4&&(C=!1,I=!1);
      let $=-1;
      if(C&&M>=1){
        const W=this._computeIndentLevel(M-1);
        W>=0?(l=M-1,u=W,$=Math.ceil(W/this.textModel.getOptions().indentSize)):(d(M),$=this._getIndentLevelForWhitespaceLine(s,a,u))
      }
      let H=-1;
      if(I&&O<=i){
        const W=this._computeIndentLevel(O-1);
        W>=0?(m=O-1,p=W,H=Math.ceil(W/this.textModel.getOptions().indentSize)):(A(O),H=this._getIndentLevelForWhitespaceLine(s,p,f))
      }
      if(N===0){
        R=$;
        continue
      }
      if(N===1){
        if(O<=i&&H>=0&&R+1===H){
          C=!1,w=O,x=O,B=H;
          continue
        }
        if(M>=1&&$>=0&&$-1===R){
          I=!1,w=M,x=M,B=$;
          continue
        }
        if(w=n,x=n,B=R,B===0)return{
          startLineNumber:w,endLineNumber:x,indent:B
        }
      }
      C&&($>=B?w=M:C=!1),I&&(H>=B?x=O:I=!1)
    }
    return{
      startLineNumber:w,endLineNumber:x,indent:B
    }
  }
  getLinesBracketGuides(n, e, t, i){
    const r=[];
    for(let d=n;
    d<=e;
    d++)r.push([]);
    const s=!0, o=this.textModel.bracketPairs.getBracketPairsInRangeWithMinIndentation(new Zt(n, 1, e, this.textModel.getLineMaxColumn(e))).toArray();
    let a;
    if(t&&o.length>0){
      const d=(n<=t.lineNumber&&t.lineNumber<=e?o:this.textModel.bracketPairs.getBracketPairsInRange(Zt.fromPositions(t)).toArray()).filter(m=>Zt.strictContainsPosition(m.range,t));
      a=Cbe(d,m=>s||m.range.startLineNumber!==m.range.endLineNumber)?.range
    }
    const l=this.textModel.getOptions().bracketPairColorizationOptions.independentColorPoolPerBracketType, u=new WEc;
    for(const d of o){
      if(!d.closingBracketRange)continue;
      const m=a&&d.range.equalsRange(a);
      if(!m&&!i.includeInactive)continue;
      const p=u.getInlineClassName(d.nestingLevel,d.nestingLevelOfEqualBracketType,l)+(i.highlightActive&&m?" "+u.activeClassName:""),g=d.openingBracketRange.getStartPosition(),f=d.closingBracketRange.getStartPosition(),A=i.horizontalGuides===Cft.Enabled||i.horizontalGuides===Cft.EnabledForActive&&m;
      if(d.range.startLineNumber===d.range.endLineNumber){
        s&&A&&r[d.range.startLineNumber-n].push(new BVe(-1,d.openingBracketRange.getEndPosition().column,p,new BOt(!1,f.column),-1,-1));
        continue
      }
      const w=this.getVisibleColumnFromPosition(f),C=this.getVisibleColumnFromPosition(d.openingBracketRange.getStartPosition()),x=Math.min(C,w,d.minVisibleColumnIndentation+1);
      let I=!1;
      TH(this.textModel.getLineContent(d.closingBracketRange.startLineNumber))<d.closingBracketRange.startColumn-1&&(I=!0);
      const N=Math.max(g.lineNumber,n),M=Math.min(f.lineNumber,e),O=I?1:0;
      for(let $=N;
      $<M+O;
      $++)r[$-n].push(new BVe(x,-1,p,null,$===g.lineNumber?g.column:-1,$===f.lineNumber?f.column:-1));
      A&&(g.lineNumber>=n&&C>x&&r[g.lineNumber-n].push(new BVe(x,-1,p,new BOt(!1,g.column),-1,-1)),f.lineNumber<=e&&w>x&&r[f.lineNumber-n].push(new BVe(x,-1,p,new BOt(!I,f.column),-1,-1)))
    }
    for(const d of r)d.sort((m, p)=>m.visibleColumn-p.visibleColumn);
    return r
  }
  getVisibleColumnFromPosition(n){
    return ZP.visibleColumnFromColumn(this.textModel.getLineContent(n.lineNumber), n.column, this.textModel.getOptions().tabSize)+1
  }
  getLinesIndentGuides(n, e){
    this.assertNotDisposed();
    const t=this.textModel.getLineCount();
    if(n<1||n>t)throw new Error("Illegal value for startLineNumber");
    if(e<1||e>t)throw new Error("Illegal value for endLineNumber");
    const i=this.textModel.getOptions(), r=this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s=!!(r&&r.offSide), o=new Array(e-n+1);
    let a=-2, l=-1, u=-2, d=-1;
    for(let m=n;
    m<=e;
    m++){
      const p=m-n,g=this._computeIndentLevel(m-1);
      if(g>=0){
        a=m-1,l=g,o[p]=Math.ceil(g/i.indentSize);
        continue
      }
      if(a===-2){
        a=-1,l=-1;
        for(let f=m-2;
        f>=0;
        f--){
          const A=this._computeIndentLevel(f);
          if(A>=0){
            a=f,l=A;
            break
          }
        }
      }
      if(u!==-1&&(u===-2||u<m-1)){
        u=-1,d=-1;
        for(let f=m;
        f<t;
        f++){
          const A=this._computeIndentLevel(f);
          if(A>=0){
            u=f,d=A;
            break
          }
        }
      }
      o[p]=this._getIndentLevelForWhitespaceLine(s,l,d)
    }
    return o
  }
  _getIndentLevelForWhitespaceLine(n, e, t){
    const i=this.textModel.getOptions();
    return e===-1||t===-1?0:e<t?1+Math.floor(e/i.indentSize):e===t||n?Math.ceil(t/i.indentSize):1+Math.floor(t/i.indentSize)
  }
}, WEc=class{
  constructor(){
    this.activeClassName="indent-active"
  }
  getInlineClassName(n, e, t){
    return this.getInlineClassNameOfLevel(t?e:n)
  }
  getInlineClassNameOfLevel(n){
    return`bracket-indent-guide lvl-${n%30}`
  }
}
}
});
function $oA(n, e, t, i, r){
  r.spacesDiff=0, r.looksLikeAlignment=!1;
  let s;
  for(s=0;
  s<e&&s<i;
  s++){
    const p=n.charCodeAt(s), g=t.charCodeAt(s);
    if(p!==g)break
  }
  let o=0, a=0;
  for(let p=s;
  p<e;
  p++)n.charCodeAt(p)===32?o++:a++;
  let l=0, u=0;
  for(let p=s;
  p<i;
  p++)t.charCodeAt(p)===32?l++:u++;
  if(o>0&&a>0||l>0&&u>0)return;
  const d=Math.abs(a-u), m=Math.abs(o-l);
  if(d===0){
    r.spacesDiff=m, m>0&&0<=l-1&&l-1<n.length&&l<t.length&&t.charCodeAt(l)!==32&&n.charCodeAt(l-1)===32&&n.charCodeAt(n.length-1)===44&&(r.looksLikeAlignment=!0);
    return
  }
  if(m%d===0){
    r.spacesDiff=m/d;
    return
  }
}
function Jph(n, e, t){
  const i=Math.min(n.getLineCount(), 1e4);
  let r=0, s=0, o="", a=0;
  const l=[2, 4, 6, 8, 3, 5, 7], u=8, d=[0, 0, 0, 0, 0, 0, 0, 0, 0], m=new Gph;
  for(let f=1;
  f<=i;
  f++){
    const A=n.getLineLength(f), w=n.getLineContent(f), C=A<=65536;
    let x=!1, I=0, B=0, R=0;
    for(let M=0, O=A;
    M<O;
    M++){
      const $=C?w.charCodeAt(M):n.getLineCharCode(f,M);
      if($===9)R++;
      else if($===32)B++;
      else{
        x=!0,I=M;
        break
      }
    }
    if(!x||(R>0?r++:B>1&&s++, $oA(o, a, w, I, m), m.looksLikeAlignment&&!(t&&e===m.spacesDiff)))continue;
    const N=m.spacesDiff;
    N<=u&&d[N]++, o=w, a=I
  }
  let p=t;
  r!==s&&(p=r<s);
  let g=e;
  if(p){
    let f=p?0:.1*i;
    l.forEach(A=>{
      const w=d[A];
      w>f&&(f=w,g=A)
    }), g===4&&d[4]>0&&d[2]>0&&d[2]>=d[4]/2&&(g=2)
  }
  return{
    insertSpaces:p, tabSize:g
  }
}
var Gph, qoA=