"use strict";

// Module: out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js
// Offset: 34030261 (bundle byte offset)
// Size: 16442 bytes
iu();
A9();
rt();
oN();
fCu();
lqf();
uqf = class {
  constructor(n) {
    this.disposables = [];
    this.zonesByCommentId = new Map();
    this.containersByCommentId = new Map();
    this.editor = n.editor;
    this.widget = n.widget;
    this.comments = n.comments;
    this.githubPRService = n.githubPRService;
    this.onCommentPosted = n.onCommentPosted;
    this.instantiationService = n.instantiationService;
    const e = new Ut();
    this.comments.recomputeInitiallyAndOnChange(e, () => {
      this.applyComments();
    });
    this.disposables.push(e);
    const t = this.editor.onDidChangeConfiguration(() => {
      this.layoutAllZones();
      this.updateZoneWidths();
    });
    this.disposables.push(t);
    const i = this.editor.onDidLayoutChange?.(() => {
      this.updateZoneWidths();
      this.updateZoneLeftOffsets();
    });
    if (i) {
      this.disposables.push(i);
    }
    const r = this.editor.onDidScrollChange(s => {
      if (s.scrollLeftChanged) {
        this.updateZoneLeftOffsets();
      }
    });
    this.disposables.push(r);
    this.applyComments();
  }
  renderMarkdownContent(n, e, t) {
    if (e) {
      if (this.instantiationService) {
        try {
          const r = this.instantiationService.createInstance(sL, {}).render({
            value: e,
            supportThemeIcons: true,
            supportHtml: true,
            isTrusted: false
          });
          n.appendChild(r.element);
          if (t) {
            t.push(r);
          }
          return;
        } catch (i) {
          console.warn("[DiffCommentViewZoneManager] Failed to render markdown, falling back to text:", i);
        }
      }
      if (e.includes("`")) {
        const i = e.split("`");
        for (let r = 0; r < i.length; r++) {
          if (r % 2 === 1) {
            const s = document.createElement("code");
            s.textContent = i[r];
            n.appendChild(s);
          } else if (i[r].length > 0) {
            n.appendChild(document.createTextNode(i[r]));
          }
        }
      } else {
        n.textContent = e;
      }
    }
  }
  applyComments() {
    const n = this.comments.get();
    const e = this.editor.getModel();
    if (!e) {
      this.clearAllZones();
      return;
    }
    const t = e.getLineCount();
    const i = new Map();
    for (const s of n) {
      const o = s.locations[0];
      if (!o) {
        continue;
      }
      const a = o.endLine > 0 ? o.endLine : o.startLine > 0 ? o.startLine : 1;
      const l = Math.min(Math.max(a, 1), t);
      i.set(s.id, {
        comment: s,
        anchorLine: l
      });
    }
    const r = [];
    for (const [s, o] of this.zonesByCommentId.entries()) {
      if (!i.has(s)) {
        r.push(s);
        o.resizeObserver?.disconnect();
        for (const a of o.disposables) {
          a.dispose();
        }
        this.editor.changeViewZones(a => {
          a.removeZone(o.zoneId);
        });
      }
    }
    for (const s of r) {
      this.zonesByCommentId.delete(s);
      this.containersByCommentId.delete(s);
    }
    for (const [s, o] of i.entries()) {
      const a = this.zonesByCommentId.get(s);
      const l = ipy(o.comment);
      if (a && a.contentHash === l) {
        continue;
      }
      if (a) {
        a.resizeObserver?.disconnect();
        for (const d of a.disposables) {
          d.dispose();
        }
        this.editor.changeViewZones(d => {
          d.removeZone(a.zoneId);
        });
        this.zonesByCommentId.delete(s);
        this.containersByCommentId.delete(s);
      }
      const u = this.addZoneForComment(s, o.comment, o.anchorLine);
      if (u) {
        u.contentHash = l;
        this.zonesByCommentId.set(s, u);
      }
    }
  }
  addZoneForComment(n, e, t) {
    let i;
    let r;
    const s = [];
    if (this.widget) {
      const u = this.editor.getModel()?.getLineCount() ?? t;
      this.widget.ensureLineIsVisible(t, false);
      if (t < u) {
        this.widget.ensureLineIsVisible(t + 1, false);
      }
    }
    this.editor.changeViewZones(l => {
      const u = this.editor.getOption(68);
      const {
        root: d,
        inner: m
      } = this.createZoneDomNode(e, s);
      this.containersByCommentId.set(n, m);
      const g = {
        afterLineNumber: t,
        heightInPx: 100,
        domNode: d,
        suppressMouseDown: false
      };
      r = g;
      i = l.addZone(g);
      const f = this.getEffectiveContentWidth();
      d.style.cssText = `
				display: block !important;
				position: absolute !important;
				z-index: 10;
				width: ${f}px;
				box-sizing: border-box;
				padding-top: ${Math.round(u * 0.5)}px;
				padding-bottom: ${Math.round(u * 0.5)}px;
				overflow: visible !important;
			`;
      const A = this.getEffectiveContentWidth();
      const w = Math.max(300, A - 8);
      m.style.maxWidth = `${w}px`;
      m.style.minWidth = "300px";
      m.style.height = "auto";
      m.style.paddingTop = `${Math.round(u * 0.5)}px`;
      m.style.paddingBottom = `${Math.round(u * 0.5)}px`;
      if (m.querySelector(".bugbot-thread-container") === null) {
        const I = m.querySelector(".bugbot-comment-header");
        if (I) {
          I.style.marginBottom = `${Math.round(u * 0.44)}px`;
        }
        const B = m.querySelector(".bugbot-comment-content");
        if (B) {
          B.style.maxHeight = `${Math.round(u * 4)}px`;
          B.style.height = `${Math.round(u * 4)}px`;
          B.style.marginBottom = `${Math.round(u * 0.77)}px`;
          B.style.overflowY = "auto";
          B.style.overflowX = "hidden";
        }
      }
      const x = m.querySelector(".bugbot-comment-footer");
      if (x) {
        x.style.alignItems = "center";
      }
      this.updateZoneLeftOffsets();
    });
    if (!i || !r) {
      return;
    }
    const o = this.containersByCommentId.get(n);
    let a = null;
    if (o) {
      const l = i;
      const u = r;
      let d = 0;
      a = new ResizeObserver(() => {
        const m = this.editor.getOption(68);
        const p = Math.round(m);
        const g = o.scrollHeight + p;
        if (Math.abs(g - d) > 2) {
          d = g;
          u.heightInPx = g;
          this.editor.changeViewZones(f => {
            f.layoutZone(l);
          });
        }
      });
      a.observe(o);
      bi.requestAnimationFrame(() => {
        const m = this.editor.getOption(68);
        const p = Math.round(m);
        const g = o.scrollHeight + p;
        if (g > 0) {
          r.heightInPx = g;
          this.editor.changeViewZones(f => {
            f.layoutZone(l);
          });
        }
      });
    }
    return {
      zoneId: i,
      zone: r,
      resizeObserver: a,
      contentHash: "",
      disposables: s
    };
  }
  createZoneDomNode(n, e) {
    const t = document.createElement("div");
    t.className = "bugbot-comment-zone";
    const i = document.createElement("div");
    i.className = "bugbot-comment-zone-inner";
    t.appendChild(i);
    const r = n.locations[0];
    const s = r?.startLine ?? 1;
    const o = r?.endLine ?? s;
    const a = s === o ? `L${s}` : `L${s}-${o}`;
    const l = n.metadata?.threadComments?.length ?? 0;
    if (n.source === "pr_review" && l > 0) {
      const g = document.createElement("div");
      g.className = "bugbot-zone-header-bar";
      const f = document.createElement("span");
      f.className = "bugbot-zone-line-badge";
      f.textContent = a;
      g.appendChild(f);
      const A = document.createElement("div");
      A.className = "bugbot-zone-header-actions";
      const w = n.metadata?.onResolve;
      if (w) {
        const I = document.createElement("button");
        I.type = "button";
        I.className = "bugbot-zone-header-btn";
        I.title = "Resolve thread";
        const B = document.createElement("i");
        B.className = "codicon codicon-check";
        I.appendChild(B);
        I.addEventListener("mousedown", R => {
          R.preventDefault();
          R.stopPropagation();
          w();
        });
        A.appendChild(I);
      }
      const C = n.metadata?.onAddToChat;
      const x = n.metadata?.onFixInChat;
      if (C) {
        const I = document.createElement("button");
        I.type = "button";
        I.className = "bugbot-zone-header-btn";
        I.title = "Add to Chat";
        const B = document.createElement("i");
        B.className = "codicon codicon-chat-rounded";
        I.appendChild(B);
        I.addEventListener("mousedown", R => {
          R.preventDefault();
          R.stopPropagation();
          C();
        });
        A.appendChild(I);
      } else if (x) {
        const I = document.createElement("button");
        I.type = "button";
        I.className = "bugbot-zone-header-btn";
        I.title = "Fix with Agent";
        const B = document.createElement("i");
        B.className = "codicon codicon-sparkle";
        I.appendChild(B);
        I.addEventListener("mousedown", R => {
          R.preventDefault();
          R.stopPropagation();
          x();
        });
        A.appendChild(I);
      }
      g.appendChild(A);
      i.appendChild(g);
    }
    const d = document.createElement("div");
    d.className = "bugbot-content-container";
    const m = n.metadata?.threadComments;
    if (m && m.length > 0 && n.source === "pr_review") {
      const g = document.createElement("div");
      g.className = "bugbot-thread-container";
      for (let C = 0; C < m.length; C++) {
        const x = m[C];
        const I = C === 0;
        const B = document.createElement("div");
        B.className = "bugbot-thread-comment";
        if (!I) {
          B.classList.add("bugbot-thread-reply");
        }
        const R = document.createElement("div");
        R.className = "bugbot-comment-header";
        const N = document.createElement("div");
        N.className = "bugbot-avatar";
        if (x.avatarUrl) {
          const W = document.createElement("img");
          W.src = x.avatarUrl;
          W.alt = x.authorLogin || "User avatar";
          W.style.width = "100%";
          W.style.height = "100%";
          W.style.objectFit = "cover";
          N.appendChild(W);
        } else {
          const W = document.createElement("i");
          W.className = "codicon codicon-comment";
          N.appendChild(W);
        }
        R.appendChild(N);
        const M = document.createElement("div");
        M.className = "bugbot-title";
        M.textContent = x.authorLogin ?? "Comment";
        R.appendChild(M);
        if (x.createdAt) {
          const W = new Date(x.createdAt);
          const z = document.createElement("span");
          z.className = "bugbot-timestamp";
          z.textContent = m2(W, true, true);
          z.title = W.toLocaleString();
          R.appendChild(z);
        }
        B.appendChild(R);
        const O = document.createElement("div");
        O.className = "bugbot-comment-content-wrapper";
        const $ = document.createElement("div");
        $.className = "bugbot-comment-content bugbot-thread-comment-content";
        const H = x.body ?? "";
        this.renderMarkdownContent($, H, e);
        O.appendChild($);
        B.appendChild(O);
        g.appendChild(B);
      }
      const f = () => {
        const x = g.scrollHeight > g.clientHeight + 5;
        const I = g.scrollTop + g.clientHeight >= g.scrollHeight - 1;
        g.classList.toggle("has-overflow", x);
        g.classList.toggle("scrolled-to-bottom", I);
      };
      bi.requestAnimationFrame(f);
      g.addEventListener("wheel", C => {
        const x = g;
        const I = C.deltaY;
        if (I === 0) {
          return;
        }
        const B = x.scrollTop <= 0;
        const R = x.scrollTop + x.clientHeight >= x.scrollHeight - 1;
        const N = I < 0;
        const M = I > 0;
        if (N && !B || M && !R) {
          C.preventDefault();
          C.stopPropagation();
          x.scrollTop += I;
        }
        f();
      }, {
        passive: false
      });
      g.addEventListener("scroll", f);
      d.appendChild(g);
      const A = n.metadata?.prUrl;
      const w = n.metadata?.threadId;
      if (A && w && this.githubPRService) {
        const C = this.createReplyField(n.id, A, w);
        d.appendChild(C);
      }
    } else if (n.source === "pr_review") {
      const g = document.createElement("div");
      g.className = "bugbot-comment-header";
      const f = document.createElement("div");
      f.className = "bugbot-avatar";
      const A = n.metadata?.avatarUrl;
      if (A) {
        const O = document.createElement("img");
        O.src = A;
        O.alt = n.title || "User avatar";
        O.style.width = "100%";
        O.style.height = "100%";
        O.style.objectFit = "cover";
        f.appendChild(O);
      } else {
        const O = document.createElement("i");
        O.className = "codicon codicon-comment";
        f.appendChild(O);
      }
      g.appendChild(f);
      const w = document.createElement("div");
      w.className = "bugbot-title";
      w.textContent = n.title ?? "Comment";
      g.appendChild(w);
      const C = n.metadata?.createdAt;
      if (C) {
        const O = new Date(C);
        const $ = document.createElement("span");
        $.className = "bugbot-timestamp";
        $.textContent = m2(O, true, true);
        $.title = O.toLocaleString();
        g.appendChild($);
      }
      d.appendChild(g);
      const x = document.createElement("div");
      x.className = "bugbot-comment-content-wrapper";
      const I = document.createElement("div");
      I.className = "bugbot-comment-content";
      const B = n.description ?? "";
      this.renderMarkdownContent(I, B, e);
      const R = () => {
        const $ = I.scrollHeight > I.clientHeight + 5;
        const H = I.scrollTop + I.clientHeight >= I.scrollHeight - 1;
        x.classList.toggle("has-overflow", $);
        x.classList.toggle("scrolled-to-bottom", H);
      };
      bi.requestAnimationFrame(R);
      I.addEventListener("wheel", O => {
        const $ = I;
        const H = O.deltaY;
        if (H === 0) {
          return;
        }
        const W = $.scrollTop <= 0;
        const z = $.scrollTop + $.clientHeight >= $.scrollHeight - 1;
        const Y = H < 0;
        const j = H > 0;
        if (Y && !W || j && !z) {
          O.preventDefault();
          O.stopPropagation();
          $.scrollTop += H;
        }
        R();
      }, {
        passive: false
      });
      I.addEventListener("scroll", R);
      x.appendChild(I);
      d.appendChild(x);
      const N = n.metadata?.prUrl;
      const M = n.metadata?.threadId;
      if (N && M && this.githubPRService) {
        const O = this.createReplyField(n.id, N, M);
        d.appendChild(O);
      }
    } else {
      const g = document.createElement("div");
      g.className = "bugbot-comment-header";
      const f = document.createElement("div");
      f.className = "bugbot-avatar";
      const A = document.createElement("i");
      let w = "codicon codicon-comment";
      if (n.source === "test") {
        w = "codicon codicon-beaker";
      } else if (n.source === "bugbot") {
        w = "codicon codicon-cursor";
      }
      A.className = w;
      f.appendChild(A);
      g.appendChild(f);
      const C = document.createElement("div");
      C.className = "bugbot-title";
      C.textContent = n.title ?? "Comment";
      g.appendChild(C);
      d.appendChild(g);
      const x = document.createElement("div");
      x.className = "bugbot-comment-content-wrapper";
      const I = document.createElement("div");
      I.className = "bugbot-comment-content";
      const B = n.description ?? "";
      this.renderMarkdownContent(I, B, e);
      const R = () => {
        const M = I.scrollHeight > I.clientHeight + 5;
        const O = I.scrollTop + I.clientHeight >= I.scrollHeight - 1;
        x.classList.toggle("has-overflow", M);
        x.classList.toggle("scrolled-to-bottom", O);
      };
      bi.requestAnimationFrame(R);
      I.addEventListener("wheel", N => {
        const M = I;
        const O = N.deltaY;
        if (O === 0) {
          return;
        }
        const $ = M.scrollTop <= 0;
        const H = M.scrollTop + M.clientHeight >= M.scrollHeight - 1;
        const W = O < 0;
        const z = O > 0;
        if (W && !$ || z && !H) {
          N.preventDefault();
          N.stopPropagation();
          M.scrollTop += O;
        }
        R();
      }, {
        passive: false
      });
      I.addEventListener("scroll", R);
      x.appendChild(I);
      d.appendChild(x);
    }
    const p = n.actions ?? [{
      id: "dismiss",
      label: "Dismiss"
    }];
    if (p.length > 0) {
      const g = document.createElement("div");
      g.className = "bugbot-comment-footer";
      const f = document.createElement("div");
      f.className = "bugbot-footer-left";
      const A = document.createElement("div");
      A.className = "bugbot-footer-right";
      for (const w of p) {
        const C = document.createElement("button");
        C.type = "button";
        C.dataset.actionId = w.id;
        if (w.iconOnly) {
          C.className = "bugbot-thumbs-button";
          if (w.id === "thumbs_up") {
            C.classList.add("bugbot-thumbs-up");
          } else if (w.id === "thumbs_down") {
            C.classList.add("bugbot-thumbs-down");
          }
        } else if (w.id === "fix_in_chat") {
          C.className = "bugbot-fix-button";
        } else {
          C.className = "bugbot-dismiss-button";
        }
        if (w.icon) {
          const x = document.createElement("i");
          x.className = `codicon codicon-${w.icon}`;
          if (!w.iconOnly) {
            x.style.marginRight = "4px";
          }
          C.appendChild(x);
        }
        if (w.iconOnly) {
          C.title = w.label;
        } else {
          const x = document.createTextNode(w.label);
          C.appendChild(x);
        }
        if (w.togglable && w.pressed && w.pressedClass) {
          C.classList.add(w.pressedClass);
        }
        C.addEventListener("mousedown", x => {
          x.preventDefault();
          x.stopPropagation();
          w.onClick?.();
        });
        if (w.position === "right") {
          A.appendChild(C);
        } else {
          f.appendChild(C);
        }
      }
      g.appendChild(f);
      g.appendChild(A);
      d.appendChild(g);
    }
    i.appendChild(d);
    return {
      root: t,
      inner: i
    };
  }
  createReplyField(n, e, t) {
    const i = document.createElement("div");
    i.className = "bugbot-reply-container";
    const r = document.createElement("div");
    r.className = "bugbot-reply-row";
    const s = document.createElement("div");
    s.className = "bugbot-reply-avatar";
    if (this.githubPRService) {
      this.githubPRService.getCurrentUserLogin().then(m => {
        if (m) {
          const p = document.createElement("img");
          p.src = `https://github.com/${m}.png?size=64`;
          p.alt = "Your avatar";
          s.appendChild(p);
        }
      });
    }
    const o = document.createElement("textarea");
    o.className = "bugbot-reply-textarea";
    o.placeholder = "Reply, '@Cursor' for changes...";
    o.rows = 1;
    const a = 120;
    const l = () => {
      o.style.height = "auto";
      const m = Math.min(o.scrollHeight, a);
      o.style.height = `${m}px`;
      o.style.overflowY = m >= a ? "auto" : "hidden";
    };
    o.addEventListener("input", l);
    o.addEventListener("wheel", m => {
      const p = m.deltaY;
      if (p === 0) {
        return;
      }
      const g = o.scrollTop <= 0;
      const f = o.scrollTop + o.clientHeight >= o.scrollHeight - 1;
      const A = p < 0;
      const w = p > 0;
      if (A && !g || w && !f) {
        m.preventDefault();
        m.stopPropagation();
        o.scrollTop += p;
      }
    }, {
      passive: false
    });
    let u = false;
    const d = async () => {
      const m = o.value.trim();
      if (!!m && !u && !!this.githubPRService) {
        u = true;
        o.disabled = true;
        try {
          if (await this.githubPRService.replyToReviewThread({
            prUrl: e,
            threadId: t,
            body: m
          })) {
            o.value = "";
            l();
            this.onCommentPosted?.();
          } else {
            console.error("[DiffCommentViewZoneManager] Failed to post reply");
          }
        } catch (p) {
          console.error("[DiffCommentViewZoneManager] Error posting reply:", p);
        } finally {
          u = false;
          o.disabled = false;
          o.focus();
        }
      }
    };
    o.addEventListener("keydown", m => {
      if (m.key === "Enter" && !m.shiftKey) {
        m.preventDefault();
        d();
      }
    });
    r.appendChild(s);
    r.appendChild(o);
    i.appendChild(r);
    return i;
  }
  clearAllZones() {
    const n = Array.from(this.zonesByCommentId.values());
    if (n.length !== 0) {
      for (const e of n) {
        e.resizeObserver?.disconnect();
        for (const t of e.disposables) {
          t.dispose();
        }
      }
      this.editor.changeViewZones(e => {
        for (const t of n) {
          e.removeZone(t.zoneId);
        }
      });
      this.zonesByCommentId.clear();
      this.containersByCommentId.clear();
    }
  }
  layoutAllZones() {
    this.editor.changeViewZones(n => {
      for (const e of this.zonesByCommentId.values()) {
        n.layoutZone(e.zoneId);
      }
    });
  }
  getEffectiveContentWidth() {
    const n = this.editor.getLayoutInfo();
    if (this.widget && !this.widget.renderSideBySide) {
      const e = this.widget.getDomNode();
      if (e) {
        return e.clientWidth - n.contentLeft;
      }
    }
    return n.contentWidth;
  }
  updateZoneWidths() {
    const n = this.getEffectiveContentWidth();
    const e = `${Math.max(300, n - 12)}px`;
    const t = this.editor.getOption(68);
    for (const i of this.containersByCommentId.values()) {
      i.style.maxWidth = e;
      i.style.minWidth = "300px";
      const r = i.querySelector(".bugbot-comment-footer");
      const s = i.parentElement;
      if (s) {
        s.style.width = `${n}px`;
        s.style.paddingTop = `${Math.round(t * 0.5)}px`;
        s.style.paddingBottom = `${Math.round(t * 0.5)}px`;
      }
      i.style.paddingTop = `${Math.round(t * 0.5)}px`;
      i.style.paddingBottom = `${Math.round(t * 0.5)}px`;
      if (i.querySelector(".bugbot-thread-container") === null) {
        const a = i.querySelector(".bugbot-comment-header");
        const l = i.querySelector(".bugbot-comment-content");
        if (a) {
          a.style.marginBottom = `${Math.round(t * 0.44)}px`;
        }
        if (l) {
          l.style.maxHeight = `${Math.round(t * 4)}px`;
          l.style.height = `${Math.round(t * 4)}px`;
          l.style.marginBottom = `${Math.round(t * 0.77)}px`;
          l.style.overflowY = "auto";
          l.style.overflowX = "hidden";
        }
      }
      if (r) {
        r.style.alignItems = "center";
      }
    }
  }
  updateZoneLeftOffsets() {
    const n = this.editor.getScrollLeft();
    for (const e of this.containersByCommentId.values()) {
      const t = e.parentElement;
      if (t) {
        t.style.transform = `translateX(${Math.max(0, Math.round(n))}px)`;
      }
      e.style.marginLeft = "0px";
      e.style.transform = "none";
    }
  }
  dispose() {
    this.clearAllZones();
    for (const n of this.disposables) {
      n.dispose();
    }
    this.disposables.length = 0;
  }
};
