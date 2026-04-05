// Module: out-build/vs/platform/reactivestorage/common/reactiveStorageTypes2.js
// Offset: 1049776 (bundle byte offset)
// Size: 1746 bytes

Bc(), Z5e=class{
  constructor(){
    this.id=Wr(), this._textValue="", this._richTextValue=void 0, this._textListeners=new Map, this._editNodeListeners=new Map, this._submitListeners=new Map, this._focusListeners=new Map, this.forceFocus=()=>{
      
    }, this._clearListeners=new Map
  }
  setForceFocusNoScroll(n){
    this.forceFocus=n
  }
  doForceFocusNoScroll(){
    this.forceFocus()
  }
  onTextChange(n){
    const e=Wr();
    return this._textListeners.set(e, n), ()=>{
      this._textListeners.delete(e)
    }
  }
  onFireEditNode(n){
    const e=Wr();
    return this._editNodeListeners.set(e, n), ()=>{
      this._editNodeListeners.delete(e)
    }
  }
  getText(){
    return this._textValue
  }
  getRichText(){
    return this._richTextValue
  }
  setText(n, e){
    if(!(n===this._textValue&&e===this._richTextValue)){
      this._textValue=n,this._richTextValue=e;
      for(const t of this._textListeners.values())t(n,e)
    }
  }
  fireEditNode(n){
    for(const e of this._editNodeListeners.values())e(n)
  }
  numSubmitListeners(){
    return this._submitListeners.size
  }
  onSubmit(n){
    const e=Wr();
    return this._submitListeners.set(e, n), ()=>{
      this._submitListeners.delete(e)
    }
  }
  submit(){
    for(const n of this._submitListeners.values())n()
  }
  onFocus(n){
    const e=Wr();
    return this._focusListeners.set(e, n), ()=>{
      this._focusListeners.delete(e)
    }
  }
  notifyFocus(){
    for(const n of this._focusListeners.values())n()
  }
  clear(){
    this._textValue="";
    for(const n of this._clearListeners.values())n()
  }
  onClear(n){
    const e=Wr();
    return this._clearListeners.set(e, n), ()=>{
      this._clearListeners.delete(e)
    }
  }
}
}
});
function CoA(n){
  return n&&typeof n.read=="function"
}
function SEc(n){
  return!!(n&&n.uri)
}
function sRe(n){
  return!n.isTooLargeForSyncing()&&!n.isForSimpleWidget&&!n.skipLSPSync
}
var Tx, G$, Xmh, eph, UH, tph, nph, iph, nOo, SOt, rph, sph, oph, aph, sOn, cph, lph, xw=