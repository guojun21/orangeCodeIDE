// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js
// Offset: 1182632 (bundle byte offset)
// Size: 2395 bytes

oa(), ggh(), exc(), fgh=class{
  constructor(n, e, t, i, r, s, o, a, l){
    this._chunks=n, this._bom=e, this._cr=t, this._lf=i, this._crlf=r, this._containsRTL=s, this._containsUnusualLineTerminators=o, this._isBasicASCII=a, this._normalizeEOL=l
  }
  _getEOL(n){
    const e=this._cr+this._lf+this._crlf, t=this._cr+this._crlf;
    return e===0?n===1?`
`:`\r
`:t>e/2?`\r
`:`
`
  }
  create(n){
    const e=this._getEOL(n), t=this._chunks;
    if(this._normalizeEOL&&(e===`\r
`&&(this._cr>0||this._lf>0)||e===`
`&&(this._cr>0||this._crlf>0)))for(let r=0, s=t.length;
    r<s;
    r++){
      const o=t[r].buffer.replace(/\r\n|\r|\n/g,e),a=r9e(o);
      t[r]=new LVe(o,a)
    }
    const i=new bOo(t, this._bom, e, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
    return{
      textBuffer:i,disposable:i
    }
  }
  getFirstLineText(n){
    return this._chunks[0].buffer.substr(0, n).split(/\r\n|\r|\n/)[0]
  }
}, POt=class{
  constructor(){
    this.chunks=[], this.BOM="", this._hasPreviousChar=!1, this._previousChar=0, this._tmpLineStarts=[], this.cr=0, this.lf=0, this.crlf=0, this.containsRTL=!1, this.containsUnusualLineTerminators=!1, this.isBasicASCII=!0
  }
  acceptChunk(n){
    if(n.length===0)return;
    this.chunks.length===0&&Qih(n)&&(this.BOM=irh, n=n.substr(1));
    const e=n.charCodeAt(n.length-1);
    e===13||e>=55296&&e<=56319?(this._acceptChunk1(n.substr(0, n.length-1), !1), this._hasPreviousChar=!0, this._previousChar=e):(this._acceptChunk1(n, !1), this._hasPreviousChar=!1, this._previousChar=e)
  }
  _acceptChunk1(n, e){
    !e&&n.length===0||(this._hasPreviousChar?this._acceptChunk2(String.fromCharCode(this._previousChar)+n):this._acceptChunk2(n))
  }
  _acceptChunk2(n){
    const e=iaA(this._tmpLineStarts, n);
    this.chunks.push(new LVe(n, e.lineStarts)), this.cr+=e.cr, this.lf+=e.lf, this.crlf+=e.crlf, e.isBasicASCII||(this.isBasicASCII=!1, this.containsRTL||(this.containsRTL=Tze(n)), this.containsUnusualLineTerminators||(this.containsUnusualLineTerminators=Wih(n)))
  }
  finish(n=!0){
    return this._finish(), new fgh(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, n)
  }
  _finish(){
    if(this.chunks.length===0&&this._acceptChunk1("", !0), this._hasPreviousChar){
      this._hasPreviousChar=!1;
      const n=this.chunks[this.chunks.length-1];
      n.buffer+=String.fromCharCode(this._previousChar);
      const e=r9e(n.buffer);
      n.lineStarts=e,this._previousChar===13&&this.cr++
    }
  }
}
}
}), zb, nI=