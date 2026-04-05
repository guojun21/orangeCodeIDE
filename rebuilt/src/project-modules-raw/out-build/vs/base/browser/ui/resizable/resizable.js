// Module: out-build/vs/base/browser/ui/resizable/resizable.js
// Offset: 4220054 (bundle byte offset)
// Size: 3885 bytes

ri(), jSe(), yn(), rt(), G9t=class{
  constructor(){
    this._onDidWillResize=new Qe, this.onDidWillResize=this._onDidWillResize.event, this._onDidResize=new Qe, this.onDidResize=this._onDidResize.event, this._sashListener=new Ut, this._size=new Lu(0, 0), this._minSize=new Lu(0, 0), this._maxSize=new Lu(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), this.domNode=document.createElement("div"), this._eastSash=new Qde(this.domNode, {
      getVerticalSashLeft:()=>this._size.width
    }, {
      orientation:0
    }), this._westSash=new Qde(this.domNode, {
      getVerticalSashLeft:()=>0
    }, {
      orientation:0
    }), this._northSash=new Qde(this.domNode, {
      getHorizontalSashTop:()=>0
    }, {
      orientation:1,orthogonalEdge:x5o.North
    }), this._southSash=new Qde(this.domNode, {
      getHorizontalSashTop:()=>this._size.height
    }, {
      orientation:1,orthogonalEdge:x5o.South
    }), this._northSash.orthogonalStartSash=this._westSash, this._northSash.orthogonalEndSash=this._eastSash, this._southSash.orthogonalStartSash=this._westSash, this._southSash.orthogonalEndSash=this._eastSash;
    let n, e=0, t=0;
    this._sashListener.add(In.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(()=>{
      n===void 0&&(this._onDidWillResize.fire(),n=this._size,e=0,t=0)
    })), this._sashListener.add(In.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(()=>{
      n!==void 0&&(n=void 0,e=0,t=0,this._onDidResize.fire({
        dimension:this._size,done:!0
      }))
    })), this._sashListener.add(this._eastSash.onDidChange(i=>{
      n&&(t=i.currentX-i.startX,this.layout(n.height+e,n.width+t),this._onDidResize.fire({
        dimension:this._size,done:!1,east:!0
      }))
    })), this._sashListener.add(this._westSash.onDidChange(i=>{
      n&&(t=-(i.currentX-i.startX),this.layout(n.height+e,n.width+t),this._onDidResize.fire({
        dimension:this._size,done:!1,west:!0
      }))
    })), this._sashListener.add(this._northSash.onDidChange(i=>{
      n&&(e=-(i.currentY-i.startY),this.layout(n.height+e,n.width+t),this._onDidResize.fire({
        dimension:this._size,done:!1,north:!0
      }))
    })), this._sashListener.add(this._southSash.onDidChange(i=>{
      n&&(e=i.currentY-i.startY,this.layout(n.height+e,n.width+t),this._onDidResize.fire({
        dimension:this._size,done:!1,south:!0
      }))
    })), this._sashListener.add(In.any(this._eastSash.onDidReset, this._westSash.onDidReset)(i=>{
      this._preferredSize&&(this.layout(this._size.height,this._preferredSize.width),this._onDidResize.fire({
        dimension:this._size,done:!0
      }))
    })), this._sashListener.add(In.any(this._northSash.onDidReset, this._southSash.onDidReset)(i=>{
      this._preferredSize&&(this.layout(this._preferredSize.height,this._size.width),this._onDidResize.fire({
        dimension:this._size,done:!0
      }))
    }))
  }
  dispose(){
    this._northSash.dispose(), this._southSash.dispose(), this._eastSash.dispose(), this._westSash.dispose(), this._sashListener.dispose(), this._onDidResize.dispose(), this._onDidWillResize.dispose(), this.domNode.remove()
  }
  enableSashes(n, e, t, i){
    this._northSash.state=n?3:0, this._eastSash.state=e?3:0, this._southSash.state=t?3:0, this._westSash.state=i?3:0
  }
  layout(n=this.size.height, e=this.size.width){
    const{
      height:t,width:i
    }
    =this._minSize, {
      height:r,width:s
    }
    =this._maxSize;
    n=Math.max(t, Math.min(r, n)), e=Math.max(i, Math.min(s, e));
    const o=new Lu(e, n);
    Lu.equals(o, this._size)||(this.domNode.style.height=n+"px", this.domNode.style.width=e+"px", this._size=o, this._northSash.layout(), this._eastSash.layout(), this._southSash.layout(), this._westSash.layout())
  }
  clearSashHoverState(){
    this._eastSash.clearSashHoverState(), this._westSash.clearSashHoverState(), this._northSash.clearSashHoverState(), this._southSash.clearSashHoverState()
  }
  get size(){
    return this._size
  }
  set maxSize(n){
    this._maxSize=n
  }
  get maxSize(){
    return this._maxSize
  }
  set minSize(n){
    this._minSize=n
  }
  get minSize(){
    return this._minSize
  }
  set preferredSize(n){
    this._preferredSize=n
  }
  get preferredSize(){
    return this._preferredSize
  }
}
}
}), QJh, jJh, zJh, tAA=