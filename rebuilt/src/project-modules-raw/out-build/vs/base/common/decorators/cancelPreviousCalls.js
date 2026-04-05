// Module: out-build/vs/base/common/decorators/cancelPreviousCalls.js
// Offset: 1525541 (bundle byte offset)
// Size: 1578 bytes

Js(), rt(), Po()
}
});
function Hvh(n){
  return(e, t, i)=>{
    let r=null, s=null;
    if(typeof i.value=="function"?(r="value", s=i.value):typeof i.get=="function"&&(r="get", s=i.get), !s||typeof t=="symbol")throw new Error("not supported");
    i[r]=n(s, t)
  }
}
function cl(n, e, t){
  let i=null, r=null;
  if(typeof t.value=="function"?(i="value", r=t.value, r.length!==0&&console.warn("Memoize should only be used in functions with zero parameters")):typeof t.get=="function"&&(i="get", r=t.get), !r)throw new Error("not supported");
  const s=`$memoize$${e}`;
  t[i]=function(...o){
    return this.hasOwnProperty(s)||Object.defineProperty(this, s, {
      configurable:!1,enumerable:!1,writable:!1,value:r.apply(this,o)
    }), this[s]
  }
}
function U4(n, e, t){
  return Hvh((i, r)=>{
    const s=`$debounce$${r}`, o=`$debounce$result$${r}`;
    return function(...a){
      this[o]||(this[o]=t?t():void 0),clearTimeout(this[s]),e&&(this[o]=e(this[o],...a),a=[this[o]]),this[s]=setTimeout(()=>{
        i.apply(this,a),this[o]=t?t():void 0
      },n)
    }
  })
}
function Vft(n, e, t){
  return Hvh((i, r)=>{
    const s=`$throttle$timer$${r}`, o=`$throttle$result$${r}`, a=`$throttle$lastRun$${r}`, l=`$throttle$pending$${r}`;
    return function(...u){
      if(this[o]||(this[o]=t?t():void 0),(this[a]===null||this[a]===void 0)&&(this[a]=-Number.MAX_VALUE),e&&(this[o]=e(this[o],...u)),this[l])return;
      const d=this[a]+n;
      d<=Date.now()?(this[a]=Date.now(),i.apply(this,[this[o]]),this[o]=t?t():void 0):(this[l]=!0,this[s]=setTimeout(()=>{
        this[l]=!1,this[a]=Date.now(),i.apply(this,[this[o]]),this[o]=t?t():void 0
      },d-Date.now()))
    }
  })
}
var U0=