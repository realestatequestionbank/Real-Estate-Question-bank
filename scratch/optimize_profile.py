from PIL import Image

input_path = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/public/images/Radhika_Biyani_Profile_Picture.png"
output_path = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/public/images/Radhika_Biyani_Profile_Picture.webp"

try:
    with Image.open(input_path) as img:
        print(f"Original size: {img.size}, format: {img.format}")
        # Resize to max 512x512 keeping aspect ratio
        img.thumbnail((512, 512), Image.Resampling.LANCZOS)
        print(f"New size: {img.size}")
        # Save as webp with high quality compression
        img.save(output_path, "WEBP", quality=85)
        print(f"Successfully optimized and saved to {output_path}")
except Exception as e:
    print(f"Error during optimization: {e}")
