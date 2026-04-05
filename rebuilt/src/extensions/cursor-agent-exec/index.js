import fs from 'node:fs';
import path from 'node:path';
import * as vscode from 'vscode';

class CursorAgentExecLogger {
  static init() {
    if (!CursorAgentExecLogger.output) {
      CursorAgentExecLogger.output = vscode.window.createOutputChannel('Cursor Agent Exec', {
        log: true,
      });
    }
  }

  static info(message) {
    CursorAgentExecLogger.init();
    CursorAgentExecLogger.output?.info(message);
  }

  static warn(message) {
    CursorAgentExecLogger.init();
    CursorAgentExecLogger.output?.warn(message);
  }

  static error(message) {
    CursorAgentExecLogger.init();
    CursorAgentExecLogger.output?.error(message);
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

function resolveSandboxHelperPath(extensionPath) {
  const candidates = [
    path.join(extensionPath, 'dist', 'sandbox'),
    path.join(extensionPath, 'dist', 'sandbox-helper'),
    path.join(extensionPath, 'sandbox'),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate)) ?? null;
}

async function syncManagedSkills(cursorApi) {
  if (typeof cursorApi?.getCursorAuthToken !== 'function') {
    CursorAgentExecLogger.warn('cursor.getCursorAuthToken unavailable');
    return;
  }

  if (!cursorApi.getCursorAuthToken()) {
    CursorAgentExecLogger.info('No auth token available; skipping managed skills refresh');
    return;
  }

  if (typeof cursorApi.getManagedSkills !== 'function') {
    CursorAgentExecLogger.warn('cursor.getManagedSkills unavailable');
    return;
  }

  try {
    const skills = await cursorApi.getManagedSkills();
    CursorAgentExecLogger.info(
      `Managed skills refreshed (count=${skills?.skills?.length ?? 0})`
    );
  } catch (error) {
    CursorAgentExecLogger.warn(
      `Failed to refresh managed skills (${error instanceof Error ? error.message : String(error)})`
    );
  }
}

export async function activate(context) {
  CursorAgentExecLogger.init();
  context.subscriptions.push(CursorAgentExecLogger.output);
  CursorAgentExecLogger.info('cursor-agent-exec extension activating');

  const cursorApi = getCursorApi();
  const rgPath = cursorApi?.rgPath;
  if (rgPath) {
    CursorAgentExecLogger.info(`rgPath=${rgPath}`);
  } else {
    CursorAgentExecLogger.warn('rgPath unavailable');
  }

  const sandboxHelperPath = resolveSandboxHelperPath(context.extensionPath);
  if (sandboxHelperPath) {
    CursorAgentExecLogger.info(`sandboxHelperPath=${sandboxHelperPath}`);
  } else {
    CursorAgentExecLogger.warn('Sandbox helper path not found, sandboxing will be unavailable');
  }

  await syncManagedSkills(cursorApi);

  if (typeof cursorApi?.onDidChangeCursorAuthToken === 'function') {
    context.subscriptions.push(
      cursorApi.onDidChangeCursorAuthToken(() => {
        void syncManagedSkills(cursorApi);
      })
    );
    CursorAgentExecLogger.info('Registered auth token listener');
  } else {
    CursorAgentExecLogger.warn('cursor.onDidChangeCursorAuthToken unavailable');
  }

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (
        event.affectsConfiguration('cursor.general.enableShadowWorkspace') ||
        event.affectsConfiguration('cursor.general.enableShadowWorkspaceStreaming')
      ) {
        CursorAgentExecLogger.info('Observed cursor shadow-workspace related configuration change');
      }
    })
  );

  CursorAgentExecLogger.info('cursor-agent-exec extension activated');
}

export function deactivate() {}
