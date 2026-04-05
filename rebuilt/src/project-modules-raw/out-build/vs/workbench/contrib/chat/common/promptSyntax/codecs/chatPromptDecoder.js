// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/chatPromptDecoder.js
// Offset: 31083686 (bundle byte offset)
// Size: 953 bytes

dIf(), Lv(), pSa(), Ugu(), fSa(), fIf(), ysy(), BIf=class extends V_i{
  constructor(n){
    super(new DIf(n))
  }
  onStreamData(n){
    if(n instanceof Ggn&&!this.current){
      this.current=new kSa(n);
      return
    }
    if(!this.current){
      n instanceof Cit&&this._onData.fire(n);
      return
    }
    const e=this.current.accept(n);
    switch(e.result){
      case"success":{
        const{
          nextParser:t
        }
        =e;
        t instanceof Fgu?(this._onData.fire(t),delete this.current):this.current=t;
        break
      }
      case"failure":{
        delete this.current;
        break
      }
    }
    e.wasTokenConsumed||this.onStreamData(n)
  }
  onStreamEnd(){
    try{
      if(!this.current)return;
      if(this.current instanceof kSa)return this._onData.fire(this.current.asPromptVariable());
      if(this.current instanceof ESa)return this._onData.fire(this.current.asPromptVariableWithData());
      QN(this.current,`Unknown parser object '${this.current}'`)
    }
    catch{
      
    }
    finally{
      delete this.current,super.onStreamEnd()
    }
  }
}
}
}), RIf, _sy=