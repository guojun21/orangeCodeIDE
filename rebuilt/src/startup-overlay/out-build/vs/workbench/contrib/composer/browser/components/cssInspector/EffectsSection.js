"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/EffectsSection.js
// Offset: 31978319 (bundle byte offset)
// Size: 3418 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
qi();
Jr();
Ek();
mB();
_L();
jit();
qMf = qe("<div class=css-effects-menu><div class=css-effects-controls><div class=css-effects-parameters><div class=css-input-group><label class=css-input-label-draggable aria-label=\"Blur amount\">Blur</label><div class=css-input-field><input class=css-number-input type=number min=0><span class=\"css-input-suffix css-input-suffix-draggable\">px");
HMf = qe("<div class=css-effects-controls><div class=css-effects-parameters><div class=css-input-group><label class=css-input-label-draggable aria-label=\"Shadow X offset\">X</label><div class=css-input-field><input class=css-number-input type=number><span class=\"css-input-suffix css-input-suffix-draggable\">px</span></div></div><div class=css-input-group><label class=css-input-label-draggable aria-label=\"Shadow Y offset\">Y</label><div class=css-input-field><input class=css-number-input type=number><span class=\"css-input-suffix css-input-suffix-draggable\">px</span></div></div><div class=css-input-group><label class=css-input-label-draggable aria-label=\"Shadow blur\">Blur</label><div class=css-input-field><input class=css-number-input type=number min=0><span class=\"css-input-suffix css-input-suffix-draggable\">px</span></div></div><div class=css-input-group><label class=css-input-label-draggable aria-label=\"Shadow spread\">Spread</label><div class=css-input-field><input class=css-number-input type=number><span class=\"css-input-suffix css-input-suffix-draggable\">px</span></div></div></div><div class=css-effects-color-row><div class=css-color-input-container><input class=css-color-swatch-inline type=color><input class=css-hex-input type=text><div class=css-input-separator></div><div class=\"css-opacity-input-inline css-input-field\"><input class=css-number-input type=number min=0 max=100><span class=\"css-input-suffix css-input-suffix-draggable\"title=\"Drag to adjust opacity\"aria-label=\"Drag to adjust opacity\">%");
JMf = qe("<div class=css-effects-menu>");
GMf = qe("<div class=css-effects-list role=list aria-label=Effects>");
WMf = qe("<section class=css-inspector-section><div><div class=css-section-title>Shadow & Blur</div><div class=css-section-actions><button type=button class=css-section-action><i></i></button></div></div><div class=\"css-section-body css-effects-body\">");
QMf = qe("<div class=css-effect-entry role=listitem><div class=css-effects-type-select-wrapper><div class=css-effects-type-select-container><select class=css-effects-type-select></select><label class=css-effects-type-select-adornment aria-label=\"Change effect type\"><i></i></label></div></div><div class=css-effects-row-actions>");
jMf = qe("<button type=button aria-haspopup=menu><i>");
zMf = qe("<option>");
VMf = qe("<button type=button><i>");
KMf = qe("<button type=button class=css-stroke-action><i>");
YMf = [{
  id: "drop-shadow",
  label: "Drop shadow"
}, {
  id: "inner-shadow",
  label: "Inner shadow"
}, {
  id: "layer-blur",
  label: "Layer Blur"
}, {
  id: "backdrop-blur",
  label: "Backdrop Blur"
}];
Pvu = {
  "drop-shadow": "Drop shadow",
  "inner-shadow": "Inner shadow",
  "layer-blur": "Layer Blur",
  "backdrop-blur": "Backdrop Blur"
};
rCi = n => n?.kind === "shadow";
Lvu = n => n?.kind === "layer-blur" || n?.kind === "backdrop-blur";
Nvu = (n, e) => n === e ? true : !n || !e || n.kind !== e.kind ? false : n.kind === "shadow" && e.kind === "shadow" ? n.index === e.index : true;
