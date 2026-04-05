// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsSideBySideView.js
// Offset: 25529090 (bundle byte offset)
// Size: 11702 bytes

ri(), h0(), xf(), yn(), rt(), Uc(), Wt(), Nl(), XP(), Io(), V$(), zet(), yq(), $I(), tl(), ts(), Jgi(), pdn(), DCt(), t$e(), BCt=0, Idn=0, Cwg=!1, KAe=1, n$e=1, fNe=4, pua=20, Mjl=12, Wgi=class extends at{
  static fitsInsideViewport(e, t, i, r, s){
    const o=HB(e), a=o.layoutInfoWidth.read(s), l=o.layoutInfoContentLeft.read(s), u=e.getLayoutInfo().verticalScrollbarWidth, d=o.layoutInfoMinimap.read(s).minimapLeft!==0?o.layoutInfoMinimap.read(s).minimapWidth:0, m=iua(o, r, void 0), p=i.lineEdit.newLines.reduce((A, w)=>Math.max(A, fwg(w, e, t)), 0), g=pua, f=Mjl+2*KAe;
    return m+p+g+f<a-l-u-d
  }
  constructor(e, t, i, r, s, o, a){
    super(), this._editor=e, this._edit=t, this._previewTextModel=i, this._uiState=r, this._tabAction=s, this._instantiationService=o, this._themeService=a, this._onDidClick=this._register(new Qe), this.onDidClick=this._onDidClick.event, this._display=Ro(this, l=>this._uiState.read(l)?"block":"none"), this.previewRef=Mv.ref(), this._editorContainer=Mv.div({
      class:["editorContainer"],style:{
        position:"absolute",overflow:"hidden",cursor:"pointer"
      },onmousedown:l=>{
        l.preventDefault()
      },onclick:l=>{
        this._onDidClick.fire(new yy(As(l),l))
      }
    }, [Mv.div({
      class:"preview",style:{
        pointerEvents:"none"
      },ref:this.previewRef
    })]).keepUpdated(this._store), this.isHovered=this._editorContainer.didMouseMoveDuringHover, this._activeViewZones=[], this._updatePreviewEditor=Ro(l=>{
      this._editorContainer.readEffect(l),this._previewEditorObs.model.read(l),this._display.read(l),this._nonOverflowView&&(this._nonOverflowView.element.style.display=this._display.read(l));
      const u=this._uiState.read(l),d=this._edit.read(l);
      if(!u||!d)return;
      const m=d.originalLineRange,p=[];
      m.startLineNumber>1&&p.push(new Zt(1,1,m.startLineNumber-1,1)),m.startLineNumber+u.newTextLineCount<this._previewTextModel.getLineCount()+1&&p.push(new Zt(m.startLineNumber+u.newTextLineCount,1,this._previewTextModel.getLineCount()+1,1)),this.previewEditor.setHiddenAreas(p,void 0,!0);
      const g=[...this._activeViewZones];
      this._activeViewZones=[];
      const f=m.endLineNumberExclusive-m.startLineNumber-u.newTextLineCount;
      this.previewEditor.changeViewZones(A=>{
        g.forEach(w=>A.removeZone(w)),f>0&&this._activeViewZones.push(A.addZone({
          afterLineNumber:m.startLineNumber+u.newTextLineCount-1,heightInLines:f,showInHiddenAreas:!0,domNode:Ct("div.diagonal-fill.inline-edits-view-zone")
        }))
      })
    }), this._previewEditorWidth=Ro(this, l=>{
      const u=this._edit.read(l);
      return u?(this._updatePreviewEditor.read(l),iua(this._previewEditorObs,u.modifiedLineRange,l)):0
    }), this._cursorPosIfTouchesEdit=Ro(this, l=>{
      const u=this._editorObs.cursorPosition.read(l),d=this._edit.read(l);
      if(!(!d||!u))return d.modifiedLineRange.contains(u.lineNumber)?u:void 0
    }), this._originalStartPosition=Ro(this, l=>{
      const u=this._edit.read(l);
      return u?new ar(u.originalLineRange.startLineNumber,1):null
    }), this._originalEndPosition=Ro(this, l=>{
      const u=this._edit.read(l);
      return u?new ar(u.originalLineRange.endLineNumberExclusive,1):null
    }), this._editorMaxContentWidthInRange=Ro(this, l=>{
      const u=this._originalDisplayRange.read(l);
      return u?(this._editorObs.versionId.read(l),C5e(this,(d,m)=>{
        const p=iua(this._editorObs,u,d);
        return Math.max(p,m??0)
      })):F0(0)
    }).map((l, u)=>l.read(u)), this._previewEditorLayoutInfo=Ro(this, l=>{
      const u=this._edit.read(l);
      if(!u||!this._uiState.read(l))return null;
      const m=u.originalLineRange,p=this._editorObs.scrollLeft.read(l),g=this._editorMaxContentWidthInRange.read(l),f=this._editorObs.layoutInfo.read(l),A=this._previewEditorWidth.read(l),w=f.contentWidth-f.verticalScrollbarWidth,C=this._editor.getContainerDomNode().getBoundingClientRect(),x=f.contentLeft+f.contentWidth+C.left,I=As(this._editor.getContainerDomNode()).innerWidth-x,B=As(this._editor.getContainerDomNode()).innerWidth-C.right,R=Math.min(f.contentWidth*.3,A,100),N=0,M=N+I,O=this._cursorPosIfTouchesEdit.read(l),$=Math.max(w+p-N-Math.max(0,R-M),Math.min(O?ikA(this._editorObs,O,l)+50:0,w+p)),H=Math.min(g+pua,$),W=g+pua+A+70,z=$-H;
      let Y,j;
      H>p?(Y=0,j=f.contentLeft+H-p):(Y=p-H,j=f.contentLeft);
      const X=this._originalVerticalStartPosition.read(l)??this._editor.getTopForLineNumber(m.startLineNumber)-this._editorObs.scrollTop.read(l),ee=this._originalVerticalEndPosition.read(l)??this._editor.getBottomForLineNumber(m.endLineNumberExclusive-1)-this._editorObs.scrollTop.read(l),re=f.contentLeft-p;
      let ne=x2.fromLeftTopRightBottom(re,X,j,ee);
      const pe=ne.height===0;
      pe||(ne=ne.withMargin(Idn,BCt));
      const le=this._editor.getOption(68)*u.modifiedLineRange.length,he=ee-X,be=Math.max(he,le),fe=z===0,ke=0,Se=Math.min(A+Mjl,B+f.width-f.contentLeft-ke);
      let Fe=x2.fromLeftTopWidthHeight(ne.right+ke,X,Se,be);
      return pe?Fe=Fe.withMargin(Idn,BCt).translateY(Idn):Fe=Fe.withMargin(Idn,BCt).translateX(BCt+KAe),{
        codeRect:ne,editRect:Fe,codeScrollLeft:p,contentLeft:f.contentLeft,isInsertion:pe,maxContentWidth:W,shouldShowShadow:fe,desiredPreviewEditorScrollLeft:Y,previewEditorWidth:Se
      }
    }), this._shouldOverflow=Ro(l=>{
      if(!Cwg)return!1;
      const u=this._edit.read(l)?.originalLineRange;
      if(!u)return!1;
      const d=this._stickyScrollHeight.read(l);
      return!(this._editor.getTopForLineNumber(u.startLineNumber)-this._editorObs.scrollTop.read(l)<=d||this._editor.getTopForLineNumber(u.endLineNumberExclusive)-this._editorObs.scrollTop.read(l)>=this._editorObs.layoutInfo.read(l).height)
    }), this._backgroundSvg=Mv.svg({
      transform:"translate(-0.5 -0.5)",style:{
        overflow:"visible",pointerEvents:"none",position:"absolute"
      }
    }, [Mv.svgElem("path", {
      class:"rightOfModifiedBackgroundCoverUp",d:Ro(l=>{
        const u=this._previewEditorLayoutInfo.read(l);
        if(!(!u||this._originalBackgroundColor.read(l).isTransparent()))return new rua().moveTo(u.codeRect.getRightTop()).lineTo(u.codeRect.getRightTop().deltaX(1e3)).lineTo(u.codeRect.getRightBottom().deltaX(1e3)).lineTo(u.codeRect.getRightBottom()).build()
      }),style:{
        fill:oft(Wm,"transparent")
      }
    })]).keepUpdated(this._store), this._originalOverlay=Mv.div({
      style:{
        pointerEvents:"none",display:this._previewEditorLayoutInfo.map(l=>l?.isInsertion?"none":"block")
      }
    }, Ro(l=>{
      const u=Ket(this._previewEditorLayoutInfo).read(l);
      if(!u)return;
      const d=nua(this._tabAction).map(B=>`${KAe}px solid ${zo(B)}`),m=`${KAe+n$e}px solid ${zo(Wm)}`,p=u.read(l).codeScrollLeft!==0,g=u.map(B=>B.codeRect.bottom<B.editRect.bottom),f=fNe*2+KAe*2,A=u.map(B=>x2.fromLeftTopRightBottom(B.contentLeft-fNe-KAe,B.codeRect.top,B.contentLeft,B.codeRect.bottom+f)).read(l),w=new dm(A.left,Number.MAX_SAFE_INTEGER),C=u.map(B=>B.codeRect.intersectHorizontal(w)),x=C.map(B=>B.withMargin(n$e,0,n$e,n$e).intersectHorizontal(w)),I=C.map(B=>x2.fromLeftTopWidthHeight(B.right-f+KAe,B.bottom-KAe,f,f).intersectHorizontal(w));
      return[Mv.div({
        class:"originalSeparatorSideBySide",style:{
          ...x.read(l).toStyles(),boxSizing:"border-box",borderRadius:`${fNe}px 0 0 ${fNe}px`,borderTop:m,borderBottom:m,borderLeft:p?"none":m
        }
      }),Mv.div({
        class:"originalOverlaySideBySide",style:{
          ...C.read(l).toStyles(),boxSizing:"border-box",borderRadius:`${fNe}px 0 0 ${fNe}px`,borderTop:d,borderBottom:d,borderLeft:p?"none":d,backgroundColor:zo(Sdn)
        }
      }),Mv.div({
        class:"originalCornerCutoutSideBySide",style:{
          pointerEvents:"none",display:g.map(B=>B?"block":"none"),...I.read(l).toStyles()
        }
      },[Mv.div({
        class:"originalCornerCutoutBackground",style:{
          position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundColor:VAe(Sdn,this._themeService).map(B=>B.toString())
        }
      }),Mv.div({
        class:"originalCornerCutoutBorder",style:{
          position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",boxSizing:"border-box",borderTop:d,borderRight:d,borderRadius:"0 100% 0 0",backgroundColor:zo(Wm)
        }
      })]),Mv.div({
        class:"originalOverlaySideBySideHider",style:{
          ...A.toStyles(),backgroundColor:zo(Wm)
        }
      })]
    })).keepUpdated(this._store), this._modifiedOverlay=Mv.div({
      style:{
        pointerEvents:"none"
      }
    }, Ro(l=>{
      const u=Ket(this._previewEditorLayoutInfo).read(l);
      if(!u)return;
      const m=u.map(C=>C.codeRect.bottom<C.editRect.bottom).map(C=>`0 ${fNe}px ${fNe}px ${C?fNe:0}px`),p=VAe(Ggi(this._tabAction),this._themeService).map(C=>`1px solid ${C.toString()}`),g=`${KAe+n$e}px solid ${zo(Wm)}`,f=u.map(C=>C.editRect.withMargin(0,KAe)),A=f.map(C=>C.withMargin(n$e,n$e,n$e,0)),w=Ro(C=>{
        const x=f.read(C),I=u.read(C);
        return!I.isInsertion||I.contentLeft>=x.left?x2.fromLeftTopWidthHeight(x.left,x.top,0,0):new x2(I.contentLeft,x.top,x.left,x.top+KAe*2)
      });
      return[Mv.div({
        class:"modifiedInsertionSideBySide",style:{
          ...w.read(l).toStyles(),backgroundColor:Ggi(this._tabAction).map(C=>zo(C))
        }
      }),Mv.div({
        class:"modifiedSeparatorSideBySide",style:{
          ...A.read(l).toStyles(),borderRadius:m,borderTop:g,borderBottom:g,borderRight:g,boxSizing:"border-box"
        }
      }),Mv.div({
        class:"modifiedOverlaySideBySide",style:{
          ...f.read(l).toStyles(),borderRadius:m,border:p,boxSizing:"border-box",backgroundColor:zo(Bjl)
        }
      })]
    })).keepUpdated(this._store), this._nonOverflowView=Mv.div({
      class:"inline-edits-view",style:{
        position:"absolute",overflow:"visible",top:"0px",left:"0px",zIndex:"0",display:this._display
      }
    }, [this._backgroundSvg, Ro(this, l=>this._shouldOverflow.read(l)?[]:[this._editorContainer, this._originalOverlay, this._modifiedOverlay])]).keepUpdated(this._store), this._originalDisplayRange=this._uiState.map(l=>l?.originalDisplayRange), this._originalBackgroundColor=tp(this, this._themeService.onDidColorThemeChange, ()=>this._themeService.getColorTheme().getColor(Sdn)??Xr.transparent), this._editorObs=HB(this._editor), this._originalVerticalStartPosition=this._editorObs.observePosition(this._originalStartPosition, this._store).map(l=>l?.y), this._originalVerticalEndPosition=this._editorObs.observePosition(this._originalEndPosition, this._store).map(l=>l?.y), this._stickyScrollController=Kae.get(this._editorObs.editor), this._stickyScrollHeight=this._stickyScrollController?tp(this._stickyScrollController.onDidChangeStickyScrollHeight, ()=>this._stickyScrollController.stickyScrollWidgetHeight):F0(0), this._register(this._editorObs.createOverlayWidget({
      domNode:this._nonOverflowView.element,position:F0(null),allowEditorOverflow:!1,minContentWidthInPx:Ro(l=>{
        const u=this._previewEditorLayoutInfo.read(l)?.maxContentWidth;
        return u===void 0?0:u
      })
    })), this.previewEditor=this._register(this._instantiationService.createInstance(q3, this.previewRef.element, {
      glyphMargin:!1,lineNumbers:"off",minimap:{
        enabled:!1
      },guides:{
        indentation:!1,bracketPairs:!1,bracketPairsHorizontal:!1,highlightActiveIndentation:!1
      },rulers:[],padding:{
        top:0,bottom:0
      },folding:!1,selectOnLineNumbers:!1,selectionHighlight:!1,columnSelection:!1,overviewRulerBorder:!1,overviewRulerLanes:0,lineDecorationsWidth:0,lineNumbersMinChars:0,revealHorizontalRightPadding:0,bracketPairColorization:{
        enabled:!0,independentColorPoolPerBracketType:!1
      },scrollBeyondLastLine:!1,scrollbar:{
        vertical:"hidden",horizontal:"hidden",handleMouseWheel:!1
      },readOnly:!0,wordWrap:"off",wordWrapOverride1:"off",wordWrapOverride2:"off"
    }, {
      contextKeyValues:{
        [VS.inInlineEditsPreviewEditor.key]:!0
      },contributions:[]
    }, this._editor)), this._previewEditorObs=HB(this.previewEditor), this.previewEditor.setModel(this._previewTextModel), this._register(Oc(l=>{
      const u=this._previewEditorLayoutInfo.read(l);
      if(!u)return;
      const d=u.editRect.withMargin(-Idn,-BCt);
      this.previewEditor.layout({
        height:d.height,width:u.previewEditorWidth+15
      }),this._editorContainer.element.style.top=`${d.top}px`,this._editorContainer.element.style.left=`${d.left}px`,this._editorContainer.element.style.width=`${u.previewEditorWidth+BCt}px`
    })), this._register(Oc(l=>{
      const u=this._previewEditorLayoutInfo.read(l);
      u&&this._previewEditorObs.editor.setScrollLeft(u.desiredPreviewEditorScrollLeft)
    })), this._updatePreviewEditor.recomputeInitiallyAndOnChange(this._store)
  }
}, Wgi=__decorate([__param(5, ln), __param(6, bo)], Wgi)
}
}), RCt, vkA=