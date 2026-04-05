// Module: out-build/vs/workbench/contrib/composer/browser/composerMultiDiffContentProvider.js
// Offset: 34028304 (bundle byte offset)
// Size: 599 bytes

Ku(), hd(), tBa=class{
  constructor(e, t, i){
    this.contents=e, this.languageService=t, this.modelService=i
  }
  async provideTextContent(e){
    const t=this.modelService.getModel(e);
    if(t&&!t.isDisposed())return t.setValue(this.contents), t;
    let i=this.languageService.guessLanguageIdByFilepathOrFirstLine(e);
    return i&&!i.startsWith("worktree-")&&(i="worktree-"+i), this.modelService.createModel(this.contents, this.languageService.createById(i), e, !1, !1, !1)
  }
}, tBa=__decorate([__param(1, Jl), __param(2, Il)], tBa)
}
}), fCu=