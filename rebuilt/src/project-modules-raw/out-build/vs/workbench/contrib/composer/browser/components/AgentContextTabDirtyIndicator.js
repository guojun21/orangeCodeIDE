// Module: out-build/vs/workbench/contrib/composer/browser/components/AgentContextTabDirtyIndicator.js
// Offset: 34053936 (bundle byte offset)
// Size: 429 bytes

Ie(), Ie(), Ie(), hqf=qe("<div>")
}
});
function lpy(n){
  const t=wr().textFileService, [i, r]=lt(!1);
  return An(()=>{
    const s=n();
    if(!s){
      r(!1);
      return
    }
    const o=()=>{
      const l=t.isDirty(s);
      r(l)
    };
    o();
    const a=t.files.onDidChangeDirty(l=>{
      l.resource.toString()===s.toString()&&o()
    });
    Ai(()=>{
      a.dispose()
    })
  }), {
    isDirty:i, uri:n()
  }
}
var upy=