// Module: out-build/vs/editor/common/viewModel/monospaceLineBreaksComputer.js
// Offset: 1316836 (bundle byte offset)
// Size: 1129 bytes

oa(), U4t(), Tft(), Ffh(), $fh=class tGb{
  static create(e){
    return new tGb(e.get(139), e.get(138))
  }
  constructor(e, t){
    this.classifier=new Hfh(e, t)
  }
  createLineBreaksComputer(e, t, i, r, s){
    const o=[], a=[], l=[];
    return{
      addRequest:(u,d,m)=>{
        o.push(u),a.push(d),l.push(m)
      },finalize:()=>{
        const u=e.typicalFullwidthCharacterWidth/e.typicalHalfwidthCharacterWidth,d=[];
        for(let m=0,p=o.length;
        m<p;
        m++){
          const g=a[m],f=l[m];
          f&&!f.injectionOptions&&!g?d[m]=NaA(this.classifier,f,o[m],t,i,u,r,s):d[m]=MaA(this.classifier,o[m],g,t,i,u,r,s)
        }
        return HOo.length=0,JOo.length=0,d
      }
    }
  }
}, (function(n){
  n[n.NONE=0]="NONE", n[n.BREAK_BEFORE=1]="BREAK_BEFORE", n[n.BREAK_AFTER=2]="BREAK_AFTER", n[n.BREAK_IDEOGRAPHIC=3]="BREAK_IDEOGRAPHIC"
})(qfh||(qfh={
  
})), Hfh=class extends m4n{
  constructor(n, e){
    super(0);
    for(let t=0;
    t<n.length;
    t++)this.set(n.charCodeAt(t), 1);
    for(let t=0;
    t<e.length;
    t++)this.set(e.charCodeAt(t), 2)
  }
  get(n){
    return n>=0&&n<256?this._asciiMap[n]:n>=12352&&n<=12543||n>=13312&&n<=19903||n>=19968&&n<=40959?3:this._map.get(n)||this._defaultValue
  }
}, HOo=[], JOo=[]
}
}), Nxc, OaA=