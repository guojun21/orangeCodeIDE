// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsLineReplacementView.js
// Offset: 25522002 (bundle byte offset)
// Size: 7088 bytes

ri(), h0(), yn(), rt(), Uc(), Nl(), XP(), Io(), XOt(), F3t(), zet(), fbt(), $I(), ts(), Ku(), LH(), l4o(), Lte(), DCt(), t$e(), mua=class extends at{
  constructor(e, t, i, r, s){
    super(), this._editor=e, this._edit=t, this._tabAction=i, this._languageService=r, this._themeService=s, this._onDidClick=this._register(new Qe), this.onDidClick=this._onDidClick.event, this._originalBubblesDecorationOptions={
      description:"inlineCompletions-original-bubble",className:"inlineCompletions-original-bubble",stickiness:1
    }, this._modifiedLineElements=Ro(o=>{
      const a=[];
      let l=0;
      const u=this._maxPrefixTrim.read(o),d=this._edit.read(o);
      if(!d||!u)return;
      const m=u.prefixTrim,p=_wg(d.replacements.map(A=>A.modifiedRange)).map(A=>new Zt(A.startLineNumber,A.startColumn-m,A.endLineNumber,A.endColumn-m)),g=this._editor.model.get(),f=d.modifiedRange.startLineNumber;
      for(let A=0;
      A<d.modifiedRange.length;
      A++){
        const w=document.createElement("div"),C=f+A,x=d.modifiedLines[A].slice(m),I=g.tokenization.tokenizeLinesAt(C,[x])?.[0];
        let B;
        I?B=C4n.fromLineTokens(I).toLineTokens(x,this._languageService.languageIdCodec):B=OB.createEmpty(x,this._languageService.languageIdCodec);
        const R=[];
        for(const M of p.filter(O=>O.startLineNumber===C)){
          const O=Math.min(M.endColumn,x.length+1);
          R.push(new Ode(new Zt(1,M.startColumn,1,O),"inlineCompletions-modified-bubble",0)),R.push(new Ode(new Zt(1,M.startColumn,1,M.startColumn+1),"start",0)),R.push(new Ode(new Zt(1,O-1,1,O),"end",0))
        }
        const N=gbt(new dKe([B]),hKe.fromEditor(this._editor.editor).withSetWidth(!1).withScrollBeyondLastColumn(0),R,w,!0);
        this._editor.getOption(52).read(o),l=Math.max(l,N.minWidthInPx),a.push(w)
      }
      return{
        lines:a,requiredWidth:l
      }
    }), this._layout=Ro(this, o=>{
      const a=this._modifiedLineElements.read(o),l=this._maxPrefixTrim.read(o),u=this._edit.read(o);
      if(!a||!l||!u)return;
      const{
        prefixLeftOffset:d
      }
      =l,{
        requiredWidth:m
      }
      =a,p=this._editor.getOption(68).read(o),g=this._editor.layoutInfoContentLeft.read(o),f=this._editor.layoutInfoVerticalScrollbarWidth.read(o),A=this._editor.scrollLeft.read(o),w=this._editor.scrollTop.read(o),C=g-A,x=this._editor.editor.getModel(),I=u.originalRange.mapToLineArray(j=>this._editor.editor.getOffsetForColumn(j,x.getLineMaxColumn(j))-d),B=Math.max(...I,m),R=u.originalRange.startLineNumber,N=u.originalRange.endLineNumberExclusive-1,M=this._editor.editor.getTopForLineNumber(R)-w,O=this._editor.editor.getBottomForLineNumber(N)-w,$=x2.fromLeftTopWidthHeight(C+d,M,B,O-M),H=x2.fromLeftTopWidthHeight($.left,$.bottom,$.width,u.modifiedRange.length*p),W=x2.hull([$,H]),z=W.intersectVertical(new dm($.bottom,Number.MAX_SAFE_INTEGER)),Y=new x2(z.left,z.top,z.right,z.bottom);
      return{
        originalLinesOverlay:$,modifiedLinesOverlay:H,background:W,lowerBackground:z,lowerText:Y,minContentWidthRequired:d+B+f
      }
    }), this._viewZoneInfo=Ro(o=>{
      if(!this._editor.getOption(64).map(p=>p.edits.allowCodeShifting==="always").read(o))return;
      const l=this._layout.read(o),u=this._edit.read(o);
      if(!l||!u)return;
      const d=l.lowerBackground.height,m=u.originalRange.endLineNumberExclusive;
      return{
        height:d,lineNumber:m
      }
    }), this._div=Mv.div({
      class:"line-replacement"
    }, [Ro(o=>{
      const a=Ket(this._layout).read(o),l=this._modifiedLineElements.read(o);
      if(!a||!l)return[];
      const u=a.read(o),d=this._editor.layoutInfoContentLeft.read(o),m=this._editor.contentWidth.read(o),p=this._editor.editor.getContentHeight(),g=this._editor.getOption(68).read(o);
      l.lines.forEach(w=>{
        w.style.width=`${u.lowerText.width}px`,w.style.height=`${g}px`,w.style.position="relative"
      });
      const f=Ggi(this._tabAction).read(o),A=nua(this._tabAction).read(o);
      return[Mv.div({
        style:{
          position:"absolute",top:0,left:d,width:m,height:p,overflow:"hidden",pointerEvents:"none"
        }
      },[Mv.div({
        class:"originalOverlayLineReplacement",style:{
          position:"absolute",...Yet(w=>a.read(w).background.translateX(-d)),borderRadius:"4px",border:VAe(A,this._themeService).map(w=>`1px solid ${w.toString()}`),pointerEvents:"none",boxSizing:"border-box",background:zo(Sdn)
        }
      }),Mv.div({
        class:"modifiedOverlayLineReplacement",style:{
          position:"absolute",...Yet(w=>a.read(w).lowerBackground.translateX(-d)),borderRadius:"4px",background:zo(Wm),boxShadow:`${zo(q5e)} 0 6px 6px -6px`,border:`1px solid ${zo(f)}`,boxSizing:"border-box",overflow:"hidden",cursor:"pointer",pointerEvents:"auto"
        },onmousedown:w=>{
          w.preventDefault()
        },onclick:w=>this._onDidClick.fire(new yy(As(w),w))
      },[Mv.div({
        style:{
          position:"absolute",top:0,left:0,width:"100%",height:"100%",background:zo(swg)
        }
      })]),Mv.div({
        class:"modifiedLinesLineReplacement",style:{
          position:"absolute",boxSizing:"border-box",...Yet(w=>a.read(w).lowerText.translateX(-d)),fontFamily:this._editor.getOption(51),fontSize:this._editor.getOption(54),fontWeight:this._editor.getOption(55),pointerEvents:"none",whiteSpace:"nowrap",borderRadius:"4px",overflow:"hidden"
        }
      },[...l.lines])])]
    })]).keepUpdated(this._store), this._previousViewZoneInfo=void 0, this._originalBubblesDecorationCollection=this._editor.editor.createDecorationsCollection(), this._maxPrefixTrim=this._edit.map(o=>o?Ljl(o.replacements.flatMap(a=>[a.originalRange, a.modifiedRange]), o.originalRange, o.modifiedLines, this._editor.editor):void 0), this.isHovered=this._editor.isTargetHovered(o=>this._isMouseOverWidget(o), this._store), this._register($i(()=>this._originalBubblesDecorationCollection.clear())), this._register($i(()=>this._editor.editor.changeViewZones(o=>this.removePreviousViewZone(o)))), this._register(qnA(this._viewZoneInfo, ({
      lastValue:o,newValue:a
    })=>{
      o===a||o?.height===a?.height&&o?.lineNumber===a?.lineNumber||this._editor.editor.changeViewZones(l=>{
        this.removePreviousViewZone(l),a&&this.addViewZone(a,l)
      })
    })), this._register(Oc(o=>{
      const a=this._edit.read(o),l=[];
      a&&l.push(..._wg(a.replacements.map(u=>u.originalRange))),this._originalBubblesDecorationCollection.set(l.map(u=>({
        range:u,options:this._originalBubblesDecorationOptions
      })))
    })), this._register(this._editor.createOverlayWidget({
      domNode:this._div.element,minContentWidthInPx:Ro(o=>this._layout.read(o)?.minContentWidthRequired??0),position:F0({
        preference:{
          top:0,left:0
        }
      }),allowEditorOverflow:!1
    }))
  }
  _isMouseOverWidget(e){
    const t=this._layout.get();
    return!t||!(e.event instanceof mRe)?!1:t.lowerBackground.containsPoint(new Koe(e.event.relativePos.x, e.event.relativePos.y))
  }
  removePreviousViewZone(e){
    if(!this._previousViewZoneInfo)return;
    e.removeZone(this._previousViewZoneInfo.id);
    const t=this._editor.cursorLineNumber.get();
    t!==null&&t>=this._previousViewZoneInfo.lineNumber&&this._editor.editor.setScrollTop(this._editor.scrollTop.get()-this._previousViewZoneInfo.height), this._previousViewZoneInfo=void 0
  }
  addViewZone(e, t){
    const i=t.addZone({
      afterLineNumber:e.lineNumber-1,heightInPx:e.height,domNode:Ct("div")
    });
    this._previousViewZoneInfo={
      height:e.height,lineNumber:e.lineNumber,id:i
    };
    const r=this._editor.cursorLineNumber.get();
    r!==null&&r>=e.lineNumber&&this._editor.editor.setScrollTop(this._editor.scrollTop.get()+e.height)
  }
}, mua=__decorate([__param(3, Jl), __param(4, bo)], mua)
}
}), BCt, Idn, Cwg, KAe, n$e, fNe, pua, Mjl, Wgi, bkA=