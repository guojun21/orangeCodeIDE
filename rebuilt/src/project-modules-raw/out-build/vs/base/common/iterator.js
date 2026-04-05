// Module: out-build/vs/base/common/iterator.js
// Offset: 255877 (bundle byte offset)
// Size: 2543 bytes

Js(), (function(n){
  function e(R){
    return R&&typeof R=="object"&&typeof R[Symbol.iterator]=="function"
  }
  n.is=e;
  const t=Object.freeze([]);
  function i(){
    return t
  }
  n.empty=i;
  function*r(R){
    yield R
  }
  n.single=r;
  function s(R){
    return e(R)?R:r(R)
  }
  n.wrap=s;
  function o(R){
    return R||t
  }
  n.from=o;
  function*a(R){
    for(let N=R.length-1;
    N>=0;
    N--)yield R[N]
  }
  n.reverse=a;
  function l(R){
    return!R||R[Symbol.iterator]().next().done===!0
  }
  n.isEmpty=l;
  function u(R){
    return R[Symbol.iterator]().next().value
  }
  n.first=u;
  function d(R, N){
    let M=0;
    for(const O of R)if(N(O, M++))return!0;
    return!1
  }
  n.some=d;
  function m(R, N){
    for(const M of R)if(N(M))return M
  }
  n.find=m;
  function*p(R, N){
    for(const M of R)N(M)&&(yield M)
  }
  n.filter=p;
  function*g(R, N){
    let M=0;
    for(const O of R)yield N(O, M++)
  }
  n.map=g;
  function*f(R, N){
    let M=0;
    for(const O of R)yield*N(O, M++)
  }
  n.flatMap=f;
  function*A(...R){
    for(const N of R)s0c(N)?yield*N:yield N
  }
  n.concat=A;
  function w(R, N, M){
    let O=M;
    for(const $ of R)O=N(O, $);
    return O
  }
  n.reduce=w;
  function C(R){
    let N=0;
    for(const M of R)N++;
    return N
  }
  n.length=C;
  function*x(R, N, M=R.length){
    for(N<-R.length&&(N=0), N<0&&(N+=R.length), M<0?M+=R.length:M>R.length&&(M=R.length);
    N<M;
    N++)yield R[N]
  }
  n.slice=x;
  function I(R, N=Number.POSITIVE_INFINITY){
    const M=[];
    if(N===0)return[M, R];
    const O=R[Symbol.iterator]();
    for(let $=0;
    $<N;
    $++){
      const H=O.next();
      if(H.done)return[M,n.empty()];
      M.push(H.value)
    }
    return[M, {
      [Symbol.iterator](){
        return O
      }
    }
    ]
  }
  n.consume=I;
  async function B(R){
    const N=[];
    for await(const M of R)N.push(M);
    return Promise.resolve(N)
  }
  n.asyncToArray=B
})(bl||(bl={
  
}))
}
});
function J2n(n){
  yze=n
}
function tgt(n){
  return yze?.trackDisposable(n), n
}
function ngt(n){
  yze?.markAsDisposed(n)
}
function G2n(n, e){
  yze?.setParent(n, e)
}
function ctA(n, e){
  if(yze)for(const t of n)yze.setParent(t, e)
}
function Cte(n){
  return yze?.markAsSingleton(n), n
}
function Ste(n){
  return typeof n=="object"&&n!==null&&typeof n.dispose=="function"&&n.dispose.length===0
}
function Bo(n){
  if(bl.is(n)){
    const e=[];
    for(const t of n)if(t)try{
      t.dispose()
    }
    catch(i){
      e.push(i)
    }
    if(e.length===1)throw e[0];
    if(e.length>1)throw new AggregateError(e, "Encountered errors while disposing of store");
    return Array.isArray(n)?[]:n
  }
  else if(n)return n.dispose(), n
}
function o0c(n){
  for(const e of n)Ste(e)&&e.dispose();
  return[]
}
function H_(...n){
  const e=$i(()=>Bo(n));
  return ctA(n, e), e
}
function $i(n){
  const e=tgt({
    dispose:_6(()=>{
      ngt(e),n()
    })
  });
  return e
}
function Jnh(n, e){
  let t=!1;
  return n.then(i=>{
    t||e(i)
  }), $i(()=>{
    t=!0
  })
}
var a0c, FMo, Gnh, Wnh, Qnh, jnh, yze, znh, Vnh, Ut, at, uo, Knh, W2n, igt, c0c, Ynh, mp, rt=