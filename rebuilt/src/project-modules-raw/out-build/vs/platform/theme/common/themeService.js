// Module: out-build/vs/platform/theme/common/themeService.js
// Offset: 906667 (bundle byte offset)
// Size: 2181 bytes

qi(), yn(), rt(), Wt(), Ws(), qI(), bo=xi("themeService"), $1c=Be.file, mVe=Be.folder, j4n={
  ThemingContribution:"base.contributions.theming"
}, Rdh=class extends at{
  constructor(){
    super(), this.themingParticipants=[], this.themingParticipants=[], this.onThemingParticipantAddedEmitter=this._register(new Qe)
  }
  onColorThemeChange(n){
    return this.themingParticipants.push(n), this.onThemingParticipantAddedEmitter.fire(n), $i(()=>{
      const e=this.themingParticipants.indexOf(n);
      this.themingParticipants.splice(e,1)
    })
  }
  get onThemingParticipantAdded(){
    return this.onThemingParticipantAddedEmitter.event
  }
  getThemingParticipants(){
    return this.themingParticipants
  }
}, q1c=new Rdh, Di.add(j4n.ThemingContribution, q1c), NH=class extends at{
  constructor(n){
    super(), this.themeService=n, this.theme=n.getColorTheme(), this._register(this.themeService.onDidColorThemeChange(e=>this.onThemeChange(e)))
  }
  onThemeChange(n){
    this.theme=n, this.updateStyles()
  }
  updateStyles(){
    
  }
  getColor(n, e){
    let t=this.theme.getColor(n);
    return t&&e&&(t=e(t, this.theme)), t?t.toString():null
  }
}
}
});
function H1c(n){
  const e=[];
  typeof n=="number"&&e.push("code/timeOrigin", n);
  function t(r, s){
    e.push(r, s?.startTime??Date.now())
  }
  function i(){
    const r=[];
    for(let s=0;
    s<e.length;
    s+=2)r.push({
      name:e[s],startTime:e[s+1]
    });
    return r
  }
  return{
    mark:t, getMarks:i
  }
}
function QsA(){
  if(typeof performance=="object"&&typeof performance.mark=="function"&&!performance.nodeTiming)return typeof performance.timeOrigin!="number"&&!performance.timing?H1c():{
    mark(n, e){
      performance.mark(n,e)
    }, getMarks(){
      let n=performance.timeOrigin;
      typeof n!="number"&&(n=performance.timing.navigationStart||performance.timing.redirectStart||performance.timing.fetchStart);
      const e=[{
        name:"code/timeOrigin",startTime:Math.round(n)
      }
      ];
      for(const t of performance.getEntriesByType("mark"))e.push({
        name:t.name,startTime:Math.round(n+t.startTime)
      });
      return e
    }
  };
  if(typeof process=="object"){
    const n=performance?.timeOrigin;
    return H1c(n)
  }
  else return console.trace("perf-util loaded in UNKNOWN environment"), H1c()
}
function jsA(n){
  return n.MonacoPerformanceMarks||(n.MonacoPerformanceMarks=QsA()), n.MonacoPerformanceMarks
}
var J1c, Yh, Pdh, O4=