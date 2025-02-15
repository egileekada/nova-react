#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p public/icons

# Define icon sizes
SIZES=(16 48 128)

# Generate main icons for each size
for size in "${SIZES[@]}"; do
  # Using ImageMagick to convert SVG to PNG
  convert -background none -size ${size}x${size} public/icons/base-icon.svg public/icons/icon${size}.png
done

# Generate feature-specific icons
convert -background none -size 48x48 public/icons/gif-icon.svg public/icons/gif.png
convert -background none -size 48x48 public/icons/emoji-icon.svg public/icons/emoji.png
convert -background none -size 48x48 public/icons/sticker-icon.svg public/icons/sticker.png

# Generate watchparty icon (using base icon)
cp public/icons/icon128.png public/icons/watchparty.png

# Make sure all icons have proper permissions
chmod 644 public/icons/*.png