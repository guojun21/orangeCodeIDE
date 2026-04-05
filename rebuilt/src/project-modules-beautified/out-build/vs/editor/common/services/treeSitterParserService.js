"use strict";

// Module: out-build/vs/editor/common/services/treeSitterParserService.js
// Offset: 32790728 (bundle byte offset)
// Size: 1149 bytes
Wt();
KEe();
kSi = "editor.experimental.preferTreeSitter";
_xa = ["css", "typescript", "ini", "regex"];
yrt = xi("treeSitterParserService");
ESi = xi("treeSitterImporter");
G5f = class {
  constructor() {}
  async _getTreeSitterImport() {
    this._treeSitterImport ||= await DQ("@vscode/tree-sitter-wasm", "wasm/tree-sitter.js");
    return this._treeSitterImport;
  }
  get parserClass() {
    return this._parserClass;
  }
  async getParserClass() {
    this._parserClass ||= (await this._getTreeSitterImport()).Parser;
    return this._parserClass;
  }
  async getLanguageClass() {
    this._languageClass ||= (await this._getTreeSitterImport()).Language;
    return this._languageClass;
  }
  async getQueryClass() {
    this._queryClass ||= (await this._getTreeSitterImport()).Query;
    return this._queryClass;
  }
};
