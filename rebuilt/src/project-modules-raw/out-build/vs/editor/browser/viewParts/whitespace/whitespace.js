// Module: out-build/vs/editor/browser/viewParts/whitespace/whitespace.js
// Offset: 1752840 (bundle byte offset)
// Size: 4795 bytes

ylA(), WVe(), oa(), Qft(), tl(), az(), fyh=class extends p9e{
  constructor(n){
    super(), this._context=n, this._options=new sIc(this._context.configuration), this._selection=[], this._renderResult=null, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), this._renderResult=null, super.dispose()
  }
  onConfigurationChanged(n){
    const e=new sIc(this._context.configuration);
    return this._options.equals(e)?n.hasChanged(151):(this._options=e, !0)
  }
  onCursorStateChanged(n){
    return this._selection=n.selections, this._options.renderWhitespace==="selection"
  }
  onDecorationsChanged(n){
    return!0
  }
  onFlushed(n){
    return!0
  }
  onLinesChanged(n){
    return!0
  }
  onLinesDeleted(n){
    return!0
  }
  onLinesInserted(n){
    return!0
  }
  onScrollChanged(n){
    return n.scrollTopChanged
  }
  onZonesChanged(n){
    return!0
  }
  prepareRender(n){
    if(this._options.renderWhitespace==="none"){
      this._renderResult=null;
      return
    }
    const e=n.visibleRange.startLineNumber, i=n.visibleRange.endLineNumber-e+1, r=new Array(i);
    for(let o=0;
    o<i;
    o++)r[o]=!0;
    const s=this._context.viewModel.getMinimapLinesRenderingData(n.viewportData.startLineNumber, n.viewportData.endLineNumber, r);
    this._renderResult=[];
    for(let o=n.viewportData.startLineNumber;
    o<=n.viewportData.endLineNumber;
    o++){
      const a=o-n.viewportData.startLineNumber,l=s.data[a];
      let u=null;
      if(this._options.renderWhitespace==="selection"){
        const d=this._selection;
        for(const m of d){
          if(m.endLineNumber<o||m.startLineNumber>o)continue;
          const p=m.startLineNumber===o?m.startColumn:l.minColumn,g=m.endLineNumber===o?m.endColumn:l.maxColumn;
          p<g&&(u||(u=[]),u.push(new ATc(p-1,g-1)))
        }
      }
      this._renderResult[a]=this._applyRenderWhitespace(n,o,u,l)
    }
  }
  _applyRenderWhitespace(n, e, t, i){
    if(this._options.renderWhitespace==="selection"&&!t||this._options.renderWhitespace==="trailing"&&i.continuesWithWrappedLine)return"";
    const r=this._context.theme.getColor(iOn), s=this._options.renderWithSVG, o=i.content, a=this._options.stopRenderingLineAfter===-1?o.length:Math.min(this._options.stopRenderingLineAfter, o.length), l=i.continuesWithWrappedLine, u=i.minColumn-1, d=this._options.renderWhitespace==="boundary", m=this._options.renderWhitespace==="trailing", p=this._options.lineHeight, g=this._options.middotWidth, f=this._options.wsmiddotWidth, A=this._options.spaceWidth, w=Math.abs(f-A), C=Math.abs(g-A), x=w<C?11825:183, I=this._options.canUseHalfwidthRightwardsArrow;
    let B="", R=!1, N=TH(o), M;
    N===-1?(R=!0, N=a, M=a):M=mde(o);
    let O=0, $=t&&t[O], H=0;
    for(let W=u;
    W<a;
    W++){
      const z=o.charCodeAt(W);
      if($&&W>=$.endOffset&&(O++,$=t&&t[O]),z!==9&&z!==32||m&&!R&&W<=M)continue;
      if(d&&W>=N&&W<=M&&z===32){
        const j=W-1>=0?o.charCodeAt(W-1):0,X=W+1<a?o.charCodeAt(W+1):0;
        if(j!==32&&X!==32)continue
      }
      if(d&&l&&W===a-1){
        const j=W-1>=0?o.charCodeAt(W-1):0;
        if(z===32&&j!==32&&j!==9)continue
      }
      if(t&&(!$||$.startOffset>W||$.endOffset<=W))continue;
      const Y=n.visibleRangeForPosition(new ar(e,W+1));
      Y&&(s?(H=Math.max(H,Y.left),z===9?B+=this._renderArrow(p,A,Y.left):B+=`<circle cx="${(Y.left+A/2).toFixed(2)}" cy="${(p/2).toFixed(2)}" r="${(A/7).toFixed(2)}" />`):z===9?B+=`<div class="mwh" style="left:${Y.left}px;height:${p}px;">${I?"\uFFEB":"\u2192"}</div>`:B+=`<div class="mwh" style="left:${Y.left}px;height:${p}px;">${String.fromCharCode(x)}</div>`)
    }
    return s?(H=Math.round(H+A), `<svg style="bottom:0;position:absolute;width:${H}px;height:${p}px" viewBox="0 0 ${H} ${p}" xmlns="http://www.w3.org/2000/svg" fill="${r}">`+B+"</svg>"):B
  }
  _renderArrow(n, e, t){
    const i=e/7, r=e, s=n/2, o=t, a={
      x:0,y:i/2
    }, l={
      x:100/125*r,y:a.y
    }, u={
      x:l.x-.2*l.x,y:l.y+.2*l.x
    }, d={
      x:u.x+.1*l.x,y:u.y+.1*l.x
    }, m={
      x:d.x+.35*l.x,y:d.y-.35*l.x
    }, p={
      x:m.x,y:-m.y
    }, g={
      x:d.x,y:-d.y
    }, f={
      x:u.x,y:-u.y
    }, A={
      x:l.x,y:-l.y
    }, w={
      x:a.x,y:-a.y
    };
    return`<path d="M ${[a,l,u,d,m,p,g,f,A,w].map(I=>`${
      (o+I.x).toFixed(2)
    }
     ${
      (s+I.y).toFixed(2)
    }
    `).join(" L ")}" />`
  }
  render(n, e){
    if(!this._renderResult)return"";
    const t=e-n;
    return t<0||t>=this._renderResult.length?"":this._renderResult[t]
  }
}, sIc=class{
  constructor(n){
    const e=n.options, t=e.get(52), i=e.get(40);
    i==="off"?(this.renderWhitespace="none", this.renderWithSVG=!1):i==="svg"?(this.renderWhitespace=e.get(104), this.renderWithSVG=!0):(this.renderWhitespace=e.get(104), this.renderWithSVG=!1), this.spaceWidth=t.spaceWidth, this.middotWidth=t.middotWidth, this.wsmiddotWidth=t.wsmiddotWidth, this.canUseHalfwidthRightwardsArrow=t.canUseHalfwidthRightwardsArrow, this.lineHeight=e.get(68), this.stopRenderingLineAfter=e.get(122)
  }
  equals(n){
    return this.renderWhitespace===n.renderWhitespace&&this.renderWithSVG===n.renderWithSVG&&this.spaceWidth===n.spaceWidth&&this.middotWidth===n.middotWidth&&this.wsmiddotWidth===n.wsmiddotWidth&&this.canUseHalfwidthRightwardsArrow===n.canUseHalfwidthRightwardsArrow&&this.lineHeight===n.lineHeight&&this.stopRenderingLineAfter===n.stopRenderingLineAfter
  }
}
}
}), byh, _lA=