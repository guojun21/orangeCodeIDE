// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/parsers/basePromptParser.js
// Offset: 31085303 (bundle byte offset)
// Size: 6029 bytes

usy(), Yn(), _sy(), yn(), Csy(), ts(), Js(), vr(), jr(), Hgu(), Yr(), Lv(), Yye(), Jgn(), Wt(), fSa(), Hgn(), jgn=class extends T1t{
  onUpdate(e){
    return this._register(this._onUpdate.event(e)), this
  }
  get errorCondition(){
    return this._errorCondition
  }
  get resolveFailed(){
    if(this.firstParseResult.gotFirstResult)return!!this._errorCondition
  }
  async settled(){
    return Qb(this.started, "Cannot wait on the parser that did not start yet."), await this.firstParseResult.promise, this.errorCondition?this:(egt(this.stream, "No stream reference found."), await this.stream.settled, this)
  }
  async allSettled(){
    return await this.settled(), await Promise.allSettled(this.references.map(e=>e.allSettled())), this
  }
  constructor(e, t=[], i, r){
    if(super(), this.promptContentsProvider=e, this.instantiationService=i, this.logService=r, this._references=[], this._onUpdate=this._register(new Qe), this.firstParseResult=new PIf, this.started=!1, this._onUpdate.fire=this._onUpdate.fire.bind(this._onUpdate), t.includes(this.uri.path))return t.push(this.uri.path), this._errorCondition=new hSa(this.uri, t), this._onUpdate.fire(), this.firstParseResult.complete(), this;
    t.push(this.uri.path), this._register(this.promptContentsProvider.onContentChanged(s=>{
      this.onContentsChanged(s,t),this.firstParseResult.complete()
    })), this.promptContentsProvider.onDispose(this.dispose.bind(this))
  }
  onContentsChanged(e, t){
    if(this.stream?.dispose(), delete this.stream, delete this._errorCondition, this.disposeReferences(), e instanceof x1t){
      this._errorCondition=e,this._onUpdate.fire();
      return
    }
    if(this.stream=RIf.decode(e), this.stream.on("error", this.onStreamEnd.bind(this, this.stream)), this.stream.on("end", this.onStreamEnd.bind(this, this.stream)), this.stream.on("data", i=>{
      if(i instanceof Y_i)try{
        this.onReference(o0i.from(i),[...t])
      }
      catch{
        
      }
      i instanceof Cit&&!i.isURL&&this.onReference(i,[...t])
    }), this.stream.disposed){
      this.logService.warn(`[prompt parser][${ca(this.uri)}] cannot start stream that has been already disposed, aborting`);
      return
    }
    this.stream.start()
  }
  onReference(e, t){
    const i=Iu.resolvePath(this.dirname, e.path), r=this.promptContentsProvider.createNew({
      uri:i
    }), s=this.instantiationService.createInstance(DSa, r, e, t);
    return s.onDispose(r.dispose.bind(r)), this._references.push(s), s.onUpdate(this._onUpdate.fire), this._onUpdate.fire(), s.start(), this
  }
  onStreamEnd(e, t){
    return t&&this.logService.warn(`[prompt parser][${ca(this.uri)}] received an error on the chat prompt decoder stream: ${t}`), this._onUpdate.fire(), this
  }
  disposeReferences(){
    for(const e of[...this._references])e.dispose();
    this._references.length=0
  }
  start(){
    return this.started?this:(this.started=!0, this.errorCondition?this:(this.promptContentsProvider.start(), this))
  }
  get uri(){
    return this.promptContentsProvider.uri
  }
  get dirname(){
    return je.joinPath(this.uri, "..")
  }
  get references(){
    return[...this._references]
  }
  get allReferences(){
    const e=[];
    for(const t of this.references)e.push(t), t.type==="file"&&e.push(...t.allReferences);
    return e
  }
  get allValidReferences(){
    return this.allReferences.filter(e=>{
      const{
        errorCondition:t
      }
      =e;
      return t?t instanceof mSa?!1:t instanceof Nqe:!0
    })
  }
  get allValidReferencesUris(){
    return this.allValidReferences.map(e=>e.uri)
  }
  get errors(){
    const e=[];
    for(const t of this.references){
      const{
        errorCondition:i
      }
      =t;
      i&&!(i instanceof Nqe)&&e.push(i)
    }
    return e
  }
  get allErrors(){
    const e=[];
    for(const t of this.references){
      const{
        errorCondition:i
      }
      =t;
      i&&!(i instanceof Nqe)&&e.push({
        originalError:i,parentUri:this.uri
      }),e.push(...t.allErrors)
    }
    return e
  }
  get topError(){
    if(this.errorCondition)return new Mgu({
      errorSubject:"root",errorsCount:1,originalError:this.errorCondition
    });
    const e=[...this.errors], t=[];
    for(const u of this.references)t.push(...u.allErrors);
    if(e.length===0&&t.length===0)return;
    const i=e[0], r=t[0], s=i!==void 0, o=s?{
      originalError:i,parentUri:this.uri
    }
    :r, a=e.length+t.length, l=s?"child":"indirect-child";
    return new Mgu({
      errorSubject:l,originalError:o.originalError,parentUri:o.parentUri,errorsCount:a
    })
  }
  sameUri(e){
    return this.uri.toString()===e.toString()
  }
  get isPromptFile(){
    return Lqe(this.uri)
  }
  toString(){
    return`prompt:${this.uri.path}`
  }
  dispose(){
    this.disposed||(this.disposeReferences(), this.stream?.dispose(), this._onUpdate.fire(), super.dispose())
  }
}, jgn=__decorate([__param(2, ln), __param(3, Rr)], jgn), DSa=class extends T1t{
  constructor(e, t, i=[], r){
    super(), this.promptContentsProvider=e, this.token=t, this.range=Zt.lift(this.token.range), this.path=this.token.path, this.text=this.token.text, this.parser=this._register(r.createInstance(jgn, this.promptContentsProvider, i))
  }
  get linkRange(){
    if(this.token instanceof o0i)return this.token.dataRange;
    if(this.token instanceof Cit)return this.token.linkRange
  }
  get type(){
    if(this.token instanceof o0i||this.token instanceof Cit)return"file";
    QN(this.token, `Unknown token type '${this.token}'.`)
  }
  get subtype(){
    if(this.token instanceof o0i)return"prompt";
    if(this.token instanceof Cit)return"markdown";
    QN(this.token, `Unknown token type '${this.token}'.`)
  }
  start(){
    return this.parser.start(), this
  }
  onUpdate(e){
    return this.parser.onUpdate(e), this
  }
  get resolveFailed(){
    return this.parser.resolveFailed
  }
  get errorCondition(){
    return this.parser.errorCondition
  }
  get topError(){
    return this.parser.topError
  }
  get uri(){
    return this.parser.uri
  }
  get isPromptFile(){
    return this.parser.isPromptFile
  }
  get errors(){
    return this.parser.errors
  }
  get allErrors(){
    return this.parser.allErrors
  }
  get references(){
    return this.parser.references
  }
  get allReferences(){
    return this.parser.allReferences
  }
  get allValidReferences(){
    return this.parser.allValidReferences
  }
  async settled(){
    return await this.parser.settled(), this
  }
  async allSettled(){
    return await this.parser.allSettled(), this
  }
  toString(){
    return`prompt-reference/${this.type}:${this.subtype}/${this.token}`
  }
}, DSa=__decorate([__param(3, ln)], DSa), PIf=class extends wy{
  constructor(){
    super(...arguments), this._gotResult=!1
  }
  get gotFirstResult(){
    return this._gotResult
  }
  get promise(){
    return this.p
  }
  complete(){
    return this._gotResult=!0, super.complete(void 0)
  }
}
}
}), BSa, NIf=