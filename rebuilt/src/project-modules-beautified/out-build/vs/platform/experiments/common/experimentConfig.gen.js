"use strict";

// Module: out-build/vs/platform/experiments/common/experimentConfig.gen.js
// Offset: 26726245 (bundle byte offset)
// Size: 65941 bytes
GRe();
Ame();
aFg = Tr.enum(["off", "default-on", "default-off", "hidden"]);
nO = Tr.object({
  lifecycle: aFg
});
uye = {
  dashoard_credit_grants_visible: {
    client: false,
    default: false
  },
  anytool_teammates_example_engineer_visible: {
    client: false,
    default: false
  },
  anytool_teammates_debugging_specialist_visible: {
    client: false,
    default: false
  },
  nal_agent_retries: {
    client: true,
    default: true
  },
  nal_retry_on_dropped_stream: {
    client: true,
    default: false
  },
  "x-chat-context": {
    client: true,
    default: false
  },
  semsearch_codebase_not_found_debug_log: {
    client: false,
    default: false
  },
  referral_codes_v2: {
    client: true,
    default: true
  },
  disk_usage_monitor: {
    client: true,
    default: false
  },
  oom_crash_watcher: {
    client: true,
    default: false
  },
  memory_monitor: {
    client: true,
    default: false
  },
  memory_monitor_user_toast_v2: {
    client: true,
    default: false
  },
  issue_traces_enabled: {
    client: true,
    default: true
  },
  quick_open_adaptive_default_width: {
    client: true,
    default: false
  },
  show_glass_mode_action: {
    client: true,
    default: false
  },
  enable_glass_subpixel_antialias: {
    client: true,
    default: false
  },
  use_jwt_port_tokens: {
    client: false,
    default: false
  },
  smart_allowlist_required: {
    client: true,
    default: false
  },
  bugbot_use_agent_controller: {
    client: false,
    default: false
  },
  bugbot_use_vm: {
    client: false,
    default: false
  },
  bugbot_nal_no_context_files_gate: {
    client: false,
    default: true
  },
  bugbot_show_code_quality_style: {
    client: false,
    default: false
  },
  bugbot_enable_fallback: {
    client: false,
    default: true
  },
  bugbot_enable_ls: {
    client: false,
    default: true
  },
  bugbot_enable_normalization: {
    client: false,
    default: true
  },
  webhook_direct_auth: {
    client: false,
    default: true
  },
  github_webhook_service_account_auth: {
    client: false,
    default: false
  },
  protected_git_scopes: {
    client: false,
    default: false
  },
  protected_git_scopes_creation: {
    client: false,
    default: false
  },
  use_model_parameters: {
    client: true,
    default: false
  },
  model_picker_max_badge: {
    client: true,
    default: false
  },
  auto_default_variant_override_on_first_load: {
    client: true,
    default: true
  },
  bugbot_auto_spawn_cloud_agent: {
    client: true,
    default: true
  },
  paged_github_fetches_in_bugbot: {
    client: false,
    default: false
  },
  bugbot_autofix_evergreen_promo: {
    client: false,
    default: false
  },
  bugbot_autofix_ci_check: {
    client: false,
    default: true
  },
  bugbot_autofix_agent_link: {
    client: false,
    default: false
  },
  bugbot_autofix_enterprise_upsell_blocklist: {
    client: false,
    default: false
  },
  bugbot_autofix_edit_original_comment: {
    client: false,
    default: true
  },
  bugbot_fail_check_on_findings: {
    client: true,
    default: false
  },
  bugbot_competitor_metrics: {
    client: false,
    default: false
  },
  bugbot_slack_notifications: {
    client: false,
    default: false
  },
  bugbot_hide_fix_in_cursor_button: {
    client: false,
    default: false
  },
  enable_bugbot_non_jwt_links: {
    client: false,
    default: false
  },
  bugbot_fix_all_button: {
    client: false,
    default: false
  },
  ddg_error_source_mapping: {
    client: false,
    default: false
  },
  cursor_blame_planetscale: {
    client: false,
    default: false
  },
  vscode_text_model_telemetry: {
    client: true,
    default: false
  },
  ask_question_auto_reject_timeout: {
    client: true,
    default: false
  },
  statsig_aa_test: {
    client: false,
    default: true
  },
  gpt_52_model_default_on: {
    client: false,
    default: true
  },
  gpt_53_codex_model_enabled: {
    client: false,
    default: true
  },
  gpt_52_codex_model_default_on: {
    client: false,
    default: false
  },
  gpt_53_codex_model_default_on: {
    client: false,
    default: true
  },
  gpt_53_codex_spark_enabled: {
    client: false,
    default: false
  },
  gpt_53_codex_spark_default_on: {
    client: false,
    default: true
  },
  gemini_31_pro_default_on: {
    client: false,
    default: false
  },
  gemini3_default_on: {
    client: false,
    default: false
  },
  gemini3_flash_default_on: {
    client: false,
    default: true
  },
  claude45_opus_default_on: {
    client: false,
    default: false
  },
  opus_46_default_on: {
    client: false,
    default: true
  },
  gemini_31_pro_enabled: {
    client: false,
    default: true
  },
  kimi_k2p5_enabled: {
    client: false,
    default: true
  },
  opus_46_fast_default_on: {
    client: false,
    default: false
  },
  auto_opus_promo: {
    client: false,
    default: false
  },
  composer_1_enabled: {
    client: false,
    default: false
  },
  composer_1_enabled_by_default: {
    client: false,
    default: false
  },
  composer_15_enabled: {
    client: false,
    default: false
  },
  composer_15_enabled_by_default: {
    client: false,
    default: true
  },
  composer15_thinking_summary: {
    client: false,
    default: true
  },
  nal_composer_effort_level: {
    client: false,
    default: false
  },
  image_gen_use_inf_proxy_only: {
    client: false,
    default: true
  },
  composer_promotion_in_app_ad: {
    client: false,
    default: false
  },
  composer_promotion_visibility: {
    client: true,
    default: true
  },
  sem_search_on_repos: {
    client: false,
    default: false
  },
  linear_use_temporal: {
    client: false,
    default: false
  },
  limit_increase_requests: {
    client: false,
    default: false
  },
  usage_alert_emails_enabled: {
    client: false,
    default: false
  },
  usage_alerts_load_test_enabled: {
    client: false,
    default: false
  },
  composer_1_ent_credit_policy: {
    client: false,
    default: true
  },
  use_usage_limit_policies: {
    client: false,
    default: true
  },
  composer_enable_bga_hydration_from_snapshot: {
    client: true,
    default: true
  },
  yash_test: {
    client: true,
    default: false
  },
  experimental_code_analytics_suggestions: {
    client: true,
    default: false
  },
  ai_code_tracking_status_bar: {
    client: true,
    default: false
  },
  ai_code_tracking_debug: {
    client: true,
    default: false
  },
  cursor_blame: {
    client: true,
    default: false
  },
  ai_attribution_tool: {
    client: true,
    default: false
  },
  analytics_v2_override: {
    client: true,
    default: false
  },
  enable_ex_hs: {
    client: true,
    default: false
  },
  stars_popup_ignore_dont_ask_again: {
    client: true,
    default: false
  },
  terminal_execution_service_2: {
    client: true,
    default: true
  },
  agent_service_accounts: {
    client: false,
    default: false
  },
  promo_campaign: {
    client: false,
    default: true
  },
  kill_apply: {
    client: false,
    default: false
  },
  long_running_jobs: {
    client: true,
    default: false
  },
  terminal_ui_2: {
    client: true,
    default: true
  },
  composer_protected_tooltip: {
    client: true,
    default: true
  },
  auto_open_review_during_plan_build: {
    client: true,
    default: false
  },
  background_composer_use_conversation_action: {
    client: true,
    default: false
  },
  analyze_query_intent: {
    client: true,
    default: false
  },
  worktrees_cursorfs: {
    client: true,
    default: false
  },
  worktrees_as_a_skill: {
    client: true,
    default: false
  },
  mcp_allowlists: {
    client: true,
    default: true
  },
  allowlist_in_ask_every_time_mode: {
    client: true,
    default: false
  },
  analytics_output_channel: {
    client: true,
    default: false
  },
  analytics_collection_override: {
    client: true,
    default: true
  },
  ai_analytics_allow_metadata_collection: {
    client: true,
    default: false
  },
  composer_tally_net_lines: {
    client: true,
    default: false
  },
  cli_allowlist_access: {
    client: false,
    default: false
  },
  cli_sandbox_default_enable: {
    client: true,
    default: false
  },
  cli_mermaid_previews: {
    client: true,
    default: true
  },
  cli_debug_mode: {
    client: true,
    default: false
  },
  cli_bedrock: {
    client: true,
    default: false
  },
  bugbot_enable_severity_collection: {
    client: false,
    default: true
  },
  bugbot_enable_pr_description: {
    client: false,
    default: false
  },
  bugbot_pr_summary_enable_blame: {
    client: false,
    default: false
  },
  bugbot_status_in_description: {
    client: false,
    default: false
  },
  bugbot_enable_internal_data_collection: {
    client: false,
    default: false
  },
  bugbot_disable_validator: {
    client: false,
    default: false
  },
  bugbot_fixed_tools: {
    client: false,
    default: true
  },
  bugbot_fp_routing: {
    client: false,
    default: false
  },
  bugbot_fp_use_direct_routing: {
    client: false,
    default: false
  },
  bugbot_autofix_one_click_commit: {
    client: false,
    default: true
  },
  bugbot_autofix_retain_previous: {
    client: false,
    default: false
  },
  bugbot_contents_write_enabled: {
    client: false,
    default: true
  },
  bugbot_resolution_v2_for_comments_resolution: {
    client: false,
    default: true
  },
  github_webhook_analytics_enabled: {
    client: false,
    default: false
  },
  github_low_priority_rate_limit_expand_to_all_clients: {
    client: false,
    default: false
  },
  enable_cc_plugin_import: {
    client: true,
    default: false
  },
  model_picker_nudge: {
    client: true,
    default: false
  },
  terminal_ide_shell_exec: {
    client: true,
    default: true
  },
  slack_router: {
    client: false,
    default: true
  },
  bg_api_access: {
    client: false,
    default: false
  },
  bg_mcps: {
    client: false,
    default: true
  },
  bg_http_mcp_file_discovery: {
    client: false,
    default: false
  },
  team_mcps_in_ide: {
    client: true,
    default: false
  },
  editor_bugbot: {
    client: true,
    default: true
  },
  bugbot_autorun_killswitch: {
    client: true,
    default: false
  },
  keybinding_migration_killswitch: {
    client: true,
    default: false
  },
  agent_review_fake_dev: {
    client: true,
    default: false
  },
  editor_bugbot_summaries: {
    client: false,
    default: false
  },
  editor_bugbot_follow_up_validation: {
    client: false,
    default: false
  },
  enable_moved_lines_treatment: {
    client: true,
    default: false
  },
  bugbot_editor_markers: {
    client: true,
    default: false
  },
  bugbot_editor_autorun_on_composer_finish: {
    client: true,
    default: false
  },
  ide_cmd_enter_submit: {
    client: true,
    default: false
  },
  ide_nal_migration: {
    client: true,
    default: false
  },
  agent_prewarm: {
    client: true,
    default: false
  },
  quick_agent: {
    client: true,
    default: false
  },
  cc_override_agent_backend: {
    client: true,
    default: false
  },
  playwright_mcp_provider: {
    client: true,
    default: true
  },
  web_audit_events: {
    client: true,
    default: false
  },
  web_feature_flag_overrides: {
    client: true,
    default: false
  },
  "web.subagent_page_enabled": {
    client: false,
    default: false
  },
  should_show_summarization_ui: {
    client: false,
    default: true
  },
  cursor_extensions_isolation_v2: {
    client: true,
    default: false
  },
  cursor_wrapped_ide: {
    client: true,
    default: false
  },
  open_agent_window_bottom_convo: {
    client: true,
    default: false
  },
  open_agent_window_top: {
    client: true,
    default: true
  },
  cloud_agent_best_of_n_disabled: {
    client: true,
    default: false
  },
  background_agent_patch_rejector_enabled: {
    client: false,
    default: false
  },
  background_agent_ci_enabled: {
    client: false,
    default: true
  },
  background_agent_autofix_ci_enabled: {
    client: false,
    default: false
  },
  search_telemetry: {
    client: true,
    default: false
  },
  billing_groups: {
    client: false,
    default: false
  },
  dsync_reconciliation_execute: {
    client: false,
    default: true
  },
  dsync_reconciliation_killswitch: {
    client: false,
    default: false
  },
  user_downgrade: {
    client: false,
    default: true
  },
  annual_pro_plus_ultra: {
    client: true,
    default: true
  },
  customerio_tracking: {
    client: false,
    default: false
  },
  usage_reset_limit_email_execute: {
    client: false,
    default: false
  },
  new_file_ux: {
    client: true,
    default: true
  },
  react_markdown_renderer: {
    client: true,
    default: true
  },
  agent_reference_viewer_in_composer: {
    client: true,
    default: false
  },
  internal_browser_evaluate: {
    client: false,
    default: false
  },
  browser_canvas: {
    client: true,
    default: false
  },
  react_codeblock: {
    client: true,
    default: false
  },
  layout_controls_toggle_full_chats: {
    client: true,
    default: true
  },
  dont_use_history_hover: {
    client: true,
    default: false
  },
  color_token_in_markdown: {
    client: true,
    default: true
  },
  slim_codeblock_render: {
    client: true,
    default: true
  },
  show_modal_to_suggest_hiding_inline_diffs: {
    client: true,
    default: false
  },
  compact_terminal: {
    client: true,
    default: false
  },
  fade_below_human_message: {
    client: true,
    default: true
  },
  plan_mode_ad: {
    client: false,
    default: true
  },
  show_image_gen_ad: {
    client: false,
    default: false
  },
  cursor_wrapped_ad: {
    client: false,
    default: false
  },
  gpt_5_2_codex_ad: {
    client: false,
    default: false
  },
  show_gpt_5_3_codex_ad: {
    client: false,
    default: false
  },
  show_composer_1_5_launch_ad: {
    client: false,
    default: false
  },
  linear_auto_draft_plan_mode_enabled: {
    client: false,
    default: false
  },
  composer_sandbox_settings_visible: {
    client: true,
    default: true
  },
  sandbox_force_disable_linux: {
    client: true,
    default: false
  },
  sandbox_force_disable_win32: {
    client: true,
    default: true
  },
  composer1_sandboxing: {
    client: false,
    default: false
  },
  composer15_sandboxing: {
    client: false,
    default: true
  },
  sandbox_shared_build_cache: {
    client: true,
    default: true
  },
  admin_network_controls: {
    client: true,
    default: true
  },
  mcp_structured_logging: {
    client: true,
    default: false
  },
  mcp_structured_logging_for_ui: {
    client: true,
    default: true
  },
  mcp_snapshot_synchronization: {
    client: true,
    default: false
  },
  browser_mcp_chip: {
    client: true,
    default: true
  },
  playwright_autorun: {
    client: true,
    default: true
  },
  allow_download_prompts: {
    client: true,
    default: false
  },
  force_composer_on_ad_click: {
    client: true,
    default: false
  },
  admin_hide_integrations: {
    client: false,
    default: false
  },
  terminals_are_files: {
    client: true,
    default: true
  },
  agent_session_recording: {
    client: false,
    default: false
  },
  agent_kvblob_kafka: {
    client: false,
    default: true
  },
  clone_blob_upload: {
    client: true,
    default: false
  },
  internal_session_recording_status_bar: {
    client: true,
    default: false
  },
  agent_early_usage_check: {
    client: false,
    default: false
  },
  agent_remote_rpc: {
    client: false,
    default: false
  },
  images_are_files: {
    client: false,
    default: false
  },
  mcp_output_to_files: {
    client: true,
    default: true
  },
  external_terminal_tracking: {
    client: true,
    default: false
  },
  nal_agent_notes: {
    client: false,
    default: false
  },
  nal_human_changes: {
    client: false,
    default: false
  },
  nal_task_tool: {
    client: true,
    default: false
  },
  explore_subagent: {
    client: true,
    default: false
  },
  remove_subagent_soft_limit: {
    client: false,
    default: false
  },
  shell_subagent: {
    client: true,
    default: false
  },
  past_conversation_explorer_subagent: {
    client: false,
    default: false
  },
  debug_subagent: {
    client: false,
    default: true
  },
  enable_build_with_swarm: {
    client: true,
    default: false
  },
  nested_subagents: {
    client: false,
    default: false
  },
  cli_cursoragent_coauthor: {
    client: false,
    default: true
  },
  nal_async_task_tool: {
    client: true,
    default: false
  },
  nal_image_gen_tool: {
    client: false,
    default: false
  },
  image_gen_use_openai: {
    client: false,
    default: false
  },
  image_gen_google_provider_use_vertex: {
    client: false,
    default: true
  },
  nal_trace: {
    client: true,
    default: false
  },
  ask_question_tool_old_agent_loop: {
    client: false,
    default: false
  },
  ask_question_tool_new_agent_loop: {
    client: false,
    default: false
  },
  ask_question_async_mode: {
    client: false,
    default: false
  },
  ask_question_all_modes: {
    client: true,
    default: false
  },
  write_shell_stdin_tool: {
    client: false,
    default: false
  },
  shell_tool_background_after_wait: {
    client: false,
    default: false
  },
  shell_block_until_ms_composer: {
    client: false,
    default: false
  },
  countprompttokens_render_without_binary_search: {
    client: false,
    default: true
  },
  generate_user_instructions: {
    client: true,
    default: false
  },
  ide_nal_rdv: {
    client: true,
    default: false
  },
  use_nlb_for_nal: {
    client: true,
    default: true
  },
  "use-usw1-agent-for-nal": {
    client: true,
    default: false
  },
  http2_disable_pings: {
    client: true,
    default: false
  },
  retry_interceptor_disabled: {
    client: true,
    default: false
  },
  retry_interceptor_enabled_for_streaming: {
    client: true,
    default: true
  },
  http1_keepalive_disabled: {
    client: true,
    default: false
  },
  large_proto_logging_enabled: {
    client: true,
    default: false
  },
  agent_sdk: {
    client: false,
    default: false
  },
  cloud_agent_internal_sdk: {
    client: false,
    default: false
  },
  compare_chat_filesync_results: {
    client: false,
    default: false
  },
  enterprise_early_access: {
    client: true,
    default: false
  },
  client_numeric_metrics: {
    client: true,
    default: true
  },
  collect_sample_for_unresponsive_ext_host: {
    client: true,
    default: false
  },
  enable_project_layouts_in_system_prompt: {
    client: true,
    default: true
  },
  client_database_wal: {
    client: true,
    default: true
  },
  use_brotli_compression: {
    client: true,
    default: true
  },
  client_sqlite_metrics: {
    client: true,
    default: true
  },
  http2_agent_connection_pooling: {
    client: true,
    default: true
  },
  worktree_nal_only: {
    client: true,
    default: true
  },
  review_changes_fast_multi_diff: {
    client: true,
    default: false
  },
  enable_smart_review: {
    client: true,
    default: false
  },
  enable_smart_review_pr: {
    client: true,
    default: false
  },
  cpp_perf_instrumentation: {
    client: true,
    default: true
  },
  hide_titlebar_default: {
    client: true,
    default: false
  },
  migrate_editor_mode: {
    client: true,
    default: false
  },
  enable_self_healing_mcp_ext_host_restart: {
    client: true,
    default: true
  },
  show_dev_only_ttft_warning: {
    client: true,
    default: false
  },
  composer_segment_promotion_active: {
    client: true,
    default: false
  },
  bugbot_github_pr_cta: {
    client: false,
    default: false
  },
  bugbot_enable_learning: {
    client: true,
    default: true
  },
  meta_mcp_tool: {
    client: true,
    default: false
  },
  shift_dsv3_mcp_files_instructions_to_user_msg: {
    client: false,
    default: true
  },
  mcp_oauth_url_spam_guard: {
    client: true,
    default: true
  },
  better_mcp_startup_error_handling: {
    client: true,
    default: true
  },
  mcp_direct_client_tool_fetch: {
    client: true,
    default: false
  },
  mcp_enable_ui: {
    client: true,
    default: false
  },
  disable_network_change_monitor_local: {
    client: true,
    default: true
  },
  shared_chats: {
    client: true,
    default: false
  },
  shared_chats_view_public: {
    client: false,
    default: false
  },
  enterprise_public_shared_conversations: {
    client: false,
    default: false
  },
  use_ide_browser_script: {
    client: true,
    default: false
  },
  plan_mode_prompt_citation: {
    client: false,
    default: false
  },
  plan_mode_build_in_cloud: {
    client: true,
    default: false
  },
  new_plan_editor: {
    client: true,
    default: false
  },
  file_based_plan_edits: {
    client: false,
    default: false
  },
  subagents_for_plan: {
    client: false,
    default: false
  },
  readonly_shell: {
    client: false,
    default: false
  },
  new_conversational_summary: {
    client: false,
    default: false
  },
  cloud_agent_continual_learning: {
    client: false,
    default: false
  },
  bugbot_codebase_telemetry_enabled: {
    client: false,
    default: true
  },
  github_prs_in_sidebar: {
    client: true,
    default: false
  },
  ai_code_tracking_format_detection: {
    client: true,
    default: true
  },
  ai_code_tracking_terminal_integration: {
    client: true,
    default: true
  },
  ai_code_tracking_v2_scoring: {
    client: true,
    default: true
  },
  include_large_commits_ai_metrics: {
    client: false,
    default: false
  },
  cloud_agent_enable_blob_storage_format_v1: {
    client: false,
    default: true
  },
  cloud_agent_intelligent_testing: {
    client: false,
    default: false
  },
  cloud_agent_intelligent_testing_enable_on_all_repos: {
    client: false,
    default: false
  },
  cloud_agent_intelligent_testing_for_grind: {
    client: false,
    default: true
  },
  "web.files_app_enabed": {
    client: false,
    default: false
  },
  "web.agents_small_action_surface_enabled": {
    client: false,
    default: false
  },
  has_free_grind_mode: {
    client: false,
    default: false
  },
  setup_runs_free_promo: {
    client: false,
    default: true
  },
  cloud_agent_allow_secret_injection_public_repos: {
    client: false,
    default: true
  },
  cloud_agent_bc_id_attachment: {
    client: false,
    default: false
  },
  cloud_agent_idle_snapshot_manager_enabled: {
    client: false,
    default: true
  },
  cloud_agent_webhook_update_diffs: {
    client: false,
    default: false
  },
  cloud_agent_unique_tenant_id: {
    client: false,
    default: true
  },
  instant_grep_indexing: {
    client: true,
    default: false
  },
  instant_grep_user_search: {
    client: true,
    default: false
  },
  indexing_copy_from_namespace_async: {
    client: false,
    default: false
  },
  nal_use_filesync: {
    client: false,
    default: false
  },
  parallel_agent_workflow: {
    client: true,
    default: false
  },
  enable_grind_mode: {
    client: true,
    default: true
  },
  public_leaderboard_web: {
    client: true,
    default: false
  },
  enable_cloud_agent_repo_selector: {
    client: true,
    default: false
  },
  route_ent_trial_to_model: {
    client: true,
    default: false
  },
  enable_web_fetch_tool: {
    client: true,
    default: false
  },
  enable_fetch_file_output: {
    client: false,
    default: false
  },
  debug_mode_autorun_support_enabled: {
    client: true,
    default: false
  },
  analytics_conversation_classification: {
    client: true,
    default: false
  },
  server_conversation_tags: {
    client: false,
    default: false
  },
  server_conversation_segment_tags: {
    client: false,
    default: false
  },
  conversation_benchmarks: {
    client: false,
    default: false
  },
  report_full_v2_resolution_in_dashboard: {
    client: false,
    default: true
  },
  use_cursor_github_app_id: {
    client: true,
    default: true
  },
  cloud_agent_public_port_default: {
    client: false,
    default: false
  },
  use_inference_proxy: {
    client: false,
    default: false
  },
  use_openai_ws: {
    client: false,
    default: false
  },
  rules_v2: {
    client: true,
    default: false
  },
  push_local_agent_to_cloud: {
    client: true,
    default: false
  },
  send_to_cloud_on_followup: {
    client: true,
    default: false
  },
  midturn_move_to_cloud: {
    client: true,
    default: false
  },
  midturn_move_to_cloud_ads: {
    client: true,
    default: false
  },
  cloud_agent_setup_v2: {
    client: true,
    default: true
  },
  env_setup_xml_actions_mvp: {
    client: true,
    default: true
  },
  cloud_agent_checkout_convert_to_local: {
    client: true,
    default: false
  },
  show_browser_popup: {
    client: true,
    default: false
  },
  use_usage_remote_shim: {
    client: false,
    default: false
  },
  agent_layout_show_diffs_quick_settings: {
    client: true,
    default: false
  },
  subagents_settings: {
    client: true,
    default: false
  },
  subagent_3p_models_enabled: {
    client: false,
    default: false
  },
  otel_upstream_forwarding_enabled: {
    client: false,
    default: false
  },
  skip_git_telemetry_computations: {
    client: true,
    default: false
  },
  long_lived_agent: {
    client: true,
    default: false
  },
  composer_gc_handles: {
    client: true,
    default: false
  },
  stricter_in_memory_virtualization: {
    client: true,
    default: false
  },
  scrollable_div_fix: {
    client: true,
    default: true
  },
  cloud_agent_pr_control: {
    client: false,
    default: false
  },
  cloud_agent_client_side_secret_redaction: {
    client: false,
    default: true
  },
  cloud_agent_commit_reminder: {
    client: false,
    default: false
  },
  bga_git_proxy: {
    client: false,
    default: false
  },
  cloud_agent_use_dev_cluster: {
    client: false,
    default: false
  },
  cloud_agent_use_canary_cluster: {
    client: false,
    default: false
  },
  private_cloud_workers: {
    client: false,
    default: false
  },
  inline_diffs_v2_adapter: {
    client: true,
    default: false
  },
  patch_graph_sentry_reporting: {
    client: true,
    default: true
  },
  show_github_prs_beta_setting: {
    client: true,
    default: false
  },
  require_update: {
    client: true,
    default: false
  },
  update_use_localhost: {
    client: true,
    default: false
  },
  use_credit_grants: {
    client: false,
    default: true
  },
  hide_inline_changed_files: {
    client: true,
    default: false
  },
  wysiwyg_markdown: {
    client: true,
    default: false
  },
  wysiwyg_markdown_default: {
    client: true,
    default: false
  },
  remove_trial_holdout: {
    client: true,
    default: false
  },
  user_is_professional: {
    client: true,
    default: false
  },
  use_inference_proxy_for_georeplicated_agent: {
    client: false,
    default: false
  },
  force_devs_to_composer: {
    client: false,
    default: false
  },
  chat_editor_group_enabled: {
    client: true,
    default: false
  },
  pro_auto_in_model_picker: {
    client: false,
    default: false
  },
  read_tool_negative_offset: {
    client: false,
    default: false
  },
  browser_subagent: {
    client: true,
    default: false
  },
  slash_command_menu_v2: {
    client: true,
    default: false
  },
  network_access_control: {
    client: true,
    default: true
  },
  git_snapshot_indexing: {
    client: true,
    default: true
  },
  cpp_telem_chunking: {
    client: true,
    default: true
  },
  cpp_skip_composer_diff_temp_model_lifecycle_events: {
    client: true,
    default: false
  },
  edu_ultra_promo_enabled: {
    client: true,
    default: true
  },
  agent_transcript_link_navigation: {
    client: true,
    default: true
  },
  marketplaces_enabled: {
    client: true,
    default: false
  },
  web_plugin_settings: {
    client: true,
    default: false
  },
  plugin_marketplace_allowlisted_publisher: {
    client: true,
    default: false
  },
  editor_state_gauges: {
    client: true,
    default: false
  },
  prompt_suggestion: {
    client: true,
    default: false
  },
  extension_signature_verification: {
    client: true,
    default: false
  },
  use_global_agent_urls: {
    client: false,
    default: false
  },
  enable_parallel_web_search: {
    client: false,
    default: false
  },
  enable_claude_plugins_root_scan: {
    client: true,
    default: false
  },
  subagents_client_side_vscode: {
    client: true,
    default: false
  },
  subagents_client_side_cli: {
    client: false,
    default: false
  },
  byok_client_side_subagents: {
    client: false,
    default: false
  },
  gpt_detailed_thinking: {
    client: false,
    default: false
  },
  list_agents_server_side_filters: {
    client: false,
    default: true
  },
  composer_subagents: {
    client: false,
    default: true
  },
  ide_onboarding_experiment_holdback: {
    client: true,
    default: false
  },
  ide_onboarding_user_id_filter: {
    client: true,
    default: false
  },
  ide_onboarding_marketplace_holdback: {
    client: true,
    default: false
  },
  onboarding_agent_intro_layout_changes_enabled: {
    client: true,
    default: true
  },
  disable_sqlite_vacuum: {
    client: true,
    default: true
  },
  billing_cancellation_resurrection_offers_enabled: {
    client: false,
    default: true
  },
  mcp_coalesce_metrics_sampling: {
    client: true,
    default: false
  },
  cloud_agent_force_minimal_egress_policy: {
    client: false,
    default: false
  },
  cloud_agent_use_egress_policy_settings: {
    client: false,
    default: true
  },
  cloud_agent_show_egress_policy_settings: {
    client: false,
    default: true
  },
  cloud_agent_onboard_show_egress_settings: {
    client: false,
    default: true
  },
  cloud_agent_onboard_auto_set_default_egress: {
    client: false,
    default: false
  },
  cloud_agent_enable_web_fetch_tool: {
    client: false,
    default: true
  },
  display_ide_billing_banners: {
    client: true,
    default: true
  },
  codebase_telemetry_v2: {
    client: true,
    default: false
  },
  mcp_commands_v2: {
    client: true,
    default: false
  },
  claude_4_6_sonnet_enabled: {
    client: false,
    default: true
  },
  claude_4_6_sonnet_default_on: {
    client: false,
    default: true
  },
  claude_4_5_sonnet_default_on: {
    client: false,
    default: false
  },
  show_marketplace_plugins_release_ad: {
    client: false,
    default: false
  },
  show_cloud_agent_artifacts_launch_ad: {
    client: false,
    default: true
  },
  find_with_agent: {
    client: true,
    default: false
  },
  fire_and_forget_abort: {
    client: true,
    default: false
  },
  parallel_enrich_context: {
    client: false,
    default: false
  },
  cache_user_row_lookup: {
    client: false,
    default: true
  },
  skip_charge_dispute_check: {
    client: false,
    default: true
  },
  composer_promo_expiration_reminder: {
    client: true,
    default: true
  },
  website_selective_blob_hydration: {
    client: false,
    default: false
  },
  enable_plugin_nudge: {
    client: true,
    default: false
  },
  import_3p_plugins: {
    client: true,
    default: false
  },
  enable_local_3p_plugin_imports: {
    client: true,
    default: false
  }
};
Ltt = Object.keys(uye);
A$e = {
  off_peak_hours_promo: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  push_mcps: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "enabled"])
    }
  },
  sonnet45_to_opus45: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  mystery_2_7: {
    client: false,
    fallbackValues: {
      model: null,
      temperature: null
    },
    parseValue: {
      model: INe,
      temperature: Ptt
    }
  },
  improved_ide_team_limit_ux: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "group1", "group2"])
    }
  },
  individual_plan_limits: {
    client: false,
    fallbackValues: {
      group: "control",
      auto_limit: null,
      api_limit: null
    },
    parseValue: {
      group: nx(["control", "lower_auto", "lower_both"]),
      auto_limit: Ptt,
      api_limit: Ptt
    }
  },
  new_conversion_default_model: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "fast_auto", "slow_auto", "explicit_composer_15"])
    }
  },
  cursor_extensions_isolation_v2: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  suggested_prompts: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  suggested_mode_switch: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "nudge"])
    }
  },
  plugin_keyword_nudge_rollout: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "treatment"])
    }
  },
  composer_run_button_style: {
    client: true,
    fallbackValues: {
      buttonStyle: "primary"
    },
    parseValue: {
      buttonStyle: nx(["primary", "secondary"])
    }
  },
  new_placeholder: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  cursor_launch_at_login: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  bugbot_fp_v1_sep28: {
    client: false,
    fallbackValues: {
      threshold: -1
    },
    parseValue: {
      threshold: Ptt
    }
  },
  bugbot_different_validators_ab: {
    client: false,
    fallbackValues: {
      group: "2_8__gemini__validatorP95"
    },
    parseValue: {
      group: nx(["2_8__gemini__validatorP95", "2_8__nogemini__novalidatorP95", "2_8__nogemini__validatorP95", "2_8__gemini__novalidatorP95", "1_8__nogemini__validatorP75", "1_8__nogemini__validatorP65"])
    }
  },
  model_behind_auto_20261009_nal_only: {
    client: false,
    fallbackValues: {
      model: null
    },
    parseValue: {
      model: INe
    }
  },
  model_behind_auto_20260117_nal_only: {
    client: false,
    fallbackValues: {
      model: null
    },
    parseValue: {
      model: INe
    }
  },
  composer_model_behind_auto_20260119_nal_only: {
    client: false,
    fallbackValues: {
      model: null
    },
    parseValue: {
      model: INe
    }
  },
  subscription_only_degraded_extended_usage: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  onboarding_default_layout_agent: {
    client: true,
    fallbackValues: {
      enabled: "false"
    },
    parseValue: {
      enabled: INe
    }
  },
  onboarding_left_right_chat: {
    client: true,
    fallbackValues: {
      enabled: "left"
    },
    parseValue: {
      enabled: nx(["left", "right"])
    }
  },
  anthropic_clear_thinking_keep_all: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  free_composer_ab: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  github_bugbot_editor_v3: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "one-pass-agentic-haiku45", "one-pass-agentic-sonnet45", "editor-04-threshold", "editor-05-threshold"])
    }
  },
  bugbot_editor_haiku: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "agentic-haiku-10-context-lines", "agentic-haiku-50-context-lines", "agentic-haiku-no-context-files-50-context-lines", "agent-haiku-tools-closer-to-ide"])
    }
  },
  bugbot_new_validator_and_agentic: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "validator-non-strict-1161-p95", "validator-non-strict-1161-p90", "one-pass-thinking-sonnet45", "one-pass-non-thinking-sonnet45", "one-pass-gpt5-high-fast"])
    }
  },
  bugbot_followup_validator: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "followup_validator_with_tools", "followup_validator_without_tools"])
    }
  },
  bugbot_model_classifier: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "gpt_5_3", "gpt_5_3_and_skip_reflection", "composer15"])
    }
  },
  bugbot_explore_subagent_ls: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "explore_subagent", "ls", "explore_subagent_and_ls"])
    }
  },
  bugbot_opus_fast_extremely_expensive: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "opus_fast"])
    }
  },
  bugbot_report_bug_tool: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "report_bug_tool"])
    }
  },
  usage_limit_policies: {
    client: false,
    fallbackValues: {
      usage_limit_policy_id: null
    },
    parseValue: {
      usage_limit_policy_id: Ptt
    }
  },
  team_limit_amounts: {
    client: false,
    fallbackValues: {
      limit: null
    },
    parseValue: {
      limit: Ptt
    }
  },
  separate_auto_and_api_usage_bars_for_individuals: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "test"])
    }
  },
  usage_summary_display_mode: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "show_above_50", "always_show"])
    }
  },
  onboarding_skip_post_login: {
    client: true,
    fallbackValues: {
      enabled: "control"
    },
    parseValue: {
      enabled: nx(["control", "remove_features"])
    }
  },
  fuschia_ide_upsell: {
    client: true,
    fallbackValues: {
      variant: "control"
    },
    parseValue: {
      variant: nx(["control", "treatment1", "treatment2"])
    }
  },
  free_user_model_picker: {
    client: true,
    fallbackValues: {
      variant: "control"
    },
    parseValue: {
      variant: nx(["control", "locked_picker", "grayed_models"])
    }
  },
  pro_auto_mode_new_users: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "pro_and_auto_default_auto", "pro_and_auto_default_pro"])
    }
  },
  pro_auto_mode_existing_users: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "pro_and_auto_default_auto_with_nudge"])
    }
  },
  mobile_onboarding: {
    client: false,
    fallbackValues: {
      onboarding_experience_type: "old",
      allow_skip_github: true
    },
    parseValue: {
      onboarding_experience_type: nx(["old", "new"]),
      allow_skip_github: fU
    }
  },
  enable_readfile_line_numbers_arg_nal_exp: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  ide_invite_teammates_team_expansion: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  terminal_tip: {
    client: true,
    fallbackValues: {
      enabled: false,
      message: "Install Cursor CLI?",
      action: "curl https://cursor.com/install -fsS | bash",
      show_every_hours: 0,
      show_count: 0
    },
    parseValue: {
      enabled: fU,
      message: INe,
      action: INe,
      show_every_hours: Ptt,
      show_count: Ptt
    }
  },
  cli_install_ad: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  cli_install_ad_v2: {
    client: true,
    fallbackValues: {
      variant: "control"
    },
    parseValue: {
      variant: nx(["control", "minutes_delay", "day_delay"])
    }
  },
  agent_backend_ab_test_1: {
    client: true,
    fallbackValues: {
      group: undefined
    },
    parseValue: {
      group: nx(["cursor-agent", "claude-code"])
    }
  },
  agent_backend_ab_test_2: {
    client: true,
    fallbackValues: {
      group: undefined
    },
    parseValue: {
      group: nx(["cursor-agent", "claude-code"])
    }
  },
  experiment_opus_behind_auto_global_2026_01_29: {
    client: false,
    fallbackValues: {
      model: null
    },
    parseValue: {
      model: INe
    }
  },
  experiment_opus_behind_auto_ch: {
    client: false,
    fallbackValues: {
      model: null
    },
    parseValue: {
      model: INe
    }
  },
  show_unredacted_thinking_composer: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  email_to_users_who_hit_limits: {
    client: false,
    fallbackValues: {
      receive_email: false
    },
    parseValue: {
      receive_email: fU
    }
  },
  individual_slowpool_experiment: {
    client: false,
    fallbackValues: {
      usage_limit_policy_id: null
    },
    parseValue: {
      usage_limit_policy_id: c2A
    }
  },
  dashboard_individual_members_page: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  usage_limit_composer_switch_2: {
    client: true,
    fallbackValues: {
      group: "auto_switch",
      suggested_model: "composer-1.5"
    },
    parseValue: {
      group: nx(["control", "one_click", "auto_switch"]),
      suggested_model: INe
    }
  },
  new_chat_auto_switch: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "popup", "inline_banner"])
    }
  },
  cleaner_ondemand_modal: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "direct_set", "picker"])
    }
  },
  ultra_upgrade_prompt: {
    client: false,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  composer_mcp_task_tool: {
    client: false,
    fallbackValues: {
      enabled: true
    },
    parseValue: {
      enabled: fU
    }
  },
  billing_cancellation_resurrection_offer: {
    client: false,
    fallbackValues: {
      variant: "control"
    },
    parseValue: {
      variant: nx(["control", "percent_off_25", "percent_off_50"])
    }
  },
  ide_onboarding_landing_screen_new_project: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "treatment"])
    }
  },
  ide_onboarding_new_project_agent: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "treatment"])
    }
  },
  ide_onboarding_skip_walkthrough: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "treatment"])
    }
  },
  ide_onboarding_marketplace: {
    client: true,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "treatment_link", "treatment_no_link"])
    }
  },
  billing_banner_payment_failed: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  billing_banner_pending_cancellation: {
    client: true,
    fallbackValues: {
      enabled: false
    },
    parseValue: {
      enabled: fU
    }
  },
  subagent_groups: {
    client: false,
    fallbackValues: {
      group: "control"
    },
    parseValue: {
      group: nx(["control", "no-explore-subagent", "no-subagent-unless-asked"])
    }
  }
};
aga = Object.keys(A$e);
cFg = {
  editor_bugbot_config: Tr.object({
    model: Tr.string(),
    iterations: Tr.number(),
    agentic_iterations: Tr.number(),
    agentic_model: Tr.string(),
    context_lines: Tr.number()
  }),
  linear_auto_draft_config: Tr.object({
    enabledOrgIds: Tr.array(Tr.string()),
    disabledUserIds: Tr.array(Tr.string())
  }),
  linear_agent_config: Tr.object({
    orientationModel: Tr.string(),
    planModel: Tr.string()
  }),
  background_agent_judge_config: Tr.object({
    judgeModel: Tr.string(),
    summarizerModel: Tr.string(),
    bestOfNModels: Tr.array(Tr.string()),
    patchRejectorStatus: Tr.enum(["off", "warn", "on"])
  }),
  client_speculative_summarization_config: Tr.object({
    tokenUsageThresholdPercentage: Tr.number(),
    tolerancePercentage: Tr.number(),
    inflightMaxAgeMinutes: Tr.number(),
    speculativeStreamTimeoutMinutes: Tr.number()
  }),
  new_conversation_ux_config: Tr.object({
    enable: Tr.boolean(),
    enabled_models: Tr.array(Tr.string()),
    force_enable_on_all_models: Tr.boolean(),
    group_text: Tr.boolean(),
    group_thinking: Tr.boolean(),
    group_todos: Tr.boolean(),
    group_edits: Tr.boolean(),
    smooth_stream_enable: Tr.boolean(),
    grouped_text_max_length: Tr.number(),
    tool_summary_mode: Tr.string(),
    nest_tool_blocks: Tr.boolean()
  }),
  agent_layout_migration: Tr.object({
    showSettings: Tr.boolean(),
    keepIsland: Tr.boolean(),
    sidebarLocation: Tr.enum(["left", "right", "user", "noop"])
  }),
  default_diff_mode: Tr.object({
    default_diff_mode: Tr.enum(["unified", "diffs"])
  }),
  switch_mode_tool_config: Tr.object({
    enabledForNal: Tr.boolean(),
    enabledForOal: Tr.boolean(),
    fromModes: Tr.array(Tr.string()),
    targetModes: Tr.array(Tr.string())
  }),
  mcp_auth_status_copy_config: Tr.object({
    authToolDescription: Tr.string(),
    errorStatusMessage: Tr.string(),
    needsAuthStatusMessageWithAuthTool: Tr.string()
  }),
  mcp_reconnect_config: Tr.object({
    fastRetryBaseDelayMs: Tr.number().min(1000).max(3600000),
    fastRetryMaxDelayMs: Tr.number().min(1000).max(3600000),
    periodicRetryBaseDelayMs: Tr.number().min(30000).max(3600000),
    periodicRetryMaxDelayMs: Tr.number().min(30000).max(3600000),
    focusRetryCooldownMs: Tr.number().min(300000).max(3600000)
  }),
  inline_diff_performance_config: Tr.object({
    maxDecorations: Tr.number()
  }),
  composer_sandboxing_promo: Tr.object({
    version: Tr.number()
  }),
  sandbox_default_network_allowlist: Tr.object({
    allowlist: Tr.array(Tr.string())
  }),
  playwright_log_configs: Tr.object({
    logSizeThreshold: Tr.number(),
    logPreviewLines: Tr.number(),
    logPreviewChars: Tr.number()
  }),
  privacy_mode_acknowledgement_onboarding: Tr.object({
    mode: Tr.enum(["off", "on_logged_in", "on"]),
    web_mode: Tr.enum(["off", "on"])
  }),
  terminal_sandbox_behavior: Tr.object({
    sandboxBehavior: Tr.enum(["heuristic", "model_aware"])
  }),
  model_inference_params: Tr.object({
    models: Tr.record(Tr.string(), Tr.object({
      temperature: Tr.number().optional(),
      topP: Tr.number().optional(),
      topK: Tr.number().optional(),
      minP: Tr.number().optional(),
      dynamicTemperature: Tr.object({
        nonThinking: Tr.number()
      }).optional()
    }))
  }),
  tools_concurrency_config: Tr.object({
    tools: Tr.record(Tr.string(), Tr.object({
      ttl: Tr.number().optional(),
      maxConcurrent: Tr.number().optional()
    })),
    defaultTtl: Tr.number(),
    defaultMaxConcurrent: Tr.number()
  }),
  use_simple_diff_edit_file_v2_model_names: Tr.object({
    modelNames: Tr.array(Tr.string()),
    is_dev_only: Tr.boolean()
  }),
  client_rg: Tr.object({
    num_threads: Tr.number(),
    fallback_num_threads: Tr.number(),
    use_batch_executor: Tr.boolean(),
    batch_executor_wait_ms: Tr.number()
  }),
  server_fuzzy_match: Tr.object({
    enable_new_fast_fuzzy_match: Tr.boolean()
  }),
  http2_ping_config: Tr.object({
    enabled: Tr.array(Tr.string()),
    pingIdleConnection: Tr.boolean().nullable(),
    pingIntervalMs: Tr.number().nullable(),
    pingTimeoutMs: Tr.number().nullable(),
    idleConnectionTimeoutMs: Tr.number().nullable()
  }),
  http2_agent_connection_pool_config: Tr.object({
    poolSize: Tr.number()
  }),
  http1_keepalive_config: Tr.object({
    keepAliveInitialDelayMs: Tr.number().nullable()
  }),
  abort_controller_logging_config: Tr.object({
    sampling_rate: Tr.number()
  }),
  composer_hang_detection_config: Tr.object({
    thresholds_ms: Tr.array(Tr.number())
  }),
  composer_errors_without_button_support: Tr.object({
    error_type_denylist: Tr.array(Tr.string())
  }),
  nal_stall_detector_timeout_config: Tr.object({
    advisoryTimeoutMs: Tr.number(),
    failTimeoutMs: Tr.number()
  }),
  simulated_thinking_error_timeout: Tr.object({
    timeout_ms: Tr.number()
  }),
  agent_loop_phase_display: Tr.object({
    enabled: Tr.boolean(),
    min_display_threshold_ms: Tr.number()
  }),
  clickhouse_analytics_rollout: Tr.object({
    query_readonly_service: Tr.boolean()
  }),
  clickhouse_usage_results_teams: Tr.object({
    enabled_operations: Tr.array(Tr.string())
  }),
  clickhouse_usage_results_users: Tr.object({
    enabled_operations: Tr.array(Tr.string())
  }),
  in_app_ads_config: Tr.object({
    ad_ids_csv: Tr.string()
  }),
  in_app_ads_dev_override_config: Tr.object({
    ad_id_to_show: Tr.string().optional()
  }),
  perf_monitor_control: Tr.object({
    enabled: Tr.boolean(),
    subsample_polling_rate_sec: Tr.number(),
    sample_polling_rate_min: Tr.number()
  }),
  client_version_config: Tr.object({
    minAllowedClientVersion: Tr.string(),
    minSupportedClientVersion: Tr.string()
  }),
  retry_interceptor_config: Tr.object({
    retriableErrors: Tr.array(Tr.object({
      code: Tr.string(),
      errorMessage: Tr.string().optional(),
      method: Tr.string().optional()
    }))
  }),
  model_names: Tr.object({
    case: Tr.enum(["lower", "upper"]),
    model_picker_closed_is_short: Tr.boolean()
  }),
  retry_interceptor_params_config: Tr.object({
    maxRetries: Tr.number().optional(),
    baseDelayMs: Tr.number().optional(),
    maxDelayMs: Tr.number().optional()
  }),
  extension_monitor_control: Tr.object({
    local_enabled: Tr.boolean(),
    backend_reporting_enabled: Tr.boolean(),
    subsample_polling_rate_sec: Tr.number(),
    sample_polling_rate_min: Tr.number()
  }),
  disable_infinite_cloud_agent_stream_retries: Tr.object({
    enabled: Tr.boolean()
  }),
  cloud_agent_shared_blob_cache: Tr.object({
    max_bytes: Tr.number()
  }),
  cloud_agent_computer_use_config: Tr.object({
    steps_until_reflect_reminder: Tr.number(),
    cua_model: Tr.string()
  }),
  opus45_config: Tr.object({
    dropdownPosition: Tr.enum(["after-sonnet", "after-composer", "after-codex", "after-gpt5"]),
    defaultOnModels: Tr.array(Tr.string())
  }),
  summarization_model_config: Tr.object({
    modelList: Tr.array(Tr.string())
  }),
  background_composer_list_limit: Tr.object({
    limit: Tr.number()
  }),
  parallel_agent_ensemble_config: Tr.object({
    models: Tr.array(Tr.string()),
    gatherTimeoutMs: Tr.number(),
    gatherMinSuccessPercentage: Tr.number(),
    gatherMinSuccessCount: Tr.number().nullable()
  }),
  parallel_agent_synthesis_config: Tr.object({
    strategy: Tr.enum(["single_agent", "fanout_voting", "pairwise_tournament"]),
    synthesisModel: Tr.string(),
    fanoutSize: Tr.number().nullable()
  }),
  switch_to_model_slug_config: Tr.object({
    modelSlug: Tr.string(),
    modelIdWithParams: Tr.object({
      modelId: Tr.string(),
      params: Tr.array(Tr.object({
        id: Tr.string(),
        value: Tr.string()
      }))
    })
  }),
  debug_mode_ui_instructions_config: Tr.object({
    proceed_instructions: Tr.string(),
    mark_fixed_instructions: Tr.string()
  }),
  bugbot_telemetry_backfill: Tr.object({
    backfillEnabled: Tr.boolean(),
    maxBackfilledRequestsPerRun: Tr.number().nullable(),
    githubApiCoreLimitLeftoverPercent: Tr.number().nullable(),
    fetchCommitNumRetries: Tr.number().nullable()
  }),
  bugbot_learning_config: Tr.object({
    maxPRsToFetch: Tr.number()
  }),
  bugbot_reflection_config: Tr.object({
    timeoutMin: Tr.number()
  }),
  user_intent_config: Tr.object({
    maxChatsToRead: Tr.number(),
    maxProjectsToGroup: Tr.number(),
    model: Tr.string(),
    promptTemplate: Tr.string(),
    secondStepPromptTemplate: Tr.string()
  }),
  conversation_tags_categorization_prompt: Tr.object({
    version: Tr.string(),
    systemPrompt: Tr.string(),
    categories: Tr.array(Tr.object({
      name: Tr.string(),
      description: Tr.string(),
      values: Tr.array(Tr.object({
        name: Tr.string(),
        description: Tr.string(),
        examples: Tr.array(Tr.string()).optional()
      }))
    })),
    outputFields: Tr.array(Tr.object({
      name: Tr.string(),
      description: Tr.string(),
      type: Tr.enum(["single", "array"]),
      maxItems: Tr.number().optional(),
      categoryRef: Tr.string()
    }))
  }),
  browser_default_url_config: Tr.object({
    defaultUrl: Tr.string()
  }),
  tool_limits_config: Tr.object({
    readFilesToolMaxFileSizeInBytes: Tr.number(),
    editFileToolMaxFileSizeInChars: Tr.number(),
    fileSearchToolMaxResults: Tr.number(),
    listDirV2ClientSideCharacterBudget: Tr.number(),
    readFileV2ToolMaxFileSizeInBytes: Tr.number(),
    composerDiffMaxComputationTimeMs: Tr.number()
  }),
  stripe_radar_config: Tr.object({
    blockThreshold: Tr.number(),
    reviewThreshold: Tr.number(),
    enabledEnvironments: Tr.array(Tr.string()),
    dryRunMode: Tr.boolean(),
    shouldRespectBlock: Tr.boolean()
  }),
  bugbot_pr_summary_prompt: Tr.object({
    promptVersion: Tr.string()
  }),
  bugbot_model_override: Tr.object({
    model: Tr.string()
  }),
  update_prompt_config: Tr.object({
    min_hours_between_prompts: Tr.number(),
    max_prompts_per_version: Tr.number(),
    max_prompts_per_day: Tr.number(),
    snooze_duration_hours: Tr.number()
  }),
  giant_json_stringify_config: Tr.object({
    sentry_threshold_bytes: Tr.number(),
    attach_content: Tr.boolean()
  }),
  giant_json_parse_config: Tr.object({
    sentry_threshold_bytes: Tr.number()
  }),
  cc_override_models_config: Tr.object({
    models: Tr.array(Tr.string())
  }),
  sentry_session_recording_config: Tr.object({
    replays_session_sample_rate: Tr.number().min(0).max(1)
  }),
  extension_signature_verification_bypass_list: Tr.object({
    extensionIds: Tr.array(Tr.string()),
    remoteVerificationMinVersion: Tr.string()
  }),
  fault_injection_config: Tr.object({
    cache_disabled: Tr.object({
      fraction: Tr.number(),
      enabledServices: Tr.union([Tr.literal("*"), Tr.array(Tr.string())])
    }),
    db_disabled: Tr.object({
      fraction: Tr.number(),
      enabledServices: Tr.union([Tr.literal("*"), Tr.array(Tr.string())])
    })
  }),
  past_conversation_explorer_config: Tr.object({
    transcriptLimit: Tr.number()
  }),
  auto_spillover_ui_config: Tr.object({
    autoTitle: Tr.string(),
    autoDescription: Tr.string(),
    apiTitle: Tr.string(),
    apiDescription: Tr.string(),
    autoUsageBarLabel: Tr.string(),
    apiUsageBarLabel: Tr.string()
  }),
  portal_outage_alert: Tr.object({
    enabled: Tr.boolean(),
    title: Tr.string(),
    description: Tr.string()
  }),
  inference_provider_warning: Tr.object({
    trigger: Tr.enum(["on_select", "on_error"]).default("on_select"),
    message: Tr.string().optional(),
    models: Tr.array(Tr.string()).optional(),
    fallbackModel: Tr.string().optional()
  }),
  onboarding_marketplace_plugins: Tr.object({
    plugin_names: Tr.array(Tr.string())
  }),
  memory_monitor_user_toast_config: Tr.object({
    heap_percent: Tr.number()
  }),
  statsig_dummy_gauge_config: Tr.object({
    dummy: Tr.number()
  }),
  slack_mcp_client_id: Tr.object({
    clientId: Tr.string()
  }),
  mc_claude_opus_4_6: nO,
  mc_claude_opus_4_5: nO,
  mc_claude_sonnet_4_6: nO,
  mc_claude_sonnet_4_5: nO,
  mc_claude_sonnet_4: nO,
  mc_claude_haiku_4_5: nO,
  mc_gpt_5_3_codex: nO,
  mc_gpt_5_3_codex_spark: nO,
  mc_gpt_5_2: nO,
  mc_gpt_5_2_codex: nO,
  mc_gpt_5_1_codex_max: nO,
  mc_gpt_5_1_codex_mini: nO,
  mc_gpt_5_1: nO,
  mc_gpt_5_mini: nO,
  mc_gemini_3_1_pro: nO,
  mc_gemini_3_pro: nO,
  mc_gemini_3_flash: nO,
  mc_gemini_2_5_flash: nO,
  mc_grok_code_fast_1: nO,
  mc_kimi_k2_5: nO,
  mc_kimi_k2_instruct: nO,
  mc_composer_15: nO,
  mc_composer_1: nO,
  cloud_agent_disabled_config: Tr.object({
    enabled: Tr.boolean(),
    title: Tr.string(),
    description: Tr.string()
  }),
  dev_only_oai_safety_override: Tr.object({
    mode: Tr.enum(["none", "blocked", "random"])
  })
};
mEe = {
  editor_bugbot_config: {
    client: false,
    fallbackValues: {
      model: "claude-4-5-sonnet-20250929",
      iterations: 0,
      agentic_iterations: 1,
      agentic_model: "claude-4.5-haiku",
      context_lines: 10
    }
  },
  linear_auto_draft_config: {
    client: false,
    fallbackValues: {
      enabledOrgIds: [],
      disabledUserIds: []
    }
  },
  model_names: {
    client: false,
    fallbackValues: {
      case: "lower",
      model_picker_closed_is_short: false
    }
  },
  opus45_config: {
    client: false,
    fallbackValues: {
      dropdownPosition: "after-composer",
      defaultOnModels: ["claude-4.5-opus-high-thinking"]
    }
  },
  summarization_model_config: {
    client: false,
    fallbackValues: {
      modelList: ["gemini-2.5-flash", "gpt-4.1-mini", "claude-4.5-haiku"]
    }
  },
  linear_agent_config: {
    client: false,
    fallbackValues: {
      orientationModel: "gpt-5-mini",
      planModel: "gpt-5"
    }
  },
  background_agent_judge_config: {
    client: false,
    fallbackValues: {
      judgeModel: "gpt-5-high",
      summarizerModel: "gpt-5-mini",
      bestOfNModels: ["gpt-5"],
      patchRejectorStatus: "off"
    }
  },
  client_speculative_summarization_config: {
    client: true,
    fallbackValues: {
      tokenUsageThresholdPercentage: 70,
      tolerancePercentage: 5,
      inflightMaxAgeMinutes: 5,
      speculativeStreamTimeoutMinutes: 5
    }
  },
  new_conversation_ux_config: {
    client: true,
    fallbackValues: {
      enable: true,
      enabled_models: [],
      force_enable_on_all_models: true,
      group_text: true,
      group_thinking: true,
      group_todos: true,
      group_edits: false,
      smooth_stream_enable: false,
      grouped_text_max_length: 150,
      tool_summary_mode: "single_word",
      nest_tool_blocks: false
    }
  },
  composer_sandboxing_promo: {
    client: true,
    fallbackValues: {
      version: 0
    }
  },
  playwright_log_configs: {
    client: true,
    fallbackValues: {
      logSizeThreshold: 25000,
      logPreviewLines: 25,
      logPreviewChars: 25000
    }
  },
  privacy_mode_acknowledgement_onboarding: {
    client: true,
    fallbackValues: {
      mode: "on",
      web_mode: "off"
    }
  },
  terminal_sandbox_behavior: {
    client: false,
    fallbackValues: {
      sandboxBehavior: "heuristic"
    }
  },
  model_inference_params: {
    client: false,
    fallbackValues: {
      models: {}
    }
  },
  tools_concurrency_config: {
    client: true,
    fallbackValues: {
      tools: {
        RIPGREP_RAW_SEARCH: {
          ttl: 10000,
          maxConcurrent: 5
        },
        RIPGREP_SEARCH: {
          ttl: 10000,
          maxConcurrent: 5
        }
      },
      defaultTtl: 10000,
      defaultMaxConcurrent: 999999
    }
  },
  use_simple_diff_edit_file_v2_model_names: {
    client: false,
    fallbackValues: {
      modelNames: ["auto-fast", "auto-fast-thinking", "composer-1"],
      is_dev_only: true
    }
  },
  client_rg: {
    client: true,
    fallbackValues: {
      num_threads: 4,
      fallback_num_threads: 4,
      use_batch_executor: false,
      batch_executor_wait_ms: 50
    }
  },
  server_fuzzy_match: {
    client: false,
    fallbackValues: {
      enable_new_fast_fuzzy_match: false
    }
  },
  http2_ping_config: {
    client: true,
    fallbackValues: {
      enabled: [],
      pingIdleConnection: null,
      pingIntervalMs: null,
      pingTimeoutMs: null,
      idleConnectionTimeoutMs: null
    }
  },
  http2_agent_connection_pool_config: {
    client: true,
    fallbackValues: {
      poolSize: 4
    }
  },
  http1_keepalive_config: {
    client: true,
    fallbackValues: {
      keepAliveInitialDelayMs: null
    }
  },
  abort_controller_logging_config: {
    client: true,
    fallbackValues: {
      sampling_rate: 1
    }
  },
  composer_hang_detection_config: {
    client: true,
    fallbackValues: {
      thresholds_ms: [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 32000]
    }
  },
  composer_errors_without_button_support: {
    client: true,
    fallbackValues: {
      error_type_denylist: []
    }
  },
  nal_stall_detector_timeout_config: {
    client: true,
    fallbackValues: {
      advisoryTimeoutMs: 20000,
      failTimeoutMs: 30000
    }
  },
  simulated_thinking_error_timeout: {
    client: true,
    fallbackValues: {
      timeout_ms: 15000
    }
  },
  agent_loop_phase_display: {
    client: true,
    fallbackValues: {
      enabled: false,
      min_display_threshold_ms: 0
    }
  },
  clickhouse_analytics_rollout: {
    client: false,
    fallbackValues: {
      query_readonly_service: false
    }
  },
  clickhouse_usage_results_teams: {
    client: false,
    fallbackValues: {
      enabled_operations: []
    }
  },
  clickhouse_usage_results_users: {
    client: false,
    fallbackValues: {
      enabled_operations: []
    }
  },
  in_app_ads_config: {
    client: false,
    fallbackValues: {
      ad_ids_csv: ""
    }
  },
  in_app_ads_dev_override_config: {
    client: false,
    fallbackValues: {
      ad_id_to_show: undefined
    }
  },
  perf_monitor_control: {
    client: true,
    fallbackValues: {
      enabled: false,
      subsample_polling_rate_sec: 0,
      sample_polling_rate_min: 0
    }
  },
  client_version_config: {
    client: false,
    fallbackValues: {
      minAllowedClientVersion: "1.3.0",
      minSupportedClientVersion: "1.5.0"
    }
  },
  retry_interceptor_config: {
    client: true,
    fallbackValues: {
      retriableErrors: [{
        code: "Unavailable"
      }, {
        code: "Internal"
      }, {
        code: "DeadlineExceeded"
      }]
    }
  },
  retry_interceptor_params_config: {
    client: true,
    fallbackValues: {
      maxRetries: undefined,
      baseDelayMs: undefined,
      maxDelayMs: undefined
    }
  },
  extension_monitor_control: {
    client: true,
    fallbackValues: {
      local_enabled: false,
      backend_reporting_enabled: false,
      subsample_polling_rate_sec: 0,
      sample_polling_rate_min: 0
    }
  },
  disable_infinite_cloud_agent_stream_retries: {
    client: true,
    fallbackValues: {
      enabled: false
    }
  },
  cloud_agent_shared_blob_cache: {
    client: true,
    fallbackValues: {
      max_bytes: 134217728
    }
  },
  cloud_agent_computer_use_config: {
    client: false,
    fallbackValues: {
      steps_until_reflect_reminder: 10,
      cua_model: "claude-4.5-opus-high"
    }
  },
  agent_layout_migration: {
    client: true,
    fallbackValues: {
      showSettings: false,
      keepIsland: false,
      sidebarLocation: "noop"
    }
  },
  default_diff_mode: {
    client: true,
    fallbackValues: {
      default_diff_mode: "diffs"
    }
  },
  switch_mode_tool_config: {
    client: true,
    fallbackValues: {
      enabledForNal: false,
      enabledForOal: false,
      fromModes: [],
      targetModes: []
    }
  },
  mcp_auth_status_copy_config: {
    client: true,
    fallbackValues: {
      authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.",
      errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor Settings; otherwise continue with a different approach.",
      needsAuthStatusMessageWithAuthTool: "The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server \"{serverIdentifier}\" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, do that first; otherwise continue with a different approach."
    }
  },
  mcp_reconnect_config: {
    client: true,
    fallbackValues: {
      fastRetryBaseDelayMs: 5000,
      fastRetryMaxDelayMs: 60000,
      periodicRetryBaseDelayMs: 300000,
      periodicRetryMaxDelayMs: 1800000,
      focusRetryCooldownMs: 300000
    }
  },
  inline_diff_performance_config: {
    client: true,
    fallbackValues: {
      maxDecorations: 100
    }
  },
  background_composer_list_limit: {
    client: true,
    fallbackValues: {
      limit: 32
    }
  },
  parallel_agent_ensemble_config: {
    client: false,
    fallbackValues: {
      models: ["gpt-5.2-codex-high", "claude-4.5-opus-high-thinking", "gpt-5.2-codex-high", "claude-4.5-opus-high-thinking"],
      gatherTimeoutMs: 300000,
      gatherMinSuccessPercentage: 0.5,
      gatherMinSuccessCount: null
    }
  },
  parallel_agent_synthesis_config: {
    client: false,
    fallbackValues: {
      strategy: "pairwise_tournament",
      synthesisModel: "gpt-5.1-codex-high",
      fanoutSize: null
    }
  },
  switch_to_model_slug_config: {
    client: true,
    fallbackValues: {
      modelSlug: "",
      modelIdWithParams: {
        modelId: "",
        params: []
      }
    }
  },
  debug_mode_ui_instructions_config: {
    client: true,
    fallbackValues: {
      proceed_instructions: "Issue reproduced, please proceed",
      mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation."
    }
  },
  bugbot_telemetry_backfill: {
    client: false,
    fallbackValues: {
      backfillEnabled: false,
      maxBackfilledRequestsPerRun: null,
      githubApiCoreLimitLeftoverPercent: null,
      fetchCommitNumRetries: null
    }
  },
  bugbot_learning_config: {
    client: false,
    fallbackValues: {
      maxPRsToFetch: 1000
    }
  },
  bugbot_reflection_config: {
    client: false,
    fallbackValues: {
      timeoutMin: 30
    }
  },
  user_intent_config: {
    client: true,
    fallbackValues: {
      maxChatsToRead: 100,
      maxProjectsToGroup: 5,
      model: "claude-4.5-opus-high-thinking",
      promptTemplate: `You are analyzing conversation transcripts to identify repeated user behaviors.

## Transcript Location
Transcripts are stored at: {{agentTranscriptsPath}}

## Transcript Format
Each '.txt' file is a human-readable conversation transcript with this structure:
- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)
- 'assistant:' sections contain assistant responses
- '[Tool call]' blocks show which tools were invoked
- '[Tool result]' blocks show tool outputs

Files can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.

## How to Read Transcripts
1. Use Glob to list files: "{{agentTranscriptsPath}}/*.txt"
2. For each file, extract just the '<user_query>' blocks - these show what users asked for
3. You can use Grep to search for '<user_query>' patterns across files

## Task
Analyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.

Your goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.

## Evidence Standards
When making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:
- The user explicitly corrected the agent for doing something wrong
- The user undid or rejected an agent action
- The user gave an explicit instruction ('don\\'t do X', 'always do Y')

Do NOT infer 'don\\'t do X' from:
- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')
- The user doing X themselves (doesn't mean the agent shouldn't)
- Absence of the agent doing X

For each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.

These are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.

- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.
- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.
- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.

Do not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.`,
      secondStepPromptTemplate: `Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.

Write the file contents to: {{userIntentDirPath}}
(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)

Requirements:
- Do not cite user messages or transcripts directly (no quotes)
- Avoid overly specific task details; focus on stable patterns and preferences
- Keep it reasonably short
- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim`
    }
  },
  stripe_radar_config: {
    client: false,
    fallbackValues: {
      blockThreshold: 75,
      reviewThreshold: 50,
      enabledEnvironments: [],
      dryRunMode: true,
      shouldRespectBlock: false
    }
  },
  bugbot_pr_summary_prompt: {
    client: false,
    fallbackValues: {
      promptVersion: "2025-09-22"
    }
  },
  bugbot_model_override: {
    client: false,
    fallbackValues: {
      model: ""
    }
  },
  conversation_tags_categorization_prompt: {
    client: false,
    fallbackValues: {
      version: "1.3.1",
      systemPrompt: `You are given a conversation between a user and an AI coding assistant. Your task is to classify the conversation along the following five axes:
- The primary task category (what type of coding work is being done)
- The complexity of the task (how hard is it for the agent to complete)
- The user's intent (what they're trying to accomplish)
- The specific focus areas (subcategories)
- The user guidance level (how much direction/specificity the user provides)

Carefully analyze the conversation content, paying attention to what the user is asking for and how the assistant responds.

IMPORTANT - Complexity vs User Guidance Level:
- 'complexity' measures how difficult the TASK is for the agent (e.g., a large refactor is high complexity)
- 'userGuidanceLevel' measures how much GUIDANCE the user provides (e.g., "fix this" is low guidance, specific file/function references is high guidance)
- These are independent: a simple task can have low user guidance ("fix the bug") or high guidance ("fix the null check on line 42 in utils.ts")
- A complex task can have high guidance (detailed spec) or low guidance (vague requirements)

Output rules:
- For each output field, choose ONLY from the allowed values listed under that field. Do not invent new values.
- Use the value names exactly (case and spacing). Example: "Write Code" (not "WriteCode").
- Do not copy values across axes (e.g., do not use subcategory labels as categories, and do not use category labels as intent).

Important rules:
- Use 'Bug Fixing & Debugging' for any work investigating or fixing bugs, errors, or crashes
- Use 'New Features' if adding functionality, even if some refactoring is needed
- Default to 'medium' complexity when unsure
- Use 'Ask' for information gathering, 'Plan' for approach discussion, 'Write Code' for actual changes
- For userGuidanceLevel: evaluate ONLY the user's messages (ignore assistant messages/tool calls). Look for specific file paths, function names, line numbers, acceptance criteria (high); general directions (medium); vague/reactive requests like "fix this" or "not working" (low)
- Subcategories should be empty unless a clear domain focus is present.`,
      categories: [{
        name: "task_categories",
        description: "The primary type of coding task being performed",
        values: [{
          name: "Styling",
          description: "The user is asking for UI/UX changes, CSS modifications, theming, or visual improvements.",
          examples: ["Change the button color to blue", "Make the header sticky", "Add dark mode styles"]
        }, {
          name: "Refactoring",
          description: "The user is asking to restructure or clean up code without changing behavior.",
          examples: ["Clean up this file", "Refactor to use dependency injection", "Split this into smaller functions"]
        }, {
          name: "Testing",
          description: "The user is asking to write tests, improve test infrastructure, or fix test failures.",
          examples: ["Add unit tests for this function", "Fix the failing tests", "Increase test coverage"]
        }, {
          name: "Documentation",
          description: "The user is asking to add comments, README updates, or API documentation.",
          examples: ["Document this function", "Add comments explaining the logic", "Update the README"]
        }, {
          name: "New Features",
          description: "The user is asking to add new functionality, endpoints, or components.",
          examples: ["Add a search feature", "Create a new API endpoint", "Build a settings page"]
        }, {
          name: "Bug Fixing & Debugging",
          description: "The user is investigating or fixing bugs, errors, or crashes. Includes both exploring why something is broken and implementing the fix.",
          examples: ["Why is this returning null?", "Debug this error", "Fix this null pointer exception", "The button should be disabled when empty"]
        }, {
          name: "Code Review",
          description: "The user is asking to review code for issues or improvements.",
          examples: ["Review my changes", "Are there any bugs in this?", "Check this PR for issues"]
        }, {
          name: "Performance",
          description: "The user is asking to optimize code for speed, memory, or efficiency.",
          examples: ["Make this faster", "Reduce memory usage", "Optimize this query"]
        }, {
          name: "DevOps",
          description: "The user is working on CI/CD, deployment, Docker, or Kubernetes.",
          examples: ["Set up GitHub Actions", "Create a Dockerfile", "Configure the deployment pipeline"]
        }, {
          name: "Infrastructure",
          description: "The user is working on cloud infrastructure, servers, or networking.",
          examples: ["Set up the AWS bucket", "Configure the load balancer", "Scale the database"]
        }, {
          name: "Configuration",
          description: "The user is working on build setup, linting, or environment config.",
          examples: ["Add ESLint rules", "Configure TypeScript", "Set up environment variables"]
        }, {
          name: "Scripting",
          description: "The user is asking to write a script for a specific or temporary task.",
          examples: ["Write a script to parse this CSV", "Create a migration script", "Automate this deployment"]
        }, {
          name: "Terminal Command",
          description: "The user is asking to run shell commands or CLI operations.",
          examples: ["Run the tests", "What does this command do?", "Execute the build script"]
        }, {
          name: "Data Analysis",
          description: "The user is asking to analyze data or extract insights.",
          examples: ["Analyze this dataset", "Find patterns in the logs", "Summarize these metrics"]
        }, {
          name: "Data Visualization",
          description: "The user is asking to create charts, graphs, or visualizations.",
          examples: ["Create a chart from this data", "Visualize the trends", "Make a dashboard"]
        }]
      }, {
        name: "complexity_levels",
        description: "How complex the task is to complete",
        values: [{
          name: "trivial",
          description: "Very simple task requiring a single line or obvious change."
        }, {
          name: "low",
          description: "Simple task affecting 1-2 files with minimal code changes."
        }, {
          name: "medium",
          description: "Moderate difficulty, touching 3-10 files, editing related code."
        }, {
          name: "high",
          description: "Complex task with cross-cutting concerns, many searches/edits, or architectural changes."
        }]
      }, {
        name: "intent_types",
        description: "What the user is trying to accomplish",
        values: [{
          name: "Plan",
          description: "The user is planning a feature or approach before implementation.",
          examples: ["How should I architect this?", "What's the best approach?", "Let's plan the implementation"]
        }, {
          name: "Ask",
          description: "The user is seeking to understand the codebase or asking questions.",
          examples: ["How does this work?", "Where is authentication implemented?", "Explain this function"]
        }, {
          name: "Task Automation",
          description: "The user is delegating common tasks like git, lint, or build.",
          examples: ["Commit these changes", "Run the linter", "Create a PR"]
        }, {
          name: "Write Code",
          description: "The user is asking to write code and make actual changes.",
          examples: ["Implement this feature", "Add the endpoint", "Build the component"]
        }]
      }, {
        name: "subcategories",
        description: "Domain focus areas within the task (use sparingly)",
        values: [{
          name: "Architecture",
          description: "System design, patterns, structure, or component boundaries."
        }, {
          name: "Security",
          description: "Auth, permissions, vulnerabilities, sanitization, secrets handling."
        }, {
          name: "Data/Database",
          description: "DB queries, schemas, migrations, data modeling."
        }, {
          name: "DevOps/Deployment",
          description: "CI/CD, deployment, infra-as-code, runtime config at deploy."
        }, {
          name: "UI/Styling",
          description: "Visual design, layout, CSS, and UI behavior."
        }, {
          name: "API Integration",
          description: "Integrating with external APIs/SDKs, webhooks, clients."
        }, {
          name: "Performance",
          description: "Latency, throughput, memory, or efficiency improvements."
        }, {
          name: "Testing",
          description: "Tests, harnesses, flakes, coverage work."
        }, {
          name: "Documentation",
          description: "Docs, READMEs, comments, API documentation."
        }, {
          name: "Configuration",
          description: "Tooling/build config, env setup, lint/format, project config."
        }, {
          name: "Code Review",
          description: "Reviewing code for correctness/quality."
        }, {
          name: "Learning",
          description: "Learning/explaining concepts or technologies."
        }]
      }, {
        name: "user_guidance_levels",
        description: "How much guidance and specificity the user provides in their request (measures user's upfront cognitive work, not task difficulty)",
        values: [{
          name: "high",
          description: "User provides highly specific, disciplined requests with clear context. Mentions specific files, functions, or line numbers. Includes acceptance criteria or expected behavior. Shows deep understanding of the codebase. Low ambiguity - the agent knows exactly what to do.",
          examples: ["Add retry logic to fetchData() in src/api/client.ts with exponential backoff, max 3 retries, starting at 100ms", "The useAuth hook in hooks/auth.ts is causing a re-render loop on line 45 because the dependency array includes the entire user object instead of user.id", "Refactor the PaymentService class to use the Strategy pattern - extract the payment processing logic into separate classes for Stripe, PayPal, and Apple Pay"]
        }, {
          name: "medium",
          description: "User provides general direction with some specifics but leaves implementation details to the agent. May reference general areas of the codebase. Some ambiguity in approach.",
          examples: ["Add error handling to the API calls", "The authentication is broken, I think it's something with the token refresh", "Make the dashboard load faster", "Add validation to the form inputs"]
        }, {
          name: "low",
          description: "User provides vague, reactive, or minimal-effort requests. Error-paste-fix patterns. 'Fix this' without context. QA-style feedback that puts all cognitive work on the agent. High ambiguity.",
          examples: ["Fix this", "It's not working", "That's wrong, try again", "There's an error", "[pasted error stack trace with no context]", "Make it work", "This is broken"]
        }]
      }],
      outputFields: [{
        name: "categories",
        description: "Primary task categories (pick 0-2 that best apply)",
        type: "array",
        maxItems: 2,
        categoryRef: "task_categories"
      }, {
        name: "complexity",
        description: "Task complexity level - how difficult is the task itself (pick exactly one)",
        type: "single",
        categoryRef: "complexity_levels"
      }, {
        name: "intent",
        description: "User's primary intent (pick exactly one)",
        type: "single",
        categoryRef: "intent_types"
      }, {
        name: "subcategories",
        description: "Specific focus areas (pick 0-2 that best apply)",
        type: "array",
        maxItems: 2,
        categoryRef: "subcategories"
      }, {
        name: "userGuidanceLevel",
        description: "How much guidance/specificity the user provides - measures user's upfront work, not task difficulty (pick exactly one)",
        type: "single",
        categoryRef: "user_guidance_levels"
      }]
    }
  },
  browser_default_url_config: {
    client: true,
    fallbackValues: {
      defaultUrl: "https://cursor.com"
    }
  },
  tool_limits_config: {
    client: true,
    fallbackValues: {
      readFilesToolMaxFileSizeInBytes: 2000000,
      editFileToolMaxFileSizeInChars: 150000,
      fileSearchToolMaxResults: 10,
      listDirV2ClientSideCharacterBudget: 1000,
      readFileV2ToolMaxFileSizeInBytes: 200000000,
      composerDiffMaxComputationTimeMs: 2000
    }
  },
  update_prompt_config: {
    client: true,
    fallbackValues: {
      min_hours_between_prompts: 48,
      max_prompts_per_version: 3,
      max_prompts_per_day: 1,
      snooze_duration_hours: 72
    }
  },
  giant_json_stringify_config: {
    client: true,
    fallbackValues: {
      sentry_threshold_bytes: 1000000,
      attach_content: false
    }
  },
  giant_json_parse_config: {
    client: true,
    fallbackValues: {
      sentry_threshold_bytes: 1000000
    }
  },
  cc_override_models_config: {
    client: true,
    fallbackValues: {
      models: []
    }
  },
  sentry_session_recording_config: {
    client: true,
    fallbackValues: {
      replays_session_sample_rate: 0
    }
  },
  extension_signature_verification_bypass_list: {
    client: true,
    fallbackValues: {
      extensionIds: ["nromanov.dotrush", "ms-python.python", "typescriptteam.native-preview", "typespec.typespec-vscode", "ms-toolsai.jupyter", "k3ndr1ckfu.tcl-language-support-for-vscode", "amiq.dvt"],
      remoteVerificationMinVersion: "2.25.0"
    }
  },
  sandbox_default_network_allowlist: {
    client: true,
    fallbackValues: {
      allowlist: []
    }
  },
  past_conversation_explorer_config: {
    client: false,
    fallbackValues: {
      transcriptLimit: 100
    }
  },
  fault_injection_config: {
    client: false,
    fallbackValues: {
      cache_disabled: {
        fraction: 0,
        enabledServices: []
      },
      db_disabled: {
        fraction: 0,
        enabledServices: []
      }
    }
  },
  auto_spillover_ui_config: {
    client: true,
    fallbackValues: tqh
  },
  portal_outage_alert: {
    client: true,
    fallbackValues: {
      enabled: false,
      title: "",
      description: ""
    }
  },
  cloud_agent_disabled_config: {
    client: false,
    fallbackValues: {
      enabled: false,
      title: "",
      description: ""
    }
  },
  inference_provider_warning: {
    client: false,
    fallbackValues: {
      trigger: "on_select",
      message: "",
      models: [],
      fallbackModel: ""
    }
  },
  onboarding_marketplace_plugins: {
    client: false,
    fallbackValues: {
      plugin_names: ["figma", "notion-workspace", "datadog"]
    }
  },
  slack_mcp_client_id: {
    client: true,
    fallbackValues: {
      clientId: "3660753192626.8903469228982"
    }
  },
  mc_claude_opus_4_6: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_claude_opus_4_5: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_claude_sonnet_4_6: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_claude_sonnet_4_5: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_claude_sonnet_4: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_claude_haiku_4_5: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_3_codex: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_3_codex_spark: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_2: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_2_codex: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_1_codex_max: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_1_codex_mini: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_1: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gpt_5_mini: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gemini_3_1_pro: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gemini_3_pro: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gemini_3_flash: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_gemini_2_5_flash: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_grok_code_fast_1: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_kimi_k2_5: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_kimi_k2_instruct: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_composer_15: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  mc_composer_1: {
    client: false,
    fallbackValues: {
      lifecycle: "off"
    }
  },
  dev_only_oai_safety_override: {
    client: false,
    fallbackValues: {
      mode: "none"
    }
  },
  memory_monitor_user_toast_config: {
    client: true,
    fallbackValues: {
      heap_percent: 80
    }
  },
  statsig_dummy_gauge_config: {
    client: true,
    fallbackValues: {
      dummy: 0
    }
  }
};
cga = Object.keys(mEe);
