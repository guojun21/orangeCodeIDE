#!/usr/bin/env node

import { delay, waitForCondition } from './helpers.mjs';

export async function pressShortcut(cdp, {
  key,
  code,
  keyCode,
  meta = false,
  shift = false,
  alt = false,
  ctrl = false,
} = {}) {
  const modifiers =
    (alt ? 1 : 0) +
    (ctrl ? 2 : 0) +
    (meta ? 4 : 0) +
    (shift ? 8 : 0);

  for (const type of ['keyDown', 'keyUp']) {
    await cdp.send('Input.dispatchKeyEvent', {
      type,
      key,
      code,
      windowsVirtualKeyCode: keyCode,
      modifiers,
    });
  }
}

export async function typeText(cdp, text) {
  for (const char of text) {
    await cdp.send('Input.insertText', { text: char });
    await delay(15);
  }
}

export async function pressEnter(cdp) {
  for (const type of ['keyDown', 'char', 'keyUp']) {
    await cdp.send('Input.dispatchKeyEvent', {
      type,
      key: 'Enter',
      code: 'Enter',
      windowsVirtualKeyCode: 13,
      unmodifiedText: '\r',
      text: type === 'char' ? '\r' : undefined,
    });
  }
}

export async function pressEscape(cdp) {
  for (const type of ['keyDown', 'keyUp']) {
    await cdp.send('Input.dispatchKeyEvent', {
      type,
      key: 'Escape',
      code: 'Escape',
      windowsVirtualKeyCode: 27,
    });
  }
}

async function evaluateValue(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  return result.result?.value ?? null;
}

export async function executeDriverCommand(cdp, commandId, ...args) {
  const serializedArgs = JSON.stringify(args);
  return evaluateValue(
    cdp,
    `window.driver.commandService.executeCommand(${JSON.stringify(commandId)}, ...${serializedArgs})`
  );
}

export async function getQuickInputState(cdp) {
  return evaluateValue(cdp, `(() => {
    const widgets = Array.from(document.querySelectorAll('.quick-input-widget'));
    const visibleWidgets = widgets.filter((node) => !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length));
    const active = document.activeElement;
    const activeValue = active && 'value' in active ? active.value : null;
    const activePlaceholder = active && 'placeholder' in active ? active.placeholder : null;
    return {
      widgetCount: widgets.length,
      visible: visibleWidgets.length > 0,
      activeValue,
      activePlaceholder,
      items: visibleWidgets.flatMap((node) =>
        Array.from(node.querySelectorAll('.monaco-list-row'))
          .map((entry) => (entry.textContent || '').trim())
          .filter(Boolean)
      ).slice(0, 12)
    };
  })()`);
}

export async function clearActiveTextInput(cdp) {
  return evaluateValue(cdp, `(() => {
    const active = document.activeElement;
    if (!active || active.tagName !== 'INPUT') {
      return false;
    }

    active.focus();
    active.value = '';
    active.dispatchEvent(new Event('input', { bubbles: true }));
    active.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  })()`);
}

export async function ensureQuickInputHidden(cdp, {
  timeoutMs = 4000,
} = {}) {
  const hidden = await waitForCondition(async () => {
    const state = await getQuickInputState(cdp);
    if (!state.visible) {
      return state;
    }

    await pressEscape(cdp);
    await delay(250);
    return null;
  }, {
    timeoutMs,
    intervalMs: 150,
    description: 'quick input hidden',
  });

  return hidden;
}

export async function openCommandPalette(cdp, {
  openDelayMs = 500,
} = {}) {
  await cdp.send('Page.bringToFront');
  await ensureQuickInputHidden(cdp, { timeoutMs: 2000 }).catch(() => null);
  await pressShortcut(cdp, {
    key: 'P',
    code: 'KeyP',
    keyCode: 80,
    meta: true,
    shift: true,
  });
  await waitForCondition(async () => {
    const state = await getQuickInputState(cdp);
    return state.visible ? state : null;
  }, {
    timeoutMs: Math.max(2000, openDelayMs + 1500),
    intervalMs: 100,
    description: 'command palette visible',
  });
  await delay(openDelayMs);
}

export async function closeCommandPalette(cdp, {
  closeDelayMs = 450,
} = {}) {
  await ensureQuickInputHidden(cdp, {
    timeoutMs: Math.max(2500, closeDelayMs * 4),
  });
  await delay(closeDelayMs);
}

export async function runCommandPaletteCommand(cdp, commandText, {
  openDelayMs = 500,
  typeDelayMs = 500,
  commandDelayMs = 1200,
  followUpEnters = 0,
} = {}) {
  await openCommandPalette(cdp, { openDelayMs });
  await clearActiveTextInput(cdp);
  await typeText(cdp, commandText);
  await delay(typeDelayMs);
  await pressEnter(cdp);
  await delay(commandDelayMs);

  for (let index = 0; index < followUpEnters; index += 1) {
    const state = await getQuickInputState(cdp);
    if (!state.visible) {
      break;
    }

    await pressEnter(cdp);
    await delay(commandDelayMs);
  }
}
