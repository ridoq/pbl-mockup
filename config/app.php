<?php
/**
 * NAFA iSTORE — Konfigurasi Aplikasi & Lingkungan
 * PBL SMT3 SIB Polinema
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Konfigurasi Umum
define('APP_NAME', 'NAFA iSTORE');
define('APP_TAGLINE', 'World From Device');
define('APP_PHONE', '0812-3456-7890');
define('APP_WA', '6281234567890');
define('APP_EMAIL', 'halo@nafaistore.id');
define('APP_ADDRESS', 'Jl. Teknologi No. 88, Lowokwaru, Kota Malang, Jawa Timur');

// Base URL otomatis mendeteksi protokol, host, dan subfolder
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443)) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME']));
// Hilangkan subfolder seperti /admin atau /auth jika dipanggil dari dalam
$rootFolder = preg_replace('/(\/(admin|auth)(\/.*)?)$/', '', $scriptDir);
$rootFolder = rtrim($rootFolder, '/');

define('BASE_URL', $protocol . $host . $rootFolder . '/');
