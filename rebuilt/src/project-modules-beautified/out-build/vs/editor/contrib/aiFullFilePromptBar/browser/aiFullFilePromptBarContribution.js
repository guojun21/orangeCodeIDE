"use strict";

// Module: out-build/vs/editor/contrib/aiFullFilePromptBar/browser/aiFullFilePromptBarContribution.js
// Offset: 33991732 (bundle byte offset)
// Size: 8004 bytes
Cu();
L0();
rt();
Wt();
Dd();
ri();
Dx();
yn();
zr();
si();
rf();
kr();
ps();
Q0();
Wu();
cp();
uQ();
sie();
_M();
wq();
rFA();
Gmy();
fvn = class extends at {
  static {
    nCu = this;
  }
  static {
    this.ID = "aiFullFilePromptBar";
  }
  static get(e) {
    return e.getContribution(nCu.ID);
  }
  _shouldKeepIsland() {
    return this._experimentService.getDynamicConfigParam("agent_layout_migration", "keepIsland") ?? false;
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._instantiationService = t;
    this._reactiveStorageService = i;
    this._contextKeyService = r;
    this._diffChangeSourceRegistry = s;
    this._experimentService = o;
    this._composerDataService = a;
    this._storageService = l;
    this._editor = e;
    this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    this._widget = new Ob(() => {
      const A = this._register(this._instantiationService.createInstance(QDa, this._editor));
      this._register(A.onClick(w => {}));
      return A;
    });
    const u = Z4.inPeekEditor.getValue(this._contextKeyService);
    const d = this._editor.getDomNode();
    const m = Array.from(d?.classList.values() ?? []).find(A => A.includes("monaco-diff-editor"));
    const g = d?.getAttribute("data-uri")?.startsWith("output:");
    if (!u && !m && !g) {
      const A = this._experimentService.getDynamicConfigParamProperty("agent_layout_migration", "keepIsland");
      let w = A.nonReactive() ?? false;
      const C = () => {
        const N = this._editor.getContainerDomNode()?.closest(".editor-group-container");
        const M = N?.querySelector(".title");
        const O = N?.querySelector(".label-container");
        const $ = !!M && !!M.classList.contains("breadcrumbs");
        const H = N?.querySelector(".breadcrumbs-below-tabs");
        const W = N?.querySelector(".breadcrumbs-below-tabs .breadcrumbs-control");
        const z = !!W && !W.classList.contains("hidden");
        const Y = $ || z;
        const j = this._diffChangeSourceRegistry.getDescriptors().filter(he => he.metadata?.source === gce).filter(he => !this._composerDataService.isWorktreeComposer(he.metadata?.composerId)).filter(he => !FSt(he.uri)).length > 0;
        const X = w;
        const ee = Bh(this._storageService);
        const re = this._editor.getModel()?.uri?.scheme === _n.git;
        if (j && !re && (!ee || X || ee && !X && !Y)) {
          this._widget.value.show();
        } else {
          this._widget.value.hide();
        }
        const pe = $ ? O || undefined : H || undefined;
        if (ee && !X && j && Y && !!pe && pe) {
          const he = this._editor.hasTextFocus() || this._editor.hasWidgetFocus();
          const be = N?.querySelector("[data-breadcrumb-review-controls]");
          if (!he && !!be) {
            return;
          }
          if (M && M.classList.contains("breadcrumbs") && !M.classList.contains("has-review-controls")) {
            M.classList.add("has-review-controls");
          }
          const ke = pe.querySelector(".breadcrumbs-control");
          let Se = pe.querySelector(".breadcrumbs-row");
          if (Se) {
            if (ke && ke.parentElement !== Se) {
              Se.appendChild(ke);
            }
          } else {
            Se = document.createElement("div");
            Se.className = "breadcrumbs-row";
            if (ke && ke.parentElement) {
              ke.parentElement.insertBefore(Se, ke);
              Se.appendChild(ke);
            } else {
              pe.appendChild(Se);
            }
          }
          if (he && be && be !== this._breadcrumbsControlsContainer) {
            be.remove();
          }
          let Fe = !this._breadcrumbsControlsDispose;
          if (!this._breadcrumbsControlsContainer || !this._breadcrumbsControlsContainer.isConnected) {
            this._breadcrumbsControlsDispose?.dispose();
            this._breadcrumbsControlsDispose = undefined;
            Fe = true;
            this._breadcrumbsControlsContainer = document.createElement("div");
            this._breadcrumbsControlsContainer.setAttribute("data-breadcrumb-review-controls", "true");
          }
          if (this._breadcrumbsControlsContainer.parentElement !== Se) {
            Se.appendChild(this._breadcrumbsControlsContainer);
          }
          if (Fe) {
            this._breadcrumbsControlsDispose = K$f(this._breadcrumbsControlsContainer, this._instantiationService, this._editor);
          }
          try {
            const De = pe.querySelector(".breadcrumbs-control.relative-path .monaco-breadcrumbs");
            if (De) {
              const Pe = As(De);
              Pe.requestAnimationFrame(() => {
                Pe.requestAnimationFrame(() => {
                  De.scrollLeft = De.scrollWidth;
                });
              });
            }
          } catch (De) {
            console.error("Error ensuring breadcrumbs scroll to show the last item by default when using relative path mode", De);
          }
        } else {
          this._breadcrumbsControlsDispose?.dispose();
          this._breadcrumbsControlsDispose = undefined;
          if (this._breadcrumbsControlsContainer?.parentElement) {
            this._breadcrumbsControlsContainer.remove();
          }
          this._breadcrumbsControlsContainer = undefined;
          if (M && M.classList.contains("has-review-controls")) {
            M.classList.remove("has-review-controls");
          }
        }
      };
      this._register(this._diffChangeSourceRegistry.onDidChange(C));
      const x = hm(this._storageService, "unifiedAppLayout");
      this._register(x);
      x.recomputeInitiallyAndOnChange(this._store, C);
      this.reactiveStorageRoot.onChangeEffect({
        deps: [() => this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip],
        onChange: C
      });
      this._register(this._editor.onDidChangeModel(() => {
        this._widget.value.rerender();
        if (!w) {
          if (this._breadcrumbsControlsContainer && this._breadcrumbsControlsContainer.isConnected) {
            this._breadcrumbsControlsDispose?.dispose();
            this._breadcrumbsControlsDispose = K$f(this._breadcrumbsControlsContainer, this._instantiationService, this._editor);
          }
        }
      }));
      this._register(this._experimentService.onDidChangeGates(N => {
        if (!N.changedConfigs || N.changedConfigs.has("agent_layout_migration")) {
          w = A.nonReactive() ?? false;
          C();
        }
      }));
      const I = this._editor.getContainerDomNode()?.closest(".editor-group-container");
      const B = I?.querySelector(".title");
      if (B) {
        const N = new MutationObserver(C);
        N.observe(B, {
          attributes: true,
          attributeFilter: ["class"]
        });
        this._breadcrumbsMutationDisconnect = $i(() => N.disconnect());
        this._register(this._breadcrumbsMutationDisconnect);
      }
      const R = I?.querySelector(".breadcrumbs-below-tabs");
      if (R) {
        const N = new MutationObserver(C);
        N.observe(R, {
          subtree: true,
          attributes: true,
          attributeFilter: ["class"]
        });
        this._register($i(() => N.disconnect()));
      }
      this._widget.value.rerender();
      C();
    }
  }
};
fvn = nCu = __decorate([__param(1, ln), __param(2, ku), __param(3, wi), __param(4, K3), __param(5, Tl), __param(6, Oa), __param(7, Hi)], fvn);
QDa = class extends at {
  constructor(e, t, i, r) {
    super();
    this._editor = e;
    this.reactiveStorageService = t;
    this.workspaceContextService = i;
    this.instantiationService = r;
    this.allowEditorOverflow = true;
    this._onClick = this._register(new Qe());
    this.onClick = this._onClick.event;
    this.isWordWrap = false;
    this._domNode = Ct("div.aiFullFilePromptBarWidget");
    this._domNode.style.width = "100%";
    this._domNode.style.boxSizing = "border-box";
    this._domNode.style.pointerEvents = "none";
    this._domNode.style.display = "flex";
    this._domNode.style.justifyContent = "center";
    this._domNode.style.zIndex = "10";
    this._offsetDomNode = Ct("div");
    this._offsetDomNode.style.width = "100%";
    this._offsetDomNode.style.display = "flex";
    this._offsetDomNode.style.justifyContent = "center";
    this._offsetDomNode.style.alignItems = "center";
    this._offsetDomNode.style.boxSizing = "border-box";
    this._offsetDomNode.style.position = "relative";
    this._offsetDomNode.style.zIndex = "2530";
    this._domNode.appendChild(this._offsetDomNode);
    this._register(this._editor.onMouseMove(s => {
      if (this._isMouseInEditor(s)) {
        this._applyHoverEffect();
      }
    }));
    this._register(this._editor.onMouseLeave(() => {
      if (!this._editor.hasTextFocus()) {
        this._removeHoverEffect();
      }
    }));
    this._register(this._editor.onDidFocusEditorText(() => {
      this._applyHoverEffect();
    }));
    this._register(this._editor.onDidBlurEditorText(() => {
      this._removeHoverEffect();
    }));
    this._register(E1.ignoreTarget(this._domNode));
    this._editor.addOverlayWidget(this);
    this.disposeRender = this._register(V$f(this._offsetDomNode, this, this.instantiationService, this._editor));
    this._register(this._editor.onDidChangeModelContent(() => {
      this._editor.layoutOverlayWidget(this);
    }));
  }
  _isMouseInEditor(e) {
    if (!e.target || e.target.type === 0) {
      return false;
    } else {
      return e.target.type !== 13;
    }
  }
  rerender() {
    this.disposeRender?.dispose();
    this.disposeRender = this._register(V$f(this._offsetDomNode, this, this.instantiationService, this._editor));
  }
  getId() {
    return "aiFullFilePromptBarWidget";
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return {
      preference: 3
    };
  }
  getURI() {
    const e = this._editor.getModel()?.uri;
    if (e?.path) {
      return e;
    }
  }
  show() {
    if (this._editor.getModel()?.uri?.scheme !== _n.git) {
      this._domNode.style.display = "block";
    }
  }
  hide() {
    this._domNode.style.display = "none";
  }
  update() {
    this.rerender();
  }
  _applyHoverEffect() {
    if (!this._domNode.classList.contains("editor-hover")) {
      this._domNode.classList.add("editor-hover");
    }
  }
  _removeHoverEffect() {
    if (this._domNode.classList.contains("editor-hover")) {
      this._domNode.classList.remove("editor-hover");
    }
  }
  dispose() {
    this.disposeRender?.dispose();
    super.dispose();
  }
};
QDa = __decorate([__param(1, ku), __param(2, Lr), __param(3, ln)], QDa);
Mg(fvn.ID, fvn, 3);
