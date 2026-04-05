"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentMenus.js
// Offset: 33154846 (bundle byte offset)
// Size: 935 bytes
dr();
lTa = class {
    constructor(e) {
        this.menuService = e;
    }
    getCommentThreadTitleActions(e) {
        return this.getMenu(st.CommentThreadTitle, e);
    }
    getCommentThreadActions(e) {
        return this.getMenu(st.CommentThreadActions, e);
    }
    getCommentEditorActions(e) {
        return this.getMenu(st.CommentEditorActions, e);
    }
    getCommentThreadAdditionalActions(e) {
        return this.getMenu(st.CommentThreadAdditionalActions, e, {
            emitEventsForSubmenuChanges: true
        });
    }
    getCommentTitleActions(e, t) {
        return this.getMenu(st.CommentTitle, t);
    }
    getCommentActions(e, t) {
        return this.getMenu(st.CommentActions, t);
    }
    getCommentThreadTitleContextActions(e) {
        return this.getActions(st.CommentThreadTitleContext, e, {
            shouldForwardArgs: true
        });
    }
    getMenu(e, t, i) {
        return this.menuService.createMenu(e, t, i);
    }
    getActions(e, t, i) {
        return this.menuService.getMenuActions(e, t, i).map(r => r[1]).flat();
    }
    dispose() {}
};
lTa = __decorate([__param(0, xd)], lTa);
