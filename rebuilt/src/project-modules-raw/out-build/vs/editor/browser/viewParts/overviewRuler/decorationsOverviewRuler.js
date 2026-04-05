// Module: out-build/vs/editor/browser/viewParts/overviewRuler/decorationsOverviewRuler.js
// Offset: 1714192 (bundle byte offset)
// Size: 7107 bytes

sI(), xf(), j$(), tl(), Tg(), az(), Lte(), Vs(), XAh=class{
  constructor(n, e){
    const t=n.options;
    this.lineHeight=t.get(68), this.pixelRatio=t.get(149), this.overviewRulerLanes=t.get(87), this.renderBorder=t.get(86);
    const i=e.getColor(gEc);
    this.borderColor=i?i.toString():null, this.hideCursor=t.get(61);
    const r=e.getColor(COt);
    this.cursorColorSingle=r?r.transparent(.7).toString():null;
    const s=e.getColor(dEc);
    this.cursorColorPrimary=s?s.transparent(.7).toString():null;
    const o=e.getColor(hEc);
    this.cursorColorSecondary=o?o.transparent(.7).toString():null, this.themeType=e.type;
    const a=t.get(74), l=a.enabled, u=a.side, d=e.getColor(Bmh), m=pT.getDefaultBackground();
    d?this.backgroundColor=d:l&&u==="right"?this.backgroundColor=m:this.backgroundColor=null;
    const g=t.get(151).overviewRuler;
    this.top=g.top, this.right=g.right, this.domWidth=g.width, this.domHeight=g.height, this.overviewRulerLanes===0?(this.canvasWidth=0, this.canvasHeight=0):(this.canvasWidth=this.domWidth*this.pixelRatio|0, this.canvasHeight=this.domHeight*this.pixelRatio|0);
    const[f, A]=this._initLanes(1, this.canvasWidth, this.overviewRulerLanes);
    this.x=f, this.w=A
  }
  _initLanes(n, e, t){
    const i=e-n;
    if(t>=3){
      const r=Math.floor(i/3),s=Math.floor(i/3),o=i-r-s,a=n,l=a+r,u=a+r+o;
      return[[0,a,l,a,u,a,l,a],[0,r,o,r+o,s,r+o+s,o+s,r+o+s]]
    }
    else if(t===2){
      const r=Math.floor(i/2),s=i-r,o=n,a=o+r;
      return[[0,o,o,o,a,o,o,o],[0,r,r,r,s,r+s,r+s,r+s]]
    }
    else{
      const r=n,s=i;
      return[[0,r,r,r,r,r,r,r],[0,s,s,s,s,s,s,s]]
    }
  }
  equals(n){
    return this.lineHeight===n.lineHeight&&this.pixelRatio===n.pixelRatio&&this.overviewRulerLanes===n.overviewRulerLanes&&this.renderBorder===n.renderBorder&&this.borderColor===n.borderColor&&this.hideCursor===n.hideCursor&&this.cursorColorSingle===n.cursorColorSingle&&this.cursorColorPrimary===n.cursorColorPrimary&&this.cursorColorSecondary===n.cursorColorSecondary&&this.themeType===n.themeType&&Xr.equals(this.backgroundColor, n.backgroundColor)&&this.top===n.top&&this.right===n.right&&this.domWidth===n.domWidth&&this.domHeight===n.domHeight&&this.canvasWidth===n.canvasWidth&&this.canvasHeight===n.canvasHeight
  }
}, (function(n){
  n[n.MIN_DECORATION_HEIGHT=6]="MIN_DECORATION_HEIGHT"
})(eyh||(eyh={
  
})), (function(n){
  n[n.Left=1]="Left", n[n.Center=2]="Center", n[n.Right=4]="Right", n[n.Full=7]="Full"
})(tyh||(tyh={
  
})), (function(n){
  n[n.NotNeeded=0]="NotNeeded", n[n.Maybe=1]="Maybe", n[n.Needed=2]="Needed"
})(nyh||(nyh={
  
})), iyh=class extends yW{
  constructor(n){
    super(n), this._actualShouldRender=0, this._renderedDecorations=[], this._renderedCursorPositions=[], this._domNode=mw(document.createElement("canvas")), this._domNode.setClassName("decorationsOverviewRuler"), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._domNode.setAttribute("aria-hidden", "true"), this._updateSettings(!1), this._tokensColorTrackerListener=pT.onDidChange(e=>{
      e.changedColorMap&&this._updateSettings(!0)
    }), this._cursorPositions=[{
      position:new ar(1,1),color:this._settings.cursorColorSingle
    }
    ]
  }
  dispose(){
    super.dispose(), this._tokensColorTrackerListener.dispose()
  }
  _updateSettings(n){
    const e=new XAh(this._context.configuration, this._context.theme);
    return this._settings&&this._settings.equals(e)?!1:(this._settings=e, this._domNode.setTop(this._settings.top), this._domNode.setRight(this._settings.right), this._domNode.setWidth(this._settings.domWidth), this._domNode.setHeight(this._settings.domHeight), this._domNode.domNode.width=this._settings.canvasWidth, this._domNode.domNode.height=this._settings.canvasHeight, n&&this._render(), !0)
  }
  _markRenderingIsNeeded(){
    return this._actualShouldRender=2, !0
  }
  _markRenderingIsMaybeNeeded(){
    return this._actualShouldRender=1, !0
  }
  onConfigurationChanged(n){
    return this._updateSettings(!1)?this._markRenderingIsNeeded():!1
  }
  onCursorStateChanged(n){
    this._cursorPositions=[];
    for(let e=0, t=n.selections.length;
    e<t;
    e++){
      let i=this._settings.cursorColorSingle;
      t>1&&(i=e===0?this._settings.cursorColorPrimary:this._settings.cursorColorSecondary),this._cursorPositions.push({
        position:n.selections[e].getPosition(),color:i
      })
    }
    return this._cursorPositions.sort((e, t)=>ar.compare(e.position, t.position)), this._markRenderingIsMaybeNeeded()
  }
  onDecorationsChanged(n){
    return n.affectsOverviewRuler?this._markRenderingIsMaybeNeeded():!1
  }
  onFlushed(n){
    return this._markRenderingIsNeeded()
  }
  onScrollChanged(n){
    return n.scrollHeightChanged?this._markRenderingIsNeeded():!1
  }
  onZonesChanged(n){
    return this._markRenderingIsNeeded()
  }
  onThemeChanged(n){
    return this._updateSettings(!1)?this._markRenderingIsNeeded():!1
  }
  getDomNode(){
    return this._domNode.domNode
  }
  prepareRender(n){
    
  }
  render(n){
    this._render(), this._actualShouldRender=0
  }
  _render(){
    const n=this._settings.backgroundColor;
    if(this._settings.overviewRulerLanes===0){
      this._domNode.setBackgroundColor(n?Xr.Format.CSS.formatHexA(n):""),this._domNode.setDisplay("none");
      return
    }
    const e=this._context.viewModel.getAllOverviewRulerDecorations(this._context.theme);
    if(e.sort(KOo.compareByRenderingProps), this._actualShouldRender===1&&!KOo.equalsArr(this._renderedDecorations, e)&&(this._actualShouldRender=2), this._actualShouldRender===1&&!cg(this._renderedCursorPositions, this._cursorPositions, (g, f)=>g.position.lineNumber===f.position.lineNumber&&g.color===f.color)&&(this._actualShouldRender=2), this._actualShouldRender===1)return;
    this._renderedDecorations=e, this._renderedCursorPositions=this._cursorPositions, this._domNode.setDisplay("block");
    const t=this._settings.canvasWidth, i=this._settings.canvasHeight, r=this._settings.lineHeight, s=this._context.viewLayout, o=this._context.viewLayout.getScrollHeight(), a=i/o, l=6*this._settings.pixelRatio|0, u=l/2|0, d=this._domNode.domNode.getContext("2d");
    n?n.isOpaque()?(d.fillStyle=Xr.Format.CSS.formatHexA(n), d.fillRect(0, 0, t, i)):(d.clearRect(0, 0, t, i), d.fillStyle=Xr.Format.CSS.formatHexA(n), d.fillRect(0, 0, t, i)):d.clearRect(0, 0, t, i);
    const m=this._settings.x, p=this._settings.w;
    for(const g of e){
      const f=g.color,A=g.data;
      d.fillStyle=f;
      let w=0,C=0,x=0;
      for(let I=0,B=A.length/3;
      I<B;
      I++){
        const R=A[3*I],N=A[3*I+1],M=A[3*I+2];
        let O=s.getVerticalOffsetForLineNumber(N)*a|0,$=(s.getVerticalOffsetForLineNumber(M)+r)*a|0;
        if($-O<l){
          let W=(O+$)/2|0;
          W<u?W=u:W+u>i&&(W=i-u),O=W-u,$=W+u
        }
        O>x+1||R!==w?(I!==0&&d.fillRect(m[w],C,p[w],x-C),w=R,C=O,x=$):$>x&&(x=$)
      }
      d.fillRect(m[w],C,p[w],x-C)
    }
    if(!this._settings.hideCursor){
      const g=2*this._settings.pixelRatio|0,f=g/2|0,A=this._settings.x[7],w=this._settings.w[7];
      let C=-100,x=-100,I=null;
      for(let B=0,R=this._cursorPositions.length;
      B<R;
      B++){
        const N=this._cursorPositions[B].color;
        if(!N)continue;
        const M=this._cursorPositions[B].position;
        let O=s.getVerticalOffsetForLineNumber(M.lineNumber)*a|0;
        O<f?O=f:O+f>i&&(O=i-f);
        const $=O-f,H=$+g;
        $>x+1||N!==I?(B!==0&&I&&d.fillRect(A,C,w,x-C),C=$,x=H):H>x&&(x=H),I=N,d.fillStyle=N
      }
      I&&d.fillRect(A,C,w,x-C)
    }
    this._settings.renderBorder&&this._settings.borderColor&&this._settings.overviewRulerLanes>0&&(d.beginPath(), d.lineWidth=1, d.strokeStyle=this._settings.borderColor, d.moveTo(0, 0), d.lineTo(0, i), d.moveTo(1, 0), d.lineTo(t, 0), d.stroke())
  }
}
}
}), ryh, tIc, nIc, syh, oyh=