"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/languageModelToolsService.js
// Offset: 28337336 (bundle byte offset)
// Size: 521 bytes
Yn();
Wt();
zr();
n8A();
(function(n) {
    function e(t) {
        switch (t.type) {
            case "extension":
                return `extension:${t.extensionId.value}`;
            case "mcp":
                return `mcp:${t.collectionId}:${t.definitionId}`;
            case "internal":
                return "internal";
        }
    }
    n.toKey = e;
})(cAa ||= {});
yie = xi("ILanguageModelToolsService");
