// Module: out-build/vs/editor/common/editorCommon.js
// Offset: 1048806 (bundle byte offset)
// Size: 778 bytes

(function(n){
  n[n.Smooth=0]="Smooth", n[n.Immediate=1]="Immediate"
})(Kmh||(Kmh={
  
})), SVe={
  ICodeEditor:"vs.editor.ICodeEditor", IDiffEditor:"vs.editor.IDiffEditor", InlineMultiDiffEditor:"cursor.editor.IInlineMultiDiffEditor"
}, (function(n){
  n.CompositionStart="compositionStart", n.CompositionEnd="compositionEnd", n.Type="type", n.ReplacePreviousChar="replacePreviousChar", n.CompositionType="compositionType", n.Paste="paste", n.Cut="cut"
})(Ymh||(Ymh={
  
}))
}
});
function Vbe(n){
  let e=0, t=0, i=0, r=0;
  for(let s=0, o=n.length;
  s<o;
  s++){
    const a=n.charCodeAt(s);
    a===13?(e===0&&(t=s), e++, s+1<o&&n.charCodeAt(s+1)===10?(r|=2, s++):r|=3, i=s+1):a===10&&(r|=1, e===0&&(t=s), e++, i=s+1)
  }
  return e===0&&(t=n.length), [e, t, n.length-i, r]
}
var Zmh, EVe=