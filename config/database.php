<?php
/**
 * NAFA iSTORE — Konfigurasi Koneksi Basis Data MySQL (PDO)
 * PBL SMT3 SIB Polinema
 */

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'db_istore_keep'; // nama database utama Laragon

$pdo = null;

try {
    $dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
} catch (PDOException $e) {
    // Mode graceful fallback: tidak memutus frontend statis jika DB belum di-start di Laragon
    $db_error = $e->getMessage();
}

/**
 * Helper untuk mengambil instance PDO
 */
function getDB() {
    global $pdo;
    return $pdo;
}
