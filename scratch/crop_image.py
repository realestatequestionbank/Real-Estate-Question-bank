#!/usr/bin/env python3
from PIL import Image

img_path = "web/public/handbook-summary/new-york/new-york-handbook-image.png"
img = Image.open(img_path)

# Let's inspect the colors at the four corners to determine background color
width, height = img.size
pixels = img.load()

corners = [
    pixels[0, 0],
    pixels[width - 1, 0],
    pixels[0, height - 1],
    pixels[width - 1, height - 1]
]
print("Corner pixels:", corners)

# We want to find the bounding box of the non-background content.
# Since the background color might not be perfectly uniform, let's find the rows/cols that are significantly different from the top-left corner color.
bg_color = pixels[0, 0]

def is_bg(color, bg, threshold=30):
    if len(color) >= 3 and len(bg) >= 3:
        return all(abs(color[i] - bg[i]) < threshold for i in range(3))
    return color == bg

# Find boundaries
left = width
right = 0
top = height
bottom = 0

for x in range(width):
    for y in range(height):
        color = pixels[x, y]
        if not is_bg(color, bg_color):
            if x < left:
                left = x
            if x > right:
                right = x
            if y < top:
                top = y
            if y > bottom:
                bottom = y

print(f"Content bounding box: left={left}, top={top}, right={right}, bottom={bottom}")

if right > left and bottom > top:
    # Add a small padding (e.g. 5 pixels)
    pad = 5
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(width, right + pad)
    bottom = min(height, bottom + pad)
    
    cropped_img = img.crop((left, top, right, bottom))
    cropped_img.save("web/public/handbook-summary/new-york/new-york-handbook-image_cropped.png")
    print("Saved cropped image to new-york-handbook-image_cropped.png")
    print(f"New dimensions: {cropped_img.size}")
else:
    print("No non-background content found with the current threshold.")
