// Module: out-build/vs/base/browser/ui/progressbar/progressbar.js
// Offset: 30843057 (bundle byte offset)
// Size: 2690 bytes

ri(), Cxf(), vr(), rt(), Js(), Ary(), nCa="done", iCa="active", C_i="infinite", S_i="infinite-long-running", rCa="discrete", qye=class fcd extends at{
  static{
    this.LONG_RUNNING_INFINITE_THRESHOLD=1e4
  }
  static{
    this.PROGRESS_SIGNAL_DEFAULT_DELAY=3e3
  }
  constructor(e, t){
    super(), this.progressSignal=this._register(new uo), this.workedVal=0, this.showDelayedScheduler=this._register(new Hu(()=>gv(this.element), 0)), this.longRunningScheduler=this._register(new Hu(()=>this.infiniteLongRunning(), fcd.LONG_RUNNING_INFINITE_THRESHOLD)), this.create(e, t)
  }
  create(e, t){
    this.element=document.createElement("div"), this.element.classList.add("monaco-progress-container"), this.element.setAttribute("role", "progressbar"), this.element.setAttribute("aria-valuemin", "0"), e.appendChild(this.element), this.bit=document.createElement("div"), this.bit.classList.add("progress-bit"), this.bit.style.backgroundColor=t?.progressBarBackground||"#0E70C0", this.element.appendChild(this.bit)
  }
  off(){
    this.bit.style.width="inherit", this.bit.style.opacity="1", this.element.classList.remove(iCa, C_i, S_i, rCa), this.workedVal=0, this.totalWork=void 0, this.longRunningScheduler.cancel(), this.progressSignal.clear()
  }
  done(){
    return this.doDone(!0)
  }
  stop(){
    return this.doDone(!1)
  }
  doDone(e){
    return this.element.classList.add(nCa), this.element.classList.contains(C_i)?(this.bit.style.opacity="0", e?setTimeout(()=>this.off(), 200):this.off()):(this.bit.style.width="inherit", e?setTimeout(()=>this.off(), 200):this.off()), this
  }
  infinite(){
    return this.bit.style.width="2%", this.bit.style.opacity="1", this.element.classList.remove(rCa, nCa, S_i), this.element.classList.add(iCa, C_i), this.longRunningScheduler.schedule(), this
  }
  infiniteLongRunning(){
    this.element.classList.add(S_i)
  }
  total(e){
    return this.workedVal=0, this.totalWork=e, this.element.setAttribute("aria-valuemax", e.toString()), this
  }
  hasTotal(){
    return _1(this.totalWork)
  }
  worked(e){
    return e=Math.max(1, Number(e)), this.doSetWorked(this.workedVal+e)
  }
  setWorked(e){
    return e=Math.max(1, Number(e)), this.doSetWorked(e)
  }
  doSetWorked(e){
    const t=this.totalWork||100;
    return this.workedVal=e, this.workedVal=Math.min(t, this.workedVal), this.element.classList.remove(C_i, S_i, nCa), this.element.classList.add(iCa, rCa), this.element.setAttribute("aria-valuenow", e.toString()), this.bit.style.width=100*(this.workedVal/t)+"%", this
  }
  getContainer(){
    return this.element
  }
  show(e){
    this.showDelayedScheduler.cancel(), this.progressSignal.value=vry(fcd.PROGRESS_SIGNAL_DEFAULT_DELAY), typeof e=="number"?this.showDelayedScheduler.schedule(e):gv(this.element)
  }
  hide(){
    Ng(this.element), this.showDelayedScheduler.cancel(), this.progressSignal.clear()
  }
}
}
}), Tpu, Hye, sCa, oCa, k_i=