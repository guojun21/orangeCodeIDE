// Module: out-build/vs/workbench/common/editor/binaryEditorModel.js
// Offset: 31257841 (bundle byte offset)
// Size: 575 bytes

Xye(), ns(), hF(), bfn=class extends Uce{
  constructor(e, t, i){
    super(), this.resource=e, this.name=t, this.fileService=i, this.mime=NA.binary
  }
  getName(){
    return this.name
  }
  getSize(){
    return this.size
  }
  getMime(){
    return this.mime
  }
  getETag(){
    return this.etag
  }
  async resolve(){
    if(this.fileService.hasProvider(this.resource)){
      const e=await this.fileService.stat(this.resource);
      this.etag=e.etag,typeof e.size=="number"&&(this.size=e.size)
    }
    return super.resolve()
  }
}, bfn=__decorate([__param(2, Gr)], bfn)
}
}), nbu, ABf, Kme, vfn=