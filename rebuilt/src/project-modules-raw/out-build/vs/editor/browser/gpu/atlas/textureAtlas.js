// Module: out-build/vs/editor/browser/gpu/atlas/textureAtlas.js
// Offset: 1773840 (bundle byte offset)
// Size: 3127 bytes

ri(), _s(), yn(), rt(), cu(), Wt(), Io(), oIc(), klA(), lIc(), b9e=class extends at{
  static{
    f3o=this
  }
  static{
    this.maximumPageCount=16
  }
  get pages(){
    return this._pages
  }
  constructor(e, t, i, r, s){
    super(), this._maxTextureSize=e, this._decorationStyleCache=i, this._themeService=r, this._instantiationService=s, this._warmUpTask=this._register(new uo), this._warmedUpRasterizers=new Set, this._pages=[], this._glyphPageIndex=new H2n, this._onDidDeleteGlyphs=this._register(new Qe), this.onDidDeleteGlyphs=this._onDidDeleteGlyphs.event, this._allocatorType=t?.allocatorType??"slab", this._register(In.runAndSubscribe(this._themeService.onDidColorThemeChange, ()=>{
      this._colorMap&&this.clear(),this._colorMap=this._themeService.getColorTheme().tokenColorMap
    }));
    const o=Math.max(1, Math.floor($c().devicePixelRatio));
    this.pageSize=Math.min(1024*o, this._maxTextureSize), this._initFirstPage(), this._register($i(()=>Bo(this._pages)))
  }
  _initFirstPage(){
    const e=this._instantiationService.createInstance(rve, 0, this.pageSize, this._allocatorType);
    this._pages.push(e);
    const t=new l3t(1, "", 1, this._decorationStyleCache);
    e.getGlyph(t, "", 0, 0), t.dispose()
  }
  clear(){
    for(const e of this._pages)e.dispose();
    this._pages.length=0, this._glyphPageIndex.clear(), this._warmedUpRasterizers.clear(), this._warmUpTask.clear(), this._initFirstPage(), this._onDidDeleteGlyphs.fire()
  }
  getGlyph(e, t, i, r, s){
    return i&=-2048, i|=Math.floor(s%1*10), this._warmedUpRasterizers.has(e.id)||(this._warmUpAtlas(e), this._warmedUpRasterizers.add(e.id)), this._tryGetGlyph(this._glyphPageIndex.get(t, i, r, e.cacheKey)??0, e, t, i, r)
  }
  _tryGetGlyph(e, t, i, r, s){
    return this._glyphPageIndex.set(e, i, r, s, t.cacheKey), this._pages[e].getGlyph(t, i, r, s)??(e+1<this._pages.length?this._tryGetGlyph(e+1, t, i, r, s):void 0)??this._getGlyphFromNewPage(t, i, r, s)
  }
  _getGlyphFromNewPage(e, t, i, r){
    if(this._pages.length>=f3o.maximumPageCount)throw new Error(`Attempt to create a texture atlas page past the limit ${f3o.maximumPageCount}`);
    return this._pages.push(this._instantiationService.createInstance(rve, this._pages.length, this.pageSize, this._allocatorType)), this._glyphPageIndex.set(this._pages.length-1, t, i, r, e.cacheKey), this._pages[this._pages.length-1].getGlyph(e, t, i, r)
  }
  getUsagePreview(){
    return Promise.all(this._pages.map(e=>e.getUsagePreview()))
  }
  getStats(){
    return this._pages.map(e=>e.getStats())
  }
  _warmUpAtlas(e){
    const t=this._colorMap;
    if(!t)throw new _m("Cannot warm atlas without color map");
    this._warmUpTask.value?.clear();
    const i=this._warmUpTask.value=new Syh;
    for(let r=65;
    r<=90;
    r++)for(const s of t.keys())i.enqueue(()=>{
      for(let o=0;
      o<1;
      o+=.1)this.getGlyph(e,String.fromCharCode(r),s<<15&16744448,0,o)
    });
    for(let r=97;
    r<=122;
    r++)for(const s of t.keys())i.enqueue(()=>{
      for(let o=0;
      o<1;
      o+=.1)this.getGlyph(e,String.fromCharCode(r),s<<15&16744448,0,o)
    });
    for(let r=33;
    r<=126;
    r++)for(const s of t.keys())i.enqueue(()=>{
      for(let o=0;
      o<1;
      o+=.1)this.getGlyph(e,String.fromCharCode(r),s<<15&16744448,0,o)
    })
  }
}, b9e=f3o=__decorate([__param(3, bo), __param(4, ln)], b9e)
}
});
function dIc(n){
  const e=()=>n.destroy();
  return{
    object:n, dispose:e, [Symbol.dispose]:e
  }
}
var GY, YOn=