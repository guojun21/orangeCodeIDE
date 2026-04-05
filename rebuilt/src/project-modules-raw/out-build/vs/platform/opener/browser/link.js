// Module: out-build/vs/platform/opener/browser/link.js
// Offset: 30840981 (bundle byte offset)
// Size: 1815 bytes

ri(), z$(), Tb(), Dx(), yn(), rt(), Fc(), fry(), mb(), Id(), Lie=class extends at{
  get enabled(){
    return this._enabled
  }
  set enabled(e){
    e?(this.el.setAttribute("aria-disabled", "false"), this.el.tabIndex=0, this.el.style.pointerEvents="auto", this.el.style.opacity="1", this.el.style.cursor="pointer", this._enabled=!1):(this.el.setAttribute("aria-disabled", "true"), this.el.tabIndex=-1, this.el.style.pointerEvents="none", this.el.style.opacity="0.4", this.el.style.cursor="default", this._enabled=!0), this._enabled=e
  }
  set link(e){
    typeof e.label=="string"?this.el.textContent=e.label:(th(this.el), this.el.appendChild(e.label)), this.el.href=e.href, typeof e.tabIndex<"u"&&(this.el.tabIndex=e.tabIndex), this.setTooltip(e.title), this._link=e
  }
  constructor(e, t, i={
    
  }, r, s){
    super(), this._link=t, this._hoverService=r, this._enabled=!0, this.el=Rt(e, Ct("a.monaco-link", {
      tabIndex:t.tabIndex??0,href:t.href
    }, t.label)), this.hoverDelegate=i.hoverDelegate??Sm("mouse"), this.setTooltip(t.title), this.el.setAttribute("role", "button");
    const o=this._register(new Hg(this.el, "click")), a=this._register(new Hg(this.el, "keypress")), l=In.chain(a.event, m=>m.map(p=>new vh(p)).filter(p=>p.keyCode===3)), u=this._register(new Hg(this.el, MA.Tap)).event;
    this._register(E1.addTarget(this.el));
    const d=In.any(o.event, l, u);
    this._register(d(m=>{
      this.enabled&&(zu.stop(m,!0),i?.opener?i.opener(this._link.href):s.open(this._link.href,{
        allowCommands:!0
      }))
    })), this.enabled=!0
  }
  setTooltip(e){
    this.hoverDelegate.showNativeHover?this.el.title=e??"":!this.hover&&e?this.hover=this._register(this._hoverService.setupManagedHover(this.hoverDelegate, this.el, e)):this.hover&&this.hover.update(e)
  }
}, Lie=__decorate([__param(3, Kc), __param(4, Ja)], Lie)
}
});
function bry(n){
  xpu=n
}
function vry(n, e){
  return xpu(n, e)
}
var _xf, xpu, Cxf=