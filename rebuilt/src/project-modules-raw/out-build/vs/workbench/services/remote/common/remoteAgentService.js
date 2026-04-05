// Module: out-build/vs/workbench/services/remote/common/remoteAgentService.js
// Offset: 27518235 (bundle byte offset)
// Size: 1083 bytes

Wt(), vr(), Vp=xi("remoteAgentService"), $Ne=new class{
  constructor(){
    this.maxSampleCount=5, this.sampleDelay=2e3, this.initial=[], this.maxInitialCount=3, this.average=[], this.maxAverageCount=100, this.highLatencyMultiple=2, this.highLatencyMinThreshold=500, this.highLatencyMaxThreshold=1500, this.lastMeasurement=void 0
  }
  get latency(){
    return this.lastMeasurement
  }
  async measure(n){
    let e=1/0;
    for(let i=0;
    i<this.maxSampleCount;
    i++){
      const r=await n.getRoundTripTime();
      if(r===void 0)return;
      e=Math.min(e,r/2),await Af(this.sampleDelay)
    }
    this.average.push(e), this.average.length>this.maxAverageCount&&this.average.shift();
    let t;
    return this.initial.length<this.maxInitialCount?this.initial.push(e):t=this.initial.reduce((i, r)=>i+r, 0)/this.initial.length, this.lastMeasurement={
      initial:t,current:e,average:this.average.reduce((i,r)=>i+r,0)/this.average.length,high:typeof t>"u"?!1:e>this.highLatencyMaxThreshold||e>this.highLatencyMinThreshold&&e>t*this.highLatencyMultiple
    }, this.lastMeasurement
  }
}
}
}), hru, kp, Nfa, _g=