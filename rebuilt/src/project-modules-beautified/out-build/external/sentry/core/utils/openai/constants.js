"use strict";

// Module: out-build/external/sentry/core/utils/openai/constants.js
// Offset: 165577 (bundle byte offset)
// Size: 1422 bytes
l_c = "OpenAI";
Deh = ["responses.create", "chat.completions.create"];
Beh = ["response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"];
Reh = ["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta", ...Beh];
