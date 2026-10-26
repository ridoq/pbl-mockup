-- =====================================================================
-- SEED DATA AWAL (DML UJI COBA REALISTIS NAFAISTORE MALANG)
-- Engine  : PostgreSQL 12+ / 14+ / 16+
-- =====================================================================

-- 1. USERS (Admin, Kasir, & Customer Contoh)
INSERT INTO users (nama_lengkap, email, no_whatsapp, password_hash, role) VALUES
('Admin Nafaistore', 'admin@nafaistore.com', '081234567890', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('Kasir Gerai Malang', 'kasir@nafaistore.com', '081234567891', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kasir'),
('Taufiqi Ridho Maulana', 'ridho@student.polinema.ac.id', '085700001122', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'customer')
ON CONFLICT (email) DO NOTHING;

-- 2. CATEGORIES
INSERT INTO categories (nama_kategori, slug, deskripsi) VALUES
('iPhone 18 Series', 'iphone-18-series', 'Lini iPhone Flagship Next-Gen dengan kamera quad-pixel & chip A20 Pro.'),
('iPhone 17 Series', 'iphone-17-series', 'Lini iPhone ultra-thin Air dan kamera 48MP periskop.'),
('iPhone 16 Series', 'iphone-16-series', 'Lini iPhone Apple Intelligence dengan Camera Control.'),
('iPhone 15 Series', 'iphone-15-series', 'Lini iPhone bingkai Titanium, port Type-C, dan Dynamic Island.'),
('iPhone 14 Series', 'iphone-14-series', 'Lini iPhone modern dengan Photonic Engine stabil.'),
('iPhone 13 Series', 'iphone-13-series', 'Lini iPhone ProMotion 120Hz & baterai efisien.'),
('iPhone 12 Series', 'iphone-12-series', 'Lini iPhone flat-edge pertama berlayar OLED & 5G.'),
('iPhone 11 Series', 'iphone-11-series', 'Lini iPhone dual-camera yang terjangkau dan handal.')
ON CONFLICT (slug) DO NOTHING;

-- 3. PRODUCTS
INSERT INTO products (id, category_id, sku_unit, name, slug, condition, base_price, badge, rating, sold, desc_text, specs, tokopedia_url) VALUES
(1, 1, 'NF-MLG-18PM-CR-001', 'iPhone 18 Pro Max', 'iphone-18-pro-max', 'Baru', 25999000.00, 'Terbaru', 5.0, 88, 'Flagship masa depan dengan bodi Titanium generasi baru, chip Apple Silicon A20 Pro, sistem quad-camera periskop dan layar ProMotion 144Hz.', '{"Layar": "6.9\" Super Retina XDR OLED 144Hz", "Chip": "A20 Pro Bionic", "Kamera": "48MP Quad-Pixel + 10x Periscope", "Baterai": "Hingga 36 jam", "Garansi": "Resmi iBox 1 Tahun"}'::jsonb, 'https://www.tokopedia.com/nafaistore'),
(2, 1, 'NF-MLG-18P-CR-002', 'iPhone 18 Pro', 'iphone-18-pro', 'Baru', 22499000.00, 'Terbaru', 5.0, 95, 'Kombinasi sempurna kenyamanan genggaman 6.3 inci dengan kekuatan penuh chip A20 Pro.', '{"Layar": "6.3\" Super Retina XDR OLED 144Hz", "Chip": "A20 Pro Bionic", "Kamera": "48MP Triple Camera", "Baterai": "Hingga 30 jam", "Garansi": "Resmi iBox 1 Tahun"}'::jsonb, 'https://www.tokopedia.com/nafaistore'),
(3, 2, 'NF-MLG-17AIR-BL-003', 'iPhone 17 Air', 'iphone-17-air', 'Baru', 16999000.00, 'Ultra Slim', 4.9, 142, 'Smartphone paling tipis yang pernah diciptakan Apple dengan sasis titanium ringan.', '{"Layar": "6.6\" Super Retina XDR 120Hz", "Chip": "A19 Pro Bionic", "Kamera": "48MP Dual Fusion", "Baterai": "Hingga 26 jam", "Garansi": "Resmi iBox 1 Tahun"}'::jsonb, 'https://www.tokopedia.com/nafaistore'),
(4, 3, 'NF-MLG-16-ULT-004', 'iPhone 16', 'iphone-16', 'Baru', 15499000.00, 'Best Seller', 4.9, 210, 'iPhone generasi terbaru dengan tombol Camera Control inovatif dan chip A18 cepat.', '{"Layar": "6.1\" Super Retina XDR OLED", "Chip": "A18 Bionic", "Kamera": "48MP Fusion + 12MP Ultra Wide", "Baterai": "Hingga 22 jam", "Garansi": "Resmi iBox 1 Tahun"}'::jsonb, 'https://www.tokopedia.com/nafaistore'),
(5, 6, 'NF-MLG-13P-BLU-005', 'iPhone 13 Pro', 'iphone-13-pro-bekas', 'Second', 9999000.00, 'Best Value', 4.8, 185, 'iPhone Pro pertama dengan layar ProMotion 120Hz mulus, bodi stainless steel mewah, dan daya tahan baterai legendaris.', '{"Layar": "6.1\" Super Retina XDR ProMotion 120Hz", "Chip": "A15 Bionic", "Kamera": "12MP Pro Triple System", "Baterai": "Battery Health 88%+", "Garansi": "Garansi Toko 1 Bulan Tukar Unit"}'::jsonb, 'https://www.tokopedia.com/nafaistore')
ON CONFLICT (slug) DO NOTHING;

-- Sinkronkan urutan sequence ID products
SELECT setval('products_id_seq', COALESCE((SELECT MAX(id) FROM products), 1));

-- 4. PRODUCT VARIANTS (Kapasitas & Harga)
INSERT INTO product_variants (product_id, storage_label, price, stock) VALUES
(1, '256GB', 25999000.00, 5),
(1, '512GB', 28999000.00, 3),
(1, '1TB', 32999000.00, 2),
(2, '128GB', 22499000.00, 6),
(2, '256GB', 24499000.00, 4),
(3, '256GB', 16999000.00, 8),
(4, '128GB', 15499000.00, 10),
(5, '128GB', 9999000.00, 4);

-- 5. PRODUCT COLORS (Galeri Warna & Foto Unit)
INSERT INTO product_colors (product_id, color_name, color_hex, image_url, is_default) VALUES
(1, 'Deep Crimson', '#6B1724', 'assets/img/productNew/iphone-18-pro-max-deep-crimson.webp', TRUE),
(1, 'Ice Blue', '#A8BDD4', 'assets/img/productNew/iphone-18-pro-max-ice-blue-titanium.webp', FALSE),
(1, 'Platinum', '#D5D4D0', 'assets/img/productNew/iphone-18-pro-max-platinum-titanium.webp', FALSE),
(1, 'Obsidian Black', '#202022', 'assets/img/productNew/iphone-18-pro-max-obsidian-black.webp', FALSE),
(3, 'Cloud Blue', '#7BA4C7', 'assets/img/productNew/iphone-17-air-cloud-blue.webp', TRUE),
(5, 'Sierra Blue', '#9BB5CE', 'assets/img/productNew/iphone-13-pro-max-sierra-blue.webp', TRUE);

-- 6. INSPECTIONS (Khusus Unit Second — iPhone 13 Pro)
INSERT INTO inspections (product_id, battery_health, truetone, face_id, grade_fisik, kondisi_layar, kondisi_bodi, kelengkapan, status_sinyal, imei_masked, catatan_teknisi) VALUES
(5, 88, 'aktif', 'normal', 'Grade A+ Like New', 'Original mulus tanpa baret/shadow', 'Mulus 98%, no dent, cat bezel utuh terawat', 'Fullset Dus Box OEM', 'Resmi iBox All Operator', '358912******781', 'Unit ex garansi resmi iBox Indonesia. Face ID, TrueTone aktif normal, kamera jernih, belum pernah servis.');

-- 7. ORDERS (Contoh Transaksi / Reservasi)
INSERT INTO orders (order_code, user_id, nama_customer, no_whatsapp, email, tipe_pemesanan, tanggal_kunjungan, sesi_jam, alamat_pengiriman, metode_pembayaran, total_harga, status, catatan) VALUES
('ORD-20261026-001', 3, 'Taufiqi Ridho Maulana', '085700001122', 'ridho@student.polinema.ac.id', 'store_pickup', CURRENT_DATE, '14:00 - 15:00 WIB', 'Ambil langsung di Gerai Malang', 'transfer_bank', 25999000.00, 'dikonfirmasi', 'Siapkan nota resmi iBox & unit Deep Crimson.');

-- 8. ORDER ITEMS
INSERT INTO order_items (order_id, product_id, selected_color, selected_storage, qty, unit_price, subtotal) VALUES
(1, 1, 'Deep Crimson', '256GB', 1, 25999000.00, 25999000.00);

-- 9. BLOG POSTS
INSERT INTO blog_posts (author_id, title, slug, category, excerpt, content, read_time, cover_image) VALUES
(1, 'Cara Merawat Battery Health iPhone Biar Awet Lebih dari 2 Tahun', 'cara-merawat-battery-health-iphone', 'Perawatan', 'Kebiasaan kecil saat mengecas yang bikin Battery Health iPhone kamu turun sangat lambat.', 'Baterai lithium-ion pada iPhone memiliki siklus kimiawi alami. Namun dengan menjaga persentase daya antara 20% hingga 80% dan menghindari panas berlebih saat bermain game sambil cas, masa pakai baterai bisa bertahan prima lebih dari dua tahun...', '4 menit', 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&fit=crop'),
(1, 'Ciri iPhone Second yang Masih Bagus — Panduan Cek Sebelum Beli', 'ciri-iphone-second-yang-masih-bagus', 'Panduan', 'Panduan lengkap memeriksa IMEI Kemenperin, Face ID, TrueTone, dan layar sebelum memutuskan membeli.', 'Membeli iPhone second membutuhkan ketelitian ekstra. Pastikan nomor IMEI terdaftar resmi pada database Kemenperin atau Bea Cukai agar sinyal operator aman permanen. Selain itu periksa fitur Face ID dan TrueTone di bawah cahaya langsung...', '5 menit', 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80&fit=crop')
ON CONFLICT (slug) DO NOTHING;
