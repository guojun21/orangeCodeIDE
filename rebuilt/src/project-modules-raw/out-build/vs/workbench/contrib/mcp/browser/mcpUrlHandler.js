// Module: out-build/vs/workbench/contrib/mcp/browser/mcpUrlHandler.js
// Offset: 31034560 (bundle byte offset)
// Size: 1000 bytes

Ql(), L0(), rt(), Yn(), ns(), Tgu(), Wt(), Aye(), sIf(), nSa="mcp-install", iSa=class extends at{
  static{
    this.scheme=nSa
  }
  constructor(e, t, i){
    super(), this._instaService=t, this._fileService=i, this._fileSystemProvider=new Ob(()=>this._instaService.invokeFunction(r=>{
      const s=r.get(Gr),o=new z_i;
      return this._register(s.registerProvider(nSa,o)),nSa
    })), this._register(e.registerHandler(this))
  }
  async handleURL(e, t){
    if(e.path!=="mcp/install")return!1;
    let i;
    try{
      i=JSON.parse(decodeURIComponent(e.query))
    }
    catch{
      return!1
    }
    const{
      name:r,...s
    }
    =i, o=this._fileSystemProvider.value, a=je.from({
      scheme:o,path:`/${encodeURIComponent(r)}.json`
    });
    return await this._fileService.writeFile(a, Ms.fromString(JSON.stringify(s, null, "	"))), this._instaService.createInstance($gn, void 0).pickForUrlHandler(a, !0), Promise.resolve(!0)
  }
}, iSa=__decorate([__param(0, fce), __param(1, ln), __param(2, Gr)], iSa)
}
}), jme, Igu, rSa, Dgu, Zry, Xry, Bgu, esy, tsy, nsy, isy, rsy, ssy, osy, oIf=