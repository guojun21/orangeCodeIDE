# Scripts

Automation scripts for extraction, recovery, mapping, and validation.

Examples:

- raw bundle copy helpers
- unbundle runners
- mapping generators
- validation and diff scripts
- active rebuilt entrypoints such as `build.mjs`, `dev.mjs`, `verify.mjs`, and `coverage.mjs`
- historical thin wrappers archived under `scripts/archived/`

Rules:

- Scripts should write outputs into `raw/`, `recovered/`, `mapped/`, or `notes/`
- Scripts should not overwrite the runtime baseline by default
- New automation should target the rebuilt mainline before adding more one-off wrappers

Mainline wrappers:

- `build.mjs` -> rebuilt build + assemble
- `dev.mjs` -> rebuilt watch + restart + live probe
- `verify.mjs` -> full rebuilt check suite
- `coverage.mjs` -> rebuilt coverage report
