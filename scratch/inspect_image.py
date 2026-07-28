#!/usr/bin/env python3
from PIL import Image

img_path = "web/public/handbook-summary/new-york/new-york-handbook-image.png"
try:
    img = Image.open(img_path)
    print(f"Dimensions: {img.size}")
    print(f"Format: {img.format}")
    print(f"Mode: {img.mode}")
except Exception as e:
    print(f"Error: {e}")
