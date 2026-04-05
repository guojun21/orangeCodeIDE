"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/components/ComposerUnifiedContextMenuCheck.js
// Offset: 31926751 (bundle byte offset)
// Size: 12351 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
qi();
Jr();
h8();
XNf = qe("<span>");
eMf = qe("<div class=\"w-3 h-3 border border-border rounded-xs flex items-center justify-center box-border relative\">");
tMf = n => (() => {
  var e = eMf();
  e.addEventListener("click", t => {
    if (n.onClick && !n.disabled) {
      n.onClick(t);
    }
  });
  e.style.setProperty("border-width", "1px");
  e.style.setProperty("flex-shrink", "0");
  ge(e, K(Xe, {
    get when() {
      return n.checked;
    },
    get children() {
      var t = XNf();
      tn(i => {
        var r = `${Qt.asClassName(n.codicon ?? Be.checkTwo)} before:!text-[8px] !flex items-center justify-center ${n.codicon ? "!mr-0" : "!mr-0.5"}`;
        var s = n.checked ? "var(--vscode-button-foreground)" : "var(--vscode-editor-inactiveSelectionBackground)";
        if (r !== i.e) {
          Un(t, i.e = r);
        }
        if (s !== i.t) {
          if ((i.t = s) != null) {
            t.style.setProperty("color", s);
          } else {
            t.style.removeProperty("color");
          }
        }
        return i;
      }, {
        e: undefined,
        t: undefined
      });
      return t;
    }
  }), null);
  ge(e, K(Xe, {
    get when() {
      return n.showWarningBadge;
    },
    get children() {
      return K(Xcu, {
        get color() {
          return n.warningBadgeColor || "var(--vscode-activityWarningBadge-background)";
        },
        style: {
          transform: "translateX(3px)"
        }
      });
    }
  }), null);
  tn(t => {
    var i = !!n.disabled;
    var r = !n.disabled;
    var s = n.checked ? n.customBgColor ?? "var(--vscode-button-background)" : "transparent";
    var o = n.checked ? undefined : "solid";
    var a = n.checked ? n.customBorderColor ?? "var(--vscode-button-background)" : "color-mix(in srgb, var(--vscode-checkbox-selectBorder) 30%, transparent)";
    var l = n.disabled ? 0.3 : 1;
    if (i !== t.e) {
      e.classList.toggle("cursor-not-allowed", t.e = i);
    }
    if (r !== t.t) {
      e.classList.toggle("cursor-pointer", t.t = r);
    }
    if (s !== t.a) {
      if ((t.a = s) != null) {
        e.style.setProperty("background-color", s);
      } else {
        e.style.removeProperty("background-color");
      }
    }
    if (o !== t.o) {
      if ((t.o = o) != null) {
        e.style.setProperty("border-style", o);
      } else {
        e.style.removeProperty("border-style");
      }
    }
    if (a !== t.i) {
      if ((t.i = a) != null) {
        e.style.setProperty("border-color", a);
      } else {
        e.style.removeProperty("border-color");
      }
    }
    if (l !== t.n) {
      if ((t.n = l) != null) {
        e.style.setProperty("opacity", l);
      } else {
        e.style.removeProperty("opacity");
      }
    }
    return t;
  }, {
    e: undefined,
    t: undefined,
    a: undefined,
    o: undefined,
    i: undefined,
    n: undefined
  });
  return e;
})();
