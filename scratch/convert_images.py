import os
import glob
from PIL import Image

ARTIFACT_DIR = "/Users/radhikabiyani/.gemini/antigravity/brain/c0a13760-0aae-4cfc-9095-abb4cb79d170"
TARGET_DIR = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/public/images/practice-tests/sections"

def convert_all():
    print("Scanning for PNGs in artifact directory...")
    png_files = glob.glob(os.path.join(ARTIFACT_DIR, "*.png"))
    for file_path in png_files:
        filename = os.path.basename(file_path)
        # Extract topic from filename, e.g. "basic_control_12345.png" -> "basic_control"
        parts = filename.split("_")
        if len(parts) >= 2:
            # Reconstruct topic name without the trailing timestamp part
            topic = "_".join(parts[:-1])
            dest_path = os.path.join(TARGET_DIR, f"{topic}.webp")
            try:
                img = Image.open(file_path)
                img.save(dest_path, "WEBP", quality=85)
                print(f"Successfully converted {filename} -> {topic}.webp")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    convert_all()
