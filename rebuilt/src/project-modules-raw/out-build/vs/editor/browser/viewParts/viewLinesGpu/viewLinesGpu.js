// Module: out-build/vs/editor/browser/viewParts/viewLinesGpu/viewLinesGpu.js
// Offset: 1809426 (bundle byte offset)
// Size: 12661 bytes

ri(), _s(), Uc(), Wt(), jr(), tl(), ts(), lIc(), YOn(), f9e(), ZOn(), e3t(), j$(), JTc(), koe(), uIc(), hIc(), OlA(), qlA(), rt(), oIc(), (function(n){
  n[n.FloatsPerEntry=6]="FloatsPerEntry", n[n.BytesPerEntry=24]="BytesPerEntry", n[n.Offset_TexturePosition=0]="Offset_TexturePosition", n[n.Offset_TextureSize=2]="Offset_TextureSize", n[n.Offset_OriginPosition=4]="Offset_OriginPosition"
})(jyh||(jyh={
  
})), v3o=class extends yW{
  constructor(e, t, i, r){
    super(e), this._viewGpuContext=t, this._instantiationService=i, this._logService=r, this._atlasGpuTextureVersions=[], this._initialized=!1, this._glyphRasterizer=this._register(new uo), this._renderStrategy=this._register(new uo), this.canvas=this._viewGpuContext.canvas.domNode, this._register(Oc(s=>{
      this._viewGpuContext.canvasDevicePixelDimensions.read(s);
      const o=this._lastViewportData;
      o&&setTimeout(()=>{
        o===this._lastViewportData&&this.renderText(o)
      })
    })), this.initWebgpu()
  }
  async initWebgpu(){
    if(this._device=JH.deviceSync||await JH.device, this._store.isDisposed)return;
    const e=JH.atlas;
    this._register(e.onDidDeleteGlyphs(()=>{
      this._atlasGpuTextureVersions.length=0,this._atlasGpuTextureVersions[0]=0,this._atlasGpuTextureVersions[1]=0,this._renderStrategy.value.reset()
    }));
    const t=navigator.gpu.getPreferredCanvasFormat();
    this._viewGpuContext.ctx.configure({
      device:this._device,format:t,alphaMode:"premultiplied"
    }), this._renderPassColorAttachment={
      view:null,loadOp:"load",storeOp:"store"
    }, this._renderPassDescriptor={
      label:"Monaco render pass",colorAttachments:[this._renderPassColorAttachment]
    };
    let i;
    {
      let l;
      (function(m){
        m[m.FloatsPerEntry=6]="FloatsPerEntry",m[m.BytesPerEntry=24]="BytesPerEntry",m[m.Offset_CanvasWidth____=0]="Offset_CanvasWidth____",m[m.Offset_CanvasHeight___=1]="Offset_CanvasHeight___",m[m.Offset_ViewportOffsetX=2]="Offset_ViewportOffsetX",m[m.Offset_ViewportOffsetY=3]="Offset_ViewportOffsetY",m[m.Offset_ViewportWidth__=4]="Offset_ViewportWidth__",m[m.Offset_ViewportHeight_=5]="Offset_ViewportHeight_"
      })(l||(l={
        
      }));
      const u=new Float32Array(6),d=(m=this.canvas.width,p=this.canvas.height)=>(u[0]=m,u[1]=p,u[2]=Math.ceil(this._context.configuration.options.get(151).contentLeft*$c().devicePixelRatio),u[3]=0,u[4]=u[0]-u[2],u[5]=u[1]-u[3],u);
      i=this._register(GY.createBuffer(this._device,{
        label:"Monaco uniform buffer",size:24,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST
      },()=>d())).object,this._register(p3(this._viewGpuContext.canvasDevicePixelDimensions,({
        width:m,height:p
      })=>{
        this._device.queue.writeBuffer(i,0,d(m,p))
      })),this._register(p3(this._viewGpuContext.contentLeft,()=>{
        this._device.queue.writeBuffer(i,0,d())
      }))
    }
    let r;
    {
      let l;
      (function(u){
        u[u.FloatsPerEntry=2]="FloatsPerEntry",u[u.BytesPerEntry=8]="BytesPerEntry",u[u.Offset_Width_=0]="Offset_Width_",u[u.Offset_Height=1]="Offset_Height"
      })(l||(l={
        
      })),r=this._register(GY.createBuffer(this._device,{
        label:"Monaco atlas info uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST
      },()=>{
        const u=new Float32Array(2);
        return u[0]=e.pageSize,u[1]=e.pageSize,u
      })).object
    }
    const s=this._context.configuration.options.get(51), o=this._context.configuration.options.get(54);
    this._glyphRasterizer.value=this._register(new l3t(o, s, this._viewGpuContext.devicePixelRatio.get(), JH.decorationStyleCache)), this._register(p3(this._viewGpuContext.devicePixelRatio, ()=>{
      this._refreshGlyphRasterizer()
    })), this._renderStrategy.value=this._instantiationService.createInstance(u3t, this._context, this._viewGpuContext, this._device, this._glyphRasterizer), this._glyphStorageBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco glyph storage buffer",size:b9e.maximumPageCount*(rve.maximumGlyphCount*24),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST
    })).object, this._atlasGpuTextureVersions[0]=0, this._atlasGpuTextureVersions[1]=0, this._atlasGpuTexture=this._register(GY.createTexture(this._device, {
      label:"Monaco atlas texture",format:"rgba8unorm",size:{
        width:e.pageSize,height:e.pageSize,depthOrArrayLayers:b9e.maximumPageCount
      },dimension:"2d",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT
    })).object, this._updateAtlasStorageBufferAndTexture(), this._vertexBuffer=this._register(GY.createBuffer(this._device, {
      label:"Monaco vertex buffer",size:QVe.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST
    }, QVe)).object;
    const a=this._device.createShaderModule({
      label:"Monaco shader module",code:this._renderStrategy.value.wgsl
    });
    if(this._pipeline=this._device.createRenderPipeline({
      label:"Monaco render pipeline",layout:"auto",vertex:{
        module:a,buffers:[{
          arrayStride:2*Float32Array.BYTES_PER_ELEMENT,attributes:[{
            shaderLocation:0,offset:0,format:"float32x2"
          }
          ]
        }
        ]
      },fragment:{
        module:a,targets:[{
          format:t,blend:{
            color:{
              srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"
            },alpha:{
              srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"
            }
          }
        }
        ]
      }
    }), this._rebuildBindGroup=()=>{
      this._bindGroup=this._device.createBindGroup({
        label:"Monaco bind group",layout:this._pipeline.getBindGroupLayout(0),entries:[{
          binding:0,resource:{
            buffer:this._glyphStorageBuffer
          }
        },{
          binding:2,resource:this._device.createSampler({
            label:"Monaco atlas sampler",magFilter:"nearest",minFilter:"nearest"
          })
        },{
          binding:3,resource:this._atlasGpuTexture.createView()
        },{
          binding:4,resource:{
            buffer:i
          }
        },{
          binding:5,resource:{
            buffer:r
          }
        },...this._renderStrategy.value.bindGroupEntries]
      })
    }, this._rebuildBindGroup(), this._initialized=!0, this._initViewportData){
      for(const l of this._initViewportData)this.renderText(l);
      this._initViewportData=void 0
    }
  }
  _refreshRenderStrategy(e){
    if(this._renderStrategy.value?.type==="viewport"||e.endLineNumber<u3t.maxSupportedLines&&this._viewportMaxColumn(e)<u3t.maxSupportedColumns)return;
    this._logService.trace(`File is larger than ${u3t.maxSupportedLines} lines or ${u3t.maxSupportedColumns} columns, switching to viewport render strategy`);
    const t=this._instantiationService.createInstance(Gyh, this._context, this._viewGpuContext, this._device, this._glyphRasterizer);
    this._renderStrategy.value=t, this._register(t.onDidChangeBindGroupEntries(()=>this._rebuildBindGroup?.())), this._rebuildBindGroup?.()
  }
  _viewportMaxColumn(e){
    let t=0, i;
    for(let r=e.startLineNumber;
    r<=e.endLineNumber;
    r++)i=e.getViewLineRenderingData(r), t=Math.max(t, i.maxColumn);
    return t
  }
  _updateAtlasStorageBufferAndTexture(){
    for(const[e, t]of JH.atlas.pages.entries()){
      if(e>=b9e.maximumPageCount){
        console.log(`Attempt to upload atlas page [${e}], only ${b9e.maximumPageCount} are supported currently`);
        continue
      }
      if(t.version===this._atlasGpuTextureVersions[e])continue;
      this._logService.trace("Updating atlas page[",e,"] from version ",this._atlasGpuTextureVersions[e]," to version ",t.version);
      const i=6*rve.maximumGlyphCount,r=new Float32Array(i);
      let s=0;
      for(const o of t.glyphs)r[s+0]=o.x,r[s+0+1]=o.y,r[s+2]=o.w,r[s+2+1]=o.h,r[s+4]=o.originOffsetX,r[s+4+1]=o.originOffsetY,s+=6;
      if(s/6>rve.maximumGlyphCount)throw new Error(`Attempting to write more glyphs (${s/6}) than the GPUBuffer can hold (${rve.maximumGlyphCount})`);
      this._device.queue.writeBuffer(this._glyphStorageBuffer,e*6*rve.maximumGlyphCount*Float32Array.BYTES_PER_ELEMENT,r,0,6*rve.maximumGlyphCount),t.usedArea.right-t.usedArea.left>0&&t.usedArea.bottom-t.usedArea.top>0&&this._device.queue.copyExternalImageToTexture({
        source:t.source
      },{
        texture:this._atlasGpuTexture,origin:{
          x:t.usedArea.left,y:t.usedArea.top,z:e
        }
      },{
        width:t.usedArea.right-t.usedArea.left+1,height:t.usedArea.bottom-t.usedArea.top+1
      }),this._atlasGpuTextureVersions[e]=t.version
    }
  }
  prepareRender(e){
    throw new _m("Should not be called")
  }
  render(e){
    throw new _m("Should not be called")
  }
  onConfigurationChanged(e){
    return this._refreshGlyphRasterizer(), !0
  }
  onCursorStateChanged(e){
    return!0
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
  onLineMappingChanged(e){
    return!0
  }
  onRevealRangeRequest(e){
    return!0
  }
  onScrollChanged(e){
    return!0
  }
  onThemeChanged(e){
    return!0
  }
  onZonesChanged(e){
    return!0
  }
  _refreshGlyphRasterizer(){
    const e=this._glyphRasterizer.value;
    if(!e)return;
    const t=this._context.configuration.options.get(51), i=this._context.configuration.options.get(54), r=this._viewGpuContext.devicePixelRatio.get();
    (e.fontFamily!==t||e.fontSize!==i||e.devicePixelRatio!==r)&&(this._glyphRasterizer.value=new l3t(i, t, r, JH.decorationStyleCache))
  }
  renderText(e){
    if(this._initialized)return this._refreshRenderStrategy(e), this._renderText(e);
    this._initViewportData=this._initViewportData??[], this._initViewportData.push(e)
  }
  _renderText(e){
    this._viewGpuContext.rectangleRenderer.draw(e);
    const t=new KOn(this._context.configuration, this._context.theme.type);
    this._renderStrategy.value.update(e, t), this._updateAtlasStorageBufferAndTexture();
    const i=this._device.createCommandEncoder({
      label:"Monaco command encoder"
    });
    this._renderPassColorAttachment.view=this._viewGpuContext.ctx.getCurrentTexture().createView({
      label:"Monaco canvas texture view"
    });
    const r=i.beginRenderPass(this._renderPassDescriptor);
    r.setPipeline(this._pipeline), r.setVertexBuffer(0, this._vertexBuffer);
    const s=Math.ceil(this._viewGpuContext.contentLeft.get()*this._viewGpuContext.devicePixelRatio.get());
    r.setScissorRect(s, 0, this.canvas.width-s, this.canvas.height), r.setBindGroup(0, this._bindGroup), this._renderStrategy.value.draw(r, e), r.end();
    const o=i.finish();
    this._device.queue.submit([o]), this._lastViewportData=e, this._lastViewLineOptions=t
  }
  linesVisibleRangesForRange(e, t){
    if(!this._lastViewportData)return null;
    const i=e.endLineNumber, r=Zt.intersectRanges(e, this._lastViewportData.visibleRange);
    if(!r)return null;
    const s=this._lastViewportData.startLineNumber, o=this._lastViewportData.endLineNumber, a=this._lastViewportData, l=this._lastViewLineOptions;
    if(!a||!l)return null;
    const u=[];
    let d=0;
    t&&(d=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(r.startLineNumber, 1)).lineNumber);
    for(let m=r.startLineNumber;
    m<=r.endLineNumber;
    m++){
      if(m<s||m>o)continue;
      const p=m===r.startLineNumber?r.startColumn:1,g=m!==r.endLineNumber,f=g?this._context.viewModel.getLineMaxColumn(m):r.endColumn,A=this._visibleRangesForLineRange(m,p,f);
      if(A){
        if(t&&m<i){
          const w=d;
          d=this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new ar(m+1,1)).lineNumber,w!==d&&(A.ranges[A.ranges.length-1].width+=l.spaceWidth)
        }
        u.push(new fTc(A.outsideRenderedLine,m,e3o.from(A.ranges),g))
      }
    }
    return u.length===0?null:u
  }
  _visibleRangesForLineRange(e, t, i){
    if(this.shouldRender())return null;
    const r=this._lastViewportData, s=this._lastViewLineOptions;
    if(!r||!s||e<r.startLineNumber||e>r.endLineNumber)return null;
    const o=r.getViewLineRenderingData(e), a=o.content;
    let l;
    o.isBasicASCII&&s.useMonospaceOptimizations||(l=b3o(o, s));
    let u="", d=0, m=0;
    for(let A=0;
    A<t-1;
    A++){
      if(o.isBasicASCII&&s.useMonospaceOptimizations)u=a.charAt(A);
      else{
        if(u=l.getSegmentAtIndex(A),u===void 0)continue;
        m+=this._renderStrategy.value.glyphRasterizer.getTextMetrics(u).width/$c().devicePixelRatio-s.spaceWidth
      }
      u==="	"?d=ZP.nextRenderTabStop(d,o.tabSize):d++
    }
    let p=d, g=0;
    for(let A=t-1;
    A<i-1;
    A++){
      if(o.isBasicASCII&&s.useMonospaceOptimizations)u=a.charAt(A);
      else{
        if(u=l.getSegmentAtIndex(A),u===void 0)continue;
        g+=this._renderStrategy.value.glyphRasterizer.getTextMetrics(u).width/$c().devicePixelRatio-s.spaceWidth
      }
      u==="	"?p=ZP.nextRenderTabStop(p,o.tabSize):p++
    }
    return new t3o(!1, [new h9e(d*s.spaceWidth+m, (p-d)*s.spaceWidth+g)])
  }
  visibleRangeForPosition(e){
    const t=this._visibleRangesForLineRange(e.lineNumber, e.column, e.column);
    return t?new bTc(t.outsideRenderedLine, t.ranges[0].left):null
  }
  getLineWidth(e){
    if(!this._lastViewportData||!this._lastViewLineOptions||!this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, e))return;
    const t=this._lastViewportData.getViewLineRenderingData(e), r=this._visibleRangesForLineRange(e, 1, t.maxColumn)?.ranges.at(-1);
    if(r)return r.width
  }
  getPositionAtCoordinate(e, t){
    if(!this._lastViewportData||!this._lastViewLineOptions||!this._viewGpuContext.canRender(this._lastViewLineOptions, this._lastViewportData, e))return;
    const i=this._lastViewportData.getViewLineRenderingData(e), r=i.content, s=$c().devicePixelRatio, o=t*s, a=this._lastViewLineOptions.spaceWidth*s, l=b3o(i, this._lastViewLineOptions);
    let u=0, d=0, m=0, p=0;
    for(let g=0;
    g<r.length;
    g++){
      const f=l.getSegmentAtIndex(g);
      if(f===void 0){
        p++;
        continue
      }
      if(f==="	"){
        const A=g+m;
        m=ZP.nextRenderTabStop(g+m,i.tabSize),d=a*(m-A),m-=g+1
      }
      else i.isBasicASCII&&this._lastViewLineOptions.useMonospaceOptimizations?d=a:d=this._renderStrategy.value.glyphRasterizer.getTextMetrics(f).width;
      if(o<u+d/2)break;
      u+=d,p++
    }
    return new ar(e, p+1)
  }
}, v3o=__decorate([__param(2, ln), __param(3, Rr)], v3o)
}
}), JlA=