import test from 'node:test';
import assert from 'node:assert/strict';
import { launchRuntime } from '../driver/launch.mjs';
import { closeCommandPalette, ensureQuickInputHidden, executeDriverCommand, openCommandPalette, runCommandPaletteCommand, typeText } from '../driver/commands.mjs';
import { waitForCondition } from '../driver/helpers.mjs';
import { SELECTORS } from '../driver/selectors.mjs';

function createSnapshotFn(session) {
  return () => session.evaluateJson(`({
    readyState: document.readyState,
    title: document.title,
    hasWorkbench: !!document.querySelector(${JSON.stringify(SELECTORS.WORKBENCH)}),
    quickInputVisible: Array.from(document.querySelectorAll(${JSON.stringify(SELECTORS.QUICK_INPUT)}))
      .some((node) => !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)),
    explorerVisible: !!document.querySelector(${JSON.stringify(SELECTORS.EXPLORER_VIEW)}),
    explorerItemCount: Math.max(
      document.querySelectorAll('[id="workbench.view.explorer"] .monaco-list-row').length,
      document.querySelectorAll('[data-view-id="workbench.explorer.fileView"] .monaco-list-row').length,
      document.querySelectorAll('.explorer-folders-view .monaco-list-row').length,
      document.querySelectorAll('.explorer-viewlet .monaco-list-row').length
    ),
    workspaceLabelVisible: document.body.innerText.includes(${JSON.stringify('shopeeCodeDev')}) ||
      document.body.innerText.includes(${JSON.stringify('SHOPEECODEDEV')}),
    tabTexts: Array.from(document.querySelectorAll(${JSON.stringify(SELECTORS.EDITOR_TAB)}))
      .map((node) => node.textContent?.trim() ?? '')
      .filter(Boolean)
      .slice(0, 20),
    editorSurfaceCount: Math.max(
      document.querySelectorAll('.editor-instance .monaco-editor').length,
      document.querySelectorAll('.editor-container .monaco-editor').length,
      document.querySelectorAll('.monaco-editor textarea.inputarea').length,
      document.querySelectorAll('.monaco-editor').length
    ),
    textareaCount: document.querySelectorAll('.monaco-editor textarea.inputarea').length,
    terminalCount: Math.max(
      document.querySelectorAll('.terminal-wrapper').length,
      document.querySelectorAll('.terminal-instance').length,
      document.querySelectorAll('.xterm').length,
      document.querySelectorAll('.integrated-terminal').length,
      document.querySelectorAll('.terminal-tab').length
    ),
    authPromptVisible: Array.from(document.querySelectorAll(${JSON.stringify(SELECTORS.LOGIN_BUTTONS)}))
      .some((node) => /log in|sign up/i.test(node.textContent || '')),
    smokeDriverAvailable: typeof window.driver !== 'undefined',
    preloadBridgeSource: window.__SHOPEE_PRELOAD_BRIDGE_INFO__?.source ?? window.vscode?.__shopeeBridgeInfo?.source ?? null
  })`);
}

