import path from 'path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { launchRuntime } from '../driver/launch.mjs';
import { closeCommandPalette, ensureQuickInputHidden, executeDriverCommand, openCommandPalette, runCommandPaletteCommand, typeText } from '../driver/commands.mjs';
import { ROOT, waitForCondition } from '../driver/helpers.mjs';
import { SELECTORS } from '../driver/selectors.mjs';

const WORKSPACE_LABELS = [
  path.basename(ROOT),
  path.basename(ROOT).toUpperCase(),
];

const VISIBLE_TEXTAREA_QUERY = `(() => {
  const candidates = Array.from(document.querySelectorAll('.monaco-editor textarea.inputarea'));
  const visible = candidates.find((node) => !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length));
  if (visible) {
    return visible;
  }

  const active = document.activeElement;
  if (active?.matches?.('.monaco-editor textarea.inputarea')) {
    return active;
  }

  return candidates[0] ?? null;
})()`;

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
    explorerTitleVisible: Array.from(document.querySelectorAll('.pane-header, .composite.title, .title-label'))
      .some((node) => /explorer/i.test(node.textContent || '')),
    workspaceLabelVisible: ${JSON.stringify(WORKSPACE_LABELS)}.some((label) =>
      document.body.innerText.includes(label)
    ),
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
      if (!(state.explorerVisible || state.explorerTitleVisible || state.workspaceLabelVisible || state.explorerItemCount > 0)) {
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
        return next.explorerVisible || next.explorerTitleVisible || next.workspaceLabelVisible || next.explorerItemCount > 0
          ? next
          : null;
      }, {
        timeoutMs: 10000,
        intervalMs: 250,
        description: 'explorer visible',
      });

      assert.equal(state.hasWorkbench, true);
      assert.equal(
        state.explorerVisible || state.explorerTitleVisible || state.workspaceLabelVisible || state.explorerItemCount > 0,
        true
      );
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
        const state = await session.evaluateJson(`(() => {
          const input = ${VISIBLE_TEXTAREA_QUERY};
          return {
            textareaCount: document.querySelectorAll('.monaco-editor textarea.inputarea').length,
            focusedTag: document.activeElement?.tagName || null,
            hasVisibleTextarea: !!input
          };
        })()`);
        if (state.textareaCount < 1) {
          return null;
        }

        await session.evaluateValue(`(() => {
          const input = ${VISIBLE_TEXTAREA_QUERY};
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
      await session.evaluateValue(`(() => {
        const input = ${VISIBLE_TEXTAREA_QUERY};
        if (!input) {
          return false;
        }

        const rect = input.getBoundingClientRect();
        ['pointerdown', 'mousedown', 'mouseup', 'click'].forEach((type) => {
          input.dispatchEvent(new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            clientX: rect.left + Math.min(10, rect.width / 2),
            clientY: rect.top + Math.min(10, rect.height / 2),
          }));
        });
        input.focus();
        return document.activeElement === input;
      })()`);

      async function waitForEditorInputReflection() {
        return waitForCondition(async () => {
          const state = await session.evaluateJson(`(() => {
            const active = document.activeElement;
            const input = ${VISIBLE_TEXTAREA_QUERY};
            const textareaValues = Array.from(document.querySelectorAll('.monaco-editor textarea.inputarea'))
              .map((node) => node.value || '')
              .filter(Boolean);
            const editorText = Array.from(document.querySelectorAll('.monaco-editor .view-lines'))
              .map((node) => node.textContent || '')
              .join('\\n');

            return {
              activeTag: active?.tagName || null,
              activeValue: active && 'value' in active ? active.value : null,
              textareaValue: input?.value || '',
              textareaValues,
              editorText,
              bodyText: document.body.innerText || ''
            };
          })()`);
          return (
            (typeof state.activeValue === 'string' && state.activeValue.includes('123')) ||
            state.textareaValue.includes('123') ||
            state.textareaValues.some((value) => value.includes('123')) ||
            state.editorText.includes('123') ||
            state.bodyText.includes('123')
          )
            ? state
            : null;
        }, {
          timeoutMs: 7000,
          intervalMs: 150,
          description: 'editor input reflected in workbench',
        });
      }

      let afterState = null;
      for (let attempt = 1; attempt <= 2; attempt += 1) {
        await typeText(session.cdp, '123');
        try {
          afterState = await waitForEditorInputReflection();
          break;
        } catch (error) {
          if (attempt === 2) {
            throw error;
          }

          await session.cdp.send('Page.bringToFront');
          await session.evaluateValue(`(() => {
            const input = ${VISIBLE_TEXTAREA_QUERY};
            if (!input) {
              return false;
            }
            input.focus();
            return document.activeElement === input;
          })()`);
        }
      }

      assert.equal(
        (typeof afterState.activeValue === 'string' && afterState.activeValue.includes('123')) ||
          afterState.textareaValue.includes('123') ||
          afterState.textareaValues.some((value) => value.includes('123')) ||
          afterState.editorText.includes('123') ||
          afterState.bodyText.includes('123'),
        true
      );
    });

    await t.test('command palette open and close', async () => {
      await ensureQuickInputHidden(session.cdp);
      await openCommandPalette(session.cdp);
      let state = await waitForCondition(async () => {
        const next = await snapshot();
        return next.quickInputVisible === true ? next : null;
      }, {
        timeoutMs: 2500,
        intervalMs: 100,
        description: 'command palette visible',
      }).catch(async () => {
        await openCommandPalette(session.cdp, { openDelayMs: 750 });
        return waitForCondition(async () => {
          const next = await snapshot();
          return next.quickInputVisible === true ? next : null;
        }, {
          timeoutMs: 3000,
          intervalMs: 100,
          description: 'command palette visible on retry',
        });
      });
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
