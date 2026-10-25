-- =====================================================================
-- SEED DATA AWAL (DML UJI COBA REALISTIS NAFAISTORE MALANG)
-- =====================================================================

USE `db_istore_keep`;

-- 1. USERS
INSERT INTO `users` (`id`, `nama_lengkap`, `email`, `no_whatsapp`, `password_hash`, `role`) VALUES
(1, 'Admin Nafaistore', 'admin@nafaistore.com', '081234567890', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
(2, 'Kasir Gerai Malang', 'kasir@nafaistore.com', '081234567891', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kasir'),
(3, 'Taufiqi Ridho Maulana', 'ridho@student.polinema.ac.id', '085700001122', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'customer')
ON DUPLICATE KEY UPDATE `email` = VALUES(`email`);

-- 2. CATEGORIES
INSERT INTO `categories` (`id`, `nama_kategori`, `slug`, `deskripsi`) VALUES
(1, 'iPhone 11 Series', 'iphone-11-series', 'Lini iPhone dual-camera & pro model rilisan 2019 yang awet dan terjangkau.'),
(2, 'iPhone 12 Series', 'iphone-12-series', 'Lini iPhone flat-edge pertama berlayar OLED Super Retina XDR dan 5G.'),
(3, 'iPhone 13 Series', 'iphone-13-series', 'Lini iPhone dengan peningkatan daya tahan baterai signifikan & ProMotion 120Hz.'),
(4, 'iPhone 14 Series', 'iphone-14-series', 'Lini iPhone modern dengan Photonic Engine dan Action Mode kamera stabil.'),
(5, 'iPhone 15 Series', 'iphone-15-series', 'Lini iPhone berbingkai Titanium, port Type-C, dan Dynamic Island.'),
(6, 'iPhone 16 Series', 'iphone-16-series', 'Lini iPhone Apple Intelligence dengan Camera Control dan chip A18.'),
(7, 'iPhone 17 Series', 'iphone-17-series', 'Lini iPhone super ramping ultra-thin Air dan kamera Pro 48MP periskop.'),
(8, 'iPhone 18 Series', 'iphone-18-series', 'Lini iPhone Next-Gen Flagship tercanggih dengan kamera quad-pixel & A20 Bionic.')
ON DUPLICATE KEY UPDATE `nama_kategori` = VALUES(`nama_kategori`);

-- 3. PRODUCTS
INSERT INTO `products_iphone` (`id`, `category_id`, `sku_unit`, `model_name`, `tipe_kondisi`, `kapasitas`, `warna`, `harga_jual`, `status`, `foto_utama`) VALUES
(1, 8, 'NF-MLG-18PM-CR-001', 'iPhone 18 Pro Max', 'Baru', '256GB', 'Deep Crimson', 25999000.00, 'tersedia', 'assets/img/productNew/iphone-18-pro-max-deep-crimson.webp'),
(2, 8, 'NF-MLG-18P-CR-002', 'iPhone 18 Pro', 'Baru', '128GB', 'Deep Crimson', 21999000.00, 'tersedia', 'assets/img/productNew/iphone-18-pro-deep-crimson.webp'),
(3, 7, 'NF-MLG-17PM-AM-003', 'iPhone 17 Pro Max', 'Baru', '256GB', 'Cosmic Amber', 23499000.00, 'tersedia', 'assets/img/productNew/iphone-17-pro-max-cosmic-amber.webp'),
(4, 7, 'NF-MLG-17AIR-BL-004', 'iPhone 17 Air', 'Baru', '256GB', 'Cloud Blue', 16999000.00, 'tersedia', 'assets/img/productNew/iphone-17-air-cloud-blue.webp'),
(5, 6, 'NF-MLG-16PM-TI-005', 'iPhone 16 Pro Max', 'Baru', '256GB', 'Black Titanium', 22499000.00, 'tersedia', 'assets/img/productNew/iphone-16-pro-max-black-titanium.webp'),
(6, 6, 'NF-MLG-16-ULT-006', 'iPhone 16', 'Baru', '128GB', 'Ultramarine', 15499000.00, 'tersedia', 'assets/img/productNew/iphone-16-ultramarine.webp'),
(7, 5, 'NF-MLG-15PM-NT-007', 'iPhone 15 Pro Max', 'Baru', '256GB', 'Natural Titanium', 19499000.00, 'tersedia', 'assets/img/productNew/iphone-15-pro-max-natural-titanium.webp'),
(8, 4, 'NF-MLG-14-MID-008', 'iPhone 14', 'Baru', '128GB', 'Midnight', 11999000.00, 'tersedia', 'assets/img/productNew/iphone-14-midnight.webp'),
(9, 3, 'NF-MLG-13P-BLU-009', 'iPhone 13 Pro', 'Second Original', '128GB', 'Sierra Blue', 10499000.00, 'tersedia', 'assets/img/productNew/iphone-13-pro-max-sierra-blue.webp'),
(10, 2, 'NF-MLG-12-BLK-010', 'iPhone 12', 'Second Original', '64GB', 'Black', 6499000.00, 'tersedia', 'assets/img/productNew/iphone-12-black.webp'),
(11, 1, 'NF-MLG-11-BLK-011', 'iPhone 11', 'Second Original', '128GB', 'Black', 4899000.00, 'tersedia', 'assets/img/productNew/iphone-11-black.webp')
ON DUPLICATE KEY UPDATE `sku_unit` = VALUES(`sku_unit`);

-- 4. INSPECTIONS
INSERT INTO `inspections` (`product_id`, `skor_3utools`, `battery_health`, `truetone`, `face_id`, `grade_fisik`, `kondisi_layar`, `kondisi_bodi`, `kelengkapan`, `status_sinyal`, `imei_masked`, `catatan_teknisi`) VALUES
(9, 100, 89, 'aktif', 'normal', 'Grade A (Mulus)', 'Original mulus tanpa baret/shadow', 'Mulus 98%, no dent, cat bezel utuh', 'Fullset Dus Box OEM', 'All Operator Resmi iBox', '358912******781', 'Unit inter grade A+ ex pemakaian pribadi, 3uTools All Green 100%.'),
(10, 98, 86, 'aktif', 'normal', 'Grade A (Mulus)', 'Original normal, ada baret halus minor', 'Grade A 95%, pemakaian casing wajar', 'Unit Only', 'All Operator Resmi iBox', '352980******415', 'Fungsi 100% normal, baterai bawaan belum pernah ganti.'),
(11, 97, 84, 'aktif', 'normal', 'Grade B (Lecet Tipis)', 'Layar original jernih', 'Mulus 93%, lecet wajar pemakaian', 'Fullset Dus Box OEM', 'All Operator Resmi iBox', '351120******982', 'Unit mulus siap pakai, kamera jernih.')
ON DUPLICATE KEY UPDATE `skor_3utools` = VALUES(`skor_3utools`);
