// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsCollapsedView.js
// Offset: 25510656 (bundle byte offset)
// Size: 1774 bytes

ri(), yn(), rt(), Uc(), XP(), V$(), F3t(), Dgi(), DCt(), t$e(), vwg=class extends at{
  constructor(n, e){
    super(), this._editor=n, this._edit=e, this._onDidClick=this._register(new Qe), this.onDidClick=this._onDidClick.event, this.isHovered=F0(!1), this._editorObs=HB(this._editor);
    const i=this._edit.map(a=>a?.edit.edits[0]??null).map(a=>a?XUe(a, this._editor.getModel()).range.getStartPosition():null), r=this._editorObs.observePosition(i, this._store), s=Ro(a=>{
      const l=r.read(a);
      if(!l)return null;
      const u=this._editorObs.layoutInfoContentLeft.read(a),d=this._editorObs.scrollLeft.read(a);
      return new Koe(u+l.x-d,l.y)
    }), o=Mv.div({
      class:"inline-edits-collapsed-view",style:{
        position:"absolute",overflow:"visible",top:"0px",left:"0px",zIndex:"0",display:"block"
      }
    }, [[this.getCollapsedIndicator(s)]]).keepUpdated(this._store).element;
    this._register(this._editorObs.createOverlayWidget({
      domNode:o,position:F0(null),allowEditorOverflow:!1,minContentWidthInPx:F0(0)
    }))
  }
  getCollapsedIndicator(n){
    const e=this._editorObs.layoutInfoContentLeft, t=n.map((r, s)=>r?r.deltaX(-e.read(s)):null), i=this.createIconPath(t);
    return Mv.svg({
      class:"collapsedView",style:{
        position:"absolute",top:0,left:e,width:this._editorObs.contentWidth,height:this._editorObs.editor.getContentHeight(),overflow:"hidden",pointerEvents:"none"
      }
    }, [Mv.svgElem("path", {
      class:"collapsedViewPath",d:i,fill:zo(ICt)
    })])
  }
  createIconPath(n){
    return n.map(r=>{
      if(!r)return new rua().build();
      const s=r.deltaX(-6/2).deltaY(-1),o=s.deltaX(6),a=s.deltaY(1),l=o.deltaY(1),u=a.deltaX(6/2).deltaY(3);
      return new rua().moveTo(s).lineTo(o).lineTo(l).lineTo(u).lineTo(a).lineTo(s).build()
    })
  }
}
}
}), Awg, ywg, aua, cua, lua, wwg, pkA=