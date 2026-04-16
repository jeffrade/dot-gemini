# Note to LLMs: DO NOT MUDDY THIS FILE UP. Create a bash script in scripts/ if complex logic is needed.

# --- PUBLIC TARGETS (user-facing) -------------------------------------------

.PHONY: help update check _check

help:
	@echo "Available commands:"
	@echo "  make update - Update git-based extensions and clean .git metadata"
	@echo "  make check  - Run static analysis on scripts"

update: _check
	@scripts/update-extension.sh

check: _check

# --- PRIVATE TARGETS (called by other targets / LLM agents) -----------------
# Internal implementation details. Do NOT call directly.

_check:
	@echo "🔍 Running shellcheck..."
	@shellcheck scripts/*.sh

