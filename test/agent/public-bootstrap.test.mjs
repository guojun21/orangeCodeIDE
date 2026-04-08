import test from 'node:test';
import assert from 'node:assert/strict';
import { launchRuntime } from '../driver/launch.mjs';
import { focusComposerInput, getAgentState, settleAgentUi, waitForComposerReady } from '../driver/agent.mjs';

async function waitForComposerReadyWithRetry(session) {
  try {
    return await waitForComposerReady(session);
  } catch {
    await settleAgentUi();
    return await waitForComposerReady(session, { timeoutMs: 10000 });
  }
}

test('agent public bootstrap suite', { timeout: 120000 }, async (t) => {
  const session = await launchRuntime();

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

    await t.test('composer shell reachable or explicitly auth-gated', async () => {
      const before = await getAgentState(session);
      if (before.loginPromptVisible) {
        assert.match(before.loginPromptText || '', /log in|sign up/i);
        return;
      }

      await focusComposerInput(session);
      const after = await getAgentState(session);
      assert.equal(after.inputFocused || after.loginPromptVisible, true);
    });
  } finally {
    await session.close();
  }
});
