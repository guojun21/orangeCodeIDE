// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentModel/chatPromptAttachmentModel.js
// Offset: 31093806 (bundle byte offset)
// Size: 1126 bytes

yn(), rt(), FIf(), Wt(), RSa=class extends at{
  get reference(){
    return this._reference
  }
  get references(){
    const{
      reference:e
    }
    =this, {
      errorCondition:t
    }
    =this.reference;
    return t?[]:[...e.allValidReferencesUris, e.uri]
  }
  get allSettled(){
    return this.reference.allSettled()
  }
  get topError(){
    return this.reference.topError
  }
  onUpdate(e){
    return this._register(this._onUpdate.event(e)), this
  }
  onDispose(e){
    return this._register(this._onDispose.event(e)), this
  }
  constructor(e, t){
    super(), this.initService=t, this._onUpdate=this._register(new Qe), this._onDispose=this._register(new Qe), this._onUpdate.fire=this._onUpdate.fire.bind(this._onUpdate), this._reference=this._register(this.initService.createInstance(c0i, e, [])).onUpdate(this._onUpdate.fire)
  }
  resolve(){
    return this._reference.start(), this
  }
  dispose(){
    this._onDispose.fire(), super.dispose()
  }
}, RSa=__decorate([__param(1, ln)], RSa)
}
});
function OIf(n){
  if(typeof n=="boolean")return n;
  if(typeof n=="string"){
    const e=n.trim().toLowerCase();
    return e==="true"?!0:e==="false"?!1:void 0
  }
}
var Fce, B1t=