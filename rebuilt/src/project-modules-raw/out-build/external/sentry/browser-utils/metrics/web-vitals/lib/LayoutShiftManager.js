// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/LayoutShiftManager.js
// Offset: 203109 (bundle byte offset)
// Size: 558 bytes

_th=class{
  constructor(){
    this._sessionValue=0, this._sessionEntries=[]
  }
  _processEntry(n){
    if(n.hadRecentInput)return;
    const e=this._sessionEntries[0], t=this._sessionEntries[this._sessionEntries.length-1];
    this._sessionValue&&e&&t&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(this._sessionValue+=n.value, this._sessionEntries.push(n)):(this._sessionValue=n.value, this._sessionEntries=[n]), this._onAfterProcessingUnexpectedShift?.(n)
  }
}
}
}), Qpt, fFt=