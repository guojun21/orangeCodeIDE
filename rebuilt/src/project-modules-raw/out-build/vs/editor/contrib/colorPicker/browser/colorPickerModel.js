// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerModel.js
// Offset: 24737895 (bundle byte offset)
// Size: 2456 bytes

yn(), Zmg=class{
  get color(){
    return this._color
  }
  set color(n){
    this._color.equals(n)||(this._color=n, this._onDidChangeColor.fire(n))
  }
  get presentation(){
    return this.colorPresentations[this.presentationIndex]
  }
  get colorPresentations(){
    return this._colorPresentations
  }
  set colorPresentations(n){
    this._colorPresentations=n, this.presentationIndex>n.length-1&&(this.presentationIndex=0), this._onDidChangePresentation.fire(this.presentation)
  }
  constructor(n, e, t){
    this.presentationIndex=t, this._onColorFlushed=new Qe, this.onColorFlushed=this._onColorFlushed.event, this._onDidChangeColor=new Qe, this.onDidChangeColor=this._onDidChangeColor.event, this._onDidChangePresentation=new Qe, this.onDidChangePresentation=this._onDidChangePresentation.event, this.originalColor=n, this._color=n, this._colorPresentations=e
  }
  selectNextColorPresentation(){
    this.presentationIndex=(this.presentationIndex+1)%this.colorPresentations.length, this.flushColor(), this._onDidChangePresentation.fire(this.presentation)
  }
  guessColorPresentation(n, e){
    let t=-1;
    for(let i=0;
    i<this.colorPresentations.length;
    i++)if(e.toLowerCase()===this.colorPresentations[i].label){
      t=i;
      break
    }
    if(t===-1){
      const i=e.split("(")[0].toLowerCase();
      for(let r=0;
      r<this.colorPresentations.length;
      r++)if(this.colorPresentations[r].label.toLowerCase().startsWith(i)){
        t=r;
        break
      }
    }
    t!==-1&&t!==this.presentationIndex&&(this.presentationIndex=t, this._onDidChangePresentation.fire(this.presentation))
  }
  flushColor(){
    this._onColorFlushed.fire(this._color)
  }
}
}
});
async function Xmg(n, e, t){
  const i=n.getValueInRange(e.range), {
    red:r, green:s, blue:o, alpha:a
  }
  =e.color, l=new Sa(Math.round(r*255), Math.round(s*255), Math.round(o*255), a), u=new Xr(l), d=await bJh(n, e, t, Cs.None), m=new Zmg(u, [], 0);
  return m.colorPresentations=d||[], m.guessColorPresentation(u, i), {
    range:Zt.lift(e.range), model:m, provider:t
  }
}
function epg(n, e, t){
  const i=[], r=t.presentation.textEdit??{
    range:e, text:t.presentation.label, forceMoveMarkers:!1
  };
  i.push(r), t.presentation.additionalTextEdits&&i.push(...t.presentation.additionalTextEdits);
  const s=Zt.lift(r.range), o=n.getModel()._setTrackedRange(null, s, 3);
  return n.executeEdits("colorpicker", i), n.pushUndoStop(), n.getModel()._getTrackedRange(o)??s
}
async function fpi(n, e, t, i, r){
  const s=await bJh(n, {
    range:i, color:{
      red:t.rgba.r/255,green:t.rgba.g/255,blue:t.rgba.b/255,alpha:t.rgba.a
    }
  }, r.provider, Cs.None);
  e.colorPresentations=s||[]
}
var tpg, npg=