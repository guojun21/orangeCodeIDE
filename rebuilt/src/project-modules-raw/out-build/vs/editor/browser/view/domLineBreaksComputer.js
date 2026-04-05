// Module: out-build/vs/editor/browser/view/domLineBreaksComputer.js
// Offset: 1882153 (bundle byte offset)
// Size: 522 bytes

ive(), oa(), Js(), HY(), kSe(), Ffh(), Tft(), awh=nve("domLineBreaksComputer", {
  createHTML:n=>n
}), cwh=class kGb{
  static create(e){
    return new kGb(new WeakRef(e))
  }
  constructor(e){
    this.targetWindow=e
  }
  createLineBreaksComputer(e, t, i, r, s){
    const o=[], a=[];
    return{
      addRequest:(l,u,d)=>{
        o.push(l),a.push(u)
      },finalize:()=>tuA(ed(this.targetWindow.deref()),o,e,t,i,r,s,a)
    }
  }
}, (function(n){
  n[n.SPAN_MODULO_LIMIT=16384]="SPAN_MODULO_LIMIT"
})(lwh||(lwh={
  
}))
}
}), uwh, suA=