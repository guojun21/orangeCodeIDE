// Module: out-build/vs/editor/browser/controller/editContext/screenReaderUtils.js
// Offset: 1823234 (bundle byte offset)
// Size: 1753 bytes

ts(), Ht(), bIc=class fNi{
  static _getPageOfLine(e, t){
    return Math.floor((e-1)/t)
  }
  static _getRangeForPage(e, t){
    const i=e*t, r=i+1, s=i+t;
    return new Zt(r, 1, s+1, 1)
  }
  static fromEditorSelection(e, t, i, r){
    const o=fNi._getPageOfLine(t.startLineNumber, i), a=fNi._getRangeForPage(o, i), l=fNi._getPageOfLine(t.endLineNumber, i), u=fNi._getRangeForPage(l, i);
    let d=a.intersectRanges(new Zt(1, 1, t.startLineNumber, t.startColumn));
    if(r&&e.getValueLengthInRange(d, 1)>500){
      const C=e.modifyPosition(d.getEndPosition(),-500);
      d=Zt.fromPositions(C,d.getEndPosition())
    }
    const m=e.getValueInRange(d, 1), p=e.getLineCount(), g=e.getLineMaxColumn(p);
    let f=u.intersectRanges(new Zt(t.endLineNumber, t.endColumn, p, g));
    if(r&&e.getValueLengthInRange(f, 1)>500){
      const C=e.modifyPosition(f.getStartPosition(),500);
      f=Zt.fromPositions(f.getStartPosition(),C)
    }
    const A=e.getValueInRange(f, 1);
    let w;
    if(o===l||o+1===l)w=e.getValueInRange(t, 1);
    else{
      const C=a.intersectRanges(t),x=u.intersectRanges(t);
      w=e.getValueInRange(C,1)+"\u2026"+e.getValueInRange(x,1)
    }
    return r&&w.length>2*500&&(w=w.substring(0, 500)+"\u2026"+w.substring(w.length-500, w.length)), {
      value:m+w+A,selection:t,selectionStart:m.length,selectionEnd:m.length+w.length,startPositionWithinEditor:d.getStartPosition(),newlineCountBeforeSelection:d.endLineNumber-d.startLineNumber
    }
  }
}
}
});
function GlA(n, e, t, i){
  if(e.length===0)return 0;
  const r=n.createElement("div");
  r.style.position="absolute", r.style.top="-50000px", r.style.width="50000px";
  const s=n.createElement("span");
  bF(s, t), s.style.whiteSpace="pre", s.style.tabSize=`${i*t.spaceWidth}px`, s.append(e), r.appendChild(s), n.body.appendChild(r);
  const o=s.offsetWidth;
  return r.remove(), o
}
var Xyh, A3o, y3o, WlA=