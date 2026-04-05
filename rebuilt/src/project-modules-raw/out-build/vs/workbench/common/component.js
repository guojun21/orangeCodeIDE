// Module: out-build/vs/workbench/common/component.js
// Offset: 31113407 (bundle byte offset)
// Size: 483 bytes

Qq(), Io(), tfn=class extends NH{
  constructor(n, e, t){
    super(e), this.id=n, this.memento=new EM(this.id, t), this._register(t.onWillSaveState(()=>{
      this.saveState(),this.memento.saveMemento()
    }))
  }
  getId(){
    return this.id
  }
  getMemento(n, e){
    return this.memento.getMemento(n, e)
  }
  reloadMemento(n){
    return this.memento.reloadMemento(n)
  }
  onDidChangeMementoValue(n, e){
    return this.memento.onDidChangeValue(n, e)
  }
  saveState(){
    
  }
}
}
}), dfu, tDf, nDf, iDf=