test('smoke suite', { timeout: 120000 }, async (t) => {
  const session = await launchRuntime();
  const snapshot = createSnapshotFn(session);

  try {
    await t.test('workbench ready', async () => {
      const state = await snapshot();
      assert.equal(state.readyState, 'complete');
      assert.equal(state.hasWorkbench, true);
      assert.ok(state.title && state.title.length > 0);
    });

    await t.test('shared authenticated shell is reused', async () => {
      const state = await snapshot();
      assert.equal(state.hasWorkbench, true);
      assert.equal(state.authPromptVisible, false);
    });

    await t.test('preload runtime direct-file-replace active', async () => {
      const state = await waitForCondition(async () => {
        const next = await snapshot();
        return next.preloadBridgeSource ? next : null;
      }, {
        timeoutMs: 4000,
        intervalMs: 200,
        description: 'preload bridge source visible',
      });
      assert.equal(
        state.preloadBridgeSource,
        'rebuilt/src/vs/base/parts/sandbox/electron-sandbox/preload/runtime'
      );
    });

    await t.test('explorer visible', async () => {
      await ensureQuickInputHidden(session.cdp);
      try {
        await executeDriverCommand(session.cdp, 'workbench.view.explorer');
      } catch {}

      let state = await snapshot();
      if (!(state.explorerVisible || state.workspaceLabelVisible || state.explorerItemCount > 0)) {
        const sidebarHidden = await session.evaluateValue(`document.body.classList.contains('nosidebar')`);
        if (sidebarHidden) {
          try {
            await executeDriverCommand(session.cdp, 'workbench.action.toggleSidebarVisibility');
          } catch {}
        }

        try {
          await executeDriverCommand(session.cdp, 'workbench.view.explorer');
        } catch {}

        await runCommandPaletteCommand(session.cdp, 'View: Show Explorer', {
          commandDelayMs: 1000,
        });
      }

      state = await waitForCondition(async () => {
        const next = await snapshot();
        return next.explorerVisible || next.workspaceLabelVisible || next.explorerItemCount > 0
          ? next
          : null;
      }, {
        timeoutMs: 6000,
        intervalMs: 250,
        description: 'explorer visible',
      });

      assert.equal(state.hasWorkbench, true);
      assert.equal(state.explorerVisible || state.workspaceLabelVisible || state.explorerItemCount > 0, true);
    });

    await t.test('new untitled file', async () => {
      await ensureQuickInputHidden(session.cdp);
      const before = await snapshot();

      await executeDriverCommand(session.cdp, 'workbench.action.files.newUntitledFile');

      const afterState = await waitForCondition(async () => {
        const state = await snapshot();
        const untitledOpened = state.tabTexts.some((text) => /untitled/i.test(text));
        return untitledOpened || state.tabTexts.length > before.tabTexts.length || state.textareaCount >= 1 || state.editorSurfaceCount > before.editorSurfaceCount
          ? state
          : null;
      }, {
        timeoutMs: 5000,
        description: 'untitled editor opened',
      });

      const untitledOpened = afterState.tabTexts.some((text) => /untitled/i.test(text));
      assert.equal(
        untitledOpened ||
          afterState.tabTexts.length > before.tabTexts.length ||
          afterState.textareaCount >= 1 ||
          afterState.editorSurfaceCount > before.editorSurfaceCount,
        true
      );
    });

    await t.test('editor accepts text input', async () => {
      await ensureQuickInputHidden(session.cdp);
      await waitForCondition(async () => {
        const state = await session.evaluateJson(`({
          textareaCount: document.querySelectorAll('.monaco-editor textarea.inputarea').length,
          focusedTag: document.activeElement?.tagName || null
        })`);
        if (state.textareaCount < 1) {
          return null;
        }

        await session.evaluateValue(`(() => {
          const input = document.querySelector('.monaco-editor textarea.inputarea');
          if (!input) {
            return false;
          }
          input.focus();
          return true;
        })()`);

        return state;
      }, {
        timeoutMs: 4000,
        description: 'editor textarea available',
      });
      await session.cdp.send('Page.bringToFront');
      await typeText(session.cdp, '123');

      const afterState = await waitForCondition(async () => {
        const state = await session.evaluateJson(`({
          activeTag: document.activeElement?.tagName || null,
          activeValue: document.activeElement && 'value' in document.activeElement ? document.activeElement.value : null
        })`);
        return state.activeTag === 'TEXTAREA' && typeof state.activeValue === 'string' && state.activeValue.includes('123')
          ? state
          : null;
      }, {
        timeoutMs: 4000,
        description: 'editor input reflected in active textarea',
      });

      assert.equal(afterState.activeTag, 'TEXTAREA');
      assert.equal(afterState.activeValue.includes('123'), true);
    });

    await t.test('command palette open and close', async () => {
      await ensureQuickInputHidden(session.cdp);
      await openCommandPalette(session.cdp);
      let state = await snapshot();
      assert.equal(state.quickInputVisible, true);

      await closeCommandPalette(session.cdp);
      state = await waitForCondition(async () => {
        const next = await snapshot();
        return next.quickInputVisible === false ? next : null;
      }, {
        timeoutMs: 5000,
        description: 'command palette hidden',
      });
      assert.equal(state.quickInputVisible, false);
    });
  } finally {
    await session.close();
  }
});
