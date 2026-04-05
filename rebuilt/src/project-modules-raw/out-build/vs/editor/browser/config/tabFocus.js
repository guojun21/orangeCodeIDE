// Module: out-build/vs/editor/browser/config/tabFocus.js
// Offset: 1458442 (bundle byte offset)
// Size: 621 bytes

yn(), cvh=class{
  constructor(){
    this._tabFocus=!1, this._onDidChangeTabFocus=new Qe, this.onDidChangeTabFocus=this._onDidChangeTabFocus.event
  }
  getTabFocusMode(){
    return this._tabFocus
  }
  setTabFocusMode(n){
    this._tabFocus=n, this._onDidChangeTabFocus.fire(this._tabFocus)
  }
}, OSe=new cvh
}
});
function ncA(n){
  let e=0;
  for(;
  n;
  )n=Math.floor(n/10), e++;
  return e||1
}
function icA(){
  let n="";
  return!kte&&!lih&&(n+="no-user-select "), kte&&(n+="no-minimap-shadow ", n+="enable-user-select "), Fs&&(n+="mac "), n
}
function lvh(n){
  const e=mh(n);
  return tcA(e), e
}
var HOn, uvh, dvh, KOt, hvh=