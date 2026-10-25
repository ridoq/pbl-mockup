import os
import sys
import glob
from PIL import Image

def convert_images_to_webp(folder_path=None, quality=90):
    if not folder_path:
        folder_path = os.path.dirname(os.path.abspath(__file__))
    
    extensions = ("*.png", "*.jpg", "*.jpeg")
    files = []
    for ext in extensions:
        files.extend(glob.glob(os.path.join(folder_path, ext)))
        
    if not files:
        print(f"Tidak ada file PNG/JPG yang ditemukan di: {folder_path}")
        return
        
    print(f"Memproses {len(files)} gambar di: {folder_path}...")
    total_src = 0
    total_dst = 0
    count = 0
    
    for i, src in enumerate(files, 1):
        base, _ = os.path.splitext(src)
        dst = f"{base}.webp"
        
        try:
            with Image.open(src) as im:
                im.save(dst, "WEBP", quality=quality, method=6)
                
            src_sz = os.path.getsize(src)
            dst_sz = os.path.getsize(dst)
            total_src += src_sz
            total_dst += dst_sz
            count += 1
            print(f"[{i}/{len(files)}] {os.path.basename(dst)}: {src_sz/1024:.1f}KB -> {dst_sz/1024:.1f}KB")
        except Exception as e:
            print(f"Error {src}: {e}")
            
    savings = (1 - total_dst / total_src) * 100 if total_src > 0 else 0
    print("\n--- SELESAI ---")
    print(f"Berhasil: {count}/{len(files)} gambar.")
    print(f"Ukuran Asli : {total_src / (1024*1024):.2f} MB")
    print(f"Ukuran WebP : {total_dst / (1024*1024):.2f} MB")
    print(f"Hemat       : {savings:.1f}%")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else None
    convert_images_to_webp(target)
