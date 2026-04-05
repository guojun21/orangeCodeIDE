// Module: out-build/vs/workbench/contrib/chat/common/ignoredFiles.js
// Offset: 32555843 (bundle byte offset)
// Size: 399 bytes

rt(), Wt(), xCi=xi("languageModelIgnoredFilesService"), s3f=class{
  constructor(){
    this._providers=new Set
  }
  async fileIsIgnored(n, e){
    const t=this._providers.values().next().value;
    return t?t.isFileIgnored(n, e):!1
  }
  registerIgnoredFileProvider(n){
    return this._providers.add(n), $i(()=>{
      this._providers.delete(n)
    })
  }
}
}
}), TCi, o3f, a3f=