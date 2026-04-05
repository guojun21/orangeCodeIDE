// Module: out-build/vs/workbench/contrib/search/common/search.js
// Offset: 28189898 (bundle byte offset)
// Size: 613 bytes

_s(), ps(), Nu(), ss(), Po(), ns(), ts(), Js(), si(), oa(), Vs(), (function(n){
  const e=[];
  function t(r){
    let s=r;
    return s&&e.push(s), {
      dispose(){
        if(s){
          const o=e.indexOf(s);
          o>=0&&(e.splice(o,1),s=void 0)
        }
      }
    }
  }
  n.register=t;
  function i(){
    return e.slice(0)
  }
  n.all=i
})(bva||(bva={
  
})), YXg=class{
  constructor(n, e){
    this.symbol=n, this.provider=e
  }
}, uau=/\s?[#:\(](?:line )?(\d*)(?:[#:, ](\d*))?\)?:?\s*$/, (function(n){
  n[n.Idle=0]="Idle", n[n.Searching=1]="Searching", n[n.SlowSearch=2]="SlowSearch"
})(pie||(pie={
  
})), jAi=new Sn("searchState", pie.Idle)
}
}), cB, ZXg, XXg, lP=