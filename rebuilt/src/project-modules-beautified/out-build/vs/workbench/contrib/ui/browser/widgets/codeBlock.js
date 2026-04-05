"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/widgets/codeBlock.js
// Offset: 25590615 (bundle byte offset)
// Size: 6022 bytes
Cu();
Oh();
si();
Wt();
hs();
X1e();
dme();
Io();
So();
zg();
QE();
Cm();
Ei();
Rde();
IRe();
VI();
_ua();
ri();
NkA = new Sn("commentEditorFocused", false);
Vwg = 10;
V9 = class extends WS {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f) {
    const A = {
      isSimpleWidget: i.overwriteIsSimpleWidget ?? true,
      isChatCodeblock: true,
      cursorCodeBlockType: "chatCodeblock",
      contributions: SC.getSomeEditorContributions([jZ.ID, j9.ID, ZH.ID, ...(i.enableSemanticSyntaxHighlighting ? [i$e.ID] : []), ...(i.customContributions ?? [])])
    };
    super(e, t, A, r, s, o, a, l, u, d, m, p, g);
    this.configurationService = f;
    this.placeholderWidget = null;
    this.currentModel = null;
    this.currentModelListener = null;
    if (i.placeholder) {
      this.createPlaceholderWidget(i.placeholder);
      this._register(this.onDidChangeModel(() => {
        this.handleModelChange();
      }));
      this.updatePlaceholderVisibility();
    }
  }
  _getActions() {
    return SC.getEditorActions();
  }
  createPlaceholderWidget(e) {
    if (!e) {
      return;
    }
    const t = Ct(".simple-editor-placeholder");
    t.textContent = e;
    t.className = "simple-editor-placeholder";
    t.style.position = "absolute";
    t.style.pointerEvents = "none";
    t.style.overflow = "hidden";
    t.style.textOverflow = "ellipsis";
    t.style.whiteSpace = "nowrap";
    t.style.top = "0";
    t.style.left = "0";
    t.style.color = "var(--vscode-input-placeholderForeground)";
    t.style.fontFamily = this.configurationService.getValue("editor.fontFamily");
    t.style.fontSize = `${this.configurationService.getValue("editor.fontSize")}px`;
    t.style.opacity = "0.5";
    this.placeholderWidget = {
      getId: () => "simple.editor.placeholder",
      getDomNode: () => t,
      getPosition: () => ({
        position: {
          lineNumber: 1,
          column: 1
        },
        preference: [0]
      })
    };
  }
  handleModelChange() {
    if (this.currentModelListener) {
      this.currentModelListener.dispose();
      this.currentModelListener = null;
    }
    this.currentModel = this.getModel();
    if (this.currentModel) {
      this.currentModelListener = this.currentModel.onDidChangeContent(() => {
        this.updatePlaceholderVisibility();
      });
      this.updatePlaceholderVisibility();
    }
  }
  updatePlaceholderVisibility() {
    if (!this.placeholderWidget) {
      return;
    }
    const e = this.getModel();
    const t = this.placeholderWidget.getDomNode().style;
    if (e && e.getValueLength() === 0 && t.display !== "block") {
      this.addContentWidget(this.placeholderWidget);
      this.placeholderWidget.getDomNode().style.display = "block";
    } else if (e && e.getValueLength() > 0 && t.display === "block") {
      this.removeContentWidget(this.placeholderWidget);
      this.placeholderWidget.getDomNode().style.display = "none";
    }
  }
  dispose() {
    if (this.placeholderWidget) {
      this.removeContentWidget(this.placeholderWidget);
    }
    if (this.currentModelListener) {
      this.currentModelListener.dispose();
    }
    super.dispose();
  }
  static getEditorOptions(e) {
    return {
      readOnly: true,
      wordWrap: "off",
      wordWrapOverride1: "off",
      wordWrapOverride2: "off",
      glyphMargin: false,
      lineDecorationsWidth: 0,
      lineNumbersMinChars: 0,
      lineNumbers: "off",
      folding: false,
      fontFamily: e.getValue("editor.fontFamily"),
      fontLigatures: e.getValue("editor.fontLigatures"),
      fontSize: e.getValue("editor.fontSize"),
      lineHeight: e.getValue("editor.lineHeight"),
      scrollbar: {
        vertical: "hidden",
        horizontal: "auto",
        verticalScrollbarSize: 0,
        handleMouseWheel: true,
        alwaysConsumeMouseWheel: false,
        useShadows: true,
        verticalHasArrows: false,
        horizontalHasArrows: false,
        horizontalScrollbarSize: Vwg
      },
      scrollBeyondLastLine: false,
      renderLineHighlight: "none",
      renderWhitespace: "none",
      minimap: {
        enabled: false
      },
      quickSuggestions: false,
      automaticLayout: false,
      automaticLayoutIgnoreHeight: true,
      guides: {
        indentation: false
      }
    };
  }
};
V9 = __decorate([__param(3, ln), __param(4, fl), __param(5, fr), __param(6, wi), __param(7, bo), __param(8, ms), __param(9, Cf), __param(10, JS), __param(11, $u), __param(12, FY), __param(13, Fn)], V9);
