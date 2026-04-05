// Module: out-build/vs/editor/browser/config/elementSizeObserver.js
// Offset: 1441947 (bundle byte offset)
// Size: 1541 bytes

rt(), yn(), ri(), cTc=class extends at{
  constructor(n, e){
    super(), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._referenceDomElement=n, this._width=-1, this._height=-1, this._resizeObserver=null, this.measureReferenceDomElement(!1, e)
  }
  dispose(){
    this.stopObserving(), super.dispose()
  }
  getWidth(){
    return this._width
  }
  getHeight(){
    return this._height
  }
  startObserving(n=!1){
    if(!this._resizeObserver&&this._referenceDomElement){
      let e=null;
      const t=()=>{
        e?this.observe({
          width:e.width,height:e.height
        },n):this.observe(void 0,n)
      };
      let i=!1,r=!1;
      const s=()=>{
        if(i&&!r)try{
          i=!1,r=!0,t()
        }
        finally{
          r_(As(this._referenceDomElement),()=>{
            r=!1,s()
          })
        }
      },o=As(this._referenceDomElement)?.ResizeObserver;
      this._resizeObserver=new o(a=>{
        a&&a[0]&&a[0].contentRect?e={
          width:a[0].contentRect.width,height:a[0].contentRect.height
        }
        :e=null,i=!0,s()
      }),this._resizeObserver.observe(this._referenceDomElement)
    }
  }
  stopObserving(){
    this._resizeObserver&&(this._resizeObserver.disconnect(), this._resizeObserver=null)
  }
  observe(n, e=!1){
    this.measureReferenceDomElement(!0, n, e)
  }
  measureReferenceDomElement(n, e, t=!1){
    let i=0, r=0;
    e?(i=e.width, r=e.height):this._referenceDomElement&&(i=this._referenceDomElement.clientWidth, r=this._referenceDomElement.clientHeight), i=Math.max(5, i), r=Math.max(5, r), (this._width!==i||this._height!==r)&&(this._width=i, t?this._height=Math.max(r, this._referenceDomElement.clientHeight):this._height=r, n&&this._onDidChange.fire())
  }
}
}
}), Zbh, Xbh, evh, M6, Nte=