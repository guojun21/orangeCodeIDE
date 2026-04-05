// Module: out-build/vs/base/common/cppUtils/diff/base.js
// Offset: 33809821 (bundle byte offset)
// Size: 2186 bytes

uDa.prototype={
  diff(n, e, t={
    
  }){
    let i=t.callback;
    typeof t=="function"&&(i=t, t={
      
    }), this.options=t;
    let r=this;
    function s(C){
      return i?(setTimeout(function(){
        i(void 0,C)
      },0),!0):C
    }
    n=this.castInput(n), e=this.castInput(e), n=this.removeEmpty(this.tokenize(n)), e=this.removeEmpty(this.tokenize(e));
    let o=e.length, a=n.length, l=1, u=o+a;
    t.maxEditLength&&(u=Math.min(u, t.maxEditLength));
    const d=t.timeout??1/0, m=Date.now()+d;
    let p=[{
      oldPos:-1,lastComponent:void 0
    }
    ], g=this.extractCommon(p[0], e, n, 0);
    if(p[0].oldPos+1>=a&&g+1>=o)return s([{
      value:this.join(e),count:e.length
    }
    ]);
    let f=-1/0, A=1/0;
    function w(){
      for(let C=Math.max(f,-l);
      C<=Math.min(A,l);
      C+=2){
        let x,I=p[C-1],B=p[C+1];
        I&&(p[C-1]=void 0);
        let R=!1;
        if(B){
          const M=B.oldPos-C;
          R=B&&0<=M&&M<o
        }
        let N=I&&I.oldPos+1<a;
        if(!R&&!N){
          p[C]=void 0;
          continue
        }
        if(!N||R&&I.oldPos+1<B.oldPos?x=r.addToPath(B,!0,void 0,0):x=r.addToPath(I,void 0,!0,1),g=r.extractCommon(x,e,n,C),x.oldPos+1>=a&&g+1>=o)return s(gmy(r,x.lastComponent,e,n,r.useLongestToken));
        p[C]=x,x.oldPos+1>=a&&(A=Math.min(A,C-1)),g+1>=o&&(f=Math.max(f,C+1))
      }
      l++
    }
    if(i)(function C(){
      setTimeout(function(){
        if(l>u||Date.now()>m)return i();
        w()||C()
      },0)
    })();
    else for(;
    l<=u&&Date.now()<=m;
    ){
      let C=w();
      if(C)return C
    }
  }, addToPath(n, e, t, i){
    let r=n.lastComponent;
    return r&&r.added===e&&r.removed===t?{
      oldPos:n.oldPos+i,lastComponent:{
        count:r.count+1,added:e,removed:t,previousComponent:r.previousComponent
      }
    }
    :{
      oldPos:n.oldPos+i,lastComponent:{
        count:1,added:e,removed:t,previousComponent:r
      }
    }
  }, extractCommon(n, e, t, i){
    let r=e.length, s=t.length, o=n.oldPos, a=o-i, l=0;
    for(;
    a+1<r&&o+1<s&&this.equals(e[a+1], t[o+1]);
    )a++, o++, l++;
    return l&&(n.lastComponent={
      count:l,previousComponent:n.lastComponent
    }), n.oldPos=o, a
  }, equals(n, e){
    return this.options.comparator?this.options.comparator(n, e):n===e||this.options.ignoreCase&&n.toLowerCase()===e.toLowerCase()
  }, removeEmpty(n){
    let e=[];
    for(let t=0;
    t<n.length;
    t++)n[t]&&e.push(n[t]);
    return e
  }, castInput(n){
    return n
  }, tokenize(n){
    return n.split("")
  }, join(n){
    return n.join("")
  }
}
}
});
function fmy(n, e){
  if(typeof n=="function")e.callback=n;
  else if(n)for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);
  return e
}
var WUf=