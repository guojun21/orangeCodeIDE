#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pressEnter, typeText } from './commands.mjs';
import { waitForCondition, delay } from './helpers.mjs';
import { SELECTORS } from './selectors.mjs';

function getLogsRoot(userDataDir) {
  return path.join(userDataDir, 'logs');
}

function getLatestLogDirName(userDataDir) {
  const logsRoot = getLogsRoot(userDataDir);
  const names = fs.readdirSync(logsRoot)
    .filter((name) => /^20\d{6}T\d{6}$/.test(name))
    .sort();
  return names.at(-1) ?? null;
}

function collectTrackedLogFiles(userDataDir, dirName) {
  if (!dirName) {
    return [];
  }

  const root = path.join(getLogsRoot(userDataDir), dirName);
  const files = [];

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      const relative = path.relative(root, fullPath);
      if (
        /^window\d+\/renderer\.log$/.test(relative) ||
        /^window\d+\/output_[^/]+\/cursor\.hooks\.log$/.test(relative)
      ) {
        files.push({
          relative,
          mtimeMs: fs.statSync(fullPath).mtimeMs,
        });
      }
    }
  };

  walk(root);
  return files.sort((left, right) => left.relative.localeCompare(right.relative));
}

export async function getAgentState(session) {
  return session.evaluateJson(`({
    sidebarVisible: !!document.querySelector(${JSON.stringify(SELECTORS.AGENT_SIDEBAR)}),
    composerVisible: Array.from(document.querySelectorAll(${JSON.stringify(SELECTORS.COMPOSER_PANEL)}))
      .some((node) => !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)),
    composerPlaceholder: document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_PLACEHOLDER)})?.textContent?.trim() || null,
    inputVisible: !!document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_INPUT)}),
    inputFocused: (() => {
      const input = document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_INPUT)});
      if (!input) {
        return false;
      }
      const active = document.activeElement;
      const anchor = document.getSelection()?.anchorNode || null;
      return (
        active === input ||
        !!active?.matches?.(${JSON.stringify(SELECTORS.COMPOSER_INPUT)}) ||
        !!(active && input.contains(active)) ||
        !!(anchor && input.contains(anchor))
      );
    })(),
    inputText: (() => {
      const input = document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_INPUT)});
      if (!input) {
        return null;
      }
      return 'value' in input ? input.value : input.textContent;
    })(),
    messagesText: document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_MESSAGES)})?.textContent?.trim() || null
  })`);
}

async function ensureAgentConversationOpen(session) {
  return waitForCondition(async () => {
    const state = await getAgentState(session);
    if (state.inputVisible) {
      return state;
    }

    if (!state.sidebarVisible) {
      return null;
    }

    const clicked = await session.evaluateValue(`(() => {
      const button = document.querySelector(${JSON.stringify(SELECTORS.NEW_AGENT_BUTTON)});
      if (!button) {
        return false;
      }
      ['pointerdown', 'mousedown', 'mouseup', 'click'].forEach((type) => {
        button.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true }));
      });
      return true;
    })()`);

    return clicked ? null : null;
  }, {
    timeoutMs: 10000,
    intervalMs: 400,
    description: 'agent conversation open',
  });
}

export async function waitForComposerReady(session, {
  timeoutMs = 20000,
} = {}) {
  await ensureAgentConversationOpen(session);
  return waitForCondition(async () => {
    const state = await getAgentState(session);
    return state.sidebarVisible && state.inputVisible ? state : null;
  }, {
    timeoutMs,
    intervalMs: 250,
    description: 'composer ready',
  });
}

export async function focusComposerInput(session) {
  await ensureAgentConversationOpen(session);
  return waitForCondition(async () => {
    const focused = await session.evaluateValue(`(() => {
      const el = document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_INPUT)});
      if (!el) {
        return false;
      }

      const rect = el.getBoundingClientRect();
      ['pointerdown', 'mousedown', 'mouseup', 'click'].forEach((type) => {
        el.dispatchEvent(new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          clientX: rect.left + Math.min(10, rect.width / 2),
          clientY: rect.top + Math.min(10, rect.height / 2),
        }));
      });
      el.focus();
      const active = document.activeElement;
      const anchor = document.getSelection()?.anchorNode || null;
      return (
        active === el ||
        !!active?.matches?.(${JSON.stringify(SELECTORS.COMPOSER_INPUT)}) ||
        !!(active && el.contains(active)) ||
        !!(anchor && el.contains(anchor))
      );
    })()`);
    return focused ? true : null;
  }, {
    timeoutMs: 8000,
    intervalMs: 200,
    description: 'composer input focused',
  });
}

