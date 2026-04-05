// Module: out-build/vs/editor/common/viewModel/overviewZoneManager.js
// Offset: 1721299 (bundle byte offset)
// Size: 2697 bytes

(function(n){
  n[n.MINIMUM_HEIGHT=4]="MINIMUM_HEIGHT"
})(ryh||(ryh={
  
})), tIc=class{
  constructor(n, e, t){
    this._colorZoneBrand=void 0, this.from=n|0, this.to=e|0, this.colorId=t|0
  }
  static compare(n, e){
    return n.colorId===e.colorId?n.from===e.from?n.to-e.to:n.from-e.from:n.colorId-e.colorId
  }
}, nIc=class{
  constructor(n, e, t, i){
    this._overviewRulerZoneBrand=void 0, this.startLineNumber=n, this.endLineNumber=e, this.heightInLines=t, this.color=i, this._colorZone=null
  }
  static compare(n, e){
    return n.color===e.color?n.startLineNumber===e.startLineNumber?n.heightInLines===e.heightInLines?n.endLineNumber-e.endLineNumber:n.heightInLines-e.heightInLines:n.startLineNumber-e.startLineNumber:n.color<e.color?-1:1
  }
  setColorZone(n){
    this._colorZone=n
  }
  getColorZones(){
    return this._colorZone
  }
}, syh=class{
  constructor(n){
    this._getVerticalOffsetForLine=n, this._zones=[], this._colorZonesInvalid=!1, this._lineHeight=0, this._domWidth=0, this._domHeight=0, this._outerHeight=0, this._pixelRatio=1, this._lastAssignedId=0, this._color2Id=Object.create(null), this._id2Color=[]
  }
  getId2Color(){
    return this._id2Color
  }
  setZones(n){
    this._zones=n, this._zones.sort(nIc.compare)
  }
  setLineHeight(n){
    return this._lineHeight===n?!1:(this._lineHeight=n, this._colorZonesInvalid=!0, !0)
  }
  setPixelRatio(n){
    this._pixelRatio=n, this._colorZonesInvalid=!0
  }
  getDOMWidth(){
    return this._domWidth
  }
  getCanvasWidth(){
    return this._domWidth*this._pixelRatio
  }
  setDOMWidth(n){
    return this._domWidth===n?!1:(this._domWidth=n, this._colorZonesInvalid=!0, !0)
  }
  getDOMHeight(){
    return this._domHeight
  }
  getCanvasHeight(){
    return this._domHeight*this._pixelRatio
  }
  setDOMHeight(n){
    return this._domHeight===n?!1:(this._domHeight=n, this._colorZonesInvalid=!0, !0)
  }
  getOuterHeight(){
    return this._outerHeight
  }
  setOuterHeight(n){
    return this._outerHeight===n?!1:(this._outerHeight=n, this._colorZonesInvalid=!0, !0)
  }
  resolveColorZones(){
    const n=this._colorZonesInvalid, e=Math.floor(this._lineHeight), t=Math.floor(this.getCanvasHeight()), i=Math.floor(this._outerHeight), r=t/i, s=Math.floor(4*this._pixelRatio/2), o=[];
    for(let a=0, l=this._zones.length;
    a<l;
    a++){
      const u=this._zones[a];
      if(!n){
        const I=u.getColorZones();
        if(I){
          o.push(I);
          continue
        }
      }
      const d=this._getVerticalOffsetForLine(u.startLineNumber),m=u.heightInLines===0?this._getVerticalOffsetForLine(u.endLineNumber)+e:d+u.heightInLines*e,p=Math.floor(r*d),g=Math.floor(r*m);
      let f=Math.floor((p+g)/2),A=g-f;
      A<s&&(A=s),f-A<0&&(f=A),f+A>t&&(f=t-A);
      const w=u.color;
      let C=this._color2Id[w];
      C||(C=++this._lastAssignedId,this._color2Id[w]=C,this._id2Color[C]=w);
      const x=new tIc(f-A,f+A,C);
      u.setColorZone(x),o.push(x)
    }
    return this._colorZonesInvalid=!1, o.sort(tIc.compare), o
  }
}
}
}), ayh, olA=