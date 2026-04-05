// Module: out-build/vs/base/common/observableInternal/lazyObservableValue.js
// Offset: 486064 (bundle byte offset)
// Size: 2073 bytes

w5e(), Fgt(), Xsh=class extends Ogt{
  get debugName(){
    return this._debugNameData.getDebugName(this)??"LazyObservableValue"
  }
  constructor(n, e, t){
    super(), this._debugNameData=n, this._equalityComparator=t, this._isUpToDate=!0, this._deltas=[], this._updateCounter=0, this._value=e
  }
  get(){
    return this._update(), this._value
  }
  _update(){
    if(!this._isUpToDate)if(this._isUpToDate=!0, this._deltas.length>0){
      for(const n of this._deltas){
        T6()?.handleObservableUpdated(this,{
          change:n,didChange:!0,oldValue:"(unknown)",newValue:this._value,hadValue:!0
        });
        for(const e of this._observers)e.handleChange(this,n)
      }
      this._deltas.length=0
    }
    else{
      T6()?.handleObservableUpdated(this,{
        change:void 0,didChange:!0,oldValue:"(unknown)",newValue:this._value,hadValue:!0
      });
      for(const n of this._observers)n.handleChange(this,void 0)
    }
  }
  _beginUpdate(){
    if(this._updateCounter++, this._updateCounter===1)for(const n of this._observers)n.beginUpdate(this)
  }
  _endUpdate(){
    if(this._updateCounter--, this._updateCounter===0){
      this._update();
      const n=[...this._observers];
      for(const e of n)e.endUpdate(this)
    }
  }
  addObserver(n){
    const e=!this._observers.has(n)&&this._updateCounter>0;
    super.addObserver(n), e&&n.beginUpdate(this)
  }
  removeObserver(n){
    const e=this._observers.has(n)&&this._updateCounter>0;
    super.removeObserver(n), e&&n.endUpdate(this)
  }
  set(n, e, t){
    if(t===void 0&&this._equalityComparator(this._value, n))return;
    let i;
    e||(e=i=new Ugt(()=>{
      
    }, ()=>`Setting ${this.debugName}`));
    try{
      if(this._isUpToDate=!1,this._setValue(n),t!==void 0&&this._deltas.push(t),e.updateObserver({
        beginUpdate:()=>this._beginUpdate(),endUpdate:()=>this._endUpdate(),handleChange:(r,s)=>{
          
        },handlePossibleChange:r=>{
          
        }
      },this),this._updateCounter>1)for(const r of this._observers)r.handlePossibleChange(this)
    }
    finally{
      i&&i.finish()
    }
  }
  toString(){
    return`${this.debugName}: ${this._value}`
  }
  _setValue(n){
    this._value=n
  }
}
}
});
function Wze(n, e){
  return n.lazy?new Xsh(new N4(n.owner, n.debugName, void 0), e, n.equalsFn??Xj):new Gze(new N4(n.owner, n.debugName, void 0), e, n.equalsFn??Xj)
}
var UnA=