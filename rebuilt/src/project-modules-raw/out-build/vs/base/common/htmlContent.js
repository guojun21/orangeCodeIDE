// Module: out-build/vs/base/common/htmlContent.js
// Offset: 2038783 (bundle byte offset)
// Size: 1211 bytes

_s(), kW(), zr(), Yr(), oa(), Yn(), (function(n){
  n[n.Paragraph=0]="Paragraph", n[n.Break=1]="Break"
})(__h||(__h={
  
})), _c=class xGb{
  static lift(e){
    const t=new xGb(e.value, e);
    return t.uris=e.uris, t.baseUri=e.baseUri?je.revive(e.baseUri):void 0, t
  }
  constructor(e="", t=!1){
    if(this.value=e, typeof this.value!="string")throw uw("value");
    typeof t=="boolean"?(this.isTrusted=t, this.supportThemeIcons=!1, this.supportHtml=!1):(this.isTrusted=t.isTrusted??void 0, this.supportThemeIcons=t.supportThemeIcons??!1, this.supportHtml=t.supportHtml??!1)
  }
  appendText(e, t=0){
    return this.value+=obt(this.supportThemeIcons?FuA(e):e).replace(/([ \t]+)/g, (i, r)=>"&nbsp;".repeat(r.length)).replace(/\>/gm, "\\>").replace(/\n/g, t===1?`\\
`:`

`), this
  }
  appendMarkdown(e){
    return this.value+=e, this
  }
  appendCodeblock(e, t){
    return this.value+=`
${UuA(t,e)}
`, this
  }
  appendLink(e, t, i){
    return this.value+="[", this.value+=this._escape(t, "]"), this.value+="](", this.value+=this._escape(String(e), ")"), i&&(this.value+=` "${this._escape(this._escape(i,'"'),")")}"`), this.value+=")", this
  }
  _escape(e, t){
    const i=new RegExp(UI(t), "g");
    return e.replace(i, (r, s)=>e.charAt(s-1)!=="\\"?`\\${r}`:r)
  }
}
}
}), G3o, w3t, _3t=