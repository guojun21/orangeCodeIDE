// Module: out-build/vs/base/browser/ui/hover/hoverDelegateFactory.js
// Offset: 1954712 (bundle byte offset)
// Size: 1248 bytes

L0(), Dwh=()=>({
  get delay(){
    return-1
  }, dispose:()=>{
    
  }, showHover:()=>{
    
  }
}), r3n=Dwh, Bwh=new Ob(()=>r3n("mouse", !1)), Rwh=new Ob(()=>r3n("element", !1))
}
});
function VB_(n){
  return n
}
function pRe(n, e){
  if(n!==void 0){
    const t=n.match(/^\s*var\((.+)\)$/);
    if(t){
      const i=t[1].split(",",2);
      return i.length===2&&(e=pRe(i[1].trim(),e)),`var(${i[0]}, ${e})`
    }
    return n
  }
  return e
}
function Pwh(n){
  const e=n.replaceAll(/[^\w.%+-]/gi, "");
  return e!==n&&console.warn(`CSS size ${n} modified to ${e} to be safe for CSS`), e
}
function luA(n){
  const e=n.replaceAll(/[^[0-9a-fA-F#]]/gi, "");
  return e!==n&&console.warn(`CSS hex color ${n} modified to ${e} to be safe for CSS`), e
}
function k3o(n){
  const e=n.replaceAll(/[^_\-a-z0-9]/gi, "");
  return e!==n&&console.warn(`CSS ident value ${n} modified to ${e} to be safe for CSS`), e
}
function WH(n){
  return`'${n.replaceAll(/'/g,"\\000027")}'`
}
function Bx(n){
  return n?Cy`url('${CSS.escape(og.uriToBrowserUri(n).toString(!0))}')`:"url('')"
}
function ibt(n, e=!1){
  const t=CSS.escape(n);
  return!e&&t!==n&&console.warn(`CSS class name ${n} modified to ${t} to be safe for CSS`), t
}
function Cy(n, ...e){
  return n.reduce((t, i, r)=>{
    const s=e[r]||"";
    return t+i+s
  }, "")
}
var sve, yF=