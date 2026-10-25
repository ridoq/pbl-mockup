<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

header('Location: ' . base_url('admin/blog/index.php?msg=sukses'));
exit;
