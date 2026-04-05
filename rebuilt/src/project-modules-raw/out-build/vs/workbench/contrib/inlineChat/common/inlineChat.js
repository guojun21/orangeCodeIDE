// Module: out-build/vs/workbench/contrib/inlineChat/common/inlineChat.js
// Offset: 30823375 (bundle byte offset)
// Size: 3416 bytes

Ht(), dr(), Mp(), si(), Ws(), Nl(), (function(n){
  n.FinishOnType="inlineChat.finishOnType", n.StartWithOverlayWidget="inlineChat.startWithOverlayWidget", n.HoldToSpeech="inlineChat.holdToSpeech", n.AccessibleDiffView="inlineChat.accessibleDiffView", n.LineEmptyHint="inlineChat.lineEmptyHint", n.LineNLHint="inlineChat.lineNaturalLanguageHint"
})(jEf||(jEf={
  
})), Di.as(Dh.Configuration).registerConfiguration({
  id:"editor", properties:{
    "inlineChat.finishOnType":{
      description:_(8210,null),default:!1,type:"boolean"
    }, "inlineChat.holdToSpeech":{
      description:_(8211,null),default:!0,type:"boolean"
    }, "inlineChat.accessibleDiffView":{
      description:_(8212,null),default:"auto",type:"string",enum:["auto","on","off"],markdownEnumDescriptions:[_(8213,null),_(8214,null),_(8215,null)]
    }, "inlineChat.lineEmptyHint":{
      description:_(8216,null),default:!1,type:"boolean",tags:["experimental"]
    }, "inlineChat.lineNaturalLanguageHint":{
      markdownDescription:_(8217,null),default:!0,type:"boolean",tags:["experimental"]
    }
  }
}), ygn="interactiveEditor", (function(n){
  n.None="none", n.Messages="messages", n.MessagesAndEdits="messagesAndEdits"
})(zEf||(zEf={
  
})), VEf=new Sn("inlineChatPossible", !1, _(8218, null)), dpu=new Sn("inlineChatHasProvider", !1, _(8219, null)), wgn=new Sn("inlineChatHasEditsAgent", !1, _(8220, null)), l1t=new Sn("inlineChatVisible", !1, _(8221, null)), RV=new Sn("inlineChatFocused", !1, _(8222, null)), j0a=new Sn("inlineChatEditing", !0, _(8223, null)), KEf=new Sn("inlineChatResponseFocused", !1, _(8224, null)), rry=new Sn("inlineChatEmpty", !1, _(8225, null)), YEf=new Sn("inlineChatInnerCursorFirst", !1, _(8226, null)), ZEf=new Sn("inlineChatInnerCursorLast", !1, _(8227, null)), XEf=new Sn("inlineChatOuterCursorPosition", "", _(8228, null)), exf=new Sn("inlineChatHasStashedSession", !1, _(8229, null)), txf=new Sn("inlineChatChangeHasDiff", !1, _(8230, null)), nxf=new Sn("inlineChatChangeShowsDiff", !1, _(8231, null)), _gn=new Sn("inlineChatRequestInProgress", !1, _(8232, null)), z0a=new Sn("inlineChatResponseType", "none", _(8233, null)), ixf="inlineChat.acceptChanges", rxf="inlineChat.regenerate", hpu="inlineChat.toggleDiff", sxf="inlineChat.reportIssue", mpu=st.for("inlineChatWidget.status"), b_i=st.for("inlineChatWidget.secondary"), oxf=st.for("inlineChatWidget.changesZone"), ppu=st.for("inlineChatWidget.side"), axf=Rn("inlineChat.foreground", H5e, _(8234, null)), gpu=Rn("inlineChat.background", fF, _(8235, null)), sry=Rn("inlineChat.border", cft, _(8236, null)), ory=Rn("inlineChat.shadow", Tde, _(8237, null)), ary=Rn("inlineChatInput.border", cft, _(8238, null)), cry=Rn("inlineChatInput.focusBorder", nN, _(8239, null)), lry=Rn("inlineChatInput.placeholderForeground", R4o, _(8240, null)), ury=Rn("inlineChatInput.background", Ide, _(8241, null)), dry=Rn("inlineChatDiff.inserted", rl(_9, .5), _(8242, null)), cxf=Rn("editorOverviewRuler.inlineChatInserted", {
  dark:rl(_9, .6), light:rl(_9, .8), hcDark:rl(_9, .6), hcLight:rl(_9, .8)
}, _(8243, null)), lxf=Rn("editorMinimap.inlineChatInserted", {
  dark:rl(_9, .6), light:rl(_9, .8), hcDark:rl(_9, .6), hcLight:rl(_9, .8)
}, _(8244, null)), hry=Rn("inlineChatDiff.removed", rl(R6, .5), _(8245, null)), mry=Rn("editorOverviewRuler.inlineChatRemoved", {
  dark:rl(R6, .6), light:rl(R6, .8), hcDark:rl(R6, .6), hcLight:rl(R6, .8)
}, _(8246, null))
}
}), uxf, V0a, fpu, mit, SE, bpu, dxf, Kq, dv, a5, kMe, Cgn, n1, pit, EMe, K0a, pry, hxf, Y0a, v_i, mxf, LV, pX, Sgn, Yq, kgn, Z0a, A_i, vpu, zEe, Apu, ypu, wpu, y_i, X0a, pxf, _pu, Egn, Cpu, eCa, w_i, tCa, gxf, xMe, Spu, kpu, __i, i1=