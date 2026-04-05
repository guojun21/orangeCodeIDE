"use strict";

// Module: out-build/vs/editor/common/languages/modesRegistry.js
// Offset: 769759 (bundle byte offset)
// Size: 1170 bytes
Ht();
yn();
Ws();
rt();
hF();
Mp();
alh = {
  ModesRegistry: "editor.modesRegistry"
};
clh = class extends at {
  constructor() {
    super();
    this._onDidChangeLanguages = this._register(new Qe());
    this.onDidChangeLanguages = this._onDidChangeLanguages.event;
    this._languages = [];
  }
  registerLanguage(n) {
    this._languages.push(n);
    this._onDidChangeLanguages.fire(undefined);
    return {
      dispose: () => {
        for (let e = 0, t = this._languages.length; e < t; e++) {
          if (this._languages[e] === n) {
            this._languages.splice(e, 1);
            return;
          }
        }
      }
    };
  }
  getLanguages() {
    return this._languages;
  }
};
zBe = new clh();
Di.add(alh.ModesRegistry, zBe);
o_ = "plaintext";
r4o = ".txt";
zBe.registerLanguage({
  id: o_,
  extensions: [r4o],
  aliases: [_(884, null), "text"],
  mimetypes: [NA.text]
});
Di.as(Dh.Configuration).registerDefaultConfigurations([{
  overrides: {
    "[plaintext]": {
      "editor.unicodeHighlight.ambiguousCharacters": false,
      "editor.unicodeHighlight.invisibleCharacters": false
    },
    "[go]": {
      "editor.insertSpaces": false
    },
    "[makefile]": {
      "editor.insertSpaces": false
    },
    "[shellscript]": {
      "files.eol": `
`
    },
    "[yaml]": {
      "editor.insertSpaces": true,
      "editor.tabSize": 2
    }
  }
}]);
