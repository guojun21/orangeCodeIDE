// Module: out-build/vs/base/browser/dnd.js
// Offset: 1953959 (bundle byte offset)
// Size: 753 bytes

ri(), rt(), hF(), IIc=class extends at{
  constructor(n, e){
    super(), this._register(ei(n, "dragover", t=>{
      t.preventDefault(),this.timeout||(this.timeout=setTimeout(()=>{
        e(),this.timeout=null
      },800))
    })), ["dragleave", "drop", "dragend"].forEach(t=>{
      this._register(ei(n,t,()=>{
        this.clearDragTimeout()
      }))
    })
  }
  clearDragTimeout(){
    this.timeout&&(clearTimeout(this.timeout), this.timeout=null)
  }
  dispose(){
    super.dispose(), this.clearDragTimeout()
  }
}, fT={
  RESOURCES:"ResourceURLs", DOWNLOAD_URL:"DownloadURL", FILES:"Files", TEXT:NA.text, INTERNAL_URI_LIST:"application/vnd.code.uri-list"
}
}
});
function Iwh(n){
  r3n=n
}
function Sm(n){
  return n==="element"?Rwh.value:Bwh.value
}
function F6(){
  return r3n("element", !0)
}
var Dwh, r3n, Bwh, Rwh, mb=