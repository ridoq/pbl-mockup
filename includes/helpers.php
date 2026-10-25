<?php
/**
 * NAFA iSTORE — Kumpulan Fungsi Pembantu (Helpers)
 * PBL SMT3 SIB Polinema
 */

require_once __DIR__ . '/../config/app.php';

/**
 * Mengembalikan URL dasar dengan path opsional
 */
function base_url($path = '') {
    return BASE_URL . ltrim($path, '/');
}

/**
 * Mengembalikan path aset publik (css, js, img)
 */
function asset($path = '') {
    return BASE_URL . 'assets/' . ltrim($path, '/');
}

/**
 * Format angka ke mata uang Rupiah
 */
function format_rupiah($nominal) {
    return 'Rp ' . number_format((float)$nominal, 0, ',', '.');
}

/**
 * Cek apakah halaman aktif untuk styling navigasi
 */
function is_active($targetPage, $currentPage, $activeClass = 'font-semibold text-ink', $inactiveClass = 'transition hover:text-ink') {
    return ($targetPage === $currentPage) ? $activeClass : $inactiveClass;
}

/**
 * Sanitasi string masukan form untuk mencegah XSS
 */
function sanitize($input) {
    if (is_array($input)) {
        return array_map('sanitize', $input);
    }
    return htmlspecialchars(trim((string)$input), ENT_QUOTES, 'UTF-8');
}
