// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/contentProviders/promptContentsProviderBase.js
// Offset: 31091332 (bundle byte offset)
// Size: 1073 bytes

yn(), Lv(), _s(), Jgn(), Hgn(), qvh(), BSa=class extends T1t{
  constructor(){
    super(), this.onChangeEmitter=this._register(new Qe), this.onContentChangedEmitter=this._register(new Qe), this.onContentChanged=this.onContentChangedEmitter.event, this.onChangeEmitter.fire=this.onChangeEmitter.fire.bind(this.onChangeEmitter), this._register(this.onChangeEmitter.event(this.onContentsChanged, this))
  }
  onContentsChanged(n, e){
    return(e?.isCancellationRequested?Promise.reject(new vf):this.getContentsStream(n, e)).then(i=>{
      if(e?.isCancellationRequested||this.disposed)throw i.destroy(),new vf;
      this.onContentChangedEmitter.fire(i)
    }).catch(i=>{
      if(i instanceof x1t){
        this.onContentChangedEmitter.fire(i);
        return
      }
      this.onContentChangedEmitter.fire(new dSa(this.uri,i))
    }), this
  }
  start(){
    return Qb(!this.disposed, "Cannot start contents provider that was already disposed."), this.onContentsChanged("full"), this
  }
}, __decorate([wcA], BSa.prototype, "onContentsChanged", null)
}
}), Kgu, a0i, MIf=