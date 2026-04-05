// Module: out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js
// Offset: 28050424 (bundle byte offset)
// Size: 483 bytes

jk(), aYg=class yQb{
  constructor(e, t){
    this.isDisposed=!1, this.setData=(...i)=>{
      this.writeToBubble(...i)
    }, this.readFromBubble=e, this.writeToBubble=t
  }
  get composerId(){
    return this.readFromBubble().composerId
  }
  clone(){
    return new yQb(this.readFromBubble, this.writeToBubble)
  }
  dispose(){
    this.isDisposed=!0
  }
  get data(){
    return this.readFromBubble()
  }
  [Symbol.dispose](){
    this.dispose()
  }
}
}
}), cYg, RAi, qOA=