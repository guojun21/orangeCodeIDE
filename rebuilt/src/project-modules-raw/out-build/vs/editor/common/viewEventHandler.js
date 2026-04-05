// Module: out-build/vs/editor/common/viewEventHandler.js
// Offset: 1472090 (bundle byte offset)
// Size: 1903 bytes

rt(), qVe=class extends at{
  constructor(){
    super(), this._shouldRender=!0
  }
  shouldRender(){
    return this._shouldRender
  }
  forceShouldRender(){
    this._shouldRender=!0
  }
  setShouldRender(){
    this._shouldRender=!0
  }
  onDidRender(){
    this._shouldRender=!1
  }
  onCompositionStart(n){
    return!1
  }
  onCompositionEnd(n){
    return!1
  }
  onConfigurationChanged(n){
    return!1
  }
  onCursorStateChanged(n){
    return!1
  }
  onDecorationsChanged(n){
    return!1
  }
  onFlushed(n){
    return!1
  }
  onFocusChanged(n){
    return!1
  }
  onLanguageConfigurationChanged(n){
    return!1
  }
  onLineMappingChanged(n){
    return!1
  }
  onLinesChanged(n){
    return!1
  }
  onLinesDeleted(n){
    return!1
  }
  onLinesInserted(n){
    return!1
  }
  onRevealRangeRequest(n){
    return!1
  }
  onScrollChanged(n){
    return!1
  }
  onThemeChanged(n){
    return!1
  }
  onTokensChanged(n){
    return!1
  }
  onTokensColorsChanged(n){
    return!1
  }
  onZonesChanged(n){
    return!1
  }
  handleEvents(n){
    let e=!1;
    for(let t=0, i=n.length;
    t<i;
    t++){
      const r=n[t];
      switch(r.type){
        case 0:this.onCompositionStart(r)&&(e=!0);
        break;
        case 1:this.onCompositionEnd(r)&&(e=!0);
        break;
        case 2:this.onConfigurationChanged(r)&&(e=!0);
        break;
        case 3:this.onCursorStateChanged(r)&&(e=!0);
        break;
        case 4:this.onDecorationsChanged(r)&&(e=!0);
        break;
        case 5:this.onFlushed(r)&&(e=!0);
        break;
        case 6:this.onFocusChanged(r)&&(e=!0);
        break;
        case 7:this.onLanguageConfigurationChanged(r)&&(e=!0);
        break;
        case 8:this.onLineMappingChanged(r)&&(e=!0);
        break;
        case 9:this.onLinesChanged(r)&&(e=!0);
        break;
        case 10:this.onLinesDeleted(r)&&(e=!0);
        break;
        case 11:this.onLinesInserted(r)&&(e=!0);
        break;
        case 12:this.onRevealRangeRequest(r)&&(e=!0);
        break;
        case 13:this.onScrollChanged(r)&&(e=!0);
        break;
        case 15:this.onTokensChanged(r)&&(e=!0);
        break;
        case 14:this.onThemeChanged(r)&&(e=!0);
        break;
        case 16:this.onTokensColorsChanged(r)&&(e=!0);
        break;
        case 17:this.onZonesChanged(r)&&(e=!0);
        break;
        default:console.info("View received unknown event: "),console.info(r)
      }
    }
    e&&(this._shouldRender=!0)
  }
}
}
}), yW, Avh, tve, j$=