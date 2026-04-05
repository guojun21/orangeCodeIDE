"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/components/ComposerUnifiedContextMenu.js
// Offset: 31939102 (bundle byte offset)
// Size: 9650 bytes
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
es();
Cvu();
CD();
epe();
tCi();
ecy();
tcy();
ncy();
iMf = qe("<div class=\"composer-unified-context-menu-divider h-px w-full bg-[var(--vscode-commandCenter-inactiveBorder)] opacity-80\">");
rMf = qe("<div class=\"flex items-center justify-center px-1.5\"><span class=\"text-dropdown-foreground opacity-40 text-[12px]\">");
Rfn = qe("<div>");
tpe = qe("<span>");
sMf = qe("<span class=\"max-w-[80px] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap h-[18px] flex items-center\">");
oMf = qe("<div class=\"flex gap-1 shrink-0\">");
aMf = qe("<div><div class=\"flex justify-between min-w-0 w-full gap-1.5 items-start\"><div class=\"flex flex-col min-w-0 w-full\"><div><div></div></div></div><div>");
cMf = qe("<span class=\"flex-1 max-w-full\">");
lMf = qe("<div class=\"text-dropdown-foreground text-[11px] opacity-40 px-1.5 py-0.5 leading-[15px]\">");
uMf = qe("<div class=\"flex flex-col gap-0.5\"><div class=\"flex flex-col gap-0.5\">");
dMf = qe("<div><input>");
hMf = qe("<div tabindex=0>");
mMf = qe("<div class=\"flex flex-col gap-1 p-0.5\">");
pMf = () => iMf();
Evu = n => (() => {
  var e = rMf();
  var t = e.firstChild;
  ge(t, () => n.message);
  return e;
})();
gMf = n => {
  const e = xe(() => typeof n.checkboxChecked == "boolean" ? n.checkboxChecked : n.showType === "check");
  const t = xe(() => ({
    color: "var(--cursor-text-primary)"
  }));
  const i = xe(() => n.icon || n.secondaryIcon ? "pl-[18px]" : "pb-[2px]");
  const r = xe(() => `shrink-0 text-menu-foreground !flex items-center justify-start !text-[14px] lh-[16px] ${n.titleInnerClass}`);
  const s = xe(() => `shrink-0 text-menu-foreground !flex items-center justify-start !text-[14px] lh-[16px] ${n.titleInnerClass} !mr-0`);
  const o = xe(() => n.showTypeVerticallyCentered === true);
  return (() => {
    var a = aMf();
    var l = a.firstChild;
    var u = l.firstChild;
    var d = u.firstChild;
    var m = d.firstChild;
    var p = u.nextSibling;
    ge(d, K(Xe, {
      get when() {
        return n.showCheckboxBefore;
      },
      get children() {
        return K(tMf, {
          get checked() {
            return e();
          },
          onClick: g => {
            g.stopPropagation();
            if (!n.isDisabled) {
              n.onClick?.(g);
            }
          },
          get disabled() {
            return n.isDisabled;
          }
        });
      }
    }), m);
    ge(d, K(Xe, {
      get when() {
        return n.secondaryIcon;
      },
      children: g => K(Xe, {
        get when() {
          return Svu(g());
        },
        get fallback() {
          return (() => {
            var f = tpe();
            ge(f, g);
            tn(A => {
              var w = `${r()} ${n.secondaryIconClass}`;
              var C = t();
              if (w !== A.e) {
                Un(f, A.e = w);
              }
              A.t = La(f, C, A.t);
              return A;
            }, {
              e: undefined,
              t: undefined
            });
            return f;
          })();
        },
        get children() {
          var f = tpe();
          tn(A => {
            var w = `${s()} ${Qt.asClassName(g())} ${n.secondaryIconClass}`;
            var C = t();
            if (w !== A.e) {
              Un(f, A.e = w);
            }
            A.t = La(f, C, A.t);
            return A;
          }, {
            e: undefined,
            t: undefined
          });
          return f;
        }
      })
    }), m);
    ge(d, K(Xe, {
      get when() {
        return n.icon;
      },
      children: g => K(Xe, {
        get when() {
          return Svu(g());
        },
        get fallback() {
          return (() => {
            var f = tpe();
            ge(f, g);
            tn(A => {
              var w = `${r()} ${n.iconClass}`;
              var C = t();
              if (w !== A.e) {
                Un(f, A.e = w);
              }
              A.t = La(f, C, A.t);
              return A;
            }, {
              e: undefined,
              t: undefined
            });
            return f;
          })();
        },
        get children() {
          var f = tpe();
          tn(A => {
            var w = `${s()} ${Qt.asClassName(g())} ${n.iconClass}`;
            var C = t();
            if (w !== A.e) {
              Un(f, A.e = w);
            }
            A.t = La(f, C, A.t);
            return A;
          }, {
            e: undefined,
            t: undefined
          });
          return f;
        }
      })
    }), m);
    ge(m, K(Xe, {
      get when() {
        return n.customTitle;
      },
      get fallback() {
        return K(Xe, {
          get when() {
            return n.title;
          },
          get fallback() {
            return (() => {
              var g = cMf();
              ge(g, () => n.placeholderText);
              tn(f => La(g, {
                color: "var(--cursor-text-tertiary)",
                "font-size": "12px",
                "line-height": "16px",
                "white-space": "nowrap",
                "text-overflow": "ellipsis",
                overflow: "hidden",
                display: "block",
                width: "100%",
                ...(n.preventSubTitleShrink ? {
                  "text-overflow": "ellipsis",
                  overflow: "hidden"
                } : {})
              }, f));
              return g;
            })();
          },
          get children() {
            var g = Rfn();
            ge(g, K(Q1t, {
              get text() {
                return n.title;
              },
              get highlights() {
                return n.labelMatch;
              },
              get class() {
                return n.titleInnerClass;
              },
              get style() {
                return {
                  color: n.textColor || "var(--cursor-text-primary)",
                  "font-size": "12px",
                  "line-height": "17px",
                  "white-space": "nowrap",
                  "text-overflow": "ellipsis",
                  overflow: "hidden",
                  display: "block",
                  width: "100%"
                };
              }
            }));
            tn(f => {
              var A = `max-w-full ${n.preventSubTitleShrink ? "flex-shrink min-w-0" : ""} ${n.customSubTitle ? "flex-shrink min-w-0" : ""} ${n.titleClass}`;
              var w = {
                color: n.textColor || "var(--cursor-text-primary)",
                ...(n.customSubTitle ? {
                  "flex-shrink": 1,
                  "min-width": 0
                } : {})
              };
              if (A !== f.e) {
                Un(g, f.e = A);
              }
              f.t = La(g, w, f.t);
              return f;
            }, {
              e: undefined,
              t: undefined
            });
            return g;
          }
        });
      },
      get children() {
        return n.customTitle;
      }
    }), null);
    ge(m, K(Xe, {
      get when() {
        return n.customSubTitle;
      },
      get children() {
        var g = Rfn();
        g.style.setProperty("flex-shrink", "0");
        ge(g, () => n.customSubTitle);
        return g;
      }
    }), null);
    ge(m, K(Xe, {
      get when() {
        return !n.customSubTitle && n.subTitle;
      },
      get children() {
        var g = tpe();
        ge(g, K(Q1t, {
          get text() {
            return n.subTitle ?? "";
          },
          get highlights() {
            return n.subTitleMatch;
          },
          style: {
            "font-size": "11px",
            "line-height": "16px",
            direction: "ltr",
            "unicode-bidi": "embed"
          },
          get class() {
            return `${n.subTitleInnerClass}`;
          }
        }));
        tn(f => {
          var A = {
            direction: "rtl",
            "text-overflow": "ellipsis",
            overflow: "hidden",
            "white-space": "nowrap",
            color: "var(--cursor-text-secondary)",
            "flex-shrink": n.preventSubTitleShrink ? 0 : 1,
            opacity: n.isSelected ? 0.6 : 0.4,
            ...(n.showType === "check" ? {
              "padding-right": "4px"
            } : {})
          };
          var w = `truncate ${n.subTitleClass}`;
          f.e = La(g, A, f.e);
          if (w !== f.t) {
            Un(g, f.t = w);
          }
          return f;
        }, {
          e: undefined,
          t: undefined
        });
        return g;
      }
    }), null);
    ge(u, K(Xe, {
      get when() {
        return n.description;
      },
      get children() {
        var g = Rfn();
        g.style.setProperty("color", "var(--cursor-text-primary)");
        ge(g, () => n.description);
        tn(() => Un(g, `text-menu-foreground leading-[14px] whitespace-normal ${typeof n.description == "string" ? "opacity-60" : ""} ${i()}`));
        return g;
      }
    }), null);
    ge(p, K(Xe, {
      get when() {
        return n.titleRightIcon;
      },
      children: g => K(Xe, {
        get when() {
          return Svu(g());
        },
        get fallback() {
          return (() => {
            var f = tpe();
            f.addEventListener("click", A => {
              A.stopPropagation();
              if (!n.isDisabled) {
                if (n.onTitleRightIconClick) {
                  n.onTitleRightIconClick(A);
                } else {
                  n.onClick?.(A);
                }
              }
            });
            ge(f, g);
            tn(A => {
              var w = `shrink-0 ml-1 cursor-pointer ${n.titleRightIconClass}`;
              var C = t();
              if (w !== A.e) {
                Un(f, A.e = w);
              }
              A.t = La(f, C, A.t);
              return A;
            }, {
              e: undefined,
              t: undefined
            });
            return f;
          })();
        },
        get children() {
          var f = tpe();
          f.addEventListener("click", A => {
            A.stopPropagation();
            if (!n.isDisabled) {
              if (n.onTitleRightIconClick) {
                n.onTitleRightIconClick(A);
              } else {
                n.onClick?.(A);
              }
            }
          });
          tn(A => {
            var w = `self-center shrink-0 w-[12px] text-menu-foreground !flex items-center justify-center !text-[12px] ml-1 cursor-pointer ${Qt.asClassName(g())} ${n.titleRightIconClass}`;
            var C = {
              ...t(),
              opacity: 0.6
            };
            if (w !== A.e) {
              Un(f, A.e = w);
            }
            A.t = La(f, C, A.t);
            return A;
          }, {
            e: undefined,
            t: undefined
          });
          return f;
        }
      })
    }), null);
    ge(p, K(Xe, {
      get when() {
        return n.showType === "chevronRight";
      },
      get children() {
        var g = tpe();
        tn(f => {
          var A = `text-dropdown-foreground !mr-0 !text-[8px] shrink-0 ${Qt.asClassName(Be.chevronRight)} ${n.showTypeIconClass} ${o() ? "self-center" : ""}`;
          var w = {
            ...t(),
            opacity: 0.3
          };
          if (A !== f.e) {
            Un(g, f.e = A);
          }
          f.t = La(g, w, f.t);
          return f;
        }, {
          e: undefined,
          t: undefined
        });
        return g;
      }
    }), null);
    ge(p, K(Xe, {
      get when() {
        return n.rightMostJSX;
      },
      get children() {
        var g = sMf();
        g.addEventListener("click", f => {
          if (n.onRightMostJSXClick) {
            f.stopPropagation();
            n.onRightMostJSXClick(f);
          }
        });
        ge(g, () => n.rightMostJSX);
        tn(() => g.classList.toggle("cursor-pointer", !!n.onRightMostJSXClick));
        return g;
      }
    }), null);
    ge(p, K(Xe, {
      get when() {
        return (n.onEdit || n.onDelete) && n.isSelected;
      },
      get children() {
        var g = oMf();
        ge(g, K(Xe, {
          get when() {
            return n.onEdit;
          },
          get children() {
            var f = tpe();
            f.addEventListener("mousedown", A => {
              A.stopImmediatePropagation();
              if (!n.customTitle) {
                n.onEdit?.();
              }
            });
            tn(A => {
              var w = `text-dropdown-foreground !mr-0 !text-[12px] shrink-0 clickable flex items-center justify-center ${Qt.asClassName(n.customTitle ? Be.check : Be.edit)}`;
              var C = {
                ...t(),
                padding: "2px"
              };
              if (w !== A.e) {
                Un(f, A.e = w);
              }
              A.t = La(f, C, A.t);
              return A;
            }, {
              e: undefined,
              t: undefined
            });
            return f;
          }
        }), null);
        ge(g, K(Xe, {
          get when() {
            return n.onDelete;
          },
          get children() {
            var f = tpe();
            f.addEventListener("mousedown", A => {
              A.stopImmediatePropagation();
              n.onDelete?.();
            });
            tn(A => {
              var w = `!mr-0 !text-[12px] shrink-0 clickable flex items-center justify-center ${Qt.asClassName(n.itemCount && n.itemCount > 1 ? Be.trash : Be.sync)}`;
              var C = {
                ...t(),
                padding: "2px"
              };
              if (w !== A.e) {
                Un(f, A.e = w);
              }
              A.t = La(f, C, A.t);
              return A;
            }, {
              e: undefined,
              t: undefined
            });
            return f;
          }
        }), null);
        return g;
      }
    }), null);
    ge(p, K(Xe, {
      get when() {
        return Ui(() => n.showType === "check" && !n.showCheckboxBefore)() && e();
      },
      get children() {
        var g = tpe();
        tn(f => {
          var A = `text-dropdown-foreground !mr-0 !text-[10px] shrink-0 ${Qt.asClassName(Be.check)} ${n.showTypeIconClass} ${o() ? "self-center" : ""}`;
          var w = {
            ...t()
          };
          if (A !== f.e) {
            Un(g, f.e = A);
          }
          f.t = La(g, w, f.t);
          return f;
        }, {
          e: undefined,
          t: undefined
        });
        return g;
      }
    }), null);
    tn(g => {
      var f = `composer-unified-context-menu-item rounded flex flex-col px-1.5 py-[2px] min-w-0 group ${n.isDisabled ? "opacity-30" : ""} ${n.isDisabled ? "" : "cursor-pointer"} ${n.class}`;
      var A = {
        "background-color": n.isSelected && !n.isDisabled && !n.doNotShowSelected ? "var(--vscode-list-hoverBackground)" : undefined,
        "--composer-unified-context-menu-stateful-color": t().color,
        "--composer-unified-context-menu-stateful-opacity": n.isSelected && !n.isDisabled && !n.doNotShowSelected ? 1 : 0,
        ...t()
      };
      var w = n.isSelected ? "true" : undefined;
      var C = n.tooltip;
      var x = `flex items-center gap-1.5 min-w-0 h-[16px] w-full ${n.titleIconContainerClass}`;
      var I = `flex w-full items-center min-w-0 gap-1.5 h-[17px] ${n.customTitle ? "flex-1" : ""}`;
      var B = {
        ...(n.customSubTitle ? {
          overflow: "hidden"
        } : {})
      };
      var R = `flex gap-1.5 hide-if-empty ${n.titleRightIconContainerClass} ${o() ? "items-center self-center" : "items-center h-[16px]"}`;
      if (f !== g.e) {
        Un(a, g.e = f);
      }
      g.t = La(a, A, g.t);
      if (w !== g.a) {
        Zr(a, "data-is-selected", g.a = w);
      }
      if (C !== g.o) {
        Zr(a, "title", g.o = C);
      }
      if (x !== g.i) {
        Un(d, g.i = x);
      }
      if (I !== g.n) {
        Un(m, g.n = I);
      }
      g.s = La(m, B, g.s);
      if (R !== g.h) {
        Un(p, g.h = R);
      }
      return g;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined
    });
    return a;
  })();
};
fMf = n => (() => {
  var e = uMf();
  var t = e.firstChild;
  ge(e, K(Xe, {
    get when() {
      return n.title;
    },
    get children() {
      var i = lMf();
      ge(i, () => n.title);
      return i;
    }
  }), t);
  ge(e, K(Xe, {
    get when() {
      return n.message;
    },
    get children() {
      return K(Evu, {
        get message() {
          return n.message;
        }
      });
    }
  }), t);
  ge(t, () => n.children);
  return e;
})();
