// Module: out-build/vs/workbench/contrib/composer/browser/components/CSSInspectorPanel.js
// Offset: 32175186 (bundle byte offset)
// Size: 3692 bytes

Ie(), Ie(), Ie(), Ie(), Ti(), xf(), Zay(), rcy(), WNf(), ocy(), ccy(), hcy(), fcy(), vcy(), Scy(), Ecy(), Tcy(), jit(), es(), Icy(), WFf=qe("<div class=css-section-divider role=presentation>"), QFf=qe("<div class=css-inspector-panel><div class=css-section-divider role=presentation></div><div class=css-section-divider role=presentation></div><div class=css-section-divider role=presentation></div><div class=css-section-divider role=presentation></div><div class=css-section-divider role=presentation></div><div class=css-section-divider role=presentation>"), jFf=qe("<div class=css-inspector-panel><div class=css-inspector-content>"), uCi=["top", "right", "bottom", "left"], D1a=["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"], sAu=["border-top-style", "border-right-style", "border-bottom-style", "border-left-style"], oAu=["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"], zFf=["topLeft", "topRight", "bottomRight", "bottomLeft"], aAu={
  topLeft:"border-top-left-radius", topRight:"border-top-right-radius", bottomRight:"border-bottom-right-radius", bottomLeft:"border-bottom-left-radius"
}, cAu=12, lAu=12, VFf=/blur\(\s*([0-9.+-eE]+)\s*(px)?\s*\)/i, dCi=n=>{
  const e=n?n.trim():"";
  if(!e)return null;
  const t=VFf.exec(e);
  if(!t)return null;
  const i=parseFloat(t[1]);
  return Number.isNaN(i)?null:Math.max(0, i)
}, uAu=n=>`blur(${Math.round(Math.max(0,n)*100)/100}px)`, Kit={
  offsetX:0, offsetY:4, blur:12, spread:0, color:{
    hex:"#000000", alpha:15
  }, isInset:!1
}, Yit=()=>({
  offsetX:Kit.offsetX, offsetY:Kit.offsetY, blur:Kit.blur, spread:Kit.spread, color:{
    ...Kit.color
  }, isInset:Kit.isInset
}), Gce=n=>({
  offsetX:n.offsetX, offsetY:n.offsetY, blur:n.blur, spread:n.spread, color:{
    ...n.color
  }, isInset:n.isInset
}), KFf=n=>{
  const e=[];
  let t="", i=0;
  for(const r of n){
    if(r==="("?i++:r===")"&&(i=Math.max(0, i-1)), r===","&&i===0){
      t.trim()&&e.push(t.trim()),t="";
      continue
    }
    t+=r
  }
  return t.trim()&&e.push(t.trim()), e
}, YFf=n=>{
  const e=[];
  let t="", i=0;
  for(const r of n){
    if(r==="("?i++:r===")"&&(i=Math.max(0, i-1)), /\s/.test(r)&&i===0){
      t.trim()&&(e.push(t.trim()),t="");
      continue
    }
    t+=r
  }
  return t.trim()&&e.push(t.trim()), e
}, ZFf=n=>{
  const e=n.trim();
  if(!e)return null;
  try{
    const t=Xr.Format.CSS.parse(e);
    return t?{
      hex:Xr.Format.CSS.formatHex(t).toUpperCase(),alpha:PQ(Math.round(t.rgba.a*100))
    }
    :null
  }
  catch{
    return null
  }
}, B1a=n=>{
  const e=n?n.trim().toLowerCase():"";
  return e===""||e==="none"
}, dAu=n=>{
  const t=[...YFf(n)];
  let i=null;
  for(let a=t.length-1;
  a>=0;
  a--){
    const l=t[a], u=ZFf(l);
    if(u){
      i=u,t.splice(a,1);
      break
    }
  }
  const r=[];
  let s=!1;
  for(const a of t){
    if(a.toLowerCase()==="inset"){
      s=!0;
      continue
    }
    const l=_8(a);
    l!==null&&r.push(l)
  }
  const o=Yit();
  return{
    offsetX:r[0]??o.offsetX, offsetY:r[1]??o.offsetY, blur:r[2]??o.blur, spread:r[3]??o.spread, color:i??o.color, isInset:s
  }
}, XFf=n=>{
  const e=n?n.trim():"";
  if(!e||e.toLowerCase()==="none")return[];
  const t=KFf(e);
  return t.length===0?[dAu(e)]:t.map(i=>dAu(i))
}, hCi=n=>Number.isFinite(n)?`${Math.round(n*100)/100}px`:"0px", e4f=n=>{
  const e=Math.max(0, n.blur);
  return`${n.isInset?"inset ":""}${hCi(n.offsetX)} ${hCi(n.offsetY)} ${hCi(e)} ${hCi(n.spread)} ${U1(n.color.hex,n.color.alpha)}`
}, R1a=n=>n.length?n.map(e=>e4f(e)).join(", "):"none", Zit=(n, e)=>e<=0||!Number.isFinite(n)?0:Math.min(Math.max(0, n), e-1), t4f=n=>{
  const e=n.toLowerCase().trim();
  return e.startsWith("oklab(")||e.startsWith("oklch(")||e.startsWith("lab(")||e.startsWith("lch(")||e.startsWith("color(")
}, P1a=n=>{
  const e=n.trim();
  if(!e||t4f(e))return null;
  try{
    const t=Xr.Format.CSS.parse(e);
    return t?{
      hex:Xr.Format.CSS.formatHex(t).toUpperCase(),alpha:PQ(Math.round(t.rgba.a*100))
    }
    :null
  }
  catch{
    return null
  }
}
}
}), Rcy=