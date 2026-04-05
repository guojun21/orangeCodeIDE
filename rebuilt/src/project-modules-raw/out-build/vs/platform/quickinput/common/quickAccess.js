// Module: out-build/vs/platform/quickinput/common/quickAccess.js
// Offset: 27603970 (bundle byte offset)
// Size: 966 bytes

Vs(), rt(), Ws(), (function(n){
  n[n.PRESERVE=0]="PRESERVE", n[n.LAST=1]="LAST"
})(vmn||(vmn={
  
})), kJ={
  Quickaccess:"workbench.contributions.quickaccess"
}, IJg=class{
  constructor(){
    this.providers=[], this.defaultProvider=void 0
  }
  registerQuickAccessProvider(n){
    return n.prefix.length===0?this.defaultProvider=n:this.providers.push(n), this.providers.sort((e, t)=>t.prefix.length-e.prefix.length), $i(()=>{
      this.providers.splice(this.providers.indexOf(n),1),this.defaultProvider===n&&(this.defaultProvider=void 0)
    })
  }
  getQuickAccessProviders(){
    return lh([this.defaultProvider, ...this.providers])
  }
  getQuickAccessProvider(n){
    return n&&this.providers.find(t=>n.startsWith(t.prefix))||void 0||this.defaultProvider
  }
  clear(){
    const n=[...this.providers], e=this.defaultProvider;
    return this.providers=[], this.defaultProvider=void 0, ()=>{
      this.providers=n,this.defaultProvider=e
    }
  }
}, Di.add(kJ.Quickaccess, new IJg)
}
}), $vi, DJg=