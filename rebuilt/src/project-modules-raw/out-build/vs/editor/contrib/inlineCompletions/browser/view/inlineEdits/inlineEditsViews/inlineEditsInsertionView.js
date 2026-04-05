// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsInsertionView.js
// Offset: 25516052 (bundle byte offset)
// Size: 5950 bytes

ri(), yn(), rt(), Uc(), Wt(), Nl(), XP(), V$(), zet(), fbt(), Ix(), $I(), tl(), ts(), Ku(), LH(), l4o(), Lte(), Fla(), Vla(), DCt(), t$e(), Tdn=1, uua=1, dua=4, hua=class extends at{
  constructor(e, t, i, r, s){
    super(), this._editor=e, this._input=t, this._tabAction=i, this._languageService=s, this._onDidClick=this._register(new Qe), this.onDidClick=this._onDidClick.event, this._state=Ro(this, o=>{
      const a=this._input.read(o);
      if(!a)return;
      const l=this._editor.getModel(),u=l.getEOL();
      if(a.startColumn===1&&a.lineNumber>1&&l.getLineLength(a.lineNumber)!==0&&a.text.endsWith(u)&&!a.text.startsWith(u)){
        const d=l.getLineLength(a.lineNumber-1)+1;
        return{
          lineNumber:a.lineNumber-1,column:d,text:u+a.text.slice(0,-u.length)
        }
      }
      return{
        lineNumber:a.lineNumber,column:a.startColumn,text:a.text
      }
    }), this._trimVertically=Ro(this, o=>{
      const a=this._state.read(o)?.text;
      if(!a||a.trim()==="")return{
        topOffset:0,bottomOffset:0,linesTop:0,linesBottom:0
      };
      const l=this._editor.getOption(68),u=this._editor.getModel().getEOL();
      let d=0,m=0,p=0;
      for(;
      p<a.length&&a.startsWith(u,p);
      p+=u.length)d+=1;
      for(let g=a.length;
      g>p&&a.endsWith(u,g);
      g-=u.length)m+=1;
      return{
        topOffset:d*l,bottomOffset:m*l,linesTop:d,linesBottom:m
      }
    }), this._maxPrefixTrim=Ro(o=>{
      const a=this._state.read(o);
      if(!a)return{
        prefixLeftOffset:0,prefixTrim:0
      };
      const l=this._editor.getModel(),u=l.getEOL(),d=this._trimVertically.read(o),m=a.text.split(u),p=m.slice(d.linesTop,m.length-d.linesBottom);
      d.linesTop===0&&(p[0]=l.getLineContent(a.lineNumber)+p[0]);
      const g=new rh(a.lineNumber,a.lineNumber+(d.linesTop>0?0:1));
      return Ljl([],g,p,this._editor)
    }), this._ghostText=Ro(o=>{
      const a=this._state.read(o),l=this._maxPrefixTrim.read(o);
      if(!a)return;
      const d=this._editor.getModel().getEOL(),p=a.text.split(d).map((g,f)=>new Ode(new Zt(f+1,f===0?1:l.prefixTrim+1,f+1,g.length+1),"modified-background",0));
      return new fdn(a.lineNumber,[new Igi(a.column,a.text,!1,p)])
    }), this._display=Ro(this, o=>this._state.read(o)?"block":"none"), this._editorMaxContentWidthInRange=Ro(this, o=>{
      const a=this._state.read(o);
      if(!a)return 0;
      this._editorObs.versionId.read(o);
      const l=this._editor.getModel(),u=l.getEOL(),d=a.text.startsWith(u)?"":l.getValueInRange(new Zt(a.lineNumber,1,a.lineNumber,a.column)),m=l.getValueInRange(new Zt(a.lineNumber,a.column,a.lineNumber,l.getLineLength(a.lineNumber)+1)),g=(d+a.text+m).split(u),f=hKe.fromEditor(this._editor).withSetWidth(!1).withScrollBeyondLastColumn(0),A=g.map(w=>{
        const C=l.tokenization.tokenizeLinesAt(a.lineNumber,[w])?.[0];
        let x;
        return C?x=C4n.fromLineTokens(C).toLineTokens(w,this._languageService.languageIdCodec):x=OB.createEmpty(w,this._languageService.languageIdCodec),gbt(new dKe([x]),f,[],Ct("div"),!0).minWidthInPx
      });
      return Math.max(...A)
    }), this.startLineOffset=this._trimVertically.map(o=>o.topOffset), this.originalLines=this._state.map(o=>o?new rh(o.lineNumber, Math.min(o.lineNumber+2, this._editor.getModel().getLineCount()+1)):void 0), this._overlayLayout=Ite(this, (o, a)=>{
      this._ghostText.read(o);
      const l=this._state.read(o);
      if(!l)return null;
      this._editorObs.observePosition(Ua(this,new ar(l.lineNumber,l.column)),a).read(o);
      const u=this._editorObs.layoutInfo.read(o),d=this._editorObs.scrollLeft.read(o),m=this._editorObs.layoutInfoVerticalScrollbarWidth.read(o),p=u.contentLeft+this._editorMaxContentWidthInRange.read(o)-d,g=this._maxPrefixTrim.read(o).prefixLeftOffset??0,f=u.contentLeft+g-d;
      if(p<=f)return null;
      const{
        topOffset:A,bottomOffset:w
      }
      =this._trimVertically.read(o),C=this._editorObs.scrollTop.read(o),x=this._ghostTextView.height.read(o)-A-w,I=this._editor.getTopForLineNumber(l.lineNumber)-C+A,B=I+x,R=new x2(f,I,p,B);
      return{
        overlay:R,startsAtContentLeft:g===0,contentLeft:u.contentLeft,minContentWidthRequired:g+R.width+m
      }
    }).recomputeInitiallyAndOnChange(this._store), this._modifiedOverlay=Mv.div({
      style:{
        pointerEvents:"none"
      }
    }, Ro(o=>{
      const a=Ket(this._overlayLayout).read(o);
      if(!a)return;
      const l=a.map(m=>x2.fromLeftTopRightBottom(m.contentLeft-dua-Tdn,m.overlay.top,m.contentLeft,m.overlay.bottom)).read(o),u=a.map(m=>m.overlay.withMargin(0,Tdn,0,m.startsAtContentLeft?0:Tdn).intersectHorizontal(new dm(l.left,Number.MAX_SAFE_INTEGER))),d=u.map(m=>m.withMargin(uua,uua));
      return[Mv.div({
        class:"originalUnderlayInsertion",style:{
          ...d.read(o).toStyles(),borderRadius:dua,border:`${Tdn+uua}px solid ${zo(Wm)}`,boxSizing:"border-box"
        }
      }),Mv.div({
        class:"originalOverlayInsertion",style:{
          ...u.read(o).toStyles(),borderRadius:dua,border:Ggi(this._tabAction).map(m=>`${Tdn}px solid ${zo(m)}`),boxSizing:"border-box",backgroundColor:zo(Bjl)
        }
      }),Mv.div({
        class:"originalOverlayHiderInsertion",style:{
          ...l.toStyles(),backgroundColor:zo(Wm)
        }
      })]
    })).keepUpdated(this._store), this._view=Mv.div({
      class:"inline-edits-view",style:{
        position:"absolute",overflow:"visible",top:"0px",left:"0px",zIndex:"0",display:this._display
      }
    }, [[this._modifiedOverlay]]).keepUpdated(this._store), this._editorObs=HB(this._editor), this._ghostTextView=this._register(r.createInstance(wdn, this._editor, {
      ghostText:this._ghostText,minReservedLineCount:F0(0),targetTextModel:this._editorObs.model.map(o=>o??void 0),warning:F0(void 0)
    }, Ua(this, {
      syntaxHighlightingEnabled:!0,extraClasses:["inline-edit"]
    }), !0, !0)), this.isHovered=this._ghostTextView.isHovered, this._register(this._ghostTextView.onDidClick(o=>{
      this._onDidClick.fire(o)
    })), this._register(this._editorObs.createOverlayWidget({
      domNode:this._view.element,position:F0(null),allowEditorOverflow:!1,minContentWidthInPx:Ro(o=>{
        const a=this._overlayLayout.read(o);
        return a===null?0:a.minContentWidthRequired
      })
    }))
  }
}, hua=__decorate([__param(3, ln), __param(4, Jl)], hua)
}
});
function _wg(n){
  const e=[];
  for(;
  n.length;
  ){
    let t=n.shift();
    t.startLineNumber!==t.endLineNumber&&(n.push(new Zt(t.startLineNumber+1, 1, t.endLineNumber, t.endColumn)), t=new Zt(t.startLineNumber, t.startColumn, t.startLineNumber, Number.MAX_SAFE_INTEGER)), e.push(t)
  }
  return e
}
var mua, fkA=