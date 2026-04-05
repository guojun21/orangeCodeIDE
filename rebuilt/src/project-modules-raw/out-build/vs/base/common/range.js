// Module: out-build/vs/base/common/range.js
// Offset: 1967684 (bundle byte offset)
// Size: 1077 bytes

(function(n){
  function e(s, o){
    if(s.start>=o.end||o.start>=s.end)return{
      start:0,end:0
    };
    const a=Math.max(s.start, o.start), l=Math.min(s.end, o.end);
    return l-a<=0?{
      start:0,end:0
    }
    :{
      start:a,end:l
    }
  }
  n.intersect=e;
  function t(s){
    return s.end-s.start<=0
  }
  n.isEmpty=t;
  function i(s, o){
    return!t(e(s, o))
  }
  n.intersects=i;
  function r(s, o){
    const a=[], l={
      start:s.start,end:Math.min(o.start,s.end)
    }, u={
      start:Math.max(o.end,s.start),end:s.end
    };
    return t(l)||a.push(l), t(u)||a.push(u), a
  }
  n.relativeComplement=r
})(QH||(QH={
  
}))
}
});
function t_h(n, e){
  const t=[];
  for(const i of e){
    if(n.start>=i.range.end)continue;
    if(n.end<i.range.start)break;
    const r=QH.intersect(n, i.range);
    QH.isEmpty(r)||t.push({
      range:r,size:i.size
    })
  }
  return t
}
function GIc({
  start:n, end:e
}, t){
  return{
    start:n+t, end:e+t
  }
}
function EuA(n){
  const e=[];
  let t=null;
  for(const i of n){
    const r=i.range.start, s=i.range.end, o=i.size;
    if(t&&o===t.size){
      t.range.end=s;
      continue
    }
    t={
      range:{
        start:r,end:s
      },size:o
    }, e.push(t)
  }
  return e
}
function xuA(...n){
  return EuA(n.reduce((e, t)=>e.concat(t), []))
}
var n_h, TuA=