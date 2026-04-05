// Module: out-build/vs/workbench/contrib/ui/browser/htmlFindWidget/index.js
// Offset: 34155629 (bundle byte offset)
// Size: 6627 bytes

H7f(), tgy(), G7f()
}
});
function igy(n){
  const e=wr();
  let t;
  const[i, r]=lt(void 0), [s, o]=lt(void 0), [a, l]=lt(void 0);
  let u;
  const d=H=>{
    o(H), n.onFileListRef?.(H), u&&u.setMultiDiffRef(H)
  }, m=H=>{
    l(H)
  }, p=H=>{
    H?(s()?.expandAllGroups(), requestAnimationFrame(()=>{
      s()?.expandAll(),a()?.expandAll()
    })):(s()?.collapseAll(), s()?.collapseAllGroups(), a()?.collapseAll()), n.onExpandCollapseAll?.(H)
  }, [g, f]=lt(n.defaultGroupingMode??"files"), A=H=>{
    f(H), n.onGroupingModeChange?.(H)
  }, w=xe(()=>n.showGroupBySelector&&n.resourceGroups?g()==="conversation"?"grouped":"flat":n.listType??"flat"), C=xe(()=>w()==="grouped"&&!!n.resourceGroups&&n.resourceGroups.length>0), x=xe(()=>C()&&!!n.secondarySectionResources&&n.secondarySectionResources.length>0), I=new Fde({
    forceIntegerValues:!0, smoothScrollDuration:0, scheduleAtNextAnimationFrame:H=>r_(As(t), H)
  }), [B]=cR(e.reviewChangesService.effectiveDiffViewMode), R=xe(()=>`cursor-diff-${B()}`);
  Ai(()=>{
    I.dispose()
  });
  const N=()=>{
    n.onScroll?.()
  }, M=xe(()=>n.showGroupBySelector&&!!n.resourceGroups?.length||C()), O=xe(()=>n.showGroupBySelector&&g()==="files"?"Files":n.groupedSectionTitle), $=()=>{
    const H=()=>!!n.showGroupBySelector&&!!n.resourceGroups?.length;
    return(()=>{
      var W=Q7f(),z=W.firstChild;
      return ge(W,K(Xe,{
        get when(){
          return H()
        },get fallback(){
          return K(Xe,{
            get when(){
              return Ui(()=>!!M())()&&O()
            },get children(){
              var Y=j7f();
              return ge(Y,O),Y
            }
          })
        },get children(){
          var Y=W7f(),j=Y.firstChild,X=j.nextSibling,ee=X.firstChild;
          return j.addEventListener("click",()=>A("files")),X.addEventListener("click",()=>A("conversation")),ge(X,()=>n.conversationCount??n.resourceGroups?.length??0,ee),tn(re=>{
            var ne=`cursor-blame-tab ${g()==="files"?"active":""}`,pe=`cursor-blame-tab ${g()==="conversation"?"active":""}`;
            return ne!==re.e&&Un(j,re.e=ne),pe!==re.t&&Un(X,re.t=pe),re
          },{
            e:void 0,t:void 0
          }),Y
        }
      }),z),z.style.setProperty("margin-left","auto"),z.style.setProperty("display","flex"),z.style.setProperty("align-items","center"),z.style.setProperty("gap","8px"),ge(z,K(Qqf,{
        diffViewMode:B,onExpandStateChange:Y=>{
          p(Y.state==="expanded")
        },get additionalActions(){
          return n.ellipsisAdditionalActions
        }
      })),W
    })()
  };
  return(()=>{
    var H=K7f(), W=H.firstChild, z=W.firstChild, Y=z.nextSibling, j=W.nextSibling;
    return Bs(X=>{
      t=X,n.containerRef?.(X)
    }, H), ge(H, K(Xe, {
      get when(){
        return n.mountedEditors
      },get fallback(){
        return K(egy,{
          containerRef:()=>t,scrollableRef:()=>I,contentSelectors:".app-layout-multi-diff-root"
        })
      },get children(){
        return K(xCu,{
          containerRef:()=>t,get mountedEditors(){
            return n.mountedEditors
          },get multiDiffRef(){
            return s()
          },onWidgetCreated:X=>{
            u=X;
            const ee=s();
            ee&&X.setMultiDiffRef(ee),n.onFindWidgetCreated?.(X)
          }
        })
      }
    }), W), ge(z, ()=>n.actionBarLeft()), ge(Y, ()=>n.actionBarRight?.()), ge(j, K(Xe, {
      get when(){
        return n.error
      },get children(){
        var X=z7f(),ee=X.firstChild;
        return ge(ee,()=>n.error),X
      }
    }), null), ge(j, K(Xe, {
      get when(){
        return!n.error&&n.isLoading
      },get children(){
        var X=V7f();
        return ge(X,K(CL,{
          size:20
        })),X
      }
    }), null), ge(j, K(Xe, {
      get when(){
        return!n.error&&!n.isLoading
      },get children(){
        return K(Xe,{
          get when(){
            return R()
          },keyed:!0,get children(){
            return K(_D,{
              disableAutoSizing:!0,scrollingDirection:"vertical",scrollable:I,style:{
                height:"100%","overflow-x":"clip"
              },nonReactiveElementOptions:{
                useShadows:!1,mouseWheelSmoothScroll:!1
              },childStyle:{
                padding:"0px 32px",overflowX:"clip"
              },innerContainerClass:"app-layout-multi-diff-root external-scroll",setInnerContainerRef:r,onScroll:N,get children(){
                return[K(_7f,{
                  get title(){
                    return n.title
                  },get summary(){
                    return n.summary
                  },get summaryMaxHeight(){
                    return n.summaryMaxHeight
                  },get summaryIsTrusted(){
                    return n.summaryIsTrusted
                  },get resources(){
                    return n.resources
                  },get prStatus(){
                    return n.status
                  },get authorInfo(){
                    return n.authorInfo
                  },get tabs(){
                    return n.tabs
                  },get isLoading(){
                    return n.isLoading
                  },get checkStatus(){
                    return n.checkStatus
                  },get isCheckStatusLoading(){
                    return n.isCheckStatusLoading
                  },get prUrl(){
                    return n.prUrl
                  },get prNumber(){
                    return n.prNumber
                  },get prComments(){
                    return n.prComments
                  },get onOpenBugBotDiscussions(){
                    return n.onOpenBugBotDiscussions
                  },get onFixAllBugBotIssues(){
                    return n.onFixAllBugBotIssues
                  },get rightTitleElement(){
                    return n.rightTitleElement
                  },get rightTabsElement(){
                    return n.rightTabsElement
                  },get additionalMetaSections(){
                    return n.additionalMetaSections
                  },get onOpenUrl(){
                    return n.onOpenUrl
                  },get onOpenPreviewLink(){
                    return n.onOpenPreviewLink
                  }
                }),K(Xe,{
                  get when(){
                    return n.showAlternateView&&n.alternateView
                  },get fallback(){
                    return K(Xe,{
                      get when(){
                        return!n.hideFileList
                      },get fallback(){
                        return K(Xe,{
                          get when(){
                            return n.beforeFilesContent
                          },get children(){
                            return n.beforeFilesContent()
                          }
                        })
                      },get children(){
                        return[K(Xe,{
                          get when(){
                            return n.beforeFilesContent
                          },get children(){
                            return n.beforeFilesContent()
                          }
                        }),Ui(()=>$()),K(Xe,{
                          get when(){
                            return C()
                          },get fallback(){
                            return K(d1i,{
                              listType:"flat",get resources(){
                                return n.resources
                              },emptyMessage:"No changes",getShowKeep:()=>!1,getShowUndo:()=>!1,get diffViewMode(){
                                return B()
                              },scrollable:I,containerRef:i,get defaultCollapsed(){
                                return n.defaultCollapsed
                              },get onDiffEditorMount(){
                                return n.onDiffEditorMount
                              },get onDiffEditorUnmount(){
                                return n.onDiffEditorUnmount
                              },readonly:!0,showGlyphMargin:!0,ref:d,get skipComposerContext(){
                                return n.skipComposerContext
                              }
                            })
                          },get children(){
                            return K(d1i,{
                              listType:"grouped",get groups(){
                                return n.resourceGroups.map(X=>({
                                  title:X.title,description:X.description,resources:[...X.resources]
                                }))
                              },emptyMessage:"No changes",getShowKeep:()=>!1,getShowUndo:()=>!1,get diffViewMode(){
                                return B()
                              },scrollable:I,containerRef:i,get defaultCollapsed(){
                                return n.defaultCollapsed
                              },get onDiffEditorMount(){
                                return n.onDiffEditorMount
                              },get onDiffEditorUnmount(){
                                return n.onDiffEditorUnmount
                              },readonly:!0,showGlyphMargin:!0,ref:d,get skipComposerContext(){
                                return n.skipComposerContext
                              }
                            })
                          }
                        }),K(Xe,{
                          get when(){
                            return x()
                          },get children(){
                            return[K(Xe,{
                              get when(){
                                return n.secondarySectionTitle
                              },get children(){
                                var X=Y7f(),ee=X.firstChild;
                                return ge(ee,()=>n.secondarySectionTitle),X
                              }
                            }),K(d1i,{
                              listType:"flat",get resources(){
                                return n.secondarySectionResources
                              },emptyMessage:"No changes",getShowKeep:()=>!1,getShowUndo:()=>!1,get diffViewMode(){
                                return B()
                              },scrollable:I,containerRef:i,defaultCollapsed:!0,get onDiffEditorMount(){
                                return n.onDiffEditorMount
                              },get onDiffEditorUnmount(){
                                return n.onDiffEditorUnmount
                              },readonly:!0,showGlyphMargin:!0,ref:m,get skipComposerContext(){
                                return n.skipComposerContext
                              }
                            })]
                          }
                        })]
                      }
                    })
                  },get children(){
                    return n.alternateView()
                  }
                }),K(Xe,{
                  get when(){
                    return n.afterFilesContent
                  },get children(){
                    return n.afterFilesContent()
                  }
                })]
              }
            })
          }
        })
      }
    }), null), H
  })()
}
var W7f, Q7f, j7f, z7f, V7f, K7f, Y7f, rgy=