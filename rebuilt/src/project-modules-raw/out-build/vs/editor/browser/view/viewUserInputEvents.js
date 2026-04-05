// Module: out-build/vs/editor/browser/view/viewUserInputEvents.js
// Offset: 1610222 (bundle byte offset)
// Size: 2021 bytes

tl(), MTc=class AGb{
  constructor(e){
    this.onKeyDown=null, this.onKeyUp=null, this.onContextMenu=null, this.onMouseMove=null, this.onMouseLeave=null, this.onMouseDown=null, this.onMouseUp=null, this.onMouseDrag=null, this.onMouseDrop=null, this.onMouseDropCanceled=null, this.onMouseWheel=null, this._coordinatesConverter=e
  }
  emitKeyDown(e){
    this.onKeyDown?.(e)
  }
  emitKeyUp(e){
    this.onKeyUp?.(e)
  }
  emitContextMenu(e){
    this.onContextMenu?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseMove(e){
    this.onMouseMove?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseLeave(e){
    this.onMouseLeave?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseDown(e){
    this.onMouseDown?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseUp(e){
    this.onMouseUp?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseDrag(e){
    this.onMouseDrag?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseDrop(e){
    this.onMouseDrop?.(this._convertViewToModelMouseEvent(e))
  }
  emitMouseDropCanceled(){
    this.onMouseDropCanceled?.()
  }
  emitMouseWheel(e){
    this.onMouseWheel?.(e)
  }
  _convertViewToModelMouseEvent(e){
    return e.target?{
      event:e.event,target:this._convertViewToModelMouseTarget(e.target)
    }
    :e
  }
  _convertViewToModelMouseTarget(e){
    return AGb.convertViewToModelMouseTarget(e, this._coordinatesConverter)
  }
  static convertViewToModelMouseTarget(e, t){
    const i={
      ...e
    };
    return i.position&&(i.position=t.convertViewPositionToModelPosition(i.position)), i.range&&(i.range=t.convertViewRangeToModelRange(i.range)), (i.type===5||i.type===8)&&(i.detail=this.convertViewToModelViewZoneData(i.detail, t)), i
  }
  static convertViewToModelViewZoneData(e, t){
    return{
      viewZoneId:e.viewZoneId,positionBefore:e.positionBefore?t.convertViewPositionToModelPosition(e.positionBefore):e.positionBefore,positionAfter:e.positionAfter?t.convertViewPositionToModelPosition(e.positionAfter):e.positionAfter,position:t.convertViewPositionToModelPosition(e.position),afterLineNumber:t.convertViewPositionToModelPosition(new ar(e.afterLineNumber,1)).lineNumber
    }
  }
}
}
}), BcA=