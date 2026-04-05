// Module: out-build/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js
// Offset: 1534944 (bundle byte offset)
// Size: 1389 bytes

vr(), rt(), Gvh=class extends at{
  constructor(n, e, t){
    super(), this._visibility=n, this._visibleClassName=e, this._invisibleClassName=t, this._domNode=null, this._isVisible=!1, this._isNeeded=!1, this._rawShouldBeVisible=!1, this._shouldBeVisible=!1, this._revealTimer=this._register(new O$)
  }
  setVisibility(n){
    this._visibility!==n&&(this._visibility=n, this._updateShouldBeVisible())
  }
  setShouldBeVisible(n){
    this._rawShouldBeVisible=n, this._updateShouldBeVisible()
  }
  _applyVisibilitySetting(){
    return this._visibility===2?!1:this._visibility===3?!0:this._rawShouldBeVisible
  }
  _updateShouldBeVisible(){
    const n=this._applyVisibilitySetting();
    this._shouldBeVisible!==n&&(this._shouldBeVisible=n, this.ensureVisibility())
  }
  setIsNeeded(n){
    this._isNeeded!==n&&(this._isNeeded=n, this.ensureVisibility())
  }
  setDomNode(n){
    this._domNode=n, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(!1)
  }
  ensureVisibility(){
    if(!this._isNeeded){
      this._hide(!1);
      return
    }
    this._shouldBeVisible?this._reveal():this._hide(!0)
  }
  _reveal(){
    this._isVisible||(this._isVisible=!0, this._revealTimer.setIfNotSet(()=>{
      this._domNode?.setClassName(this._visibleClassName)
    }, 0))
  }
  _hide(n){
    this._revealTimer.cancel(), this._isVisible&&(this._isVisible=!1, this._domNode?.setClassName(this._invisibleClassName+(n?" fade":"")))
  }
}
}
}), Wvh, TTc, Qvh=