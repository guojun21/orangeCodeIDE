// Module: out-build/vs/editor/contrib/find/browser/replaceAllCommand.js
// Offset: 25141265 (bundle byte offset)
// Size: 1472 bytes

ts(), Xbg=class{
  constructor(n, e, t){
    this._editorSelection=n, this._ranges=e, this._replaceStrings=t, this._trackedEditorSelectionId=null
  }
  getEditOperations(n, e){
    if(this._ranges.length>0){
      const t=[];
      for(let s=0;
      s<this._ranges.length;
      s++)t.push({
        range:this._ranges[s],text:this._replaceStrings[s]
      });
      t.sort((s,o)=>Zt.compareRangesUsingStarts(s.range,o.range));
      const i=[];
      let r=t[0];
      for(let s=1;
      s<t.length;
      s++)r.range.endLineNumber===t[s].range.startLineNumber&&r.range.endColumn===t[s].range.startColumn?(r.range=r.range.plusRange(t[s].range),r.text=r.text+t[s].text):(i.push(r),r=t[s]);
      i.push(r);
      for(const s of i)e.addEditOperation(s.range,s.text)
    }
    this._trackedEditorSelectionId=e.trackSelection(this._editorSelection)
  }
  computeCursorState(n, e){
    return e.getTrackedSelection(this._trackedEditorSelectionId)
  }
}
}
});
function cQl(n, e){
  if(n&&n[0]!==""){
    const t=evg(n, e, "-"), i=evg(n, e, "_");
    return t&&!i?tvg(n, e, "-"):!t&&i?tvg(n, e, "_"):n[0].toUpperCase()===n[0]?e.toUpperCase():n[0].toLowerCase()===n[0]?e.toLowerCase():z0c(n[0][0])&&e.length>0?e[0].toUpperCase()+e.substr(1):n[0][0].toUpperCase()!==n[0][0]&&e.length>0?e[0].toLowerCase()+e.substr(1):e
  }
  else return e
}
function evg(n, e, t){
  return n[0].indexOf(t)!==-1&&e.indexOf(t)!==-1&&n[0].split(t).length===e.split(t).length
}
function tvg(n, e, t){
  const i=e.split(t), r=n[0].split(t);
  let s="";
  return i.forEach((o, a)=>{
    s+=cQl([r[a]], o)+t
  }), s.slice(0, -1)
}
var nvg=