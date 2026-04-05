// Module: out-build/vs/workbench/contrib/composer/browser/hooks/useFileMarkers.js
// Offset: 34055307 (bundle byte offset)
// Size: 699 bytes

Ti(), ay(), es()
}
});
function mqf(n){
  const[e, t]=lt(0), [i, r]=lt(0);
  return An(()=>{
    const s=n(), o=[], a=()=>{
      let l=0,u=0;
      for(const d of s)l+=d.linesAdded.get(),u+=d.linesRemoved.get();
      Gw(()=>{
        t(l),r(u)
      })
    };
    a();
    for(const l of s){
      const u={
        beginUpdate(){
          
        },endUpdate(){
          a()
        },handlePossibleChange(){
          
        },handleChange(){
          
        }
      },d={
        beginUpdate(){
          
        },endUpdate(){
          a()
        },handlePossibleChange(){
          
        },handleChange(){
          
        }
      };
      l.linesAdded.addObserver(u),l.linesRemoved.addObserver(d),o.push({
        dispose:()=>{
          l.linesAdded.removeObserver(u),l.linesRemoved.removeObserver(d)
        }
      })
    }
    Ai(()=>{
      o.forEach(l=>l.dispose())
    })
  }), {
    linesAdded:e, linesRemoved:i
  }
}
var pqf=