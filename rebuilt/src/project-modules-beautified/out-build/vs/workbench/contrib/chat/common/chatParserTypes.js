"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatParserTypes.js
// Offset: 28318873 (bundle byte offset)
// Size: 4977 bytes
UB();
Jr();
$I();
hR();
Nme();
Aie = class CQb {
  static {
    this.Kind = "text";
  }
  constructor(e, t, i) {
    this.range = e;
    this.editorRange = t;
    this.text = i;
    this.kind = CQb.Kind;
  }
  get promptText() {
    return this.text;
  }
};
Sk = "#";
Jq = "@";
EU = "/";
rcu = class SQb {
  static {
    this.Kind = "var";
  }
  constructor(e, t, i, r, s) {
    this.range = e;
    this.editorRange = t;
    this.variableName = i;
    this.variableArg = r;
    this.variableId = s;
    this.kind = SQb.Kind;
  }
  get text() {
    const e = this.variableArg ? `:${this.variableArg}` : "";
    return `${Sk}${this.variableName}${e}`;
  }
  get promptText() {
    return this.text;
  }
};
nqe = class kQb {
  static {
    this.Kind = "tool";
  }
  constructor(e, t, i, r, s, o) {
    this.range = e;
    this.editorRange = t;
    this.toolName = i;
    this.toolId = r;
    this.displayName = s;
    this.icon = o;
    this.kind = kQb.Kind;
  }
  get text() {
    return `${Sk}${this.toolName}`;
  }
  get promptText() {
    return this.text;
  }
  toVariableEntry() {
    return {
      id: this.toolId,
      name: this.toolName,
      range: this.range,
      value: undefined,
      isTool: true,
      icon: Qt.isThemeIcon(this.icon) ? this.icon : undefined,
      fullName: this.displayName
    };
  }
};
wQ = class EQb {
  static {
    this.Kind = "agent";
  }
  constructor(e, t, i) {
    this.range = e;
    this.editorRange = t;
    this.agent = i;
    this.kind = EQb.Kind;
  }
  get text() {
    return `${Jq}${this.agent.name}`;
  }
  get promptText() {
    return "";
  }
};
Lye = class xQb {
  static {
    this.Kind = "subcommand";
  }
  constructor(e, t, i) {
    this.range = e;
    this.editorRange = t;
    this.command = i;
    this.kind = xQb.Kind;
  }
  get text() {
    return `${EU}${this.command.name}`;
  }
  get promptText() {
    return "";
  }
};
Fnt = class TQb {
  static {
    this.Kind = "slash";
  }
  constructor(e, t, i) {
    this.range = e;
    this.editorRange = t;
    this.slashCommand = i;
    this.kind = TQb.Kind;
  }
  get text() {
    return `${EU}${this.slashCommand.command}`;
  }
  get promptText() {
    return `${EU}${this.slashCommand.command}`;
  }
};
dpn = class IQb {
  static {
    this.Kind = "dynamic";
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    this.range = e;
    this.editorRange = t;
    this.text = i;
    this.id = r;
    this.modelDescription = s;
    this.data = o;
    this.fullName = a;
    this.icon = l;
    this.isFile = u;
    this.isDirectory = d;
    this.kind = IQb.Kind;
  }
  get referenceText() {
    return this.text.replace(Sk, "");
  }
  get promptText() {
    return this.text;
  }
  toVariableEntry() {
    if (this.id === "vscode.problems") {
      return wkt.toEntry(this.data.filter);
    } else {
      return {
        id: this.id,
        name: this.referenceText,
        range: this.range,
        value: this.data,
        fullName: this.fullName,
        icon: this.icon,
        isFile: this.isFile,
        isDirectory: this.isDirectory
      };
    }
  }
};
