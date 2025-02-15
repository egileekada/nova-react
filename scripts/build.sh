#!/bin/bash

# Clean dist directory
rm -rf dist

# Create necessary directories
mkdir -p dist/inject
mkdir -p dist/styles
mkdir -p dist/icons

# Run webpack build
webpack --mode=production

# Copy manifest and static assets
cp public/manifest.json dist/
cp -r public/icons/* dist/icons/

# Create styles directory and copy CSS
mkdir -p dist/styles
cp src/styles/content.css dist/styles/

# Set proper permissions
chmod -R 644 dist/icons/*
chmod 644 dist/manifest.json
chmod -R 644 dist/styles/*

# Verify required files exist
required_files=(
  "dist/manifest.json"
  "dist/content.js"
  "dist/background.js"
  "dist/inject/media-controller.js"
  "dist/styles/content.css"
  "dist/icons/icon16.png"
  "dist/icons/icon48.png"
  "dist/icons/icon128.png"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Error: Missing required file: $file"
    exit 1
  fi
done

echo "Build completed successfully!"