// Module: out-build/vs/editor/contrib/suggest/browser/suggestCommitCharacters.js
// Offset: 25362053 (bundle byte offset)
// Size: 1047 bytes

Vs(), rt(), U4t(), wyg=class{
  constructor(n, e, t, i, r){
    this._disposables=new Ut, this._disposables.add(i.onDidSuggest(s=>{
      s.completionModel.items.length===0&&this.reset()
    })), this._disposables.add(i.onDidCancel(s=>{
      this.reset()
    })), this._disposables.add(t.onDidShow(()=>this._onItem(t.getFocusedItem()))), this._disposables.add(t.onDidFocus(this._onItem, this)), this._disposables.add(t.onDidHide(this.reset, this)), this._disposables.add(n.onWillType(s=>{
      if(this._active&&!t.isFrozen()&&i.state!==0){
        const o=s.charCodeAt(s.length-1);
        this._active.acceptCharacters.has(o)&&n.getOption(0)&&r(this._active.item)
      }
    }))
  }
  _onItem(n){
    if(!n||!q_(n.item.completion.commitCharacters)){
      this.reset();
      return
    }
    if(this._active&&this._active.item.item===n.item)return;
    const e=new p4n;
    for(const t of n.item.completion.commitCharacters)t.length>0&&e.add(t.charCodeAt(0));
    this._active={
      acceptCharacters:e,item:n
    }
  }
  reset(){
    this._active=void 0
  }
  dispose(){
    this._disposables.dispose()
  }
}
}
}), cjl, _yg=