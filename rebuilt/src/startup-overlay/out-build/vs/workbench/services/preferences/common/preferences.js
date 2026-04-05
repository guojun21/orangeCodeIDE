"use strict";

// Module: out-build/vs/workbench/services/preferences/common/preferences.js
// Offset: 31142627 (bundle byte offset)
// Size: 2734 bytes
Wt();
Nu();
(function (n) {
  n.Null = "null";
  n.Enum = "enum";
  n.String = "string";
  n.MultilineString = "multiline-string";
  n.Integer = "integer";
  n.Number = "number";
  n.Boolean = "boolean";
  n.Array = "array";
  n.Exclude = "exclude";
  n.Include = "include";
  n.Complex = "complex";
  n.NullableInteger = "nullable-integer";
  n.NullableNumber = "nullable-number";
  n.Object = "object";
  n.BooleanObject = "boolean-object";
  n.LanguageTag = "language-tag";
  n.ExtensionToggle = "extension-toggle";
  n.ComplexObject = "complex-object";
})(A0 ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.LanguageTagSettingMatch = 1] = "LanguageTagSettingMatch";
  n[n.RemoteMatch = 2] = "RemoteMatch";
  n[n.NonContiguousQueryInSettingId = 4] = "NonContiguousQueryInSettingId";
  n[n.DescriptionOrValueMatch = 8] = "DescriptionOrValueMatch";
  n[n.NonContiguousWordsInSettingsLabel = 16] = "NonContiguousWordsInSettingsLabel";
  n[n.ContiguousWordsInSettingsLabel = 32] = "ContiguousWordsInSettingsLabel";
  n[n.ContiguousQueryInSettingId = 64] = "ContiguousQueryInSettingId";
  n[n.AllWordsInSettingsLabel = 128] = "AllWordsInSettingsLabel";
  n[n.ExactMatch = 256] = "ExactMatch";
})(bD ||= {});
uDf = bD.AllWordsInSettingsLabel | bD.ContiguousWordsInSettingsLabel | bD.NonContiguousWordsInSettingsLabel | bD.NonContiguousQueryInSettingId | bD.ContiguousQueryInSettingId;
tb = xi("preferencesService");
gfu = "editor.contrib.defineKeybinding";
rfn = ".vscode/settings.json";
zSa = "workbench.settings.openDefaultSettings";
VSa = "workbench.settings.useSplitJSON";
KSa = "settings";
