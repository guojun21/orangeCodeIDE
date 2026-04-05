// Module: out-build/vs/platform/files/browser/htmlFileSystemProvider.js
// Offset: 2389768 (bundle byte offset)
// Size: 7832 bytes

Ht(), Yn(), Ql(), yn(), rt(), zr(), Hl(), _r(), Yr(), gde(), ns(), H3n(), jr(), kSh=class extends at{
  get capabilities(){
    return this._capabilities||(this._capabilities=18, xv&&(this._capabilities|=1024)), this._capabilities
  }
  constructor(n, e, t){
    super(), this.indexedDB=n, this.store=e, this.logService=t, this.onDidChangeCapabilities=In.None, this.extUri=xv?Iu:ySe, this._onDidChangeFileEmitter=this._register(new Qe), this.onDidChangeFile=this._onDidChangeFileEmitter.event, this._files=new Map, this._directories=new Map
  }
  async stat(n){
    try{
      const e=await this.getHandle(n);
      if(!e)throw this.createFileSystemProviderError(n,"No such file or directory, stat",Qm.FileNotFound);
      if(zde.isFileSystemFileHandle(e)){
        const t=await e.getFile();
        return{
          type:JI.File,mtime:t.lastModified,ctime:0,size:t.size
        }
      }
      return{
        type:JI.Directory,mtime:0,ctime:0,size:0
      }
    }
    catch(e){
      throw this.toFileSystemProviderError(e)
    }
  }
  async readdir(n){
    try{
      const e=await this.getDirectoryHandle(n);
      if(!e)throw this.createFileSystemProviderError(n,"No such file or directory, readdir",Qm.FileNotFound);
      const t=[];
      for await(const[i,r]of e)t.push([i,zde.isFileSystemFileHandle(r)?JI.File:JI.Directory]);
      return t
    }
    catch(e){
      throw this.toFileSystemProviderError(e)
    }
  }
  readFileStream(n, e, t){
    const i=bSe(r=>Ms.concat(r.map(s=>Ms.wrap(s))).buffer, {
      highWaterMark:10
    });
    return(async()=>{
      try{
        const r=await this.getFileHandle(n);
        if(!r)throw this.createFileSystemProviderError(n,"No such file or directory, readFile",Qm.FileNotFound);
        const s=await r.getFile();
        if(typeof e.length=="number"||typeof e.position=="number"){
          let o=new Uint8Array(await s.arrayBuffer());
          typeof e?.position=="number"&&(o=o.slice(e.position)),typeof e?.length=="number"&&(o=o.slice(0,e.length)),i.end(o)
        }
        else{
          const o=s.stream().getReader();
          let a=await o.read();
          for(;
          !a.done&&!(t.isCancellationRequested||(await i.write(a.value),t.isCancellationRequested));
          )a=await o.read();
          i.end(void 0)
        }
      }
      catch(r){
        i.error(this.toFileSystemProviderError(r)),i.end()
      }
    })(), i
  }
  async readFile(n){
    try{
      const e=await this.getFileHandle(n);
      if(!e)throw this.createFileSystemProviderError(n,"No such file or directory, readFile",Qm.FileNotFound);
      const t=await e.getFile();
      return new Uint8Array(await t.arrayBuffer())
    }
    catch(e){
      throw this.toFileSystemProviderError(e)
    }
  }
  async writeFile(n, e, t){
    try{
      let i=await this.getFileHandle(n);
      if(!t.create||!t.overwrite){
        if(i){
          if(!t.overwrite)throw this.createFileSystemProviderError(n,"File already exists, writeFile",Qm.FileExists)
        }
        else if(!t.create)throw this.createFileSystemProviderError(n,"No such file, writeFile",Qm.FileNotFound)
      }
      if(!i){
        const s=await this.getDirectoryHandle(this.extUri.dirname(n));
        if(!s)throw this.createFileSystemProviderError(n,"No such parent directory, writeFile",Qm.FileNotFound);
        if(i=await s.getFileHandle(this.extUri.basename(n),{
          create:!0
        }),!i)throw this.createFileSystemProviderError(n,"Unable to create file , writeFile",Qm.Unknown)
      }
      const r=await i.createWritable();
      await r.write(e),await r.close()
    }
    catch(i){
      throw this.toFileSystemProviderError(i)
    }
  }
  async mkdir(n){
    try{
      const e=await this.getDirectoryHandle(this.extUri.dirname(n));
      if(!e)throw this.createFileSystemProviderError(n,"No such parent directory, mkdir",Qm.FileNotFound);
      await e.getDirectoryHandle(this.extUri.basename(n),{
        create:!0
      })
    }
    catch(e){
      throw this.toFileSystemProviderError(e)
    }
  }
  async delete(n, e){
    try{
      const t=await this.getDirectoryHandle(this.extUri.dirname(n));
      if(!t)throw this.createFileSystemProviderError(n,"No such parent directory, delete",Qm.FileNotFound);
      return t.removeEntry(this.extUri.basename(n),{
        recursive:e.recursive
      })
    }
    catch(t){
      throw this.toFileSystemProviderError(t)
    }
  }
  async rename(n, e, t){
    try{
      if(this.extUri.isEqual(n,e))return;
      const i=await this.getFileHandle(n);
      if(i){
        const r=await i.getFile(),s=new Uint8Array(await r.arrayBuffer());
        await this.writeFile(e,s,{
          create:!0,overwrite:t.overwrite,unlock:!1,atomic:!1
        }),await this.delete(n,{
          recursive:!1,useTrash:!1,atomic:!1
        })
      }
      else throw this.createFileSystemProviderError(n,_(2024,null),Qm.Unavailable)
    }
    catch(i){
      throw this.toFileSystemProviderError(i)
    }
  }
  watch(n, e){
    const t=new Ut;
    return this.doWatch(n, e, t).catch(i=>this.logService.error(`[File Watcher ('FileSystemObserver')] Error: ${i} (${n})`)), t
  }
  async doWatch(n, e, t){
    if(!vBc.supported(globalThis))return;
    const i=await this.getHandle(n);
    if(!i||t.isDisposed)return;
    const r=new globalThis.FileSystemObserver(s=>{
      if(t.isDisposed)return;
      const o=[];
      for(const a of s)switch(this.logService.getLevel()===Ju.Trace&&this.logService.trace(`[File Watcher ('FileSystemObserver')] [${a.type}] ${Wo(n,...a.relativePathComponents)}`),a.type){
        case"appeared":o.push({
          resource:Wo(n,...a.relativePathComponents),type:1
        });
        break;
        case"disappeared":o.push({
          resource:Wo(n,...a.relativePathComponents),type:2
        });
        break;
        case"modified":o.push({
          resource:Wo(n,...a.relativePathComponents),type:0
        });
        break;
        case"errored":this.logService.trace(`[File Watcher ('FileSystemObserver')] errored, disposing observer (${n})`),t.dispose()
      }
      o.length&&this._onDidChangeFileEmitter.fire(o)
    });
    try{
      await r.observe(i,e.recursive?{
        recursive:!0
      }
      :void 0)
    }
    finally{
      t.isDisposed?r.disconnect():t.add($i(()=>r.disconnect()))
    }
  }
  registerFileHandle(n){
    return this.registerHandle(n, this._files)
  }
  registerDirectoryHandle(n){
    return this.registerHandle(n, this._directories)
  }
  get directories(){
    return this._directories.values()
  }
  async registerHandle(n, e){
    let t=`/${n.name}`;
    if(e.has(t)&&!await e.get(t)?.isSameEntry(n)){
      const i=QD(n.name),r=fd(n.name,i);
      let s=1;
      do t=`/${r}-${s++}${i}`;
      while(e.has(t)&&!await e.get(t)?.isSameEntry(n))
    }
    e.set(t, n);
    try{
      await this.indexedDB?.runInTransaction(this.store,"readwrite",i=>i.put(n,t))
    }
    catch(i){
      this.logService.error(i)
    }
    return je.from({
      scheme:_n.file,path:t
    })
  }
  async getHandle(n){
    let e=await this.doGetHandle(n);
    if(!e){
      const t=await this.getDirectoryHandle(this.extUri.dirname(n));
      if(t){
        const i=Iu.basename(n);
        try{
          e=await t.getFileHandle(i)
        }
        catch{
          try{
            e=await t.getDirectoryHandle(i)
          }
          catch{
            
          }
        }
      }
    }
    return e
  }
  async getFileHandle(n){
    const e=await this.doGetHandle(n);
    if(e instanceof FileSystemFileHandle)return e;
    const t=await this.getDirectoryHandle(this.extUri.dirname(n));
    try{
      return await t?.getFileHandle(Iu.basename(n))
    }
    catch{
      return
    }
  }
  async getDirectoryHandle(n){
    const e=await this.doGetHandle(n);
    if(e instanceof FileSystemDirectoryHandle)return e;
    const t=this.extUri.dirname(n);
    if(this.extUri.isEqual(t, n))return;
    const i=await this.getDirectoryHandle(t);
    try{
      return await i?.getDirectoryHandle(Iu.basename(n))
    }
    catch{
      return
    }
  }
  async doGetHandle(n){
    if(this.extUri.dirname(n).path!=="/")return;
    const e=n.path.replace(/\/$/, ""), t=this._files.get(e)??this._directories.get(e);
    if(t)return t;
    const i=await this.indexedDB?.runInTransaction(this.store, "readonly", r=>r.get(e));
    if(zde.isFileSystemHandle(i)){
      let r=await i.queryPermission()==="granted";
      try{
        r||(r=await i.requestPermission()==="granted")
      }
      catch(s){
        this.logService.error(s)
      }
      if(r)return zde.isFileSystemFileHandle(i)?this._files.set(e,i):zde.isFileSystemDirectoryHandle(i)&&this._directories.set(e,i),i
    }
    throw this.createFileSystemProviderError(n, "No file system handle registered", Qm.Unavailable)
  }
  toFileSystemProviderError(n){
    if(n instanceof V4n)return n;
    let e=Qm.Unknown;
    return n.name==="NotAllowedError"&&(n=new Error(_(2025, null)), e=Qm.Unavailable), eL(n, e)
  }
  createFileSystemProviderError(n, e, t){
    return eL(new Error(`${e} (${k6(n.path)})`), t)
  }
}
}
});
function b2(n, e){
  return n.with({
    fragment:`${e.startLineNumber},${e.startColumn}${e.endLineNumber?`-${
      e.endLineNumber
    }
    ${
      e.endColumn?`,${e.endColumn}`:""
    }
    `:""}`
  })
}
function J3n(n){
  let e;
  const t=/^L?(\d+)(?:, (\d+))?(-L?(\d+)(?:, (\d+))?)?/.exec(n.fragment);
  return t&&(e={
    startLineNumber:parseInt(t[1]), startColumn:t[2]?parseInt(t[2]):1, endLineNumber:t[4]?parseInt(t[4]):void 0, endColumn:t[4]?t[5]?parseInt(t[5]):1:void 0
  }, n=n.with({
    fragment:""
  })), {
    selection:e, uri:n
  }
}
var Ja, Fc=