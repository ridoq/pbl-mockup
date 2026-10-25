-- =====================================================================
-- SKEMA BASIS DATA: NAFA iSTORE MALANG (PBL SMT3 SIB Polinema)
-- Sesuai Revisi Proposal Bab 1-3 & Standar 3NF
-- Engine: MySQL / MariaDB (InnoDB, UTF-8 Unicode utf8mb4)
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `db_istore_keep`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `db_istore_keep`;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `wishlists`;
DROP TABLE IF EXISTS `store_visits`;
DROP TABLE IF EXISTS `inspections`;
DROP TABLE IF EXISTS `products_iphone`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `users`;
SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------------
-- 1. TABEL: users
-- ---------------------------------------------------------------------
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_lengkap` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `no_whatsapp` VARCHAR(20) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'kasir', 'customer') NOT NULL DEFAULT 'customer',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_users_role` (`role`),
  INDEX `idx_users_whatsapp` (`no_whatsapp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 2. TABEL: categories
-- ---------------------------------------------------------------------
CREATE TABLE `categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_kategori` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `deskripsi` TEXT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 3. TABEL: products_iphone
-- ---------------------------------------------------------------------
CREATE TABLE `products_iphone` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL,
  `sku_unit` VARCHAR(50) NOT NULL UNIQUE,
  `model_name` VARCHAR(100) NOT NULL,
  `tipe_kondisi` ENUM('Baru', 'Second Original') NOT NULL DEFAULT 'Baru',
  `kapasitas` VARCHAR(20) NOT NULL,
  `warna` VARCHAR(50) NOT NULL,
  `harga_jual` DECIMAL(12,2) NOT NULL,
  `status` ENUM('tersedia', 'terjadwal-review', 'terjual') NOT NULL DEFAULT 'tersedia',
  `foto_utama` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_products_status` (`status`),
  INDEX `idx_products_category` (`category_id`),
  INDEX `idx_products_sku` (`sku_unit`),
  CONSTRAINT `fk_products_category`
    FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 4. TABEL: inspections
-- ---------------------------------------------------------------------
CREATE TABLE `inspections` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL UNIQUE,
  `skor_3utools` TINYINT UNSIGNED NOT NULL DEFAULT 100,
  `battery_health` TINYINT UNSIGNED NOT NULL,
  `truetone` ENUM('aktif', 'mati', 'non-ori') NOT NULL DEFAULT 'aktif',
  `face_id` ENUM('normal', 'gangguan', 'mati') NOT NULL DEFAULT 'normal',
  `grade_fisik` ENUM('Grade A (Mulus)', 'Grade B (Lecet Tipis)', 'Grade C (Dent/Lecet)') NOT NULL DEFAULT 'Grade A (Mulus)',
  `kondisi_layar` VARCHAR(100) NOT NULL DEFAULT 'Original mulus tanpa baret',
  `kondisi_bodi` VARCHAR(100) NOT NULL DEFAULT 'Mulus, pemakaian wajar',
  `kelengkapan` ENUM('Fullset Dus Box Original', 'Fullset Dus Box OEM', 'Unit Only') NOT NULL DEFAULT 'Fullset Dus Box OEM',
  `status_sinyal` ENUM('All Operator Resmi iBox', 'Resmi Bea Cukai', 'Smartfren Only', 'Wi-Fi Only') NOT NULL DEFAULT 'All Operator Resmi iBox',
  `imei_masked` VARCHAR(50) NOT NULL,
  `catatan_teknisi` TEXT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `chk_battery_health` CHECK (`battery_health` BETWEEN 50 AND 100),
  CONSTRAINT `fk_inspections_product`
    FOREIGN KEY (`product_id`) REFERENCES `products_iphone` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 5. TABEL: store_visits
-- ---------------------------------------------------------------------
CREATE TABLE `store_visits` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NULL,
  `nama_pengunjung` VARCHAR(100) NOT NULL,
  `no_whatsapp` VARCHAR(20) NOT NULL,
  `tanggal_kunjungan` DATE NOT NULL,
  `sesi_jam` VARCHAR(30) NOT NULL,
  `catatan` TEXT NULL,
  `status_kunjungan` ENUM('menunggu', 'hadir', 'selesai-beli', 'batal') NOT NULL DEFAULT 'menunggu',
  `diverifikasi_oleh` INT UNSIGNED NULL,
  `waktu_checkin` TIMESTAMP NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_visit_status` (`status_kunjungan`),
  INDEX `idx_visit_tanggal` (`tanggal_kunjungan`),
  CONSTRAINT `fk_visit_product`
    FOREIGN KEY (`product_id`) REFERENCES `products_iphone` (`id`)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_visit_user`
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_visit_verifier`
    FOREIGN KEY (`diverifikasi_oleh`) REFERENCES `users` (`id`)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- 6. TABEL: wishlists
-- ---------------------------------------------------------------------
CREATE TABLE `wishlists` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_product` (`user_id`, `product_id`),
  CONSTRAINT `fk_wishlist_user`
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_wishlist_product`
    FOREIGN KEY (`product_id`) REFERENCES `products_iphone` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
