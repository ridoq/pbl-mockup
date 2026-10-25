<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$action = $_GET['action'] ?? '';

// Operasi CRUD produk (disiapkan untuk update data/products.json atau Database MySQL)
header('Location: ' . base_url('admin/produk/index.php?msg=sukses'));
exit;
