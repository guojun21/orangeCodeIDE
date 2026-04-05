import * as vscode from 'vscode';

const OUTPUT_NAME = 'Cursor-always-local debug logs';
const COMMAND_ID = 'cursor.generateGitCommitMessage';
const STATE_KEY = 'cursor.alwaysLocal.activatedAt';

class AlwaysLocalLogger {
  static init() {
    if (!AlwaysLocalLogger.output) {
      AlwaysLocalLogger.output = vscode.window.createOutputChannel(OUTPUT_NAME, { log: true });
    }
    return AlwaysLocalLogger.output;
  }

  static info(message) {
    AlwaysLocalLogger.init().info(message);
  }

  static warn(message) {
    AlwaysLocalLogger.init().warn(message);
  }
}

function isEnvironmentJson(document) {
  return (
    (document.languageId === 'json' || document.languageId === 'jsonc') &&
    /\/\.cursor\/environment\.json$/i.test(document.uri.path)
  );
}

function installEnvironmentJsonWatcher(context) {
  const collection = vscode.languages.createDiagnosticCollection('cursor-always-local');

  const refresh = (document) => {
    if (!isEnvironmentJson(document)) {
      collection.delete(document.uri);
      return;
    }

    collection.set(document.uri, []);
    AlwaysLocalLogger.info(`Observed environment.json (${document.uri.fsPath})`);
  };

  for (const document of vscode.workspace.textDocuments) {
    refresh(document);
  }

  context.subscriptions.push(
    collection,
    vscode.workspace.onDidOpenTextDocument(refresh),
    vscode.workspace.onDidChangeTextDocument((event) => refresh(event.document)),
    vscode.workspace.onDidCloseTextDocument((document) => collection.delete(document.uri))
  );
}

function installCommitMessageCommand(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_ID, async () => {
      AlwaysLocalLogger.info(`Handling command (${COMMAND_ID})`);
      try {
        await vscode.commands.executeCommand('workbench.view.scm');
      } catch (error) {
        AlwaysLocalLogger.warn(
          `Failed to reveal SCM view (${error instanceof Error ? error.message : String(error)})`
        );
      }

      return 'Cursor Always Local rebuilt command invoked';
    })
  );
}

function installConfigurationLogging(context) {
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      const affectsAlwaysLocal = event.affectsConfiguration('cursor.alwaysLocal');
      AlwaysLocalLogger.info(`Configuration changed (affectsAlwaysLocal=${affectsAlwaysLocal})`);
    })
  );
}

export async function activate(context) {
  AlwaysLocalLogger.init();
  AlwaysLocalLogger.info('cursor-always-local extension activating');

  const previousActivatedAt = context.globalState.get(STATE_KEY);
  await context.globalState.update(STATE_KEY, new Date().toISOString());
  AlwaysLocalLogger.info(`Previous activation marker present=${previousActivatedAt ? 'true' : 'false'}`);

  installEnvironmentJsonWatcher(context);
  installCommitMessageCommand(context);
  installConfigurationLogging(context);

  AlwaysLocalLogger.info('cursor-always-local extension activated');
}

export function deactivate() {}
