import * as vscode from 'vscode';

const DEEPLINK_SCHEME = 'cursor';
const DEEPLINK_AUTHORITY = 'anysphere.cursor-deeplink';
const COMMAND_DEBUG_TRIGGER = 'cursor-deeplink.debug.triggerDeeplink';

class CursorDeeplinkLogger {
  static init() {
    CursorDeeplinkLogger.output = vscode.window.createOutputChannel('Cursor Deeplink', { log: true });
  }

  static ensure() {
    if (!CursorDeeplinkLogger.output) {
      CursorDeeplinkLogger.init();
    }
  }

  static info(message, ...args) {
    CursorDeeplinkLogger.ensure();
    CursorDeeplinkLogger.output?.info(message, ...args);
  }

  static warn(message, ...args) {
    CursorDeeplinkLogger.ensure();
    CursorDeeplinkLogger.output?.warn(message, ...args);
  }

  static error(message, ...args) {
    CursorDeeplinkLogger.ensure();
    CursorDeeplinkLogger.output?.error(message, ...args);
  }
}

function normalizePath(value) {
  if (!value) {
    return '/';
  }
  return value.startsWith('/') ? value : `/${value}`;
}

async function tryExecuteCommand(commandIds, ...args) {
  let lastError;
  for (const commandId of commandIds) {
    try {
      await vscode.commands.executeCommand(commandId, ...args);
      CursorDeeplinkLogger.info(`Executed command ${commandId}`);
      return true;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    CursorDeeplinkLogger.warn(
      `Unable to execute any deeplink target command from [${commandIds.join(', ')}]: ${lastError instanceof Error ? lastError.message : String(lastError)}`
    );
  }
  return false;
}

class CursorUriHandler {
  async handleUri(uri) {
    const normalizedPath = normalizePath(uri.path);
    CursorDeeplinkLogger.info(`Handling deeplink ${uri.toString(true)}`);

    try {
      if (normalizedPath === '/' || normalizedPath === '') {
        CursorDeeplinkLogger.info('Ignoring root deeplink');
        return;
      }

      if (normalizedPath === '/command' || normalizedPath === '/command/create') {
        await this.handleCommandDeeplink(uri);
        return;
      }

      if (normalizedPath === '/bugbot' || normalizedPath === '/rule' || normalizedPath === '/pr-review') {
        await this.handleKnownRoute(normalizedPath, uri);
        return;
      }

      CursorDeeplinkLogger.warn(`Unrecognized deeplink path ${normalizedPath}`);
      void vscode.window.showWarningMessage('Unrecognized deep link. Try updating Cursor');
    } catch (error) {
      CursorDeeplinkLogger.error(
        `Error handling deep link ${uri.toString(true)}: ${error instanceof Error ? error.stack ?? error.message : String(error)}`
      );
      void vscode.window.showErrorMessage(`Error handling deep link: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async handleCommandDeeplink(uri) {
    const params = new URLSearchParams(uri.query);
    const payload = {
      source: 'cursor-deeplink',
      name: params.get('name') ?? params.get('title') ?? 'deeplink',
      content: params.get('content') ?? params.get('prompt') ?? '',
      uri: uri.toString(true),
    };

    CursorDeeplinkLogger.info(`Processing command deeplink with name=${payload.name}`);

    const executed = await tryExecuteCommand(
      ['composer.createNew', 'composer.openComposer', 'composer.focusComposer'],
      payload
    );

    if (!executed) {
      void vscode.window.showInformationMessage('Command deeplink received, but no compatible Composer command is available yet.');
    }
  }

  async handleKnownRoute(route, uri) {
    CursorDeeplinkLogger.info(`Received ${route} deeplink`);
    const executed = await tryExecuteCommand(['composer.openComposer', 'composer.focusComposer'], {
      source: 'cursor-deeplink',
      route,
      uri: uri.toString(true),
    });

    if (!executed) {
      void vscode.window.showInformationMessage(`Deep link ${route} received.`);
    }
  }
}

async function promptForDebugDeeplink(handler) {
  const deeplink = await vscode.window.showInputBox({
    prompt: 'Enter a deeplink URL to test (e.g., cursor://anysphere.cursor-deeplink/command/create?name=test&content=...)',
    placeHolder: 'cursor://anysphere.cursor-deeplink/...',
    validateInput(value) {
      if (!value) {
        return 'Please enter a deeplink URL';
      }
      try {
        const parsed = vscode.Uri.parse(value);
        if (parsed.scheme !== DEEPLINK_SCHEME || parsed.authority !== DEEPLINK_AUTHORITY) {
          return 'URL must start with cursor://anysphere.cursor-deeplink/';
        }
        return null;
      } catch {
        return 'Invalid URL format';
      }
    },
  });

  if (!deeplink) {
    return;
  }

  await handler.handleUri(vscode.Uri.parse(deeplink));
}

export function activate(context) {
  CursorDeeplinkLogger.ensure();
  CursorDeeplinkLogger.info('cursor-deeplink extension activating');

  const handler = new CursorUriHandler();
  const uriHandlerDisposable = vscode.window.registerUriHandler(handler);
  const debugCommandDisposable = vscode.commands.registerCommand(COMMAND_DEBUG_TRIGGER, async () => {
    await promptForDebugDeeplink(handler);
  });

  context.subscriptions.push(CursorDeeplinkLogger.output, uriHandlerDisposable, debugCommandDisposable);
  CursorDeeplinkLogger.info('cursor-deeplink extension activated');
}

export async function deactivate() {}
