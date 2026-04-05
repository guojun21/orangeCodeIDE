// Module: out-build/vs/editor/contrib/suggest/browser/suggestOvertypingCapturer.js
// Offset: 25381438 (bundle byte offset)
// Size: 983 bytes

rt(), Tyg=class iQb{
  static{
    this._maxSelectionLength=51200
  }
  constructor(e, t){
    this._disposables=new Ut, this._lastOvertyped=[], this._locked=!1, this._disposables.add(e.onWillType(()=>{
      if(this._locked||!e.hasModel())return;
      const i=e.getSelections(),r=i.length;
      let s=!1;
      for(let a=0;
      a<r;
      a++)if(!i[a].isEmpty()){
        s=!0;
        break
      }
      if(!s){
        this._lastOvertyped.length!==0&&(this._lastOvertyped.length=0);
        return
      }
      this._lastOvertyped=[];
      const o=e.getModel();
      for(let a=0;
      a<r;
      a++){
        const l=i[a];
        if(o.getValueLengthInRange(l)>iQb._maxSelectionLength)return;
        this._lastOvertyped[a]={
          value:o.getValueInRange(l),multiline:l.startLineNumber!==l.endLineNumber
        }
      }
    })), this._disposables.add(t.onDidTrigger(i=>{
      this._locked=!0
    })), this._disposables.add(t.onDidCancel(i=>{
      this._locked=!1
    }))
  }
  getLastOvertypedInfo(e){
    if(e>=0&&e<this._lastOvertyped.length)return this._lastOvertyped[e]
  }
  dispose(){
    this._disposables.dispose()
  }
}
}
}), qSA=