"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/tools/promptTsxTypes.js
// Offset: 28336977 (bundle byte offset)
// Size: 359 bytes
Ae({
    "out-build/vs/workbench/contrib/chat/common/tools/promptTsxTypes.js"() {
        "use strict";
    }
});

function i8A(n) {
    return typeof n == "object" && typeof n?.input == "string" && typeof n?.output == "string";
}

function r8A(n) {
    return t8A(n.value);
}

function s8A(n) {
    if (typeof n != "string") {
        n = n.id;
    }
    return je.from({
        scheme: _n.inMemory,
        path: `/lm/tool/${n}/tool_input.json`
    });
}
