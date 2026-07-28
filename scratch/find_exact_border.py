#!/usr/bin/env python3
from PIL import Image

img_path = "web/public/handbook-summary/new-york/new-york-handbook-image.png"
img = Image.open(img_path)
width, height = img.size
pixels = img.load()

# Let's find rows and columns that contain the actual book cover.
# The actual book cover is the dark blue/sunset graphic.
# Let's print the colors along the center horizontal line
print("Center row colors:")
for x in range(0, width, width // 20):
    print(f"x={x}: {pixels[x, height//2]}")

print("\nCenter column colors:")
for y in range(0, height, height // 20):
    print(f"y={y}: {pixels[width//2, y]}")
