import * as vscode from 'vscode';

const START_TRACKING_REQUEST_ACTION_ID = 'cursor.action.startTrackingRequest';
const GET_CACHED_SERVER_CONFIG_ACTION_ID = 'aiServerConfigService.getCachedServerConfig';

class CursorCommitsLogger {
  static init() {
    if (!CursorCommitsLogger.output) {
      CursorCommitsLogger.output = vscode.window.createOutputChannel('Cursor Commits', { log: true });
    }
  }

  static info(message) {
    CursorCommitsLogger.init();
    CursorCommitsLogger.output?.info(message);
  }

  static warn(message) {
    CursorCommitsLogger.init();
    CursorCommitsLogger.output?.warn(message);
  }

  static error(message) {
    CursorCommitsLogger.init();
    CursorCommitsLogger.output?.error(message);
  }
}

function getCursorApi() {
  return vscode.cursor ?? undefined;
}

async function getGitApi() {
  const gitExtension = vscode.extensions.getExtension('vscode.git');
  if (!gitExtension) {
    CursorCommitsLogger.warn('vscode.git extension is unavailable');
    return undefined;
  }

  const gitExports = gitExtension.isActive ? gitExtension.exports : await gitExtension.activate();
  if (!gitExports?.getAPI) {
    CursorCommitsLogger.warn('vscode.git did not expose getAPI');
    return undefined;
  }

  try {
    return gitExports.getAPI(1);
  } catch (error) {
    CursorCommitsLogger.warn(`Failed to initialize git API (${error instanceof Error ? error.message : String(error)})`);
    return undefined;
  }
}

class BackendClientService {
  constructor(context) {
    this.context = context;
    this.disposables = [];
    const cursorApi = getCursorApi();

    if (typeof cursorApi?.onDidChangeCursorAuthToken === 'function') {
      this.disposables.push(
        cursorApi.onDidChangeCursorAuthToken((token) => {
          const tokenLength = typeof token === 'string' ? token.length : 0;
          CursorCommitsLogger.info(`Observed cursor auth token change (tokenLength=${tokenLength})`);
        })
      );
    }

    if (typeof cursorApi?.onDidChangeCursorCreds === 'function') {
      this.disposables.push(
        cursorApi.onDidChangeCursorCreds((creds) => {
          const backendUrl = creds?.backendUrl ?? 'unknown';
          CursorCommitsLogger.info(`Observed cursor creds change (backendUrl=${backendUrl})`);
        })
      );
    }
  }

  async getCachedServerConfig() {
    try {
      const config = await vscode.commands.executeCommand(GET_CACHED_SERVER_CONFIG_ACTION_ID);
      const hasOnlineMetricsConfig = !!config?.onlineMetricsConfig;
      CursorCommitsLogger.info(`Loaded cached server config (hasOnlineMetricsConfig=${hasOnlineMetricsConfig})`);
      return config;
    } catch (error) {
      CursorCommitsLogger.warn(
        `Failed to load cached server config (${error instanceof Error ? error.message : String(error)})`
      );
      return undefined;
    }
  }

  dispose() {
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
  }
}

class CommitTracker {
  constructor(gitApi) {
    this.disposables = [];
    this.gitApi = gitApi;
    this.repositories = gitApi?.repositories ?? [];

    CursorCommitsLogger.info(`Initialized CommitTracker (repositories=${this.repositories.length})`);

    if (!gitApi) {
      return;
    }

    for (const repository of this.repositories) {
      this.subscribeToRepository(repository);
    }

    this.disposables.push(
      gitApi.onDidOpenRepository((repository) => {
        CursorCommitsLogger.info(`Observed repository open (root=${repository.rootUri.fsPath})`);
        this.subscribeToRepository(repository);
      })
    );

    this.disposables.push(
      gitApi.onDidCloseRepository((repository) => {
        CursorCommitsLogger.info(`Observed repository close (root=${repository.rootUri.fsPath})`);
      })
    );
  }

  subscribeToRepository(repository) {
    this.disposables.push(
      repository.onDidCommit(() => {
        const branch = repository.state.HEAD?.name ?? 'unknown';
        const commitHash = repository.state.HEAD?.commit ?? 'unknown';
        CursorCommitsLogger.info(
          `Observed repository commit (root=${repository.rootUri.fsPath}, branch=${branch}, commit=${commitHash})`
        );
      })
    );
  }

  dispose() {
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
  }
}

class TimeTracker {
  constructor() {
    this.disposables = [];
    CursorCommitsLogger.info('Initialized TimeTracker');
  }

  dispose() {
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
  }
}

class RequestTracker {
  constructor(context, backendClientService, gitApi) {
    this.context = context;
    this.backendClientService = backendClientService;
    this.disposables = [];
    this.commitTracker = new CommitTracker(gitApi);
    this.timeTracker = new TimeTracker();

    this.disposables.push(
      vscode.commands.registerCommand(START_TRACKING_REQUEST_ACTION_ID, async (request) => {
        const requestId = request?.requestId ?? 'unknown';
        const fileCount = Array.isArray(request?.files) ? request.files.length : 0;
        CursorCommitsLogger.info(`Handling tracked request (requestId=${requestId}, fileCount=${fileCount})`);
        await this.backendClientService.getCachedServerConfig();
      })
    );

    CursorCommitsLogger.info(`Registered request tracking command (${START_TRACKING_REQUEST_ACTION_ID})`);
  }

  async warmUp() {
    await this.backendClientService.getCachedServerConfig();
  }

  dispose() {
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
    this.commitTracker.dispose();
    this.timeTracker.dispose();
  }
}

export async function activate(context) {
  CursorCommitsLogger.init();
  CursorCommitsLogger.info('cursor-commits extension activating');

  const gitApi = await getGitApi();
  const backendClientService = new BackendClientService(context);
  const requestTracker = new RequestTracker(context, backendClientService, gitApi);

  context.subscriptions.push(CursorCommitsLogger.output, backendClientService, requestTracker);

  await requestTracker.warmUp();

  CursorCommitsLogger.info('cursor-commits extension activated');
}

export function deactivate() {}
