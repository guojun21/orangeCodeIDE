// Module: out-build/vs/workbench/contrib/chat/browser/chatAccessibilityProvider.js
// Offset: 30880086 (bundle byte offset)
// Size: 1446 bytes

vRe(), Ht(), o5(), Wq(), mCa=class{
  constructor(e){
    this._accessibleViewService=e
  }
  getWidgetRole(){
    return"list"
  }
  getRole(e){
    return"listitem"
  }
  getWidgetAriaLabel(){
    return _(5169, null)
  }
  getAriaLabel(e){
    return Gq(e)?e.messageText:rA(e)?this._getLabelWithInfo(e):""
  }
  _getLabelWithInfo(e){
    const t=this._accessibleViewService.getOpenAriaHint("accessibility.verbosity.panelChat");
    let i="";
    const r=e.response.value.filter(m=>m.kind==="toolInvocation").filter(m=>!m.isComplete);
    let s="";
    if(r.length){
      const m=r.map(p=>p.confirmationMessages?.title).filter(p=>!!p);
      m.length&&(s=_(5170,null,m.join(", ")))
    }
    const o=cE.lexer(e.response.toString()).filter(m=>m.type==="table")?.length??0;
    let a="";
    switch(o){
      case 0:break;
      case 1:a=_(5171,null);
      break;
      default:a=_(5172,null,o);
      break
    }
    const l=e.response.value.filter(m=>m.kind==="treeData").length??0;
    let u="";
    switch(l){
      case 0:break;
      case 1:u=_(5173,null);
      break;
      default:u=_(5174,null,l);
      break
    }
    const d=cE.lexer(e.response.toString()).filter(m=>m.type==="code")?.length??0;
    switch(d){
      case 0:i=t?_(5175,null,s,u,a,e.response.toString(),t):_(5176,null,u,e.response.toString());
      break;
      case 1:i=t?_(5177,null,s,u,a,e.response.toString(),t):_(5178,null,u,e.response.toString());
      break;
      default:i=t?_(5179,null,s,u,a,d,e.response.toString(),t):_(5180,null,u,d,e.response.toString());
      break
    }
    return i
  }
}, mCa=__decorate([__param(0, L2)], mCa)
}
}), Lxf, wry=