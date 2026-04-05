// Module: out-build/vs/base/common/keybindings.js
// Offset: 310422 (bundle byte offset)
// Size: 3053 bytes

_s(), (function(n){
  n[n.CtrlCmd=2048]="CtrlCmd", n[n.Shift=1024]="Shift", n[n.Alt=512]="Alt", n[n.WinCtrl=256]="WinCtrl", n[n.KeyCode=255]="KeyCode"
})(Eih||(Eih={
  
})), _Y=class iJb{
  constructor(e, t, i, r, s){
    this.ctrlKey=e, this.shiftKey=t, this.altKey=i, this.metaKey=r, this.keyCode=s
  }
  equals(e){
    return e instanceof iJb&&this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.keyCode===e.keyCode
  }
  getHashCode(){
    const e=this.ctrlKey?"1":"0", t=this.shiftKey?"1":"0", i=this.altKey?"1":"0", r=this.metaKey?"1":"0";
    return`K${e}${t}${i}${r}${this.keyCode}`
  }
  isModifierKey(){
    return this.keyCode===0||this.keyCode===5||this.keyCode===57||this.keyCode===6||this.keyCode===4
  }
  toKeybinding(){
    return new lgt([this])
  }
  isDuplicateModifierCase(){
    return this.ctrlKey&&this.keyCode===5||this.shiftKey&&this.keyCode===4||this.altKey&&this.keyCode===6||this.metaKey&&this.keyCode===57
  }
}, u5e=class rJb{
  constructor(e, t, i, r, s){
    this.ctrlKey=e, this.shiftKey=t, this.altKey=i, this.metaKey=r, this.scanCode=s
  }
  equals(e){
    return e instanceof rJb&&this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.scanCode===e.scanCode
  }
  getHashCode(){
    const e=this.ctrlKey?"1":"0", t=this.shiftKey?"1":"0", i=this.altKey?"1":"0", r=this.metaKey?"1":"0";
    return`S${e}${t}${i}${r}${this.scanCode}`
  }
  isDuplicateModifierCase(){
    return this.ctrlKey&&(this.scanCode===157||this.scanCode===161)||this.shiftKey&&(this.scanCode===158||this.scanCode===162)||this.altKey&&(this.scanCode===159||this.scanCode===163)||this.metaKey&&(this.scanCode===160||this.scanCode===164)
  }
}, lgt=class{
  constructor(n){
    if(n.length===0)throw uw("chords");
    this.chords=n
  }
  getHashCode(){
    let n="";
    for(let e=0, t=this.chords.length;
    e<t;
    e++)e!==0&&(n+=";"), n+=this.chords[e].getHashCode();
    return n
  }
  equals(n){
    if(n===null||this.chords.length!==n.chords.length)return!1;
    for(let e=0;
    e<this.chords.length;
    e++)if(!this.chords[e].equals(n.chords[e]))return!1;
    return!0
  }
}, xih=class{
  constructor(n, e, t, i, r, s){
    this.ctrlKey=n, this.shiftKey=e, this.altKey=t, this.metaKey=i, this.keyLabel=r, this.keyAriaLabel=s
  }
}, N0c=class{
  
}
}
});
function btA(n){
  if(n.charCode){
    const t=String.fromCharCode(n.charCode).toUpperCase();
    return jN.fromString(t)
  }
  const e=n.keyCode;
  if(e===3)return 7;
  if(u3)switch(e){
    case 59:return 85;
    case 60:if(xv)return 97;
    break;
    case 61:return 86;
    case 107:return 109;
    case 109:return 111;
    case 173:return 88;
    case 224:if(Fs)return 57;
    break
  }
  else if(wze){
    if(Fs&&e===93)return 57;
    if(!Fs&&e===92)return 57
  }
  return B0c[e]||0
}
function vtA(n){
  const e=[];
  return n.ctrlKey&&e.push("ctrl"), n.shiftKey&&e.push("shift"), n.altKey&&e.push("alt"), n.metaKey&&e.push("meta"), `modifiers: [${e.join(",")}], code: ${n.code}, keyCode: ${n.keyCode}, key: ${n.key}`
}
function AtA(n){
  const e=[];
  return n.ctrlKey&&e.push("ctrl"), n.shiftKey&&e.push("shift"), n.altKey&&e.push("alt"), n.metaKey&&e.push("meta"), `modifiers: [${e.join(",")}], code: ${n.code}, keyCode: ${n.keyCode} ('${jN.toString(n.keyCode)}')`
}
var Tih, Iih, Dih, Bih, vh, Tb=