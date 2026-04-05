// Module: out-build/vs/base/browser/ui/cursor-icons/cursorIconStyles.js
// Offset: 31660589 (bundle byte offset)
// Size: 2151 bytes

lay()
}
});
function day(){
  if(!bi.document.getElementById(lvu))try{
    const n=eCm(":root", vOl);
    wC(bi.document.head, e=>{
      e.id=lvu,e.textContent=n
    })
  }
  catch(n){
    console.error("[uiPackageStyles] Failed to generate token CSS:", n)
  }
}
function hay(){
  if(!bi.document.getElementById(cvu))try{
    wC(bi.document.head, n=>{
      n.id=cvu,n.textContent=_hg
    })
  }
  catch(n){
    console.error("[uiPackageStyles] Failed to inject component styles:", n)
  }
}
function may(){
  const n=bi.document.documentElement;
  n.style.getPropertyValue(uvu).trim().length===0&&n.style.setProperty(uvu, `${Date.now()%6e4}ms`)
}
function Y0i(){
  dvu||(dvu=!0, may(), day(), hay())
}
function pay(n, e){
  let t, i=-1;
  for(const r of n){
    if(!r.settings?.foreground)continue;
    const s=Array.isArray(r.scope)?r.scope:typeof r.scope=="string"?r.scope.split(",").map(o=>o.trim()):[];
    for(const o of s)(e===o||e.startsWith(o+"."))&&o.length>i&&(i=o.length, t=r.settings.foreground)
  }
  return t
}
function gay(n){
  const e=n.tokenColors??[], t=n.getColor("editor.foreground")?.toString(), i=n.getColor("editor.background")?.toString(), r=new Map;
  for(const[o, a]of hvu)for(const l of a){
    const u=pay(e, l);
    if(u){
      r.set(o,u);
      break
    }
  }
  const s=[":root {"];
  t&&s.push(`  --cursor-syntax-foreground: ${t};`), i&&s.push(`  --cursor-syntax-background: ${i};`);
  for(const[o]of hvu){
    const a=r.get(o);
    if(a)s.push(`  --cursor-syntax-${o}: ${a};`);
    else if(dNf.has(o)){
      const l=r.get("constant")??t;
      l&&s.push(`  --cursor-syntax-${o}: ${l};`)
    }
  }
  return s.push("}"), s.join(`
`)
}
function fay(n){
  const e=new Ut, t=e.add(boh()), i=()=>{
    const r=n.getColorTheme();
    r.tokenColors&&t.setStyle(gay(r))
  };
  return i(), e.add(n.onDidColorThemeChange(i)), e
}
function bay(n){
  const e=n.getValue("editor.fontFamily"), t=jI.fontFamily;
  return e&&e!==t?`${e}, ${t}`:t
}
function vay(n){
  const e=new Ut, t=()=>{
    const i=bay(n);
    bi.document.documentElement.style.setProperty("--cursor-font-family-mono", i)
  };
  return t(), e.add(n.onDidChangeConfiguration(i=>{
    i.affectsConfiguration("editor.fontFamily")&&t()
  })), e.add({
    dispose:()=>bi.document.documentElement.style.removeProperty("--cursor-font-family-mono")
  }), e
}
var cvu, lvu, uvu, dvu, hvu, dNf, Tfn=