import test from 'node:test';
import assert from 'node:assert/strict';
import { launchRuntime } from '../driver/launch.mjs';
import {
  captureAgentLogSnapshot,
  focusComposerInput,
  getAgentState,
  sendComposerMessage,
  settleAgentUi,
  waitForAgentSessionLogUpdate,
  waitForComposerReady,
  waitForComposerResponse,
} from '../driver/agent.mjs';

async function waitForComposerReadyWithRetry(session) {
  try {
    return await waitForComposerReady(session);
  } catch (error) {
    await settleAgentUi();
    return await waitForComposerReady(session, { timeoutMs: 10000 });
  }
}

test('agent e2e suite', { timeout: 120000 }, async (t) => {
  const session = await launchRuntime();
  const message = `123 agent-e2e ${Date.now()}`;
  let logSnapshot;

  try {
    await waitForComposerReadyWithRetry(session);
    await settleAgentUi();

    await t.test('composer panel visible', async () => {
      const state = await waitForComposerReady(session, { timeoutMs: 10000 });
      assert.equal(state.inputVisible || state.sidebarVisible || state.composerVisible, true);
      assert.equal(
        state.inputVisible ||
          Boolean((state.composerPlaceholder || '').trim()) ||
          typeof state.inputText === 'string',
        true,
      );
    });

    await t.test('composer input focusable', async () => {
      await focusComposerInput(session);
      const state = await getAgentState(session);
      assert.equal(state.inputFocused, true);
    });

    await t.test('send 123-like message', async () => {
      logSnapshot = captureAgentLogSnapshot(session);
      const state = await sendComposerMessage(session, message);
      assert.equal(state.bodyHasMessage, true);
      assert.equal(state.messages.some((text) => text.includes(message)), true);
      assert.equal((state.inputText || '').includes(message), false);
    });

    await t.test('response started', async () => {
      const state = await waitForComposerResponse(session, message);
      assert.equal(Boolean(state.matchingPair), true);
      assert.match(state.matchingPair, new RegExp(message.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    });

    await t.test('session log recorded', async () => {
      const state = await waitForAgentSessionLogUpdate(session, logSnapshot);
      assert.equal(Boolean(state.dirName), true);
      assert.equal(state.changed.length > 0, true);
      assert.equal(
        state.changed.some((entry) => /renderer\.log$|cursor\.hooks\.log$/.test(entry.relative)),
        true,
      );
    });
  } finally {
    await session.close();
  }
});