export async function sendComposerMessage(session, message) {
  await focusComposerInput(session);
  await typeText(session.cdp, message);

  await waitForCondition(async () => {
    const state = await getAgentState(session);
    const bodyState = await session.evaluateJson(`(() => ({
      bodyText: document.body.innerText || '',
      activeValue: (() => {
        const el = document.activeElement;
        if (!el) {
          return '';
        }
        return 'value' in el ? el.value || '' : el.textContent || '';
      })()
    }))()`);
    return (
      (typeof state.inputText === 'string' && state.inputText.length > 0) ||
      bodyState.activeValue.length > 0 ||
      bodyState.bodyText.includes(message)
    )
      ? { ...state, bodyText: bodyState.bodyText, activeValue: bodyState.activeValue }
      : null;
  }, {
    timeoutMs: 4000,
    intervalMs: 150,
    description: 'composer input receives text',
  });

  await pressEnter(session.cdp);

  return waitForCondition(async () => {
    const state = await session.evaluateJson(`(() => {
      const messages = Array.from(document.querySelectorAll(${JSON.stringify(SELECTORS.COMPOSER_HUMAN_MESSAGE)}))
        .map((node) => (node.textContent || '').trim())
        .filter(Boolean);
      const messagesText = document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_MESSAGES)})?.textContent?.trim() || '';
      return {
        bodyHasMessage: document.body.innerText.includes(${JSON.stringify(message)}),
        inputText: document.querySelector(${JSON.stringify(SELECTORS.COMPOSER_INPUT)})?.textContent || null,
        messages,
        messagesText
      };
    })()`);

    return state.bodyHasMessage && state.messages.some((text) => text.includes(message))
      ? state
      : null;
  }, {
    timeoutMs: 12000,
    intervalMs: 250,
    description: 'composer human message rendered',
  });
}

export async function waitForComposerResponse(session, message) {
  const escapedMessage = JSON.stringify(message);
  return waitForCondition(async () => {
    const state = await session.evaluateJson(`(() => {
      const pairs = Array.from(document.querySelectorAll('.composer-human-ai-pair-container'))
        .map((node) => (node.textContent || '').trim())
        .filter(Boolean);
      const matchingPair = pairs.find((text) => text.includes(${escapedMessage}));
      return {
        pairs,
        matchingPair,
      };
    })()`);

    if (!state.matchingPair) {
      return null;
    }

    const normalized = state.matchingPair.replace(message, '').trim();
    return normalized.length > 0 ? state : null;
  }, {
    timeoutMs: 15000,
    intervalMs: 500,
    description: 'composer response started',
  });
}

export async function settleAgentUi() {
  await delay(250);
}

export function captureAgentLogSnapshot(session) {
  const dirName = getLatestLogDirName(session.userDataDir);
  return {
    dirName,
    files: collectTrackedLogFiles(session.userDataDir, dirName),
  };
}

export async function waitForAgentSessionLogUpdate(session, baseline) {
  return waitForCondition(async () => {
    const currentDirName = getLatestLogDirName(session.userDataDir);
    const currentFiles = collectTrackedLogFiles(session.userDataDir, currentDirName);
    const baselineMap = new Map((baseline?.files || []).map((entry) => [entry.relative, entry.mtimeMs]));

    const changed = currentFiles.filter((entry) => entry.mtimeMs > (baselineMap.get(entry.relative) ?? 0));
    if (!changed.length) {
      return null;
    }

    return {
      dirName: currentDirName,
      changed,
    };
  }, {
    timeoutMs: 12000,
    intervalMs: 500,
    description: 'agent session log update',
  });
}
