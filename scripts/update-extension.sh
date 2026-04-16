#!/bin/bash
set -e

# Base directory for extensions
EXT_DIR="extensions"

echo "Running standard extension update..."
gemini extensions update --all

echo "Cleaning up .git metadata to prevent submodule issues..."

# Iterate through each directory in extensions/
for dir in "$EXT_DIR"/*/; do
    # Remove trailing slash
    dir=${dir%/}
    ext_name=$(basename "$dir")

    # Remove .git if it was restored/created during update
    if [ -d "$dir/.git" ]; then
        echo "Removing .git from $ext_name..."
        rm -rf "$dir/.git"
    fi
done

echo "✅ All extensions updated and cleaned."
