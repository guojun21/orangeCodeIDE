// Module: out-build/vs/base/browser/keyboardEvent.js
// Offset: 313475 (bundle byte offset)
// Size: 2195 bytes

Ay(), G_(), hde(), _r(), Tih=Fs?256:2048, Iih=512, Dih=1024, Bih=Fs?2048:256, vh=class{
  constructor(n){
    this._standardKeyboardEventBrand=!0;
    const e=n;
    this.browserEvent=e, this.target=e.target, this.ctrlKey=e.ctrlKey, this.shiftKey=e.shiftKey, this.altKey=e.altKey, this.metaKey=e.metaKey, this.altGraphKey=e.getModifierState?.("AltGraph"), this.keyCode=btA(e), this.code=e.code, this.ctrlKey=this.ctrlKey||this.keyCode===5, this.altKey=this.altKey||this.keyCode===6, this.shiftKey=this.shiftKey||this.keyCode===4, this.metaKey=this.metaKey||this.keyCode===57, this._asKeybinding=this._computeKeybinding(), this._asKeyCodeChord=this._computeKeyCodeChord()
  }
  preventDefault(){
    this.browserEvent&&this.browserEvent.preventDefault&&this.browserEvent.preventDefault()
  }
  stopPropagation(){
    this.browserEvent&&this.browserEvent.stopPropagation&&this.browserEvent.stopPropagation()
  }
  toKeyCodeChord(){
    return this._asKeyCodeChord
  }
  equals(n){
    return this._asKeybinding===n
  }
  _computeKeybinding(){
    let n=0;
    this.keyCode!==5&&this.keyCode!==4&&this.keyCode!==6&&this.keyCode!==57&&(n=this.keyCode);
    let e=0;
    return this.ctrlKey&&(e|=Tih), this.altKey&&(e|=Iih), this.shiftKey&&(e|=Dih), this.metaKey&&(e|=Bih), e|=n, e
  }
  _computeKeyCodeChord(){
    let n=0;
    return this.keyCode!==5&&this.keyCode!==4&&this.keyCode!==6&&this.keyCode!==57&&(n=this.keyCode), new _Y(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, n)
  }
}
}
});
function ytA(n){
  if(!n.parent||n.parent===n)return null;
  try{
    const e=n.location, t=n.parent.location;
    if(e.origin!=="null"&&t.origin!=="null"&&e.origin!==t.origin)return null
  }
  catch{
    return null
  }
  return n.parent
}
async function Rih(n, e){
  if(!crypto.subtle)throw new Error("'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  const t=JSON.stringify({
    parentOrigin:n, salt:e
  }), r=new TextEncoder().encode(t), s=await crypto.subtle.digest("sha-256", r);
  return wtA(s)
}
function wtA(n){
  const t=Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2, "0")).join("");
  return BigInt(`0x${t}`).toString(32).padStart(52, "0")
}
var M0c, Pih, F0c=