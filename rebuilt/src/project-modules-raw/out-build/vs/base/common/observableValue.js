// Module: out-build/vs/base/common/observableValue.js
// Offset: 28032639 (bundle byte offset)
// Size: 725 bytes

wye=class{
  constructor(){
    this.listeners=new Set, this.state={
      state:"pending"
    }, this.writeVersion=0
  }
  onChange(n){
    return this.listeners.add(n), {
      dispose:()=>{
        this.listeners.delete(n)
      }
    }
  }
  notifyListeners(){
    for(const n of this.listeners)n(this.state)
  }
  getState(){
    return this.state
  }
  set(n){
    const e=++this.writeVersion;
    return this.state={
      state:"fulfilled",value:n
    }, this.notifyListeners(), {
      dispose:()=>{
        this.writeVersion===e&&this.clear()
      }
    }
  }
  error(n){
    this.writeVersion++, this.state={
      state:"rejected",error:n
    }, this.notifyListeners()
  }
  clear(){
    this.writeVersion++, this.state={
      state:"pending"
    }, this.notifyListeners()
  }
}
}
});
function Of(n){
  return n<Dou?Dou:n>Bou?Bou:n
}
var Dou, Bou, Tme=