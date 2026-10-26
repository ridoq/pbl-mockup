<?php
/**
 * NAFA iSTORE — Konfigurasi Koneksi Basis Data PostgreSQL (PDO)
 * PBL SMT3 SIB Polinema
 */

$db_host = 'localhost';
$db_port = '5432';
$db_user = 'postgres';
$db_pass = 'postgres';
$db_name = 'db_istore_keep';

$pdo = null;
$db_error = null;

try {
    $dsn = "pgsql:host={$db_host};port={$db_port};dbname={$db_name}";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
} catch (PDOException $e) {
    // Mode graceful fallback: jika PostgreSQL belum aktif / ekstensi pdo_pgsql belum diaktifkan,
    // aplikasi tetap berjalan dengan data JSON fallback tanpa crash.
    $db_error = $e->getMessage();
}

/**
 * Helper untuk mengambil instance PDO PostgreSQL
 */
function getDB() {
    global $pdo;
    return $pdo;
}
