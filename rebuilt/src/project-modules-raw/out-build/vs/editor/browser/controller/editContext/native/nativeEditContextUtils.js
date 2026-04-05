// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContextUtils.js
// Offset: 1841024 (bundle byte offset)
// Size: 829 bytes

ri(), rt(), ewh=class extends at{
  constructor(n, e){
    super(), this._domNode=n, this._onFocusChange=e, this._isFocused=!1, this._isPaused=!1, this._register(ei(this._domNode, "focus", ()=>{
      this._isPaused||this.refreshFocusState()
    })), this._register(ei(this._domNode, "blur", ()=>{
      this._isPaused||this._handleFocusedChanged(!1)
    }))
  }
  pause(){
    this._isPaused=!0
  }
  resume(){
    this._isPaused=!1, this.refreshFocusState()
  }
  _handleFocusedChanged(n){
    this._isFocused!==n&&(this._isFocused=n, this._onFocusChange(this._isFocused))
  }
  focus(){
    this._domNode.focus(), this.refreshFocusState()
  }
  refreshFocusState(){
    const n=Qze(this._domNode), e=n?n.activeElement:_C(), t=this._domNode===e;
    this._handleFocusedChanged(t)
  }
  get isFocused(){
    return this._isFocused
  }
}
}
}), w3o, zlA=