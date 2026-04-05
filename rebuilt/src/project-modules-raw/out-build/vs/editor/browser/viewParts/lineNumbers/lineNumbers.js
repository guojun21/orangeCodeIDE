// Module: out-build/vs/editor/browser/viewParts/lineNumbers/lineNumbers.js
// Offset: 1648187 (bundle byte offset)
// Size: 4160 bytes

HcA(), _r(), WVe(), tl(), ts(), Io(), az(), HTc=class Iad extends p9e{
  static{
    this.CLASS_NAME="line-numbers"
  }
  constructor(e){
    super(), this._context=e, this._readConfig(), this._lastCursorModelPosition=new ar(1, 1), this._renderResult=null, this._activeLineNumber=1, this._context.addEventHandler(this)
  }
  _readConfig(){
    const e=this._context.configuration.options;
    this._lineHeight=e.get(68);
    const t=e.get(69);
    this._renderLineNumbers=t.renderType, this._renderCustomLineNumbers=t.renderFn, this._renderFinalNewline=e.get(100);
    const i=e.get(151);
    this._lineNumbersLeft=i.lineNumbersLeft, this._lineNumbersWidth=i.lineNumbersWidth
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(e){
    return this._readConfig(), !0
  }
  onCursorStateChanged(e){
    const t=e.selections[0].getPosition();
    this._lastCursorModelPosition=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(t);
    let i=!1;
    return this._activeLineNumber!==t.lineNumber&&(this._activeLineNumber=t.lineNumber, i=!0), (this._renderLineNumbers===2||this._renderLineNumbers===3)&&(i=!0), i
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
    return e.scrollTopChanged||e.scrollHeightChanged
  }
  onZonesChanged(e){
    return!0
  }
  onDecorationsChanged(e){
    return e.affectsLineNumber
  }
  _getLineRenderLineNumber(e){
    const t=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(e, 1));
    if(t.column!==1)return"";
    const i=t.lineNumber;
    if(isNaN(i))return"";
    if(this._renderCustomLineNumbers)return this._renderCustomLineNumbers(i)??"";
    if(this._renderLineNumbers===2){
      const r=Math.abs(this._lastCursorModelPosition.lineNumber-i);
      return r===0?'<span class="relative-current-line-number">'+i+"</span>":String(r)
    }
    if(this._renderLineNumbers===3){
      if(this._lastCursorModelPosition.lineNumber===i||i%10===0)return String(i);
      const r=this._context.viewModel.getLineCount();
      return i===r?String(i):""
    }
    return isNaN(i)?"":String(i)
  }
  prepareRender(e){
    if(this._renderLineNumbers===0){
      this._renderResult=null;
      return
    }
    const t=xv?this._lineHeight%2===0?" lh-even":" lh-odd":"", i=e.visibleRange.startLineNumber, r=e.visibleRange.endLineNumber, s=this._context.viewModel.getDecorationsInViewport(e.visibleRange).filter(u=>!!u.options.lineNumberClassName);
    s.sort((u, d)=>Zt.compareRangesUsingEnds(u.range, d.range));
    let o=0;
    const a=this._context.viewModel.getLineCount(), l=[];
    for(let u=i;
    u<=r;
    u++){
      const d=u-i;
      let m=this._getLineRenderLineNumber(u),p="";
      for(;
      o<s.length&&s[o].range.endLineNumber<u;
      )o++;
      for(let g=o;
      g<s.length;
      g++){
        const{
          range:f,options:A
        }
        =s[g];
        f.startLineNumber<=u&&(p+=" "+A.lineNumberClassName)
      }
      if(!m&&!p){
        l[d]="";
        continue
      }
      u===a&&this._context.viewModel.getLineLength(u)===0&&(this._renderFinalNewline==="off"&&(m=""),this._renderFinalNewline==="dimmed"&&(p+=" dimmed-line-number")),u===this._activeLineNumber&&(p+=" active-line-number"),l[d]=`<div class="${Iad.CLASS_NAME}${t}${p}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${m??""}</div>`
    }
    this._renderResult=l
  }
  _renderLineNumberFallback(e){
    if(this._renderLineNumbers===0)return"";
    let t=this._getLineRenderLineNumber(e);
    if(!t)return"";
    const i=xv?this._lineHeight%2===0?" lh-even":" lh-odd":"";
    let r=e===this._activeLineNumber?" active-line-number":"";
    const s=this._context.viewModel.getLineCount();
    if(e===s&&this._context.viewModel.getLineLength(e)===0){
      if(this._renderFinalNewline==="off")return"";
      this._renderFinalNewline==="dimmed"&&(r+=" dimmed-line-number")
    }
    return`<div class="${Iad.CLASS_NAME}${i}${r}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${t}</div>`
  }
  render(e, t){
    if(!this._renderResult)return this._renderLineNumberFallback(t);
    const i=t-e;
    return i<0||i>=this._renderResult.length?this._renderLineNumberFallback(t):this._renderResult[i]
  }
}, HI((n, e)=>{
  const t=n.getColor(gmh), i=n.getColor(Imh);
  i?e.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${i}; }`):t&&e.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${t.transparent(.4)}; }`)
})
}
}), JcA=