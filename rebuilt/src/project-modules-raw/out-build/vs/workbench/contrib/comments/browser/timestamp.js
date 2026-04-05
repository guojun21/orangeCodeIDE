// Module: out-build/vs/workbench/contrib/comments/browser/timestamp.js
// Offset: 33190464 (bundle byte offset)
// Size: 1388 bytes

ri(), mb(), A9(), rt(), _r(), tki(), fTa=class extends at{
  constructor(n, e, t, i){
    super(), this.configurationService=n, this._date=Rt(t, Ct("span.timestamp")), this._date.style.display="none", this._useRelativeTime=this.useRelativeTimeSetting, this.hover=this._register(e.setupManagedHover(Sm("mouse"), this._date, "")), this.setTimestamp(i)
  }
  get useRelativeTimeSetting(){
    return this.configurationService.getValue(_bn).useRelativeTime
  }
  async setTimestamp(n){
    (n!==this._timestamp||this.useRelativeTimeSetting!==this._useRelativeTime)&&this.updateDate(n), this._timestamp=n, this._useRelativeTime=this.useRelativeTimeSetting
  }
  updateDate(n){
    if(!n)this._date.textContent="", this._date.style.display="none";
    else if(n!==this._timestamp||this.useRelativeTimeSetting!==this._useRelativeTime){
      this._date.style.display="";
      let e,t;
      this.useRelativeTimeSetting?(e=this.getRelative(n),t=this.getDateString(n)):e=this.getDateString(n),this._date.textContent=e,this.hover.update(t??"")
    }
  }
  getRelative(n){
    return m2(n, !0, !0)
  }
  getDateString(n){
    return n.toLocaleString(yC)
  }
}
}
});
function zuy(n, e, t, i=r=>r==="navigation"){
  for(const r of n){
    let[s, o]=r;
    if(t&&(o=o.map(a=>a instanceof Ub&&a.alt?a.alt:a)), i(s))(Array.isArray(e)?e:e.primary).unshift(...o);
    else{
      const a=Array.isArray(e)?e:e.secondary;
      a.length>0&&a.push(new id),a.push(...o)
    }
  }
}
var g8f, bTa, Vuy=