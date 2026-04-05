// Module: out-build/vs/editor/browser/viewParts/viewCursors/viewCursor.js
// Offset: 1735125 (bundle byte offset)
// Size: 4419 bytes

ri(), sI(), a3t(), oa(), pk(), tl(), ts(), HY(), iIc=class{
  constructor(n, e, t, i, r, s, o){
    this.top=n, this.left=e, this.paddingLeft=t, this.width=i, this.height=r, this.textContent=s, this.textContentClassName=o
  }
}, (function(n){
  n[n.Single=0]="Single", n[n.MultiPrimary=1]="MultiPrimary", n[n.MultiSecondary=2]="MultiSecondary"
})(g9e||(g9e={
  
})), rIc=class{
  constructor(n, e){
    this._context=n;
    const t=this._context.configuration.options, i=t.get(52);
    this._cursorStyle=t.get(147), this._lineHeight=t.get(68), this._typicalHalfwidthCharacterWidth=i.typicalHalfwidthCharacterWidth, this._lineCursorWidth=Math.min(t.get(31), this._typicalHalfwidthCharacterWidth), this._isVisible=!0, this._domNode=mw(document.createElement("div")), this._domNode.setClassName(`cursor ${USe}`), this._domNode.setHeight(this._lineHeight), this._domNode.setTop(0), this._domNode.setLeft(0), bF(this._domNode, i), this._domNode.setDisplay("none"), this._position=new ar(1, 1), this._pluralityClass="", this.setPlurality(e), this._lastRenderedContent="", this._renderData=null
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return this._position
  }
  setPlurality(n){
    switch(n){
      default:case g9e.Single:this._pluralityClass="";
      break;
      case g9e.MultiPrimary:this._pluralityClass="cursor-primary";
      break;
      case g9e.MultiSecondary:this._pluralityClass="cursor-secondary";
      break
    }
  }
  show(){
    this._isVisible||(this._domNode.setVisibility("inherit"), this._isVisible=!0)
  }
  hide(){
    this._isVisible&&(this._domNode.setVisibility("hidden"), this._isVisible=!1)
  }
  onConfigurationChanged(n){
    const e=this._context.configuration.options, t=e.get(52);
    return this._cursorStyle=e.get(147), this._lineHeight=e.get(68), this._typicalHalfwidthCharacterWidth=t.typicalHalfwidthCharacterWidth, this._lineCursorWidth=Math.min(e.get(31), this._typicalHalfwidthCharacterWidth), bF(this._domNode, t), !0
  }
  onCursorPositionChanged(n, e){
    return e?this._domNode.domNode.style.transitionProperty="none":this._domNode.domNode.style.transitionProperty="", this._position=n, !0
  }
  _getGraphemeAwarePosition(){
    const{
      lineNumber:n,column:e
    }
    =this._position, t=this._context.viewModel.getLineContent(n), [i, r]=Gih(t, e-1);
    return[new ar(n, i+1), t.substring(i, r)]
  }
  _prepareRender(n){
    let e="", t="";
    const[i, r]=this._getGraphemeAwarePosition();
    if(this._cursorStyle===hT.Line||this._cursorStyle===hT.LineThin){
      const m=n.visibleRangeForPosition(i);
      if(!m||m.outsideRenderedLine)return null;
      const p=As(this._domNode.domNode);
      let g;
      this._cursorStyle===hT.Line?(g=aFo(p,this._lineCursorWidth>0?this._lineCursorWidth:2),g>2&&(e=r,t=this._getTokenClassName(i))):g=aFo(p,1);
      let f=m.left,A=0;
      g>=2&&f>=1&&(A=1,f-=A);
      const w=n.getVerticalOffsetForLineNumber(i.lineNumber)-n.bigNumbersDelta;
      return new iIc(w,f,A,g,this._lineHeight,e,t)
    }
    const s=n.linesVisibleRangesForRange(new Zt(i.lineNumber, i.column, i.lineNumber, i.column+r.length), !1);
    if(!s||s.length===0)return null;
    const o=s[0];
    if(o.outsideRenderedLine||o.ranges.length===0)return null;
    const a=o.ranges[0], l=r==="	"?this._typicalHalfwidthCharacterWidth:a.width<1?this._typicalHalfwidthCharacterWidth:a.width;
    this._cursorStyle===hT.Block&&(e=r, t=this._getTokenClassName(i));
    let u=n.getVerticalOffsetForLineNumber(i.lineNumber)-n.bigNumbersDelta, d=this._lineHeight;
    return(this._cursorStyle===hT.Underline||this._cursorStyle===hT.UnderlineThin)&&(u+=this._lineHeight-2, d=2), new iIc(u, a.left, 0, l, d, e, t)
  }
  _getTokenClassName(n){
    const e=this._context.viewModel.getViewLineData(n.lineNumber), t=e.tokens.findTokenIndexAtOffset(n.column-1);
    return e.tokens.getClassName(t)
  }
  prepareRender(n){
    this._renderData=this._prepareRender(n)
  }
  render(n){
    return this._renderData?(this._lastRenderedContent!==this._renderData.textContent&&(this._lastRenderedContent=this._renderData.textContent, this._domNode.domNode.textContent=this._lastRenderedContent), this._domNode.setClassName(`cursor ${this._pluralityClass} ${USe} ${this._renderData.textContentClassName}`), this._domNode.setDisplay("block"), this._domNode.setTop(this._renderData.top), this._domNode.setLeft(this._renderData.left), this._domNode.setPaddingLeft(this._renderData.paddingLeft), this._domNode.setWidth(this._renderData.width), this._domNode.setLineHeight(this._renderData.height), this._domNode.setHeight(this._renderData.height), {
      domNode:this._domNode.domNode,position:this._position,contentLeft:this._renderData.left,height:this._renderData.height,width:2
    }):(this._domNode.setDisplay("none"), null)
  }
}
}
}), pyh, blA=