// Module: out-build/vs/editor/browser/viewParts/selections/selections.js
// Offset: 1729722 (bundle byte offset)
// Size: 5309 bytes

dlA(), WVe(), Nl(), Io(), (function(n){
  n[n.EXTERN=0]="EXTERN", n[n.INTERN=1]="INTERN", n[n.FLAT=2]="FLAT"
})(uyh||(uyh={
  
})), dyh=class{
  constructor(n){
    this.left=n.left, this.width=n.width, this.startStyle=null, this.endStyle=null
  }
}, hyh=class{
  constructor(n, e){
    this.lineNumber=n, this.ranges=e
  }
}, myh=class C7 extends p9e{
  static{
    this.SELECTION_CLASS_NAME="selected-text"
  }
  static{
    this.SELECTION_TOP_LEFT="top-left-radius"
  }
  static{
    this.SELECTION_BOTTOM_LEFT="bottom-left-radius"
  }
  static{
    this.SELECTION_TOP_RIGHT="top-right-radius"
  }
  static{
    this.SELECTION_BOTTOM_RIGHT="bottom-right-radius"
  }
  static{
    this.EDITOR_BACKGROUND_CLASS_NAME="monaco-editor-background"
  }
  static{
    this.ROUNDED_PIECE_WIDTH=10
  }
  constructor(e){
    super(), this._previousFrameVisibleRangesWithStyle=[], this._context=e;
    const t=this._context.configuration.options;
    this._roundedSelection=t.get(106), this._typicalHalfwidthCharacterWidth=t.get(52).typicalHalfwidthCharacterWidth, this._selections=[], this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(e){
    const t=this._context.configuration.options;
    return this._roundedSelection=t.get(106), this._typicalHalfwidthCharacterWidth=t.get(52).typicalHalfwidthCharacterWidth, !0
  }
  onCursorStateChanged(e){
    return this._selections=e.selections.slice(0), !0
  }
  onDecorationsChanged(e){
    return!0
  }
  onFlushed(e){
    return!0
  }
  onLinesChanged(e){
    return!0
  }
  onLinesDeleted(e){
    return!0
  }
  onLinesInserted(e){
    return!0
  }
  onScrollChanged(e){
    return e.scrollTopChanged
  }
  onZonesChanged(e){
    return!0
  }
  _visibleRangesHaveGaps(e){
    for(let t=0, i=e.length;
    t<i;
    t++)if(e[t].ranges.length>1)return!0;
    return!1
  }
  _enrichVisibleRangesWithStyle(e, t, i){
    const r=this._typicalHalfwidthCharacterWidth/4;
    let s=null, o=null;
    if(i&&i.length>0&&t.length>0){
      const a=t[0].lineNumber;
      if(a===e.startLineNumber)for(let u=0;
      !s&&u<i.length;
      u++)i[u].lineNumber===a&&(s=i[u].ranges[0]);
      const l=t[t.length-1].lineNumber;
      if(l===e.endLineNumber)for(let u=i.length-1;
      !o&&u>=0;
      u--)i[u].lineNumber===l&&(o=i[u].ranges[0]);
      s&&!s.startStyle&&(s=null),o&&!o.startStyle&&(o=null)
    }
    for(let a=0, l=t.length;
    a<l;
    a++){
      const u=t[a].ranges[0],d=u.left,m=u.left+u.width,p={
        top:0,bottom:0
      },g={
        top:0,bottom:0
      };
      if(a>0){
        const f=t[a-1].ranges[0].left,A=t[a-1].ranges[0].left+t[a-1].ranges[0].width;
        p3o(d-f)<r?p.top=2:d>f&&(p.top=1),p3o(m-A)<r?g.top=2:f<m&&m<A&&(g.top=1)
      }
      else s&&(p.top=s.startStyle.top,g.top=s.endStyle.top);
      if(a+1<l){
        const f=t[a+1].ranges[0].left,A=t[a+1].ranges[0].left+t[a+1].ranges[0].width;
        p3o(d-f)<r?p.bottom=2:f<d&&d<A&&(p.bottom=1),p3o(m-A)<r?g.bottom=2:m<A&&(g.bottom=1)
      }
      else o&&(p.bottom=o.startStyle.bottom,g.bottom=o.endStyle.bottom);
      u.startStyle=p,u.endStyle=g
    }
  }
  _getVisibleRangesWithStyle(e, t, i){
    const s=(t.linesVisibleRangesForRange(e, !0)||[]).map(mlA);
    return!this._visibleRangesHaveGaps(s)&&this._roundedSelection&&this._enrichVisibleRangesWithStyle(t.visibleRange, s, i), s
  }
  _createSelectionPiece(e, t, i, r, s){
    return'<div class="cslr '+i+'" style="top:'+e.toString()+"px;bottom:"+t.toString()+"px;left:"+r.toString()+"px;width:"+s.toString()+'px;"></div>'
  }
  _actualRenderOneSelection(e, t, i, r){
    if(r.length===0)return;
    const s=!!r[0].ranges[0].startStyle, o=r[0].lineNumber, a=r[r.length-1].lineNumber;
    for(let l=0, u=r.length;
    l<u;
    l++){
      const d=r[l],m=d.lineNumber,p=m-t,g=i&&m===o?1:0,f=i&&m!==o&&m===a?1:0;
      let A="",w="";
      for(let C=0,x=d.ranges.length;
      C<x;
      C++){
        const I=d.ranges[C];
        if(s){
          const R=I.startStyle,N=I.endStyle;
          if(R.top===1||R.bottom===1){
            A+=this._createSelectionPiece(g,f,C7.SELECTION_CLASS_NAME,I.left-C7.ROUNDED_PIECE_WIDTH,C7.ROUNDED_PIECE_WIDTH);
            let M=C7.EDITOR_BACKGROUND_CLASS_NAME;
            R.top===1&&(M+=" "+C7.SELECTION_TOP_RIGHT),R.bottom===1&&(M+=" "+C7.SELECTION_BOTTOM_RIGHT),A+=this._createSelectionPiece(g,f,M,I.left-C7.ROUNDED_PIECE_WIDTH,C7.ROUNDED_PIECE_WIDTH)
          }
          if(N.top===1||N.bottom===1){
            A+=this._createSelectionPiece(g,f,C7.SELECTION_CLASS_NAME,I.left+I.width,C7.ROUNDED_PIECE_WIDTH);
            let M=C7.EDITOR_BACKGROUND_CLASS_NAME;
            N.top===1&&(M+=" "+C7.SELECTION_TOP_LEFT),N.bottom===1&&(M+=" "+C7.SELECTION_BOTTOM_LEFT),A+=this._createSelectionPiece(g,f,M,I.left+I.width,C7.ROUNDED_PIECE_WIDTH)
          }
        }
        let B=C7.SELECTION_CLASS_NAME;
        if(s){
          const R=I.startStyle,N=I.endStyle;
          R.top===0&&(B+=" "+C7.SELECTION_TOP_LEFT),R.bottom===0&&(B+=" "+C7.SELECTION_BOTTOM_LEFT),N.top===0&&(B+=" "+C7.SELECTION_TOP_RIGHT),N.bottom===0&&(B+=" "+C7.SELECTION_BOTTOM_RIGHT)
        }
        w+=this._createSelectionPiece(g,f,B,I.left,I.width)
      }
      e[p][0]+=A,e[p][1]+=w
    }
  }
  prepareRender(e){
    const t=[], i=e.visibleRange.startLineNumber, r=e.visibleRange.endLineNumber;
    for(let o=i;
    o<=r;
    o++){
      const a=o-i;
      t[a]=["",""]
    }
    const s=[];
    for(let o=0, a=this._selections.length;
    o<a;
    o++){
      const l=this._selections[o];
      if(l.isEmpty()){
        s[o]=null;
        continue
      }
      const u=this._getVisibleRangesWithStyle(l,e,this._previousFrameVisibleRangesWithStyle[o]);
      s[o]=u,this._actualRenderOneSelection(t,i,this._selections.length>1,u)
    }
    this._previousFrameVisibleRangesWithStyle=s, this._renderResult=t.map(([o, a])=>o+a)
  }
  render(e, t){
    if(!this._renderResult)return"";
    const i=t-e;
    return i<0||i>=this._renderResult.length?"":this._renderResult[i]
  }
}, HI((n, e)=>{
  const t=n.getColor(guh);
  t&&!t.isTransparent()&&e.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${t}; }`)
})
}
}), glA=