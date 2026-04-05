// Module: out-build/vs/base/browser/mouseEvent.js
// Offset: 316364 (bundle byte offset)
// Size: 2255 bytes

Ay(), F0c(), _r(), yy=class{
  constructor(n, e){
    this.timestamp=Date.now(), this.browserEvent=e, this.leftButton=e.button===0, this.middleButton=e.button===1, this.rightButton=e.button===2, this.buttons=e.buttons, this.target=e.target, this.detail=e.detail||1, e.type==="dblclick"&&(this.detail=2), this.ctrlKey=e.ctrlKey, this.shiftKey=e.shiftKey, this.altKey=e.altKey, this.metaKey=e.metaKey, typeof e.pageX=="number"?(this.posx=e.pageX, this.posy=e.pageY):(this.posx=e.clientX+this.target.ownerDocument.body.scrollLeft+this.target.ownerDocument.documentElement.scrollLeft, this.posy=e.clientY+this.target.ownerDocument.body.scrollTop+this.target.ownerDocument.documentElement.scrollTop);
    const t=Pih.getPositionOfChildWindowRelativeToAncestorWindow(n, e.view);
    this.posx-=t.left, this.posy-=t.top
  }
  preventDefault(){
    this.browserEvent.preventDefault()
  }
  stopPropagation(){
    this.browserEvent.stopPropagation()
  }
}, d5e=class{
  constructor(n, e=0, t=0){
    this.browserEvent=n||null, this.target=n?n.target||n.targetNode||n.srcElement:null, this.deltaY=t, this.deltaX=e;
    let i=!1;
    if(_ze){
      const r=navigator.userAgent.match(/Chrome\/(\d+)/);
      i=(r?parseInt(r[1]):123)<=122
    }
    if(n){
      const r=n,s=n,o=n.view?.devicePixelRatio||1;
      if(typeof r.wheelDeltaY<"u")i?this.deltaY=r.wheelDeltaY/(120*o):this.deltaY=r.wheelDeltaY/120;
      else if(typeof s.VERTICAL_AXIS<"u"&&s.axis===s.VERTICAL_AXIS)this.deltaY=-s.detail/3;
      else if(n.type==="wheel"){
        const a=n;
        a.deltaMode===a.DOM_DELTA_LINE?u3&&!Fs?this.deltaY=-n.deltaY/3:this.deltaY=-n.deltaY:this.deltaY=-n.deltaY/40
      }
      if(typeof r.wheelDeltaX<"u")kte&&Sc?this.deltaX=-(r.wheelDeltaX/120):i?this.deltaX=r.wheelDeltaX/(120*o):this.deltaX=r.wheelDeltaX/120;
      else if(typeof s.HORIZONTAL_AXIS<"u"&&s.axis===s.HORIZONTAL_AXIS)this.deltaX=-n.detail/3;
      else if(n.type==="wheel"){
        const a=n;
        a.deltaMode===a.DOM_DELTA_LINE?u3&&!Fs?this.deltaX=-n.deltaX/3:this.deltaX=-n.deltaX:this.deltaX=-n.deltaX/40
      }
      this.deltaY===0&&this.deltaX===0&&n.wheelDelta&&(i?this.deltaY=n.wheelDelta/(120*o):this.deltaY=n.wheelDelta/120)
    }
  }
  preventDefault(){
    this.browserEvent?.preventDefault()
  }
  stopPropagation(){
    this.browserEvent?.stopPropagation()
  }
}
}
});
function O0c(n){
  const e=new Wc;
  return n.add({
    dispose(){
      e.cancel()
    }
  }), e.token
}
var U0c, Cs, tFn, Wc, Po=