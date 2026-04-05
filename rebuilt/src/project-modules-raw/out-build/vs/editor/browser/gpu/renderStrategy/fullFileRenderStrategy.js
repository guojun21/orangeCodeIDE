// Module: out-build/vs/editor/browser/gpu/renderStrategy/fullFileRenderStrategy.js
// Offset: 1802427 (bundle byte offset)
// Size: 6999 bytes

ri(), xf(), _s(), koe(), hIc(), qyh(), YOn(), f9e(), ZOn(), $yh(), (function(n){
  n[n.IndicesPerCell=6]="IndicesPerCell"
})(Wyh||(Wyh={
  
})), (function(n){
  n[n.FloatsPerEntry=6]="FloatsPerEntry", n[n.BytesPerEntry=24]="BytesPerEntry", n[n.Offset_X=0]="Offset_X", n[n.Offset_Y=1]="Offset_Y", n[n.Offset_Unused1=2]="Offset_Unused1", n[n.Offset_Unused2=3]="Offset_Unused2", n[n.GlyphIndex=4]="GlyphIndex", n[n.TextureIndex=5]="TextureIndex"
})(Qyh||(Qyh={
  
})), u3t=class AK extends mIc{
  static{
    this.maxSupportedLines=3e3
  }
  static{
    this.maxSupportedColumns=200
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
    super(e, t, i, r), this.type="fullfile", this.wgsl=pIc, this._activeDoubleBufferIndex=0, this._upToDateLines=[new Set, new Set], this._visibleObjectCount=0, this._finalRenderedLine=0, this._scrollInitialized=!1, this._queuedBufferUpdates=[[], []];
    const s=AK.maxSupportedLines*AK.maxSupportedColumns*6*Float32Array.BYTES_PER_ELEMENT;
    this._cellBindBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco full file cell buffer",size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST
    })).object, this._cellValueBuffers=[new ArrayBuffer(s), new ArrayBuffer(s)];
    const o=2;
    this._scrollOffsetBindBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco scroll offset buffer",size:o*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST
    })).object, this._scrollOffsetValueBuffer=new Float32Array(o)
  }
  onConfigurationChanged(e){
    return this._invalidateAllLines(), this._queueBufferUpdate(e), !0
  }
  onDecorationsChanged(e){
    return this._invalidateAllLines(), !0
  }
  onTokensChanged(e){
    for(const t of e.ranges)this._invalidateLineRange(t.fromLineNumber, t.toLineNumber);
    return!0
  }
  onLinesDeleted(e){
    return this._invalidateLinesFrom(e.fromLineNumber), this._queueBufferUpdate(e), !0
  }
  onLinesInserted(e){
    return this._invalidateLinesFrom(e.fromLineNumber), !0
  }
  onLinesChanged(e){
    return this._invalidateLineRange(e.fromLineNumber, e.fromLineNumber+e.count), !0
  }
  onScrollChanged(e){
    const t=$c().devicePixelRatio;
    return this._scrollOffsetValueBuffer[0]=(e?.scrollLeft??this._context.viewLayout.getCurrentScrollLeft())*t, this._scrollOffsetValueBuffer[1]=(e?.scrollTop??this._context.viewLayout.getCurrentScrollTop())*t, this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer), !0
  }
  onThemeChanged(e){
    return this._invalidateAllLines(), !0
  }
  onLineMappingChanged(e){
    return this._invalidateAllLines(), this._queueBufferUpdate(e), !0
  }
  onZonesChanged(e){
    return this._invalidateAllLines(), this._queueBufferUpdate(e), !0
  }
  _invalidateAllLines(){
    this._upToDateLines[0].clear(), this._upToDateLines[1].clear()
  }
  _invalidateLinesFrom(e){
    for(const t of[0, 1]){
      const i=this._upToDateLines[t];
      for(const r of i)r>=e&&i.delete(r)
    }
  }
  _invalidateLineRange(e, t){
    for(let i=e;
    i<=t;
    i++)this._upToDateLines[0].delete(i), this._upToDateLines[1].delete(i)
  }
  reset(){
    this._invalidateAllLines();
    for(const e of[0, 1]){
      const t=new Float32Array(this._cellValueBuffers[e]);
      t.fill(0,0,t.length),this._device.queue.writeBuffer(this._cellBindBuffer,0,t.buffer,0,t.byteLength)
    }
    this._finalRenderedLine=0
  }
  update(e, t){
    let i="", r, s=0, o=0, a=0, l=0, u=0, d=0, m, p=0, g=0, f=0, A=0, w, C, x, I, B, R=0, N=0, M;
    const O=$c().devicePixelRatio;
    let $;
    this._scrollInitialized||(this.onScrollChanged(), this._scrollInitialized=!0);
    const H=new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]), W=AK.maxSupportedColumns*6, z=this._upToDateLines[this._activeDoubleBufferIndex];
    let Y=3e3, j=0;
    const X=this._queuedBufferUpdates[this._activeDoubleBufferIndex];
    for(;
    X.length;
    ){
      const re=X.shift();
      switch(re.type){
        case 2:case 8:case 17:{
          H.fill(0),Y=1,j=Math.max(j,this._finalRenderedLine),this._finalRenderedLine=0;
          break
        }
        case 10:{
          const ne=(re.fromLineNumber-1)*AK.maxSupportedColumns*6,pe=re.toLineNumber*AK.maxSupportedColumns*6,le=(this._finalRenderedLine-(re.toLineNumber-re.fromLineNumber+1))*AK.maxSupportedColumns*6;
          H.set(H.subarray(pe),ne),H.fill(0,le),Y=Math.min(Y,re.fromLineNumber),j=Math.max(j,this._finalRenderedLine),this._finalRenderedLine-=re.toLineNumber-re.fromLineNumber+1;
          break
        }
      }
    }
    for(o=e.startLineNumber;
    o<=e.endLineNumber;
    o++){
      if(!this._viewGpuContext.canRender(t,e,o)){
        R=(o-1)*AK.maxSupportedColumns*6,N=o*AK.maxSupportedColumns*6,H.fill(0,R,N),Y=Math.min(Y,o),j=Math.max(j,o);
        continue
      }
      if(!z.has(o)){
        Y=Math.min(Y,o),j=Math.max(j,o),I=e.getViewLineRenderingData(o),d=0,$=b3o(I,t),s=t.spaceWidth*O,l=0,M=I.tokens,g=I.minColumn-1,f=0;
        for(let re=0,ne=M.getCount();
        re<ne;
        re++)if(f=M.getEndOffset(re),!(f<=g)){
          for(A=M.getMetadata(re),a=g;
          a<f&&!(a>AK.maxSupportedColumns);
          a++){
            if(r=$.getSegmentAtIndex(a),r===void 0)continue;
            i=r,I.isBasicASCII&&t.useMonospaceOptimizations||(s=this.glyphRasterizer.getTextMetrics(i).width),C=void 0,w=void 0,x=void 0;
            for(B of I.inlineDecorations){
              if(o<B.range.startLineNumber||o>B.range.endLineNumber||o===B.range.startLineNumber&&a<B.range.startColumn-1||o===B.range.endLineNumber&&a>=B.range.endColumn-1)continue;
              const le=JH.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode,B.inlineClassName);
              for(const he of le)for(const be of he.style){
                const fe=he.styleMap.get(be)?.toString()??"";
                switch(be){
                  case"color":{
                    const ke=Xr.Format.CSS.parse(fe);
                    if(!ke)throw new _m("Invalid color format "+fe);
                    C=ke.toNumber32Bit();
                    break
                  }
                  case"font-weight":{
                    UlA(fe)>=400?w=!0:w=!1;
                    break
                  }
                  case"opacity":{
                    x=$lA(fe);
                    break
                  }
                  default:throw new _m("Unexpected inline decoration style")
                }
              }
            }
            if(i===" "||i==="	"){
              if(p=((o-1)*AK.maxSupportedColumns+a)*6,H.fill(0,p,p+6),i==="	"){
                const le=a+d;
                d=ZP.nextRenderTabStop(a+d,I.tabSize),l+=s*(d-le),d-=a+1
              }
              else l+=s;
              continue
            }
            const pe=JH.decorationStyleCache.getOrCreateEntry(C,w,x);
            m=this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer,i,A,pe,l),u=Math.round(e.relativeVerticalOffset[o-e.startLineNumber]*O+Math.floor((e.lineHeight*O-(m.fontBoundingBoxAscent+m.fontBoundingBoxDescent))/2)+m.fontBoundingBoxAscent),p=((o-1)*AK.maxSupportedColumns+a)*6,H[p+0]=Math.floor(l),H[p+1]=u,H[p+4]=m.glyphIndex,H[p+5]=m.pageIndex,l+=s
          }
          g=f
        }
        R=((o-1)*AK.maxSupportedColumns+f)*6,N=o*AK.maxSupportedColumns*6,H.fill(0,R,N),z.add(o)
      }
    }
    const ee=(e.endLineNumber-e.startLineNumber+1)*W;
    return Y=Math.min(Y, AK.maxSupportedLines), j=Math.min(j, AK.maxSupportedLines), Y<=j&&this._device.queue.writeBuffer(this._cellBindBuffer, (Y-1)*W*Float32Array.BYTES_PER_ELEMENT, H.buffer, (Y-1)*W*Float32Array.BYTES_PER_ELEMENT, (j-Y+1)*W*Float32Array.BYTES_PER_ELEMENT), this._finalRenderedLine=Math.max(this._finalRenderedLine, j), this._activeDoubleBufferIndex=this._activeDoubleBufferIndex?0:1, this._visibleObjectCount=ee, ee
  }
  draw(e, t){
    if(this._visibleObjectCount<=0)throw new _m("Attempt to draw 0 objects");
    e.draw(QVe.length/2, this._visibleObjectCount, void 0, (t.startLineNumber-1)*AK.maxSupportedColumns)
  }
  _queueBufferUpdate(e){
    this._queuedBufferUpdates[0].push(e), this._queuedBufferUpdates[1].push(e)
  }
}
}
}), jyh, v3o, HlA=