// Module: out-build/vs/editor/contrib/find/browser/findWidgetSearchHistory.js
// Offset: 25195877 (bundle byte offset)
// Size: 1166 bytes

yn(), kr(), Ila=class{
  static{
    Het=this
  }
  static{
    this.FIND_HISTORY_KEY="workbench.find.history"
  }
  static{
    this._instance=null
  }
  static getOrCreate(e){
    return Het._instance||(Het._instance=new Het(e)), Het._instance
  }
  constructor(e){
    this.storageService=e, this.inMemoryValues=new Set, this._onDidChangeEmitter=new Qe, this.onDidChange=this._onDidChangeEmitter.event, this.load()
  }
  delete(e){
    const t=this.inMemoryValues.delete(e);
    return this.save(), t
  }
  add(e){
    return this.inMemoryValues.add(e), this.save(), this
  }
  has(e){
    return this.inMemoryValues.has(e)
  }
  clear(){
    this.inMemoryValues.clear(), this.save()
  }
  forEach(e, t){
    return this.load(), this.inMemoryValues.forEach(e)
  }
  replace(e){
    this.inMemoryValues=new Set(e), this.save()
  }
  load(){
    let e;
    const t=this.storageService.get(Het.FIND_HISTORY_KEY, 1);
    if(t)try{
      e=JSON.parse(t)
    }
    catch{
      
    }
    this.inMemoryValues=new Set(e||[])
  }
  save(){
    const e=[];
    return this.inMemoryValues.forEach(t=>e.push(t)), new Promise(t=>{
      this.storageService.store(Het.FIND_HISTORY_KEY,JSON.stringify(e),1,0),this._onDidChangeEmitter.fire(e),t()
    })
  }
}, Ila=Het=__decorate([__param(0, Hi)], Ila)
}
}), Jet, Dla, FCA=