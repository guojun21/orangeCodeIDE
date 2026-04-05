#!/usr/bin/env node

import fs from 'fs';
import { launchRuntime } from '../driver/launch.mjs';
import {
  captureAgentLogSnapshot,
  getAgentState,
  sendComposerMessage,
  settleAgentUi,
  waitForAgentSessionLogUpdate,
  waitForComposerReady,
  waitForComposerResponse,
} from '../driver/agent.mjs';
import { outputPath, timestamp } from '../driver/helpers.mjs';

const message = process.argv.slice(2).join(' ').trim() || `123 demo ${Date.now()}`;
const resultPath = outputPath(`agent-demo-${timestamp()}.json`);

const session = await launchRuntime({
  attachIfAvailable: true,
  remoteDebuggingPort: 9333,
  cleanupPreviousLaunch: false,
});
let screenshotPath = null;
let result;

try {
  await waitForComposerReady(session);
  await settleAgentUi();

  const before = await getAgentState(session);
  const logSnapshot = captureAgentLogSnapshot(session);
  const sent = await sendComposerMessage(session, message);
  const responded = await waitForComposerResponse(session, message);
  const logUpdate = await waitForAgentSessionLogUpdate(session, logSnapshot);

  screenshotPath = await session.screenshot(`agent-demo-${timestamp()}.png`);

  result = {
    generatedAt: new Date().toISOString(),
    message,
    screenshotPath,
    before,
    sent,
    responded,
    logUpdate,
    passed:
      sent.bodyHasMessage === true &&
      sent.messages.some((text) => text.includes(message)) &&
      Boolean(responded.matchingPair) &&
      logUpdate.changed.length > 0,
  };

  fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ resultPath, screenshotPath, passed: result.passed }, null, 2));
  process.exitCode = result.passed ? 0 : 1;
} finally {
  await session.close();
}
