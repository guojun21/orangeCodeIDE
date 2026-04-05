// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsDeletionView.js
// Offset: 25512430 (bundle byte offset)
// Size: 3622 bytes

ri(), yn(), rt(), Uc(), Nl(), XP(), V$(), zet(), $I(), tl(), DCt(), t$e(), Awg=0, ywg=0, aua=1, cua=1, lua=4, wwg=class extends at{
  constructor(n, e, t, i){
    super(), this._editor=n, this._edit=e, this._uiState=t, this._tabAction=i, this._onDidClick=this._register(new Qe), this.onDidClick=this._onDidClick.event, this._display=Ro(this, o=>this._uiState.read(o)?"block":"none"), this._editorMaxContentWidthInRange=Ro(this, o=>{
      const a=this._originalDisplayRange.read(o);
      return a?(this._editorObs.versionId.read(o),C5e(this,(l,u)=>{
        const d=iua(this._editorObs,a,l);
        return Math.max(d,u??0)
      })):F0(0)
    }).map((o, a)=>o.read(a)), this._maxPrefixTrim=Ro(o=>{
      const a=this._uiState.read(o);
      return a?Ljl(a.deletions,a.originalRange,[],this._editor):{
        prefixTrim:0,prefixLeftOffset:0
      }
    }), this._editorLayoutInfo=Ro(this, o=>{
      const a=this._edit.read(o);
      if(!a||!this._uiState.read(o))return null;
      const u=this._editorObs.layoutInfo.read(o),d=this._editorObs.scrollLeft.read(o),m=this._editorObs.getOption(52).map(x=>x.typicalHalfwidthCharacterWidth).read(o),p=u.contentLeft+Math.max(this._editorMaxContentWidthInRange.read(o),m)-d,g=a.originalLineRange,f=this._originalVerticalStartPosition.read(o)??this._editor.getTopForLineNumber(g.startLineNumber)-this._editorObs.scrollTop.read(o),A=this._originalVerticalEndPosition.read(o)??this._editor.getTopForLineNumber(g.endLineNumberExclusive)-this._editorObs.scrollTop.read(o),w=u.contentLeft+this._maxPrefixTrim.read(o).prefixLeftOffset-d;
      return p<=w?null:{
        codeRect:x2.fromLeftTopRightBottom(w,f,p,A).withMargin(ywg,Awg),contentLeft:u.contentLeft
      }
    }).recomputeInitiallyAndOnChange(this._store), this._originalOverlay=Mv.div({
      style:{
        pointerEvents:"none"
      }
    }, Ro(o=>{
      const a=Ket(this._editorLayoutInfo).read(o);
      if(!a)return;
      const l=a.map(m=>x2.fromLeftTopRightBottom(m.contentLeft-lua-aua,m.codeRect.top,m.contentLeft,m.codeRect.bottom)),u=Ro(m=>{
        const p=a.read(m).codeRect,g=l.read(m);
        return p.intersectHorizontal(new dm(g.left,Number.MAX_SAFE_INTEGER))
      }),d=u.map(m=>m.withMargin(cua,cua));
      return[Mv.div({
        class:"originalSeparatorDeletion",style:{
          ...d.read(o).toStyles(),borderRadius:`${lua}px`,border:`${aua+cua}px solid ${zo(Wm)}`,boxSizing:"border-box"
        }
      }),Mv.div({
        class:"originalOverlayDeletion",style:{
          ...u.read(o).toStyles(),borderRadius:`${lua}px`,border:nua(this._tabAction).map(m=>`${aua}px solid ${zo(m)}`),boxSizing:"border-box",backgroundColor:zo(Sdn)
        }
      }),Mv.div({
        class:"originalOverlayHiderDeletion",style:{
          ...l.read(o).toStyles(),backgroundColor:zo(Wm)
        }
      })]
    })).keepUpdated(this._store), this._nonOverflowView=Mv.div({
      class:"inline-edits-view",style:{
        position:"absolute",overflow:"visible",top:"0px",left:"0px",zIndex:"0",display:this._display
      }
    }, [[this._originalOverlay]]).keepUpdated(this._store), this.isHovered=F0(!1), this._editorObs=HB(this._editor);
    const r=Ro(this, o=>{
      const a=this._edit.read(o);
      return a?new ar(a.originalLineRange.startLineNumber,1):null
    }), s=Ro(this, o=>{
      const a=this._edit.read(o);
      return a?new ar(a.originalLineRange.endLineNumberExclusive,1):null
    });
    this._originalDisplayRange=this._uiState.map(o=>o?.originalRange), this._originalVerticalStartPosition=this._editorObs.observePosition(r, this._store).map(o=>o?.y), this._originalVerticalEndPosition=this._editorObs.observePosition(s, this._store).map(o=>o?.y), this._register(this._editorObs.createOverlayWidget({
      domNode:this._nonOverflowView.element,position:F0(null),allowEditorOverflow:!1,minContentWidthInPx:Ro(o=>{
        const a=this._editorLayoutInfo.read(o);
        return a===null?0:a.codeRect.width
      })
    }))
  }
}
}
}), Tdn, uua, dua, hua, gkA=