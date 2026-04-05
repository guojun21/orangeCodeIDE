"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/services/planUpdateMerger.js
// Offset: 27956281 (bundle byte offset)
// Size: 34326 bytes
Fsu = class extends Error {
    constructor(n, e) {
        const t = e === "not_found" ? `The old_str "${n}" was not found in the current plan. Please ensure you're using an exact substring from the plan.` : "Cannot provide an empty string as an old_str if the plan is not empty";
        super(t);
        this.oldStr = n;
        this.reason = e;
        this.name = "PlanSearchReplaceError";
    }
};
