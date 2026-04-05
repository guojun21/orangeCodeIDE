// Module: out-build/vs/editor/contrib/folding/browser/foldingDecorations.js
// Offset: 25228133 (bundle byte offset)
// Size: 4981 bytes

qi(), bv(), Ht(), Nl(), Pm(), Io(), Jr(), nAg=Rn("editor.foldBackground", {
  light:rl(Doe, .3), dark:rl(Doe, .3), hcDark:null, hcLight:null
}, _(1141, null), !0), Rn("editor.foldPlaceholderForeground", {
  light:"#808080", dark:"#808080", hcDark:null, hcLight:null
}, _(1142, null)), Rn("editorGutter.foldingControlForeground", eOt, _(1143, null)), ddn=us("folding-expanded", Be.chevronDown, _(1144, null)), hdn=us("folding-collapsed", Be.chevronRight, _(1145, null)), TQl=us("folding-manual-collapsed", hdn, _(1146, null)), IQl=us("folding-manual-expanded", ddn, _(1147, null)), Bla={
  color:kC(nAg), position:1
}, kCt=_(1148, null), bgi=_(1149, null), iAg=class sge{
  static{
    this.COLLAPSED_VISUAL_DECORATION=Zh.register({
      description:"folding-collapsed-visual-decoration",stickiness:0,afterContentClassName:"inline-folded",isWholeLine:!0,linesDecorationsTooltip:kCt,firstLineDecorationClassName:Qt.asClassName(hdn)
    })
  }
  static{
    this.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION=Zh.register({
      description:"folding-collapsed-highlighted-visual-decoration",stickiness:0,afterContentClassName:"inline-folded",className:"folded-background",minimap:Bla,isWholeLine:!0,linesDecorationsTooltip:kCt,firstLineDecorationClassName:Qt.asClassName(hdn)
    })
  }
  static{
    this.MANUALLY_COLLAPSED_VISUAL_DECORATION=Zh.register({
      description:"folding-manually-collapsed-visual-decoration",stickiness:0,afterContentClassName:"inline-folded",isWholeLine:!0,linesDecorationsTooltip:kCt,firstLineDecorationClassName:Qt.asClassName(TQl)
    })
  }
  static{
    this.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION=Zh.register({
      description:"folding-manually-collapsed-highlighted-visual-decoration",stickiness:0,afterContentClassName:"inline-folded",className:"folded-background",minimap:Bla,isWholeLine:!0,linesDecorationsTooltip:kCt,firstLineDecorationClassName:Qt.asClassName(TQl)
    })
  }
  static{
    this.NO_CONTROLS_COLLAPSED_RANGE_DECORATION=Zh.register({
      description:"folding-no-controls-range-decoration",stickiness:0,afterContentClassName:"inline-folded",isWholeLine:!0,linesDecorationsTooltip:kCt
    })
  }
  static{
    this.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION=Zh.register({
      description:"folding-no-controls-range-decoration",stickiness:0,afterContentClassName:"inline-folded",className:"folded-background",minimap:Bla,isWholeLine:!0,linesDecorationsTooltip:kCt
    })
  }
  static{
    this.EXPANDED_VISUAL_DECORATION=Zh.register({
      description:"folding-expanded-visual-decoration",stickiness:1,isWholeLine:!0,firstLineDecorationClassName:"alwaysShowFoldIcons "+Qt.asClassName(ddn),linesDecorationsTooltip:bgi
    })
  }
  static{
    this.EXPANDED_AUTO_HIDE_VISUAL_DECORATION=Zh.register({
      description:"folding-expanded-auto-hide-visual-decoration",stickiness:1,isWholeLine:!0,firstLineDecorationClassName:Qt.asClassName(ddn),linesDecorationsTooltip:bgi
    })
  }
  static{
    this.MANUALLY_EXPANDED_VISUAL_DECORATION=Zh.register({
      description:"folding-manually-expanded-visual-decoration",stickiness:0,isWholeLine:!0,firstLineDecorationClassName:"alwaysShowFoldIcons "+Qt.asClassName(IQl),linesDecorationsTooltip:bgi
    })
  }
  static{
    this.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION=Zh.register({
      description:"folding-manually-expanded-auto-hide-visual-decoration",stickiness:0,isWholeLine:!0,firstLineDecorationClassName:Qt.asClassName(IQl),linesDecorationsTooltip:bgi
    })
  }
  static{
    this.NO_CONTROLS_EXPANDED_RANGE_DECORATION=Zh.register({
      description:"folding-no-controls-range-decoration",stickiness:0,isWholeLine:!0
    })
  }
  static{
    this.HIDDEN_RANGE_DECORATION=Zh.register({
      description:"folding-hidden-range-decoration",stickiness:1
    })
  }
  constructor(e, t){
    this.editor=e, this.reactiveStorageService=t, this.showFoldingControls="mouseover", this.showFoldingHighlights=!0
  }
  getDecorationOption(e, t, i){
    return t?sge.HIDDEN_RANGE_DECORATION:this.showFoldingControls==="never"?e?this.showFoldingHighlights?sge.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION:sge.NO_CONTROLS_COLLAPSED_RANGE_DECORATION:sge.NO_CONTROLS_EXPANDED_RANGE_DECORATION:e?i?this.showFoldingHighlights?sge.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION:sge.MANUALLY_COLLAPSED_VISUAL_DECORATION:this.showFoldingHighlights?sge.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION:sge.COLLAPSED_VISUAL_DECORATION:this.showFoldingControls==="mouseover"?i?sge.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION:sge.EXPANDED_AUTO_HIDE_VISUAL_DECORATION:i?sge.MANUALLY_EXPANDED_VISUAL_DECORATION:sge.EXPANDED_VISUAL_DECORATION
  }
  changeDecorations(e){
    return this.editor.changeDecorations(e)
  }
  removeDecorations(e){
    this.editor.removeDecorations(e)
  }
}
}
});
function jCA(n){
  return!n||n.length===0?{
    startsInside:()=>!1
  }
  :{
    startsInside(e, t){
      for(const i of n){
        const r=i.startLineNumber;
        if(r>=e&&r<=t)return!0
      }
      return!1
    }
  }
}
function rAg(n){
  if(!Df(n)){
    if(!$g(n))return!1;
    const e=n;
    if(!Df(e.levels)&&!_1(e.levels)||!Df(e.direction)&&!Qo(e.direction)||!Df(e.selectionLines)&&(!Array.isArray(e.selectionLines)||!e.selectionLines.every(_1)))return!1
  }
  return!0
}
var ECt, z9, AJ, BQl, mU, sAg, oAg, aAg, cAg, lAg, uAg, dAg, hAg, mAg, pAg, gAg, fAg, bAg, RQl, vAg, AAg, yAg, wAg, _Ag, CAg, jAe=