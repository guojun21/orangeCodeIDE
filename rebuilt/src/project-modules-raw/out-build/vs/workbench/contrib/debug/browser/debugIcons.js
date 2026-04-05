// Module: out-build/vs/workbench/contrib/debug/browser/debugIcons.js
// Offset: 30799849 (bundle byte offset)
// Size: 14951 bytes

qi(), Ht(), Pm(), npu=us("debug-console-view-icon", Be.debugConsole, _(6495, null)), ipu=us("run-view-icon", Be.debugAlt, _(6496, null)), vEf=us("variables-view-icon", Be.debugAlt, _(6497, null)), AEf=us("watch-view-icon", Be.debugAlt, _(6498, null)), yEf=us("callstack-view-icon", Be.debugAlt, _(6499, null)), wEf=us("breakpoints-view-icon", Be.debugAlt, _(6500, null)), _Ef=us("loaded-scripts-view-icon", Be.debugAlt, _(6501, null)), CMe={
  regular:us("debug-breakpoint", Be.debugBreakpoint, _(6502, null)), disabled:us("debug-breakpoint-disabled", Be.debugBreakpointDisabled, _(6503, null)), unverified:us("debug-breakpoint-unverified", Be.debugBreakpointUnverified, _(6504, null)), pending:us("debug-breakpoint-pending", Be.debugBreakpointPending, _(6505, null))
}, rpu={
  regular:us("debug-breakpoint-function", Be.debugBreakpointFunction, _(6506, null)), disabled:us("debug-breakpoint-function-disabled", Be.debugBreakpointFunctionDisabled, _(6507, null)), unverified:us("debug-breakpoint-function-unverified", Be.debugBreakpointFunctionUnverified, _(6508, null))
}, spu={
  regular:us("debug-breakpoint-conditional", Be.debugBreakpointConditional, _(6509, null)), disabled:us("debug-breakpoint-conditional-disabled", Be.debugBreakpointConditionalDisabled, _(6510, null)), unverified:us("debug-breakpoint-conditional-unverified", Be.debugBreakpointConditionalUnverified, _(6511, null))
}, opu={
  regular:us("debug-breakpoint-data", Be.debugBreakpointData, _(6512, null)), disabled:us("debug-breakpoint-data-disabled", Be.debugBreakpointDataDisabled, _(6513, null)), unverified:us("debug-breakpoint-data-unverified", Be.debugBreakpointDataUnverified, _(6514, null))
}, L0a={
  regular:us("debug-breakpoint-log", Be.debugBreakpointLog, _(6515, null)), disabled:us("debug-breakpoint-log-disabled", Be.debugBreakpointLogDisabled, _(6516, null)), unverified:us("debug-breakpoint-log-unverified", Be.debugBreakpointLogUnverified, _(6517, null))
}, N0a=us("debug-hint", Be.debugHint, _(6518, null)), apu=us("debug-breakpoint-unsupported", Be.debugBreakpointUnsupported, _(6519, null)), M0a=[CMe, rpu, spu, opu, L0a], c_i=us("debug-stackframe", Be.debugStackframe, _(6520, null)), l_i=us("debug-stackframe-focused", Be.debugStackframeFocused, _(6521, null)), CEf=us("debug-gripper", Be.gripper, _(6522, null)), F0a=us("debug-restart-frame", Be.debugRestartFrame, _(6523, null)), c1t=us("debug-stop", Be.debugStop, _(6524, null)), SMe=us("debug-disconnect", Be.debugDisconnect, _(6525, null)), u_i=us("debug-restart", Be.debugRestart, _(6526, null)), d_i=us("debug-step-over", Be.debugStepOver, _(6527, null)), bgn=us("debug-step-into", Be.debugStepInto, _(6528, null)), vgn=us("debug-step-out", Be.debugStepOut, _(6529, null)), O0a=us("debug-step-back", Be.debugStepBack, _(6530, null)), h_i=us("debug-pause", Be.debugPause, _(6531, null)), m_i=us("debug-continue", Be.debugContinue, _(6532, null)), U0a=us("debug-reverse-continue", Be.debugReverseContinue, _(6533, null)), SEf=us("debug-run", Be.run, _(6534, null)), Kiy=us("debug-function", Be.record, _(6535, null)), Yiy=us("debug-stop-recording", Be.stopCircle, _(6536, null)), cpu=us("debug-start", Be.debugStart, _(6537, null)), $0a=us("debug-configure", Be.gear, _(6538, null)), Ziy=us("debug-console", Be.gear, _(6539, null)), kEf=us("debug-remove-config", Be.trash, _(6540, null)), Xiy=us("debug-collapse-all", Be.collapseAll, _(6541, null)), EEf=us("callstack-view-session", Be.bug, _(6542, null)), xEf=us("debug-console-clear-all", Be.clearAll, _(6543, null)), TEf=us("watch-expressions-remove-all", Be.closeAll, _(6544, null)), IEf=us("watch-expression-remove", Be.removeClose, _(6545, null)), DEf=us("watch-expressions-add", Be.add, _(6546, null)), BEf=us("watch-expressions-add-function-breakpoint", Be.add, _(6547, null)), REf=us("watch-expressions-add-data-breakpoint", Be.variableGroup, _(6548, null)), PEf=us("breakpoints-remove-all", Be.closeAll, _(6549, null)), LEf=us("breakpoints-activate", Be.activateBreakpoints, _(6550, null)), NEf=us("debug-console-evaluation-input", Be.arrowSmallRight, _(6551, null)), MEf=us("debug-console-evaluation-prompt", Be.chevronRight, _(6552, null)), q0a=us("debug-inspect-memory", Be.fileBinary, _(6553, null))
}
});
function ery(){
  const n=Rn("debugTokenExpression.name", {
    dark:"#c586c0", light:"#9b46b0", hcDark:ym, hcLight:ym
  }, "Foreground color for the token names shown in the debug views (ie. the Variables or Watch view)."), e=Rn("debugTokenExpression.type", {
    dark:"#4A90E2", light:"#4A90E2", hcDark:ym, hcLight:ym
  }, "Foreground color for the token types shown in the debug views (ie. the Variables or Watch view)."), t=Rn("debugTokenExpression.value", {
    dark:"#cccccc99", light:"#6c6c6ccc", hcDark:ym, hcLight:ym
  }, "Foreground color for the token values shown in the debug views (ie. the Variables or Watch view)."), i=Rn("debugTokenExpression.string", {
    dark:"#ce9178", light:"#a31515", hcDark:"#f48771", hcLight:"#a31515"
  }, "Foreground color for strings in the debug views (ie. the Variables or Watch view)."), r=Rn("debugTokenExpression.boolean", {
    dark:"#4e94ce", light:"#0000ff", hcDark:"#75bdfe", hcLight:"#0000ff"
  }, "Foreground color for booleans in the debug views (ie. the Variables or Watch view)."), s=Rn("debugTokenExpression.number", {
    dark:"#b5cea8", light:"#098658", hcDark:"#89d185", hcLight:"#098658"
  }, "Foreground color for numbers in the debug views (ie. the Variables or Watch view)."), o=Rn("debugTokenExpression.error", {
    dark:"#f48771", light:"#e51400", hcDark:"#f48771", hcLight:"#e51400"
  }, "Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console."), a=Rn("debugView.exceptionLabelForeground", {
    dark:ym, light:"#FFF", hcDark:ym, hcLight:ym
  }, "Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception."), l=Rn("debugView.exceptionLabelBackground", {
    dark:"#6C2022", light:"#A31515", hcDark:"#6C2022", hcLight:"#A31515"
  }, "Background color for a label shown in the CALL STACK view when the debugger breaks on an exception."), u=Rn("debugView.stateLabelForeground", ym, "Foreground color for a label in the CALL STACK view showing the current session's or thread's state."), d=Rn("debugView.stateLabelBackground", "#88888844", "Background color for a label in the CALL STACK view showing the current session's or thread's state."), m=Rn("debugView.valueChangedHighlight", "#569CD6", "Color used to highlight value changes in the debug views (ie. in the Variables view)."), p=Rn("debugConsole.infoForeground", {
    dark:H$, light:H$, hcDark:ym, hcLight:ym
  }, "Foreground color for info messages in debug REPL console."), g=Rn("debugConsole.warningForeground", {
    dark:w9, light:w9, hcDark:"#008000", hcLight:w9
  }, "Foreground color for warning messages in debug REPL console."), f=Rn("debugConsole.errorForeground", P4n, "Foreground color for error messages in debug REPL console."), A=Rn("debugConsole.sourceForeground", ym, "Foreground color for source filenames in debug REPL console."), w=Rn("debugConsoleInputIcon.foreground", ym, "Foreground color for debug console input marker icon."), C=Rn("debugIcon.pauseForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6415, null)), x=Rn("debugIcon.stopForeground", {
    dark:"#F48771", light:"#A1260D", hcDark:"#F48771", hcLight:"#A1260D"
  }, _(6416, null)), I=Rn("debugIcon.disconnectForeground", {
    dark:"#F48771", light:"#A1260D", hcDark:"#F48771", hcLight:"#A1260D"
  }, _(6417, null)), B=Rn("debugIcon.restartForeground", {
    dark:"#89D185", light:"#388A34", hcDark:"#89D185", hcLight:"#388A34"
  }, _(6418, null)), R=Rn("debugIcon.stepOverForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6419, null)), N=Rn("debugIcon.stepIntoForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6420, null)), M=Rn("debugIcon.stepOutForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6421, null)), O=Rn("debugIcon.continueForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6422, null)), $=Rn("debugIcon.stepBackForeground", {
    dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
  }, _(6423, null));
  HI((H, W)=>{
    const z=H.getColor(Bte), Y=H.getColor(ESe), j=H.getColor(N1c), X=H.getColor(a), ee=H.getColor(l), re=H.getColor(u), ne=H.getColor(d), pe=H.getColor(m), le=H.getColor(iOt);
    W.addRule(`
			/* Text colour of the call stack row's filename */
			.debug-pane .debug-call-stack .monaco-list-row:not(.selected) .stack-frame > .file .file-name {
				color: ${j}
			}

			/* Line & column number "badge" for selected call stack row */
			.debug-pane .monaco-list-row.selected .line-number {
				background-color: ${z};
				color: ${Y};
			}

			/* Line & column number "badge" for unselected call stack row (basically all other rows) */
			.debug-pane .line-number {
				background-color: ${z.transparent(.6)};
				color: ${Y.transparent(.6)};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running.
			*/
			.debug-pane .debug-call-stack .thread > .state.label,
			.debug-pane .debug-call-stack .session > .state.label {
				background-color: ${ne};
				color: ${re};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running
			* and thread paused due to a thrown exception.
			*/
			.debug-pane .debug-call-stack .thread > .state.label.exception,
			.debug-pane .debug-call-stack .session > .state.label.exception {
				background-color: ${ee};
				color: ${X};
			}

			/* Info "badge" shown when the debugger pauses due to a thrown exception. */
			.debug-pane .call-stack-state-message > .label.exception {
				background-color: ${ee};
				color: ${X};
			}

			/* Animation of changed values in Debug viewlet */
			@keyframes debugViewletValueChanged {
				0%   { background-color: ${pe.transparent(0)} }
				5%   { background-color: ${pe.transparent(.9)} }
				100% { background-color: ${pe.transparent(.3)} }
			}

			.debug-pane .monaco-list-row .expression .value.changed {
				background-color: ${pe.transparent(.3)};
				animation-name: debugViewletValueChanged;
				animation-duration: 1s;
				animation-fill-mode: forwards;
			}

			.monaco-list-row .expression .lazy-button:hover {
				background-color: ${le}
			}
		`);
    const he=H.getColor(Du);
    he&&W.addRule(`
			.debug-pane .line-number {
				border: 1px solid ${he};
			}
			`), Poe(H.type)&&W.addRule(`
			.debug-pane .line-number {
				background-color: ${z};
				color: ${Y};
			}`);
    const be=H.getColor(n), fe=H.getColor(e), ke=H.getColor(t), Se=H.getColor(i), Fe=H.getColor(r), De=H.getColor(o), Pe=H.getColor(s);
    W.addRule(`
			.monaco-workbench .monaco-list-row .expression .name {
				color: ${be};
			}

			.monaco-workbench .monaco-list-row .expression .type {
				color: ${fe};
			}

			.monaco-workbench .monaco-list-row .expression .value,
			.monaco-workbench .debug-hover-widget .value {
				color: ${ke};
			}

			.monaco-workbench .monaco-list-row .expression .value.string,
			.monaco-workbench .debug-hover-widget .value.string {
				color: ${Se};
			}

			.monaco-workbench .monaco-list-row .expression .value.boolean,
			.monaco-workbench .debug-hover-widget .value.boolean {
				color: ${Fe};
			}

			.monaco-workbench .monaco-list-row .expression .error,
			.monaco-workbench .debug-hover-widget .error,
			.monaco-workbench .debug-pane .debug-variables .scope .error {
				color: ${De};
			}

			.monaco-workbench .monaco-list-row .expression .value.number,
			.monaco-workbench .debug-hover-widget .value.number {
				color: ${Pe};
			}
		`);
    const Ne=H.getColor(jbe)||Xr.fromHex("#80808060"), Oe=H.getColor(p), Ge=H.getColor(g), Le=H.getColor(f), We=H.getColor(A), tt=H.getColor(w);
    W.addRule(`
			.repl .repl-input-wrapper {
				border-top: 1px solid ${Ne};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.info {
				color: ${Oe};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.warn {
				color: ${Ge};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.error {
				color: ${Le};
			}

			.monaco-workbench .repl .repl-tree .output .expression .source {
				color: ${We};
			}

			.monaco-workbench .repl .repl-tree .monaco-tl-contents .arrow {
				color: ${tt};
			}
		`), H.defines(w)||W.addRule(`
				.monaco-workbench.vs .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.25;
				}

				.monaco-workbench.vs-dark .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.4;
				}

				.monaco-workbench.hc-black .repl .repl-tree .monaco-tl-contents .arrow,
				.monaco-workbench.hc-light .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 1;
				}
			`);
    const it=H.getColor(p_i);
    it&&W.addRule(`.monaco-workbench ${Qt.asCSSSelector(cpu)} { color: ${it}; }`);
    const bt=H.getColor(C);
    bt&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(h_i)}, .monaco-workbench ${Qt.asCSSSelector(h_i)} { color: ${bt}; }`);
    const Nt=H.getColor(x);
    Nt&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(c1t)},.monaco-workbench ${Qt.asCSSSelector(c1t)} { color: ${Nt}; }`);
    const ft=H.getColor(I);
    ft&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(SMe)},.monaco-workbench .debug-view-content ${Qt.asCSSSelector(SMe)}, .monaco-workbench .debug-toolbar ${Qt.asCSSSelector(SMe)}, .monaco-workbench .command-center-center ${Qt.asCSSSelector(SMe)} { color: ${ft}; }`);
    const _t=H.getColor(B);
    _t&&W.addRule(`.monaco-workbench ${Qt.asCSSSelector(u_i)}, .monaco-workbench ${Qt.asCSSSelector(F0a)}, .monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(u_i)}, .monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(F0a)} { color: ${_t}; }`);
    const It=H.getColor(R);
    It&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(d_i)}, .monaco-workbench ${Qt.asCSSSelector(d_i)} { color: ${It}; }`);
    const sn=H.getColor(N);
    sn&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(bgn)}, .monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(bgn)}, .monaco-workbench ${Qt.asCSSSelector(bgn)} { color: ${sn}; }`);
    const Vt=H.getColor(M);
    Vt&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(vgn)}, .monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(vgn)}, .monaco-workbench ${Qt.asCSSSelector(vgn)} { color: ${Vt}; }`);
    const Ft=H.getColor(O);
    Ft&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(m_i)}, .monaco-workbench ${Qt.asCSSSelector(m_i)}, .monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(U0a)}, .monaco-workbench ${Qt.asCSSSelector(U0a)} { color: ${Ft}; }`);
    const Xt=H.getColor($);
    Xt&&W.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${Qt.asCSSSelector(O0a)}, .monaco-workbench ${Qt.asCSSSelector(O0a)} { color: ${Xt}; }`)
  })
}
var FEf, OEf, p_i, H0a=