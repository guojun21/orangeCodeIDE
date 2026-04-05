"use strict";

// Module: out-build/vs/editor/contrib/peekView/browser/peekView.js
// Offset: 24760920 (bundle byte offset)
// Size: 5892 bytes
ri();
Ov();
nl();
qi();
Jr();
xf();
yn();
np();
s0A();
Cu();
yq();
Sun();
Ht();
dg();
si();
Er();
Wt();
Nl();
V$();
kun = xi("IPeekViewService");
Vi(kun, class {
  constructor() {
    this._widgets = new Map();
  }
  addExclusiveWidget(n, e) {
    const t = this._widgets.get(n);
    if (t) {
      t.listener.dispose();
      t.widget.dispose();
    }
    const i = () => {
      const r = this._widgets.get(n);
      if (r && r.widget === e) {
        r.listener.dispose();
        this._widgets.delete(n);
      }
    };
    this._widgets.set(n, {
      widget: e,
      listener: e.onDidClose(i)
    });
  }
}, 1);
(function (n) {
  n.inPeekEditor = new Sn("inReferenceSearchEditor", true, _(1464, null));
  n.notInPeekEditor = n.inPeekEditor.toNegated();
})(Z4 ||= {});
ypi = class {
  static {
    this.ID = "editor.contrib.referenceController";
  }
  constructor(e, t) {
    if (e instanceof q3) {
      Z4.inPeekEditor.bindTo(t);
    }
  }
  dispose() {}
};
ypi = __decorate([__param(1, wi)], ypi);
Mg(ypi.ID, ypi, 0);
fpg = {
  headerBackgroundColor: Xr.white,
  primaryHeadingColor: Xr.fromHex("#333333"),
  secondaryHeadingColor: Xr.fromHex("#6c6c6cb3")
};
nNe = class extends nCt {
  constructor(e, t, i) {
    super(e, t);
    this.instantiationService = i;
    this._onDidClose = new Qe();
    this.onDidClose = this._onDidClose.event;
    f3(this.options, fpg, false);
    const r = HB(this.editor);
    r.openedPeekWidgets.set(r.openedPeekWidgets.get() + 1, undefined);
  }
  dispose() {
    if (!this.disposed) {
      this.disposed = true;
      super.dispose();
      this._onDidClose.fire(this);
      const e = HB(this.editor);
      e.openedPeekWidgets.set(e.openedPeekWidgets.get() - 1, undefined);
    }
  }
  style(e) {
    const t = this.options;
    if (e.headerBackgroundColor) {
      t.headerBackgroundColor = e.headerBackgroundColor;
    }
    if (e.primaryHeadingColor) {
      t.primaryHeadingColor = e.primaryHeadingColor;
    }
    if (e.secondaryHeadingColor) {
      t.secondaryHeadingColor = e.secondaryHeadingColor;
    }
    super.style(e);
  }
  _applyStyles() {
    super._applyStyles();
    const e = this.options;
    if (this._headElement && e.headerBackgroundColor) {
      this._headElement.style.backgroundColor = e.headerBackgroundColor.toString();
    }
    if (this._primaryHeading && e.primaryHeadingColor) {
      this._primaryHeading.style.color = e.primaryHeadingColor.toString();
    }
    if (this._secondaryHeading && e.secondaryHeadingColor) {
      this._secondaryHeading.style.color = e.secondaryHeadingColor.toString();
    }
    if (this._bodyElement && e.frameColor) {
      this._bodyElement.style.borderColor = e.frameColor.toString();
    }
  }
  _fillContainer(e) {
    this.setCssClass("peekview-widget");
    this._headElement = Ct(".head");
    this._bodyElement = Ct(".body");
    this._fillHead(this._headElement);
    this._fillBody(this._bodyElement);
    e.appendChild(this._headElement);
    e.appendChild(this._bodyElement);
  }
  _fillHead(e, t) {
    this._titleElement = Ct(".peekview-title");
    if (this.options.supportOnTitleClick) {
      this._titleElement.classList.add("clickable");
      _f(this._titleElement, "click", s => this._onTitleClick(s));
    }
    Rt(this._headElement, this._titleElement);
    this._fillTitleIcon(this._titleElement);
    this._primaryHeading = Ct("span.filename");
    this._secondaryHeading = Ct("span.dirname");
    this._metaHeading = Ct("span.meta");
    Rt(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
    const i = Ct(".peekview-actions");
    Rt(this._headElement, i);
    const r = this._getActionBarOptions();
    this._actionbarWidget = new Gf(i, r);
    this._disposables.add(this._actionbarWidget);
    if (!t) {
      this._actionbarWidget.push(this._disposables.add(new Hs("peekview.close", _(1465, null), Qt.asClassName(Be.close), true, () => {
        this.dispose();
        return Promise.resolve();
      })), {
        label: false,
        icon: true
      });
    }
  }
  _fillTitleIcon(e) {}
  _getActionBarOptions() {
    return {
      actionViewItemProvider: GR.bind(undefined, this.instantiationService),
      orientation: 0
    };
  }
  _onTitleClick(e) {}
  setTitle(e, t) {
    if (this._primaryHeading && this._secondaryHeading) {
      this._primaryHeading.innerText = e;
      this._primaryHeading.setAttribute("title", e);
      if (t) {
        this._secondaryHeading.innerText = t;
      } else {
        th(this._secondaryHeading);
      }
    }
  }
  setMetaTitle(e) {
    if (this._metaHeading) {
      if (e) {
        this._metaHeading.innerText = e;
        gv(this._metaHeading);
      } else {
        Ng(this._metaHeading);
      }
    }
  }
  _doLayout(e, t) {
    if (!this._isShowing && e < 0) {
      this.dispose();
      return;
    }
    const i = Math.ceil(this.editor.getOption(68) * 1.2);
    const r = Math.round(e - (i + 2));
    this._doLayoutHead(i, t);
    this._doLayoutBody(r, t);
  }
  _doLayoutHead(e, t) {
    if (this._headElement) {
      this._headElement.style.height = `${e}px`;
      this._headElement.style.lineHeight = this._headElement.style.height;
    }
  }
  _doLayoutBody(e, t) {
    if (this._bodyElement) {
      this._bodyElement.style.height = `${e}px`;
    }
  }
};
nNe = __decorate([__param(2, ln)], nNe);
Cet = Rn("peekViewTitle.background", {
  dark: "#252526",
  light: "#F3F3F3",
  hcDark: Xr.black,
  hcLight: Xr.white
}, _(1466, null));
ket = Rn("peekViewTitleLabel.foreground", {
  dark: Xr.white,
  light: Xr.black,
  hcDark: Xr.white,
  hcLight: jE
}, _(1467, null));
Eet = Rn("peekViewTitleDescription.foreground", {
  dark: "#ccccccb3",
  light: "#616161",
  hcDark: "#FFFFFF99",
  hcLight: "#292929"
}, _(1468, null));
O1e = Rn("peekView.border", {
  dark: H$,
  light: H$,
  hcDark: Du,
  hcLight: Du
}, _(1469, null));
wpi = Rn("peekViewResult.background", {
  dark: "#252526",
  light: "#F3F3F3",
  hcDark: Xr.black,
  hcLight: Xr.white
}, _(1470, null));
a0A = Rn("peekViewResult.lineForeground", {
  dark: "#bbbbbb",
  light: "#646465",
  hcDark: Xr.white,
  hcLight: jE
}, _(1471, null));
c0A = Rn("peekViewResult.fileForeground", {
  dark: Xr.white,
  light: "#1E1E1E",
  hcDark: Xr.white,
  hcLight: jE
}, _(1472, null));
l0A = Rn("peekViewResult.selectionBackground", {
  dark: "#3399ff33",
  light: "#3399ff33",
  hcDark: null,
  hcLight: null
}, _(1473, null));
u0A = Rn("peekViewResult.selectionForeground", {
  dark: Xr.white,
  light: "#6C6C6C",
  hcDark: Xr.white,
  hcLight: jE
}, _(1474, null));
IGl = Rn("peekViewEditor.background", {
  dark: "#001F33",
  light: "#F2F8FC",
  hcDark: Xr.black,
  hcLight: Xr.white
}, _(1475, null));
d0A = Rn("peekViewEditorGutter.background", IGl, _(1476, null));
h0A = Rn("peekViewEditorStickyScroll.background", IGl, _(1477, null));
m0A = Rn("peekViewResult.matchHighlightBackground", {
  dark: "#ea5c004d",
  light: "#ea5c004d",
  hcDark: null,
  hcLight: null
}, _(1478, null));
DGl = Rn("peekViewEditor.matchHighlightBackground", {
  dark: "#ff8f0099",
  light: "#f5d802de",
  hcDark: null,
  hcLight: null
}, _(1479, null));
p0A = Rn("peekViewEditor.matchHighlightBorder", {
  dark: null,
  light: null,
  hcDark: x_,
  hcLight: x_
}, _(1480, null));
