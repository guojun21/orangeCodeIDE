// Module: out-build/vs/workbench/contrib/composer/browser/hooks/useFileDirtiness.js
// Offset: 34054365 (bundle byte offset)
// Size: 942 bytes

Ti(), es()
}
});
function dpy(n){
  const t=wr().markerService, [i, r]=lt([]), [s, o]=lt([]), [a, l]=lt([]), [u, d]=lt([]), [m, p]=lt([]);
  return An(()=>{
    const g=n();
    if(!g){
      r([]),o([]),l([]),d([]),p([]);
      return
    }
    const f=()=>{
      const w=t.read({
        resource:g
      });
      r(w),o(w.filter(C=>C.severity===Gl.Error)),l(w.filter(C=>C.severity===Gl.Warning)),d(w.filter(C=>C.severity===Gl.Info)),p(w.filter(C=>C.severity===Gl.Hint))
    };
    f();
    const A=t.onMarkerChanged(w=>{
      w.some(C=>C.toString()===g.toString())&&f()
    });
    Ai(()=>{
      A.dispose()
    })
  }), {
    markers:i, errors:s, warnings:a, infos:u, hints:m, uri:n()
  }
}
function hpy(n){
  const{
    errors:e, warnings:t, infos:i, hints:r, markers:s
  }
  =dpy(n), [o, a]=lt({
    errorCount:0, warningCount:0, infoCount:0, hintCount:0, totalCount:0
  });
  return An(()=>{
    a({
      errorCount:e().length,warningCount:t().length,infoCount:i().length,hintCount:r().length,totalCount:s().length
    })
  }), o
}
var mpy=