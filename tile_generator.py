import os
import math
from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # Disable max pixels limit for large images

def generate_tiles(image_path, output_dir, tile_size=256):
    print(f"Loading image {image_path}...")
    img = Image.open(image_path)
    W, H = img.size
    print(f"Original size: {W}x{H}")

    max_z = math.ceil(math.log2(max(W, H) / tile_size))
    print(f"Max zoom level: {max_z}")

    for z in range(max_z + 1):
        scale = 2 ** (z - max_z)
        new_w = max(1, int(W * scale))
        new_h = max(1, int(H * scale))
        
        print(f"Generating level {z} (size: {new_w}x{new_h})...")
        
        # Resize image for this zoom level
        if z == max_z:
            img_z = img
        else:
            img_z = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        cols = math.ceil(new_w / tile_size)
        rows = math.ceil(new_h / tile_size)
        
        for x in range(cols):
            x_dir = os.path.join(output_dir, str(z), str(x))
            os.makedirs(x_dir, exist_ok=True)
            for y in range(rows):
                # Crop tile
                left = x * tile_size
                upper = y * tile_size
                right = min(left + tile_size, new_w)
                lower = min(upper + tile_size, new_h)
                
                tile = img_z.crop((left, upper, right, lower))
                
                # If tile is at edge and smaller than 256x256, paste it into a transparent/black background? 
                # Leaflet's L.CRS.Simple doesn't strictly need it if we set bounds correctly, 
                # but it's safer to have exact 256x256 or just save the cropped size. 
                # Saving cropped size works fine for most mapping libraries.
                tile_path = os.path.join(x_dir, f"{y}.jpg")
                tile.save(tile_path, "JPEG", quality=85)

    print("Tiling complete.")
    return W, H, max_z

if __name__ == "__main__":
    generate_tiles("Kunyu_Wanguo_Quantu.jpg", "tiles/kunyu")
