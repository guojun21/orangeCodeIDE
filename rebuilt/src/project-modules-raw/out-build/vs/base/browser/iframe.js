// Module: out-build/vs/base/browser/iframe.js
// Offset: 315670 (bundle byte offset)
// Size: 694 bytes

M0c=new WeakMap, Pih=class{
  static getSameOriginWindowChain(n){
    let e=M0c.get(n);
    if(!e){
      e=[],M0c.set(n,e);
      let t=n,i;
      do i=ytA(t),i?e.push({
        window:new WeakRef(t),iframeElement:t.frameElement||null
      }):e.push({
        window:new WeakRef(t),iframeElement:null
      }),t=i;
      while(t)
    }
    return e.slice(0)
  }
  static getPositionOfChildWindowRelativeToAncestorWindow(n, e){
    if(!e||n===e)return{
      top:0,left:0
    };
    let t=0, i=0;
    const r=this.getSameOriginWindowChain(n);
    for(const s of r){
      const o=s.window.deref();
      if(t+=o?.scrollY??0,i+=o?.scrollX??0,o===e||!s.iframeElement)break;
      const a=s.iframeElement.getBoundingClientRect();
      t+=a.top,i+=a.left
    }
    return{
      top:t,left:i
    }
  }
}
}
}), yy, d5e, h0=