#!/usr/bin/env python3
from PIL import Image

img_path = "web/public/handbook-summary/new-york/new-york-handbook-image.png"
img = Image.open(img_path)
width, height = img.size
pixels = img.load()

# Let's find rows and columns that are NOT mostly white.
# The white border is very bright (RGB close to 255, 255, 255).
# The book cover itself has a sunset at the top (orange/red/blue) and dark blue at the bottom.
# So we can look for pixels that have at least some saturation or are dark (i.e. not white).

def is_white(color, threshold=240):
    # If RGB are all above threshold, it's considered white border
    if len(color) >= 3:
        return color[0] > threshold and color[1] > threshold and color[2] > threshold
    return True

# Scan from left to right, top to bottom to find the first non-white pixel
left = width
right = 0
top = height
bottom = 0

for x in range(width):
    for y in range(height):
        if not is_white(pixels[x, y]):
            if x < left:
                left = x
            if x > right:
                right = x
            if y < top:
                top = y
            if y > bottom:
                bottom = y

print(f"Inner book cover bounding box: left={left}, top={top}, right={right}, bottom={bottom}")

if right > left and bottom > top:
    cropped_img = img.crop((left, top, right, bottom))
    cropped_img.save("web/public/handbook-summary/new-york/new-york-handbook-image_inner.png")
    print(f"Saved inner cropped image: {cropped_img.size}")
else:
    print("Could not find inner cover.")
