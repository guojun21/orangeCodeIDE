"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/simpleButton/simpleButton.js
// Offset: 31369907 (bundle byte offset)
// Size: 2967 bytes
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
Moy();
ri();
qi();
Jr();
n7();
es();
UV();
F0i = qe("<div>");
xp = n => {
    const {
        showHover: e,
        hideHover: t
    } = u5({
        delay: 300,
        additionalClasses: ["chat-hover-tooltip"]
    });
    const i = () => n.size ?? "medium";
    const r = s => K(Xe, {
        get when() {
            return n.codicon && (s === "left" ? !n.renderCodiconOnRight : n.renderCodiconOnRight);
        },
        get children() {
            if (Ui(() => typeof n.codicon == "object")()) {
                return (() => {
                    var o = F0i();
                    tn(a => {
                        var l = {
                            "font-size": "12px",
                            ...n.codiconStyle
                        };
                        var u = Qt.asClassName(n.codicon);
                        a.e = La(o, l, a.e);
                        if (u !== a.t) {
                            Un(o, a.t = u);
                        }
                        return a;
                    }, {
                        e: undefined,
                        t: undefined
                    });
                    return o;
                })();
            } else {
                return (() => {
                    var o = F0i();
                    ge(o, () => n.codicon);
                    tn(a => La(o, {
                        "font-size": "12px",
                        ...n.codiconStyle
                    }, a));
                    return o;
                })();
            }
        }
    });
    return (() => {
        var s = F0i();
        Bs(o => n.setRef?.(o), s);
        s.addEventListener("blur", () => n.onBlur?.());
        s.addEventListener("keydown", o => {
            if (o.key === "Enter" || o.key === " ") {
                o.preventDefault();
                if (!n.disabled && n.onClick != null) {
                    n.onClick(o);
                }
            }
        });
        s.addEventListener("mouseleave", () => {
            n.onMouseLeave?.();
            t();
        });
        s.addEventListener("mouseenter", o => {
            n.onMouseEnter?.(o);
            if (n.tooltip) {
                e(o, n.tooltip);
            }
        });
        s.addEventListener("click", o => {
            if (!n.disabled && n.onClick != null) {
                n.onClick(o);
            }
        });
        $6(s, hb({
            get id() {
                return n.id;
            },
            get class() {
                return [`cursor-button cursor-button-${n.type ?? "primary"}`, n.isNotClickable ? "cursor-button-not-clickable" : `cursor-button-${n.type ?? "primary"}-clickable`, n.type === "disabled" || n.disabled ? "disabled" : "", n.tabFocusable ? "tab-focusable" : "", i() === "small" ? "cursor-button-small" : "", n.class].filter(Boolean).join(" ");
            },
            get style() {
                return {
                    "user-select": "none",
                    "flex-shrink": 0,
                    ...n.style
                };
            },
            get tabIndex() {
                if (n.tabFocusable) {
                    return 0;
                } else {
                    return undefined;
                }
            }
        }, () => n.extras), false, true);
        ge(s, () => r("left"), null);
        ge(s, () => n.title, null);
        ge(s, () => n.children, null);
        ge(s, K(Xe, {
            get when() {
                return n.keyboardShortcut;
            },
            get children() {
                var o = F0i();
                o.style.setProperty("font-size", "10px");
                ge(o, () => n.keyboardShortcut);
                tn(a => (a = n.keyboardShortcutOpacity ?? 0.6) != null ? o.style.setProperty("opacity", a) : o.style.removeProperty("opacity"));
                return o;
            }
        }), null);
        ge(s, () => r("right"), null);
        ge(s, K(Xe, {
            get when() {
                return n.isLoading;
            },
            get children() {
                return K(y8, {
                    get onPrimaryButton() {
                        return (n.type ?? "primary") === "primary";
                    },
                    extras: {
                        style: {
                            "margin-left": "4px"
                        }
                    },
                    get small() {
                        return n.smallSpinner;
                    }
                });
            }
        }), null);
        return s;
    })();
};
