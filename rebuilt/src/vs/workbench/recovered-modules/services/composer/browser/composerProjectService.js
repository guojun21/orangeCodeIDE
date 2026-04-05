"use strict";

// Module: out-build/vs/workbench/services/composer/browser/composerProjectService.js
// Offset: 33795808 (bundle byte offset)
// Size: 747 bytes
rt();
Wt();
Er();
cp();
J0();
_0u = xi("composerProjectService");
nDa = class extends at {
    constructor(e, t) {
        super();
        this.composerDataService = e;
        this.composerService = t;
    }
    getAllProjectsByMode() {
        return this.composerDataService.allComposersData.allComposers.filter(t => t.isProject === true);
    }
    getNextProjectName() {
        return "New Project";
    }
    async createProjectWithMode(e) {
        const t = await this.composerService.createComposer({
            partialState: {
                isProject: true,
                name: e,
                unifiedMode: "project"
            },
            skipShowAndFocus: true,
            unifiedMode: "project"
        });
        if (!t) {
            throw new Error("Failed to create project composer");
        }
        return t.composerId;
    }
};
nDa = __decorate([__param(0, Oa), __param(1, ag)], nDa);
Vi(_0u, nDa, 1);
