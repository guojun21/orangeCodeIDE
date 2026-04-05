// Module: out-build/vs/editor/browser/viewParts/rulersGpu/rulersGpu.js
// Offset: 1859963 (bundle byte offset)
// Size: 928 bytes

j$(), xf(), az(), Uc(), iwh=class extends yW{
  constructor(n, e){
    super(n), this._viewGpuContext=e, this._gpuShapes=[], this._register(Oc(t=>this._updateEntries(t)))
  }
  onConfigurationChanged(n){
    return this._updateEntries(void 0), !0
  }
  prepareRender(n){
    
  }
  render(n){
    
  }
  _updateEntries(n){
    const e=this._context.configuration.options, t=e.get(107), i=e.get(52).typicalHalfwidthCharacterWidth, r=this._viewGpuContext.devicePixelRatio.read(n);
    for(let s=0, o=t.length;
    s<o;
    s++){
      const a=t[s],l=this._gpuShapes[s],u=a.color?Xr.fromHex(a.color):this._context.theme.getColor(Dmh)??Xr.white,d=[a.column*i*r,0,Math.max(1,Math.ceil(r)),Number.MAX_SAFE_INTEGER,u.rgba.r/255,u.rgba.g/255,u.rgba.b/255,u.rgba.a];
      l?l.setRaw(d):this._gpuShapes[s]=this._viewGpuContext.rectangleRenderer.register(...d)
    }
    for(;
    this._gpuShapes.length>t.length;
    )this._gpuShapes.splice(-1, 1)[0].dispose()
  }
}
}
}), ZlA=