"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatCodeCitationContentPart.js
// Offset: 32726050 (bundle byte offset)
// Size: 1177 bytes
ri();
fk();
rt();
Ht();
Pa();
Nme();
ss();
lxa = class extends at {
  constructor(e, t, i, r) {
    super();
    this.editorService = i;
    this.telemetryService = r;
    const s = ctf(e.citations);
    const o = kl(".chat-code-citation-message@root", [kl("span.chat-code-citation-label@label"), kl(".chat-code-citation-button-container@button")]);
    o.label.textContent = s + " - ";
    const a = this._register(new pw(o.button, {
      buttonBackground: undefined,
      buttonBorder: undefined,
      buttonForeground: undefined,
      buttonHoverBackground: undefined,
      buttonSecondaryBackground: undefined,
      buttonSecondaryForeground: undefined,
      buttonSecondaryHoverBackground: undefined,
      buttonSeparator: undefined
    }));
    a.label = _(5208, null);
    this._register(a.onDidClick(() => {
      const l = `# Code Citations

${e.citations.map(u => `## License: ${u.license}
${u.value.toString()}

\`\`\`
${u.snippet}
\`\`\`

`).join(`
`)}`;
      this.editorService.openEditor({
        resource: undefined,
        contents: l,
        languageId: "markdown"
      });
      this.telemetryService.publicLog2("openedChatCodeCitations");
    }));
    this.domNode = o.root;
  }
  hasSameContent(e, t, i) {
    return e.kind === "codeCitations";
  }
};
lxa = __decorate([__param(2, yi), __param(3, ea)], lxa);
