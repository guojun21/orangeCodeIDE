"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/LayoutSection.js
// Offset: 32038921 (bundle byte offset)
// Size: 10084 bytes
Ie();
Ie();
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
Ifn();
Ek();
mB();
dxe();
w1a();
jit();
$vu = qe("<i>");
d2f = qe("<span class=css-alignment-grid-dot>");
h2f = qe("<button type=button class=css-alignment-grid-cell>");
m2f = qe("<div class=css-alignment-gap-row><div class=css-alignment-control><div class=css-control-label>Alignment</div><div class=css-alignment-grid></div></div><div class=css-gap-control><div class=css-control-label>Gap</div><div class=css-input-group><label class=\"css-input-label-draggable css-gap-label-icon\"aria-label=Gap><i></i></label><div class=css-input-field><input type=text inputmode=numeric><span class=css-input-suffix>px");
p2f = qe("<button type=button class=css-grid-picker-cell>");
g2f = qe("<div class=css-grid-picker-content><div class=css-grid-picker-header><div class=css-control-label>Dimensions</div><div class=css-grid-picker-inputs><div class=css-grid-picker-input-group><label class=css-input-label-draggable aria-label=Columns title=Columns><i></i></label><input class=css-grid-picker-input type=number min=1></div><span class=css-grid-picker-separator>×</span><div class=css-grid-picker-input-group><label class=css-input-label-draggable aria-label=Rows title=Rows><i></i></label><input class=css-grid-picker-input type=number min=1></div></div></div><div class=css-grid-picker-grid>");
f2f = qe("<div class=css-alignment-gap-row><div class=css-alignment-control><div class=css-control-label>Grid</div><button type=button class=css-grid-dimensions-trigger aria-haspopup=menu><span class=css-grid-dimensions-label> × </span></button></div><div class=css-gap-control><div class=css-control-label>Gap</div><div class=css-grid-gap-inputs><div class=css-input-group><label class=\"css-input-label-draggable css-gap-label-icon\"aria-label=\"Column gap\"title=\"Column gap\"><i></i></label><div class=css-input-field><input class=css-number-input type=number min=0></div></div><div class=css-input-group><label class=\"css-input-label-draggable css-gap-label-icon css-gap-label-icon--row\"aria-label=\"Row gap\"title=\"Row gap\"><i></i></label><div class=css-input-field><input class=css-number-input type=number min=0>");
b2f = qe("<div class=css-grid-picker-tooltip> × ");
qvu = qe("<div class=css-input-group><label class=\"css-input-label-draggable css-padding-label-icon\"><i></i></label><div class=css-input-field><input class=css-number-input type=number min=0><span class=css-input-suffix>px");
Hvu = qe("<div class=css-input-group><label class=\"css-input-label-draggable css-margin-label-icon\"><i></i></label><div class=css-input-field><input type=text inputmode=numeric><span class=css-input-suffix>px");
v2f = qe("<div class=css-input-group><label class=css-input-label-draggable></label><div class=\"css-input-field css-input-field--with-dropdown\"><input><span class=css-input-suffix>px</span><button type=button class=css-input-dropdown aria-haspopup=menu><i>");
A2f = qe("<div class=css-dimension-group>");
y2f = qe("<div class=css-constraint-field><div class=css-control-label></div><div class=\"css-input-group css-constraint-input\"><label class=css-input-label-draggable><i></i></label><div class=\"css-input-field css-input-field--with-dropdown\"><input class=css-number-input type=number min=0><span class=css-input-suffix>px</span><button type=button class=css-input-dropdown aria-haspopup=menu><i>");
w2f = qe("<div class=css-dimension-menu-divider>");
_2f = qe("<div class=css-dimension-menu>");
C2f = qe("<span class=css-dimension-menu-measurement> ");
S2f = qe("<button type=button><span class=css-dimension-menu-item-content><i aria-hidden=true></i><span class=css-dimension-menu-label>");
k2f = qe("<button type=button class=css-dimension-menu-item><span class=css-dimension-menu-item-content><i aria-hidden=true></i><span class=css-dimension-menu-label>");
E2f = qe("<div class=css-dimension-menu><button type=button class=css-dimension-menu-item><span class=css-dimension-menu-item-content><i aria-hidden=true></i><span></span></span></button><button type=button class=css-dimension-menu-item><span class=css-dimension-menu-item-content><i aria-hidden=true></i><span class=css-dimension-menu-label>");
x2f = qe("<div class=css-padding-grid>");
T2f = qe("<div class=css-margin-grid>");
I2f = qe("<section class=css-inspector-section><div class=css-section-header><div><div class=css-section-title>Layout</div></div></div><div class=css-section-body><div class=css-control-block><div class=css-control-label>Flow</div><div class=css-flow-grid></div></div><div class=css-control-block><div class=css-control-label>Dimensions</div><div class=css-dual-input-row></div></div><div class=\"css-control-block css-padding-controls\"><div class=css-padding-header><div class=css-control-label>Padding</div><button type=button><i></i></button></div></div><div class=css-toggle-row><label class=css-toggle><span>Clip content</span></label></div><div class=\"css-control-block css-margin-controls\"><div class=css-margin-header><div class=css-control-label>Margin</div><button type=button><i></i></button></div></div><div class=css-padding-box-sizing><label class=css-toggle><span>Border box");
D2f = qe("<button type=button class=css-flow-option><span class=css-flow-icon><i>");
B2f = qe("<div class=css-padding-axis-row>");
R2f = qe("<div class=css-margin-axis-row>");
P2f = ["top", "right", "bottom", "left"];
L2f = ["top", "right", "bottom", "left"];
N2f = {
  vertical: Be.padVertical,
  horizontal: Be.padHorizontal
};
M2f = {
  top: Be.padTop,
  right: Be.padRight,
  bottom: Be.padBottom,
  left: Be.padLeft
};
F2f = {
  vertical: Be.padVertical,
  horizontal: Be.padHorizontal
};
O2f = {
  top: Be.padTop,
  right: Be.padRight,
  bottom: Be.padBottom,
  left: Be.padLeft
};
sCi = {
  width: "Width",
  height: "Height"
};
zit = {
  "min-width": {
    label: "Min W",
    longLabel: "min width",
    ariaLabel: "Minimum width",
    dimension: "width",
    icon: Be.minWidth
  },
  "max-width": {
    label: "Max W",
    longLabel: "max width",
    ariaLabel: "Maximum width",
    dimension: "width",
    icon: Be.maxWidth
  },
  "min-height": {
    label: "Min H",
    longLabel: "min height",
    ariaLabel: "Minimum height",
    dimension: "height",
    icon: Be.minWidth,
    rotateIcon: true
  },
  "max-height": {
    label: "Max H",
    longLabel: "max height",
    ariaLabel: "Maximum height",
    dimension: "height",
    icon: Be.maxWidth,
    rotateIcon: true
  }
};
Jvu = {
  width: ["min-width", "max-width"],
  height: ["min-height", "max-height"]
};
Gvu = ["flex-start", "center", "flex-end"];
z1t = ["flex-start", "center", "flex-end"];
U2f = [Be.leftAlign, Be.centerAlign, Be.rightAlign];
$2f = 11;
q2f = 8;
