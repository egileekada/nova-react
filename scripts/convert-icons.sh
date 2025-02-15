#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p public/icons

# Convert SVGs to PNGs
for size in 16 48 128; do
  convert -background none -size ${size}x${size} public/icons/icon${size}.svg public/icons/icon${size}.png
done 