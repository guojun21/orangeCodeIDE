// Module: out-build/vs/editor/browser/gpu/renderStrategy/viewportRenderStrategy.js
// Offset: 1796632 (bundle byte offset)
// Size: 5795 bytes

ri(), xf(), _s(), yn(), koe(), hIc(), YOn(), f9e(), ZOn(), $yh(), qyh(), (function(n){
  n[n.IndicesPerCell=6]="IndicesPerCell", n[n.CellBindBufferCapacityIncrement=32]="CellBindBufferCapacityIncrement", n[n.CellBindBufferInitialCapacity=63]="CellBindBufferInitialCapacity"
})(Hyh||(Hyh={
  
})), (function(n){
  n[n.FloatsPerEntry=6]="FloatsPerEntry", n[n.BytesPerEntry=24]="BytesPerEntry", n[n.Offset_X=0]="Offset_X", n[n.Offset_Y=1]="Offset_Y", n[n.Offset_Unused1=2]="Offset_Unused1", n[n.Offset_Unused2=3]="Offset_Unused2", n[n.GlyphIndex=4]="GlyphIndex", n[n.TextureIndex=5]="TextureIndex"
})(Jyh||(Jyh={
  
})), Gyh=class Mat extends mIc{
  static{
    this.maxSupportedColumns=2e3
  }
  get bindGroupEntries(){
    return[{
      binding:1,resource:{
        buffer:this._cellBindBuffer
      }
    }, {
      binding:6,resource:{
        buffer:this._scrollOffsetBindBuffer
      }
    }
    ]
  }
  constructor(e, t, i, r){
    super(e, t, i, r), this.type="viewport", this.wgsl=pIc, this._cellBindBufferLineCapacity=63, this._activeDoubleBufferIndex=0, this._visibleObjectCount=0, this._scrollInitialized=!1, this._onDidChangeBindGroupEntries=this._register(new Qe), this.onDidChangeBindGroupEntries=this._onDidChangeBindGroupEntries.event, this._rebuildCellBuffer(this._cellBindBufferLineCapacity);
    const s=2;
    this._scrollOffsetBindBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco scroll offset buffer",size:s*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST
    })).object, this._scrollOffsetValueBuffer=new Float32Array(s)
  }
  _rebuildCellBuffer(e){
    this._cellBindBuffer?.destroy();
    const t=(Math.floor(e/32)+1)*32, i=t*Mat.maxSupportedColumns*6*Float32Array.BYTES_PER_ELEMENT;
    this._cellBindBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco full file cell buffer",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST
    })).object, this._cellValueBuffers=[new ArrayBuffer(i), new ArrayBuffer(i)], this._cellBindBufferLineCapacity=t, this._onDidChangeBindGroupEntries.fire()
  }
  onConfigurationChanged(e){
    return!0
  }
  onDecorationsChanged(e){
    return!0
  }
  onTokensChanged(e){
    return!0
  }
  onLinesDeleted(e){
    return!0
  }
  onLinesInserted(e){
    return!0
  }
  onLinesChanged(e){
    return!0
  }
  onScrollChanged(e){
    const t=$c().devicePixelRatio;
    return this._scrollOffsetValueBuffer[0]=(e?.scrollLeft??this._context.viewLayout.getCurrentScrollLeft())*t, this._scrollOffsetValueBuffer[1]=(e?.scrollTop??this._context.viewLayout.getCurrentScrollTop())*t, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0
  }
  onThemeChanged(e){
    return!0
  }
  onLineMappingChanged(e){
    return!0
  }
  onZonesChanged(e){
    return!0
  }
  reset(){
    for(const e of[0, 1]){
      const t=new Float32Array(this._cellValueBuffers[e]);
      t.fill(0,0,t.length),this._device.queue.writeBuffer(this._cellBindBuffer,0,t.buffer,0,t.byteLength)
    }
  }
  update(e, t){
    let i="", r, s=0, o=0, a=0, l=0, u=0, d=0, m, p=0, g=0, f=0, A=0, w, C, x, I, B, R=0, N=0, M;
    const O=$c().devicePixelRatio;
    let $;
    this._scrollInitialized||(this.onScrollChanged(), this._scrollInitialized=!0), this._cellBindBufferLineCapacity<e.endLineNumber-e.startLineNumber+1&&this._rebuildCellBuffer(e.endLineNumber-e.startLineNumber+1);
    const H=new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]);
    H.fill(0);
    const W=Mat.maxSupportedColumns*6;
    for(o=e.startLineNumber;
    o<=e.endLineNumber;
    o++)if(this._viewGpuContext.canRender(t, e, o)){
      I=e.getViewLineRenderingData(o),d=0,$=b3o(I,t),s=t.spaceWidth*O,l=0,M=I.tokens,g=I.minColumn-1,f=0;
      for(let Y=0,j=M.getCount();
      Y<j;
      Y++)if(f=M.getEndOffset(Y),!(f<=g)){
        for(A=M.getMetadata(Y),a=g;
        a<f&&!(a>Mat.maxSupportedColumns);
        a++){
          if(r=$.getSegmentAtIndex(a),r===void 0)continue;
          i=r,I.isBasicASCII&&t.useMonospaceOptimizations||(s=this.glyphRasterizer.getTextMetrics(i).width),C=void 0,w=void 0,x=void 0;
          for(B of I.inlineDecorations){
            if(o<B.range.startLineNumber||o>B.range.endLineNumber||o===B.range.startLineNumber&&a<B.range.startColumn-1||o===B.range.endLineNumber&&a>=B.range.endColumn-1)continue;
            const ee=JH.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode,B.inlineClassName);
            for(const re of ee)for(const ne of re.style){
              const pe=re.styleMap.get(ne)?.toString()??"";
              switch(ne){
                case"color":{
                  const le=Xr.Format.CSS.parse(pe);
                  if(!le)throw new _m("Invalid color format "+pe);
                  C=le.toNumber32Bit();
                  break
                }
                case"font-weight":{
                  MlA(pe)>=400?w=!0:w=!1;
                  break
                }
                case"opacity":{
                  x=FlA(pe);
                  break
                }
                default:throw new _m("Unexpected inline decoration style")
              }
            }
          }
          if(i===" "||i==="	"){
            if(p=((o-1)*Mat.maxSupportedColumns+a)*6,H.fill(0,p,p+6),i==="	"){
              const ee=a+d;
              d=ZP.nextRenderTabStop(a+d,I.tabSize),l+=s*(d-ee),d-=a+1
            }
            else l+=s;
            continue
          }
          const X=JH.decorationStyleCache.getOrCreateEntry(C,w,x);
          m=this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer,i,A,X,l),u=Math.round(e.relativeVerticalOffset[o-e.startLineNumber]*O+Math.floor((e.lineHeight*O-(m.fontBoundingBoxAscent+m.fontBoundingBoxDescent))/2)+m.fontBoundingBoxAscent),p=((o-e.startLineNumber)*Mat.maxSupportedColumns+a)*6,H[p+0]=Math.floor(l),H[p+1]=u,H[p+4]=m.glyphIndex,H[p+5]=m.pageIndex,l+=s
        }
        g=f
      }
      R=((o-e.startLineNumber)*Mat.maxSupportedColumns+f)*6,N=(o-e.startLineNumber)*Mat.maxSupportedColumns*6,H.fill(0,R,N)
    }
    const z=(e.endLineNumber-e.startLineNumber+1)*W;
    return this._device.queue.writeBuffer(this._cellBindBuffer, 0, H.buffer, 0, (e.endLineNumber-e.startLineNumber)*W*Float32Array.BYTES_PER_ELEMENT), this._activeDoubleBufferIndex=this._activeDoubleBufferIndex?0:1, this._visibleObjectCount=z, z
  }
  draw(e, t){
    if(this._visibleObjectCount<=0)throw new _m("Attempt to draw 0 objects");
    e.draw(QVe.length/2, this._visibleObjectCount)
  }
}
}
});
function UlA(n){
  switch(n){
    case"lighter":case"normal":return 400;
    case"bolder":case"bold":return 700
  }
  return parseInt(n)
}
function $lA(n){
  return n.endsWith("%")?parseFloat(n.substring(0, n.length-1))/100:n.match(/^\d+(?:\.\d*)/)?parseFloat(n):1
}
var Wyh, Qyh, u3t, qlA=