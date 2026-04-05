// Module: out-build/vs/base/browser/ui/widget.js
// Offset: 1532279 (bundle byte offset)
// Size: 768 bytes

ri(), Tb(), h0(), Dx(), rt(), HR=class extends at{
  onclick(n, e){
    this._register(ei(n, ir.CLICK, t=>e(new yy(As(n), t))))
  }
  onmousedown(n, e){
    this._register(ei(n, ir.MOUSE_DOWN, t=>e(new yy(As(n), t))))
  }
  onmouseover(n, e){
    this._register(ei(n, ir.MOUSE_OVER, t=>e(new yy(As(n), t))))
  }
  onmouseleave(n, e){
    this._register(ei(n, ir.MOUSE_LEAVE, t=>e(new yy(As(n), t))))
  }
  onkeydown(n, e){
    this._register(ei(n, ir.KEY_DOWN, t=>e(new vh(t))))
  }
  onkeyup(n, e){
    this._register(ei(n, ir.KEY_UP, t=>e(new vh(t))))
  }
  oninput(n, e){
    this._register(ei(n, ir.INPUT, e))
  }
  onblur(n, e){
    this._register(ei(n, ir.BLUR, e))
  }
  onfocus(n, e){
    this._register(ei(n, ir.FOCUS, e))
  }
  onchange(n, e){
    this._register(ei(n, ir.CHANGE, e))
  }
  ignoreGesture(n){
    return E1.ignoreTarget(n)
  }
}
}
}), Kft, Jvh, xTc=