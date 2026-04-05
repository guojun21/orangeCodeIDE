// Module: out-build/vs/editor/browser/widget/codeEditor/codeEditorContributions.js
// Offset: 1882675 (bundle byte offset)
// Size: 2260 bytes

ri(), _s(), rt(), uwh=class extends at{
  constructor(){
    super(), this._editor=null, this._instantiationService=null, this._instances=this._register(new mp), this._pending=new Map, this._finishedInstantiation=[], this._finishedInstantiation[0]=!1, this._finishedInstantiation[1]=!1, this._finishedInstantiation[2]=!1, this._finishedInstantiation[3]=!1
  }
  initialize(n, e, t){
    this._editor=n, this._instantiationService=t;
    for(const i of e){
      if(this._pending.has(i.id)){
        Gc(new Error(`Cannot have two contributions with the same id ${i.id}`));
        continue
      }
      this._pending.set(i.id,i)
    }
    this._instantiateSome(0), this._register(Dte(As(this._editor.getDomNode()), ()=>{
      this._instantiateSome(1)
    })), this._register(Dte(As(this._editor.getDomNode()), ()=>{
      this._instantiateSome(2)
    })), this._register(Dte(As(this._editor.getDomNode()), ()=>{
      this._instantiateSome(3)
    }, 5e3))
  }
  saveViewState(){
    const n={
      
    };
    for(const[e, t]of this._instances)typeof t.saveViewState=="function"&&(n[e]=t.saveViewState());
    return n
  }
  restoreViewState(n){
    for(const[e, t]of this._instances)typeof t.restoreViewState=="function"&&t.restoreViewState(n[e])
  }
  get(n){
    return this._instantiateById(n), this._instances.get(n)||null
  }
  set(n, e){
    this._instances.set(n, e)
  }
  onBeforeInteractionEvent(){
    this._instantiateSome(2)
  }
  onAfterModelAttached(){
    return Dte(As(this._editor?.getDomNode()), ()=>{
      this._instantiateSome(1)
    }, 50)
  }
  _instantiateSome(n){
    if(this._finishedInstantiation[n])return;
    this._finishedInstantiation[n]=!0;
    const e=this._findPendingContributionsByInstantiation(n);
    for(const t of e)this._instantiateById(t.id)
  }
  _findPendingContributionsByInstantiation(n){
    const e=[];
    for(const[, t]of this._pending)t.instantiation===n&&e.push(t);
    return e
  }
  _instantiateById(n){
    const e=this._pending.get(n);
    if(e){
      if(this._pending.delete(n),!this._instantiationService||!this._editor)throw new Error("Cannot instantiate contributions before being initialized!");
      try{
        const t=this._instantiationService.createInstance(e.ctor,this._editor);
        this._instances.set(e.id,t),typeof t.restoreViewState=="function"&&e.instantiation!==0&&console.warn(`Editor contribution '${e.id}' should be eager instantiated because it uses saveViewState / restoreViewState.`)
      }
      catch(t){
        Gc(t)
      }
    }
  }
}
}
}), ouA=