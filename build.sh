#!/bin/bash

# Clean dist directory
rm -rf dist

# Create necessary directories
mkdir -p dist/inject

# Build the project
npm run build

# Copy static assets
cp -r public/* dist/ 