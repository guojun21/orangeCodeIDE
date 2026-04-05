#!/usr/bin/env node

export const SELECTORS = {
  WORKBENCH: '.monaco-workbench',
  QUICK_INPUT: '.quick-input-widget',
  QUICK_INPUT_INPUT: '.quick-input-widget input, .quick-input-widget .input',
  EXPLORER_VIEW: '#workbench\\.view\\.explorer, .pane.explorer-viewlet, [id="workbench.view.explorer"]',
  EDITOR_TAB: '.tabs-container .tab, .editor-group-container .tab',
  TERMINAL_PANEL: '.integrated-terminal, .terminal-outer-container',
  XTERM_ROWS: '.xterm-rows',
  LOGIN_BUTTONS: 'button',
  AGENT_SIDEBAR: '.unified-agents-sidebar, .agent-sidebar',
  COMPOSER_PANEL: '[class*="composer-bar"], .auxiliary-bar-show-agent-tabs, .quick-agent-overlay-container',
  COMPOSER_INPUT:
    '.auxiliary-bar-show-agent-tabs .aislash-editor-input[contenteditable="true"], .quick-agent-overlay-container .aislash-editor-input[contenteditable="true"], .aislash-editor-input[contenteditable="true"]',
  COMPOSER_PLACEHOLDER: '.aislash-editor-placeholder',
  COMPOSER_MESSAGES: '.composer-messages-container',
  COMPOSER_HUMAN_MESSAGE: '.composer-human-message, .composer-human-message-container, .aislash-editor-input-readonly',
  NEW_AGENT_BUTTON: '.agent-sidebar-new-agent-button',
};
