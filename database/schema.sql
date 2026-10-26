-- =====================================================================
-- SKEMA BASIS DATA: NAFA iSTORE MALANG (PBL SMT3 SIB Polinema)
-- Engine  : PostgreSQL 12+ / 14+ / 16+
-- Standar : 3NF (Third Normal Form) & Relasional Bersih
-- =====================================================================

-- 1. Bersihkan tabel lama jika ada
DROP TABLE IF EXISTS wishlists CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS inspections CASCADE;
DROP TABLE IF EXISTS product_colors CASCADE;
DROP TABLE IF EXISTS product_variants CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 2. Fungsi Trigger Otomatis untuk field updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ---------------------------------------------------------------------
-- TABEL 1: users (Pengguna & Hak Akses Toko)
-- ---------------------------------------------------------------------
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nama_lengkap VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    no_whatsapp VARCHAR(20) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'customer' CHECK (role IN ('admin', 'kasir', 'customer')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_whatsapp ON users(no_whatsapp);

-- ---------------------------------------------------------------------
-- TABEL 2: categories (Kategori Generasi & Lini iPhone)
-- ---------------------------------------------------------------------
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    deskripsi TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------------------------------
-- TABEL 3: products (Katalog Utama iPhone)
-- ---------------------------------------------------------------------
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    sku_unit VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    condition VARCHAR(20) NOT NULL DEFAULT 'Baru' CHECK (condition IN ('Baru', 'Second')),
    base_price NUMERIC(12, 2) NOT NULL,
    badge VARCHAR(50),
    rating NUMERIC(2, 1) DEFAULT 5.0,
    sold INT DEFAULT 0,
    desc_text TEXT,
    specs JSONB, -- Fleksibel untuk spesifikasi Layar, Chip, Kamera, dll
    tokopedia_url VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_condition ON products(condition);
CREATE INDEX idx_products_sku ON products(sku_unit);

-- ---------------------------------------------------------------------
-- TABEL 4: product_variants (Opsi Kapasitas & Harga Bertingkat)
-- ---------------------------------------------------------------------
CREATE TABLE product_variants (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    storage_label VARCHAR(20) NOT NULL, -- Contoh: 128GB, 256GB, 512GB, 1TB
    price NUMERIC(12, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 5 CHECK (stock >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_variants_product ON product_variants(product_id);

-- ---------------------------------------------------------------------
-- TABEL 5: product_colors (Pilihan Warna & Gambar Dinamis)
-- ---------------------------------------------------------------------
CREATE TABLE product_colors (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    color_name VARCHAR(50) NOT NULL, -- Contoh: Deep Crimson, Ice Blue, Platinum
    color_hex VARCHAR(20),          -- Contoh: #6B1724
    image_url VARCHAR(255) NOT NULL,
    is_default BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX idx_colors_product ON product_colors(product_id);

-- ---------------------------------------------------------------------
-- TABEL 6: inspections (Khusus Unit Second — Uji Kualitas Otentik)
-- ---------------------------------------------------------------------
CREATE TABLE inspections (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL UNIQUE REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    battery_health INT NOT NULL CHECK (battery_health BETWEEN 50 AND 100),
    truetone VARCHAR(20) NOT NULL DEFAULT 'aktif' CHECK (truetone IN ('aktif', 'mati', 'non-ori')),
    face_id VARCHAR(20) NOT NULL DEFAULT 'normal' CHECK (face_id IN ('normal', 'gangguan', 'mati')),
    grade_fisik VARCHAR(30) NOT NULL DEFAULT 'Grade A+ Like New' CHECK (grade_fisik IN ('Grade A+ Like New', 'Grade A', 'Grade B')),
    kondisi_layar VARCHAR(100) NOT NULL DEFAULT 'Original mulus tanpa baret',
    kondisi_bodi VARCHAR(100) NOT NULL DEFAULT 'Mulus terawat, no dent',
    kelengkapan VARCHAR(50) NOT NULL DEFAULT 'Fullset Dus Box OEM' CHECK (kelengkapan IN ('Fullset Dus Box Original', 'Fullset Dus Box OEM', 'Unit Only')),
    status_sinyal VARCHAR(50) NOT NULL DEFAULT 'Resmi iBox All Operator' CHECK (status_sinyal IN ('Resmi iBox All Operator', 'Resmi Bea Cukai')),
    imei_masked VARCHAR(50) NOT NULL,
    catatan_teknisi TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_inspections_updated_at
    BEFORE UPDATE ON inspections
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ---------------------------------------------------------------------
-- TABEL 7: orders (Pemesanan Delivery, Pickup Gerai, & Reservasi)
-- ---------------------------------------------------------------------
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_code VARCHAR(50) NOT NULL UNIQUE,
    user_id INT REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
    nama_customer VARCHAR(100) NOT NULL,
    no_whatsapp VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    tipe_pemesanan VARCHAR(30) NOT NULL DEFAULT 'store_pickup' CHECK (tipe_pemesanan IN ('online_delivery', 'store_pickup', 'store_visit')),
    tanggal_kunjungan DATE,
    sesi_jam VARCHAR(30),
    alamat_pengiriman TEXT,
    metode_pembayaran VARCHAR(30) NOT NULL DEFAULT 'transfer_bank' CHECK (metode_pembayaran IN ('transfer_bank', 'cod', 'tokopedia', 'bayar_di_toko')),
    total_harga NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    status VARCHAR(30) NOT NULL DEFAULT 'menunggu' CHECK (status IN ('menunggu', 'dikonfirmasi', 'diproses', 'siap_ambil', 'dikirim', 'selesai', 'batal')),
    catatan TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_orders_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(tanggal_kunjungan);

-- ---------------------------------------------------------------------
-- TABEL 8: order_items (Detail Item Transaksi)
-- ---------------------------------------------------------------------
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    selected_color VARCHAR(50),
    selected_storage VARCHAR(20),
    qty INT NOT NULL DEFAULT 1 CHECK (qty > 0),
    unit_price NUMERIC(12, 2) NOT NULL,
    subtotal NUMERIC(12, 2) NOT NULL
);

CREATE INDEX idx_order_items_order ON order_items(order_id);

-- ---------------------------------------------------------------------
-- TABEL 9: blog_posts (Artikel Edukasi & Tips iPhone)
-- ---------------------------------------------------------------------
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    author_id INT REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    read_time VARCHAR(20) DEFAULT '4 menit',
    cover_image VARCHAR(255),
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ---------------------------------------------------------------------
-- TABEL 10: wishlists (Unit Favorit Customer)
-- ---------------------------------------------------------------------
CREATE TABLE wishlists (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_product UNIQUE (user_id, product_id)
);
