// Module: out-build/vs/editor/browser/config/charWidthReader.js
// Offset: 1445124 (bundle byte offset)
// Size: 1561 bytes

HY(), (function(n){
  n[n.Regular=0]="Regular", n[n.Italic=1]="Italic", n[n.Bold=2]="Bold"
})(tvh||(tvh={
  
})), nvh=class{
  constructor(n, e){
    this.chr=n, this.type=e, this.width=0
  }
  fulfill(n){
    this.width=n
  }
}, ivh=class hGb{
  constructor(e, t){
    this._bareFontInfo=e, this._requests=t, this._container=null, this._testElements=null
  }
  read(e){
    this._createDomElements(), e.document.body.appendChild(this._container), this._readFromDomElements(), this._container?.remove(), this._container=null, this._testElements=null
  }
  _createDomElements(){
    const e=document.createElement("div");
    e.style.position="absolute", e.style.top="-50000px", e.style.width="50000px";
    const t=document.createElement("div");
    bF(t, this._bareFontInfo), e.appendChild(t);
    const i=document.createElement("div");
    bF(i, this._bareFontInfo), i.style.fontWeight="bold", e.appendChild(i);
    const r=document.createElement("div");
    bF(r, this._bareFontInfo), r.style.fontStyle="italic", e.appendChild(r);
    const s=[];
    for(const o of this._requests){
      let a;
      o.type===0&&(a=t),o.type===2&&(a=i),o.type===1&&(a=r),a.appendChild(document.createElement("br"));
      const l=document.createElement("span");
      hGb._render(l,o),a.appendChild(l),s.push(l)
    }
    this._container=e, this._testElements=s
  }
  static _render(e, t){
    if(t.chr===" "){
      let i="\xA0";
      for(let r=0;
      r<8;
      r++)i+=i;
      e.innerText=i
    }
    else{
      let i=t.chr;
      for(let r=0;
      r<8;
      r++)i+=i;
      e.textContent=i
    }
  }
  _readFromDomElements(){
    for(let e=0, t=this._requests.length;
    e<t;
    e++){
      const i=this._requests[e],r=this._testElements[e];
      i.fulfill(r.offsetWidth/256)
    }
  }
}
}
}), Ude, ZOo=