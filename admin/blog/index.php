<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Kelola Blog Edukasi — Admin NAFA iSTORE';
$admin_page = 'blog';
?>
<!doctype html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($page_title) ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="<?= asset('js/config/tailwind.config.js') ?>"></script>
    <link rel="stylesheet" href="<?= asset('css/main.css') ?>" />
</head>
<body class="flex min-h-screen bg-silver-100 font-sans text-ink selection:bg-cream">
    <?php require_once __DIR__ . '/../../includes/sidebar-admin.php'; ?>

    <div class="flex flex-1 flex-col overflow-hidden">
        <header class="flex h-16 items-center justify-between border-b border-silver-200 bg-white px-8">
            <h1 class="font-display text-xl font-bold">Artikel Blog & Edukasi</h1>
            <a href="<?= base_url('admin/blog/tambah.php') ?>" class="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800">
                + Tulis Artikel Baru
            </a>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead class="border-b border-silver-200 text-xs uppercase tracking-wider text-neutral-400">
                            <tr>
                                <th class="pb-3 font-semibold">Judul Artikel</th>
                                <th class="pb-3 font-semibold">Kategori</th>
                                <th class="pb-3 font-semibold">Waktu Baca</th>
                                <th class="pb-3 font-semibold text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-silver-200 text-neutral-600">
                            <tr>
                                <td class="py-4 font-medium text-ink">Cara Merawat Battery Health iPhone Biar Awet Bertahun-tahun</td>
                                <td class="py-4"><span class="rounded-full bg-cream px-2.5 py-0.5 text-xs font-semibold text-ink">Perawatan</span></td>
                                <td class="py-4 text-xs">4 menit baca</td>
                                <td class="py-4 text-right space-x-2">
                                    <a href="<?= base_url('admin/blog/edit.php?id=1') ?>" class="text-xs font-semibold text-neutral-600 hover:text-ink">Edit</a>
                                    <a href="<?= base_url('admin/blog/proses.php?action=delete&id=1') ?>" onclick="return confirm('Hapus artikel?')" class="text-xs font-semibold text-red-600 hover:text-red-700">Hapus</a>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4 font-medium text-ink">Panduan Cek iPhone Second: 3uTools All Green & Anti-Bypass</td>
                                <td class="py-4"><span class="rounded-full bg-cream px-2.5 py-0.5 text-xs font-semibold text-ink">Panduan</span></td>
                                <td class="py-4 text-xs">6 menit baca</td>
                                <td class="py-4 text-right space-x-2">
                                    <a href="<?= base_url('admin/blog/edit.php?id=2') ?>" class="text-xs font-semibold text-neutral-600 hover:text-ink">Edit</a>
                                    <a href="<?= base_url('admin/blog/proses.php?action=delete&id=2') ?>" onclick="return confirm('Hapus artikel?')" class="text-xs font-semibold text-red-600 hover:text-red-700">Hapus</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
