// Module: out-build/vs/workbench/contrib/chat/browser/contrib/chatDynamicVariables/chatFileReference.js
// Offset: 32555114 (bundle byte offset)
// Size: 729 bytes

Yn(), Lv(), jr(), FIf(), Wt(), Z1t=class extends c0i{
  constructor(e, t, i){
    const{
      data:r
    }
    =e;
    Qb(r instanceof je, `Variable data must be an URI, got '${r}'.`), super(r, [], t, i), this.reference=e
  }
  get id(){
    return this.reference.id
  }
  get range(){
    return this.reference.range
  }
  set range(e){
    this.reference.range=e
  }
  get data(){
    return this.uri
  }
  get prefix(){
    return this.reference.prefix
  }
  get isFile(){
    return this.reference.isFile
  }
  get fullName(){
    return this.reference.fullName
  }
  get icon(){
    return this.reference.icon
  }
  get modelDescription(){
    return this.reference.modelDescription
  }
}, Z1t=__decorate([__param(1, ln), __param(2, Rr)], Z1t)
}
}), xCi, s3f, EEa=