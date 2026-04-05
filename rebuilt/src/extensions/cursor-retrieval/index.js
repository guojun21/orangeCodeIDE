import * as vscode from 'vscode';

const DEBUG_COMMAND = 'cursor.grepClient.debug';
const SNAPSHOT_COMMAND = 'cursor.codebaseTelemetry.triggerSnapshot';

class RetrievalLogger {
  static init() {
    if (!RetrievalLogger.output) {
      RetrievalLogger.output = vscode.window.createOutputChannel('Cursor Indexing & Retrieval', {
        log: true,
      });
    }
  }

  static info(message) {
    RetrievalLogger.init();
    RetrievalLogger.output?.info(message);
  }

  static warn(message) {
    RetrievalLogger.init();
    RetrievalLogger.output?.warn(message);
  }

  static error(message) {
    RetrievalLogger.init();
    RetrievalLogger.output?.error(message);
  }
}

class RetrievalDebugLogger {
  static init() {
    if (!RetrievalDebugLogger.output) {
      RetrievalDebugLogger.output = vscode.window.createOutputChannel('Cursor-retrieval debug logs', {
        log: true,
      });
    }
  }

  static info(message) {
    RetrievalDebugLogger.init();
    RetrievalDebugLogger.output?.info(message);
  }

  static warn(message) {
    RetrievalDebugLogger.init();
    RetrievalDebugLogger.output?.warn(message);
  }

  static error(message) {
    RetrievalDebugLogger.init();
    RetrievalDebugLogger.output?.error(message);
  }
}

class CursorGrepLogger {
  static init() {
    if (!CursorGrepLogger.output) {
      CursorGrepLogger.output = vscode.window.createOutputChannel('Cursor Grep Service', {
        log: true,
      });
    }
  }

  static info(message) {
    CursorGrepLogger.init();
    CursorGrepLogger.output?.info(message);
  }

  static warn(message) {
    CursorGrepLogger.init();
    CursorGrepLogger.output?.warn(message);
  }
}

class CursorSnapshotLogger {
  static init() {
    if (!CursorSnapshotLogger.output) {
      CursorSnapshotLogger.output = vscode.window.createOutputChannel('Cursor Snapshot Service', {
        log: true,
      });
    }
  }

  static info(message) {
    CursorSnapshotLogger.init();
    CursorSnapshotLogger.output?.info(message);
  }

  static scoped(scope) {
    return {
      info(message) {
        CursorSnapshotLogger.info(`[${scope}] ${message}`);
      },
    };
  }
}

class GrepClientService {
  constructor(context) {
    this.context = context;
    this.snapshotCount = 0;
  }

  async provideTextSearchResults(query, options, progress, token) {
    CursorGrepLogger.info(
      `provideTextSearchResults(pattern=${query?.pattern ?? ''}, folderCount=${options?.folderOptions?.length ?? 0})`
    );
    if (token?.isCancellationRequested) {
      return { limitHit: false };
    }

    return { limitHit: false };
  }

  async triggerSnapshot(reason = 'manual') {
    this.snapshotCount += 1;
    const logger = CursorSnapshotLogger.scoped('CodebaseTelemetryService');
    logger.info(`triggerSnapshot(reason=${reason}, count=${this.snapshotCount})`);
    return {
      triggeredAt: new Date().toISOString(),
      reason,
      snapshotCount: this.snapshotCount,
    };
  }

  async showDebugMenu() {
    CursorGrepLogger.info('showDebugMenu invoked');
    return {
      provider: 'cursor-retrieval',
      snapshotCount: this.snapshotCount,
      workspaceFolders: vscode.workspace.workspaceFolders?.length ?? 0,
    };
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

export async function activate(context) {
  RetrievalLogger.init();
  RetrievalDebugLogger.init();
  CursorGrepLogger.init();
  CursorSnapshotLogger.init();

  context.subscriptions.push(
    RetrievalLogger.output,
    RetrievalDebugLogger.output,
    CursorGrepLogger.output,
    CursorSnapshotLogger.output
  );

  RetrievalDebugLogger.info('cursor-retrieval extension activating');
  RetrievalLogger.info('Initialized indexing and retrieval runtime');

  const grepService = new GrepClientService(context);
  const cursorApi = getCursorApi();

  if (typeof vscode.workspace.registerTextSearchProvider2 === 'function') {
    context.subscriptions.push(
      vscode.workspace.registerTextSearchProvider2('file-indexed', grepService)
    );
    RetrievalDebugLogger.info('Registered file-indexed text search provider');
  } else {
    RetrievalDebugLogger.warn('workspace.registerTextSearchProvider2 unavailable');
  }

  if (typeof cursorApi?.registerGrepProvider === 'function') {
    context.subscriptions.push(cursorApi.registerGrepProvider(grepService));
    RetrievalDebugLogger.info('Registered cursor grep provider');
  } else {
    RetrievalDebugLogger.warn('cursor.registerGrepProvider unavailable');
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(DEBUG_COMMAND, async () => {
      return grepService.showDebugMenu();
    }),
    vscode.commands.registerCommand(SNAPSHOT_COMMAND, async () => {
      return grepService.triggerSnapshot('developer-command');
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('cursor-retrieval.canAttemptGithubLogin')) {
        const enabled = vscode.workspace
          .getConfiguration('cursor-retrieval')
          .get('canAttemptGithubLogin', true);
        RetrievalDebugLogger.info(`canAttemptGithubLogin=${enabled}`);
      }
    })
  );

  RetrievalDebugLogger.info('cursor-retrieval extension activated');
}

export function deactivate() {}
