// Module: out-build/vs/editor/browser/viewParts/viewLines/rangeUtil.js
// Offset: 1477481 (bundle byte offset)
// Size: 1802 bytes

e3t(), WOn=class{
  static _createRange(){
    return this._handyReadyRange||(this._handyReadyRange=document.createRange()), this._handyReadyRange
  }
  static _detachRange(n, e){
    n.selectNodeContents(e)
  }
  static _readClientRects(n, e, t, i, r){
    const s=this._createRange();
    try{
      return s.setStart(n,e),s.setEnd(t,i),s.getClientRects()
    }
    catch{
      return null
    }
    finally{
      this._detachRange(s,r)
    }
  }
  static _mergeAdjacentRanges(n){
    if(n.length===1)return n;
    n.sort(h9e.compare);
    const e=[];
    let t=0, i=n[0];
    for(let r=1, s=n.length;
    r<s;
    r++){
      const o=n[r];
      i.left+i.width+.9>=o.left?i.width=Math.max(i.width,o.left+o.width-i.left):(e[t++]=i,i=o)
    }
    return e[t++]=i, e
  }
  static _createHorizontalRangesFromClientRects(n, e, t){
    if(!n||n.length===0)return null;
    const i=[];
    for(let r=0, s=n.length;
    r<s;
    r++){
      const o=n[r];
      i[r]=new h9e(Math.max(0,(o.left-e)/t),o.width/t)
    }
    return this._mergeAdjacentRanges(i)
  }
  static readHorizontalRanges(n, e, t, i, r, s){
    const a=n.children.length-1;
    if(0>a)return null;
    if(e=Math.min(a, Math.max(0, e)), i=Math.min(a, Math.max(0, i)), e===i&&t===r&&t===0&&!n.children[e].firstChild){
      const m=n.children[e].getClientRects();
      return s.markDidDomLayout(),this._createHorizontalRangesFromClientRects(m,s.clientRectDeltaLeft,s.clientRectScale)
    }
    e!==i&&i>0&&r===0&&(i--, r=1073741824);
    let l=n.children[e].firstChild, u=n.children[i].firstChild;
    if((!l||!u)&&(!l&&t===0&&e>0&&(l=n.children[e-1].firstChild, t=1073741824), !u&&r===0&&i>0&&(u=n.children[i-1].firstChild, r=1073741824)), !l||!u)return null;
    t=Math.min(l.textContent.length, Math.max(0, t)), r=Math.min(u.textContent.length, Math.max(0, r));
    const d=this._readClientRects(l, t, u, r, s.endNode);
    return s.markDidDomLayout(), this._createHorizontalRangesFromClientRects(d, s.clientRectDeltaLeft, s.clientRectScale)
  }
}
}
}), lz, vTc, _vh, Cvh, HVe=