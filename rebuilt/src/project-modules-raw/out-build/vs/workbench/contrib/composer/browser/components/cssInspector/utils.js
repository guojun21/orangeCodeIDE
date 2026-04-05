// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/utils.js
// Offset: 31948752 (bundle byte offset)
// Size: 15791 bytes

Ti(), xf(), ri(), bMf=(n, e, t)=>{
  let i=n;
  return typeof e=="number"&&(i=Math.max(i, e)), typeof t=="number"&&(i=Math.min(i, t)), i
}, hv=(n, e)=>{
  let t=null, i, r=0, s=0;
  const o=n.style, a=o.cursor, l=o.userSelect, u=o.getPropertyValue("-webkit-user-select")??"";
  o.cursor="ew-resize", o.userSelect="none", o.setProperty("-webkit-user-select", "none");
  const d=f=>{
    if(t===null)return;
    const A=e();
    if(!A)return;
    const w=A.step??1, C=f.shiftKey?10:f.altKey?.1:1, x=f.clientX-r, I=s+x*w*C, B=bMf(I, A.min, A.max), R=Math.round(B*10)/10;
    A.onChange(R)
  }, m=()=>{
    const f=As(n);
    f.removeEventListener("pointermove", d), f.removeEventListener("pointerup", p), f.removeEventListener("pointercancel", p)
  }, p=()=>{
    if(t!==null){
      i?.onEnd?.(),i=void 0,m(),n.removeAttribute("data-dragging");
      try{
        n.releasePointerCapture(t)
      }
      catch{
        
      }
      t=null
    }
  }, g=f=>{
    if(f.button!==0)return;
    const A=e();
    if(!A)return;
    f.preventDefault(), r=f.clientX, s=A.getValue(), Number.isFinite(s)||(s=0), i=A, i.onStart?.(), t=f.pointerId;
    try{
      n.setPointerCapture(f.pointerId)
    }
    catch{
      
    }
    n.setAttribute("data-dragging", "true");
    const w=As(n);
    w.addEventListener("pointermove", d), w.addEventListener("pointerup", p), w.addEventListener("pointercancel", p)
  };
  n.addEventListener("pointerdown", g), Ai(()=>{
    if(n.removeEventListener("pointerdown", g), t!==null){
      i?.onEnd?.(),i=void 0;
      try{
        n.releasePointerCapture(t)
      }
      catch{
        
      }
      n.removeAttribute("data-dragging"),t=null
    }
    o.cursor=a, o.userSelect=l, u?o.setProperty("-webkit-user-select", u):o.removeProperty("-webkit-user-select"), m()
  })
}, PQ=n=>Number.isNaN(n)?0:Math.min(100, Math.max(0, n)), _8=n=>{
  if(!n)return null;
  const e=n.match(/-?\d+(\.\d+)?/);
  if(!e)return null;
  const t=parseFloat(e[0]);
  return Number.isNaN(t)?null:t
}, xvu=n=>{
  const e=(n??"").trim();
  return!e||e==="none"?"":e.replace(/\s+/g, " ").trim()
}, Tvu=(n, e, t)=>{
  const i=xvu(n);
  return i?e.test(i)?t?i.replace(e, t).replace(/\s+/g, " ").trim():i.replace(e, "").replace(/\s+/g, " ").trim()||"none":t?`${i} ${t}`.trim():i||"none":t??"none"
}, Ivu=n=>{
  const e=n.trim();
  return e.length<2?e:e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1, -1):e
}, Dvu=n=>{
  if(!n)return null;
  const e=n.toLowerCase();
  try{
    return Xr.Format.CSS.parse(e)
  }
  catch{
    return null
  }
}, Bvu=n=>Xr.Format.CSS.formatHex(n).toUpperCase(), vMf=n=>{
  const e=n.replace(/\s+/g, ""), t=e.startsWith("#")?e.slice(1):e;
  if(!/^[0-9a-f]{
    1, 8
  }
  $/i.test(t))return"#000000";
  let i=t;
  return(i.length===3||i.length===4)&&(i=i.split("").map(r=>r+r).join("")), i.length>=6&&(i=i.substring(0, 6)), `#${i.padEnd(6,"0").toUpperCase()}`
}, npe=n=>{
  if(!n)return"#000000";
  const e=Ivu(n);
  if(!e)return"#000000";
  const t=Dvu(e);
  return t?Bvu(t):vMf(e)
}, AMf=n=>{
  const e=npe(n), t=parseInt(e.slice(1, 3), 16), i=parseInt(e.slice(3, 5), 16), r=parseInt(e.slice(5, 7), 16);
  return{
    r:Number.isNaN(t)?0:t, g:Number.isNaN(i)?0:i, b:Number.isNaN(r)?0:r
  }
}, U1=(n, e)=>{
  const{
    r:t, g:i, b:r
  }
  =AMf(n), s=PQ(e)/100;
  return`rgba(${t}, ${i}, ${r}, ${s})`
}, yMf=n=>{
  const e=n.toLowerCase().trim();
  return e.startsWith("oklab(")||e.startsWith("oklch(")||e.startsWith("lab(")||e.startsWith("lch(")||e.startsWith("color(")
}, Jce=n=>{
  if(!n)return{
    hex:"#000000", alpha:0
  };
  const e=Ivu(n);
  if(!e)return{
    hex:"#000000", alpha:0
  };
  if(yMf(e))return{
    hex:"#UNPARSEABLE", alpha:0
  };
  const t=Dvu(e);
  return t?{
    hex:Bvu(t), alpha:PQ(Math.round(t.rgba.a*100))
  }
  :{
    hex:npe(e), alpha:100
  }
}, b1a=n=>Jce(n).alpha===0, wMf=n=>{
  if(!n||n==="none")return 0;
  const e=n.match(/rotate\(([^)]+)\)/i);
  if(!e)return 0;
  const t=e[1].trim();
  if(t.endsWith("deg")){
    const r=parseFloat(t.replace("deg", ""));
    return Number.isNaN(r)?0:r
  }
  if(t.endsWith("rad")){
    const r=parseFloat(t.replace("rad", ""));
    return Number.isNaN(r)?0:r*180/Math.PI
  }
  const i=parseFloat(t);
  return Number.isNaN(i)?0:i
}, _Mf=(n, e)=>{
  const t=e===0?null:`rotate(${e}deg)`;
  return Tvu(n, /rotate\([^)]+\)/i, t)
}, CMf=(n, e)=>{
  const t=e==="horizontal"?/scaleX\(([^)]+)\)/i:/scaleY\(([^)]+)\)/i, r=xvu(n).match(t), s=r?.[1]?parseFloat(r[1]):null, o=s===null||Number.isNaN(s)||s===0?-1:-1*s, a=Math.abs(o-1)<1e-4?null:o, l=a===null?null:`${e==="horizontal"?"scaleX":"scaleY"}(${a})`;
  return Tvu(n, t, l)
}, Qit=(n, e)=>{
  if(n==="all")switch(e){
    case"color":return"border-top-color";
    case"width":return"border-top-width";
    case"style":return"border-top-style"
  }
  return`border-${n}-${e}`
}, wX=(n, e)=>{
  if(n==="all")switch(e){
    case"color":return"border-color";
    case"width":return"border-width";
    case"style":return"border-style"
  }
  return`border-${n}-${e}`
}, nCi=n=>n?typeof n=="string"?n:n.value??"":"", r7e=n=>{
  if(!n)return!1;
  const e=n.toLowerCase().trim();
  return e.startsWith("linear-gradient(")||e.startsWith("radial-gradient(")||e.startsWith("conic-gradient(")||e.startsWith("repeating-linear-gradient(")||e.startsWith("repeating-radial-gradient(")||e.startsWith("repeating-conic-gradient(")
}, iCi=n=>{
  if(!n)return"solid";
  const e=n.toLowerCase().trim();
  return e.startsWith("linear-gradient(")||e.startsWith("repeating-linear-gradient(")?"linear":e.startsWith("radial-gradient(")||e.startsWith("repeating-radial-gradient(")?"radial":e.startsWith("conic-gradient(")||e.startsWith("repeating-conic-gradient(")?"conic":"solid"
}, SMf=(n, e)=>{
  switch(e.toLowerCase()){
    case"deg":case"":return n;
    case"turn":return n*360;
    case"grad":return n/400*360;
    case"rad":return n*180/Math.PI;
    default:return n
  }
}, kMf=(n, e)=>{
  switch(e.toLowerCase()){
    case"deg":return n/360*100;
    case"turn":return n*100;
    case"grad":return n/400*100;
    case"rad":return n/(2*Math.PI)*100;
    default:return n
  }
}, Rvu=n=>{
  const e=n.trim();
  if(!e)return null;
  const t=e.match(/\s+(\d+(?:\.\d+)?%?)$/);
  let i=e, r=50;
  if(t){
    i=e.slice(0, -t[0].length).trim();
    const o=t[1];
    r=parseFloat(o.replace("%", "")), Number.isNaN(r)&&(r=50)
  }
  return i?{
    color:Jce(i), position:r
  }
  :null
}, EMf=n=>{
  const e=n.trim();
  if(!e)return null;
  const t=e.match(/\s+(-?\d+(?:\.\d+)?)(deg|turn|rad|grad|%)?$/i);
  let i=e, r=50;
  if(t){
    i=e.slice(0, -t[0].length).trim();
    const o=parseFloat(t[1]), a=(t[2]||"").toLowerCase();
    Number.isNaN(o)||(a==="%"||a===""?r=o:r=kMf(o, a))
  }
  return i?{
    color:Jce(i), position:r
  }
  :null
}, xMf=n=>{
  const e=n.match(/(?:repeating-)?linear-gradient\((.+)\)/i);
  if(!e)return null;
  const t=e[1], i=[];
  let r=0, s="";
  for(const d of t)d==="("&&r++, d===")"&&r--, d===","&&r===0?(i.push(s.trim()), s=""):s+=d;
  s.trim()&&i.push(s.trim());
  let o=180, a=0;
  const l=i[0]?.toLowerCase()??"";
  if(l.endsWith("deg"))o=parseFloat(l.replace("deg", "")), Number.isNaN(o)&&(o=180), a=1;
  else if(l.startsWith("to ")){
    const d=l.replace("to ", "");
    o={
      top:0,right:90,bottom:180,left:270,"top right":45,"right top":45,"bottom right":135,"right bottom":135,"bottom left":225,"left bottom":225,"top left":315,"left top":315
    }
    [d]??180, a=1
  }
  const u=[];
  for(let d=a;
  d<i.length;
  d++){
    const m=Rvu(i[d]);
    m&&(d===a&&m.position===50?m.position=0:d===i.length-1&&m.position===50&&(m.position=100), u.push(m))
  }
  if(u.length<2){
    const d={
      hex:"#000000",alpha:100
    };
    for(;
    u.length<2;
    )u.push({
      color:d,position:u.length===0?0:100
    })
  }
  return{
    type:"linear", angle:o, stops:u
  }
}, TMf=n=>{
  const e=n.match(/(?:repeating-)?radial-gradient\((.+)\)/i);
  if(!e)return null;
  const t=e[1], i=[];
  let r=0, s="";
  for(const m of t)m==="("&&r++, m===")"&&r--, m===","&&r===0?(i.push(s.trim()), s=""):s+=m;
  s.trim()&&i.push(s.trim());
  let o="ellipse", a={
    x:50, y:50
  }, l=0;
  const u=i[0]?.toLowerCase()??"";
  if(u.includes("circle")||u.includes("ellipse")||u.includes("at")){
    l=1, u.includes("circle")&&(o="circle");
    const m=u.match(/at\s+(\d+)%?\s+(\d+)%?/);
    m&&(a={
      x:parseFloat(m[1])||50,y:parseFloat(m[2])||50
    })
  }
  const d=[];
  for(let m=l;
  m<i.length;
  m++){
    const p=Rvu(i[m]);
    p&&(m===l&&p.position===50?p.position=0:m===i.length-1&&p.position===50&&(p.position=100), d.push(p))
  }
  if(d.length<2){
    const m={
      hex:"#000000",alpha:100
    };
    for(;
    d.length<2;
    )d.push({
      color:m,position:d.length===0?0:100
    })
  }
  return{
    type:"radial", shape:o, position:a, stops:d
  }
}, IMf=n=>{
  const e=n.match(/(?:repeating-)?conic-gradient\((.+)\)/i);
  if(!e)return null;
  const t=e[1], i=[];
  let r=0, s="";
  for(const m of t)m==="("&&r++, m===")"&&r--, m===","&&r===0?(i.push(s.trim()), s=""):s+=m;
  s.trim()&&i.push(s.trim());
  let o=0, a={
    x:50, y:50
  }, l=0;
  const u=i[0]?.toLowerCase()??"";
  if(u.includes("from")||u.includes("at")){
    l=1;
    const m=u.match(/from\s+(-?\d+(?:\.\d+)?)\s*(deg|turn|rad|grad)?/i);
    if(m){
      const g=parseFloat(m[1]),f=m[2]||"deg";
      o=Number.isNaN(g)?0:SMf(g,f)
    }
    const p=u.match(/at\s+(\d+(?:\.\d+)?)\s*%?\s+(\d+(?:\.\d+)?)\s*%?/);
    p&&(a={
      x:parseFloat(p[1])||50,y:parseFloat(p[2])||50
    })
  }
  const d=[];
  for(let m=l;
  m<i.length;
  m++){
    const p=EMf(i[m]);
    p&&(m===l&&p.position===50?p.position=0:m===i.length-1&&p.position===50&&(p.position=100), d.push(p))
  }
  if(d.length<2){
    const m={
      hex:"#000000",alpha:100
    };
    for(;
    d.length<2;
    )d.push({
      color:m,position:d.length===0?0:100
    })
  }
  return{
    type:"conic", angle:o, position:a, stops:d
  }
}, v1a=n=>{
  if(!n||!r7e(n))return null;
  const e=iCi(n);
  return e==="linear"?xMf(n):e==="radial"?TMf(n):e==="conic"?IMf(n):null
}, DMf=n=>{
  const e=`${Math.round(n.angle*100)/100}deg`, t=n.stops.map(i=>`${U1(i.color.hex,i.color.alpha)} ${i.position}%`).join(", ");
  return`linear-gradient(${e}, ${t})`
}, BMf=n=>{
  const e=n.shape, t=`at ${n.position.x}% ${n.position.y}%`, i=n.stops.map(r=>`${U1(r.color.hex,r.color.alpha)} ${r.position}%`).join(", ");
  return`radial-gradient(${e} ${t}, ${i})`
}, RMf=n=>{
  const e=`from ${Math.round(n.angle*100)/100}deg`, t=`at ${n.position.x}% ${n.position.y}%`, i=n.stops.map(r=>`${U1(r.color.hex,r.color.alpha)} ${r.position}%`).join(", ");
  return`conic-gradient(${e} ${t}, ${i})`
}, _X=n=>n.type==="linear"?DMf(n):n.type==="conic"?RMf(n):BMf(n), A1a=n=>{
  const e=n.hex.toUpperCase().replace("#", "");
  if(e.length===3){
    const t=parseInt(e[0]+e[0], 16), i=parseInt(e[1]+e[1], 16), r=parseInt(e[2]+e[2], 16);
    return t>200&&i>200&&r>200
  }
  if(e.length===6){
    const t=parseInt(e.slice(0, 2), 16), i=parseInt(e.slice(2, 4), 16), r=parseInt(e.slice(4, 6), 16);
    return t>200&&i>200&&r>200
  }
  return!1
}, Pfn=(n={
  
})=>{
  const{
    startColor:e, endColor:t
  }
  =n, i={
    hex:"#000000", alpha:100
  }, r={
    hex:"#FFFFFF", alpha:100
  }, s=e??i, o=t??(A1a(s)?i:r);
  return{
    type:"linear", angle:90, stops:[{
      color:s,position:0
    }, {
      color:o,position:100
    }
    ]
  }
}, Lfn=(n={
  
})=>{
  const{
    startColor:e, endColor:t
  }
  =n, i={
    hex:"#000000", alpha:100
  }, r={
    hex:"#FFFFFF", alpha:100
  }, s=e??i, o=t??(A1a(s)?i:r);
  return{
    type:"radial", shape:"circle", position:{
      x:50,y:50
    }, stops:[{
      color:s,position:0
    }, {
      color:o,position:100
    }
    ]
  }
}, Nfn=(n={
  
})=>{
  const{
    startColor:e, endColor:t
  }
  =n, i={
    hex:"#000000", alpha:100
  }, r={
    hex:"#FFFFFF", alpha:100
  }, s=e??i, o=t??(A1a(s)?i:r);
  return{
    type:"conic", angle:0, position:{
      x:50,y:50
    }, stops:[{
      color:s,position:0
    }, {
      color:o,position:100
    }
    ]
  }
}
}
});
function icy(n){
  const e=hv, t=wr(), {
    showHover:i, hideHover:r
  }
  =ik(0);
  let s, o, a;
  const[l, u]=lt(!1), [d, m]=lt("system"), p=()=>n.themeMode?.()??d(), [g, f, A]=RC(null), w={
    topLeft:n.cornerRadiusTopLeftValue, topRight:n.cornerRadiusTopRightValue, bottomRight:n.cornerRadiusBottomRightValue, bottomLeft:n.cornerRadiusBottomLeftValue
  }, C=FMf.map(O=>({
    corner:O, label:OMf[O], value:w[O]
  })), x=()=>{
    u(O=>!O)
  }, I=()=>n.isElementVisible()?"Hide element":"Show element", B=()=>{
    g()&&n.onMenuClose?.(), A()
  }, R=O=>{
    if(O.stopPropagation(), g()){
      B();
      return
    }
    const $=O.currentTarget.getBoundingClientRect();
    f({
      x:$.left,y:$.bottom+4
    }), n.onMenuOpen?.()
  }, N=O=>{
    m(O), n.onThemeModeChange?.(O), B();
    const $=O==="system"?"no-preference":O;
    t.browserViewStore.getView(n.viewId)?.emulateColorScheme($).catch(W=>{
      console.error("[AppearanceSection] Failed to emulate color scheme:",W)
    })
  }, M=xe(()=>[{
    type:"items", items:MMf.map(O=>({
      id:O.mode,title:O.label,showType:p()===O.mode?"check":void 0,onClick:()=>N(O.mode)
    }))
  }
  ]);
  return(()=>{
    var O=LMf(), $=O.firstChild, H=$.firstChild, W=H.nextSibling, z=W.firstChild, Y=z.firstChild, j=z.nextSibling, X=j.firstChild, ee=$.nextSibling, re=ee.firstChild, ne=re.firstChild, pe=ne.nextSibling, le=pe.firstChild, he=le.firstChild, be=le.nextSibling, fe=be.firstChild, ke=fe.nextSibling, Se=re.nextSibling, Fe=Se.firstChild, De=Fe.nextSibling, Pe=De.firstChild, Ne=Pe.firstChild, Oe=Ne.firstChild, Ge=Ne.nextSibling, Le=Ge.firstChild, We=Pe.nextSibling, tt=We.firstChild;
    Yd(z, "mouseleave", r), z.addEventListener("mouseenter", ()=>{
      if(a){
        const ft=a.getBoundingClientRect();
        i({
          content:"Change theme",target:{
            targetElements:[a],x:ft.left+ft.width/2,y:ft.bottom+4
          },position:{
            hoverPosition:2
          },appearance:{
            compact:!0
          },persistence:{
            hideOnHover:!0
          }
        })
      }
    }), z.addEventListener("click", R);
    var it=a;
    typeof it=="function"?Bs(it, z):a=z, ge(W, K(Xe, {
      get when(){
        return g()
      },get children(){
        return K(LT,{
          class:"css-theme-menu",get position(){
            return g()
          },anchor:"top-left",width:140,maxHeight:200,get sections(){
            return M()
          },onClose:B,get overflowRoot(){
            return n.overflowRoot
          },get style(){
            return n.menuMaxWidth!==void 0?{
              "max-width":`${n.menuMaxWidth}px`
            }
            :void 0
          }
        })
      }
    }), j), Yd(j, "mouseleave", r), j.addEventListener("mouseenter", ()=>{
      if(o){
        const ft=o.getBoundingClientRect();
        i({
          content:I(),target:{
            targetElements:[o],x:ft.left+ft.width/2,y:ft.bottom+4
          },position:{
            hoverPosition:2
          },appearance:{
            compact:!0
          },persistence:{
            hideOnHover:!0
          }
        })
      }
    }), Yd(j, "click", n.onToggleElementVisibility);
    var bt=o;
    typeof bt=="function"?Bs(bt, j):o=j, Bs(hv, le, ()=>({
      getValue:()=>n.opacityPercent(),onChange:ft=>{
        n.onOpacityChange(Math.round(ft).toString())
      },min:0,max:100
    })), fe.addEventListener("input", ft=>n.onOpacityChange(ft.currentTarget.value)), Bs(hv, ke, ()=>({
      getValue:()=>n.opacityPercent(),onChange:ft=>{
        n.onOpacityChange(Math.round(ft).toString())
      },min:0,max:100
    })), Bs(hv, Ne, ()=>({
      getValue:()=>Math.round(n.cornerRadiusValue()),onChange:ft=>{
        n.onCornerRadiusChange(Math.round(Math.max(0,ft)).toString())
      },min:0
    })), Le.addEventListener("input", ft=>n.onCornerRadiusChange(ft.currentTarget.value)), Le.addEventListener("focus", ft=>{
      n.isCornerRadiusMixed()&&ft.currentTarget.select()
    }), Yd(We, "mouseleave", r), We.addEventListener("mouseenter", ()=>{
      if(s){
        const ft=s.getBoundingClientRect();
        i({
          content:"Edit corners",target:{
            targetElements:[s],x:ft.left+ft.width/2,y:ft.bottom+4
          },position:{
            hoverPosition:2
          },appearance:{
            compact:!0
          },persistence:{
            hideOnHover:!0
          }
        })
      }
    }), We.addEventListener("click", x);
    var Nt=s;
    return typeof Nt=="function"?Bs(Nt, We):s=We, ge(ee, K(Xe, {
      get when(){
        return l()
      },get children(){
        var ft=PMf();
        return ge(ft,K(ia,{
          each:C,children:_t=>(()=>{
            var It=NMf(),sn=It.firstChild,Vt=sn.firstChild,Ft=sn.nextSibling,Xt=Ft.firstChild;
            return Bs(hv,sn,()=>({
              getValue:()=>Math.round(_t.value()),onChange:bn=>{
                n.onCornerRadiusSideChange(_t.corner,Math.round(Math.max(0,bn)).toString())
              },min:0
            })),Xt.addEventListener("input",bn=>n.onCornerRadiusSideChange(_t.corner,bn.currentTarget.value)),tn(bn=>{
              var St=`${_t.label} radius`,Bt=Qt.asClassName(UMf[_t.corner]),Jt=`${_t.label} radius`;
              return St!==bn.e&&Zr(sn,"aria-label",bn.e=St),Bt!==bn.t&&Un(Vt,bn.t=Bt),Jt!==bn.a&&Zr(Xt,"aria-label",bn.a=Jt),bn
            },{
              e:void 0,t:void 0,a:void 0
            }),tn(()=>Xt.value=`${Math.round(_t.value())}`),It
          })()
        })),ft
      }
    }), null), tn(ft=>{
      var _t=`css-stroke-action ${g()?"active":""}`,It=g()?"true":"false",sn=Qt.asClassName(Be.sun),Vt=`css-stroke-action ${n.isElementVisible()?"":"active"}`,Ft=I(),Xt=n.isElementVisible()?"false":"true",bn=Qt.asClassName(n.isElementVisible()?Be.eye:Be.eyeClosed),St=Qt.asClassName(Be.opacity),Bt=Qt.asClassName(Be.corners),Jt=n.isCornerRadiusMixed()?"text":"number",Ot=l()?"true":"false",cn=l()?"true":"false",Mt=l()?"true":"false",Pt=Qt.asClassName(Be.corners);
      return _t!==ft.e&&Un(z,ft.e=_t),It!==ft.t&&Zr(z,"aria-expanded",ft.t=It),sn!==ft.a&&Un(Y,ft.a=sn),Vt!==ft.o&&Un(j,ft.o=Vt),Ft!==ft.i&&Zr(j,"aria-label",ft.i=Ft),Xt!==ft.n&&Zr(j,"aria-pressed",ft.n=Xt),bn!==ft.s&&Un(X,ft.s=bn),St!==ft.h&&Un(he,ft.h=St),Bt!==ft.r&&Un(Oe,ft.r=Bt),Jt!==ft.d&&Zr(Le,"type",ft.d=Jt),Ot!==ft.l&&Zr(We,"aria-pressed",ft.l=Ot),cn!==ft.u&&Zr(We,"aria-expanded",ft.u=cn),Mt!==ft.c&&Zr(We,"data-active",ft.c=Mt),Pt!==ft.w&&Un(tt,ft.w=Pt),ft
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0
    }), tn(()=>fe.value=`${n.opacityPercent()}`), tn(()=>Le.value=n.isCornerRadiusMixed()?"Mixed":`${Math.round(n.cornerRadiusValue())}`), O
  })()
}
var PMf, LMf, NMf, MMf, FMf, OMf, UMf, rcy=