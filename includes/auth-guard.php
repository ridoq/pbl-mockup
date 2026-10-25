<?php
/**
 * NAFA iSTORE — Middleware & Auth Guard
 * PBL SMT3 SIB Polinema
 */

require_once __DIR__ . '/../config/app.php';
require_once __DIR__ . '/helpers.php';

/**
 * Pastikan pengguna sudah login, jika belum lempar ke halaman login
 */
function require_auth($allowed_roles = []) {
    if (empty($_SESSION['user_id'])) {
        header('Location: ' . base_url('auth/login.php?redirect=' . urlencode($_SERVER['REQUEST_URI'])));
        exit;
    }

    if (!empty($allowed_roles)) {
        $user_role = $_SESSION['user_role'] ?? 'customer';
        if (!in_array($user_role, (array)$allowed_roles)) {
            http_response_code(403);
            die('Akses Ditolak: Anda tidak memiliki izin untuk mengakses halaman ini.');
        }
    }
}

/**
 * Cek apakah pengguna saat ini berstatus login
 */
function is_logged_in() {
    return !empty($_SESSION['user_id']);
}

/**
 * Ambil data user yang sedang login dari session
 */
function current_user() {
    if (!is_logged_in()) return null;
    return [
        'id'    => $_SESSION['user_id'] ?? null,
        'nama'  => $_SESSION['user_nama'] ?? 'Pengguna',
        'email' => $_SESSION['user_email'] ?? '',
        'role'  => $_SESSION['user_role'] ?? 'customer',
    ];
}
