// Module: out-build/vs/workbench/contrib/composer/browser/components/BrowserEditorContent.js
// Offset: 32280714 (bundle byte offset)
// Size: 9273 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), V_(), iu(), nl(), Ql(), qi(), rt(), Jr(), Yn(), Bc(), X_(), es(), J1t(), tV(), mg(), Ifn(), g1a(), Ek(), CD(), qay(), Hay(), Gay(), KS(), Way(), Kay(), WNf(), Bcy(), Fcy(), b4f(), A4f=qe('<div class="flex flex-col gap-0.5"><div class="flex items-center gap-1.5"><img alt=""class="w-3 h-3 rounded-xs shrink-0"><span class="text-[var(--cursor-text-primary)] text-[11px] font-medium truncate"></span></div><div class="text-[var(--cursor-text-secondary)] text-[10px] leading-[12px] truncate max-w-[280px]">'), y4f=qe("<button class=nav-button><i>"), w4f=qe("<span class=url-input-ghost><span class=url-input-ghost-typed></span><span class=url-input-ghost-completion>"), _4f=qe('<div class=url-input-wrapper><input class=url-input type=text placeholder="Enter URL or search..."autocomplete=off>'), C4f=qe("<div class=url-loading-bar><div class=url-loading-bar-progress>"), S4f=qe("<div class=browser-pending-changes><span class=browser-pending-changes-count> Edit</span><button type=button class=css-inspector-undo-button><i>"), k4f=qe('<div class=browser-tools><button title="Select element"><i></i></button><button><i></i></button><button><i>'), E4f=qe('<div class=browser-navbar><div class=nav-controls><button class=nav-button title="Navigate back"><i></i></button><button class=nav-button title="Navigate forward"><i></i></button><button class=nav-button title="Hard reload (clears cache)"><i></i></button></div><div class=url-input-container>'), x4f=qe("<div class=bookmark-drop-indicator-end>"), T4f=qe("<div class=browser-bookmarks-inner>"), I4f=qe("<div class=browser-bookmarks-bar>"), D4f=qe('<div class=browser-error-overlay><div class=browser-error-content><div class=browser-error-icon><i></i></div><div class=browser-error-title>Certificate Error</div><div class=browser-error-subtitle>The certificate for this site is not trusted</div><div class=browser-cert-info><div class=browser-cert-info-row><span class=browser-cert-info-label>Error:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Issuer:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Subject:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Valid:</span><span class=browser-cert-info-value> - </span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Fingerprint:</span><span class="browser-cert-info-value browser-cert-fingerprint"></span></div></div><div class=browser-cert-warning><i></i><span>Only trust certificates from sources you recognize. Accepting untrusted certificates can compromise your security.</span></div><div class=browser-cert-actions><div class=browser-cert-remember><span>Remember for this workspace</span></div><div class=browser-cert-buttons><button class="browser-cert-button browser-cert-reject">Reject</button><button class="browser-cert-button browser-cert-trust">'), B4f=qe("<div class=browser-lock-overlay><div class=browser-lock-controls><div class=browser-lock-indicator><i></i><span>Agent is using this browser</span></div><button class=browser-lock-unlock-button>Take Control"), R4f=qe("<div class=browser-recording-indicator><div class=recording-dot></div><span>Recording "), P4f=qe("<div><div><div class=browser-frame-container>"), L4f=qe("<span class=url-placeholder>Loading..."), N4f=qe("<span class=url-raw>"), M4f=qe("<span>"), F4f=qe("<span class=url-placeholder>Enter URL or search..."), O4f=qe("<div class=url-display>"), U4f=qe("<span class=url-protocol>"), $4f=qe("<span class=url-domain>"), q4f=qe("<span class=url-port>"), H4f=qe("<span class=url-path>"), J4f=qe('<button><img alt=""class=bookmark-favicon><i></i><span class=bookmark-domain>'), G4f=qe('<div class=css-inspector-wrapper><div class=css-inspector-resizer title="Drag to resize">'), W4f=qe('<div class=element-tree-resizer-vertical title="Drag to resize">'), Q4f=qe("<div class=element-tree-container>"), j4f=qe("<div class=browser-tab-container tabindex=-1>"), z4f=r1(Vay), V4f=`
(function() {
	if (window.__cursorAreaScreenshotInjected) return;
	if (window !== window.top) return;
	window.__cursorAreaScreenshotInjected = true;

	let isDragging = false;
	let dragStartX = null;
	let dragStartY = null;
	let dragSelectionBox = null;
	let areaDragListeners = null;

	function enableAreaSelection() {
		if (areaDragListeners) {
			return; // Already enabled, prevent duplicate listeners
		}
		const mousedownListener = (e) => {
			if (e.target.getAttribute && e.target.getAttribute('data-cursor-overlay') === 'true') return;
			e.preventDefault();
			e.stopPropagation();
			isDragging = true;
			dragStartX = e.clientX;
			dragStartY = e.clientY;
			const overlays = document.querySelectorAll('[data-cursor-overlay="true"]');
			overlays.forEach(el => el.style.display = 'none');
			if (!dragSelectionBox) {
				dragSelectionBox = document.createElement('div');
				dragSelectionBox.style.cssText = 'position:fixed;background:rgba(58,150,221,0.1);border:2px dashed #3a96dd;pointer-events:none;z-index:2147483647;';
				document.body.appendChild(dragSelectionBox);
			}
			dragSelectionBox.style.left = dragStartX + 'px';
			dragSelectionBox.style.top = dragStartY + 'px';
			dragSelectionBox.style.width = '0px';
			dragSelectionBox.style.height = '0px';
		};
		const mousemoveListener = (e) => {
			if (!isDragging || !dragSelectionBox) return;
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			dragSelectionBox.style.left = left + 'px';
			dragSelectionBox.style.top = top + 'px';
			dragSelectionBox.style.width = width + 'px';
			dragSelectionBox.style.height = height + 'px';
		};
		const mouseupListener = (e) => {
			if (!isDragging) return;
			e.preventDefault();
			e.stopPropagation();
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			if (width > 5 && height > 5) {
				const bounds = { x: Math.round(left), y: Math.round(top), width: Math.round(width), height: Math.round(height) };
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
				disableAreaSelection();
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (window.cursorBrowser) {
							window.cursorBrowser.send('area-screenshot-selected', { bounds: bounds });
						}
					});
				});
			} else {
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
			}
			isDragging = false;
		};
		document.addEventListener('mousedown', mousedownListener, true);
		document.addEventListener('mousemove', mousemoveListener);
		document.addEventListener('mouseup', mouseupListener, true);
		areaDragListeners = { mousedown: mousedownListener, mousemove: mousemoveListener, mouseup: mouseupListener };
	}

	function disableAreaSelection() {
		isDragging = false;
		dragStartX = null;
		dragStartY = null;
		if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
		if (areaDragListeners) {
			document.removeEventListener('mousedown', areaDragListeners.mousedown, true);
			document.removeEventListener('mousemove', areaDragListeners.mousemove);
			document.removeEventListener('mouseup', areaDragListeners.mouseup, true);
			areaDragListeners = null;
		}
	}

	window.addEventListener('message', (e) => {
		if (e.data.type === 'start-area-screenshot') {
			enableAreaSelection();
		} else if (e.data.type === 'stop-area-screenshot') {
			disableAreaSelection();
		}
	});
})();
`, K4f=!0, Y4f=new Set(["serif", "sans-serif", "system-ui", "monospace", "cursive", "fantasy", "ui-rounded", "ui-serif", "ui-sans-serif", "ui-monospace", "emoji", "math", "fangsong", "inherit", "initial", "unset", "revert", "revert-layer"]), M1a=n=>n.replace(/\s+fallback$/i, "").trim(), Z4f=n=>{
  const e=n.replace(/['"]/g,"").trim();return M1a(e)},pAu=n=>n?n.split(",").map(e=>Z4f(e)).filter(e=>{if(!e)return!1;const t=e.toLowerCase();return!(Y4f.has(t)||t.includes("var("))}):[],X4f=(n,e)=>{const t=new Map;for(const r of n){const s=r.trim();if(!s)continue;const o=M1a(s);if(!o)continue;const a=o.toLowerCase();t.has(a)||t.set(a,s)}let i=!1;for(const r of e){const s=r.trim();if(!s)continue;const o=M1a(s);if(!o)continue;const a=o.toLowerCase();t.has(a)||(i=!0,t.set(a,s))}return i?Array.from(t.values()):n},F1a=n=>{if(!n)return null;try{return new URL(n).origin}catch{return null}},gAu=n=>{try{return new URL(n).host||void 0}catch{return}},eOf="about:blank",Xit=n=>n===eOf,ert=[25,33,50,67,75,80,90,100,110,125,150,175,200,250,300,400,500],tOf=Math.log(1.2),fAu=n=>Math.log(n/100)/tOf,nOf=n=>{for(const e of ert)if(e>n)return e;return ert[ert.length-1]},iOf=n=>{for(let e=ert.length-1;e>=0;e--)if(ert[e]<n)return ert[e];return ert[0]},bAu=50}});function Jcy(n,e,t,i){return Qv(()=>K(qcy,{browserId:t,get initialPreserveFocus(){return i?.initialPreserveFocus},get transient(){return i?.transient}}),n,e)}var Gcy=