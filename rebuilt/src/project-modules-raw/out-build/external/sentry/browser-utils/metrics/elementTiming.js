// Module: out-build/external/sentry/browser-utils/metrics/elementTiming.js
// Offset: 225444 (bundle byte offset)
// Size: 2647 bytes

lm(), AFt(), jpt(), dnh=({
  entries:n
})=>{
  const e=HP(), t=e?qP(e):void 0, i=t?jA(t).description:ry().getScopeData().transactionName;
  n.forEach(r=>{
    const s=r;
    if(!s.identifier)return;
    const o=s.name, a=s.renderTime, l=s.loadTime, [u, d]=l?[m9(l), "load-time"]:a?[m9(a), "render-time"]:[MR(), "entry-emission"], m=o==="image-paint"?m9(Math.max(0, (a??0)-(l??0))):0, p={
      [w1]:"auto.ui.browser.elementtiming",[HE]:"ui.elementtiming",[c2]:"component","sentry.span_start_time_source":d,"sentry.transaction_name":i,"element.id":s.id,"element.type":s.element?.tagName?.toLowerCase()||"unknown","element.size":s.naturalWidth&&s.naturalHeight?`${s.naturalWidth}x${s.naturalHeight}`:void 0,"element.render_time":a,"element.load_time":l,"element.url":s.url||void 0,"element.identifier":s.identifier,"element.paint_type":o
    };
    X3e({
      name:`element[${s.identifier}]`,attributes:p,startTime:u,onlyIfParent:!0
    }, g=>{
      g.end(u+m)
    })
  })
}
}
});
function J_c(n){
  K3e("dom", n), Y3e("dom", DeA)
}
function DeA(){
  if(!zC.document)return;
  const n=ede.bind(null, "dom"), e=hnh(n, !0);
  zC.document.addEventListener("click", e, !1), zC.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(t=>{
    const r=zC[t]?.prototype;
    r?.hasOwnProperty?.("addEventListener")&&(LB(r, "addEventListener", function(s){
      return function(o,a,l){
        if(o==="click"||o=="keypress")try{
          const u=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{
            
          },d=u[o]=u[o]||{
            refCount:0
          };
          if(!d.handler){
            const m=hnh(n);
            d.handler=m,s.call(this,o,m,l)
          }
          d.refCount++
        }
        catch{
          
        }
        return s.call(this,o,a,l)
      }
    }), LB(r, "removeEventListener", function(s){
      return function(o,a,l){
        if(o==="click"||o=="keypress")try{
          const u=this.__sentry_instrumentation_handlers__||{
            
          },d=u[o];
          d&&(d.refCount--,d.refCount<=0&&(s.call(this,o,d.handler,l),d.handler=void 0,delete u[o]),Object.keys(u).length===0&&delete this.__sentry_instrumentation_handlers__)
        }
        catch{
          
        }
        return s.call(this,o,a,l)
      }
    }))
  })
}
function BeA(n){
  if(n.type!==G_c)return!1;
  try{
    if(!n.target||n.target._sentryId!==W_c)return!1
  }
  catch{
    
  }
  return!0
}
function ReA(n, e){
  return n!=="keypress"?!1:e?.tagName?!(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable):!0
}
function hnh(n, e=!1){
  return t=>{
    if(!t||t._sentryCaptured)return;
    const i=PeA(t);
    if(ReA(t.type, i))return;
    tW(t, "_sentryCaptured", !0), i&&!i._sentryId&&tW(i, "_sentryId", NB());
    const r=t.type==="keypress"?"input":t.type;
    BeA(t)||(n({
      event:t,name:r,global:e
    }), G_c=t.type, W_c=i?i._sentryId:void 0), clearTimeout(pnh), pnh=zC.setTimeout(()=>{
      W_c=void 0,G_c=void 0
    }, mnh)
  }
}
function PeA(n){
  try{
    return n.target
  }
  catch{
    return null
  }
}
var mnh, pnh, G_c, W_c, LeA=