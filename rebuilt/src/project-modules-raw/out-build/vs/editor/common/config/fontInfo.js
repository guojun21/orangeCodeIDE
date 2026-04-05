// Module: out-build/vs/editor/common/config/fontInfo.js
// Offset: 1447101 (bundle byte offset)
// Size: 2925 bytes

_r(), pk(), ZOo(), lTc=Fs?1.5:1.35, $ft=8, Xbe=class dNi{
  static createFromValidatedSettings(e, t, i){
    const r=e.get(51), s=e.get(55), o=e.get(54), a=e.get(53), l=e.get(56), u=e.get(68), d=e.get(65);
    return dNi._create(r, s, o, a, l, u, d, t, i)
  }
  static createFromRawSettings(e, t, i=!1){
    const r=oz.fontFamily.validate(e.fontFamily), s=oz.fontWeight.validate(e.fontWeight), o=oz.fontSize.validate(e.fontSize), a=oz.fontLigatures2.validate(e.fontLigatures), l=oz.fontVariations.validate(e.fontVariations), u=oz.lineHeight.validate(e.lineHeight), d=oz.letterSpacing.validate(e.letterSpacing);
    return dNi._create(r, s, o, a, l, u, d, t, i)
  }
  static _create(e, t, i, r, s, o, a, l, u){
    o===0?o=lTc*i:o<$ft&&(o=o*i), o=Math.round(o), o<$ft&&(o=$ft);
    const d=1+(u?0:Ude.getZoomLevel()*.1);
    return i*=d, o*=d, s===Y4o.TRANSLATE&&(t==="normal"||t==="bold"?s=Y4o.OFF:(s=`'wght' ${parseInt(t,10)}`, t="normal")), new dNi({
      pixelRatio:l,fontFamily:e,fontWeight:t,fontSize:i,fontFeatureSettings:r,fontVariationSettings:s,lineHeight:o,letterSpacing:a
    })
  }
  constructor(e){
    this._bareFontInfoBrand=void 0, this.pixelRatio=e.pixelRatio, this.fontFamily=String(e.fontFamily), this.fontWeight=String(e.fontWeight), this.fontSize=e.fontSize, this.fontFeatureSettings=e.fontFeatureSettings, this.fontVariationSettings=e.fontVariationSettings, this.lineHeight=e.lineHeight|0, this.letterSpacing=e.letterSpacing
  }
  getId(){
    return`${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`
  }
  getMassagedFontFamily(){
    const e=jI.fontFamily, t=dNi._wrapInQuotes(this.fontFamily);
    return e&&this.fontFamily!==e?`${t}, ${e}`:t
  }
  static _wrapInQuotes(e){
    return/[, "']/.test(e)?e:/[+ ]/.test(e)?`"${
      e
    }
    "`:e}},uTc=2,XOo=class extends Xbe{constructor(n,e){super(n),this._editorStylingBrand=void 0,this.version=uTc,this.isTrusted=e,this.isMonospace=n.isMonospace,this.typicalHalfwidthCharacterWidth=n.typicalHalfwidthCharacterWidth,this.typicalFullwidthCharacterWidth=n.typicalFullwidthCharacterWidth,this.canUseHalfwidthRightwardsArrow=n.canUseHalfwidthRightwardsArrow,this.spaceWidth=n.spaceWidth,this.middotWidth=n.middotWidth,this.wsmiddotWidth=n.wsmiddotWidth,this.maxDigitWidth=n.maxDigitWidth}equals(n){return this.fontFamily===n.fontFamily&&this.fontWeight===n.fontWeight&&this.fontSize===n.fontSize&&this.fontFeatureSettings===n.fontFeatureSettings&&this.fontVariationSettings===n.fontVariationSettings&&this.lineHeight===n.lineHeight&&this.letterSpacing===n.letterSpacing&&this.typicalHalfwidthCharacterWidth===n.typicalHalfwidthCharacterWidth&&this.typicalFullwidthCharacterWidth===n.typicalFullwidthCharacterWidth&&this.canUseHalfwidthRightwardsArrow===n.canUseHalfwidthRightwardsArrow&&this.spaceWidth===n.spaceWidth&&this.middotWidth===n.middotWidth&&this.wsmiddotWidth===n.wsmiddotWidth&&this.maxDigitWidth===n.maxDigitWidth}}}}),rvh,svh,FSe,qft=